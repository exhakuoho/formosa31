import Image from "next/image";
import Link from "next/link";
import { STORE } from "@/lib/seedData";

const NAV = [
  { href: "/", label: "首頁", key: "home" },
  { href: "/watches", label: "精選錶款", key: "list" },
  { href: "/brand", label: "品牌", key: "brand" },
  { href: "/services", label: "服務", key: "services" },
  { href: "/contact", label: "聯絡", key: "contact" },
];

export default function Header({ active }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        background: "rgba(10,15,24,0.82)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 40px",
          height: 78,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            fontFamily: "var(--font-jost)",
            fontWeight: 500,
            letterSpacing: 5,
            fontSize: 21,
            textDecoration: "none",
          }}
        >
          <Image
            src="/images/logo-formosa31.png"
            alt="FORMOSA31"
            width={82}
            height={88}
            style={{ height: 44, width: "auto", display: "block" }}
            priority
          />
          FORMOSA<span style={{ color: "var(--gold)" }}>31</span>
        </Link>
        <nav style={{ display: "flex", gap: 38, fontSize: 13, letterSpacing: 1.5, color: "var(--silver)" }}>
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              style={{
                cursor: "pointer",
                color: active === item.key ? "var(--cream)" : "var(--silver)",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {active === "contact" ? (
          <a
            href={STORE.phoneHref}
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: 12,
              letterSpacing: 2,
              color: "var(--ink)",
              background: "var(--gold)",
              padding: "11px 22px",
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            {STORE.phone}
          </a>
        ) : (
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: 12,
              letterSpacing: 2,
              color: "var(--ink)",
              background: "var(--gold)",
              border: "none",
              padding: "11px 22px",
              cursor: "pointer",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            預約賞錶
          </Link>
        )}
      </div>
    </header>
  );
}
