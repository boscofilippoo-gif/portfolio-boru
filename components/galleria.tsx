import Image from "next/image";
import type { Immagine } from "@/data/progetti";
import { misura } from "@/data/dimensioni";

/**
 * Colonna singola a larghezza piena. Le immagini mantengono la loro
 * proporzione nativa: sono per lo più schermate e schemi, e ritagliarle
 * taglia via proprio quello che devono mostrare.
 */
export function Galleria({ immagini }: { immagini: Immagine[] }) {
  if (immagini.length === 0) return null;

  return (
    <section className="mt-28 md:mt-40">
      <p className="occhiello">Immagini</p>
      <div className="mt-8 space-y-14 md:space-y-20">
        {immagini.map((im) => {
          const { width, height } = misura(im.src);
          return (
            <figure key={im.src}>
              <div className="overflow-hidden rounded-lg border border-[color-mix(in_srgb,var(--color-porcellana)_10%,transparent)] bg-[color-mix(in_srgb,var(--color-porcellana)_4%,transparent)]">
                <Image
                  src={im.src}
                  alt={im.alt}
                  width={width}
                  height={height}
                  sizes="(max-width: 1100px) 100vw, 1100px"
                  className="h-auto w-full"
                />
              </div>
              {im.didascalia && (
                <figcaption className="occhiello mt-4">
                  {im.didascalia}
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>
    </section>
  );
}
