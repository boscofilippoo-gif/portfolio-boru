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

      <div className="mt-28 space-y-28 md:mt-40 md:space-y-36">
        <Contesto contesto={progetto.contesto} />
        <Decisione decisione={progetto.decisione} />
        <Passaggi passaggi={progetto.passaggi} />
        <Strumenti strumenti={progetto.strumenti} />

        <section className="grid gap-5 md:grid-cols-[180px_1fr] md:gap-10">
          <h2 className="occhiello pt-2">Come funziona adesso</h2>
          <p className="max-w-[62ch] text-[17px] leading-[1.75]">
            {progetto.comeFunzionaAdesso}
          </p>
        </section>
      </div>

      <Galleria immagini={progetto.galleria} />

      <ProssimoProgetto progetto={prossimo} />
    </article>
  );
}
