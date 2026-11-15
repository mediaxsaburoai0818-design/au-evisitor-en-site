import { FACTS as F } from "./_schema";
import type { Article } from "./_schema";

/**
 * 英語ページの横展開（2026-11-15）。英語の data/pages.ts にあって es 版に無かった話題。
 * ⚠️ 数値は F（data/facts.ts）から入れる。本文に直接書かない。
 * ⚠️ 読者＝スペイン国籍（eVisitor 対象・無料）。中南米のスペイン語圏は eVisitor の対象外 →
 *    対象（旅券）に触れるページには必ず「大半の中南米旅券は Visitor visa（subclass 600）」の一文を入れる。
 * ⚠️ 英国は British Citizen 旅券のみ（BN(O) 等は対象外）。
 */

/** 表記だけスペイン語にする（値は F のまま） */
const DECISION = "entre unos minutos y unos días"; // = F.decisionTypical
const ALCOHOL_L = String(F.customsAlcoholLitres).replace(".", ","); // 2.25 → 2,25
const CHECKED_NOV = "15 de noviembre de 2026";
const OFFICIAL_651 = "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651";
const OFFICIAL_601 = "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601";
const ADDED = "2026-11-15";

export const esGuides: Article[] = [
  {
    slug: "evisitor-tres-meses-por-visita",
    enSlug: "three-months-per-visit",
    added: ADDED,
    title: "Cómo funciona realmente el límite de tres meses del eVisitor",
    description: `El eVisitor es válido ${F.validMonths} meses, pero cada visita tiene un máximo de ${F.stayMonths}. Son dos cifras distintas y confundirlas es un error de planificación frecuente.`,
    related: ["llegar-a-australia", "festivos-australia", "conducir-en-australia"],
    blocks: [
      {
        p: `El eVisitor es válido ${F.validMonths} meses desde la fecha de concesión y permite entrar tantas veces como quiera durante ese periodo. Lo que no le da es ${F.validMonths} meses seguidos en Australia: cada visita está limitada a ${F.stayMonths} meses.`,
      },
      { h2: "Dos plazos, no uno" },
      {
        ul: [
          `Validez del visado: ${F.validMonths} meses, contados desde la fecha de concesión, no desde su primera entrada`,
          `Estancia por visita: ${F.stayMonths} meses, contados desde cada llegada`,
          "Entradas: múltiples, mientras el visado esté vigente",
        ],
      },
      {
        p: `Así, un visado concedido en enero caduca en enero del año siguiente, lo haya utilizado o no. Si llega en diciembre, todavía puede quedarse ${F.stayMonths} meses, pero no podrá volver a entrar una vez caducado el visado.`,
      },
      { h2: "Lo que los tres meses no cubren" },
      {
        ul: [
          "Trabajar para un empleador australiano",
          `Estudiar más de ${F.studyMonths} meses`,
          "Ninguna garantía de entrada: decide el agente en la frontera",
        ],
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: OFFICIAL_651 } },
      {
        note: `El eVisitor no funciona volviendo a solicitarlo desde Australia. Si necesita más de ${F.stayMonths} meses seguidos, infórmese sobre el visado de visitante (subclass 600) antes de viajar.`,
      },
    ],
  },
  {
    slug: "salir-y-volver-a-australia",
    enSlug: "leaving-and-returning",
    added: ADDED,
    title: "¿Salir de Australia y volver le da otros tres meses?",
    description: `Cada entrada reinicia el plazo de ${F.stayMonths} meses, pero las visitas encadenadas despiertan preguntas y el agente de frontera puede denegar la entrada.`,
    related: ["llegar-a-australia", "devolucion-impuestos-trs", "liquidos-equipaje-de-mano"],
    blocks: [
      {
        p: `Cada llegada abre un nuevo periodo de hasta ${F.stayMonths} meses, de modo que una escapada a Nueva Zelanda o a Bali y la vuelta sí reinician el plazo por visita, siempre que su visado siga vigente.`,
      },
      { h2: "Pero sigue siendo un visado de visitante" },
      {
        p: "El eVisitor se concede porque usted está de visita. Quien pasa nueve de doce meses en Australia y solo sale brevemente cada vez no está de visita: está viviendo en el país con un visado de visitante. Los agentes de frontera miran el conjunto de sus desplazamientos, no solo la entrada actual.",
      },
      { h2: "Lo que pueden pedirle al volver a entrar" },
      {
        ul: [
          "Un billete de continuación o de regreso",
          "Medios económicos para mantenerse durante la estancia",
          "Pruebas de que va a volver a casa: trabajo, estudios, un contrato de alquiler, familia",
          "Un motivo para regresar tan pronto",
        ],
      },
      { h2: "Si se le deniega la entrada" },
      {
        p: "Un visado válido es un permiso para viajar, no una garantía de entrada. Si el agente no está convencido de que usted es un visitante genuino, el visado puede cancelarse en la frontera y usted puede ser devuelto en el primer vuelo disponible. Ese antecedente le acompañará en futuras solicitudes.",
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: OFFICIAL_651 } },
      {
        note: `Su eVisitor deja de valer en el momento en que caduca, ${F.validMonths} meses después de su concesión. Compruebe la fecha de concesión antes de reservar un viaje de vuelta cerca del final de ese periodo.`,
      },
    ],
  },
  {
    slug: "preguntas-en-la-frontera",
    enSlug: "border-questions",
    added: ADDED,
    title: "Qué le preguntan al llegar a Australia",
    description: "Inmigración, aduana y bioseguridad son tres controles distintos con preguntas distintas. Saber cuál es cuál acorta mucho la cola.",
    related: ["llegar-a-australia", "smartgate-australia", "llevar-medicamentos"],
    blocks: [
      {
        p: "Los pasajeros que llegan pasan tres controles, no uno. Los gestionan organismos distintos y a cada uno le interesan cosas distintas. Lo que retrasa a la gente es responder a la pregunta de uno con la respuesta equivocada.",
      },
      { h2: "1. Inmigración: ¿es usted un visitante genuino?" },
      {
        ul: [
          "Cuánto tiempo se queda y dónde",
          "Si tiene billete de continuación o de regreso",
          "Cómo financia el viaje",
          "Si piensa trabajar: con este visado no puede",
        ],
      },
      { h2: "2. Aduana: ¿debe pagar derechos?" },
      {
        p: `Debe declarar los bienes que superen la franquicia y el efectivo que alcance o supere el umbral de declaración. La franquicia es de ${F.customsGoodsAllowance} en bienes generales si tiene ${F.customsAgeMin} años o más (${F.customsGoodsAllowanceMinor} si es menor).`,
      },
      { h2: "3. Bioseguridad: ¿qué lleva en la maleta?" },
      {
        p: "Es el control en el que caen los viajeros poco preparados. Australia pregunta por alimentos, material vegetal y animal, y cualquier cosa que haya estado en contacto con tierra o agua dulce. Declarar no le cuesta nada; no declarar puede costarle el visado.",
      },
      { h2: "La Incoming Passenger Card" },
      {
        p: "Sus respuestas de aduana y bioseguridad se dan en la Incoming Passenger Card, que se rellena antes de aterrizar. Tómesela en serio: la tarjeta es una declaración jurídica, y si un agente encuentra en su equipaje algo no declarado, la tarjeta sirve como prueba de que usted dijo no llevar nada.",
      },
      { source: { label: "Australian Border Force / Home Affairs — Duty free concessions", url: "https://www.abf.gov.au/entering-and-leaving-australia/duty-free" } },
      {
        note: "Si duda de si algo debe declararse, marque «sí» y deje que decida el agente. Declarar un artículo que resulta estar permitido no tiene ninguna sanción.",
      },
    ],
  },
  {
    slug: "bioseguridad-australia",
    enSlug: "biosecurity",
    added: ADDED,
    title: "Bioseguridad en Australia: qué declarar y por qué pueden cancelarle el visado",
    description: `No declarar productos de riesgo puede suponer una multa de hasta ${F.biosecurityPenaltyUnits} penalty units y, si tiene visado, su cancelación y ${F.visaCancelExclusionYears} años de exclusión.`,
    related: ["llegar-a-australia", "llevar-medicamentos", "smartgate-australia"],
    blocks: [
      {
        p: "Australia es una isla con una agricultura que quiere proteger, así que sus normas de bioseguridad son estrictas y se aplican en el aeropuerto, no después en una oficina. Quien trata la declaración como un mero trámite es quien acaba sancionado.",
      },
      { h2: "La sanción" },
      {
        p: `Una notificación de infracción (infringement notice) por productos no declarados puede llegar a ${F.biosecurityPenaltyUnits} penalty units (unidades de sanción). Atención: el importe en dólares de cada unidad lo fija la ley y se actualiza periódicamente. La página del departamento indica ${F.biosecurityFineDaff} por ${F.biosecurityPenaltyUnits} unidades, mientras que el anuncio ministerial de la actualización de 2023 situaba esas mismas ${F.biosecurityPenaltyUnits} unidades en ${F.biosecurityFineIndexed}. Compruebe la cifra vigente en la página oficial antes de darla por buena.`,
      },
      { h2: "Para quien tiene visado, la multa no es lo peor" },
      {
        p: `A los viajeros que reciben una notificación de infracción se les puede abrir un procedimiento de cancelación del visado. Un visado cancelado supone la expulsión de Australia en el primer vuelo disponible y un periodo de exclusión de ${F.visaCancelExclusionYears} años antes de poder volver a solicitarlo.`,
      },
      { h2: "Lo que se detecta en la práctica" },
      {
        ul: [
          "Alimentos de cualquier tipo, incluidos los tentempiés que reparten en el avión",
          "Carne, lácteos, huevos, miel y todo lo que los contenga",
          "Fruta y verdura frescas, semillas, frutos secos",
          "Material vegetal: objetos de madera, artículos trenzados, flores",
          "Botas de montaña, tiendas de campaña y material deportivo con restos de tierra o plantas",
          "Cualquier cosa utilizada con animales o en agua dulce",
        ],
      },
      { h2: "Antes de hacer la maleta" },
      {
        ul: [
          "Limpie la tierra de botas y equipo en casa, no en la cola",
          "Cómase o tire la comida antes de aterrizar",
          "Declare los recuerdos de madera y trenzados: son productos de riesgo, no simples curiosidades",
        ],
      },
      { source: { label: "Department of Agriculture, Fisheries and Forestry — Infringement notices at the airport", url: "https://www.agriculture.gov.au/biosecurity-trade/policy/legislation/compliance/infringement-notice-scheme/infringement-notices-at-the-airport" } },
      {
        note: "Antes del control de bioseguridad hay contenedores para desechar productos. Usarlos es gratis. Que le encuentren el artículo después de haber declarado «no», no.",
      },
    ],
  },
  {
    slug: "franquicias-aduaneras",
    enSlug: "customs-allowances",
    added: ADDED,
    title: "Franquicias aduaneras en Australia: bienes, alcohol y tabaco",
    description: `Los adultos pueden entrar ${F.customsGoodsAllowance} en bienes generales, ${ALCOHOL_L} litros de alcohol y ${F.customsTobaccoGrams} g de tabaco libres de impuestos. Por encima, hay que declarar.`,
    related: ["llegar-a-australia", "dinero-y-propinas", "devolucion-impuestos-trs", "tabaco-vapeo-alcohol"],
    blocks: [
      {
        p: "La aduana es un control distinto del de bioseguridad. La bioseguridad pregunta si un artículo supone un riesgo para Australia; la aduana, si hay que pagar derechos e impuestos por él. Puede superar uno y quedarse detenido en el otro.",
      },
      { h2: "Las franquicias" },
      {
        ul: [
          `Bienes generales: ${F.customsGoodsAllowance} si tiene ${F.customsAgeMin} años o más, ${F.customsGoodsAllowanceMinor} si tiene menos de ${F.customsAgeMin}`,
          `Alcohol: ${ALCOHOL_L} litros, a partir de ${F.customsAgeMin} años`,
          `Tabaco: ${F.customsTobaccoGrams} gramos en cualquier forma, más un paquete abierto, a partir de ${F.customsAgeMin} años`,
        ],
      },
      { h2: "Errores habituales" },
      {
        ul: [
          "Lo comprado en el duty free de camino a Australia también cuenta para la franquicia",
          "Los regalos cuentan: importa el valor de lo que lleva, no lo que haya pagado para usted",
          "Las familias no siempre pueden sumar sus franquicias como suponen; compruébelo antes de contar con ello",
        ],
      },
      { h2: "Si supera el límite" },
      {
        p: "Declárelo y presente el justificante de compra para que se calculen los derechos y los impuestos. No declarar bienes por encima de la franquicia puede acarrear sanciones, un proceso judicial o la cancelación del visado. Declarar significa simplemente pagar lo que corresponde.",
      },
      { source: { label: "Australian Border Force / Home Affairs — Duty free concessions", url: "https://www.abf.gov.au/entering-and-leaving-australia/duty-free" } },
      {
        note: `El dinero en efectivo también debe declararse en la frontera: el efectivo y los instrumentos como cheques de viaje por un valor conjunto de ${F.cashReportThreshold} o más. Cómo hacerlo se explica en la página sobre dinero.`,
      },
    ],
  },
  {
    slug: "trabajar-y-estudiar-con-evisitor",
    enSlug: "working-and-studying",
    added: ADDED,
    title: "Lo que no puede hacer con un eVisitor: trabajar y estudiar más de tres meses",
    description: `El eVisitor es un visado de visitante. No permite trabajar para un empleador australiano y los estudios se limitan a ${F.studyMonths} meses.`,
    related: ["llegar-a-australia", "sanidad-para-visitantes", "evisitor-tres-meses-por-visita"],
    blocks: [
      {
        p: `Como el eVisitor es gratuito y se concede con rapidez, hay quien lo trata como un permiso ligero para hacer lo que quiera durante ${F.stayMonths} meses. No lo es. Es un visado de visitante con condiciones, y las condiciones se hacen cumplir.`,
      },
      { h2: "Trabajo" },
      {
        p: "No puede trabajar para un empleador australiano. Las actividades de visita de negocios son otra cosa: asistir a reuniones, negociar o ir a un congreso suele estar permitido; que una empresa australiana le pague por hacer un trabajo, no.",
      },
      { h2: "Teletrabajo para un empleador fuera de Australia" },
      {
        p: "Teletrabajar para su empleador habitual en el extranjero es una zona gris que depende de cada caso, y no es algo que deba decidir por usted una web informativa. Si su viaje depende de la respuesta, consúltelo con el Department of Home Affairs antes de reservar.",
      },
      { h2: "Estudios" },
      {
        p: `Los estudios tienen un límite de ${F.studyMonths} meses. Un curso corto, sí; un semestre, no. Para estudiar más tiempo hace falta un visado de estudiante, solicitado antes de viajar.`,
      },
      { h2: "Por qué importa más de lo que parece" },
      {
        p: `Incumplir una condición del visado puede conllevar su cancelación, la expulsión y un periodo de exclusión de hasta ${F.visaCancelExclusionYears} años. El verdadero coste del error no es la multa: es no poder volver.`,
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: OFFICIAL_651 } },
    ],
  },
  {
    slug: "evisitor-pasaporte-y-datos",
    enSlug: "passport-and-details",
    added: ADDED,
    title: "Su eVisitor está vinculado a un pasaporte: introduzca bien los datos",
    description: "El eVisitor queda ligado al pasaporte con que lo solicitó. Un pasaporte renovado que no se ha actualizado ante Home Affairs, un nombre que no coincide o la nacionalidad errónea pueden frenarle al facturar.",
    related: ["nuevo-pasaporte-tras-la-concesion", "evisitor-errores-frecuentes", "evisitor-documentacion"],
    blocks: [
      {
        p: "No hay etiqueta ni impreso que cuente. El eVisitor existe como un registro vinculado a un número de pasaporte, y la aerolínea comprueba ese registro en la facturación. Si el pasaporte que lleva en la mano no es el del registro, es como si el visado no existiera.",
      },
      { h2: "El visado no pasa solo al pasaporte nuevo" },
      {
        p: `Si renueva el pasaporte, su eVisitor no se traslada por sí solo al nuevo documento, aunque siga dentro de sus ${F.validMonths} meses de validez. Actualice los datos del pasaporte en ImmiAccount antes de viajar: según Home Affairs, el nuevo pasaporte queda vinculado a su visado en un plazo de 3 días hábiles (14 días si debe usar el formulario web New Passport Details).`,
      },
      { source: { label: "Department of Home Affairs — You have a new passport", url: "https://immi.homeaffairs.gov.au/change-in-situation/passport-details" } },
      { h2: "Introduzca los datos tal como figuran impresos" },
      {
        ul: [
          "Los nombres como aparecen en la zona de lectura mecánica, no como los escribe habitualmente (atención a los dos apellidos)",
          "Las tildes y la ñ transcritas como lo hace el propio pasaporte",
          "El número de pasaporte, comprobado carácter por carácter: 0 y O, 1 e I",
          "La nacionalidad que indica el pasaporte, no el país donde vive",
        ],
      },
      { h2: "Doble nacionalidad" },
      {
        p: "Viaje con el pasaporte al que está vinculado su eVisitor. Tener una segunda nacionalidad que no da acceso al eVisitor no le excluye, pero presentar el pasaporte equivocado en la facturación sí le dejará en tierra.",
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: OFFICIAL_651 } },
      {
        note: `La solicitud cuesta ${F.fee}. Cualquier web que le cobre por presentar un eVisitor en su nombre es un tercero que añade su propio margen, no un canal oficial.`,
      },
    ],
  },
  {
    slug: "evisitor-solicitud-denegada",
    enSlug: "if-your-application-is-refused",
    added: ADDED,
    title: "¿Qué ocurre si le deniegan el eVisitor?",
    description: "Una denegación cambia lo que debe hacer a continuación. Qué comprobar, qué no hacer y por qué volver a solicitarlo de inmediato suele ser un error.",
    related: ["evisitor-errores-frecuentes", "evisitor-pasaportes-admitidos", "evisitor-o-eta"],
    blocks: [
      {
        p: `La mayoría de las solicitudes de eVisitor se resuelven ${DECISION}. Si la suya es denegada, lo importante es entender el motivo antes de hacer nada más.`,
      },
      { h2: "No se limite a solicitarlo otra vez" },
      {
        p: "Presentar la misma solicitud de nuevo suele dar el mismo resultado, y una serie de solicitudes repetidas no le favorece. Lea la resolución: en ella se indica el motivo.",
      },
      { h2: "Motivos habituales" },
      {
        ul: [
          "El pasaporte no está en la lista del eVisitor. En ese caso, la vía correcta puede ser la ETA o un visado de visitante (subclass 600); este último es el que corresponde a la mayoría de los pasaportes hispanoamericanos.",
          "Los datos no coincidían exactamente con el pasaporte. Nombres, números y fechas deben introducirse tal como figuran impresos.",
          "Una declaración sobre salud o antecedentes requería un examen en lugar de una resolución automática.",
        ],
      },
      { h2: "Si ya tiene los vuelos" },
      {
        p: "No viaje dando por hecho que se resolverá en el aeropuerto. Sin un visado válido no le dejarán embarcar. Hable con la aerolínea para cambiar las fechas mientras tramita la solicitud correcta.",
      },
      {
        note: `Una denegación no es lo mismo que una cancelación. Si se cancela un visado que ya tiene, puede aplicarse un periodo de exclusión de hasta ${F.visaCancelExclusionYears} años para futuras solicitudes.`,
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: F.officialUrl } },
    ],
  },
  {
    slug: "evisitor-viajar-con-ninos",
    enSlug: "travelling-with-children",
    added: ADDED,
    title: "¿Los niños necesitan su propio eVisitor?",
    description: "Cada viajero necesita su propio visado, también los bebés. El eVisitor de los padres no cubre a los hijos, y la solicitud se hace de la misma manera.",
    related: ["llegar-a-australia", "smartgate-australia", "sanidad-para-visitantes"],
    blocks: [
      {
        p: "Sí. El eVisitor está vinculado a un único pasaporte, así que cada miembro de la familia necesita el suyo, incluido el bebé que viaja en brazos.",
      },
      { h2: "Cómo solicitarlo para un menor" },
      {
        p: "La solicitud se hace a nombre del niño y con su propio pasaporte. Puede rellenarla uno de los progenitores o el tutor. El visado también es gratuito para los niños: no hay ninguna tasa aparte.",
      },
      { h2: "Revise antes el pasaporte" },
      {
        p: `Los pasaportes infantiles suelen expedirse con una validez más corta que los de los adultos. Un pasaporte que caduca dentro de los ${F.validMonths} meses de validez del visado es una causa frecuente de problemas, porque el visado está ligado al pasaporte con el que se concedió.`,
      },
      { h2: "Si el niño viaja con un solo progenitor o con otra persona" },
      {
        p: "En la frontera pueden preguntar por el consentimiento. Llevar una autorización firmada por el progenitor que no viaja y una copia de la documentación sobre la custodia no es un requisito del visado, pero evita un retraso previsible.",
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: F.officialUrl } },
    ],
  },
  {
    slug: "nuevo-pasaporte-tras-la-concesion",
    enSlug: "new-passport-after-approval",
    added: ADDED,
    title: "Ha renovado el pasaporte después de obtener el eVisitor. ¿Y ahora qué?",
    description: "El visado queda vinculado al pasaporte con el que se concedió. Renovar o sustituir ese pasaporte no anula el visado, pero debe comunicarlo a Home Affairs.",
    related: ["evisitor-pasaporte-y-datos", "evisitor-errores-frecuentes", "evisitor-consultar-estado"],
    blocks: [
      {
        p: "Ocurre continuamente: el pasaporte se renueva, se sustituye tras una pérdida o se vuelve a expedir por un cambio de nombre, y el viajero da por hecho que ha perdido el visado. No es así, pero el visado tampoco pasa por sí solo al nuevo pasaporte.",
      },
      { h2: "Qué ocurre en realidad" },
      {
        p: "El eVisitor sigue vinculado al número de pasaporte con el que se concedió. Las aerolíneas y los sistemas fronterizos comprueban el pasaporte que usted presenta. Si ese pasaporte es nuevo, primero hay que actualizar el vínculo.",
      },
      { h2: "Qué hacer" },
      {
        ul: [
          "Inicie sesión en ImmiAccount y abra su solicitud de eVisitor.",
          "Seleccione «Update details» y, a continuación, «Change of passport details».",
          "Introduzca los datos del nuevo pasaporte y el motivo del cambio, y envíelos.",
          "Según el Department of Home Affairs, el nuevo pasaporte queda vinculado a su visado en un plazo de 3 días hábiles.",
        ],
      },
      {
        p: "Si el cambio no puede hacerse en ImmiAccount —por ejemplo, porque no puede importar su solicitud o porque ha cambiado la fecha de nacimiento que figura en el pasaporte—, Home Affairs remite al formulario web New Passport Details, cuya tramitación tarda hasta 14 días.",
      },
      {
        note: "Hágalo en cuanto reciba el nuevo pasaporte, no en el aeropuerto. Esto se aplica al eVisitor. Una ETA (subclass 601) no puede transferirse a un nuevo pasaporte: los titulares de una ETA deben solicitar una nueva.",
      },
      { source: { label: "Department of Home Affairs — You have a new passport", url: "https://immi.homeaffairs.gov.au/change-in-situation/passport-details" } },
    ],
  },
  {
    slug: "evisitor-pasaportes-admitidos",
    enSlug: "eligible-passports",
    added: ADDED,
    checked: CHECKED_NOV,
    title: `¿Qué pasaportes dan acceso al eVisitor? Los ${F.eligibleCountries} países y quién usa la ETA`,
    description: `El eVisitor está abierto a ciudadanos de ${F.eligibleCountries} países europeos, España incluida. La lista completa, los pasaportes británicos excluidos y la comparación con la ETA`,
    related: ["evisitor-o-eta", "que-es-evisitor", "transito-por-australia", "evisitor-app-eta"],
    blocks: [
      {
        p: `El acceso al eVisitor (subclass 651) depende de su ciudadanía y del pasaporte que tenga, no de dónde viva. El Department of Home Affairs exige ser ciudadano de uno de ${F.eligibleCountries} países y tener un pasaporte válido de ese país.`,
      },
      { h2: `Los ${F.eligibleCountries} países del eVisitor` },
      {
        p: "Andorra, Austria, Bélgica, Bulgaria, Croacia, Chipre, Chequia, Dinamarca, Estonia, Finlandia, Francia, Alemania, Grecia, Hungría, Islandia, Irlanda, Italia, Letonia, Liechtenstein, Lituania, Luxemburgo, Malta, Mónaco, los Países Bajos, Noruega, Polonia, Portugal, Rumanía, la República de San Marino, Eslovaquia, Eslovenia, España, Suecia, Suiza, el Reino Unido (British Citizen) y la Ciudad del Vaticano.",
      },
      { h2: "Pasaportes que no sirven" },
      {
        ul: [
          "Del Reino Unido solo figuran en la lista los pasaportes de British Citizen",
          "No pueden usarse los pasaportes de British National (Overseas), British Dependent Territories Citizen, British Overseas Citizen, British Protected Person ni British Subject",
          "Tampoco sirven un pasaporte de no ciudadano, un certificado de identidad ni otro documento de viaje como un Titre de Voyage",
          "En el caso de la Ciudad del Vaticano, el pasaporte debe indicar que usted es nacional de la Ciudad del Vaticano (Santa Sede)",
        ],
      },
      { h2: "Si su pasaporte no está en la lista" },
      {
        p: `La ETA (subclass 601) tiene su propia lista de ${F.etaEligibleCountries} pasaportes. Incluye, entre otros, Brunéi, Canadá, Hong Kong (RAE de China), Japón, Malasia, Singapur, Corea del Sur, Taiwán (salvo pasaportes oficiales o diplomáticos), Estados Unidos y Reino Unido — British National (Overseas). La ETA cuesta ${F.etaFee} en concepto de tasa de servicio de la app. Los titulares de otros pasaportes pueden optar a un visado de visitante (subclass 600).`,
      },
      {
        note: "Si habla español pero su pasaporte es de un país hispanoamericano (México, Argentina, Colombia, Perú, Chile…), el eVisitor no está a su alcance: ninguno de esos países figura en la lista. A la mayoría de los pasaportes hispanoamericanos les corresponde el visado de visitante (subclass 600), que es de pago y se solicita en la web del Department of Home Affairs.",
      },
      { h2: "Pasaportes que están en las dos listas" },
      {
        p: `Según nuestra comparación de las dos listas oficiales, ${F.bothListsCountries} pasaportes figuran en ambas. Los otros ${F.eligibleCountries - F.bothListsCountries} países del eVisitor no están en la lista de la ETA: Bulgaria, Croacia, Chipre, Chequia, Estonia, Hungría, Letonia, Lituania, Polonia, Rumanía, Eslovaquia y Eslovenia. Para los pasaportes que están en ambas listas, la página de la ETA indica que los titulares de pasaportes europeos «pueden optar» (may be eligible) al eVisitor y que solicitarlo no tiene coste.`,
      },
      { h2: "Casos en los que Home Affairs remite a otro visado" },
      {
        ul: [
          "Condenas penales en cualquier país: Home Affairs indica que se solicite un visado de visitante (subclass 600) y advierte de que llegar con un eVisitor teniendo una condena puede llevar a que se deniegue la entrada",
          "Formación en una guardería; estudios de medicina, odontología, enfermería o técnico de emergencias; o acceso a entornos sanitarios u hospitalarios: solicite el visado de visitante (subclass 600) y complete los controles médicos",
          "Los ciudadanos australianos no pueden solicitar un eVisitor ni una ETA, aunque tengan además un pasaporte admitido: no necesitan visado para entrar en Australia",
          "Familias: cada miembro necesita una solicitud separada, incluidos los niños inscritos en el pasaporte de uno de los padres",
        ],
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: OFFICIAL_651 } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: OFFICIAL_601 } },
      {
        note: "Las listas pueden cambiar. Antes de presentar la solicitud, compruebe en la página oficial el pasaporte con el que vaya a viajar realmente.",
      },
    ],
    faq: [
      {
        q: "Tengo un pasaporte británico de British National (Overseas). ¿Puedo obtener un eVisitor?",
        a: "No. Los pasaportes BN(O) están excluidos del eVisitor. En cambio, el pasaporte BN(O) figura en la lista de la ETA (subclass 601).",
      },
      {
        q: "Vivo en España, pero mi pasaporte es hispanoamericano. ¿Puedo solicitar el eVisitor?",
        a: "No. El eVisitor exige la ciudadanía de uno de los países de la lista y un pasaporte válido de ese país; el lugar de residencia no cambia nada. A la mayoría de los pasaportes hispanoamericanos les corresponde el visado de visitante (subclass 600). Si además tiene la nacionalidad española y viaja con pasaporte español, el eVisitor sí está disponible.",
      },
    ],
  },
  {
    slug: "evisitor-errores-frecuentes",
    enSlug: "common-mistakes",
    added: ADDED,
    checked: CHECKED_NOV,
    title: "Errores que conviene evitar con el eVisitor, según el propio Department of Home Affairs",
    description: "Nombres mal escritos, formato de fecha equivocado, solicitar desde Australia, reservar antes de la concesión: los errores sobre los que avisa Home Affairs.",
    related: ["evisitor-pasaporte-y-datos", "evisitor-solicitud-denegada", "evisitor-solicitud-paso-a-paso", "evisitor-web-oficial"],
    blocks: [
      {
        p: "El eVisitor es gratuito y suele ser rápido, y por eso es fácil precipitarse. El Department of Home Affairs enumera los puntos que hay que revisar. Todos los que siguen proceden de su página del eVisitor.",
      },
      { h2: "Antes de enviar la solicitud" },
      {
        ul: [
          "Su nombre está escrito como figura en el pasaporte, incluido el segundo nombre, y el dispositivo no lo ha autocorregido",
          "Su pasaporte es de uno de los países que dan acceso al eVisitor",
          "Ha introducido la fecha de nacimiento en formato dd/mm/aa",
          "Ha escrito correctamente su dirección de correo electrónico",
        ],
      },
      {
        p: "Home Affairs advierte de que, si se concede un visado con información incorrecta, puede sufrir retrasos o que se le deniegue la entrada en Australia.",
      },
      {
        note: "Si su pasaporte no es de uno de los países de la lista —es el caso de la mayoría de los pasaportes hispanoamericanos—, el eVisitor no es su visado: le corresponde, por lo general, el visado de visitante (subclass 600).",
      },
      { h2: "Solicitarlo desde el lugar equivocado" },
      {
        p: "Debe estar fuera de Australia cuando presente la solicitud y también cuando se resuelva.",
      },
      { h2: "Reservar antes de la concesión" },
      {
        p: "Home Affairs indica que no organice el viaje a Australia hasta que le haya comunicado por escrito que el visado ha sido concedido.",
      },
      { h2: "Esperar un correo que no llega" },
      {
        p: "Si no recibe ningún correo en las 12 horas siguientes a la solicitud, consulte el estado en su ImmiAccount.",
      },
      { h2: "Omitir una condena" },
      {
        p: "Si tiene una condena penal en cualquier país, Home Affairs indica que solicite un visado de visitante (subclass 600). Si aun así solicita el eVisitor, debe declarar todos sus antecedentes y responder con veracidad a todas las preguntas.",
      },
      { h2: "Errores durante la estancia" },
      {
        ul: [
          "Trabajar: el eVisitor no es un visado de trabajo. No se permite el trabajo remunerado para un empleador australiano, y trabajar o tener intención de hacerlo puede llevar a la cancelación",
          "Creer que un crucero de ida y vuelta reinicia la estancia: Home Affairs indica que no",
          "Estancias largas o frecuentes: en su siguiente llegada pueden preguntarle por el motivo del viaje, y el visado puede cancelarse si se concluye que no es un visitante genuino",
          "Quedarse después de que el visado haya cesado sin tener otro visado: pasa a ser un no ciudadano en situación irregular (unlawful non-citizen) y puede ser expulsado",
        ],
      },
      { h2: "Si en realidad está solicitando la ETA" },
      {
        p: "Quien tenga un pasaporte de la ETA debe tener en cuenta tres puntos de la página de la ETA: los datos de la ETA deben coincidir exactamente con el pasaporte y Home Affairs no puede modificarlos una vez expedida; un pasaporte nuevo pone fin a la ETA y obliga a una nueva solicitud; y, tras una remisión (referral), presentar más solicitudes de ETA en la app da el mismo resultado.",
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: OFFICIAL_651 } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: OFFICIAL_601 } },
      {
        note: "Si después de presentar la solicitud cambian su teléfono, su correo, su dirección o su pasaporte, la página del eVisitor pide que lo comunique al Department of Home Affairs. Siga los pasos que se indican allí.",
      },
    ],
  },
  {
    slug: "transito-por-australia",
    enSlug: "transit",
    added: ADDED,
    checked: CHECKED_NOV,
    title: `Tránsito por Australia: la regla de las ${F.twovHours} horas y el visado de tránsito`,
    description: `Incluso en tránsito necesita un visado o un permiso. Cuándo le cubre el eVisitor, el tránsito sin visado de ${F.twovHours} horas y el visado de tránsito de ${F.transitVisaHours} horas.`,
    related: ["evisitor-pasaportes-admitidos", "liquidos-equipaje-de-mano", "aeropuertos-principales", "evisitor-o-eta"],
    blocks: [
      {
        p: "El Department of Home Affairs indica que todos los no ciudadanos necesitan un visado o un permiso para entrar en Australia, incluidos quienes se quedan poco tiempo o hacen tránsito sin salir del aeropuerto. Ese permiso puede darse de tres maneras.",
      },
      { h2: "1. Ya tiene un eVisitor (o puede obtenerlo)" },
      {
        p: "Home Affairs incluye el eVisitor, la ETA, el visado de visitante y la APEC Business Travel Card entre los visados que permiten el tránsito por Australia, y además permiten una estancia más larga. Si su viaje incluye una escala en Australia, el eVisitor la cubre.",
      },
      { h2: "2. Tránsito sin visado (TWOV)" },
      { p: "Solo puede hacer tránsito sin visado si se cumplen todas estas condiciones:" },
      {
        ul: [
          "Llega a Australia en avión",
          `Tiene un billete confirmado para salir de Australia en avión hacia un tercer país en las ${F.twovHours} horas siguientes a su llegada`,
          "Tiene un documento de viaje válido para entrar en el país de destino",
          "No necesita pasar el control de inmigración ni salir de la zona de tránsito del aeropuerto por ningún motivo antes de su vuelo de conexión",
          "Su pasaporte es de un país incluido en la lista TWOV",
        ],
      },
      {
        p: "Según nuestra comparación de las dos listas oficiales, todos los países de la lista del eVisitor figuran también en la lista TWOV, que incluye además otros países. Home Affairs indica que esta información no se aplica a las personas apátridas ni a los refugiados.",
      },
      { h2: "Cuándo tiene que pasar inmigración" },
      {
        p: "Home Affairs cita como motivos habituales para tener que pasar inmigración recoger y volver a facturar el equipaje o embarcar en el vuelo de conexión desde otra terminal, y para ello necesita un visado. Si sigue sin estar seguro de cumplir los requisitos del TWOV, aconseja plantearse solicitar un visado por si acaso.",
      },
      { h2: "3. Visado de tránsito (subclass 771)" },
      {
        ul: [
          `Para tránsitos por Australia de no más de ${F.transitVisaHours} horas`,
          "Gratuito",
          "Cada viajero necesita una solicitud propia, incluidos los bebés inscritos en el pasaporte de uno de los padres",
          "Debe estar fuera de Australia al solicitarlo y cuando se resuelva",
        ],
      },
      {
        note: "Home Affairs advierte de que, si ya tiene un visado para Australia, la concesión de un visado de tránsito probablemente pondrá fin a ese otro visado. El eVisitor ya permite el tránsito.",
      },
      { source: { label: "Department of Home Affairs — Transit visa (subclass 771)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771" } },
      { source: { label: "Department of Home Affairs — Travellers eligible to transit without a visa", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771/travellers-eligible-to-transit-without-visa" } },
      { source: { label: "Department of Home Affairs — Transit facilities at Australian airports", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771/transit-facilities-at-australian-airports" } },
    ],
    faq: [
      {
        q: "Mi escala en Sídney es de 10 horas. ¿Puedo hacer tránsito sin visado?",
        a: `No con el TWOV, que exige un vuelo de conexión confirmado en las ${F.twovHours} horas siguientes a la llegada. Necesita un visado: el eVisitor si su pasaporte da acceso a él, o un visado de tránsito (subclass 771).`,
      },
      {
        q: "¿Todos los aeropuertos tienen zona de tránsito?",
        a: "Home Affairs publica una página sobre las instalaciones de tránsito de los aeropuertos australianos. Consúltela, y consulte también a su aerolínea, para el aeropuerto que vaya a utilizar.",
      },
    ],
  },
  {
    slug: "evisitor-app-eta",
    enSlug: "australian-eta-app",
    added: ADDED,
    checked: CHECKED_NOV,
    title: "¿Hay una app para el eVisitor? No: la app Australian ETA es solo para la ETA",
    description: `El eVisitor se solicita en línea en ImmiAccount. La app Australian ETA sirve únicamente para la ETA (subclass 601) y tiene una tasa de servicio de ${F.etaFee}.`,
    related: ["evisitor-o-eta", "evisitor-solicitud-paso-a-paso", "evisitor-web-oficial", "evisitor-pasaportes-admitidos"],
    blocks: [
      {
        p: "No existe una app para el eVisitor. La guía del eVisitor de Home Affairs indica que se solicite en línea, a través de ImmiAccount, y que el estado de la solicitud se consulte allí. La app oficial que puede ver en las tiendas de aplicaciones —la Australian ETA app— es para otro visado: la Electronic Travel Authority (subclass 601).",
      },
      { h2: "Quién debe usar la app Australian ETA" },
      {
        p: `Home Affairs indica que, si tiene un pasaporte que da acceso a la ETA, debe usar la app Australian ETA para solicitarla. La ETA no tiene tasa de solicitud de visado, pero el uso de la app conlleva una tasa de servicio no reembolsable de ${F.etaFee}. Si no puede usar la app, Home Affairs señala que puede solicitar otro visado adecuado a través de ImmiAccount, y que los titulares de pasaportes europeos pueden optar al eVisitor, que no tiene tasa de solicitud.`,
      },
      { h2: "Sobre la app" },
      {
        ul: [
          "Editor: Department of Home Affairs (figura como vendedor en el App Store)",
          "Descarga gratuita en el Apple App Store y en Google Play; el App Store indica iOS 17.6 o posterior",
          "Necesita un teléfono con cámara, NFC activado, servicios de ubicación activados, una dirección de correo válida y un medio de pago para la tasa de servicio",
        ],
      },
      { h2: "Qué se hace en la app" },
      {
        ul: [
          "Escanear el pasaporte para rellenar automáticamente el nombre, la fecha de nacimiento, el número de pasaporte y otros datos",
          "Hacerse una foto en directo con el mismo teléfono; la foto se toma automáticamente cuando el óvalo de la pantalla se pone verde",
          "Responder a las preguntas, pagar la tasa de servicio y enviar la solicitud",
          "Las familias que lo solicitan desde el mismo dispositivo pueden enviar y pagar a la vez",
          "Otra persona puede ayudarle a solicitarla, pero debe estar físicamente con usted",
          "La función «Visa check» de la app muestra el estado de la solicitud",
        ],
      },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: OFFICIAL_601 } },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: OFFICIAL_651 } },
      { source: { label: "Department of Home Affairs — ETA and AIA video guides", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/eta-and-aia-video-guides" } },
      { source: { label: "App Store — AustralianETA", url: "https://apps.apple.com/au/app/australianeta/id1527982364" } },
      { source: { label: "Google Play — AustralianETA", url: "https://play.google.com/store/apps/details?id=au.gov.homeaffairs.eta" } },
      {
        note: `Con pasaporte español no necesita la app: solicite el eVisitor en ImmiAccount, donde cuesta ${F.fee}. Si su pasaporte es hispanoamericano, tampoco la ETA suele ser su vía: a la mayoría de esos pasaportes les corresponde el visado de visitante (subclass 600).`,
      },
    ],
  },
  {
    slug: "evisitor-web-oficial",
    enSlug: "official-site",
    added: ADDED,
    checked: CHECKED_NOV,
    title: "La web oficial del eVisitor es ImmiAccount: cómo reconocerla y evitar estafas",
    description: "Home Affairs define ImmiAccount como la única web oficial para solicitar visados australianos. Las direcciones oficiales y los avisos de estafa que publica.",
    related: ["evisitor-solicitud-paso-a-paso", "evisitor-coste", "evisitor-consultar-estado", "evisitor-errores-frecuentes"],
    blocks: [
      {
        p: "El Department of Home Affairs describe ImmiAccount como su portal de inmigración y «la única web oficial que debe utilizarse para solicitar un visado australiano». El formulario de solicitud del eVisitor está en ImmiAccount.",
      },
      { h2: "Las direcciones oficiales" },
      {
        ul: [
          "Información sobre el eVisitor: immi.homeaffairs.gov.au",
          "Acceso a ImmiAccount y solicitudes: online.immi.gov.au",
          "La app Australian ETA (solo para la ETA): editada por el Department of Home Affairs",
        ],
      },
      { h2: "Lo que cuesta la vía oficial" },
      {
        p: "Home Affairs lo dice expresamente: «The eVisitor is free» (el eVisitor es gratuito). En la web oficial no hay ninguna tasa de solicitud que pagar.",
      },
      { h2: "Avisos de estafa de Home Affairs" },
      {
        ul: [
          "Un correo que dice venir del Department of Home Affairs y cuya dirección no termina en .gov.au es una estafa",
          "Si alguien le pide una tasa adicional para que se expida su visado (a veces llamada «CIS charge»), no siga adelante: el Gobierno australiano no cobra tasas adicionales por expedir visados",
          "Si alguien se niega a dejarle consultar su solicitud en ImmiAccount, le está ocultando algo",
          "Una carta de concesión de un visado que no encuentra en VEVO (Visa Entitlement Verification Online) probablemente es falsa",
          "El personal de Home Affairs siempre se identifica por teléfono y nunca pide datos de tarjetas de crédito ni contraseñas",
          "Trate solo con canales oficiales del Gobierno australiano: la web de Home Affairs, los Australian Biometric Collection Centres o la Embajada, el Alto Comisionado o el Consulado de Australia en su país",
        ],
      },
      { h2: "Si otra persona lo solicita por usted" },
      {
        p: "Una cuenta ImmiAccount puede crearla el propio solicitante, un familiar que actúe en su nombre o un amigo que le ayude con la solicitud. Home Affairs indica que en Australia es ilegal que un tercero preste asistencia remunerada en materia de inmigración si no es un agente de migración registrado o un abogado australiano, y que usted sigue siendo responsable de comprobar las condiciones del visado aunque otra persona presente la solicitud.",
      },
      { source: { label: "Department of Home Affairs — How to avoid being scammed", url: "https://immi.homeaffairs.gov.au/help-support/visa-scams/what-you-need-to-know" } },
      { source: { label: "Department of Home Affairs — Visa scams", url: "https://immi.homeaffairs.gov.au/help-support/visa-scams" } },
      { source: { label: "Department of Home Affairs — Applying online in ImmiAccount", url: "https://immi.homeaffairs.gov.au/help-support/applying-online-or-on-paper/online" } },
      { source: { label: "Department of Home Affairs — Who can help with your application", url: "https://immi.homeaffairs.gov.au/help-support/who-can-help-with-your-application/overview" } },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: OFFICIAL_651 } },
      {
        note: "Este sitio es una guía independiente, no una web del Gobierno. No tramitamos solicitudes ni cobramos pagos.",
      },
    ],
  },
  {
    slug: "autorizaciones-de-viaje-comparadas",
    enSlug: "travel-authorisations-compared",
    added: ADDED,
    title: "¿Qué autorización de viaje necesita? NZeTA, eVisitor, K-ETA, ESTA y las demás, comparadas",
    description: "Nombres parecidos, normas muy distintas. Qué sistema corresponde a cada destino, cuánto cuesta cada uno y los errores que nacen de confundirlos.",
    related: ["evisitor-o-eta", "evisitor-pasaportes-admitidos", "evisitor-web-oficial"],
    blocks: [
      {
        p: "Vistas desde fuera, las autorizaciones electrónicas de viaje parecen intercambiables. No lo son. Cada país gestiona su propio sistema, con su propia lista de países admitidos, su propio precio y su propia idea de lo que es el documento: unos son visados y otros, expresamente, no.",
      },
      {
        p: "Esta página es un mapa para distinguirlos. Para Australia, el sistema es el eVisitor, y es gratuito.",
      },
      {
        note: "Hay una regla que vale en todas partes: se solicita en la web del propio gobierno, y ninguna agencia puede hacer que la resolución llegue antes. Las webs que cobran varias veces la tasa oficial rellenan por usted el mismo formulario.",
      },
      { h2: "Australia: eVisitor o ETA" },
      {
        p: `El eVisitor (subclass 651) es un visado y es gratuito. Los viajeros cuyo pasaporte no figura en la lista del eVisitor usan en su lugar la ETA (subclass 601), que cuesta ${F.etaFee} y se solicita en la app oficial. Ambos permiten visitas de hasta ${F.stayMonths} meses y son válidos ${F.validMonths} meses. Quien no puede optar a ninguno de los dos —el caso de la mayoría de los pasaportes hispanoamericanos— necesita el visado de visitante (subclass 600).`,
      },
      { h2: "Nueva Zelanda: NZeTA" },
      {
        p: "Una autorización previa al viaje para pasaportes exentos de visado, no un visado. El coste tiene dos partes: una tasa de solicitud y una tasa aparte de conservación y turismo, por eso los totales que se citan difieren de una fuente a otra.",
      },
      { h2: "Corea del Sur: K-ETA" },
      {
        p: "Atención: actualmente muchas nacionalidades están exentas temporalmente de la K-ETA, así que la primera pregunta es si la necesita, no cómo solicitarla.",
      },
      { h2: "Reino Unido: ETA" },
      {
        p: "Cubre visitas de hasta 6 meses al Reino Unido, Jersey, Guernsey y la Isla de Man. GOV.UK indica un coste de 20 £. Se solicita a través del servicio oficial.",
      },
      { source: { label: "GOV.UK — Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" } },
      { h2: "Estados Unidos: ESTA; y Canadá: eTA" },
      {
        p: "Ambos tienen sistemas comparables para viajeros exentos de visado. No indicamos aquí sus tasas, porque no pudimos confirmar las cifras actuales en las fuentes oficiales al redactar esta página, y un precio desactualizado es peor que ninguno. Consulte directamente las webs oficiales, y solo las oficiales.",
      },
      {
        ul: ["Estados Unidos: esta.cbp.dhs.gov", "Canadá: canada.ca (Immigration, Refugees and Citizenship Canada)"],
      },
      { h2: "Los errores que de verdad cuestan dinero" },
      {
        ul: [
          "Suponer que una autorización cubre un viaje por varios países. Cada destino es independiente, incluida una escala en la que salga del aeropuerto.",
          "Suponer que es un visado. Unos lo son y otros no, y la diferencia decide qué puede hacer una vez allí.",
          "Suponer que el precio es el precio. Varios sistemas añaden una tasa aparte o cobran un importe distinto según cómo se solicite.",
          "Solicitarlo a través de un intermediario de pago creyendo que es más rápido. Es el mismo formulario y la misma resolución.",
        ],
      },
      { h2: "Compruebe su propio pasaporte, no un resumen" },
      {
        p: "Las listas de países cambian, y tener dos pasaportes suele significar dos respuestas distintas. Cada uno de los sistemas anteriores publica una herramienta oficial de comprobación. Úsela con el pasaporte con el que vaya a viajar realmente.",
      },
    ],
  },
];
