import { Jost, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { STORE } from "@/lib/seedData";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  display: "swap",
  preload: false,
});

export const metadata = {
  title: {
    default: "FORMOSA31 唯誠鐘錶 | 高雄左營中高階腕錶銷售・維修・保養",
    template: "%s | FORMOSA31 唯誠鐘錶",
  },
  description:
    "FORMOSA31 唯誠鐘錶座落於高雄左營，專營 Longines、Rado、Mido、Oris、Hamilton、Seiko、Citizen、Casio 等中高階腕錶之銷售、維修與保養，正品保證，專人服務。",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: "FORMOSA31 唯誠鐘錶",
    legalName: STORE.legalName,
    image: "https://formosa31.com/images/logo-formosa31.png",
    url: "https://formosa31.com",
    telephone: "+886-7-5580678",
    email: STORE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "明誠二路505-3號",
      addressLocality: "左營區",
      addressRegion: "高雄市",
      postalCode: "813",
      addressCountry: "TW",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "11:00",
        closes: "21:00",
      },
    ],
    priceRange: "NT$10,000–NT$150,000",
    brand: ["Longines", "Rado", "Mido", "Oris", "Hamilton", "Seiko", "Citizen", "Casio"],
  };
  return (
    <html lang="zh-Hant" className={`${jost.variable} ${notoSansTC.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
