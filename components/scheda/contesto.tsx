import type { Progetto } from "@/data/progetti";

export function Contesto({ contesto }: { contesto: Progetto["contesto"] }) {
  return (
    <section className="grid gap-5 md:grid-cols-[180px_1fr] md:gap-10">
      <h2 className="occhiello pt-2">Il contesto</h2>
      <div className="max-w-[62ch]">
        <p className="testo-tenue text-[17px] leading-[1.75]">{contesto.testo}</p>
        <ul className="mt-8 space-y-3">
          {contesto.punti.map((punto) => (
            <li
              key={punto}
              className="testo-tenue flex gap-3.5 text-[15px] leading-relaxed"
            >
              <span
                aria-hidden
                className="mt-2.5 h-px w-4 shrink-0 bg-[color-mix(in_srgb,var(--color-porcellana)_35%,transparent)]"
              />
              {punto}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
