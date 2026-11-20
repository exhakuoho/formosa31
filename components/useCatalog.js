"use client";
import { useEffect, useMemo, useState, useSyncExternalStore } from "react";

function subscribe(update) {
  window.addEventListener("popstate", update);
  return () => window.removeEventListener("popstate", update);
}
const getSearch = () => window.location.search;
const serverSearch = () => "";
const filters = ["q", "kw", "brand", "series", "budget", "size", "sort"];
function movementMatches(p, k) {
  if (k === "機械" || k === "石英") {
    if (/石英|quartz/i.test(p.movement)) return k === "石英";
    if (/機械|自動|手動上[鍊鏈]|automatic|mechanical|manual.wind/i.test(p.movement)) return k === "機械";
  }
  return p.kw.includes(k);
}
function price(p) {
  const match = /^NT\$\s*([\d,]+)$/.exec(p.price);
  return match ? Number(match[1].replaceAll(",", "")) : null;
}
function diameter(size) {
  if (/\d\s*(?:mm\s*)?[x×*]\s*\d/i.test(size)) return null;
  const match = /^(?:錶徑|直徑|Ø|⌀)?\s*(\d+(?:\.\d+)?)\s*(?:mm|毫米|公釐)/i.exec(size);
  return match ? Number(match[1]) : null;
}
export default function useCatalog({products, total, page, pageSize}) {
  const search = useSyncExternalStore(subscribe, getSearch, serverSearch);
  const query = useMemo(() => new URLSearchParams(search), [search]);
  const filtered = filters.some(key => query.has(key));
  const [index, setIndex] = useState(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    if (!filtered || index) return;
    const ctrl = new AbortController();
    fetch("/catalog-index.json", {signal: ctrl.signal}).then(r => {
      if (!r.ok) throw Error();
      return r.json();
    }).then(data => {setIndex(data);setError(false)}).catch(() => {if (!ctrl.signal.aborted) setError(true)});
    return () => ctrl.abort();
  }, [filtered,index,attempt]);
  function apply(values) {
    const next = new URLSearchParams(query);
    for (const [key, value] of Object.entries(values)) {
      next.delete(key);
      for (const item of [].concat(value)) if (item) next.append(key, item);
    }
    next.delete("p");
    const value = next.toString();
    window.history.replaceState(window.history.state, "", location.pathname + (value ? "?" + value : ""));
    window.dispatchEvent(new Event("popstate"));
  }
  const matches = useMemo(() => {
    if (!filtered || !index) return products;
    const q = (query.get("q") || "").trim().toLowerCase();
    const [brand,series,budget,size,sort] = ["brand","series","budget","size","sort"].map(k=>query.get(k));
    const kw = query.getAll("kw");
    const found = index.filter(p => {
      const amount = price(p), mm = diameter(p.size);
      return (!brand || brand === p.brand) && (!series || p.series === series) &&
        kw.every(k => movementMatches(p,k)) &&
        (!q || [p.brand,p.brandZh,p.model,p.line,p.movement,...p.kw].join(" ").toLowerCase().includes(q)) &&
        (!budget || (budget === "inquire" ? amount === null : amount !== null && amount < Number(budget))) &&
        (!size || (mm !== null && (size === "small" ? mm < 36 : size === "medium" ? mm >= 36 && mm <= 40 : mm > 40)));
    });
    if (sort) found.sort((a,b) => {
      const left = price(a), right = price(b);
      if (left === null || right === null) return Number(left === null) - Number(right === null);
      return sort === "asc" ? left - right : right - left;
    });
    return found;
  }, [products,filtered,index,query]);
  const count = filtered ? matches.length : total;
  const pages = Math.max(1,Math.ceil(count / pageSize));
  const requested = Number(query.get("p"));
  const current = filtered ? Math.min(pages,Math.max(1,Number.isSafeInteger(requested)?requested:1)) : page;
  function pageLink(n) {
    if (!filtered) return n > 1 ? "/watches/page/" + n : "/watches";
    const q = new URLSearchParams(query); q.set("p",String(n));
    return "/watches?" + q.toString();
  }
  return {query,apply,count,pages,current,pageLink,error,loading:filtered && !index,
    retry:()=>{setError(false);setAttempt(n=>n+1)},
    visible:filtered ? matches.slice((current-1)*pageSize,current*pageSize) : products};
}
