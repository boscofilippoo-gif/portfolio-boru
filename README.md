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
4. Rigenera le anteprime di condivisione: `node genera-og.mjs` (gli slug li
   ricava dalle cartelle, non serve toccare lo script).

### Crediti

Il campo `crediti` compare nella testata della scheda come «Insieme a».
Va scritto `"con meravigliä LAB"` o `"con CAWIPA"` — il prefisso «con» viene
tolto in pagina. Assente significa lavoro fatto solo da noi.

La grafia `meravigliä LAB` è quella giusta: minuscola iniziale, dieresi, LAB
maiuscolo. Compare su cinque schede e deve essere identica ovunque.

### Capitoli

Ogni scheda ha `capitoli`, un array. Quasi tutte ne hanno uno solo; MIWA due,
perché sono due incarichi distinti per lo stesso cliente. L'intestazione con
«Capitolo 01» compare solo quando i capitoli sono più di uno.

### Schermate di pagine web

`node cattura-pagine.mjs <config.json>` cattura pagine pilotando Chrome dal
protocollo DevTools. Serve al posto di `chrome --screenshot` perché permette di
impostare valori in `localStorage` **prima** che la pagina carichi: i banner
cookie oscurano tutta la pagina, e dichiarare il consenso in anticipo li fa
non comparire. Nessun click, nessun modulo compilato — un modulo inviato
creerebbe un contatto falso nel sistema del cliente.

### Materiale che arriva in PDF

`node estrai-immagini.mjs <file.pdf> <cartella> [larghezzaMinima]` tira fuori
le immagini incorporate alla loro risoluzione originale. Su questa macchina non
c'è nessuno strumento PDF installato e `sips` rasterizza solo la prima pagina:
lo script legge gli oggetti del file ed estrae gli XObject immagine, quindi
restituisce gli originali invece di schermate.

La cover è l'unica cosa che si vede in home — riempie lo schermo intero
quando si passa sul nome del progetto — quindi va scelta per prima e deve
reggere a piena pagina. Proporzione 4:3, larghezza 1600px, WebP.

Su desktop la cover riempie lo schermo e i nomi stanno a sinistra: tieni
il soggetto sulla destra, sotto la parte più chiara del velo.

Sul telefono serve una **seconda cover, verticale 9:16**: una 4:3 che
riempie uno schermo verticale ne mostrerebbe circa un terzo. Mettila in
`public/progetti/<slug>/cover-verticale.webp` e dichiarala come
`coverVerticale` nel record. Una 9:16 occupa l'82% dell'altezza dello
schermo; una 4:3 il 35%.

Il campo è facoltativo: senza, quel progetto usa la 4:3 e il resto dello
schermo viene riempito dalla stessa foto sfocata e scura. Nessuna delle
due viene mai ritagliata.

Per consegnare nuove verticali: mettile in `da-elaborare/` col nome dello
slug (`.jpg`, `.png` o `.heic` vanno tutti bene) e lancia
`node converti-verticali.mjs`. Ritaglio, ridimensionamento e conversione
sono automatici.

Il soggetto va nella fascia centrale: in cima passa il nome del progetto
e in fondo l'invito a scorrere, e su entrambi gli estremi c'è un velo.

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
