// Cloudflare serves identical Next navigation payloads at their original URLs
// using same-site 200 rewrites. Other static hosts retain the full export.
import fs from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";

if (process.env.CF_PAGES !== "1" && !process.argv.includes("--pages")) process.exit(0);
const root = await fs.realpath("out");
const watches = path.join(root, "watches");
const redirectFile = path.join(root, "_redirects");
try {
  await fs.access(redirectFile);
  console.log("Existing Pages redirect policy retained; using the full export.");
  process.exit(0);
} catch (err) { if (err.code !== "ENOENT") throw err; }
const directories = (await fs.readdir(watches, {withFileTypes:true})).filter(d=>d.isDirectory());
const candidates = ["__next._index.txt","__next.watches.txt"];
const rules = [];
const duplicates = [];
for (const name of candidates) {
  const group = [];
  let common;
  for (const dir of directories) {
    const file = path.join(watches, dir.name, name);
    let bytes;
    try { bytes = await fs.readFile(file); } catch(err) { if(err.code==="ENOENT") continue; throw err; }
    if (common && !common.equals(bytes)) { group.length=0; break; }
    common = bytes;
    group.push(file);
  }
  if (group.length < 2) continue;
  const key = createHash("sha256").update(common).digest("hex");
  const target = "/_shared-layout/" + key + ".txt";
  await fs.mkdir(path.join(root,"_shared-layout"),{recursive:true});
  await fs.writeFile(path.join(root,target),common);
  rules.push("/watches/:sku/" + name + " " + target + " 200");
  duplicates.push(...group);
}
if (rules.length) {
  await fs.writeFile(redirectFile, rules.join("\n")+"\n", {flag:"wx"});
  for (const file of duplicates) {
    const actual = await fs.realpath(file);
    if (actual !== file || !actual.startsWith(watches + path.sep)) throw new Error("Unexpected export path: "+file);
    await fs.unlink(file);
  }
}
console.log("Shared layout routes:", rules.length, "duplicate files:", duplicates.length);
