import { FACTS as F } from "./_schema";
import type { PracticalPack } from "./_schema";

/**
 * フランス語（/fr/）の入国後実用ページ（英語 data/pages-practical.ts の13ページ）。
 * 読者＝フランス（＋ベルギー・スイスのフランス語圏）のeVisitor保持者。二人称は vous。
 *
 * ⚠️ 数値は F から。表記だけを仏語式に直す（下の n()・d()）。値そのものは変えない。
 * ⚠️ 相互医療協定（RHCA）: フランス・スイスは無し、ベルギーは有り。医療ページの冒頭で書き分ける。
 * ⚠️ 仏語版に無い既存ページ（border-questions, biosecurity, customs-allowances,
 *    three-months-per-visit, leaving-and-returning）にはリンクしない。
 */

/** 数値表記を仏語式に（AUD 10,000 → AUD 10 000、1.1 m → 1,1 m、0.05 → 0,05） */
const n = (v: string | number) =>
  String(v)
    .replace(/(\d),(\d{3})/g, "$1 $2")
    .replace(/(\d)\.(\d)/g, "$1,$2");

/** 英語の日付表記を仏語に（1 October 2026 → 1er octobre 2026） */
const MONTHS: Record<string, string> = {
  January: "janvier", February: "février", March: "mars", April: "avril", May: "mai", June: "juin",
  July: "juillet", August: "août", September: "septembre", October: "octobre", November: "novembre", December: "décembre",
};
const d = (s: string) =>
  s.replace(/^1 /, "1er ").replace(/[A-Z][a-z]+/g, (m) => MONTHS[m] ?? m);

const CHECKED = "12 octobre 2026";
const HUB = "arriver-en-australie";

export const frPractical: PracticalPack = {
  ui: { faq: "Questions fréquentes", source: "Source", related: "À lire aussi" },
  articles: [
    /* ── Hub ── */
    {
      slug: HUB,
      enSlug: "arriving-in-australia",
      title: "Arriver en Australie : le guide pratique pour les titulaires de l'eVisitor",
      description: "Le visa vous fait embarquer. Pour la suite — SmartGate, argent, détaxe, santé, conduite, urgences — un guide vérifié aux sources officielles.",
      related: ["smartgate-australie", "argent-et-pourboire", "soins-pour-visiteurs"],
      checked: CHECKED,
      practical: false,
      blocks: [
        {
          p: `L'eVisitor (ou l'ETA, si votre passeport ne figure pas sur la liste de l'eVisitor) répond à une seule question : avez-vous le droit de vous rendre en Australie et d'y séjourner jusqu'à ${F.stayMonths} mois à chaque fois ? Il ne vous dit pas ce qui se passe à l'aéroport, comment payer, ni que faire en cas de problème. Ces pages le font. Chacune est vérifiée auprès de l'organisme public australien compétent, avec un lien vers sa page.`,
        },
        { h2: "À la frontière" },
        { links: ["smartgate-australie", "medicaments-en-voyage"] },
        { h2: "Argent" },
        { links: ["argent-et-pourboire", "remboursement-taxe-trs"] },
        { h2: "Se déplacer et rester joignable" },
        { links: ["conduire-en-australie", "telephone-et-carte-sim", "prises-et-tension", "jours-feries-australie"] },
        { h2: "Santé et sécurité" },
        { links: ["soins-pour-visiteurs", "numeros-urgence-australie", "tabac-vapotage-alcool"] },
        { h2: "Le vol retour" },
        { links: ["liquides-bagage-cabine"] },
        {
          note: "Un sujet que nous n'avons pas traité : les transports en commun. Il n'existe pas de système national — chaque ville a sa propre carte et ses propres tarifs (Opal à Sydney, myki à Melbourne, go card dans le sud-est du Queensland). Renseignez-vous auprès de l'autorité des transports de la ville où vous allez.",
        },
      ],
    },

    /* ── SmartGate ── */
    {
      slug: "smartgate-australie",
      enSlug: "smartgate-australia",
      title: `SmartGate en Australie : qui peut l'utiliser (dès ${F.smartgateMinAge} ans) et ce qu'il faut encore`,
      description: `À l'arrivée, les SmartGates acceptent les voyageurs de ${F.smartgateMinAge} ans et plus avec tout passeport valide (essai ABF). La carte papier reste obligatoire.`,
      related: ["medicaments-en-voyage", "liquides-bagage-cabine", HUB],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "Les SmartGates sont les portiques automatiques de contrôle des passeports gérés par l'Australian Border Force (ABF, la police aux frontières australienne) dans les principaux aéroports internationaux du pays. À l'arrivée, le portique lit votre passeport, vous prend en photo et compare votre visage à celle du passeport. Si la vérification réussit, il imprime un ticket et vous passez.",
        },
        { h2: "Qui peut utiliser les SmartGates à l'arrivée" },
        {
          ul: [
            "Vous voyagez avec un passeport valide",
            `Vous mesurez au moins ${n(F.smartgateMinHeight)}`,
            `Vous avez au moins ${F.smartgateMinAge} ans`,
            `Les enfants de moins de ${F.smartgateAccompanyUnder} ans doivent être accompagnés d'un parent ou d'un représentant légal`,
          ],
        },
        {
          p: "Jusqu'à récemment, il fallait un passeport électronique (le symbole de la puce sur la couverture). L'ABF teste désormais les SmartGates d'arrivée pour tous les passeports : un passeport sans puce peut donc aussi fonctionner. L'ABF ne publie pas de liste de nationalités : les critères ci-dessus portent sur le passeport et le voyageur, pas sur le pays qui a délivré le passeport.",
        },
        {
          note: "Votre eVisitor (ou ETA) et le SmartGate sont deux choses distinctes. Le visa vous permet d'embarquer et d'entrer ; le SmartGate n'est que la manière dont votre passeport est contrôlé. Passer par le portique ne change rien aux conditions de votre visa.",
        },
        { h2: "L'Incoming Passenger Card reste obligatoire" },
        {
          p: "La plupart des passagers doivent remplir une carte papier, l'Incoming Passenger Card (IPC, carte de débarquement). Elle est distribuée dans l'avion ou dans le terminal et doit être remplie en anglais. L'ABF publie des modèles traduits — notamment en français — pour que vous compreniez les questions, mais la carte que vous remettez se remplit en anglais.",
        },
        {
          p: "À la sortie, vous remettez votre ticket SmartGate et votre Incoming Passenger Card à un agent de la Border Force ou de la biosécurité. L'Australia Travel Declaration est une alternative numérique : selon l'ABF (au 15 novembre 2026), son formulaire en ligne n'est disponible que pour les vols arrivant à l'aéroport international de Western Sydney, et il ne faut pas le remplir si vous arrivez dans un autre aéroport australien. Consultez la page de l'ABF pour votre aéroport d'arrivée.",
        },
        { source: { label: "Australian Border Force — Australia Travel Declaration", url: "https://www.abf.gov.au/entering-and-leaving-australia/australia-travel-declaration" } },
        { h2: "Langues disponibles sur les écrans" },
        {
          p: `Les écrans des SmartGates d'arrivée sont en anglais, avec ${F.smartgateArrivalLanguages} autres langues au choix, dont le français, l'allemand, le néerlandais, l'italien, l'espagnol, le coréen et le chinois simplifié et traditionnel. Les écrans des SmartGates de départ sont en anglais, japonais, coréen et mandarin.`,
        },
        { h2: "En quittant l'Australie" },
        {
          p: "Tout voyageur muni d'un passeport valide lisible par machine peut utiliser les SmartGates de départ. Vous ne pouvez pas les utiliser si vous voyagez avec une personne qui a besoin d'aide pour suivre les instructions, par exemple un bébé ou un jeune enfant.",
        },
        { source: { label: "Australian Border Force (ABF) — Qui peut utiliser les SmartGates d'arrivée", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgate/arrivals/who-can-use-smartgates" } },
        { source: { label: "Australian Border Force (ABF) — SmartGates de départ", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgate/departures" } },
        { source: { label: "Australian Border Force (ABF) — Incoming Passenger Card", url: "https://www.abf.gov.au/entering-and-leaving-australia/crossing-the-border/at-the-border/incoming-passenger-card-(ipc)" } },
      ],
      faq: [
        {
          q: "Un passeport français, belge ou suisse permet-il d'utiliser le SmartGate ?",
          a: `L'ABF ne publie pas de liste de nationalités. Les SmartGates d'arrivée sont ouverts aux voyageurs munis d'un passeport valide, âgés d'au moins ${F.smartgateMinAge} ans et mesurant au moins ${n(F.smartgateMinHeight)}, et l'ABF les teste pour tous les passeports.`,
        },
        {
          q: "Faut-il quand même remplir l'Incoming Passenger Card si j'utilise le SmartGate ?",
          a: "Oui. À la sortie, vous remettez votre ticket SmartGate avec l'Incoming Passenger Card remplie. La carte doit être remplie en anglais.",
        },
        {
          q: "Mon enfant de 5 ans peut-il passer par le SmartGate ?",
          a: `Non. Les SmartGates d'arrivée exigent un âge minimum de ${F.smartgateMinAge} ans. Les familles avec de plus jeunes enfants passent devant un agent.`,
        },
      ],
    },

    /* ── Liquides ── */
    {
      slug: "liquides-bagage-cabine",
      enSlug: "airport-security-liquids",
      title: `Liquides en cabine au départ de l'Australie : la règle des ${n(F.lagsContainer)} et la limite des poudres`,
      description: `Sur les vols internationaux au départ de l'Australie, liquides, aérosols et gels : contenants de ${n(F.lagsContainer)} max., un sac transparent. Poudres limitées.`,
      related: ["remboursement-taxe-trs", "medicaments-en-voyage", HUB],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "L'Australie limite les liquides, aérosols, gels et certaines poudres dans le bagage cabine sur les vols internationaux. Ces limites ne s'appliquent pas aux bagages en soute ni à la plupart des vols intérieurs.",
        },
        { h2: "Quand les limites s'appliquent" },
        {
          ul: [
            "Lorsque vous quittez l'Australie sur un vol international",
            "Lorsque vous transitez par l'Australie d'un pays à un autre",
            "Sur le tronçon intérieur d'un vol qui part d'un terminal international australien",
            "Avant d'embarquer sur un vol à destination de l'Australie, à sa dernière escale avant l'Australie",
          ],
        },
        { h2: "Liquides, aérosols et gels" },
        {
          ul: [
            `Chaque contenant doit faire ${n(F.lagsContainer)} (ou 100 g) au maximum — un contenant plus grand est refusé même s'il n'est qu'à moitié plein`,
            `Tous les contenants doivent tenir dans un seul sac plastique transparent refermable, dont les quatre côtés additionnés ne dépassent pas ${F.lagsBagPerimeterCm} cm (par exemple 20 × 20 cm)`,
            "Un sac par passager ; vous pouvez porter les sacs des personnes dont vous avez la charge, enfants compris",
            "Les aérosols doivent avoir un capuchon ou un dispositif de verrouillage",
          ],
        },
        {
          p: "Les pâtes à tartiner et aliments mous comptent comme liquides ou gels. La liste officielle cite la Vegemite, le beurre de cacahuète, le miel et le yaourt — des souvenirs qui surprennent souvent au contrôle de sûreté.",
        },
        { h2: "Poudres" },
        {
          p: `Les poudres inorganiques — sel, gommages au sel, sable, certains talcs — doivent être dans des contenants de ${n(F.powderLimit)} au maximum, et le total par personne ne doit pas dépasser ${n(F.powderLimit)}. Les poudres organiques comme le lait infantile, le café, les protéines en poudre, la farine, les épices et le sucre ne sont pas limitées. On peut vous demander de présenter les poudres à part au contrôle.`,
        },
        { h2: "Exceptions" },
        {
          ul: [
            "Les produits pour bébé en quantité raisonnable",
            "Les médicaments, sur ordonnance ou non, nécessaires pendant le vol — un justificatif peut être demandé, par exemple une lettre du médecin",
            "Les dispositifs et équipements médicaux",
          ],
        },
        { h2: "Duty free" },
        {
          p: "Les liquides achetés en duty free à l'aéroport doivent rester dans le sac scellé et inviolable dans lequel ils ont été emballés, avec la preuve d'achat.",
        },
        { source: { label: "Department of Home Affairs (TravelSECURE) — Ce que vous pouvez emporter ou non", url: "https://www.homeaffairs.gov.au/about-us/what-we-do/travelsecure/security-screening-at-airports/what-you-can-and-cant-bring" } },
      ],
      faq: [
        {
          q: "Les limites sur les liquides s'appliquent-elles aux vols intérieurs en Australie ?",
          a: "Pas sur la plupart des vols intérieurs. Elles s'appliquent en revanche au tronçon intérieur d'un vol qui part d'un terminal international.",
        },
        {
          q: "Puis-je mettre un pot de Vegemite dans mon bagage cabine ?",
          a: `Uniquement dans un contenant de ${n(F.lagsContainer)} au maximum, placé dans votre sac à liquides. Les pots plus grands vont en soute.`,
        },
        {
          q: "Le lait infantile est-il limité ?",
          a: "Le lait infantile en poudre est une poudre organique et n'est pas limité. Les produits pour bébé en quantité raisonnable sont exemptés des limites sur les liquides.",
        },
      ],
    },

    /* ── Argent ── */
    {
      slug: "argent-et-pourboire",
      enSlug: "money-and-tipping",
      title: "L'argent en Australie : espèces, frais de carte, GST et pourboire",
      description: `Prix TTC (GST ${F.gstPercent} %), plus de frais de carte depuis le ${d(F.surchargeBanFrom)}, pourboire facultatif. Espèces dès ${n(F.cashReportThreshold)} : à déclarer.`,
      related: ["remboursement-taxe-trs", "telephone-et-carte-sim", "jours-feries-australie"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "L'Australie utilise le dollar australien (AUD). Quelques règles sont bonnes à connaître avant de payer quoi que ce soit — l'une d'elles vient tout juste de changer.",
        },
        { h2: "Le prix affiché inclut la taxe" },
        {
          p: `La taxe sur les biens et services (GST, l'équivalent de la TVA) est de ${F.gstPercent} %, et les commerces doivent afficher un prix total qui l'inclut. Ce que vous voyez est ce que vous payez en caisse.`,
        },
        { h2: "Fin des frais supplémentaires pour paiement par carte" },
        {
          p: `Depuis le ${d(F.surchargeBanFrom)}, les commerces ne peuvent plus ajouter de supplément pour un paiement par carte Visa, Mastercard, American Express ou eftpos — crédit, débit ou prépayée. Avant cette date, beaucoup de cafés et de taxis ajoutaient un pourcentage pour les paiements par carte. Si l'on vous facture aujourd'hui un supplément carte, il est légitime de le contester.`,
        },
        {
          note: "Les suppléments du week-end et des jours fériés sont une autre affaire et restent autorisés — certains cafés et restaurants en appliquent un le dimanche et les jours fériés. Votre propre banque peut aussi facturer des frais sur les paiements à l'étranger ; cela relève de votre contrat avec elle.",
        },
        { h2: "Le pourboire" },
        {
          p: "Tourism Australia présente le pourboire comme facultatif et non attendu dans la plupart des endroits. Dans les restaurants haut de gamme, environ 10 % pour un bon service est courant. Ne pas laisser de pourboire dans un café ou un taxi ne vexera personne.",
        },
        { h2: `Espèces de ${n(F.cashReportThreshold)} ou plus : déclaration obligatoire` },
        {
          p: `Il n'y a pas de plafond au montant que vous pouvez apporter en Australie ou en sortir. Mais si vous transportez des espèces et des instruments comme des chèques de voyage, des chèques ou des mandats — en n'importe quelle devise — d'une valeur totale de ${n(F.cashReportThreshold)} ou plus, vous devez les déclarer à l'arrivée et au départ.`,
        },
        {
          ul: [
            "Déclarez en ligne via le formulaire de l'AUSTRAC avant de passer la douane, et conservez le récépissé",
            "Un formulaire papier est disponible auprès d'un agent de la Border Force ou de la police si vous ne pouvez pas utiliser le formulaire en ligne",
            "La question 5 de l'Incoming Passenger Card porte sur le même point",
            "La déclaration est gratuite. Répartir l'argent entre plusieurs voyageurs pour rester sous le seuil est illégal",
          ],
        },
        { source: { label: "AUSTRAC — Transporter de l'argent à travers les frontières", url: "https://www.austrac.gov.au/individuals/moving-money-across-international-borders" } },
        { source: { label: "ACCC — Frais supplémentaires de carte (card surcharges)", url: "https://www.accc.gov.au/consumers/pricing/card-surcharges" } },
        { source: { label: "Tourism Australia — L'essentiel sur l'Australie", url: "https://www.australia.com/en/facts-and-planning/about-australia/key-facts-about-australia.html" } },
      ],
      faq: [
        {
          q: `Est-il interdit d'apporter plus de ${n(F.cashReportThreshold)} en Australie ?`,
          a: `Non. Il n'y a pas de plafond. Les montants de ${n(F.cashReportThreshold)} ou plus en espèces et instruments assimilés doivent simplement être déclarés.`,
        },
        {
          q: "Les commerces peuvent-ils encore facturer un supplément pour un paiement par carte ?",
          a: `Plus pour les cartes Visa, Mastercard, American Express ou eftpos depuis le ${d(F.surchargeBanFrom)}. Les suppléments du week-end et des jours fériés sont une autre question et restent autorisés.`,
        },
        {
          q: "Faut-il laisser un pourboire en Australie ?",
          a: "C'est facultatif. Environ 10 % dans les restaurants haut de gamme est courant ; ailleurs, ce n'est pas attendu.",
        },
      ],
    },

    /* ── TRS ── */
    {
      slug: "remboursement-taxe-trs",
      enSlug: "tourist-refund-scheme",
      title: `Tourist Refund Scheme (TRS) : récupérer la GST en quittant l'Australie (dès ${n(F.trsMinSpend)})`,
      description: `${n(F.trsMinSpend)}+ chez un même commerce, dans les ${F.trsDays} jours avant le départ, achats sur vous : demande à l'aéroport au plus tard ${F.trsCutoffMinutes} min avant le vol.`,
      related: ["argent-et-pourboire", "liquides-bagage-cabine", HUB],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "Les visiteurs peuvent récupérer la GST — et la taxe sur le vin (WET, wine equalisation tax) — sur les marchandises achetées en Australie et emportées au départ. Le dispositif, le Tourist Refund Scheme (TRS, détaxe pour touristes), est géré par l'Australian Border Force à l'aéroport, le jour de votre départ.",
        },
        { h2: "Les conditions" },
        {
          ul: [
            `Vous avez dépensé ${n(F.trsMinSpend)} ou plus (GST comprise) auprès d'un même commerce — un même ABN (numéro d'entreprise australien). Il peut s'agir de plusieurs factures du même commerce`,
            `Vous avez acheté les marchandises dans les ${F.trsDays} jours précédant votre départ d'Australie`,
            "Vous avez les factures fiscales originales (tax invoices). Les factures de AUD 1 000 ou plus doivent porter votre nom",
            "Vous emportez les marchandises avec vous au départ — elles ne peuvent pas être envoyées par la poste ou par fret",
          ],
        },
        { h2: "La demande à l'aéroport" },
        {
          p: `Présentez votre passeport, votre carte d'embarquement, les marchandises et les factures originales au comptoir TRS le jour du départ, au plus tard ${F.trsCutoffMinutes} minutes avant l'heure de départ prévue. L'ABF conseille de s'y présenter ${F.trsArriveMinutes} minutes avant le départ, car la file peut être aussi longue aux heures de pointe.`,
        },
        {
          ul: [
            "Impossible de faire la demande en ligne, avant le jour du départ ou dans un aéroport intérieur",
            "Pas de remboursement en espèces — le remboursement est versé sur une carte de crédit (Amex, Diners, JCB, Mastercard, UnionPay ou Visa) ou sur un compte bancaire australien, en général sous 60 jours",
            "L'application officielle TRS enregistre vos coordonnées et vos factures sous forme de QR code pour accélérer le passage ; elle ne remplace pas la demande en personne",
          ],
        },
        { h2: "Ce qui n'est pas remboursable" },
        {
          ul: [
            "Les services — hébergement, excursions, taxis, location de voiture",
            "Les produits consommés en tout ou partie en Australie, y compris nourriture, boissons, parfum et compléments alimentaires",
            "L'alcool autre que le vin titrant moins de 22 %, et le tabac",
            "Les cartes cadeaux et bons d'achat, et les marchandises envoyées chez vous par la poste ou par fret",
          ],
        },
        { source: { label: "Australian Border Force (ABF) — Tourist Refund Scheme", url: "https://www.abf.gov.au/entering-and-leaving-australia/tourist-refund-scheme" } },
        { source: { label: "Australian Border Force (ABF) — Faire la demande", url: "https://www.abf.gov.au/entering-and-leaving-australia/tourist-refund-scheme/making-the-claim" } },
      ],
      faq: [
        {
          q: `Puis-je additionner les tickets de plusieurs magasins pour atteindre ${n(F.trsMinSpend)} ?`,
          a: `Non. Les ${n(F.trsMinSpend)} doivent être dépensés auprès d'un même commerce (même ABN), même s'ils peuvent être répartis sur plusieurs factures de ce commerce.`,
        },
        {
          q: "Puis-je être remboursé en espèces ?",
          a: "Non. Le remboursement est versé sur une carte de crédit ou sur un compte bancaire australien.",
        },
        {
          q: "Jusqu'à quand puis-je faire la demande ?",
          a: `Au plus tard ${F.trsCutoffMinutes} minutes avant l'heure de départ prévue. L'ABF recommande d'arriver au comptoir TRS ${F.trsArriveMinutes} minutes avant le départ.`,
        },
      ],
    },

    /* ── Santé ── */
    {
      slug: "soins-pour-visiteurs",
      enSlug: "healthcare-for-visitors",
      title: "Se soigner en Australie : pas d'accord Medicare pour la France ni la Suisse, la Belgique couverte",
      description: `La France et la Suisse n'ont aucun accord de soins réciproques avec l'Australie ; la Belgique fait partie des ${F.rhcaCountries} pays couverts. Ce que cela change.`,
      related: ["medicaments-en-voyage", "numeros-urgence-australie", HUB],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: `Si vous êtes assuré en France ou en Suisse, retenez d'abord ceci : ni la France ni la Suisse n'ont d'accord de soins de santé réciproques (Reciprocal Health Care Agreement, RHCA) avec l'Australie. Vous payez l'intégralité des frais d'hôpital, d'ambulance ou de médecin, sauf si vous êtes assuré. La Belgique, elle, fait partie des ${F.rhcaCountries} pays couverts.`,
        },
        {
          p: "Le système public de santé australien, Medicare, est réservé aux résidents. Les visiteurs paient leurs soins eux-mêmes — sauf si leur pays a conclu un RHCA avec l'Australie. Le Department of Home Affairs l'écrit clairement sur la page de l'eVisitor : vous êtes personnellement responsable de tous vos frais de santé en Australie, et il recommande une assurance santé.",
        },
        { h2: `Les ${F.rhcaCountries} pays ayant un accord` },
        {
          p: "Belgique, Finlande, Irlande, Italie, Malte, Pays-Bas, Nouvelle-Zélande, Norvège, Slovénie, Suède et Royaume-Uni.",
        },
        {
          note: "L'Allemagne, la France, l'Espagne, l'Autriche, la Suisse, la Corée du Sud, la Chine et Taïwan n'ont pas d'accord. Les visiteurs de ces pays paient l'intégralité des frais d'hôpital, d'ambulance ou de médecin, sauf s'ils sont assurés.",
        },
        { h2: "Ce que couvre l'accord (pour les Belges notamment)" },
        {
          ul: [
            "Les soins médicalement nécessaires hors hôpital (par exemple une consultation chez un généraliste, ou GP)",
            "Les soins médicalement nécessaires en tant que patient public dans un hôpital public, en hospitalisation comme en ambulatoire",
            "Certains médicaments sur ordonnance au titre du PBS (Pharmaceutical Benefits Scheme), au tarif général",
          ],
        },
        {
          p: "Les visiteurs venant d'Irlande (et de Nouvelle-Zélande) sont couverts uniquement pour les soins à l'hôpital public et les médicaments du PBS — pas pour les consultations chez le généraliste. Ils ne s'inscrivent pas à Medicare et doivent demander au personnel de l'hôpital ou de la pharmacie d'être traités au titre de l'accord.",
        },
        { h2: "Ce qu'il ne couvre pas" },
        {
          ul: [
            "Les soins en tant que patient privé, dans un hôpital public ou privé",
            "Un voyage en Australie dans le but de s'y faire soigner",
            "Tout ce qui n'est pas médicalement nécessaire",
          ],
        },
        { h2: "Durée de la couverture" },
        {
          ul: [
            "Italie et Malte : jusqu'à 6 mois à compter de l'arrivée, ou jusqu'à l'expiration du visa si elle intervient avant",
            "Royaume-Uni et Irlande : jusqu'à l'expiration du visa",
            "Pays-Bas, Belgique, Norvège et Slovénie : jusqu'à l'expiration de votre assurance maladie nationale, de votre carte européenne d'assurance maladie (CEAM/EHIC) ou de votre visa — selon ce qui arrive en premier",
          ],
        },
        { h2: "S'inscrire à Medicare" },
        {
          p: "Les visiteurs des pays ayant un accord (hors Irlande et Nouvelle-Zélande) s'inscrivent à Medicare et reçoivent une carte Medicare jaune. Il vous faut votre passeport, votre visa et une preuve de votre couverture dans votre pays — généralement votre carte européenne d'assurance maladie (ou une GHIC pour les résidents britanniques) ou votre carte d'assurance maladie nationale. Si vous ne restez que peu de temps en Australie et n'avez pas besoin de soins, inutile de vous inscrire. Les soins reçus avant l'inscription peuvent encore être couverts une fois inscrit.",
        },
        { source: { label: "Services Australia — Reciprocal Health Care Agreements (accords de soins réciproques)", url: "https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements" } },
        { source: { label: "Services Australia — Séjourner en Australie (Visiting Australia)", url: "https://www.servicesaustralia.gov.au/visiting-australia" } },
        { source: { label: "Department of Home Affairs — eVisitor (subclass 651) : assurance santé", url: F.officialUrl } },
      ],
      faq: [
        {
          q: "La France a-t-elle un accord de soins de santé avec l'Australie ?",
          a: "Non. La France (comme la Suisse, l'Allemagne et l'Espagne) n'a pas de Reciprocal Health Care Agreement avec l'Australie. Les visiteurs de ces pays ont intérêt à souscrire une assurance santé voyage.",
        },
        {
          q: "Je suis assuré en Belgique. Suis-je couvert ?",
          a: "La Belgique fait partie des pays ayant un accord. Les soins médicalement nécessaires comme patient public sont couverts jusqu'à l'expiration de votre assurance nationale, de votre carte européenne d'assurance maladie ou de votre visa — selon ce qui arrive en premier. Pour les consultations chez le généraliste, il faut s'inscrire à Medicare.",
        },
        {
          q: "L'assurance santé est-elle obligatoire pour l'eVisitor ?",
          a: "Le Department of Home Affairs la recommande et précise que vous êtes personnellement responsable de tous vos frais de santé en Australie. Vérifiez les conditions de votre propre visa dans VEVO ou dans votre lettre d'octroi.",
        },
      ],
    },

    /* ── Médicaments ── */
    {
      slug: "medicaments-en-voyage",
      enSlug: "bringing-medicines",
      title: `Emporter des médicaments en Australie : la règle des ${F.medicineSupplyMonths} mois`,
      description: `Jusqu'à ${F.medicineSupplyMonths} mois de traitement pour votre usage, emballage d'origine, ordonnance ou lettre du médecin, à déclarer. Certains sont interdits.`,
      related: ["soins-pour-visiteurs", "liquides-bagage-cabine", "smartgate-australie"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "L'Australie permet aux voyageurs d'apporter des médicaments pour leur usage personnel sans autorisation, au titre de l'« exemption du voyageur » (traveller's exemption) — à condition d'en respecter les conditions. L'exemption couvre aussi un membre de la famille proche qui voyage avec vous.",
        },
        { h2: "Les conditions" },
        {
          ul: [
            `Pas plus de ${F.medicineSupplyMonths} mois de traitement`,
            "Gardez si possible les médicaments dans leur emballage d'origine avec l'étiquette de la pharmacie",
            "Ayez sur vous l'ordonnance ou une lettre de votre médecin indiquant le nom du médicament et la posologie",
            "Déclarez tous vos médicaments à l'Australian Border Force à l'arrivée",
            "Ne donnez ni ne vendez vos médicaments à personne, et remportez ce qui reste en repartant",
          ],
        },
        { h2: "Antidouleurs puissants, traitements du TDAH et somnifères" },
        {
          p: "L'Office of Drug Control indique que des médicaments sur ordonnance comme la morphine, l'oxycodone, la méthadone, le méthylphénidate, l'Adderall et les benzodiazépines sont couverts par l'exemption du voyageur — avec une ordonnance ou une lettre du médecin. Tout médicament contenant de la codéine, quel que soit le dosage, nécessite aussi une ordonnance ou une lettre du médecin.",
        },
        { h2: "Médicaments interdits" },
        {
          ul: [
            "Les abortifs comme la mifépristone (RU486)",
            "Le yohimbe (yohimbine)",
            "L'aminophénazone, l'aminopyrine, la dipyrone (métamizole)",
            "L'amygdaline (laétrile)",
          ],
        },
        { h2: "Si vous êtes à court" },
        {
          p: "Consultez un médecin australien (un GP, généraliste) pour obtenir une ordonnance australienne. Se faire envoyer des médicaments depuis chez soi est encadré : les médicaments sur ordonnance exigent une ordonnance australienne valide, le colis ne peut pas dépasser 3 mois de traitement, et les médicaments contrôlés et les vapes ne peuvent pas du tout être envoyés.",
        },
        { source: { label: "Therapeutic Goods Administration (TGA) — Entrer en Australie avec des médicaments", url: "https://www.tga.gov.au/resources/consumer-information-and-resources/travelling-medicines-and-medical-devices/entering-australia" } },
        { source: { label: "Office of Drug Control — Voyager en Australie avec des médicaments", url: "https://www.odc.gov.au/travellers/travelling-or-australia-medicines-and-medical-devices" } },
        { source: { label: "TGA — Personal Importation Scheme (importation personnelle)", url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/access-pathways/personal-importation-scheme" } },
      ],
      faq: [
        {
          q: "Quelle quantité de médicaments puis-je emporter en Australie ?",
          a: `Jusqu'à ${F.medicineSupplyMonths} mois de traitement pour votre usage personnel, ou pour un membre de votre famille proche qui voyage avec vous.`,
        },
        {
          q: "Puis-je emporter mon traitement contre le TDAH ?",
          a: "Des médicaments comme le méthylphénidate et l'Adderall sont couverts par l'exemption du voyageur, à condition d'avoir sur vous une ordonnance ou une lettre du médecin et de les déclarer.",
        },
        {
          q: "Ma famille peut-elle m'envoyer mes médicaments en Australie ?",
          a: "Seulement dans des conditions strictes. Les médicaments sur ordonnance exigent une ordonnance australienne valide, et les médicaments contrôlés ne peuvent pas être envoyés.",
        },
      ],
    },

    /* ── Tabac, vapotage, alcool ── */
    {
      slug: "tabac-vapotage-alcool",
      enSlug: "smoking-vaping-and-alcohol",
      title: "Tabac, vapotage et alcool en Australie : les règles que les visiteurs ignorent",
      description: `Vapes vendues uniquement en pharmacie ; ${F.vapeDevices} vapes autorisées pour votre traitement. Alcool dès ${F.legalAge} ans, tabac interdit dans les lieux publics clos.`,
      related: ["conduire-en-australie", "medicaments-en-voyage", "numeros-urgence-australie"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "L'Australie réglemente les vapes (cigarettes électroniques) comme des produits thérapeutiques, pas comme des produits de consommation courante. Cela surprend beaucoup de visiteurs — surtout ceux qui ont l'habitude d'en acheter au bureau de tabac chez eux.",
        },
        { h2: "Les vapes" },
        {
          ul: [
            "Les vapes ne sont vendues que par les pharmacies participantes. Bureaux de tabac, boutiques de vape et supérettes n'ont le droit de vendre aucune vape, avec ou sans nicotine",
            `Les adultes de ${F.legalAge} ans et plus peuvent, si la loi de l'État le permet, acheter en pharmacie sans ordonnance des vapes dont la teneur en nicotine est de 20 mg/mL au maximum — sur présentation d'une pièce d'identité, dans la limite d'un mois de consommation, et seulement aux arômes menthe, menthol ou tabac`,
            "Vous ne pouvez pas commander de vapes sur des sites étrangers pour votre usage personnel, même avec une ordonnance",
            "Certains États interdisent la détention de vapes à la nicotine sans ordonnance",
          ],
        },
        { h2: "Apporter des vapes" },
        {
          p: `Les voyageurs arrivant par avion ou par bateau peuvent apporter jusqu'à ${F.vapeDevices} vapes, ${F.vapeAccessories} accessoires (cartouches, capsules ou pods) et ${n(F.vapeLiquid)} de liquide. Selon la formulation de la TGA, ils doivent servir au traitement du voyageur, ou d'une personne dont il a la charge sur le même vol ou le même bateau. Les agents de la Border Force peuvent saisir les marchandises qu'ils soupçonnent d'être importées illégalement.`,
        },
        { h2: "Le tabac" },
        {
          p: `Il est interdit de vendre du tabac à une personne de moins de ${F.legalAge} ans. Il est interdit de fumer dans les lieux publics clos dans tous les États et territoires — transports publics, bureaux, centres commerciaux, cinémas et aéroports notamment. Les règles pour les espaces extérieurs comme les terrasses, les plages et les aires de jeux varient selon l'État. Les quantités de tabac en franchise de droits sont limitées.`,
        },
        { h2: "L'alcool" },
        {
          ul: [
            `Il faut avoir ${F.legalAge} ans ou plus pour acheter de l'alcool ou boire dans un établissement licencié`,
            "Les endroits où l'on peut boire en extérieur sont fixés par les États et les conseils municipaux — de nombreux lieux publics sont des zones sans alcool",
            `Le taux d'alcool maximal au volant est de ${n(F.bacLimit)} (concentration d'alcool dans le sang, BAC) — et de zéro pour les conducteurs en apprentissage et les jeunes conducteurs (permis provisoire)`,
          ],
        },
        { source: { label: "TGA — Vapes : informations pour les particuliers", url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/therapeutic-vaping-goods/vaping-hub/vapes-information-individuals-and-patients" } },
        { source: { label: "Department of Health — Lois sur le tabac en Australie", url: "https://www.health.gov.au/topics/smoking-vaping-and-tobacco/about-smoking/laws-in-australia" } },
        { source: { label: "Department of Health — Lois sur l'alcool en Australie", url: "https://www.health.gov.au/topics/alcohol/about-alcohol/alcohol-laws-in-australia" } },
      ],
      faq: [
        {
          q: "Peut-on acheter une vape au bureau de tabac ou en supérette en Australie ?",
          a: "Non. Les vapes ne peuvent être vendues que par les pharmacies participantes. Il est illégal pour les autres commerces de vendre une vape, quelle qu'elle soit.",
        },
        {
          q: "Combien de vapes puis-je apporter en Australie ?",
          a: `Jusqu'à ${F.vapeDevices} vapes, ${F.vapeAccessories} accessoires et ${n(F.vapeLiquid)} de liquide, pour votre propre traitement ou celui d'une personne dont vous avez la charge et qui voyage avec vous.`,
        },
        {
          q: "À partir de quel âge peut-on boire de l'alcool en Australie ?",
          a: `${F.legalAge} ans. Il faut avoir ${F.legalAge} ans ou plus pour acheter de l'alcool ou boire dans un établissement licencié.`,
        },
      ],
    },

    /* ── Urgences ── */
    {
      slug: "numeros-urgence-australie",
      enSlug: "emergency-and-safety",
      title: `Numéros d'urgence en Australie : ${F.emergency}, ${F.emergencyMobile} — et pourquoi le 911 ne marche pas`,
      description: `Le ${F.emergency} pour police, pompiers, ambulance ; le ${F.emergencyMobile} depuis un portable. Le 911 n'est pas redirigé. Police non urgente : ${F.policeAssistance}. Interprète fourni.`,
      related: ["soins-pour-visiteurs", "telephone-et-carte-sim", "conduire-en-australie"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: `Le Triple Zero (${F.emergency}) est le numéro d'urgence australien pour la police, les pompiers et l'ambulance, en cas de danger de mort ou d'urgence où chaque minute compte. L'appel est gratuit depuis un fixe, un portable, une cabine ou un téléphone satellite.`,
        },
        { h2: "Les numéros" },
        {
          ul: [
            `${F.emergency} — police, pompiers, ambulance`,
            `${F.emergencyMobile} — fonctionne uniquement depuis un téléphone portable et aboutit au même service que le ${F.emergency}. Il n'est pas prioritaire par rapport au ${F.emergency}`,
            `${F.policeAssistance} — Police Assistance Line, pour les affaires de police non urgentes`,
            `${F.ses} — State Emergency Service, pour l'aide en cas d'inondation, de tempête ou de tsunami quand il n'y a pas de danger de mort`,
            `Ne composez pas le 911 — les appels au 911 ne sont pas redirigés vers le ${F.emergency}`,
          ],
        },
        { h2: "Si vous ne parlez pas anglais" },
        {
          p: `Appelez le ${F.emergency}, dites « police », « fire » (pompiers) ou « ambulance », et restez en ligne. Un interprète sera mis à disposition.`,
        },
        { h2: "Téléphones portables et couverture réseau" },
        {
          ul: [
            `Si votre réseau ne capte pas, votre téléphone utilise automatiquement un autre réseau disponible pour joindre le ${F.emergency} — même sans carte SIM`,
            `S'il n'y a de couverture sur aucun réseau, vous ne pouvez pas joindre le ${F.emergency} avec un portable. De vastes zones de l'outback australien n'en ont aucune`,
            `Le ${F.emergency} ne peut pas être contacté par SMS`,
            "Si l'appel n'aboutit pas en 5 secondes environ, raccrochez et rappelez",
          ],
        },
        {
          note: `Les réseaux 3G australiens ont été éteints. Les téléphones 3G et certains téléphones 4G plus anciens — en particulier ceux achetés à l'étranger — peuvent ne pas réussir à appeler le ${F.emergency}. Le régulateur conseille de ne pas tester en appelant le ${F.emergency} ; demandez plutôt à l'opérateur mobile.`,
        },
        { source: { label: "Department of Infrastructure — Triple Zero (000)", url: "https://www.infrastructure.gov.au/media-communications/phone/triple-zero" } },
        { source: { label: "ACMA — Extinction du réseau 3G", url: "https://www.acma.gov.au/3g-network-switch" } },
      ],
      faq: [
        {
          q: "Le 911 fonctionne-t-il en Australie ?",
          a: `Non. Les appels au 911 ne sont pas redirigés. Composez le ${F.emergency}, ou le ${F.emergencyMobile} depuis un portable.`,
        },
        {
          q: `Puis-je appeler le ${F.emergency} sans carte SIM australienne ?`,
          a: `Oui, à condition qu'un réseau mobile soit disponible. Votre téléphone se connecte à n'importe quel réseau disponible pour le ${F.emergency}, même sans SIM active.`,
        },
        {
          q: `Peut-on envoyer un SMS au ${F.emergency} ?`,
          a: `Non. Le ${F.emergency} ne peut pas être contacté par SMS.`,
        },
      ],
    },

    /* ── Téléphone / SIM ── */
    {
      slug: "telephone-et-carte-sim",
      enSlug: "phones-and-sim-cards",
      title: "Téléphone et carte SIM en Australie : vérification d'identité et fin de la 3G",
      description: "Activer une SIM prépayée australienne exige une vérification d'identité — un passeport à votre nom est accepté. Vérifiez la compatibilité 4G/5G avant.",
      related: ["numeros-urgence-australie", "prises-et-tension", "argent-et-pourboire"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "Vous pouvez utiliser l'itinérance de votre forfait habituel, ou acheter une carte SIM prépayée australienne. Si vous prenez une SIM locale, deux choses diffèrent de beaucoup d'autres pays : la vérification d'identité et la fin de la 3G.",
        },
        { h2: "La vérification d'identité" },
        {
          p: "La loi impose aux opérateurs de recueillir votre nom, votre date de naissance et votre adresse, et de vérifier votre identité lors de l'activation d'une ligne mobile prépayée. Un passeport délivré à votre nom fait partie des documents acceptés — il n'a pas besoin d'être australien. Le document ne doit pas être expiré.",
        },
        {
          p: "Les opérateurs peuvent aussi vérifier l'identité par d'autres moyens, par exemple un contrôle de document officiel, un compte existant, une transaction par carte ou un service d'identité numérique agréé (Digital ID). La façon de procéder d'un opérateur donné — en boutique ou en ligne — dépend de lui.",
        },
        { h2: "Vérifiez d'abord votre téléphone" },
        {
          p: "Les réseaux 3G australiens ont été éteints. Les téléphones uniquement 3G ne fonctionnent plus du tout, et certains téléphones 4G qui s'appuient sur la 3G pour les appels ne peuvent ni passer d'appels vocaux ni joindre les secours. Les téléphones 4G anciens et ceux achetés à l'étranger sont les plus exposés. Les opérateurs ne doivent pas activer un téléphone dont ils constatent qu'il ne peut pas appeler le Triple Zero (000).",
        },
        {
          ul: [
            "Avant de payer, demandez à l'opérateur de confirmer que votre modèle fonctionne sur son réseau 4G/5G et prend en charge les appels VoLTE",
            "Ne testez pas les appels d'urgence en composant le 000",
          ],
        },
        {
          note: "Les règles d'identification pour le prépayé sont en cours de révision par le régulateur (ACMA) en 2026. Le principe — une vérification d'identité, avec le passeport accepté — s'applique depuis des années.",
        },
        { source: { label: "ACMA — Vérification d'identité pour les mobiles prépayés", url: "https://www.acma.gov.au/id-checks-prepaid-mobiles" } },
        { source: { label: "Federal Register of Legislation — Identity Checks for Prepaid Mobile Carriage Services Determination 2017", url: "https://www.legislation.gov.au/F2017L00399/latest/text" } },
        { source: { label: "ACMA — Garantir que les mobiles peuvent joindre le 000 après l'arrêt de la 3G", url: "https://www.acma.gov.au/ensuring-mobiles-can-reach-000-after-3g-shutdown" } },
      ],
      faq: [
        {
          q: "Puis-je acheter une carte SIM australienne avec un passeport français, belge ou suisse ?",
          a: "Oui. Un passeport délivré à votre nom est un document d'identité accepté pour activer une ligne prépayée. Il ne doit pas être expiré.",
        },
        {
          q: "Mon téléphone habituel fonctionnera-t-il en Australie ?",
          a: "La plupart des téléphones récents fonctionnent, mais les réseaux 3G ont fermé. Des téléphones 4G anciens et certains modèles achetés à l'étranger peuvent ne pas réussir à passer d'appels ou à joindre le 000 — demandez à l'opérateur de vérifier votre modèle.",
        },
      ],
    },

    /* ── Prises ── */
    {
      slug: "prises-et-tension",
      enSlug: "power-plugs",
      title: `Prises électriques en Australie : la prise de type I et le ${n(F.voltage)} ${n(F.frequency)}`,
      description: `L'Australie utilise une prise à deux broches plates en V inversé (type I) et du ${n(F.voltage)}, ${n(F.frequency)}. Vérifiez l'étiquette de votre chargeur avant.`,
      related: ["telephone-et-carte-sim", "argent-et-pourboire", HUB],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "Les prises australiennes acceptent une fiche à deux broches métalliques plates formant un V inversé, parfois avec une troisième broche au centre. Tourism Australia l'appelle prise « Type 1 » ; à l'international, on parle généralement de type I. Les fiches européennes à broches rondes (françaises, belges, suisses) n'entrent pas sans adaptateur.",
        },
        { h2: "La tension" },
        {
          p: `Le courant est en ${n(F.voltage)}, ${n(F.frequency)} (Tourism Australia indique aussi la plage 220–240 V). La plupart des chargeurs de téléphone et d'ordinateur portable sont prévus pour 100–240 V et fonctionnent avec un simple adaptateur de prise. Vérifiez l'étiquette : si elle ne couvre pas 230 V, il vous faut un transformateur de tension, pas seulement un adaptateur.`,
        },
        { h2: "Quoi emporter" },
        {
          ul: [
            "Un adaptateur de prise de type I, ou un adaptateur multi-pays",
            "Un transformateur uniquement pour les appareils non prévus pour 230 V",
          ],
        },
        { source: { label: "Tourism Australia — Conseils utiles pour voyager en Australie", url: "https://www.australia.com/en-us/facts-and-planning/about-australia/useful-tips.html" } },
        { source: { label: "Tourism Australia — La liste ultime des affaires à emporter", url: "https://www.australia.com/en/facts-and-planning/planning-tools/ultimate-australia-packing-list.html" } },
      ],
      faq: [
        {
          q: "Faut-il un adaptateur pour l'Australie ?",
          a: "Oui, si vos fiches ne sont pas du type australien à deux broches plates en V inversé. Les fiches européennes à broches rondes ont besoin d'un adaptateur.",
        },
        {
          q: "Faut-il un transformateur de tension ?",
          a: `Seulement pour les appareils non prévus pour ${n(F.voltage)}. Les chargeurs marqués 100–240 V fonctionnent avec un simple adaptateur.`,
        },
      ],
    },

    /* ── Jours fériés ── */
    {
      slug: "jours-feries-australie",
      enSlug: "public-holidays",
      title: "Jours fériés en Australie 2026–2027 : les dates par État",
      description: "Chaque État et territoire fixe ses propres jours fériés. Dates communes, dates qui diffèrent, et ce que cela change pour votre voyage.",
      related: ["argent-et-pourboire", "conduire-en-australie", HUB],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "Il n'existe pas de liste nationale unique. Chaque État et territoire fixe ses propres jours fériés et décide d'ajouter ou non un jour de remplacement quand l'un d'eux tombe un week-end. Les dates ci-dessous proviennent du Fair Work Ombudsman, le régulateur fédéral du travail.",
        },
        { h2: "Jours fériés restants en 2026" },
        {
          ul: [
            "Vendredi 25 décembre — Noël (partout)",
            "Samedi 26 décembre — Boxing Day (en Australie-Méridionale : Proclamation Day holiday)",
            "Lundi 28 décembre — jour férié supplémentaire pour Boxing Day dans la plupart des États et territoires ; en Tasmanie, Boxing Day lui-même tombe ce lundi",
          ],
        },
        { h2: "2027 : les dates communes à tout le pays" },
        {
          ul: [
            "Vendredi 1er janvier — Jour de l'An",
            "Mardi 26 janvier — Australia Day (fête nationale)",
            "Vendredi 26 mars — Vendredi saint",
            "Lundi 29 mars — Lundi de Pâques",
            "Samedi 25 décembre — Noël, avec le lundi 27 décembre comme jour férié supplémentaire",
          ],
        },
        { h2: "2027 : là où les États diffèrent" },
        {
          ul: [
            "Le samedi de Pâques (27 mars) et le dimanche de Pâques (28 mars) ne figurent pas pour la Tasmanie ; l'Australie-Occidentale ne retient pas le samedi de Pâques",
            "L'Anzac Day tombe le dimanche 25 avril. La Nouvelle-Galles du Sud et l'Australie-Occidentale ajoutent le lundi 26 avril ; l'ACT, le Territoire du Nord et le Queensland le célèbrent le lundi 26 avril ; l'Australie-Méridionale, la Tasmanie et le Victoria gardent uniquement le dimanche",
            "Le King's Birthday (anniversaire du roi) est le lundi 14 juin dans la plupart des États — mais le lundi 27 septembre en Australie-Occidentale et le lundi 4 octobre dans le Queensland",
            "Le Labour Day (fête du Travail) va de mars (Australie-Occidentale, Victoria, Tasmanie) à mai (Queensland, Territoire du Nord) et octobre (Nouvelle-Galles du Sud, ACT, Australie-Méridionale)",
            "Boxing Day tombe le dimanche 26 décembre, avec le mardi 28 décembre comme jour supplémentaire dans la plupart des régions ; en Tasmanie, Boxing Day est le mardi 28 décembre",
          ],
        },
        {
          note: "Les dates de 2027 sont celles publiées à l'avance par le Fair Work Ombudsman. Le vendredi précédant la Grand Final de l'AFL au Victoria n'est pas encore fixé. Certains jours fériés régionaux ou propres à une ville (par exemple les jours de foire, show days) ne figurent pas ici.",
        },
        { h2: "Ce que cela change pour un visiteur" },
        {
          p: "Les banques et les administrations ferment. En ville, beaucoup de magasins, cafés et restaurants restent ouverts, parfois avec un supplément jour férié sur l'addition. Les transports publics circulent généralement selon un horaire réduit. Les week-ends prolongés et les vacances d'été de Noël à janvier sont des périodes de pointe pour le tourisme intérieur : réservez tôt hébergement et voiture de location.",
        },
        { source: { label: "Fair Work Ombudsman — Jours fériés 2026", url: "https://www.fairwork.gov.au/employment-conditions/public-holidays/2026-public-holidays" } },
        { source: { label: "Fair Work Ombudsman — Jours fériés 2027", url: "https://www.fairwork.gov.au/employment-conditions/public-holidays/2027-public-holidays" } },
      ],
      faq: [
        {
          q: "Le King's Birthday tombe-t-il le même jour dans toute l'Australie ?",
          a: "Non. La plupart des États le célèbrent le deuxième lundi de juin, mais l'Australie-Occidentale fin septembre et le Queensland début octobre.",
        },
        {
          q: "Boxing Day est-il férié partout ?",
          a: "Oui, même si l'Australie-Méridionale l'appelle Proclamation Day holiday ; et quand il tombe un week-end, le jour de remplacement diffère selon les États.",
        },
      ],
    },

    /* ── Conduite ── */
    {
      slug: "conduire-en-australie",
      enSlug: "driving-in-australia",
      title: "Conduire en Australie avec un permis étranger : les règles varient selon l'État",
      description: `Chaque État a ses règles : ${F.driveNswMonths} mois max. en Nouvelle-Galles du Sud, ${F.driveNtMonths} dans le Territoire du Nord. Permis non anglais : traduction ou IDP.`,
      related: ["jours-feries-australie", "numeros-urgence-australie", "tabac-vapotage-alcool"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "En Australie, on roule à gauche. Les ronds-points se prennent dans le sens des aiguilles d'une montre et l'on cède le passage à droite. Les limitations de vitesse sont en kilomètres par heure : 50 km/h en agglomération sauf indication contraire, généralement 100 km/h sur les autres routes et jusqu'à 110 km/h sur certaines autoroutes.",
        },
        { h2: "Le permis relève de chaque État" },
        {
          p: "Il n'existe pas de règle nationale unique pour les visiteurs. Chaque État et territoire décide combien de temps un visiteur peut conduire avec un permis étranger et ce qui doit l'accompagner. Vérifiez les règles de chaque État où vous conduirez — un road trip peut en traverser plusieurs.",
        },
        {
          ul: [
            `Nouvelle-Galles du Sud : les touristes et visiteurs temporaires peuvent conduire avec un permis étranger en cours de validité pendant ${F.driveNswMonths} mois au maximum`,
            `Victoria : autorisé si vous vivez et conduisez au Victoria moins de ${F.driveNswMonths} mois, à compter de votre première arrivée`,
            `Territoire du Nord : jusqu'à ${F.driveNtMonths} mois pour les visiteurs et les nouveaux résidents`,
            "Queensland, Australie-Occidentale, Australie-Méridionale, Tasmanie et ACT : les visiteurs peuvent conduire avec un permis étranger en cours de validité ; les pages officielles n'indiquent pas de durée fixe pour les visiteurs",
          ],
        },
        {
          note: "Les limites de trois mois que vous pourriez lire pour le Queensland, la Nouvelle-Galles du Sud, l'Australie-Occidentale et l'ACT concernent les citoyens australiens et les titulaires d'un visa permanent ou de résident, pas les touristes.",
        },
        { h2: "Si votre permis n'est pas en anglais" },
        {
          p: "Ayez sur vous une traduction anglaise de votre permis ou un permis de conduire international (International Driving Permit, IDP), avec le permis lui-même. Les détails varient : le Territoire du Nord demande d'obtenir un IDP avant le départ, ou une traduction officielle par un traducteur agréé du Territoire du Nord ; le Queensland demande une traduction anglaise reconnue. Un IDP ne remplace jamais votre permis national — ayez les deux sur vous.",
        },
        { h2: "Avant de prendre la route" },
        {
          ul: [
            "Ayez toujours votre permis sur vous quand vous conduisez",
            "Votre permis doit être en cours de validité et correspondre au type de véhicule conduit",
            `Le taux d'alcool maximal au volant est de ${n(F.bacLimit)} (concentration d'alcool dans le sang, BAC)`,
            "Les distances entre les villes sont longues — prévoyez les arrêts carburant et les pauses",
          ],
        },
        { source: { label: "Transport for NSW — Visiteurs venant de l'étranger", url: "https://www.nsw.gov.au/driving-boating-and-transport/driving-nsw/driver-and-rider-licences/visiting-or-moving-to-nsw/visiting-from-overseas-or-interstate" } },
        { source: { label: "VicRoads — Conduire avec un permis étranger", url: "https://www.vicroads.vic.gov.au/licences/convert-your-licence/driving-with-your-overseas-licence" } },
        { source: { label: "Queensland Government — Conduire au Queensland avec un permis étranger", url: "https://www.qld.gov.au/transport/licensing/driver-licensing/overseas/driving" } },
        { source: { label: "NT Government — Règles de permis pour les conducteurs de passage", url: "https://nt.gov.au/driving/licence/new-nt-residents-and-visitors/driver-licence-rules-for-new-nt-residents-and-visiting-drivers" } },
        { source: { label: "Tourism Australia — Conduire en Australie", url: "https://www.australia.com/en/facts-and-planning/getting-around/driving-in-australia.html" } },
      ],
      faq: [
        {
          q: "Faut-il un permis international (IDP) pour conduire en Australie avec un permis français ?",
          a: "Si votre permis n'est pas en anglais, ayez sur vous une traduction anglaise ou un IDP, avec votre permis. La règle exacte dépend de l'État. Si votre permis est en anglais, ce n'est en général pas nécessaire.",
        },
        {
          q: "Combien de temps puis-je conduire avec mon permis étranger ?",
          a: `Cela dépend de l'État : jusqu'à ${F.driveNswMonths} mois en Nouvelle-Galles du Sud, moins de ${F.driveNswMonths} mois de résidence au Victoria, jusqu'à ${F.driveNtMonths} mois dans le Territoire du Nord. Les autres États n'indiquent pas de durée fixe pour les visiteurs.`,
        },
      ],
    },
  ],
};
