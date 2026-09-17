import Image from "next/image";
import Link from "next/link";
import type { Progetto } from "@/data/progetti";
import { misura } from "@/data/dimensioni";
import { Contesto } from "@/components/scheda/contesto";
import { Decisione } from "@/components/scheda/decisione";
import { Passaggi } from "@/components/scheda/passaggi";
import { Strumenti } from "@/components/scheda/strumenti";
import { Galleria } from "@/components/galleria";
import { ProssimoProgetto } from "@/components/prossimo-progetto";

export function SchedaProgetto({
  progetto,
  prossimo,
}: {
  progetto: Progetto;
  prossimo: Progetto;
}) {
  const cover = misura(progetto.cover.src);

  return (
    <article className="mx-auto max-w-[1100px] px-5 py-12 md:px-10 md:py-16">
      <Link
        href="/"
        className="occhiello inline-flex items-center gap-2 transition-colors hover:text-porcellana"
      >
        <span aria-hidden>&larr;</span> Tutti i lavori
      </Link>

      <header className="mt-14 md:mt-20">
        <h1 className="text-4xl font-semibold md:text-6xl">{progetto.nome}</h1>
        <p className="testo-tenue mt-3 text-xl md:text-2xl">{progetto.sottotitolo}</p>

        <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
          <div>
            <dt className="occhiello">Settore</dt>
            <dd className="mt-1.5 text-sm">{progetto.settore}</dd>
          </div>
          <div>
            <dt className="occhiello">Anno</dt>
            <dd className="mt-1.5 text-sm">{progetto.anno}</dd>
          </div>
          <div>
            <dt className="occhiello">Cosa abbiamo fatto</dt>
            <dd className="mt-1.5 text-sm">{progetto.cosaAbbiamoFatto.join(" · ")}</dd>
          </div>
          {progetto.crediti && (
            <div>
              <dt className="occhiello">Insieme a</dt>
              <dd className="mt-1.5 text-sm">
                {progetto.crediti.replace(/^con\s+/i, "")}
              </dd>
            </div>
          )}
          {progetto.sito && (
            <div>
              <dt className="occhiello">Sito</dt>
              <dd className="mt-1.5 text-sm">
                <a
                  href={progetto.sito}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-azzurro underline-offset-4 hover:underline"
                >
                  {progetto.sito.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                </a>
              </dd>
            </div>
          )}
        </dl>

        <p className="mt-12 max-w-2xl text-lg leading-relaxed md:text-xl">
          {progetto.intro}
        </p>
      </header>

      <div className="mt-14 overflow-hidden rounded-lg md:mt-20">
        <Image
          src={progetto.cover.src}
          alt={progetto.cover.alt}
          width={cover.width}
          height={cover.height}
          sizes="(max-width: 1100px) 100vw, 1100px"
          className="h-auto w-full"
          priority
        />
      </div>

      {progetto.capitoli.map((capitolo, i) => (
        <div key={capitolo.titolo ?? i}>
          {/* L'intestazione compare solo quando i capitoli sono più di uno:
              su una scheda sola sarebbe una divisione che non divide niente. */}
          {progetto.capitoli.length > 1 && (
            <header
              className={`border-t border-[color-mix(in_srgb,var(--color-porcellana)_14%,transparent)] pt-10 ${
                i === 0 ? "mt-28 md:mt-40" : "mt-32 md:mt-44"
              }`}
            >
              <p className="occhiello">Capitolo {String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-4 text-2xl font-semibold md:text-4xl">{capitolo.titolo}</h2>
              {capitolo.sottotitolo && (
                <p className="testo-tenue mt-2.5 max-w-2xl text-lg">{capitolo.sottotitolo}</p>
              )}
            </header>
          )}

          <div
            className={`space-y-28 md:space-y-36 ${
              progetto.capitoli.length > 1 ? "mt-20" : "mt-28 md:mt-40"
            }`}
          >
            <Contesto contesto={capitolo.contesto} />
            <Decisione decisione={capitolo.decisione} />
            <Passaggi passaggi={capitolo.passaggi} />
            <Strumenti strumenti={capitolo.strumenti} />

            <section className="grid gap-5 md:grid-cols-[180px_1fr] md:gap-10">
              <h2 className="occhiello pt-2">Come funziona adesso</h2>
              <p className="max-w-[62ch] text-[17px] leading-[1.75]">
                {capitolo.comeFunzionaAdesso}
              </p>
            </section>
          </div>
        </div>
      ))}

      <Galleria immagini={progetto.galleria} />

      <ProssimoProgetto progetto={prossimo} />
    </article>
  );
}
