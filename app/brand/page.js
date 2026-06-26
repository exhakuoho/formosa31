import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlaceholderImage from "@/components/PlaceholderImage";
import { Icon } from "@/components/Icons";
import { resolveMarketingImage } from "@/lib/marketingImages";
import { BRAND_NAMES, BRAND_VALUES } from "@/lib/seedData";

export const metadata = {
  title: "品牌故事",
  description: "FORMOSA31 唯誠鐘錶品牌故事：中高階腕錶銷售、專業維修技術與長期售後服務的高雄在地鐘錶門市。",
};

export default function BrandPage() {
  const heroImg = resolveMarketingImage("brand-hero");
  const aboutImg = resolveMarketingImage("brand-about");
  return (
    <div style={{ background: "#0A0F18", color: "#F4F2EC", minHeight: "100vh" }}>
      <Header active="brand" />

      {/* hero */}
      <section style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid var(--line)" }}>
        <PlaceholderImage src={heroImg} label="拖入門市／品牌情境大圖" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} />
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
              <span style={{ fontFamily: "var(--font-jost)", fontSize: 12, letterSpacing: 5, color: "#C2A468", textTransform: "uppercase" }}>About FORMOSA31</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: "clamp(34px,4.6vw,58px)", lineHeight: 1.32, margin: "0 0 26px", letterSpacing: "0.5px" }}>
              買一支錶，
              <br />
              更要選一間能<span style={{ color: "#C2A468", fontWeight: 400 }}>長期照顧它</span>的店。
            </h1>
            <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 17, lineHeight: 2.05, color: "#AEB6C2", margin: "0 0 42px", maxWidth: 640 }}>
              FORMOSA31 是一間結合中高階品牌腕錶銷售、專業維修技術與長期售後服務的高雄在地鐘錶門市。我們相信，腕錶不只是商品，更是需要被細心挑選與長期照顧的時間夥伴。
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/watches" style={btnPrimary}>
                查看精選腕錶
              </Link>
              <Link href="/contact" style={btnOutline}>
                預約賞錶
              </Link>
              <Link href="/contact" style={btnText}>
                聯絡門市
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* about */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "110px 40px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 80, alignItems: "center" }}>
        <div>
          <div style={eyebrow}>Our Story</div>
          <h2 style={{ ...h2Serif, lineHeight: 1.4 }}>關於 FORMOSA31</h2>
          <p style={bodyText}>
            FORMOSA31 專注於國際知名腕錶品牌銷售與鐘錶維修服務，提供 Longines 浪琴、Rado 雷達、Mido 美度、Oris 豪利時、Hamilton 漢米爾頓、Seiko 精工、Citizen 星辰、Casio 卡西歐等多元品牌選擇。
          </p>
          <p style={{ ...bodyText, marginBottom: 0 }}>
            我們服務的不是一次性的交易，而是從選錶、購買、調整、檢測到後續維修保養的完整鐘錶服務體驗。對我們而言，一間值得信任的鐘錶店，不只要提供好的腕錶，更要在客人購買後持續提供專業支持。
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 34 }}>
            {BRAND_NAMES.map((b) => (
              <span
                key={b}
                style={{
                  fontFamily: "var(--font-noto-sans-tc)",
                  fontSize: 13,
                  letterSpacing: "0.5px",
                  color: "#AEB6C2",
                  border: "1px solid rgba(255,255,255,0.14)",
                  padding: "7px 15px",
                  whiteSpace: "nowrap",
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
        <PlaceholderImage src={aboutImg} label="拖入門市環境／櫃位照" style={{ width: "100%", height: 500 }} />
      </section>

      {/* core values */}
      <section style={{ background: "var(--panel)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ textAlign: "center", marginBottom: 58 }}>
            <div style={{ ...eyebrow, textAlign: "center" }}>Core Values</div>
            <h2 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 32, margin: 0, letterSpacing: "1px" }}>品牌核心價值</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
            {BRAND_VALUES.map((v) => (
              <div key={v.n} style={{ background: "var(--ink)", padding: "46px 38px", display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ color: "#C2A468" }}>
                    <Icon name={v.icon} />
                  </div>
                  <span style={{ fontFamily: "var(--font-jost)", fontWeight: 300, fontSize: 38, color: "rgba(194,164,104,0.28)", lineHeight: 1 }}>{v.n}</span>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 500, fontSize: 20, letterSpacing: "0.5px", marginBottom: 4 }}>{v.zh}</div>
                  <div style={{ fontFamily: "var(--font-jost)", fontSize: 11, letterSpacing: 2, color: "#828D9C", textTransform: "uppercase" }}>{v.en}</div>
                </div>
                <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 14, lineHeight: 1.95, color: "#AEB6C2", margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* promise */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "110px 40px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 72, alignItems: "start" }}>
        <div>
          <div style={eyebrow}>Our Promise</div>
          <h2 style={{ ...h2Serif, marginBottom: 0 }}>
            不只賣錶，
            <br />
            更做你的<span style={{ color: "#C2A468", fontWeight: 400 }}>鐘錶顧問</span>
          </h2>
        </div>
        <div>
          <p style={bodyText}>
            許多客人在購買手錶時，真正擔心的不是只有價格，而是商品來源、保固、維修與售後問題。FORMOSA31 希望成為顧客值得信任的鐘錶顧問，協助每一位客人依照預算、用途、風格與配戴需求，挑選適合自己的腕錶。
          </p>
          <p style={{ ...bodyText, marginBottom: 32 }}>
            無論是第一支機械錶、商務場合配戴、重要節日送禮，或是日常實用腕錶，我們都希望提供清楚、專業且負責任的建議。
          </p>
          <div style={{ borderLeft: "2px solid #C2A468", background: "var(--panel)", padding: "26px 30px" }}>
            <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 500, fontSize: 15, color: "#F4F2EC", letterSpacing: "0.5px", marginBottom: 8 }}>
              鐘錶顧問 <span style={{ fontFamily: "var(--font-jost)", fontWeight: 400, color: "#C2A468", fontSize: 13, letterSpacing: "1px" }}>Watch Consultant</span>
            </div>
            <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 14, lineHeight: 1.95, color: "#AEB6C2", margin: 0 }}>
              不是單純銷售商品，而是依照客戶需求提供選錶、保養、維修與售後建議的人。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#070d16", borderTop: "1px solid var(--line)", padding: "104px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 36, margin: "0 0 20px", letterSpacing: "1px" }}>想找一支適合自己的錶？</h2>
          <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 15, lineHeight: 2, color: "#AEB6C2", margin: "0 0 40px" }}>
            歡迎至 FORMOSA31 門市賞錶，或透過 LINE、電話與我們聯繫。我們將依照您的預算、用途與風格需求，協助您找到適合的腕錶選擇。
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/contact" style={btnPrimary}>
              預約賞錶
            </Link>
            <Link href="/contact" style={btnOutline}>
              聯絡 FORMOSA31
            </Link>
            <Link href="/watches" style={btnText}>
              查看精選品牌
            </Link>
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
  fontSize: 34,
  lineHeight: 1.4,
  margin: "0 0 28px",
  letterSpacing: "1px",
};

const bodyText = {
  fontFamily: "var(--font-noto-sans-tc)",
  fontWeight: 300,
  fontSize: 15,
  lineHeight: 2.15,
  color: "#AEB6C2",
  margin: "0 0 22px",
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
const btnText = { ...btnBase, color: "#AEB6C2", background: "transparent", border: "none", padding: "15px 10px" };
