export type Immagine = {
  src: string;
  alt: string;
  /** Riga sotto l'immagine. Se manca, l'immagine resta muta. */
  didascalia?: string;
};

/** Un lavoro dentro una scheda. Quasi tutte ne hanno uno solo; MIWA due,
 *  perché sono due incarichi distinti per lo stesso cliente. */
export type Capitolo = {
  /** Mostrato solo quando i capitoli sono più di uno. */
  titolo?: string;
  sottotitolo?: string;

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
};

export type Progetto = {
  slug: string;
  nome: string;
  sottotitolo: string;
  settore: string;
  anno: string;
  sito?: string;
  /** "con meravigliä LAB", "con CAWIPA". Assente = lavoro solo nostro. */
  crediti?: string;
  /** Tag brevi, al massimo quattro: oltre non si leggono più. */
  cosaAbbiamoFatto: string[];
  /** L'immagine dell'indice. È l'unica cosa che si vede in home. */
  cover: Immagine;
  /** Versione verticale 9:16 per il telefono, dove una 4:3 riempirebbe
   *  appena un terzo dello schermo. Se manca, il telefono usa la 4:3. */
  coverVerticale?: Immagine;
  /** Una o due frasi, in apertura di scheda. */
  intro: string;

  capitoli: Capitolo[];

  galleria: Immagine[];

  /** Per scelta oggi è vuoto ovunque: nessuna metrica di risultato in pagina. */
  metriche?: { valore: string; etichetta: string }[];
};

export const progetti: Progetto[] = [
  {
    slug: "mozzarella",
    nome: "Mozzarella Experience",
    sottotitolo: "Un'identità da riscoprire, per una fattoria che si visita",
    settore: "Turismo ed esperienze",
    anno: "2025",
    sito: "https://mozzarellaexperience.it",
    crediti: "con meravigliä LAB",
    cosaAbbiamoFatto: ["Shooting", "Brand identity", "Presentazione", "Stampa"],
    cover: {
      src: "/progetti/mozzarella/cover.webp",
      alt: "Una bufala in un campo, con il cielo aperto alle spalle",
    },
    coverVerticale: {
      src: "/progetti/mozzarella/cover-verticale.webp",
      alt: "Due persone lavorano la mozzarella a mano sorridendo, in azienda",
    },
    intro:
      "Una fattoria didattica nel cuore della Campania, dove ogni giorno arrivano pullman di turisti. Online però non si vedeva niente di quell'energia.",
    capitoli: [
      {
        contesto: {
          testo:
            "L'azienda accoglie ogni giorno visitatori che guardano nascere la mozzarella, la lavorano con le mani, mangiano nella sala grande. Chi c'è stato lo racconta con entusiasmo. Il problema era che online tutto questo non si vedeva: l'identità era ferma a un'altra epoca e non restituiva niente dell'esperienza che l'azienda offre di persona. E i tour operator, che sono quelli che decidono dove si fermano i pullman, guardano online prima di decidere.",
          punti: [
            "Un'esperienza forte dal vivo, invisibile online",
            "Un'identità visiva ferma a un'altra epoca",
            "Niente da mettere in mano ai tour operator",
            "Il ricordo della visita affidato solo alla memoria degli ospiti",
          ],
        },
        decisione: {
          citazione:
            "Non una fattoria da raccontare. Un'esperienza da far sentire prima di arrivarci.",
          consueto: {
            titolo: "Come si fa di solito",
            testo:
              "Le aziende agricole che aprono al pubblico si presentano online come aziende agricole: il processo, i prodotti, le certificazioni. È tutto corretto e non serve a niente, perché chi sceglie dove passare una giornata non sta comprando un processo produttivo.",
          },
          invece: {
            titolo: "Cosa abbiamo fatto invece",
            testo:
              "Siamo partiti da uno shooting selvaggio, senza schemi e senza pose costruite, per riportare online la stessa energia che si respira in azienda: le mani nella pasta, i bufali, la tavola apparecchiata, le persone che ridono. Su quelle immagini abbiamo costruito l'identità e una presentazione digitale per i tour operator, che di questo mercato sono i veri intermediari.",
          },
        },
        passaggi: [
          {
            titolo: "Lo shooting senza schemi",
            testo:
              "Una giornata dentro l'azienda a fotografare quello che succede invece di ricostruirlo: la lavorazione, i visitatori, gli animali, la sala. Materiale vero, non ambientato.",
          },
          {
            titolo: "L'identità visiva",
            testo:
              "Il marchio recupera il bufalo come segno, trattato in modo pulito e contemporaneo, e diventa il filo che tiene insieme fotografia, stampa e presentazione.",
          },
          {
            titolo: "La presenza online",
            testo:
              "L'identità applicata ai canali, perché chi cerca l'azienda prima di partire trovi la stessa cosa che troverà arrivando.",
          },
          {
            titolo: "La presentazione per i tour operator",
            testo:
              "Un documento digitale pensato per chi costruisce gli itinerari: cosa si fa, quanto dura, cosa ci si porta a casa. È lo strumento che apre le porte di questo mercato.",
          },
          {
            titolo: "Le cartoline",
            testo:
              "Gli ospiti scrivono una cartolina e la imbucano nella cassetta postale dell'azienda. Un gesto fisico che chiude il cerchio fra la visita e il racconto, e che l'azienda usa da sempre come segno di attenzione verso il territorio.",
          },
        ],
        strumenti: [
          { nome: "Shooting fotografico", ruolo: "Una giornata in azienda, senza set e senza pose costruite" },
          { nome: "Sistema di identità", ruolo: "Marchio, colori e trattamento delle immagini su tutti i materiali" },
          { nome: "Presentazione digitale", ruolo: "Il documento che arriva ai tour operator" },
          { nome: "Cartoline stampate", ruolo: "Il ricordo fisico che l'ospite imbuca prima di andarsene" },
        ],
        comeFunzionaAdesso:
          "Oggi chi cerca l'azienda online trova la stessa energia che troverà arrivandoci, e i tour operator hanno un documento da guardare invece di una descrizione a voce. Le cartoline continuano a partire dalla cassetta postale in cortile, che resta la cosa che gli ospiti si ricordano di più.",
      },
    ],
    galleria: [
      {
        src: "/progetti/mozzarella/visitatori.webp",
        alt: "Un gruppo di visitatori osserva e fotografa la lavorazione della mozzarella sotto una tettoia",
        didascalia: "La lavorazione davanti agli ospiti",
      },
      {
        src: "/progetti/mozzarella/lavorazione.webp",
        alt: "Mani che intrecciano una treccia di mozzarella sopra una vasca",
        didascalia: "La treccia, fatta a mano",
      },
      {
        src: "/progetti/mozzarella/mandria.webp",
        alt: "Una mandria di bufale si abbevera, riflessa nell'acqua",
        didascalia: "La mandria",
      },
      {
        src: "/progetti/mozzarella/sala.webp",
        alt: "La sala lunga apparecchiata con tovaglie blu e sedie bianche",
        didascalia: "La sala per i gruppi",
      },
      {
        src: "/progetti/mozzarella/caprese.webp",
        alt: "Un piatto di mozzarella e pomodorini servito in tavola",
        didascalia: "Quello per cui si viene",
      },
    ],
  },
  {
    slug: "postura-da-paura",
    nome: "Postura da Paura",
    sottotitolo: "Due lavori su una piattaforma di allenamento in abbonamento",
    settore: "Fitness in abbonamento",
    anno: "2026",
    sito: "https://posturadapaura.com",
    crediti: "con meravigliä LAB",
    cosaAbbiamoFatto: ["Strategia", "Campagne", "Tracciamento", "Funnel"],
    cover: {
      src: "/progetti/postura-da-paura/cover.webp",
      alt: "Immagine del marchio Postura da Paura: una donna seduta su un cubo, su fondo rosa, accanto al segno grafico del marchio",
    },
    coverVerticale: {
      src: "/progetti/postura-da-paura/cover-verticale.webp",
      alt: "La stessa immagine in verticale, con la figura in basso e il fondo rosa che sale",
    },
    intro:
      "Rimettere in ordine quello che si misura, e cambiare il modo in cui si fa provare il servizio. Due lavori distinti, a mesi di distanza, per lo stesso cliente.",
    capitoli: [
      {
        titolo: "Rimettere a fuoco l'acquisizione",
        sottotitolo:
          "Fermare la spesa finché i numeri non sono affidabili, poi ripartire su tutta la gamma.",

        contesto: {
          testo:
            "La spesa pubblicitaria girava su una misurazione di cui non ci si poteva fidare. I clienti già abbonati erano dentro i pubblici di acquisizione, quindi una parte degli acquisti attribuiti alle campagne sarebbe arrivata comunque. Ogni click su ogni pulsante raggiungeva la piattaforma come lo stesso identico evento, quindi non si distingueva chi chiedeva informazioni da chi comprava. Un cambio nella gestione dei consensi aveva interrotto l'ottimizzazione senza che nessun dato lo segnalasse. E le pagine di atterraggio vivevano su tre strumenti diversi, ognuno con un modo suo di contare.",
          punti: [
            "Clienti già abbonati dentro i pubblici di acquisizione",
            "Ogni click su ogni pulsante registrato come lo stesso evento",
            "Un cambio nei consensi che aveva fermato l'ottimizzazione",
            "Pagine di atterraggio su tre strumenti diversi",
            "Un passaggio intermedio attivo da anni, ereditato e mai verificato",
          ],
        },

        decisione: {
          citazione:
            "Prima di spendere meglio bisogna sapere cosa si sta misurando.",
          consueto: {
            titolo: "Come si fa di solito",
            testo:
              "Si alza il budget e si ottimizza sui numeri che la piattaforma pubblicitaria restituisce. È comodo, perché quei numeri arrivano subito e sembrano quasi sempre in crescita. Ma se dentro i pubblici ci sono i clienti già paganti, la piattaforma si prende il merito di acquisti che sarebbero arrivati lo stesso: più si spende più sembra andare bene, mentre il ricavo nuovo non si muove.",
          },
          invece: {
            titolo: "Cosa abbiamo fatto invece",
            testo:
              "Abbiamo fermato l'aumento di spesa e spento le campagne in corso prima di toccare qualunque altra cosa. Poi ricostruita la misurazione, mandando gli eventi anche dal server invece che dal solo browser, e messo il consenso come unico interruttore di ciò che parte. Le campagne sono ripartite solo dopo, su due programmi specifici invece che sul marchio in generale.",
          },
        },

        passaggi: [
          {
            titolo: "L'acquisto di prova",
            testo:
              "Prima di formulare ipotesi, un acquisto vero fatto da noi per vedere cosa arrivava davvero dall'altra parte. È così che è emerso che i click finivano tutti nello stesso evento.",
          },
          {
            titolo: "Gli eventi mandati dal server",
            testo:
              "Le conversioni smettono di dipendere solo dal browser, dove impostazioni di sistema e blocchi ne fanno sparire una parte. Ogni evento parte anche dal server, con un identificativo che permette di riconoscerlo e non contarlo due volte. Un componente attivo da anni mandava gli stessi eventi in parallelo: si spegne, ma solo dopo aver verificato che il canale nuovo li copra tutti.",
          },
          {
            titolo: "Il consenso come unico interruttore",
            testo:
              "Tutto ciò che va verso la piattaforma pubblicitaria passa da una sola condizione: il consenso dato dalla persona. Prima la regola era distribuita in più punti e non era verificabile in un colpo solo.",
          },
          {
            titolo: "Una campagna per programma",
            testo:
              "Niente più comunicazione unica per un pubblico che non è uno solo: ogni programma ha la sua campagna e la sua pagina, così chi cerca un allenamento per la menopausa non vede lo stesso annuncio di chi cerca alta intensità. Dentro ciascuna, i gruppi di inserzione lavorano insieme su pubblico ampio, su interessi e su chi ha già visto i video: la stessa campagna esplora e recupera nello stesso momento.",
          },
          {
            titolo: "Le creatività, un angolo per volta",
            testo:
              "Dodici brief e i testi degli annunci, con gli agganci video costruiti su angoli diversi e messi a confronto fra loro. Quale motivo convince si scopre facendolo vedere, non decidendolo a tavolino prima di partire.",
          },
          {
            titolo: "L'offerta per chi arriva nuovo",
            testo:
              "Una promozione dedicata a chi non ha mai comprato, spinta da campagne sue, più la promozione annuale nel momento dell'anno in cui rientrare in una routine ha senso. Chi è già abbonato non le vede: è la stessa regola dei pubblici, cioè non pagare per parlare a chi ha già detto di sì.",
          },
          {
            titolo: "L'analisi strategica",
            testo:
              "In parallelo, la rimessa in ordine di posizionamento, listino e pubblici: quali gruppi raggiungere, con quale prodotto e in che ordine. È il documento a cui si torna quando si deve decidere cosa fare dopo.",
          },
        ],

        strumenti: [
          { nome: "Segment", ruolo: "Punto unico di raccolta degli eventi, che li smista agli altri strumenti" },
          { nome: "Conversions API", ruolo: "Invio delle conversioni dal server e non dal solo browser" },
          { nome: "Mixpanel", ruolo: "Dati d'uso del prodotto: prove attivate, allenamenti fatti, acquisti" },
          { nome: "Metabase", ruolo: "Storico e liste, come riferimento per i controlli" },
          { nome: "Google Analytics", ruolo: "Misurazione del traffico, rimessa in riga insieme al resto" },
        ],

        comeFunzionaAdesso:
          "Oggi gli eventi partono anche dal server, il consenso comanda da un punto solo, e la pubblicità gira su tutta la gamma: un programma per campagna, il recupero di chi ha già visto, la promozione per i nuovi e quella annuale al momento giusto. La parte sulla misurazione è la meno visibile di tutte ed è quella che regge il resto: senza, ogni decisione presa guardando i numeri sarebbe stata presa guardando numeri sbagliati.",
      },
      {
        titolo: "Un allenamento invece di una prova",
        sottotitolo:
          "Chiedere molto meno all'inizio, per far succedere qualcosa davvero.",

        contesto: {
          testo:
            "Per provare il servizio si attivava una prova gratuita di sette giorni, e la maggior parte di chi la attivava non faceva nemmeno un esercizio: scadeva senza essere mai usata. In parallelo un programma gratuito via email raccoglieva contatti a costo basso e con buone aperture, ma quasi nessuno arrivava all'abbonamento. Due strade diverse con lo stesso esito: molti contatti, pochissime persone che provavano davvero.",
          punti: [
            "Una prova di sette giorni che la maggior parte non iniziava nemmeno",
            "Un programma gratuito molto aperto e quasi mai convertito",
            "Nessuna pagina costruita su un pubblico specifico",
            "Nessun automatismo su scadenze e rinnovi",
          ],
        },

        decisione: {
          citazione:
            "Abbassare il costo di provare, non convincere a comprare.",
          consueto: {
            titolo: "Come si fa di solito",
            testo:
              "La prova a tempo: sette giorni per esplorare tutto. Sembra generosa, ma chiede un impegno continuato proprio a chi non sa da dove cominciare. Chi entra e trova un catalogo di programmi rimanda la scelta, e la prova scade senza che sia successo niente — lasciando anche la sensazione di aver già provato.",
          },
          invece: {
            titolo: "Cosa abbiamo fatto invece",
            testo:
              "Un allenamento solo. La persona sceglie il percorso che la riguarda e lo riceve subito, dentro la pagina, senza aspettare una email. Non deve decidere da dove partire né ricordarsi di tornare: quando esce ha già fatto la cosa per cui era arrivata.",
          },
        },

        passaggi: [
          {
            titolo: "La scelta del percorso",
            testo:
              "Tre pagine, una per ciascun pubblico, con lo stesso impianto e messaggi diversi. Chi arriva non sceglie dentro un catalogo: è già sulla pagina che parla di lui.",
          },
          {
            titolo: "La consegna nella pagina",
            testo:
              "L'allenamento si guarda subito dopo il modulo, sulla pagina stessa. Quello che è stato promesso non dipende dal fatto che una email venga consegnata, trovata e aperta.",
          },
          {
            titolo: "Quattro giorni, non di più",
            testo:
              "Una sequenza breve: dopo la consegna, un messaggio al giorno per quattro giorni. Chi non si convince in quattro giorni non si convince al sesto, e continuare a scrivere costa la disiscrizione.",
          },
          {
            titolo: "Due strade a seconda di chi ha aperto",
            testo:
              "Dal secondo messaggio il percorso si divide fra chi ha cliccato e chi no: allo stesso punto della sequenza arrivano due testi diversi, perché parlano a due persone in due momenti diversi.",
          },
          {
            titolo: "Il controllo prima di ogni proposta",
            testo:
              "Prima di ogni email che propone l'abbonamento il sistema verifica se la persona ha già comprato, e in quel caso la fa uscire. Continuare a vendere a chi ha già comprato è il modo più rapido di perderlo.",
          },
          {
            titolo: "Nessuna scadenza inventata",
            testo:
              "L'offerta per i nuovi iscritti non scade davvero, quindi non c'è nessun conto alla rovescia. L'urgenza è quella vera: il tempo che si perde continuando a rimandare.",
          },
        ],

        strumenti: [
          { nome: "Lovable", ruolo: "Le tre pagine e la consegna dell'allenamento" },
          { nome: "Brevo", ruolo: "La sequenza email e le liste di chi ha già comprato" },
          { nome: "Mixpanel", ruolo: "Chi ha comprato e cosa, per far uscire le persone dalla sequenza" },
          { nome: "n8n", ruolo: "Il ponte che tiene allineate le liste a intervalli regolari" },
          { nome: "Dailymotion", ruolo: "Il video dell'allenamento, senza pubblicità né contenuti correlati" },
        ],

        comeFunzionaAdesso:
          "Il sistema è in corso di attivazione e la collaborazione prosegue. Quello che c'è è l'impianto completo: le tre pagine, la sequenza per ciascun percorso, l'uscita automatica di chi compra e il collegamento che tiene aggiornate le liste. Sui risultati non c'è ancora niente da dire, ed è troppo presto perché ci sia.",
      },
    ],
    galleria: [
      {
        src: "/progetti/postura-da-paura/banner-desk.webp",
        alt: "Immagine del marchio su fondo prugna: un uomo seduto su un cubo, accanto al segno grafico",
        didascalia:
          "Un colore e una persona per ogni percorso. L'impianto dell'immagine invece non cambia mai: il segno a sinistra, chi si allena a destra.",
      },
      {
        src: "/progetti/postura-da-paura/banner-lilla.webp",
        alt: "Immagine del marchio su fondo lilla: una donna seduta su un cubo, accanto al segno grafico",
        didascalia:
          "Lo stesso schema in un altro colore. È così che i percorsi restano distinti senza sembrare marchi diversi.",
      },
      {
        src: "/progetti/postura-da-paura/landing-basic.webp",
        alt: "Pagina di prova gratuita del percorso base, fondo rosa, titolo «Allenati per il tuo benessere, non per uno standard»",
        didascalia: "Il percorso base: la promessa è il benessere, non l'aspetto",
      },
      {
        src: "/progetti/postura-da-paura/landing-strong.webp",
        alt: "Pagina di prova gratuita del percorso ad alta intensità, fondo nero, titolo «Allenamento ad alta intensità. A casa o in palestra»",
        didascalia: "Stesso impianto, pubblico diverso",
      },
      {
        src: "/progetti/postura-da-paura/landing-menopausa.webp",
        alt: "Pagina di prova gratuita del percorso menopausa, fondo lilla, titolo «Il tuo corpo in menopausa non ha bisogno di meno. Ha bisogno di meglio»",
        didascalia: "Il terzo percorso, con un messaggio che non gira intorno al tema",
      },
      {
        src: "/progetti/postura-da-paura/basic-sezione.webp",
        alt: "Sezione della pagina con una fotografia su fondo rosa e il titolo «Il benessere nasce quando l'allenamento rispetta il tuo corpo»",
        didascalia: "Ogni pagina argomenta la promessa che ha appena fatto",
      },
      {
        src: "/progetti/postura-da-paura/strong-sezione.webp",
        alt: "Sezione della pagina ad alta intensità, con fotografia su fondo rosso e la fascia dei vantaggi",
        didascalia: "La stessa struttura, ripetuta in un altro mondo di colore",
      },
    ],
  },
  {
    slug: "fitactive",
    nome: "FitActive",
    sottotitolo: "Trentatré palestre gestite come se fossero una",
    settore: "Palestre in franchising",
    anno: "2026",
    sito: "https://fitactive.it",
    crediti: "con meravigliä LAB",
    cosaAbbiamoFatto: ["Piano editoriale", "Campagne", "Schede locali", "Report"],
    cover: {
      src: "/progetti/fitactive/cover.webp",
      alt: "La sala attrezzi di una palestra FitActive il giorno dell'apertura, pareti arancioni e palloncini fra le panche",
    },
    coverVerticale: {
      src: "/progetti/fitactive/cover-verticale.webp",
      alt: "La stessa sala vista in lunghezza, con il corridoio centrale fra le panche e i tapis roulant",
    },
    intro:
      "Trentatré palestre, cinque proprietà diverse e una sola persona che approva. Il problema non era cosa dire: era riuscire a dirlo ovunque, in tempo.",
    capitoli: [
      {
        titolo: "Un contenuto per trentatré sedi",
        sottotitolo:
          "Quando il collo di bottiglia non è la produzione ma l'approvazione.",

        contesto: {
          testo:
            "La pubblicazione sui social avveniva quando in sede qualcuno aveva tempo, con buchi fra un pacchetto di materiali della casa madre e il successivo. Le campagne erano impostate su traffico e messaggi invece che su moduli contatto, quindi non c'era modo di dire quali iscritti arrivassero dalla pubblicità. E gli accessi erano frammentati: pagine social e account pubblicitari mancanti all'appello, schede Google aperte con gli account personali di chi lavorava in sede.",
          punti: [
            "Trentatré sedi, cinque proprietà, un solo referente che approva",
            "Pubblicazione affidata a chi in sede aveva tempo",
            "Campagne su traffico e messaggi, senza modo di risalire agli iscritti",
            "Pagine social e account pubblicitari mancanti all'appello",
            "Schede Google aperte con account personali delle sedi",
          ],
        },

        decisione: {
          citazione:
            "Un contenuto solo, declinato trentatré volte. Non trentatré contenuti.",
          consueto: {
            titolo: "Come si fa di solito",
            testo:
              "Piano editoriale per punto vendita: ogni sede ha i suoi contenuti locali. Non è sbagliato in sé, ed è quello che tutti si aspettano. Il difetto è aritmetico: con una sola persona che approva, un piano per sede significa centinaia di pezzi al mese da validare. L'approvazione non arriva mai in tempo, si aprono buchi di pubblicazione, e il tempo dell'agenzia finisce in coordinamento invece che in produzione.",
          },
          invece: {
            titolo: "Cosa abbiamo fatto invece",
            testo:
              "Pochi modelli al mese per tutta la rete. Da sede a sede cambiano nome, indirizzo, telefono e il dettaglio locale solo dove aggiunge qualcosa, e l'approvazione avviene sui modelli invece che sui pezzi finiti. Si perde specificità locale e si guadagnano puntualità di uscita, coerenza visiva su tutta la rete e tempi di approvazione certi. Su trentatré sedi è un cambio che rende il piano eseguibile invece che teorico.",
          },
        },

        passaggi: [
          {
            titolo: "L'analisi prima degli accessi",
            testo:
              "Prima di chiedere una password, la lettura di tutto quello che era già pubblico: pagine social delle sedi, schede Google, recensioni, promozioni in corso. È da lì che è emersa la tesi di partenza — il pubblico c'è già e va alimentato con continuità, non conquistato da capo.",
          },
          {
            titolo: "Il piano deciso in una riunione sola",
            testo:
              "Novanta minuti in sede con l'obiettivo di uscire con il piano condiviso e gli accessi avviati, non con un documento da rileggere con calma. Lì sono state fissate le categorie di contenuto, gli angoli creativi, il calendario delle iniziative dell'anno e il canale su cui parlarsi.",
          },
          {
            titolo: "La riconciliazione degli accessi",
            testo:
              "Tre fonti diverse confrontate riga per riga: le comunicazioni del cliente, l'audit interno e la lista degli account pubblicitari. Sono emersi profili e account mancanti, account di un altro marchio arrivati per errore, e sedi indicate con nomi interni che non coincidono con quelli ufficiali. Lavorare sull'asset sbagliato era un rischio concreto.",
          },
          {
            titolo: "Il ciclo mensile sempre uguale",
            testo:
              "Ogni mese le stesse date: arrivo dei materiali, piano e impostazione campagne, produzione dei modelli e delle declinazioni, un solo passaggio di approvazione, programmazione, report. Sapere cosa succede il giorno dodici è quello che rende governabile una rete di questa dimensione.",
          },
          {
            titolo: "Le schede locali, una per una",
            testo:
              "Dati, orari di apertura continuata, foto, recensioni, domande e risposte: presidiate sede per sede. Per una palestra di quartiere la scheda sulla mappa è spesso il primo contatto, molto prima di qualunque profilo social.",
          },
          {
            titolo: "L'identità lasciata dov'era",
            testo:
              "Arancio e nero, il payoff, la mascotte, il modo di parlare delle sedi: non sono stati toccati. Erano già strumenti che funzionavano, e la reputazione accumulata dalle sedi andava ereditata invece che riscritta. Un'agenzia nuova di solito ridisegna; qui ridisegnare avrebbe distrutto valore.",
          },
        ],

        strumenti: [
          { nome: "Meta Business Manager", ruolo: "Pagine, account pubblicitari ed esclusioni geografiche fra sedi vicine" },
          { nome: "Schede Google", ruolo: "La presenza sulla mappa di ogni sede, presidiata una per una" },
          { nome: "Telegram", ruolo: "Il canale con il cliente: tiene insieme conversazione e documenti" },
          { nome: "Calendario condiviso", ruolo: "Il piano e lo stato degli account, visibili a tutti" },
          { nome: "Generazione automatica dei documenti", ruolo: "Script video e report prodotti da dati strutturati, con controllo visivo prima della consegna" },
        ],

        comeFunzionaAdesso:
          "Oggi la rete pubblica con un ritmo prevedibile, le uscite sono coerenti da una sede all'altra e l'approvazione richiede una firma sola al mese invece di centinaia. Non è automazione, è organizzazione — ma su trentatré sedi è la differenza fra un piano che esiste e un piano che esce davvero.",
      },
      {
        titolo: "Il report che sposta il problema",
        sottotitolo:
          "Usare i propri risultati buoni per indicare dove il valore si perde.",

        contesto: {
          testo:
            "La prima campagna a modulo contatti della rete ha sostituito quelle su traffico e messaggi, con un codice da consegnare in reception come secondo livello di attribuzione. I contatti sono arrivati, e a quel punto i dati hanno detto una cosa scomoda: quasi nessuno diventava un appuntamento, mentre quasi tutti quelli che a un appuntamento ci arrivavano si iscrivevano. La perdita non era nella vendita in sede e non era nella campagna. Era nel richiamo.",
          punti: [
            "Contatti lavorati a mano da chi in reception aveva tempo",
            "Velocità di ricontatto non tracciata e molto variabile",
            "Messaggistica bloccata più volte per invii massivi, con il richiamo fermo",
            "Nessun collegamento fra una campagna online e un contratto firmato in sede",
          ],
        },

        decisione: {
          citazione:
            "I numeri erano buoni. Usarli per chiudere sarebbe stato il modo più rapido di non servire a niente.",
          consueto: {
            titolo: "Come si fa di solito",
            testo:
              "Il report di fine campagna si chiude sui propri risultati: quanto è costato un contatto, quanto è rientrato, com'è andata rispetto a prima. È comodo perché tutto ciò che si racconta è merito di chi lo racconta, e nessuno deve sentirsi messo in discussione. Il cliente ringrazia, e il mese dopo il problema vero è ancora lì dov'era.",
          },
          invece: {
            titolo: "Cosa abbiamo fatto invece",
            testo:
              "I risultati sono stati usati come prova che offerta e messaggio funzionavano, e il documento si è spostato su dove il valore si perdeva davvero: la gestione dei contatti in reception. È una scelta che espone, perché invita il cliente a rispondere «allora il problema siamo noi». Ma indicare il punto giusto vale più che incassare un risultato.",
          },
        },

        passaggi: [
          {
            titolo: "La campagna a modulo contatti",
            testo:
              "Al posto di traffico e messaggi, un modulo e una pagina tracciata, più un codice da dare in reception per collegare la persona alla campagna da cui era arrivata. Budget quasi identico fra le sedi, così le differenze di risultato non si potessero spiegare con la spesa.",
          },
          {
            titolo: "I dati raccolti sede per sede",
            testo:
              "Non una media di rete ma una riga per ciascuna palestra. È l'unico modo per vedere la forbice fra sedi con lo stesso formato e lo stesso budget, e per accorgersi che il problema non sta dove lo si stava cercando.",
          },
          {
            titolo: "I buchi dichiarati invece che livellati",
            testo:
              "Dati mancanti su alcune sedi, anomalie evidenti su altre, periodo di rilevazione non registrato: tutto raccolto in una pagina apposta e marcato come da verificare. Un report che nasconde i buchi è un report che non si può usare per decidere.",
          },
          {
            titolo: "Una sede tolta dalla media",
            testo:
              "Una sede la cui campagna non era mai partita produceva un ritorno assurdo che alzava la media di rete. È stata esclusa e indicata come non disponibile: si è rinunciato a un numero migliore per averne uno difendibile.",
          },
          {
            titolo: "Il documento ridotto all'osso",
            testo:
              "Dalla versione lunga con tutte le schede sede a una versione corta, tenendo la lunga come riserva per le domande. Un documento di presentazione che nessuno finisce di leggere non ha presentato niente.",
          },
          {
            titolo: "Il flusso proposto, definito al minuto",
            testo:
              "Non «serve un gestionale», ma cosa succede e quando: il contatto entra con la propria origine, riceve entro un minuto un messaggio dal numero della sua palestra — non dal marchio — con due orari concreti e una sola domanda. Da lì tre strade a seconda di come risponde, e tentativi programmati per chi non risponde affatto.",
          },
        ],

        strumenti: [
          { nome: "Modulo contatti", ruolo: "La raccolta, con la provenienza attaccata al contatto" },
          { nome: "Pagina tracciata e codice in reception", ruolo: "Due livelli di attribuzione al posto di nessuno" },
          { nome: "Dati per sede", ruolo: "Una riga per palestra invece di una media di rete" },
          { nome: "Generazione del report", ruolo: "Documento e allegati prodotti da dati strutturati, per rifarli senza rifarli a mano" },
        ],

        comeFunzionaAdesso:
          "Il sistema di gestione dei contatti è una proposta, non una cosa che gira: è costruito nel dettaglio ma non ancora adottato, e va detto. Quello che è cambiato davvero è dove si guarda — dalla campagna al richiamo — e il fatto che ora esistano dati per sede su cui discutere invece di impressioni. La collaborazione prosegue.",
      },
    ],
    galleria: [
      {
        src: "/progetti/fitactive/sistema.webp",
        alt: "Schema: una scheda chiara affiancata a trentatré riquadri arancioni identici",
        didascalia:
          "Un modello, trentatré declinazioni. Il contenuto si scrive una volta e cambia solo dove deve: nome della sede, indirizzo, orari.",
      },
      {
        src: "/progetti/fitactive/sala.webp",
        alt: "Una sala pesi FitActive con la rastrelliera dei manubri, le panche e i palloncini dell'apertura",
        didascalia:
          "Sedi diverse, stessa sala. È la ragione per cui un contenuto solo può valere per tutte: cambia l'indirizzo, non quello che si vede.",
      },
      {
        src: "/progetti/fitactive/apertura.webp",
        alt: "Il giorno dell'apertura di una sede FitActive, con i trainer in maglia arancione e i primi visitatori fra le macchine",
        didascalia:
          "L'apertura di una sede è l'unico momento in cui il calendario è davvero locale. Tutto il resto si può decidere una volta per tutte.",
      },
    ],
  },
  {
    slug: "eddyline",
    nome: "Eddyline",
    sottotitolo: "La landing page che ti fa scegliere",
    settore: "Turismo outdoor",
    anno: "2025–2026",
    sito: "https://eddyline.it",
    crediti: "con meravigliä LAB",
    cosaAbbiamoFatto: ["Landing page", "Campagne", "Tracciamento", "Sviluppo"],
    cover: {
      src: "/progetti/eddyline/cover.webp",
      alt: "Un gommone da rafting affronta una rapida sul fiume Sesia",
    },
    coverVerticale: {
      src: "/progetti/eddyline/cover-verticale.webp",
      alt: "Un gommone da rafting visto dall'alto mentre affronta le rapide del Sesia",
    },
    intro:
      "Una pagina che prima di raccontarti qualcosa ti chiede una cosa sola: rafting o canyoning. Da quella scelta si riscrive tutto il resto — prezzi, certificazioni, ordine delle chiamate all'azione.",
    capitoli: [
      {
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
    slug: "miwa",
    nome: "MIWA",
    sottotitolo: "Due lavori per un marchio di moda all'ingrosso",
    settore: "Ingrosso moda B2B",
    anno: "2025",
    sito: "https://www.miwab2b.it",
    crediti: "con meravigliä LAB",
    cosaAbbiamoFatto: ["Strategia di marca", "Campagne", "Automazioni", "Shooting AI"],
    cover: {
      src: "/progetti/miwa/cover.webp",
      alt: "Scatto editoriale della campagna MIWA, all'aperto sulle colline",
    },
    coverVerticale: {
      src: "/progetti/miwa/cover-verticale.webp",
      alt: "Scatto editoriale della campagna MIWA: una modella su una scalinata in pietra",
    },
    intro:
      "Due incarichi a distanza di mesi per lo stesso cliente: prima portare domanda qualificata a una piattaforma che non esisteva ancora, poi togliere di mezzo lo shooting fotografico.",
    capitoli: [
      {
        titolo: "Il lancio della piattaforma",
        sottotitolo:
          "Costruire domanda qualificata prima che ci fosse qualcosa da mostrare.",

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
      },
      {
        titolo: "Lo shooting che non si fa",
        sottotitolo:
          "Un flusso che genera le immagini prodotto partendo da una foto scattata col telefono.",

        contesto: {
          testo:
            "MIWA parla a donne fra i venticinque e i cinquant'anni nel fast fashion, dove una collezione invecchia in poche settimane. Per avere immagini prodotto decenti servivano un budget importante, una location e almeno due modelle: un investimento che restituiva la percezione di marca giusta, ma non un ritorno proporzionato alla spesa. Il problema vero però non era il costo. Fra organizzazione, scatto e post-produzione passavano almeno quindici giorni, e in quei quindici giorni i capi erano già vecchi: la fotografia arrivava sistematicamente un passo indietro rispetto alla collezione.",
          punti: [
            "Una collezione che invecchia in poche settimane",
            "Budget, location e modelle per ogni nuovo arrivo in magazzino",
            "Almeno quindici giorni fra organizzazione, scatto e post-produzione",
            "Le immagini pronte quando il capo era già fuori tempo",
          ],
        },

        decisione: {
          citazione:
            "Il problema non era quanto costava fotografare. Era quanto ci metteva.",
          consueto: {
            titolo: "Come si fa di solito",
            testo:
              "Si tratta lo shooting come una voce di spesa da ridurre: meno giornate, meno modelle, una location più economica. Si risparmia, ma i tempi restano quelli — e nel fast fashion il tempo è la variabile che conta, perché una collezione ha poche settimane di vita.",
          },
          invece: {
            titolo: "Cosa abbiamo fatto invece",
            testo:
              "Abbiamo costruito un flusso di generazione azionabile da chiunque in azienda, senza competenze fotografiche né tecniche. Parte da una foto scattata col telefono al capo appena arrivato in magazzino e restituisce l'immagine finita. L'unico passaggio davvero umano che resta è il controllo qualità: qualcuno guarda e decide se quell'immagine si può pubblicare.",
          },
        },

        passaggi: [
          {
            titolo: "La foto in magazzino",
            testo:
              "Il capo arriva, qualcuno lo fotografa col telefono così com'è. Nessuna luce, nessun fondale, nessuna competenza richiesta: è il punto in cui il processo smette di dipendere da un'agenda.",
          },
          {
            titolo: "L'orchestrazione",
            testo:
              "n8n tiene insieme i passaggi: riceve la foto, prepara la richiesta, la smista al generatore e raccoglie il risultato. Chi lo usa non vede niente di tutto questo.",
          },
          {
            titolo: "I prompt scritti con Claude",
            testo:
              "Le istruzioni vengono scritte e affinate con Claude per tenere coerenti tessuti, colori e vestibilità da un capo all'altro. È la parte che fa la differenza fra immagini che sembrano dello stesso marchio e immagini che sembrano di marchi diversi.",
          },
          {
            titolo: "Due generatori, uno per volta",
            testo:
              "L'immagine finale viene affidata di volta in volta a ChatGPT o a Gemini, scegliendo quello che rende meglio su quel capo specifico. Nessuno dei due vince sempre, e legarsi a uno solo avrebbe abbassato la qualità media.",
          },
          {
            titolo: "Il controllo umano",
            testo:
              "L'unico passaggio non automatico: una persona guarda l'immagine e decide. Non è un residuo da eliminare, è il punto in cui si difende la percezione del marchio.",
          },
        ],

        strumenti: [
          { nome: "n8n", ruolo: "Orchestra il flusso, dalla foto in ingresso all'immagine finita" },
          { nome: "Claude", ruolo: "Scrittura e affinamento dei prompt, per la coerenza fra i capi" },
          { nome: "ChatGPT", ruolo: "Generazione dell'immagine, quando rende meglio sul capo" },
          { nome: "Gemini", ruolo: "Generazione alternativa, scelta capo per capo" },
          { nome: "Telefono aziendale", ruolo: "Lo scatto di partenza: nessuna attrezzatura, nessuna competenza" },
        ],

        comeFunzionaAdesso:
          "In fase pilota il flusso ha prodotto un centinaio di immagini partendo da foto di magazzino. Oggi il progetto è in stand-by per difficoltà interne del cliente, estranee al lavoro fatto, e non è arrivato a una fase di lancio e di misurazione. Resta una prova di fattibilità: dove la velocità conta più della perfezione, un sistema di generazione può sostituire lo shooting tradizionale, e chiunque in azienda è in grado di azionarlo.",
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
  {
    slug: "cappelletti",
    nome: "Claudio Cappelletti",
    sottotitolo: "Un catalogo che racconta invece di vendere",
    settore: "Beverage",
    anno: "2024",
    sito: "https://cappelletticlaudio.com",
    cosaAbbiamoFatto: ["Art direction", "Copywriting", "Editoria", "Stampa"],
    cover: {
      src: "/progetti/cappelletti/cover.webp",
      alt: "Una cantina con le botti impilate lungo le pareti di un corridoio in penombra",
    },
    coverVerticale: {
      src: "/progetti/cappelletti/cover-verticale.webp",
      alt: "Due calici si toccano in un locale buio, sotto un'insegna al neon",
    },
    intro:
      "Claudio vende bevande, ma il suo valore non è il prezzo più basso: è scegliere il prodotto giusto per ogni cliente. Il materiale che aveva diceva l'opposto.",
    capitoli: [
      {
        contesto: {
          testo:
            "Il materiale commerciale precedente era costruito tutto intorno a prezzi e listini. È il tipo di comunicazione che attira chi cerca lo sconto e allontana chi cerca un consulente di cui fidarsi — cioè esattamente il cliente su cui Claudio costruisce il suo lavoro. La sfida era comunicativa prima ancora che grafica: spostare l'attenzione dal prodotto scontato alla persona che lo consiglia.",
          punti: [
            "Materiale costruito su prezzi e listini",
            "Una comunicazione che attirava chi cerca lo sconto",
            "Il valore vero — saper scegliere — invisibile",
            "Niente che restasse in mano al cliente dopo l'incontro",
          ],
        },
        decisione: {
          citazione:
            "Via i prezzi. Finché resti sul prezzo, il cliente ti confronta solo su quello.",
          consueto: {
            titolo: "Come si fa di solito",
            testo:
              "Il catalogo di un commerciale beverage è un listino: pagine di bottiglie, formati, prezzi, sconti per quantità. Si consulta una volta e si butta — e mentre lo si sfoglia si sta confrontando il fornitore con tutti gli altri sull'unica variabile che il catalogo mette in evidenza.",
          },
          invece: {
            titolo: "Cosa abbiamo fatto invece",
            testo:
              "Abbiamo tolto i prezzi e le liste di bottiglie, e messo al centro il progetto e la persona che c'è dietro. Venti pagine di carta pensate per restare sulla scrivania invece che nel cestino: fotografia, racconto, criterio di scelta. Chi lo apre non sta confrontando un listino, sta conoscendo qualcuno.",
          },
        },
        passaggi: [
          {
            titolo: "Lo spostamento del baricentro",
            testo:
              "Prima di impaginare, la decisione: il catalogo non parla di cosa si vende ma di come si sceglie. Da lì discende tutto il resto, dalla scaletta alle fotografie.",
          },
          {
            titolo: "La filosofia in apertura",
            testo:
              "Si apre con il modo di lavorare di Claudio, non con un prodotto. Chi legge capisce subito che tipo di rapporto gli si sta proponendo.",
          },
          {
            titolo: "La fotografia come argomento",
            testo:
              "Cantine, vigne, banconi, tavole apparecchiate: immagini che raccontano il contesto in cui quei prodotti finiscono, non i prodotti isolati su fondo bianco.",
          },
          {
            titolo: "Venti pagine, zero prezzi",
            testo:
              "Nessun listino, nessuno sconto, nessuna quantità minima. Il prezzo torna a essere una conversazione invece di una pagina.",
          },
          {
            titolo: "Un oggetto che resta",
            testo:
              "Formato, carta e peso scelti perché il catalogo sopravviva alla prima lettura e rimanga sulla scrivania. È il contrario di un volantino.",
          },
          {
            titolo: "La carta delle birre",
            testo:
              "Stesso registro, secondo strumento: una selezione dedicata alle birre, costruita con lo stesso criterio narrativo e pensata per affiancare il catalogo invece di ripeterlo.",
          },
        ],
        strumenti: [
          { nome: "Art direction", ruolo: "Impaginazione, ritmo delle immagini, gerarchia dei contenuti" },
          { nome: "Copywriting", ruolo: "Il racconto del metodo, non la descrizione dei prodotti" },
          { nome: "Ricerca fotografica", ruolo: "Selezione e trattamento delle immagini di contesto" },
          { nome: "Stampa", ruolo: "Venti pagine, formato e carta scelti per durare sulla scrivania" },
        ],
        comeFunzionaAdesso:
          "Il catalogo è in mano ai clienti e ha funzionato, sia per Claudio che per loro: il riscontro è stato tale che con lui è già partito lo sviluppo dei materiali per il 2027. La carta delle birre è il primo pezzo di quella seconda serie.",
      },
    ],
    galleria: [
      {
        src: "/progetti/cappelletti/vigneto.webp",
        alt: "Filari di vigna su una collina al tramonto",
        didascalia: "Il contesto, non il prodotto",
      },
      {
        src: "/progetti/cappelletti/bottiglie.webp",
        alt: "Due mani scelgono una bottiglia da una parete di bottiglie coricate",
        didascalia: "La scelta, che è il mestiere",
      },
      {
        src: "/progetti/cappelletti/bancone.webp",
        alt: "Una birra viene spillata al bancone di un locale illuminato al neon",
        didascalia: "Dove i prodotti finiscono davvero",
      },
      {
        src: "/progetti/cappelletti/birra.webp",
        alt: "Un bicchiere di birra con la schiuma che trabocca, su fondo nero",
        didascalia: "Dalla carta delle birre",
      },
      {
        src: "/progetti/cappelletti/degustazione.webp",
        alt: "Una mano solleva un calice sopra un tavolo illuminato da una lampada",
        didascalia: "Una degustazione",
      },
    ],
  },
  {
    slug: "charms",
    nome: "Charms",
    sottotitolo: "Il rilancio di un marchio che nessuno ricordava",
    settore: "Dolciario · GDO",
    anno: "2025",
    sito: "https://ravazzigummy.it",
    crediti: "con CAWIPA",
    cosaAbbiamoFatto: ["Strategia", "Art direction", "Copywriting", "Packaging"],
    cover: {
      src: "/progetti/charms/cover.webp",
      alt: "Due confezioni Charms, una rossa col peperoncino e una viola con la melanzana, su fondo nero",
    },
    coverVerticale: {
      src: "/progetti/charms/cover-verticale.webp",
      alt: "La confezione rossa di Charms con il peperoncino, su fondo nero",
    },
    intro:
      "Riportare Charms in grande distribuzione con un prodotto capace di restituire ai più giovani la stessa ventata di colore degli anni Ottanta — parlando però la lingua di adesso.",
    capitoli: [
      {
        contesto: {
          testo:
            "Ravazzi voleva riportare Charms sugli scaffali della grande distribuzione con un prodotto forte e differenziante. Prima di costruire qualsiasi strategia abbiamo fatto una ricerca, fra panel e interviste quantitative e qualitative, e il dato più importante è arrivato subito: otto persone su dieci non conoscevano il marchio. Puntare sulla notorietà storica non sarebbe bastato, perché quella notorietà non c'era più. Bisognava trattare Charms come un marchio nuovo.",
          punti: [
            "Otto persone su dieci non conoscevano il marchio",
            "Un ritorno in grande distribuzione da costruire da zero",
            "La nostalgia come unica leva disponibile, e insufficiente",
            "Due pubblici molto diversi da raggiungere con lo stesso prodotto",
          ],
        },
        decisione: {
          citazione:
            "Il colore diventa linguaggio: una storia per i più piccoli, un'emoji per i più grandi.",
          consueto: {
            titolo: "Come si fa di solito",
            testo:
              "Un marchio storico che torna sugli scaffali si appoggia alla memoria: il logo di allora, i colori di allora, il richiamo a un'epoca. Funziona con chi c'era. Con otto persone su dieci che quel nome non l'hanno mai sentito, è una leva che non fa presa.",
          },
          invece: {
            titolo: "Cosa abbiamo fatto invece",
            testo:
              "Abbiamo separato i pubblici e dato a ciascuno un linguaggio suo, tenendo il colore come elemento comune. Per i più piccoli la caramella diventa un personaggio e una storia, un momento di tenerezza. Per i più grandi diventa un'emoji: un modo di sostituire le parole con qualcosa di dolce, piccante o aspro. Due mondi sullo stesso scaffale, riconoscibili come la stessa marca.",
          },
        },
        passaggi: [
          {
            titolo: "La ricerca prima della strategia",
            testo:
              "Panel e interviste, quantitative e qualitative, per capire da dove si partiva davvero invece di dare per scontata una notorietà che non esisteva più.",
          },
          {
            titolo: "Due pubblici, due linguaggi",
            testo:
              "La divisione dei target è la struttura su cui si regge tutto il resto. Non due varianti grafiche dello stesso messaggio: due modi diversi di parlare.",
          },
          {
            titolo: "I personaggi, per i più piccoli",
            testo:
              "Ted, Coley, Merry e Blue, Sharpy, Blink: la caramella diventa qualcuno, e la confezione racconta un momento invece di elencare un gusto.",
          },
          {
            titolo: "Le emoji, per i più grandi",
            testo:
              "Pesca, melanzana, peperoncino, fantasma, cuore: il linguaggio con cui quel pubblico già scrive, portato sulla confezione insieme alla frase che lo completa.",
          },
          {
            titolo: "Un gusto nato dal linguaggio",
            testo:
              "Dal peperoncino come segno è nato un gusto nuovo, spicy e super sour, sviluppato insieme a Ravazzi e pensato per il pubblico teenager. Un prodotto che nasce da un'intuizione di linguaggio prima ancora che di ricetta.",
          },
        ],
        strumenti: [
          { nome: "Ricerca", ruolo: "Panel e interviste, quantitative e qualitative" },
          { nome: "Strategia di marca", ruolo: "Divisione dei pubblici e architettura dei linguaggi" },
          { nome: "Art direction", ruolo: "Sistema visivo del packaging, personaggi e uso del colore" },
          { nome: "Copywriting", ruolo: "Le frasi sulle confezioni, diverse da un pubblico all'altro" },
          { nome: "Sviluppo prodotto", ruolo: "Il gusto spicy e super sour, insieme a Ravazzi" },
        ],
        comeFunzionaAdesso:
          "Il gusto nuovo non è ancora sullo scaffale: il prodotto deve entrare in grande distribuzione, quindi non ci sono dati di vendita né di notorietà dopo il lancio. Quello che il lavoro ha permesso finora è validare la direzione, strategica e creativa, prima di arrivare davanti al consumatore — che è il momento in cui correggere costa molto di più.",
      },
    ],
    galleria: [
      {
        src: "/progetti/charms/linea-emoji.webp",
        alt: "Quattro confezioni Charms della linea emoji: pesca, melanzana, fantasma e peperoncino",
        didascalia: "La linea per i più grandi: l'emoji al posto delle parole",
      },
      {
        src: "/progetti/charms/linea-personaggi.webp",
        alt: "Quattro confezioni Charms con i personaggi Ted, Coley, Merry & Blue e Sharpy",
        didascalia: "La linea per i più piccoli: la caramella diventa qualcuno",
      },
      {
        src: "/progetti/charms/party-squad.webp",
        alt: "La confezione Party Squad con tutti i personaggi insieme",
        didascalia: "Party Squad, i personaggi tutti insieme",
      },
      {
        src: "/progetti/charms/esecutivo.webp",
        alt: "L'esecutivo di stampa di una confezione, con le tracce di taglio e le aree di sicurezza",
        didascalia: "L'esecutivo di stampa",
      },
    ],
  },
  {
    slug: "swapa",
    nome: "SWAPA",
    sottotitolo: "Dalla campagna all'appuntamento confermato, senza passaggi a mano",
    settore: "Mobilità elettrica urbana",
    anno: "2025–2026",
    sito: "https://swapa.it",
    crediti: "con meravigliä LAB",
    cosaAbbiamoFatto: ["Automazioni", "CRM", "Landing page", "WhatsApp ed email"],
    cover: {
      src: "/progetti/swapa/cover.webp",
      alt: "La microcar elettrica SWAPA ZIP fotografata in studio",
    },
    coverVerticale: {
      src: "/progetti/swapa/cover-verticale.webp",
      alt: "Una ragazza affacciata dal finestrino della microcar elettrica SWAPA",
    },
    intro:
      "Il team faceva tutto a mano: assegnare i contatti, richiamare, fissare gli appuntamenti, mandare le conferme, ricordarsi di chi non aveva risposto. Oggi dal contatto all'appuntamento confermato non tocca niente nessuno.",
    capitoli: [
      {
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
      },
    ],
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
    anno: "2025–2026",
    sito: "https://konsulto.it",
    crediti: "con meravigliä LAB",
    cosaAbbiamoFatto: ["Automazioni", "CRM", "Progettazione funnel"],
    cover: {
      src: "/progetti/konsulto/cover.webp",
      alt: "Fotogramma del webinar Konsulto: il relatore spiega una bolletta con i documenti aperti sul tavolo",
    },
    coverVerticale: {
      src: "/progetti/konsulto/cover-verticale.webp",
      alt: "Ritratto fortemente sfocato del relatore del webinar Konsulto, su fondo viola",
    },
    intro:
      "Dal contatto al commerciale senza che nessuno tocchi niente. Due percorsi paralleli che decidono da soli chi è pronto a parlare, osservando un gesto invece di fare domande.",
    capitoli: [
      {
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
          "Il sistema è stato costruito nel 2024 e da allora non si è più fermato: copre da solo tutto il ciclo, dall'acquisizione alla consegna del contatto al venditore, ed è stato seguito e ampliato negli anni successivi. Chi compie il gesto arriva a una persona, chi non lo compie continua il percorso. Nessuno smista niente a mano, e le regole di distribuzione si cambiano senza toccare il sistema.",
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
];

export function progettoDaSlug(slug: string): Progetto | undefined {
  return progetti.find((p) => p.slug === slug);
}

/** Il progetto successivo, in cerchio: dall'ultimo si torna al primo. */
export function prossimoProgetto(slug: string): Progetto {
  const i = progetti.findIndex((p) => p.slug === slug);
  return progetti[(i + 1) % progetti.length];
}
