"use client";

import { useMemo, useState } from "react";
import WatchCard from "./WatchCard";
import { KEYWORD_LIST } from "@/lib/seedData";

const chipBase = {
  fontFamily: "var(--font-noto-sans-tc)",
  fontSize: 13,
  letterSpacing: "1px",
  padding: "9px 18px",
  cursor: "pointer",
  whiteSpace: "nowrap",
  border: "none",
  background: "transparent",
};

const kwChipBase = {
  fontFamily: "var(--font-noto-sans-tc)",
  fontSize: 12,
  letterSpacing: "1px",
  padding: "7px 15px",
  cursor: "pointer",
  whiteSpace: "nowrap",
  borderRadius: 40,
  border: "none",
  background: "transparent",
};

export default function WatchListClient({ products, brandOptions }) {
  const [searchText, setSearchText] = useState("");
  const [activeBrand, setActiveBrand] = useState("全部 All");
  const [activeKw, setActiveKw] = useState([]);

  const listResults = useMemo(() => {
    const q = searchText.trim().toLowerCase();
    return products.filter((p) => {
      const matchQ = !q || `${p.brand} ${p.brandZh} ${p.line} ${p.model} ${(p.kw || []).join(" ")}`.toLowerCase().includes(q);
      const matchB = activeBrand === "全部 All" || p.brand === activeBrand;
      const matchK = activeKw.length === 0 || activeKw.every((k) => (p.kw || []).includes(k));
      return matchQ && matchB && matchK;
    });
  }, [products, searchText, activeBrand, activeKw]);

  const toggleKw = (k) => {
    setActiveKw((cur) => (cur.includes(k) ? cur.filter((x) => x !== k) : [...cur, k]));
  };

  const clearFilters = () => {
    setSearchText("");
    setActiveBrand("全部 All");
    setActiveKw([]);
  };

  return (
    <>
      {/* page title */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 40px 26px" }}>
        <div style={{ fontFamily: "var(--font-jost)", fontSize: 12, letterSpacing: 3, color: "#828D9C", textTransform: "uppercase", marginBottom: 14 }}>
          Home · Watches
        </div>
        <h1 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 40, margin: "0 0 22px", letterSpacing: "1px" }}>
          搜尋心儀錶款 <span style={{ fontFamily: "var(--font-jost)", fontWeight: 300, color: "#828D9C", fontSize: 22 }}>Find Your Watch</span>
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            maxWidth: 560,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "#0F1826",
            padding: "4px 4px 4px 18px",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#828D9C" strokeWidth="1.5">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4-4" />
          </svg>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="輸入品牌、型號或關鍵字（如 潛水、商務、送禮）"
            style={{ flex: 1, background: "transparent", border: "none", color: "#F4F2EC", fontSize: 15, fontFamily: "var(--font-noto-sans-tc)", outline: "none", padding: "12px 0" }}
          />
          <button
            onClick={clearFilters}
            style={{ fontFamily: "var(--font-noto-sans-tc)", fontSize: 12, letterSpacing: "1px", color: "#828D9C", background: "transparent", border: "none", cursor: "pointer", padding: "12px 16px", whiteSpace: "nowrap" }}
          >
            清除
          </button>
        </div>
      </section>

      {/* brand filter */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px 18px" }}>
        <div style={{ fontFamily: "var(--font-jost)", fontSize: 11, letterSpacing: 2, color: "#828D9C", textTransform: "uppercase", marginBottom: 12 }}>品牌 Brand</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {["全部 All", ...brandOptions].map((b) => {
            const active = activeBrand === b;
            return (
              <button
                key={b}
                onClick={() => setActiveBrand(b)}
                style={{
                  ...chipBase,
                  border: `1px solid ${active ? "#C2A468" : "rgba(255,255,255,0.16)"}`,
                  background: active ? "rgba(194,164,104,0.12)" : "transparent",
                  color: active ? "#F4F2EC" : "#AEB6C2",
                }}
              >
                {b}
              </button>
            );
          })}
        </div>
      </section>

      {/* keyword filter */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px 30px", borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
        <div style={{ fontFamily: "var(--font-jost)", fontSize: 11, letterSpacing: 2, color: "#828D9C", textTransform: "uppercase", margin: "18px 0 12px" }}>
          關鍵字 Keywords · 可複選
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {KEYWORD_LIST.map((k) => {
            const active = activeKw.includes(k);
            return (
              <button
                key={k}
                onClick={() => toggleKw(k)}
                style={{
                  ...kwChipBase,
                  border: `1px solid ${active ? "#C2A468" : "rgba(255,255,255,0.16)"}`,
                  background: active ? "#C2A468" : "transparent",
                  color: active ? "#0A0F18" : "#AEB6C2",
                }}
              >
                {k}
              </button>
            );
          })}
        </div>
      </section>

      {/* result count */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "28px 40px 0" }}>
        <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontSize: 13, color: "#828D9C", letterSpacing: "1px" }}>
          共 <span style={{ color: "#C2A468" }}>{listResults.length}</span> 款符合條件
        </div>
      </section>

      {/* grid */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "24px 40px 100px" }}>
        {listResults.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 28 }}>
            {listResults.map((w) => (
              <WatchCard key={w.id} product={w} showKeywords />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "90px 20px", border: "1px dashed rgba(255,255,255,0.14)" }}>
            <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontSize: 17, color: "#AEB6C2", marginBottom: 10 }}>找不到符合條件的錶款</div>
            <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontSize: 13, color: "#828D9C", marginBottom: 24 }}>請調整關鍵字或品牌條件,或直接與門市聯繫為您尋錶。</div>
            <button
              onClick={clearFilters}
              style={{ fontFamily: "var(--font-jost)", fontSize: 12, letterSpacing: "2px", color: "#0A0F18", background: "#C2A468", border: "none", padding: "13px 28px", cursor: "pointer", textTransform: "uppercase" }}
            >
              清除篩選
            </button>
          </div>
        )}
      </section>
    </>
  );
}
