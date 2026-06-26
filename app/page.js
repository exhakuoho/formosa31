import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WatchCard from "@/components/WatchCard";
import PlaceholderImage from "@/components/PlaceholderImage";
import StoreMap from "@/components/StoreMap";
import InquiryForm from "@/components/InquiryForm";
import { Icon } from "@/components/Icons";
import { getPublishedProducts } from "@/lib/products";
import { resolveMarketingImage } from "@/lib/marketingImages";
import { BRAND_TIERS, SERVICE_EDGE, SERVICES, TRUST, STORE } from "@/lib/seedData";

export default async function HomePage() {
  const products = await getPublishedProducts();
  const featured = products.slice(0, 6);
  const heroImg = resolveMarketingImage("home-hero");
  const aboutImg = resolveMarketingImage("home-about");

  return (
    <div style={{ background: "#0A0F18" }}>
      <Header active="home" />

      {/* hero */}
      <section
        style={{
          position: "relative",
          minHeight: "84vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <PlaceholderImage
          src={heroImg}
          label="拖入門市／腕錶主視覺大圖"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: "linear-gradient(90deg,rgba(7,10,16,0.94) 0%,rgba(7,10,16,0.72) 42%,rgba(7,10,16,0.30) 100%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "0 40px", width: "100%" }}>
          <div style={{ maxWidth: 620 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 26 }}>
              <span style={{ width: 46, height: 1, background: "var(--gold)" }} />
              <span style={{ fontFamily: "var(--font-jost)", fontSize: 12, letterSpacing: 5, color: "var(--gold)", textTransform: "uppercase" }}>
                Precision · Craftsmanship · Trust
              </span>
            </div>
            <h1
              style={{
                fontFamily: "var(--font-jost)",
                fontWeight: 300,
                fontSize: "clamp(40px,5.4vw,76px)",
                lineHeight: 1.04,
                margin: "0 0 8px",
                letterSpacing: "0.5px",
              }}
            >
              Timepieces
              <br />
              <span style={{ fontWeight: 500 }}>Worth Trusting</span>
            </h1>
            <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 21, letterSpacing: 3, color: "var(--cream)", margin: "18px 0 0" }}>
              精準工藝 · 值得信賴的時計選擇
            </p>
            <p
              style={{
                fontFamily: "var(--font-noto-sans-tc)",
                fontWeight: 300,
                fontSize: 15,
                lineHeight: 2,
                color: "var(--silver)",
                margin: "22px 0 40px",
                maxWidth: 480,
              }}
            >
              FORMOSA31 唯誠鐘錶 — 專注中高階腕錶的銷售、維修與保養。實體門市,正品保證,以專業與長期信任,陪伴每一只時計。
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/watches" style={btnPrimary}>
                查看精選錶款 · Watches
              </Link>
              <Link href="/contact" style={btnOutline}>
                預約賞錶 · Appointment
              </Link>
              <Link href="/contact" style={btnText}>
                聯絡門市
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* brand intro */}
      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "110px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: 80,
          alignItems: "center",
        }}
      >
        <div>
          <div style={eyebrow}>About FORMOSA31</div>
          <h2 style={h2Serif}>
            一間值得託付的
            <br />
            精品鐘錶門市
          </h2>
          <p style={bodyText}>
            FORMOSA31（唯誠鐘錶）座落於高雄左營,專營中高階腕錶之銷售、維修與保養。我們相信,一只好錶不只是時間的計量,更是工藝、傳承與信任的延續。
          </p>
          <p style={{ ...bodyText, marginBottom: 0 }}>
            從選錶諮詢、正品鑑定到售後維修,每一個環節都由門市專業人員親自把關,讓您安心擁有、長久珍藏。
          </p>
          <div style={{ display: "flex", gap: 48, marginTop: 42 }}>
            <Stat value="20" suffix="+" label="年鐘錶經驗" />
            <Stat value="100" suffix="%" label="正品保證" />
            <Stat value="1" suffix="on1" label="專人服務" />
          </div>
        </div>
        <PlaceholderImage src={aboutImg} label="拖入門市環境照" style={{ width: "100%", height: 480 }} />
      </section>

      {/* featured watches */}
      <section style={{ background: "var(--panel)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 50 }}>
            <div>
              <div style={eyebrow}>Featured</div>
              <h2 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 32, margin: 0, letterSpacing: "1px" }}>精選腕錶</h2>
            </div>
            <Link
              href="/watches"
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: 12,
                letterSpacing: 2,
                color: "var(--gold)",
                background: "transparent",
                border: "1px solid rgba(194,164,104,0.5)",
                padding: "12px 24px",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              查看全部 →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 28 }}>
            {featured.map((w) => (
              <WatchCard key={w.id} product={w} />
            ))}
          </div>
        </div>
      </section>

      {/* brand tiers */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <div style={{ ...eyebrow, textAlign: "center" }}>Our Brands</div>
          <h2 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 32, margin: "0 0 16px", letterSpacing: "1px" }}>主力品牌</h2>
          <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 16, lineHeight: 1.9, color: "var(--silver)", maxWidth: 600, margin: "0 auto" }}>
            精選中高階國際腕錶品牌，滿足商務、日常、送禮與收藏入門需求。
          </p>
        </div>
        {BRAND_TIERS.map((tier) => (
          <div key={tier.tier} style={{ marginTop: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 26 }}>
              <span style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 500, fontSize: 17, letterSpacing: "2px", color: "var(--cream)", whiteSpace: "nowrap" }}>
                {tier.tier}
              </span>
              <span style={{ fontFamily: "var(--font-jost)", fontSize: 11, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                {tier.tierEn}
              </span>
              <span style={{ flex: 1, height: 1, background: "var(--line)" }} />
              <span style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 13, color: "var(--muted)", textAlign: "right" }}>{tier.note}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(225px,1fr))", gap: 18 }}>
              {tier.brands.map((b) => (
                <Link
                  key={b.en}
                  href="/watches"
                  className="f31-brandTile"
                  style={{
                    border: "1px solid var(--line)",
                    padding: "28px 24px",
                    cursor: "pointer",
                    transition: "background .3s,border-color .3s",
                    background: "transparent",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-jost)", fontWeight: 500, fontSize: 19, letterSpacing: "1px", color: "var(--cream)" }}>{b.en}</div>
                  <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontSize: 13, color: "var(--gold)", letterSpacing: "1px", marginTop: -10 }}>{b.zh}</div>
                  <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 13, lineHeight: 1.85, color: "var(--silver)" }}>{b.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* service edge / differentiation */}
      <section style={{ background: "#070d16", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 60, alignItems: "start" }}>
            <div>
              <div style={eyebrow}>The FORMOSA31 Difference</div>
              <h2 style={{ ...h2Serif, fontSize: 30 }}>
                不只是賣錶 —
                <br />
                店內技師與終生售後
              </h2>
              <p style={{ ...bodyText, marginBottom: 0 }}>
                一般店家也能銷售 Longines、Rado、Mido，但 FORMOSA31 的不同，在於我們專注中高階品牌腕錶銷售，並以
                <span style={{ color: "var(--cream)" }}>店內專業維修技術</span>與<span style={{ color: "var(--cream)" }}>終生售後服務</span>
                ，讓每一次購買都更安心。
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
              {SERVICE_EDGE.map((e) => (
                <div key={e.en} style={{ background: "#070d16", padding: "30px 26px" }}>
                  <div style={{ color: "var(--gold)", marginBottom: 14 }}>
                    <Icon name={e.icon} />
                  </div>
                  <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 500, fontSize: 17, letterSpacing: "0.5px" }}>{e.zh}</div>
                  <div style={{ fontFamily: "var(--font-jost)", fontSize: 11, letterSpacing: 2, color: "var(--muted)", margin: "5px 0 10px", textTransform: "uppercase" }}>
                    {e.en}
                  </div>
                  <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 13, lineHeight: 1.85, color: "var(--silver)" }}>{e.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section style={{ background: "var(--navy)", padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ textAlign: "center", marginBottom: 54 }}>
            <div style={{ ...eyebrow, textAlign: "center" }}>Services</div>
            <h2 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 32, margin: "0 0 14px", letterSpacing: "1px" }}>門市專業服務</h2>
            <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 15, color: "var(--silver)", margin: 0 }}>從選購到售後,一站式的腕錶照護</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
            {SERVICES.map((s) => (
              <div key={s.en} className="f31-svcCell" style={{ background: "var(--navy)", padding: "38px 26px", textAlign: "center", transition: "background .3s" }}>
                <div style={{ color: "var(--gold)", display: "flex", justifyContent: "center", marginBottom: 18 }}>
                  <Icon name={s.icon} />
                </div>
                <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 400, fontSize: 17, letterSpacing: "0.5px" }}>{s.zh}</div>
                <div style={{ fontFamily: "var(--font-jost)", fontSize: 11, letterSpacing: 2, color: "var(--muted)", marginTop: 6, textTransform: "uppercase" }}>{s.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* trust */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          <div style={{ ...eyebrow, textAlign: "center" }}>Why FORMOSA31</div>
          <h2 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 32, margin: 0, letterSpacing: "1px" }}>值得信賴的理由</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 28 }}>
          {TRUST.map((t) => (
            <div key={t.en} style={{ display: "flex", gap: 20, alignItems: "flex-start", padding: 30, border: "1px solid var(--line)" }}>
              <div style={{ color: "var(--gold)", flex: "none" }}>
                <Icon name={t.icon} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 500, fontSize: 18, letterSpacing: "0.5px" }}>{t.zh}</div>
                <div style={{ fontFamily: "var(--font-jost)", fontSize: 11, letterSpacing: 2, color: "var(--muted)", margin: "5px 0 10px", textTransform: "uppercase" }}>
                  {t.en}
                </div>
                <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 13, lineHeight: 1.8, color: "var(--silver)" }}>{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* contact / store */}
      <section style={{ background: "var(--panel)", borderTop: "1px solid var(--line)", padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 70 }}>
          <div>
            <div style={eyebrow}>Visit Us</div>
            <h2 style={{ ...h2Serif, fontSize: 32, marginBottom: 30 }}>門市資訊與聯絡</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-noto-sans-tc)" }}>
              <InfoRow label="ADDRESS">{STORE.address}</InfoRow>
              <InfoRow label="TEL">
                <a href={STORE.phoneHref} style={{ fontWeight: 300, fontSize: 15, color: "var(--gold)", textDecoration: "none" }}>
                  {STORE.phone}
                </a>
              </InfoRow>
              <InfoRow label="EMAIL">
                <a href={`mailto:${STORE.email}`} style={{ fontWeight: 300, fontSize: 15, color: "var(--cream)", textDecoration: "none" }}>
                  {STORE.email}
                </a>
              </InfoRow>
              <InfoRow label="WEB">{STORE.web}</InfoRow>
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
              <a href={STORE.phoneHref} style={{ ...btnPrimary, padding: "13px 22px" }}>
                撥打電話
              </a>
              <a
                href="#"
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: 12,
                  letterSpacing: 2,
                  color: "#06C755",
                  border: "1px solid #06C755",
                  padding: "13px 22px",
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}
              >
                LINE 聯絡
              </a>
            </div>
            <StoreMap style={{ height: 220, marginTop: 28, border: "1px solid var(--line)" }} />
          </div>
          <div style={{ background: "var(--ink)", border: "1px solid var(--line)", padding: 40 }}>
            <h3 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 400, fontSize: 20, margin: "0 0 6px", letterSpacing: "1px" }}>預約賞錶 / 詢價</h3>
            <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 13, color: "var(--muted)", margin: "0 0 28px" }}>
              填寫後門市專人將與您聯繫
            </p>
            <InquiryForm variant="home" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const eyebrow = {
  fontFamily: "var(--font-jost)",
  fontSize: 12,
  letterSpacing: "4px",
  color: "var(--gold)",
  textTransform: "uppercase",
  marginBottom: 20,
};

const h2Serif = {
  fontFamily: "var(--font-noto-sans-tc)",
  fontWeight: 300,
  fontSize: 34,
  lineHeight: 1.5,
  margin: "0 0 26px",
  letterSpacing: "1px",
};

const bodyText = {
  fontFamily: "var(--font-noto-sans-tc)",
  fontWeight: 300,
  fontSize: 15,
  lineHeight: 2.1,
  color: "var(--silver)",
  margin: "0 0 20px",
};

const btnBase = {
  fontFamily: "var(--font-jost)",
  fontSize: 12,
  letterSpacing: "2px",
  padding: "15px 30px",
  cursor: "pointer",
  textTransform: "uppercase",
  textDecoration: "none",
  display: "inline-block",
};

const btnPrimary = { ...btnBase, color: "var(--ink)", background: "var(--gold)", border: "none" };
const btnOutline = { ...btnBase, color: "var(--cream)", background: "transparent", border: "1px solid rgba(255,255,255,0.32)" };
const btnText = { ...btnBase, color: "var(--silver)", background: "transparent", border: "none", padding: "15px 8px" };

function Stat({ value, suffix, label }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--font-jost)", fontWeight: 300, fontSize: 42, color: "var(--gold)" }}>
        {value}
        <span style={{ fontSize: 20 }}>{suffix}</span>
      </div>
      <div style={{ fontSize: 12, letterSpacing: "1px", color: "var(--muted)", marginTop: 4 }}>{label}</div>
    </div>
  );
}

function InfoRow({ label, children }) {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      <span style={{ fontSize: 11, letterSpacing: "2px", color: "var(--muted)", width: 64, flex: "none", paddingTop: 3 }}>{label}</span>
      <span style={{ fontWeight: 300, fontSize: 15, color: "var(--cream)", lineHeight: 1.7 }}>{children}</span>
    </div>
  );
}
