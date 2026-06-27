import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlaceholderImage from "@/components/PlaceholderImage";
import StoreMap from "@/components/StoreMap";
import InquiryForm from "@/components/InquiryForm";
import HomeFX from "@/components/HomeFX";
import { Icon } from "@/components/Icons";
import { resolveMarketingImage } from "@/lib/marketingImages";
import { BRAND_TIERS, SERVICE_EDGE, SERVICES, HOME_HIGHLIGHTS, STORE } from "@/lib/seedData";

export default async function HomePage() {
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

      {/* ===================== 三大核心優勢 · hero-level feature block ===================== */}
      <section style={{ position: "relative", background: "#070d16", borderBottom: "1px solid var(--line)", padding: "120px 0 96px", overflow: "hidden" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 40px" }}>
          <div data-reveal style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
            <span style={{ width: 46, height: 1, background: "var(--gold)" }} />
            <span style={{ fontFamily: "var(--font-jost)", fontSize: 12, letterSpacing: 5, color: "var(--gold)", textTransform: "uppercase" }}>Why FORMOSA31</span>
          </div>
          <h2 data-reveal style={{ fontWeight: 300, fontSize: "clamp(30px,3.6vw,46px)", lineHeight: 1.2, letterSpacing: "1px", margin: "0 0 8px", maxWidth: 760 }}>
            三大核心優勢，<span style={{ color: "var(--gold)", fontWeight: 400 }}>定義信任的厚度</span>
          </h2>
          <p data-reveal style={{ fontWeight: 300, fontSize: 15, lineHeight: 2, color: "var(--silver)", maxWidth: 560, margin: "14px 0 64px" }}>
            不只是把錶賣給你 — 從選品、維修到終生售後，每一環都由門市親自把關。
          </p>

          {HOME_HIGHLIGHTS.map((h, i) => (
            <Advantage key={h.n} item={h} flip={i % 2 === 1} last={i === HOME_HIGHLIGHTS.length - 1} />
          ))}
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

      {/* brand tiers · color-zoned block */}
      <section style={{ background: "var(--panel)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
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
        </div>
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

      {/* ===================== 門市專業服務 · Bento Grid ===================== */}
      <section style={{ background: "var(--navy)", padding: "104px 0", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 40px" }}>
          <div data-reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 18, marginBottom: 44 }}>
            <div>
              <div style={{ ...eyebrow, marginBottom: 14 }}>Services</div>
              <h2 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: "clamp(28px,3.2vw,38px)", letterSpacing: "1px", margin: 0 }}>門市專業服務</h2>
            </div>
            <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 14, color: "var(--silver)", margin: 0, maxWidth: 300, lineHeight: 1.9 }}>從選購到售後，一站式的腕錶照護。</p>
          </div>

          <div className="f31-bento" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gridAutoRows: 188, gap: 14 }}>
            {/* MAIN card */}
            <Link href="/watches" data-glow style={{ gridColumn: "1 / span 2", gridRow: "1 / span 2", position: "relative", overflow: "hidden", border: "1px solid var(--line)", background: "linear-gradient(150deg,#16263F 0%,#0F1826 100%)", padding: 36, display: "flex", flexDirection: "column", justifyContent: "space-between", textDecoration: "none", color: "inherit" }}>
              <div data-glow-layer style={glowLayer} />
              <div style={{ position: "absolute", right: -30, bottom: -30, opacity: 0.12, pointerEvents: "none", color: "var(--gold)" }}>
                <Icon name="sales" size={220} />
              </div>
              <div style={{ position: "relative", color: "var(--gold)" }}>
                <Icon name="sales" size={34} />
              </div>
              <div style={{ position: "relative" }}>
                <div style={{ fontFamily: "var(--font-jost)", fontSize: 11, letterSpacing: 3, color: "var(--muted)", textTransform: "uppercase", marginBottom: 8 }}>Watch Sales · 主力服務</div>
                <h3 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 400, fontSize: 30, letterSpacing: "1px", margin: "0 0 14px" }}>腕錶銷售</h3>
                <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 14, lineHeight: 1.95, color: "var(--silver)", maxWidth: 330, margin: "0 0 22px" }}>
                  Longines、Rado、Mido、Oris、Hamilton、Seiko、Citizen、Casio 等國際品牌，依預算、場合與風格為你精選。
                </p>
                <span data-magnetic style={{ display: "inline-block", fontFamily: "var(--font-jost)", fontSize: 11, letterSpacing: 2, color: "var(--ink)", background: "var(--gold)", padding: "13px 24px", textTransform: "uppercase" }}>查看精選錶款 →</span>
              </div>
            </Link>

            {/* wide secondary: 維修 */}
            <BentoCell svc={SERVICES[1]} wide col="3 / span 2" row="1" desc="店內技師檢測處理，停走、走時異常、進水疑慮皆可評估。" />
            {/* small cells */}
            <BentoCell svc={SERVICES[2]} col="3" row="2" />
            <BentoCell svc={SERVICES[3]} col="4" row="2" />
            <BentoCell svc={SERVICES[4]} col="1" row="3" />
            <BentoCell svc={SERVICES[5]} col="2" row="3" />
            {/* wide: 送禮諮詢 */}
            <BentoCell svc={SERVICES[6]} wide col="3 / span 2" row="3" desc="依場合與對象，協助挑選有質感的腕錶贈禮。" />

            {/* full-width CTA: 預約賞錶 */}
            <Link href="/contact" data-glow style={{ gridColumn: "1 / span 4", gridRow: "4", position: "relative", overflow: "hidden", border: "1px solid rgba(194,164,104,0.4)", background: "linear-gradient(100deg,rgba(194,164,104,0.10),rgba(194,164,104,0.02))", padding: "0 38px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, textDecoration: "none", color: "inherit" }}>
              <div data-glow-layer style={glowLayer} />
              <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 18 }}>
                <span style={{ color: "var(--gold)" }}><Icon name="calendar" size={30} /></span>
                <div>
                  <h3 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 500, fontSize: 20, margin: "0 0 2px" }}>預約賞錶 · 到店體驗</h3>
                  <div style={{ fontFamily: "var(--font-jost)", fontSize: 11, letterSpacing: 2, color: "var(--muted)", textTransform: "uppercase" }}>Appointment</div>
                </div>
              </div>
              <span data-magnetic style={{ position: "relative", display: "inline-block", fontFamily: "var(--font-jost)", fontSize: 11, letterSpacing: 2, color: "var(--ink)", background: "var(--gold)", padding: "13px 26px", textTransform: "uppercase" }}>立即預約 →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== 值得信賴的理由 · big card + data/value tiles ===================== */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "104px 40px" }}>
        <div data-reveal style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ ...eyebrow, textAlign: "center" }}>Why Trust Us</div>
          <h2 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: "clamp(28px,3.2vw,38px)", letterSpacing: "1px", margin: 0 }}>值得信賴的理由</h2>
        </div>

        <div className="f31-trust" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 16, alignItems: "stretch" }}>
          {/* BIG card */}
          <div data-reveal data-glow style={{ position: "relative", overflow: "hidden", border: "1px solid var(--line)", background: "var(--panel)", padding: 34, display: "flex", flexDirection: "column" }}>
            <div data-glow-layer style={glowLayer} />
            <div style={{ position: "relative", fontFamily: "var(--font-jost)", fontSize: 11, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase", marginBottom: 6 }}>Craftsmanship · Drag to compare</div>
            <h3 style={{ position: "relative", fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: "clamp(22px,2.4vw,30px)", lineHeight: 1.45, letterSpacing: "0.5px", margin: "0 0 22px" }}>
              二十年技藝，<br />讓停走的時計重新呼吸
            </h3>

            {/* before / after slider */}
            <div data-ba style={{ position: "relative", width: "100%", height: 280, overflow: "hidden", cursor: "ew-resize", userSelect: "none", border: "1px solid var(--line)" }}>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "radial-gradient(120% 120% at 50% 30%, #243a5e 0%, #0F1826 80%)" }}>
                <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="#D8C28E" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="6.5" opacity="0.5" /><path d="M12 7v5l3 2" /><path d="M12 3.5v1.5M12 19v1.5M3.5 12h1.5M19 12h1.5" /></svg>
                <span style={{ position: "absolute", right: 14, bottom: 12, fontFamily: "var(--font-jost)", fontSize: 11, letterSpacing: 2, color: "#D8C28E", textTransform: "uppercase" }}>After · 維修後</span>
              </div>
              <div data-ba-top style={{ position: "absolute", inset: 0, width: "50%", overflow: "hidden", borderRight: "2px solid var(--gold)" }}>
                <div style={{ position: "absolute", top: 0, left: 0, height: "100%", minWidth: 560, width: "200%", display: "flex", alignItems: "center", justifyContent: "center", background: "repeating-linear-gradient(135deg,#1a1d22 0 12px,#15171b 12px 24px)" }}>
                  <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="#5a606b" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="6.5" opacity="0.4" /><path d="M12 7v5l2 1.4" /></svg>
                </div>
                <span style={{ position: "absolute", left: 14, bottom: 12, fontFamily: "var(--font-jost)", fontSize: 11, letterSpacing: 2, color: "var(--muted)", textTransform: "uppercase" }}>Before · 維修前</span>
              </div>
              <div data-ba-handle style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", height: "100%", width: 2, background: "var(--gold)", pointerEvents: "none" }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 40, height: 40, borderRadius: "50%", background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 18px rgba(0,0,0,0.5)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A0F18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l-4 6 4 6M15 6l4 6-4 6" /></svg>
                </div>
              </div>
            </div>

            <div style={{ position: "relative", display: "flex", gap: 42, marginTop: 26 }}>
              <div><div style={{ fontFamily: "var(--font-jost)", fontWeight: 300, fontSize: 38, color: "var(--gold)", lineHeight: 1 }}>20<span style={{ fontSize: 18 }}>+</span></div><div style={{ fontSize: 12, letterSpacing: "1px", color: "var(--muted)", marginTop: 4 }}>年鐘錶維修經驗</div></div>
              <div><div style={{ fontFamily: "var(--font-jost)", fontWeight: 300, fontSize: 38, color: "var(--gold)", lineHeight: 1 }}>3000<span style={{ fontSize: 18 }}>+</span></div><div style={{ fontSize: 12, letterSpacing: "1px", color: "var(--muted)", marginTop: 4 }}>維修檢測案例</div></div>
            </div>
          </div>

          {/* RIGHT column: mixed data + value tiles */}
          <div style={{ display: "grid", gridTemplateRows: "repeat(4,1fr)", gap: 16 }}>
            <TrustTile delay={80} big="100%" title="正品保證" desc="原廠正品，完整保固與來源說明。" />
            <TrustTile delay={140} big="終生" title="免費檢測" desc="本店購買享終生走時與防水調整。" />
            <TrustTile delay={200} icon="store" title="實體門市" desc="高雄左營，面對面賞錶與議價。" />
            <TrustTile delay={260} icon="pin" title="在地口碑" desc="深耕在地，高雄信賴的鐘錶選擇。" />
          </div>
        </div>
      </section>

      {/* ===================== 官方與公開資訊查詢 · Logo trust wall ===================== */}
      <section style={{ background: "#070d16", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "104px 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 40px" }}>
          <div data-reveal style={{ textAlign: "center", marginBottom: 14 }}>
            <div style={{ ...eyebrow, textAlign: "center" }}>Verified · Official Listings</div>
            <h2 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: "clamp(28px,3.2vw,38px)", letterSpacing: "1px", margin: "0 0 16px" }}>官方與公開資訊查詢</h2>
            <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 15, lineHeight: 1.95, color: "var(--silver)", maxWidth: 600, margin: "0 auto" }}>
              FORMOSA31（寶島鐘錶 明誠店）可於品牌官方與公開通路查證 — 將游標移至下方標誌即可展開資訊。
            </p>
          </div>

          <div data-reveal data-delay="120" className="f31-logowall" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 14, marginTop: 46 }}>
            {LOGO_WALL.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" data-logo style={{ position: "relative", overflow: "hidden", border: "1px solid var(--line)", background: "transparent", padding: "26px 18px", minHeight: 210, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", textDecoration: "none", transition: "transform .4s, background .4s, border-color .4s" }}>
                <div data-logo-name style={{ fontFamily: "var(--font-jost)", fontWeight: l.weight, fontSize: l.size, letterSpacing: l.ls, color: "var(--muted)", transition: "color .4s", lineHeight: 1.4 }}>{l.mark}</div>
                <div data-logo-reveal style={{ opacity: 0, transform: "translateY(12px)", transition: "opacity .45s, transform .45s", display: "flex", flexDirection: "column", alignItems: "center", gap: 9, marginTop: 14 }}>
                  <div style={{ fontFamily: "var(--font-jost)", fontSize: 9.5, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase" }}>{l.cat}</div>
                  <div style={{ fontWeight: 300, fontSize: 12, lineHeight: 1.7, color: "var(--silver)", maxWidth: 170 }}>{l.desc}</div>
                  <span style={{ fontFamily: "var(--font-jost)", fontSize: 9.5, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginTop: 2 }}>查看資訊 →</span>
                </div>
              </a>
            ))}
          </div>
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
      <HomeFX />
    </div>
  );
}

/* ---------------- redesign sub-components ---------------- */

// 三大核心優勢 — alternating hero-level feature block
function Advantage({ item, flip, last }) {
  const numCol = (
    <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
      <span data-num style={{ fontFamily: "var(--font-jost)", fontWeight: 300, fontSize: "clamp(150px,16vw,250px)", lineHeight: 0.78, color: "rgba(194,164,104,0.07)", transition: "color .55s", userSelect: "none" }}>
        {item.n}
      </span>
    </div>
  );
  const textCol = (
    <div style={{ position: "relative", textAlign: flip ? "right" : "left" }}>
      <div style={{ width: 52, height: 52, border: "1px solid rgba(194,164,104,0.45)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22, marginLeft: flip ? "auto" : 0, color: "var(--gold)" }}>
        <Icon name={item.icon} size={26} />
      </div>
      <div style={{ fontFamily: "var(--font-jost)", fontSize: 11, letterSpacing: 3, color: "var(--muted)", textTransform: "uppercase", marginBottom: 10 }}>{item.en}</div>
      <h3 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 400, fontSize: "clamp(24px,2.6vw,32px)", letterSpacing: "1px", margin: "0 0 16px" }}>{item.zh}</h3>
      <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 15, lineHeight: 2.05, color: "var(--silver)", maxWidth: 480, margin: flip ? "0 0 0 auto" : 0 }}>{item.desc}</p>
      <span data-rule style={{ display: "block", width: 48, height: 2, background: "var(--gold)", marginTop: 26, marginLeft: flip ? "auto" : 0, transition: "width .55s" }} />
    </div>
  );
  return (
    <div
      data-feature
      data-reveal
      data-glow
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: flip ? "1.18fr 0.82fr" : "0.82fr 1.18fr",
        gap: 30,
        alignItems: "center",
        padding: "52px 34px",
        borderTop: "1px solid var(--line)",
        borderBottom: last ? "1px solid var(--line)" : "none",
      }}
    >
      <div data-glow-layer style={glowLayer} />
      {flip ? textCol : numCol}
      {flip ? numCol : textCol}
    </div>
  );
}

// Bento service cell
function BentoCell({ svc, col, row, wide, desc }) {
  return (
    <Link
      href="/services"
      data-glow
      data-svc
      style={{
        gridColumn: col,
        gridRow: row,
        position: "relative",
        overflow: "hidden",
        border: "1px solid var(--line)",
        background: "var(--panel)",
        padding: wide ? 30 : 26,
        display: "flex",
        alignItems: wide ? "center" : "stretch",
        flexDirection: wide ? "row" : "column",
        justifyContent: wide ? "flex-start" : "space-between",
        gap: wide ? 22 : 0,
        textDecoration: "none",
        color: "inherit",
        transition: "border-color .4s",
      }}
    >
      <div data-glow-layer style={glowLayer} />
      <div style={{ position: "relative", flex: "none", color: "var(--gold)" }}>
        <Icon name={svc.icon} size={wide ? 30 : 26} />
      </div>
      <div style={{ position: "relative" }}>
        <h3 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 500, fontSize: wide ? 19 : 16, margin: wide ? "0 0 4px" : "0 0 3px" }}>{svc.zh}</h3>
        <div style={{ fontFamily: "var(--font-jost)", fontSize: 10, letterSpacing: 2, color: "var(--muted)", textTransform: "uppercase", marginBottom: desc ? 8 : 0 }}>{svc.en}</div>
        {desc ? <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 13, lineHeight: 1.8, color: "var(--silver)", margin: 0 }}>{desc}</p> : null}
      </div>
    </Link>
  );
}

// Trust tile (data number or icon + value)
function TrustTile({ big, icon, title, desc, delay }) {
  return (
    <div data-reveal data-delay={delay} data-glow style={{ position: "relative", overflow: "hidden", border: "1px solid var(--line)", background: "var(--panel)", padding: "24px 26px", display: "flex", alignItems: "center", gap: 20 }}>
      <div data-glow-layer style={glowLayer} />
      {big ? (
        <div style={{ fontFamily: "var(--font-jost)", fontWeight: 300, fontSize: big.length > 3 ? 40 : 44, color: "var(--gold)", lineHeight: 1, flex: "none", minWidth: 90 }}>{big}</div>
      ) : (
        <div style={{ flex: "none", minWidth: 90, display: "flex", justifyContent: "center", color: "var(--gold)" }}><Icon name={icon} size={34} /></div>
      )}
      <div>
        <div style={{ fontWeight: 500, fontSize: 16, marginBottom: 3 }}>{title}</div>
        <div style={{ fontWeight: 300, fontSize: 12.5, lineHeight: 1.7, color: "var(--silver)" }}>{desc}</div>
      </div>
    </div>
  );
}

const glowLayer = { position: "absolute", inset: 0, opacity: 0, transition: "opacity .45s", pointerEvents: "none" };

// Logo trust-wall display marks (paired with VERIFY_LINKS data in seedData.js)
const LOGO_WALL = [
  { mark: "寶島鐘錶", cat: "Official Site", weight: 500, size: 17, ls: "0.5px", desc: "明誠店資訊登錄於寶島鐘錶官方網站，可查證為官方門市。", url: "https://www.formosatimes.com.tw/branches/39" },
  { mark: "SEIKO", cat: "Authorized Dealer", weight: 500, size: 22, ls: "3px", desc: "收錄於 Seiko 官方特約經銷商頁面，原廠授權銷售據點。", url: "https://www.seikowatches.com/tw-zh/stores/tw00073" },
  { mark: "LONGINES", cat: "Official Boutique", weight: 400, size: 18, ls: "2px", desc: "列載於 Longines 官方網站專賣店介紹，官方合作通路。", url: "https://www.longines.com/zh-tw/store/id/formosa-mingcheng-kaohsiung-city-22037" },
  { mark: "Facebook", cat: "Official Page", weight: 500, size: 18, ls: "0.5px", desc: "官方粉絲專頁，分享門市動態與顧客互動。", url: "https://www.facebook.com/formosatimes31/" },
  { mark: "iWatcHome", cat: "Public Listing", weight: 500, size: 16, ls: "0.5px", desc: "收錄於城邦國際名表門市資訊頁，公開通路可查。", url: "https://www.iwatchome.net/store/info/229" },
];

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
