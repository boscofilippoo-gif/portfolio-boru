export type Immagine = {
  src: string;
  alt: string;
  /** Riga sotto l'immagine. Se manca, l'immagine resta muta. */
  didascalia?: string;
};

export type BloccoStoria = {
  titolo: string;
  testo: string;
};

export type Progetto = {
  slug: string;
  nome: string;
  sottotitolo: string;
  settore: string;
  anno: string;
  sito?: string;
  /** Tag brevi, al massimo quattro: oltre non si leggono più. */
  cosaAbbiamoFatto: string[];
  /** L'immagine della griglia. È l'unica cosa che si vede in home. */
  cover: Immagine;
  /** Una o due frasi, in apertura di scheda. */
  intro: string;
  storia: BloccoStoria[];
  galleria: Immagine[];
  /** Oggi vuoto ovunque: i numeri si aggiungono qui quando serviranno. */
  metriche?: { valore: string; etichetta: string }[];
};

export const progetti: Progetto[] = [
  {
    slug: "eddyline",
    nome: "Eddyline",
    sottotitolo: "La landing page che ti fa scegliere",
    settore: "Turismo outdoor",
    anno: "2026",
    sito: "https://eddyline.it",
    cosaAbbiamoFatto: ["Landing page", "Campagne", "Tracciamento", "Sviluppo"],
    cover: {
      src: "/progetti/eddyline/cover.webp",
      alt: "Un gommone da rafting affronta una rapida sul fiume Sesia",
    },
    intro:
      "Una pagina che prima di raccontarti qualcosa ti chiede una cosa sola: rafting o canyoning. Da quella scelta cambia tutto il resto.",
    storia: [
      {
        titolo: "Il punto di partenza",
        testo:
          "Eddyline lavora sul Sesia dal 2001 e non aveva mai fatto campagne a pagamento. Il sito presenta sei attività diverse dietro un benvenuto generico: funziona per chi conosce già il centro e si guarda intorno, non funziona come destinazione di un annuncio. Il problema non era l'aspetto del sito. Era che non esisteva una pagina dove una campagna potesse atterrare mantenendo la promessa che l'annuncio aveva appena fatto. Un annuncio sul canyoning portava a una pagina che parlava di sei cose, e la persona doveva ricominciare da capo la ricerca che aveva appena finito.",
      },
      {
        titolo: "Cosa abbiamo costruito",
        testo:
          "Una landing che non prova a parlare a tutti insieme. Chi arriva senza un'intenzione dichiarata trova un blocco che gli chiede di scegliere tra rafting e canyoning prima di andare avanti; da lì la pagina si riscrive. Chi arriva da una campagna specifica quel blocco non lo vede mai: gli annunci puntano dritti alla variante giusta, così la promessa dell'annuncio e il contenuto della pagina coincidono dal primo secondo. Le due varianti non sono la stessa pagina con un'etichetta diversa: cambiano i prezzi, le certificazioni citate, i contenuti, i titoli e soprattutto l'ordine delle chiamate all'azione.",
      },
      {
        titolo: "Come funziona adesso",
        testo:
          "Sul rafting la prenotazione viene per prima: un prezzo, niente da decidere. Sul canyoning viene prima la scelta del percorso, perché i percorsi sono molti e di difficoltà diversa. Ogni contatto arriva con la propria origine, la campagna, l'annuncio e la variante da cui è passato: il comportamento dei due canali si misura, invece di immaginarlo. Progettazione, testi, sviluppo e messa online fatti da noi, su un'infrastruttura separata dal sito del cliente, così non ne dipende.",
      },
    ],
    galleria: [
      {
        src: "/progetti/eddyline/hero-scelta.jpg",
        alt: "Il blocco di scelta della landing Eddyline: «Cosa vuoi fare sul Sesia?» con le opzioni rafting e canyoning",
        didascalia: "Il blocco di scelta, per chi arriva senza un'intenzione",
      },
      {
        src: "/progetti/eddyline/landing-rafting.jpg",
        alt: "La landing Eddyline nella variante rafting, con le chiamate all'azione «Prenota la tua data» e «Chiedi informazioni»",
        didascalia: "Variante rafting — prima si prenota",
      },
      {
        src: "/progetti/eddyline/landing-canyoning.jpg",
        alt: "La landing Eddyline nella variante canyoning, con le chiamate all'azione «Trova il percorso giusto» e «Prenota la tua data»",
        didascalia: "Variante canyoning — prima si sceglie il percorso",
      },
      {
        src: "/progetti/eddyline/split-decisioni.png",
        alt: "Schema delle due decisioni d'acquisto: sul rafting prevale la prenotazione diretta, sul canyoning la richiesta di informazioni",
        didascalia: "Due decisioni d'acquisto diverse, misurate",
      },
      {
        src: "/progetti/eddyline/foto-canyoning.jpg",
        alt: "Due persone con casco e muta dentro una gola del Sesia mentre una terza scivola nell'acqua verde",
        didascalia: "Canyoning nelle gole del Sesia",
      },
    ],
  },
  {
    slug: "swapa",
    nome: "SWAPA",
    sottotitolo: "Dalla campagna all'appuntamento confermato, senza passaggi a mano",
    settore: "Mobilità elettrica urbana",
    anno: "2025",
    sito: "https://swapa.it",
    cosaAbbiamoFatto: ["Automazioni", "CRM", "Landing page", "WhatsApp ed email"],
    cover: {
      src: "/progetti/swapa/cover.webp",
      alt: "La microcar elettrica SWAPA ZIP fotografata in studio",
    },
    intro:
      "Il team faceva tutto a mano: assegnare i contatti, richiamare, fissare gli appuntamenti, mandare le conferme, ricordarsi di chi non aveva risposto. Oggi dal contatto all'appuntamento confermato non tocca niente nessuno.",
    storia: [
      {
        titolo: "Il punto di partenza",
        testo:
          "I contatti arrivavano dalle campagne e da lì in avanti era tutto lavoro di persone: qualcuno li assegnava, qualcuno richiamava, qualcuno apriva il calendario e fissava, mandava i dettagli e si segnava di ricontattare chi era rimasto in sospeso. Non c'era un sistema, c'erano persone che ripetevano le stesse operazioni ogni giorno. Il rischio di perdere contatti per strada era alto, ogni appuntamento mancato pesava parecchio vista la cifra in gioco, e non si sapeva quali campagne portassero contatti davvero interessati.",
      },
      {
        titolo: "Cosa abbiamo costruito",
        testo:
          "L'acquisizione va su due binari: i moduli nativi delle piattaforme pubblicitarie per il volume, e due landing dedicate — una per i privati, una per i concessionari — fatte per filtrare all'ingresso, dove la qualità del contatto conta più del numero. Da lì abbiamo costruito il sistema di automazione: workflow coordinati che coprono tutto il percorso dopo il contatto, dall'ingestione dei dati pubblicitari alla creazione della scheda nel CRM, dalla sequenza di richiami alla prenotazione in calendario, dalla generazione del link della videochiamata alla conferma via email e WhatsApp, fino al promemoria del giorno prima.",
      },
      {
        titolo: "Come funziona adesso",
        testo:
          "Un contatto entra e il sistema lo prende in carico da solo: lo crea nel CRM con la campagna e l'annuncio da cui arriva, lo distribuisce tra i due commerciali con un contatore che tiene il conto e resta verificabile, crea l'evento nel calendario giusto, genera il link alla videochiamata e manda conferma e promemoria. Chi non risponde entra in una sequenza di richiami e, se resta in silenzio fino alla fine, viene chiuso senza che nessuno debba ricordarsene. Il CRM del cliente non aveva documentazione pubblica: gli endpoint li abbiamo ricavati osservando il traffico del browser.",
      },
    ],
    galleria: [
      {
        src: "/progetti/swapa/workflow-calendly-crm.webp",
        alt: "Schema del flusso dalla prenotazione al CRM: trigger, divisione tra i due commerciali, instradamento sui calendari, generazione del link video e rami paralleli verso email, WhatsApp e cambio di stato",
        didascalia: "Dal momento della prenotazione al CRM",
      },
      {
        src: "/progetti/swapa/landing-b2c.png",
        alt: "Landing page per prenotare una prova su strada SWAPA a Milano",
        didascalia: "Landing per i privati",
      },
      {
        src: "/progetti/swapa/landing-b2b.png",
        alt: "Landing page del programma concessionari SWAPA, con la richiesta di candidatura",
        didascalia: "Landing per i concessionari",
      },
      {
        src: "/progetti/swapa/email-benvenuto.png",
        alt: "Email di benvenuto SWAPA: titolo, scheda tecnica del mezzo, scelta tra prova su strada e videochiamata, pulsante di prenotazione",
        didascalia: "Email di benvenuto — primo contatto della sequenza",
      },
      {
        src: "/progetti/swapa/relatia-pipeline.webp",
        alt: "Pipeline del CRM con gli stati della trattativa; i dati dei contatti sono oscurati",
        didascalia: "La pipeline nel CRM — dati dei contatti oscurati",
      },
    ],
  },
  {
    slug: "konsulto",
    nome: "Konsulto",
    sottotitolo: "Due funnel in parallelo che si qualificano da soli",
    settore: "Consulenza energetica",
    anno: "2024",
    sito: "https://konsulto.it",
    cosaAbbiamoFatto: ["Automazioni", "CRM", "Progettazione funnel"],
    cover: {
      src: "/progetti/konsulto/cover.webp",
      alt: "Fotogramma del webinar Konsulto: il relatore spiega una bolletta con i documenti aperti sul tavolo",
    },
    intro:
      "Dal contatto al commerciale senza che nessuno tocchi niente. Due percorsi paralleli — un webinar dal vivo e uno sempre disponibile — che decidono da soli chi è pronto a parlare.",
    storia: [
      {
        titolo: "Il punto di partenza",
        testo:
          "Konsulto riceve molti contatti da più canali, con una rete commerciale su più livelli: venditori esperti, venditori in prova, setter. Assegnare i contatti a mano non stava più in piedi, e non c'era modo di distinguere chi era pronto a parlare da chi stava solo guardando, senza chiedergli altre informazioni e perderlo per strada. In più gli strumenti usati per email e per WhatsApp dovevano restare allineati in tempo reale su ogni passaggio del percorso, con flussi diversi per i due livelli della rete.",
      },
      {
        titolo: "Cosa abbiamo costruito",
        testo:
          "Un sistema su due percorsi paralleli, dove la qualificazione non si chiede: si osserva. Avviene grazie a un gesto esplicito della persona — cliccare «voglio l'offerta» durante il webinar dal vivo, oppure mandare un messaggio WhatsApp precompilato a un punto preciso del video sempre disponibile. Quel gesto fa partire una catena di automazioni che segna il contatto come prioritario, lo distribuisce nella rete commerciale secondo percentuali configurabili e crea la trattativa nella pipeline giusta.",
      },
      {
        titolo: "Come funziona adesso",
        testo:
          "Chi compie quel gesto diventa prioritario e arriva a un venditore. Chi non lo compie resta neutro e prosegue il percorso di nutrimento, senza essere bruciato. Le percentuali di distribuzione si cambiano senza mettere mano al sistema e trattano in modo diverso i venditori esperti e quelli in prova: i primi lavorano dal CRM, i secondi da fogli operativi semplificati, senza accesso al gestionale principale. Se un contatto affidato a un setter diventa prioritario, passa a un venditore esperto da solo. Il sistema gira dal 2024.",
      },
    ],
    galleria: [
      {
        src: "/progetti/konsulto/schema-integrazioni.png",
        alt: "Schema dell'architettura: le fonti pubblicitarie entrano nelle due landing, lo strumento centrale orchestra email e pipeline, il canale WhatsApp resta sincronizzato, i fogli assegnano il venditore",
        didascalia: "L'architettura delle integrazioni",
      },
      {
        src: "/progetti/konsulto/funnel-paralleli.png",
        alt: "Schema dei due percorsi, webinar dal vivo ed evergreen, ciascuno dalla propria fonte fino alla propria pipeline",
        didascalia: "I due percorsi in parallelo",
      },
      {
        src: "/progetti/konsulto/landing-webinar.png",
        alt: "Landing del webinar dal vivo con conto alla rovescia, video di presentazione e modulo di iscrizione",
        didascalia: "Landing — webinar dal vivo",
      },
      {
        src: "/progetti/konsulto/landing-evergreen.png",
        alt: "Landing del webinar sempre disponibile, con il video e la sezione su cosa si impara",
        didascalia: "Landing — webinar sempre disponibile",
      },
      {
        src: "/progetti/konsulto/qualificazione.png",
        alt: "Schema della qualificazione: chi compie un gesto esplicito diventa prioritario e va a un venditore, chi non lo compie resta neutro",
        didascalia: "La qualificazione, dedotta dai gesti",
      },
      {
        src: "/progetti/konsulto/distribuzione.png",
        alt: "Schema della distribuzione: il contatto viene assegnato a venditori esperti, in prova o setter secondo percentuali configurabili",
        didascalia: "La distribuzione nella rete commerciale",
      },
    ],
  },
  {
    slug: "miwa",
    nome: "MIWA",
    sottotitolo: "Il lancio di una piattaforma B2B nella moda",
    settore: "Ingrosso moda B2B",
    anno: "2025",
    sito: "https://www.miwab2b.it",
    cosaAbbiamoFatto: ["Strategia di marca", "Campagne", "Email", "Gestione contatti"],
    cover: {
      src: "/progetti/miwa/cover.webp",
      alt: "Scatto editoriale della campagna MIWA, all'aperto sulle colline",
    },
    intro:
      "Costruire domanda qualificata prima che la piattaforma fosse online, e far capire subito che MIWA è riservata a chi ha una boutique.",
    storia: [
      {
        titolo: "Il punto di partenza",
        testo:
          "MIWA doveva lanciare un marchio nuovo in un mercato dominato da fornitori tradizionali, percepiti come generici, poco digitali e presentati male online. Bisognava costruire credibilità prima di avere qualcosa da mostrare, e allo stesso tempo mettere in chiaro senza equivoci che la piattaforma è per titolari di boutique e rivenditori, non per chi compra per sé. Un messaggio ambiguo, qui, significa riempire la casella di richieste che non porteranno mai a un ordine.",
      },
      {
        titolo: "Cosa abbiamo costruito",
        testo:
          "Abbiamo posizionato MIWA non come un catalogo all'ingrosso ma come uno showroom digitale per chi compra per rivendere, con la cura visiva che di solito è riservata all'e-commerce verso il consumatore finale. Il lavoro ha coperto l'identità di marca — posizionamento, proposta di valore, tono di voce, direzione artistica — la landing page di raccolta, le campagne, una sequenza email di pre-lancio e un sistema di gestione dei messaggi diretti per qualificare chi scriveva.",
      },
      {
        titolo: "Come funziona adesso",
        testo:
          "La landing raccoglie richieste con un'offerta di lancio e un messaggio che parla solo a chi ha partita IVA. Chi si iscrive entra in una sequenza email costruita per chi arriva in momenti diversi: conferma, storia del marchio, focus prodotto, valori, conto alla rovescia e messaggio finale con il codice. I messaggi diretti hanno risposte pronte per i casi che tornano sempre — richiesta di accesso, domande sui prezzi, clienti privati da filtrare con gentilezza, proposte di collaborazione — così la qualificazione non dipende da chi legge e da quanto tempo ha.",
      },
    ],
    galleria: [
      {
        src: "/progetti/miwa/piattaforma.jpg",
        alt: "Sezione collezioni del sito MIWA con le categorie donna, capospalla e accessori",
        didascalia: "La piattaforma B2B online",
      },
      {
        src: "/progetti/miwa/feed-instagram.jpg",
        alt: "Griglia di dodici post Instagram MIWA: trattamenti del logo, scatti di collezione e annunci della data di lancio",
        didascalia: "Il feed Instagram della campagna di pre-lancio",
      },
      {
        src: "/progetti/miwa/hero-campagna.jpg",
        alt: "Ritratto editoriale di moda della campagna MIWA, scattato all'aperto sulle colline",
        didascalia: "Lo scatto editoriale della campagna",
      },
    ],
  },
];

export function progettoDaSlug(slug: string): Progetto | undefined {
  return progetti.find((p) => p.slug === slug);
}

/** Il progetto successivo, in cerchio: dall'ultimo si torna al primo. */
export function prossimoProgetto(slug: string): Progetto {
  const i = progetti.findIndex((p) => p.slug === slug);
  return progetti[(i + 1) % progetti.length];
}
