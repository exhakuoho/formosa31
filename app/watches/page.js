import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WatchListClient from "@/components/WatchListClient";
import { getPublishedProducts, getOptionLists } from "@/lib/products";

export const metadata = {
  title: "精選錶款",
  description: "搜尋 FORMOSA31 唯誠鐘錶精選腕錶：Longines、Rado、Mido、Oris、Hamilton、Seiko、Citizen、Casio 等中高階品牌，依品牌與關鍵字篩選。",
};

export default async function WatchesPage() {
  const [products, options] = await Promise.all([getPublishedProducts(), getOptionLists()]);

  return (
    <div style={{ background: "#0A0F18", color: "#F4F2EC", minHeight: "100vh" }}>
      <Header active="list" />
      <WatchListClient products={products} brandOptions={options.brand} />
      <Footer />
    </div>
  );
}
