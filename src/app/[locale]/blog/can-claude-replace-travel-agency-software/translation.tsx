import Link from "next/link";
import type { ReactNode } from "react";
import { blogPostingSchema } from "@/i18n/article";
import styles from "@/app/blog/can-claude-replace-travel-agency-software/page.module.css";

const POST_PATH = "/blog/can-claude-replace-travel-agency-software";
const PUBLISHED = "2026-11-24";
const TRAVEL_URL = "https://travel.webbinghub.io/";
const BOOKING = "https://claude.com/marketplace/connectors/booking";
const EXPEDIA = "https://claude.com/marketplace/connectors/expedia";
const OTTO = "https://claude.com/marketplace/connectors/otto-travel";
const NUITEE = "https://nuitee.com/connect/mcp-server";
const PHOCUS_PROFILE = "https://www.phocuswire.com/interviews/startups/hot-25-travel-startups-2027-odessia";
const PHOCUS_DEAL = "https://www.phocuswire.com/news/startups/openai-acquires-ai-travel-agent-odessia";
const ODESSIA = "https://odessia.com/";

const seo = {
  ro: {
    seoTitle: "Poate Claude să înlocuiască software-ul unei agenții de turism? Ce poate face AI-ul, de fapt",
    description:
      "Claude poate căuta hoteluri și, uneori, le poate rezerva prin conectori de turism. Iată ce înseamnă asta pentru o agenție care ține furnizori, oferte, rezervări și suport.",
    h1: "Poate Claude să înlocuiască software-ul unei agenții de turism?",
    section: "Tehnologie pentru turism",
    crumb: "Claude și software de agenție",
    homeName: "Acasă",
    keywords: "software AI pentru agenții de turism, rezervare hotel cu Claude, software de rezervări pentru agenții",
    tag: "Tehnologie pentru turism",
    date: "24 noiembrie 2026",
    read: "5 min de citit",
    reviewed: "Verificat pe 24 noiembrie 2026.",
    reviewedNote: "Listele de conectori și paginile de produs se schimbă.",
  },
  es: {
    seoTitle: "¿Puede Claude sustituir el software de una agencia de viajes? Qué puede hacer la IA de verdad",
    description:
      "Claude puede buscar hoteles y, a veces, reservarlos mediante conectores de viaje. Esto es lo que implica para una agencia que gestiona proveedores, cotizaciones, reservas y soporte.",
    h1: "¿Puede Claude sustituir el software de una agencia de viajes?",
    section: "Tecnología de viajes",
    crumb: "Claude y el software de agencia",
    homeName: "Home",
    keywords: "software de IA para agencias de viajes, reserva de hotel con Claude, software de reservas para agencias",
    tag: "Tecnología de viajes",
    date: "24 de noviembre de 2026",
    read: "5 min de lectura",
    reviewed: "Comprobado el 24 de noviembre de 2026.",
    reviewedNote: "Los listados de conectores y las páginas de producto cambian.",
  },
} as const;

export function claudeSeo(locale: string) {
  if (locale === "ro" || locale === "es") return seo[locale];
  return null;
}

function Cell({ label, children }: { label: string; children: ReactNode }) {
  return (
    <td>
      <span className={styles.cellLabel}>{label}</span>
      {children}
    </td>
  );
}

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

const rows = {
  ro: {
    headers: ["Cerința agenției", "Întrebarea de pus", "Dovada de cerut"],
    caption: "Întrebări pentru un asistent, un conector sau un produs de rezervări. Nu e un scor.",
    body: [
      ["Furnizori contractați", "Folosește credențialele, tarifele și permisiunile comerciale ale noastre?", "Lista de furnizori suportați și felul în care sunt folosite credențialele"],
      ["De la ofertă la rezervare", "Poate păstra condițiile ofertei, reverifica tariful final și trata o ofertă expirată?", "O demonstrație live sau un flux documentat"],
      ["Rezervare ambiguă", "Dacă un furnizor nu răspunde la timp, cum verificăm starea rezervării înainte să încercăm din nou?", "Documentația de erori și de căutare a furnizorului, și teste"],
      ["Operațiunile agenției", "Cine se ocupă de anulare, evidențe, acces și reconciliere?", "O explicație a fluxului și ce include, de fapt, produsul"],
      ["Mentenanță", "Cine actualizează mapările, schimbările de versiune și testele de regresie?", "Un proces de mentenanță și dovezi de testare"],
    ],
  },
  es: {
    headers: ["Requisito de la agencia", "Pregunta", "Prueba que pedir"],
    caption: "Preguntas para un asistente, un conector o un producto de reservas. No es una puntuación.",
    body: [
      ["Suministro contratado", "¿Usa nuestras credenciales de proveedor, nuestras tarifas y nuestros permisos comerciales?", "Lista de proveedores admitidos y cómo se usan las credenciales"],
      ["De la cotización a la reserva", "¿Puede conservar las condiciones de la oferta, volver a comprobar la tarifa final y tratar una cotización caducada?", "Una demo en vivo o un flujo documentado"],
      ["Reserva ambigua", "Si un proveedor agota el tiempo de espera, ¿cómo comprobamos el estado de la reserva antes de intentarlo otra vez?", "La documentación de errores y de consulta del proveedor, y pruebas"],
      ["Operaciones de la agencia", "¿Quién se ocupa de la cancelación, los registros, el acceso y la conciliación?", "Una explicación del flujo y qué incluye de verdad el producto"],
      ["Mantenimiento", "¿Quién actualiza los mapeos, los cambios de versión y las pruebas de regresión?", "Un proceso de mantenimiento y evidencia de pruebas"],
    ],
  },
} as const;

export function ClaudeTranslation({ locale }: { locale: "ro" | "es" }) {
  const c = seo[locale];
  const table = rows[locale];
  const ro = locale === "ro";
  const schema = blogPostingSchema({
    locale,
    path: POST_PATH,
    headline: c.h1,
    description: c.description,
    datePublished: `${PUBLISHED}T00:00:00Z`,
    dateModified: `${PUBLISHED}T00:00:00Z`,
    wordCount: 960,
    timeRequired: "PT5M",
    section: c.section,
    keywords: c.keywords,
    crumb: c.crumb,
    homeName: c.homeName,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className={styles.main}>
        <div className={styles.breadcrumb}>
          <Link href={`/${locale}/blog`} className={styles.back}>← Blog</Link>
        </div>
        <article className={styles.article}>
          <header className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.metaTag}>{c.tag}</span>
              <span className={styles.metaDot}>·</span>
              <time dateTime={PUBLISHED} className={styles.metaDate}>{c.date}</time>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaRead}>{c.read}</span>
            </div>
            <h1 className={styles.title}>{c.h1}</h1>
            <p className={styles.lead}>
              {ro
                ? "La o demonstrație în București, un proprietar de agenție de turism a întrebat: „N-aș putea să fac asta pur și simplu cu Claude?”"
                : "En una demo en Bucarest, el dueño de una agencia de viajes preguntó: «¿No podría hacer eso simplemente con Claude?»"}
            </p>
          </header>

          <div className={styles.body}>
            <p>
              {ro ? (
                <>
                  Întrebarea e rezonabilă. Cine compară <strong>software AI pentru agenții de turism</strong> ar trebui s-o pună înainte să cumpere încă un sistem. Claude poate căuta hoteluri, iar unele servicii conectate pot și rezerva. Pentru o agenție cu mai mulți furnizori de hoteluri, pe contracte proprii, un sistem operațional făcut pentru treaba asta și testat este adesea o bază mai bună decât un asistent general lăsat neconfigurat. Un Claude echipat cu conectori, sau o interfață AI peste unelte de turism cu acces controlat, poate oferi funcții comparabile dacă este chiar configurat și construit pentru asta. O interfață de model de limbaj și infrastructura operațională de turism se completează.
                </>
              ) : (
                <>
                  La pregunta es razonable. Quien compare <strong>software de IA para agencias de viajes</strong> debería hacerla antes de comprar otro sistema. Claude puede buscar hoteles, y algunos servicios conectados también pueden reservar. Para una agencia con varios proveedores hoteleros contratados, un sistema de operación hecho para ese trabajo y probado suele ser una base mejor que un asistente general sin configurar. Un Claude con conectores, o una interfaz de IA sobre herramientas de viaje con acceso controlado, puede ofrecer funciones comparables si de verdad está configurado y construido para hacerlo. Una interfaz de modelo de lenguaje y la infraestructura operativa de viajes se complementan.
                </>
              )}
            </p>

            <h2>{ro ? "Ce listează, de fapt, conectorii" : "Lo que listan de verdad los conectores"}</h2>
            <p>
              {ro
                ? "Paginile de conectori de la Anthropic numesc unelte. Nu dau fiecărui cont același acces."
                : "Las páginas de conectores de Anthropic nombran herramientas. No dan el mismo acceso a todas las cuentas."}
            </p>
            <p>
              {ro ? "Conectorul " : "El conector de "}
              <Ext href={BOOKING}>Booking.com</Ext>
              {ro ? " listează " : " lista "}
              <code>accommodations_search</code>
              {ro
                ? ". Găsește și compară cazări, iar lista spune că nu e nevoie de autentificare. Pe conectorul ăsta nu e listată o unealtă de rezervare."
                : ". Encuentra y compara alojamientos, y el listado dice que no hace falta iniciar sesión. En este conector no aparece una herramienta de reserva."}
            </p>
            <p>
              {ro ? "Conectorul " : "El conector de "}
              <Ext href={EXPEDIA}>Expedia</Ext>
              {ro ? " listează " : " lista "}
              <code>search_hotels</code>, <code>search_flights</code>
              {ro ? " și " : " y "}
              <code>get_hotel_pdp_offers</code>
              {ro
                ? ". Călătorul poate continua pe Expedia ca să rezerve. Lista descrie conectorul ca fiind disponibil în prezent pentru călători din Statele Unite. Pe conectorul ăsta nu e listată o acțiune de rezervare în interiorul lui Claude."
                : ". El viajero puede seguir en Expedia para reservar. El listado describe el conector como disponible actualmente para viajeros de Estados Unidos. En este conector no aparece una acción de reserva dentro de Claude."}
            </p>
            <p>
              {ro ? "Conectorul " : "El conector de "}
              <Ext href={OTTO}>Otto Travel</Ext>
              {ro ? " listează " : " lista "}
              <code>search_hotels</code>, <code>get_hotel_rooms</code>, <code>book_hotel</code>, <code>get_bookings</code>
              {ro ? " și " : " y "}
              <code>cancel_booking</code>
              {ro
                ? ", plus acțiuni pentru zboruri. E nevoie de autentificare. Asta nu dovedește că folosește contractele private ale unei agenții cu furnizorii ei."
                : ", además de acciones de vuelo. Hace falta iniciar sesión. Esto no demuestra que use los contratos privados de una agencia con sus proveedores."}
            </p>
            <p>
              <Ext href={NUITEE}>{ro ? "Pagina MCP a Nuitée" : "La página MCP de Nuitée"}</Ext>
              {ro
                ? " este o afirmație a furnizorului, nu un benchmark independent: un asistent poate găsi hoteluri, reverifica tarife, rezerva și administra sejururi în Claude, ChatGPT sau alți clienți MCP."
                : " es una afirmación del proveedor, no un benchmark independiente: un asistente puede encontrar hoteles, volver a comprobar tarifas, reservar y gestionar estancias dentro de Claude, ChatGPT u otros clientes MCP."}
            </p>
            <p>
              {ro
                ? "Claude poate deja căuta inventar hotelier prin conectori, iar unele servicii conectate expun acțiuni de rezervare și anulare. Capacitatea depinde de serviciu, de permisiuni, de eligibilitate și de uneltele pe care serviciul le expune. Un tarif dintr-un catalog public și tariful contractat al unei agenții sunt inventare diferite. Pe care dintre ele îl poate folosi un conector depinde de serviciul respectiv."
                : "Claude ya puede buscar inventario hotelero a través de conectores, y algunos servicios conectados exponen acciones de reserva y cancelación. La capacidad depende del servicio, de los permisos, de la elegibilidad y de las herramientas que ese servicio expone. Un resultado de venta al público y la tarifa contratada de una agencia son inventarios distintos. Cuál de los dos puede usar un conector depende de ese servicio."}
            </p>

            <h2>{ro ? "Odessia, la timpul trecut" : "Odessia, en pasado"}</h2>
            <p>
              {ro ? "Odessia a fost un concierge pentru călător. Un " : "Odessia fue un conserje orientado al viajero. Un "}
              <Ext href={PHOCUS_PROFILE}>
                {ro ? "profil PhocusWire din 9 noiembrie 2026" : "perfil de PhocusWire del 9 de noviembre de 2026"}
              </Ext>
              {ro
                ? " a descris un produs conversațional pentru zboruri, hoteluri și experiențe, iar ofertele erau rezervabile. Nu era consacrat ca sistem B2B pentru o agenție cu mai mulți furnizori."
                : " describió un producto conversacional para vuelos, hoteles y experiencias, y describió las ofertas como reservables. No quedó establecido como un sistema B2B de agencia con varios proveedores."}
            </p>
            <p>
              {ro ? "Pe 10 noiembrie 2026, " : "El 10 de noviembre de 2026, "}
              <Ext href={PHOCUS_DEAL}>{ro ? "PhocusWire a relatat" : "PhocusWire informó"}</Ext>
              {ro
                ? " că OpenAI a achiziționat Odessia. Termenii nu au fost făcuți publici. "
                : " de que OpenAI había adquirido Odessia. Las condiciones no se hicieron públicas. "}
              <Ext href={ODESSIA}>{ro ? "Pagina Odessia" : "La página de Odessia"}</Ext>
              {ro
                ? " spune că OpenAI a achiziționat compania și că serviciul de sine stătător nu mai este disponibil. Asta nu dovedește un eșec comercial sau tehnic."
                : " dice que OpenAI adquirió la empresa y que el servicio independiente ya no está disponible. Eso no demuestra un fracaso comercial o técnico."}
            </p>

            <h2>{ro ? "Întrebarea pe care ar trebui s-o pună o agenție" : "La pregunta que una agencia debería hacerse"}</h2>
            <aside className={styles.hypothetical}>
              <p>
                <strong>
                  {ro
                    ? "Scenariu ilustrativ, nu un caz de client și nu un test al unui competitor."
                    : "Escenario ilustrativo, no un caso de cliente ni una prueba de un competidor."}
                </strong>{" "}
                {ro
                  ? "O agenție are două contracte cu furnizori. Același hotel apare sub identificatori diferiți. Oferta pleacă spre client. La confirmare, tariful s-a schimbat. Răspunsul la rezervare e incert."
                  : "Una agencia tiene dos acuerdos con proveedores. El mismo hotel aparece con identificadores distintos. Una cotización llega al cliente. En la confirmación, la tarifa ha cambiado. La respuesta de la reserva es incierta."}
              </p>
            </aside>
            <p>
              {ro
                ? "O conversație poate descrie fiecare moment. Operațiunea este să știi ce contract a produs tariful, dacă cei doi identificatori sunt același hotel, ce condiții a păstrat oferta, dacă tariful final a fost reverificat și cum citești starea rezervării înainte să încerci din nou."
                : "Una conversación puede describir cada uno de esos momentos. La operación consiste en saber qué acuerdo produjo la tarifa, si los dos identificadores son un solo hotel, qué condiciones conservó la cotización, si se volvió a comprobar la tarifa final y cómo leer el estado de la reserva antes de intentarlo otra vez."}
            </p>

            <div className={styles.tableWrap}>
              <table className={styles.compare}>
                <caption className={styles.caption}>{table.caption}</caption>
                <thead>
                  <tr>
                    {table.headers.map((header) => (
                      <th key={header} scope="col">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.body.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => (
                        <Cell key={table.headers[i]} label={table.headers[i]}>{cell}</Cell>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              {ro
                ? "Un asistent general, cu unelte solide, poate acoperi multe dintre ele. Un produs dedicat le poate rata dacă e construit prost. Tabelul ăsta nu îi dă nici lui Claude, nici produsului, notă de trecere sau de picare."
                : "Un asistente general con herramientas sólidas puede cubrir muchas de estas. Un producto dedicado puede fallarlas si está mal construido. Esta tabla no le da a Claude ni al producto un aprobado o un suspenso."}
            </p>
            <p>
              {ro
                ? "Trei rânduri decid dacă o unealtă poate duce fluxul unei agenții:"
                : "Tres filas deciden si una herramienta puede sostener el flujo de una agencia:"}
            </p>
            <ol>
              <li>
                {ro
                  ? "Folosește furnizorii, tarifele și permisiunile noastre contractate?"
                  : "¿Usa nuestros proveedores, tarifas y permisos contratados?"}
              </li>
              <li>
                {ro
                  ? "După ce clientul acceptă, ce se întâmplă când tariful se schimbă sau răspunsul la rezervare e incert?"
                  : "Después de que el cliente acepta, ¿qué pasa si la tarifa cambia o la respuesta de la reserva es incierta?"}
              </li>
              <li>
                {ro
                  ? "Cine ține la zi anulările, evidențele, accesul și mapările?"
                  : "¿Quién mantiene al día las cancelaciones, los registros, el acceso y los mapeos?"}
              </li>
            </ol>

            <h2>{ro ? "Trei locuri în care poate sta aceeași treabă" : "Tres sitios para el mismo trabajo"}</h2>
            <ul>
              <li>
                <strong>{ro ? "Un asistent general plus un conector de turism:" : "Un asistente general más un conector de viaje:"}</strong>{" "}
                {ro
                  ? "descoperire sau rezervare în interiorul uneltelor disponibile ale acelui furnizor."
                  : "descubrimiento o reserva dentro de las herramientas disponibles de ese proveedor."}
              </li>
              <li>
                <strong>{ro ? "Fluxul de rezervare al agenției:" : "El flujo de reserva de la agencia:"}</strong>{" "}
                {ro
                  ? "accesul propriu la furnizori, rezultate comparabile, reguli comerciale, oferte, controlul rezervării și reconcilierea, atunci când acestea sunt chiar implementate."
                  : "el acceso propio a los proveedores, resultados comparables, reglas comerciales, cotizaciones, control de la reserva y conciliación, cuando eso está de verdad implementado."}
              </li>
              <li>
                <strong>{ro ? "Un hibrid:" : "Un híbrido:"}</strong>{" "}
                {ro
                  ? "o interfață AI care apelează unelte de turism cu acces controlat."
                  : "una interfaz de IA que llama a herramientas de viaje con acceso controlado."}
              </li>
            </ul>

            <h2>{ro ? "Unde se potrivește un produs dedicat" : "Dónde encaja un producto dedicado"}</h2>
            <p>
              {ro
                ? "Omnibeds by WebbingHUB (prezentat acum pe site-ul nostru ca TRAVEL by WebbingHUB) "
                : "Omnibeds by WebbingHUB (presentado ahora en nuestro sitio como TRAVEL by WebbingHUB) "}
              {ro
                ? "este software-ul B2B al WebbingHUB pentru agenții de turism, nu o agenție de turism și nu un revânzător de camere. Agențiile își folosesc propriile contracte cu furnizorii. Omnibeds caută la furnizorii conectați, mapează hotelurile duplicate, compară tarife, pregătește oferte cu mai multe opțiuni, reverifică prețul înainte de rezervare, rezervă și anulează și ține o evidență ușoară a rezervărilor și a clienților. Nu include, în mod nativ, contabilitate, facturare, plăți, CRM sau un site pentru clienți. O legătură cu back office-ul este un modul opțional, contra cost, când celălalt sistem este compatibil."
                : "es el software B2B de WebbingHUB para agencias de viajes, no una agencia de viajes y no un revendedor de habitaciones. Las agencias usan sus propios contratos con proveedores. Omnibeds busca en los proveedores conectados, mapea hoteles duplicados, compara tarifas, prepara cotizaciones con varias opciones, vuelve a comprobar el precio antes de reservar, reserva y cancela, y guarda un registro ligero de reservas y clientes. No incluye de forma nativa contabilidad, facturación, pagos, CRM ni una web para los clientes. Un enlace con el back office es un complemento opcional de pago cuando el otro sistema es compatible."}
            </p>

            <h2>{ro ? "Responsabilitatea tot trebuie să aibă un loc" : "La responsabilidad sigue teniendo que vivir en algún sitio"}</h2>
            <p>
              {ro
                ? "Asistenții conectați pot deja căuta inventar hotelier, iar unii pot și rezerva. Testul care contează sunt furnizorii proprii ai agenției, oferta pe care a acceptat-o clientul și rezervarea al cărei răspuns a venit neclar."
                : "Los asistentes conectados ya pueden buscar inventario hotelero, y algunos pueden reservar. La prueba que importa son los proveedores de la propia agencia, la cotización que aceptó el cliente y la reserva cuya respuesta volvió poco clara."}
            </p>
            <p>
              {ro
                ? "Concluzia acestui articol: „Interfața poate fi o conversație. Responsabilitatea pentru o rezervare tot trebuie să stea undeva.”"
                : "La conclusión de este artículo: «La interfaz puede ser conversacional. La responsabilidad de una reserva sigue teniendo que vivir en algún sitio.»"}
            </p>
            <p>
              {ro ? "Agențiile care rezervă prin mai mulți furnizori pot " : "Las agencias que reservan a través de más de un proveedor pueden "}
              <Ext href={TRAVEL_URL}>
                {ro ? "vedea produsul așa cum este prezentat azi" : "ver el producto tal como se presenta hoy"}
              </Ext>
              .
            </p>
            <p className={styles.reviewed}>
              <time dateTime={PUBLISHED}>{c.reviewed}</time>{" "}
              {c.reviewedNote}
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
