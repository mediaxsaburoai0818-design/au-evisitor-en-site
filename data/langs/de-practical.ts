import { FACTS as F } from "./_schema";
import type { PracticalPack } from "./_schema";

/**
 * Deutsch – Praxisseiten nach der Ankunft (Übersetzung von data/pages-practical.ts, 2026-10-12).
 * Leser: Inhaber eines eVisitor aus Deutschland, Österreich und der Schweiz. Anrede: Sie.
 * ⚠️ Zahlen nur über F. Fakten nicht verändern – nur die Sprache.
 * ⚠️ DE/AT/CH haben KEIN Reciprocal Health Care Agreement mit Australien → Kernaussage der Gesundheitsseite.
 */

const CHECKED = "12. Oktober 2026";

export const dePractical: PracticalPack = {
  ui: { faq: "Häufige Fragen", source: "Quelle", related: "Weitere Themen" },
  articles: [
    {
      slug: "ankunft-in-australien",
      enSlug: "arriving-in-australia",
      title: "Ankunft in Australien: Praxisratgeber für eVisitor-Reisende",
      description:
        "Das Visum bringt Sie ins Flugzeug. Was danach kommt – SmartGate, Bargeld, Steuererstattung, Gesundheit, Autofahren, Notfälle – amtlich geprüft.",
      checked: CHECKED,
      practical: false,
      related: ["smartgate-australien", "geld-und-trinkgeld", "gesundheitsversorgung-australien"],
      blocks: [
        {
          p: `Das eVisitor (oder die ETA, falls Ihr Pass nicht auf der eVisitor-Liste steht) beantwortet nur eine Frage: ob Sie nach Australien reisen und jeweils bis zu ${F.stayMonths} Monate bleiben dürfen. Was am Flughafen passiert, was Sie mitnehmen dürfen, wie Sie bezahlen oder was Sie tun, wenn etwas schiefgeht, steht darin nicht. Darum geht es auf diesen Seiten. Jede Seite ist anhand der zuständigen australischen Behörde geprüft und verlinkt auf sie.`,
        },
        { h2: "An der Grenze" },
        { links: ["smartgate-australien", "medikamente-mitnehmen"] },
        { h2: "Geld" },
        { links: ["geld-und-trinkgeld", "steuerrueckerstattung-trs"] },
        { h2: "Unterwegs und erreichbar" },
        { links: ["autofahren-in-australien", "handy-und-sim-karte", "steckdosen-und-strom", "feiertage-australien"] },
        { h2: "Gesundheit und Sicherheit" },
        { links: ["gesundheitsversorgung-australien", "notrufnummern-australien", "rauchen-vapes-alkohol"] },
        { h2: "Rückflug" },
        { links: ["fluessigkeiten-handgepaeck"] },
        {
          note: "Wozu wir keine eigene Seite geschrieben haben: öffentlicher Nahverkehr. Es gibt kein landesweites System – jede Stadt hat ihre eigene Karte und eigene Tarife (Opal in Sydney, myki in Melbourne, go card im Südosten von Queensland). Informieren Sie sich bei der Verkehrsbehörde der Stadt, die Sie besuchen.",
        },
      ],
    },
    {
      slug: "smartgate-australien",
      enSlug: "smartgate-australia",
      title: `SmartGate in Australien: wer es nutzen kann (ab ${F.smartgateMinAge} Jahren) und was Sie trotzdem brauchen`,
      description: `Ankunfts-SmartGates stehen in einem ABF-Test Reisenden ab ${F.smartgateMinAge} Jahren mit jedem gültigen Pass offen. Die Einreisekarte auf Papier bleibt Pflicht.`,
      checked: CHECKED,
      practical: true,
      related: ["ankunft-in-australien", "medikamente-mitnehmen", "fluessigkeiten-handgepaeck"],
      blocks: [
        {
          p: `SmartGates sind die automatischen Passkontroll-Schleusen der Australian Border Force (ABF) an den großen internationalen Flughäfen Australiens. Bei der Ankunft liest das Gate Ihren Pass, macht ein Foto und gleicht Ihr Gesicht damit ab. Klappt das, druckt es ein Ticket aus und Sie gehen weiter.`,
        },
        { h2: "Wer die Ankunfts-SmartGates nutzen kann" },
        {
          ul: [
            "Sie reisen mit einem gültigen Reisepass",
            `Sie sind mindestens ${F.smartgateMinHeight} groß`,
            `Sie sind mindestens ${F.smartgateMinAge} Jahre alt`,
            `Kinder unter ${F.smartgateAccompanyUnder} Jahren müssen von einem Elternteil oder Erziehungsberechtigten begleitet werden`,
          ],
        },
        {
          p: `Bis vor Kurzem brauchte man einen elektronischen Reisepass (Chip-Symbol auf dem Umschlag). Die ABF testet die Ankunfts-SmartGates derzeit für alle Pässe, sodass auch ein Pass ohne Chip funktionieren kann. Eine Liste von Staatsangehörigkeiten veröffentlicht die ABF nicht: Die Kriterien oben betreffen den Pass und die reisende Person, nicht das Land, das den Pass ausgestellt hat.`,
        },
        {
          note: `Ihr eVisitor und das SmartGate sind zwei verschiedene Dinge. Das Visum erlaubt Ihnen das Boarding und die Einreise; das SmartGate ist nur die Art, wie Ihr Pass kontrolliert wird. Die Nutzung des Gates ändert nichts an Ihren Visumsbedingungen.`,
        },
        { h2: "Die Incoming Passenger Card gilt weiterhin" },
        {
          p: `Die meisten Passagiere müssen eine Einreisekarte auf Papier ausfüllen, die Incoming Passenger Card (IPC). Sie wird im Flugzeug oder im Terminal verteilt und muss auf Englisch ausgefüllt werden. Die ABF veröffentlicht übersetzte Musterkarten – unter anderem auf Deutsch –, damit Sie die Fragen verstehen; die Karte, die Sie abgeben, beantworten Sie aber auf Englisch.`,
        },
        {
          p: `Am Ausgang geben Sie Ihr SmartGate-Ticket und Ihre Incoming Passenger Card einem Beamten der Border Force oder der Biosicherheitskontrolle. Eine digitale Alternative (die Australia Travel Declaration) gibt es nur als Pilotprojekt – für eingeladene Passagiere ausgewählter Qantas-Flüge nach Brisbane, Sydney und Melbourne über die Qantas-App. Alle anderen nutzen die Papierkarte.`,
        },
        { h2: "Sprachen auf den Bildschirmen" },
        {
          p: `Die Bildschirme der Ankunfts-SmartGates sind auf Englisch, mit ${F.smartgateArrivalLanguages} weiteren wählbaren Sprachen, darunter Deutsch, Niederländisch, Französisch, Italienisch, Spanisch, Koreanisch sowie vereinfachtes und traditionelles Chinesisch. Die Abflug-SmartGates zeigen Englisch, Japanisch, Koreanisch und Mandarin.`,
        },
        { h2: "Bei der Ausreise" },
        {
          p: `Alle Reisenden mit einem gültigen maschinenlesbaren Pass können die Abflug-SmartGates nutzen. Das gilt nicht, wenn Sie mit jemandem reisen, der Hilfe braucht, um den Anweisungen zu folgen – etwa einem Baby oder Kleinkind.`,
        },
        { source: { label: "Australian Border Force (ABF) — Wer die Ankunfts-SmartGates nutzen kann", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgate/arrivals/who-can-use-smartgates" } },
        { source: { label: "Australian Border Force (ABF) — SmartGates bei der Ausreise", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgate/departures" } },
        { source: { label: "Australian Border Force (ABF) — Incoming Passenger Card", url: "https://www.abf.gov.au/entering-and-leaving-australia/crossing-the-border/at-the-border/incoming-passenger-card-(ipc)" } },
      ],
      faq: [
        {
          q: "Können Deutsche, Österreicher und Schweizer das SmartGate nutzen?",
          a: `Die ABF veröffentlicht keine Liste von Staatsangehörigkeiten. Die Ankunfts-SmartGates stehen Reisenden mit gültigem Pass offen, die mindestens ${F.smartgateMinAge} Jahre alt und ${F.smartgateMinHeight} groß sind; die ABF testet die Gates derzeit für alle Pässe.`,
        },
        {
          q: "Brauche ich die Incoming Passenger Card auch, wenn ich das SmartGate nutze?",
          a: "Ja. Sie geben Ihr SmartGate-Ticket zusammen mit der ausgefüllten Incoming Passenger Card am Ausgang ab. Die Karte muss auf Englisch ausgefüllt werden.",
        },
        {
          q: "Kann mein fünfjähriges Kind das SmartGate nutzen?",
          a: `Nein. Für die Ankunfts-SmartGates müssen Reisende mindestens ${F.smartgateMinAge} Jahre alt sein. Familien mit jüngeren Kindern werden von einem Beamten abgefertigt.`,
        },
      ],
    },
    {
      slug: "fluessigkeiten-handgepaeck",
      enSlug: "airport-security-liquids",
      title: `Flüssigkeiten auf Flügen ab Australien: die ${F.lagsContainer}-Regel und das Pulver-Limit`,
      description: `Internationale Flüge ab Australien: Flüssigkeiten, Aerosole und Gele in Behältern bis ${F.lagsContainer} in einem Klarsichtbeutel. Auch Pulver sind begrenzt.`,
      checked: CHECKED,
      practical: true,
      related: ["steuerrueckerstattung-trs", "medikamente-mitnehmen", "ankunft-in-australien"],
      blocks: [
        {
          p: `Australien beschränkt Flüssigkeiten, Aerosole, Gele und bestimmte Pulver im Handgepäck auf internationalen Flügen. Für aufgegebenes Gepäck und die meisten Inlandsflüge gelten die Grenzen nicht.`,
        },
        { h2: "Wann die Grenzen gelten" },
        {
          ul: [
            "Wenn Sie Australien mit einem internationalen Flug verlassen",
            "Wenn Sie über Australien von einem Land in ein anderes umsteigen",
            "Auf der Inlandsstrecke eines Flugs, der von einem internationalen Terminal in Australien abfliegt",
            "Vor dem Boarding eines Flugs nach Australien an dessen letztem Halt vor Australien",
          ],
        },
        { h2: "Flüssigkeiten, Aerosole und Gele" },
        {
          ul: [
            `Jeder Behälter darf höchstens ${F.lagsContainer} (bzw. 100 g) fassen – ein größerer Behälter ist auch dann nicht erlaubt, wenn er nur teilweise gefüllt ist`,
            `Alle Behälter müssen in einen durchsichtigen, wiederverschließbaren Plastikbeutel passen, dessen vier Seiten zusammen höchstens ${F.lagsBagPerimeterCm} cm messen (zum Beispiel 20 × 20 cm)`,
            "Ein Beutel pro Person; Sie dürfen Beutel für Personen in Ihrer Obhut, auch Kinder, mitführen",
            "Aerosole müssen eine Kappe oder Verriegelung haben",
          ],
        },
        {
          p: `Brotaufstriche und weiche Lebensmittel zählen als Flüssigkeiten oder Gele. Die offizielle Liste nennt Vegemite, Erdnussbutter, Honig und Joghurt – Mitbringsel, an denen Reisende bei der Kontrolle häufig scheitern.`,
        },
        { h2: "Pulver" },
        {
          p: `Anorganische Pulver – etwa Salz, Salzpeelings, Sand und manche Talkumpuder – müssen in Behältern von höchstens ${F.powderLimit} sein, und die Gesamtmenge pro Person darf ${F.powderLimit} nicht überschreiten. Organische Pulver wie Babynahrung, Kaffee, Proteinpulver, Mehl, Gewürze und Zucker sind nicht begrenzt. Möglicherweise müssen Sie Pulver bei der Kontrolle separat vorzeigen.`,
        },
        { h2: "Ausnahmen" },
        {
          ul: [
            "Babyprodukte in angemessener Menge",
            "Verschreibungspflichtige und rezeptfreie Medikamente, die Sie während des Flugs brauchen – unter Umständen müssen Sie einen Nachweis wie ein ärztliches Schreiben vorlegen",
            "Medizinische Geräte und medizinische Ausrüstung",
          ],
        },
        { h2: "Duty-free" },
        {
          p: `Am Flughafen gekaufte Duty-free-Flüssigkeiten müssen in dem versiegelten, manipulationssicheren Beutel bleiben, in den sie verpackt wurden, zusammen mit dem Kaufbeleg.`,
        },
        { source: { label: "Department of Home Affairs (TravelSECURE) — Was Sie mitnehmen dürfen und was nicht", url: "https://www.homeaffairs.gov.au/about-us/what-we-do/travelsecure/security-screening-at-airports/what-you-can-and-cant-bring" } },
      ],
      faq: [
        {
          q: "Gelten die Flüssigkeitsgrenzen auch auf Inlandsflügen in Australien?",
          a: "Auf den meisten Inlandsflügen nicht. Sie gelten aber auf der Inlandsstrecke eines Flugs, der von einem internationalen Terminal abfliegt.",
        },
        {
          q: "Darf ich ein Glas Vegemite im Handgepäck mitnehmen?",
          a: `Nur in einem Behälter von höchstens ${F.lagsContainer} in Ihrem Flüssigkeitsbeutel. Größere Gläser gehören ins aufgegebene Gepäck.`,
        },
        {
          q: "Ist Babynahrung begrenzt?",
          a: "Pulverförmige Babynahrung ist ein organisches Pulver und nicht begrenzt. Babyprodukte in angemessener Menge sind von den Flüssigkeitsgrenzen ausgenommen.",
        },
      ],
    },
    {
      slug: "geld-und-trinkgeld",
      enSlug: "money-and-tipping",
      title: "Geld in Australien: Bargeld, Kartenaufschläge, GST und Trinkgeld",
      description: `Preise enthalten ${F.gstPercent} % GST, Kartenaufschläge sind ab 1. Oktober 2026 verboten, Trinkgeld ist freiwillig. Bargeld ab ${F.cashReportThreshold} ist anzumelden.`,
      checked: CHECKED,
      practical: true,
      related: ["steuerrueckerstattung-trs", "handy-und-sim-karte", "feiertage-australien"],
      blocks: [
        {
          p: `In Australien zahlt man mit dem Australischen Dollar (AUD). Einige Regeln sollten Sie kennen, bevor Sie etwas bezahlen – eine davon hat sich erst vor Kurzem geändert.`,
        },
        { h2: "Der Preis auf dem Etikett enthält die Steuer" },
        {
          p: `Die Goods and Services Tax (GST, vergleichbar mit der Mehrwertsteuer) beträgt ${F.gstPercent} %, und Geschäfte müssen einen Gesamtpreis inklusive GST ausweisen. Was Sie sehen, zahlen Sie an der Kasse.`,
        },
        { h2: "Keine Kartenaufschläge mehr" },
        {
          p: `Ab 1. Oktober 2026 dürfen Geschäfte keinen Aufschlag mehr für Zahlungen mit Visa-, Mastercard-, American-Express- oder eftpos-Karten verlangen – egal ob Kredit-, Debit- oder Prepaidkarte. Vor diesem Datum schlugen viele Cafés und Taxis bei Kartenzahlung einen Prozentsatz auf. Wird Ihnen jetzt noch ein Kartenaufschlag berechnet, lohnt es sich, nachzufragen.`,
        },
        {
          note: "Wochenend- und Feiertagszuschläge sind etwas anderes und weiterhin erlaubt – manche Cafés und Restaurants schlagen sonntags und an Feiertagen etwas auf. Außerdem kann Ihre eigene Bank eine Auslandseinsatzgebühr berechnen; das ist eine Sache zwischen Ihnen und Ihrer Bank.",
        },
        { h2: "Trinkgeld" },
        {
          p: `Laut Tourism Australia ist Trinkgeld freiwillig und an den meisten Orten nicht erwartet. In gehobenen Restaurants sind etwa 10 % für guten Service üblich. Wer im Café oder Taxi kein Trinkgeld gibt, beleidigt niemanden.`,
        },
        { h2: `Bargeld ab ${F.cashReportThreshold} muss angemeldet werden` },
        {
          p: `Es gibt keine Obergrenze dafür, wie viel Geld Sie nach Australien ein- oder ausführen dürfen. Wenn Sie aber Bargeld und Zahlungsmittel wie Reiseschecks, Schecks oder Zahlungsanweisungen – in beliebiger Währung – im Gesamtwert von ${F.cashReportThreshold} oder mehr bei sich haben, müssen Sie das bei der Ein- und bei der Ausreise anmelden.`,
        },
        {
          ul: [
            "Melden Sie es vor der Zollkontrolle online über das AUSTRAC-Formular an und bewahren Sie die Bestätigung auf",
            "Wenn Sie das Online-Formular nicht nutzen können, erhalten Sie ein Papierformular bei der Border Force oder der Polizei",
            "Frage 5 der Incoming Passenger Card fragt dasselbe ab",
            "Die Anmeldung ist kostenlos. Bargeld auf mehrere Reisende aufzuteilen, um unter dem Schwellenwert zu bleiben, ist illegal",
          ],
        },
        { source: { label: "AUSTRAC — Geld über internationale Grenzen bringen", url: "https://www.austrac.gov.au/individuals/moving-money-across-international-borders" } },
        { source: { label: "ACCC — Kartenaufschläge (card surcharges)", url: "https://www.accc.gov.au/consumers/pricing/card-surcharges" } },
        { source: { label: "Tourism Australia — Wichtige Fakten über Australien", url: "https://www.australia.com/en/facts-and-planning/about-australia/key-facts-about-australia.html" } },
      ],
      faq: [
        {
          q: `Ist es verboten, ${F.cashReportThreshold} oder mehr nach Australien mitzubringen?`,
          a: `Nein. Es gibt keine Obergrenze. Beträge ab ${F.cashReportThreshold} in Bargeld und vergleichbaren Zahlungsmitteln müssen lediglich angemeldet werden.`,
        },
        {
          q: "Dürfen Geschäfte noch einen Aufschlag für Kartenzahlung verlangen?",
          a: `Für Visa-, Mastercard-, American-Express- und eftpos-Karten nicht mehr ab 1. Oktober 2026. Wochenend- und Feiertagszuschläge sind etwas anderes und weiterhin erlaubt.`,
        },
        {
          q: "Sollte ich in Australien Trinkgeld geben?",
          a: "Das ist freiwillig. In gehobenen Restaurants sind etwa 10 % üblich; anderswo wird es nicht erwartet.",
        },
      ],
    },
    {
      slug: "steuerrueckerstattung-trs",
      enSlug: "tourist-refund-scheme",
      title: `Tourist Refund Scheme (TRS): GST bei der Ausreise zurückholen (ab ${F.trsMinSpend})`,
      description: `Ab ${F.trsMinSpend} bei einem Händler innerhalb von ${F.trsDays} Tagen vor Abreise, Waren dabei, am Flughafen spätestens ${F.trsCutoffMinutes} Minuten vor Abflug beantragen.`,
      checked: CHECKED,
      practical: true,
      related: ["geld-und-trinkgeld", "fluessigkeiten-handgepaeck", "ankunft-in-australien"],
      blocks: [
        {
          p: `Besucher können sich die GST – und bei Wein die Wine Equalisation Tax (WET) – auf Waren zurückholen, die sie in Australien kaufen und bei der Ausreise mitnehmen. Abgewickelt wird das Tourist Refund Scheme (TRS) von der Australian Border Force am Flughafen, am Tag Ihrer Abreise.`,
        },
        { h2: "Die Voraussetzungen" },
        {
          ul: [
            `Sie haben bei einem einzigen Unternehmen – einer ABN (australische Unternehmensnummer) – ${F.trsMinSpend} oder mehr (inklusive GST) ausgegeben. Das können mehrere Rechnungen desselben Unternehmens sein`,
            `Sie haben die Waren innerhalb von ${F.trsDays} Tagen vor Ihrer Ausreise gekauft`,
            "Sie haben die Original-Steuerrechnungen (tax invoices). Rechnungen ab AUD 1,000 müssen Ihren Namen tragen",
            "Sie führen die Waren bei der Ausreise mit sich – sie dürfen nicht per Post oder Fracht verschickt werden",
          ],
        },
        { h2: "Antrag am Flughafen" },
        {
          p: `Zeigen Sie am Abreisetag Reisepass, Bordkarte, die Waren und die Originalrechnungen am TRS-Schalter vor, spätestens ${F.trsCutoffMinutes} Minuten vor dem planmäßigen Abflug. Die ABF empfiehlt, ${F.trsArriveMinutes} Minuten vor Abflug dort zu sein, weil die Warteschlangen zu Stoßzeiten so lang sein können.`,
        },
        {
          ul: [
            "Sie können nicht online, nicht vor dem Abreisetag und nicht an einem Inlandsflughafen beantragen",
            "Es gibt keine Barerstattung – das Geld geht auf eine Kreditkarte (Amex, Diners, JCB, Mastercard, UnionPay oder Visa) oder ein australisches Bankkonto, in der Regel innerhalb von 60 Tagen",
            "Die offizielle TRS-App speichert Ihre Daten und Rechnungen als QR-Code, damit es in der Schlange schneller geht; den persönlichen Antrag ersetzt sie nicht",
          ],
        },
        { h2: "Was nicht erstattet wird" },
        {
          ul: [
            "Dienstleistungen – Unterkunft, Touren, Taxis, Mietwagen",
            "Waren, die ganz oder teilweise in Australien verbraucht wurden, darunter Speisen, Getränke, Parfum und Nahrungsergänzungsmittel",
            "Alkohol außer Wein unter 22 % Alkohol, sowie Tabak",
            "Geschenkkarten und Gutscheine sowie Waren, die Sie nach Hause schicken lassen",
          ],
        },
        { source: { label: "Australian Border Force (ABF) — Tourist Refund Scheme", url: "https://www.abf.gov.au/entering-and-leaving-australia/tourist-refund-scheme" } },
        { source: { label: "Australian Border Force (ABF) — Den Antrag stellen", url: "https://www.abf.gov.au/entering-and-leaving-australia/tourist-refund-scheme/making-the-claim" } },
      ],
      faq: [
        {
          q: `Kann ich Belege verschiedener Geschäfte zusammenrechnen, um ${F.trsMinSpend} zu erreichen?`,
          a: `Nein. Die ${F.trsMinSpend} müssen bei einem Unternehmen (derselben ABN) ausgegeben werden, dürfen aber auf mehrere Rechnungen dieses Unternehmens verteilt sein.`,
        },
        {
          q: "Kann ich mir die Erstattung bar auszahlen lassen?",
          a: "Nein. Erstattungen gehen auf eine Kreditkarte oder ein australisches Bankkonto.",
        },
        {
          q: "Bis wann kann ich den Antrag stellen?",
          a: `Spätestens ${F.trsCutoffMinutes} Minuten vor dem planmäßigen Abflug. Die ABF empfiehlt, ${F.trsArriveMinutes} Minuten vor Abflug am TRS-Schalter zu sein.`,
        },
      ],
    },
    {
      slug: "gesundheitsversorgung-australien",
      enSlug: "healthcare-for-visitors",
      title: "Arztkosten in Australien: kein Gesundheitsabkommen für Deutschland, Österreich und die Schweiz",
      description: `Deutschland, Österreich und die Schweiz haben kein Gesundheitsabkommen mit Australien – Sie zahlen selbst. Abkommen gibt es nur mit ${F.rhcaCountries} Ländern.`,
      checked: CHECKED,
      practical: true,
      related: ["medikamente-mitnehmen", "notrufnummern-australien", "ankunft-in-australien"],
      blocks: [
        {
          p: "Das Wichtigste vorweg: Deutschland, Österreich und die Schweiz haben kein Reciprocal Health Care Agreement (RHCA, Abkommen über gegenseitige Gesundheitsversorgung) mit Australien. Wenn Sie aus diesen Ländern einreisen, zahlen Sie Krankenhaus-, Krankenwagen- und Arztkosten in voller Höhe selbst – es sei denn, Sie sind versichert. Planen Sie deshalb eine Auslandsreisekrankenversicherung ein.",
        },
        {
          note: "Das Department of Home Affairs sagt es auf der eVisitor-Seite deutlich: Sie haften persönlich für alle Ihre Gesundheitskosten in Australien, und es empfiehlt eine Krankenversicherung.",
        },
        {
          p: "Australiens öffentliches Gesundheitssystem, Medicare, ist für Einwohner gedacht. Besucher bezahlen ihre Behandlung selbst – außer ihr Land hat ein RHCA mit Australien.",
        },
        { h2: `Die ${F.rhcaCountries} Abkommensländer` },
        {
          p: "Belgien, Finnland, Irland, Italien, Malta, die Niederlande, Neuseeland, Norwegen, Slowenien, Schweden und das Vereinigte Königreich.",
        },
        {
          note: "Kein Abkommen haben unter anderem Deutschland, Frankreich, Spanien, Österreich, die Schweiz, Südkorea, China und Taiwan. Besucher aus diesen Ländern tragen alle Krankenhaus-, Krankenwagen- und Arztkosten selbst, sofern sie nicht versichert sind.",
        },
        { h2: "Was das Abkommen abdeckt (nur für Abkommensländer)" },
        {
          ul: [
            "Medizinisch notwendige Behandlung außerhalb des Krankenhauses (zum Beispiel beim Hausarzt, GP)",
            "Medizinisch notwendige Behandlung als öffentlicher Patient in einem öffentlichen Krankenhaus, stationär und ambulant",
            "Einige verschreibungspflichtige Medikamente über das PBS (Pharmaceutical Benefits Scheme) zum allgemeinen Tarif",
          ],
        },
        {
          p: "Besucher aus Irland (und Neuseeland) sind nur für Behandlung im öffentlichen Krankenhaus und PBS-Medikamente abgedeckt – nicht für Arztbesuche. Sie melden sich nicht bei Medicare an und müssen das Personal im Krankenhaus oder in der Apotheke bitten, sie nach dem Abkommen zu behandeln.",
        },
        { h2: "Was es nicht abdeckt" },
        {
          ul: [
            "Behandlung als Privatpatient, in einem öffentlichen oder privaten Krankenhaus",
            "Reisen nach Australien, um sich dort behandeln zu lassen",
            "Alles, was medizinisch nicht notwendig ist",
          ],
        },
        { h2: "Wie lange der Schutz gilt" },
        {
          ul: [
            "Italien und Malta: bis zu 6 Monate ab Ankunft oder bis zum Ablauf des Visums, falls früher",
            "Vereinigtes Königreich und Irland: bis zum Ablauf des Visums",
            "Niederlande, Belgien, Norwegen und Slowenien: bis die nationale Versicherung, die EHIC oder das Visum abläuft – je nachdem, was zuerst eintritt",
          ],
        },
        { h2: "Anmeldung bei Medicare" },
        {
          p: "Besucher aus Abkommensländern (außer Irland und Neuseeland) melden sich bei Medicare an und erhalten eine gelbe Medicare-Karte. Dazu brauchen sie Pass, Visum und einen Nachweis über ihren Versicherungsschutz im Heimatland – meist die EHIC (bzw. GHIC für Einwohner des Vereinigten Königreichs) oder die nationale Krankenversicherungskarte. Wer nur kurz in Australien ist und keine Behandlung braucht, muss sich nicht anmelden. Behandlungen vor der Anmeldung können nach der Anmeldung trotzdem abgedeckt sein.",
        },
        { source: { label: "Services Australia — Reciprocal Health Care Agreements", url: "https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements" } },
        { source: { label: "Services Australia — Besuch in Australien", url: "https://www.servicesaustralia.gov.au/visiting-australia" } },
        { source: { label: "Department of Home Affairs — eVisitor (Subclass 651): Krankenversicherung", url: F.officialUrl } },
      ],
      faq: [
        {
          q: "Hat Deutschland, Österreich oder die Schweiz ein Gesundheitsabkommen mit Australien?",
          a: "Nein. Deutschland, Österreich und die Schweiz haben kein Reciprocal Health Care Agreement mit Australien. Besucher aus diesen Ländern sollten eine Auslandsreisekrankenversicherung abschließen.",
        },
        {
          q: "Ist eine Krankenversicherung für das eVisitor Pflicht?",
          a: "Das Department of Home Affairs empfiehlt sie und weist darauf hin, dass Sie persönlich für alle Gesundheitskosten in Australien haften. Prüfen Sie Ihre eigenen Visumsbedingungen in VEVO oder in Ihrem Bewilligungsschreiben.",
        },
        {
          q: "Welche europäischen Länder haben ein Abkommen mit Australien?",
          a: `Insgesamt ${F.rhcaCountries} Länder: Belgien, Finnland, Irland, Italien, Malta, die Niederlande, Norwegen, Slowenien, Schweden und das Vereinigte Königreich – dazu Neuseeland.`,
        },
      ],
    },
    {
      slug: "medikamente-mitnehmen",
      enSlug: "bringing-medicines",
      title: `Medikamente nach Australien mitnehmen: die ${F.medicineSupplyMonths}-Monats-Regel`,
      description: `Bis zu ${F.medicineSupplyMonths} Monatsvorrat für den Eigenbedarf, in Originalverpackung, mit Rezept oder Arztbrief – und angemeldet. Manche Medikamente sind verboten.`,
      checked: CHECKED,
      practical: true,
      related: ["gesundheitsversorgung-australien", "fluessigkeiten-handgepaeck", "smartgate-australien"],
      blocks: [
        {
          p: `Australien erlaubt Reisenden, Medikamente für den Eigenbedarf ohne Genehmigung mitzubringen – nach der sogenannten „traveller's exemption“ (Ausnahmeregel für Reisende), sofern deren Bedingungen eingehalten werden. Die Ausnahme gilt auch für ein mitreisendes enges Familienmitglied.`,
        },
        { h2: "Die Bedingungen" },
        {
          ul: [
            `Nehmen Sie höchstens einen Vorrat für ${F.medicineSupplyMonths} Monate mit`,
            "Lassen Sie die Medikamente möglichst in der Originalverpackung mit dem Apothekenetikett",
            "Führen Sie das Rezept oder ein Schreiben Ihres Arztes mit, das den Namen des Medikaments und die Dosierung nennt",
            "Melden Sie bei der Ankunft alle Medikamente bei der Australian Border Force an",
            "Geben oder verkaufen Sie Ihre Medikamente nicht an andere und nehmen Sie Reste bei der Ausreise wieder mit",
          ],
        },
        { h2: "Starke Schmerzmittel, ADHS-Medikamente und Schlafmittel" },
        {
          p: "Das Office of Drug Control stellt klar, dass verschreibungspflichtige Medikamente wie Morphin, Oxycodon, Methadon, Methylphenidat, Adderall und Benzodiazepine unter die traveller's exemption fallen – mit Rezept oder Arztbrief. Jedes Medikament mit Codein, gleich welcher Stärke, braucht ebenfalls ein Rezept oder einen Arztbrief.",
        },
        { h2: "Medikamente, die Sie nicht mitbringen dürfen" },
        {
          ul: [
            "Abortiva wie Mifepriston (RU486)",
            "Yohimbe (Yohimbin)",
            "Aminophenazon, Aminopyrin, Dipyron (Metamizol)",
            "Amygdalin (Laetril)",
          ],
        },
        {
          note: "Metamizol (Dipyron) steht auf dieser Liste. Prüfen Sie Ihre Reiseapotheke darauf, bevor Sie packen.",
        },
        { h2: "Wenn Ihnen die Medikamente ausgehen" },
        {
          p: "Gehen Sie zu einem australischen Arzt (GP), um ein australisches Rezept zu bekommen. Medikamente von zu Hause schicken zu lassen ist eingeschränkt: Verschreibungspflichtige Medikamente brauchen ein gültiges australisches Rezept, die Sendung darf einen Vorrat von 3 Monaten nicht überschreiten, und kontrollierte Medikamente sowie Vapes dürfen überhaupt nicht verschickt werden.",
        },
        { source: { label: "Therapeutic Goods Administration (TGA) — Mit Medikamenten nach Australien einreisen", url: "https://www.tga.gov.au/resources/consumer-information-and-resources/travelling-medicines-and-medical-devices/entering-australia" } },
        { source: { label: "Office of Drug Control — Mit Medikamenten nach Australien reisen", url: "https://www.odc.gov.au/travellers/travelling-or-australia-medicines-and-medical-devices" } },
        { source: { label: "TGA — Personal Importation Scheme", url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/access-pathways/personal-importation-scheme" } },
      ],
      faq: [
        {
          q: "Wie viele Medikamente darf ich nach Australien mitnehmen?",
          a: `Bis zu einem Vorrat für ${F.medicineSupplyMonths} Monate für den Eigenbedarf oder für ein mitreisendes enges Familienmitglied.`,
        },
        {
          q: "Darf ich meine ADHS-Medikamente mitnehmen?",
          a: "Medikamente wie Methylphenidat und Adderall fallen unter die traveller's exemption, sofern Sie ein Rezept oder einen Arztbrief dabeihaben und sie anmelden.",
        },
        {
          q: "Kann meine Familie mir Medikamente nach Australien schicken?",
          a: "Nur unter strengen Bedingungen. Verschreibungspflichtige Medikamente brauchen ein gültiges australisches Rezept, und kontrollierte Medikamente dürfen nicht verschickt werden.",
        },
      ],
    },
    {
      slug: "rauchen-vapes-alkohol",
      enSlug: "smoking-vaping-and-alcohol",
      title: "Rauchen, Vapes und Alkohol in Australien: Regeln, die Besucher übersehen",
      description: `Vapes gibt es nur in Apotheken; Reisende dürfen ${F.vapeDevices} zur eigenen Behandlung mitbringen. Alkohol ab ${F.legalAge}, Rauchverbot in geschlossenen öffentlichen Räumen.`,
      checked: CHECKED,
      practical: true,
      related: ["autofahren-in-australien", "medikamente-mitnehmen", "smartgate-australien"],
      blocks: [
        {
          p: `Australien reguliert Vapes (E-Zigaretten) als therapeutische Produkte, nicht als Konsumgüter. Das überrascht viele Besucher – besonders diejenigen, die Vapes zu Hause im Supermarkt oder am Kiosk kaufen.`,
        },
        { h2: "Vapes" },
        {
          ul: [
            "Vapes werden nur von teilnehmenden Apotheken verkauft. Tabakläden, Vape-Shops und Kioske dürfen keine Vapes verkaufen, weder mit noch ohne Nikotin",
            `Erwachsene ab ${F.legalAge} Jahren können Vapes mit höchstens 20 mg/mL Nikotin unter Umständen ohne Rezept in der Apotheke kaufen, wo das Recht des Bundesstaats es erlaubt – mit Ausweis, begrenzt auf einen Monatsvorrat und nur in den Geschmacksrichtungen Minze, Menthol oder Tabak`,
            "Sie dürfen Vapes nicht über ausländische Websites für den Eigenbedarf bestellen, auch nicht mit Rezept",
            "Einige Bundesstaaten verbieten den Besitz von Nikotin-Vapes ohne Rezept",
          ],
        },
        { h2: "Vapes mitbringen" },
        {
          p: `Reisende, die per Flugzeug oder Schiff ankommen, dürfen bis zu ${F.vapeDevices} Vapes, ${F.vapeAccessories} Zubehörteile (Kartuschen, Kapseln oder Pods) und ${F.vapeLiquid} Liquid mitbringen. Laut TGA müssen sie zur Behandlung des Reisenden selbst bestimmt sein oder einer Person, die er auf demselben Flug oder Schiff betreut. Beamte der Border Force können Waren beschlagnahmen, die sie für eine unerlaubte Einfuhr halten.`,
        },
        { h2: "Rauchen" },
        {
          p: `Tabak an Personen unter ${F.legalAge} Jahren zu verkaufen ist verboten. In geschlossenen öffentlichen Räumen ist das Rauchen in allen Bundesstaaten und Territorien verboten – unter anderem in öffentlichen Verkehrsmitteln, Büros, Einkaufszentren, Kinos und Flughäfen. Die Regeln für Außenbereiche wie Gastronomieterrassen, Strände und Spielplätze sind von Staat zu Staat verschieden. Auch die zollfreie Menge an Tabak ist begrenzt.`,
        },
        { h2: "Alkohol" },
        {
          ul: [
            `Alkohol kaufen oder in einem lizenzierten Lokal trinken dürfen Sie ab ${F.legalAge} Jahren`,
            "Wo man im Freien trinken darf, legen Bundesstaaten und Gemeinden fest – viele öffentliche Orte sind alkoholfreie Zonen",
            `Die Promillegrenze am Steuer liegt bei einer Blutalkoholkonzentration von ${F.bacLimit} (also 0,5 Promille) – und bei null für Fahrschüler und Fahranfänger mit Probeführerschein`,
          ],
        },
        { source: { label: "TGA — Vapes: Informationen für Privatpersonen", url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/therapeutic-vaping-goods/vaping-hub/vapes-information-individuals-and-patients" } },
        { source: { label: "Department of Health — Rauch- und Tabakgesetze in Australien", url: "https://www.health.gov.au/topics/smoking-vaping-and-tobacco/about-smoking/laws-in-australia" } },
        { source: { label: "Department of Health — Alkoholgesetze in Australien", url: "https://www.health.gov.au/topics/alcohol/about-alcohol/alcohol-laws-in-australia" } },
      ],
      faq: [
        {
          q: "Kann ich in Australien am Kiosk eine Vape kaufen?",
          a: "Nein. Vapes dürfen nur von teilnehmenden Apotheken verkauft werden. Für andere Händler ist der Verkauf jeglicher Vapes verboten.",
        },
        {
          q: "Wie viele Vapes darf ich nach Australien mitbringen?",
          a: `Bis zu ${F.vapeDevices} Vapes, ${F.vapeAccessories} Zubehörteile und ${F.vapeLiquid} Liquid – zur eigenen Behandlung oder für eine mitreisende Person in Ihrer Obhut.`,
        },
        {
          q: "Ab wie vielen Jahren darf man in Australien Alkohol trinken?",
          a: `Ab ${F.legalAge}. Um Alkohol zu kaufen oder in einem lizenzierten Lokal zu trinken, müssen Sie mindestens ${F.legalAge} Jahre alt sein.`,
        },
      ],
    },
    {
      slug: "notrufnummern-australien",
      enSlug: "emergency-and-safety",
      title: `Notrufnummern in Australien: ${F.emergency}, ${F.emergencyMobile} – und warum 911 nicht funktioniert`,
      description: `${F.emergency} für Polizei, Feuerwehr, Rettung; ${F.emergencyMobile} nur per Handy. 911 wird nicht umgeleitet. Polizei ohne Notfall: ${F.policeAssistance}. Dolmetscher auf Wunsch.`,
      checked: CHECKED,
      practical: true,
      related: ["gesundheitsversorgung-australien", "handy-und-sim-karte", "autofahren-in-australien"],
      blocks: [
        {
          p: `Triple Zero (${F.emergency}) ist Australiens Notrufnummer für Polizei, Feuerwehr und Rettungsdienst bei lebensbedrohlichen oder zeitkritischen Situationen. Anrufe sind kostenlos – vom Festnetz, Handy, Münztelefon oder Satellitentelefon.`,
        },
        { h2: "Die Nummern" },
        {
          ul: [
            `${F.emergency} — Polizei, Feuerwehr, Rettungsdienst`,
            `${F.emergencyMobile} — funktioniert nur vom Handy und verbindet mit demselben ${F.emergency}-Dienst. Es hat keinen Vorrang vor ${F.emergency}`,
            `${F.policeAssistance} — Police Assistance Line, für Polizeiangelegenheiten ohne Notfall`,
            `${F.ses} — State Emergency Service, für Hilfe bei Hochwasser, Sturm und Tsunami, wenn keine Lebensgefahr besteht`,
            `Wählen Sie nicht 911 – Anrufe an 911 werden nicht an ${F.emergency} weitergeleitet`,
          ],
        },
        { h2: "Wenn Sie kein Englisch sprechen" },
        {
          p: `Rufen Sie ${F.emergency} an, sagen Sie „police“, „fire“ oder „ambulance“ und bleiben Sie in der Leitung. Ein Dolmetscher wird organisiert.`,
        },
        { h2: "Handy und Netzabdeckung" },
        {
          ul: [
            `Hat Ihr Netz keinen Empfang, nutzt Ihr Handy automatisch ein anderes verfügbares Netz, um ${F.emergency} zu erreichen – sogar ohne SIM-Karte`,
            `Gibt es in keinem Netz Empfang, erreichen Sie ${F.emergency} nicht per Handy. Große Teile des australischen Outbacks haben keine Abdeckung`,
            `${F.emergency} ist nicht per SMS erreichbar`,
            "Kommt ein Anruf nicht innerhalb von etwa 5 Sekunden zustande, legen Sie auf und versuchen Sie es erneut",
          ],
        },
        {
          note: `Australiens 3G-Netze sind abgeschaltet. 3G-Handys und einige ältere 4G-Handys – besonders im Ausland gekaufte – können ${F.emergency} möglicherweise nicht anrufen. Die Regulierungsbehörde rät davon ab, das durch einen Anruf bei ${F.emergency} zu testen; fragen Sie stattdessen Ihren Mobilfunkanbieter.`,
        },
        { source: { label: "Department of Infrastructure — Triple Zero (000)", url: "https://www.infrastructure.gov.au/media-communications/phone/triple-zero" } },
        { source: { label: "ACMA — Abschaltung des 3G-Netzes", url: "https://www.acma.gov.au/3g-network-switch" } },
      ],
      faq: [
        {
          q: "Funktioniert 911 in Australien?",
          a: `Nein. Anrufe an 911 werden nicht weitergeleitet. Wählen Sie ${F.emergency} oder vom Handy ${F.emergencyMobile}.`,
        },
        {
          q: `Kann ich ${F.emergency} ohne australische SIM-Karte anrufen?`,
          a: `Ja, solange irgendein Mobilfunknetz Empfang hat. Ihr Handy verbindet sich für ${F.emergency} mit jedem verfügbaren Netz, auch ohne aktive SIM.`,
        },
        {
          q: `Kann ich ${F.emergency} eine SMS schicken?`,
          a: `Nein. ${F.emergency} ist per SMS nicht erreichbar.`,
        },
      ],
    },
    {
      slug: "handy-und-sim-karte",
      enSlug: "phones-and-sim-cards",
      title: "Handy und SIM-Karte in Australien: Identitätsprüfung und 3G-Abschaltung",
      description:
        "Australische Prepaid-SIM nur mit Identitätsprüfung – ein Reisepass auf Ihren Namen wird akzeptiert. Prüfen Sie vorher, ob Ihr Handy 4G/5G kann.",
      checked: CHECKED,
      practical: true,
      related: ["notrufnummern-australien", "steckdosen-und-strom", "geld-und-trinkgeld"],
      blocks: [
        {
          p: "Sie können per Roaming Ihren Tarif von zu Hause nutzen oder eine australische Prepaid-SIM kaufen. Bei einer lokalen SIM gibt es zwei Unterschiede zu vielen anderen Ländern: die Identitätsprüfung und das Ende von 3G.",
        },
        { h2: "Die Identitätsprüfung" },
        {
          p: "Gesetzlich müssen Mobilfunkanbieter bei der Aktivierung eines Prepaid-Anschlusses Ihren Namen, Ihr Geburtsdatum und Ihre Adresse erfassen und Ihre Identität prüfen. Ein auf Ihren Namen ausgestellter Reisepass gehört zu den akzeptierten Dokumenten – es muss kein australischer Pass sein. Das Dokument darf nicht abgelaufen sein.",
        },
        {
          p: "Anbieter können die Identität auch auf anderem Weg prüfen, etwa über einen Abgleich mit Behördendokumenten, ein bestehendes Kundenkonto, eine Kartenzahlung oder einen akkreditierten Digital-ID-Dienst. Wie ein bestimmter Anbieter es macht – im Laden oder online –, entscheidet der Anbieter.",
        },
        { h2: "Prüfen Sie zuerst Ihr Handy" },
        {
          p: `Australiens 3G-Netze sind abgeschaltet. Reine 3G-Handys funktionieren gar nicht mehr, und manche 4G-Handys, die für Anrufe auf 3G angewiesen sind, können weder telefonieren noch den Notruf erreichen. Am stärksten betroffen sind ältere 4G-Handys und im Ausland gekaufte Geräte. Anbieter dürfen kein Handy freischalten, von dem sie feststellen, dass es Triple Zero (${F.emergency}) nicht anrufen kann.`,
        },
        {
          ul: [
            "Lassen Sie sich vor dem Bezahlen vom Anbieter bestätigen, dass Ihr Modell in seinem 4G/5G-Netz funktioniert und VoLTE-Telefonie unterstützt",
            `Testen Sie den Notruf nicht, indem Sie ${F.emergency} wählen`,
          ],
        },
        {
          note: "Die Regeln zur Identitätsprüfung bei Prepaid-Anschlüssen werden 2026 von der Regulierungsbehörde (ACMA) überprüft. Die Grundzüge – eine Identitätsprüfung, bei der ein Reisepass akzeptiert wird – gelten seit Jahren.",
        },
        { source: { label: "ACMA — Identitätsprüfung bei Prepaid-Handys", url: "https://www.acma.gov.au/id-checks-prepaid-mobiles" } },
        { source: { label: "Federal Register of Legislation — Identity Checks for Prepaid Mobile Carriage Services Determination 2017", url: "https://www.legislation.gov.au/F2017L00399/latest/text" } },
        { source: { label: "ACMA — Damit Handys nach der 3G-Abschaltung 000 erreichen", url: "https://www.acma.gov.au/ensuring-mobiles-can-reach-000-after-3g-shutdown" } },
      ],
      faq: [
        {
          q: "Kann ich mit einem deutschen, österreichischen oder Schweizer Pass eine australische SIM-Karte kaufen?",
          a: "Ja. Ein auf Ihren Namen ausgestellter Reisepass ist ein akzeptiertes Ausweisdokument für die Aktivierung eines Prepaid-Anschlusses. Er darf nicht abgelaufen sein.",
        },
        {
          q: "Funktioniert mein Handy von zu Hause in Australien?",
          a: `Die meisten neueren Handys schon, aber die 3G-Netze sind abgeschaltet. Ältere 4G-Handys und manche im Ausland gekaufte Geräte können möglicherweise nicht telefonieren oder ${F.emergency} erreichen – lassen Sie Ihr Modell vom Anbieter prüfen.`,
        },
      ],
    },
    {
      slug: "steckdosen-und-strom",
      enSlug: "power-plugs",
      title: `Steckdosen in Australien: Stecker Typ I und ${F.voltage} ${F.frequency}`,
      description: `Australien nutzt einen Stecker mit zwei flachen Stiften in umgekehrter V-Form (Typ I) und ${F.voltage}, ${F.frequency}. Prüfen Sie das Etikett Ihres Ladegeräts.`,
      checked: CHECKED,
      practical: true,
      related: ["handy-und-sim-karte", "geld-und-trinkgeld", "ankunft-in-australien"],
      blocks: [
        {
          p: `In australische Steckdosen passt ein Stecker mit zwei flachen Metallstiften in Form eines umgekehrten V, manchmal mit einem dritten Stift in der Mitte. Tourism Australia nennt ihn „Type 1“; international heißt er meist Typ I. Europäische Stecker mit runden Stiften passen nicht ohne Adapter.`,
        },
        { h2: "Spannung" },
        {
          p: `Die Netzspannung beträgt ${F.voltage}, ${F.frequency} (Tourism Australia nennt auch den Bereich 220–240 V). Die meisten Handy- und Laptop-Ladegeräte sind für 100–240 V ausgelegt und funktionieren allein mit einem Steckeradapter. Prüfen Sie das Etikett: Deckt es 230 V nicht ab, brauchen Sie einen Spannungswandler, nicht nur einen Adapter.`,
        },
        { h2: "Was Sie einpacken sollten" },
        {
          ul: [
            "Einen Reiseadapter für Typ I oder einen Multi-Länder-Adapter",
            "Einen Spannungswandler nur für Geräte, die nicht für 230 V ausgelegt sind",
          ],
        },
        { source: { label: "Tourism Australia — Nützliche Tipps für Ihre Australienreise", url: "https://www.australia.com/en-us/facts-and-planning/about-australia/useful-tips.html" } },
        { source: { label: "Tourism Australia — Die ultimative Packliste für Australien", url: "https://www.australia.com/en/facts-and-planning/planning-tools/ultimate-australia-packing-list.html" } },
      ],
      faq: [
        {
          q: "Brauche ich in Australien einen Adapter?",
          a: "Ja, wenn Ihre Stecker nicht dem australischen Typ mit zwei flachen Stiften in umgekehrter V-Form entsprechen. Europäische Stecker mit runden Stiften brauchen einen Adapter.",
        },
        {
          q: "Brauche ich einen Spannungswandler?",
          a: `Nur für Geräte, die nicht für ${F.voltage} ausgelegt sind. Ladegeräte mit der Angabe 100–240 V funktionieren allein mit einem Adapter.`,
        },
      ],
    },
    {
      slug: "feiertage-australien",
      enSlug: "public-holidays",
      title: "Feiertage in Australien 2026–2027: Termine nach Bundesstaat",
      description:
        "Jeder Bundesstaat legt eigene Feiertage fest. Welche Termine überall gelten, welche abweichen und was das für Ihre Reise bedeutet.",
      checked: CHECKED,
      practical: true,
      related: ["geld-und-trinkgeld", "autofahren-in-australien", "ankunft-in-australien"],
      blocks: [
        {
          p: `Eine einheitliche nationale Liste gibt es nicht. Jeder Bundesstaat und jedes Territorium legt seine Feiertage selbst fest und entscheidet, ob es einen Ersatztag gibt, wenn ein Feiertag auf ein Wochenende fällt. Die Termine unten stammen vom Fair Work Ombudsman, der Arbeitsaufsichtsbehörde des Bundes.`,
        },
        { h2: "Verbleibende Feiertage 2026" },
        {
          ul: [
            "Fr 25. Dezember — Christmas Day (Weihnachten, überall)",
            "Sa 26. Dezember — Boxing Day (Zweiter Weihnachtsfeiertag; in South Australia: Proclamation Day holiday)",
            "Mo 28. Dezember — zusätzlicher Feiertag für den Boxing Day in den meisten Bundesstaaten und Territorien; in Tasmanien liegt der Boxing Day selbst auf diesem Montag",
          ],
        },
        { h2: "2027: Termine, die überall gelten" },
        {
          ul: [
            "Fr 1. Januar — New Year's Day (Neujahr)",
            "Di 26. Januar — Australia Day",
            "Fr 26. März — Good Friday (Karfreitag)",
            "Mo 29. März — Easter Monday (Ostermontag)",
            "Sa 25. Dezember — Christmas Day, mit Mo 27. Dezember als zusätzlichem Feiertag",
          ],
        },
        { h2: "2027: wo die Bundesstaaten abweichen" },
        {
          ul: [
            "Karsamstag (27. März) und Ostersonntag (28. März) sind für Tasmanien nicht aufgeführt; Western Australia führt den Karsamstag nicht auf",
            "Der Anzac Day fällt auf Sonntag, 25. April. NSW und WA ergänzen Montag, 26. April; ACT, NT und Queensland begehen ihn am Montag, 26. April; SA, Tasmanien und Victoria belassen es beim Sonntag",
            "King's Birthday ist in den meisten Bundesstaaten am Montag, 14. Juni – in Western Australia aber am Montag, 27. September und in Queensland am Montag, 4. Oktober",
            "Der Labour Day liegt je nach Staat im März (WA, Victoria, Tasmanien), im Mai (Queensland, NT) oder im Oktober (NSW, ACT, SA)",
            "Boxing Day ist Sonntag, 26. Dezember, mit Dienstag, 28. Dezember als zusätzlichem Tag an den meisten Orten; in Tasmanien liegt der Boxing Day auf Dienstag, 28. Dezember",
          ],
        },
        {
          note: "Die Termine für 2027 entsprechen der Vorabveröffentlichung des Fair Work Ombudsman. Der Freitag vor dem AFL Grand Final in Victoria steht noch nicht fest. Einige regionale oder nur in einer Stadt geltende Feiertage (zum Beispiel Show Days) sind hier nicht aufgeführt.",
        },
        { h2: "Was das für Besucher bedeutet" },
        {
          p: "Banken und Behörden schließen. In den Städten haben viele Geschäfte, Cafés und Restaurants geöffnet, teils mit Feiertagszuschlag auf der Rechnung. Öffentliche Verkehrsmittel fahren meist nach reduziertem Fahrplan. Lange Wochenenden und die Sommerferien von Weihnachten bis Januar sind Hauptreisezeiten für Einheimische – buchen Sie Unterkunft und Mietwagen frühzeitig.",
        },
        { source: { label: "Fair Work Ombudsman — Feiertage 2026", url: "https://www.fairwork.gov.au/employment-conditions/public-holidays/2026-public-holidays" } },
        { source: { label: "Fair Work Ombudsman — Feiertage 2027", url: "https://www.fairwork.gov.au/employment-conditions/public-holidays/2027-public-holidays" } },
      ],
      faq: [
        {
          q: "Ist King's Birthday in ganz Australien am selben Tag?",
          a: "Nein. Die meisten Bundesstaaten begehen ihn am zweiten Montag im Juni, Western Australia aber Ende September und Queensland Anfang Oktober.",
        },
        {
          q: "Ist der Boxing Day überall ein Feiertag?",
          a: "Ja, allerdings heißt er in South Australia Proclamation Day holiday, und wenn er auf ein Wochenende fällt, unterscheidet sich der Ersatztag je nach Bundesstaat.",
        },
      ],
    },
    {
      slug: "autofahren-in-australien",
      enSlug: "driving-in-australia",
      title: "Autofahren in Australien mit ausländischem Führerschein: Regeln je nach Bundesstaat",
      description: `Jeder Staat regelt das selbst: NSW erlaubt bis zu ${F.driveNswMonths} Monate mit ausländischem Führerschein, das NT ${F.driveNtMonths}. Ohne Englisch: Übersetzung oder IDP.`,
      checked: CHECKED,
      practical: true,
      related: ["feiertage-australien", "notrufnummern-australien", "rauchen-vapes-alkohol"],
      blocks: [
        {
          p: `In Australien herrscht Linksverkehr. Im Kreisverkehr fährt man im Uhrzeigersinn und gewährt Fahrzeugen von rechts Vorfahrt. Geschwindigkeitsbegrenzungen gelten in km/h: 50 km/h innerorts, sofern nicht anders ausgeschildert, auf anderen Straßen meist 100 km/h und auf manchen Highways bis zu 110 km/h.`,
        },
        { h2: "Führerscheine sind Sache der Bundesstaaten" },
        {
          p: "Eine einheitliche nationale Regel für Besucher gibt es nicht. Jeder Bundesstaat und jedes Territorium entscheidet, wie lange Besucher mit einem ausländischen Führerschein fahren dürfen und was sie dazu mitführen müssen. Prüfen Sie die Regeln für jeden Staat, in dem Sie fahren – ein Roadtrip kann durch mehrere führen.",
        },
        {
          ul: [
            `New South Wales: Touristen und vorübergehende Besucher dürfen mit einem gültigen ausländischen Führerschein bis zu ${F.driveNswMonths} Monate fahren`,
            `Victoria: erlaubt, wenn Sie weniger als ${F.driveNswMonths} Monate in Victoria leben und fahren, gerechnet ab Ihrer ersten Ankunft`,
            `Northern Territory: bis zu ${F.driveNtMonths} Monate für Besucher und neue Einwohner`,
            "Queensland, Western Australia, South Australia, Tasmanien und das ACT: Besucher dürfen mit einem gültigen ausländischen Führerschein fahren; die offiziellen Seiten nennen keine feste Frist für Besucher",
          ],
        },
        {
          note: "Drei-Monats-Fristen, von denen Sie für Queensland, NSW, WA und das ACT lesen können, gelten für australische Staatsbürger und Inhaber eines dauerhaften Visums bzw. Aufenthaltsvisums, nicht für Touristen.",
        },
        { h2: "Wenn Ihr Führerschein nicht auf Englisch ist" },
        {
          p: "Führen Sie eine englische Übersetzung Ihres Führerscheins oder einen Internationalen Führerschein (IDP, International Driving Permit) zusammen mit dem Führerschein selbst mit. Die Details unterscheiden sich: Das Northern Territory rät, vor der Reise einen IDP zu besorgen oder eine amtliche Übersetzung durch einen autorisierten NT-Übersetzer; Queensland verlangt, eine anerkannte englische Übersetzung mitzuführen. Ein IDP ersetzt nie Ihren nationalen Führerschein – führen Sie beide mit.",
        },
        { h2: "Bevor Sie losfahren" },
        {
          ul: [
            "Führen Sie beim Fahren immer Ihren Führerschein mit",
            "Ihr Führerschein muss gültig sein und für die Fahrzeugklasse gelten, die Sie fahren",
            `Die Promillegrenze liegt bei einer Blutalkoholkonzentration von ${F.bacLimit} (also 0,5 Promille)`,
            "Die Entfernungen zwischen Orten sind groß – planen Sie Tankstopps und Pausen ein",
          ],
        },
        { source: { label: "Transport for NSW — Besuch aus dem Ausland", url: "https://www.nsw.gov.au/driving-boating-and-transport/driving-nsw/driver-and-rider-licences/visiting-or-moving-to-nsw/visiting-from-overseas-or-interstate" } },
        { source: { label: "VicRoads — Fahren mit ausländischem Führerschein", url: "https://www.vicroads.vic.gov.au/licences/convert-your-licence/driving-with-your-overseas-licence" } },
        { source: { label: "Queensland Government — Fahren in Queensland mit ausländischem Führerschein", url: "https://www.qld.gov.au/transport/licensing/driver-licensing/overseas/driving" } },
        { source: { label: "NT Government — Führerscheinregeln für Besucher", url: "https://nt.gov.au/driving/licence/new-nt-residents-and-visitors/driver-licence-rules-for-new-nt-residents-and-visiting-drivers" } },
        { source: { label: "Tourism Australia — Autofahren in Australien", url: "https://www.australia.com/en/facts-and-planning/getting-around/driving-in-australia.html" } },
      ],
      faq: [
        {
          q: "Brauche ich in Australien einen Internationalen Führerschein?",
          a: "Ist Ihr Führerschein auf Englisch, in der Regel nicht. Andernfalls führen Sie eine englische Übersetzung oder einen IDP zusammen mit dem Führerschein mit. Die genaue Regel hängt vom Bundesstaat ab.",
        },
        {
          q: "Wie lange darf ich mit meinem deutschen, österreichischen oder Schweizer Führerschein fahren?",
          a: `Das hängt vom Bundesstaat ab: bis zu ${F.driveNswMonths} Monate in NSW, weniger als ${F.driveNswMonths} Monate Aufenthalt in Victoria, bis zu ${F.driveNtMonths} Monate im NT. Andere Staaten nennen keine feste Frist für Besucher.`,
        },
      ],
    },
  ],
};
