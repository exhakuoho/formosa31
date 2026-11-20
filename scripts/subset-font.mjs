// The full Noto Sans TC variable font is 5.4 MB — the single biggest thing on
// every page. This trims it to only the characters the site actually uses
// (all text in app/, components/, lib/ and data/products.json), which is
// typically ~150 KB. Runs automatically before `npm run build` / `npm run dev`,
// so new product names are always covered.
import fs from "node:fs/promises";
import path from "node:path";
import subsetFont from "subset-font";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "app/fonts/NotoSansTC-Variable.woff2");
const OUT = path.join(ROOT, "app/fonts/NotoSansTC-Subset.woff2");
const SCAN = ["app", "components", "lib", "data"];
const TEXT_EXT = /\.(js|jsx|mjs|ts|tsx|json|css|md)$/i;

async function collect(dir, acc) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await collect(p, acc);
    else if (TEXT_EXT.test(e.name)) acc.push(await fs.readFile(p, "utf8"));
  }
  return acc;
}

const texts = [];
for (const d of SCAN) await collect(path.join(ROOT, d), texts);

const chars = new Set();
// Always keep printable ASCII + common CJK/full-width punctuation, so
// anything typed into the search box or form still renders in this font.
for (let c = 0x20; c < 0x7f; c++) chars.add(String.fromCodePoint(c));
for (const r of [[0x2000, 0x206f], [0x3000, 0x303f], [0xff00, 0xffef]]) {
  for (let c = r[0]; c <= r[1]; c++) chars.add(String.fromCodePoint(c));
}
for (const t of texts) for (const ch of t) if (ch.codePointAt(0) > 0x7f) chars.add(ch);

const started = Date.now();
const full = await fs.readFile(SRC);
const subset = await subsetFont(full, [...chars].join(""), { targetFormat: "woff2" });
await fs.writeFile(OUT, subset);
console.log(
  `[subset-font] ${chars.size} glyphs, ${(full.length / 1e6).toFixed(1)} MB -> ${(subset.length / 1e3).toFixed(0)} KB in ${((Date.now() - started) / 1000).toFixed(1)}s`,
);
