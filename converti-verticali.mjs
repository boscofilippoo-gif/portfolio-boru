// Converte le foto verticali consegnate in da-elaborare/ nelle cover per il
// telefono. Da rilanciare quando ne arrivano di nuove:
//   node converti-verticali.mjs
import sharp from "sharp";
import { readdir } from "node:fs/promises";

const LARG = 1080; // 9:16 — oltre non serve: nessun telefono ne mostra di più

for (const file of (await readdir("da-elaborare")).sort()) {
  const m = file.match(/^([a-z-]+)\.(jpe?g|png|heic|heif|webp)$/i);
  if (!m) continue;
  const slug = m[1];

  const img = sharp(`da-elaborare/${file}`);
  const meta = await img.metadata();
  const dest = `public/progetti/${slug}/cover-verticale.webp`;

  await img
    .resize(LARG, Math.round((LARG * 16) / 9), { fit: "cover", position: "centre" })
    .webp({ quality: 80 })
    .toFile(dest);

  const out = await sharp(dest).metadata();
  console.log(
    `${slug.padEnd(10)} ${meta.width}x${meta.height} ${meta.format} → ` +
      `${out.width}x${out.height} webp, ${Math.round(out.size / 1024)} KB`,
  );
}
