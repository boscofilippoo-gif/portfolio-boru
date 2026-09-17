// Estrae le immagini incorporate in un PDF, alla loro risoluzione originale.
//
//   node estrai-immagini.mjs <file.pdf> <cartella-destinazione> [larghezzaMinima]
//
// Su questa macchina non c'è nessuno strumento PDF (pdftoppm, pdftotext,
// mutool), e `sips` rasterizza solo la prima pagina. Da qui il parser: legge
// gli oggetti di primo livello, riconosce gli XObject immagine e ne scrive il
// contenuto. Rasterizzare le pagine darebbe schermate; questo dà gli originali.
import sharp from "sharp";
import zlib from "node:zlib";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { basename } from "node:path";

const [, , pdf, destinazione, largMin = "700"] = process.argv;
if (!pdf || !destinazione) {
  console.error("uso: node estrai-immagini.mjs <file.pdf> <cartella> [largMin]");
  process.exit(1);
}

const buf = readFileSync(pdf);
const testo = buf.toString("latin1");

/** Dizionario che precede uno stream, con le parentesi angolari bilanciate. */
function dizionario(da) {
  const inizio = testo.indexOf("<<", da);
  if (inizio === -1) return null;
  let livello = 0;
  for (let i = inizio; i < testo.length - 1; i++) {
    if (testo[i] === "<" && testo[i + 1] === "<") { livello++; i++; }
    else if (testo[i] === ">" && testo[i + 1] === ">") {
      livello--; i++;
      if (livello === 0) return { testo: testo.slice(inizio, i + 1), fine: i + 1 };
    }
  }
  return null;
}

const numero = (d, chiave) => {
  const m = d.match(new RegExp("/" + chiave + "\\s+(\\d+)"));
  return m ? +m[1] : null;
};

/** I canali per pixel, dallo spazio colore dichiarato. */
function canali(d) {
  if (/\/DeviceGray|\/CalGray/.test(d)) return 1;
  if (/\/DeviceCMYK/.test(d)) return 4;
  if (/\/DeviceRGB|\/CalRGB/.test(d)) return 3;
  const icc = d.match(/\/ICCBased[\s\S]{0,80}?\/N\s+(\d)/);
  if (icc) return +icc[1];
  return 3;
}

mkdirSync(destinazione, { recursive: true });

const prefisso = basename(pdf).replace(/\.pdf$/i, "").replace(/[^a-z0-9]+/gi, "-").toLowerCase();
let trovate = 0, scritte = 0, saltate = 0;
const elenco = [];

for (const m of testo.matchAll(/(\d+)\s+(\d+)\s+obj\b/g)) {
  const d = dizionario(m.index);
  if (!d || !/\/Subtype\s*\/Image/.test(d.testo)) continue;
  trovate++;

  const w = numero(d.testo, "Width"), h = numero(d.testo, "Height");
  const bpc = numero(d.testo, "BitsPerComponent") ?? 8;
  if (!w || !h) { saltate++; continue; }
  if (w < +largMin) { saltate++; continue; }
  // Le maschere di trasparenza non sono fotografie.
  if (/\/ImageMask\s+true/.test(d.testo)) { saltate++; continue; }

  const s = testo.indexOf("stream", d.fine);
  if (s === -1) { saltate++; continue; }
  let inizio = s + 6;
  if (buf[inizio] === 13) inizio++;
  if (buf[inizio] === 10) inizio++;
  const fine = testo.indexOf("endstream", inizio);
  const dati = buf.slice(inizio, fine);

  const nome = `${prefisso}-${String(m[1]).padStart(4, "0")}-${w}x${h}`;
  try {
    if (/\/DCTDecode/.test(d.testo)) {
      // Già JPEG: si scrive così com'è, senza ricomprimere.
      writeFileSync(`${destinazione}/${nome}.jpg`, dati);
    } else if (/\/FlateDecode/.test(d.testo) && bpc === 8) {
      const grezzi = zlib.inflateSync(dati);
      const ch = canali(d.testo);
      if (grezzi.length < w * h * ch) { saltate++; continue; }
      await sharp(grezzi.slice(0, w * h * ch), { raw: { width: w, height: h, channels: ch } })
        .jpeg({ quality: 92 })
        .toFile(`${destinazione}/${nome}.jpg`);
    } else {
      saltate++;
      continue;
    }
    scritte++;
    elenco.push({ nome, w, h, prop: +(w / h).toFixed(2) });
  } catch {
    saltate++;
  }
}

elenco.sort((a, b) => b.w * b.h - a.w * a.h);
console.log(`${basename(pdf)}: ${trovate} immagini, ${scritte} estratte, ${saltate} saltate`);
for (const e of elenco.slice(0, 12)) console.log(`   ${e.w}x${e.h}  ${e.prop}  ${e.nome}.jpg`);
