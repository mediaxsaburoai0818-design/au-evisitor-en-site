import { FACTS as F, type LangContent } from "./_schema";

/**
 * イタリア語（/it/）。読者＝イタリアのパスポート保持者。
 *
 * ⚠️ 数値は F（data/facts.ts）から入れる。文中に直接書かない。
 * ⚠️ イタリアはEU加盟国＝eVisitorの対象36か国に含まれる。
 *    「あなたは対象・無料」が前提（独語版・蘭語版・仏語版と同じ型）。
 *    対象外の言語版（ko/zh/zh-tw）とは主張が逆なので文面を流用しない。
 * ⚠️ 二人称は Lei（敬称）。行政手続きの説明なので口語に崩さない。
 */
export const it: LangContent = {
  code: "it",
  htmlLang: "it",
  label: "Italiano",
  audience: "Italia",
  meta: {
    title: `eVisitor (subclass 651) per gli italiani: gratuito per l'Australia`,
    description: `I cittadini italiani hanno bisogno del visto eVisitor (subclass 651) per l'Australia. È gratuito, valido ${F.validMonths} mesi e consente soggiorni fino a ${F.stayMonths} mesi per ingresso. Ecco come richiederlo sul sito ufficiale.`,
  },
  header: {
    site: "Guida eVisitor",
    tagline: "Australia · visto eVisitor (subclass 651)",
    official: "Sito ufficiale",
  },
  hero: {
    eyebrow: "Australia · eVisitor · subclass 651",
    h1Before: "Per gli italiani il visto eVisitor è ",
    h1Highlight: "gratuito",
    h1After: "",
    lead: `L'Italia rientra tra i ${F.eligibleCountries} Paesi per i quali l'Australia prevede il visto eVisitor. L'amministrazione non applica alcun costo: ${F.fee}. È valido ${F.validMonths} mesi e consente soggiorni fino a ${F.stayMonths} mesi per ingresso.`,
    ctaPrimary: "Richiedilo sul sito ufficiale",
    ctaSecondary: "Quanto costa davvero?",
    disclaimer: "Guida indipendente · nessun legame con il governo australiano · aggiornata il",
    imageAlt: "Costa australiana assolata, acqua turchese e sabbia dorata",
  },
  stats: [
    { v: F.fee, l: "Costo", s: "Nessuna tassa di domanda" },
    { v: `${F.validMonths} mesi`, l: "Validità", s: "Ingressi illimitati" },
    { v: `${F.stayMonths} mesi`, l: "Soggiorno per ingresso", s: "Turismo o visita d'affari" },
    { v: F.eligibleCountries.toString(), l: "Paesi ammessi", s: "L'Italia è tra questi" },
  ],
  whatIs: {
    h2: "Che cos'è il visto eVisitor?",
    p1: "L'eVisitor (subclass 651) è un vero visto per visitatori rilasciato elettronicamente. Viene collegato al passaporto: niente adesivo, niente timbro. Copre il turismo e le attività di visita d'affari.",
    p2: `È valido ${F.validMonths} mesi dal rilascio, consente un numero illimitato di ingressi e ogni soggiorno può durare fino a ${F.stayMonths} mesi. Al momento della domanda e a quello del rilascio bisogna trovarsi fuori dall'Australia.`,
  },
  features: [
    {
      h: "Un visto, non un'autorizzazione di viaggio",
      p: "A differenza per esempio della NZeTA neozelandese, l'eVisitor è un visto a tutti gli effetti. Viene rilasciato elettronicamente e verificato in automatico al check-in.",
    },
    {
      h: "L'Italia è tra i Paesi ammessi",
      p: `Tutti gli Stati membri dell'UE, oltre a Regno Unito, Islanda, Norvegia e Svizzera, rientrano tra i ${F.eligibleCountries} Paesi ammessi. Chi non ha uno di questi passaporti usa invece l'ETA.`,
    },
    {
      h: "Gratuito — ma solo sul sito ufficiale",
      p: `L'amministrazione non applica costi. Un prezzo visto online per un eVisitor riguarda la compilazione del modulo, non il visto. Per confronto: l'ETA destinata agli altri passaporti costa ${F.etaFee}.`,
    },
  ],
  eligibility: {
    h2: "Quale visto per quale passaporto?",
    lead: "«Gratuito» vale solo per l'eVisitor, e l'eVisitor vale solo per i passaporti europei. È esattamente qui che nascono i malintesi.",
    th: ["Il suo passaporto", "Visto", "Costo", "Dove richiederlo"],
    rows: [
      [
        `UE, Regno Unito, Islanda, Norvegia, Svizzera e altri Paesi europei (${F.eligibleCountries} in tutto) — Italia inclusa`,
        "eVisitor (subclass 651)",
        F.fee,
        "Sito del Department of Home Affairs (ImmiAccount)",
      ],
      [
        "Giappone, Stati Uniti, Canada, Singapore, Malesia, Corea del Sud e altri",
        "ETA (subclass 601)",
        F.etaFee,
        "Solo tramite l'app ufficiale",
      ],
      ["Non ammesso a nessuno dei due", "Visto per visitatori (subclass 600)", "a pagamento", "Sito del Department of Home Affairs"],
    ],
    note: `L'ETA non si richiede dal sito ma solo tramite l'app ufficiale, che legge il chip del passaporto. Per l'eVisitor è il contrario: nessuna app, solo il sito. Verificato il 17 agosto 2026.`,
  },
  steps: {
    h2: "Come richiedere l'eVisitor",
    items: [
      {
        h: "Controlli il passaporto",
        p: "Il passaporto italiano deve essere valido al momento della domanda e coprire il viaggio previsto. Il visto viene collegato proprio a quel passaporto.",
      },
      {
        h: "Presenti la domanda dall'estero",
        p: "La domanda si presenta sul sito del Department of Home Affairs con un account ImmiAccount. Deve trovarsi fuori dall'Australia sia alla domanda sia al rilascio.",
      },
      {
        h: "Dichiari salute e precedenti penali",
        p: "Dichiara il proprio stato di salute ed eventuali precedenti penali. Le pratiche semplici vengono decise in automatico; le risposte che richiedono una valutazione sono la causa più frequente di ritardo.",
      },
      {
        h: "Attenda l'email di conferma",
        p: `Molte domande vengono decise in ${F.decisionTypical}, ma non è garantito. Richieda il visto prima di effettuare prenotazioni non rimborsabili e conservi la conferma con i documenti di viaggio.`,
      },
    ],
    cta: "Inizia sulla pagina ufficiale eVisitor",
  },
  rules: {
    h2: "Che cosa è permesso e che cosa no",
    allowedH: "Permesso",
    allowed: [
      "Vacanza, visita a familiari e amici",
      "Attività di visita d'affari: incontri, trattative, congressi",
      `Studio o formazione fino a ${F.studyMonths} mesi`,
      "Entrare e uscire quante volte si desidera durante la validità",
    ],
    deniedH: "Non permesso",
    denied: [
      "Lavorare per un datore di lavoro australiano",
      `Soggiornare oltre ${F.stayMonths} mesi in un singolo ingresso`,
      "Presentare la domanda mentre ci si trova in Australia",
      "Vendere beni o servizi al pubblico",
    ],
  },
  border: {
    h2: "All'arrivo",
    p: "Viaggi con lo stesso passaporto usato per la domanda: il visto vi è collegato elettronicamente e non c'è nulla da stampare. Nei principali aeroporti i viaggiatori ammessi possono usare gli SmartGate automatici. L'ingresso lo decide l'Australian Border Force sul posto. L'Australia applica in modo rigoroso le norme di biosicurezza su alimenti e prodotti vegetali e animali: nel dubbio, dichiari tutto.",
  },
  faq: {
    h2: "Domande frequenti",
    items: [
      {
        q: "L'eVisitor è davvero gratuito?",
        a: `Sì. Il Department of Home Affairs non applica né tassa di visto né costi di servizio per l'eVisitor (subclass 651). I siti commerciali che indicano un prezzo fanno pagare la compilazione del modulo: non è necessario.`,
      },
      {
        q: "Quanto posso restare in Australia?",
        a: `Fino a ${F.stayMonths} mesi per ingresso. Il visto in sé è valido ${F.validMonths} mesi dal rilascio e in quel periodo consente ingressi illimitati: può quindi tornare più volte, purché ogni soggiorno resti entro il limite di ${F.stayMonths} mesi.`,
      },
      {
        q: "Posso lavorare con l'eVisitor?",
        a: `No. Un rapporto di lavoro con un datore australiano non è consentito. Le attività di visita d'affari — incontri, trattative, congressi — sì, e può studiare o seguire corsi fino a ${F.studyMonths} mesi. Il lavoro retribuito è escluso.`,
      },
      {
        q: "Posso fare domanda se sono già in Australia?",
        a: "No. Deve trovarsi fuori dall'Australia sia al momento della domanda sia a quello del rilascio. Se è già nel Paese e vuole restare più a lungo, le serve un altro visto.",
      },
      {
        q: "L'eVisitor garantisce l'ingresso?",
        a: "No. Autorizza il viaggio verso l'Australia. L'ingresso lo decide l'Australian Border Force all'arrivo.",
      },
      {
        q: "I bambini hanno bisogno di un eVisitor proprio?",
        a: "Sì. Ogni viaggiatore ha bisogno del proprio visto, neonati compresi, ciascuno sul proprio passaporto ammesso.",
      },
      {
        q: "E se viaggio con un secondo passaporto?",
        a: "Il visto è legato al passaporto usato per la domanda. Se viaggia con un altro passaporto deve ripresentarla. Porti quindi sempre quello indicato nella domanda.",
      },
    ],
  },
  cta: {
    h2: "Richieda il suo eVisitor",
    p: "La domanda è gratuita e si presenta sul sito del Department of Home Affairs. Siamo una guida indipendente e non possiamo presentare domande per conto suo.",
    button: "Vai alla pagina ufficiale eVisitor",
  },
  footer: {
    disclaimer:
      "Questa è una guida indipendente. Non ha alcun legame con il governo australiano o il Department of Home Affairs e non presentiamo domande. L'eVisitor è gratuito: lo richieda sempre sul sito ufficiale.",
  },
  ui: {
    updated: "Aggiornato",
    backToTop: "Torna su",
    languages: "Lingua",
    articles: "Altri argomenti",
    readMore: "Continua a leggere",
    updatedLabel: "17 agosto 2026",
  },
  pages: [
    {
      slug: "che-cos-e-evisitor",
      title: "Che cos'è l'eVisitor (subclass 651)?",
      description:
        "L'eVisitor è un vero visto, non un'autorizzazione di viaggio. Che cosa copre, chi può richiederlo e che cosa non consente.",
      blocks: [
        {
          p: `L'eVisitor (subclass 651) è un visto per visitatori collegato elettronicamente al passaporto. È rivolto a chi possiede un passaporto di uno dei ${F.eligibleCountries} Paesi ammessi, quasi tutti europei.`,
        },
        { h2: "È un visto" },
        {
          p: "La distinzione conta. Alcuni Paesi rilasciano un'autorizzazione di viaggio che esplicitamente non è un visto; qui l'Australia rilascia un visto vero e proprio, semplicemente senza adesivo né timbro. Per questo vi sono legate condizioni reali.",
        },
        {
          ul: [
            `Valido ${F.validMonths} mesi dal rilascio.`,
            `Soggiorno fino a ${F.stayMonths} mesi per ingresso, ingressi illimitati.`,
            `Studio o formazione fino a ${F.studyMonths} mesi consentiti.`,
            "Lavorare per un datore di lavoro australiano non è consentito.",
          ],
        },
        {
          note: `Deve trovarsi fuori dall'Australia sia al momento della domanda sia a quello del rilascio. È il punto che viene dimenticato più spesso.`,
        },
      ],
    },
    {
      slug: "evisitor-costo",
      title: "Quanto costa l'eVisitor? Nulla — e perché in rete si vedono dei prezzi",
      description: `Il Department of Home Affairs applica ${F.fee} per l'eVisitor. Che cosa fanno pagare davvero i siti commerciali.`,
      blocks: [
        {
          p: `Il costo pubblico dell'eVisitor è ${F.fee}. Non c'è né tassa di visto né costo di servizio. Eppure in rete esistono moltissime pagine con un prezzo accanto.`,
        },
        { h2: "Che cosa fanno pagare quei siti" },
        {
          p: "La compilazione dello stesso modulo che può compilare gratuitamente da sé. Non istruiscono nulla, non accelerano nulla e non aumentano le probabilità di rilascio. In entrambi i casi la decisione arriva dallo stesso ufficio.",
        },
        { h2: "L'ETA invece si paga — da qui la confusione" },
        {
          p: `Per i passaporti non presenti nell'elenco eVisitor vale l'ETA (subclass 601), con un costo di servizio di ${F.etaFee}. Confondendo le due cose, pagare finisce per sembrare normale.`,
        },
        {
          note: "Regola pratica: con un passaporto italiano, qualsiasi importo pagato va a un intermediario, non all'Australia.",
        },
      ],
    },
    {
      slug: "evisitor-documenti",
      title: "Che cosa serve per la domanda di eVisitor",
      description:
        "Le informazioni realmente richieste e i punti su cui le pratiche si bloccano nella pratica.",
      blocks: [
        { h2: "Che cosa tenere a portata di mano" },
        {
          ul: [
            "Il passaporto con cui viaggerà davvero (numero e scadenza)",
            "Un account ImmiAccount sul sito del Department of Home Affairs",
            "Un indirizzo email raggiungibile anche in viaggio",
            "Le informazioni sul proprio stato di salute ed eventuali precedenti penali",
          ],
        },
        { h2: "Di norma non si caricano documenti" },
        {
          p: "Per una pratica semplice si compilano dichiarazioni; di solito non c'è nulla da scansionare. Solo se una risposta richiede una valutazione l'ufficio può chiedere documenti aggiuntivi.",
        },
        { h2: "Dove si sbaglia" },
        {
          ul: [
            "Scrivere i nomi diversamente da come appaiono sul passaporto",
            "Fare domanda con un passaporto che poi si rinnova",
            "Rispondere «no» a una domanda sui precedenti penali quando invece qualcosa c'è",
          ],
        },
        {
          note: "Se rinnova il passaporto dopo il rilascio, il visto non copre il nuovo passaporto. In quel caso ripresenti la domanda.",
        },
      ],
    },
    {
      slug: "evisitor-tempi",
      title: "Quanto tempo richiede una domanda di eVisitor?",
      description: `Molte domande vengono decise in ${F.decisionTypical}. Che cosa rallenta l'istruttoria e perché non esiste una procedura d'urgenza.`,
      blocks: [
        {
          p: `Gran parte delle domande viene decisa in automatico, spesso in ${F.decisionTypical}. È un dato d'esperienza, non un impegno.`,
        },
        { h2: "Che cosa rallenta l'istruttoria" },
        {
          ul: [
            "Precedenti penali dichiarati o un rifiuto precedente",
            "Questioni sanitarie che richiedono una valutazione",
            "Dati che non coincidono con il passaporto",
            "L'affollamento subito prima dei periodi di vacanza",
          ],
        },
        { h2: "Non esiste una corsia accelerata a pagamento" },
        {
          p: "L'ufficio non la offre. I siti che promettono rapidità accelerano al massimo la propria compilazione: l'ordine di esame non cambia.",
        },
        {
          note: "Faccia domanda appena il viaggio è deciso e prima di prenotazioni non rimborsabili. È l'unica misura efficace.",
        },
      ],
    },
    {
      slug: "evisitor-verifica-stato",
      title: "Verificare lo stato dell'eVisitor con VEVO",
      description:
        "Dove arriva la conferma, come verificare un visto esistente e dove non inserire mai il numero di passaporto.",
      blocks: [
        {
          p: "La decisione arriva via email all'indirizzo indicato nella domanda. Il visto è collegato elettronicamente al passaporto: non c'è nulla da stampare.",
        },
        { h2: "VEVO: la verifica ufficiale" },
        {
          p: "Con VEVO (Visa Entitlement Verification Online) del Department of Home Affairs si verificano stato e condizioni di un visto esistente. È la fonte affidabile, anche quando l'email non si trova.",
        },
        { h2: "Se l'email non arriva" },
        {
          ul: [
            "Controlli prima la posta indesiderata",
            "Verifichi che l'indirizzo inserito non contenga errori",
            "Acceda al suo ImmiAccount: lì compare lo stato della pratica",
          ],
        },
        {
          note: "Inserisca il numero di passaporto solo sul sito ufficiale del Department of Home Affairs. I terzi che offrono una «verifica dello stato» a pagamento non servono.",
        },
      ],
    },
    {
      slug: "evisitor-domande-frequenti",
      title: "eVisitor: domande frequenti",
      description: "Risposte brevi a ciò che i viaggiatori italiani chiedono più spesso.",
      blocks: [
        { h2: "È davvero gratuito?" },
        { p: `Sì, ${F.fee}. Qualsiasi importo pagato va a un intermediario.` },
        { h2: "Quanto posso restare?" },
        {
          p: `Fino a ${F.stayMonths} mesi per ingresso; il visto in sé è valido ${F.validMonths} mesi con ingressi illimitati.`,
        },
        { h2: "Posso lavorare?" },
        {
          p: `No. Sono ammesse le visite d'affari e lo studio fino a ${F.studyMonths} mesi, non il lavoro retribuito.`,
        },
        { h2: "Posso fare domanda dall'Australia?" },
        { p: "No. Deve trovarsi fuori dall'Australia alla domanda e al rilascio." },
        { h2: "Ho un passaporto nuovo: il visto vale ancora?" },
        { p: "No. È legato al vecchio. Ripresenti la domanda con quello nuovo." },
        { h2: "Anche i neonati hanno bisogno del visto?" },
        { p: "Sì, ogni viaggiatore separatamente, sul proprio passaporto." },
        { h2: "E se il mio passaporto non è nell'elenco?" },
        {
          p: `Allora l'eVisitor non è disponibile. A seconda del passaporto sarà l'ETA (${F.etaFee}, solo tramite l'app ufficiale) o un visto per visitatori (subclass 600).`,
        },
      ],
    },
    {
      slug: "informazioni-sul-sito",
      title: "Informazioni sul sito",
      description: "Chi realizza questa guida indipendente sul visto eVisitor australiano.",
      blocks: [
        { h2: "Editore" },
        {
          p: "Questa è una guida indipendente sul visto eVisitor australiano (subclass 651). Non siamo un ente pubblico e non abbiamo alcun legame con il governo australiano o il Department of Home Affairs. Editore: MediaX Co., Ltd. (Giappone). Contatto: webmaster@mediax.biz",
        },
        { h2: "Che cosa non facciamo" },
        {
          ul: [
            "Non presentiamo domande.",
            "Non addebitiamo alcun costo.",
            "Non forniamo consulenza legale o in materia di immigrazione.",
          ],
        },
        { h2: "Sull'accuratezza" },
        {
          p: "Tutti i contenuti si basano sulle pubblicazioni ufficiali alla data di verifica indicata. Le regole cambiano: fa fede il sito ufficiale. Se nota un errore ce lo segnali e lo correggeremo.",
        },
      ],
    },
    {
      slug: "privacy",
      title: "Informativa sulla privacy",
      description: "Quali dati tratta questo sito, perché, e quali diritti ha chi lo visita.",
      blocks: [
        { h2: "In sintesi" },
        {
          p: "Questo sito è composto da pagine informative statiche. Non c'è registrazione, non si vende nulla e non si raccolgono dati del passaporto. I dati personali sono trattati solo nella misura tecnicamente necessaria.",
        },
        { h2: "Log del server" },
        {
          p: "Il sito è servito da Cloudflare Pages. A ogni accesso vengono registrati indirizzo IP, orario, indirizzo richiesto e informazioni sul browser, per garantire stabilità e prevenire attacchi.",
        },
        { h2: "Cookie e statistiche" },
        {
          p: "Non usiamo cookie pubblicitari e non inseriamo script di tracciamento di terzi. Se in futuro venisse aggiunta una misurazione del traffico, sarà descritta prima in questa pagina.",
        },
        { h2: "Link esterni" },
        { p: "Il sito rimanda a fonti ufficiali, soggette alle rispettive informative sulla privacy." },
        { h2: "Contatti" },
        { p: "Per domande sulla privacy: webmaster@mediax.biz" },
      ],
    },
    {
      slug: "condizioni-di-utilizzo",
      title: "Condizioni di utilizzo",
      description: "Le condizioni applicabili all'uso delle informazioni di questo sito.",
      blocks: [
        { h2: "Finalità" },
        {
          p: "I contenuti forniscono informazioni generali sul visto eVisitor australiano. Non costituiscono consulenza legale o in materia di immigrazione e non instaurano alcun rapporto di mandato.",
        },
        { h2: "Nessuna gestione delle domande" },
        {
          p: "Non siamo né intermediari né un ente pubblico. Le domande passano esclusivamente dai canali ufficiali; non riceviamo moduli, pagamenti o dati del passaporto.",
        },
        { h2: "Limitazione di responsabilità" },
        {
          p: "Ci impegniamo a mantenere informazioni corrette e aggiornate, senza poterne garantire completezza e assenza di errori. La responsabilità per danni derivanti dall'uso è limitata ai casi di dolo e colpa grave.",
        },
        { h2: "Diritto d'autore" },
        {
          p: "Testi e impaginazione sono protetti dal diritto d'autore. La riproduzione integrale senza consenso non è consentita; le citazioni brevi con indicazione della fonte e link sono benvenute.",
        },
      ],
    },
  ],
  articles: [
    {
      slug: "evisitor-domanda-passo-per-passo",
      title: "Richiedere l'eVisitor passo per passo",
      description:
        "Dall'ImmiAccount all'email di conferma: l'ordine dei passaggi e i punti su cui le pratiche si bloccano davvero.",
      blocks: [
        {
          p: `La domanda si presenta esclusivamente sul sito del Department of Home Affairs. Per l'eVisitor non esiste un'app — è proprio questa la differenza con l'ETA. Il costo è ${F.fee}.`,
        },
        { h2: "1. Creare un ImmiAccount" },
        {
          p: "Serve un account ImmiAccount gratuito. Usi un indirizzo email raggiungibile anche durante il viaggio: tutte le comunicazioni arrivano lì.",
        },
        { h2: "2. Inserire i dati del passaporto" },
        {
          p: "Riporti nome, numero e data di nascita esattamente come sul passaporto. Una grafia diversa è la causa più frequente di problemi al check-in.",
        },
        { h2: "3. Rendere le dichiarazioni" },
        {
          p: "Dichiara il proprio stato di salute ed eventuali precedenti penali. Risponda con verità: una dichiarazione non veritiera può portare alla revoca del visto, con conseguenze pluriennali su nuove domande.",
        },
        { h2: "4. Presentare dall'estero" },
        {
          p: "Deve trovarsi fuori dall'Australia sia alla domanda sia al rilascio. Non è una formalità: è una condizione del visto.",
        },
        {
          note: `Molte decisioni arrivano in ${F.decisionTypical}, ma non costruisca il programma su questo. Faccia domanda appena il viaggio è deciso.`,
        },
      ],
    },
    {
      slug: "evisitor-o-eta",
      title: `eVisitor o ETA? La differenza tra gratuito e ${F.etaFee}`,
      description:
        "Due visti con condizioni quasi identiche, ma elenchi di Paesi, prezzi e canali diversi. Come capire quale la riguarda.",
      blocks: [
        {
          p: `L'Australia ha due visti elettronici per visitatori che si somigliano. Quale si applichi dipende esclusivamente dal passaporto che possiede: non si sceglie.`,
        },
        { h2: "eVisitor (subclass 651)" },
        {
          ul: [
            `Per ${F.eligibleCountries} Paesi prevalentemente europei, Italia compresa`,
            `Costo: ${F.fee}`,
            "Domanda: sito del Department of Home Affairs (nessuna app)",
          ],
        },
        { h2: "ETA (subclass 601)" },
        {
          ul: [
            "Per Giappone, Stati Uniti, Canada, Singapore, Malesia, Corea del Sud e altri",
            `Costo: ${F.etaFee} di costo di servizio`,
            "Domanda: solo tramite l'app ufficiale, che legge il chip del passaporto",
          ],
        },
        { h2: "Che cosa è uguale" },
        {
          p: `Entrambi sono validi ${F.validMonths} mesi, consentono ingressi illimitati e soggiorni fino a ${F.stayMonths} mesi per ingresso. Entrambi vietano di lavorare per un datore di lavoro australiano.`,
        },
        {
          note: "Con due cittadinanze la risposta può cambiare a seconda del passaporto. Conta quello con cui viaggia davvero.",
        },
      ],
    },
    {
      slug: "evisitor-validita-e-soggiorno",
      title: "Validità e durata del soggiorno: due cose diverse",
      description: `${F.validMonths} mesi di validità e ${F.stayMonths} mesi di soggiorno per ingresso vengono spesso confusi. Che cosa cambia nella pratica.`,
      blocks: [
        {
          p: `L'eVisitor è valido ${F.validMonths} mesi dal rilascio. Questo dice per quanto tempo può usare il visto, non per quanto può restare ogni volta.`,
        },
        { h2: "Per ogni ingresso" },
        {
          p: `Ogni soggiorno può durare fino a ${F.stayMonths} mesi. Durante la validità può viaggiare quante volte vuole, purché ogni singolo soggiorno resti sotto questo limite.`,
        },
        { h2: "Uscire e rientrare non azzera il conteggio" },
        {
          p: "Lasciare brevemente il Paese per far ripartire il conteggio è uno schema noto e riconosciuto come tale. L'Australian Border Force guarda l'insieme dei suoi spostamenti, non solo l'ultimo timbro.",
        },
        { h2: "Restare più a lungo" },
        {
          p: "Per superare la durata consentita serve un altro visto. L'eVisitor non si proroga e non si può presentare domanda dall'Australia.",
        },
        {
          note: "Il visto decade anche se il passaporto scade prima. Controlli entrambe le date prima di prenotare.",
        },
      ],
    },
  ],
};
