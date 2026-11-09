"use client";

import { WIDTHS, optPath } from "./imageWidths.mjs";

// next/image loader for the static export: instead of an on-the-fly optimizer,
// point at the WebP copies that scripts/optimize-images.mjs generated at build
// time. Picks the smallest pre-built width that covers what the browser asked
// for, so a 300px product card downloads a ~20KB WebP, not a 5MB PNG.
export default function imageLoader({ src, width }) {
  if (!src.startsWith("/images/") || !/\.(png|jpe?g|webp)$/i.test(src)) return src;
  const w = WIDTHS.find((x) => x >= width) || WIDTHS[WIDTHS.length - 1];
  return optPath(src, w);
}
