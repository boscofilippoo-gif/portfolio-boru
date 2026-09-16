# Portfolio BORU studio

I lavori di BORU studio. Applicazione Next.js separata dal sito principale,
pubblicata su `portfolio.borustudio.it`.

Pubblica ma **non indicizzabile**: `robots.txt` in disallow, `<meta name="robots">`
e header `X-Robots-Tag` su ogni risposta, immagini comprese.

## Sviluppo

```
npm install
npm run dev
```

## Aggiungere un progetto

1. Metti le immagini in `public/progetti/<slug>/`, cover compresa.
2. Rigenera la mappa delle proporzioni e le immagini di condivisione:
   ```
   node genera-dimensioni.mjs
   node genera-og.mjs
   ```
3. Aggiungi il record in `data/progetti.ts`.

La cover è l'unica cosa che si vede in home — riempie lo schermo intero
quando si passa sul nome del progetto — quindi va scelta per prima e deve
reggere a piena pagina. Proporzione 4:3, larghezza 1600px, WebP.

Su desktop la cover riempie lo schermo e i nomi stanno a sinistra: tieni
il soggetto sulla destra, sotto la parte più chiara del velo.

Su telefono la foto **non** viene ritagliata: una cover orizzontale che
riempie uno schermo verticale ne mostrerebbe circa un terzo. Occupa tutta
la larghezza, nella sua proporzione esatta — che su 375 px di larghezza
significa 281 px di altezza, il massimo possibile senza tagliarla — e il
resto dello schermo lo riempie la stessa foto sfocata e scura.

Per questo la proporzione 4:3 non è un'indicazione ma un vincolo: una
cover con proporzione diversa lì verrebbe ritagliata.

## Struttura

- `data/progetti.ts` — l'unica fonte dei contenuti
- `data/dimensioni.ts` — generato, non modificare a mano
- `components/indice-progetti.tsx` — l'indice in home
- `components/scheda/` — una sezione della scheda per file
- `components/scheda-progetto.tsx` — la pagina del singolo progetto
- `app/globals.css` — token di marca e comportamento dell'indice.
  Le classi stanno in `@layer components`: fuori dai layer vincerebbero
  sulle utility di Tailwind, e un `text-azzurro` accanto a `occhiello`
  non avrebbe nessun effetto.

## Note

Il trattamento grafico delle cover (velo a gradiente, comparsa del nome)
è in CSS, non inciso nei file: si cambia idea senza rifare le immagini.

Le schede non hanno metriche: è una scelta, non una dimenticanza. Il campo
`metriche` è già nel tipo per quando serviranno.
