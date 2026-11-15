import { FACTS as F } from "./_schema";
import type { PracticalPack } from "./_schema";

/**
 * スペイン語の入国後実用ページ（英語 data/pages-practical.ts の13ページ・2026-10-12）。
 * ⚠️ 読者＝スペイン国籍（eVisitor）。ただし中南米のスペイン語話者は eVisitor 対象外なので、
 *    実用ページではビザに中立な書き方（「su eVisitor u otro visado」）にする。
 * ⚠️ スペインは相互医療協定（RHCA）の対象外 → 医療ページの冒頭で明記。
 * ⚠️ 数値は F 経由。日付（F.surchargeBanFrom）は esDate で表記だけスペイン語にする。
 */

const CHECKED = "12 de octubre de 2026";

const MONTHS: Record<string, string> = {
  January: "enero",
  February: "febrero",
  March: "marzo",
  April: "abril",
  May: "mayo",
  June: "junio",
  July: "julio",
  August: "agosto",
  September: "septiembre",
  October: "octubre",
  November: "noviembre",
  December: "diciembre",
};

/** "1 October 2026" → "1 de octubre de 2026"（値は F のまま、表記だけ変える） */
const esDate = (d: string) =>
  d.replace(/^(\d+) (\w+) (\d+)$/, (_m, day: string, mon: string, yr: string) => `${day} de ${MONTHS[mon] ?? mon} de ${yr}`);

const SURCHARGE_FROM = esDate(F.surchargeBanFrom);

const HUB = "llegar-a-australia";

/** 2026-11-15 追加の実用ページ（主要空港・公共交通）の確認日と、表記だけスペイン語にした値 */
const CHECKED_NOV = "15 de noviembre de 2026";
const SEQ_FLAT = "50 céntimos"; // = F.seqFlatFare（"50 cent"）

export const esPractical: PracticalPack = {
  ui: { faq: "Preguntas frecuentes", source: "Fuente", related: "Relacionado" },
  articles: [
    {
      slug: HUB,
      enSlug: "arriving-in-australia",
      title: "Llegar a Australia: guía práctica para después del visado",
      description:
        "El visado le permite embarcar. Lo que viene después —SmartGate, dinero, impuestos, sanidad, conducir, emergencias—, según fuentes oficiales.",
      related: ["smartgate-australia", "dinero-y-propinas", "sanidad-para-visitantes"],
      blocks: [
        {
          p: `Su visado —el eVisitor u otro— resuelve una sola cuestión: si puede viajar a Australia y cuánto tiempo puede quedarse (con el eVisitor, hasta ${F.stayMonths} meses por entrada). No le dice qué ocurre en el aeropuerto, qué puede llevar, cómo pagar ni qué hacer si algo sale mal. De eso tratan estas páginas. Cada una está contrastada con el organismo público australiano competente y enlaza a él.`,
        },
        { h2: "En la frontera" },
        { links: ["aeropuertos-principales", "smartgate-australia", "preguntas-en-la-frontera", "bioseguridad-australia", "franquicias-aduaneras", "llevar-medicamentos", "transito-por-australia"] },
        { h2: "Dinero" },
        { links: ["dinero-y-propinas", "devolucion-impuestos-trs"] },
        { h2: "Desplazarse y estar conectado" },
        { links: ["transporte-publico", "conducir-en-australia", "telefono-y-tarjeta-sim", "enchufes-y-voltaje", "festivos-australia"] },
        { h2: "Salud y seguridad" },
        { links: ["sanidad-para-visitantes", "numeros-de-emergencia", "tabaco-vapeo-alcohol"] },
        { h2: "El vuelo de vuelta" },
        { links: ["liquidos-equipaje-de-mano", "evisitor-tres-meses-por-visita", "salir-y-volver-a-australia"] },
        {
          note: "No existe un sistema nacional de transporte público: cada ciudad tiene su propia tarjeta y sus propias tarifas. Nuestra página de transporte público trata Sídney, el sudeste de Queensland y Perth. Para Melbourne, Adelaida y otras ciudades, consulte la autoridad de transporte de la ciudad que visite.",
        },
      ],
      checked: CHECKED,
      practical: false,
    },
    {
      slug: "smartgate-australia",
      enSlug: "smartgate-australia",
      title: `SmartGate en Australia: quién puede usarlo (desde ${F.smartgateMinAge} años) y qué más necesita`,
      description: `SmartGates de llegada: desde ${F.smartgateMinAge} años y con cualquier pasaporte válido (prueba de la ABF). La tarjeta de llegada en papel sigue siendo obligatoria.`,
      related: [HUB, "liquidos-equipaje-de-mano", "llevar-medicamentos"],
      blocks: [
        {
          p: "Las SmartGates son las puertas automáticas de control de pasaportes que gestiona la Australian Border Force (ABF) en los principales aeropuertos internacionales de Australia. A la llegada, la puerta lee su pasaporte, le hace una foto y compara su cara con la del documento. Si todo coincide, imprime un ticket y usted pasa.",
        },
        { h2: "Quién puede usar las SmartGates de llegada" },
        {
          ul: [
            "Viaja con un pasaporte válido",
            `Mide al menos ${F.smartgateMinHeight}`,
            `Tiene al menos ${F.smartgateMinAge} años`,
            `Los menores de ${F.smartgateAccompanyUnder} años deben ir acompañados de un progenitor o tutor legal`,
          ],
        },
        {
          p: "Hasta hace poco hacía falta un pasaporte electrónico (con el símbolo del chip en la cubierta). La ABF está probando ahora las SmartGates de llegada para todos los pasaportes, así que un pasaporte sin chip también puede funcionar. La ABF no publica una lista de nacionalidades: los requisitos anteriores se refieren al pasaporte y al viajero, no al país que lo expidió.",
        },
        {
          note: "Su eVisitor (u otro visado) y la SmartGate son cosas distintas. El visado le permite embarcar y entrar; la SmartGate es simplemente la forma en que se comprueba su pasaporte. Usar la puerta no cambia las condiciones de su visado.",
        },
        { h2: "La Incoming Passenger Card sigue siendo obligatoria" },
        {
          p: "La mayoría de los pasajeros debe rellenar una tarjeta de llegada en papel, la Incoming Passenger Card (IPC). Se reparte en el avión o en la terminal y debe rellenarse en inglés. La ABF publica modelos traducidos —entre ellos en español, alemán, francés, neerlandés, italiano, coreano y chino— para que entienda las preguntas, pero la tarjeta que entrega se responde en inglés.",
        },
        {
          p: "A la salida, entrega su ticket de la SmartGate y su Incoming Passenger Card a un agente de la Border Force o de bioseguridad. La Australia Travel Declaration es una alternativa digital: según la ABF (a 15 de noviembre de 2026), su formulario web solo está disponible para vuelos que llegan al Aeropuerto Internacional de Western Sydney, y no debe completarse si llega a otro aeropuerto australiano. Consulte la página de la ABF para su aeropuerto de llegada.",
        },
        { source: { label: "Australian Border Force — Australia Travel Declaration", url: "https://www.abf.gov.au/entering-and-leaving-australia/australia-travel-declaration" } },
        { h2: "Idiomas de las pantallas" },
        {
          p: `Las pantallas de las SmartGates de llegada están en inglés y permiten elegir entre otros ${F.smartgateArrivalLanguages} idiomas, entre ellos el español, el alemán, el neerlandés, el francés, el italiano, el coreano y el chino simplificado y tradicional. Las SmartGates de salida están en inglés, japonés, coreano y mandarín.`,
        },
        { h2: "Al salir de Australia" },
        {
          p: "Cualquier viajero con un pasaporte válido de lectura mecánica puede usar las SmartGates de salida. No puede usarlas si viaja con alguien que necesita ayuda para seguir las instrucciones, como un bebé o un niño pequeño.",
        },
        { source: { label: "Australian Border Force (ABF) — Quién puede usar las SmartGates de llegada", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgate/arrivals/who-can-use-smartgates" } },
        { source: { label: "Australian Border Force (ABF) — SmartGates de salida", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgate/departures" } },
        { source: { label: "Australian Border Force (ABF) — Incoming Passenger Card", url: "https://www.abf.gov.au/entering-and-leaving-australia/crossing-the-border/at-the-border/incoming-passenger-card-(ipc)" } },
      ],
      faq: [
        {
          q: "¿Pueden usar la SmartGate los titulares de pasaporte español?",
          a: `La ABF no publica una lista de nacionalidades. Las SmartGates de llegada están abiertas a viajeros con pasaporte válido que tengan al menos ${F.smartgateMinAge} años y midan al menos ${F.smartgateMinHeight}, y la ABF las está probando para todos los pasaportes.`,
        },
        {
          q: "¿Necesito la Incoming Passenger Card si uso la SmartGate?",
          a: "Sí. A la salida entrega el ticket de la SmartGate junto con la Incoming Passenger Card rellenada. La tarjeta debe completarse en inglés.",
        },
        {
          q: "¿Puede mi hijo de 5 años usar la SmartGate?",
          a: `No. Las SmartGates de llegada exigen tener al menos ${F.smartgateMinAge} años. Las familias con niños más pequeños pasan por un agente.`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "liquidos-equipaje-de-mano",
      enSlug: "airport-security-liquids",
      title: `Líquidos en vuelos desde Australia: la regla de los ${F.lagsContainer} y el límite de polvos`,
      description: `En vuelos internacionales desde Australia, líquidos, aerosoles y geles van en envases de ${F.lagsContainer} en una bolsa transparente. Ciertos polvos también.`,
      related: ["devolucion-impuestos-trs", "llevar-medicamentos", HUB],
      blocks: [
        {
          p: "Australia limita los líquidos, aerosoles, geles y ciertos polvos en el equipaje de mano en los vuelos internacionales. Los límites no se aplican al equipaje facturado ni a la mayoría de los vuelos nacionales.",
        },
        { h2: "Cuándo se aplican los límites" },
        {
          ul: [
            "Cuando sale de Australia en un vuelo internacional",
            "Cuando hace tránsito por Australia de un país a otro",
            "En el tramo nacional de un vuelo que sale de una terminal internacional australiana",
            "Antes de embarcar en un vuelo hacia Australia, en su última escala antes de llegar",
          ],
        },
        { h2: "Líquidos, aerosoles y geles" },
        {
          ul: [
            `Cada envase debe ser de ${F.lagsContainer} (o 100 g) o menos; un envase mayor no se admite aunque esté solo parcialmente lleno`,
            `Todos los envases deben caber en una bolsa de plástico transparente y con cierre, cuyos cuatro lados no sumen más de ${F.lagsBagPerimeterCm} cm (por ejemplo, 20 × 20 cm)`,
            "Una bolsa por pasajero; puede llevar las bolsas de las personas a su cargo, incluidos los niños",
            "Los aerosoles deben llevar tapa o un dispositivo de bloqueo",
          ],
        },
        {
          p: "Las cremas para untar y los alimentos blandos cuentan como líquidos o geles. La lista oficial incluye Vegemite, mantequilla de cacahuete, miel y yogur: recuerdos que sorprenden a más de uno en el control de seguridad.",
        },
        { h2: "Polvos" },
        {
          p: `Los polvos inorgánicos —como la sal, los exfoliantes de sal, la arena y algunos polvos de talco— deben ir en envases de ${F.powderLimit} o menos, y el total por persona no puede superar ${F.powderLimit}. Los polvos orgánicos, como la leche de fórmula para bebés, el café, las proteínas en polvo, la harina, las especias y el azúcar, no tienen límite. Es posible que le pidan presentar los polvos por separado en el control.`,
        },
        { h2: "Excepciones" },
        {
          ul: [
            "Cantidades razonables de productos para bebés",
            "Medicamentos, con o sin receta, que necesite durante el vuelo; puede que tenga que mostrar un justificante, como una carta del médico",
            "Dispositivos y equipos médicos",
          ],
        },
        { h2: "Duty free" },
        {
          p: "Los líquidos comprados en el duty free del aeropuerto deben permanecer en la bolsa precintada a prueba de manipulaciones en la que se los entregaron, junto con el comprobante de compra.",
        },
        { source: { label: "Department of Home Affairs (TravelSECURE) — Qué puede y qué no puede llevar", url: "https://www.homeaffairs.gov.au/about-us/what-we-do/travelsecure/security-screening-at-airports/what-you-can-and-cant-bring" } },
      ],
      faq: [
        {
          q: "¿Se aplican los límites de líquidos en los vuelos nacionales de Australia?",
          a: "En la mayoría de los vuelos nacionales, no. Sí se aplican en el tramo nacional de un vuelo que sale de una terminal internacional.",
        },
        {
          q: "¿Puedo llevar un tarro de Vegemite en el equipaje de mano?",
          a: `Solo en un envase de ${F.lagsContainer} o menos dentro de su bolsa de líquidos. Los tarros más grandes van en el equipaje facturado.`,
        },
        {
          q: "¿Tiene límite la leche de fórmula para bebés?",
          a: "La leche de fórmula en polvo es un polvo orgánico y no tiene límite. Las cantidades razonables de productos para bebés están exentas de los límites de líquidos.",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "dinero-y-propinas",
      enSlug: "money-and-tipping",
      title: "Dinero en Australia: efectivo, recargos con tarjeta, GST y propinas",
      description: `Los precios incluyen el ${F.gstPercent} % de GST, los recargos con tarjeta están prohibidos y la propina es opcional. El efectivo de ${F.cashReportThreshold} o más se declara.`,
      related: ["devolucion-impuestos-trs", "telefono-y-tarjeta-sim", "festivos-australia"],
      blocks: [
        {
          p: "Australia usa el dólar australiano (AUD). Conviene conocer algunas normas antes de pagar nada, y una de ellas ha cambiado hace muy poco.",
        },
        { h2: "El precio de la etiqueta ya incluye el impuesto" },
        {
          p: `El impuesto sobre bienes y servicios (GST, goods and services tax) es del ${F.gstPercent} %, y los comercios deben mostrar un precio total que lo incluya. Lo que ve es lo que paga en caja.`,
        },
        { h2: "Se acabaron los recargos por pagar con tarjeta" },
        {
          p: `Desde el ${SURCHARGE_FROM}, los comercios ya no pueden añadir un recargo por los pagos con tarjetas Visa, Mastercard, American Express o eftpos, ya sean de crédito, de débito o prepago. Antes de esa fecha, muchas cafeterías y taxis añadían un porcentaje al pagar con tarjeta. Si ahora le cobran un recargo por la tarjeta, vale la pena reclamarlo.`,
        },
        {
          note: "Los recargos de fin de semana y de festivo son otra cosa y siguen estando permitidos: algunas cafeterías y restaurantes los aplican los domingos y festivos. Su propio banco también puede cobrarle una comisión por operaciones en divisa extranjera; eso es un asunto entre usted y su banco.",
        },
        { h2: "Propinas" },
        {
          p: "Tourism Australia describe la propina como opcional y no esperada en la mayoría de los sitios. En restaurantes de categoría es habitual dejar alrededor de un 10 % si el servicio ha sido bueno. No ofenderá a nadie por no dejar propina en una cafetería o un taxi.",
        },
        { h2: `El efectivo de ${F.cashReportThreshold} o más debe declararse` },
        {
          p: `No hay límite a la cantidad de dinero que puede entrar en Australia o sacar del país. Pero si lleva efectivo e instrumentos como cheques de viaje, cheques u órdenes de pago —en cualquier divisa— por un valor conjunto de ${F.cashReportThreshold} o más, debe declararlo al llegar y al salir.`,
        },
        {
          ul: [
            "Declárelo en línea con el formulario de AUSTRAC antes de pasar la aduana y guarde el justificante",
            "Si no puede usar el formulario en línea, un agente de la Border Force o de policía puede facilitarle uno en papel",
            "La pregunta 5 de la Incoming Passenger Card pregunta lo mismo",
            "Declarar es gratuito. Repartir el efectivo entre varios viajeros para quedar por debajo del umbral es ilegal",
          ],
        },
        { source: { label: "AUSTRAC — Transportar dinero a través de fronteras internacionales", url: "https://www.austrac.gov.au/individuals/moving-money-across-international-borders" } },
        { source: { label: "ACCC — Recargos por pago con tarjeta", url: "https://www.accc.gov.au/consumers/pricing/card-surcharges" } },
        { source: { label: "Tourism Australia — Datos básicos sobre Australia", url: "https://www.australia.com/en/facts-and-planning/about-australia/key-facts-about-australia.html" } },
      ],
      faq: [
        {
          q: `¿Es ilegal entrar en Australia con más de ${F.cashReportThreshold}?`,
          a: `No. No hay límite. Las cantidades de ${F.cashReportThreshold} o más en efectivo e instrumentos similares deben declararse, nada más.`,
        },
        {
          q: "¿Pueden los comercios seguir cobrando más por pagar con tarjeta?",
          a: `No por las tarjetas Visa, Mastercard, American Express o eftpos desde el ${SURCHARGE_FROM}. Los recargos de fin de semana y de festivo son otra cuestión y siguen estando permitidos.`,
        },
        {
          q: "¿Hay que dejar propina en Australia?",
          a: "Es opcional. En restaurantes de categoría es habitual alrededor de un 10 %; en los demás sitios no se espera.",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "devolucion-impuestos-trs",
      enSlug: "tourist-refund-scheme",
      title: `Tourist Refund Scheme (TRS): recuperar el GST al salir de Australia (desde ${F.trsMinSpend})`,
      description: `Gaste ${F.trsMinSpend} o más en un mismo comercio en los ${F.trsDays} días previos a la salida, lleve los artículos y reclame al menos ${F.trsCutoffMinutes} min antes del vuelo.`,
      related: ["dinero-y-propinas", "liquidos-equipaje-de-mano", HUB],
      blocks: [
        {
          p: "Los visitantes pueden recuperar el GST —y, en el vino, el impuesto de compensación del vino (WET, wine equalisation tax)— de los artículos que compran en Australia y se llevan al salir. Lo gestiona la Australian Border Force en el aeropuerto el día de su salida.",
        },
        { h2: "Los requisitos" },
        {
          ul: [
            `Ha gastado ${F.trsMinSpend} o más (GST incluido) en un mismo comercio, es decir, con un mismo ABN (número de empresa australiano). Pueden ser varias facturas del mismo comercio`,
            `Compró los artículos en los ${F.trsDays} días anteriores a su salida de Australia`,
            "Tiene las facturas originales con impuestos (tax invoices). Las facturas de AUD 1,000 o más deben llevar su nombre",
            "Lleva los artículos consigo al salir: no pueden enviarse por correo ni por transporte de mercancías",
          ],
        },
        { h2: "La reclamación en el aeropuerto" },
        {
          p: `Presente su pasaporte, la tarjeta de embarque, los artículos y las facturas originales en el mostrador del TRS el día de su salida, al menos ${F.trsCutoffMinutes} minutos antes de la hora prevista de salida. La ABF aconseja llegar ${F.trsArriveMinutes} minutos antes de la salida, porque en horas punta las colas pueden durar eso.`,
        },
        {
          ul: [
            "No se puede reclamar en línea, antes del día de salida ni en un aeropuerto nacional",
            "No hay devolución en efectivo: el reembolso se hace a una tarjeta de crédito (Amex, Diners, JCB, Mastercard, UnionPay o Visa) o a una cuenta bancaria australiana, normalmente en un plazo de 60 días",
            "La app oficial del TRS guarda sus datos y facturas en un código QR para agilizar la cola; no sustituye la reclamación en persona",
          ],
        },
        { h2: "Lo que no se puede reclamar" },
        {
          ul: [
            "Servicios: alojamiento, excursiones, taxis, alquiler de coches",
            "Artículos consumidos total o parcialmente en Australia, incluidos comida, bebida, perfume y suplementos",
            "Bebidas alcohólicas que no sean vino de menos de 22 % de alcohol, y el tabaco",
            "Tarjetas regalo y vales, y los artículos que envíe a casa por correo o transporte",
          ],
        },
        { source: { label: "Australian Border Force (ABF) — Tourist Refund Scheme", url: "https://www.abf.gov.au/entering-and-leaving-australia/tourist-refund-scheme" } },
        { source: { label: "Australian Border Force (ABF) — Cómo hacer la reclamación", url: "https://www.abf.gov.au/entering-and-leaving-australia/tourist-refund-scheme/making-the-claim" } },
      ],
      faq: [
        {
          q: `¿Puedo sumar tiques de distintas tiendas para llegar a ${F.trsMinSpend}?`,
          a: `No. Los ${F.trsMinSpend} deben gastarse en un mismo comercio (el mismo ABN), aunque pueden repartirse en varias facturas de ese comercio.`,
        },
        {
          q: "¿Puedo cobrar la devolución en efectivo?",
          a: "No. El reembolso se paga en una tarjeta de crédito o en una cuenta bancaria australiana.",
        },
        {
          q: "¿Hasta cuándo puedo reclamar?",
          a: `Hasta ${F.trsCutoffMinutes} minutos antes de la hora prevista de salida, como mínimo. La ABF recomienda llegar al mostrador del TRS ${F.trsArriveMinutes} minutos antes de la salida.`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "sanidad-para-visitantes",
      enSlug: "healthcare-for-visitors",
      title: "Sanidad en Australia para visitantes: España no tiene convenio con Medicare",
      description: `España no tiene convenio sanitario recíproco con Australia: sin seguro, usted paga toda la atención. Solo ${F.rhcaCountries} países lo tienen.`,
      related: ["llevar-medicamentos", "numeros-de-emergencia", HUB],
      blocks: [
        {
          note: "España no tiene un Reciprocal Health Care Agreement (RHCA, convenio sanitario recíproco) con Australia. Los visitantes españoles pagan el coste íntegro de cualquier gasto de hospital, ambulancia o médico, salvo que tengan un seguro.",
        },
        {
          p: "El sistema público de salud de Australia, Medicare, es para residentes. Los visitantes pagan su propia atención médica, salvo que su país tenga un Reciprocal Health Care Agreement (RHCA) con Australia. El Department of Home Affairs lo dice claramente en la página del eVisitor: usted es personalmente responsable de todos sus gastos sanitarios en Australia, y recomienda contratar un seguro médico.",
        },
        { h2: `Los ${F.rhcaCountries} países con convenio` },
        {
          p: "Bélgica, Finlandia, Irlanda, Italia, Malta, los Países Bajos, Nueva Zelanda, Noruega, Eslovenia, Suecia y el Reino Unido.",
        },
        {
          note: "Alemania, Francia, España, Austria, Suiza, Corea del Sur, China y Taiwán no tienen convenio. Los visitantes de esos países pagan el coste íntegro de cualquier gasto de hospital, ambulancia o médico, salvo que estén asegurados.",
        },
        { h2: "Qué cubre el convenio" },
        {
          ul: [
            "Atención médicamente necesaria fuera del hospital (por ejemplo, una consulta con un médico de cabecera o GP)",
            "Atención médicamente necesaria como paciente público en un hospital público, con o sin ingreso",
            "Algunos medicamentos con receta del PBS (Pharmaceutical Benefits Scheme, el sistema de medicamentos subvencionados) a la tarifa general",
          ],
        },
        {
          p: "Los visitantes de Irlanda (y de Nueva Zelanda) solo tienen cubierta la atención en hospitales públicos y los medicamentos del PBS, no las consultas con el médico de cabecera. No se inscriben en Medicare y deben pedir al personal del hospital o de la farmacia que los atienda conforme al convenio.",
        },
        { h2: "Qué no cubre" },
        {
          ul: [
            "La atención como paciente privado, en un hospital público o privado",
            "Viajar a Australia con el fin de recibir tratamiento médico",
            "Todo lo que no sea médicamente necesario",
          ],
        },
        { h2: "Cuánto dura la cobertura" },
        {
          ul: [
            "Italia y Malta: hasta 6 meses desde la llegada, o hasta que caduque el visado si es antes",
            "Reino Unido e Irlanda: hasta que caduque el visado",
            "Países Bajos, Bélgica, Noruega y Eslovenia: hasta que caduque su seguro nacional, su Tarjeta Sanitaria Europea o su visado, lo que ocurra primero",
          ],
        },
        { h2: "Inscribirse en Medicare" },
        {
          p: "Los visitantes de países con convenio (salvo Irlanda y Nueva Zelanda) se inscriben en Medicare y reciben una tarjeta Medicare amarilla. Necesitan el pasaporte, el visado y un justificante de su cobertura en su país, normalmente la Tarjeta Sanitaria Europea (o la GHIC para los residentes en el Reino Unido) o la tarjeta del seguro nacional de salud. Si solo están en Australia poco tiempo y no necesitan tratamiento, no hace falta inscribirse. La atención recibida antes de la inscripción puede quedar cubierta una vez inscritos.",
        },
        { source: { label: "Services Australia — Reciprocal Health Care Agreements (convenios sanitarios recíprocos)", url: "https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements" } },
        { source: { label: "Services Australia — Visitar Australia", url: "https://www.servicesaustralia.gov.au/visiting-australia" } },
        { source: { label: "Department of Home Affairs — eVisitor (subclass 651): seguro médico", url: F.officialUrl } },
      ],
      faq: [
        {
          q: "¿Tiene España un convenio sanitario con Australia?",
          a: "No. España, Alemania y Francia no tienen un Reciprocal Health Care Agreement con Australia. Los visitantes de esos países deberían contratar un seguro médico de viaje.",
        },
        {
          q: "¿Es obligatorio el seguro médico para el eVisitor?",
          a: "El Department of Home Affairs lo recomienda y señala que usted es personalmente responsable de todos sus gastos sanitarios en Australia. Compruebe las condiciones de su propio visado en VEVO o en la carta de concesión.",
        },
        {
          q: "¿Qué países tienen convenio sanitario con Australia?",
          a: `${F.rhcaCountries} países: Bélgica, Finlandia, Irlanda, Italia, Malta, los Países Bajos, Nueva Zelanda, Noruega, Eslovenia, Suecia y el Reino Unido. España no está entre ellos.`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "llevar-medicamentos",
      enSlug: "bringing-medicines",
      title: `Llevar medicamentos a Australia: la regla de los ${F.medicineSupplyMonths} meses`,
      description: `Hasta ${F.medicineSupplyMonths} meses de tratamiento para uso propio, en su envase original, con receta o carta del médico, y declarados. Algunos están prohibidos.`,
      related: ["sanidad-para-visitantes", "liquidos-equipaje-de-mano", "smartgate-australia"],
      blocks: [
        {
          p: "Australia permite a los viajeros llevar medicamentos para uso propio sin permiso gracias a la «exención del viajero» (traveller's exemption), siempre que cumplan sus condiciones. La exención cubre también a un familiar directo que viaje con usted.",
        },
        { h2: "Las condiciones" },
        {
          ul: [
            `No lleve más de ${F.medicineSupplyMonths} meses de tratamiento`,
            "Conserve los medicamentos en su envase original con la etiqueta de la farmacia, si es posible",
            "Lleve la receta o una carta de su médico que indique el nombre del medicamento y la dosis",
            "Declare toda la medicación a la Australian Border Force al llegar",
            "No dé ni venda sus medicamentos a nadie, y llévese lo que le sobre al salir",
          ],
        },
        { h2: "Analgésicos fuertes, medicación para el TDAH y somníferos" },
        {
          p: "La Office of Drug Control indica que los medicamentos con receta como la morfina, la oxicodona, la metadona, el metilfenidato, el Adderall y las benzodiacepinas están cubiertos por la exención del viajero, con receta o carta del médico. Cualquier medicamento que contenga codeína, sea cual sea su dosis, también necesita receta o carta del médico.",
        },
        { h2: "Medicamentos que no puede llevar" },
        {
          ul: [
            "Abortivos como la mifepristona (RU486)",
            "Yohimbe (yohimbina)",
            "Aminofenazona, aminopirina, dipirona (metamizol)",
            "Amigdalina (laetrile)",
          ],
        },
        { h2: "Si se le acaban" },
        {
          p: "Acuda a un médico australiano (un GP, médico de cabecera) para obtener una receta australiana. Que le envíen medicamentos desde casa está restringido: los medicamentos que requieren receta necesitan una receta australiana válida, el paquete no puede superar los 3 meses de tratamiento y los medicamentos controlados y los vapeadores no pueden enviarse en ningún caso.",
        },
        { source: { label: "Therapeutic Goods Administration (TGA) — Entrar en Australia con medicamentos", url: "https://www.tga.gov.au/resources/consumer-information-and-resources/travelling-medicines-and-medical-devices/entering-australia" } },
        { source: { label: "Office of Drug Control — Viajar a Australia con medicamentos", url: "https://www.odc.gov.au/travellers/travelling-or-australia-medicines-and-medical-devices" } },
        { source: { label: "TGA — Personal Importation Scheme (importación para uso personal)", url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/access-pathways/personal-importation-scheme" } },
      ],
      faq: [
        {
          q: "¿Cuánta medicación puedo llevar a Australia?",
          a: `Hasta ${F.medicineSupplyMonths} meses de tratamiento para uso propio, o para un familiar directo que viaje con usted.`,
        },
        {
          q: "¿Puedo llevar mi medicación para el TDAH?",
          a: "Medicamentos como el metilfenidato y el Adderall están cubiertos por la exención del viajero, siempre que lleve receta o carta del médico y los declare.",
        },
        {
          q: "¿Puede mi familia enviarme mis medicamentos a Australia?",
          a: "Solo en condiciones estrictas. Los medicamentos que requieren receta necesitan una receta australiana válida, y los medicamentos controlados no pueden enviarse.",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "tabaco-vapeo-alcohol",
      enSlug: "smoking-vaping-and-alcohol",
      title: "Tabaco, vapeo y alcohol en Australia: las normas que se pasan por alto",
      description: `Los vapeadores solo se venden en farmacias; puede traer ${F.vapeDevices} para su propio tratamiento. Se bebe desde los ${F.legalAge} años y no se fuma en lugares cerrados.`,
      related: ["llevar-medicamentos", "conducir-en-australia", "numeros-de-emergencia"],
      blocks: [
        {
          p: "Australia regula los vapeadores como productos terapéuticos, no como productos de consumo. Eso sorprende a muchos visitantes, sobre todo a quienes están acostumbrados a comprarlos en cualquier tienda en su país.",
        },
        { h2: "Vapeadores" },
        {
          ul: [
            "Los vapeadores solo los venden las farmacias participantes. Los estancos, las tiendas de vapeo y las tiendas de conveniencia no pueden vender ningún vapeador, con o sin nicotina",
            `Los adultos de ${F.legalAge} años o más pueden comprar en farmacia, sin receta, vapeadores con nicotina de 20 mg/mL o menos donde lo permita la ley del estado: con documento de identidad, un límite de un mes de suministro y solo sabores menta, mentol o tabaco`,
            "No puede encargar vapeadores en webs extranjeras para uso personal, ni siquiera con receta",
            "Algunos estados prohíben poseer vapeadores con nicotina sin receta",
          ],
        },
        { h2: "Viajar con vapeadores" },
        {
          p: `Los viajeros que llegan por vía aérea o marítima pueden llevar hasta ${F.vapeDevices} vapeadores, ${F.vapeAccessories} accesorios (cartuchos, cápsulas o pods) y ${F.vapeLiquid} de líquido. Según la redacción de la TGA, deben destinarse al tratamiento del propio viajero o de una persona a su cargo que viaje en el mismo vuelo o barco. Los agentes de la Border Force pueden confiscar los artículos que sospechen que son importaciones ilegales.`,
        },
        { h2: "Tabaco" },
        {
          p: `Es ilegal vender tabaco a menores de ${F.legalAge} años. Está prohibido fumar en los lugares públicos cerrados de todos los estados y territorios, entre ellos el transporte público, las oficinas, los centros comerciales, los cines y los aeropuertos. Las normas para espacios al aire libre como terrazas, playas y parques infantiles varían según el estado. El tabaco libre de impuestos que puede traer está limitado.`,
        },
        { h2: "Alcohol" },
        {
          ul: [
            `Debe tener ${F.legalAge} años o más para comprar alcohol o beber en un local con licencia`,
            "Dónde se puede beber al aire libre lo deciden los estados y los ayuntamientos: muchos espacios públicos son zonas sin alcohol",
            `El límite de alcohol al volante es una concentración de alcohol en sangre de ${F.bacLimit}, y cero para los conductores en prácticas y noveles`,
          ],
        },
        { source: { label: "TGA — Vapeadores: información para particulares", url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/therapeutic-vaping-goods/vaping-hub/vapes-information-individuals-and-patients" } },
        { source: { label: "Department of Health — Leyes sobre tabaco en Australia", url: "https://www.health.gov.au/topics/smoking-vaping-and-tobacco/about-smoking/laws-in-australia" } },
        { source: { label: "Department of Health — Leyes sobre alcohol en Australia", url: "https://www.health.gov.au/topics/alcohol/about-alcohol/alcohol-laws-in-australia" } },
      ],
      faq: [
        {
          q: "¿Puedo comprar un vapeador en una tienda de conveniencia en Australia?",
          a: "No. Los vapeadores solo pueden venderlos las farmacias participantes. Para cualquier otro comercio es ilegal vender vapeadores.",
        },
        {
          q: "¿Cuántos vapeadores puedo llevar a Australia?",
          a: `Hasta ${F.vapeDevices} vapeadores, ${F.vapeAccessories} accesorios y ${F.vapeLiquid} de líquido, para su propio tratamiento o el de una persona a su cargo que viaje con usted.`,
        },
        {
          q: "¿Cuál es la edad legal para beber alcohol en Australia?",
          a: `${F.legalAge} años. Debe tener ${F.legalAge} años o más para comprar alcohol o beber en un local con licencia.`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "numeros-de-emergencia",
      enSlug: "emergency-and-safety",
      title: `Números de emergencia en Australia: ${F.emergency}, ${F.emergencyMobile} y por qué el 911 no funciona`,
      description: `Llame al ${F.emergency} (policía, bomberos, ambulancia); el ${F.emergencyMobile} funciona desde móviles. El 911 no se desvía. Policía no urgente: ${F.policeAssistance}.`,
      related: ["sanidad-para-visitantes", "telefono-y-tarjeta-sim", "conducir-en-australia"],
      blocks: [
        {
          p: `Triple Zero (${F.emergency}) es el número de emergencias de Australia para policía, bomberos y ambulancia en situaciones de riesgo para la vida o urgentes. Las llamadas son gratuitas desde un fijo, un móvil, un teléfono público o un teléfono por satélite.`,
        },
        { h2: "Los números" },
        {
          ul: [
            `${F.emergency}: policía, bomberos, ambulancia`,
            `${F.emergencyMobile}: solo funciona desde teléfonos móviles y conecta con el mismo servicio del ${F.emergency}. No tiene prioridad sobre el ${F.emergency}`,
            `${F.policeAssistance}: Police Assistance Line, para asuntos policiales no urgentes`,
            `${F.ses}: State Emergency Service, para ayuda en inundaciones, tormentas y tsunamis sin riesgo para la vida`,
            `No marque el 911: las llamadas al 911 no se desvían al ${F.emergency}`,
          ],
        },
        { h2: "Si no habla inglés" },
        {
          p: `Llame al ${F.emergency}, diga «police», «fire» o «ambulance» y no cuelgue. Se le buscará un intérprete.`,
        },
        { h2: "Teléfonos móviles y cobertura" },
        {
          ul: [
            `Si su red no tiene señal, el teléfono usa automáticamente otra red disponible para llamar al ${F.emergency}, incluso sin tarjeta SIM`,
            `Si no hay cobertura de ninguna red, no podrá llamar al ${F.emergency} desde el móvil. Grandes zonas del interior de Australia (el outback) no tienen cobertura`,
            `No se puede contactar con el ${F.emergency} por mensaje de texto`,
            "Si la llamada no conecta en unos 5 segundos, cuelgue y vuelva a intentarlo",
          ],
        },
        {
          note: `Las redes 3G de Australia se han apagado. Los teléfonos 3G y algunos teléfonos 4G antiguos —sobre todo los comprados en el extranjero— pueden no ser capaces de llamar al ${F.emergency}. El regulador aconseja no comprobarlo llamando al ${F.emergency}; pregunte a su operador.`,
        },
        { source: { label: "Department of Infrastructure — Triple Zero (000)", url: "https://www.infrastructure.gov.au/media-communications/phone/triple-zero" } },
        { source: { label: "ACMA — Apagado de la red 3G", url: "https://www.acma.gov.au/3g-network-switch" } },
      ],
      faq: [
        {
          q: "¿Funciona el 911 en Australia?",
          a: `No. Las llamadas al 911 no se desvían. Marque el ${F.emergency}, o el ${F.emergencyMobile} desde un móvil.`,
        },
        {
          q: `¿Puedo llamar al ${F.emergency} sin una tarjeta SIM australiana?`,
          a: `Sí, siempre que haya cobertura de alguna red móvil. Su teléfono se conecta a cualquier red disponible para el ${F.emergency}, incluso sin una SIM activa.`,
        },
        {
          q: `¿Puedo enviar un SMS al ${F.emergency}?`,
          a: `No. No se puede contactar con el ${F.emergency} por SMS.`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "telefono-y-tarjeta-sim",
      enSlug: "phones-and-sim-cards",
      title: "Teléfono y tarjeta SIM en Australia: verificación de identidad y fin del 3G",
      description: "Para activar una SIM prepago australiana hay que verificar la identidad; vale un pasaporte a su nombre. Compruebe que su móvil funciona en 4G/5G.",
      related: ["numeros-de-emergencia", "enchufes-y-voltaje", "dinero-y-propinas"],
      blocks: [
        {
          p: "Puede usar el roaming de su tarifa o comprar una SIM prepago australiana. Si compra una SIM local, hay dos cosas que cambian respecto a muchos otros países: la verificación de identidad y el fin del 3G.",
        },
        { h2: "La verificación de identidad" },
        {
          p: "Por ley, los operadores deben recoger su nombre, fecha de nacimiento y dirección, y verificar su identidad al activar un servicio móvil prepago. Un pasaporte expedido a su nombre es uno de los documentos aceptados; no tiene que ser australiano. El documento no puede estar caducado.",
        },
        {
          p: "Los operadores también pueden verificar la identidad por otros medios, como una comprobación de documentos oficiales, una cuenta existente, una transacción con tarjeta o un servicio acreditado de Digital ID. Cómo lo hace cada operador —en tienda o en línea— depende del propio operador.",
        },
        { h2: "Compruebe antes su teléfono" },
        {
          p: "Las redes 3G de Australia se han apagado. Los teléfonos solo 3G ya no funcionan en absoluto, y algunos teléfonos 4G que dependen del 3G para las llamadas no pueden hacer llamadas de voz ni contactar con los servicios de emergencia. Los teléfonos 4G antiguos y los comprados en el extranjero son los que más riesgo tienen. Los operadores no deben conectar un teléfono que identifiquen como incapaz de llamar al Triple Zero (000).",
        },
        {
          ul: [
            "Pida al operador que confirme que su modelo funciona en su red 4G/5G y admite llamadas VoLTE antes de pagar",
            "No compruebe las llamadas de emergencia marcando el 000",
          ],
        },
        {
          note: "El regulador (ACMA) está revisando en 2026 las normas de identificación para el prepago. Lo básico —una verificación de identidad en la que se acepta el pasaporte— se aplica desde hace años.",
        },
        { source: { label: "ACMA — Verificación de identidad para móviles prepago", url: "https://www.acma.gov.au/id-checks-prepaid-mobiles" } },
        { source: { label: "Federal Register of Legislation — Identity Checks for Prepaid Mobile Carriage Services Determination 2017", url: "https://www.legislation.gov.au/F2017L00399/latest/text" } },
        { source: { label: "ACMA — Garantizar que los móviles puedan llamar al 000 tras el apagado del 3G", url: "https://www.acma.gov.au/ensuring-mobiles-can-reach-000-after-3g-shutdown" } },
      ],
      faq: [
        {
          q: "¿Puedo comprar una SIM australiana con un pasaporte español?",
          a: "Sí. Un pasaporte expedido a su nombre es un documento de identidad aceptado para activar un servicio prepago. No puede estar caducado.",
        },
        {
          q: "¿Funcionará mi teléfono de España en Australia?",
          a: "La mayoría de los teléfonos recientes funcionan, pero las redes 3G han cerrado. Los teléfonos 4G antiguos y algunos comprados en el extranjero pueden no hacer llamadas ni llegar al 000: pida al operador que compruebe su modelo.",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "enchufes-y-voltaje",
      enSlug: "power-plugs",
      title: `Enchufes en Australia: el tipo I y ${F.voltage} ${F.frequency}`,
      description: `Australia usa un enchufe de dos clavijas planas en V invertida (tipo I) y ${F.voltage}, ${F.frequency}. Mire la etiqueta del cargador antes de enchufarlo.`,
      related: ["telefono-y-tarjeta-sim", "dinero-y-propinas", HUB],
      blocks: [
        {
          p: "Las tomas australianas admiten un enchufe con dos clavijas metálicas planas que forman una V invertida, a veces con una tercera clavija en el centro. Tourism Australia lo llama enchufe «Type 1»; a nivel internacional suele denominarse tipo I. Los enchufes europeos de clavijas redondas —como los españoles—, así como los coreanos y chinos, no encajan sin adaptador.",
        },
        { h2: "Voltaje" },
        {
          p: `La corriente es de ${F.voltage}, ${F.frequency} (Tourism Australia también indica el rango 220–240 V). La mayoría de los cargadores de móvil y portátil admiten 100–240 V y funcionan solo con un adaptador de enchufe. Mire la etiqueta: si no cubre 230 V, necesita un transformador de voltaje, no solo un adaptador.`,
        },
        { h2: "Qué llevar" },
        {
          ul: [
            "Un adaptador de enchufe tipo I o un adaptador universal",
            "Un transformador solo para los aparatos que no admitan 230 V",
          ],
        },
        { source: { label: "Tourism Australia — Consejos útiles para viajar a Australia", url: "https://www.australia.com/en-us/facts-and-planning/about-australia/useful-tips.html" } },
        { source: { label: "Tourism Australia — Lista definitiva de equipaje para Australia", url: "https://www.australia.com/en/facts-and-planning/planning-tools/ultimate-australia-packing-list.html" } },
      ],
      faq: [
        {
          q: "¿Necesito un adaptador para Australia?",
          a: "Sí, si sus enchufes no son del tipo australiano, con dos clavijas planas en V invertida. Los enchufes europeos de clavijas redondas, como los españoles, necesitan adaptador.",
        },
        {
          q: "¿Necesito un transformador de voltaje?",
          a: `Solo para los aparatos que no admitan ${F.voltage}. Los cargadores con la indicación 100–240 V funcionan solo con un adaptador.`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "festivos-australia",
      enSlug: "public-holidays",
      title: "Festivos en Australia 2026–2027: fechas por estado",
      description: "Cada estado y territorio fija sus propios festivos. Las fechas comunes a todo el país, las que varían y lo que suponen para su viaje.",
      related: ["dinero-y-propinas", "conducir-en-australia", HUB],
      blocks: [
        {
          p: "No existe una lista nacional única. Cada estado y territorio fija sus propios festivos y decide si añade un día sustitutorio cuando uno cae en fin de semana. Las fechas siguientes proceden del Fair Work Ombudsman, el organismo federal que regula las relaciones laborales.",
        },
        { h2: "Festivos que quedan en 2026" },
        {
          ul: [
            "Viernes 25 de diciembre: Navidad (Christmas Day), en todo el país",
            "Sábado 26 de diciembre: Boxing Day (en Australia Meridional, festivo del Proclamation Day)",
            "Lunes 28 de diciembre: festivo adicional por el Boxing Day en la mayoría de los estados y territorios; en Tasmania, el propio Boxing Day se celebra ese lunes",
          ],
        },
        { h2: "2027: las fechas comunes a todo el país" },
        {
          ul: [
            "Viernes 1 de enero: Año Nuevo (New Year's Day)",
            "Martes 26 de enero: Día de Australia (Australia Day)",
            "Viernes 26 de marzo: Viernes Santo (Good Friday)",
            "Lunes 29 de marzo: Lunes de Pascua (Easter Monday)",
            "Sábado 25 de diciembre: Navidad, con el lunes 27 de diciembre como festivo adicional",
          ],
        },
        { h2: "2027: donde los estados difieren" },
        {
          ul: [
            "El Sábado Santo (27 de marzo) y el Domingo de Pascua (28 de marzo) no figuran para Tasmania; Australia Occidental no incluye el Sábado Santo",
            "El Anzac Day cae en domingo 25 de abril. Nueva Gales del Sur (NSW) y Australia Occidental (WA) añaden el lunes 26 de abril; el ACT, el Territorio del Norte y Queensland lo celebran el lunes 26 de abril; Australia Meridional, Tasmania y Victoria mantienen solo el domingo",
            "El cumpleaños del rey (King's Birthday) es el lunes 14 de junio en la mayoría de los estados, pero el lunes 27 de septiembre en Australia Occidental y el lunes 4 de octubre en Queensland",
            "El Día del Trabajo (Labour Day) va de marzo (Australia Occidental, Victoria, Tasmania) a mayo (Queensland, Territorio del Norte) y octubre (NSW, ACT, Australia Meridional)",
            "El Boxing Day cae en domingo 26 de diciembre, con el martes 28 de diciembre como día adicional en la mayoría de los lugares; en Tasmania, el Boxing Day se celebra el martes 28 de diciembre",
          ],
        },
        {
          note: "Las fechas de 2027 son las publicadas por adelantado por el Fair Work Ombudsman. El festivo de Victoria del viernes anterior a la AFL Grand Final aún no está fijado. Algunos festivos regionales o solo municipales (por ejemplo, los show days) no figuran aquí.",
        },
        { h2: "Qué supone para un visitante" },
        {
          p: "Los bancos y las oficinas públicas cierran. En las ciudades, muchas tiendas, cafeterías y restaurantes siguen abiertos, a veces con un recargo de festivo en la cuenta. El transporte público suele funcionar con horario reducido. Los puentes y las vacaciones de verano de Navidad a enero son temporada alta del turismo interno, así que reserve alojamiento y coche de alquiler con antelación.",
        },
        { source: { label: "Fair Work Ombudsman — Festivos de 2026", url: "https://www.fairwork.gov.au/employment-conditions/public-holidays/2026-public-holidays" } },
        { source: { label: "Fair Work Ombudsman — Festivos de 2027", url: "https://www.fairwork.gov.au/employment-conditions/public-holidays/2027-public-holidays" } },
      ],
      faq: [
        {
          q: "¿Se celebra el King's Birthday el mismo día en toda Australia?",
          a: "No. La mayoría de los estados lo celebran el segundo lunes de junio, pero Australia Occidental lo celebra a finales de septiembre y Queensland a principios de octubre.",
        },
        {
          q: "¿Es el Boxing Day festivo en todo el país?",
          a: "Sí, aunque Australia Meridional lo llama festivo del Proclamation Day, y cuando cae en fin de semana el día sustitutorio varía según el estado.",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "conducir-en-australia",
      enSlug: "driving-in-australia",
      title: "Conducir en Australia con un permiso extranjero: cada estado tiene sus normas",
      description: `Cada estado fija sus normas: NSW permite ${F.driveNswMonths} meses con permiso extranjero; el NT, ${F.driveNtMonths}. Si no está en inglés, lleve traducción o un IDP.`,
      related: ["festivos-australia", "numeros-de-emergencia", "tabaco-vapeo-alcohol"],
      blocks: [
        {
          p: "En Australia se circula por la izquierda. En las rotondas se gira en el sentido de las agujas del reloj y se cede el paso a la derecha. Los límites de velocidad están en kilómetros por hora: 50 km/h en zona urbana salvo señalización, normalmente 100 km/h en las demás carreteras y hasta 110 km/h en algunas autopistas.",
        },
        { h2: "El permiso de conducir es competencia de cada estado" },
        {
          p: "No existe una norma nacional única para los visitantes. Cada estado y territorio decide cuánto tiempo puede conducir un visitante con un permiso extranjero y qué debe acompañarlo. Consulte las normas de cada estado por el que vaya a conducir: un viaje por carretera puede atravesar varios.",
        },
        {
          ul: [
            `Nueva Gales del Sur (NSW): los turistas y visitantes temporales pueden conducir con un permiso extranjero en vigor hasta ${F.driveNswMonths} meses`,
            `Victoria: se permite si va a vivir y conducir en Victoria menos de ${F.driveNswMonths} meses, contados desde su primera llegada`,
            `Territorio del Norte (NT): hasta ${F.driveNtMonths} meses para visitantes y nuevos residentes`,
            "Queensland, Australia Occidental, Australia Meridional, Tasmania y el ACT: los visitantes pueden conducir con un permiso extranjero en vigor; las páginas oficiales no indican un plazo fijo para los visitantes",
          ],
        },
        {
          note: "Los límites de tres meses que puede leer para Queensland, NSW, Australia Occidental y el ACT se aplican a los ciudadanos australianos y a los titulares de visados permanentes o de residencia, no a los turistas.",
        },
        { h2: "Si su permiso no está en inglés" },
        {
          p: "Lleve una traducción al inglés de su permiso o un International Driving Permit (IDP, permiso internacional de conducción) junto con el propio permiso. Los detalles varían: el Territorio del Norte indica que obtenga un IDP antes de viajar, o una traducción oficial de un traductor autorizado en el NT; Queensland indica que lleve una traducción al inglés reconocida. Un IDP nunca sustituye a su permiso nacional: lleve los dos.",
        },
        { h2: "Antes de ponerse en marcha" },
        {
          ul: [
            "Lleve siempre el permiso mientras conduce",
            "Su permiso debe estar en vigor y corresponder al tipo de vehículo que conduce",
            `El límite de alcohol al volante es una concentración de alcohol en sangre de ${F.bacLimit}`,
            "Las distancias entre poblaciones son largas: planifique las paradas para repostar y descansar",
          ],
        },
        { source: { label: "Transport for NSW — Visitantes del extranjero", url: "https://www.nsw.gov.au/driving-boating-and-transport/driving-nsw/driver-and-rider-licences/visiting-or-moving-to-nsw/visiting-from-overseas-or-interstate" } },
        { source: { label: "VicRoads — Conducir con un permiso extranjero", url: "https://www.vicroads.vic.gov.au/licences/convert-your-licence/driving-with-your-overseas-licence" } },
        { source: { label: "Queensland Government — Conducir en Queensland con un permiso extranjero", url: "https://www.qld.gov.au/transport/licensing/driver-licensing/overseas/driving" } },
        { source: { label: "NT Government — Normas del permiso para conductores visitantes", url: "https://nt.gov.au/driving/licence/new-nt-residents-and-visitors/driver-licence-rules-for-new-nt-residents-and-visiting-drivers" } },
        { source: { label: "Tourism Australia — Conducir en Australia", url: "https://www.australia.com/en/facts-and-planning/getting-around/driving-in-australia.html" } },
      ],
      faq: [
        {
          q: "¿Necesito un permiso internacional de conducción (IDP) en Australia?",
          a: "Si su permiso está en inglés, por lo general no. Si no lo está, lleve una traducción al inglés o un IDP junto con su permiso. La norma exacta depende del estado.",
        },
        {
          q: "¿Cuánto tiempo puedo conducir con mi permiso extranjero?",
          a: `Depende del estado: hasta ${F.driveNswMonths} meses en NSW, menos de ${F.driveNswMonths} meses de residencia en Victoria, hasta ${F.driveNtMonths} meses en el NT. Los demás estados no indican un plazo fijo para los visitantes.`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    /* ── 2026-11-15 追加（英語 major-airports / public-transport）。英語にない運賃・空港は書かない ── */
    {
      slug: "aeropuertos-principales",
      enSlug: "major-airports",
      added: "2026-11-15",
      title: "Llegar a los aeropuertos de Sídney, Melbourne y Brisbane: lo que dicen sus operadores",
      description: "De la terminal internacional al centro en Sídney, Melbourne y Brisbane, y el nuevo Western Sydney International, según operadores y autoridades de transporte.",
      related: ["transporte-publico", "smartgate-australia", "preguntas-en-la-frontera", HUB],
      blocks: [
        {
          p: "Llegue al aeropuerto que llegue, los pasos fronterizos son los mismos: control de pasaportes (una SmartGate o un agente), recogida del equipaje y, después, bioseguridad y aduana. La ABF describe las SmartGates como puertas que «utilizan tecnología de reconocimiento facial y su pasaporte para comprobar su identidad y tramitar su paso por el control de pasaportes». Lo que cambia de un aeropuerto a otro es la forma de llegar a la ciudad. Esta página recoge solo lo que publican los operadores aeroportuarios y las autoridades de transporte de cada estado.",
        },
        { h2: "Sídney (SYD)" },
        {
          ul: [
            "Sydney Airport indica que está a 8 km del centro de Sídney (CBD) y que se llega en tren, autobús, taxi y VTC. Los vuelos internacionales operan en la T1 International.",
            "Las estaciones de tren están bajo las terminales. Los trenes de la línea T8 Airport & South circulan todos los días entre las 5:00 y la medianoche.",
            "En las estaciones del aeropuerto se cobra, además del billete de tren, una tasa de acceso a la estación (station access fee) de la empresa privada propietaria de las estaciones. No se incluye en los topes diarios, semanales ni de viernes y fin de semana de Opal.",
            `Entre la estación del aeropuerto nacional y la del internacional, la tasa de acceso es de ${F.sydneyStationFeeDomIntl} más el billete de tren. Para pasar de la terminal nacional a la internacional, Transport for NSW remite al tren T8 o al autobús de la línea 420.`,
            `Si compra o recarga una tarjeta Opal en una estación del aeropuerto, la recarga mínima es de ${F.opalAirportMinTopUp}. El transbordo de 60 minutos de Opal no se aplica en las estaciones del aeropuerto de Sídney.`,
            "Las tarifas de adulto pueden pagarse con una tarjeta de crédito o débito contactless, sin ningún registro previo.",
          ],
        },
        { source: { label: "Sydney Airport", url: "https://www.sydneyairport.com.au/" } },
        { source: { label: "Transport for NSW — Getting to and from Sydney Airport", url: "https://transportnsw.info/travel-info/airport-travel/getting-to-from-sydney-airport" } },
        { h2: "Western Sydney International (WSI)" },
        {
          p: `Transport for NSW da como fecha de apertura del aeropuerto el domingo 25 de octubre de 2026. Indica que por ahora no hay trenes directos a WSI. El autobús gratuito WSI Link circula entre la estación de St Marys y el aeropuerto cada ${F.wsiLinkEveryMinutes} minutos, de 4:30 a medianoche de domingo a jueves y de 4:30 a 1:00 los viernes y sábados. La línea de Sydney Metro hasta el aeropuerto sigue en construcción, y en WSI no hay tarifas de taxi fijas.`,
        },
        {
          p: "La Australian Border Force ofrece un formulario web, la Australia Travel Declaration, que según indica «solo está disponible para vuelos que llegan al Aeropuerto Internacional de Western Sydney», y pide a quienes lleguen a cualquier otro aeropuerto australiano que no lo rellenen.",
        },
        {
          note: "No hemos podido confirmar en la web del propio aeropuerto la operación actual de WSI. Consulte con su aerolínea y con el aeropuerto antes de viajar.",
        },
        { source: { label: "Transport for NSW — Getting to and from Western Sydney International Airport", url: "https://transportnsw.info/travel-info/airport-travel/getting-to-from-western-sydney-international-airport-wsi" } },
        { source: { label: "Australian Border Force — Australia Travel Declaration", url: "https://www.abf.gov.au/entering-and-leaving-australia/australia-travel-declaration" } },
        { h2: "Melbourne (MEL)" },
        {
          ul: [
            "Melbourne Airport indica que está conectado con el centro y otros destinos mediante autobuses públicos regulares, SkyBus y autobuses regionales y chárter.",
            "Sitúa el centro a unos 30 minutos en taxi y desaconseja aceptar cualquier oferta de taxi fuera de las paradas designadas de las terminales 1, 2 y 4.",
          ],
        },
        { source: { label: "Melbourne Airport — Getting to and from the airport", url: "https://www.melbourneairport.com.au/getting-to-from-the-airport" } },
        { h2: "Brisbane (BNE)" },
        {
          ul: [
            "Tras aterrizar, se pasa por inmigración y control de pasaportes, en una SmartGate o con un agente.",
            "Todos los pasajeros reciben un ticket de control de pasaportes (Passport Control ticket), que deben mostrar a los agentes de bioseguridad y aduana antes de salir de la terminal.",
            "Brisbane Airport recuerda a los pasajeros que ciertos artículos deben declararse en la Incoming Passenger Card y que no hacerlo puede acarrear sanciones.",
            "Para el Airtrain, suba en ascensor a la planta 3, salga de la terminal y cruce el puente hasta la estación. Los trenes pasan cada 15 minutos en hora punta y cada 30 minutos el resto del tiempo.",
            "Hay taxis las 24 horas en la parada de la vía de llegadas de la planta 2.",
          ],
        },
        { source: { label: "Brisbane Airport — International arrivals", url: "https://www.bne.com.au/passenger/passenger-information/international-arrivals" } },
        { source: { label: "Australian Border Force — SmartGates on arrival", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgates/arrivals" } },
        {
          note: "Perth, Adelaida, Cairns, Gold Coast, Darwin, Hobart y Canberra no se tratan aquí porque no hemos podido comprobar sus páginas oficiales. Consulte la web del operador de cada aeropuerto.",
        },
      ],
      checked: CHECKED_NOV,
      practical: true,
    },
    {
      slug: "transporte-publico",
      enSlug: "public-transport",
      added: "2026-11-15",
      title: "Transporte público en Sídney, el sudeste de Queensland y Perth: Opal, go card y SmartRider",
      description: "Cada ciudad australiana tiene su propio sistema de billetes. Cómo se paga en Sídney (Opal), el sudeste de Queensland (go card) y Perth (SmartRider).",
      related: ["aeropuertos-principales", "conducir-en-australia", "dinero-y-propinas", HUB],
      blocks: [
        {
          p: "En Australia no existe una tarjeta de transporte nacional. Cada estado gestiona su propio sistema con sus propias normas, y la tarjeta de una ciudad no sirve en otra. Esta página trata los tres sistemas cuyas páginas oficiales hemos podido comprobar: Sídney y Nueva Gales del Sur, el sudeste de Queensland y Perth.",
        },
        { h2: "Sídney y Nueva Gales del Sur: Opal" },
        {
          ul: [
            "Opal es el sistema de billetes del transporte público en Sídney, las Blue Mountains, la Central Coast, el Hunter y el Illawarra.",
            "Se valida al subir y al bajar (tap on y tap off) con una tarjeta Opal o, para la mayoría de las tarifas, con una tarjeta de crédito o débito contactless (American Express, Mastercard, Visa). Use la misma tarjeta o el mismo dispositivo durante todo el trayecto.",
            "Pagar con tarjeta contactless cuesta lo mismo que la tarifa Opal y da las mismas ventajas.",
            "Sin tarjeta Opal ni pago contactless necesita un billete sencillo Opal (Opal single trip ticket), disponible solo para metro, tren, ferry y tranvía.",
            "Las tarifas de adulto tienen un descuento de 2 $ por cada transbordo entre medios de transporte dentro de un mismo trayecto, y fuera de las horas punta son un 30 % más baratas.",
            "Lleve las tarjetas separadas en la cartera: Transport for NSW advierte del «card clash» (que el lector detecte otra tarjeta que no quería usar).",
          ],
        },
        {
          note: "En las estaciones del aeropuerto de Sídney se cobra una tasa de acceso aparte, además del billete: consulte la página de aeropuertos.",
        },
        { source: { label: "Transport for NSW — Opal", url: "https://transportnsw.info/tickets-fares/opal" } },
        { source: { label: "Transport for NSW — Fares", url: "https://transportnsw.info/tickets-fares/fares" } },
        { source: { label: "Transport for NSW — Contactless payments", url: "https://transportnsw.info/tickets-fares/contactless-payments" } },
        { h2: "Sudeste de Queensland: go card (Translink)" },
        {
          ul: [
            `Translink indica que la tarifa es única, de ${SEQ_FLAT}, en todos sus servicios, sea cual sea la distancia o la forma de pago.`,
            "La go card sirve en todos los autobuses, trenes (incluido el Airtrain), ferris y tranvías de Translink en el área metropolitana de Brisbane, Ipswich, Moreton Bay, Redlands, la Sunshine Coast y la Gold Coast. En el Airtrain se cobran las tarifas propias del Airtrain.",
            "El pago contactless se acepta en todos los trenes, tranvías, ferris y autobuses del sudeste de Queensland.",
            `Si olvida validar al subir o al bajar, pueden cobrarle una tarifa por defecto de ${F.seqDefaultFare}.`,
            "Apple Pay, Samsung Pay y Google Pay cuentan como medios de pago distintos de la tarjeta física asociada, así que valide al subir y al bajar con el mismo.",
            "Translink asegura que nunca envía notificaciones de sanción ni multas por SMS.",
          ],
        },
        { source: { label: "Translink — go card", url: "https://translink.com.au/tickets-and-fares/go-card" } },
        { source: { label: "Translink — Contactless payments", url: "https://translink.com.au/tickets-and-fares/contactless-payments" } },
        { h2: "Perth: SmartRider (Transperth)" },
        {
          ul: [
            "SmartRider es la tarjeta inteligente recargable de Transperth. También se aceptan tarjetas bancarias contactless, a la tarifa estándar en efectivo; las tarifas reducidas no se aplican al pago contactless.",
            "La tarifa Go Anywhere permite viajar por toda la red durante tres horas, y las tarifas con SmartRider y contactless se limitan automáticamente a ese importe.",
            "Todos los domingos viajan gratis los titulares de SmartRider y quienes pagan con contactless.",
            "Los conductores de los autobuses de Transperth no manejan efectivo.",
            "Transperth tiene una línea al aeropuerto (Airport line).",
          ],
        },
        { source: { label: "Transperth — What is SmartRider", url: "https://www.transperth.wa.gov.au/SmartRider/What-is-SmartRider" } },
        { source: { label: "Transperth — Fares", url: "https://www.transperth.wa.gov.au/Tickets-Fares/Fares" } },
        {
          note: "No se tratan aquí Melbourne (myki) ni Adelaida (metroCARD), porque no pudimos consultar sus páginas oficiales, ni los importes de tarifas que no pudimos confirmar. Consulte para ellos la web de la autoridad de transporte correspondiente.",
        },
      ],
      checked: CHECKED_NOV,
      practical: true,
    },
  ],
};
