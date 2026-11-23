"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { STORE } from "@/lib/seedData";

// The contact / appointment form posts directly to Web3Forms, which emails
// each submission to the shop's inbox — no database, nothing to keep
// running. Set NEXT_PUBLIC_WEB3FORMS_KEY to your free access key
// (see SETUP.md). Until that key exists the form shows a "call us / email
// us" fallback so the site still works.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const fieldStyle = (borderOpacity) => ({
  background: "transparent",
  border: "none",
  borderBottom: `1px solid rgba(255,255,255,${borderOpacity})`,
  color: "var(--cream)",
  padding: "12px 2px",
  fontSize: 14,
  fontFamily: "var(--font-noto-sans-tc)",
  outline: "none",
  width: "100%",
});

export default function InquiryForm({ variant = "contact" }) {
  return <Suspense fallback={<a href={STORE.phoneHref}>致電門市 {STORE.phone}</a>}><InquiryContext variant={variant} /></Suspense>;
}
function InquiryContext({variant}) {
  const query = useSearchParams();
  const id = (query.get("watch") || "").slice(0,100);
  const name = (query.get("name") || query.get("brand") || "").slice(0,160);
  const ref = (query.get("ref") || "").slice(0,100);
  const url = id ? "https://formosa31.com/watches/" + encodeURIComponent(id) : "";
  const subject = [name,ref].filter(Boolean).join(" · ");
  return <InquiryFields key={subject+url} variant={variant} subject={subject} url={url} />;
}
function InquiryFields({variant,subject,url}) {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const border = variant === "home" ? 0.1 : 0.16;

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!WEB3FORMS_KEY) {
      setStatus({
        state: "error",
        message: `線上表單尚未啟用，請直接來電 ${STORE.phone} 或寄信至 ${STORE.email}，謝謝！`,
      });
      return;
    }

    setStatus({ state: "sending", message: "" });
    if (url) data.append("商品網址", url);
    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", `FORMOSA31 網站詢價 ${subject}（${variant === "home" ? "首頁" : "聯絡頁"}）`);
    data.append("from_name", "FORMOSA31 網站表單");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        form.reset();
        setStatus({ state: "ok", message: "已收到您的訊息，門市專人將盡快與您聯繫！" });
      } else {
        setStatus({ state: "error", message: `送出時發生問題，請直接來電 ${STORE.phone}。` });
      }
    } catch {
      setStatus({ state: "error", message: `送出時發生問題，請直接來電 ${STORE.phone}。` });
    }
  }

  if (!WEB3FORMS_KEY) {
    const email = "mailto:"+STORE.email+"?"+new URLSearchParams({subject:"FORMOSA31 賞錶／詢價 "+subject,body:[subject,url].filter(Boolean).join("\n")}).toString().replaceAll("+","%20");
    return <div>{subject && <p>{subject}</p>}
      <p>可致電門市，或用電子郵件詢價。</p><div className="inquiry-links">
        <a href={STORE.phoneHref}>致電 {STORE.phone}</a><a href={email}>以 Email 詢價</a>
      </div></div>;
  }
  const sending = status.state === "sending";

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: variant === "home" ? 18 : 20 }}>
      {variant === "contact" ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
          <input name="姓名" placeholder="姓名 Name" style={fieldStyle(border)} required />
          <input name="電話" placeholder="電話 Phone" style={fieldStyle(border)} required />
        </div>
      ) : (
        <>
          <input name="姓名" placeholder="姓名 Name" style={fieldStyle(border)} required />
          <input name="電話" placeholder="電話 Phone" style={fieldStyle(border)} required />
        </>
      )}

      {variant === "contact" ? <input name="email" type="email" placeholder="Email" style={fieldStyle(border)} /> : null}

      <input
        name="諮詢項目"
        defaultValue={subject}
        placeholder={variant === "home" ? "有興趣的錶款 / 服務 Interest" : "諮詢項目（錶款 / 維修 / 保養 / 送禮）"}
        style={fieldStyle(border)}
      />

      <textarea
        name="需求說明"
        placeholder={variant === "home" ? "備註 Message" : "需求說明 Message"}
        rows={variant === "home" ? 3 : 4}
        style={{ ...fieldStyle(border), resize: "none" }}
      />

      <button
        type="submit"
        disabled={sending}
        style={{
          fontFamily: "var(--font-jost)",
          fontSize: variant === "home" ? 12 : 13,
          letterSpacing: 2,
          color: "var(--ink)",
          background: "var(--gold)",
          border: "none",
          padding: variant === "home" ? 15 : 16,
          cursor: sending ? "default" : "pointer",
          marginTop: 8,
          textTransform: "uppercase",
          opacity: sending ? 0.7 : 1,
        }}
      >
        {sending ? "送出中…" : "送出預約 · Submit"}
      </button>

      {status.message ? (
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-noto-sans-tc)",
            fontSize: 13,
            color: status.state === "ok" ? "#06C755" : "#e0a458",
          }}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
