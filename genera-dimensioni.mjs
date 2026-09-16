// Rigenera data/dimensioni.ts leggendo le dimensioni reali dei file in
// public/progetti. Da rilanciare ogni volta che si aggiungono immagini:
//   node genera-dimensioni.mjs
import sharp from "sharp";
import { readdir, writeFile } from "node:fs/promises";

const base = "public/progetti";
const righe = [];

for (const slug of (await readdir(base, { withFileTypes: true }))
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort()) {
  for (const file of (await readdir(`${base}/${slug}`)).sort()) {
    if (!/\.(jpe?g|png|webp|avif)$/i.test(file)) continue;
    const { width, height } = await sharp(`${base}/${slug}/${file}`).metadata();
    righe.push(`  "/progetti/${slug}/${file}": [${width}, ${height}],`);
  }
}

await writeFile(
  "data/dimensioni.ts",
  `// Generato da genera-dimensioni.mjs — non modificare a mano.\n` +
    `export const dimensioni: Record<string, [number, number]> = {\n` +
    righe.join("\n") +
    `\n};\n\nexport function misura(src: string): { width: number; height: number } {\n` +
    `  const d = dimensioni[src];\n` +
    `  // Se un'immagine non è in mappa si assume 4:3: meglio una proporzione\n` +
    `  // plausibile che un errore in pagina.\n` +
    `  return d ? { width: d[0], height: d[1] } : { width: 1600, height: 1200 };\n}\n`,
);

console.log(`${righe.length} immagini mappate`);
