"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { progetti } from "@/data/progetti";

/**
 * L'indice è tutta la home. A riposo mostra solo i quattro nomi;
 * passando su uno di essi la sua cover riempie lo sfondo.
 *
 * Lo stato dell'elemento attivo sta in React e non in CSS perché i
 * quattro strati di sfondo vivono in cima al DOM: con un livello per
 * voce, la fotografia dell'ultima coprirebbe i nomi delle precedenti.
 */
export function IndiceProgetti() {
  const [attivo, setAttivo] = useState<string | null>(null);

  return (
    <>
      <div className="indice-sfondo" aria-hidden>
        {progetti.map((p) => (
          <div
            key={p.slug}
            className="indice-strato"
            data-attivo={attivo === p.slug}
          >
            <Image
              src={p.cover.src}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>

      <ul className="indice-lista relative z-10 flex flex-col gap-3 md:gap-1">
        {progetti.map((p, i) => (
          <li key={p.slug}>
            <Link
              href={`/progetti/${p.slug}`}
              className="indice-voce group block"
              onMouseEnter={() => setAttivo(p.slug)}
              onMouseLeave={() => setAttivo(null)}
              onFocus={() => setAttivo(p.slug)}
              onBlur={() => setAttivo(null)}
            >
              {/* Usata solo dove l'hover non esiste: lì ogni voce è una fascia. */}
              <span className="indice-fascia" aria-hidden>
                <Image
                  src={p.cover.src}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover"
                  // La prima fascia è subito in vista: differirla farebbe
                  // lampeggiare il nero in cima alla pagina.
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </span>

              <span className="indice-nome block">{p.nome}</span>
              <span className="indice-meta occhiello mt-2 block md:mt-1">
                {p.settore} · {p.anno}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
