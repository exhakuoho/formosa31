import { Jost, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

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
  return (
    <html lang="zh-Hant" className={`${jost.variable} ${notoSansTC.variable}`}>
      <body>{children}</body>
    </html>
  );
}
