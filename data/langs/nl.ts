import { FACTS as F, type LangContent } from "./_schema";

/**
 * オランダ語（/nl/）。読者＝オランダのパスポート保持者。
 *
 * ⚠️ 数値は F（data/facts.ts）から入れる。文中に直接書かない。
 * ⚠️ オランダはEU加盟国＝eVisitorの対象36か国に含まれる。
 *    「あなたは対象です・無料です」を前提に書ける（独語版と同じ型）。
 *    対象外の言語版（ko/zh/zh-tw）とは主張が逆なので、文面を流用しない。
 * ⚠️ 敬称は u（丁寧形）で統一。行政手続きの説明なので砕けた口調にしない。
 */
export const nl: LangContent = {
  code: "nl",
  htmlLang: "nl",
  label: "Nederlands",
  audience: "Nederland",
  meta: {
    title: `eVisitor (subclass 651) voor Nederlanders: gratis naar Australië`,
    description: `Nederlanders hebben voor Australië het eVisitor-visum (subclass 651) nodig. Het is gratis, ${F.validMonths} maanden geldig en staat verblijven toe van maximaal ${F.stayMonths} maanden per bezoek. Zo vraagt u het aan op de officiële website.`,
  },
  header: {
    site: "eVisitor Gids",
    tagline: "Australië · eVisitor-visum (subclass 651)",
    official: "Officiële website",
  },
  hero: {
    eyebrow: "Australië · eVisitor · subclass 651",
    h1Before: "Voor Nederlanders is het eVisitor-visum ",
    h1Highlight: "gratis",
    h1After: "",
    lead: `Nederland hoort bij de ${F.eligibleCountries} landen waarvoor Australië het eVisitor-visum openstelt. De overheid rekent er geen kosten voor: ${F.fee}. Het is ${F.validMonths} maanden geldig en staat verblijven toe van maximaal ${F.stayMonths} maanden per bezoek.`,
    ctaPrimary: "Aanvragen op de officiële website",
    ctaSecondary: "Wat kost het echt?",
    disclaimer: "Onafhankelijke gids · geen band met de Australische overheid · bijgewerkt",
    imageAlt: "Zonnige Australische kust met turkoois water en goudkleurig zand",
  },
  stats: [
    { v: F.fee, l: "Kosten", s: "Geen aanvraagkosten" },
    { v: `${F.validMonths} maanden`, l: "Geldigheid", s: "Onbeperkt aantal reizen" },
    { v: `${F.stayMonths} maanden`, l: "Verblijf per bezoek", s: "Vakantie of zakenbezoek" },
    { v: F.eligibleCountries.toString(), l: "Landen die in aanmerking komen", s: "Nederland hoort erbij" },
  ],
  whatIs: {
    h2: "Wat is het eVisitor-visum?",
    p1: "Het eVisitor (subclass 651) is een volwaardig bezoekersvisum voor Australië dat elektronisch wordt verleend. Het wordt aan uw paspoort gekoppeld: er komt geen sticker en geen stempel in. Toegestaan zijn toeristische reizen en zakelijke bezoekactiviteiten.",
    p2: `Het is ${F.validMonths} maanden geldig vanaf de verlening, staat een onbeperkt aantal reizen toe, en elk verblijf mag maximaal ${F.stayMonths} maanden duren. U moet zich zowel bij de aanvraag als bij de verlening buiten Australië bevinden.`,
  },
  features: [
    {
      h: "Een visum, geen reistoestemming",
      p: "Anders dan bijvoorbeeld de Nieuw-Zeelandse NZeTA is het eVisitor een echt visum. Het wordt elektronisch verleend en bij het inchecken automatisch gecontroleerd.",
    },
    {
      h: "Nederland komt in aanmerking",
      p: `Alle EU-lidstaten plus het Verenigd Koninkrijk, IJsland, Noorwegen en Zwitserland vallen onder de ${F.eligibleCountries} landen. Wie geen van die paspoorten heeft, gebruikt de ETA.`,
    },
    {
      h: "Gratis — maar alleen via de officiële website",
      p: `De overheid rekent geen kosten. Wie online een prijs voor een eVisitor ziet, betaalt voor het invullen van het formulier, niet voor het visum. Ter vergelijking: de ETA voor andere paspoorten kost ${F.etaFee}.`,
    },
  ],
  eligibility: {
    h2: "Welk visum hoort bij welk paspoort?",
    lead: "„Gratis” geldt alleen voor het eVisitor, en het eVisitor geldt alleen voor Europese paspoorten. Precies daar ontstaan de meeste misverstanden.",
    th: ["Uw paspoort", "Visum", "Kosten", "Waar aanvragen"],
    rows: [
      [
        `EU, Verenigd Koninkrijk, IJsland, Noorwegen, Zwitserland en andere Europese landen (${F.eligibleCountries} in totaal) — Nederland inbegrepen`,
        "eVisitor (subclass 651)",
        F.fee,
        "Website van het Department of Home Affairs (ImmiAccount)",
      ],
      [
        "Japan, Verenigde Staten, Canada, Singapore, Maleisië, Zuid-Korea en andere",
        "ETA (subclass 601)",
        F.etaFee,
        "Uitsluitend via de officiële app",
      ],
      ["Komt voor geen van beide in aanmerking", "Bezoekersvisum (subclass 600)", "betaald", "Website van het Department of Home Affairs"],
    ],
    note: `De ETA kunt u niet via de website aanvragen, alleen via de officiële app, die de chip in het paspoort uitleest. Bij het eVisitor is het omgekeerd: geen app, alleen de website. Gecontroleerd op 17 augustus 2026.`,
  },
  steps: {
    h2: "Zo vraagt u het eVisitor aan",
    items: [
      {
        h: "Controleer uw paspoort",
        p: "Uw Nederlandse paspoort moet geldig zijn op het moment van de aanvraag en de geplande reis dekken. Het visum wordt aan precies dit paspoort gekoppeld.",
      },
      {
        h: "Vraag aan van buiten Australië",
        p: "De aanvraag loopt via de website van het Department of Home Affairs met een ImmiAccount. U moet zich bij de aanvraag én bij de verlening buiten Australië bevinden.",
      },
      {
        h: "Verklaar gezondheid en strafblad",
        p: "U geeft uw gezondheidssituatie en een eventueel strafblad op. Eenvoudige aanvragen worden automatisch beslist; antwoorden die beoordeeld moeten worden, zijn de meest voorkomende oorzaak van vertraging.",
      },
      {
        h: "Wacht op de bevestigingsmail",
        p: `Veel aanvragen worden beslist in ${F.decisionTypical}, maar gegarandeerd is dat niet. Vraag het visum aan vóór u niet-restitueerbare boekingen doet, en bewaar de bevestiging bij uw reisdocumenten.`,
      },
    ],
    cta: "Beginnen op de officiële eVisitor-pagina",
  },
  rules: {
    h2: "Wat mag wel en wat niet",
    allowedH: "Toegestaan",
    allowed: [
      "Vakantie, bezoek aan familie en vrienden",
      "Zakelijke bezoekactiviteiten: afspraken, onderhandelingen, congressen",
      `Studie of bijscholing tot ${F.studyMonths} maanden`,
      "Zo vaak in- en uitreizen als u wilt tijdens de geldigheidsduur",
    ],
    deniedH: "Niet toegestaan",
    denied: [
      "Werken voor een Australische werkgever",
      `Verblijven langer dan ${F.stayMonths} maanden bij één bezoek`,
      "Aanvragen terwijl u zich in Australië bevindt",
      "Goederen of diensten verkopen aan het publiek",
    ],
  },
  border: {
    h2: "Bij aankomst",
    p: "Reis met hetzelfde paspoort waarmee u de aanvraag hebt gedaan — het visum is er elektronisch aan gekoppeld en er valt niets af te drukken. Op grote luchthavens kunnen reizigers die daarvoor in aanmerking komen de automatische SmartGates gebruiken. Over de toegang beslist de Australian Border Force ter plaatse. Australië handhaaft de biosecurityregels voor voedsel en plantaardige en dierlijke producten streng: geef bij twijfel alles aan.",
  },
  faq: {
    h2: "Veelgestelde vragen",
    items: [
      {
        q: "Is het eVisitor echt gratis?",
        a: `Ja. Het Department of Home Affairs rekent voor het eVisitor (subclass 651) geen visumkosten en geen servicekosten. Commerciële websites die een prijs noemen, brengen het invullen van het formulier in rekening — dat is niet nodig.`,
      },
      {
        q: "Hoe lang mag ik in Australië blijven?",
        a: `Maximaal ${F.stayMonths} maanden per bezoek. Het visum zelf is ${F.validMonths} maanden geldig vanaf de verlening en staat in die periode een onbeperkt aantal reizen toe — u mag dus meerdere keren inreizen, zolang elk verblijf binnen de grens van ${F.stayMonths} maanden blijft.`,
      },
      {
        q: "Mag ik met het eVisitor werken?",
        a: `Nee. Een dienstverband bij een Australische werkgever is niet toegestaan. Zakelijke bezoekactiviteiten zoals afspraken, onderhandelingen en congressen mogen wel, en u mag tot ${F.studyMonths} maanden studeren of een cursus volgen. Betaald werk valt erbuiten.`,
      },
      {
        q: "Kan ik aanvragen als ik al in Australië ben?",
        a: "Nee. U moet zich zowel bij de aanvraag als bij de verlening buiten Australië bevinden. Bent u al in het land en wilt u langer blijven, dan hebt u een ander visum nodig.",
      },
      {
        q: "Garandeert het eVisitor toegang tot Australië?",
        a: "Nee. Het geeft toestemming om naar Australië te reizen. Over de toegang zelf beslist de Australian Border Force bij aankomst.",
      },
      {
        q: "Hebben kinderen een eigen eVisitor nodig?",
        a: "Ja. Iedere reiziger heeft een eigen visum nodig, ook baby's, en telkens een eigen paspoort dat in aanmerking komt.",
      },
      {
        q: "Wat als ik met een tweede paspoort reis?",
        a: "Het visum hangt aan het paspoort waarmee u hebt aangevraagd. Reist u met een ander paspoort, dan moet u opnieuw aanvragen. Neem dus altijd hetzelfde paspoort mee dat u in de aanvraag hebt opgegeven.",
      },
    ],
  },
  cta: {
    h2: "Vraag uw eVisitor aan",
    p: "De aanvraag is gratis en verloopt via de website van het Department of Home Affairs. Wij zijn een onafhankelijke gids en kunnen geen aanvraag voor u indienen.",
    button: "Naar de officiële eVisitor-pagina",
  },
  footer: {
    disclaimer:
      "Dit is een onafhankelijke gids. Wij hebben geen band met de Australische overheid of het Department of Home Affairs en dienen geen aanvragen in. Het eVisitor is gratis — vraag het altijd aan via de officiële website.",
  },
  ui: {
    updated: "Bijgewerkt",
    backToTop: "Naar boven",
    languages: "Taal",
    articles: "Meer onderwerpen",
    readMore: "Verder lezen",
    updatedLabel: "17 augustus 2026",
  },
  pages: [
    {
      slug: "wat-is-evisitor",
      title: "Wat is het eVisitor (subclass 651)?",
      description:
        "Het eVisitor is een echt visum, geen reistoestemming. Wat het dekt, wie het kan aanvragen en wat het nadrukkelijk niet toestaat.",
      blocks: [
        {
          p: `Het eVisitor (subclass 651) is een bezoekersvisum voor Australië dat elektronisch aan uw paspoort wordt gekoppeld. Het is bedoeld voor houders van een paspoort uit een van de ${F.eligibleCountries} in aanmerking komende landen, vrijwel allemaal Europees.`,
        },
        { h2: "Het is een visum" },
        {
          p: "Dat onderscheid doet ertoe. Sommige landen geven een reistoestemming af die uitdrukkelijk geen visum is; Australië geeft hier een echt visum, alleen zonder sticker of stempel. Daarom staan er ook echte voorwaarden aan verbonden.",
        },
        {
          ul: [
            `Geldig ${F.validMonths} maanden vanaf de verlening.`,
            `Verblijf van maximaal ${F.stayMonths} maanden per bezoek, onbeperkt aantal reizen.`,
            `Studie of bijscholing tot ${F.studyMonths} maanden is toegestaan.`,
            "Werken voor een Australische werkgever is niet toegestaan.",
          ],
        },
        {
          note: `U moet zich zowel bij de aanvraag als op het moment van verlening buiten Australië bevinden. Dit wordt het vaakst over het hoofd gezien.`,
        },
      ],
    },
    {
      slug: "evisitor-kosten",
      title: "Wat kost het eVisitor? Niets — en waarom u toch prijzen ziet",
      description: `Het Department of Home Affairs rekent ${F.fee} voor het eVisitor. Wat commerciële websites dan wel in rekening brengen.`,
      blocks: [
        {
          p: `De overheidskosten voor het eVisitor bedragen ${F.fee}. Er is geen visumbijdrage en geen servicebijdrage. Toch staan er online talloze pagina's met een prijs erbij.`,
        },
        { h2: "Waarvoor die websites geld vragen" },
        {
          p: "Voor het invullen van hetzelfde formulier dat u zelf gratis kunt invullen. Ze beoordelen niets, versnellen niets en verhogen uw kans op toekenning niet. De beslissing komt in beide gevallen van dezelfde dienst.",
        },
        { h2: "De ETA is wel betaald — en dat verklaart de verwarring" },
        {
          p: `Voor paspoorten die niet op de eVisitor-lijst staan, geldt de ETA (subclass 601) met een servicebijdrage van ${F.etaFee}. Wie die twee door elkaar haalt, denkt al snel dat betalen normaal is.`,
        },
        {
          note: "Vuistregel: als u met een Nederlands paspoort ook maar iets betaalt, betaalt u aan een tussenpersoon, niet aan Australië.",
        },
      ],
    },
    {
      slug: "evisitor-documenten",
      title: "Wat u nodig hebt voor de eVisitor-aanvraag",
      description:
        "De gegevens die daadwerkelijk worden gevraagd, en de punten waarop aanvragen in de praktijk vastlopen.",
      blocks: [
        { h2: "Wat u bij de hand houdt" },
        {
          ul: [
            "Het paspoort waarmee u ook echt gaat reizen (nummer en afloopdatum)",
            "Een ImmiAccount op de website van het Department of Home Affairs",
            "Een e-mailadres dat u onderweg kunt bereiken",
            "Gegevens over uw gezondheidssituatie en een eventueel strafblad",
          ],
        },
        { h2: "Er worden meestal geen documenten geüpload" },
        {
          p: "Bij een eenvoudige aanvraag vult u verklaringen in; u hoeft doorgaans niets te scannen. Pas als een antwoord beoordeeld moet worden, kan de dienst aanvullende stukken opvragen.",
        },
        { h2: "Waar het misgaat" },
        {
          ul: [
            "Namen anders spellen dan in het paspoort staat",
            "Aanvragen met een paspoort dat u daarna vernieuwt",
            "Een vraag over een strafblad ontkennend beantwoorden terwijl er wel iets is",
          ],
        },
        {
          note: "Vernieuwt u uw paspoort na de verlening, dan geldt het visum niet voor het nieuwe paspoort. Vraag dan opnieuw aan.",
        },
      ],
    },
    {
      slug: "evisitor-behandeltijd",
      title: "Hoe lang duurt een eVisitor-aanvraag?",
      description: `Veel aanvragen worden beslist in ${F.decisionTypical}. Wat de behandeling vertraagt en waarom er geen spoedprocedure bestaat.`,
      blocks: [
        {
          p: `Een groot deel van de aanvragen wordt automatisch beslist, vaak binnen ${F.decisionTypical}. Dat is een ervaringsgegeven, geen toezegging.`,
        },
        { h2: "Wat de behandeling vertraagt" },
        {
          ul: [
            "Een opgegeven strafblad of een eerdere weigering",
            "Gezondheidsvragen die beoordeling vergen",
            "Gegevens die niet overeenkomen met het paspoort",
            "Drukte vlak voor vakantieperiodes",
          ],
        },
        { h2: "Er is geen betaalde spoedprocedure" },
        {
          p: "De dienst biedt die niet aan. Websites die snelheid beloven, versnellen hooguit hun eigen invulwerk; de volgorde van beoordeling verandert er niet door.",
        },
        {
          note: "Vraag aan zodra de reis vaststaat en vóór u niet-restitueerbare boekingen doet. Dat is de enige effectieve maatregel.",
        },
      ],
    },
    {
      slug: "evisitor-status-controleren",
      title: "Uw eVisitor-status controleren met VEVO",
      description:
        "Waar de bevestiging heen gaat, hoe u de status van een bestaand visum controleert, en waar u uw paspoortnummer niet moet invoeren.",
      blocks: [
        {
          p: "De beslissing komt per e-mail op het adres uit de aanvraag. Het visum is elektronisch aan uw paspoort gekoppeld; er is niets om af te drukken.",
        },
        { h2: "VEVO: de officiële controle" },
        {
          p: "Met VEVO (Visa Entitlement Verification Online) van het Department of Home Affairs controleert u de status en voorwaarden van een bestaand visum. Dat is de betrouwbare bron, ook als de e-mail zoek is.",
        },
        { h2: "Als de e-mail niet aankomt" },
        {
          ul: [
            "Kijk eerst in de map ongewenste e-mail",
            "Controleer of het ingevulde adres een typefout bevat",
            "Log in op uw ImmiAccount: daar staat de status van de aanvraag",
          ],
        },
        {
          note: "Voer uw paspoortnummer alleen in op de officiële site van het Department of Home Affairs. Derden die een betaalde „statuscontrole” aanbieden, hebt u niet nodig.",
        },
      ],
    },
    {
      slug: "evisitor-veelgestelde-vragen",
      title: "eVisitor: veelgestelde vragen",
      description: "Korte antwoorden op wat Nederlandse reizigers het vaakst vragen.",
      blocks: [
        { h2: "Is het echt gratis?" },
        { p: `Ja, ${F.fee}. Elk bedrag dat u betaalt, gaat naar een tussenpersoon.` },
        { h2: "Hoe lang mag ik blijven?" },
        {
          p: `Maximaal ${F.stayMonths} maanden per bezoek; het visum zelf is ${F.validMonths} maanden geldig met een onbeperkt aantal reizen.`,
        },
        { h2: "Mag ik werken?" },
        {
          p: `Nee. Zakelijke bezoeken en studie tot ${F.studyMonths} maanden mogen wel, betaald werk niet.`,
        },
        { h2: "Kan ik aanvragen vanuit Australië?" },
        { p: "Nee. U moet zich bij aanvraag en verlening buiten Australië bevinden." },
        { h2: "Ik heb een nieuw paspoort — geldt mijn visum nog?" },
        { p: "Nee. Het hangt aan het oude paspoort. Vraag opnieuw aan met het nieuwe." },
        { h2: "Hebben baby's ook een visum nodig?" },
        { p: "Ja, iedere reiziger afzonderlijk, op het eigen paspoort." },
        { h2: "Wat als mijn paspoort niet op de lijst staat?" },
        {
          p: `Dan is het eVisitor niet beschikbaar. Afhankelijk van uw paspoort is dat de ETA (${F.etaFee}, alleen via de officiële app) of een bezoekersvisum (subclass 600).`,
        },
      ],
    },
    {
      slug: "over-deze-site",
      title: "Over deze site",
      description: "Wie deze onafhankelijke gids over het Australische eVisitor-visum maakt.",
      blocks: [
        { h2: "Uitgever" },
        {
          p: "Dit is een onafhankelijke gids over het Australische eVisitor-visum (subclass 651). Wij zijn geen overheidsinstantie en hebben geen band met de Australische overheid of het Department of Home Affairs. Uitgever: MediaX Co., Ltd. (Japan). Contact: webmaster@mediax.biz",
        },
        { h2: "Wat wij niet doen" },
        {
          ul: [
            "Wij dienen geen aanvragen in.",
            "Wij brengen geen kosten in rekening.",
            "Wij geven geen juridisch of migratieadvies.",
          ],
        },
        { h2: "Over de juistheid" },
        {
          p: "Alle informatie is gebaseerd op de officiële publicaties op de vermelde controledatum. Regels veranderen; de officiële website is leidend. Ziet u een fout, laat het ons weten en wij corrigeren die.",
        },
      ],
    },
    {
      slug: "privacy",
      title: "Privacyverklaring",
      description: "Welke gegevens deze site verwerkt, waarom, en welke rechten u hebt.",
      blocks: [
        { h2: "Kort samengevat" },
        {
          p: "Deze site bestaat uit statische informatiepagina's. Er is geen registratie, er wordt niets verkocht en er worden geen paspoortgegevens verzameld. Persoonsgegevens worden alleen verwerkt voor zover technisch noodzakelijk.",
        },
        { h2: "Serverlogboeken" },
        {
          p: "De site draait op Cloudflare Pages. Bij elk bezoek worden IP-adres, tijdstip, opgevraagd adres en browsergegevens vastgelegd, voor een stabiele werking en ter afwering van aanvallen.",
        },
        { h2: "Cookies en statistieken" },
        {
          p: "Wij gebruiken geen advertentiecookies en plaatsen geen trackingscripts van derden. Komt er later bezoekersstatistiek bij, dan wordt die eerst hier beschreven.",
        },
        { h2: "Externe links" },
        { p: "De site verwijst naar officiële bronnen, waarvoor hun eigen privacyregels gelden." },
        { h2: "Contact" },
        { p: "Vragen over privacy: webmaster@mediax.biz" },
      ],
    },
    {
      slug: "gebruiksvoorwaarden",
      title: "Gebruiksvoorwaarden",
      description: "De voorwaarden waaronder u de informatie op deze site gebruikt.",
      blocks: [
        { h2: "Doel" },
        {
          p: "De inhoud geeft algemene informatie over het Australische eVisitor-visum. Het is geen juridisch of migratieadvies en er ontstaat geen opdrachtrelatie.",
        },
        { h2: "Geen aanvraagbehandeling" },
        {
          p: "Wij zijn geen tussenpersoon en geen overheidsinstantie. Aanvragen lopen uitsluitend via de officiële kanalen; wij ontvangen geen formulieren, kosten of paspoortgegevens.",
        },
        { h2: "Aansprakelijkheid" },
        {
          p: "Wij houden de informatie actueel en juist, maar kunnen volledigheid en foutloosheid niet garanderen. Aansprakelijkheid voor schade door gebruik is beperkt tot opzet en grove nalatigheid.",
        },
        { h2: "Auteursrecht" },
        {
          p: "Teksten en vormgeving zijn auteursrechtelijk beschermd. Integraal overnemen zonder toestemming is niet toegestaan; korte citaten met bronvermelding en link zijn welkom.",
        },
      ],
    },
  ],
  articles: [
    {
      slug: "evisitor-stap-voor-stap-aanvragen",
      title: "eVisitor stap voor stap aanvragen",
      description:
        "Van ImmiAccount tot bevestigingsmail: de volgorde van de stappen en de punten waar aanvragen in de praktijk op stuklopen.",
      blocks: [
        {
          p: `De aanvraag verloopt uitsluitend via de website van het Department of Home Affairs. Er is geen app voor het eVisitor — dat is juist het verschil met de ETA. De kosten zijn ${F.fee}.`,
        },
        { h2: "1. ImmiAccount aanmaken" },
        {
          p: "U hebt een gratis ImmiAccount nodig. Gebruik een e-mailadres dat u ook tijdens de reis kunt bereiken: alle berichten gaan daarheen.",
        },
        { h2: "2. Paspoortgegevens invoeren" },
        {
          p: "Neem naam, nummer en geboortedatum exact over zoals ze in het paspoort staan. Een afwijkende spelling is de meest voorkomende oorzaak van problemen bij het inchecken.",
        },
        { h2: "3. Verklaringen afgeven" },
        {
          p: "U verklaart uw gezondheidssituatie en een eventueel strafblad. Beantwoord dit naar waarheid: een onjuiste verklaring kan tot intrekking van het visum leiden, met jarenlange gevolgen voor nieuwe aanvragen.",
        },
        { h2: "4. Indienen van buiten Australië" },
        {
          p: "U moet zich bij de aanvraag én bij de verlening buiten Australië bevinden. Dit is geen formaliteit, maar een voorwaarde van het visum.",
        },
        {
          note: `Veel beslissingen komen binnen ${F.decisionTypical}, maar plan er niet op. Vraag aan zodra de reis vaststaat.`,
        },
      ],
    },
    {
      slug: "evisitor-of-eta",
      title: `eVisitor of ETA? Het verschil tussen gratis en ${F.etaFee}`,
      description:
        "Twee visa met vrijwel dezelfde voorwaarden, maar verschillende landenlijsten, prijzen en aanvraagwegen. Zo weet u welke voor u geldt.",
      blocks: [
        {
          p: `Australië kent twee elektronische bezoekersvisa die op elkaar lijken. Welke voor u geldt, hangt uitsluitend af van het paspoort dat u hebt — u kunt niet kiezen.`,
        },
        { h2: "eVisitor (subclass 651)" },
        {
          ul: [
            `Voor ${F.eligibleCountries} overwegend Europese landen, waaronder Nederland`,
            `Kosten: ${F.fee}`,
            "Aanvraag: website van het Department of Home Affairs (geen app)",
          ],
        },
        { h2: "ETA (subclass 601)" },
        {
          ul: [
            "Voor onder meer Japan, de Verenigde Staten, Canada, Singapore, Maleisië en Zuid-Korea",
            `Kosten: ${F.etaFee} servicebijdrage`,
            "Aanvraag: uitsluitend via de officiële app, die de chip in het paspoort uitleest",
          ],
        },
        { h2: "Wat hetzelfde is" },
        {
          p: `Beide zijn ${F.validMonths} maanden geldig, staan een onbeperkt aantal reizen toe en verblijven van maximaal ${F.stayMonths} maanden per bezoek. Beide verbieden werken voor een Australische werkgever.`,
        },
        {
          note: "Hebt u twee nationaliteiten, dan kan het antwoord per paspoort verschillen. Beslissend is het paspoort waarmee u daadwerkelijk reist.",
        },
      ],
    },
    {
      slug: "evisitor-geldigheid-en-verblijf",
      title: "Geldigheid en verblijfsduur: twee verschillende dingen",
      description: `${F.validMonths} maanden geldigheid en ${F.stayMonths} maanden verblijf per bezoek worden vaak door elkaar gehaald. Wat het verschil in de praktijk betekent.`,
      blocks: [
        {
          p: `Het eVisitor is ${F.validMonths} maanden geldig vanaf de verlening. Dat zegt hoe lang u het visum kunt gebruiken — niet hoe lang u per keer mag blijven.`,
        },
        { h2: "Per bezoek" },
        {
          p: `Elk verblijf mag maximaal ${F.stayMonths} maanden duren. Binnen de geldigheidsduur mag u zo vaak reizen als u wilt, zolang elk afzonderlijk verblijf onder die grens blijft.`,
        },
        { h2: "Uitreizen en terugkomen is geen reset" },
        {
          p: "Kort het land verlaten om de klok opnieuw te laten lopen, is een bekende constructie en wordt als zodanig herkend. De Australian Border Force kijkt naar het patroon van uw reizen, niet alleen naar de laatste stempel.",
        },
        { h2: "Langer blijven" },
        {
          p: "Wilt u langer dan de toegestane periode blijven, dan hebt u een ander visum nodig. Verlengen van het eVisitor is niet mogelijk, en een aanvraag vanuit Australië evenmin.",
        },
        {
          note: "Het visum vervalt ook als uw paspoort eerder verloopt. Controleer beide data voordat u boekt.",
        },
      ],
    },
  ],
};
