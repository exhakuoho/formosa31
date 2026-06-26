import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlaceholderImage from "@/components/PlaceholderImage";
import { Icon } from "@/components/Icons";
import { resolveMarketingImage } from "@/lib/marketingImages";
import { SERVICE_ITEMS, REPAIR_FLOW, FAQ } from "@/lib/seedData";

export const metadata = {
  title: "門市專業服務",
  description: "FORMOSA31 唯誠鐘錶提供腕錶銷售、選錶建議、維修檢測、洗油保養、防水測試、電池與錶帶服務，從選錶到售後一路陪伴。",
};

export default function ServicesPage() {
  const heroImg = resolveMarketingImage("services-hero");
  const repairImg = resolveMarketingImage("services-repair");
  const openImg = resolveMarketingImage("services-open");
  return (
    <div style={{ background: "#0A0F18", color: "#F4F2EC", minHeight: "100vh" }}>
      <Header active="services" />

      {/* hero */}
      <section style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid var(--line)" }}>
        <PlaceholderImage src={heroImg} label="拖入維修工作檯／工具情境大圖" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: "linear-gradient(90deg,rgba(7,10,16,0.95) 0%,rgba(7,10,16,0.78) 46%,rgba(7,10,16,0.42) 100%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "120px 40px 110px", width: "100%" }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 26 }}>
              <span style={{ width: 46, height: 1, background: "#C2A468" }} />
              <span style={{ fontFamily: "var(--font-jost)", fontSize: 12, letterSpacing: 5, color: "#C2A468", textTransform: "uppercase" }}>Services</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: "clamp(32px,4.4vw,54px)", lineHeight: 1.34, margin: "0 0 26px", letterSpacing: "0.5px" }}>
              專業鐘錶服務，
              <br />
              從選錶到售後<span style={{ color: "#C2A468", fontWeight: 400 }}>一路陪伴</span>。
            </h1>
            <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 17, lineHeight: 2.05, color: "#AEB6C2", margin: 0, maxWidth: 660 }}>
              FORMOSA31 提供中高階腕錶銷售、維修檢測、洗油保養、防水測試、零件更換、電池更換與錶帶調整等服務，讓您的腕錶從購買到長期配戴，都能獲得專業照顧。
            </p>
          </div>
        </div>
      </section>

      {/* service items overview */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "104px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          <div style={{ ...eyebrow, textAlign: "center" }}>What We Offer</div>
          <h2 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 32, margin: 0, letterSpacing: "1px" }}>服務項目總覽</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
          {SERVICE_ITEMS.map((s) => (
            <div key={s.n} style={{ background: "var(--ink)", padding: "40px 34px", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ color: "#C2A468" }}>
                  <Icon name={s.icon} size={34} />
                </div>
                <span style={{ fontFamily: "var(--font-jost)", fontWeight: 300, fontSize: 34, color: "rgba(194,164,104,0.26)", lineHeight: 1 }}>{s.n}</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 500, fontSize: 19, letterSpacing: "0.5px", marginBottom: 4 }}>{s.zh}</div>
                <div style={{ fontFamily: "var(--font-jost)", fontSize: 11, letterSpacing: 2, color: "#828D9C", textTransform: "uppercase" }}>{s.en}</div>
              </div>
              <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 14, lineHeight: 1.95, color: "#AEB6C2", margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* repair expertise */}
      <section style={{ background: "var(--panel)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 72, alignItems: "center" }}>
          <PlaceholderImage src={repairImg} label="拖入技師維修工作照" style={{ width: "100%", height: 440 }} />
          <div>
            <div style={eyebrow}>Repair Expertise</div>
            <h2 style={h2Serif}>
              不只銷售，
              <br />
              更具備專業維修能力
            </h2>
            <p style={bodyText}>
              FORMOSA31 提供多項鐘錶維修與保養服務，包含洗油保養、故障排除、防水測試與零件更換等。多數維修案件可由店內技師協助判斷與處理，減少不必要的等待與轉送流程。
            </p>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              我們重視維修過程的透明度，會依照腕錶狀況提供檢測與報價建議，讓顧客在維修前清楚了解問題、處理方式與可能費用。
            </p>
          </div>
        </div>
      </section>

      {/* repair flow */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "104px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          <div style={{ ...eyebrow, textAlign: "center" }}>Repair Process</div>
          <h2 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 32, margin: "0 0 12px", letterSpacing: "1px" }}>清楚流程，安心送修</h2>
          <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 15, color: "#AEB6C2", margin: 0 }}>檢測 → 報價 → 訂購零件 → 維修更換 → 組裝檢測 → 完成交件</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 10 }}>
          {REPAIR_FLOW.map((f, i) => (
            <div key={f.n} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 158, minHeight: 168, border: "1px solid var(--line)", background: "var(--ink)", padding: "26px 18px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                <span style={{ width: 46, height: 46, borderRadius: "50%", border: "1px solid rgba(194,164,104,0.55)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-jost)", fontWeight: 300, fontSize: 22, color: "#C2A468" }}>{f.n}</span>
                <div>
                  <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 500, fontSize: 17, letterSpacing: "0.5px" }}>{f.zh}</div>
                  <div style={{ fontFamily: "var(--font-jost)", fontSize: 10, letterSpacing: 1.5, color: "#828D9C", textTransform: "uppercase", marginTop: 3 }}>{f.en}</div>
                </div>
                <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 12.5, lineHeight: 1.7, color: "#AEB6C2", margin: 0 }}>{f.desc}</p>
              </div>
              {i < REPAIR_FLOW.length - 1 ? (
                <span style={{ color: "rgba(194,164,104,0.6)", fontSize: 20, fontFamily: "var(--font-jost)", flex: "none" }}>→</span>
              ) : null}
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24, marginTop: 48, alignItems: "start" }}>
          <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 14, lineHeight: 2.05, color: "#AEB6C2", margin: 0 }}>
            FORMOSA31 重視維修流程的透明度，會依照腕錶狀況提供檢測與報價建議。多數案件可於現場提供初步報價，並採維修完成後才收費的方式。實際維修時間會依品牌、零件供應與維修狀況而有所不同。
          </p>
          <div style={{ border: "1px solid rgba(194,164,104,0.4)", borderLeft: "3px solid #C2A468", background: "rgba(194,164,104,0.05)", padding: "26px 28px" }}>
            <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 500, fontSize: 16, letterSpacing: "0.5px", marginBottom: 4 }}>透明流程</div>
            <div style={{ fontFamily: "var(--font-jost)", fontSize: 11, letterSpacing: 2, color: "#C2A468", textTransform: "uppercase", marginBottom: 12 }}>Transparent Process</div>
            <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 13.5, lineHeight: 1.95, color: "#AEB6C2", margin: 0 }}>
              讓客戶在維修前知道流程、費用與可能等待時間，降低「不知道會不會被亂收費」的不安感。
            </p>
          </div>
        </div>
      </section>

      {/* after-sales */}
      <section style={{ background: "var(--navy)", borderTop: "1px solid var(--line)", padding: "100px 0" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
          <div style={{ ...eyebrow, textAlign: "center" }}>After-Sales</div>
          <h2 style={{ ...h2Serif, fontSize: 32 }}>
            在 FORMOSA31 購買，
            <br />
            服務從成交後開始
          </h2>
          <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 15, lineHeight: 2.1, color: "#AEB6C2", margin: "0 auto 30px", maxWidth: 760 }}>
            凡於 FORMOSA31 購買腕錶，即享終生免費調整錶帶、維修檢測與電池更換服務。我們希望每一位顧客不只在購買當下安心，也能在日後配戴、保養與維修時，持續獲得專業支持。
          </p>
          <div style={{ display: "inline-flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 24 }}>
            {["錶帶調整", "維修檢測", "電池更換"].map((t) => (
              <span key={t} style={{ fontFamily: "var(--font-noto-sans-tc)", fontSize: 13, color: "#F4F2EC", border: "1px solid rgba(194,164,104,0.4)", padding: "9px 18px" }}>
                {t}
              </span>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 12, lineHeight: 1.85, color: "#6A7280", margin: "0 auto", maxWidth: 720 }}>
            ＊實際服務內容依品牌、型號、零件狀況與現場檢測結果為準；特殊零件、耗材與原廠料件費用另依實際情況報價。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--panel)", borderTop: "1px solid var(--line)", padding: "104px 0" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ textAlign: "center", marginBottom: 54 }}>
            <div style={{ ...eyebrow, textAlign: "center" }}>FAQ</div>
            <h2 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 32, margin: 0, letterSpacing: "1px" }}>常見問題</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(380px,1fr))", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
            {FAQ.map((item, i) => (
              <div key={i} style={{ background: "var(--ink)", padding: "34px 32px" }}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 12 }}>
                  <span style={{ fontFamily: "var(--font-jost)", fontWeight: 400, fontSize: 15, color: "#C2A468", flex: "none", lineHeight: 1.5 }}>Q{i + 1}</span>
                  <h3 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 500, fontSize: 17, lineHeight: 1.55, letterSpacing: "0.3px", margin: 0 }}>{item.q}</h3>
                </div>
                <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 14, lineHeight: 1.95, color: "#AEB6C2", margin: 0, paddingLeft: 28 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* open to all */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 40px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 72, alignItems: "center" }}>
        <div>
          <div style={eyebrow}>Open To All</div>
          <h2 style={h2Serif}>
            非店內購買，
            <br />
            也歡迎送修檢測
          </h2>
          <p style={{ ...bodyText, marginBottom: 0 }}>
            即使腕錶不是在 FORMOSA31 購買，也可至門市進行檢測與維修諮詢。我們接受多數品牌腕錶的維修服務，實際是否可維修，會依品牌、零件供應與現場檢測結果判斷。
          </p>
        </div>
        <PlaceholderImage src={openImg} label="拖入腕錶檢測情境照" style={{ width: "100%", height: 380 }} />
      </section>

      {/* CTA */}
      <section style={{ background: "#070d16", borderTop: "1px solid var(--line)", padding: "104px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 36, margin: "0 0 20px", letterSpacing: "1px" }}>需要選錶、維修或檢測嗎？</h2>
          <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 15, lineHeight: 2, color: "#AEB6C2", margin: "0 0 40px" }}>
            歡迎攜帶腕錶至 FORMOSA31 門市，由現場人員協助初步檢測與說明。若您正在尋找合適腕錶，也可以提前預約賞錶服務。
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/contact" style={btnPrimary}>
              預約賞錶
            </Link>
            <Link href="/contact" style={btnOutline}>
              詢問維修
            </Link>
            <Link href="/contact" style={btnOutline}>
              查看門市位置
            </Link>
            <a href="#" style={{ ...btnBase, color: "#06C755", border: "1px solid #06C755", display: "inline-flex", alignItems: "center" }}>
              加入 LINE 諮詢
            </a>
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
  color: "#C2A468",
  textTransform: "uppercase",
  marginBottom: 18,
};

const h2Serif = {
  fontFamily: "var(--font-noto-sans-tc)",
  fontWeight: 300,
  fontSize: 32,
  lineHeight: 1.4,
  margin: "0 0 26px",
  letterSpacing: "1px",
};

const bodyText = {
  fontFamily: "var(--font-noto-sans-tc)",
  fontWeight: 300,
  fontSize: 15,
  lineHeight: 2.15,
  color: "#AEB6C2",
  margin: "0 0 20px",
};

const btnBase = {
  fontFamily: "var(--font-jost)",
  fontSize: 13,
  letterSpacing: "2px",
  padding: "15px 30px",
  cursor: "pointer",
  textDecoration: "none",
  display: "inline-block",
};

const btnPrimary = { ...btnBase, color: "#0A0F18", background: "#C2A468", border: "none" };
const btnOutline = { ...btnBase, color: "#F4F2EC", background: "transparent", border: "1px solid rgba(255,255,255,0.32)" };
