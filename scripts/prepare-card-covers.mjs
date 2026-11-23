import { execFileSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";

// A replaced cover can reuse the original URL. Serve its original until the
// thumbnail publisher has verified the replacement against this Git revision.
const manifest = JSON.parse(await readFile("data/card-thumbnails.json","utf8"));
const verified = {};
try {
  const tree = execFileSync("git", ["ls-tree","-rz","HEAD","--","public/images/products"], {encoding:"utf8",maxBuffer:12_000_000});
  for (const row of tree.split("\0").filter(Boolean)) {
    const [meta,file] = row.split("\t");
    const path = file.slice("public".length);
    const thumbnail = manifest[path];
    if (thumbnail?.blob === meta.split(" ")[2]) verified[path] = thumbnail.key;
  }
} catch {
  console.warn("Git source revisions unavailable. Product cards will show their originals.");
}
await writeFile("data/build-card-covers.json",JSON.stringify(verified)+"\n");
