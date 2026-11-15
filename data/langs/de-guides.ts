import { FACTS as F } from "./_schema";
import type { Article } from "./_schema";
const DECISION_DAT = "wenigen Minuten bis einigen Tagen"; // = F.decisionTypical（表示用・ドイツ語の与格）

/**
 * 英語ページの横展開（2026-11-15）。英語の data/pages.ts にあって de 版に無かった話題。
 * ⚠️ 数値は F（data/facts.ts）から入れる。本文に直接書かない。
 * ⚠️ 読者＝ドイツ旅券保持者（eVisitor 対象・無料）。Sie で統一。
 * 既存ページで話題が済んでいる英語キー（新規ページを作らない）:
 *   what-is-evisitor=was-ist-evisitor / how-to-apply=evisitor-antrag-schritt-fuer-schritt / cost=evisitor-kosten /
 *   required-documents=evisitor-unterlagen / processing-time=evisitor-bearbeitungszeit /
 *   validity・length-of-stay・three-months-per-visit=evisitor-gueltigkeit-und-aufenthalt /
 *   status-check=evisitor-status-pruefen / faq=evisitor-haeufige-fragen / evisitor-or-eta=evisitor-oder-eta /
 *   passport-and-details=evisitor-unterlagen＋evisitor-haeufige-fragen / about・privacy・terms=impressum・datenschutz・nutzungsbedingungen
 * ⚠️ new-passport-after-approval（neuer-reisepass-nach-genehmigung）は公式（passport-details・2026/9/10更新）どおり
 *    「ImmiAccount で旅券情報を更新→3営業日で既存ビザに紐付け」。再申請が必要なのは ETA 601 だけ（2026-11-16 de.ts も同じ内容に修正）。
 */
const ADDED = "2026-11-15";
const CHECKED = "15. November 2026";
/** 表示用（ドイツ語の小数点）= F.customsAlcoholLitres */
const ALCOHOL_L = String(F.customsAlcoholLitres).replace(".", ",");
const EVISITOR_SRC = { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" };
const ETA_SRC = { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" };
const DUTY_SRC = { label: "Australian Border Force / Home Affairs — Duty free concessions", url: "https://www.abf.gov.au/entering-and-leaving-australia/duty-free" };

export const deGuides: Article[] = [
  {
    slug: "aus-und-wiedereinreise",
    enSlug: "leaving-and-returning",
    added: ADDED,
    title: "Ausreisen und wieder einreisen: Beginnen dann neue drei Monate?",
    description:
      "Jede Einreise startet die Drei-Monats-Frist neu. Aufenthalte direkt hintereinander werfen aber Fragen auf, und die Grenzbeamten können die Einreise verweigern.",
    related: ["ankunft-in-australien", "steuerrueckerstattung-trs", "fluessigkeiten-handgepaeck"],
    blocks: [
      {
        p: `Mit jeder Ankunft beginnt ein neuer Zeitraum von bis zu ${F.stayMonths} Monaten. Ein Abstecher nach Neuseeland oder Bali setzt die Frist pro Aufenthalt also tatsächlich zurück – solange Ihr Visum noch gültig ist.`,
      },
      { h2: "Aber es bleibt ein Besuchervisum" },
      {
        p: "Das eVisitor wird unter der Voraussetzung erteilt, dass Sie zu Besuch kommen. Wer neun von zwölf Monaten in Australien verbringt und das Land jeweils nur kurz verlässt, ist nicht zu Besuch – er lebt mit einem Besuchervisum dort. Die Grenzbeamten betrachten das Muster über alle Einreisen in Ihrem Pass, nicht nur die aktuelle Einreise.",
      },
      { h2: "Was Sie bei der Wiedereinreise vorlegen müssen könnten" },
      {
        ul: [
          "Ein Weiter- oder Rückflugticket",
          "Ausreichende Mittel für Ihren Aufenthalt",
          "Nachweise, dass Sie nach Hause zurückkehren: Arbeit, Studium, Mietvertrag, Familie",
          "Einen Grund, warum Sie so bald wiederkommen",
        ],
      },
      { h2: "Wenn die Einreise verweigert wird" },
      {
        p: "Ein gültiges Visum ist eine Reiseerlaubnis, keine Einreisegarantie. Ist ein Beamter nicht davon überzeugt, dass Sie ein echter Besucher sind, kann das Visum an der Grenze aufgehoben werden, und Sie werden mit dem nächsten verfügbaren Flug zurückgeschickt. Dieser Vorgang begleitet Sie dann bei allen künftigen Anträgen.",
      },
      { source: EVISITOR_SRC },
      {
        note: `Ihr eVisitor endet in dem Moment, in dem es abläuft – ${F.validMonths} Monate nach der Erteilung. Prüfen Sie das Erteilungsdatum, bevor Sie gegen Ende dieses Zeitraums eine weitere Reise buchen.`,
      },
    ],
  },
  {
    slug: "fragen-bei-der-einreise",
    enSlug: "border-questions",
    added: ADDED,
    title: "Was Sie bei der Ankunft in Australien gefragt werden",
    description:
      "Einwanderung, Zoll und Biosicherheit sind drei getrennte Kontrollen mit unterschiedlichen Fragen. Wer sie auseinanderhält, ist deutlich schneller durch.",
    related: ["ankunft-in-australien", "smartgate-australien", "medikamente-mitnehmen"],
    blocks: [
      {
        p: "Ankommende Passagiere durchlaufen nicht eine, sondern drei Kontrollen. Sie werden von verschiedenen Behörden durchgeführt, und jede achtet auf etwas anderes. Wer die Frage der einen Stelle mit der Antwort für die andere beantwortet, hält sich selbst auf.",
      },
      { h2: "1. Einwanderung – sind Sie ein echter Besucher?" },
      {
        ul: [
          "Wie lange Sie bleiben und wo Sie unterkommen",
          "Ob Sie ein Weiter- oder Rückflugticket haben",
          "Wie Sie die Reise finanzieren",
          "Ob Sie arbeiten wollen – mit diesem Visum ist das nicht erlaubt",
        ],
      },
      { h2: "2. Zoll – fallen Abgaben an?" },
      {
        p: `Waren über der Zollfreigrenze und Bargeld ab dem Meldeschwellenwert müssen Sie anmelden. Die Freigrenze für allgemeine Waren beträgt ${F.customsGoodsAllowance}, wenn Sie ${F.customsAgeMin} Jahre oder älter sind (${F.customsGoodsAllowanceMinor}, wenn Sie jünger sind).`,
      },
      { h2: "3. Biosicherheit – was ist in Ihrem Gepäck?" },
      {
        p: "An dieser Kontrolle scheitern unvorbereitete Reisende. Australien fragt nach Lebensmitteln, pflanzlichen und tierischen Erzeugnissen und allem, was mit Erde oder Süßwasser in Berührung gekommen ist. Anmelden kostet Sie nichts; nicht anmelden kann Sie das Visum kosten.",
      },
      { h2: "Die Incoming Passenger Card" },
      {
        p: "Ihre Angaben für Zoll und Biosicherheit machen Sie auf der Incoming Passenger Card, die Sie vor der Landung ausfüllen. Nehmen Sie sie ernst: Die Karte ist eine rechtsverbindliche Erklärung. Findet ein Beamter einen nicht angemeldeten Gegenstand in Ihrem Gepäck, gilt die Karte als Beleg dafür, dass Sie angegeben haben, nichts dabeizuhaben.",
      },
      { source: DUTY_SRC },
      {
        note: "Wenn Sie unsicher sind, ob etwas angemeldet werden muss, kreuzen Sie „Ja“ an und überlassen Sie die Entscheidung dem Beamten. Wer einen Gegenstand anmeldet, der sich als erlaubt herausstellt, muss keine Strafe befürchten.",
      },
    ],
  },
  {
    slug: "biosicherheit-australien",
    enSlug: "biosecurity",
    added: ADDED,
    title: "Biosicherheit in Australien: was Sie anmelden müssen – und warum das Visum auf dem Spiel steht",
    description: `Für nicht angemeldete Biosicherheitswaren droht ein Bußgeld von bis zu ${F.biosecurityPenaltyUnits} Strafeinheiten – und Visuminhabern die Aufhebung des Visums und eine Sperrfrist.`,
    related: ["ankunft-in-australien", "medikamente-mitnehmen", "smartgate-australien"],
    blocks: [
      {
        p: "Australien ist eine Insel mit einer Landwirtschaft, die es schützen will. Die Biosicherheitsregeln sind deshalb streng, und sie werden am Flughafen durchgesetzt, nicht erst später im Büro. Wer die Erklärung für eine Formalität hält, wird erwischt.",
      },
      { h2: "Die Strafe" },
      {
        p: `Ein Bußgeldbescheid für nicht angemeldete Waren kann bis zu ${F.biosecurityPenaltyUnits} Strafeinheiten (penalty units) betragen. Der Dollarwert einer Strafeinheit ist gesetzlich festgelegt und wird regelmäßig erhöht: Die Seite des Ministeriums nennt ${F.biosecurityFineDaff} für ${F.biosecurityPenaltyUnits} Einheiten, die Mitteilung des Ministers zur Anpassung von 2023 dagegen ${F.biosecurityFineIndexed} für dieselben ${F.biosecurityPenaltyUnits} Einheiten. Prüfen Sie den aktuellen Betrag auf der offiziellen Seite, bevor Sie sich darauf verlassen.`,
      },
      { h2: "Für Visuminhaber ist das Bußgeld nicht das Schlimmste" },
      {
        p: `Reisende, die einen Bußgeldbescheid erhalten, können zur Aufhebung ihres Visums gemeldet werden. Ein aufgehobenes Visum bedeutet die Ausweisung aus Australien mit dem nächsten verfügbaren Flug und eine Sperrfrist von ${F.visaCancelExclusionYears} Jahren, bevor Sie erneut einen Antrag stellen können.`,
      },
      { h2: "Was tatsächlich beanstandet wird" },
      {
        ul: [
          "Lebensmittel jeder Art – auch Snacks, die im Flugzeug verteilt wurden",
          "Fleisch, Milchprodukte, Eier, Honig und alles, was sie enthält",
          "Frisches Obst und Gemüse, Samen, Nüsse",
          "Pflanzliches Material – Holzgegenstände, Flechtwaren, Blumen",
          "Wanderschuhe, Zelte und Sportausrüstung mit Erde oder Pflanzenresten",
          "Alles, was im Umgang mit Tieren oder in Süßwasser benutzt wurde",
        ],
      },
      { h2: "Vor dem Packen" },
      {
        ul: [
          "Erde von Schuhen und Ausrüstung zu Hause entfernen, nicht erst in der Warteschlange",
          "Lebensmittel vor der Landung aufessen oder entsorgen",
          "Souvenirs aus Holz und Flechtwerk anmelden – sie gelten als Risikowaren, nicht als Kuriositäten",
        ],
      },
      { source: { label: "Department of Agriculture, Fisheries and Forestry — Infringement notices at the airport", url: "https://www.agriculture.gov.au/biosecurity-trade/policy/legislation/compliance/infringement-notice-scheme/infringement-notices-at-the-airport" } },
      {
        note: "Vor der Biosicherheitskontrolle stehen Abfallbehälter bereit. Sie zu benutzen kostet nichts. Mit dem Gegenstand im Gepäck erwischt zu werden, nachdem Sie „Nein“ angekreuzt haben, dagegen schon.",
      },
    ],
  },
  {
    slug: "zollfreimengen-australien",
    enSlug: "customs-allowances",
    added: ADDED,
    title: "Zollfreimengen in Australien: Waren, Alkohol, Tabak",
    description: `Erwachsene dürfen Waren im Wert von ${F.customsGoodsAllowance}, ${ALCOHOL_L} Liter Alkohol und ${F.customsTobaccoGrams} g Tabak zollfrei einführen. Was darüber liegt, müssen Sie anmelden.`,
    related: ["ankunft-in-australien", "geld-und-trinkgeld", "steuerrueckerstattung-trs", "rauchen-vapes-alkohol"],
    blocks: [
      {
        p: "Der Zoll ist eine eigene Kontrolle, getrennt von der Biosicherheit. Die Biosicherheit fragt, ob ein Gegenstand ein Risiko für Australien darstellt; der Zoll fragt, ob dafür Zoll und Steuern fällig sind. Sie können die eine Kontrolle passieren und von der anderen aufgehalten werden.",
      },
      { h2: "Die Freimengen" },
      {
        ul: [
          `Allgemeine Waren: ${F.customsGoodsAllowance}, wenn Sie ${F.customsAgeMin} Jahre oder älter sind, ${F.customsGoodsAllowanceMinor}, wenn Sie jünger als ${F.customsAgeMin} sind`,
          `Alkohol: ${ALCOHOL_L} Liter, ab ${F.customsAgeMin} Jahren`,
          `Tabak: ${F.customsTobaccoGrams} Gramm in jeder Form, dazu eine angebrochene Packung, ab ${F.customsAgeMin} Jahren`,
        ],
      },
      { h2: "Häufige Irrtümer" },
      {
        ul: [
          "Auf dem Hinweg gekaufte Duty-free-Ware wird auf die Freimenge angerechnet",
          "Geschenke zählen mit – maßgeblich ist der Wert dessen, was Sie bei sich tragen, nicht, was Sie für sich selbst bezahlt haben",
          "Familien können ihre Freimengen nicht immer so zusammenlegen, wie sie annehmen; prüfen Sie das, bevor Sie sich darauf verlassen",
        ],
      },
      { h2: "Wenn Sie über der Grenze liegen" },
      {
        p: "Melden Sie die Waren an und legen Sie Kaufbelege vor, damit Zoll und Steuern berechnet werden können. Wer Waren über der Freimenge nicht anmeldet, riskiert Strafen, eine Strafverfolgung oder die Aufhebung des Visums. Anmelden heißt lediglich, das zu bezahlen, was fällig ist.",
      },
      { source: DUTY_SRC },
      {
        note: `Auch für Bargeld gilt an der Grenze eine Meldepflicht: Bargeld und Zahlungsmittel wie Reiseschecks im Gesamtwert von ${F.cashReportThreshold} oder mehr müssen angemeldet werden – wie das geht, steht auf der Seite zu Geld und Trinkgeld.`,
      },
    ],
  },
  {
    slug: "arbeiten-und-studieren",
    enSlug: "working-and-studying",
    added: ADDED,
    title: "Was mit dem eVisitor nicht erlaubt ist: Arbeit und Studium über drei Monate",
    description: `Das eVisitor ist ein Besuchervisum. Arbeit für einen australischen Arbeitgeber ist nicht erlaubt, ein Studium ist auf ${F.studyMonths} Monate begrenzt.`,
    related: ["ankunft-in-australien", "gesundheitsversorgung-australien"],
    blocks: [
      {
        p: `Weil das eVisitor kostenlos ist und schnell erteilt wird, halten es manche für eine unverbindliche Erlaubnis, ${F.stayMonths} Monate lang alles zu tun, was sie möchten. Das ist es nicht. Es ist ein Besuchervisum mit Auflagen, und diese Auflagen werden durchgesetzt.`,
      },
      { h2: "Arbeit" },
      {
        p: "Sie dürfen nicht für einen australischen Arbeitgeber arbeiten. Geschäftliche Besuchstätigkeiten sind etwas anderes als Arbeit: An Besprechungen, Verhandlungen oder einer Konferenz teilzunehmen ist in der Regel in Ordnung; von einem australischen Unternehmen für eine Tätigkeit bezahlt zu werden, nicht.",
      },
      { h2: "Remote-Arbeit für einen Arbeitgeber außerhalb Australiens" },
      {
        p: "Remote für Ihren bisherigen Arbeitgeber im Ausland zu arbeiten ist eine Grauzone, die vom Einzelfall abhängt – und keine Frage, die eine Vergleichsseite für Sie entscheiden sollte. Hängt Ihre Reise von der Antwort ab, klären Sie das vor der Buchung mit dem Department of Home Affairs.",
      },
      { h2: "Studium" },
      {
        p: `Ein Studium ist auf ${F.studyMonths} Monate begrenzt. Ein Kurzkurs ist in Ordnung, ein ganzes Semester nicht. Für ein längeres Studium brauchen Sie ein Studentenvisum, das Sie vor der Reise beantragen.`,
      },
      { h2: "Warum das wichtiger ist, als es aussieht" },
      {
        p: `Ein Verstoß gegen eine Visumsauflage kann zur Aufhebung des Visums, zur Ausweisung und zu einer Sperrfrist von bis zu ${F.visaCancelExclusionYears} Jahren führen. Der eigentliche Preis eines Fehlers ist nicht das Bußgeld – sondern dass Sie nicht wiederkommen können.`,
      },
      { source: EVISITOR_SRC },
    ],
  },
  {
    slug: "evisitor-abgelehnt",
    enSlug: "if-your-application-is-refused",
    added: ADDED,
    title: "Was passiert, wenn Ihr eVisitor-Antrag abgelehnt wird?",
    description:
      "Eine Ablehnung ändert, was Sie als Nächstes tun müssen. Was Sie prüfen sollten, was Sie lassen sollten und warum ein sofortiger Neuantrag meist falsch ist.",
    related: ["evisitor-haeufige-fehler", "evisitor-oder-eta", "berechtigte-reisepaesse"],
    blocks: [
      {
        p: `Die meisten eVisitor-Anträge werden in ${DECISION_DAT} entschieden. Wird Ihrer abgelehnt, sollten Sie vor allem anderen verstehen, warum.`,
      },
      { h2: "Nicht einfach erneut beantragen" },
      {
        p: "Wer denselben Antrag noch einmal stellt, erhält in der Regel dasselbe Ergebnis, und eine Reihe wiederholter Anträge hilft Ihnen nicht. Lesen Sie die Entscheidung – sie nennt den Grund.",
      },
      { h2: "Häufige Gründe" },
      {
        ul: [
          "Der Pass steht nicht auf der eVisitor-Liste – dann sind möglicherweise die ETA oder ein Besuchervisum der richtige Weg. Für einen deutschen Pass trifft das nicht zu; es betrifft etwa Mitreisende mit einem anderen Pass.",
          "Die Angaben stimmten nicht genau mit dem Pass überein. Namen, Nummern und Daten müssen so eingegeben werden, wie sie im Pass stehen.",
          "Eine Angabe zu Gesundheit oder Vorstrafen erforderte eine Prüfung statt einer automatischen Entscheidung.",
        ],
      },
      { h2: "Wenn Sie schon Flüge gebucht haben" },
      {
        p: "Reisen Sie nicht in der Annahme, dass sich das am Flughafen klären lässt. Ohne gültiges Visum werden Sie nicht an Bord gelassen. Sprechen Sie mit der Fluggesellschaft über eine Umbuchung, während Sie den richtigen Antrag klären.",
      },
      {
        note: `Eine Ablehnung ist nicht dasselbe wie eine Aufhebung. Wird ein Visum aufgehoben, das Sie bereits besitzen, kann für künftige Anträge eine Sperrfrist von bis zu ${F.visaCancelExclusionYears} Jahren gelten.`,
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: F.officialUrl } },
    ],
  },
  {
    slug: "evisitor-fuer-kinder",
    enSlug: "travelling-with-children",
    added: ADDED,
    title: "Brauchen Kinder ein eigenes eVisitor?",
    description:
      "Jede reisende Person braucht ein eigenes Visum, auch Säuglinge. Kinder sind nicht über das eVisitor der Eltern abgedeckt; der Antrag läuft genauso.",
    related: ["ankunft-in-australien", "smartgate-australien", "gesundheitsversorgung-australien"],
    blocks: [
      {
        p: "Ja. Ein eVisitor ist an einen Pass gebunden, deshalb braucht jedes Familienmitglied ein eigenes – auch ein Baby, das auf dem Schoß eines Elternteils fliegt.",
      },
      { h2: "So beantragen Sie es für ein Kind" },
      {
        p: "Der Antrag wird auf den Namen des Kindes und mit dem eigenen Pass des Kindes gestellt. Ein Elternteil oder Erziehungsberechtigter kann ihn für das Kind ausfüllen. Auch für Kinder ist das Visum kostenlos; eine gesonderte Gebühr gibt es nicht.",
      },
      { h2: "Prüfen Sie zuerst den Pass" },
      {
        p: `Kinderpässe werden oft für kürzere Zeiträume ausgestellt als Pässe für Erwachsene. Ein Pass, der innerhalb der ${F.validMonths} Monate Gültigkeit des Visums abläuft, ist eine häufige Ursache für spätere Probleme, weil das Visum an den Pass gebunden ist, für den es erteilt wurde.`,
      },
      { h2: "Wenn ein Kind mit nur einem Elternteil oder mit anderen Personen reist" },
      {
        p: "Australien kann an der Grenze nach dem Einverständnis der Sorgeberechtigten fragen. Eine Einverständniserklärung des nicht mitreisenden Elternteils und eine Kopie etwaiger Sorgerechtsunterlagen sind keine Visumsvoraussetzung, ersparen Ihnen aber eine absehbare Verzögerung.",
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: F.officialUrl } },
    ],
  },
  {
    slug: "neuer-reisepass-nach-genehmigung",
    enSlug: "new-passport-after-approval",
    added: ADDED,
    title: "Neuer Reisepass nach der Erteilung des eVisitor – was nun?",
    description:
      "Das Visum ist an den Pass gebunden, für den es erteilt wurde. Ein neuer Pass hebt es nicht auf, aber Sie müssen die Behörde informieren.",
    related: ["evisitor-haeufige-fehler", "evisitor-status-pruefen", "evisitor-unterlagen"],
    blocks: [
      {
        p: "Das kommt ständig vor: Der Pass wird verlängert, nach einem Verlust ersetzt oder nach einer Namensänderung neu ausgestellt – und man geht davon aus, dass das Visum verloren ist. Das ist es nicht. Es geht aber auch nicht von selbst auf den neuen Pass über.",
      },
      { h2: "Was tatsächlich passiert" },
      {
        p: "Das eVisitor bleibt mit der Passnummer verknüpft, für die es erteilt wurde. Fluggesellschaften und Grenzsysteme prüfen den Pass, den Sie vorlegen. Ist dieser Pass neu, muss die Verknüpfung zuerst aktualisiert werden.",
      },
      { h2: "Was Sie tun sollten" },
      {
        ul: [
          "Melden Sie sich im ImmiAccount an und öffnen Sie Ihren eVisitor-Antrag.",
          "Wählen Sie „Update details“ und danach „Change of passport details“.",
          "Geben Sie die neuen Passdaten und den Grund der Änderung ein und senden Sie die Angaben ab.",
          "Laut Department of Home Affairs wird der neue Pass innerhalb von 3 Arbeitstagen mit Ihrem bestehenden Visum verknüpft.",
        ],
      },
      {
        p: "Lässt sich die Änderung nicht im ImmiAccount vornehmen – etwa weil Sie Ihren Antrag nicht in das ImmiAccount importieren können oder weil sich das Geburtsdatum im Pass geändert hat –, verweist Home Affairs auf das Webformular „New Passport Details“. Die Bearbeitung dauert dort bis zu 14 Tage.",
      },
      {
        note: "Erledigen Sie das, sobald der neue Pass da ist, nicht erst am Flughafen. Das gilt für das eVisitor. Eine ETA (Subclass 601) kann nicht auf einen neuen Pass übertragen werden – ETA-Inhaber beantragen mit dem neuen Pass eine neue ETA.",
      },
      { source: { label: "Department of Home Affairs — You have a new passport", url: "https://immi.homeaffairs.gov.au/change-in-situation/passport-details" } },
    ],
  },
  {
    slug: "berechtigte-reisepaesse",
    enSlug: "eligible-passports",
    added: ADDED,
    checked: CHECKED,
    title: `Welche Pässe bekommen ein eVisitor? Die ${F.eligibleCountries} Länder – und wer die ETA nutzt`,
    description: `Das eVisitor steht Staatsangehörigen von ${F.eligibleCountries} europäischen Ländern offen. Die vollständige Liste, britische Pässe ohne Anspruch und der Vergleich mit der ETA.`,
    related: ["evisitor-oder-eta", "was-ist-evisitor", "transit-durch-australien", "evisitor-app"],
    blocks: [
      {
        p: `Ob Sie ein eVisitor (Subclass 651) bekommen, hängt von Ihrer Staatsangehörigkeit und dem Pass ab, den Sie besitzen – nicht davon, wo Sie leben. Laut Department of Home Affairs müssen Sie Staatsangehöriger eines von ${F.eligibleCountries} Ländern sein und einen gültigen Pass dieses Landes besitzen. Deutschland gehört dazu.`,
      },
      { h2: `Die ${F.eligibleCountries} eVisitor-Länder` },
      {
        p: "Andorra, Belgien, Bulgarien, Dänemark, Deutschland, Estland, Finnland, Frankreich, Griechenland, Irland, Island, Italien, Kroatien, Lettland, Liechtenstein, Litauen, Luxemburg, Malta, Monaco, die Niederlande, Norwegen, Österreich, Polen, Portugal, Rumänien, die Republik San Marino, Schweden, die Schweiz, die Slowakei, Slowenien, Spanien, Tschechien, Ungarn, die Vatikanstadt, das Vereinigte Königreich (nur British Citizen) und Zypern.",
      },
      { h2: "Pässe, die nicht berechtigen" },
      {
        ul: [
          "Für das Vereinigte Königreich stehen nur Pässe als British Citizen auf der Liste",
          "Pässe als British National (Overseas), British Dependent Territories Citizen, British Overseas Citizen, British Protected Person oder British Subject können nicht verwendet werden",
          "Ein Pass für Nichtstaatsangehörige, ein Identitätsnachweis (certificate of identity) oder ein anderes Reisedokument wie ein Titre de Voyage kann nicht verwendet werden",
          "Für die Vatikanstadt muss der Pass ausweisen, dass Sie Staatsangehöriger der Vatikanstadt (Heiliger Stuhl) sind",
        ],
      },
      { h2: "Wenn Ihr Pass nicht auf der Liste steht" },
      {
        p: `Die ETA (Subclass 601) hat eine eigene Liste mit ${F.etaEligibleCountries} Pässen. Dazu gehören unter anderem Brunei, Hongkong (Sonderverwaltungszone Chinas), Japan, Kanada, Malaysia, Singapur, Südkorea, Taiwan (ausgenommen Dienst- und Diplomatenpässe), die USA und das Vereinigte Königreich – British National (Overseas). Die ETA kostet ${F.etaFee} als Servicegebühr der App. Inhaber anderer Pässe kommen möglicherweise für ein Besuchervisum (Subclass 600) infrage.`,
      },
      { h2: "Pässe auf beiden Listen" },
      {
        p: `Nach unserem Abgleich der beiden offiziellen Listen stehen ${F.bothListsCountries} Pässe auf beiden. Die übrigen ${F.eligibleCountries - F.bothListsCountries} eVisitor-Länder stehen nicht auf der ETA-Liste: Bulgarien, Estland, Kroatien, Lettland, Litauen, Polen, Rumänien, die Slowakei, Slowenien, Tschechien, Ungarn und Zypern. Für Pässe auf beiden Listen heißt es auf der ETA-Seite, dass Inhaber europäischer Pässe „möglicherweise“ für das eVisitor berechtigt sind („may be eligible“) und dass dessen Beantragung nichts kostet.`,
      },
      { h2: "Fälle, in denen Home Affairs auf ein anderes Visum verweist" },
      {
        ul: [
          "Eine Verurteilung in irgendeinem Land: Home Affairs rät, stattdessen ein Besuchervisum (Subclass 600) zu beantragen, und weist darauf hin, dass eine Einreise mit eVisitor trotz Verurteilung zur Verweigerung der Einreise führen kann",
          "Eine Ausbildung in einer Kinderbetreuungseinrichtung, ein Studium oder eine Ausbildung als Arzt, Zahnarzt, Pflegekraft oder Rettungssanitäter oder ein Aufenthalt in Gesundheitseinrichtungen oder Krankenhäusern: Beantragen Sie das Besuchervisum (Subclass 600) und absolvieren Sie die Gesundheitsuntersuchungen",
          "Australische Staatsbürger können weder ein eVisitor noch eine ETA beantragen, selbst wenn sie zusätzlich einen berechtigten Pass besitzen – sie brauchen für die Einreise nach Australien kein Visum",
          "Familien: Für jedes Familienmitglied ist ein eigener Antrag nötig, auch für Kinder, die im Pass eines Elternteils eingetragen sind",
        ],
      },
      { source: EVISITOR_SRC },
      { source: ETA_SRC },
      {
        note: "Die Listen können sich ändern. Prüfen Sie vor dem Antrag die offizielle Seite für den Pass, mit dem Sie tatsächlich reisen.",
      },
    ],
    faq: [
      {
        q: "Ich habe einen Pass als British National (Overseas). Bekomme ich ein eVisitor?",
        a: "Nein. BN(O)-Pässe sind vom eVisitor ausgeschlossen. Der BN(O)-Pass steht stattdessen auf der Liste der ETA (Subclass 601).",
      },
      {
        q: "Ich lebe in Deutschland, habe aber einen nicht-europäischen Pass. Bin ich berechtigt?",
        a: "Nein. Das eVisitor setzt die Staatsangehörigkeit eines der aufgeführten Länder und einen gültigen Pass dieses Landes voraus. Ihr Wohnsitz ändert daran nichts.",
      },
    ],
  },
  {
    slug: "evisitor-haeufige-fehler",
    enSlug: "common-mistakes",
    added: ADDED,
    checked: CHECKED,
    title: "Fehler beim eVisitor vermeiden – mit den Hinweisen des Department of Home Affairs",
    description:
      "Falsch geschriebene Namen, das falsche Datumsformat, ein Antrag aus Australien, Buchen vor der Erteilung: die Fehler, vor denen Home Affairs warnt.",
    related: ["evisitor-unterlagen", "evisitor-abgelehnt", "evisitor-antrag-schritt-fuer-schritt", "offizielle-evisitor-seite"],
    blocks: [
      {
        p: "Das eVisitor ist kostenlos und meist schnell erteilt – das verleitet dazu, den Antrag in Eile auszufüllen. Das Department of Home Affairs nennt die Punkte, die Sie prüfen sollten. Jeder der folgenden Punkte stammt von seiner eVisitor-Seite.",
      },
      { h2: "Vor dem Absenden" },
      {
        ul: [
          "Ihr Name ist so geschrieben wie im Pass, einschließlich weiterer Vornamen, und wurde nicht von der Autokorrektur Ihres Geräts verändert",
          "Ihr Pass stammt aus einem der Länder, die für das eVisitor berechtigt sind",
          "Ihr Geburtsdatum ist im Format dd/mm/yy (Tag/Monat/Jahr) eingegeben",
          "Ihre E-Mail-Adresse ist korrekt eingegeben",
        ],
      },
      {
        p: "Home Affairs warnt: Wird ein Visum mit falschen Angaben erteilt, kann es zu Verzögerungen kommen oder Ihnen die Einreise nach Australien verweigert werden.",
      },
      { h2: "Antrag vom falschen Ort aus" },
      {
        p: "Sie müssen sich außerhalb Australiens befinden, wenn Sie den Antrag stellen, und ebenso, wenn über ihn entschieden wird.",
      },
      { h2: "Buchen vor der Erteilung" },
      {
        p: "Home Affairs rät, keine Reise nach Australien zu organisieren, bevor Ihnen die Behörde schriftlich mitgeteilt hat, dass das Visum erteilt wurde.",
      },
      { h2: "Warten auf eine E-Mail, die nicht kommt" },
      {
        p: "Kommt innerhalb von 12 Stunden nach dem Antrag keine E-Mail an, prüfen Sie den Status Ihres Antrags im ImmiAccount.",
      },
      { h2: "Eine Verurteilung verschweigen" },
      {
        p: "Wenn Sie in irgendeinem Land verurteilt worden sind, rät Home Affairs, stattdessen ein Besuchervisum (Subclass 600) zu beantragen. Beantragen Sie trotzdem ein eVisitor, müssen Sie alle Straftaten angeben und jede Frage wahrheitsgemäß beantworten.",
      },
      { h2: "Fehler während des Aufenthalts" },
      {
        ul: [
          "Arbeiten: Das eVisitor ist kein Arbeitsvisum. Bezahlte Arbeit für einen australischen Arbeitgeber ist nicht erlaubt, und wer arbeitet oder arbeiten will, riskiert die Aufhebung des Visums",
          "Die Annahme, eine Rundreise-Kreuzfahrt setze die Aufenthaltsdauer zurück: Laut Home Affairs ist das nicht der Fall",
          "Lange oder häufige Aufenthalte: Bei der nächsten Ankunft können Sie nach dem Zweck Ihrer Reise gefragt werden, und das Visum kann aufgehoben werden, wenn Sie nicht als echter Besucher gelten",
          "Bleiben, nachdem das Visum erloschen ist, ohne ein anderes Visum: Dann halten Sie sich unrechtmäßig in Australien auf (unlawful non-citizen) und können abgeschoben werden",
        ],
      },
      { h2: "Wenn Mitreisende die ETA beantragen" },
      {
        p: "Für Sie als Inhaber eines deutschen Passes gilt das eVisitor. Reist jemand mit einem ETA-Pass mit, sind drei Punkte von der ETA-Seite wichtig: Die Angaben in der ETA müssen genau mit dem Pass übereinstimmen, und Home Affairs kann sie nach der Erteilung nicht mehr ändern; ein neuer Pass beendet die ETA und erfordert einen neuen Antrag; und nach einer Weiterleitung (referral) führen weitere ETA-Anträge in der App zum selben Ergebnis.",
      },
      { source: EVISITOR_SRC },
      { source: ETA_SRC },
      {
        note: "Ändern sich nach dem Antrag Ihre Telefonnummer, E-Mail-Adresse, Anschrift oder Ihr Pass, bittet die eVisitor-Seite darum, die Behörde zu informieren. Folgen Sie den Schritten auf dieser Seite.",
      },
    ],
  },
  {
    slug: "transit-durch-australien",
    enSlug: "transit",
    added: ADDED,
    checked: CHECKED,
    title: `Transit durch Australien: die ${F.twovHours}-Stunden-Regel und das Transitvisum`,
    description: `Auch im Transit brauchen Sie ein Visum oder eine Erlaubnis. Wann das eVisitor genügt, die ${F.twovHours}-Stunden-Regel ohne Visum und das ${F.transitVisaHours}-Stunden-Transitvisum.`,
    related: ["berechtigte-reisepaesse", "fluessigkeiten-handgepaeck", "flughaefen-australien", "evisitor-oder-eta"],
    blocks: [
      {
        p: "Das Department of Home Affairs stellt klar, dass alle Nichtstaatsangehörigen ein Visum oder eine Erlaubnis für die Einreise nach Australien brauchen – auch bei kurzen Aufenthalten und im Transit, ohne den Flughafen zu verlassen. Diese Erlaubnis kann auf drei Wegen zustande kommen.",
      },
      { h2: "1. Sie haben bereits ein eVisitor (oder sind dafür berechtigt)" },
      {
        p: "Home Affairs nennt das eVisitor, die ETA, das Besuchervisum und die APEC Business Travel Card unter den Visa, die einen Transit durch Australien erlauben; sie ermöglichen auch einen längeren Aufenthalt. Enthält Ihre Reise einen Zwischenstopp in Australien, deckt ein eVisitor ihn ab.",
      },
      { h2: "2. Transit ohne Visum (TWOV)" },
      {
        p: "Ohne Visum dürfen Sie nur dann umsteigen, wenn alle folgenden Bedingungen erfüllt sind:",
      },
      {
        ul: [
          "Sie kommen mit dem Flugzeug in Australien an",
          `Sie haben ein bestätigtes Ticket, um Australien innerhalb von ${F.twovHours} Stunden nach der Ankunft per Flugzeug in ein Drittland zu verlassen`,
          "Sie besitzen ein gültiges Reisedokument für die Einreise in Ihr Zielland",
          "Sie müssen vor Ihrem Anschlussflug aus keinem Grund durch die Passkontrolle gehen oder den Transitbereich verlassen",
          "Sie besitzen einen Pass eines Landes, das auf der TWOV-Liste steht",
        ],
      },
      {
        p: "Nach unserem Abgleich der beiden offiziellen Listen steht jedes Land der eVisitor-Liste auch auf der TWOV-Liste, die darüber hinaus weitere Länder umfasst. Home Affairs weist darauf hin, dass diese Informationen nicht für Staatenlose und Flüchtlinge gelten.",
      },
      { h2: "Wenn Sie durch die Passkontrolle müssen" },
      {
        p: "Als häufige Gründe, die Passkontrolle passieren zu müssen, nennt Home Affairs das Abholen und Umladen von Gepäck sowie einen Anschlussflug von einem anderen Terminal – und dafür brauchen Sie ein Visum. Sind Sie unsicher, ob Sie für TWOV infrage kommen, rät Home Affairs, vorsorglich ein Visum zu beantragen.",
      },
      { h2: "3. Transitvisum (Subclass 771)" },
      {
        ul: [
          `Für einen Transit durch Australien von höchstens ${F.transitVisaHours} Stunden`,
          "Kostenlos",
          "Für jede reisende Person ist ein eigener Antrag nötig, auch für Babys im Pass eines Elternteils",
          "Sie müssen sich bei Antragstellung und Entscheidung außerhalb Australiens befinden",
        ],
      },
      {
        note: "Home Affairs warnt: Besitzen Sie bereits ein Visum für Australien, beendet die Erteilung eines Transitvisums Ihr anderes Visum wahrscheinlich. Ein eVisitor erlaubt den Transit bereits.",
      },
      { source: { label: "Department of Home Affairs — Transit visa (subclass 771)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771" } },
      { source: { label: "Department of Home Affairs — Travellers eligible to transit without a visa", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771/travellers-eligible-to-transit-without-visa" } },
      { source: { label: "Department of Home Affairs — Transit facilities at Australian airports", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771/transit-facilities-at-australian-airports" } },
    ],
    faq: [
      {
        q: "Mein Aufenthalt in Sydney zwischen zwei Flügen dauert 10 Stunden. Kann ich ohne Visum umsteigen?",
        a: `Nicht über TWOV, denn dafür brauchen Sie einen bestätigten Anschlussflug innerhalb von ${F.twovHours} Stunden nach der Ankunft. Sie benötigen ein Visum – mit einem deutschen Pass das eVisitor, oder ein Transitvisum (Subclass 771).`,
      },
      {
        q: "Hat jeder Flughafen einen Transitbereich?",
        a: "Home Affairs veröffentlicht eine Seite zu den Transiteinrichtungen an australischen Flughäfen. Prüfen Sie diese und fragen Sie bei Ihrer Fluggesellschaft nach dem Flughafen, den Sie nutzen.",
      },
    ],
  },
  {
    slug: "evisitor-app",
    enSlug: "australian-eta-app",
    added: ADDED,
    checked: CHECKED,
    title: "Gibt es eine eVisitor-App? Nein – die Australian ETA App ist nur für die ETA",
    description: `Das eVisitor beantragen Sie online im ImmiAccount. Die Australian ETA App dient nur der ETA (Subclass 601) und kostet ${F.etaFee} Servicegebühr.`,
    related: ["evisitor-oder-eta", "evisitor-antrag-schritt-fuer-schritt", "offizielle-evisitor-seite", "berechtigte-reisepaesse"],
    blocks: [
      {
        p: "Für das eVisitor gibt es keine App. Der eVisitor-Leitfaden von Home Affairs sagt, dass Sie online über den ImmiAccount beantragen und dort auch den Status Ihres Antrags prüfen. Die staatliche App, die Sie in den App-Stores finden – die Australian ETA App –, ist für ein anderes Visum gedacht: die Electronic Travel Authority (Subclass 601).",
      },
      { h2: "Wer die Australian ETA App nutzen muss" },
      {
        p: `Laut Home Affairs müssen Inhaber eines ETA-berechtigten Passes die ETA über die Australian ETA App beantragen. Für die ETA fällt keine Visumantragsgebühr an, für die Nutzung der App aber eine nicht erstattungsfähige Servicegebühr von ${F.etaFee}. Wer die App nicht nutzen kann, kann laut Home Affairs über den ImmiAccount ein anderes passendes Visum beantragen; Inhaber europäischer Pässe sind möglicherweise für das eVisitor berechtigt, für das keine Antragsgebühr anfällt.`,
      },
      { h2: "Zur App" },
      {
        ul: [
          "Herausgeber: Department of Home Affairs (im App Store als Anbieter angegeben)",
          "Der Download aus dem Apple App Store und von Google Play ist kostenlos; der App Store nennt iOS 17.6 oder neuer",
          "Sie brauchen ein Smartphone mit Kamera, eingeschaltetem NFC und eingeschalteten Ortungsdiensten, eine gültige E-Mail-Adresse und ein Zahlungsmittel für die Servicegebühr",
        ],
      },
      { h2: "Was Sie in der App tun" },
      {
        ul: [
          "Pass scannen, um Name, Geburtsdatum, Passnummer und weitere Angaben automatisch auszufüllen",
          "Mit demselben Smartphone ein Live-Foto von sich aufnehmen; es wird automatisch ausgelöst, wenn das Oval auf dem Bildschirm grün wird",
          "Fragen beantworten, Servicegebühr bezahlen und absenden",
          "Familien, die auf demselben Gerät beantragen, können gemeinsam absenden und bezahlen",
          "Jemand kann Ihnen beim Antrag helfen, muss dabei aber persönlich bei Ihnen sein",
          "Die Funktion „Visa check“ der App zeigt den Status Ihres Antrags",
        ],
      },
      { source: ETA_SRC },
      { source: EVISITOR_SRC },
      { source: { label: "Department of Home Affairs — ETA and AIA video guides", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/eta-and-aia-video-guides" } },
      { source: { label: "App Store — AustralianETA", url: "https://apps.apple.com/au/app/australianeta/id1527982364" } },
      { source: { label: "Google Play — AustralianETA", url: "https://play.google.com/store/apps/details?id=au.gov.homeaffairs.eta" } },
      {
        note: `Mit einem deutschen Pass stehen Sie auf der eVisitor-Liste und brauchen die App nicht. Beantragen Sie im ImmiAccount – dort kostet das eVisitor ${F.fee}.`,
      },
    ],
  },
  {
    slug: "offizielle-evisitor-seite",
    enSlug: "official-site",
    added: ADDED,
    checked: CHECKED,
    title: "Die offizielle eVisitor-Seite ist der ImmiAccount: So erkennen Sie ihn und meiden Betrug",
    description:
      "Home Affairs nennt den ImmiAccount die einzige offizielle Website für australische Visumanträge. Die offiziellen Adressen und die Betrugswarnungen der Behörde.",
    related: ["evisitor-antrag-schritt-fuer-schritt", "evisitor-kosten", "evisitor-status-pruefen", "evisitor-haeufige-fehler"],
    blocks: [
      {
        p: "Das Department of Home Affairs bezeichnet den ImmiAccount als sein Einwanderungsportal und als „the only official website to use when applying for an Australian visa“ – die einzige offizielle Website für den Antrag auf ein australisches Visum. Das eVisitor-Antragsformular befindet sich im ImmiAccount.",
      },
      { h2: "Die offiziellen Adressen" },
      {
        ul: [
          "Informationen zum eVisitor: immi.homeaffairs.gov.au",
          "Anmeldung im ImmiAccount und Anträge: online.immi.gov.au",
          "Die Australian ETA App (nur für die ETA): herausgegeben vom Department of Home Affairs",
        ],
      },
      { h2: "Was der offizielle Weg kostet" },
      {
        p: "Home Affairs schreibt: „The eVisitor is free.“ Auf der offiziellen Seite fällt keine Antragsgebühr an.",
      },
      { h2: "Betrugswarnungen von Home Affairs" },
      {
        ul: [
          "Eine E-Mail, die angeblich vom Department of Home Affairs stammt, deren Adresse aber nicht auf .gov.au endet, ist Betrug",
          "Verlangt jemand eine zusätzliche Gebühr für die Ausstellung Ihres Visums (manchmal „CIS charge“ genannt), brechen Sie den Kontakt ab – die australische Regierung erhebt keine zusätzlichen Gebühren für die Ausstellung von Visa",
          "Wer Sie Ihren Antrag nicht im ImmiAccount einsehen lässt, verheimlicht Ihnen etwas",
          "Ein Erteilungsschreiben für ein Visum, das Sie in VEVO (Visa Entitlement Verification Online) nicht finden, ist vermutlich gefälscht",
          "Mitarbeitende von Home Affairs nennen am Telefon immer ihren Namen und fragen nie nach Kreditkartendaten oder Passwörtern",
          "Wenden Sie sich nur an offizielle Stellen der australischen Regierung: die Website von Home Affairs, die Australian Biometric Collection Centres oder die australische Botschaft, Hochkommission oder das Konsulat in Ihrem Land",
        ],
      },
      { h2: "Wenn jemand anderes für Sie beantragt" },
      {
        p: "Ein ImmiAccount kann von der antragstellenden Person selbst, von einem Familienmitglied in ihrem Namen oder von einem Freund, der beim Antrag hilft, eingerichtet werden. Home Affairs weist darauf hin, dass es in Australien verboten ist, gegen Bezahlung bei Einwanderungsangelegenheiten zu helfen, sofern man nicht registrierter Migration Agent oder in Australien zugelassener Rechtsanwalt ist – und dass Sie selbst dafür verantwortlich bleiben, die Bedingungen des Visums zu prüfen, auch wenn jemand anderes den Antrag einreicht.",
      },
      { source: { label: "Department of Home Affairs — How to avoid being scammed", url: "https://immi.homeaffairs.gov.au/help-support/visa-scams/what-you-need-to-know" } },
      { source: { label: "Department of Home Affairs — Visa scams", url: "https://immi.homeaffairs.gov.au/help-support/visa-scams" } },
      { source: { label: "Department of Home Affairs — Applying online in ImmiAccount", url: "https://immi.homeaffairs.gov.au/help-support/applying-online-or-on-paper/online" } },
      { source: { label: "Department of Home Affairs — Who can help with your application", url: "https://immi.homeaffairs.gov.au/help-support/who-can-help-with-your-application/overview" } },
      { source: EVISITOR_SRC },
      {
        note: "Diese Website ist ein unabhängiger Ratgeber und keine Website der Regierung. Wir nehmen weder Anträge noch Zahlungen entgegen.",
      },
    ],
  },
  {
    slug: "reisegenehmigungen-im-vergleich",
    enSlug: "travel-authorisations-compared",
    added: ADDED,
    title: "Welche Reisegenehmigung brauchen Sie? NZeTA, eVisitor, K-ETA, ESTA und weitere im Vergleich",
    description:
      "Ähnliche Namen, ganz unterschiedliche Regeln. Welches System für welches Reiseziel gilt, was es kostet und welche Fehler aus Verwechslungen entstehen.",
    related: ["evisitor-oder-eta", "berechtigte-reisepaesse", "evisitor-kosten"],
    blocks: [
      {
        p: "Elektronische Reisegenehmigungen wirken von außen austauschbar. Das sind sie nicht. Jedes Land betreibt ein eigenes System mit eigener Berechtigungsliste, eigenem Preis und eigener Vorstellung davon, was das Dokument überhaupt ist – manche sind Visa, andere ausdrücklich nicht.",
      },
      {
        p: "Diese Seite zeigt, was was ist. Für Australien ist es das eVisitor, und es ist kostenlos.",
      },
      {
        note: "Eine Regel gilt überall: Sie beantragen auf der eigenen Website der Regierung, und keine Agentur kann eine Entscheidung beschleunigen. Seiten, die ein Vielfaches der offiziellen Gebühr verlangen, füllen für Sie dasselbe Formular aus.",
      },
      { h2: "Australien – eVisitor oder ETA" },
      {
        p: `Das eVisitor (Subclass 651) ist ein Visum und kostenlos. Reisende, deren Pass nicht auf der eVisitor-Liste steht, nutzen stattdessen die ETA (Subclass 601), die ${F.etaFee} kostet und in der offiziellen App beantragt wird. Beide erlauben Aufenthalte von bis zu ${F.stayMonths} Monaten und gelten ${F.validMonths} Monate.`,
      },
      { h2: "Neuseeland – NZeTA" },
      {
        p: "Eine Reisegenehmigung vor der Abreise für Pässe aus Ländern ohne Visumpflicht, kein Visum. Die Kosten bestehen aus zwei Teilen: einer Antragsgebühr und einer separaten Abgabe für Naturschutz und Tourismus – deshalb unterscheiden sich die genannten Gesamtbeträge je nach Quelle.",
      },
      { h2: "Südkorea – K-ETA" },
      {
        p: "Viele Staatsangehörigkeiten sind derzeit vorübergehend von der K-ETA befreit. Die erste Frage ist deshalb, ob Sie überhaupt eine brauchen – und erst danach, wie Sie sie beantragen.",
      },
      { h2: "Vereinigtes Königreich – ETA" },
      {
        p: "Gilt für Besuche von bis zu 6 Monaten im Vereinigten Königreich, auf Jersey, Guernsey und der Isle of Man. GOV.UK nennt als Kosten £20. Beantragt wird über den offiziellen Dienst.",
      },
      { source: { label: "GOV.UK — Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" } },
      { h2: "USA – ESTA, und Kanada – eTA" },
      {
        p: "Beide Länder betreiben vergleichbare Systeme für Reisende ohne Visumpflicht. Ihre Gebühren nennen wir hier nicht, weil wir die aktuellen Beträge beim Schreiben dieser Seite nicht anhand der offiziellen Quellen bestätigen konnten – und ein veralteter Preis ist schlechter als gar keiner. Prüfen Sie direkt die offiziellen Seiten, und nur diese.",
      },
      {
        ul: [
          "USA: esta.cbp.dhs.gov",
          "Kanada: canada.ca (Immigration, Refugees and Citizenship Canada)",
        ],
      },
      { h2: "Die Fehler, die tatsächlich Geld kosten" },
      {
        ul: [
          "Die Annahme, eine Genehmigung decke eine Reise durch mehrere Länder ab. Jedes Ziel ist gesondert zu betrachten, auch ein Zwischenstopp, bei dem Sie den Flughafen verlassen.",
          "Die Annahme, es handle sich um ein Visum. Manche sind eines, manche nicht – und der Unterschied entscheidet, was Sie vor Ort tun dürfen.",
          "Die Annahme, der genannte Preis sei der Endpreis. Mehrere Systeme erheben eine zusätzliche Abgabe oder verlangen je nach Antragsweg einen anderen Betrag.",
          "Ein Antrag über einen bezahlten Vermittler in der Annahme, es gehe schneller. Es ist dasselbe Formular und dieselbe Entscheidung.",
        ],
      },
      { h2: "Prüfen Sie Ihren eigenen Pass, nicht eine Zusammenfassung" },
      {
        p: "Berechtigungslisten ändern sich, und wer zwei Pässe besitzt, bekommt oft zwei verschiedene Antworten. Jedes der genannten Systeme bietet eine offizielle Prüfung an. Nutzen Sie sie für den Pass, mit dem Sie tatsächlich reisen.",
      },
    ],
  },
];
