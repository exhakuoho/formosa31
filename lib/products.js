import catalog from "@/data/products.json";
import {
  BRAND_ZH,
  DEFAULT_BRAND_OPTIONS,
  DEFAULT_MATERIAL_OPTIONS,
  DEFAULT_MOVEMENT_OPTIONS,
} from "./seedData";

// The watch catalog now lives in data/products.json — a plain Git file.
// To add / edit / remove a watch, edit that file (or just ask Claude to do
// it, including batch uploads) and redeploy. No database, nothing to keep
// running. These helpers fill in sensible defaults so each entry in the
// JSON only needs the fields that actually differ.

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
  return {
    brand: DEFAULT_BRAND_OPTIONS,
    material: DEFAULT_MATERIAL_OPTIONS,
    movement: DEFAULT_MOVEMENT_OPTIONS,
  };
}
