import type { Progetto } from "@/data/progetti";

export function Decisione({ decisione }: { decisione: Progetto["decisione"] }) {
  return (
    <section>
      <h2 className="occhiello">La decisione</h2>

      <blockquote className="mt-7 max-w-[20ch] font-[family-name:var(--font-display)] text-2xl leading-[1.25] font-semibold tracking-tight md:max-w-[24ch] md:text-4xl">
        &laquo;{decisione.citazione}&raquo;
      </blockquote>

      <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
        <div className="rounded-lg border border-[color-mix(in_srgb,var(--color-porcellana)_10%,transparent)] p-7">
          <h3 className="occhiello">{decisione.consueto.titolo}</h3>
          <p className="testo-tenue mt-4 text-[15px] leading-[1.75]">
            {decisione.consueto.testo}
          </p>
        </div>

        {/* L'unico accento di colore della pagina sta qui, e non è decorativo:
            segnala quale delle due colonne è la scelta fatta. */}
        <div className="rounded-lg border border-[color-mix(in_srgb,var(--color-azzurro)_45%,transparent)] bg-[color-mix(in_srgb,var(--color-azzurro)_5%,transparent)] p-7">
          <h3 className="occhiello text-azzurro">{decisione.invece.titolo}</h3>
          <p className="mt-4 text-[15px] leading-[1.75]">{decisione.invece.testo}</p>
        </div>
      </div>
    </section>
  );
}
