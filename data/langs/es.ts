import { FACTS as F, type LangContent } from "./_schema";

/**
 * スペイン語（/es/）。読者＝スペインのパスポート保持者。
 *
 * ⚠️ 数値は F（data/facts.ts）から入れる。文中に直接書かない。
 * ⚠️ スペインはEU加盟国＝eVisitorの対象36か国に含まれる。
 *    「あなたは対象・無料」が前提（独/蘭/仏/伊と同じ型）。
 *    対象外の言語版（ko/zh/zh-tw）とは主張が逆なので文面を流用しない。
 * ⚠️ 中南米のスペイン語圏（メキシコ等）はeVisitorの対象ではない。
 *    「スペイン国籍向け」であることを audience と本文で明示し、
 *    対象外の読者には比較表で subclass 600 へ誘導する（誤誘導しない）。
 * ⚠️ 二人称は usted。行政手続きの説明なので口語に崩さない。
 */
export const es: LangContent = {
  code: "es",
  htmlLang: "es",
  label: "Español",
  audience: "España",
  meta: {
    title: `eVisitor (subclass 651) para españoles: gratuito para Australia`,
    description: `Los ciudadanos españoles necesitan el visado eVisitor (subclass 651) para Australia. Es gratuito, válido ${F.validMonths} meses y permite estancias de hasta ${F.stayMonths} meses por entrada. Así se solicita en la web oficial.`,
  },
  header: {
    site: "Guía eVisitor",
    tagline: "Australia · visado eVisitor (subclass 651)",
    official: "Web oficial",
  },
  hero: {
    eyebrow: "Australia · eVisitor · subclass 651",
    h1Before: "Para los españoles, el visado eVisitor es ",
    h1Highlight: "gratuito",
    h1After: "",
    lead: `España figura entre los ${F.eligibleCountries} países para los que Australia prevé el visado eVisitor. La administración no cobra nada: ${F.fee}. Es válido ${F.validMonths} meses y permite estancias de hasta ${F.stayMonths} meses por entrada.`,
    ctaPrimary: "Solicitarlo en la web oficial",
    ctaSecondary: "¿Cuánto cuesta en realidad?",
    disclaimer: "Guía independiente · sin vínculo con el Gobierno australiano · actualizada el",
    imageAlt: "Costa australiana soleada, agua turquesa y arena dorada",
  },
  stats: [
    { v: F.fee, l: "Coste", s: "Sin tasa de solicitud" },
    { v: `${F.validMonths} meses`, l: "Validez", s: "Entradas ilimitadas" },
    { v: `${F.stayMonths} meses`, l: "Estancia por entrada", s: "Turismo o visita de negocios" },
    { v: F.eligibleCountries.toString(), l: "Países admitidos", s: "España está incluida" },
  ],
  whatIs: {
    h2: "¿Qué es el visado eVisitor?",
    p1: "El eVisitor (subclass 651) es un visado de visitante en toda regla, concedido por vía electrónica. Queda vinculado a su pasaporte: no hay etiqueta ni sello. Cubre el turismo y las actividades de visita de negocios.",
    p2: `Es válido ${F.validMonths} meses desde su concesión, permite un número ilimitado de entradas y cada estancia puede durar hasta ${F.stayMonths} meses. Debe encontrarse fuera de Australia tanto al solicitarlo como en el momento de la concesión.`,
  },
  features: [
    {
      h: "Un visado, no una autorización de viaje",
      p: "A diferencia, por ejemplo, de la NZeTA neozelandesa, el eVisitor es un visado de verdad. Se concede electrónicamente y se comprueba de forma automática en la facturación.",
    },
    {
      h: "España está admitida",
      p: `Todos los Estados miembros de la UE, además del Reino Unido, Islandia, Noruega y Suiza, figuran entre los ${F.eligibleCountries} países admitidos. Quien no tenga uno de esos pasaportes utiliza la ETA.`,
    },
    {
      h: "Gratuito, pero solo en la web oficial",
      p: `La administración no cobra nada. Si ve un precio para un eVisitor en internet, está pagando por rellenar el formulario, no por el visado. Como referencia: la ETA para otros pasaportes cuesta ${F.etaFee}.`,
    },
  ],
  eligibility: {
    h2: "¿Qué visado corresponde a cada pasaporte?",
    lead: "«Gratuito» solo vale para el eVisitor, y el eVisitor solo vale para pasaportes europeos. Aquí es donde surgen casi todos los malentendidos — incluido el de quienes hablan español fuera de Europa.",
    th: ["Su pasaporte", "Visado", "Coste", "Dónde se solicita"],
    rows: [
      [
        `UE, Reino Unido, Islandia, Noruega, Suiza y otros países europeos (${F.eligibleCountries} en total) — España incluida`,
        "eVisitor (subclass 651)",
        F.fee,
        "Web del Department of Home Affairs (ImmiAccount)",
      ],
      [
        "Japón, Estados Unidos, Canadá, Singapur, Malasia, Corea del Sur y otros",
        "ETA (subclass 601)",
        F.etaFee,
        "Solo a través de la app oficial",
      ],
      [
        "Pasaportes no admitidos en ninguno de los dos (la mayoría de los países hispanoamericanos)",
        "Visado de visitante (subclass 600)",
        "de pago",
        "Web del Department of Home Affairs",
      ],
    ],
    note: `La ETA no se solicita en la web, solo mediante la app oficial, que lee el chip del pasaporte. Con el eVisitor ocurre lo contrario: no hay app, solo la web. Verificado el 17 de agosto de 2026.`,
  },
  steps: {
    h2: "Cómo solicitar el eVisitor",
    items: [
      {
        h: "Revise su pasaporte",
        p: "Su pasaporte español debe estar en vigor en el momento de la solicitud y cubrir el viaje previsto. El visado queda vinculado exactamente a ese pasaporte.",
      },
      {
        h: "Solicítelo desde fuera de Australia",
        p: "La solicitud se tramita en la web del Department of Home Affairs con una cuenta ImmiAccount. Debe estar fuera de Australia al solicitarlo y en el momento de la concesión.",
      },
      {
        h: "Declare salud y antecedentes penales",
        p: "Declarará su estado de salud y los antecedentes penales que pueda tener. Los expedientes sencillos se resuelven automáticamente; las respuestas que requieren revisión son la causa más habitual de demora.",
      },
      {
        h: "Espere el correo de confirmación",
        p: `Muchas solicitudes se resuelven en ${F.decisionTypical}, aunque no está garantizado. Solicítelo antes de hacer reservas no reembolsables y guarde la confirmación con su documentación de viaje.`,
      },
    ],
    cta: "Empezar en la página oficial del eVisitor",
  },
  rules: {
    h2: "Qué se permite y qué no",
    allowedH: "Permitido",
    allowed: [
      "Vacaciones, visitas a familiares y amigos",
      "Actividades de visita de negocios: reuniones, negociaciones, congresos",
      `Estudios o formación de hasta ${F.studyMonths} meses`,
      "Entrar y salir tantas veces como desee durante la validez",
    ],
    deniedH: "No permitido",
    denied: [
      "Trabajar para un empleador australiano",
      `Permanecer más de ${F.stayMonths} meses en una misma entrada`,
      "Presentar la solicitud estando en Australia",
      "Vender bienes o servicios al público",
    ],
  },
  border: {
    h2: "A la llegada",
    p: "Viaje con el mismo pasaporte con el que solicitó el visado: está vinculado electrónicamente a él y no hay nada que imprimir. En los grandes aeropuertos, los viajeros admitidos pueden usar las SmartGates automáticas. La entrada la decide la Australian Border Force sobre el terreno. Australia aplica con rigor sus normas de bioseguridad sobre alimentos y productos vegetales y animales: en caso de duda, declárelo todo.",
  },
  faq: {
    h2: "Preguntas frecuentes",
    items: [
      {
        q: "¿El eVisitor es realmente gratuito?",
        a: `Sí. El Department of Home Affairs no cobra tasa de visado ni gastos de gestión por el eVisitor (subclass 651). Las webs comerciales que indican un precio están cobrando por rellenar el formulario: no es necesario.`,
      },
      {
        q: "¿Cuánto tiempo puedo quedarme en Australia?",
        a: `Hasta ${F.stayMonths} meses por entrada. El visado en sí es válido ${F.validMonths} meses desde su concesión y durante ese periodo permite entradas ilimitadas: puede volver varias veces, siempre que cada estancia se mantenga dentro del límite de ${F.stayMonths} meses.`,
      },
      {
        q: "¿Puedo trabajar con el eVisitor?",
        a: `No. No se permite una relación laboral con un empleador australiano. Sí se permiten las actividades de visita de negocios —reuniones, negociaciones, congresos— y puede estudiar o formarse hasta ${F.studyMonths} meses. El trabajo remunerado queda excluido.`,
      },
      {
        q: "¿Puedo solicitarlo si ya estoy en Australia?",
        a: "No. Debe estar fuera de Australia tanto al solicitarlo como en el momento de la concesión. Si ya está en el país y quiere quedarse más tiempo, necesitará otro visado.",
      },
      {
        q: "¿El eVisitor garantiza la entrada?",
        a: "No. Autoriza el viaje a Australia. La entrada la decide la Australian Border Force a la llegada.",
      },
      {
        q: "¿Los niños necesitan su propio eVisitor?",
        a: "Sí. Cada viajero necesita su propio visado, incluidos los bebés, cada uno con su pasaporte admitido.",
      },
      {
        q: "¿Y si viajo con un segundo pasaporte?",
        a: "El visado está vinculado al pasaporte con el que lo solicitó. Si viaja con otro pasaporte, deberá solicitarlo de nuevo. Lleve siempre el que indicó en la solicitud.",
      },
    ],
  },
  cta: {
    h2: "Solicite su eVisitor",
    p: "La solicitud es gratuita y se hace en la web del Department of Home Affairs. Somos una guía independiente y no podemos presentar la solicitud por usted.",
    button: "Ir a la página oficial del eVisitor",
  },
  footer: {
    disclaimer:
      "Esta es una guía independiente. No tiene vínculo alguno con el Gobierno australiano ni con el Department of Home Affairs, y no presentamos solicitudes. El eVisitor es gratuito: solicítelo siempre en la web oficial.",
  },
  ui: {
    updated: "Actualizado",
    backToTop: "Volver arriba",
    languages: "Idioma",
    articles: "Más temas",
    readMore: "Seguir leyendo",
    updatedLabel: "17 de agosto de 2026",
  },
  pages: [
    {
      slug: "que-es-evisitor",
      title: "¿Qué es el eVisitor (subclass 651)?",
      description:
        "El eVisitor es un visado de verdad, no una autorización de viaje. Qué cubre, quién puede solicitarlo y qué no permite.",
      blocks: [
        {
          p: `El eVisitor (subclass 651) es un visado de visitante para Australia vinculado electrónicamente a su pasaporte. Está dirigido a quienes tienen pasaporte de alguno de los ${F.eligibleCountries} países admitidos, casi todos europeos.`,
        },
        { h2: "Es un visado" },
        {
          p: "La distinción importa. Algunos países expiden una autorización de viaje que expresamente no es un visado; aquí Australia concede un visado real, simplemente sin etiqueta ni sello. Por eso lleva condiciones reales asociadas.",
        },
        {
          ul: [
            `Válido ${F.validMonths} meses desde la concesión.`,
            `Estancia de hasta ${F.stayMonths} meses por entrada, con entradas ilimitadas.`,
            `Se permiten estudios o formación de hasta ${F.studyMonths} meses.`,
            "No se permite trabajar para un empleador australiano.",
          ],
        },
        {
          note: `Debe encontrarse fuera de Australia tanto al solicitarlo como en el momento de la concesión. Es lo que más veces se pasa por alto.`,
        },
      ],
    },
    {
      slug: "evisitor-coste",
      title: "¿Cuánto cuesta el eVisitor? Nada, y por qué aun así ve precios",
      description: `El Department of Home Affairs cobra ${F.fee} por el eVisitor. Qué están cobrando en realidad las webs comerciales.`,
      blocks: [
        {
          p: `El coste oficial del eVisitor es ${F.fee}. No hay tasa de visado ni gastos de gestión. Aun así, en internet hay infinidad de páginas con un precio al lado.`,
        },
        { h2: "Por qué cobran esas webs" },
        {
          p: "Por rellenar el mismo formulario que usted puede rellenar gratis. No resuelven nada, no aceleran nada y no aumentan sus posibilidades. En ambos casos la decisión sale de la misma oficina.",
        },
        { h2: "La ETA sí es de pago, y de ahí la confusión" },
        {
          p: `Para los pasaportes que no están en la lista del eVisitor se aplica la ETA (subclass 601), con unos gastos de gestión de ${F.etaFee}. Al mezclar ambas cosas, pagar acaba pareciendo lo normal.`,
        },
        {
          note: "Regla práctica: con pasaporte español, cualquier importe que pague va a un intermediario, no a Australia.",
        },
      ],
    },
    {
      slug: "evisitor-documentacion",
      title: "Qué se necesita para solicitar el eVisitor",
      description:
        "Los datos que realmente se piden y los puntos en los que los expedientes se atascan en la práctica.",
      blocks: [
        { h2: "Qué tener a mano" },
        {
          ul: [
            "El pasaporte con el que va a viajar de verdad (número y fecha de caducidad)",
            "Una cuenta ImmiAccount en la web del Department of Home Affairs",
            "Una dirección de correo a la que pueda acceder durante el viaje",
            "La información sobre su estado de salud y posibles antecedentes penales",
          ],
        },
        { h2: "Normalmente no se suben documentos" },
        {
          p: "En un expediente sencillo se rellenan declaraciones; por lo general no hay nada que escanear. Solo si alguna respuesta requiere revisión puede la oficina pedir documentación adicional.",
        },
        { h2: "Dónde se falla" },
        {
          ul: [
            "Escribir los nombres de forma distinta a como aparecen en el pasaporte",
            "Solicitarlo con un pasaporte que después se renueva",
            "Responder «no» a una pregunta sobre antecedentes cuando sí los hay",
          ],
        },
        {
          note: "Si renueva el pasaporte después de la concesión, el visado no cubre el nuevo pasaporte. En ese caso, vuelva a solicitarlo.",
        },
      ],
    },
    {
      slug: "evisitor-plazos",
      title: "¿Cuánto tarda una solicitud de eVisitor?",
      description: `Muchas solicitudes se resuelven en ${F.decisionTypical}. Qué ralentiza la tramitación y por qué no existe un procedimiento urgente.`,
      blocks: [
        {
          p: `Buena parte de las solicitudes se resuelve automáticamente, a menudo en ${F.decisionTypical}. Es un dato de experiencia, no un compromiso.`,
        },
        { h2: "Qué ralentiza la tramitación" },
        {
          ul: [
            "Antecedentes penales declarados o una denegación anterior",
            "Cuestiones de salud que exigen revisión",
            "Datos que no coinciden con el pasaporte",
            "La acumulación de solicitudes justo antes de los periodos vacacionales",
          ],
        },
        { h2: "No existe una vía rápida de pago" },
        {
          p: "La oficina no la ofrece. Las webs que prometen rapidez como mucho aceleran su propio trabajo de relleno; el orden de examen no cambia.",
        },
        {
          note: "Solicítelo en cuanto el viaje esté decidido y antes de hacer reservas no reembolsables. Es la única medida eficaz.",
        },
      ],
    },
    {
      slug: "evisitor-consultar-estado",
      title: "Consultar el estado del eVisitor con VEVO",
      description:
        "Dónde llega la confirmación, cómo comprobar un visado existente y dónde no debe introducir su número de pasaporte.",
      blocks: [
        {
          p: "La resolución llega por correo a la dirección indicada en la solicitud. El visado está vinculado electrónicamente al pasaporte: no hay nada que imprimir.",
        },
        { h2: "VEVO: la comprobación oficial" },
        {
          p: "Con VEVO (Visa Entitlement Verification Online), del Department of Home Affairs, se comprueban el estado y las condiciones de un visado existente. Es la fuente fiable, también cuando no aparece el correo.",
        },
        { h2: "Si el correo no llega" },
        {
          ul: [
            "Mire primero en la carpeta de correo no deseado",
            "Compruebe que la dirección introducida no tenga una errata",
            "Entre en su ImmiAccount: allí figura el estado del expediente",
          ],
        },
        {
          note: "Introduzca su número de pasaporte solo en la web oficial del Department of Home Affairs. Los terceros que ofrecen una «consulta de estado» de pago no hacen falta.",
        },
      ],
    },
    {
      slug: "evisitor-preguntas-frecuentes",
      title: "eVisitor: preguntas frecuentes",
      description: "Respuestas breves a lo que más preguntan los viajeros españoles.",
      blocks: [
        { h2: "¿Es realmente gratuito?" },
        { p: `Sí, ${F.fee}. Cualquier importe que pague va a un intermediario.` },
        { h2: "¿Cuánto puedo quedarme?" },
        {
          p: `Hasta ${F.stayMonths} meses por entrada; el visado en sí es válido ${F.validMonths} meses con entradas ilimitadas.`,
        },
        { h2: "¿Puedo trabajar?" },
        {
          p: `No. Se permiten las visitas de negocios y los estudios de hasta ${F.studyMonths} meses, no el trabajo remunerado.`,
        },
        { h2: "¿Puedo solicitarlo desde Australia?" },
        { p: "No. Debe estar fuera de Australia al solicitarlo y en el momento de la concesión." },
        { h2: "Tengo un pasaporte nuevo, ¿sigue valiendo mi visado?" },
        { p: "No. Está vinculado al anterior. Solicítelo de nuevo con el nuevo pasaporte." },
        { h2: "¿También los bebés necesitan visado?" },
        { p: "Sí, cada viajero por separado y con su propio pasaporte." },
        { h2: "¿Y si mi pasaporte no está en la lista?" },
        {
          p: `Entonces el eVisitor no está disponible. Según el pasaporte, será la ETA (${F.etaFee}, solo mediante la app oficial) o un visado de visitante (subclass 600). Es el caso de la mayoría de los pasaportes hispanoamericanos.`,
        },
      ],
    },
    {
      slug: "sobre-este-sitio",
      title: "Sobre este sitio",
      description: "Quién elabora esta guía independiente sobre el visado eVisitor australiano.",
      blocks: [
        { h2: "Editor" },
        {
          p: "Este es un sitio independiente sobre el visado eVisitor australiano (subclass 651). No somos un organismo público y no tenemos vínculo alguno con el Gobierno australiano ni con el Department of Home Affairs. Editor: MediaX Co., Ltd. (Japón). Contacto: webmaster@mediax.biz",
        },
        { h2: "Lo que no hacemos" },
        {
          ul: [
            "No presentamos solicitudes.",
            "No cobramos ningún importe.",
            "No prestamos asesoramiento jurídico ni de extranjería.",
          ],
        },
        { h2: "Sobre la exactitud" },
        {
          p: "Todo el contenido se basa en las publicaciones oficiales en la fecha de verificación indicada. Las normas cambian: prevalece la web oficial. Si detecta un error, avísenos y lo corregiremos.",
        },
      ],
    },
    {
      slug: "privacidad",
      title: "Política de privacidad",
      description: "Qué datos trata este sitio, por qué, y qué derechos tiene quien lo visita.",
      blocks: [
        { h2: "En resumen" },
        {
          p: "Este sitio está formado por páginas informativas estáticas. No hay registro, no se vende nada y no se recogen datos de pasaporte. Los datos personales se tratan solo en la medida técnicamente necesaria.",
        },
        { h2: "Registros del servidor" },
        {
          p: "El sitio se sirve desde Cloudflare Pages. En cada acceso se registran dirección IP, hora, dirección solicitada e información del navegador, para garantizar la estabilidad y prevenir ataques.",
        },
        { h2: "Cookies y analítica" },
        {
          p: "No usamos cookies publicitarias ni incorporamos scripts de seguimiento de terceros. Si en el futuro se añadiera una medición de audiencia, se describiría antes en esta página.",
        },
        { h2: "Enlaces externos" },
        { p: "El sitio remite a fuentes oficiales, sujetas a sus propias políticas de privacidad." },
        { h2: "Contacto" },
        { p: "Para cuestiones de privacidad: webmaster@mediax.biz" },
      ],
    },
    {
      slug: "condiciones-de-uso",
      title: "Condiciones de uso",
      description: "Las condiciones aplicables al uso de la información de este sitio.",
      blocks: [
        { h2: "Finalidad" },
        {
          p: "Los contenidos ofrecen información general sobre el visado eVisitor australiano. No constituyen asesoramiento jurídico ni de extranjería y no generan ninguna relación de encargo.",
        },
        { h2: "No tramitamos solicitudes" },
        {
          p: "No somos intermediarios ni un organismo público. Las solicitudes se presentan exclusivamente por los canales oficiales; no recibimos formularios, pagos ni datos de pasaporte.",
        },
        { h2: "Limitación de responsabilidad" },
        {
          p: "Procuramos mantener la información exacta y actualizada, sin poder garantizar su integridad ni la ausencia de errores. La responsabilidad por daños derivados del uso se limita al dolo y la culpa grave.",
        },
        { h2: "Derechos de autor" },
        {
          p: "Los textos y el diseño están protegidos. No se permite la reproducción íntegra sin autorización; las citas breves con indicación de la fuente y enlace son bienvenidas.",
        },
      ],
    },
  ],
  articles: [
    {
      slug: "evisitor-solicitud-paso-a-paso",
      title: "Solicitar el eVisitor paso a paso",
      description:
        "De la cuenta ImmiAccount al correo de confirmación: el orden de los pasos y los puntos donde los expedientes se atascan de verdad.",
      blocks: [
        {
          p: `La solicitud se hace exclusivamente en la web del Department of Home Affairs. Para el eVisitor no hay app, y esa es precisamente la diferencia con la ETA. El coste es ${F.fee}.`,
        },
        { h2: "1. Crear una cuenta ImmiAccount" },
        {
          p: "Necesita una cuenta ImmiAccount gratuita. Use una dirección de correo a la que pueda acceder también durante el viaje: allí llegan todos los avisos.",
        },
        { h2: "2. Introducir los datos del pasaporte" },
        {
          p: "Copie nombre, número y fecha de nacimiento exactamente como figuran en el pasaporte. Una grafía distinta es la causa más frecuente de problemas en la facturación.",
        },
        { h2: "3. Hacer las declaraciones" },
        {
          p: "Declarará su estado de salud y los antecedentes penales que pueda tener. Responda con veracidad: una declaración falsa puede llevar a la cancelación del visado, con consecuencias durante años para nuevas solicitudes.",
        },
        { h2: "4. Presentarla desde fuera de Australia" },
        {
          p: "Debe estar fuera de Australia al solicitarlo y en el momento de la concesión. No es un trámite formal: es una condición del visado.",
        },
        {
          note: `Muchas resoluciones llegan en ${F.decisionTypical}, pero no organice el viaje contando con ello. Solicítelo en cuanto el viaje esté decidido.`,
        },
      ],
    },
    {
      slug: "evisitor-o-eta",
      title: `¿eVisitor o ETA? La diferencia entre gratuito y ${F.etaFee}`,
      description:
        "Dos visados con condiciones casi idénticas, pero con listas de países, precios y canales distintos. Cómo saber cuál le corresponde.",
      blocks: [
        {
          p: `Australia tiene dos visados electrónicos de visitante que se parecen mucho. Cuál se aplica depende únicamente del pasaporte que tenga: no se elige.`,
        },
        { h2: "eVisitor (subclass 651)" },
        {
          ul: [
            `Para ${F.eligibleCountries} países mayoritariamente europeos, España incluida`,
            `Coste: ${F.fee}`,
            "Solicitud: web del Department of Home Affairs (sin app)",
          ],
        },
        { h2: "ETA (subclass 601)" },
        {
          ul: [
            "Para Japón, Estados Unidos, Canadá, Singapur, Malasia, Corea del Sur y otros",
            `Coste: ${F.etaFee} de gastos de gestión`,
            "Solicitud: solo mediante la app oficial, que lee el chip del pasaporte",
          ],
        },
        { h2: "Y si no está en ninguna de las dos listas" },
        {
          p: "Es el caso de la mayoría de los pasaportes hispanoamericanos. Entonces corresponde el visado de visitante (subclass 600), que es de pago y se solicita en la web del Department of Home Affairs. Conviene saberlo antes de seguir leyendo guías pensadas para pasaportes europeos.",
        },
        {
          note: `Ambos, eVisitor y ETA, son válidos ${F.validMonths} meses, permiten entradas ilimitadas y estancias de hasta ${F.stayMonths} meses. Con doble nacionalidad, la respuesta puede cambiar según el pasaporte con el que viaje realmente.`,
        },
      ],
    },
    {
      slug: "evisitor-validez-y-estancia",
      title: "Validez y duración de la estancia: dos cosas distintas",
      description: `${F.validMonths} meses de validez y ${F.stayMonths} meses de estancia por entrada se confunden a menudo. Qué cambia en la práctica.`,
      blocks: [
        {
          p: `El eVisitor es válido ${F.validMonths} meses desde su concesión. Eso indica cuánto tiempo puede usar el visado, no cuánto tiempo puede quedarse cada vez.`,
        },
        { h2: "Por entrada" },
        {
          p: `Cada estancia puede durar hasta ${F.stayMonths} meses. Durante la validez puede viajar tantas veces como quiera, siempre que cada estancia se mantenga por debajo de ese límite.`,
        },
        { h2: "Salir y volver no reinicia el contador" },
        {
          p: "Salir brevemente del país para que el contador vuelva a empezar es una maniobra conocida y se detecta como tal. La Australian Border Force mira el conjunto de sus desplazamientos, no solo el último sello.",
        },
        { h2: "Quedarse más tiempo" },
        {
          p: "Para superar la duración permitida hace falta otro visado. El eVisitor no se prorroga y tampoco se puede solicitar desde Australia.",
        },
        {
          note: "El visado decae también si su pasaporte caduca antes. Compruebe ambas fechas antes de reservar.",
        },
      ],
    },
  ],
};
