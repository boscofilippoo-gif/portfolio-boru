"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { progetti } from "@/data/progetti";

/**
 * L'indice è tutta la home: i quattro nomi, e la cover del progetto attivo
 * che riempie lo sfondo.
 *
 * Cosa rende attivo un progetto cambia con il dispositivo — il cursore dove
 * c'è, lo scorrimento dove non c'è — ma l'effetto è lo stesso. Per questo lo
 * stato sta in React e non in `:hover`: una sola sorgente di verità, e il
 * comportamento si può verificare leggendo un attributo invece che simulando
 * un puntatore.
 */
export function IndiceProgetti() {
  const [attivo, setAttivo] = useState<string | null>(null);
  const lista = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const senzaCursore = window.matchMedia("(hover: none)");
    let inAttesa = 0;

    // È attivo il progetto il cui centro è più vicino a una linea di
    // riferimento dello schermo. Un IntersectionObserver con margini -50%/-50% sembrerebbe
    // più elegante, ma riduce la radice a un'altezza di zero pixel: con
    // area nulla l'intersezione non è affidabile e qualche progetto non
    // si attivava mai. Questo calcolo è banale su quattro voci e non
    // lascia buchi.
    const calcola = () => {
      inAttesa = 0;
      if (!senzaCursore.matches || !lista.current) return;

      // Dove non c'è cursore la foto sta in alto, quindi la linea che decide
      // chi è attivo scende: il nome acceso deve finire sotto la fotografia,
      // non sopra.
      const centro =
        window.innerHeight * (senzaCursore.matches ? 0.72 : 0.5);
      let vicino: string | null = null;
      let minimo = Infinity;

      for (const voce of lista.current.children) {
        const r = voce.getBoundingClientRect();
        const distanza = Math.abs(r.top + r.height / 2 - centro);
        if (distanza < minimo) {
          minimo = distanza;
          vicino = (voce as HTMLElement).dataset.slug ?? null;
        }
      }

      setAttivo(vicino);
    };

    const programma = () => {
      if (!inAttesa) inAttesa = requestAnimationFrame(calcola);
    };

    const cambioDispositivo = () => {
      if (senzaCursore.matches) programma();
      else setAttivo(null);
    };

    cambioDispositivo();
    window.addEventListener("scroll", programma, { passive: true });
    window.addEventListener("resize", programma, { passive: true });
    senzaCursore.addEventListener("change", cambioDispositivo);

    return () => {
      window.removeEventListener("scroll", programma);
      window.removeEventListener("resize", programma);
      senzaCursore.removeEventListener("change", cambioDispositivo);
      if (inAttesa) cancelAnimationFrame(inAttesa);
    };
  }, []);

  return (
    <>
      <div className="indice-sfondo" aria-hidden>
        {/* A riposo il nero non è vuoto: grana e un alone caldo appena
            percettibile. L'alone sparisce quando entra una fotografia,
            altrimenti la sporcherebbe. */}
        <div className="indice-alone" data-attivo={attivo === null} />

        {progetti.map((p, i) => (
          <div key={p.slug} className="indice-strato" data-attivo={attivo === p.slug}>
            <Image
              src={p.cover.src}
              alt=""
              fill
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}

        <div className="indice-grana" />
      </div>

      <ul
        ref={lista}
        className="indice-lista relative z-10 w-full"
        data-attivo={attivo !== null}
      >
        {progetti.map((p) => (
          <li key={p.slug} data-slug={p.slug} data-attivo={attivo === p.slug}>
            <Link
              href={`/progetti/${p.slug}`}
              className="indice-voce block"
              onMouseEnter={() => setAttivo(p.slug)}
              onMouseLeave={() => setAttivo(null)}
              onFocus={() => setAttivo(p.slug)}
              onBlur={() => setAttivo(null)}
            >
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
