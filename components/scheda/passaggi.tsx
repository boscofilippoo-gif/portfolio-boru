import type { Capitolo } from "@/data/progetti";

export function Passaggi({ passaggi }: { passaggi: Capitolo["passaggi"] }) {
  return (
    <section>
      <h2 className="occhiello">Come l&rsquo;abbiamo costruito</h2>

      <ol className="mt-8">
        {passaggi.map((p, i) => (
          <li
            key={p.titolo}
            className="grid gap-2 border-t border-[color-mix(in_srgb,var(--color-porcellana)_10%,transparent)] py-8 md:grid-cols-[72px_1fr] md:gap-8"
          >
            <span
              aria-hidden
              className="font-[family-name:var(--font-display)] text-2xl font-semibold tabular-nums text-[color-mix(in_srgb,var(--color-porcellana)_22%,transparent)]"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="max-w-[62ch]">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight">
                {p.titolo}
              </h3>
              <p className="testo-tenue mt-2.5 text-[15px] leading-[1.75]">{p.testo}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
