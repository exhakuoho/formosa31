import Image from "next/image";
import { STORE } from "@/lib/seedData";

export default function Footer() {
  return (
    <footer style={{ background: "#070a10", borderTop: "1px solid var(--line)", padding: "54px 0" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 30,
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 11,
              fontFamily: "var(--font-jost)",
              fontWeight: 500,
              letterSpacing: 5,
              fontSize: 20,
              marginBottom: 10,
            }}
          >
            <Image
              src="/images/logo-formosa31.png"
              alt="FORMOSA31"
              width={75}
              height={80}
              style={{ height: 40, width: "auto", display: "block" }}
            />
            FORMOSA<span style={{ color: "var(--gold)" }}>31</span>
          </div>
          <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 13, color: "var(--muted)", lineHeight: 1.9 }}>
            {STORE.legalName} · {STORE.legalNameEn}
            <br />
            {STORE.address} · {STORE.phone}
          </div>
        </div>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <div style={{ fontFamily: "var(--font-jost)", fontSize: 11, letterSpacing: 2, color: "#4a5462", textTransform: "uppercase" }}>
            © 2026 FORMOSA31 · Precision · Craftsmanship · Trust
          </div>
        </div>
      </div>
    </footer>
  );
}
