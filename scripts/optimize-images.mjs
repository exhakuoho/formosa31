// Pre-builds small WebP copies of every photo in public/images so the site
// never ships the original multi-MB PNG/JPG files to visitors.
//
//   public/images/products/X/01.png  ->  public/images/_opt/products/X/01-384.webp
//                                                                 01-768.webp
//                                                                 01-1536.webp
//
// lib/imageLoader.js points next/image at these files. Runs automatically
// before `npm run build` / `npm run dev`, and is incremental: an image is only
// (re)processed when its WebP copies are missing or older than the source.
import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import sharp from "sharp";
import { OPT_DIR, WIDTHS, optPath } from "../lib/imageWidths.mjs";

const ROOT = path.join(process.cwd(), "public");
const IMAGES = path.join(ROOT, "images");
const EXT = /\.(png|jpe?g|webp)$/i;

async function walk(dir) {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (p === path.join(ROOT, OPT_DIR)) continue;
      out.push(...(await walk(p)));
    } else if (EXT.test(e.name)) out.push(p);
  }
  return out;
}

const mtime = (p) => fs.stat(p).then((s) => s.mtimeMs, () => 0);

async function processOne(file) {
  const src = "/" + path.relative(ROOT, file).split(path.sep).join("/");
  const srcTime = await mtime(file);
  const targets = WIDTHS.map((w) => [w, path.join(ROOT, optPath(src, w))]);
  const stale = [];
  for (const [w, t] of targets) if ((await mtime(t)) < srcTime) stale.push([w, t]);
  if (!stale.length) return false;
  await fs.mkdir(path.dirname(stale[0][1]), { recursive: true });
  const input = await fs.readFile(file);
  for (const [w, t] of stale) {
    await sharp(input).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: 78, effort: 4 }).toFile(t);
  }
  return true;
}

const started = Date.now();
const files = await walk(IMAGES);
let done = 0;
let i = 0;
const workers = Array.from({ length: Math.max(2, os.cpus().length) }, async () => {
  while (i < files.length) {
    const f = files[i++];
    try {
      if (await processOne(f)) done++;
    } catch (err) {
      console.warn(`[optimize-images] skipped ${f}: ${err.message}`);
    }
  }
});
await Promise.all(workers);
console.log(`[optimize-images] ${files.length} images, ${done} (re)generated in ${((Date.now() - started) / 1000).toFixed(1)}s`);
