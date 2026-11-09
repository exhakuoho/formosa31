// Shared between the build-time image optimizer (scripts/optimize-images.mjs)
// and the next/image loader (lib/imageLoader.js). Keep them in sync.
export const OPT_DIR = "images/_opt";
export const WIDTHS = [384, 768, 1536];

// "/images/products/X/01.png", 768 -> "/images/_opt/products/X/01-768.webp"
export function optPath(src, width) {
  const rel = src.replace(/^\/images\//, "").replace(/\.[^./]+$/, "");
  return `/${OPT_DIR}/${rel}-${width}.webp`;
}
