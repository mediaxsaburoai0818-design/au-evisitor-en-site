import { FACTS as F, type LangContent } from "./_schema";

/**
 * フランス語（/fr/）。読者＝フランスのパスポート保持者。
 *
 * ⚠️ 数値は F（data/facts.ts）から入れる。文中に直接書かない。
 * ⚠️ フランスはEU加盟国＝eVisitorの対象36か国に含まれる。
 *    「あなたは対象・無料」が前提（独語版・蘭語版と同じ型）。
 *    対象外の言語版（ko/zh/zh-tw）とは主張が逆なので文面を流用しない。
 * ⚠️ 二人称は vous。行政手続きの説明なので口語に崩さない。
 */
export const fr: LangContent = {
  code: "fr",
  htmlLang: "fr",
  label: "Français",
  audience: "France",
  meta: {
    title: `eVisitor (subclass 651) pour les Français : gratuit pour l'Australie`,
    description: `Les ressortissants français ont besoin du visa eVisitor (subclass 651) pour l'Australie. Il est gratuit, valable ${F.validMonths} mois et autorise des séjours allant jusqu'à ${F.stayMonths} mois par entrée. Voici comment le demander sur le site officiel.`,
  },
  header: {
    site: "Guide eVisitor",
    tagline: "Australie · visa eVisitor (subclass 651)",
    official: "Site officiel",
  },
  hero: {
    eyebrow: "Australie · eVisitor · subclass 651",
    h1Before: "Pour les Français, le visa eVisitor est ",
    h1Highlight: "gratuit",
    h1After: "",
    lead: `La France fait partie des ${F.eligibleCountries} pays pour lesquels l'Australie prévoit le visa eVisitor. L'administration ne facture rien : ${F.fee}. Il est valable ${F.validMonths} mois et autorise des séjours allant jusqu'à ${F.stayMonths} mois par entrée.`,
    ctaPrimary: "Faire la demande sur le site officiel",
    ctaSecondary: "Combien cela coûte-t-il vraiment ?",
    disclaimer: "Guide indépendant · sans lien avec le gouvernement australien · mise à jour",
    imageAlt: "Côte australienne ensoleillée, eau turquoise et sable doré",
  },
  stats: [
    { v: F.fee, l: "Frais", s: "Aucun frais de demande" },
    { v: `${F.validMonths} mois`, l: "Validité", s: "Entrées illimitées" },
    { v: `${F.stayMonths} mois`, l: "Séjour par entrée", s: "Tourisme ou visite d'affaires" },
    { v: F.eligibleCountries.toString(), l: "Pays éligibles", s: "La France en fait partie" },
  ],
  whatIs: {
    h2: "Qu'est-ce que le visa eVisitor ?",
    p1: "L'eVisitor (subclass 651) est un véritable visa de visiteur pour l'Australie, délivré par voie électronique. Il est rattaché à votre passeport : ni vignette ni tampon. Il couvre le tourisme et les activités de visite d'affaires.",
    p2: `Il est valable ${F.validMonths} mois à compter de sa délivrance, autorise un nombre illimité d'entrées, et chaque séjour peut durer jusqu'à ${F.stayMonths} mois. Vous devez vous trouver hors d'Australie au moment de la demande comme au moment de la délivrance.`,
  },
  features: [
    {
      h: "Un visa, pas une autorisation de voyage",
      p: "Contrairement à la NZeTA néo-zélandaise par exemple, l'eVisitor est un vrai visa. Il est délivré électroniquement et vérifié automatiquement à l'enregistrement.",
    },
    {
      h: "La France est éligible",
      p: `Tous les États membres de l'UE, ainsi que le Royaume-Uni, l'Islande, la Norvège et la Suisse, figurent parmi les ${F.eligibleCountries} pays éligibles. Sans l'un de ces passeports, c'est l'ETA qui s'applique.`,
    },
    {
      h: "Gratuit — uniquement sur le site officiel",
      p: `L'administration ne facture rien. Un prix affiché en ligne pour un eVisitor correspond au remplissage du formulaire, pas au visa. À titre de comparaison, l'ETA destinée aux autres passeports coûte ${F.etaFee}.`,
    },
  ],
  eligibility: {
    h2: "Quel visa pour quel passeport ?",
    lead: "« Gratuit » ne vaut que pour l'eVisitor, et l'eVisitor ne vaut que pour les passeports européens. C'est précisément là que naissent les malentendus.",
    th: ["Votre passeport", "Visa", "Coût", "Où demander"],
    rows: [
      [
        `UE, Royaume-Uni, Islande, Norvège, Suisse et autres pays européens (${F.eligibleCountries} au total) — France incluse`,
        "eVisitor (subclass 651)",
        F.fee,
        "Site du Department of Home Affairs (ImmiAccount)",
      ],
      [
        "Japon, États-Unis, Canada, Singapour, Malaisie, Corée du Sud et autres",
        "ETA (subclass 601)",
        F.etaFee,
        "Uniquement via l'application officielle",
      ],
      ["Éligible à aucun des deux", "Visa de visiteur (subclass 600)", "payant", "Site du Department of Home Affairs"],
    ],
    note: `L'ETA ne se demande pas sur le site : uniquement via l'application officielle, qui lit la puce du passeport. Pour l'eVisitor c'est l'inverse — pas d'application, seulement le site. Vérifié le 17 août 2026.`,
  },
  steps: {
    h2: "Comment demander l'eVisitor",
    items: [
      {
        h: "Vérifier votre passeport",
        p: "Votre passeport français doit être valide au moment de la demande et couvrir le voyage prévu. Le visa sera rattaché à ce passeport précis.",
      },
      {
        h: "Déposer la demande depuis l'étranger",
        p: "La demande se fait sur le site du Department of Home Affairs, via un compte ImmiAccount. Vous devez être hors d'Australie lors de la demande et de la délivrance.",
      },
      {
        h: "Déclarer santé et antécédents judiciaires",
        p: "Vous déclarez votre état de santé et vos éventuels antécédents judiciaires. Les dossiers simples sont traités automatiquement ; les réponses qui appellent un examen sont la première cause de délai.",
      },
      {
        h: "Attendre le courriel de confirmation",
        p: `Beaucoup de demandes sont tranchées en ${F.decisionTypical}, sans garantie. Demandez le visa avant toute réservation non remboursable et conservez la confirmation avec vos documents de voyage.`,
      },
    ],
    cta: "Commencer sur la page officielle eVisitor",
  },
  rules: {
    h2: "Ce qui est permis et ce qui ne l'est pas",
    allowedH: "Permis",
    allowed: [
      "Tourisme, visite à la famille et aux proches",
      "Activités de visite d'affaires : rendez-vous, négociations, congrès",
      `Études ou formation jusqu'à ${F.studyMonths} mois`,
      "Autant d'entrées et de sorties que souhaité pendant la validité",
    ],
    deniedH: "Non permis",
    denied: [
      "Travailler pour un employeur australien",
      `Séjourner plus de ${F.stayMonths} mois lors d'une même entrée`,
      "Déposer la demande alors que vous êtes en Australie",
      "Vendre des biens ou des services au public",
    ],
  },
  border: {
    h2: "À l'arrivée",
    p: "Voyagez avec le passeport utilisé pour la demande : le visa y est rattaché électroniquement et rien n'est à imprimer. Dans les grands aéroports, les voyageurs éligibles peuvent utiliser les SmartGates automatiques. L'entrée relève de l'Australian Border Force sur place. L'Australie applique strictement ses règles de biosécurité sur les aliments et les produits végétaux et animaux : en cas de doute, déclarez.",
  },
  faq: {
    h2: "Questions fréquentes",
    items: [
      {
        q: "L'eVisitor est-il vraiment gratuit ?",
        a: `Oui. Le Department of Home Affairs ne facture ni droit de visa ni frais de service pour l'eVisitor (subclass 651). Les sites commerciaux qui affichent un prix facturent le remplissage du formulaire — ce n'est pas nécessaire.`,
      },
      {
        q: "Combien de temps puis-je rester en Australie ?",
        a: `Jusqu'à ${F.stayMonths} mois par entrée. Le visa lui-même est valable ${F.validMonths} mois à compter de sa délivrance et autorise pendant cette période un nombre illimité d'entrées — vous pouvez donc revenir plusieurs fois, tant que chaque séjour reste sous la limite de ${F.stayMonths} mois.`,
      },
      {
        q: "Puis-je travailler avec l'eVisitor ?",
        a: `Non. Un emploi chez un employeur australien n'est pas autorisé. Les activités de visite d'affaires — rendez-vous, négociations, congrès — le sont, et vous pouvez étudier ou suivre une formation jusqu'à ${F.studyMonths} mois. Le travail rémunéré est exclu.`,
      },
      {
        q: "Puis-je demander le visa si je suis déjà en Australie ?",
        a: "Non. Vous devez être hors d'Australie au moment de la demande comme de la délivrance. Si vous êtes déjà sur place et souhaitez prolonger, il vous faut un autre visa.",
      },
      {
        q: "L'eVisitor garantit-il l'entrée ?",
        a: "Non. Il autorise le voyage vers l'Australie. L'entrée elle-même est décidée par l'Australian Border Force à l'arrivée.",
      },
      {
        q: "Les enfants ont-ils besoin de leur propre eVisitor ?",
        a: "Oui. Chaque voyageur a besoin de son propre visa, nourrissons compris, sur son propre passeport éligible.",
      },
      {
        q: "Et si je voyage avec un second passeport ?",
        a: "Le visa est rattaché au passeport utilisé pour la demande. Si vous voyagez avec un autre passeport, il faut refaire une demande. Emportez donc toujours celui que vous avez indiqué.",
      },
    ],
  },
  cta: {
    h2: "Demandez votre eVisitor",
    p: "La demande est gratuite et se fait sur le site du Department of Home Affairs. Nous sommes un guide indépendant et ne pouvons déposer aucune demande à votre place.",
    button: "Aller sur la page officielle eVisitor",
  },
  footer: {
    disclaimer:
      "Ce guide est indépendant. Il n'a aucun lien avec le gouvernement australien ni avec le Department of Home Affairs, et nous ne déposons aucune demande. L'eVisitor est gratuit — demandez-le toujours sur le site officiel.",
  },
  ui: {
    updated: "Mise à jour",
    backToTop: "Haut de page",
    languages: "Langue",
    articles: "À lire aussi",
    readMore: "Lire la suite",
    updatedLabel: "17 août 2026",
  },
  pages: [
    {
      slug: "qu-est-ce-que-evisitor",
      title: "Qu'est-ce que l'eVisitor (subclass 651) ?",
      description:
        "L'eVisitor est un vrai visa, pas une autorisation de voyage. Ce qu'il couvre, qui peut le demander et ce qu'il n'autorise pas.",
      blocks: [
        {
          p: `L'eVisitor (subclass 651) est un visa de visiteur pour l'Australie, rattaché électroniquement à votre passeport. Il s'adresse aux titulaires d'un passeport de l'un des ${F.eligibleCountries} pays éligibles, presque tous européens.`,
        },
        { h2: "C'est un visa" },
        {
          p: "La distinction compte. Certains pays délivrent une autorisation de voyage qui n'est explicitement pas un visa ; l'Australie délivre ici un véritable visa, simplement sans vignette ni tampon. C'est pourquoi de vraies conditions y sont attachées.",
        },
        {
          ul: [
            `Valable ${F.validMonths} mois à compter de la délivrance.`,
            `Séjour de ${F.stayMonths} mois maximum par entrée, nombre d'entrées illimité.`,
            `Études ou formation jusqu'à ${F.studyMonths} mois autorisées.`,
            "Travailler pour un employeur australien n'est pas autorisé.",
          ],
        },
        {
          note: `Vous devez vous trouver hors d'Australie au moment de la demande et au moment de la délivrance. C'est le point le plus souvent oublié.`,
        },
      ],
    },
    {
      slug: "evisitor-tarif",
      title: "Combien coûte l'eVisitor ? Rien — et pourquoi vous voyez des prix",
      description: `Le Department of Home Affairs facture ${F.fee} pour l'eVisitor. Ce que facturent réellement les sites commerciaux.`,
      blocks: [
        {
          p: `Les frais publics de l'eVisitor sont de ${F.fee}. Il n'y a ni droit de visa ni frais de service. Pourtant, une multitude de pages affichent un prix.`,
        },
        { h2: "Ce que ces sites facturent" },
        {
          p: "Le remplissage du même formulaire que vous pouvez remplir gratuitement vous-même. Ils n'instruisent rien, n'accélèrent rien et n'améliorent pas vos chances. La décision vient dans les deux cas du même service.",
        },
        { h2: "L'ETA, elle, est payante — d'où la confusion" },
        {
          p: `Pour les passeports absents de la liste eVisitor, c'est l'ETA (subclass 601) qui s'applique, avec des frais de service de ${F.etaFee}. Quand on confond les deux, payer finit par sembler normal.`,
        },
        {
          note: "Règle simple : avec un passeport français, tout paiement va à un intermédiaire, pas à l'Australie.",
        },
      ],
    },
    {
      slug: "evisitor-documents",
      title: "Ce qu'il faut pour la demande d'eVisitor",
      description:
        "Les informations réellement demandées, et les points sur lesquels les dossiers se bloquent en pratique.",
      blocks: [
        { h2: "À avoir sous la main" },
        {
          ul: [
            "Le passeport avec lequel vous voyagerez réellement (numéro et date d'expiration)",
            "Un compte ImmiAccount sur le site du Department of Home Affairs",
            "Une adresse e-mail accessible pendant le voyage",
            "Les informations sur votre état de santé et d'éventuels antécédents judiciaires",
          ],
        },
        { h2: "En général, aucun document à téléverser" },
        {
          p: "Pour un dossier simple, vous remplissez des déclarations ; il n'y a normalement rien à scanner. Ce n'est que si une réponse appelle un examen que le service peut demander des pièces complémentaires.",
        },
        { h2: "Là où ça coince" },
        {
          ul: [
            "Orthographier les noms autrement que sur le passeport",
            "Demander le visa avec un passeport que l'on renouvelle ensuite",
            "Répondre « non » à une question sur les antécédents judiciaires alors qu'il y a quelque chose",
          ],
        },
        {
          note: "Si vous renouvelez votre passeport après la délivrance, le visa ne couvre pas le nouveau passeport. Refaites une demande.",
        },
      ],
    },
    {
      slug: "evisitor-delai",
      title: "Combien de temps prend une demande d'eVisitor ?",
      description: `Beaucoup de demandes sont tranchées en ${F.decisionTypical}. Ce qui ralentit l'instruction et pourquoi il n'existe pas de procédure d'urgence.`,
      blocks: [
        {
          p: `Une grande partie des demandes est traitée automatiquement, souvent en ${F.decisionTypical}. C'est un constat d'usage, pas un engagement.`,
        },
        { h2: "Ce qui ralentit l'instruction" },
        {
          ul: [
            "Des antécédents judiciaires déclarés ou un refus antérieur",
            "Des questions de santé nécessitant un examen",
            "Des données qui ne correspondent pas au passeport",
            "L'affluence juste avant les périodes de vacances",
          ],
        },
        { h2: "Il n'existe pas de traitement accéléré payant" },
        {
          p: "Le service n'en propose pas. Les sites qui promettent de la rapidité n'accélèrent que leur propre saisie ; l'ordre d'examen reste inchangé.",
        },
        {
          note: "Demandez dès que le voyage est décidé et avant toute réservation non remboursable. C'est la seule mesure efficace.",
        },
      ],
    },
    {
      slug: "evisitor-verifier-statut",
      title: "Vérifier le statut de son eVisitor avec VEVO",
      description:
        "Où arrive la confirmation, comment vérifier un visa existant, et où ne surtout pas saisir son numéro de passeport.",
      blocks: [
        {
          p: "La décision arrive par e-mail à l'adresse indiquée dans la demande. Le visa est rattaché électroniquement au passeport ; il n'y a rien à imprimer.",
        },
        { h2: "VEVO : la vérification officielle" },
        {
          p: "VEVO (Visa Entitlement Verification Online), service du Department of Home Affairs, permet de vérifier le statut et les conditions d'un visa existant. C'est la source fiable, y compris si l'e-mail est introuvable.",
        },
        { h2: "Si l'e-mail n'arrive pas" },
        {
          ul: [
            "Regardez d'abord dans les indésirables",
            "Vérifiez que l'adresse saisie ne comporte pas de faute",
            "Connectez-vous à votre ImmiAccount : le statut de la demande y figure",
          ],
        },
        {
          note: "Ne saisissez votre numéro de passeport que sur le site officiel du Department of Home Affairs. Les tiers proposant une « vérification de statut » payante sont inutiles.",
        },
      ],
    },
    {
      slug: "evisitor-questions-frequentes",
      title: "eVisitor : questions fréquentes",
      description: "Réponses courtes aux questions les plus posées par les voyageurs français.",
      blocks: [
        { h2: "Est-ce vraiment gratuit ?" },
        { p: `Oui, ${F.fee}. Tout montant payé va à un intermédiaire.` },
        { h2: "Combien de temps puis-je rester ?" },
        {
          p: `${F.stayMonths} mois maximum par entrée ; le visa lui-même est valable ${F.validMonths} mois, avec un nombre d'entrées illimité.`,
        },
        { h2: "Puis-je travailler ?" },
        {
          p: `Non. Les visites d'affaires et les études jusqu'à ${F.studyMonths} mois sont possibles, le travail rémunéré ne l'est pas.`,
        },
        { h2: "Puis-je demander depuis l'Australie ?" },
        { p: "Non. Vous devez être hors d'Australie lors de la demande et de la délivrance." },
        { h2: "J'ai un nouveau passeport — mon visa est-il encore valable ?" },
        { p: "Non. Il est rattaché à l'ancien. Refaites une demande avec le nouveau." },
        { h2: "Les nourrissons ont-ils besoin d'un visa ?" },
        { p: "Oui, chaque voyageur séparément, sur son propre passeport." },
        { h2: "Et si mon passeport n'est pas sur la liste ?" },
        {
          p: `L'eVisitor n'est alors pas disponible. Selon votre passeport, ce sera l'ETA (${F.etaFee}, uniquement via l'application officielle) ou un visa de visiteur (subclass 600).`,
        },
      ],
    },
    {
      slug: "a-propos",
      title: "À propos de ce site",
      description: "Qui édite ce guide indépendant consacré au visa eVisitor australien.",
      blocks: [
        { h2: "Éditeur" },
        {
          p: "Ce site est un guide indépendant consacré au visa eVisitor australien (subclass 651). Nous ne sommes pas une administration et n'avons aucun lien avec le gouvernement australien ni le Department of Home Affairs. Éditeur : MediaX Co., Ltd. (Japon). Contact : webmaster@mediax.biz",
        },
        { h2: "Ce que nous ne faisons pas" },
        {
          ul: [
            "Nous ne déposons aucune demande.",
            "Nous ne facturons aucun frais.",
            "Nous ne délivrons aucun conseil juridique ou en immigration.",
          ],
        },
        { h2: "Exactitude des informations" },
        {
          p: "Tout le contenu repose sur les publications officielles à la date de vérification indiquée. Les règles évoluent : le site officiel fait foi. Signalez-nous toute erreur, nous la corrigerons.",
        },
      ],
    },
    {
      slug: "confidentialite",
      title: "Politique de confidentialité",
      description: "Quelles données ce site traite, pourquoi, et quels sont vos droits.",
      blocks: [
        { h2: "En résumé" },
        {
          p: "Ce site est constitué de pages d'information statiques. Il n'y a ni inscription, ni vente, ni collecte de données de passeport. Les données personnelles ne sont traitées que dans la mesure technique nécessaire.",
        },
        { h2: "Journaux du serveur" },
        {
          p: "Le site est hébergé sur Cloudflare Pages. À chaque consultation sont enregistrés l'adresse IP, l'horodatage, l'adresse demandée et des informations sur le navigateur, pour assurer la stabilité et prévenir les attaques.",
        },
        { h2: "Cookies et mesure d'audience" },
        {
          p: "Nous n'utilisons pas de cookies publicitaires et n'intégrons aucun script de suivi tiers. Si une mesure d'audience était ajoutée plus tard, elle serait d'abord décrite ici.",
        },
        { h2: "Liens externes" },
        { p: "Le site renvoie vers des sources officielles, soumises à leurs propres politiques de confidentialité." },
        { h2: "Contact" },
        { p: "Pour toute question relative aux données : webmaster@mediax.biz" },
      ],
    },
    {
      slug: "conditions",
      title: "Conditions d'utilisation",
      description: "Les conditions applicables à l'usage des informations de ce site.",
      blocks: [
        { h2: "Objet" },
        {
          p: "Les contenus fournissent une information générale sur le visa eVisitor australien. Ils ne constituent ni un conseil juridique ni un conseil en immigration et ne créent aucun mandat.",
        },
        { h2: "Aucun traitement de demande" },
        {
          p: "Nous ne sommes ni intermédiaire ni administration. Les demandes passent exclusivement par les canaux officiels ; nous ne recevons ni formulaires, ni frais, ni données de passeport.",
        },
        { h2: "Limitation de responsabilité" },
        {
          p: "Nous nous efforçons de maintenir des informations exactes et à jour, sans pouvoir en garantir l'exhaustivité ni l'absence d'erreur. Notre responsabilité n'est engagée qu'en cas de faute intentionnelle ou de négligence grave.",
        },
        { h2: "Droit d'auteur" },
        {
          p: "Les textes et la mise en forme sont protégés. Toute reprise intégrale sans accord est interdite ; les citations courtes avec mention de la source et lien sont les bienvenues.",
        },
      ],
    },
  ],
  articles: [
    {
      slug: "evisitor-demande-etape-par-etape",
      title: "Demander l'eVisitor étape par étape",
      description:
        "De l'ImmiAccount au courriel de confirmation : l'ordre des étapes et les points sur lesquels les dossiers se bloquent réellement.",
      blocks: [
        {
          p: `La demande se fait uniquement sur le site du Department of Home Affairs. Il n'existe pas d'application pour l'eVisitor — c'est justement ce qui le distingue de l'ETA. Le coût est de ${F.fee}.`,
        },
        { h2: "1. Créer un ImmiAccount" },
        {
          p: "Un compte ImmiAccount gratuit est nécessaire. Utilisez une adresse e-mail accessible pendant le voyage : toutes les notifications y sont envoyées.",
        },
        { h2: "2. Saisir les données du passeport" },
        {
          p: "Reprenez nom, numéro et date de naissance exactement comme sur le passeport. Une orthographe différente est la première cause de problèmes à l'enregistrement.",
        },
        { h2: "3. Faire les déclarations" },
        {
          p: "Vous déclarez votre état de santé et d'éventuels antécédents judiciaires. Répondez sincèrement : une fausse déclaration peut entraîner l'annulation du visa, avec des conséquences sur plusieurs années pour toute nouvelle demande.",
        },
        { h2: "4. Déposer depuis l'étranger" },
        {
          p: "Vous devez être hors d'Australie lors de la demande et de la délivrance. Ce n'est pas une formalité, c'est une condition du visa.",
        },
        {
          note: `Beaucoup de décisions arrivent en ${F.decisionTypical}, mais ne bâtissez pas votre planning dessus. Demandez dès que le voyage est décidé.`,
        },
      ],
    },
    {
      slug: "evisitor-ou-eta",
      title: `eVisitor ou ETA ? La différence entre gratuit et ${F.etaFee}`,
      description:
        "Deux visas aux conditions presque identiques, mais des listes de pays, des prix et des canaux différents. Comment savoir lequel vous concerne.",
      blocks: [
        {
          p: `L'Australie propose deux visas de visiteur électroniques qui se ressemblent. Celui qui s'applique dépend uniquement du passeport que vous détenez — vous ne choisissez pas.`,
        },
        { h2: "eVisitor (subclass 651)" },
        {
          ul: [
            `Pour ${F.eligibleCountries} pays essentiellement européens, dont la France`,
            `Coût : ${F.fee}`,
            "Demande : site du Department of Home Affairs (pas d'application)",
          ],
        },
        { h2: "ETA (subclass 601)" },
        {
          ul: [
            "Pour notamment le Japon, les États-Unis, le Canada, Singapour, la Malaisie et la Corée du Sud",
            `Coût : ${F.etaFee} de frais de service`,
            "Demande : uniquement via l'application officielle, qui lit la puce du passeport",
          ],
        },
        { h2: "Ce qui est identique" },
        {
          p: `Les deux sont valables ${F.validMonths} mois, autorisent un nombre illimité d'entrées et des séjours de ${F.stayMonths} mois maximum par entrée. Les deux interdisent de travailler pour un employeur australien.`,
        },
        {
          note: "Avec deux nationalités, la réponse peut différer selon le passeport. C'est celui avec lequel vous voyagez réellement qui compte.",
        },
      ],
    },
    {
      slug: "evisitor-validite-et-sejour",
      title: "Validité et durée de séjour : deux choses différentes",
      description: `${F.validMonths} mois de validité et ${F.stayMonths} mois de séjour par entrée sont souvent confondus. Ce que la différence change en pratique.`,
      blocks: [
        {
          p: `L'eVisitor est valable ${F.validMonths} mois à compter de sa délivrance. Cela indique combien de temps vous pouvez utiliser le visa — pas combien de temps vous pouvez rester à chaque fois.`,
        },
        { h2: "Par entrée" },
        {
          p: `Chaque séjour peut durer jusqu'à ${F.stayMonths} mois. Pendant la validité, vous pouvez voyager autant de fois que vous le souhaitez, tant que chaque séjour reste sous cette limite.`,
        },
        { h2: "Sortir et revenir ne remet pas le compteur à zéro" },
        {
          p: "Quitter brièvement le pays pour relancer le décompte est un montage connu et repéré comme tel. L'Australian Border Force regarde l'ensemble de vos déplacements, pas seulement le dernier tampon.",
        },
        { h2: "Rester plus longtemps" },
        {
          p: "Pour dépasser la durée autorisée, il faut un autre visa. L'eVisitor ne se prolonge pas, et une demande depuis l'Australie n'est pas possible.",
        },
        {
          note: "Le visa prend aussi fin si votre passeport expire avant. Vérifiez les deux dates avant de réserver.",
        },
      ],
    },
  ],
};
