/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pure static site — products come from data/products.json at build time,
  // the contact form posts to Web3Forms, so there's no server runtime needed.
  // `output: 'export'` emits plain HTML/CSS/JS into out/ that drops straight
  // onto Cloudflare Pages / any static host. Nothing to keep running, nothing
  // that can "sleep".
  output: "export",
  images: {
    // Static export can't run the on-the-fly image optimizer, so
    // scripts/optimize-images.mjs pre-builds WebP copies at these widths
    // (see lib/imageWidths.mjs) and this loader points next/image at them.
    loader: "custom",
    loaderFile: "./lib/imageLoader.js",
    deviceSizes: [768, 1536],
    imageSizes: [384],
  },
  // Pin the workspace root: the user's home directory has an unrelated
  // package-lock.json that would otherwise confuse Turbopack's auto-detection.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
