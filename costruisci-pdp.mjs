// Prepara cover e galleria di Postura da Paura dalle schermate delle landing.
//   node costruisci-pdp.mjs <cartella-schermate>
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const SP = process.argv[2];
const D = "public/progetti/postura-da-paura";
mkdirSync(D, { recursive: true });

// Le catture sono a doppia densità: 1440x900 logici = 2880x1800 reali.
// Per la cover 4:3 si ritaglia la larghezza tenendo il centro, dove sta il
// titolo, invece di schiacciare l'immagine.
await sharp(`${SP}/basic-hero.png`)
  .extract({ left: 240, top: 0, width: 2400, height: 1800 })
  .resize(1600, 1200)
  .webp({ quality: 82 })
  .toFile(`${D}/cover.webp`);

await sharp(`${SP}/vert-basic.png`)
  .resize(1080, 1920, { fit: "cover", position: "top" })
  .webp({ quality: 82 })
  .toFile(`${D}/cover-verticale.webp`);

const gal = (src, out) =>
  sharp(`${SP}/${src}`).resize({ width: 2000 }).webp({ quality: 78 }).toFile(`${D}/${out}`);

await gal("basic-hero.png", "landing-basic.webp");
await gal("strong-hero.png", "landing-strong.webp");
await gal("menopausa-hero.png", "landing-menopausa.webp");
await gal("basic-2.png", "basic-sezione.webp");
await gal("strong-2.png", "strong-sezione.webp");

console.log("fatto");
