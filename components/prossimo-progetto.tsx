import Link from "next/link";
import type { Progetto } from "@/data/progetti";

export function ProssimoProgetto({ progetto }: { progetto: Progetto }) {
  return (
    <nav className="mt-28 border-t border-[color-mix(in_srgb,var(--color-porcellana)_12%,transparent)] pt-10 md:mt-40">
      <p className="occhiello">Progetto successivo</p>
      <Link
        href={`/progetti/${progetto.slug}`}
        className="group mt-4 inline-flex items-baseline gap-4"
      >
        <span className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight transition-colors group-hover:text-azzurro md:text-5xl">
          {progetto.nome}
        </span>
        <span
          aria-hidden
          className="text-2xl transition-transform group-hover:translate-x-1"
        >
          &rarr;
        </span>
      </Link>
    </nav>
  );
}
