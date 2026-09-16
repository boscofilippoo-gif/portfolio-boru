export type Immagine = {
  src: string;
  alt: string;
  /** Riga sotto l'immagine. Se manca, l'immagine resta muta. */
  didascalia?: string;
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
  /** L'immagine dell'indice. È l'unica cosa che si vede in home. */
  cover: Immagine;
  /** Una o due frasi, in apertura di scheda. */
  intro: string;

  /** Da dove si partiva, e perché così non funzionava. */
  contesto: { testo: string; punti: string[] };

  /** La scelta non ovvia: il default del settore, e cosa abbiamo fatto invece. */
  decisione: {
    citazione: string;
    consueto: { titolo: string; testo: string };
    invece: { titolo: string; testo: string };
  };

  /** Cinque-sette passaggi, numerati in pagina. */
  passaggi: { titolo: string; testo: string }[];

  /** Strumento e suo ruolo nel sistema. Niente loghi, niente icone. */
  strumenti: { nome: string; ruolo: string }[];

  /** Chiusura: cosa succede oggi, da solo. */
  comeFunzionaAdesso: string;

  galleria: Immagine[];

  /** Per scelta oggi è vuoto ovunque: nessuna metrica di risultato in pagina. */
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
      "Una pagina che prima di raccontarti qualcosa ti chiede una cosa sola: rafting o canyoning. Da quella scelta si riscrive tutto il resto — prezzi, certificazioni, ordine delle chiamate all'azione.",
    contesto: {
      testo:
        "Eddyline lavora sul Sesia dal 2001 e non aveva mai fatto campagne a pagamento. Il sito presenta sei attività diverse dietro un benvenuto generico: funziona per chi conosce già il centro e si guarda intorno, non funziona come destinazione di un annuncio. Il problema non era l'aspetto del sito. Era che non esisteva una pagina dove una campagna potesse atterrare mantenendo la promessa appena fatta. Un annuncio sul canyoning portava a una pagina che parlava di sei cose, e la persona doveva ricominciare da capo la ricerca che aveva appena finito.",
      punti: [
        "Sei attività diverse dietro un'unica pagina di benvenuto",
        "Nessuna destinazione pensata per accogliere un annuncio",
        "Rafting e canyoning si comprano in due modi opposti, ma erano raccontati allo stesso",
        "Nessun modo di sapere quale canale porta prenotazioni e quale porta domande",
      ],
    },
    decisione: {
      citazione:
        "Invece di provare a parlare a tutti, chiediamo prima a chi stiamo parlando.",
      consueto: {
        titolo: "Come si fa di solito",
        testo:
          "Una sola landing che elenca tutte le attività e lascia al visitatore il compito di trovare la sua. È comoda da fare e da mantenere, ma scarica sulla persona il lavoro di selezione proprio nel momento in cui ha appena cliccato un annuncio che le prometteva una risposta precisa.",
      },
      invece: {
        titolo: "Cosa abbiamo fatto invece",
        testo:
          "Chi arriva senza un'intenzione dichiarata trova un blocco che chiede di scegliere tra rafting e canyoning prima di andare avanti. Chi arriva da una campagna specifica quel blocco non lo vede mai: l'annuncio punta dritto alla variante giusta. E la gerarchia delle chiamate all'azione l'abbiamo decisa prima di vedere i dati — prenotare per primo sul rafting, scegliere il percorso per primo sul canyoning — perché le due attività si comprano in modo diverso. I dati raccolti dopo hanno confermato quella lettura.",
      },
    },
    passaggi: [
      {
        titolo: "La scelta obbligata",
        testo:
          "Chi arriva senza un'intenzione dichiarata incontra una domanda sola: cosa vuoi fare sul Sesia. La scelta resta reversibile in qualsiasi momento, ma va fatta per proseguire.",
      },
      {
        titolo: "Due varianti complete",
        testo:
          "Non un filtro su contenuti condivisi, ma due pagine diverse: prezzi, certificazioni citate, descrizioni e titoli cambiano tutti. Rafting e canyoning non hanno in comune quasi niente, tranne il fiume.",
      },
      {
        titolo: "Ingresso diretto dalle campagne",
        testo:
          "Le campagne di rafting e quelle di canyoning puntano alla variante corrispondente. A chi ha già dichiarato cosa vuole cliccando l'annuncio non viene chiesto una seconda volta.",
      },
      {
        titolo: "Due chiamate all'azione per due intenzioni",
        testo:
          "Sul rafting «Prenota la tua data» viene per prima: un prezzo, niente da decidere. Sul canyoning viene prima «Trova il percorso giusto», perché i percorsi sono molti e di difficoltà diversa: prima si sceglie, poi si prenota.",
      },
      {
        titolo: "Tracciamento per canale",
        testo:
          "Ogni prenotazione e ogni richiesta arriva con sorgente, mezzo, campagna, annuncio e variante di atterraggio. È così che il comportamento dei due canali si misura invece di immaginarlo.",
      },
      {
        titolo: "Sviluppo e messa online",
        testo:
          "Progettazione, testi, sviluppo e pubblicazione fatti internamente, su un'infrastruttura tenuta separata dal sito del cliente: la landing non ne dipende e può cambiare al ritmo delle campagne.",
      },
    ],
    strumenti: [
      {
        nome: "Vercel",
        ruolo:
          "Ospita la landing, separata dal sito del cliente: si aggiorna senza toccare nient'altro",
      },
      {
        nome: "Meta Ads",
        ruolo: "Campagne distinte per rafting e canyoning, ciascuna verso la propria variante",
      },
      {
        nome: "Google Ads",
        ruolo: "Rete di ricerca, con annunci allineati alla variante di destinazione",
      },
      {
        nome: "Tracciamento per canale",
        ruolo: "Sorgente, campagna, annuncio e variante allegati a ogni contatto",
      },
      {
        nome: "Moduli di contatto",
        ruolo: "Due percorsi separati: prenotazione e richiesta di informazioni",
      },
    ],
    comeFunzionaAdesso:
      "Oggi le campagne non atterrano più su una pagina generica: ognuna porta alla propria variante, e chi arriva da fuori sceglie con un gesto. Ogni contatto che entra si porta dietro la provenienza, quindi si sa quale canale porta prenotazioni e quale porta domande. Sono due comportamenti diversi, e adesso vengono trattati come tali.",
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
    contesto: {
      testo:
        "I contatti arrivavano dalle campagne e da lì in avanti era tutto lavoro di persone: qualcuno li assegnava, qualcuno richiamava, qualcuno apriva il calendario e fissava, mandava i dettagli e si segnava di ricontattare chi era rimasto in sospeso. Non c'era un sistema: c'erano persone che ripetevano le stesse operazioni ogni giorno. Il rischio di perdere contatti per strada era alto, ogni appuntamento mancato pesava vista la cifra in gioco, e non si sapeva quali campagne portassero contatti davvero interessati.",
      punti: [
        "Contatti gestiti a mano: assegnazione, richiamo, prenotazione, conferma",
        "Nessuna visibilità su quali campagne portassero contatti qualificati",
        "Rischio concreto che una videochiamata partisse senza link",
        "CRM scollegato da calendario, email, WhatsApp e sorgente pubblicitaria",
      ],
    },
    decisione: {
      citazione:
        "Non cinque strumenti separati. Un sistema solo, che in ogni momento sa a che punto è ogni contatto.",
      consueto: {
        titolo: "Come si fa di solito",
        testo:
          "Si mettono in piedi strumenti distinti per CRM, calendario, email e WhatsApp, ognuno configurato per conto suo e nessuno al corrente di cosa stiano facendo gli altri. Il risultato è che i contatti cadono negli spazi vuoti tra uno strumento e il successivo.",
      },
      invece: {
        titolo: "Cosa abbiamo fatto invece",
        testo:
          "Abbiamo usato n8n come sistema nervoso: ogni flusso conosce lo stato degli altri e ogni passaggio verifica che le sue condizioni valgano ancora prima di agire. La sequenza di richiami si ferma nell'istante in cui rileva un appuntamento. Il promemoria non parte se l'appuntamento è troppo vicino. Il contatore che divide i contatti tra i due commerciali vive nella memoria persistente del flusso, senza fogli né database esterni: sopravvive ai riavvii e la divisione resta esatta e verificabile.",
      },
    },
    passaggi: [
      {
        titolo: "Due binari di acquisizione",
        testo:
          "I moduli nativi delle piattaforme raccolgono volume con il minimo attrito. Due landing dedicate fanno l'opposto: chiedono un passaggio in più e filtrano all'ingresso, accettando meno contatti in cambio di contatti migliori. Quella per i concessionari fa una domanda secca — sei già un concessionario? — che separa il rivenditore dal curioso prima ancora che il contatto arrivi al CRM.",
      },
      {
        titolo: "Ingestione dei contatti",
        testo:
          "Il foglio di raccolta viene controllato ogni minuto. Nuovo contatto, verifica della sorgente, creazione della scheda nel CRM con campagna, gruppo di annunci e annuncio allegati. I due binari confluiscono nello stesso flusso, ma ciascuno conserva l'etichetta della propria sorgente: così si confrontano invece di confondersi.",
      },
      {
        titolo: "Sequenza di richiami",
        testo:
          "Tre contatti tra email e WhatsApp. Si interrompe nell'istante in cui la persona prenota. Dopo il terzo tentativo senza risposta la trattativa viene chiusa, senza che nessuno debba ricordarsene.",
      },
      {
        titolo: "Dalla prenotazione al CRM",
        testo:
          "Il passaggio più complesso: legge le risposte del modulo di prenotazione, applica la divisione 50/50, crea l'evento nel calendario del commerciale giusto, genera il link alla videochiamata, crea contatto e appuntamento nel CRM, sposta la trattativa e manda conferma per email e WhatsApp. Lo strumento di prenotazione non genera il link per gli eventi di gruppo: lo creiamo noi con una chiamata all'API del calendario.",
      },
      {
        titolo: "Promemoria a 24 ore",
        testo:
          "Calcola l'istante esatto ventiquattro ore prima dell'appuntamento e sospende l'esecuzione fino a quel momento. Template diversi per la videochiamata e per la prova su strada.",
      },
      {
        titolo: "Dopo l'appuntamento",
        testo:
          "Si attiva al cambio di stato della trattativa, attende trenta giorni dalla data dell'appuntamento e avvia il ricontatto.",
      },
      {
        titolo: "Gli endpoint mancanti",
        testo:
          "La documentazione del CRM era incompleta. Invece di fermarci lì abbiamo ispezionato in tempo reale il traffico del browser per trovare gli indirizzi effettivi, li abbiamo provati uno per uno e mappato campi e tipi di dato. Il sistema non dipende da una documentazione che non esiste.",
      },
    ],
    strumenti: [
      { nome: "n8n", ruolo: "Piattaforma di automazione: ci girano tutti e cinque i flussi" },
      {
        nome: "Relatia CRM",
        ruolo: "Gestionale principale: contatti, trattative, pipeline, appuntamenti",
      },
      {
        nome: "Calendly",
        ruolo: "Motore di prenotazione, con eventi di gruppo e domande su misura",
      },
      {
        nome: "Google Calendar",
        ruolo: "Calendari dei commerciali, con i link alle videochiamate generati via API",
      },
      { nome: "Spoki", ruolo: "WhatsApp Business API: sette template approvati da Meta" },
      { nome: "Gmail SMTP", ruolo: "Email HTML nei caratteri e nei colori del marchio" },
      { nome: "Google Sheets", ruolo: "Punto di raccolta dei contatti dalle campagne" },
      {
        nome: "Google Apps Script",
        ruolo: "Logica su misura per attribuzione e sincronizzazione",
      },
      {
        nome: "Google Meet",
        ruolo: "Videochiamate create con una chiamata all'API del calendario",
      },
    ],
    comeFunzionaAdesso:
      "Un contatto entra e il sistema lo prende in carico da solo: lo crea nel CRM con la campagna da cui arriva, lo assegna, fissa, conferma e ricorda. Il commerciale apre il calendario e trova gli appuntamenti già lì, con il link pronto. Il lavoro che prima occupava mezze giornate adesso non lo fa più nessuno.",
    galleria: [
      {
        src: "/progetti/swapa/workflow-calendly-crm.webp",
        alt: "Schema del flusso dalla prenotazione al CRM: l'evento di prenotazione, la divisione tra i due commerciali, instradamento sui calendari, generazione del link video e rami paralleli verso email, WhatsApp e cambio di stato",
        didascalia: "Dal momento della prenotazione al CRM",
      },
      {
        src: "/progetti/swapa/landing-b2c.png",
        alt: "Landing page per prenotare una prova su strada SWAPA a Milano",
        didascalia: "Landing per i privati — raccoglie volume",
      },
      {
        src: "/progetti/swapa/landing-b2b.png",
        alt: "Landing page del programma concessionari SWAPA, con la richiesta di candidatura",
        didascalia: "Landing per i concessionari — filtra all'ingresso",
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
      "Dal contatto al commerciale senza che nessuno tocchi niente. Due percorsi paralleli che decidono da soli chi è pronto a parlare, osservando un gesto invece di fare domande.",
    contesto: {
      testo:
        "Konsulto riceve molti contatti da più canali, con una rete commerciale su più livelli: venditori esperti, venditori in prova, setter. Assegnare i contatti a mano non stava più in piedi, e non c'era modo di distinguere chi era pronto a parlare da chi stava solo guardando senza chiedergli altre informazioni — cioè senza aggiungere attrito proprio nel punto in cui si perde più gente. In più gli strumenti usati per le email e per WhatsApp dovevano restare allineati in tempo reale su ogni passaggio del percorso, con flussi diversi per i due livelli della rete.",
      punti: [
        "Volumi di contatti troppo alti per una gestione a mano",
        "Email e WhatsApp da tenere allineati in tempo reale su ogni evento",
        "Qualificazione da dedurre senza chiedere niente in più",
        "Percorsi diversi per venditori esperti e venditori in prova",
        "Riassegnazione dinamica quando la priorità di un contatto cambia",
      ],
    },
    decisione: {
      citazione:
        "Non chiediamo alle persone quanto sono interessate. Lo deduciamo da come si comportano.",
      consueto: {
        titolo: "Come si fa di solito",
        testo:
          "Quasi tutti i sistemi di punteggio chiedono di compilare un modulo in più o di dichiarare il proprio livello di interesse. Aggiunge attrito, abbassa la conversione e produce un dato che spesso non è nemmeno vero: la gente risponde quello che le sembra giusto rispondere.",
      },
      invece: {
        titolo: "Cosa abbiamo fatto invece",
        testo:
          "Abbiamo usato un gesto ad alta intenzione come segnale: cliccare «voglio l'offerta» durante il webinar dal vivo, oppure mandare il messaggio WhatsApp precompilato al minuto 26:50 del video sempre disponibile. Nessun modulo in più, nessuna domanda. Solo un'azione che si compie quando si è davvero interessati, e che il sistema sa leggere nell'istante in cui accade.",
      },
    },
    passaggi: [
      {
        titolo: "Acquisizione",
        testo:
          "Landing dedicate per il webinar dal vivo e per quello sempre disponibile, con moduli di iscrizione integrati. Campagne con moduli nativi e traffico da più canali.",
      },
      {
        titolo: "Orchestrazione",
        testo:
          "ActiveCampaign è il centro: liste, etichette, automazioni e pipeline. Spoki è il canale WhatsApp parallelo, tenuto allineato da un campo condiviso. Zapier fa da ponte tra fogli, email e WhatsApp.",
      },
      {
        titolo: "Qualificazione dal gesto",
        testo:
          "Chi clicca durante la diretta, o scrive al minuto 26:50 del video, diventa prioritario in tempo reale. Chi non lo fa resta neutro e prosegue il percorso di nutrimento, senza essere bruciato.",
      },
      {
        titolo: "Distribuzione nella rete",
        testo:
          "Uno script assegna il venditore secondo percentuali configurabili, aggiorna il campo sul sistema di email e lo propaga al canale WhatsApp. Le percentuali si cambiano senza mettere mano al sistema.",
      },
      {
        titolo: "Due pipeline separate",
        testo:
          "Una per il webinar dal vivo, una per quello sempre disponibile. Fogli operativi semplificati per i venditori in prova, che lavorano senza accesso al gestionale principale.",
      },
      {
        titolo: "Riassegnazione automatica",
        testo:
          "Se un contatto affidato a un setter diventa prioritario, passa a un venditore esperto da solo, senza nessun passaggio manuale.",
      },
    ],
    strumenti: [
      {
        nome: "ActiveCampaign",
        ruolo: "Centro del sistema: liste, etichette, automazioni, pipeline",
      },
      { nome: "Spoki", ruolo: "WhatsApp Business API, allineato tramite un campo condiviso" },
      { nome: "Zapier", ruolo: "Ponte tra fogli di calcolo, email e WhatsApp" },
      {
        nome: "Google Sheets",
        ruolo: "Fogli operativi per i venditori in prova e registro delle assegnazioni",
      },
      {
        nome: "Google Apps Script",
        ruolo: "Assegnazione a percentuali variabili e sincronizzazione dei campi",
      },
      {
        nome: "Landing dedicate",
        ruolo: "Una per il webinar dal vivo, una per quello sempre disponibile",
      },
    ],
    comeFunzionaAdesso:
      "Il sistema gira dal 2024 e copre da solo tutto il ciclo, dall'acquisizione alla consegna del contatto al venditore. Chi compie il gesto arriva a una persona, chi non lo compie continua il percorso. Nessuno smista niente a mano, e le regole di distribuzione si cambiano senza toccare il sistema.",
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
    contesto: {
      testo:
        "MIWA doveva lanciare un marchio nuovo in un mercato dominato da fornitori tradizionali, percepiti come generici, poco digitali e presentati male online. Bisognava costruire credibilità prima di avere qualcosa da mostrare, e allo stesso tempo mettere in chiaro senza equivoci che la piattaforma è per titolari di boutique e rivenditori, non per chi compra per sé. Un messaggio ambiguo, qui, riempie la casella di richieste che non porteranno mai a un ordine: e ogni richiesta sbagliata è tempo tolto a quelle giuste.",
      punti: [
        "Un mercato all'ingrosso dominato da marchi generici e poco digitali",
        "Costruire credibilità prima che la piattaforma esistesse",
        "Distinguere i rivenditori dai clienti privati fin dal primo contatto",
        "Generare domanda qualificata con un budget contenuto",
        "Segnalare l'esclusività B2B senza allontanare i rivenditori giusti",
      ],
    },
    decisione: {
      citazione:
        "Non un catalogo all'ingrosso. Un'esperienza di marca per chi compra per rivendere.",
      consueto: {
        titolo: "Come si fa di solito",
        testo:
          "I fornitori tradizionali presentano i prodotti come un listino: scatti generici, prezzi, quantità minime. L'esperienza d'acquisto è puramente funzionale, senza nessuna attenzione al marchio o alla presentazione.",
      },
      invece: {
        titolo: "Cosa abbiamo fatto invece",
        testo:
          "Abbiamo progettato MIWA come uno showroom digitale: la stessa cura visiva, lo stesso tono e la stessa selezione che ci si aspetta da un marchio premium rivolto al consumatore finale. Perché chi ha una boutique sceglie i fornitori anche da come quei fornitori si presentano: un marchio fatto bene vende prodotti più facili da rivendere.",
      },
    },
    passaggi: [
      {
        titolo: "Identità di marca",
        testo:
          "Posizionamento premium accessibile, proposta di valore, missione e visione, tono di voce elegante e professionale, indicazioni creative per il logo, direzione artistica costruita su neutri caldi.",
      },
      {
        titolo: "Landing di raccolta",
        testo:
          "Pagina con l'offerta di lancio e un messaggio che parla solo a chi ha partita IVA. Testi orientati alla ricerca e una pagina di ringraziamento che apre la sequenza.",
      },
      {
        titolo: "Acquisizione a pagamento",
        testo:
          "Campagna di conversione verso la landing, campagna di traffico verso i profili social, campagna video per visibilità e posizionamento del marchio.",
      },
      {
        titolo: "Sequenza di pre-lancio",
        testo:
          "Sei email: conferma dell'iscrizione, storia del marchio, focus prodotto, visione e valori, conto alla rovescia, messaggio di conversione con il codice. Con una logica progressiva, perché ogni contatto entra nella sequenza dal punto giusto in base a quando si è iscritto.",
      },
      {
        titolo: "Presenza organica",
        testo:
          "Biografie e contenuti su Instagram e Facebook, testi sulle immagini, calendario allineato alle campagne a pagamento.",
      },
      {
        titolo: "Qualificazione nei messaggi diretti",
        testo:
          "Risposte pronte per i casi che tornano sempre: richiesta di accesso, domande sui prezzi, clienti privati da reindirizzare con gentilezza, proposte di collaborazione. La qualificazione non dipende da chi legge e da quanto tempo ha.",
      },
    ],
    strumenti: [
      {
        nome: "Meta Ads",
        ruolo: "Campagne di conversione verso la landing e di traffico verso i profili",
      },
      { nome: "Google Ads", ruolo: "Campagna video per visibilità e posizionamento del marchio" },
      {
        nome: "Piattaforma email",
        ruolo: "Sequenza di pre-lancio a sei passaggi, con ingresso progressivo",
      },
      {
        nome: "Landing page",
        ruolo: "Raccolta contatti con offerta di lancio e messaggio riservato ai rivenditori",
      },
      {
        nome: "Instagram e Facebook",
        ruolo: "Presenza organica e primo canale di contatto con le boutique",
      },
      { nome: "Google Sheets", ruolo: "Registro dei contatti e stato della qualificazione" },
    ],
    comeFunzionaAdesso:
      "Oggi la piattaforma è online e il percorso costruito prima del lancio continua a funzionare: la landing raccoglie, la sequenza accompagna, i messaggi diretti filtrano. Chi non è un rivenditore viene reindirizzato con gentilezza prima di occupare il tempo di qualcuno, e chi lo è arriva già sapendo cos'è MIWA.",
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
