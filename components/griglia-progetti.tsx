import Image from "next/image";
import Link from "next/link";
import { progetti } from "@/data/progetti";

export function GrigliaProgetti() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
      {progetti.map((p, i) => (
        <li key={p.slug}>
          <Link href={`/progetti/${p.slug}`} className="cella group">
            <div className="relative aspect-[4/3]">
              <Image
                src={p.cover.src}
                alt={p.cover.alt}
                fill
                className="cella-immagine object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={i === 0}
              />
              <div className="cella-velo" aria-hidden />
              <div className="cella-etichetta">
                <p className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                  {p.nome}
                </p>
                <p className="occhiello mt-1.5">{p.settore}</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
