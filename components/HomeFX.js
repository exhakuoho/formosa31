"use client";

import { useEffect } from "react";

/**
 * HomeFX — progressive-enhancement interaction layer for the home page.
 *
 * Mount once (e.g. at the end of app/page.js). It wires every element that
 * carries one of the data-* hooks below. All effects degrade gracefully:
 * without JS (or with prefers-reduced-motion) the page renders fully visible
 * and static — nothing is permanently hidden.
 *
 *   [data-reveal]      scroll-reveal (opacity + translateY). optional data-delay (ms)
 *   [data-num]         parallax ghost number
 *   [data-feature]     core-advantage block hover (brighten number + extend rule)
 *   [data-glow]        cursor-following gold spotlight (needs child [data-glow-layer])
 *   [data-tilt]        subtle 3D tilt on hover
 *   [data-svc]         bento service cell hover (border + lift)
 *   [data-magnetic]    magnetic button (follows cursor within its <a> host)
 *   [data-logo]        logo trust-wall hover reveal (needs [data-logo-name]/[data-logo-reveal])
 *   [data-ba]          before/after slider (needs [data-ba-top]/[data-ba-handle])
 */
export default function HomeFX() {
  useEffect(() => {
    const EASE = "cubic-bezier(.16,1,.3,1)";
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups = [];
    const on = (el, ev, fn, opts) => { el.addEventListener(ev, fn, opts); cleanups.push(() => el.removeEventListener(ev, fn, opts)); };

    // ---------- scroll reveal ----------
    const reveals = [...document.querySelectorAll("[data-reveal]")];
    if (!reduced) {
      reveals.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(28px)";
        el.style.transition = "opacity .8s " + EASE + ", transform .8s " + EASE;
      });
    }
    const show = (el) => { el.__shown = true; el.style.opacity = "1"; el.style.transform = "none"; };

    // ---------- parallax numbers ----------
    const nums = [...document.querySelectorAll("[data-num]")];

    const onScroll = () => {
      const vh = window.innerHeight;
      if (!reduced) {
        reveals.forEach((el) => {
          if (el.__shown) return;
          const r = el.getBoundingClientRect();
          if (r.top < vh * 0.92 && r.bottom > -40) {
            const d = parseInt(el.getAttribute("data-delay") || "0", 10);
            el.__shown = true;
            setTimeout(() => show(el), d);
          }
        });
        nums.forEach((el) => {
          const r = el.getBoundingClientRect();
          const rel = (r.top + r.height / 2 - vh / 2) / vh;
          el.style.marginTop = (rel * -34) + "px";
        });
      }
    };
    on(window, "scroll", onScroll, { passive: true });
    onScroll();
    [100, 300, 600, 1100].forEach((t) => setTimeout(onScroll, t));
    // safety: never leave content hidden
    const safety = setTimeout(() => reveals.forEach((el) => { el.style.transition = "none"; show(el); }), 1800);
    cleanups.push(() => clearTimeout(safety));

    if (!reduced) {
      // ---------- core-advantage hover ----------
      document.querySelectorAll("[data-feature]").forEach((block) => {
        const num = block.querySelector("[data-num]");
        const rule = block.querySelector("[data-rule]");
        on(block, "mouseenter", () => { if (num) num.style.color = "rgba(194,164,104,0.17)"; if (rule) rule.style.width = "120px"; });
        on(block, "mouseleave", () => { if (num) num.style.color = "rgba(194,164,104,0.07)"; if (rule) rule.style.width = "48px"; });
      });

      // ---------- glow spotlight ----------
      document.querySelectorAll("[data-glow]").forEach((card) => {
        const layer = card.querySelector("[data-glow-layer]");
        if (!layer) return;
        on(card, "mousemove", (ev) => {
          const r = card.getBoundingClientRect();
          layer.style.background = "radial-gradient(420px circle at " + (ev.clientX - r.left) + "px " + (ev.clientY - r.top) + "px, rgba(194,164,104,0.13), transparent 68%)";
          layer.style.opacity = "1";
        });
        on(card, "mouseleave", () => { layer.style.opacity = "0"; });
      });

      // ---------- 3D tilt ----------
      document.querySelectorAll("[data-tilt]").forEach((card) => {
        card.style.transition = "transform .3s " + EASE;
        card.style.transformStyle = "preserve-3d";
        on(card, "mousemove", (ev) => {
          const r = card.getBoundingClientRect();
          const px = (ev.clientX - r.left) / r.width - 0.5;
          const py = (ev.clientY - r.top) / r.height - 0.5;
          card.style.transform = "perspective(1000px) rotateY(" + (px * 5).toFixed(2) + "deg) rotateX(" + (-py * 5).toFixed(2) + "deg) translateY(-3px)";
        });
        on(card, "mouseleave", () => { card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0)"; });
      });

      // ---------- bento service cells ----------
      document.querySelectorAll("[data-svc]").forEach((card) => {
        card.style.transition = "border-color .4s, transform .4s " + EASE;
        on(card, "mouseenter", () => { card.style.borderColor = "rgba(194,164,104,0.5)"; card.style.transform = "translateY(-3px)"; });
        on(card, "mouseleave", () => { card.style.borderColor = "rgba(255,255,255,0.10)"; card.style.transform = "translateY(0)"; });
      });

      // ---------- magnetic buttons (subtle: only nudges near the button, capped travel) ----------
      document.querySelectorAll("[data-magnetic]").forEach((btn) => {
        btn.style.transition = "transform .25s " + EASE;
        btn.style.willChange = "transform";
        const host = btn; // scope to the button itself, not the whole card
        const CAP = 7;
        const clamp = (v) => Math.max(-CAP, Math.min(CAP, v));
        on(host, "mousemove", (ev) => {
          const r = btn.getBoundingClientRect();
          const x = ev.clientX - r.left - r.width / 2;
          const y = ev.clientY - r.top - r.height / 2;
          btn.style.transform = "translate(" + clamp(x * 0.12).toFixed(1) + "px," + clamp(y * 0.18).toFixed(1) + "px)";
        });
        on(host, "mouseleave", () => { btn.style.transform = "translate(0,0)"; });
      });

      // ---------- logo trust-wall hover reveal ----------
      document.querySelectorAll("[data-logo]").forEach((tile) => {
        const rev = tile.querySelector("[data-logo-reveal]");
        const name = tile.querySelector("[data-logo-name]");
        on(tile, "mouseenter", () => {
          if (rev) { rev.style.opacity = "1"; rev.style.transform = "translateY(0)"; }
          if (name) name.style.color = "#F4F2EC";
          tile.style.borderColor = "rgba(194,164,104,0.5)";
          tile.style.background = "#0F1826";
          tile.style.transform = "translateY(-4px)";
        });
        on(tile, "mouseleave", () => {
          if (rev) { rev.style.opacity = "0"; rev.style.transform = "translateY(12px)"; }
          if (name) name.style.color = "#828D9C";
          tile.style.borderColor = "rgba(255,255,255,0.10)";
          tile.style.background = "transparent";
          tile.style.transform = "translateY(0)";
        });
      });
    }

    // ---------- before / after slider (works regardless of reduced-motion) ----------
    const ba = document.querySelector("[data-ba]");
    if (ba) {
      const top = ba.querySelector("[data-ba-top]");
      const handle = ba.querySelector("[data-ba-handle]");
      let dragging = false;
      const setPos = (clientX) => {
        const r = ba.getBoundingClientRect();
        let p = (clientX - r.left) / r.width;
        p = Math.max(0, Math.min(1, p));
        if (top) top.style.width = (p * 100) + "%";
        if (handle) handle.style.left = (p * 100) + "%";
      };
      on(ba, "mousedown", (e) => { dragging = true; setPos(e.clientX); });
      on(window, "mousemove", (e) => { if (dragging) setPos(e.clientX); });
      on(window, "mouseup", () => { dragging = false; });
      on(ba, "touchstart", (e) => { dragging = true; setPos(e.touches[0].clientX); }, { passive: true });
      on(ba, "touchmove", (e) => { if (dragging) setPos(e.touches[0].clientX); }, { passive: true });
      on(ba, "touchend", () => { dragging = false; });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
