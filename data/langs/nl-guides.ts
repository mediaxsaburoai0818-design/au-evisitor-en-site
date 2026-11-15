import { FACTS as F } from "./_schema";
import type { Article } from "./_schema";

/**
 * 英語ページの横展開（2026-11-15）。英語の data/pages.ts にあって nl 版に無かった話題。
 * ⚠️ 数値は F（data/facts.ts）から入れる。本文に直接書かない。
 * ⚠️ 読者＝オランダ旅券の保持者（eVisitor の対象・無料）。敬称は u。
 * ⚠️ 下の定数は F の値をオランダ語の表記にしただけ（桁区切り・小数点）。値は変えない。
 */

/** = F.decisionTypical（表記だけオランダ語） */
const BESLISTIJD = "enkele minuten tot een paar dagen";
/** = F.customsAlcoholLitres（小数点はコンマ） */
const ALCOHOL_L = String(F.customsAlcoholLitres).replace(".", ",");
/** = F.cashReportThreshold / F.biosecurityFine*（桁区切りはピリオド） */
const CASH = F.cashReportThreshold.replace(",", ".");
const BOETE_DAFF = F.biosecurityFineDaff.replace(",", ".");
const BOETE_GEINDEXEERD = F.biosecurityFineIndexed.replace(",", ".");

const ADDED = "2026-11-15";
const CHECKED_1115 = "15 november 2026";

const SRC_EVISITOR = { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" };
const SRC_EVISITOR_F = { label: "Department of Home Affairs — eVisitor (subclass 651)", url: F.officialUrl };
const SRC_ETA = { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" };
const SRC_DUTY = { label: "Australian Border Force / Home Affairs — Duty free concessions", url: "https://www.abf.gov.au/entering-and-leaving-australia/duty-free" };

export const nlGuides: Article[] = [
  {
    slug: "evisitor-landen",
    enSlug: "eligible-passports",
    added: ADDED,
    checked: CHECKED_1115,
    title: `Welke paspoorten komen in aanmerking voor het eVisitor? De ${F.eligibleCountries} landen en wie de ETA gebruikt`,
    description: `Het eVisitor staat open voor burgers van ${F.eligibleCountries} Europese landen. De volledige lijst, de Britse paspoorten die niet meetellen en het verschil met de ETA.`,
    related: ["evisitor-of-eta", "wat-is-evisitor", "transit-via-australie", "evisitor-app"],
    blocks: [
      {
        p: `Of u in aanmerking komt voor het eVisitor (subclass 651), hangt af van uw nationaliteit en het paspoort dat u hebt, niet van waar u woont. Volgens het Department of Home Affairs moet u staatsburger zijn van een van ${F.eligibleCountries} landen en een geldig paspoort van dat land hebben.`,
      },
      { h2: `De ${F.eligibleCountries} eVisitor-landen` },
      {
        p: "Andorra, België, Bulgarije, Cyprus, Denemarken, Duitsland, Estland, Finland, Frankrijk, Griekenland, Hongarije, Ierland, IJsland, Italië, Kroatië, Letland, Liechtenstein, Litouwen, Luxemburg, Malta, Monaco, Nederland, Noorwegen, Oostenrijk, Polen, Portugal, Roemenië, de Republiek San Marino, Slovenië, Slowakije, Spanje, Tsjechië, Vaticaanstad, het Verenigd Koninkrijk (British Citizen), Zweden en Zwitserland.",
      },
      { h2: "Paspoorten die niet in aanmerking komen" },
      {
        ul: [
          "Voor het Verenigd Koninkrijk staan alleen British Citizen-paspoorten op de lijst",
          "Paspoorten van het type British National (Overseas), British Dependent Territories Citizen, British Overseas Citizen, British Protected Person en British Subject kunt u niet gebruiken",
          "Een paspoort voor niet-staatsburgers (non-citizen passport), een certificate of identity of een ander reisdocument zoals een Titre de Voyage kunt u niet gebruiken",
          "Voor Vaticaanstad moet uit het paspoort blijken dat u onderdaan bent van Vaticaanstad (de Heilige Stoel)",
        ],
      },
      { h2: "Staat uw paspoort niet op de lijst?" },
      {
        p: `De ETA (subclass 601) heeft een eigen lijst van ${F.etaEligibleCountries} paspoorten. Daarop staan onder meer Brunei, Canada, Hongkong (SAR van China), Japan, Maleisië, Singapore, Zuid-Korea, Taiwan (behalve dienst- en diplomatieke paspoorten), de Verenigde Staten en het Verenigd Koninkrijk — British National (Overseas). De ETA kost ${F.etaFee} aan servicekosten in de app. Houders van andere paspoorten komen mogelijk in aanmerking voor een bezoekersvisum (Visitor visa, subclass 600).`,
      },
      { h2: "Paspoorten die op beide lijsten staan" },
      {
        p: `Volgens onze vergelijking van de twee officiële lijsten staan ${F.bothListsCountries} paspoorten op beide. De overige ${F.eligibleCountries - F.bothListsCountries} eVisitor-landen staan niet op de ETA-lijst: Bulgarije, Kroatië, Cyprus, Tsjechië, Estland, Hongarije, Letland, Litouwen, Polen, Roemenië, Slowakije en Slovenië. Voor paspoorten op beide lijsten vermeldt de ETA-pagina dat houders van een Europees paspoort „mogelijk in aanmerking komen” (may be eligible) voor het eVisitor, en dat de aanvraag daarvan gratis is.`,
      },
      { h2: "Wanneer Home Affairs naar een ander visum verwijst" },
      {
        ul: [
          "Een strafrechtelijke veroordeling, in welk land dan ook: Home Affairs zegt dat u dan een bezoekersvisum (subclass 600) moet aanvragen, en dat inreizen met een eVisitor terwijl u een veroordeling hebt tot weigering van de toegang kan leiden",
          "Een opleiding of stage in een kinderdagverblijf, een studie tot arts, tandarts, verpleegkundige of ambulancemedewerker (paramedic), of toegang tot een zorg- of ziekenhuisomgeving: vraag het bezoekersvisum (subclass 600) aan en onderga de gezondheidsonderzoeken",
          "Australische staatsburgers kunnen geen eVisitor of ETA aanvragen, ook niet als ze daarnaast een paspoort hebben dat in aanmerking komt — zij hebben geen visum nodig om Australië in te reizen",
          "Gezinnen: elk gezinslid heeft een eigen aanvraag nodig, ook kinderen die in het paspoort van een ouder zijn bijgeschreven",
        ],
      },
      { source: SRC_EVISITOR },
      { source: SRC_ETA },
      {
        note: "De lijsten kunnen veranderen. Controleer vóór uw aanvraag de officiële pagina voor het paspoort waarmee u daadwerkelijk reist.",
      },
    ],
    faq: [
      {
        q: "Ik heb een British National (Overseas)-paspoort. Kan ik een eVisitor krijgen?",
        a: "Nee. BN(O)-paspoorten zijn uitgesloten van het eVisitor. Het BN(O)-paspoort staat wel op de lijst van de ETA (subclass 601).",
      },
      {
        q: "Ik woon in Nederland, maar heb geen Europees paspoort. Kom ik in aanmerking?",
        a: "Nee. Voor het eVisitor moet u staatsburger zijn van een van de genoemde landen en een geldig paspoort van dat land hebben. Waar u woont, verandert daar niets aan.",
      },
    ],
  },
  {
    slug: "veelgemaakte-fouten",
    enSlug: "common-mistakes",
    added: ADDED,
    checked: CHECKED_1115,
    title: "Fouten bij het eVisitor: waar het Department of Home Affairs zelf voor waarschuwt",
    description: "Verkeerd gespelde namen, de verkeerde datumnotatie, aanvragen vanuit Australië, boeken vóór de toekenning: de eVisitor-fouten waarvoor Home Affairs waarschuwt.",
    related: ["paspoort-en-gegevens", "evisitor-geweigerd", "evisitor-stap-voor-stap-aanvragen", "officiele-website"],
    blocks: [
      {
        p: "Het eVisitor is gratis en meestal snel geregeld, en juist daardoor gaat het makkelijk te snel. Het Department of Home Affairs noemt zelf de punten die u moet controleren. Alles hieronder komt van de eVisitor-pagina van het Department.",
      },
      { h2: "Voordat u de aanvraag indient" },
      {
        ul: [
          "Uw naam is gespeld zoals in uw paspoort, inclusief eventuele tweede voornamen (middle name), en is niet automatisch gecorrigeerd door uw telefoon of computer",
          "Uw paspoort is van een van de landen die in aanmerking komen voor het eVisitor",
          "Uw geboortedatum is ingevuld in de notatie dd/mm/yy (dag/maand/jaar)",
          "Uw e-mailadres is correct ingevuld",
        ],
      },
      {
        p: "Home Affairs waarschuwt dat u vertraging kunt oplopen of de toegang tot Australië geweigerd kunt krijgen als een visum met onjuiste gegevens is verleend.",
      },
      { h2: "Aanvragen vanaf de verkeerde plek" },
      {
        p: "U moet buiten Australië zijn als u de aanvraag indient, en ook buiten Australië als er over de aanvraag wordt beslist.",
      },
      { h2: "Boeken vóór de toekenning" },
      {
        p: "Home Affairs zegt dat u geen reis naar Australië moet regelen voordat het Department u schriftelijk heeft laten weten dat het visum is verleend.",
      },
      { h2: "Wachten op een e-mail die niet komt" },
      {
        p: "Komt er binnen 12 uur na uw aanvraag geen e-mail, controleer dan de status van uw aanvraag in ImmiAccount.",
      },
      { h2: "Een veroordeling weglaten" },
      {
        p: "Hebt u in welk land dan ook een strafrechtelijke veroordeling, dan zegt Home Affairs dat u in plaats daarvan een bezoekersvisum (subclass 600) moet aanvragen. Vraagt u toch een eVisitor aan, dan moet u alle strafbare feiten opgeven en elke vraag naar waarheid beantwoorden.",
      },
      { h2: "Fouten tijdens het verblijf" },
      {
        ul: [
          "Werken: het eVisitor is geen werkvisum. Betaald werk voor een Australische werkgever is niet toegestaan, en werken of het voornemen om te werken kan tot intrekking van het visum leiden",
          "Aannemen dat een rondvaart die in Australië begint en eindigt uw verblijfsduur opnieuw laat ingaan: volgens Home Affairs is dat niet zo",
          "Lange of frequente verblijven: bij uw volgende aankomst kunnen u vragen worden gesteld over het doel van uw reis, en het visum kan worden ingetrokken als blijkt dat u geen echte bezoeker bent",
          "Blijven nadat het visum is vervallen, zonder ander visum: u verblijft dan onrechtmatig in Australië (unlawful non-citizen) en kunt worden uitgezet",
        ],
      },
      { h2: "Als u eigenlijk een ETA aanvraagt" },
      {
        p: "Reist u met een paspoort dat onder de ETA valt, bijvoorbeeld van een tweede nationaliteit, let dan op drie punten van de ETA-pagina: de gegevens van de ETA moeten exact overeenkomen met het paspoort, en Home Affairs kan ze na afgifte niet meer wijzigen; een nieuw paspoort beëindigt de ETA en vraagt om een nieuwe aanvraag; en na een doorverwijzing (referral) leveren nieuwe ETA-aanvragen in de app hetzelfde resultaat op.",
      },
      { source: SRC_EVISITOR },
      { source: SRC_ETA },
      {
        note: "Veranderen uw telefoonnummer, e-mailadres, adres of paspoort nadat u hebt aangevraagd, dan vraagt de eVisitor-pagina u dat aan het Department door te geven. Volg de stappen op die pagina.",
      },
    ],
  },
  {
    slug: "transit-via-australie",
    enSlug: "transit",
    added: ADDED,
    checked: CHECKED_1115,
    title: `Overstappen in Australië: de ${F.twovHours}-urenregel en het Transit visa`,
    description: `Ook bij een overstap hebt u een visum of toestemming nodig. Wanneer uw eVisitor volstaat, de ${F.twovHours}-urenregel zonder visum en het Transit visa van ${F.transitVisaHours} uur.`,
    related: ["evisitor-landen", "vloeistoffen-handbagage", "luchthavens-sydney-melbourne-brisbane", "evisitor-of-eta"],
    blocks: [
      {
        p: "Volgens het Department of Home Affairs hebben alle niet-Australiërs een visum of toestemming nodig om Australië in te reizen, ook wie er maar kort is of overstapt zonder de luchthaven te verlaten. Die toestemming kan op drie manieren geregeld zijn.",
      },
      { h2: "1. U hebt al een eVisitor (of komt ervoor in aanmerking)" },
      {
        p: "Home Affairs noemt het eVisitor, de ETA, het Visitor visa en de APEC Business Travel Card onder de visa waarmee u via Australië mag reizen; daarmee mag u bovendien langer blijven. Hoort bij uw reis een tussenstop in Australië, dan is die met een eVisitor gedekt.",
      },
      { h2: "2. Overstappen zonder visum (TWOV)" },
      {
        p: "U mag alleen zonder visum overstappen als aan al deze voorwaarden is voldaan:",
      },
      {
        ul: [
          "U komt per vliegtuig in Australië aan",
          `U hebt een bevestigd ticket om Australië binnen ${F.twovHours} uur na aankomst per vliegtuig te verlaten naar een derde land`,
          "U hebt een geldig reisdocument voor het land waar u naartoe gaat",
          "U hoeft vóór uw doorgaande vlucht om geen enkele reden door de immigratiecontrole te gaan of de transitruimte te verlaten",
          "U hebt een paspoort van een land dat op de TWOV-lijst staat",
        ],
      },
      {
        p: "Volgens onze vergelijking van de twee officiële lijsten staat elk land van de eVisitor-lijst ook op de TWOV-lijst, die daarnaast nog andere landen omvat. Home Affairs vermeldt dat deze informatie niet geldt voor staatlozen en vluchtelingen.",
      },
      { h2: "Wanneer u toch door de immigratiecontrole moet" },
      {
        p: "Home Affairs noemt het ophalen en overzetten van bagage, en een doorgaande vlucht vanaf een andere terminal, als veelvoorkomende redenen waarom u door de immigratiecontrole moet — en daarvoor hebt u een visum nodig. Weet u nog steeds niet zeker of u zonder visum mag overstappen, dan raadt Home Affairs aan voor de zekerheid een visum aan te vragen.",
      },
      { h2: "3. Transit visa (subclass 771)" },
      {
        ul: [
          `Voor een doorreis door Australië van maximaal ${F.transitVisaHours} uur`,
          "Gratis",
          "Elke reiziger heeft een eigen aanvraag nodig, ook baby's die in het paspoort van een ouder staan",
          "U moet buiten Australië zijn als u aanvraagt en als er over de aanvraag wordt beslist",
        ],
      },
      {
        note: "Home Affairs waarschuwt dat de toekenning van een Transit visa waarschijnlijk een ander Australisch visum dat u al hebt beëindigt. Een eVisitor geeft al toestemming om over te stappen.",
      },
      { source: { label: "Department of Home Affairs — Transit visa (subclass 771)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771" } },
      { source: { label: "Department of Home Affairs — Travellers eligible to transit without a visa", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771/travellers-eligible-to-transit-without-visa" } },
      { source: { label: "Department of Home Affairs — Transit facilities at Australian airports", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771/transit-facilities-at-australian-airports" } },
    ],
    faq: [
      {
        q: "Mijn overstap in Sydney duurt 10 uur. Kan ik overstappen zonder visum?",
        a: `Niet onder TWOV: daarvoor moet uw doorgaande vlucht binnen ${F.twovHours} uur na aankomst vertrekken en bevestigd zijn. U hebt een visum nodig — een eVisitor als uw paspoort in aanmerking komt, of een Transit visa (subclass 771).`,
      },
      {
        q: "Heeft elke luchthaven een transitruimte?",
        a: "Home Affairs publiceert een pagina over de transitvoorzieningen op Australische luchthavens. Kijk daar en bij uw luchtvaartmaatschappij voor de luchthaven die u gebruikt.",
      },
    ],
  },
  {
    slug: "evisitor-app",
    enSlug: "australian-eta-app",
    added: ADDED,
    checked: CHECKED_1115,
    title: "Is er een eVisitor-app? Nee — de Australian ETA-app is alleen voor de ETA",
    description: `Het eVisitor vraagt u online aan in ImmiAccount. De Australian ETA-app is alleen voor de ETA (subclass 601) en kost ${F.etaFee} aan servicekosten.`,
    related: ["evisitor-of-eta", "evisitor-stap-voor-stap-aanvragen", "officiele-website", "evisitor-landen"],
    blocks: [
      {
        p: "Er bestaat geen app voor het eVisitor. Volgens de eVisitor-uitleg van Home Affairs vraagt u online aan, via ImmiAccount, en controleert u daar ook de status van uw aanvraag. De overheidsapp die u in de appwinkels kunt tegenkomen — de Australian ETA-app — is voor een ander visum: de Electronic Travel Authority (subclass 601).",
      },
      { h2: "Wie de Australian ETA-app moet gebruiken" },
      {
        p: `Home Affairs stelt dat u de Australian ETA-app moet gebruiken om een ETA aan te vragen als u een paspoort hebt dat voor de ETA in aanmerking komt. Voor de ETA geldt geen visumbijdrage, maar wel niet-restitueerbare servicekosten van ${F.etaFee} voor het gebruik van de app. Kunt u de app niet gebruiken, dan kunt u volgens Home Affairs via ImmiAccount een ander passend visum aanvragen, en komen houders van een Europees paspoort mogelijk in aanmerking voor een eVisitor, waarvoor geen aanvraagkosten gelden.`,
      },
      { h2: "Over de app" },
      {
        ul: [
          "Uitgever: Department of Home Affairs (in de App Store vermeld als verkoper)",
          "Gratis te downloaden in de Apple App Store en Google Play; de App Store vermeldt iOS 17.6 of hoger",
          "U hebt nodig: een telefoon met camera, NFC ingeschakeld, locatievoorzieningen ingeschakeld, een geldig e-mailadres en een betaalmiddel voor de servicekosten",
        ],
      },
      { h2: "Wat u in de app doet" },
      {
        ul: [
          "U scant uw paspoort, zodat uw naam, geboortedatum, paspoortnummer en andere gegevens vooraf worden ingevuld",
          "U maakt op dezelfde telefoon een live foto van uzelf; de foto wordt automatisch genomen zodra het ovaal op het scherm groen wordt",
          "U beantwoordt de vragen, betaalt de servicekosten en dient de aanvraag in",
          "Gezinsleden die op hetzelfde toestel aanvragen, kunnen tegelijk indienen en betalen",
          "Iemand mag u helpen met de aanvraag, maar moet dan fysiek bij u zijn",
          "Met de functie „Visa check” in de app ziet u de status van uw aanvraag",
        ],
      },
      { source: SRC_ETA },
      { source: SRC_EVISITOR },
      { source: { label: "Department of Home Affairs — ETA and AIA video guides", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/eta-and-aia-video-guides" } },
      { source: { label: "App Store — AustralianETA", url: "https://apps.apple.com/au/app/australianeta/id1527982364" } },
      { source: { label: "Google Play — AustralianETA", url: "https://play.google.com/store/apps/details?id=au.gov.homeaffairs.eta" } },
      {
        note: `Met een Nederlands paspoort — of een ander paspoort op de eVisitor-lijst — hebt u de app niet nodig. U vraagt aan in ImmiAccount, waar het eVisitor ${F.fee} kost.`,
      },
    ],
  },
  {
    slug: "officiele-website",
    enSlug: "official-site",
    added: ADDED,
    checked: CHECKED_1115,
    title: "De officiële eVisitor-website is ImmiAccount: zo herkent u die en voorkomt u oplichting",
    description: "Home Affairs noemt ImmiAccount de enige officiële website voor Australische visumaanvragen. De officiële adressen en de waarschuwingen tegen oplichting.",
    related: ["evisitor-stap-voor-stap-aanvragen", "evisitor-kosten", "evisitor-status-controleren", "veelgemaakte-fouten"],
    blocks: [
      {
        p: "Het Department of Home Affairs omschrijft ImmiAccount als zijn immigratieportaal en als „de enige officiële website om te gebruiken als u een Australisch visum aanvraagt” (the only official website to use when applying for an Australian visa). Het aanvraagformulier voor het eVisitor staat in ImmiAccount.",
      },
      { h2: "De officiële adressen" },
      {
        ul: [
          "Informatie over het eVisitor: immi.homeaffairs.gov.au",
          "Inloggen en aanvragen in ImmiAccount: online.immi.gov.au",
          "De Australian ETA-app (alleen voor de ETA): uitgegeven door het Department of Home Affairs",
        ],
      },
      { h2: "Wat de officiële weg kost" },
      {
        p: "Home Affairs schrijft: „The eVisitor is free.” Op de officiële website betaalt u geen aanvraagkosten.",
      },
      { h2: "Waarschuwingen van Home Affairs tegen oplichting" },
      {
        ul: [
          "Een e-mail die van het Department of Home Affairs lijkt te komen, maar waarvan het adres niet eindigt op .gov.au, is oplichting",
          "Vraagt iemand extra geld om uw visum te laten afgeven (soms een „CIS charge” genoemd), ga er dan niet op in — de Australische overheid rekent geen extra kosten voor het afgeven van visa",
          "Wie weigert u uw aanvraag in ImmiAccount te laten controleren, houdt iets voor u verborgen",
          "Een toekenningsbrief voor een visum dat u niet terugvindt in VEVO (Visa Entitlement Verification Online) is waarschijnlijk vals",
          "Medewerkers van Home Affairs maken zich aan de telefoon altijd bekend en vragen nooit om creditcardgegevens of wachtwoorden",
          "Heb alleen contact via officiële kanalen van de Australische overheid: de website van Home Affairs, de Australian Biometric Collection Centres, of de Australische ambassade, het High Commission of het consulaat in uw land",
        ],
      },
      { h2: "Als iemand anders voor u aanvraagt" },
      {
        p: "Een ImmiAccount kan worden aangemaakt door de aanvrager zelf, door een familielid namens de aanvrager of door een vriend die helpt met de aanvraag. Home Affairs stelt dat het in Australië verboden is om tegen betaling hulp bij immigratiezaken te verlenen, tenzij u een geregistreerde migratieagent (registered migration agent) of Australische advocaat (Australian legal practitioner) bent, en dat u zelf verantwoordelijk blijft voor het controleren van de visumvoorwaarden, ook als iemand anders de aanvraag indient.",
      },
      { source: { label: "Department of Home Affairs — How to avoid being scammed", url: "https://immi.homeaffairs.gov.au/help-support/visa-scams/what-you-need-to-know" } },
      { source: { label: "Department of Home Affairs — Visa scams", url: "https://immi.homeaffairs.gov.au/help-support/visa-scams" } },
      { source: { label: "Department of Home Affairs — Applying online in ImmiAccount", url: "https://immi.homeaffairs.gov.au/help-support/applying-online-or-on-paper/online" } },
      { source: { label: "Department of Home Affairs — Who can help with your application", url: "https://immi.homeaffairs.gov.au/help-support/who-can-help-with-your-application/overview" } },
      { source: SRC_EVISITOR },
      {
        note: "Deze site is een onafhankelijke gids, geen overheidswebsite. Wij nemen geen aanvragen en geen betalingen aan.",
      },
    ],
  },
  {
    slug: "drie-maanden-per-bezoek",
    enSlug: "three-months-per-visit",
    added: ADDED,
    title: `Zo werkt de grens van ${F.stayMonths} maanden per bezoek met een eVisitor`,
    description: `Het eVisitor is ${F.validMonths} maanden geldig, maar elk bezoek is beperkt tot ${F.stayMonths} maanden. Dat zijn twee aparte termijnen, en wie ze door elkaar haalt, plant verkeerd.`,
    related: ["aankomst-in-australie", "feestdagen-australie", "autorijden-in-australie", "uitreizen-en-terugkomen"],
    blocks: [
      {
        p: `Een eVisitor is ${F.validMonths} maanden geldig vanaf de datum van verlening, en in die periode mag u zo vaak inreizen als u wilt. Wat het u niet geeft, is ${F.validMonths} maanden aaneengesloten verblijf in Australië. Elk afzonderlijk bezoek is beperkt tot ${F.stayMonths} maanden.`,
      },
      { h2: "Twee klokken, niet één" },
      {
        ul: [
          `Geldigheid van het visum — ${F.validMonths} maanden, gerekend vanaf de datum van verlening, niet vanaf uw eerste inreis`,
          `Verblijf per bezoek — ${F.stayMonths} maanden, gerekend vanaf elke aankomst`,
          "Inreizen — meerdere keren, zolang het visum geldig is",
        ],
      },
      {
        p: `Een visum dat in januari is verleend, verloopt dus in januari van het jaar daarna, of u het nu gebruikt hebt of niet. Komt u in december aan, dan mag u nog steeds ${F.stayMonths} maanden blijven, maar na het verlopen van het visum kunt u niet opnieuw inreizen.`,
      },
      { h2: `Wat de ${F.stayMonths} maanden niet dekken` },
      {
        ul: [
          "Werken voor een Australische werkgever",
          `Studeren langer dan ${F.studyMonths} maanden`,
          "Een recht op toegang — daarover beslist de ambtenaar aan de grens",
        ],
      },
      { source: SRC_EVISITOR },
      {
        note: `Opnieuw aanvragen vanuit Australië is niet hoe het eVisitor werkt. Hebt u in één keer meer dan ${F.stayMonths} maanden nodig, kijk dan vóór uw reis naar een Visitor visa (subclass 600).`,
      },
    ],
  },
  {
    slug: "uitreizen-en-terugkomen",
    enSlug: "leaving-and-returning",
    added: ADDED,
    title: `Krijgt u na uitreizen en terugkomen opnieuw ${F.stayMonths} maanden in Australië?`,
    description: `Elke inreis laat de termijn van ${F.stayMonths} maanden opnieuw ingaan, maar bezoeken kort na elkaar roepen vragen op, en de grensambtenaar kan u de toegang weigeren.`,
    related: ["aankomst-in-australie", "evisitor-geldigheid-en-verblijf", "belastingteruggave-trs", "vloeistoffen-handbagage"],
    blocks: [
      {
        p: `Bij elke aankomst begint een nieuwe periode van maximaal ${F.stayMonths} maanden. Een reisje naar Nieuw-Zeeland of Bali en terug laat de termijn per bezoek dus opnieuw ingaan, zolang uw visum nog geldig is.`,
      },
      { h2: "Maar het blijft een bezoekersvisum" },
      {
        p: "Het eVisitor wordt verleend op basis van het feit dat u op bezoek komt. Wie negen van de twaalf maanden in Australië doorbrengt en telkens maar kort vertrekt, is geen bezoeker meer, maar woont er feitelijk op een bezoekersvisum. Grensambtenaren kijken naar het patroon in uw hele reisgeschiedenis, niet alleen naar de huidige inreis.",
      },
      { h2: "Wat u bij een nieuwe inreis kan worden gevraagd" },
      {
        ul: [
          "Een ticket voor een doorreis of terugreis",
          "Voldoende geld om in uw verblijf te voorzien",
          "Bewijs dat u weer naar huis gaat: werk, studie, een huurcontract, familie",
          "Een reden waarom u zo snel terugkomt",
        ],
      },
      { h2: "Als u de toegang wordt geweigerd" },
      {
        p: "Een geldig visum geeft toestemming om te reizen, geen garantie op toegang. Is een ambtenaar er niet van overtuigd dat u een echte bezoeker bent, dan kan het visum aan de grens worden ingetrokken en kunt u met de eerstvolgende vlucht worden teruggestuurd. Die registratie speelt daarna mee bij toekomstige aanvragen.",
      },
      { source: SRC_EVISITOR },
      {
        note: `Uw eVisitor werkt niet meer zodra het verloopt: ${F.validMonths} maanden na de verlening. Controleer de datum van verlening voordat u een terugreis boekt aan het einde van die periode.`,
      },
    ],
  },
  {
    slug: "vragen-bij-aankomst",
    enSlug: "border-questions",
    added: ADDED,
    title: "Wat u wordt gevraagd bij aankomst in Australië",
    description: "Immigratie, douane en biosecurity zijn drie aparte controles, elk met eigen vragen. Wie weet welke welke is, staat veel korter in de rij.",
    related: ["aankomst-in-australie", "smartgate-australie", "medicijnen-meenemen", "biosecurity-australie"],
    blocks: [
      {
        p: "Aankomende passagiers gaan door drie controles, niet één. Ze worden uitgevoerd door verschillende instanties, die op verschillende dingen letten. Wie de vraag van de ene controle met het antwoord voor de andere beantwoordt, loopt vertraging op.",
      },
      { h2: "1. Immigratie — bent u een echte bezoeker" },
      {
        ul: [
          "Hoe lang u blijft en waar",
          "Of u een ticket voor een doorreis of terugreis hebt",
          "Hoe u de reis betaalt",
          "Of u van plan bent te werken — met dit visum mag dat niet",
        ],
      },
      { h2: "2. Douane — bent u invoerrechten verschuldigd" },
      {
        p: `U moet goederen aangeven die boven de belastingvrije vrijstelling uitkomen, en contant geld vanaf de meldgrens. De vrijstelling is ${F.customsGoodsAllowance} aan algemene goederen als u ${F.customsAgeMin} jaar of ouder bent (${F.customsGoodsAllowanceMinor} als u jonger bent).`,
      },
      { h2: "3. Biosecurity — wat zit er in uw tas" },
      {
        p: "Dit is de controle waarbij onvoorbereide reizigers tegen de lamp lopen. Australië vraagt naar voedsel, plantaardig en dierlijk materiaal, en alles wat in aanraking is geweest met aarde of zoet water. Aangeven kost u niets; niet aangeven kan u uw visum kosten.",
      },
      { h2: "De Incoming Passenger Card" },
      {
        p: "Uw antwoorden voor douane en biosecurity geeft u op de Incoming Passenger Card, die u invult vóór de landing. Neem die serieus: de kaart is een wettelijke verklaring, en een ambtenaar die een niet-aangegeven artikel in uw tas vindt, ziet de kaart als bewijs dat u verklaarde niets bij u te hebben.",
      },
      { source: SRC_DUTY },
      {
        note: "Twijfelt u of iets aangegeven moet worden, kruis dan ja aan en laat de ambtenaar beslissen. Er staat geen straf op het aangeven van iets dat achteraf toegestaan blijkt.",
      },
    ],
  },
  {
    slug: "biosecurity-australie",
    enSlug: "biosecurity",
    added: ADDED,
    title: "Biosecurity in Australië: wat u moet aangeven en waarom uw visum kan worden ingetrokken",
    description: `Niet-aangegeven biosecurity-goederen kunnen een boete van maximaal ${F.biosecurityPenaltyUnits} penalty units opleveren — en voor visumhouders intrekking en ${F.visaCancelExclusionYears} jaar uitsluiting.`,
    related: ["aankomst-in-australie", "medicijnen-meenemen", "smartgate-australie", "vragen-bij-aankomst"],
    blocks: [
      {
        p: "Australië is een eiland met een landbouw die het wil beschermen. De biosecurityregels zijn daarom streng, en ze worden op de luchthaven gehandhaafd, niet achteraf op een kantoor. Reizigers die de verklaring als formaliteit behandelen, zijn degenen die worden betrapt.",
      },
      { h2: "De boete" },
      {
        p: `Een boete (infringement notice) voor niet-aangegeven goederen kan oplopen tot ${F.biosecurityPenaltyUnits} penalty units. Let op: het dollarbedrag van een penalty unit is wettelijk vastgelegd en wordt periodiek verhoogd. De pagina van het ministerie noemt ${BOETE_DAFF} voor ${F.biosecurityPenaltyUnits} units, terwijl de aankondiging van de minister over de indexering van 2023 dezelfde ${F.biosecurityPenaltyUnits} units op ${BOETE_GEINDEXEERD} zette. Controleer het actuele bedrag op de officiële pagina voordat u ervan uitgaat.`,
      },
      { h2: "Voor visumhouders is de boete niet het ergste" },
      {
        p: `Reizigers die een boete krijgen, kunnen worden doorverwezen voor intrekking van hun visum. Een ingetrokken visum betekent verwijdering uit Australië met de eerst beschikbare vlucht, en een uitsluitingsperiode van ${F.visaCancelExclusionYears} jaar voordat u opnieuw kunt aanvragen.`,
      },
      { h2: "Waar mensen in de praktijk op worden betrapt" },
      {
        ul: [
          "Voedsel van elke soort — ook snacks die in het vliegtuig zijn uitgedeeld",
          "Vlees, zuivel, eieren, honing en alles waar die in zitten",
          "Vers fruit en verse groente, zaden, noten",
          "Plantaardig materiaal — houten voorwerpen, gevlochten artikelen, bloemen",
          "Wandelschoenen, tenten en sportspullen met aarde of plantenresten eraan",
          "Alles wat in de buurt van dieren of in zoet water is gebruikt",
        ],
      },
      { h2: "Voordat u inpakt" },
      {
        ul: [
          "Maak schoenen en uitrusting thuis schoon, niet in de rij",
          "Eet voedsel op of gooi het weg vóór de landing",
          "Geef houten en gevlochten souvenirs aan — het zijn risicogoederen, geen curiosa",
        ],
      },
      { source: { label: "Department of Agriculture, Fisheries and Forestry — Infringement notices at the airport", url: "https://www.agriculture.gov.au/biosecurity-trade/policy/legislation/compliance/infringement-notice-scheme/infringement-notices-at-the-airport" } },
      {
        note: "Vóór de biosecuritycontrole staan afvalbakken. Die gebruiken is gratis. Met het artikel worden aangetroffen nadat u „nee” hebt verklaard, is dat niet.",
      },
    ],
  },
  {
    slug: "douane-vrijstellingen",
    enSlug: "customs-allowances",
    added: ADDED,
    title: "Belastingvrije vrijstellingen in Australië: goederen, alcohol, tabak",
    description: `Volwassenen mogen ${F.customsGoodsAllowance} aan algemene goederen, ${ALCOHOL_L} liter alcohol en ${F.customsTobaccoGrams} gram tabak belastingvrij meenemen. Wat daarboven komt, moet u aangeven.`,
    related: ["aankomst-in-australie", "geld-en-fooi", "belastingteruggave-trs", "roken-vapen-alcohol"],
    blocks: [
      {
        p: "De douane is een andere controle dan biosecurity. Biosecurity kijkt of een artikel een risico is voor Australië; de douane kijkt of er invoerrechten en belasting over verschuldigd zijn. U kunt door de ene controle komen en bij de andere worden tegengehouden.",
      },
      { h2: "De vrijstellingen" },
      {
        ul: [
          `Algemene goederen: ${F.customsGoodsAllowance} als u ${F.customsAgeMin} jaar of ouder bent, ${F.customsGoodsAllowanceMinor} als u jonger bent dan ${F.customsAgeMin}`,
          `Alcohol: ${ALCOHOL_L} liter, vanaf ${F.customsAgeMin} jaar`,
          `Tabak: ${F.customsTobaccoGrams} gram in welke vorm ook, plus één aangebroken pakje, vanaf ${F.customsAgeMin} jaar`,
        ],
      },
      { h2: "Waar mensen zich in vergissen" },
      {
        ul: [
          "Taxfree-aankopen op de heenreis tellen gewoon mee voor de vrijstelling",
          "Cadeaus tellen mee — het gaat om de waarde van wat u bij u hebt, niet om wat u voor uzelf hebt gekocht",
          "Gezinnen kunnen hun vrijstellingen niet altijd samenvoegen zoals ze denken; controleer dat voordat u erop rekent",
        ],
      },
      { h2: "Als u boven de grens zit" },
      {
        p: "Geef het aan en laat een aankoopbewijs zien, zodat invoerrechten en belasting kunnen worden berekend. Wie goederen boven de vrijstelling niet aangeeft, riskeert boetes, vervolging of intrekking van het visum. Aangeven betekent alleen dat u betaalt wat verschuldigd is.",
      },
      { source: SRC_DUTY },
      {
        note: `Ook voor geld geldt aan de grens een meldplicht: contant geld en betaalmiddelen zoals reischeques met een totale waarde van ${CASH} of meer moet u aangeven — zie de pagina over geld voor hoe dat werkt.`,
      },
    ],
  },
  {
    slug: "werken-en-studeren",
    enSlug: "working-and-studying",
    added: ADDED,
    title: `Wat niet mag met een eVisitor: werken, en studeren langer dan ${F.studyMonths} maanden`,
    description: `Het eVisitor is een bezoekersvisum. Werken voor een Australische werkgever mag niet, en studeren is beperkt tot ${F.studyMonths} maanden.`,
    related: ["aankomst-in-australie", "zorg-voor-bezoekers", "wat-is-evisitor"],
    blocks: [
      {
        p: `Omdat het eVisitor gratis is en snel wordt verleend, zien mensen het soms als een lichte toestemming om ${F.stayMonths} maanden lang te doen wat ze willen. Dat is het niet. Het is een bezoekersvisum met voorwaarden, en die voorwaarden worden gehandhaafd.`,
      },
      { h2: "Werken" },
      {
        p: "U mag niet werken voor een Australische werkgever. Zakelijke bezoekactiviteiten zijn iets anders dan werken: vergaderingen bijwonen, onderhandelen of naar een congres gaan mag in het algemeen wel; door een Australisch bedrijf betaald worden om een klus te doen niet.",
      },
      { h2: "Op afstand werken voor een werkgever buiten Australië" },
      {
        p: "Op afstand werken voor uw bestaande werkgever in het buitenland is een grijs gebied dat van de omstandigheden afhangt, en het is niet aan een vergelijkingssite om daarover voor u te beslissen. Hangt uw reis van het antwoord af, vraag het dan na bij het Department of Home Affairs voordat u boekt.",
      },
      { h2: "Studeren" },
      {
        p: `Studeren is beperkt tot ${F.studyMonths} maanden. Een korte cursus mag; een semester niet. Voor een langere studie hebt u een studentenvisum nodig, dat u aanvraagt voordat u vertrekt.`,
      },
      { h2: "Waarom dit zwaarder weegt dan het lijkt" },
      {
        p: `Het overtreden van een visumvoorwaarde kan leiden tot intrekking, verwijdering en een uitsluitingsperiode van maximaal ${F.visaCancelExclusionYears} jaar. Wat een vergissing hier kost, is niet de boete, maar dat u niet meer terug kunt komen.`,
      },
      { source: SRC_EVISITOR },
    ],
  },
  {
    slug: "paspoort-en-gegevens",
    enSlug: "passport-and-details",
    added: ADDED,
    title: "Uw eVisitor hangt aan één paspoort — vul de gegevens precies goed in",
    description: "Het eVisitor hangt aan het paspoort waarmee u aanvroeg. Een nieuw paspoort dat niet bij Home Affairs is bijgewerkt, een afwijkende naam of de verkeerde nationaliteit kan u tegenhouden bij het inchecken.",
    related: ["veelgemaakte-fouten", "nieuw-paspoort-na-toekenning", "evisitor-documenten"],
    blocks: [
      {
        p: "Er is geen sticker en geen afdruk die ertoe doet. Het eVisitor bestaat als registratie die aan een paspoortnummer is gekoppeld, en de luchtvaartmaatschappij controleert die registratie bij het inchecken. Is het paspoort in uw hand niet het paspoort uit de registratie, dan kunt u net zo goed geen visum hebben.",
      },
      { h2: "Een nieuw paspoort moet vóór de reis gekoppeld zijn" },
      {
        p: `Vernieuwt u uw paspoort, dan gaat uw bestaande eVisitor niet vanzelf mee, ook al valt het misschien nog binnen de ${F.validMonths} maanden. Werk vóór uw reis uw paspoortgegevens bij in ImmiAccount: volgens Home Affairs wordt het nieuwe paspoort binnen 3 werkdagen aan uw bestaande visum gekoppeld (14 dagen als u het webformulier New Passport Details moet gebruiken).`,
      },
      { source: { label: "Department of Home Affairs — You have a new passport", url: "https://immi.homeaffairs.gov.au/change-in-situation/passport-details" } },
      { h2: "Vul uw gegevens in precies zoals ze erin staan" },
      {
        ul: [
          "Namen zoals ze in de machineleesbare zone staan, niet zoals u ze gewoonlijk schrijft",
          "Letters met accenten of andere tekens getranslitereerd zoals het paspoort dat doet",
          "Het paspoortnummer teken voor teken gecontroleerd — 0 en O, 1 en I",
          "De nationaliteit zoals die in het paspoort staat, niet het land waar u woont",
        ],
      },
      { h2: "Dubbele nationaliteit" },
      {
        p: "Reis met het paspoort waaraan uw eVisitor is gekoppeld. Een tweede nationaliteit die niet in aanmerking komt voor het eVisitor sluit u niet uit, maar bij het inchecken het verkeerde paspoort laten zien wel.",
      },
      { source: SRC_EVISITOR },
      {
        note: `Aanvragen kost ${F.fee}. Een website die geld vraagt om een eVisitor voor u in te dienen, is een derde partij die er een eigen marge op zet, geen officieel kanaal.`,
      },
    ],
  },
  {
    slug: "evisitor-geweigerd",
    enSlug: "if-your-application-is-refused",
    added: ADDED,
    title: "Wat gebeurt er als uw eVisitor-aanvraag wordt geweigerd?",
    description: "Een weigering bepaalt wat u daarna moet doen. Wat u controleert, wat u beter niet doet, en waarom direct opnieuw aanvragen meestal de verkeerde stap is.",
    related: ["veelgemaakte-fouten", "evisitor-of-eta", "evisitor-landen"],
    blocks: [
      {
        p: `De meeste eVisitor-aanvragen worden beslist in ${BESLISTIJD}. Komt de uwe terug met een weigering, dan is het belangrijkste dat u eerst begrijpt waarom, voordat u iets anders doet.`,
      },
      { h2: "Vraag niet zomaar opnieuw aan" },
      {
        p: "Dezelfde aanvraag nog eens indienen levert meestal hetzelfde resultaat op, en een reeks herhaalde aanvragen helpt u niet. Lees de beslissing; daarin staat de reden.",
      },
      { h2: "Gebruikelijke redenen" },
      {
        ul: [
          "Het paspoort staat niet op de eVisitor-lijst — dan is de ETA of een Visitor visa mogelijk de juiste weg",
          "De gegevens kwamen niet precies overeen met het paspoort. Namen, nummers en data moeten worden ingevuld zoals ze erin staan",
          "Een verklaring over gezondheid of strafblad vroeg om beoordeling in plaats van een automatische beslissing",
        ],
      },
      { h2: "Als u al vluchten hebt geboekt" },
      {
        p: "Reis niet in de veronderstelling dat het op de luchthaven wel wordt opgelost. Zonder geldig visum mag u niet aan boord. Neem contact op met de luchtvaartmaatschappij over het omboeken van uw data, terwijl u de juiste aanvraag regelt.",
      },
      {
        note: `Een weigering is niet hetzelfde als een intrekking. Wordt een visum dat u al hebt ingetrokken, dan kan voor toekomstige aanvragen een uitsluitingsperiode van maximaal ${F.visaCancelExclusionYears} jaar gelden.`,
      },
      { source: SRC_EVISITOR_F },
    ],
  },
  {
    slug: "reizen-met-kinderen",
    enSlug: "travelling-with-children",
    added: ADDED,
    title: "Hebben kinderen een eigen eVisitor nodig?",
    description: "Elke reiziger heeft een eigen visum nodig, ook baby's. Kinderen vallen niet onder het eVisitor van een ouder, en de aanvraag gaat op dezelfde manier.",
    related: ["aankomst-in-australie", "smartgate-australie", "zorg-voor-bezoekers"],
    blocks: [
      {
        p: "Ja. Een eVisitor is aan één paspoort gekoppeld, dus elk gezinslid heeft een eigen visum nodig — ook een baby die op schoot bij een ouder reist.",
      },
      { h2: "Zo vraagt u aan voor een kind" },
      {
        p: "De aanvraag gebeurt op naam van het kind, met het eigen paspoort van het kind. Een ouder of voogd kan de aanvraag namens het kind invullen. Ook voor kinderen is het visum gratis; er zijn geen aparte kosten.",
      },
      { h2: "Controleer eerst het paspoort" },
      {
        p: `Paspoorten van kinderen zijn vaak korter geldig dan die van volwassenen. Een paspoort dat binnen de geldigheidsduur van ${F.validMonths} maanden verloopt, geeft later vaak problemen, omdat het visum gekoppeld is aan het paspoort waarvoor het is verleend.`,
      },
      { h2: "Als een kind met één ouder of met iemand anders reist" },
      {
        p: "Australië kan aan de grens vragen naar toestemming van de ouders. Een toestemmingsbrief van de ouder die niet meereist, en een kopie van eventuele gezagsdocumenten, zijn geen visumvereiste, maar voorkomen een voorspelbare vertraging.",
      },
      { source: SRC_EVISITOR_F },
    ],
  },
  {
    slug: "nieuw-paspoort-na-toekenning",
    enSlug: "new-passport-after-approval",
    added: ADDED,
    title: "Een nieuw paspoort na de toekenning van uw eVisitor: wat nu?",
    description: "Het visum hangt aan het paspoort waarvoor het is verleend. Een nieuw paspoort maakt het visum niet ongeldig, maar u moet het wel aan het Department doorgeven.",
    related: ["paspoort-en-gegevens", "veelgemaakte-fouten", "evisitor-status-controleren"],
    blocks: [
      {
        p: "Dit komt voortdurend voor: het paspoort wordt vernieuwd, vervangen na verlies of opnieuw uitgegeven na een naamswijziging, en de reiziger denkt dat het visum weg is. Dat is niet zo, maar het gaat ook niet vanzelf over naar het nieuwe paspoort.",
      },
      { h2: "Wat er precies gebeurt" },
      {
        p: "Het eVisitor blijft gekoppeld aan het paspoortnummer waarvoor het is verleend. Luchtvaartmaatschappijen en grenssystemen controleren het paspoort dat u laat zien. Is dat paspoort nieuw, dan moet de koppeling eerst worden bijgewerkt.",
      },
      { h2: "Wat u doet" },
      {
        ul: [
          "Log in op ImmiAccount en open uw eVisitor-aanvraag",
          "Kies „Update details” en daarna „Change of passport details”",
          "Vul de gegevens van het nieuwe paspoort en de reden van de wijziging in en verstuur ze",
          "Volgens het Department of Home Affairs wordt het nieuwe paspoort binnen 3 werkdagen aan uw bestaande visum gekoppeld",
        ],
      },
      {
        p: "Kan de wijziging niet in ImmiAccount worden doorgevoerd — bijvoorbeeld omdat u uw aanvraag niet in ImmiAccount kunt importeren, of omdat de geboortedatum in het paspoort is gewijzigd — dan verwijst Home Affairs naar het webformulier New Passport Details. De verwerking daarvan duurt tot 14 dagen.",
      },
      {
        note: "Doe dit zodra het nieuwe paspoort binnen is, niet op de luchthaven. Dit geldt voor het eVisitor. Een ETA (subclass 601) kan niet naar een nieuw paspoort worden overgezet: ETA-houders vragen een nieuwe ETA aan.",
      },
      { source: { label: "Department of Home Affairs — You have a new passport", url: "https://immi.homeaffairs.gov.au/change-in-situation/passport-details" } },
    ],
  },
  {
    slug: "reistoestemmingen-vergeleken",
    enSlug: "travel-authorisations-compared",
    added: ADDED,
    title: "Welke reistoestemming hebt u nodig? NZeTA, eVisitor, K-ETA, ESTA en de andere vergeleken",
    description: "Vergelijkbare namen, heel verschillende regels. Welk systeem bij welke bestemming hoort, wat het kost en welke fouten ontstaan als u ze door elkaar haalt.",
    related: ["evisitor-of-eta", "wat-is-evisitor", "evisitor-kosten"],
    blocks: [
      {
        p: "Elektronische reistoestemmingen lijken van buitenaf inwisselbaar. Dat zijn ze niet. Elk land heeft een eigen systeem, met een eigen landenlijst, een eigen prijs en een eigen opvatting van wat het document eigenlijk is — sommige zijn visa, andere uitdrukkelijk niet.",
      },
      {
        p: "Deze pagina laat zien wat wat is. Voor Australië is het systeem het eVisitor, en dat is gratis.",
      },
      {
        note: "Eén regel geldt overal: u vraagt aan op de eigen website van de overheid, en geen bureau kan een beslissing sneller laten komen. Websites die een veelvoud van het officiële bedrag rekenen, vullen hetzelfde formulier voor u in.",
      },
      { h2: "Australië — eVisitor of ETA" },
      {
        p: `Het eVisitor (subclass 651) is een visum en is gratis. Reizigers van wie het paspoort niet op de eVisitor-lijst staat, gebruiken in plaats daarvan de ETA (subclass 601), die ${F.etaFee} kost en via de officiële app wordt aangevraagd. Beide staan bezoeken toe van maximaal ${F.stayMonths} maanden en zijn ${F.validMonths} maanden geldig.`,
      },
      { h2: "Nieuw-Zeeland — NZeTA" },
      {
        p: "Een reistoestemming vooraf voor paspoorten zonder visumplicht, geen visum. De kosten bestaan uit twee delen: aanvraagkosten en een aparte toeristenheffing voor natuurbehoud en toerisme, en daarom verschillen de totaalbedragen tussen bronnen.",
      },
      { h2: "Zuid-Korea — K-ETA" },
      {
        p: "Op dit moment zijn veel nationaliteiten tijdelijk vrijgesteld van de K-ETA. De eerste vraag is dus of u er wel een nodig hebt, niet hoe u die aanvraagt.",
      },
      { h2: "Verenigd Koninkrijk — ETA" },
      {
        p: "Geldt voor bezoeken van maximaal 6 maanden aan het Verenigd Koninkrijk, Jersey, Guernsey en het eiland Man. Volgens GOV.UK kost de ETA £20. U vraagt aan via de officiële dienst.",
      },
      { source: { label: "GOV.UK — Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" } },
      { h2: "Verenigde Staten — ESTA, en Canada — eTA" },
      {
        p: "Beide landen hebben een vergelijkbaar systeem voor reizigers zonder visumplicht. De kosten noemen we hier niet, omdat we de actuele bedragen bij het schrijven van deze pagina niet aan de officiële bronnen konden toetsen, en een verouderde prijs is erger dan geen prijs. Kijk rechtstreeks op de officiële websites — en alleen daar.",
      },
      {
        ul: [
          "Verenigde Staten: esta.cbp.dhs.gov",
          "Canada: canada.ca (Immigration, Refugees and Citizenship Canada)",
        ],
      },
      { h2: "De fouten die mensen echt geld kosten" },
      {
        ul: [
          "Aannemen dat één reistoestemming een reis langs meerdere landen dekt. Elke bestemming staat op zichzelf, ook een tussenstop waarbij u de luchthaven verlaat.",
          "Aannemen dat het een visum is. Sommige zijn dat, andere niet, en dat verschil bepaalt wat u ter plaatse mag doen.",
          "Aannemen dat de prijs de prijs is. Verschillende systemen rekenen een aparte heffing of een ander bedrag, afhankelijk van hoe u aanvraagt.",
          "Via een betaalde tussenpersoon aanvragen in de veronderstelling dat het sneller gaat. Het is hetzelfde formulier en dezelfde beslissing.",
        ],
      },
      { h2: "Controleer uw eigen paspoort, niet een samenvatting" },
      {
        p: "Landenlijsten veranderen, en wie twee paspoorten heeft, krijgt vaak twee verschillende antwoorden. Elk systeem hierboven heeft een officiële controle. Gebruik die voor het paspoort waarmee u daadwerkelijk reist.",
      },
    ],
  },
];
