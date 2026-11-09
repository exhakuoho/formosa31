import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WatchListClient from "@/components/WatchListClient";
import { getPublishedProducts, getOptionLists } from "@/lib/products";

export const metadata = {
  title: "精選錶款",
  description: "搜尋 FORMOSA31 唯誠鐘錶精選腕錶：Longines、Rado、Mido、Oris、Hamilton、BALL 波爾、Seiko、Citizen、Casio 等中高階品牌，依品牌與關鍵字篩選。",
};

// Only the fields the list cards + search actually use. With 600+ watches
// the full records (straps, warranty, all photos…) bloat the page by MBs.
function listFields(p) {
  return {
    id: p.id,
    brand: p.brand,
    brandZh: p.brandZh,
    line: p.line,
    model: p.model,
    size: p.size,
    movement: p.movement,
    material: p.material,
    price: p.price,
    tag: p.tag,
    kw: p.kw,
    images: p.images && p.images.length ? [p.images[0]] : [],
  };
}

export default async function WatchesPage() {
  const [all, options] = await Promise.all([getPublishedProducts(), getOptionLists()]);
  const products = all.map(listFields);

  return (
    <div style={{ background: "#0A0F18", color: "#F4F2EC", minHeight: "100vh" }}>
      <Header active="list" />
      <WatchListClient products={products} brandOptions={options.brand} />
      <Footer />
    </div>
  );
}
