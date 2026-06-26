import fs from "node:fs";
import path from "node:path";

// Lets the shop owner add real photography without touching any code:
// drop a file named "<id>.jpg" (or .jpeg/.png/.webp) into public/images/
// and the matching marketing section picks it up automatically. Used only
// from Server Components — marketing pages call this, then pass the
// resolved path (or null) down to the client-safe <PlaceholderImage>.

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

export function resolveMarketingImage(id) {
  for (const ext of EXTENSIONS) {
    const file = `${id}.${ext}`;
    if (fs.existsSync(path.join(IMAGES_DIR, file))) {
      return `/images/${file}`;
    }
  }
  return null;
}
