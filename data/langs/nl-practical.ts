import { FACTS as F } from "./_schema";
import type { PracticalPack } from "./_schema";

/**
 * 入国後の実用ページ（オランダ語・/nl/）。英語 data/pages-practical.ts の13ページに対応。
 * 読者＝オランダ・ベルギー（フランデレン）の eVisitor 保持者。敬称は u。
 * ⚠️ NL・BE は相互医療協定（RHCA）の対象国 → 医療ページはその説明から始める。
 * ⚠️ 数値は F 経由。事実は英語版と同一（表現だけ変える）。
 */

const CHECKED = "12 oktober 2026";

export const nlPractical: PracticalPack = {
  ui: { faq: "Veelgestelde vragen", source: "Bron", related: "Gerelateerd" },
  articles: [
    {
      slug: "aankomst-in-australie",
      enSlug: "arriving-in-australia",
      title: "Aankomst in Australië: praktische gids voor eVisitor-houders",
      description:
        "Uw visum brengt u in het vliegtuig. Wat daarna komt — SmartGate, contant geld, taxfree, zorg, autorijden, noodgevallen — officieel gecontroleerd.",
      related: ["smartgate-australie", "geld-en-fooi", "zorg-voor-bezoekers"],
      blocks: [
        {
          p: `Het eVisitor beantwoordt één vraag: of u naar Australië mag reizen en er telkens maximaal ${F.stayMonths} maanden mag blijven. Het zegt niets over wat er op het vliegveld gebeurt, wat u mag meenemen, hoe u betaalt of wat u doet als er iets misgaat. Daarvoor zijn deze pagina's. Elke pagina is gecontroleerd bij de verantwoordelijke Australische overheidsinstantie en linkt daarnaar.`,
        },
        { h2: "Aan de grens" },
        { links: ["smartgate-australie", "medicijnen-meenemen"] },
        { h2: "Geld" },
        { links: ["geld-en-fooi", "belastingteruggave-trs"] },
        { h2: "Onderweg en bereikbaar blijven" },
        { links: ["autorijden-in-australie", "telefoon-en-simkaart", "stekkers-en-stroom", "feestdagen-australie"] },
        { h2: "Gezondheid en veiligheid" },
        { links: ["zorg-voor-bezoekers", "alarmnummers-australie", "roken-vapen-alcohol"] },
        { h2: "De terugreis" },
        { links: ["vloeistoffen-handbagage"] },
        {
          note: "Waar we geen pagina over hebben gemaakt: het openbaar vervoer. Er is geen landelijk systeem — elke stad heeft een eigen kaart en eigen tarieven (Opal in Sydney, myki in Melbourne, go card in South East Queensland). Kijk bij de vervoersautoriteit van de stad die u bezoekt.",
        },
      ],
      checked: CHECKED,
      practical: false,
    },
    {
      slug: "smartgate-australie",
      enSlug: "smartgate-australia",
      title: `SmartGate in Australië: wie mag erdoor (vanaf ${F.smartgateMinAge} jaar) en wat u nog nodig hebt`,
      description: `SmartGates bij aankomst staan in een ABF-proef open voor reizigers vanaf ${F.smartgateMinAge} jaar met elk geldig paspoort. De papieren inreiskaart blijft verplicht.`,
      related: ["aankomst-in-australie", "medicijnen-meenemen", "geld-en-fooi"],
      blocks: [
        {
          p: `SmartGates zijn de automatische paspoortpoortjes van de Australian Border Force (ABF) op de grote internationale luchthavens van Australië. Bij aankomst leest het poortje uw paspoort, maakt een foto en vergelijkt uw gezicht daarmee. Lukt dat, dan krijgt u een ticket en loopt u door.`,
        },
        { h2: "Wie de SmartGates bij aankomst mag gebruiken" },
        {
          ul: [
            "U reist met een geldig paspoort",
            `U bent minstens ${F.smartgateMinHeight} lang`,
            `U bent minstens ${F.smartgateMinAge} jaar oud`,
            `Kinderen jonger dan ${F.smartgateAccompanyUnder} moeten worden begeleid door een ouder of wettelijke voogd`,
          ],
        },
        {
          p: `Tot voor kort had u een e-paspoort nodig (het chipsymbool op de omslag). De ABF test nu SmartGates bij aankomst voor alle paspoorten, dus ook een paspoort zonder chip kan werken. De ABF publiceert geen lijst met nationaliteiten: de voorwaarden hierboven gaan over het paspoort en de reiziger, niet over het land dat het paspoort heeft uitgegeven.`,
        },
        {
          note: `Uw eVisitor en de SmartGate zijn twee verschillende dingen. Het visum geeft u het recht om in te stappen en het land in te reizen; de SmartGate is alleen de manier waarop uw paspoort wordt gecontroleerd. Het poortje verandert niets aan uw visumvoorwaarden.`,
        },
        { h2: "De Incoming Passenger Card blijft verplicht" },
        {
          p: `De meeste passagiers moeten een papieren inreiskaart invullen, de Incoming Passenger Card (IPC). U krijgt die in het vliegtuig of in de terminal, en u moet hem in het Engels invullen. De ABF publiceert vertaalde voorbeeldkaarten — onder meer in het Nederlands — zodat u de vragen begrijpt, maar de kaart die u inlevert vult u in het Engels in.`,
        },
        {
          p: `Bij de uitgang geeft u uw SmartGate-ticket en uw Incoming Passenger Card af aan een medewerker van Border Force of biosecurity. De Australia Travel Declaration is een digitaal alternatief: volgens de ABF (stand 15 november 2026) is het webformulier alleen beschikbaar voor vluchten die aankomen op Western Sydney International Airport, en vult u het niet in als u op een andere Australische luchthaven aankomt. Controleer de ABF-pagina voor uw luchthaven van aankomst.`,
        },
        { source: { label: "Australian Border Force — Australia Travel Declaration", url: "https://www.abf.gov.au/entering-and-leaving-australia/australia-travel-declaration" } },
        { h2: "Talen op het scherm" },
        {
          p: `De schermen van de SmartGates bij aankomst zijn in het Engels, met ${F.smartgateArrivalLanguages} andere talen om uit te kiezen, waaronder Nederlands, Duits en Frans. De schermen van de SmartGates bij vertrek zijn in het Engels, Japans, Koreaans en Mandarijn.`,
        },
        { h2: "Bij vertrek uit Australië" },
        {
          p: `Iedere reiziger met een geldig machineleesbaar paspoort kan de SmartGates bij vertrek gebruiken. Dat kan niet als u reist met iemand die hulp nodig heeft om de instructies te volgen, zoals een baby of een klein kind.`,
        },
        { source: { label: "Australian Border Force (ABF) — Wie de SmartGates bij aankomst mag gebruiken", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgate/arrivals/who-can-use-smartgates" } },
        { source: { label: "Australian Border Force (ABF) — SmartGates bij vertrek", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgate/departures" } },
        { source: { label: "Australian Border Force (ABF) — Incoming Passenger Card", url: "https://www.abf.gov.au/entering-and-leaving-australia/crossing-the-border/at-the-border/incoming-passenger-card-(ipc)" } },
      ],
      faq: [
        {
          q: "Kan ik met een Nederlands of Belgisch paspoort de SmartGate gebruiken?",
          a: `De ABF publiceert geen lijst met nationaliteiten. De SmartGates bij aankomst zijn open voor reizigers met een geldig paspoort die minstens ${F.smartgateMinAge} jaar oud en ${F.smartgateMinHeight} lang zijn, en de ABF test de poortjes voor alle paspoorten.`,
        },
        {
          q: "Moet ik de Incoming Passenger Card ook invullen als ik de SmartGate gebruik?",
          a: "Ja. U geeft bij de uitgang uw SmartGate-ticket samen met de ingevulde Incoming Passenger Card af. De kaart moet in het Engels worden ingevuld.",
        },
        {
          q: "Mag mijn kind van 5 door de SmartGate?",
          a: `Nee. Voor de SmartGates bij aankomst moet een reiziger minstens ${F.smartgateMinAge} jaar oud zijn. Gezinnen met jongere kinderen worden door een medewerker gecontroleerd.`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "vloeistoffen-handbagage",
      enSlug: "airport-security-liquids",
      title: `Vloeistoffen op vluchten vanuit Australië: de ${F.lagsContainer}-regel en de poederlimiet`,
      description: `Internationale vluchten vanuit Australië: vloeistoffen, sprays en gels in flesjes van max. ${F.lagsContainer} in één doorzichtig zakje. Ook poeder is beperkt.`,
      related: ["belastingteruggave-trs", "medicijnen-meenemen", "aankomst-in-australie"],
      blocks: [
        {
          p: `Australië beperkt vloeistoffen, sprays (aerosolen), gels en bepaalde poeders in de handbagage op internationale vluchten. De limieten gelden niet voor ruimbagage en niet voor de meeste binnenlandse vluchten.`,
        },
        { h2: "Wanneer de limieten gelden" },
        {
          ul: [
            "Als u Australië verlaat met een internationale vlucht",
            "Als u via Australië van het ene naar het andere land overstapt",
            "Op het binnenlandse deel van een vlucht die vertrekt vanaf een Australische internationale terminal",
            "Voordat u instapt op een vlucht naar Australië, op de laatste tussenstop vóór Australië",
          ],
        },
        { h2: "Vloeistoffen, sprays en gels" },
        {
          ul: [
            `Elke verpakking mag maximaal ${F.lagsContainer} (of 100 g) bevatten — een grotere verpakking mag niet mee, ook niet als die maar half vol is`,
            `Alle verpakkingen moeten in één doorzichtig, hersluitbaar plastic zakje waarvan de vier zijden samen niet meer dan ${F.lagsBagPerimeterCm} cm meten (bijvoorbeeld 20 × 20 cm)`,
            "Eén zakje per passagier; u mag zakjes dragen voor mensen die onder uw zorg vallen, ook kinderen",
            "Spuitbussen moeten een dop of vergrendeling hebben",
          ],
        },
        {
          p: `Smeersels en zachte etenswaren tellen als vloeistof of gel. De officiële lijst noemt Vegemite, pindakaas, honing en yoghurt — souvenirs waarmee mensen bij de controle vaak tegen de lamp lopen.`,
        },
        { h2: "Poeders" },
        {
          p: `Anorganische poeders — zoals zout, zoutscrubs, zand en sommige talkpoeders — moeten in verpakkingen van maximaal ${F.powderLimit}, en het totaal per persoon mag niet meer zijn dan ${F.powderLimit}. Organische poeders zoals babymelkpoeder, koffie, eiwitpoeder, bloem, specerijen en suiker hebben geen limiet. Mogelijk moet u poeders bij de controle apart laten zien.`,
        },
        { h2: "Uitzonderingen" },
        {
          ul: [
            "Redelijke hoeveelheden babyproducten",
            "Geneesmiddelen op recept en zonder recept die u tijdens de vlucht nodig hebt — mogelijk moet u een bewijs laten zien, zoals een brief van uw arts",
            "Medische hulpmiddelen en medische apparatuur",
          ],
        },
        { h2: "Taxfree" },
        {
          p: `Taxfree vloeistoffen die u op de luchthaven koopt, moeten in de verzegelde zak met zichtbare verzegeling blijven waarin ze zijn verpakt, samen met het aankoopbewijs.`,
        },
        { source: { label: "Department of Home Affairs (TravelSECURE) — Wat u wel en niet mag meenemen", url: "https://www.homeaffairs.gov.au/about-us/what-we-do/travelsecure/security-screening-at-airports/what-you-can-and-cant-bring" } },
      ],
      faq: [
        {
          q: "Gelden de vloeistoflimieten ook op binnenlandse vluchten in Australië?",
          a: "Niet op de meeste binnenlandse vluchten. Ze gelden wel op het binnenlandse deel van een vlucht die vanaf een internationale terminal vertrekt.",
        },
        {
          q: "Mag een pot Vegemite of pindakaas mee in de handbagage?",
          a: `Alleen in een verpakking van maximaal ${F.lagsContainer} in uw vloeistoffenzakje. Grotere potten horen in de ruimbagage.`,
        },
        {
          q: "Is babymelkpoeder beperkt?",
          a: "Babymelkpoeder is een organisch poeder en heeft geen limiet. Redelijke hoeveelheden babyproducten zijn uitgezonderd van de vloeistoflimieten.",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "geld-en-fooi",
      enSlug: "money-and-tipping",
      title: "Geld in Australië: contant, toeslagen op kaartbetalingen, GST en fooi",
      description: `Prijzen zijn inclusief ${F.gstPercent}% GST, kaarttoeslagen zijn verboden vanaf 1 oktober 2026 en fooi is vrijwillig. Contant ${F.cashReportThreshold}+ moet u aangeven.`,
      related: ["belastingteruggave-trs", "telefoon-en-simkaart", "feestdagen-australie"],
      blocks: [
        {
          p: `In Australië betaalt u met de Australische dollar (AUD). Een paar regels zijn handig om te kennen voordat u iets afrekent — een daarvan is pas veranderd.`,
        },
        { h2: "De prijs op het etiket is inclusief belasting" },
        {
          p: `De goods and services tax (GST, vergelijkbaar met de btw) is ${F.gstPercent}%, en bedrijven moeten een totaalprijs tonen waarin die is inbegrepen. Wat u ziet, betaalt u aan de kassa.`,
        },
        { h2: "Geen toeslagen meer op kaartbetalingen" },
        {
          p: `Vanaf 1 oktober 2026 mogen bedrijven geen toeslag (surcharge) meer rekenen voor betalingen met Visa, Mastercard, American Express of eftpos — creditcard, debetkaart of prepaidkaart. Vóór die datum rekenden veel cafés en taxi's een percentage voor kaartbetalingen. Wordt u nu toch een kaarttoeslag gerekend, dan is het de moeite waard daar vragen over te stellen.`,
        },
        {
          note: "Toeslagen voor het weekend en feestdagen zijn iets anders en zijn nog steeds toegestaan — sommige cafés en restaurants rekenen er een op zondag en op feestdagen. Ook uw eigen bank kan kosten rekenen voor betalingen in buitenlandse valuta; dat is een zaak tussen u en uw bank.",
        },
        { h2: "Fooi" },
        {
          p: `Tourism Australia noemt fooi vrijwillig en in de meeste gevallen niet verwacht. In betere restaurants is ongeveer 10% voor goede bediening gebruikelijk. In een café of taxi beledigt u niemand als u geen fooi geeft.`,
        },
        { h2: `Contant geld vanaf ${F.cashReportThreshold} moet u aangeven` },
        {
          p: `Er is geen maximum aan hoeveel geld u Australië in of uit mag nemen. Maar als u contant geld en betaalmiddelen zoals reischeques, cheques of postwissels bij u hebt — in welke valuta ook — met een gezamenlijke waarde van ${F.cashReportThreshold} of meer, moet u dat bij aankomst en bij vertrek aangeven.`,
        },
        {
          ul: [
            "Doe de aangifte online via het formulier van AUSTRAC voordat u door de douane gaat, en bewaar het ontvangstbewijs",
            "Kunt u het online formulier niet gebruiken, dan is er een papieren formulier bij een medewerker van Border Force of de politie",
            "Vraag 5 op de Incoming Passenger Card vraagt hetzelfde",
            "Aangeven is gratis. Contant geld verdelen over reisgenoten om onder de grens te blijven is illegaal",
          ],
        },
        { source: { label: "AUSTRAC — Geld over internationale grenzen meenemen", url: "https://www.austrac.gov.au/individuals/moving-money-across-international-borders" } },
        { source: { label: "ACCC — Toeslagen op kaartbetalingen", url: "https://www.accc.gov.au/consumers/pricing/card-surcharges" } },
        { source: { label: "Tourism Australia — Belangrijke feiten over Australië", url: "https://www.australia.com/en/facts-and-planning/about-australia/key-facts-about-australia.html" } },
      ],
      faq: [
        {
          q: `Is het verboden meer dan ${F.cashReportThreshold} mee te nemen naar Australië?`,
          a: `Nee. Er is geen maximum. Bedragen van ${F.cashReportThreshold} of meer aan contant geld en vergelijkbare betaalmiddelen moet u alleen aangeven.`,
        },
        {
          q: "Mogen winkels nog extra rekenen als ik met de kaart betaal?",
          a: `Niet voor Visa, Mastercard, American Express of eftpos vanaf 1 oktober 2026. Toeslagen voor het weekend en feestdagen zijn iets anders en zijn nog toegestaan.`,
        },
        {
          q: "Moet ik in Australië fooi geven?",
          a: "Het is vrijwillig. Ongeveer 10% in betere restaurants is gebruikelijk; elders wordt het niet verwacht.",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "belastingteruggave-trs",
      enSlug: "tourist-refund-scheme",
      title: `Tourist Refund Scheme: GST terugkrijgen bij vertrek uit Australië (vanaf ${F.trsMinSpend})`,
      description: `Besteed ${F.trsMinSpend}+ bij één bedrijf binnen ${F.trsDays} dagen voor vertrek, neem de spullen mee en claim op de luchthaven tot ${F.trsCutoffMinutes} minuten voor vertrek.`,
      related: ["geld-en-fooi", "vloeistoffen-handbagage", "aankomst-in-australie"],
      blocks: [
        {
          p: `Bezoekers kunnen de GST — en op wijn ook de wine equalisation tax (WET) — terugvragen over goederen die ze in Australië kopen en bij vertrek meenemen. De regeling wordt op de dag van vertrek op de luchthaven uitgevoerd door de Australian Border Force.`,
        },
        { h2: "De voorwaarden" },
        {
          ul: [
            `U hebt ${F.trsMinSpend} of meer (inclusief GST) uitgegeven bij één bedrijf — één ABN. Dat mogen meerdere facturen van hetzelfde bedrijf zijn`,
            `U hebt de goederen gekocht binnen ${F.trsDays} dagen voordat u Australië verlaat`,
            "U hebt de originele belastingfacturen (tax invoices). Op facturen van AUD 1,000 of meer moet uw naam staan",
            "U neemt de goederen zelf mee als u vertrekt — ze mogen niet per post of vracht worden verzonden",
          ],
        },
        { h2: "De claim op de luchthaven" },
        {
          p: `Laat op de dag van vertrek uw paspoort, instapkaart, de goederen en de originele facturen zien bij de TRS-balie, uiterlijk ${F.trsCutoffMinutes} minuten voor uw geplande vertrek. De ABF raadt aan er ${F.trsArriveMinutes} minuten voor vertrek te zijn, omdat de rijen op drukke momenten zo lang kunnen zijn.`,
        },
        {
          ul: [
            "U kunt niet online claimen, niet vóór de dag van vertrek en niet op een binnenlandse luchthaven",
            "Er is geen contante terugbetaling — het geld gaat naar een creditcard (Amex, Diners, JCB, Mastercard, UnionPay of Visa) of een Australische bankrekening, meestal binnen 60 dagen",
            "De officiële TRS-app slaat uw gegevens en facturen op als QR-code om de rij te versnellen; de claim aan de balie blijft nodig",
          ],
        },
        { h2: "Waarvoor u niets terugkrijgt" },
        {
          ul: [
            "Diensten — accommodatie, tours, taxi's, autohuur",
            "Goederen die geheel of gedeeltelijk in Australië zijn gebruikt, waaronder eten, drinken, parfum en supplementen",
            "Alcohol behalve wijn onder 22% alcohol, en tabak",
            "Cadeaukaarten en tegoedbonnen, en goederen die u per post of vracht naar huis stuurt",
          ],
        },
        { source: { label: "Australian Border Force (ABF) — Tourist Refund Scheme", url: "https://www.abf.gov.au/entering-and-leaving-australia/tourist-refund-scheme" } },
        { source: { label: "Australian Border Force (ABF) — De claim indienen", url: "https://www.abf.gov.au/entering-and-leaving-australia/tourist-refund-scheme/making-the-claim" } },
      ],
      faq: [
        {
          q: `Mag ik bonnen van verschillende winkels optellen om aan ${F.trsMinSpend} te komen?`,
          a: `Nee. De ${F.trsMinSpend} moet bij één bedrijf (hetzelfde ABN) zijn besteed, al mag het over meerdere facturen van dat bedrijf verdeeld zijn.`,
        },
        {
          q: "Kan ik het geld contant terugkrijgen?",
          a: "Nee. Terugbetalingen gaan naar een creditcard of een Australische bankrekening.",
        },
        {
          q: "Tot wanneer kan ik claimen?",
          a: `Uiterlijk ${F.trsCutoffMinutes} minuten voor uw geplande vertrek. De ABF raadt aan ${F.trsArriveMinutes} minuten voor vertrek bij de TRS-balie te zijn.`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "zorg-voor-bezoekers",
      enSlug: "healthcare-for-visitors",
      title: "Zorg in Australië voor Nederlanders en Belgen: Medicare via het zorgakkoord",
      description: `Nederland en België horen bij de ${F.rhcaCountries} landen met een zorgakkoord met Australië: met paspoort, visum en EHIC krijgt u via Medicare publieke zorg.`,
      related: ["medicijnen-meenemen", "alarmnummers-australie", "aankomst-in-australie"],
      blocks: [
        {
          p: `Goed nieuws voor Nederlanders en Belgen: Nederland en België hebben een wederzijds zorgakkoord met Australië, een Reciprocal Health Care Agreement (RHCA). Daardoor kunt u zich als bezoeker inschrijven bij Medicare, het Australische publieke zorgstelsel, en krijgt u medisch noodzakelijke zorg vergoed zoals hieronder beschreven.`,
        },
        { h2: "Inschrijven bij Medicare" },
        {
          p: "Bezoekers uit landen met een akkoord schrijven zich in bij Medicare en krijgen een gele Medicare-kaart. U hebt nodig: uw paspoort, uw visum en een bewijs dat u thuis verzekerd bent — meestal uw Europese zorgpas (EHIC, met de landcode NL of BE) of het bewijs van uw Nederlandse of Belgische ziektekostenverzekering. Bent u maar kort in Australië en hebt u geen behandeling nodig, dan hoeft u zich niet in te schrijven. Een behandeling van vóór de inschrijving kan na inschrijving alsnog gedekt zijn.",
        },
        { h2: "Hoe lang de dekking duurt" },
        {
          p: "Voor Nederland en België loopt de dekking tot het eerste van deze drie verloopt: uw nationale verzekering, uw EHIC of uw visum.",
        },
        { h2: "Wat het akkoord dekt" },
        {
          ul: [
            "Medisch noodzakelijke zorg buiten het ziekenhuis (bijvoorbeeld een bezoek aan de huisarts, de GP)",
            "Medisch noodzakelijke zorg als publieke patiënt (public patient) in een openbaar ziekenhuis, met en zonder opname",
            "Sommige receptgeneesmiddelen via de PBS (het Australische geneesmiddelenvergoedingssysteem) tegen het algemene tarief",
          ],
        },
        { h2: "Wat het niet dekt" },
        {
          ul: [
            "Behandeling als privépatiënt (private patient), in een openbaar of een privéziekenhuis",
            "Naar Australië reizen om er een medische behandeling te krijgen",
            "Alles wat niet medisch noodzakelijk is",
          ],
        },
        {
          note: "Het akkoord maakt een verzekering niet overbodig. Het Department of Home Affairs schrijft op de eVisitor-pagina dat u zelf aansprakelijk bent voor al uw zorgkosten in Australië, en raadt een ziektekostenverzekering aan.",
        },
        { h2: `De ${F.rhcaCountries} landen met een akkoord` },
        {
          p: "België, Finland, Ierland, Italië, Malta, Nederland, Nieuw-Zeeland, Noorwegen, Slovenië, Zweden en het Verenigd Koninkrijk. Duitsland, Frankrijk, Spanje, Oostenrijk en Zwitserland hebben geen akkoord: reisgenoten met zo'n paspoort betalen de volledige kosten van ziekenhuis, ambulance of arts, tenzij ze verzekerd zijn.",
        },
        { source: { label: "Services Australia — Reciprocal Health Care Agreements (zorgakkoorden)", url: "https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements" } },
        { source: { label: "Services Australia — Australië bezoeken", url: "https://www.servicesaustralia.gov.au/visiting-australia" } },
        { source: { label: "Department of Home Affairs — eVisitor (subclass 651): ziektekostenverzekering", url: F.officialUrl } },
      ],
      faq: [
        {
          q: "Heeft Nederland (of België) een zorgakkoord met Australië?",
          a: "Ja. Nederland en België hebben een Reciprocal Health Care Agreement met Australië. Met uw paspoort, visum en EHIC of bewijs van uw Nederlandse of Belgische verzekering kunt u zich inschrijven bij Medicare.",
        },
        {
          q: "Is een reisverzekering verplicht voor het eVisitor?",
          a: "Het Department of Home Affairs raadt een ziektekostenverzekering aan en stelt dat u zelf aansprakelijk bent voor al uw zorgkosten in Australië. Controleer uw eigen visumvoorwaarden in VEVO of in uw toekenningsbrief. Behandeling als privépatiënt valt niet onder het akkoord.",
        },
        {
          q: "Hoe lang ben ik als Nederlander of Belg gedekt?",
          a: "Tot het eerste van deze drie verloopt: uw nationale verzekering, uw EHIC of uw visum.",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "medicijnen-meenemen",
      enSlug: "bringing-medicines",
      title: `Medicijnen meenemen naar Australië: de regel van ${F.medicineSupplyMonths} maanden`,
      description: `Tot ${F.medicineSupplyMonths} maanden voorraad voor eigen gebruik, in de originele verpakking, met recept of artsenverklaring — en aangegeven. Sommige middelen zijn verboden.`,
      related: ["zorg-voor-bezoekers", "vloeistoffen-handbagage", "smartgate-australie"],
      blocks: [
        {
          p: `Australië laat reizigers zonder vergunning medicijnen voor eigen gebruik meenemen onder de "traveller's exemption" (vrijstelling voor reizigers) — zolang ze zich aan de voorwaarden houden. De vrijstelling geldt ook voor een direct familielid dat met u meereist.`,
        },
        { h2: "De voorwaarden" },
        {
          ul: [
            `Neem niet meer mee dan een voorraad voor ${F.medicineSupplyMonths} maanden`,
            "Bewaar medicijnen zo mogelijk in de originele verpakking met het apothekersetiket",
            "Neem het recept of een brief van uw arts mee met de naam van het medicijn en de dosering",
            "Geef bij aankomst alle medicijnen aan bij de Australian Border Force",
            "Geef of verkoop uw medicijnen niet aan anderen, en neem wat overblijft mee als u vertrekt",
          ],
        },
        { h2: "Sterke pijnstillers, ADHD-medicatie en slaapmiddelen" },
        {
          p: "Het Office of Drug Control stelt dat receptgeneesmiddelen zoals morfine, oxycodon, methadon, methylfenidaat, Adderall en benzodiazepinen onder de traveller's exemption vallen — met een recept of artsenverklaring. Voor elk middel met codeïne, in welke sterkte ook, hebt u eveneens een recept of artsenverklaring nodig.",
        },
        { h2: "Medicijnen die u niet mag meenemen" },
        {
          ul: [
            "Abortusmiddelen zoals mifepriston (RU486)",
            "Yohimbe (yohimbine)",
            "Aminofenazon, aminopyrine, dipyron (metamizol)",
            "Amygdaline (laetrile)",
          ],
        },
        { h2: "Als uw voorraad op raakt" },
        {
          p: "Ga naar een Australische huisarts (GP) voor een Australisch recept. Medicijnen laten opsturen van thuis is beperkt: receptplichtige middelen hebben een geldig Australisch recept nodig, het pakket mag niet meer dan een voorraad voor 3 maanden bevatten, en gereguleerde middelen (controlled medicines) en vapes mogen helemaal niet per post.",
        },
        { source: { label: "Therapeutic Goods Administration (TGA) — Met medicijnen Australië inreizen", url: "https://www.tga.gov.au/resources/consumer-information-and-resources/travelling-medicines-and-medical-devices/entering-australia" } },
        { source: { label: "Office of Drug Control — Met medicijnen naar Australië reizen", url: "https://www.odc.gov.au/travellers/travelling-or-australia-medicines-and-medical-devices" } },
        { source: { label: "TGA — Personal Importation Scheme", url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/access-pathways/personal-importation-scheme" } },
      ],
      faq: [
        {
          q: "Hoeveel medicijnen mag ik meenemen naar Australië?",
          a: `Tot een voorraad voor ${F.medicineSupplyMonths} maanden voor eigen gebruik, of voor een direct familielid dat met u meereist.`,
        },
        {
          q: "Mag ik mijn ADHD-medicatie meenemen?",
          a: "Middelen zoals methylfenidaat en Adderall vallen onder de traveller's exemption, mits u een recept of artsenverklaring bij u hebt en ze aangeeft.",
        },
        {
          q: "Mag mijn familie mijn medicijnen naar Australië opsturen?",
          a: "Alleen onder strikte voorwaarden. Receptplichtige middelen hebben een geldig Australisch recept nodig, en gereguleerde middelen (controlled medicines) mogen niet per post.",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "roken-vapen-alcohol",
      enSlug: "smoking-vaping-and-alcohol",
      title: "Roken, vapen en alcohol in Australië: de regels die bezoekers missen",
      description: `Vapes alleen bij de apotheek; reizigers mogen er ${F.vapeDevices} meenemen voor eigen behandeling. Alcohol vanaf ${F.legalAge}; rookverbod in besloten openbare ruimtes.`,
      related: ["autorijden-in-australie", "medicijnen-meenemen", "alarmnummers-australie"],
      blocks: [
        {
          p: `Australië reguleert vapes als therapeutische producten, niet als gewone consumentenproducten. Dat verrast veel bezoekers — vooral wie gewend is vapes thuis gewoon in de winkel te kopen.`,
        },
        { h2: "Vapes" },
        {
          ul: [
            "Vapes worden alleen verkocht door deelnemende apotheken. Tabakszaken, vapeshops en buurtsupers mogen geen enkele vape verkopen, met of zonder nicotine",
            `Volwassenen vanaf ${F.legalAge} jaar kunnen in een apotheek mogelijk zonder recept vapes met maximaal 20 mg/mL nicotine kopen, als de wet van de staat dat toestaat — met legitimatie, een maximum van een maandvoorraad en alleen in de smaken munt, menthol of tabak`,
            "U mag geen vapes voor eigen gebruik bestellen bij buitenlandse websites, ook niet met een recept",
            "Sommige staten verbieden het bezit van nicotinevapes zonder recept",
          ],
        },
        { h2: "Vapes meenemen" },
        {
          p: `Reizigers die per vliegtuig of schip aankomen, mogen maximaal ${F.vapeDevices} vapes, ${F.vapeAccessories} accessoires (cartridges, capsules of pods) en ${F.vapeLiquid} vape-vloeistof meenemen. Volgens de formulering van de TGA moeten ze bestemd zijn voor de behandeling van de reiziger zelf, of van iemand voor wie hij of zij zorgt op dezelfde vlucht of hetzelfde schip. Border Force kan goederen in beslag nemen als vermoed wordt dat ze onrechtmatig worden ingevoerd.`,
        },
        { h2: "Roken" },
        {
          p: `Het is verboden tabak te verkopen aan iemand onder ${F.legalAge}. In elke staat en elk territorium geldt een rookverbod in besloten openbare ruimtes — onder meer het openbaar vervoer, kantoren, winkelcentra, bioscopen en luchthavens. De regels voor buitenruimtes zoals terrassen, stranden en speeltuinen verschillen per staat. De hoeveelheid tabak die u belastingvrij mag invoeren is beperkt; controleer dat vóór uw reis bij de Australian Border Force.`,
        },
        { h2: "Alcohol" },
        {
          ul: [
            `U moet ${F.legalAge} jaar of ouder zijn om alcohol te kopen of te drinken in een gelegenheid met vergunning`,
            "Waar u buiten mag drinken, bepalen de staten en gemeenten — veel openbare plekken zijn alcoholvrije zones",
            `De grens voor alcohol in het verkeer is een bloedalcoholgehalte van ${F.bacLimit} — en nul voor leerling- en beginnende bestuurders (learner en provisional)`,
          ],
        },
        { source: { label: "TGA — Vapes: informatie voor particulieren", url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/therapeutic-vaping-goods/vaping-hub/vapes-information-individuals-and-patients" } },
        { source: { label: "Department of Health — Rook- en tabakswetgeving in Australië", url: "https://www.health.gov.au/topics/smoking-vaping-and-tobacco/about-smoking/laws-in-australia" } },
        { source: { label: "Department of Health — Alcoholwetgeving in Australië", url: "https://www.health.gov.au/topics/alcohol/about-alcohol/alcohol-laws-in-australia" } },
      ],
      faq: [
        {
          q: "Kan ik in Australië een vape in de supermarkt of buurtwinkel kopen?",
          a: "Nee. Vapes mogen alleen door deelnemende apotheken worden verkocht. Voor andere winkels is het verboden welke vape dan ook te verkopen.",
        },
        {
          q: "Hoeveel vapes mag ik meenemen naar Australië?",
          a: `Maximaal ${F.vapeDevices} vapes, ${F.vapeAccessories} accessoires en ${F.vapeLiquid} vloeistof, bestemd voor uw eigen behandeling of die van iemand onder uw zorg die met u meereist.`,
        },
        {
          q: "Vanaf welke leeftijd mag je in Australië alcohol drinken?",
          a: `${F.legalAge} jaar. U moet ${F.legalAge} of ouder zijn om alcohol te kopen of te drinken in een gelegenheid met vergunning.`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "alarmnummers-australie",
      enSlug: "emergency-and-safety",
      title: `Alarmnummers in Australië: ${F.emergency}, ${F.emergencyMobile} — en waarom 911 niet werkt`,
      description: `Bel ${F.emergency} voor politie, brandweer of ambulance; ${F.emergencyMobile} werkt vanaf mobiel. 911 wordt niet doorgeschakeld. Geen spoed: ${F.policeAssistance}. Tolk indien nodig.`,
      related: ["zorg-voor-bezoekers", "telefoon-en-simkaart", "autorijden-in-australie"],
      blocks: [
        {
          p: `Triple Zero (${F.emergency}) is het Australische alarmnummer voor politie, brandweer en ambulance bij levensbedreigende of spoedeisende situaties. Bellen is gratis, vanaf een vaste lijn, een mobiele telefoon, een telefooncel of een satelliettelefoon.`,
        },
        { h2: "De nummers" },
        {
          ul: [
            `${F.emergency} — politie, brandweer, ambulance`,
            `${F.emergencyMobile} — werkt alleen vanaf mobiele telefoons en verbindt met dezelfde ${F.emergency}-dienst. Het heeft geen voorrang op ${F.emergency}`,
            `${F.policeAssistance} — Police Assistance Line, voor politiezaken zonder spoed`,
            `${F.ses} — State Emergency Service, voor hulp bij overstromingen, storm en tsunami's als het niet levensbedreigend is`,
            "Bel geen 911 — oproepen naar 911 worden niet doorgeschakeld naar 000",
          ],
        },
        { h2: "Als u geen Engels spreekt" },
        {
          p: `Bel ${F.emergency}, zeg "police", "fire" of "ambulance" en blijf aan de lijn. Er wordt een tolk geregeld.`,
        },
        { h2: "Mobiele telefoons en bereik" },
        {
          ul: [
            `Heeft uw eigen netwerk geen bereik, dan gebruikt uw telefoon automatisch een ander beschikbaar netwerk om ${F.emergency} te bereiken — zelfs zonder simkaart`,
            `Is er op geen enkel netwerk bereik, dan kunt u ${F.emergency} mobiel niet bereiken. Grote delen van de outback hebben geen bereik`,
            `${F.emergency} is niet per sms bereikbaar`,
            "Komt een oproep niet binnen ongeveer 5 seconden tot stand, hang dan op en probeer het opnieuw",
          ],
        },
        {
          note: `De 3G-netwerken in Australië zijn uitgeschakeld. 3G-telefoons en sommige oudere 4G-telefoons — vooral telefoons die in het buitenland zijn gekocht — kunnen ${F.emergency} mogelijk niet bellen. De toezichthouder raadt af dit te testen door ${F.emergency} te bellen; vraag het in plaats daarvan aan de mobiele provider.`,
        },
        { source: { label: "Department of Infrastructure — Triple Zero (000)", url: "https://www.infrastructure.gov.au/media-communications/phone/triple-zero" } },
        { source: { label: "ACMA — Uitschakeling van het 3G-netwerk", url: "https://www.acma.gov.au/3g-network-switch" } },
      ],
      faq: [
        {
          q: "Werkt 911 in Australië? En 112?",
          a: `911 niet: oproepen naar 911 worden niet doorgeschakeld. Bel ${F.emergency}, of ${F.emergencyMobile} vanaf een mobiele telefoon.`,
        },
        {
          q: "Kan ik 000 bellen zonder Australische simkaart?",
          a: `Ja, zolang er op een of ander mobiel netwerk bereik is. Uw telefoon maakt voor ${F.emergency} verbinding met elk beschikbaar netwerk, ook zonder actieve simkaart.`,
        },
        {
          q: "Kan ik 000 een sms sturen?",
          a: `Nee. ${F.emergency} is niet per sms bereikbaar.`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "telefoon-en-simkaart",
      enSlug: "phones-and-sim-cards",
      title: "Telefoon en simkaart in Australië: ID-controle en het einde van 3G",
      description: "Een Australische prepaid simkaart vereist een ID-controle — een paspoort op uw naam volstaat. Controleer eerst of uw telefoon 4G/5G aankan.",
      related: ["alarmnummers-australie", "stekkers-en-stroom", "geld-en-fooi"],
      blocks: [
        {
          p: "U kunt roamen met uw abonnement van thuis, of een Australische prepaid simkaart kopen. Bij een lokale simkaart zijn twee dingen anders dan in veel andere landen: de identiteitscontrole en het einde van 3G.",
        },
        { h2: "De identiteitscontrole" },
        {
          p: "Telecomaanbieders zijn wettelijk verplicht uw naam, geboortedatum en adres vast te leggen en uw identiteit te controleren als u een prepaid mobiele dienst activeert. Een paspoort op uw naam is een van de geaccepteerde documenten — het hoeft geen Australisch paspoort te zijn. Het document mag niet verlopen zijn.",
        },
        {
          p: "Aanbieders kunnen uw identiteit ook op andere manieren controleren, zoals een controle van een overheidsdocument, een bestaand account, een kaarttransactie of een erkende Digital ID-dienst. Hoe een aanbieder het precies doet — in de winkel of online — bepaalt die aanbieder zelf.",
        },
        { h2: "Controleer eerst uw telefoon" },
        {
          p: "De 3G-netwerken in Australië zijn uitgeschakeld. Telefoons die alleen 3G ondersteunen werken helemaal niet meer, en sommige 4G-telefoons die voor gesprekken op 3G terugvallen, kunnen niet bellen en geen hulpdiensten bereiken. Oudere 4G-telefoons en in het buitenland gekochte telefoons lopen het meeste risico. Aanbieders mogen geen telefoon aansluiten waarvan ze vaststellen dat die Triple Zero (000) niet kan bellen.",
        },
        {
          ul: [
            "Vraag de aanbieder vóór u betaalt te bevestigen dat uw model op zijn 4G/5G-netwerk werkt en bellen via VoLTE ondersteunt",
            "Test het bellen van hulpdiensten niet door 000 te bellen",
          ],
        },
        {
          note: "De ID-regels voor prepaid worden in 2026 herzien door de toezichthouder (ACMA). De basis — een ID-controle, waarbij een paspoort wordt geaccepteerd — geldt al jaren.",
        },
        { source: { label: "ACMA — ID-controle voor prepaid mobiel", url: "https://www.acma.gov.au/id-checks-prepaid-mobiles" } },
        { source: { label: "Federal Register of Legislation — Identity Checks for Prepaid Mobile Carriage Services Determination 2017", url: "https://www.legislation.gov.au/F2017L00399/latest/text" } },
        { source: { label: "ACMA — Zorgen dat mobiele telefoons 000 bereiken na het einde van 3G", url: "https://www.acma.gov.au/ensuring-mobiles-can-reach-000-after-3g-shutdown" } },
      ],
      faq: [
        {
          q: "Kan ik met een Nederlands of Belgisch paspoort een Australische simkaart kopen?",
          a: "Ja. Een paspoort op uw naam is een geaccepteerd identiteitsdocument om een prepaid dienst te activeren. Het mag niet verlopen zijn.",
        },
        {
          q: "Werkt mijn telefoon van thuis in Australië?",
          a: "De meeste recente telefoons wel, maar de 3G-netwerken zijn gesloten. Oudere 4G-telefoons en sommige in het buitenland gekochte telefoons kunnen mogelijk niet bellen of 000 niet bereiken — laat de aanbieder uw model controleren.",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "stekkers-en-stroom",
      enSlug: "power-plugs",
      title: `Stekkers in Australië: type I en ${F.voltage} ${F.frequency}`,
      description: `Australië gebruikt een stekker met twee platte pinnen in een omgekeerde V (type I) en ${F.voltage}, ${F.frequency}. Kijk op het etiket van uw lader voor u inplugt.`,
      related: ["telefoon-en-simkaart", "geld-en-fooi", "aankomst-in-australie"],
      blocks: [
        {
          p: `In Australische stopcontacten past een stekker met twee platte metalen pinnen in de vorm van een omgekeerde V, soms met een derde pin in het midden. Tourism Australia noemt dit de "Type 1"-stekker; internationaal heet hij meestal type I. Europese stekkers met ronde pinnen, zoals die in Nederland en België, passen niet zonder verloopstekker.`,
        },
        { h2: "Spanning" },
        {
          p: `De netspanning is ${F.voltage}, ${F.frequency} (Tourism Australia noemt ook het bereik 220–240 V). De meeste laders voor telefoons en laptops zijn geschikt voor 100–240 V en werken met alleen een verloopstekker. Kijk op het etiket: valt 230 V er niet onder, dan hebt u een spanningsomvormer nodig, niet alleen een verloopstekker.`,
        },
        { h2: "Wat u inpakt" },
        {
          ul: [
            "Een verloopstekker voor type I, of een universele reisstekker",
            "Een omvormer alleen voor apparaten die niet geschikt zijn voor 230 V",
          ],
        },
        { source: { label: "Tourism Australia — Handige tips voor uw reis naar Australië", url: "https://www.australia.com/en-us/facts-and-planning/about-australia/useful-tips.html" } },
        { source: { label: "Tourism Australia — De ultieme paklijst voor Australië", url: "https://www.australia.com/en/facts-and-planning/planning-tools/ultimate-australia-packing-list.html" } },
      ],
      faq: [
        {
          q: "Heb ik een verloopstekker nodig in Australië?",
          a: "Ja, als uw stekkers niet het Australische type met twee platte pinnen in een omgekeerde V zijn. Nederlandse en Belgische stekkers met ronde pinnen hebben een verloopstekker nodig.",
        },
        {
          q: "Heb ik een spanningsomvormer nodig?",
          a: `Alleen voor apparaten die niet geschikt zijn voor ${F.voltage}. Laders met 100–240 V op het etiket werken met alleen een verloopstekker.`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "feestdagen-australie",
      enSlug: "public-holidays",
      title: "Feestdagen in Australië 2026–2027: data per staat",
      description: "Elke staat en elk territorium bepaalt zijn eigen feestdagen. De data die overal gelden, die welke verschillen, en wat dat betekent voor uw reis.",
      related: ["geld-en-fooi", "autorijden-in-australie", "aankomst-in-australie"],
      blocks: [
        {
          p: `Er is geen landelijke lijst. Elke staat en elk territorium bepaalt zijn eigen feestdagen en beslist of er een vervangende vrije dag komt als een feestdag in het weekend valt. De data hieronder komen van de Fair Work Ombudsman, de federale toezichthouder voor arbeidszaken.`,
        },
        { h2: "Resterende feestdagen in 2026" },
        {
          ul: [
            "Vr 25 december — Eerste Kerstdag (overal)",
            "Za 26 december — Boxing Day (Tweede Kerstdag; in South Australia: Proclamation Day holiday)",
            "Ma 28 december — extra feestdag voor Boxing Day in de meeste staten en territoria; in Tasmanië valt Boxing Day zelf op deze maandag",
          ],
        },
        { h2: "2027: de data die overal gelden" },
        {
          ul: [
            "Vr 1 januari — Nieuwjaarsdag",
            "Di 26 januari — Australia Day",
            "Vr 26 maart — Goede Vrijdag",
            "Ma 29 maart — Tweede Paasdag",
            "Za 25 december — Eerste Kerstdag, met ma 27 december als extra feestdag",
          ],
        },
        { h2: "2027: waar de staten verschillen" },
        {
          ul: [
            "Paaszaterdag (27 maart) en Eerste Paasdag (28 maart) staan niet op de lijst voor Tasmanië; Western Australia vermeldt Paaszaterdag niet",
            "Anzac Day valt op zondag 25 april. NSW en WA voegen maandag 26 april toe; de ACT, NT en Queensland houden de dag op maandag 26 april; SA, Tasmanië en Victoria houden alleen de zondag",
            "King's Birthday is in de meeste staten maandag 14 juni — maar maandag 27 september in Western Australia en maandag 4 oktober in Queensland",
            "Labour Day loopt uiteen van maart (WA, Victoria, Tasmanië) tot mei (Queensland, NT) en oktober (NSW, ACT, SA)",
            "Boxing Day valt op zondag 26 december, met dinsdag 28 december als extra dag op de meeste plaatsen; in Tasmanië valt Boxing Day op dinsdag 28 december",
          ],
        },
        {
          note: "De data voor 2027 zijn zoals vooraf gepubliceerd door de Fair Work Ombudsman. De vrijdag vóór de AFL Grand Final in Victoria staat nog niet vast. Sommige regionale en stedelijke feestdagen (bijvoorbeeld show days) staan hier niet in.",
        },
        { h2: "Wat het betekent voor een bezoeker" },
        {
          p: "Banken en overheidskantoren gaan dicht. In steden blijven veel winkels, cafés en restaurants open, soms met een feestdagtoeslag op de rekening. Het openbaar vervoer rijdt meestal volgens een beperkte dienstregeling. Lange weekenden en de zomervakantie van Kerst tot januari zijn drukke periodes voor binnenlands toerisme; boek accommodatie en huurauto dus vroeg.",
        },
        { source: { label: "Fair Work Ombudsman — Feestdagen 2026", url: "https://www.fairwork.gov.au/employment-conditions/public-holidays/2026-public-holidays" } },
        { source: { label: "Fair Work Ombudsman — Feestdagen 2027", url: "https://www.fairwork.gov.au/employment-conditions/public-holidays/2027-public-holidays" } },
      ],
      faq: [
        {
          q: "Valt King's Birthday overal in Australië op dezelfde dag?",
          a: "Nee. De meeste staten vieren het op de tweede maandag van juni, maar Western Australia eind september en Queensland begin oktober.",
        },
        {
          q: "Is Boxing Day overal een feestdag?",
          a: "Ja, al heet het in South Australia de Proclamation Day holiday, en als het in het weekend valt verschilt de vervangende dag per staat.",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "autorijden-in-australie",
      enSlug: "driving-in-australia",
      title: "Autorijden in Australië met een buitenlands rijbewijs: regels per staat",
      description: `Elke staat heeft eigen regels: NSW staat tot ${F.driveNswMonths} maanden toe op een buitenlands rijbewijs, de NT ${F.driveNtMonths}. Niet-Engelse rijbewijzen: vertaling of IDP.`,
      related: ["feestdagen-australie", "alarmnummers-australie", "roken-vapen-alcohol"],
      blocks: [
        {
          p: `In Australië rijdt men links. Op rotondes rijdt u met de klok mee en geeft u voorrang aan verkeer van rechts. Snelheden staan in kilometer per uur: 50 km/h in de bebouwde kom tenzij anders aangegeven, meestal 100 km/h op andere wegen en tot 110 km/h op sommige snelwegen.`,
        },
        { h2: "Rijbewijzen zijn een zaak van de staat" },
        {
          p: "Er is geen landelijke regel voor bezoekers. Elke staat en elk territorium bepaalt hoe lang een bezoeker op een buitenlands rijbewijs mag rijden en wat daarbij moet. Controleer de regels van elke staat waar u gaat rijden — een roadtrip kan door meerdere staten gaan.",
        },
        {
          ul: [
            `New South Wales: toeristen en tijdelijke bezoekers mogen tot ${F.driveNswMonths} maanden rijden op een geldig buitenlands rijbewijs`,
            `Victoria: toegestaan als u minder dan ${F.driveNswMonths} maanden in Victoria woont en rijdt, gerekend vanaf uw eerste aankomst`,
            `Northern Territory: tot ${F.driveNtMonths} maanden voor bezoekers en nieuwe inwoners`,
            "Queensland, Western Australia, South Australia, Tasmanië en de ACT: bezoekers mogen rijden op een geldig buitenlands rijbewijs; de officiële pagina's noemen geen vaste termijn voor bezoekers",
          ],
        },
        {
          note: "Termijnen van drie maanden die u kunt tegenkomen voor Queensland, NSW, WA en de ACT gelden voor Australische staatsburgers en houders van een permanent of ingezetenenvisum, niet voor toeristen.",
        },
        { h2: "Als uw rijbewijs niet in het Engels is" },
        {
          p: "Neem een Engelse vertaling van uw rijbewijs of een internationaal rijbewijs (International Driving Permit, IDP) mee, samen met het rijbewijs zelf. De details verschillen: het Northern Territory zegt een IDP te halen vóór vertrek, of een officiële vertaling van een erkende NT-vertaler; Queensland zegt een erkende Engelse vertaling bij u te hebben. Een IDP vervangt nooit uw eigen rijbewijs — neem altijd beide mee.",
        },
        { h2: "Voordat u vertrekt" },
        {
          ul: [
            "Heb uw rijbewijs altijd bij u als u rijdt",
            "Uw rijbewijs moet geldig zijn en gelden voor het soort voertuig waarin u rijdt",
            `De grens voor alcohol in het verkeer is een bloedalcoholgehalte van ${F.bacLimit}`,
            "De afstanden tussen plaatsen zijn groot — plan tankstops en rustpauzes",
          ],
        },
        { source: { label: "Transport for NSW — Op bezoek vanuit het buitenland", url: "https://www.nsw.gov.au/driving-boating-and-transport/driving-nsw/driver-and-rider-licences/visiting-or-moving-to-nsw/visiting-from-overseas-or-interstate" } },
        { source: { label: "VicRoads — Rijden met uw buitenlandse rijbewijs", url: "https://www.vicroads.vic.gov.au/licences/convert-your-licence/driving-with-your-overseas-licence" } },
        { source: { label: "Queensland Government — Rijden in Queensland met een buitenlands rijbewijs", url: "https://www.qld.gov.au/transport/licensing/driver-licensing/overseas/driving" } },
        { source: { label: "NT Government — Rijbewijsregels voor bezoekende bestuurders", url: "https://nt.gov.au/driving/licence/new-nt-residents-and-visitors/driver-licence-rules-for-new-nt-residents-and-visiting-drivers" } },
        { source: { label: "Tourism Australia — Autorijden in Australië", url: "https://www.australia.com/en/facts-and-planning/getting-around/driving-in-australia.html" } },
      ],
      faq: [
        {
          q: "Heb ik in Australië een internationaal rijbewijs (IDP) nodig?",
          a: "Is uw rijbewijs in het Engels, dan in het algemeen niet. Is het dat niet, neem dan een Engelse vertaling of een IDP mee, samen met uw rijbewijs. De precieze regel hangt af van de staat.",
        },
        {
          q: "Hoe lang mag ik rijden op mijn Nederlandse of Belgische rijbewijs?",
          a: `Dat hangt af van de staat: tot ${F.driveNswMonths} maanden in NSW, minder dan ${F.driveNswMonths} maanden verblijf in Victoria, tot ${F.driveNtMonths} maanden in de NT. Andere staten noemen geen vaste termijn voor bezoekers.`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
  ],
};
