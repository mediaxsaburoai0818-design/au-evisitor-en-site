import { FACTS as F } from "./_schema";
import type { Article } from "./_schema";

/**
 * 英語ページの横展開（2026-11-15）。英語の data/pages.ts にあって fr 版に無かった話題。
 * 読者＝フランスのパスポート保持者（eVisitor の対象・無料）。二人称は vous。
 * ⚠️ 数値は F（data/facts.ts）から入れる。本文に直接書かない（英語ページが直書きしている数字だけは同じ値を書く）。
 * ⚠️ 表記だけを仏語式に直す（n()）。値そのものは変えない。
 * ⚠️ 英国は British Citizen 旅券のみ対象（BN(O) 等は対象外）。対象国を並べるときは必ず添える。
 * ⚠️ eVisitor をアプリで申請できる、と読める書き方をしない（アプリは ETA 専用）。
 */

/** 数値表記を仏語式に（AUD 10,000 → AUD 10 000、2.25 → 2,25） */
const n = (v: string | number) =>
  String(v)
    .replace(/(\d),(\d{3})/g, "$1 $2")
    .replace(/(\d)\.(\d)/g, "$1,$2");

const CHECKED = "15 novembre 2026";
const ADDED = "2026-11-15";
const HUB = "arriver-en-australie";
/** = F.decisionTypical（英語の文言を仏語の表記にしただけ） */
const DECISION = "quelques minutes à quelques jours";

const SRC_EVISITOR = { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" };
const SRC_ETA = { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" };
const SRC_DUTY = { label: "Australian Border Force / Home Affairs — Duty free concessions", url: "https://www.abf.gov.au/entering-and-leaving-australia/duty-free" };

export const frGuides: Article[] = [
  /* ── three-months-per-visit ── */
  {
    slug: "evisitor-trois-mois-par-sejour",
    enSlug: "three-months-per-visit",
    added: ADDED,
    related: [HUB, "jours-feries-australie", "conduire-en-australie"],
    title: "La limite de trois mois de l'eVisitor : comment elle fonctionne vraiment",
    description: `L'eVisitor est valable ${F.validMonths} mois, mais chaque séjour est limité à ${F.stayMonths} mois. Deux durées distinctes, qu'il ne faut pas confondre en préparant votre voyage.`,
    blocks: [
      {
        p: `Un eVisitor est valable ${F.validMonths} mois à compter de la date de délivrance et permet d'entrer en Australie autant de fois que vous le souhaitez pendant cette période. Il ne vous donne pas pour autant ${F.validMonths} mois de présence continue en Australie : chaque séjour est limité à ${F.stayMonths} mois.`,
      },
      { h2: "Deux compteurs, pas un seul" },
      {
        ul: [
          `Validité du visa — ${F.validMonths} mois, comptés à partir de la date de délivrance et non de votre première entrée`,
          `Durée de chaque séjour — ${F.stayMonths} mois, comptés à partir de chaque arrivée`,
          "Entrées — multiples, tant que le visa est valable",
        ],
      },
      {
        p: `Un visa délivré en janvier expire donc en janvier de l'année suivante, que vous l'ayez utilisé ou non. Si vous arrivez en décembre, vous pouvez encore rester ${F.stayMonths} mois, mais vous ne pourrez plus revenir en Australie une fois le visa expiré.`,
      },
      { h2: "Ce que ces trois mois ne couvrent pas" },
      {
        ul: [
          "Un travail pour un employeur australien",
          `Des études au-delà de ${F.studyMonths} mois`,
          "Un droit d'entrée garanti — c'est l'agent à la frontière qui décide",
        ],
      },
      { source: SRC_EVISITOR },
      {
        note: `L'eVisitor ne se redemande pas depuis l'Australie. Si vous avez besoin de plus de ${F.stayMonths} mois d'affilée, renseignez-vous avant le départ sur le visa de visiteur (Visitor visa, subclass 600).`,
      },
    ],
  },

  /* ── leaving-and-returning ── */
  {
    slug: "sortir-et-revenir-en-australie",
    enSlug: "leaving-and-returning",
    added: ADDED,
    related: [HUB, "remboursement-taxe-trs", "liquides-bagage-cabine"],
    title: `Quitter l'Australie et revenir : repart-on pour ${F.stayMonths} nouveaux mois ?`,
    description: `Chaque entrée relance le compteur de ${F.stayMonths} mois, mais les allers-retours à répétition suscitent des questions, et l'agent à la frontière peut refuser l'entrée.`,
    blocks: [
      {
        p: `Chaque arrivée ouvre une nouvelle période de séjour de ${F.stayMonths} mois maximum. Un aller-retour en Nouvelle-Zélande ou à Bali remet donc bien à zéro le compteur du séjour, tant que votre visa est encore valable.`,
      },
      { h2: "Mais il s'agit d'un visa de visiteur" },
      {
        p: "L'eVisitor est délivré à condition que vous soyez en visite. Quelqu'un qui passe neuf mois sur douze en Australie, en ne sortant que brièvement à chaque fois, n'est plus en visite : il vit en Australie avec un visa de visiteur. Les agents à la frontière examinent l'historique de vos voyages sur ce passeport, pas seulement l'entrée en cours.",
      },
      { h2: "Ce que l'on peut vous demander à votre retour" },
      {
        ul: [
          "Un billet de continuation ou de retour",
          "Des moyens suffisants pour subvenir à vos besoins pendant le séjour",
          "La preuve que vous rentrerez chez vous : emploi, études, bail, famille",
          "La raison d'un retour aussi rapproché",
        ],
      },
      { h2: "En cas de refus d'entrée" },
      {
        p: "Un visa valide vous autorise à voyager ; il ne garantit pas l'entrée. Si l'agent n'est pas convaincu que vous êtes un véritable visiteur, le visa peut être annulé à la frontière et vous pouvez être renvoyé par le prochain vol disponible. Cette mention vous suivra ensuite dans vos futures demandes.",
      },
      { source: SRC_EVISITOR },
      {
        note: `Votre eVisitor cesse de produire ses effets dès qu'il expire, ${F.validMonths} mois après sa délivrance. Vérifiez la date de délivrance avant de réserver un retour proche de la fin de cette période.`,
      },
    ],
  },

  /* ── border-questions ── */
  {
    slug: "questions-a-la-frontiere",
    enSlug: "border-questions",
    added: ADDED,
    related: [HUB, "smartgate-australie", "medicaments-en-voyage"],
    title: "Les questions qu'on vous pose à l'arrivée en Australie",
    description: "Immigration, douane et biosécurité : trois contrôles distincts, avec des questions différentes. Savoir qui demande quoi raccourcit nettement le passage.",
    blocks: [
      {
        p: "À l'arrivée, les passagers passent trois contrôles, et non un seul. Ils relèvent de services différents, qui ne s'intéressent pas aux mêmes choses. Répondre à côté, ou à la mauvaise question, c'est ce qui ralentit le passage.",
      },
      { h2: "1. L'immigration : êtes-vous un véritable visiteur ?" },
      {
        ul: [
          "La durée de votre séjour et l'endroit où vous logez",
          "Si vous avez un billet de continuation ou de retour",
          "Comment vous financez votre voyage",
          "Si vous comptez travailler — ce que ce visa ne permet pas",
        ],
      },
      { h2: "2. La douane : devez-vous des droits ?" },
      {
        p: `Vous devez déclarer les marchandises qui dépassent la franchise de droits, ainsi que les espèces égales ou supérieures au seuil de déclaration. La franchise est de ${F.customsGoodsAllowance} pour les marchandises générales si vous avez ${F.customsAgeMin} ans ou plus (${F.customsGoodsAllowanceMinor} si vous êtes plus jeune).`,
      },
      { h2: "3. La biosécurité : que contient votre bagage ?" },
      {
        p: "C'est le contrôle qui piège les voyageurs mal préparés. L'Australie pose des questions sur les aliments, les matières végétales et animales, et tout ce qui a été en contact avec de la terre ou de l'eau douce. Déclarer ne vous coûte rien ; ne pas déclarer peut vous coûter votre visa.",
      },
      { h2: "L'Incoming Passenger Card" },
      {
        p: "Vos réponses pour la douane et la biosécurité figurent sur l'Incoming Passenger Card (carte de débarquement), que vous remplissez avant l'atterrissage. Prenez-la au sérieux : c'est une déclaration officielle, et si un agent trouve dans votre bagage un article non déclaré, la carte prouve que vous avez affirmé n'avoir rien à déclarer.",
      },
      { source: SRC_DUTY },
      {
        note: "En cas de doute sur un article, cochez « oui » et laissez l'agent trancher. Déclarer un article qui se révèle autorisé n'entraîne aucune sanction.",
      },
    ],
  },

  /* ── biosecurity ── */
  {
    slug: "biosecurite-australie",
    enSlug: "biosecurity",
    added: ADDED,
    related: [HUB, "medicaments-en-voyage", "smartgate-australie"],
    title: "Biosécurité en Australie : ce qu'il faut déclarer, et pourquoi un visa peut être annulé",
    description: `Une marchandise non déclarée peut coûter une amende allant jusqu'à ${F.biosecurityPenaltyUnits} penalty units — et, pour un titulaire de visa, l'annulation et ${F.visaCancelExclusionYears} ans d'exclusion.`,
    blocks: [
      {
        p: "L'Australie est une île dont elle veut protéger l'agriculture. Ses règles de biosécurité sont donc strictes, et elles s'appliquent à l'aéroport, pas dans un bureau après coup. Ce sont les voyageurs qui considèrent la déclaration comme une simple formalité qui se font prendre.",
      },
      { h2: "La sanction" },
      {
        p: `Un avis d'infraction (infringement notice) pour marchandise non déclarée peut atteindre ${F.biosecurityPenaltyUnits} penalty units (unités de pénalité). La valeur en dollars d'une unité est fixée par la loi et réévaluée périodiquement : la page du ministère indique ${n(F.biosecurityFineDaff)} pour ${F.biosecurityPenaltyUnits} unités, tandis que l'annonce ministérielle de l'indexation de 2023 chiffrait ces mêmes ${F.biosecurityPenaltyUnits} unités à ${n(F.biosecurityFineIndexed)}. Vérifiez le montant en vigueur sur la page officielle avant de vous y fier.`,
      },
      { h2: "Pour un titulaire de visa, l'amende n'est pas le pire" },
      {
        p: `Les voyageurs qui reçoivent un avis d'infraction peuvent faire l'objet d'une procédure d'annulation de visa. Un visa annulé signifie un renvoi d'Australie par le premier vol disponible, et une période d'exclusion de ${F.visaCancelExclusionYears} ans avant de pouvoir présenter une nouvelle demande.`,
      },
      { h2: "Ce qui est réellement intercepté" },
      {
        ul: [
          "Toute nourriture — y compris les en-cas distribués dans l'avion",
          "Viande, produits laitiers, œufs, miel et tout ce qui en contient",
          "Fruits et légumes frais, graines, noix",
          "Matières végétales — objets en bois, vannerie, fleurs",
          "Chaussures de randonnée, tentes et équipements de sport portant de la terre ou des débris végétaux",
          "Tout ce qui a servi au contact d'animaux ou en eau douce",
        ],
      },
      { h2: "Avant de faire vos bagages" },
      {
        ul: [
          "Nettoyez la terre des chaussures et du matériel chez vous, pas dans la file d'attente",
          "Mangez ou jetez la nourriture avant l'atterrissage",
          "Déclarez les souvenirs en bois et en vannerie — ce sont des marchandises à risque, pas de simples bibelots",
        ],
      },
      { source: { label: "Department of Agriculture, Fisheries and Forestry — Infringement notices at the airport", url: "https://www.agriculture.gov.au/biosecurity-trade/policy/legislation/compliance/infringement-notice-scheme/infringement-notices-at-the-airport" } },
      {
        note: "Des poubelles sont à disposition avant le contrôle de biosécurité. Les utiliser est gratuit. Être trouvé en possession de l'article après avoir déclaré « non » ne l'est pas.",
      },
    ],
  },

  /* ── customs-allowances ── */
  {
    slug: "franchises-douanieres-australie",
    enSlug: "customs-allowances",
    added: ADDED,
    related: [HUB, "argent-et-pourboire", "remboursement-taxe-trs", "tabac-vapotage-alcool"],
    title: "Franchises douanières en Australie : marchandises, alcool, tabac",
    description: `Un adulte peut apporter en franchise ${F.customsGoodsAllowance} de marchandises, ${n(F.customsAlcoholLitres)} litres d'alcool et ${F.customsTobaccoGrams} g de tabac. Au-delà, il faut déclarer.`,
    blocks: [
      {
        p: "La douane est un contrôle distinct de la biosécurité. La biosécurité se demande si un article présente un risque pour l'Australie ; la douane, si des droits et taxes sont dus. Vous pouvez passer l'un et être arrêté par l'autre.",
      },
      { h2: "Les franchises" },
      {
        ul: [
          `Marchandises générales : ${F.customsGoodsAllowance} si vous avez ${F.customsAgeMin} ans ou plus, ${F.customsGoodsAllowanceMinor} si vous avez moins de ${F.customsAgeMin} ans`,
          `Alcool : ${n(F.customsAlcoholLitres)} litres, à partir de ${F.customsAgeMin} ans`,
          `Tabac : ${F.customsTobaccoGrams} grammes sous toutes ses formes, plus un paquet entamé, à partir de ${F.customsAgeMin} ans`,
        ],
      },
      { h2: "Les erreurs courantes" },
      {
        ul: [
          "Les achats en duty free effectués pendant le trajet aller comptent dans la franchise",
          "Les cadeaux comptent aussi — c'est la valeur de ce que vous transportez qui importe, pas ce que vous avez acheté pour vous-même",
          "Une famille ne peut pas toujours cumuler les franchises comme elle le pense ; vérifiez avant de compter dessus",
        ],
      },
      { h2: "Si vous dépassez la franchise" },
      {
        p: "Déclarez-le et présentez une preuve d'achat pour que les droits et taxes puissent être calculés. Ne pas déclarer des marchandises au-delà de la franchise peut entraîner des sanctions, des poursuites ou l'annulation de votre visa. Déclarer revient simplement à payer ce qui est dû.",
      },
      { source: SRC_DUTY },
      {
        note: `Les espèces font aussi l'objet d'une obligation de déclaration à la frontière : les espèces et instruments comme les chèques de voyage d'une valeur totale de ${n(F.cashReportThreshold)} ou plus doivent être déclarés — voir notre page sur l'argent pour la marche à suivre.`,
      },
    ],
  },

  /* ── working-and-studying ── */
  {
    slug: "evisitor-travail-et-etudes",
    enSlug: "working-and-studying",
    added: ADDED,
    related: [HUB, "soins-pour-visiteurs", "evisitor-validite-et-sejour"],
    title: `Ce que l'eVisitor ne permet pas : travailler, et étudier plus de ${F.studyMonths} mois`,
    description: `L'eVisitor est un visa de visiteur. Il ne permet pas de travailler pour un employeur australien, et les études sont limitées à ${F.studyMonths} mois.`,
    blocks: [
      {
        p: `Parce que l'eVisitor est gratuit et délivré rapidement, certains le considèrent comme une autorisation peu contraignante qui permettrait de faire ce que l'on veut pendant ${F.stayMonths} mois. Ce n'est pas le cas. C'est un visa de visiteur assorti de conditions, et ces conditions sont contrôlées.`,
      },
      { h2: "Le travail" },
      {
        p: "Vous ne pouvez pas travailler pour un employeur australien. Les activités de visite d'affaires sont autre chose qu'un travail : assister à des réunions, négocier ou participer à un congrès ne pose en général pas de problème ; être payé par une entreprise australienne pour effectuer un travail, si.",
      },
      { h2: "Le télétravail pour un employeur hors d'Australie" },
      {
        p: "Continuer à travailler à distance pour votre employeur habituel à l'étranger est une zone grise qui dépend de chaque situation, et ce n'est pas à un site d'information de trancher à votre place. Si votre voyage dépend de la réponse, renseignez-vous auprès du Department of Home Affairs avant de réserver.",
      },
      { h2: "Les études" },
      {
        p: `Les études sont limitées à ${F.studyMonths} mois. Un cours de courte durée ne pose pas de problème ; un semestre, si. Des études plus longues nécessitent un visa étudiant, à demander avant le départ.`,
      },
      { h2: "Pourquoi l'enjeu est plus important qu'il n'y paraît" },
      {
        p: `Ne pas respecter une condition du visa peut entraîner son annulation, un renvoi et une période d'exclusion pouvant aller jusqu'à ${F.visaCancelExclusionYears} ans. Le vrai coût d'une erreur n'est pas l'amende : c'est de ne plus pouvoir revenir.`,
      },
      { source: SRC_EVISITOR },
    ],
  },

  /* ── passport-and-details ── */
  {
    slug: "evisitor-passeport-et-donnees",
    enSlug: "passport-and-details",
    added: ADDED,
    related: ["evisitor-erreurs-a-eviter", "nouveau-passeport-apres-evisitor", "evisitor-demande-refusee"],
    title: "Votre eVisitor est rattaché à un seul passeport : saisissez les bonnes données",
    description: "L'eVisitor est lié au passeport utilisé pour la demande. Un passeport renouvelé, un nom mal saisi ou la mauvaise nationalité vous bloquent à l'enregistrement.",
    blocks: [
      {
        p: "Il n'y a ni vignette ni document imprimé qui compte. L'eVisitor existe sous la forme d'un enregistrement lié à un numéro de passeport, et la compagnie aérienne consulte cet enregistrement lors de l'enregistrement. Si le passeport que vous présentez n'est pas celui de l'enregistrement, c'est comme si le visa n'existait pas.",
      },
      { h2: "Un nouveau passeport, une nouvelle demande" },
      {
        p: `Si vous renouvelez votre passeport, votre eVisitor ne passe pas sur le nouveau document, même s'il est encore dans ses ${F.validMonths} mois de validité. Refaites une demande avec le nouveau passeport avant de partir. Elle est gratuite : aucune raison financière d'attendre.`,
      },
      { h2: "Saisissez vos données exactement comme sur le passeport" },
      {
        ul: [
          "Les noms tels qu'ils figurent dans la bande de lecture automatique (les deux lignes en bas de la page d'identité), pas tels que vous les écrivez d'habitude",
          "Les lettres accentuées (é, è, ç…) transcrites comme le fait le passeport",
          "Le numéro de passeport vérifié caractère par caractère — 0 et O, 1 et I",
          "La nationalité indiquée sur le passeport, pas votre pays de résidence",
        ],
      },
      { h2: "Si vous avez deux nationalités" },
      {
        p: "Voyagez avec le passeport auquel votre eVisitor est rattaché. Avoir une seconde nationalité qui n'ouvre pas droit à l'eVisitor ne vous exclut pas ; présenter le mauvais passeport à l'enregistrement, si.",
      },
      { source: SRC_EVISITOR },
      {
        note: `La demande coûte ${F.fee}. Un site qui facture des frais pour déposer un eVisitor à votre place est un intermédiaire qui ajoute sa propre marge, pas un canal officiel.`,
      },
    ],
  },

  /* ── if-your-application-is-refused ── */
  {
    slug: "evisitor-demande-refusee",
    enSlug: "if-your-application-is-refused",
    added: ADDED,
    related: ["evisitor-erreurs-a-eviter", "evisitor-passeport-et-donnees", "evisitor-ou-eta"],
    title: "Que faire si votre demande d'eVisitor est refusée ?",
    description: "Un refus change la suite des démarches. Ce qu'il faut vérifier, ce qu'il ne faut pas faire, et pourquoi redéposer aussitôt est en général une mauvaise idée.",
    blocks: [
      {
        p: `La plupart des demandes d'eVisitor sont tranchées en ${DECISION}. Si la vôtre est refusée, l'essentiel est de comprendre pourquoi avant de faire quoi que ce soit d'autre.`,
      },
      { h2: "Ne redéposez pas simplement la même demande" },
      {
        p: "Déposer à nouveau la même demande aboutira en général au même résultat, et une série de demandes répétées ne joue pas en votre faveur. Lisez la décision : elle en indique le motif.",
      },
      { h2: "Les motifs courants" },
      {
        ul: [
          "Le passeport ne figure pas sur la liste de l'eVisitor — l'ETA ou un visa de visiteur (subclass 600) peut alors être la bonne voie.",
          "Les données ne correspondaient pas exactement au passeport. Noms, numéros et dates doivent être saisis tels qu'ils sont imprimés.",
          "Une déclaration sur la santé ou les antécédents judiciaires a nécessité un examen au lieu d'une décision automatique.",
        ],
      },
      { h2: "Si vous avez déjà vos billets d'avion" },
      {
        p: "Ne partez pas en pensant que tout se réglera à l'aéroport. Sans visa valide, vous ne serez pas autorisé à embarquer. Contactez la compagnie aérienne pour modifier vos dates pendant que vous régularisez la bonne demande.",
      },
      {
        note: `Un refus n'est pas une annulation. Si un visa que vous détenez déjà est annulé, une période d'exclusion pouvant aller jusqu'à ${F.visaCancelExclusionYears} ans peut s'appliquer à vos futures demandes.`,
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: F.officialUrl } },
    ],
  },

  /* ── travelling-with-children ── */
  {
    slug: "evisitor-enfants",
    enSlug: "travelling-with-children",
    added: ADDED,
    related: [HUB, "smartgate-australie", "soins-pour-visiteurs"],
    title: "Les enfants ont-ils besoin de leur propre eVisitor ?",
    description: "Chaque voyageur a besoin de son propre visa, nourrissons compris. L'eVisitor d'un parent ne couvre pas l'enfant, et la demande se fait de la même manière.",
    blocks: [
      {
        p: "Oui. Un eVisitor est rattaché à un seul passeport : chaque membre de la famille a donc besoin du sien — y compris un bébé qui voyage sur les genoux d'un parent.",
      },
      { h2: "Faire la demande pour un enfant" },
      {
        p: "La demande est faite au nom de l'enfant, avec son propre passeport. Un parent ou un représentant légal peut la remplir pour lui. Le visa est aussi gratuit pour les enfants ; il n'y a pas de frais distincts.",
      },
      { h2: "Vérifiez d'abord le passeport" },
      {
        p: `Les passeports des enfants ont souvent une durée de validité plus courte que ceux des adultes. Un passeport qui expire pendant les ${F.validMonths} mois de validité du visa est une source fréquente de problèmes par la suite, car le visa est lié au passeport pour lequel il a été délivré.`,
      },
      { h2: "Si l'enfant voyage avec un seul parent ou avec un tiers" },
      {
        p: "L'Australie peut poser des questions sur l'accord des parents à la frontière. Avoir sur soi une lettre d'autorisation du parent qui ne voyage pas, et une copie de tout document relatif à la garde, n'est pas une condition du visa, mais évite un retard prévisible.",
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: F.officialUrl } },
    ],
  },

  /* ── new-passport-after-approval ── */
  {
    slug: "nouveau-passeport-apres-evisitor",
    enSlug: "new-passport-after-approval",
    added: ADDED,
    related: ["evisitor-passeport-et-donnees", "evisitor-erreurs-a-eviter", "evisitor-validite-et-sejour"],
    title: "Vous avez un nouveau passeport après l'octroi de votre eVisitor : que faire ?",
    description: "Le visa est lié au passeport pour lequel il a été délivré. Renouveler ou remplacer ce passeport n'annule pas le visa, mais vous devez en informer le ministère.",
    blocks: [
      {
        p: "La situation est fréquente : le passeport est renouvelé, remplacé après une perte ou réédité après un changement de nom, et le voyageur pense que son visa a disparu. Ce n'est pas le cas, mais il ne suit pas non plus de lui-même le nouveau passeport.",
      },
      { h2: "Ce qui se passe réellement" },
      {
        p: "L'eVisitor reste rattaché au numéro du passeport pour lequel il a été délivré. Les compagnies aériennes et les systèmes de contrôle aux frontières vérifient le passeport que vous présentez. Si ce passeport est nouveau, le lien doit d'abord être mis à jour.",
      },
      { h2: "Ce qu'il faut faire" },
      {
        ul: [
          "Informez le Department of Home Affairs de votre nouveau passeport avant de partir.",
          "Ne déposez pas un second eVisitor pour « remplacer » le premier — ce n'est pas ainsi que le changement se traite.",
          "Emportez l'ancien passeport si vous l'avez encore et s'il n'a pas été annulé d'une manière qui l'empêche.",
        ],
      },
      {
        note: "Faites-le dès que le nouveau passeport arrive, pas à l'aéroport. Mettre ses données à jour est une formalité quand on a le temps, et un problème quand on ne l'a plus.",
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: F.officialUrl } },
    ],
  },

  /* ── eligible-passports ── */
  {
    slug: "evisitor-passeports-eligibles",
    enSlug: "eligible-passports",
    added: ADDED,
    checked: CHECKED,
    related: ["evisitor-ou-eta", "transit-en-australie", "application-australian-eta"],
    title: `Quels passeports donnent droit à l'eVisitor ? Les ${F.eligibleCountries} pays, et qui utilise l'ETA`,
    description: `L'eVisitor est ouvert aux citoyens de ${F.eligibleCountries} pays européens, dont la France. La liste complète, les passeports britanniques exclus et la comparaison avec l'ETA.`,
    blocks: [
      {
        p: `Le droit à l'eVisitor (subclass 651) dépend de votre nationalité et du passeport que vous détenez, pas de votre lieu de résidence. Le Department of Home Affairs précise que vous devez être citoyen de l'un des ${F.eligibleCountries} pays de la liste et titulaire d'un passeport valide de ce pays. La France en fait partie.`,
      },
      { h2: `Les ${F.eligibleCountries} pays de l'eVisitor` },
      {
        p: "Allemagne, Andorre, Autriche, Belgique, Bulgarie, Chypre, Croatie, Danemark, Espagne, Estonie, Finlande, France, Grèce, Hongrie, Irlande, Islande, Italie, Lettonie, Liechtenstein, Lituanie, Luxembourg, Malte, Monaco, Norvège, Pays-Bas, Pologne, Portugal, République tchèque, Roumanie, Royaume-Uni (British Citizen uniquement), République de Saint-Marin, Slovaquie, Slovénie, Suède, Suisse et Vatican.",
      },
      { h2: "Les passeports qui ne donnent pas droit à l'eVisitor" },
      {
        ul: [
          "Pour le Royaume-Uni, seuls les passeports British Citizen figurent sur la liste",
          "Les passeports British National (Overseas), British Dependent Territories Citizen, British Overseas Citizen, British Protected Person et British Subject ne peuvent pas être utilisés",
          "Un passeport de non-citoyen, un certificat d'identité ou un autre document de voyage comme un titre de voyage (Titre de Voyage) ne peuvent pas être utilisés",
          "Pour le Vatican, le passeport doit indiquer que vous êtes ressortissant de la Cité du Vatican (Saint-Siège)",
        ],
      },
      { h2: "Si votre passeport ne figure pas sur la liste" },
      {
        p: `L'ETA (subclass 601) a sa propre liste de ${F.etaEligibleCountries} passeports. Elle comprend notamment Brunei, le Canada, Hong Kong (RAS de Chine), le Japon, la Malaisie, Singapour, la Corée du Sud, Taïwan (hors passeports officiels ou diplomatiques), les États-Unis et le Royaume-Uni — British National (Overseas). L'ETA coûte ${F.etaFee} de frais de service dans l'application. Les titulaires d'autres passeports peuvent avoir droit au visa de visiteur (Visitor visa, subclass 600).`,
      },
      { h2: "Les passeports présents sur les deux listes" },
      {
        p: `D'après notre comparaison des deux listes officielles, ${F.bothListsCountries} passeports figurent sur les deux — c'est le cas du passeport français. Les ${F.eligibleCountries - F.bothListsCountries} autres pays de l'eVisitor ne figurent pas sur la liste de l'ETA : Bulgarie, Croatie, Chypre, République tchèque, Estonie, Hongrie, Lettonie, Lituanie, Pologne, Roumanie, Slovaquie et Slovénie. Pour les passeports présents sur les deux listes, la page de l'ETA indique que les titulaires d'un passeport européen « peuvent avoir droit » à l'eVisitor et que la demande d'eVisitor est gratuite.`,
      },
      { h2: "Les cas où Home Affairs oriente ailleurs" },
      {
        ul: [
          "Une condamnation pénale dans n'importe quel pays : Home Affairs indique de demander plutôt un visa de visiteur (subclass 600), et qu'arriver avec un eVisitor en ayant une condamnation peut entraîner un refus d'entrée",
          "Un stage dans une crèche, des études de médecine, de dentaire, de soins infirmiers ou d'ambulancier, ou une présence en milieu de soins ou hospitalier : demandez le visa de visiteur (subclass 600) et passez les examens de santé",
          "Les citoyens australiens ne peuvent demander ni eVisitor ni ETA, même s'ils ont aussi un passeport éligible — ils n'ont pas besoin de visa pour entrer en Australie",
          "Les familles : chaque membre a besoin d'une demande distincte, y compris les enfants inscrits sur le passeport d'un parent",
        ],
      },
      { source: SRC_EVISITOR },
      { source: SRC_ETA },
      {
        note: "Les listes peuvent changer. Vérifiez sur la page officielle la situation du passeport avec lequel vous voyagerez réellement avant de faire la demande.",
      },
    ],
    faq: [
      {
        q: "J'ai un passeport British National (Overseas). Puis-je obtenir un eVisitor ?",
        a: "Non. Les passeports BN(O) sont exclus de l'eVisitor. Le passeport BN(O) figure en revanche sur la liste de l'ETA (subclass 601).",
      },
      {
        q: "J'habite en France mais j'ai un passeport non européen. Ai-je droit à l'eVisitor ?",
        a: "Non. L'eVisitor exige la nationalité de l'un des pays de la liste et un passeport valide de ce pays. Votre lieu de résidence n'y change rien.",
      },
    ],
  },

  /* ── common-mistakes ── */
  {
    slug: "evisitor-erreurs-a-eviter",
    enSlug: "common-mistakes",
    added: ADDED,
    checked: CHECKED,
    related: ["evisitor-passeport-et-donnees", "evisitor-demande-refusee", "evisitor-demande-etape-par-etape", "evisitor-site-officiel"],
    title: "Les erreurs à éviter avec l'eVisitor, d'après le Department of Home Affairs",
    description: "Nom mal orthographié, mauvais format de date, demande depuis l'Australie, réservation avant l'octroi : les erreurs contre lesquelles Home Affairs met en garde.",
    blocks: [
      {
        p: "L'eVisitor est gratuit et généralement rapide, ce qui incite à le remplir à la hâte. Le Department of Home Affairs liste les points à vérifier. Chacun des points ci-dessous provient de sa page consacrée à l'eVisitor.",
      },
      { h2: "Avant d'envoyer la demande" },
      {
        ul: [
          "Votre nom est orthographié comme sur votre passeport, y compris votre deuxième prénom, et n'a pas été modifié par la correction automatique de votre appareil",
          "Votre passeport est celui de l'un des pays éligibles à l'eVisitor",
          "Votre date de naissance est saisie au format jj/mm/aa",
          "Votre adresse e-mail est saisie correctement",
        ],
      },
      {
        p: "Home Affairs prévient que si un visa est délivré sur la base d'informations erronées, vous risquez des retards ou un refus d'entrée en Australie.",
      },
      { h2: "Faire la demande depuis le mauvais endroit" },
      {
        p: "Vous devez être hors d'Australie au moment de la demande, et hors d'Australie au moment de la décision.",
      },
      { h2: "Réserver avant l'octroi" },
      {
        p: "Home Affairs demande de ne pas organiser votre voyage en Australie tant qu'il ne vous a pas confirmé par écrit que le visa est délivré.",
      },
      { h2: "Attendre un e-mail qui n'arrive pas" },
      {
        p: "Si aucun e-mail n'arrive dans les 12 heures suivant la demande, vérifiez l'état de votre demande dans ImmiAccount.",
      },
      { h2: "Omettre une condamnation" },
      {
        p: "Si vous avez été condamné pénalement dans un pays, quel qu'il soit, Home Affairs indique de demander plutôt un visa de visiteur (subclass 600). Si vous demandez malgré tout un eVisitor, vous devez déclarer toutes vos condamnations et répondre sincèrement à chaque question.",
      },
      { h2: "Les erreurs pendant le séjour" },
      {
        ul: [
          "Travailler : l'eVisitor n'est pas un visa de travail. Un travail rémunéré pour un employeur australien n'est pas autorisé, et travailler ou avoir l'intention de travailler peut entraîner l'annulation du visa",
          "Penser qu'une croisière aller-retour remet le séjour à zéro : Home Affairs précise que ce n'est pas le cas",
          "Des séjours longs ou fréquents : on peut vous interroger sur le but de votre voyage à votre prochaine arrivée, et le visa peut être annulé s'il apparaît que vous n'êtes pas un véritable visiteur",
          "Rester après la fin du visa sans autre visa : vous devenez un non-citoyen en situation irrégulière (unlawful non-citizen) et pouvez être renvoyé",
        ],
      },
      { h2: "Si vous demandez en réalité l'ETA" },
      {
        p: "Avec un passeport français, c'est l'eVisitor qui vous concerne. Pour les titulaires d'un passeport de la liste ETA, la page de l'ETA souligne trois points : les données de l'ETA doivent correspondre exactement au passeport, et Home Affairs ne peut plus les modifier une fois l'ETA délivrée ; un nouveau passeport met fin à l'ETA et impose une nouvelle demande ; et après un renvoi pour examen (referral), déposer d'autres demandes d'ETA dans l'application donne le même résultat.",
      },
      { source: SRC_EVISITOR },
      { source: SRC_ETA },
      {
        note: "Si votre numéro de téléphone, votre e-mail, votre adresse ou votre passeport changent après la demande, la page de l'eVisitor vous demande d'en informer le ministère. Suivez la procédure indiquée sur cette page.",
      },
    ],
  },

  /* ── transit ── */
  {
    slug: "transit-en-australie",
    enSlug: "transit",
    added: ADDED,
    checked: CHECKED,
    related: ["evisitor-passeports-eligibles", "liquides-bagage-cabine", "aeroports-australiens", "evisitor-ou-eta"],
    title: `Transit par l'Australie : la règle des ${F.twovHours} heures et le visa de transit`,
    description: `Même en transit, il faut un visa ou une autorisation. Quand l'eVisitor suffit, la règle des ${F.twovHours} heures sans visa et le visa de transit de ${F.transitVisaHours} heures.`,
    blocks: [
      {
        p: "Le Department of Home Affairs précise que tous les non-citoyens ont besoin d'un visa ou d'une autorisation pour entrer en Australie, y compris pour un séjour très court ou un transit sans quitter l'aéroport. Cette autorisation peut prendre trois formes.",
      },
      { h2: "1. Vous avez déjà un eVisitor (ou vous y avez droit)" },
      {
        p: "Home Affairs cite l'eVisitor, l'ETA, le visa de visiteur et l'APEC Business Travel Card parmi les visas qui permettent de transiter par l'Australie ; ils permettent aussi un séjour plus long. Si votre voyage comporte une escale en Australie, l'eVisitor la couvre.",
      },
      { h2: "2. Le transit sans visa (TWOV)" },
      {
        p: "Vous ne pouvez transiter sans visa que si toutes les conditions suivantes sont réunies :",
      },
      {
        ul: [
          "Vous arrivez en Australie par avion",
          `Vous avez un billet confirmé pour quitter l'Australie par avion vers un pays tiers dans les ${F.twovHours} heures suivant votre arrivée`,
          "Vous avez un document de voyage valable pour entrer dans le pays de destination",
          "Vous n'avez pas besoin de passer l'immigration ni de quitter la zone de transit pour quelque raison que ce soit avant votre vol suivant",
          "Votre passeport est celui d'un pays de la liste TWOV",
        ],
      },
      {
        p: "D'après notre comparaison des deux listes officielles, tous les pays de la liste eVisitor figurent aussi sur la liste TWOV, qui comprend également d'autres pays. Home Affairs précise que ces informations ne s'appliquent pas aux apatrides ni aux réfugiés.",
      },
      { h2: "Quand il faut passer l'immigration" },
      {
        p: "Home Affairs cite comme raisons fréquentes de devoir passer l'immigration la récupération et le transfert des bagages, ou l'embarquement sur un vol suivant depuis un autre terminal — et il faut alors un visa. Il conseille, si vous n'êtes toujours pas sûr de remplir les conditions du TWOV, d'envisager de demander un visa par précaution.",
      },
      { h2: "3. Le visa de transit (subclass 771)" },
      {
        ul: [
          `Pour un transit par l'Australie de ${F.transitVisaHours} heures maximum`,
          "Gratuit",
          "Une demande distincte est nécessaire pour chaque voyageur, y compris les bébés inscrits sur le passeport d'un parent",
          "Vous devez être hors d'Australie au moment de la demande et au moment de la décision",
        ],
      },
      {
        note: "Home Affairs prévient que si vous détenez déjà un visa pour l'Australie, l'octroi d'un visa de transit mettra probablement fin à cet autre visa. L'eVisitor permet déjà le transit.",
      },
      { source: { label: "Department of Home Affairs — Transit visa (subclass 771)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771" } },
      { source: { label: "Department of Home Affairs — Travellers eligible to transit without a visa", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771/travellers-eligible-to-transit-without-visa" } },
      { source: { label: "Department of Home Affairs — Transit facilities at Australian airports", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771/transit-facilities-at-australian-airports" } },
    ],
    faq: [
      {
        q: "Ma correspondance à Sydney est de 10 heures. Puis-je transiter sans visa ?",
        a: `Pas au titre du TWOV, qui exige un vol suivant confirmé dans les ${F.twovHours} heures suivant l'arrivée. Il vous faut un visa — un eVisitor si votre passeport y donne droit, comme le passeport français, ou un visa de transit (subclass 771).`,
      },
      {
        q: "Chaque aéroport dispose-t-il d'une zone de transit ?",
        a: "Home Affairs publie une page sur les installations de transit des aéroports australiens. Consultez-la, ainsi que votre compagnie aérienne, pour l'aéroport que vous utiliserez.",
      },
    ],
  },

  /* ── australian-eta-app ── */
  {
    slug: "application-australian-eta",
    enSlug: "australian-eta-app",
    added: ADDED,
    checked: CHECKED,
    related: ["evisitor-ou-eta", "evisitor-demande-etape-par-etape", "evisitor-site-officiel", "evisitor-passeports-eligibles"],
    title: "Existe-t-il une application eVisitor ? Non — l'application Australian ETA ne sert qu'à l'ETA",
    description: `L'eVisitor se demande en ligne dans ImmiAccount. L'application Australian ETA ne sert qu'à l'ETA (subclass 601), avec ${F.etaFee} de frais de service.`,
    blocks: [
      {
        p: "Il n'existe pas d'application pour l'eVisitor. Le guide de Home Affairs sur l'eVisitor indique de faire la demande en ligne, via ImmiAccount, et d'y suivre l'état de votre demande. L'application gouvernementale que vous voyez peut-être dans les magasins d'applications — l'application Australian ETA — concerne un autre visa : l'Electronic Travel Authority (subclass 601).",
      },
      { h2: "Qui doit utiliser l'application Australian ETA" },
      {
        p: `Home Affairs précise que vous devez utiliser l'application Australian ETA pour demander une ETA si votre passeport y donne droit. L'ETA n'a pas de droit de visa, mais l'utilisation de l'application entraîne des frais de service non remboursables de ${F.etaFee}. Si vous ne pouvez pas utiliser l'application, Home Affairs indique que vous pouvez demander un autre visa adapté via ImmiAccount, et que les titulaires d'un passeport européen peuvent avoir droit à l'eVisitor, qui n'a pas de frais de demande.`,
      },
      { h2: "L'application en bref" },
      {
        ul: [
          "Éditeur : Department of Home Affairs (indiqué comme vendeur sur l'App Store)",
          "Téléchargement gratuit sur l'Apple App Store et Google Play ; l'App Store indique iOS 17.6 ou version ultérieure",
          "Il faut un téléphone avec appareil photo, NFC activé, services de localisation activés, une adresse e-mail valide et un moyen de paiement pour les frais de service",
        ],
      },
      { h2: "Ce que l'on fait dans l'application" },
      {
        ul: [
          "Scanner son passeport pour préremplir le nom, la date de naissance, le numéro de passeport et d'autres données",
          "Prendre une photo de soi en direct avec le même téléphone ; la photo est prise automatiquement quand l'ovale à l'écran passe au vert",
          "Répondre aux questions, payer les frais de service et envoyer",
          "Les familles qui font leurs demandes sur le même appareil peuvent les envoyer et les payer en une fois",
          "Une personne peut vous aider à faire la demande, mais elle doit être physiquement à vos côtés",
          "La fonction « Visa check » de l'application affiche l'état de votre demande",
        ],
      },
      { source: SRC_ETA },
      { source: SRC_EVISITOR },
      { source: { label: "Department of Home Affairs — ETA and AIA video guides", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/eta-and-aia-video-guides" } },
      { source: { label: "App Store — AustralianETA", url: "https://apps.apple.com/au/app/australianeta/id1527982364" } },
      { source: { label: "Google Play — AustralianETA", url: "https://play.google.com/store/apps/details?id=au.gov.homeaffairs.eta" } },
      {
        note: `Avec un passeport français, qui figure sur la liste de l'eVisitor, vous n'avez pas besoin de l'application. Faites la demande dans ImmiAccount, où l'eVisitor coûte ${F.fee}.`,
      },
    ],
  },

  /* ── official-site ── */
  {
    slug: "evisitor-site-officiel",
    enSlug: "official-site",
    added: ADDED,
    checked: CHECKED,
    related: ["evisitor-demande-etape-par-etape", "evisitor-erreurs-a-eviter", "application-australian-eta"],
    title: "Le site officiel de l'eVisitor, c'est ImmiAccount : le reconnaître et éviter les arnaques",
    description: "Pour Home Affairs, ImmiAccount est le seul site officiel pour demander un visa australien. Les adresses officielles et ses mises en garde contre les arnaques.",
    blocks: [
      {
        p: "Le Department of Home Affairs présente ImmiAccount comme son portail d'immigration et comme « le seul site officiel à utiliser pour demander un visa australien ». Le formulaire de demande d'eVisitor se trouve dans ImmiAccount.",
      },
      { h2: "Les adresses officielles" },
      {
        ul: [
          "Informations sur l'eVisitor : immi.homeaffairs.gov.au",
          "Connexion à ImmiAccount et demandes : online.immi.gov.au",
          "L'application Australian ETA (pour l'ETA uniquement) : éditée par le Department of Home Affairs",
        ],
      },
      { h2: "Ce que coûte la voie officielle" },
      {
        p: "Home Affairs l'écrit clairement : l'eVisitor est gratuit. Il n'y a aucun frais de demande à payer sur le site officiel.",
      },
      { h2: "Les mises en garde de Home Affairs contre les arnaques" },
      {
        ul: [
          "Un e-mail se présentant comme venant du Department of Home Affairs dont l'adresse ne se termine pas par .gov.au est une arnaque",
          "Si l'on vous réclame des frais supplémentaires pour délivrer votre visa (parfois appelés « CIS charge »), n'allez pas plus loin — le gouvernement australien ne facture aucun frais supplémentaire pour délivrer un visa",
          "Si quelqu'un refuse de vous laisser vérifier votre demande dans ImmiAccount, il vous cache quelque chose",
          "Une lettre d'octroi pour un visa introuvable dans VEVO (Visa Entitlement Verification Online) est probablement fausse",
          "Les agents de Home Affairs se présentent toujours au téléphone et ne demandent jamais de numéro de carte bancaire ni de mot de passe",
          "Ne passez que par les canaux officiels du gouvernement australien : le site de Home Affairs, les Australian Biometric Collection Centres, ou l'ambassade, le haut-commissariat ou le consulat d'Australie dans votre pays",
        ],
      },
      { h2: "Si quelqu'un fait la demande pour vous" },
      {
        p: "Un compte ImmiAccount peut être créé par le demandeur, par un membre de sa famille agissant pour lui, ou par un ami qui l'aide dans sa demande. Home Affairs précise qu'en Australie, il est illégal pour un tiers de fournir une aide rémunérée en matière d'immigration s'il n'est pas agent d'immigration enregistré (registered migration agent) ou juriste habilité à exercer en Australie, et que vous restez responsable de vérifier les conditions du visa même si quelqu'un d'autre dépose la demande.",
      },
      { source: { label: "Department of Home Affairs — How to avoid being scammed", url: "https://immi.homeaffairs.gov.au/help-support/visa-scams/what-you-need-to-know" } },
      { source: { label: "Department of Home Affairs — Visa scams", url: "https://immi.homeaffairs.gov.au/help-support/visa-scams" } },
      { source: { label: "Department of Home Affairs — Applying online in ImmiAccount", url: "https://immi.homeaffairs.gov.au/help-support/applying-online-or-on-paper/online" } },
      { source: { label: "Department of Home Affairs — Who can help with your application", url: "https://immi.homeaffairs.gov.au/help-support/who-can-help-with-your-application/overview" } },
      { source: SRC_EVISITOR },
      {
        note: "Ce site est un guide indépendant, pas un site gouvernemental. Nous ne recevons ni demandes ni paiements.",
      },
    ],
  },

  /* ── travel-authorisations-compared ── */
  {
    slug: "autorisations-de-voyage-comparees",
    enSlug: "travel-authorisations-compared",
    added: ADDED,
    related: ["evisitor-ou-eta", "evisitor-site-officiel", "evisitor-passeports-eligibles"],
    title: "Quelle autorisation de voyage vous faut-il ? NZeTA, eVisitor, K-ETA, ESTA et les autres comparés",
    description: "Des noms proches, des règles très différentes. Quel dispositif pour quelle destination, ce que chacun coûte, et les erreurs qui naissent de la confusion.",
    blocks: [
      {
        p: "Vues de l'extérieur, les autorisations de voyage électroniques semblent interchangeables. Elles ne le sont pas. Chaque pays gère son propre dispositif, avec sa liste de pays éligibles, son prix et sa propre conception de ce qu'est le document — certains sont des visas, d'autres précisent explicitement qu'ils n'en sont pas.",
      },
      {
        p: "Cette page vous aide à vous y retrouver. Pour l'Australie, le dispositif qui vous concerne avec un passeport français est l'eVisitor, et il est gratuit.",
      },
      {
        note: "Une règle vaut partout : on fait la demande sur le site du gouvernement concerné, et aucune agence ne peut faire arriver une décision plus vite. Les sites qui facturent plusieurs fois le tarif officiel remplissent le même formulaire à votre place.",
      },
      { h2: "Australie — eVisitor ou ETA" },
      {
        p: `L'eVisitor (subclass 651) est un visa, et il est gratuit. Les voyageurs dont le passeport ne figure pas sur la liste de l'eVisitor utilisent à la place l'ETA (subclass 601), qui coûte ${F.etaFee} et se demande dans l'application officielle. Les deux permettent des séjours de ${F.stayMonths} mois maximum et sont valables ${F.validMonths} mois.`,
      },
      { h2: "Nouvelle-Zélande — NZeTA" },
      {
        p: "Une autorisation préalable au voyage pour les passeports exemptés de visa, et non un visa. Le coût comporte deux parties : des frais de demande et une taxe distincte pour la conservation et le tourisme, ce qui explique que les montants totaux varient selon les sources.",
      },
      { h2: "Corée du Sud — K-ETA" },
      {
        p: "De nombreuses nationalités sont actuellement exemptées de K-ETA à titre temporaire : la première question est donc de savoir si vous en avez besoin, avant même de savoir comment la demander.",
      },
      { h2: "Royaume-Uni — ETA" },
      {
        p: "Couvre les séjours de 6 mois maximum au Royaume-Uni, à Jersey, à Guernesey et sur l'île de Man. GOV.UK indique un coût de 20 £. La demande se fait via le service officiel.",
      },
      { source: { label: "GOV.UK — Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" } },
      { h2: "États-Unis — ESTA, et Canada — AVE (eTA)" },
      {
        p: "Les deux pays ont des dispositifs comparables pour les voyageurs exemptés de visa. Nous n'indiquons pas leurs tarifs ici, car nous n'avons pas pu vérifier les montants actuels auprès des sources officielles en rédigeant cette page, et un prix périmé est pire que pas de prix du tout. Consultez directement les sites officiels — et uniquement les sites officiels.",
      },
      {
        ul: [
          "États-Unis : esta.cbp.dhs.gov",
          "Canada : canada.ca (Immigration, Réfugiés et Citoyenneté Canada)",
        ],
      },
      { h2: "Les erreurs qui coûtent vraiment de l'argent" },
      {
        ul: [
          "Croire qu'une seule autorisation couvre un voyage dans plusieurs pays. Chaque destination est distincte, y compris une escale où vous sortez de l'aéroport.",
          "Croire que c'est un visa. Certaines le sont, d'autres non, et la différence détermine ce que vous avez le droit de faire sur place.",
          "Croire que le prix affiché est le prix. Plusieurs dispositifs ajoutent une taxe distincte ou facturent un montant différent selon la façon dont vous faites la demande.",
          "Passer par un intermédiaire payant en pensant que c'est plus rapide. C'est le même formulaire et la même décision.",
        ],
      },
      { h2: "Vérifiez votre propre passeport, pas un résumé" },
      {
        p: "Les listes de pays éligibles évoluent, et avoir deux passeports signifie souvent deux réponses différentes. Chacun des dispositifs ci-dessus propose un outil officiel de vérification. Utilisez-le pour le passeport avec lequel vous voyagerez réellement.",
      },
    ],
  },
];
