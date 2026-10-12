import { FACTS as F } from "./_schema";
import type { PracticalPack } from "./_schema";

/**
 * イタリア語の入国後実用ページ（13ページ）。英語原文＝data/pages-practical.ts。
 * ⚠️ 数値は F 経由。事実は英語版と同一。二人称は Lei。
 * ⚠️ イタリアは相互医療協定（RHCA）の対象国 → 医療ページは協定を先頭に置く（6か月上限・SSN資格・Medicare登録）。
 */
const CHECKED = "12 ottobre 2026";

export const itPractical: PracticalPack = {
  ui: { faq: "Domande frequenti", source: "Fonte", related: "Pagine correlate" },
  articles: [
    {
      slug: "arrivo-in-australia",
      enSlug: "arriving-in-australia",
      title: "Arrivo in Australia: guida pratica per chi ha l'eVisitor",
      description:
        "Il visto La fa salire sull'aereo. Il resto — SmartGate, contanti, rimborso tasse, sanità, guida, emergenze — verificato sulle fonti ufficiali.",
      related: ["smartgate-australia", "assistenza-sanitaria-australia", "soldi-e-mance"],
      checked: CHECKED,
      practical: false,
      blocks: [
        {
          p: `L'eVisitor (o l'ETA, se il passaporto non rientra tra quelli ammessi all'eVisitor) risolve una sola questione: se può recarsi in Australia e restarvi fino a ${F.stayMonths} mesi per volta. Non dice che cosa succede in aeroporto, che cosa può portare con sé, come pagare o che cosa fare se qualcosa va storto. Di questo si occupano le pagine che seguono. Ognuna è verificata presso l'ente governativo australiano competente e rimanda alla sua pagina.`,
        },
        { h2: "Alla frontiera" },
        { links: ["smartgate-australia", "portare-medicinali"] },
        { h2: "Denaro" },
        { links: ["soldi-e-mance", "rimborso-tasse-trs"] },
        { h2: "Spostarsi e restare connessi" },
        { links: ["guidare-in-australia", "telefono-e-sim", "prese-e-tensione", "festivita-australia"] },
        { h2: "Salute e sicurezza" },
        { links: ["assistenza-sanitaria-australia", "numeri-di-emergenza", "fumo-svapo-alcol"] },
        { h2: "Il volo di ritorno" },
        { links: ["liquidi-bagaglio-a-mano"] },
        {
          note: "Su un tema non abbiamo scritto una pagina: i trasporti pubblici. Non esiste un sistema nazionale — ogni città ha la propria tessera e le proprie tariffe (Opal a Sydney, myki a Melbourne, go card nel South East Queensland). Consulti l'azienda dei trasporti della città che visita.",
        },
      ],
    },
    {
      slug: "smartgate-australia",
      enSlug: "smartgate-australia",
      title: `SmartGate in Australia: chi può usarlo (dai ${F.smartgateMinAge} anni) e che cosa serve ancora`,
      description: `SmartGate all'arrivo dai ${F.smartgateMinAge} anni con qualsiasi passaporto valido (sperimentazione ABF). L'Incoming Passenger Card cartacea resta obbligatoria.`,
      related: ["arrivo-in-australia", "liquidi-bagaglio-a-mano", "portare-medicinali"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "Gli SmartGate sono i varchi automatici per il controllo passaporti gestiti dall'Australian Border Force (ABF, la polizia di frontiera australiana) nei principali aeroporti internazionali del Paese. All'arrivo il varco legge il passaporto, scatta una foto e confronta il volto con quella del documento. Se il confronto riesce, stampa un biglietto e si può passare.",
        },
        { h2: "Chi può usare gli SmartGate all'arrivo" },
        {
          ul: [
            "Viaggia con un passaporto valido",
            `È alto almeno ${F.smartgateMinHeight}`,
            `Ha almeno ${F.smartgateMinAge} anni`,
            `I minori di ${F.smartgateAccompanyUnder} anni devono essere accompagnati da un genitore o da un tutore legale`,
          ],
        },
        {
          p: "Fino a poco tempo fa serviva un passaporto elettronico (il simbolo del chip sulla copertina). Ora l'ABF sta sperimentando gli SmartGate all'arrivo per tutti i passaporti, quindi può funzionare anche un passaporto senza chip. L'ABF non pubblica un elenco di nazionalità: i requisiti qui sopra riguardano il passaporto e il viaggiatore, non il Paese che ha rilasciato il documento.",
        },
        {
          note: "Il visto eVisitor (o l'ETA) e lo SmartGate sono due cose distinte. Il visto Le consente di imbarcarsi ed entrare; lo SmartGate è semplicemente il modo in cui viene controllato il passaporto. Usare il varco non modifica le condizioni del visto.",
        },
        { h2: "L'Incoming Passenger Card resta obbligatoria" },
        {
          p: "La maggior parte dei passeggeri deve compilare l'Incoming Passenger Card (IPC), la scheda cartacea di arrivo. Viene distribuita in aereo o in aeroporto e va compilata in inglese. L'ABF pubblica schede di esempio tradotte — anche in italiano, oltre che in tedesco, francese, olandese, spagnolo, coreano e cinese — per capire le domande, ma la scheda che si consegna va compilata in inglese.",
        },
        {
          p: "All'uscita si consegnano il biglietto dello SmartGate e l'Incoming Passenger Card a un agente della Border Force o della biosicurezza. Un'alternativa digitale (l'Australia Travel Declaration) esiste solo come progetto pilota, per passeggeri invitati su alcuni voli Qantas diretti a Brisbane, Sydney e Melbourne, tramite l'app Qantas. Tutti gli altri usano la scheda cartacea.",
        },
        { h2: "Lingue sugli schermi" },
        {
          p: `Gli schermi degli SmartGate all'arrivo sono in inglese, con altre ${F.smartgateArrivalLanguages} lingue a scelta, tra cui italiano, tedesco, olandese, francese, spagnolo, coreano e cinese semplificato e tradizionale. Gli schermi degli SmartGate in partenza sono in inglese, giapponese, coreano e mandarino.`,
        },
        { h2: "In partenza dall'Australia" },
        {
          p: "Qualsiasi viaggiatore con un passaporto valido a lettura ottica può usare gli SmartGate in partenza. Non può usarli se viaggia con qualcuno che ha bisogno di aiuto per seguire le istruzioni, per esempio un neonato o un bambino piccolo.",
        },
        { source: { label: "Australian Border Force (ABF) — Chi può usare gli SmartGate all'arrivo", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgate/arrivals/who-can-use-smartgates" } },
        { source: { label: "Australian Border Force (ABF) — SmartGate in partenza", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgate/departures" } },
        { source: { label: "Australian Border Force (ABF) — Incoming Passenger Card", url: "https://www.abf.gov.au/entering-and-leaving-australia/crossing-the-border/at-the-border/incoming-passenger-card-(ipc)" } },
      ],
      faq: [
        {
          q: "Con il passaporto italiano posso usare lo SmartGate?",
          a: `L'ABF non pubblica un elenco di nazionalità. Gli SmartGate all'arrivo sono aperti ai viaggiatori con un passaporto valido che abbiano almeno ${F.smartgateMinAge} anni e siano alti almeno ${F.smartgateMinHeight}, e l'ABF sta sperimentando i varchi per tutti i passaporti.`,
        },
        {
          q: "Se uso lo SmartGate serve ancora l'Incoming Passenger Card?",
          a: "Sì. All'uscita si consegna il biglietto dello SmartGate insieme all'Incoming Passenger Card compilata. La scheda va compilata in inglese.",
        },
        {
          q: "Mio figlio di 5 anni può usare lo SmartGate?",
          a: `No. Per gli SmartGate all'arrivo bisogna avere almeno ${F.smartgateMinAge} anni. Le famiglie con bambini più piccoli vengono controllate da un agente.`,
        },
      ],
    },
    {
      slug: "liquidi-bagaglio-a-mano",
      enSlug: "airport-security-liquids",
      title: `Liquidi sui voli dall'Australia: la regola dei ${F.lagsContainer} e il limite per le polveri`,
      description: `Sui voli internazionali dall'Australia liquidi, aerosol e gel in contenitori da ${F.lagsContainer}, in un'unica busta trasparente. Limiti anche per le polveri.`,
      related: ["rimborso-tasse-trs", "portare-medicinali", "arrivo-in-australia"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "L'Australia limita liquidi, aerosol, gel e alcune polveri nel bagaglio a mano sui voli internazionali. I limiti non valgono per il bagaglio da stiva né per la maggior parte dei voli nazionali.",
        },
        { h2: "Quando si applicano i limiti" },
        {
          ul: [
            "Quando lascia l'Australia con un volo internazionale",
            "Quando transita dall'Australia da un Paese all'altro",
            "Sulla tratta nazionale di un volo che parte da un terminal internazionale australiano",
            "Prima di imbarcarsi su un volo diretto in Australia, nell'ultimo scalo prima dell'Australia",
          ],
        },
        { h2: "Liquidi, aerosol e gel" },
        {
          ul: [
            `Ogni contenitore deve essere da ${F.lagsContainer} (o 100 g) o meno — un contenitore più grande non è ammesso nemmeno se è solo in parte pieno`,
            `Tutti i contenitori devono stare in un'unica busta di plastica trasparente e richiudibile, i cui quattro lati sommati non superino ${F.lagsBagPerimeterCm} cm (per esempio 20 × 20 cm)`,
            "Una busta per passeggero; può portare le buste delle persone di cui si occupa, bambini compresi",
            "Gli aerosol devono avere un tappo o un dispositivo di blocco",
          ],
        },
        {
          p: "Creme spalmabili e cibi morbidi contano come liquidi o gel. L'elenco ufficiale cita Vegemite, burro di arachidi, miele e yogurt — souvenir che spesso creano problemi al controllo di sicurezza.",
        },
        { h2: "Polveri" },
        {
          p: `Le polveri inorganiche — come sale, scrub al sale, sabbia e alcuni talchi — devono essere in contenitori da ${F.powderLimit} o meno, e il totale per persona non deve superare ${F.powderLimit}. Le polveri organiche come latte in polvere per neonati, caffè, proteine in polvere, farina, spezie e zucchero non hanno limiti. Al controllo potrebbe esserLe chiesto di presentare le polveri a parte.`,
        },
        { h2: "Eccezioni" },
        {
          ul: [
            "Quantità ragionevoli di prodotti per neonati",
            "Medicinali, con o senza prescrizione, necessari durante il volo — potrebbe dover mostrare una prova, per esempio una lettera del medico",
            "Dispositivi e apparecchiature medicali",
          ],
        },
        { h2: "Duty free" },
        {
          p: "I liquidi acquistati al duty free dell'aeroporto devono restare nella busta sigillata antimanomissione in cui sono stati confezionati, insieme alla prova d'acquisto.",
        },
        { source: { label: "Department of Home Affairs (TravelSECURE) — Che cosa si può e non si può portare", url: "https://www.homeaffairs.gov.au/about-us/what-we-do/travelsecure/security-screening-at-airports/what-you-can-and-cant-bring" } },
      ],
      faq: [
        {
          q: "I limiti per i liquidi valgono anche sui voli interni in Australia?",
          a: "Non sulla maggior parte dei voli nazionali. Valgono invece sulla tratta nazionale di un volo che parte da un terminal internazionale.",
        },
        {
          q: "Posso portare un vasetto di Vegemite nel bagaglio a mano?",
          a: `Solo in un contenitore da ${F.lagsContainer} o meno, dentro la busta dei liquidi. I vasetti più grandi vanno nel bagaglio da stiva.`,
        },
        {
          q: "Il latte in polvere per neonati ha dei limiti?",
          a: "Il latte in polvere per neonati è una polvere organica e non ha limiti. Le quantità ragionevoli di prodotti per neonati sono esentate dai limiti sui liquidi.",
        },
      ],
    },
    {
      slug: "soldi-e-mance",
      enSlug: "money-and-tipping",
      title: "Soldi in Australia: contanti, sovrapprezzi sulle carte, GST e mance",
      description: `Prezzi con GST del ${F.gstPercent}% inclusa, niente sovrapprezzo sulle carte dal 1° ottobre 2026, mance facoltative. Contanti da ${F.cashReportThreshold} in su da dichiarare.`,
      related: ["rimborso-tasse-trs", "telefono-e-sim", "festivita-australia"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "In Australia si usa il dollaro australiano (AUD). Prima di pagare qualsiasi cosa conviene conoscere alcune regole — una di queste è cambiata da pochissimo.",
        },
        { h2: "Il prezzo esposto comprende le tasse" },
        {
          p: `La goods and services tax (GST, l'equivalente dell'IVA) è del ${F.gstPercent}% e i negozi devono esporre un prezzo totale che la comprende. Quello che vede è quello che paga alla cassa.`,
        },
        { h2: "Basta sovrapprezzi sulle carte" },
        {
          p: `Dal 1° ottobre 2026 gli esercenti non possono più applicare un sovrapprezzo ai pagamenti con carte Visa, Mastercard, American Express o eftpos — di credito, di debito o prepagate. Prima di quella data molti bar e taxi aggiungevano una percentuale per i pagamenti con carta. Se oggi Le viene addebitato un sovrapprezzo per la carta, vale la pena chiedere spiegazioni.`,
        },
        {
          note: "I sovrapprezzi del fine settimana e dei giorni festivi sono un'altra cosa e restano consentiti — alcuni bar e ristoranti ne applicano uno la domenica e nei giorni festivi. Anche la Sua banca potrebbe addebitare una commissione sulle transazioni in valuta estera; questo riguarda Lei e la Sua banca.",
        },
        { h2: "Mance" },
        {
          p: "Tourism Australia descrive la mancia come facoltativa e, nella maggior parte dei casi, non attesa. Nei ristoranti di fascia alta è comune lasciare circa il 10% per un buon servizio. Non offenderà nessuno se non lascia la mancia in un bar o in taxi.",
        },
        { h2: `Contanti da ${F.cashReportThreshold} in su vanno dichiarati` },
        {
          p: `Non c'è un limite alla quantità di denaro che si può portare in Australia o fuori dall'Australia. Ma se porta con sé contanti e strumenti come traveller's cheque, assegni o vaglia — in qualsiasi valuta — per un valore complessivo di ${F.cashReportThreshold} o più, deve dichiararli sia all'arrivo sia alla partenza.`,
        },
        {
          ul: [
            "Dichiari online con il modulo AUSTRAC prima di passare la dogana e conservi la ricevuta",
            "Se non può usare il modulo online, un modulo cartaceo è disponibile presso un agente della Border Force o della polizia",
            "La domanda 5 dell'Incoming Passenger Card chiede la stessa cosa",
            "La dichiarazione è gratuita. Dividere i contanti tra più viaggiatori per restare sotto la soglia è illegale",
          ],
        },
        { source: { label: "AUSTRAC — Trasferire denaro attraverso le frontiere internazionali", url: "https://www.austrac.gov.au/individuals/moving-money-across-international-borders" } },
        { source: { label: "ACCC — Sovrapprezzi sulle carte (card surcharges)", url: "https://www.accc.gov.au/consumers/pricing/card-surcharges" } },
        { source: { label: "Tourism Australia — Informazioni essenziali sull'Australia", url: "https://www.australia.com/en/facts-and-planning/about-australia/key-facts-about-australia.html" } },
      ],
      faq: [
        {
          q: "È illegale portare in Australia più di 10.000 dollari australiani?",
          a: `No. Non c'è alcun limite. Gli importi di ${F.cashReportThreshold} o più in contanti e strumenti simili vanno dichiarati, nient'altro.`,
        },
        {
          q: "I negozi possono ancora far pagare di più chi paga con carta?",
          a: `Non per le carte Visa, Mastercard, American Express o eftpos dal 1° ottobre 2026. I sovrapprezzi del fine settimana e dei giorni festivi sono un'altra questione e restano consentiti.`,
        },
        {
          q: "In Australia bisogna lasciare la mancia?",
          a: "È facoltativa. Nei ristoranti di fascia alta è comune circa il 10%; altrove non è attesa.",
        },
      ],
    },
    {
      slug: "rimborso-tasse-trs",
      enSlug: "tourist-refund-scheme",
      title: `Tourist Refund Scheme: riavere la GST quando lascia l'Australia (dai ${F.trsMinSpend})`,
      description: `Spesa da ${F.trsMinSpend} presso un solo esercente nei ${F.trsDays} giorni prima di partire, merce con sé, richiesta in aeroporto fino a ${F.trsCutoffMinutes} minuti dal volo.`,
      related: ["soldi-e-mance", "liquidi-bagaglio-a-mano", "arrivo-in-australia"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "I visitatori possono farsi rimborsare la GST — e, sul vino, la wine equalisation tax (WET) — sui beni acquistati in Australia e portati con sé alla partenza. Il Tourist Refund Scheme (TRS) è gestito dall'Australian Border Force in aeroporto, il giorno della partenza.",
        },
        { h2: "Le condizioni" },
        {
          ul: [
            `Ha speso ${F.trsMinSpend} o più (GST inclusa) presso un unico esercente — un unico ABN (il numero d'impresa australiano). Possono essere più fatture dello stesso esercente`,
            `Ha acquistato la merce nei ${F.trsDays} giorni precedenti la partenza dall'Australia`,
            "Ha le fatture fiscali originali (tax invoice). Le fatture da AUD 1.000 o più devono riportare il Suo nome",
            "Porta la merce con sé alla partenza — non può essere spedita",
          ],
        },
        { h2: "La richiesta in aeroporto" },
        {
          p: `Il giorno della partenza presenti passaporto, carta d'imbarco, merce e fatture originali allo sportello TRS, almeno ${F.trsCutoffMinutes} minuti prima dell'orario di partenza previsto. L'ABF consiglia di arrivarci ${F.trsArriveMinutes} minuti prima della partenza, perché nei momenti di punta le code possono essere così lunghe.`,
        },
        {
          ul: [
            "Non si può fare la richiesta online, prima del giorno della partenza o in un aeroporto nazionale",
            "Non c'è rimborso in contanti — il rimborso va su una carta di credito (Amex, Diners, JCB, Mastercard, UnionPay o Visa) o su un conto bancario australiano, di solito entro 60 giorni",
            "L'app ufficiale TRS salva i Suoi dati e le fatture in un codice QR per accelerare la coda; non sostituisce la richiesta di persona",
          ],
        },
        { h2: "Che cosa non si può rimborsare" },
        {
          ul: [
            "I servizi — alloggio, escursioni, taxi, noleggio auto",
            "I beni consumati in tutto o in parte in Australia, compresi cibo, bevande, profumi e integratori",
            "Gli alcolici diversi dal vino sotto il 22% di alcol, e il tabacco",
            "Carte regalo e buoni, e la merce spedita a casa",
          ],
        },
        { source: { label: "Australian Border Force (ABF) — Tourist Refund Scheme", url: "https://www.abf.gov.au/entering-and-leaving-australia/tourist-refund-scheme" } },
        { source: { label: "Australian Border Force (ABF) — Come presentare la richiesta", url: "https://www.abf.gov.au/entering-and-leaving-australia/tourist-refund-scheme/making-the-claim" } },
      ],
      faq: [
        {
          q: "Posso sommare scontrini di negozi diversi per arrivare a 300 dollari australiani?",
          a: `No. Gli ${F.trsMinSpend} devono essere spesi presso un unico esercente (lo stesso ABN), anche se possono essere distribuiti su più fatture di quell'esercente.`,
        },
        {
          q: "Posso avere il rimborso in contanti?",
          a: "No. I rimborsi vengono pagati su una carta di credito o su un conto bancario australiano.",
        },
        {
          q: "Fino a quando posso presentare la richiesta?",
          a: `Almeno ${F.trsCutoffMinutes} minuti prima dell'orario di partenza previsto. L'ABF consiglia di arrivare allo sportello TRS ${F.trsArriveMinutes} minuti prima della partenza.`,
        },
      ],
    },
    {
      slug: "assistenza-sanitaria-australia",
      enSlug: "healthcare-for-visitors",
      title: "Assistenza sanitaria in Australia per gli italiani: l'accordo Medicare",
      description: `L'Italia è tra gli ${F.rhcaCountries} Paesi con un accordo sanitario con l'Australia: cure pubbliche fino a 6 mesi, con iscrizione a Medicare.`,
      related: ["portare-medicinali", "numeri-di-emergenza", "arrivo-in-australia"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "Medicare, il sistema sanitario pubblico australiano, è riservato ai residenti. I visitatori pagano le proprie cure — a meno che il loro Paese non abbia un Reciprocal Health Care Agreement (RHCA, accordo di reciprocità sanitaria) con l'Australia. L'Italia ce l'ha.",
        },
        { h2: "L'accordo tra Italia e Australia" },
        {
          ul: [
            "La copertura inizia all'arrivo in Australia",
            "Termina dopo 6 mesi oppure alla scadenza del visto, se questa arriva prima",
            "Il giorno dell'ingresso in Australia deve avere diritto all'assistenza del Servizio Sanitario Nazionale (SSN)",
          ],
        },
        {
          note: "L'accordo non sostituisce un'assicurazione. Il Department of Home Affairs lo dice chiaramente nella pagina dell'eVisitor: in Australia Lei risponde personalmente di tutte le spese sanitarie, e raccomanda un'assicurazione sanitaria.",
        },
        { h2: "Che cosa copre l'accordo" },
        {
          ul: [
            "Le cure necessarie dal punto di vista medico fuori dall'ospedale (per esempio una visita dal medico di base, il GP)",
            "Le cure necessarie come paziente pubblico in un ospedale pubblico, in ricovero e in ambulatorio",
            "Alcuni medicinali con prescrizione del PBS (Pharmaceutical Benefits Scheme) alla tariffa ordinaria",
          ],
        },
        { h2: "Che cosa non copre" },
        {
          ul: [
            "Le cure come paziente privato, in un ospedale pubblico o privato",
            "Il viaggio in Australia allo scopo di farsi curare",
            "Tutto ciò che non è necessario dal punto di vista medico",
          ],
        },
        { h2: "L'iscrizione a Medicare" },
        {
          p: "Per usare l'accordo, ad esempio per le visite dal GP, si iscrive a Medicare — tramite myGov oppure con il modulo di iscrizione — e riceve una tessera Medicare gialla. Servono il passaporto italiano, il visto e la prova della copertura in Italia: la tessera europea di assicurazione malattia (TEAM/EHIC) con la sigla IT oppure la tessera sanitaria italiana. Se resta in Australia solo per poco e non ha bisogno di cure, non è necessario iscriversi. Le cure ricevute prima dell'iscrizione possono comunque essere coperte una volta iscritto.",
        },
        { h2: `Gli altri Paesi dell'accordo (${F.rhcaCountries} in tutto)` },
        {
          p: "Belgio, Finlandia, Irlanda, Italia, Malta, Paesi Bassi, Nuova Zelanda, Norvegia, Slovenia, Svezia e Regno Unito. La durata della copertura cambia da Paese a Paese: per Malta vale lo stesso limite di 6 mesi dell'Italia, per Regno Unito e Irlanda fino alla scadenza del visto. Chi arriva dall'Irlanda (e dalla Nuova Zelanda) è coperto solo per le cure ospedaliere pubbliche e i medicinali PBS, non per le visite dal GP.",
        },
        {
          note: "Germania, Francia, Spagna, Austria, Svizzera, Corea del Sud, Cina e Taiwan non hanno alcun accordo. I visitatori provenienti da questi Paesi pagano per intero ospedale, ambulanza e medico, a meno che non sia assicurato.",
        },
        { source: { label: "Services Australia — Reciprocal Health Care Agreements (accordi di reciprocità sanitaria)", url: "https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements" } },
        { source: { label: "Services Australia — Visiting Australia (visitare l'Australia)", url: "https://www.servicesaustralia.gov.au/visiting-australia" } },
        { source: { label: "Department of Home Affairs — eVisitor (subclass 651): assicurazione sanitaria", url: F.officialUrl } },
      ],
      faq: [
        {
          q: "Sono italiano: per quanto tempo sono coperto?",
          a: "Fino a 6 mesi dal giorno dell'arrivo, oppure fino alla scadenza del visto se arriva prima. Il giorno dell'ingresso deve avere diritto all'assistenza del SSN, e per le visite dal GP deve iscriversi a Medicare.",
        },
        {
          q: "Che documenti servono per iscriversi a Medicare?",
          a: "Il passaporto italiano, il visto e la tessera europea di assicurazione malattia (TEAM/EHIC) con la sigla IT oppure la tessera sanitaria italiana. L'iscrizione si fa tramite myGov o con il modulo di iscrizione.",
        },
        {
          q: "Con l'accordo serve ancora un'assicurazione di viaggio?",
          a: "Il Department of Home Affairs la raccomanda e precisa che in Australia si risponde personalmente di tutte le spese sanitarie. L'accordo non copre, per esempio, le cure come paziente privato. Verifichi le condizioni del Suo visto in VEVO o nella lettera di concessione.",
        },
      ],
    },
    {
      slug: "portare-medicinali",
      enSlug: "bringing-medicines",
      title: `Portare medicinali in Australia: la regola dei ${F.medicineSupplyMonths} mesi`,
      description: `Fino a ${F.medicineSupplyMonths} mesi di terapia per uso personale, in confezione originale, con ricetta o lettera del medico — e dichiarati. Alcuni farmaci sono vietati.`,
      related: ["assistenza-sanitaria-australia", "smartgate-australia", "liquidi-bagaglio-a-mano"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "L'Australia consente ai viaggiatori di portare medicinali per uso personale senza autorizzazione grazie alla cosiddetta «traveller's exemption» (esenzione per i viaggiatori) — a patto di rispettarne le condizioni. L'esenzione vale anche per un familiare stretto che viaggia con Lei.",
        },
        { h2: "Le condizioni" },
        {
          ul: [
            `Non porti più di ${F.medicineSupplyMonths} mesi di terapia`,
            "Se possibile, tenga i medicinali nella confezione originale con l'etichetta della farmacia",
            "Porti con sé la ricetta o una lettera del medico con il nome del medicinale e il dosaggio",
            "Dichiari tutti i medicinali all'Australian Border Force all'arrivo",
            "Non dia né venda i Suoi medicinali ad altri, e riporti con sé quelli avanzati alla partenza",
          ],
        },
        { h2: "Antidolorifici forti, farmaci per l'ADHD e sonniferi" },
        {
          p: "L'Office of Drug Control precisa che medicinali con prescrizione come morfina, ossicodone, metadone, metilfenidato, Adderall e benzodiazepine rientrano nella traveller's exemption — con ricetta o lettera del medico. Anche qualsiasi medicinale contenente codeina, di qualunque dosaggio, richiede ricetta o lettera del medico.",
        },
        { h2: "Medicinali che non si possono portare" },
        {
          ul: [
            "Abortivi come il mifepristone (RU486)",
            "Yohimbe (yohimbina)",
            "Aminofenazone, aminopirina, dipirone (metamizolo)",
            "Amigdalina (laetrile)",
          ],
        },
        { h2: "Se finisce i medicinali" },
        {
          p: "Si rivolga a un medico australiano (un GP) per una ricetta australiana. Farsi spedire i medicinali da casa è soggetto a limiti: per i medicinali soggetti a prescrizione serve una ricetta australiana valida, il pacco non può superare 3 mesi di terapia, e i medicinali controllati e le sigarette elettroniche non possono essere spediti affatto.",
        },
        { source: { label: "Therapeutic Goods Administration (TGA) — Entrare in Australia con medicinali", url: "https://www.tga.gov.au/resources/consumer-information-and-resources/travelling-medicines-and-medical-devices/entering-australia" } },
        { source: { label: "Office of Drug Control — Viaggiare in Australia con medicinali", url: "https://www.odc.gov.au/travellers/travelling-or-australia-medicines-and-medical-devices" } },
        { source: { label: "TGA — Personal Importation Scheme (importazione per uso personale)", url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/access-pathways/personal-importation-scheme" } },
      ],
      faq: [
        {
          q: "Quanti medicinali posso portare in Australia?",
          a: `Fino a ${F.medicineSupplyMonths} mesi di terapia per uso personale, o per un familiare stretto che viaggia con Lei.`,
        },
        {
          q: "Posso portare i miei farmaci per l'ADHD?",
          a: "Medicinali come il metilfenidato e l'Adderall rientrano nella traveller's exemption, purché porti con sé la ricetta o una lettera del medico e li dichiari.",
        },
        {
          q: "La mia famiglia può spedirmi i medicinali in Australia?",
          a: "Solo a condizioni rigide. Per i medicinali soggetti a prescrizione serve una ricetta australiana valida, e i medicinali controllati non possono essere spediti.",
        },
      ],
    },
    {
      slug: "fumo-svapo-alcol",
      enSlug: "smoking-vaping-and-alcohol",
      title: "Fumo, svapo e alcol in Australia: le regole che i visitatori ignorano",
      description: `Sigarette elettroniche solo in farmacia; se ne possono portare ${F.vapeDevices} per la propria terapia. Alcol dai ${F.legalAge} anni, niente fumo nei luoghi pubblici chiusi.`,
      related: ["guidare-in-australia", "portare-medicinali", "arrivo-in-australia"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "L'Australia regola le sigarette elettroniche (vape) come prodotti terapeutici, non come beni di consumo. Molti visitatori ne restano sorpresi — soprattutto chi è abituato a comprarle in tabaccheria o in un negozio qualsiasi.",
        },
        { h2: "Sigarette elettroniche" },
        {
          ul: [
            "Le sigarette elettroniche sono vendute solo dalle farmacie aderenti. Tabaccherie, negozi di svapo e minimarket non possono vendere alcuna sigaretta elettronica, con o senza nicotina",
            `Gli adulti dai ${F.legalAge} anni in su possono acquistare in farmacia, senza ricetta, sigarette elettroniche con nicotina fino a 20 mg/mL, dove la legge dello Stato lo consente — con un documento d'identità, un limite di un mese di fornitura e solo gusti menta, mentolo o tabacco`,
            "Non può ordinare sigarette elettroniche da siti esteri per uso personale, nemmeno con una ricetta",
            "Alcuni Stati vietano il possesso di sigarette elettroniche alla nicotina senza ricetta",
          ],
        },
        { h2: "Portare con sé sigarette elettroniche" },
        {
          p: `Chi arriva in aereo o in nave può portare fino a ${F.vapeDevices} sigarette elettroniche, ${F.vapeAccessories} accessori (cartucce, capsule o pod) e ${F.vapeLiquid} di liquido. Secondo la formulazione della TGA, devono servire alla terapia del viaggiatore o di una persona di cui si occupa sullo stesso volo o nave. Gli agenti della Border Force possono sequestrare i beni che ritengono importati illegalmente.`,
        },
        { h2: "Fumo" },
        {
          p: `È vietato vendere tabacco ai minori di ${F.legalAge} anni. In tutti gli Stati e i territori è vietato fumare nei luoghi pubblici chiusi — tra cui mezzi pubblici, uffici, centri commerciali, cinema e aeroporti. Le regole per gli spazi all'aperto, come dehors dei ristoranti, spiagge e parchi giochi, cambiano da Stato a Stato. Anche il tabacco in franchigia doganale è soggetto a limiti.`,
        },
        { h2: "Alcol" },
        {
          ul: [
            `Per acquistare alcolici o bere in un locale autorizzato bisogna avere almeno ${F.legalAge} anni`,
            "Dove si può bere all'aperto lo decidono gli Stati e i comuni — molti luoghi pubblici sono zone senza alcol",
            `Il limite per la guida è un tasso alcolemico di ${F.bacLimit} — e zero per i neopatentati e chi guida con il foglio rosa (learner e provisional)`,
          ],
        },
        { source: { label: "TGA — Sigarette elettroniche: informazioni per i singoli", url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/therapeutic-vaping-goods/vaping-hub/vapes-information-individuals-and-patients" } },
        { source: { label: "Department of Health — Leggi su fumo e tabacco in Australia", url: "https://www.health.gov.au/topics/smoking-vaping-and-tobacco/about-smoking/laws-in-australia" } },
        { source: { label: "Department of Health — Leggi sull'alcol in Australia", url: "https://www.health.gov.au/topics/alcohol/about-alcohol/alcohol-laws-in-australia" } },
      ],
      faq: [
        {
          q: "Posso comprare una sigaretta elettronica in tabaccheria o al supermercato?",
          a: "No. Le sigarette elettroniche possono essere vendute solo dalle farmacie aderenti. Per gli altri negozi è illegale vendere qualsiasi sigaretta elettronica.",
        },
        {
          q: "Quante sigarette elettroniche posso portare in Australia?",
          a: `Fino a ${F.vapeDevices} sigarette elettroniche, ${F.vapeAccessories} accessori e ${F.vapeLiquid} di liquido, per la Sua terapia o per quella di una persona di cui si occupa e che viaggia con Lei.`,
        },
        {
          q: "A che età si può bere alcol in Australia?",
          a: `A ${F.legalAge} anni. Per acquistare alcolici o bere in un locale autorizzato bisogna avere almeno ${F.legalAge} anni.`,
        },
      ],
    },
    {
      slug: "numeri-di-emergenza",
      enSlug: "emergency-and-safety",
      title: `Numeri di emergenza in Australia: ${F.emergency}, ${F.emergencyMobile} — e perché il 911 non funziona`,
      description: `Chiami il ${F.emergency} per polizia, vigili del fuoco o ambulanza; il ${F.emergencyMobile} funziona dai cellulari. Il 911 non viene inoltrato. Polizia non urgente: ${F.policeAssistance}.`,
      related: ["assistenza-sanitaria-australia", "telefono-e-sim", "guidare-in-australia"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: `Triple Zero (${F.emergency}) è il numero di emergenza australiano per polizia, vigili del fuoco e ambulanza, nelle situazioni in cui è in pericolo la vita o il tempo è decisivo. Le chiamate sono gratuite, da telefono fisso, cellulare, telefono pubblico o satellitare.`,
        },
        { h2: "I numeri" },
        {
          ul: [
            `${F.emergency} — polizia, vigili del fuoco, ambulanza`,
            `${F.emergencyMobile} — funziona solo dai cellulari e collega allo stesso servizio ${F.emergency}. Non ha alcuna priorità rispetto al ${F.emergency}`,
            `${F.policeAssistance} — Police Assistance Line, per questioni di polizia non urgenti`,
            `${F.ses} — State Emergency Service (protezione civile), per aiuto non urgente in caso di alluvioni, tempeste e tsunami`,
            "Non componga il 911 — le chiamate al 911 non vengono inoltrate al 000",
          ],
        },
        { h2: "Se non parla inglese" },
        {
          p: `Chiami il ${F.emergency}, dica «police», «fire» o «ambulance» e resti in linea. Verrà organizzato un interprete.`,
        },
        { h2: "Cellulari e copertura" },
        {
          ul: [
            `Se la Sua rete non ha segnale, il telefono usa automaticamente un'altra rete disponibile per raggiungere il ${F.emergency} — anche senza SIM`,
            `Se non c'è copertura su nessuna rete, non può raggiungere il ${F.emergency} dal cellulare. Ampie zone dell'outback australiano ne sono prive`,
            `Il ${F.emergency} non può essere contattato via SMS`,
            "Se la chiamata non si collega entro circa 5 secondi, riattacchi e riprovi",
          ],
        },
        {
          note: `Le reti 3G australiane sono state spente. I telefoni 3G e alcuni vecchi telefoni 4G — soprattutto quelli acquistati all'estero — potrebbero non riuscire a chiamare il ${F.emergency}. L'autorità di regolamentazione sconsiglia di verificarlo chiamando il ${F.emergency}; chieda piuttosto all'operatore telefonico.`,
        },
        { source: { label: "Department of Infrastructure — Triple Zero (000)", url: "https://www.infrastructure.gov.au/media-communications/phone/triple-zero" } },
        { source: { label: "ACMA — Spegnimento della rete 3G", url: "https://www.acma.gov.au/3g-network-switch" } },
      ],
      faq: [
        {
          q: "Il 911 funziona in Australia?",
          a: `No. Le chiamate al 911 non vengono inoltrate. Componga il ${F.emergency}, oppure il ${F.emergencyMobile} da cellulare.`,
        },
        {
          q: "Posso chiamare il 000 senza una SIM australiana?",
          a: `Sì, purché ci sia copertura su almeno una rete mobile. Per il ${F.emergency} il telefono si collega a qualsiasi rete disponibile, anche senza una SIM attiva.`,
        },
        {
          q: "Posso mandare un SMS al 000?",
          a: `No. Il ${F.emergency} non può essere contattato via SMS.`,
        },
      ],
    },
    {
      slug: "telefono-e-sim",
      enSlug: "phones-and-sim-cards",
      title: "Telefono e SIM in Australia: verifica dell'identità e fine del 3G",
      description:
        "Per attivare una SIM prepagata australiana serve una verifica d'identità: il passaporto italiano va bene. Verifichi che il telefono vada sul 4G/5G.",
      related: ["numeri-di-emergenza", "prese-e-tensione", "soldi-e-mance"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "Può usare il roaming del Suo piano italiano oppure comprare una SIM prepagata australiana. Se compra una SIM locale, due cose sono diverse rispetto a molti altri Paesi: la verifica dell'identità e la fine del 3G.",
        },
        { h2: "La verifica dell'identità" },
        {
          p: "Per legge gli operatori devono raccogliere nome, data di nascita e indirizzo e verificare l'identità quando si attiva un servizio mobile prepagato. Un passaporto intestato a Lei è uno dei documenti accettati — non deve essere australiano. Il documento non deve essere scaduto.",
        },
        {
          p: "Gli operatori possono verificare l'identità anche in altri modi, per esempio con un controllo su un documento governativo, un account già esistente, una transazione con carta o un servizio di Digital ID accreditato. Come lo faccia un determinato operatore — in negozio o online — dipende dall'operatore.",
        },
        { h2: "Prima controlli il telefono" },
        {
          p: "Le reti 3G australiane sono state spente. I telefoni solo 3G non funzionano più del tutto, e alcuni telefoni 4G che si appoggiano al 3G per le chiamate non possono fare chiamate vocali né raggiungere i servizi di emergenza. I più a rischio sono i vecchi telefoni 4G e quelli acquistati all'estero. Gli operatori non devono collegare un telefono che risulta non in grado di chiamare il Triple Zero (000).",
        },
        {
          ul: [
            "Prima di pagare, chieda all'operatore di confermare che il Suo modello funziona sulla sua rete 4G/5G e supporta le chiamate VoLTE",
            "Non provi le chiamate di emergenza componendo il 000",
          ],
        },
        {
          note: "Nel 2026 le regole sulla verifica d'identità per le prepagate sono in revisione da parte dell'autorità di regolamentazione (ACMA). I principi di base — una verifica d'identità, con il passaporto accettato — valgono da anni.",
        },
        { source: { label: "ACMA — Verifica d'identità per i cellulari prepagati", url: "https://www.acma.gov.au/id-checks-prepaid-mobiles" } },
        { source: { label: "Federal Register of Legislation — Identity Checks for Prepaid Mobile Carriage Services Determination 2017", url: "https://www.legislation.gov.au/F2017L00399/latest/text" } },
        { source: { label: "ACMA — Garantire che i cellulari raggiungano il 000 dopo lo spegnimento del 3G", url: "https://www.acma.gov.au/ensuring-mobiles-can-reach-000-after-3g-shutdown" } },
      ],
      faq: [
        {
          q: "Posso comprare una SIM australiana con il passaporto italiano?",
          a: "Sì. Un passaporto intestato a Lei è un documento d'identità accettato per attivare un servizio prepagato. Non deve essere scaduto.",
        },
        {
          q: "Il telefono che uso in Italia funzionerà in Australia?",
          a: "La maggior parte dei telefoni recenti sì, ma le reti 3G sono state chiuse. I vecchi telefoni 4G e alcuni telefoni acquistati all'estero potrebbero non riuscire a chiamare o a raggiungere il 000 — chieda all'operatore di verificare il Suo modello.",
        },
      ],
    },
    {
      slug: "prese-e-tensione",
      enSlug: "power-plugs",
      title: `Prese elettriche in Australia: spina di tipo I e ${F.voltage} ${F.frequency}`,
      description: `In Australia si usa una spina a due lamelle piatte a V rovesciata (tipo I) e ${F.voltage}, ${F.frequency}. Controlli l'etichetta del caricatore prima di collegarlo.`,
      related: ["telefono-e-sim", "soldi-e-mance", "arrivo-in-australia"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "Le prese australiane accettano una spina con due lamelle metalliche piatte disposte a V rovesciata, a volte con una terza lamella al centro. Tourism Australia la chiama spina «Type 1»; a livello internazionale è indicata di solito come tipo I. Le spine italiane ed europee a spinotti tondi non entrano senza un adattatore.",
        },
        { h2: "Tensione" },
        {
          p: `La rete elettrica è a ${F.voltage}, ${F.frequency} (Tourism Australia indica anche l'intervallo 220–240 V). La maggior parte dei caricatori di telefoni e portatili è indicata per 100–240 V e funziona con il solo adattatore. Controlli l'etichetta: se non copre i 230 V, serve un trasformatore di tensione, non solo un adattatore.`,
        },
        { h2: "Che cosa mettere in valigia" },
        {
          ul: [
            "Un adattatore per spina di tipo I, oppure un adattatore universale",
            "Un trasformatore solo per i dispositivi non indicati per 230 V",
          ],
        },
        { source: { label: "Tourism Australia — Consigli utili per viaggiare in Australia", url: "https://www.australia.com/en-us/facts-and-planning/about-australia/useful-tips.html" } },
        { source: { label: "Tourism Australia — La lista definitiva per la valigia", url: "https://www.australia.com/en/facts-and-planning/planning-tools/ultimate-australia-packing-list.html" } },
      ],
      faq: [
        {
          q: "Serve un adattatore per l'Australia?",
          a: "Sì, se le Sue spine non sono del tipo australiano con due lamelle piatte a V rovesciata. Le spine italiane ed europee a spinotti tondi hanno bisogno di un adattatore.",
        },
        {
          q: "Serve un trasformatore di tensione?",
          a: `Solo per i dispositivi non indicati per ${F.voltage}. I caricatori con l'indicazione 100–240 V funzionano con il solo adattatore.`,
        },
      ],
    },
    {
      slug: "festivita-australia",
      enSlug: "public-holidays",
      title: "Festività in Australia 2026–2027: le date Stato per Stato",
      description:
        "Ogni Stato e territorio stabilisce le proprie festività. Le date valide ovunque, quelle che cambiano e che cosa significano per il Suo viaggio.",
      related: ["soldi-e-mance", "guidare-in-australia", "arrivo-in-australia"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "Non esiste un unico elenco nazionale. Ogni Stato e territorio stabilisce le proprie festività e decide se aggiungere un giorno sostitutivo quando una festa cade nel fine settimana. Le date qui sotto provengono dal Fair Work Ombudsman, l'autorità federale per il lavoro.",
        },
        { h2: "Le festività che restano nel 2026" },
        {
          ul: [
            "Ven 25 dicembre — Natale (ovunque)",
            "Sab 26 dicembre — Boxing Day, Santo Stefano (South Australia: festività del Proclamation Day)",
            "Lun 28 dicembre — festività aggiuntiva per il Boxing Day nella maggior parte degli Stati e territori; in Tasmania il Boxing Day stesso cade in questo lunedì",
          ],
        },
        { h2: "2027: le date valide ovunque" },
        {
          ul: [
            "Ven 1 gennaio — Capodanno",
            "Mar 26 gennaio — Australia Day",
            "Ven 26 marzo — Venerdì Santo",
            "Lun 29 marzo — Lunedì dell'Angelo",
            "Sab 25 dicembre — Natale, con lun 27 dicembre come festività aggiuntiva",
          ],
        },
        { h2: "2027: dove gli Stati differiscono" },
        {
          ul: [
            "Il Sabato Santo (27 marzo) e la Domenica di Pasqua (28 marzo) non sono indicati per la Tasmania; il Western Australia non indica il Sabato Santo",
            "L'Anzac Day cade domenica 25 aprile. NSW e WA aggiungono lunedì 26 aprile; ACT, NT e Queensland lo celebrano lunedì 26 aprile; SA, Tasmania e Victoria mantengono solo la domenica",
            "Il King's Birthday (compleanno del Re) è lunedì 14 giugno nella maggior parte degli Stati — ma lunedì 27 settembre in Western Australia e lunedì 4 ottobre in Queensland",
            "Il Labour Day va da marzo (WA, Victoria, Tasmania) a maggio (Queensland, NT) e ottobre (NSW, ACT, SA)",
            "Il Boxing Day è domenica 26 dicembre, con martedì 28 dicembre come giorno aggiuntivo nella maggior parte dei luoghi; in Tasmania il Boxing Day è martedì 28 dicembre",
          ],
        },
        {
          note: "Le date del 2027 sono quelle pubblicate in anticipo dal Fair Work Ombudsman. Il venerdì prima della AFL Grand Final in Victoria non è ancora fissato. Alcune festività regionali o solo cittadine (per esempio i show day) non sono riportate qui.",
        },
        { h2: "Che cosa significa per un visitatore" },
        {
          p: "Banche e uffici pubblici chiudono. In città molti negozi, bar e ristoranti restano aperti, a volte con un sovrapprezzo festivo sul conto. I trasporti pubblici di solito seguono un orario ridotto. I ponti e le vacanze estive tra Natale e gennaio sono i periodi di punta per il turismo interno, quindi prenoti per tempo alloggio e auto a noleggio.",
        },
        { source: { label: "Fair Work Ombudsman — Festività 2026", url: "https://www.fairwork.gov.au/employment-conditions/public-holidays/2026-public-holidays" } },
        { source: { label: "Fair Work Ombudsman — Festività 2027", url: "https://www.fairwork.gov.au/employment-conditions/public-holidays/2027-public-holidays" } },
      ],
      faq: [
        {
          q: "Il King's Birthday cade lo stesso giorno in tutta l'Australia?",
          a: "No. La maggior parte degli Stati lo celebra il secondo lunedì di giugno, ma il Western Australia a fine settembre e il Queensland a inizio ottobre.",
        },
        {
          q: "Il Boxing Day è festivo ovunque?",
          a: "Sì, anche se il South Australia lo chiama festività del Proclamation Day, e quando cade nel fine settimana il giorno sostitutivo cambia da Stato a Stato.",
        },
      ],
    },
    {
      slug: "guidare-in-australia",
      enSlug: "driving-in-australia",
      title: "Guidare in Australia con la patente italiana: le regole cambiano da Stato a Stato",
      description: `Ogni Stato ha le sue regole: in NSW si guida con patente estera fino a ${F.driveNswMonths} mesi, nel NT ${F.driveNtMonths}. Le patenti non in inglese richiedono traduzione o IDP.`,
      related: ["festivita-australia", "numeri-di-emergenza", "fumo-svapo-alcol"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "In Australia si guida a sinistra. Le rotatorie si percorrono in senso orario e si dà la precedenza a destra. I limiti di velocità sono in chilometri orari: 50 km/h nei centri abitati salvo diversa segnalazione, di solito 100 km/h sulle altre strade e fino a 110 km/h su alcune autostrade.",
        },
        { h2: "Le patenti sono materia degli Stati" },
        {
          p: "Non esiste un'unica regola nazionale per i visitatori. Ogni Stato e territorio decide per quanto tempo un visitatore può guidare con una patente estera e che cosa deve accompagnarla. Controlli le regole di ogni Stato in cui guiderà — un viaggio on the road può attraversarne diversi.",
        },
        {
          ul: [
            `New South Wales: turisti e visitatori temporanei possono guidare con una patente estera valida fino a ${F.driveNswMonths} mesi`,
            `Victoria: consentito se vivrà e guiderà in Victoria per meno di ${F.driveNswMonths} mesi, contati dal Suo primo arrivo`,
            `Northern Territory: fino a ${F.driveNtMonths} mesi per visitatori e nuovi residenti`,
            "Queensland, Western Australia, South Australia, Tasmania e ACT: i visitatori possono guidare con una patente estera valida; le pagine ufficiali non indicano un limite di tempo fisso per i visitatori",
          ],
        },
        {
          note: "I limiti di tre mesi di cui si legge per Queensland, NSW, WA e ACT riguardano i cittadini australiani e i titolari di visti permanenti o di residenza, non i turisti.",
        },
        { h2: "Se la patente non è in inglese" },
        {
          p: "La patente italiana non è in inglese: porti con sé una traduzione in inglese della patente oppure un permesso di guida internazionale (IDP) insieme alla patente stessa. I dettagli cambiano: il Northern Territory indica di procurarsi un IDP prima di partire, oppure una traduzione ufficiale da un traduttore autorizzato del NT; il Queensland indica di avere con sé una traduzione in inglese riconosciuta. L'IDP non sostituisce mai la patente italiana — porti entrambi.",
        },
        { h2: "Prima di partire" },
        {
          ul: [
            "Porti sempre con sé la patente quando guida",
            "La patente deve essere valida e per il tipo di veicolo che guida",
            `Il limite per la guida è un tasso alcolemico di ${F.bacLimit}`,
            "Le distanze tra i centri abitati sono lunghe — pianifichi rifornimenti e pause",
          ],
        },
        { source: { label: "Transport for NSW — Visitare il NSW dall'estero", url: "https://www.nsw.gov.au/driving-boating-and-transport/driving-nsw/driver-and-rider-licences/visiting-or-moving-to-nsw/visiting-from-overseas-or-interstate" } },
        { source: { label: "VicRoads — Guidare con la patente estera", url: "https://www.vicroads.vic.gov.au/licences/convert-your-licence/driving-with-your-overseas-licence" } },
        { source: { label: "Queensland Government — Guidare in Queensland con una patente estera", url: "https://www.qld.gov.au/transport/licensing/driver-licensing/overseas/driving" } },
        { source: { label: "NT Government — Regole sulla patente per chi guida in visita", url: "https://nt.gov.au/driving/licence/new-nt-residents-and-visitors/driver-licence-rules-for-new-nt-residents-and-visiting-drivers" } },
        { source: { label: "Tourism Australia — Guidare in Australia", url: "https://www.australia.com/en/facts-and-planning/getting-around/driving-in-australia.html" } },
      ],
      faq: [
        {
          q: "Con la patente italiana serve il permesso di guida internazionale?",
          a: "Se la patente non è in inglese, come quella italiana, porti con sé una traduzione in inglese o un IDP insieme alla patente. La regola precisa dipende dallo Stato.",
        },
        {
          q: "Per quanto tempo posso guidare con la patente estera?",
          a: `Dipende dallo Stato: fino a ${F.driveNswMonths} mesi in NSW, meno di ${F.driveNswMonths} mesi di permanenza in Victoria, fino a ${F.driveNtMonths} mesi nel NT. Gli altri Stati non indicano un limite fisso per i visitatori.`,
        },
      ],
    },
  ],
};
