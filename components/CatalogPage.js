import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WatchListClient from "@/components/WatchListClient";
import { cards, brands, PAGE_SIZE, seriesByBrand } from "@/lib/list-fields";
export default function CatalogPage({ page = 1 }) {
  const start = (page - 1) * PAGE_SIZE;
  return <div style={{ background: "#0A0F18", color: "#F4F2EC", minHeight: "100vh" }}>
    <Header active="list" />
    <WatchListClient products={cards.slice(start, start + PAGE_SIZE)} total={cards.length}
      page={page} pageSize={PAGE_SIZE} brandOptions={brands} seriesByBrand={seriesByBrand} />
    <Footer />
  </div>;
}
