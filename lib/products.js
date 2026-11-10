import catalog from "@/data/products.json";
import migratedMedia from "@/data/r2-media.json";
import {
  BRAND_ZH,
  DEFAULT_BRAND_OPTIONS,
  DEFAULT_MATERIAL_OPTIONS,
  DEFAULT_MOVEMENT_OPTIONS,
} from "./seedData";

// The workbench publishes the static catalog. Existing migrated photos use
// the public R2 host with their original paths so old links remain auditable.
const MEDIA_ORIGIN = "https://images.formosa31.com";

function productImage(src) {
  return typeof src === "string" && Object.hasOwn(migratedMedia, src)
    ? MEDIA_ORIGIN + src + "?v=" + migratedMedia[src]
    : src;
}

function normalize(p) {
  return {
    strap: "原廠錶帶 Original",
    water: "50 米 / 5 ATM",
    crystal: "藍寶石水晶玻璃 Sapphire",
    warranty: "原廠國際保固",
    condition: "全新正品 Brand New",
    tag: "",
    status: "published",
    stock: 0,
    kw: [],
    images: [],
    ...p,
    images: Array.isArray(p.images) ? p.images.map(productImage) : [],
    brandZh: p.brandZh || BRAND_ZH[p.brand] || "",
    movementFull: p.movementFull || p.movement || "",
  };
}

const ALL = catalog.map(normalize);

export function getPublishedProducts() {
  return ALL.filter((p) => p.status === "published");
}

export function getProductById(id) {
  const p = ALL.find((w) => w.id === id);
  return p && p.status === "published" ? p : null;
}

export function getAllProductIds() {
  return ALL.filter((p) => p.status === "published").map((p) => p.id);
}

export function getOptionLists() {
  const catalogBrands = getPublishedProducts().map((p) => p.brand).filter((brand) => typeof brand === "string" && brand.trim());
  return {
    brand: [...new Set([...DEFAULT_BRAND_OPTIONS, ...catalogBrands])],
    material: DEFAULT_MATERIAL_OPTIONS,
    movement: DEFAULT_MOVEMENT_OPTIONS,
  };
}
