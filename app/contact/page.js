import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreMap from "@/components/StoreMap";
import InquiryForm from "@/components/InquiryForm";
import { Icon } from "@/components/Icons";
import { STORE } from "@/lib/seedData";

export const metadata = {
  title: "聯絡門市",
  description: "FORMOSA31 唯誠鐘錶門市資訊：高雄市左營區明誠二路505-3號，07-5580678，service@formosa31.com，週一至週六 11:00–21:00。",
};

export default function ContactPage() {
  return (
    <div style={{ background: "#0A0F18", color: "#F4F2EC", minHeight: "100vh" }}>
      <Header active="contact" />

      {/* intro */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "70px 40px 50px", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-jost)", fontSize: 12, letterSpacing: 4, color: "#C2A468", textTransform: "uppercase", marginBottom: 16 }}>
          Contact · Visit Us
        </div>
        <h1 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 40, margin: "0 0 14px", letterSpacing: "1px" }}>歡迎親臨門市賞錶</h1>
        <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 15, color: "#AEB6C2", maxWidth: 540, margin: "0 auto", lineHeight: 1.9 }}>
          無論是選購、詢價、維修保養或送禮諮詢,FORMOSA31 唯誠鐘錶誠摯歡迎您來電或來店,由專人為您服務。
        </p>
      </section>

      {/* contact channels */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px 50px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 18 }}>
        <a href={STORE.phoneHref} className="f31-channelCard" style={channelCard}>
          <div style={{ color: "#C2A468", display: "flex", justifyContent: "center", marginBottom: 12 }}>
            <Icon name="phone" />
          </div>
          <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontSize: 14 }}>電話撥打</div>
          <div style={{ fontFamily: "var(--font-jost)", fontSize: 14, color: "#C2A468", marginTop: 6 }}>{STORE.phone}</div>
        </a>
        <a href={`mailto:${STORE.email}`} className="f31-channelCard" style={channelCard}>
          <div style={{ color: "#C2A468", display: "flex", justifyContent: "center", marginBottom: 12 }}>
            <Icon name="mail" />
          </div>
          <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontSize: 14 }}>Email 信箱</div>
          <div style={{ fontFamily: "var(--font-jost)", fontSize: 12, color: "#C2A468", marginTop: 6 }}>{STORE.email}</div>
        </a>
        <a href="#" className="f31-channelCard-line" style={channelCard}>
          <div style={{ color: "#06C755", display: "flex", justifyContent: "center", marginBottom: 12 }}>
            <Icon name="chat" />
          </div>
          <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontSize: 14 }}>LINE 線上諮詢</div>
          <div style={{ fontFamily: "var(--font-jost)", fontSize: 13, color: "#06C755", marginTop: 6 }}>@formosa31</div>
        </a>
        <div style={{ border: "1px solid rgba(255,255,255,0.12)", padding: "30px 24px", textAlign: "center" }}>
          <div style={{ color: "#C2A468", display: "flex", justifyContent: "center", marginBottom: 12 }}>
            <Icon name="clock" />
          </div>
          <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontSize: 14 }}>營業時間</div>
          <div style={{ fontFamily: "var(--font-noto-sans-tc)", fontSize: 12, color: "#AEB6C2", marginTop: 6, lineHeight: 1.7 }}>
            週一至週六
            <br />
            11:00 – 21:00
          </div>
        </div>
      </section>

      {/* map + form */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px 90px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 48 }}>
        <div>
          <StoreMap style={{ height: 360, border: "1px solid rgba(255,255,255,0.10)" }} />
          <div style={{ marginTop: 24, fontFamily: "var(--font-noto-sans-tc)" }}>
            <div style={{ fontFamily: "var(--font-jost)", fontSize: 11, letterSpacing: 2, color: "#828D9C", textTransform: "uppercase", marginBottom: 8 }}>Store Address</div>
            <div style={{ fontSize: 16, color: "#F4F2EC", lineHeight: 1.7 }}>{STORE.address}</div>
            <div style={{ fontSize: 13, color: "#828D9C", marginTop: 6 }}>
              {STORE.legalName} · {STORE.legalNameEn}
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", marginTop: 16, fontFamily: "var(--font-jost)", fontSize: 12, letterSpacing: 2, color: "#C2A468", border: "1px solid rgba(194,164,104,0.5)", padding: "11px 22px", textDecoration: "none", textTransform: "uppercase" }}
            >
              在 Google Map 開啟導航 →
            </a>
          </div>
        </div>
        <div style={{ background: "#0F1826", border: "1px solid rgba(255,255,255,0.10)", padding: 44 }}>
          <h2 style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 400, fontSize: 22, margin: "0 0 6px", letterSpacing: "0.5px" }}>預約賞錶 / 詢價表單</h2>
          <p style={{ fontFamily: "var(--font-noto-sans-tc)", fontWeight: 300, fontSize: 13, color: "#828D9C", margin: "0 0 30px" }}>填寫後門市專人將盡快與您聯繫</p>
          <InquiryForm variant="contact" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

const channelCard = {
  textDecoration: "none",
  color: "inherit",
  border: "1px solid rgba(255,255,255,0.12)",
  padding: "30px 24px",
  textAlign: "center",
  transition: "border-color .3s",
  display: "block",
};
