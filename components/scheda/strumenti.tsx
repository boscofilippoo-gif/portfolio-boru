import type { Capitolo } from "@/data/progetti";

export function Strumenti({ strumenti }: { strumenti: Capitolo["strumenti"] }) {
  if (strumenti.length === 0) return null;

  return (
    <section>
      <h2 className="occhiello">Gli strumenti</h2>

      <dl className="mt-8 grid gap-x-12 md:grid-cols-2">
        {strumenti.map((s) => (
          <div
            key={s.nome}
            className="flex flex-col gap-1 border-t border-[color-mix(in_srgb,var(--color-porcellana)_10%,transparent)] py-5 sm:flex-row sm:gap-6"
          >
            <dt className="shrink-0 text-[15px] font-semibold sm:w-40">{s.nome}</dt>
            <dd className="testo-tenue text-[15px] leading-relaxed">{s.ruolo}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
