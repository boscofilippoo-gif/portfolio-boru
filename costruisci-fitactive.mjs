// Cover di FitActive. Non esistono immagini utilizzabili: le creatività non
// sono nel progetto, quelle della casa madre sono di terzi e le foto delle
// sedi non hanno liberatoria. La cover rappresenta quindi la decisione del
// progetto — un modello, trentatré declinazioni — nei colori del marchio.
// Se arriva il deck del piano di partenza, va sostituita con le sue slide.
//
//   node costruisci-fitactive.mjs
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const ARANCIO = "#F5821F";
const NERO = "#161616";
const CREMA = "#FDEFE2";

/** Una tessera con un accenno di struttura: barra in alto e due righe. */
function tessera(x, y, w, h, colore, dettaglio) {
  const r = Math.round(w * 0.09);
  const p = Math.round(w * 0.12);
  const barra = Math.round(h * 0.42);
  const riga = Math.max(2, Math.round(h * 0.045));
  const inchiostro = colore === CREMA ? "#1F1F1F" : "#7A3C06";
  return `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${colore}"/>
    <rect x="${x + p}" y="${y + p}" width="${w - p * 2}" height="${barra}" rx="${Math.round(r * 0.6)}" fill="${inchiostro}" opacity="0.14"/>
    ${dettaglio ? `
    <rect x="${x + p}" y="${y + p + barra + p * 0.7}" width="${(w - p * 2) * 0.82}" height="${riga}" rx="${riga / 2}" fill="${inchiostro}" opacity="0.5"/>
    <rect x="${x + p}" y="${y + p + barra + p * 0.7 + riga * 2.4}" width="${(w - p * 2) * 0.55}" height="${riga}" rx="${riga / 2}" fill="${inchiostro}" opacity="0.32"/>` : ""}
  `;
}

function griglia({ larg, alt, verticale }) {
  const pezzi = [];

  if (!verticale) {
    // Il modello a sinistra, le trentatré declinazioni a destra.
    const mw = Math.round(larg * 0.23), mh = Math.round(mw / 0.74);
    pezzi.push(tessera(Math.round(larg * 0.08), Math.round((alt - mh) / 2), mw, mh, CREMA, true));

    const col = 6, righe = 6, conta = 33;
    const zona = larg * 0.52, x0 = larg * 0.4;
    const tw = Math.round((zona - (col - 1) * larg * 0.012) / col);
    const th = Math.round(tw / 0.74);
    const gx = Math.round(larg * 0.012), gy = Math.round(alt * 0.016);
    const y0 = Math.round((alt - (righe * th + (righe - 1) * gy)) / 2);
    for (let i = 0; i < conta; i++) {
      pezzi.push(tessera(Math.round(x0 + (i % col) * (tw + gx)), y0 + Math.floor(i / col) * (th + gy), tw, th, ARANCIO, false));
    }
  } else {
    // Sei colonne e modello più contenuto: con cinque colonne servono sette
    // righe, e in un 9:16 non ci stanno.
    const mw = Math.round(larg * 0.34), mh = Math.round(mw / 0.74);
    pezzi.push(tessera(Math.round((larg - mw) / 2), Math.round(alt * 0.07), mw, mh, CREMA, true));

    const col = 6, conta = 33;
    const zona = larg * 0.76, x0 = larg * 0.12;
    const tw = Math.round((zona - (col - 1) * larg * 0.02) / col);
    const th = Math.round(tw / 0.74);
    const gx = Math.round(larg * 0.02), gy = Math.round(alt * 0.013);
    const y0 = Math.round(alt * 0.07 + mh + alt * 0.05);
    for (let i = 0; i < conta; i++) {
      pezzi.push(tessera(Math.round(x0 + (i % col) * (tw + gx)), y0 + Math.floor(i / col) * (th + gy), tw, th, ARANCIO, false));
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${larg}" height="${alt}" viewBox="0 0 ${larg} ${alt}">
    <rect width="${larg}" height="${alt}" fill="${NERO}"/>
    ${pezzi.join("")}
  </svg>`;
}

mkdirSync("public/progetti/fitactive", { recursive: true });

await sharp(Buffer.from(griglia({ larg: 1600, alt: 1200, verticale: false })))
  .webp({ quality: 88 }).toFile("public/progetti/fitactive/cover.webp");

await sharp(Buffer.from(griglia({ larg: 1080, alt: 1920, verticale: true })))
  .webp({ quality: 88 }).toFile("public/progetti/fitactive/cover-verticale.webp");

console.log("cover FitActive pronte");
