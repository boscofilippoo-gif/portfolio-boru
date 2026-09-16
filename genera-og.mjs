// Genera le immagini di condivisione (1200x630, JPEG).
// JPEG e non WebP: alcuni scraper — WhatsApp in particolare — non mostrano
// l'anteprima se l'immagine è WebP.
//   node genera-og.mjs
import sharp from "sharp";

const W = 1200, H = 630;
const NERO = { r: 0x1a, g: 0x16, b: 0x13 };

const slug = ["eddyline", "swapa", "konsulto", "miwa"];

for (const s of slug) {
  await sharp(`public/progetti/${s}/cover.webp`)
    .resize(W, H, { fit: "cover", position: "centre" })
    .jpeg({ quality: 84 })
    .toFile(`public/og/${s}.jpg`);
}

// Home: fondo di marca e logo al centro.
const logo = await sharp("public/logo-boru.png").resize({ height: 200 }).toBuffer();
await sharp({ create: { width: W, height: H, channels: 3, background: NERO } })
  .composite([{ input: logo, gravity: "centre" }])
  .jpeg({ quality: 88 })
  .toFile("public/og/home.jpg");

console.log(`${slug.length + 1} immagini di condivisione generate`);
