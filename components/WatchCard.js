import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";

export default function WatchCard({ product, showKeywords = false }) {
  const p = product;
  return (
    <Link
      href={`/watches/${p.id}`}
      className="f31-card"
      style={{
        display: "block",
        background: "var(--ink)",
        border: "1px solid var(--line)",
        cursor: "pointer",
        transition: "border-color .3s",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div style={{ position: "relative" }}>
        <PlaceholderImage
          src={p.images && p.images[0]}
          alt={`${p.brand} ${p.line}`}
          label="腕錶去背圖"
          style={{ width: "100%", height: 320, background: "#0b1018" }}
        />
        {p.tag ? (
          <span
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              fontFamily: "var(--font-jost)",
              fontSize: 10,
              letterSpacing: 2,
              color: "var(--ink)",
              background: "var(--gold)",
              padding: "5px 10px",
              textTransform: "uppercase",
            }}
          >
            {p.tag}
          </span>
        ) : null}
      </div>
      <div style={{ padding: 24 }}>
        <div style={{ fontFamily: "var(--font-jost)", fontSize: 11, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase" }}>
          {p.brand}
        </div>
        <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 400, fontSize: 18, margin: "8px 0 4px", letterSpacing: "0.5px" }}>
          {p.line}
        </div>
        <div style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "1px", marginBottom: showKeywords ? 14 : 18 }}>
          Ref. {p.model}
        </div>
        {showKeywords ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
            {(p.kw || []).slice(0, 3).map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "var(--font-noto-sans-tc)",
                  fontSize: 11,
                  color: "var(--silver)",
                  border: "1px solid var(--line)",
                  borderRadius: 30,
                  padding: "3px 10px",
                  whiteSpace: "nowrap",
                  flex: "none",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px 14px",
            fontSize: 12,
            color: "var(--silver)",
            borderTop: "1px solid var(--line)",
            paddingTop: 16,
          }}
        >
          <div>
            <span style={{ color: "var(--muted)" }}>錶徑</span> {p.size}
          </div>
          <div>
            <span style={{ color: "var(--muted)" }}>機芯</span> {p.movement}
          </div>
          <div style={{ gridColumn: "1/3" }}>
            <span style={{ color: "var(--muted)" }}>材質</span> {p.material}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
          <span style={{ fontFamily: "var(--font-jost)", fontSize: 17, color: "var(--cream)" }}>{p.price}</span>
          <span style={{ fontSize: 12, letterSpacing: "1px", color: "var(--gold)" }}>查看詳情 →</span>
        </div>
      </div>
    </Link>
  );
}
