// Run from a clean catalog checkout with a bucket-scoped Cloudflare API credential.
import { readFile, writeFile, rename } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import sharp from "sharp";

const token = process.env.CLOUDFLARE_API_TOKEN;
const account = process.env.CLOUDFLARE_ACCOUNT_ID;
if (!token || !account) throw new Error("Set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN");
const media = "https://images.formosa31.com";
const destination = "data/card-thumbnails.json";
const products = JSON.parse(await readFile("data/products.json", "utf8"));
const migrated = JSON.parse(await readFile("data/r2-media.json", "utf8"));
let saved;
try { saved = JSON.parse(await readFile(destination, "utf8")); }
catch (err) { if (err.code !== "ENOENT") throw err; saved = {}; }
const entries = execFileSync("git", ["ls-tree", "-rz", "HEAD", "--", "public/images/products"], {encoding:"utf8", maxBuffer: 12_000_000}).split("\0").filter(Boolean);
const blobs = new Map(entries.map(entry => { const [meta, path] = entry.split("\t"); return [path.slice(6), meta.split(" ")[2]]; }));
const covers = [...new Set(products.filter(p => p.status === "published").map(p => p.images?.[0]).filter(Boolean))];
const digest = (type, data) => createHash(type).update(data).digest("hex");
const output = {};
const queue = covers.values();
let done = 0;
async function request(url, options) {
 const response = await fetch(url, {...options, redirect: "error", signal: AbortSignal.timeout(60000)});
 if (!response.ok) throw new Error("HTTP " + response.status + " at " + new URL(url).hostname);
 return response;
}
async function processCover(path) {
 const blob = blobs.get(path);
 if (!blob) throw new Error("Missing tracked source " + path);
 if (saved[path]?.blob === blob) return saved[path];
 const url = migrated[path] ? media + path + "?v=" + migrated[path] : "https://formosa31.com" + path;
 const original = Buffer.from(await (await request(url)).arrayBuffer());
 const gitHash = digest("sha1", Buffer.concat([Buffer.from("blob " + original.length + "\0"), original]));
 if (gitHash !== blob) throw new Error("Source digest differs for " + path);
 const bytes = await sharp(original).rotate().resize({width: 600,height:600, fit:"inside",withoutEnlargement:true}).webp({quality:79}).toBuffer();
 const sha = digest("sha256", bytes);
 const key = "cards/v1/" + sha + ".webp";
 const api = "https://api.cloudflare.com/client/v4/accounts/" + account + "/r2/buckets/formosa31-public-media/objects/" + key;
 await request(api, {method:"PUT",headers:{Authorization:"Bearer " + token, "Content-Type":"image/webp","Cache-Control":"public, max-age=31536000, immutable"},body:bytes});
 const live = await request(media + "/" + key);
 if (!live.headers.get("content-type")?.startsWith("image/webp") || digest("sha256",Buffer.from(await live.arrayBuffer())) !== sha) throw new Error("CDN mismatch " + path);
 return {blob, key};
}
async function worker() {
 for(const path of queue) {
  for(let attempt=1;;attempt++) {
   try {output[path]=await processCover(path);break;} catch(err){if(attempt>=5)throw new Error(path+" "+err.message); await new Promise(r=>setTimeout(r,Math.min(12000,attempt*2000)));}
  }
  if(++done%100===0) console.log(done + "/" + covers.length);
 }
}
const results=await Promise.allSettled(Array.from({length:6},worker));
const failure=results.find(r=>r.status==="rejected");
const ordered=Object.fromEntries(Object.entries({...saved,...output}).sort(([a],[b])=>a.localeCompare(b,"en")));
await writeFile(destination+".tmp",JSON.stringify(ordered,null,2)+"\n");
await rename(destination+".tmp",destination);
if(failure) throw failure.reason;
console.log("Verified covers: "+done);
