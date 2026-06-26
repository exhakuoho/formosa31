import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlaceholderImage from "@/components/PlaceholderImage";
import { getProductById, getAllProductIds } from "@/lib/products";
import { productSpecRows, productDescription } from "@/lib/seedData";

// Pre-render one static page per published watch at build time.
export function generateStaticParams() {
  return getAllProductIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const p = await getProductById(id);
  if (!p) return {};
  return {
    title: `${p.brand} ${p.line}`,
    description: productDescription(p),
  };
}

export default async function WatchDetailPage({ params }) {
  const { id } = await params;
  const p = await getProductById(id);
  if (!p) notFound();

  const spec = productSpecRows(p);
  const description = productDescription(p);
  const images = p.images || [];

  return (
    <div style={{ background: "#0A0F18", color: "#F4F2EC", minHeight: "100vh" }}>
      <Header active="detail" />

      {/* breadcrumb */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 40px 0" }}>
        <div style={{ fontFamily: "var(--font-jost)", fontSize: 12, letterSpacing: 2, color: "#828D9C" }}>
          <Link href="/" style={{ cursor: "pointer", color: "inherit", textDecoration: "none" }}>
            HOME
          </Link>{" "}
          ·{" "}
          <Link href="/watches" style={{ cursor: "pointer", color: "inherit", textDecoration: "none" }}>
            WATCHES
          </Link>{" "}
          · <span style={{ color: "#C2A468" }}>{p.brand} {p.line}</span>
        </div>
      </section>

      {/* gallery + info */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "36px 40px 80px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 64 }}>
        <div>
          <PlaceholderImage
            src={images[0]}
            alt={`${p.brand} ${p.line}`}
            label="商品主圖（大）"
            style={{ width: "100%", height: 520, background: "#0F1826", border: "1px solid rgba(255,255,255,0.10)" }}
            priority
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 14, marginTop: 14 }}>
            {[1, 2, 3].map((i) => (
              <PlaceholderImage
                key={i}
                src={images[i]}
                alt={`${p.brand} ${p.line} 細節圖`}
                label="細節圖"
                style={{ width: "100%", height: 140, background: "#0F1826", border: "1px solid rgba(255,255,255,0.10)" }}
              />
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontFamily: "var(--font-jost)", fontSize: 12, letterSpacing: 4, color: "#C2A468", textTransform: "uppercase" }}>
            {p.brand} · {p.brandZh}
          </div>
          <h1 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 34, margin: "12px 0 6px", letterSpacing: "0.5px" }}>{p.line}</h1>
          <div style={{ fontFamily: "var(--font-jost)", fontSize: 13, letterSpacing: "1px", color: "#828D9C" }}>Ref. {p.model}</div>

          <div style={{ display: "flex", alignItems: "baseline", gap: 14, margin: "26px 0", padding: "22px 0", borderTop: "1px solid rgba(255,255,255,0.10)", borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
            <span style={{ fontFamily: "var(--font-jost)", fontWeight: 400, fontSize: 32, color: "#F4F2EC" }}>{p.price}</span>
            <span style={{ fontFamily: "var(--font-noto-sans-tc)", fontSize: 13, color: "#828D9C" }}>含稅 · 原廠正品 · 歡迎來電議價</span>
          </div>

          <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 15, lineHeight: 2.05, color: "#AEB6C2", margin: "0 0 22px" }}>{description}</p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 26 }}>
            {(p.kw || []).map((k) => (
              <span key={k} style={{ fontFamily: "var(--font-noto-sans-tc)", fontSize: 12, color: "#C2A468", border: "1px solid rgba(194,164,104,0.4)", borderRadius: 30, padding: "5px 14px" }}>
                {k}
              </span>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "16px 28px", marginBottom: 32 }}>
            <QuickSpec label="錶徑 Case" value={p.size} />
            <QuickSpec label="機芯 Movement" value={p.movement} />
            <QuickSpec label="材質 Material" value={p.material} />
            <QuickSpec label="防水 Water" value={p.water} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Link
              href="/contact"
              style={{ fontFamily: "var(--font-jost)", fontSize: 13, letterSpacing: 2, color: "#0A0F18", background: "#C2A468", border: "none", padding: 17, cursor: "pointer", textTransform: "uppercase", textAlign: "center", textDecoration: "none" }}
            >
              聯絡詢價 · Enquire
            </Link>
            <div style={{ display: "flex", gap: 12 }}>
              <Link
                href="/contact"
                style={{ flex: 1, fontFamily: "var(--font-jost)", fontSize: 13, letterSpacing: 2, color: "#F4F2EC", background: "transparent", border: "1px solid rgba(255,255,255,0.32)", padding: 16, cursor: "pointer", textTransform: "uppercase", textAlign: "center", textDecoration: "none" }}
              >
                預約門市賞錶
              </Link>
              <a
                href="#"
                style={{ flex: "none", fontFamily: "var(--font-jost)", fontSize: 13, letterSpacing: 2, color: "#06C755", border: "1px solid #06C755", padding: "16px 22px", textDecoration: "none", display: "flex", alignItems: "center", textTransform: "uppercase" }}
              >
                LINE
              </a>
            </div>
          </div>

          <div style={{ display: "flex", gap: 24, marginTop: 24, fontFamily: "var(--font-noto-sans-tc)", fontSize: 12, color: "#828D9C" }}>
            <span>✓ 原廠正品保證</span>
            <span>✓ 門市售後服務</span>
            <span>✓ 專業維修保養</span>
          </div>
        </div>
      </section>

      {/* spec table */}
      <section style={{ background: "#0F1826", borderTop: "1px solid rgba(255,255,255,0.10)", padding: "80px 0" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 40px" }}>
          <h2 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 26, margin: "0 0 32px", letterSpacing: "1px" }}>
            商品規格 <span style={{ fontFamily: "var(--font-jost)", color: "#828D9C", fontSize: 18 }}>Specifications</span>
          </h2>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
            {spec.map((row) => (
              <div key={row.label} style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 20, padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontSize: 13, color: "#828D9C", letterSpacing: "1px" }}>{row.label}</div>
                <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 400, fontSize: 14, color: "#F4F2EC" }}>{row.value}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ fontFamily: "var(--font-jost)", fontSize: 12, letterSpacing: 2, color: "#0A0F18", background: "#C2A468", border: "none", padding: "15px 30px", cursor: "pointer", textTransform: "uppercase", textDecoration: "none" }}>
              聯絡詢價
            </Link>
            <Link href="/watches" style={{ fontFamily: "var(--font-jost)", fontSize: 12, letterSpacing: 2, color: "#AEB6C2", background: "transparent", border: "1px solid rgba(255,255,255,0.2)", padding: "15px 30px", cursor: "pointer", textTransform: "uppercase", textDecoration: "none" }}>
              ← 返回列表
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function QuickSpec({ label, value }) {
  return (
    <div style={{ borderLeft: "2px solid #C2A468", paddingLeft: 14 }}>
      <div style={{ fontSize: 11, color: "#828D9C", letterSpacing: "1px" }}>{label}</div>
      <div style={{ fontSize: 15, marginTop: 3 }}>{value}</div>
    </div>
  );
}
