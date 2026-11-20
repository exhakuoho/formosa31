import { getPublishedProducts } from "./products";
import covers from "@/data/build-card-covers.json";

export const PAGE_SIZE = 24;
function card(p) {
  const { id, brand, brandZh, line, model, size, movement, material, price, tag, kw } = p;
  const image = p.images[0];
  const path = image && new URL(image, "https://formosa31.com").pathname;
  const cover = covers[path];
  const images = image ? [cover ? "https://images.formosa31.com/" + cover : image] : [];
  let series = p.series || "";
  if (!series && kw[0] === brand && ["Longines", "BALL"].includes(brand)) series = kw[1] || "";
  if (!series && brand === "Longines" && kw[0] === "多情系列") series = kw[0];
  if (!series && brand === "Rado" && kw[0] && (line.toLowerCase().includes(kw[0].toLowerCase()) || (kw[1] && line.includes(kw[1])))) series = kw[0];
  return { id, brand, brandZh, line, model, size, movement, material, price, tag, kw, images, series };
}
export const cards = getPublishedProducts().map(card);
export const brands = [...new Set(cards.map(p => p.brand))];
export const seriesByBrand = Object.fromEntries(brands.map(brand => [
  brand, [...new Set(cards.filter(p => p.brand === brand && p.series).map(p => p.series))].sort()
]));
