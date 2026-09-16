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

La cover è l'unica cosa che si vede in home: va scelta per prima.
Proporzione 4:3, larghezza 1600px, WebP.

## Struttura

- `data/progetti.ts` — l'unica fonte dei contenuti
- `data/dimensioni.ts` — generato, non modificare a mano
- `components/griglia-progetti.tsx` — la griglia in home
- `components/scheda-progetto.tsx` — la pagina del singolo progetto
- `app/globals.css` — token di marca e comportamento della griglia

## Note

Il trattamento grafico delle cover (smorzatura a riposo, velo, comparsa
del nome) è in CSS, non inciso nei file: si cambia idea senza rifare
le immagini.
