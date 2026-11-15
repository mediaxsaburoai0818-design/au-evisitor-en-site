import { FACTS as F } from "./_schema";
import type { Article } from "./_schema";

/**
 * 英語ページの横展開（2026-11-15）。英語の data/pages.ts にあって it 版に無かった話題。
 * ⚠️ 数値は F（data/facts.ts）から入れる。本文に直接書かない。
 * ⚠️ 読者＝イタリア旅券保持者（eVisitor 対象・無料）。二人称は Lei。
 * ⚠️ 英語で checked があるページだけ checked を付ける（表記は「15 novembre 2026」）。
 */
const ADDED = "2026-11-15";
const CHECKED_1115 = "15 novembre 2026";
/** 表示用の書式だけ（値は F と同じ）。小数点をイタリア式のカンマにする */
const ALCOHOL_LITRES = String(F.customsAlcoholLitres).replace(".", ","); // = F.customsAlcoholLitres
/** 表示用の訳語（= F.decisionTypical "minutes to a few days"） */
const DECISION_TYPICAL = "pochi minuti o qualche giorno";

const SRC_EVISITOR = { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" };
const SRC_ETA = { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" };
const SRC_DUTY_FREE = { label: "Australian Border Force / Home Affairs — Duty free concessions", url: "https://www.abf.gov.au/entering-and-leaving-australia/duty-free" };

export const itGuides: Article[] = [
  {
    slug: "uscire-e-rientrare-in-australia",
    enSlug: "leaving-and-returning",
    added: ADDED,
    related: ["arrivo-in-australia", "rimborso-tasse-trs", "liquidi-bagaglio-a-mano"],
    title: "Uscire dall'Australia e rientrare dà diritto ad altri tre mesi?",
    description:
      "Ogni ingresso fa ripartire il limite di tre mesi, ma i rientri ravvicinati attirano domande e l'agente di frontiera può negare l'ingresso.",
    blocks: [
      {
        p: `Ogni arrivo apre un nuovo periodo di soggiorno fino a ${F.stayMonths} mesi: un viaggio in Nuova Zelanda o a Bali e ritorno fa quindi ripartire il conteggio del singolo soggiorno, finché il visto è valido.`,
      },
      { h2: "Ma resta un visto per visitatori" },
      {
        p: "L'eVisitor viene rilasciato a chi viene in visita. Chi trascorre nove mesi su dodici in Australia, uscendo solo per brevi periodi, non è in visita: di fatto vive nel Paese con un visto per visitatori. Gli agenti di frontiera guardano l'insieme dei movimenti registrati sul passaporto, non solo l'ingresso in corso.",
      },
      { h2: "Che cosa possono chiederLe al rientro" },
      {
        ul: [
          "Un biglietto di proseguimento o di ritorno",
          "Mezzi sufficienti per mantenersi durante il soggiorno",
          "La prova che tornerà a casa: lavoro, studio, un contratto d'affitto, la famiglia",
          "Il motivo per cui rientra così presto",
        ],
      },
      { h2: "Se l'ingresso viene negato" },
      {
        p: "Un visto valido autorizza il viaggio, non garantisce l'ingresso. Se l'agente non è convinto che Lei sia un vero visitatore, il visto può essere annullato alla frontiera e Lei può essere rimandato indietro con il primo volo disponibile. Quel precedente La seguirà poi nelle domande future.",
      },
      { source: SRC_EVISITOR },
      {
        note: `L'eVisitor smette di funzionare nel momento in cui scade, ${F.validMonths} mesi dopo il rilascio. Controlli la data di rilascio prima di prenotare un nuovo viaggio verso la fine di quel periodo.`,
      },
    ],
  },
  {
    slug: "controlli-alla-frontiera",
    enSlug: "border-questions",
    added: ADDED,
    related: ["arrivo-in-australia", "smartgate-australia", "portare-medicinali"],
    title: "Che cosa Le chiedono all'arrivo in Australia",
    description:
      "Immigrazione, dogana e biosicurezza sono tre controlli distinti, con domande diverse. Sapere quale è quale accorcia molto la coda.",
    blocks: [
      {
        p: "Chi arriva in Australia passa tre controlli, non uno. Li gestiscono enti diversi e ognuno guarda cose diverse. A rallentare le persone è proprio rispondere alla domanda di un controllo con la risposta pensata per un altro.",
      },
      { h2: "1. Immigrazione: è davvero un visitatore?" },
      {
        ul: [
          "Quanto tempo resta e dove",
          "Se ha un biglietto di proseguimento o di ritorno",
          "Come finanzia il viaggio",
          "Se intende lavorare: con questo visto non è consentito",
        ],
      },
      { h2: "2. Dogana: deve pagare dazi?" },
      {
        p: `Deve dichiarare le merci che superano la franchigia e il denaro contante pari o superiore alla soglia di dichiarazione. La franchigia per le merci in generale è di ${F.customsGoodsAllowance} se ha almeno ${F.customsAgeMin} anni (${F.customsGoodsAllowanceMinor} se è più giovane).`,
      },
      { h2: "3. Biosicurezza: che cosa c'è nel bagaglio?" },
      {
        p: "È il controllo che coglie impreparati i viaggiatori. L'Australia chiede di alimenti, materiale vegetale e animale e di tutto ciò che è stato a contatto con terra o acqua dolce. Dichiarare non costa nulla; non dichiarare può costarLe il visto.",
      },
      { h2: "L'Incoming Passenger Card" },
      {
        p: "Le risposte per dogana e biosicurezza si danno sull'Incoming Passenger Card, la scheda che si compila prima dell'atterraggio. La prenda sul serio: è una dichiarazione con valore legale, e se un agente trova nel bagaglio un oggetto non dichiarato considera la scheda la prova che Lei ha detto di non avere nulla.",
      },
      { source: SRC_DUTY_FREE },
      {
        note: "Se non è sicuro che qualcosa vada dichiarato, risponda «sì» e lasci decidere all'agente. Non c'è alcuna sanzione per aver dichiarato un oggetto che poi risulta ammesso.",
      },
    ],
  },
  {
    slug: "biosicurezza-australia",
    enSlug: "biosecurity",
    added: ADDED,
    related: ["arrivo-in-australia", "portare-medicinali", "smartgate-australia"],
    title: "Biosicurezza in Australia: che cosa dichiarare e perché il visto può essere annullato",
    description: `Le merci di biosicurezza non dichiarate possono costare una sanzione fino a ${F.biosecurityPenaltyUnits} penalty unit e, per chi ha un visto, l'annullamento e ${F.visaCancelExclusionYears} anni di esclusione.`,
    blocks: [
      {
        p: "L'Australia è un'isola con un'agricoltura da proteggere: le sue regole di biosicurezza sono severe e vengono applicate in aeroporto, non in un ufficio a distanza di tempo. Chi tratta la dichiarazione come una formalità è proprio chi viene fermato.",
      },
      { h2: "La sanzione" },
      {
        p: `Una sanzione amministrativa (infringement notice) per merci non dichiarate può arrivare a ${F.biosecurityPenaltyUnits} penalty unit. ⚠️ Il valore in dollari di una penalty unit è fissato per legge e viene aggiornato periodicamente: la pagina del ministero indica ${F.biosecurityFineDaff} per ${F.biosecurityPenaltyUnits} unità, mentre il comunicato ministeriale sull'adeguamento del 2023 indica ${F.biosecurityFineIndexed} per le stesse ${F.biosecurityPenaltyUnits} unità. Verifichi l'importo attuale sulla pagina ufficiale prima di farvi affidamento.`,
      },
      { h2: "Per chi ha un visto, la multa non è la cosa peggiore" },
      {
        p: `Chi riceve una sanzione può essere segnalato per l'annullamento del visto. Un visto annullato significa l'allontanamento dall'Australia con il primo volo disponibile e un periodo di esclusione di ${F.visaCancelExclusionYears} anni prima di poter presentare una nuova domanda.`,
      },
      { h2: "Che cosa viene davvero intercettato" },
      {
        ul: [
          "Alimenti di qualsiasi tipo, compresi gli snack distribuiti in aereo",
          "Carne, latticini, uova, miele e tutto ciò che li contiene",
          "Frutta e verdura fresche, semi, frutta secca",
          "Materiale vegetale: oggetti in legno, intrecci, fiori",
          "Scarponi da trekking, tende e attrezzatura sportiva con residui di terra o piante",
          "Tutto ciò che è stato usato con animali o in acqua dolce",
        ],
      },
      { h2: "Prima di fare la valigia" },
      {
        ul: [
          "Pulisca la terra da scarponi e attrezzatura a casa, non in coda",
          "Mangi o getti gli alimenti prima dell'atterraggio",
          "Dichiari i souvenir in legno e intrecciati: sono merci a rischio, non semplici curiosità",
        ],
      },
      { source: { label: "Department of Agriculture, Fisheries and Forestry — Infringement notices at the airport", url: "https://www.agriculture.gov.au/biosecurity-trade/policy/legislation/compliance/infringement-notice-scheme/infringement-notices-at-the-airport" } },
      {
        note: "Prima del controllo di biosicurezza ci sono appositi contenitori. Usarli è gratuito. Essere trovati con l'oggetto dopo aver dichiarato «no», invece, non lo è.",
      },
    ],
  },
  {
    slug: "franchigie-doganali-australia",
    enSlug: "customs-allowances",
    added: ADDED,
    related: ["arrivo-in-australia", "soldi-e-mance", "rimborso-tasse-trs", "fumo-svapo-alcol"],
    title: "Franchigie doganali in Australia: merci, alcolici, tabacco",
    description: `Gli adulti possono portare in franchigia ${F.customsGoodsAllowance} di merci, ${ALCOHOL_LITRES} litri di alcolici e ${F.customsTobaccoGrams} grammi di tabacco. Oltre questi limiti bisogna dichiarare.`,
    blocks: [
      {
        p: "La dogana è un controllo distinto dalla biosicurezza. La biosicurezza chiede se un oggetto è un rischio per l'Australia; la dogana chiede se su quell'oggetto sono dovuti dazi e imposte. Si può superare l'uno ed essere fermati dall'altro.",
      },
      { h2: "Le franchigie" },
      {
        ul: [
          `Merci in generale: ${F.customsGoodsAllowance} se ha almeno ${F.customsAgeMin} anni, ${F.customsGoodsAllowanceMinor} se ha meno di ${F.customsAgeMin} anni`,
          `Alcolici: ${ALCOHOL_LITRES} litri, dai ${F.customsAgeMin} anni in su`,
          `Tabacco: ${F.customsTobaccoGrams} grammi in qualsiasi forma, più un pacchetto aperto, dai ${F.customsAgeMin} anni in su`,
        ],
      },
      { h2: "Gli errori più comuni" },
      {
        ul: [
          "Anche gli acquisti al duty free fatti all'arrivo rientrano nella franchigia",
          "I regali contano: conta il valore di ciò che porta con sé, non di ciò che ha pagato per sé",
          "Le famiglie non sempre possono sommare le franchigie come pensano: verifichi prima di contarci",
        ],
      },
      { h2: "Se supera i limiti" },
      {
        p: "Dichiari le merci e presenti la prova d'acquisto, così da poter calcolare dazi e imposte. Non dichiarare merci oltre la franchigia può comportare sanzioni, un procedimento penale o l'annullamento del visto. Dichiarare significa soltanto pagare quanto dovuto.",
      },
      { source: SRC_DUTY_FREE },
      {
        note: `Anche il denaro è soggetto a un obbligo di dichiarazione alla frontiera: contanti e strumenti come i traveller's cheque per un valore complessivo di ${F.cashReportThreshold} o più vanno dichiarati. Le modalità sono spiegate nella pagina sul denaro.`,
      },
    ],
  },
  {
    slug: "lavoro-e-studio-con-evisitor",
    enSlug: "working-and-studying",
    added: ADDED,
    related: ["arrivo-in-australia", "assistenza-sanitaria-australia"],
    title: "Che cosa non può fare con l'eVisitor: lavorare e studiare oltre tre mesi",
    description: `L'eVisitor è un visto per visitatori: non consente di lavorare per un datore di lavoro australiano e lo studio è limitato a ${F.studyMonths} mesi.`,
    blocks: [
      {
        p: `Poiché l'eVisitor è gratuito e viene rilasciato in fretta, c'è chi lo considera un permesso leggero per fare ciò che vuole per ${F.stayMonths} mesi. Non lo è. È un visto per visitatori con delle condizioni, e le condizioni vengono fatte rispettare.`,
      },
      { h2: "Lavoro" },
      {
        p: "Non può lavorare per un datore di lavoro australiano. Le attività di visita d'affari sono un'altra cosa: partecipare a riunioni, condurre trattative o andare a un congresso in genere è consentito; essere pagati da un'azienda australiana per svolgere un lavoro no.",
      },
      { h2: "Lavoro da remoto per un datore di lavoro fuori dall'Australia" },
      {
        p: "Lavorare da remoto per il Suo attuale datore di lavoro all'estero è una zona grigia che dipende dal caso concreto, e non spetta a un sito informativo decidere per Lei. Se il Suo viaggio dipende da questa risposta, verifichi con il Department of Home Affairs prima di prenotare.",
      },
      { h2: "Studio" },
      {
        p: `Lo studio è limitato a ${F.studyMonths} mesi. Un corso breve va bene; un semestre no. Per studiare più a lungo serve un visto per studenti, da richiedere prima della partenza.`,
      },
      { h2: "Perché conta più di quanto sembri" },
      {
        p: `Violare una condizione del visto può portare all'annullamento, all'allontanamento e a un periodo di esclusione fino a ${F.visaCancelExclusionYears} anni. Il prezzo di un errore non è la multa: è non poter più tornare.`,
      },
      { source: SRC_EVISITOR },
    ],
  },
  {
    slug: "evisitor-passaporto-e-dati",
    enSlug: "passport-and-details",
    added: ADDED,
    related: ["evisitor-nuovo-passaporto", "evisitor-errori-comuni", "evisitor-documenti"],
    title: "L'eVisitor è legato a un solo passaporto: inserisca i dati correttamente",
    description:
      "L'eVisitor è collegato al passaporto usato per la domanda. Un passaporto rinnovato, un nome scritto male o la cittadinanza sbagliata La fermano al check-in.",
    blocks: [
      {
        p: "Non c'è nessun adesivo e nessuna stampa che conti. L'eVisitor esiste come registrazione collegata a un numero di passaporto, e la compagnia aerea verifica quella registrazione al check-in. Se il passaporto che ha in mano non è quello registrato, è come se il visto non esistesse.",
      },
      { h2: "Un passaporto nuovo non eredita il visto da solo" },
      {
        p: `Se rinnova il passaporto, l'eVisitor esistente non passa automaticamente al nuovo documento, anche se è ancora entro i suoi ${F.validMonths} mesi. Sistemi la cosa prima di partire: il Department of Home Affairs chiede di comunicargli il nuovo passaporto. I passaggi sono spiegati nella pagina sul nuovo passaporto.`,
      },
      { h2: "Inserisca i dati esattamente come sono stampati" },
      {
        ul: [
          "I nomi come compaiono nella zona a lettura ottica, non come li scrive di solito",
          "Le lettere accentate traslitterate come fa il passaporto",
          "Il numero di passaporto controllato carattere per carattere: 0 e O, 1 e I",
          "La cittadinanza indicata sul passaporto, non il Paese in cui vive",
        ],
      },
      { h2: "Doppia cittadinanza" },
      {
        p: "Viaggi con il passaporto a cui è collegato l'eVisitor. Avere una seconda cittadinanza non ammessa all'eVisitor non La esclude, ma presentare al check-in il passaporto sbagliato sì.",
      },
      { source: SRC_EVISITOR },
      {
        note: `La domanda costa ${F.fee}. Qualsiasi sito che chieda un compenso per presentare un eVisitor al posto Suo è un terzo che aggiunge il proprio margine, non un canale ufficiale.`,
      },
    ],
  },
  {
    slug: "evisitor-domanda-rifiutata",
    enSlug: "if-your-application-is-refused",
    added: ADDED,
    related: ["evisitor-errori-comuni", "evisitor-passaporto-e-dati", "evisitor-o-eta"],
    title: "Che cosa succede se la domanda di eVisitor viene rifiutata?",
    description:
      "Un rifiuto cambia ciò che deve fare dopo. Che cosa controllare, che cosa evitare e perché ripresentare subito la domanda di solito è un errore.",
    blocks: [
      {
        p: `La maggior parte delle domande di eVisitor viene decisa in ${DECISION_TYPICAL}. Se la Sua torna con un rifiuto, la cosa importante è capirne il motivo prima di fare qualsiasi altra cosa.`,
      },
      { h2: "Non ripresenti semplicemente la domanda" },
      {
        p: "Presentare di nuovo la stessa domanda di solito porta allo stesso risultato, e una serie di domande ripetute non La aiuta. Legga la decisione: indica il motivo.",
      },
      { h2: "I motivi più frequenti" },
      {
        ul: [
          "Il passaporto non è nell'elenco eVisitor: in quel caso la strada giusta può essere l'ETA o un visto per visitatori.",
          "I dati non corrispondevano esattamente al passaporto. Nomi, numeri e date vanno inseriti come sono stampati.",
          "Una dichiarazione su salute o precedenti penali richiedeva una valutazione invece di una decisione automatica.",
        ],
      },
      { h2: "Se ha già i voli" },
      {
        p: "Non parta contando sul fatto che la questione si risolverà in aeroporto. Senza un visto valido non La faranno imbarcare. Contatti la compagnia aerea per cambiare le date mentre sistema la domanda corretta.",
      },
      {
        note: `Un rifiuto non è un annullamento. Se viene annullato un visto che già possiede, alle domande future può applicarsi un periodo di esclusione fino a ${F.visaCancelExclusionYears} anni.`,
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: F.officialUrl } },
    ],
  },
  {
    slug: "evisitor-bambini",
    enSlug: "travelling-with-children",
    added: ADDED,
    related: ["arrivo-in-australia", "smartgate-australia", "assistenza-sanitaria-australia"],
    title: "I bambini hanno bisogno di un proprio eVisitor?",
    description:
      "Ogni viaggiatore ha bisogno del proprio visto, neonati compresi. L'eVisitor di un genitore non copre i figli, e la domanda si presenta allo stesso modo.",
    blocks: [
      {
        p: "Sì. Un eVisitor è collegato a un solo passaporto, quindi ogni membro della famiglia ha bisogno del proprio, compreso il neonato che viaggia in braccio a un genitore.",
      },
      { h2: "Come presentare la domanda per un bambino" },
      {
        p: "La domanda si presenta a nome del bambino, con il passaporto del bambino. Può compilarla un genitore o un tutore per suo conto. Anche per i bambini il visto è gratuito; non c'è un costo separato.",
      },
      { h2: "Controlli prima il passaporto" },
      {
        p: `I passaporti dei minori hanno spesso una validità più breve di quelli degli adulti. Un passaporto che scade durante i ${F.validMonths} mesi di validità del visto è una causa frequente di problemi in seguito, perché il visto è legato al passaporto per cui è stato rilasciato.`,
      },
      { h2: "Se il bambino viaggia con un solo genitore o con un'altra persona" },
      {
        p: "Alla frontiera l'Australia può fare domande sul consenso al viaggio. Portare una dichiarazione di consenso del genitore che non viaggia e una copia di eventuali provvedimenti sull'affidamento non è un requisito del visto, ma evita un ritardo prevedibile.",
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: F.officialUrl } },
    ],
  },
  {
    slug: "evisitor-nuovo-passaporto",
    enSlug: "new-passport-after-approval",
    added: ADDED,
    related: ["evisitor-passaporto-e-dati", "evisitor-verifica-stato", "evisitor-validita-e-soggiorno"],
    title: "Ha un nuovo passaporto dopo il rilascio dell'eVisitor: che cosa fare",
    description:
      "Il visto è collegato al passaporto per cui è stato rilasciato. Rinnovarlo o sostituirlo non annulla il visto, ma deve comunicarlo al Department of Home Affairs.",
    blocks: [
      {
        p: "Succede di continuo: il passaporto viene rinnovato, sostituito dopo uno smarrimento o riemesso dopo un cambio di nome, e il viaggiatore pensa che il visto sia perso. Non lo è, ma non segue nemmeno da solo il nuovo passaporto.",
      },
      { h2: "Che cosa succede davvero" },
      {
        p: "L'eVisitor resta collegato al numero di passaporto per cui è stato rilasciato. Le compagnie aeree e i sistemi di frontiera controllano il passaporto che Lei presenta. Se quel passaporto è nuovo, il collegamento va aggiornato prima.",
      },
      { h2: "Che cosa fare" },
      {
        ul: [
          "Comunichi il nuovo passaporto al Department of Home Affairs prima di partire.",
          "Non presenti una seconda domanda di eVisitor per «sostituire» la prima: non è così che si gestisce il cambio.",
          "Porti con sé il vecchio passaporto, se lo ha ancora e se non è stato annullato in un modo che lo impedisce.",
        ],
      },
      {
        note: "Lo faccia appena riceve il nuovo passaporto, non in aeroporto. Aggiornare i dati è una pratica di routine quando c'è tempo, e un problema quando non ce n'è.",
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: F.officialUrl } },
    ],
  },
  {
    slug: "evisitor-passaporti-ammessi",
    enSlug: "eligible-passports",
    added: ADDED,
    checked: CHECKED_1115,
    related: ["evisitor-o-eta", "che-cos-e-evisitor", "transito-in-australia", "app-australian-eta"],
    title: `Quali passaporti danno diritto all'eVisitor? I ${F.eligibleCountries} Paesi e chi usa l'ETA`,
    description: `L'eVisitor è aperto ai cittadini di ${F.eligibleCountries} Paesi europei, Italia compresa. L'elenco completo, i passaporti britannici esclusi e il confronto con l'ETA.`,
    blocks: [
      {
        p: `Il diritto all'eVisitor (subclass 651) dipende dalla cittadinanza e dal passaporto che possiede, non dal Paese in cui vive. Il Department of Home Affairs precisa che bisogna essere cittadini di uno dei ${F.eligibleCountries} Paesi dell'elenco e avere un passaporto valido rilasciato da quel Paese. L'Italia è tra questi.`,
      },
      { h2: `I ${F.eligibleCountries} Paesi dell'eVisitor` },
      {
        p: "Andorra, Austria, Belgio, Bulgaria, Croazia, Cipro, Repubblica Ceca, Danimarca, Estonia, Finlandia, Francia, Germania, Grecia, Ungheria, Islanda, Irlanda, Italia, Lettonia, Liechtenstein, Lituania, Lussemburgo, Malta, Monaco, Paesi Bassi, Norvegia, Polonia, Portogallo, Romania, Repubblica di San Marino, Slovacchia, Slovenia, Spagna, Svezia, Svizzera, Regno Unito (British Citizen) e Città del Vaticano.",
      },
      { h2: "Passaporti che non danno diritto all'eVisitor" },
      {
        ul: [
          "Per il Regno Unito sono nell'elenco solo i passaporti British Citizen",
          "Non si possono usare i passaporti British National (Overseas), British Dependent Territories Citizen, British Overseas Citizen, British Protected Person e British Subject",
          "Non si possono usare un passaporto per non cittadini, un certificato d'identità o un altro documento di viaggio come il Titre de Voyage",
          "Per la Città del Vaticano, il passaporto deve indicare che Lei è cittadino della Città del Vaticano (Santa Sede)",
        ],
      },
      { h2: "Se il passaporto non è nell'elenco" },
      {
        p: `L'ETA (subclass 601) ha un proprio elenco di ${F.etaEligibleCountries} passaporti. Comprende tra gli altri Brunei, Canada, Hong Kong (RAS della Cina), Giappone, Malesia, Singapore, Corea del Sud, Taiwan (esclusi i passaporti di servizio o diplomatici), Stati Uniti e Regno Unito — British National (Overseas). L'ETA costa ${F.etaFee} come costo di servizio dell'app. Chi ha altri passaporti può avere diritto a un visto per visitatori (subclass 600).`,
      },
      { h2: "Passaporti presenti in entrambi gli elenchi" },
      {
        p: `Dal nostro confronto dei due elenchi ufficiali, ${F.bothListsCountries} passaporti compaiono in entrambi, Italia compresa. Gli altri ${F.eligibleCountries - F.bothListsCountries} Paesi dell'eVisitor non sono nell'elenco ETA: Bulgaria, Croazia, Cipro, Repubblica Ceca, Estonia, Ungheria, Lettonia, Lituania, Polonia, Romania, Slovacchia e Slovenia. Per i passaporti presenti in entrambi gli elenchi, la pagina dell'ETA indica che i titolari di passaporti europei «possono avere diritto» all'eVisitor e che la domanda di eVisitor è gratuita.`,
      },
      { h2: "Casi in cui Home Affairs indica un'altra strada" },
      {
        ul: [
          "Una condanna penale in qualsiasi Paese: Home Affairs indica di richiedere invece un visto per visitatori (subclass 600) e avverte che arrivare con un eVisitor avendo una condanna può portare al rifiuto dell'ingresso",
          "Tirocinio in un asilo nido, studi per diventare medico, dentista, infermiere o paramedico, oppure accesso ad ambienti sanitari od ospedalieri: richieda il visto per visitatori (subclass 600) ed effettui gli accertamenti sanitari",
          "I cittadini australiani non possono richiedere né l'eVisitor né l'ETA, anche se hanno anche un passaporto ammesso: per entrare in Australia non hanno bisogno di un visto",
          "Famiglie: ogni componente ha bisogno di una domanda separata, compresi i figli iscritti sul passaporto di un genitore",
        ],
      },
      { source: SRC_EVISITOR },
      { source: SRC_ETA },
      {
        note: "Gli elenchi possono cambiare. Prima di presentare la domanda, verifichi sulla pagina ufficiale il passaporto con cui viaggerà davvero.",
      },
    ],
    faq: [
      {
        q: "Ho un passaporto British National (Overseas). Posso ottenere l'eVisitor?",
        a: "No. I passaporti BN(O) sono esclusi dall'eVisitor. Il passaporto BN(O) è invece nell'elenco dell'ETA (subclass 601).",
      },
      {
        q: "Vivo in Italia ma ho un passaporto non europeo. Ho diritto all'eVisitor?",
        a: "No. L'eVisitor richiede la cittadinanza di uno dei Paesi dell'elenco e un passaporto valido di quel Paese. Il Paese in cui vive non cambia nulla.",
      },
    ],
  },
  {
    slug: "evisitor-errori-comuni",
    enSlug: "common-mistakes",
    added: ADDED,
    checked: CHECKED_1115,
    related: ["evisitor-passaporto-e-dati", "evisitor-domanda-rifiutata", "evisitor-domanda-passo-per-passo", "evisitor-sito-ufficiale"],
    title: "Gli errori da evitare con l'eVisitor, secondo il Department of Home Affairs",
    description:
      "Nomi scritti male, formato della data sbagliato, domanda presentata dall'Australia, viaggio prenotato prima del rilascio: gli errori segnalati da Home Affairs.",
    blocks: [
      {
        p: "L'eVisitor è gratuito e di solito rapido, e proprio per questo si tende a compilarlo di fretta. Il Department of Home Affairs elenca i punti da controllare. Ognuno di quelli qui sotto è tratto dalla sua pagina sull'eVisitor.",
      },
      { h2: "Prima di inviare la domanda" },
      {
        ul: [
          "Il nome è scritto come sul passaporto, compreso il secondo nome, e il dispositivo non lo ha corretto automaticamente",
          "Il passaporto è di uno dei Paesi ammessi all'eVisitor",
          "La data di nascita è inserita nel formato gg/mm/aa",
          "L'indirizzo email è corretto",
        ],
      },
      {
        p: "Home Affairs avverte che, se un visto viene rilasciato con informazioni errate, si possono avere ritardi o vedersi negare l'ingresso in Australia.",
      },
      { h2: "Presentare la domanda dal posto sbagliato" },
      {
        p: "Deve trovarsi fuori dall'Australia quando presenta la domanda e quando viene presa la decisione.",
      },
      { h2: "Prenotare prima del rilascio" },
      {
        p: "Home Affairs raccomanda di non organizzare il viaggio in Australia finché non Le ha comunicato per iscritto che il visto è stato rilasciato.",
      },
      { h2: "Aspettare un'email che non arriva" },
      {
        p: "Se entro 12 ore dalla domanda non riceve alcuna email, controlli lo stato della domanda nel Suo ImmiAccount.",
      },
      { h2: "Omettere una condanna" },
      {
        p: "Se ha una condanna penale in qualsiasi Paese, Home Affairs indica di richiedere invece un visto per visitatori (subclass 600). Se presenta comunque domanda di eVisitor, deve dichiarare tutti i precedenti penali e rispondere con sincerità a ogni domanda.",
      },
      { h2: "Errori durante il soggiorno" },
      {
        ul: [
          "Lavorare: l'eVisitor non è un visto di lavoro. Il lavoro retribuito per un datore di lavoro australiano non è consentito, e lavorare o avere l'intenzione di farlo può portare all'annullamento",
          "Pensare che una crociera di andata e ritorno faccia ripartire il soggiorno: Home Affairs precisa che non è così",
          "Soggiorni lunghi o frequenti: al successivo arrivo possono chiederLe lo scopo del viaggio, e il visto può essere annullato se risulta che Lei non è un vero visitatore",
          "Restare dopo la cessazione del visto senza un altro visto: diventa un «unlawful non-citizen» (straniero in posizione irregolare) e può essere allontanato",
        ],
      },
      { h2: "Se in realtà sta richiedendo l'ETA" },
      {
        p: "Con il passaporto italiano non serve l'ETA, ma chi ha anche un passaporto ammesso solo all'ETA deve tenere presenti tre punti della pagina dell'ETA: i dati dell'ETA devono corrispondere esattamente al passaporto e Home Affairs non può modificarli dopo il rilascio; un nuovo passaporto mette fine all'ETA e richiede una nuova domanda; dopo un rinvio a un esame (referral), presentare altre domande di ETA nell'app porta allo stesso risultato.",
      },
      { source: SRC_EVISITOR },
      { source: SRC_ETA },
      {
        note: "Se dopo la domanda cambiano il numero di telefono, l'email, l'indirizzo o il passaporto, la pagina dell'eVisitor chiede di comunicarlo al Department of Home Affairs. Segua i passaggi indicati su quella pagina.",
      },
    ],
  },
  {
    slug: "transito-in-australia",
    enSlug: "transit",
    added: ADDED,
    checked: CHECKED_1115,
    related: ["evisitor-passaporti-ammessi", "liquidi-bagaglio-a-mano", "aeroporti-principali-australia", "evisitor-o-eta"],
    title: `Transito in Australia: la regola delle ${F.twovHours} ore e il Transit visa`,
    description: `Anche in transito serve un visto o un'autorizzazione. Quando basta l'eVisitor, la regola delle ${F.twovHours} ore senza visto e il Transit visa da ${F.transitVisaHours} ore.`,
    blocks: [
      {
        p: "Il Department of Home Affairs precisa che tutti gli stranieri hanno bisogno di un visto o di un'autorizzazione per entrare in Australia, anche per soggiorni brevi o per un transito senza uscire dall'aeroporto. Questa autorizzazione può derivare da tre situazioni.",
      },
      { h2: "1. Ha già un eVisitor (o ne ha diritto)" },
      {
        p: "Home Affairs indica l'eVisitor, l'ETA, il visto per visitatori e l'APEC Business Travel Card tra i visti che consentono il transito in Australia, oltre a un soggiorno più lungo. Se il Suo viaggio prevede uno scalo in Australia, l'eVisitor lo copre.",
      },
      { h2: "2. Transito senza visto (TWOV)" },
      {
        p: "Può transitare senza visto solo se valgono tutte le condizioni seguenti:",
      },
      {
        ul: [
          "Arriva in Australia in aereo",
          `Ha un biglietto confermato per lasciare l'Australia in aereo verso un Paese terzo entro ${F.twovHours} ore dall'arrivo`,
          "Ha un documento di viaggio valido per entrare nel Paese di destinazione",
          "Non ha bisogno di passare il controllo immigrazione né di lasciare la zona transiti dell'aeroporto per nessun motivo prima del volo successivo",
          "Ha un passaporto di un Paese presente nell'elenco TWOV",
        ],
      },
      {
        p: "Dal nostro confronto dei due elenchi ufficiali, tutti i Paesi dell'elenco eVisitor compaiono anche nell'elenco TWOV, che comprende anche altri Paesi. Home Affairs precisa che queste informazioni non valgono per apolidi e rifugiati.",
      },
      { h2: "Quando deve passare il controllo immigrazione" },
      {
        p: "Home Affairs cita il ritiro e il trasferimento dei bagagli e l'imbarco su un volo successivo da un altro terminal come motivi frequenti per cui si deve passare il controllo immigrazione, e per farlo serve un visto. Se non è ancora sicuro di rientrare nel TWOV, consiglia di valutare la richiesta di un visto per prudenza.",
      },
      { h2: "3. Transit visa (subclass 771)" },
      {
        ul: [
          `Per transitare in Australia per non più di ${F.transitVisaHours} ore`,
          "Gratuito",
          "Serve una domanda separata per ogni viaggiatore, compresi i neonati iscritti sul passaporto di un genitore",
          "Deve trovarsi fuori dall'Australia quando presenta la domanda e quando viene presa la decisione",
        ],
      },
      {
        note: "Home Affairs avverte che, se ha già un visto per l'Australia, il rilascio di un Transit visa farà probabilmente cessare l'altro visto. L'eVisitor consente già il transito.",
      },
      { source: { label: "Department of Home Affairs — Transit visa (subclass 771)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771" } },
      { source: { label: "Department of Home Affairs — Travellers eligible to transit without a visa", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771/travellers-eligible-to-transit-without-visa" } },
      { source: { label: "Department of Home Affairs — Transit facilities at Australian airports", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771/transit-facilities-at-australian-airports" } },
    ],
    faq: [
      {
        q: "La mia coincidenza a Sydney è di 10 ore. Posso transitare senza visto?",
        a: `Non con il TWOV, che richiede un volo successivo confermato entro ${F.twovHours} ore dall'arrivo. Le serve un visto: l'eVisitor, che con il passaporto italiano può richiedere, oppure un Transit visa (subclass 771).`,
      },
      {
        q: "Ogni aeroporto ha una zona transiti?",
        a: "Home Affairs pubblica una pagina sulle strutture di transito negli aeroporti australiani. La consulti, insieme alla Sua compagnia aerea, per l'aeroporto che userà.",
      },
    ],
  },
  {
    slug: "app-australian-eta",
    enSlug: "australian-eta-app",
    added: ADDED,
    checked: CHECKED_1115,
    related: ["evisitor-o-eta", "evisitor-domanda-passo-per-passo", "evisitor-sito-ufficiale", "evisitor-passaporti-ammessi"],
    title: "Esiste un'app per l'eVisitor? No: l'app Australian ETA serve solo per l'ETA",
    description: `L'eVisitor si richiede online in ImmiAccount. L'app Australian ETA serve solo per l'ETA (subclass 601) e prevede un costo di servizio di ${F.etaFee}.`,
    blocks: [
      {
        p: "Per l'eVisitor non esiste un'app. La guida di Home Affairs sull'eVisitor indica di presentare la domanda online, tramite ImmiAccount, e di controllarne lì lo stato. L'app governativa che si trova negli store, l'app Australian ETA, serve per un altro visto: l'Electronic Travel Authority (subclass 601).",
      },
      { h2: "Chi deve usare l'app Australian ETA" },
      {
        p: `Home Affairs precisa che chi ha un passaporto ammesso all'ETA deve usare l'app Australian ETA per richiederla. Per l'ETA non c'è una tassa di visto, ma c'è un costo di servizio non rimborsabile di ${F.etaFee} per l'uso dell'app. Se non può usare l'app, Home Affairs indica che può richiedere un altro visto adatto tramite ImmiAccount e che i titolari di passaporti europei possono avere diritto all'eVisitor, che non prevede alcuna tassa di domanda.`,
      },
      { h2: "L'app in breve" },
      {
        ul: [
          "Editore: Department of Home Affairs (indicato come venditore sull'App Store)",
          "Download gratuito dall'Apple App Store e da Google Play; l'App Store indica iOS 17.6 o successivo",
          "Servono un telefono con fotocamera, NFC attivo, servizi di localizzazione attivi, un indirizzo email valido e un metodo di pagamento per il costo di servizio",
        ],
      },
      { h2: "Che cosa si fa nell'app" },
      {
        ul: [
          "Si scansiona il passaporto per precompilare nome, data di nascita, numero di passaporto e altri dati",
          "Si scatta una foto dal vivo con lo stesso telefono; la foto viene acquisita in automatico quando l'ovale sullo schermo diventa verde",
          "Si risponde alle domande, si paga il costo di servizio e si invia",
          "Le famiglie che presentano domanda dallo stesso dispositivo possono inviare e pagare insieme",
          "Qualcuno può aiutarLa a compilare, ma deve essere fisicamente con Lei",
          "La funzione «Visa check» dell'app mostra lo stato della domanda",
        ],
      },
      { source: SRC_ETA },
      { source: SRC_EVISITOR },
      { source: { label: "Department of Home Affairs — ETA and AIA video guides", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/eta-and-aia-video-guides" } },
      { source: { label: "App Store — AustralianETA", url: "https://apps.apple.com/au/app/australianeta/id1527982364" } },
      { source: { label: "Google Play — AustralianETA", url: "https://play.google.com/store/apps/details?id=au.gov.homeaffairs.eta" } },
      {
        note: `Con il passaporto italiano, che è nell'elenco eVisitor, l'app non Le serve. Presenti la domanda in ImmiAccount, dove l'eVisitor costa ${F.fee}.`,
      },
    ],
  },
  {
    slug: "evisitor-sito-ufficiale",
    enSlug: "official-site",
    added: ADDED,
    checked: CHECKED_1115,
    related: ["evisitor-domanda-passo-per-passo", "evisitor-costo", "evisitor-verifica-stato", "evisitor-errori-comuni"],
    title: "Il sito ufficiale dell'eVisitor è ImmiAccount: come riconoscerlo ed evitare le truffe",
    description:
      "Home Affairs definisce ImmiAccount l'unico sito ufficiale per le domande di visto australiano. Gli indirizzi ufficiali e gli avvisi sulle truffe che pubblica.",
    blocks: [
      {
        p: "Il Department of Home Affairs descrive ImmiAccount come il proprio portale per l'immigrazione e «l'unico sito ufficiale da usare per richiedere un visto australiano». Il modulo di domanda dell'eVisitor si trova in ImmiAccount.",
      },
      { h2: "Gli indirizzi ufficiali" },
      {
        ul: [
          "Informazioni sull'eVisitor: immi.homeaffairs.gov.au",
          "Accesso a ImmiAccount e domande: online.immi.gov.au",
          "L'app Australian ETA (solo per l'ETA): pubblicata dal Department of Home Affairs",
        ],
      },
      { h2: "Quanto costa la via ufficiale" },
      {
        p: "Home Affairs lo scrive chiaramente: «The eVisitor is free», l'eVisitor è gratuito. Sul sito ufficiale non c'è alcuna tassa di domanda da pagare.",
      },
      { h2: "Gli avvisi di Home Affairs sulle truffe" },
      {
        ul: [
          "Un'email che dice di provenire dal Department of Home Affairs ma il cui indirizzo non termina in .gov.au è una truffa",
          "Se qualcuno Le chiede un costo aggiuntivo per far rilasciare il visto (a volte chiamato «CIS charge»), lasci perdere: il governo australiano non applica costi aggiuntivi per rilasciare i visti",
          "Se qualcuno Le impedisce di controllare la domanda in ImmiAccount, Le sta nascondendo qualcosa",
          "Una lettera di rilascio per un visto che non trova in VEVO (Visa Entitlement Verification Online) è probabilmente falsa",
          "Il personale di Home Affairs si identifica sempre al telefono e non chiede mai dati della carta di credito o password",
          "Si rivolga solo ai canali ufficiali del governo australiano: il sito di Home Affairs, gli Australian Biometric Collection Centres o l'Alta Commissione, l'Ambasciata o il Consolato d'Australia nel Suo Paese",
        ],
      },
      { h2: "Se qualcun altro presenta la domanda per Lei" },
      {
        p: "Un ImmiAccount può essere creato dal richiedente, da un familiare che agisce per suo conto o da un amico che aiuta con la domanda. Home Affairs precisa che in Australia è illegale per un terzo fornire assistenza a pagamento in materia di immigrazione se non è un registered migration agent o un avvocato abilitato in Australia, e che Lei resta responsabile di verificare le condizioni del visto anche se la domanda la presenta un'altra persona.",
      },
      { source: { label: "Department of Home Affairs — How to avoid being scammed", url: "https://immi.homeaffairs.gov.au/help-support/visa-scams/what-you-need-to-know" } },
      { source: { label: "Department of Home Affairs — Visa scams", url: "https://immi.homeaffairs.gov.au/help-support/visa-scams" } },
      { source: { label: "Department of Home Affairs — Applying online in ImmiAccount", url: "https://immi.homeaffairs.gov.au/help-support/applying-online-or-on-paper/online" } },
      { source: { label: "Department of Home Affairs — Who can help with your application", url: "https://immi.homeaffairs.gov.au/help-support/who-can-help-with-your-application/overview" } },
      { source: SRC_EVISITOR },
      {
        note: "Questo sito è una guida indipendente, non un sito governativo. Non riceviamo domande né pagamenti.",
      },
    ],
  },
  {
    slug: "autorizzazioni-di-viaggio-a-confronto",
    enSlug: "travel-authorisations-compared",
    added: ADDED,
    related: ["evisitor-o-eta", "che-cos-e-evisitor", "evisitor-costo"],
    title: "Quale autorizzazione di viaggio Le serve? NZeTA, eVisitor, K-ETA, ESTA e le altre a confronto",
    description:
      "Nomi simili, regole molto diverse. Quale sistema vale per quale destinazione, quanto costa ciascuno e gli errori che nascono dal confonderli.",
    blocks: [
      {
        p: "Viste da fuori, le autorizzazioni di viaggio elettroniche sembrano intercambiabili. Non lo sono. Ogni Paese gestisce il proprio sistema, con il proprio elenco di Paesi ammessi, il proprio prezzo e la propria idea di che cosa sia il documento: alcune sono visti, altre dichiarano espressamente di non esserlo.",
      },
      {
        p: "Questa pagina è una mappa per orientarsi. Per l'Australia il sistema è l'eVisitor, ed è gratuito.",
      },
      {
        note: "Una regola vale ovunque: si presenta la domanda sul sito del governo, e nessuna agenzia può far arrivare prima la decisione. I siti che chiedono più volte la tariffa ufficiale compilano per Lei lo stesso modulo.",
      },
      { h2: "Australia: eVisitor o ETA" },
      {
        p: `L'eVisitor (subclass 651) è un visto ed è gratuito. Chi ha un passaporto non presente nell'elenco eVisitor usa invece l'ETA (subclass 601), che costa ${F.etaFee} e si richiede nell'app ufficiale. Entrambi consentono visite fino a ${F.stayMonths} mesi e durano ${F.validMonths} mesi.`,
      },
      { h2: "Nuova Zelanda: NZeTA" },
      {
        p: "Un'autorizzazione da ottenere prima del viaggio per i passaporti esenti dal visto, non un visto. Il costo è in due parti: una tassa di domanda e un contributo separato per la tutela ambientale e il turismo, ed è per questo che i totali indicati variano da una fonte all'altra.",
      },
      { h2: "Corea del Sud: K-ETA" },
      {
        p: "⚠️ Al momento molte nazionalità sono temporaneamente esentate dalla K-ETA, quindi la prima domanda è se Le serva davvero, prima ancora di come richiederla.",
      },
      { h2: "Regno Unito: ETA" },
      {
        p: "Copre visite fino a 6 mesi nel Regno Unito, a Jersey, a Guernsey e nell'Isola di Man. GOV.UK ne indica il costo in 20 £. Si richiede tramite il servizio ufficiale.",
      },
      { source: { label: "GOV.UK — Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" } },
      { h2: "Stati Uniti: ESTA, e Canada: eTA" },
      {
        p: "Entrambi i Paesi hanno sistemi analoghi per i viaggiatori esenti dal visto. Qui non indichiamo le loro tariffe, perché mentre scrivevamo questa pagina non siamo riusciti a confrontare le cifre attuali con le fonti ufficiali, e un prezzo superato è peggio di nessun prezzo. Le verifichi direttamente sui siti ufficiali, e solo su quelli.",
      },
      {
        ul: [
          "Stati Uniti: esta.cbp.dhs.gov",
          "Canada: canada.ca (Immigration, Refugees and Citizenship Canada)",
        ],
      },
      { h2: "Gli errori che costano davvero" },
      {
        ul: [
          "Pensare che una sola autorizzazione copra un viaggio in più Paesi. Ogni destinazione è a sé, compreso uno scalo in cui si esce dall'aeroporto.",
          "Pensare che sia un visto. Alcune lo sono, altre no, e la differenza decide che cosa si può fare una volta arrivati.",
          "Pensare che il prezzo sia tutto lì. Diversi sistemi aggiungono un contributo separato o applicano importi diversi a seconda di come si presenta la domanda.",
          "Passare da un intermediario a pagamento credendo che sia più veloce. Il modulo è lo stesso, e anche la decisione.",
        ],
      },
      { h2: "Controlli il Suo passaporto, non un riassunto" },
      {
        p: "Gli elenchi dei Paesi ammessi cambiano, e chi ha due passaporti spesso ottiene due risposte diverse. Ognuno dei sistemi qui sopra pubblica uno strumento di verifica ufficiale. Lo usi per il passaporto con cui viaggerà davvero.",
      },
    ],
  },
];
