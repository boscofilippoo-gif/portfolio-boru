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

      // È attivo il progetto che contiene la linea di riferimento. Con le
      // voci contigue ne esiste sempre esattamente uno — o nessuno, prima
      // della prima voce: è la schermata nera d'apertura, e viene da sé
      // senza bisogno di una soglia inventata.
      const linea = window.innerHeight * 0.26;
      let corrente: string | null = null;

      for (const voce of lista.current.children) {
        const r = voce.getBoundingClientRect();
        if (r.top <= linea && r.bottom > linea) {
          corrente = (voce as HTMLElement).dataset.slug ?? null;
          break;
        }
      }

      setAttivo(corrente);
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
          <div
            key={p.slug}
            className="indice-strato"
            data-attivo={attivo === p.slug}
            data-verticale={Boolean(p.coverVerticale)}
          >
            {/* Riempimento: la stessa foto sfocata e scura, solo dove lo
                schermo è verticale. Serve a togliere il nero morto intorno
                alla fotografia senza toglierle un pixel. Viene chiesta a 64
                pixel di larghezza: tanto è sfocata, e così pesa nulla. */}
            <span className="indice-riempimento">
              <Image
                src={(p.coverVerticale ?? p.cover).src}
                alt=""
                fill
                sizes="64px"
              />
            </span>

            {/* La 4:3: riempie lo schermo sul desktop, e sul telefono resta
                solo per i progetti senza una verticale. */}
            <span className="indice-intera">
              <Image
                src={p.cover.src}
                alt=""
                fill
                sizes="100vw"
                priority={i === 0}
              />
            </span>

            {p.coverVerticale && (
              <span className="indice-verticale">
                <Image src={p.coverVerticale.src} alt="" fill sizes="100vw" />
              </span>
            )}
          </div>
        ))}

        <div className="indice-grana" />
      </div>

      {/* Solo sul telefono, e solo finché non è comparsa la prima fotografia:
          con un nome solo a schermo non si capisce che scorrendo ce ne sono
          altri. «Scorri» è la stessa parola che usa la home di borustudio.it. */}
      <div className="indice-invito" data-visibile={attivo === null} aria-hidden>
        <span className="occhiello">Scorri</span>
        <span className="indice-invito-linea" />
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
              <span className="indice-testo block">
                <span className="indice-nome block">{p.nome}</span>
                <span className="indice-meta occhiello mt-2 block md:mt-1">
                  {p.settore} · {p.anno}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
