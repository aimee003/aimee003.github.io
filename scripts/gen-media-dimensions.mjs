// Records the pixel dimensions of everything in public/img so the gallery can
// lay images out at their true aspect ratio (and next/image can reserve the
// right space). Videos borrow their poster's dimensions — the posters were
// extracted from the source footage, so the ratio matches.
//
// Run after adding media:  npm run media:dims

import fs from "node:fs";
import path from "node:path";

const IMG_DIR = path.join(process.cwd(), "public", "img");
const OUT = path.join(process.cwd(), "lib", "media-dimensions.json");

// Minimal header parsers — avoids pulling an image library into the project.
function pngSize(buf) {
  if (buf.readUInt32BE(0) !== 0x89504e47) return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function jpegSize(buf) {
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xff) {
      i++;
      continue;
    }
    const marker = buf[i + 1];
    // SOF0–SOF15, excluding the non-frame markers DHT/JPG/DAC.
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
    }
    i += 2 + buf.readUInt16BE(i + 2);
  }
  return null;
}

const sizeOf = (file) => {
  const buf = fs.readFileSync(path.join(IMG_DIR, file));
  return path.extname(file).toLowerCase() === ".png" ? pngSize(buf) : jpegSize(buf);
};

const dims = {};
const files = fs.readdirSync(IMG_DIR).sort();

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;
  const size = sizeOf(file);
  if (size) dims[`/img/${file}`] = size;
}

// Videos inherit their poster's dimensions.
for (const file of files) {
  if (path.extname(file).toLowerCase() !== ".mp4") continue;
  const poster = `/img/${path.basename(file, ".mp4")}-poster.jpg`;
  if (dims[poster]) dims[`/img/${file}`] = dims[poster];
  else console.warn(`no poster for ${file} — gallery will fall back to 4:3`);
}

fs.writeFileSync(OUT, JSON.stringify(dims, null, 2) + "\n");
console.log(`wrote ${Object.keys(dims).length} entries to lib/media-dimensions.json`);
