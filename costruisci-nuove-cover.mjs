// Prepara cover e gallerie dei tre progetti nuovi a partire dalle immagini
// estratte dai PDF con estrai-immagini.mjs.
//
//   node costruisci-nuove-cover.mjs <cartella-estratte>
//
// Script usa e getta: una volta che le immagini sono in public/progetti non
// serve più, ma resta come traccia di quali originali sono stati usati.
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const base = process.argv[2];
if (!base) { console.error("manca la cartella delle immagini estratte"); process.exit(1); }

const NERO = { r: 0x1a, g: 0x16, b: 0x13 };
const orizz = (f, out) => sharp(f).resize(1600, 1200, { fit: "cover", position: "centre" }).webp({ quality: 80 }).toFile(out);
const vert  = (f, out) => sharp(f).resize(1080, 1920, { fit: "cover", position: "centre" }).webp({ quality: 80 }).toFile(out);
const gal   = (f, out, w = 2000) => sharp(f).resize({ width: w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out);

const cap = `${base}/cappelletti/catalogo-cappelletti`;
const moz = `${base}/mozzarella/mozzarella-experienxe-orizzontale-2-`;
const cha = `${base}/charms/charms-nuovi-packaging`;

for (const d of ["cappelletti", "charms", "mozzarella"]) mkdirSync(`public/progetti/${d}`, { recursive: true });

// ---------------------------------------------------------------- Cappelletti
await orizz(`${cap}-0306-3110x2074.jpg`, "public/progetti/cappelletti/cover.webp");
await vert(`${cap}-0406-2328x3492.jpg`, "public/progetti/cappelletti/cover-verticale.webp");
await gal(`${cap}-0323-3277x1584.jpg`, "public/progetti/cappelletti/vigneto.webp");
await gal(`${cap}-0297-1894x1263.jpg`, "public/progetti/cappelletti/bottiglie.webp");
await gal(`${cap}-0277-1167x1750.jpg`, "public/progetti/cappelletti/degustazione.webp");
await gal(`${cap}-0657-2381x1588.jpg`, "public/progetti/cappelletti/birra.webp");
await gal(`${cap}-0624-2500x1667.jpg`, "public/progetti/cappelletti/bancone.webp");

// ----------------------------------------------------------------- Mozzarella
// Gli originali sono a 800px: la cover va ingrandita. Sotto il velo scuro
// dell'indice non si nota, ma se arrivano gli scatti originali va rifatta.
await orizz(`${moz}-0074-800x533.jpg`, "public/progetti/mozzarella/cover.webp");
await vert(`${moz}-0109-533x800.jpg`, "public/progetti/mozzarella/cover-verticale.webp");
await gal(`${moz}-0102-800x600.jpg`, "public/progetti/mozzarella/visitatori.webp");
await gal(`${moz}-0170-533x800.jpg`, "public/progetti/mozzarella/lavorazione.webp");
await gal(`${moz}-0073-800x533.jpg`, "public/progetti/mozzarella/mandria.webp");
await gal(`${moz}-0124-800x533.jpg`, "public/progetti/mozzarella/caprese.webp");
await gal(`${moz}-0118-800x533.jpg`, "public/progetti/mozzarella/sala.webp");

// --------------------------------------------------------------------- Charms
// I pacchetti sono isolati su nero puro. Composti in `lighten` sul nero di
// marca, il fondo scompare invece di lasciare un rettangolo più scuro.

/**
 * Trova il pacchetto dentro il mockup. Non basta ritagliare il nero: l'ombra
 * è larga quanto il pacchetto e, soprattutto, il pacchetto non è centrato —
 * sta a destra e l'ombra si allunga a sinistra. Un ritaglio centrato gli
 * taglierebbe un fianco. Qui si cercano le colonne e le righe davvero accese.
 */
async function riquadroPacchetto(buffer) {
  const { data, info } = await sharp(buffer).greyscale().raw().toBuffer({ resolveWithObject: true });
  const acceso = 60;
  let x1 = info.width, x2 = 0, y1 = info.height, y2 = 0;

  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      if (data[y * info.width + x] <= acceso) continue;
      if (x < x1) x1 = x;
      if (x > x2) x2 = x;
      if (y < y1) y1 = y;
      if (y > y2) y2 = y;
    }
  }

  const margine = Math.round((x2 - x1) * 0.02);
  const left = Math.max(0, x1 - margine);
  const top = Math.max(0, y1 - margine);
  return {
    left, top,
    width: Math.min(info.width - left, x2 - x1 + margine * 2),
    height: Math.min(info.height - top, y2 - y1 + margine * 2),
  };
}
async function pacchettiSuNero(file, largh, alt, out, scala = 0.86) {
  // Ogni pacchetto viene scalato per ALTEZZA e non dentro una cella: il
  // ritaglio del nero tiene anche l'ombra, che è larga, quindi vincolarsi
  // alla larghezza rimpicciolirebbe il pacchetto lasciando la cella vuota.
  const h = Math.round(alt * scala);
  const scalati = [];
  for (const f of file) {
    const t = await sharp(f).trim({ background: "#000000", threshold: 12 }).toBuffer();
    const b = await sharp(t).extract(await riquadroPacchetto(t)).resize({ height: h }).toBuffer();
    scalati.push({ dati: b, larg: (await sharp(b).metadata()).width });
  }

  // I pacchetti sono scalati per altezza, quindi la larghezza totale non è
  // nota prima: se sfora si riscala tutto, altrimenti si sovrappongono.
  const spazio = Math.round(largh * 0.04);
  let largTotale = scalati.reduce((a, s) => a + s.larg, 0) + spazio * (file.length - 1);
  if (largTotale > largh) {
    const fattore = largh / largTotale;
    for (const s of scalati) {
      s.dati = await sharp(s.dati).resize({ width: Math.max(1, Math.floor(s.larg * fattore)) }).toBuffer();
      s.larg = (await sharp(s.dati).metadata()).width;
    }
    largTotale = scalati.reduce((a, s) => a + s.larg, 0) + spazio * (file.length - 1);
  }

  const altEffettiva = (await sharp(scalati[0].dati).metadata()).height;
  let x = Math.round((largh - largTotale) / 2);
  const tessere = [];
  for (const s of scalati) {
    tessere.push({ input: s.dati, left: x, top: Math.round((alt - altEffettiva) / 2), blend: "lighten" });
    x += s.larg + spazio;
  }

  return sharp({ create: { width: largh, height: alt, channels: 3, background: NERO } })
    .composite(tessere).webp({ quality: 82 }).toFile(out);
}

await pacchettiSuNero(
  // Due e non tre: in tre si vincolano alla larghezza e restano piccoli.
  [`${cha}-0050-2598x2079.jpg`, `${cha}-0024-2598x2079.jpg`],
  1600, 1200, "public/progetti/charms/cover.webp", 0.88,
);
await pacchettiSuNero([`${cha}-0050-2598x2079.jpg`], 1080, 1920, "public/progetti/charms/cover-verticale.webp", 0.58);
await pacchettiSuNero(
  [`${cha}-0011-2598x2079.jpg`, `${cha}-0024-2598x2079.jpg`, `${cha}-0037-2598x2079.jpg`, `${cha}-0050-2598x2079.jpg`],
  2000, 1000, "public/progetti/charms/linea-emoji.webp", 0.9,
);
await pacchettiSuNero(
  [`${cha}-0153-2598x2079.jpg`, `${cha}-0166-2598x2079.jpg`, `${cha}-0179-2598x2079.jpg`, `${cha}-0192-2598x2079.jpg`],
  2000, 1000, "public/progetti/charms/linea-personaggi.webp", 0.9,
);
await gal(`${cha}-0015-2154x1399.jpg`, "public/progetti/charms/esecutivo.webp");
await gal(`${cha}-0222-2598x2079.jpg`, "public/progetti/charms/party-squad.webp", 1400);

console.log("fatto");
