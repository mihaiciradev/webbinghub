import Link from "next/link";
import { blogPostingSchema } from "@/i18n/article";
import styles from "@/app/blog/hotel-price-changed-before-booking/page.module.css";

const POST_PATH = "/blog/hotel-price-changed-before-booking";

const copy = {
  ro: {
    seoTitle: "Schimbări de preț la hotel, înainte și după rezervare",
    description:
      "Cum tratează WebbingHUB Travel o schimbare de preț la hotel: un tarif echivalent mai ieftin când agentul rezervă, apoi o urmărire a scăderii până se termină anularea gratuită.",
    h1: "Prețul hotelului s-a schimbat. Ce face motorul de rezervări înainte și după rezervare.",
    section: "Tehnologie de travel",
    keywords:
      "schimbare de preț la hotel, tarif hotelier echivalent, scădere de preț după rezervare, urmărire preț anulare gratuită, verificare de preț în motorul de rezervări",
    crumb: "Prețul hotelului s-a schimbat",
    homeName: "Acasă",
    tag: "Tehnologie de travel",
    date: "5 noiembrie 2026",
    updated: "Actualizat 10 noiembrie 2026",
    read: "8 min de citit",
    lead: "În WebbingHUB Travel, prețul unui hotel se tratează în două momente. Când agentul apasă Book, pagina confirmă tariful și caută unul echivalent, care costă mai puțin. După ce rezervarea e confirmată, continuă să caute până când sejurul nu mai poate fi anulat gratuit.",
  },
  es: {
    seoTitle: "Cambios de precio de hotel, antes y después de reservar",
    description:
      "Cómo trata WebbingHUB Travel un cambio de precio de hotel: una tarifa equivalente más barata cuando el agente reserva, y luego una vigilancia de la bajada hasta que termina la cancelación gratuita.",
    h1: "El precio del hotel cambió. Qué hace el motor de reservas antes y después de reservar.",
    section: "Tecnología de viajes",
    keywords:
      "cambio de precio de hotel, tarifa hotelera equivalente, bajada de precio tras la reserva, vigilancia de precio cancelación gratuita, comprobación de precio en el motor de reservas",
    crumb: "El precio del hotel cambió",
    homeName: "Home",
    tag: "Tecnología de viajes",
    date: "5 de noviembre de 2026",
    updated: "Actualizado el 10 de noviembre de 2026",
    read: "8 min de lectura",
    lead: "En WebbingHUB Travel, el precio de un hotel se trata en dos momentos. Cuando el agente pulsa Book, la página confirma esa tarifa y busca una equivalente que cueste menos. Después de confirmar la reserva, sigue buscando hasta que la estancia ya no se puede cancelar gratis.",
  },
} as const;

export function priceSeo(locale: string) {
  if (locale === "ro" || locale === "es") return copy[locale];
  return null;
}

export function PriceTranslation({ locale }: { locale: "ro" | "es" }) {
  const c = copy[locale];
  const ro = locale === "ro";
  const schema = blogPostingSchema({
    locale,
    path: POST_PATH,
    headline: c.h1,
    description: c.description,
    datePublished: "2026-11-05T00:00:00Z",
    dateModified: "2026-11-10T00:00:00Z",
    wordCount: 1480,
    timeRequired: "PT8M",
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
              <time dateTime="2026-11-05" className={styles.metaDate}>{c.date}</time>
              <span className={styles.metaDot}>·</span>
              <time dateTime="2026-11-10" className={styles.metaDate}>{c.updated}</time>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaRead}>{c.read}</span>
            </div>
            <h1 className={styles.title}>{c.h1}</h1>
            <p className={styles.lead}>{c.lead}</p>
          </header>
          <div className={styles.body}>
            {ro ? (
              <>
                <p>Așa funcționează motorul ăsta de rezervări. Agentul poate vedea comparația, și agentul decide. Aplicația nu schimbă un tarif de una singură și nu anulează o rezervare de una singură.</p>
                <figure className={styles.diagram} aria-labelledby="price-diagram-title" aria-describedby="price-diagram-desc">
                  <h3 id="price-diagram-title" className={styles.diagramTitle}>Două momente pentru același sejur</h3>
                  <ol className={styles.moments}>
                    <li>
                      <span className={styles.momentWhen}>La rezervare</span>
                      <strong>Un preț echivalent mai bun</strong>
                      <p>Tariful ales se confirmă la furnizorul lui. Ceilalți furnizori sunt întrebați despre același hotel. Doar același tip de cameră, același regim, aceeași rambursabilitate și condiții de anulare cel puțin la fel de bune.</p>
                      <p>Dacă unul e mai ieftin, agentul îl vede și alege. Aplicația nu schimbă singură.</p>
                    </li>
                    <li>
                      <span className={styles.momentWhen}>După confirmare</span>
                      <strong>O urmărire a scăderii de preț</strong>
                      <p>Cât timp rezervarea mai poate fi anulată gratuit, aplicația caută același sejur la un preț mai mic. Verificările automate caută în simulatoare. O scădere trebuie să fie strict echivalentă și trebuie să bată economia pe care a setat-o agenția.</p>
                      <p>Urmărirea se oprește când se termină fereastra de anulare gratuită. După aceea, o schimbare ar costa o penalizare.</p>
                    </li>
                  </ol>
                  <p id="price-diagram-desc" className={styles.diagramDesc}>
                    La rezervare, agentul poate trece la un tarif echivalent mai ieftin după ce a fost verificat. După confirmare, aplicația urmărește o scădere până se termină anularea gratuită. Ambele alegeri rămân la agent.
                  </p>
                </figure>
                <h2>Un preț mai bun când agentul apasă Book</h2>
                <p>Când un agent apasă Book pe un tarif, pagina de rezervare confirmă prețul la furnizorul acelui tarif. În același timp îi întreabă pe ceilalți furnizori despre același hotel.</p>
                <p>Caută doar un tarif echivalent. Camera trebuie să fie de același fel: un double nu se compară niciodată cu un suite. Regimul trebuie să fie același. Rambursabilitatea trebuie să fie aceeași, iar condițiile de anulare cel puțin la fel de bune. Un număr mai mic fără mic dejun, sau cu o regulă de anulare mai strânsă, e o altă ofertă.</p>
                <p>Dacă un tarif echivalent e mai ieftin, sub prețul confirmat apare o notă verde. Sumele de mai jos sunt un exemplu de ce poate arăta nota.</p>
                <p className={styles.example}>
                  <span className={styles.exampleLabel}>Exemplu de notă</span>
                  LiteAPI has the same room, also room only and refundable, for €18 less (€212.40 instead of €230.90).
                </p>
                <p>Agentul poate deschide o vedere alăturată a ce e identic și ce diferă: formularea camerei, termenul de anulare gratuită și furnizorul. Alegerea de pe ecranul ăla e <strong>Switch to this offer</strong> sau <strong>Keep the current one</strong>.</p>
                <p>Schimbarea confirmă noul tarif la furnizorul lui, înainte de pasul cu datele oaspetelui. Nu se rezervă nimic pe un preț care n-a fost verificat. Aplicația nu schimbă niciodată singură.</p>
                <h2>Ce furnizori sunt întrebați</h2>
                <p>Simulatoarele intră mereu în căutarea aia. Hotelbeds și LiteAPI nu. Cei doi furnizori sunt interogați doar când cineva pornește deliberat o verificare live. În aplicație, asta înseamnă presenter mode cu comutatorul pe Live. O verificare automată, sau o vizită care nu e verificarea aia live, nu îi apelează. Fiecare căutare Hotelbeds sau LiteAPI se numără pe pagina de utilizare a API-ului.</p>
                <p>Când nu apare nimic mai bun, pagina spune că s-a făcut căutarea. O astfel de linie este „Checked 3 other suppliers: this is still the best price.”</p>
                <h2>După confirmare, o urmărire pentru un preț mai mic</h2>
                <p>Odată ce rezervarea e confirmată, și cât timp mai poate fi anulată gratuit, aplicația continuă să caute același sejur la un preț mai mic, la furnizorul de pe rezervare și la ceilalți.</p>
                <p>Verificările automate urmează programul din Admin, la Suppliers &amp; checks. Caută în simulatoare pentru fiecare rezervare urmărită. Un tarif contează doar când e strict echivalent, în același sens ca la rezervare, și doar când economia bate un prag pe care îl setează agenția. Implicit, pragul e €15 și 5% din preț.</p>
                <p>Hotelbeds și LiteAPI nu intră niciodată în verificările astea automate. Asta le protejează limitele. O rezervare ținută la unul dintre ei arată un buton <strong>Check for a lower price now</strong>. Butonul e disponibil pentru aceeași verificare live deliberată, presenter mode cu Live pornit. Înainte să ruleze, spune că va fi o căutare numărată pentru fiecare furnizor real.</p>
                <p>Fiecare rezervare arată o linie mică <strong>Price watch</strong>: când a fost verificată ultima dată, cel mai bun preț echivalent găsit și când se oprește urmărirea. Urmărirea se oprește mereu la sfârșitul ferestrei de anulare gratuită, pentru că după aceea o schimbare ar costa o penalizare.</p>
                <h2>Cum vede agenția o scădere</h2>
                <p>O scădere apare în trei locuri.</p>
                <ul>
                  <li>Un badge pe lista de rezervări. Un exemplu de badge este „€42 cheaper.”</li>
                  <li>O intrare la clopoțelul de alerte, și un email de alertă când emailul e configurat.</li>
                  <li>Un card Price drop pe pagina rezervării.</li>
                </ul>
                <p>Cardul pune rezervarea curentă lângă oferta nouă. Arată:</p>
                <ul>
                  <li>cele două oferte, una lângă alta</li>
                  <li>economia după orice diferență de taxe</li>
                  <li>că rezervarea curentă mai poate fi anulată gratuit până la o dată și o oră date, în ora locală a hotelului</li>
                  <li>pașii exacți pe care i-ar face o schimbare</li>
                </ul>
                <p>Cifrele folosesc prețuri de vânzare pentru client și costuri de furnizor pentru agenție. Agentul poate vedea economia clientului și cum se schimbă marja agenției, și poate pasa economia mai departe sau păstra o parte, după regulile de marjă.</p>
                <h2>O schimbare ghidată, cu camera originală încă ținută</h2>
                <p>Alegerea Switch pornește o rerezervare ghidată. Agentul confirmă fiecare pas. Ordinea e fixă, ca clientul să nu rămână fără cameră.</p>
                <ol>
                  <li>Noul tarif e verificat la preț.</li>
                  <li>Noua rezervare se face cu aceiași călători.</li>
                  <li>Abia după ce noul furnizor confirmă i se cere agentului să anuleze rezervarea originală. Starea de anulare gratuită se verifică din nou chiar înainte.</li>
                </ol>
                <p>Dacă noua rezervare eșuează, nu se anulează nimic și originalul rămâne. Dacă anularea eșuează, aplicația o spune clar și listează ambele rezervări, ca agentul să poată termina de mână. Nu anulează niciodată nimic automat.</p>
                <p>Ambele rezervări păstrează o intrare în cronologie care le leagă. Un exemplu de intrare, inclusiv un id de rezervare de exemplu, este „Rebooked to WH-1102 for €42 less.” Documentele noi de confirmare și voucher sunt gata pentru rezervarea nouă, iar agentul e amintit să le trimită clientului.</p>
                <h2>Ce trebuie să rămână adevărat la ofertă</h2>
                <p>Un rezultat de căutare nu e o rezervare confirmată. Cifra de pe pagina de rezultate e o ofertă la un moment dat. Pagina de rezervare e locul unde furnizorul tarifului confirmă prețul.</p>
                <p>Compară toată oferta, nu doar numărul. Un tarif mai ieftin cu un regim mai slab, sau cu o anulare mai slabă, nu e aceeași ofertă. Verificările de mai sus lasă tariful ăla pe dinafară.</p>
                <p>
                  Un timeout nu e dovada că rezervarea a eșuat.{" "}
                  <a href="https://developers.expediagroup.com/rapid/lodging/reference/error-responses" target="_blank" rel="noopener noreferrer">Documentația Rapid de la Expedia</a>{" "}
                  descrie un timeout sau un răspuns 5xx care poate apărea după ce o rezervare a fost creată, și recomandă să recuperezi încercarea aia înainte să trimiți o altă rezervare. Asta e starea de rezervare a unui furnizor, separată de comparația de preț din WebbingHUB Travel. Un text mai lung despre{" "}
                  <Link href={`/${locale}/blog/hotel-supplier-api-failure-booking-platform`}>timeout-uri la furnizor și recuperare</Link>{" "}
                  e publicat separat.
                </p>
                <h2>Concluzia practică</h2>
                <p>Tariful pe care agentul a dat clic prima dată e verificat la furnizorul lui înainte să fie rezervat cineva. Un preț mai ieftin se arată doar când camera, regimul și anularea se potrivesc în continuare. După confirmare, urmărirea se termină când se termină anularea gratuită. Agentul confirmă fiecare pas al unei schimbări, iar rezervarea originală rămâne până când noul furnizor a confirmat.</p>
                <p>
                  Pentru echipele care lucrează la sisteme de rezervări și conexiuni cu furnizori,{" "}
                  <a href="https://travel.webbinghub.io" target="_blank" rel="noopener noreferrer">WebbingHUB Travel</a>{" "}
                  se ocupă de stratul de integrare și de realitățile operaționale din spatele distribuției hoteliere.
                </p>
                <h3>Sursă</h3>
                <ul className={styles.sources}>
                  <li>
                    <a href="https://developers.expediagroup.com/rapid/lodging/reference/error-responses" target="_blank" rel="noopener noreferrer">Expedia Group, Rapid API common error responses</a>
                    <span className={styles.sourceNote}>Un timeout sau un 5xx poate urma unei rezervări care există deja. Recupereaz-o înainte să rezervi din nou. Asta descrie furnizorul, nu WebbingHUB Travel.</span>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <p>Así funciona este motor de reservas. El agente puede ver la comparación, y el agente decide. La aplicación no cambia una tarifa por su cuenta y no cancela una reserva por su cuenta.</p>
                <figure className={styles.diagram} aria-labelledby="price-diagram-title" aria-describedby="price-diagram-desc">
                  <h3 id="price-diagram-title" className={styles.diagramTitle}>Dos momentos para la misma estancia</h3>
                  <ol className={styles.moments}>
                    <li>
                      <span className={styles.momentWhen}>Al reservar</span>
                      <strong>Un precio equivalente mejor</strong>
                      <p>La tarifa elegida se confirma con su proveedor. Se pregunta a los otros proveedores por el mismo hotel. Solo el mismo tipo de habitación, el mismo régimen, la misma reembolsabilidad y unas condiciones de cancelación al menos igual de buenas.</p>
                      <p>Si una es más barata, el agente la ve y elige. La aplicación no cambia sola.</p>
                    </li>
                    <li>
                      <span className={styles.momentWhen}>Tras la confirmación</span>
                      <strong>Una vigilancia de la bajada de precio</strong>
                      <p>Mientras la reserva todavía se puede cancelar gratis, la aplicación busca la misma estancia a un precio más bajo. Las comprobaciones automáticas buscan en los simuladores. Una bajada tiene que ser estrictamente equivalente y tiene que superar el ahorro que fijó la agencia.</p>
                      <p>La vigilancia se detiene cuando termina la ventana de cancelación gratuita. Después, un cambio costaría una penalización.</p>
                    </li>
                  </ol>
                  <p id="price-diagram-desc" className={styles.diagramDesc}>
                    Al reservar, el agente puede pasar a una tarifa equivalente más barata después de comprobar el precio. Tras la confirmación, la aplicación vigila una bajada hasta que termina la cancelación gratuita. Las dos decisiones se quedan con el agente.
                  </p>
                </figure>
                <h2>Un precio mejor cuando el agente pulsa Book</h2>
                <p>Cuando un agente pulsa Book en una tarifa, la página de reserva confirma el precio con el proveedor de esa tarifa. Al mismo tiempo pregunta a los otros proveedores por el mismo hotel.</p>
                <p>Busca solo una tarifa equivalente. La habitación tiene que ser del mismo tipo: un double no se compara nunca con un suite. El régimen tiene que ser el mismo. La reembolsabilidad tiene que ser la misma, y las condiciones de cancelación al menos igual de buenas. Un número más bajo sin desayuno, o con una regla de cancelación más estricta, es otra oferta.</p>
                <p>Si una tarifa equivalente es más barata, aparece una nota verde bajo el precio confirmado. Las cantidades de abajo son un ejemplo de lo que puede mostrar esa nota.</p>
                <p className={styles.example}>
                  <span className={styles.exampleLabel}>Ejemplo de la nota</span>
                  LiteAPI has the same room, also room only and refundable, for €18 less (€212.40 instead of €230.90).
                </p>
                <p>El agente puede abrir una vista en paralelo de qué es idéntico y qué cambia: el texto de la habitación, el plazo de cancelación gratuita y el proveedor. La elección en esa vista es <strong>Switch to this offer</strong> o <strong>Keep the current one</strong>.</p>
                <p>El cambio confirma la tarifa nueva con su propio proveedor antes del paso de datos del huésped. No se reserva nada sobre un precio que no se ha comprobado. La aplicación nunca cambia sola.</p>
                <h2>A qué proveedores se pregunta</h2>
                <p>Los simuladores entran siempre en esa búsqueda. Hotelbeds y LiteAPI no. Esos dos proveedores se consultan solo cuando alguien lanza a propósito una comprobación en vivo. En la aplicación, eso es presenter mode con el interruptor en Live. Una comprobación automática, o una visita que no es esa comprobación en vivo, no los llama. Cada búsqueda de Hotelbeds o LiteAPI se cuenta en la página de uso del API.</p>
                <p>Cuando no aparece nada mejor, la página dice que la búsqueda se hizo. Una de esas líneas es «Checked 3 other suppliers: this is still the best price.»</p>
                <h2>Tras la confirmación, una vigilancia de un precio más bajo</h2>
                <p>Una vez confirmada la reserva, y mientras todavía se pueda cancelar gratis, la aplicación sigue buscando la misma estancia a un precio más bajo, en el proveedor de la reserva y en los demás.</p>
                <p>Las comprobaciones automáticas siguen el calendario de Admin, en Suppliers &amp; checks. Buscan en los simuladores para cada reserva vigilada. Una tarifa cuenta solo cuando es estrictamente equivalente, en el mismo sentido que al reservar, y solo cuando el ahorro supera un umbral que fija la agencia. Por defecto ese umbral es €15 y el 5% del precio.</p>
                <p>Hotelbeds y LiteAPI no forman nunca parte de esas comprobaciones automáticas. Eso protege sus límites. Una reserva retenida con uno de ellos muestra un botón <strong>Check for a lower price now</strong>. El botón está disponible para la misma comprobación en vivo deliberada, presenter mode con Live activado. Antes de ejecutarse, dice que será una búsqueda contada por cada proveedor real.</p>
                <p>Cada reserva muestra una línea pequeña <strong>Price watch</strong>: cuándo se comprobó por última vez, el mejor precio equivalente encontrado y cuándo se detendrá la vigilancia. La vigilancia se detiene siempre al final de la ventana de cancelación gratuita, porque después un cambio costaría una penalización.</p>
                <h2>Cómo ve la agencia una bajada</h2>
                <p>Una bajada aparece en tres sitios.</p>
                <ul>
                  <li>Una insignia en la lista de reservas. Un ejemplo de insignia es «€42 cheaper.»</li>
                  <li>Una entrada en la campana de alertas, y un email de alerta cuando el email está configurado.</li>
                  <li>Una tarjeta Price drop en la página de la reserva.</li>
                </ul>
                <p>La tarjeta pone la reserva actual junto a la oferta nueva. Muestra:</p>
                <ul>
                  <li>las dos ofertas, una al lado de la otra</li>
                  <li>el ahorro después de cualquier diferencia de impuestos</li>
                  <li>que la reserva actual todavía se puede cancelar gratis hasta una fecha y una hora concretas, en la hora local del hotel</li>
                  <li>los pasos exactos que daría un cambio</li>
                </ul>
                <p>Las cifras usan precios de venta para el cliente y costes de proveedor para la agencia. El agente puede ver el ahorro del cliente y cómo cambia el margen de la agencia, y puede trasladar el ahorro o quedarse una parte, según las reglas de margen.</p>
                <h2>Un cambio guiado, con la habitación original todavía retenida</h2>
                <p>Elegir Switch inicia una nueva reserva guiada. El agente confirma cada paso. El orden es fijo para que el cliente no se quede sin habitación.</p>
                <ol>
                  <li>Se comprueba el precio de la tarifa nueva.</li>
                  <li>La reserva nueva se hace con los mismos viajeros.</li>
                  <li>Solo después de que el proveedor nuevo confirme se le pide al agente que cancele la reserva original. El estado de cancelación gratuita se vuelve a comprobar justo antes.</li>
                </ol>
                <p>Si la reserva nueva falla, no se cancela nada y la original sigue en pie. Si la cancelación falla, la aplicación lo dice con claridad y lista las dos reservas, para que el agente pueda terminar a mano. Nunca cancela nada de forma automática.</p>
                <p>Las dos reservas guardan una entrada de cronología que las une. Un ejemplo de esa entrada, incluido un id de reserva de ejemplo, es «Rebooked to WH-1102 for €42 less.» Los documentos nuevos de confirmación y de voucher quedan listos para la reserva nueva, y se le recuerda al agente que se los envíe al cliente.</p>
                <h2>Qué tiene que seguir siendo cierto en la oferta</h2>
                <p>Un resultado de búsqueda no es una reserva confirmada. La cifra de la página de resultados es una oferta en un momento. La página de reserva es donde el proveedor de esa tarifa confirma el precio.</p>
                <p>Compara la oferta entera, no solo el número. Una tarifa más barata con un régimen peor, o con una cancelación más débil, no es la misma oferta. Las comprobaciones de arriba dejan fuera esa tarifa.</p>
                <p>
                  Un timeout no es prueba de que la reserva falló.{" "}
                  <a href="https://developers.expediagroup.com/rapid/lodging/reference/error-responses" target="_blank" rel="noopener noreferrer">La documentación Rapid de Expedia</a>{" "}
                  describe un timeout o una respuesta 5xx que puede ocurrir después de creada una reserva, y aconseja recuperar ese intento antes de enviar otra reserva. Eso es el estado de reserva de un proveedor, aparte de la comparación de precio en WebbingHUB Travel. Un texto más largo sobre{" "}
                  <Link href={`/${locale}/blog/hotel-supplier-api-failure-booking-platform`}>timeouts de proveedor y recuperación</Link>{" "}
                  está publicado aparte.
                </p>
                <h2>La conclusión práctica</h2>
                <p>La tarifa en la que el agente hizo clic primero se comprueba con su proveedor antes de que se reserve a nadie. Un precio más barato se muestra solo cuando la habitación, el régimen y la cancelación siguen coincidiendo. Tras la confirmación, la vigilancia termina cuando termina la cancelación gratuita. El agente confirma cada paso de un cambio, y la reserva original se mantiene hasta que el proveedor nuevo ha confirmado.</p>
                <p>
                  Para equipos que trabajan en sistemas de reservas y conexiones con proveedores,{" "}
                  <a href="https://travel.webbinghub.io" target="_blank" rel="noopener noreferrer">WebbingHUB Travel</a>{" "}
                  se centra en la capa de integración y en las realidades operativas detrás de la distribución hotelera.
                </p>
                <h3>Fuente</h3>
                <ul className={styles.sources}>
                  <li>
                    <a href="https://developers.expediagroup.com/rapid/lodging/reference/error-responses" target="_blank" rel="noopener noreferrer">Expedia Group, Rapid API common error responses</a>
                    <span className={styles.sourceNote}>Un timeout o un 5xx puede seguir a una reserva que ya existe. Recupérala antes de reservar otra vez. Esto describe al proveedor, no a WebbingHUB Travel.</span>
                  </li>
                </ul>
              </>
            )}
          </div>
        </article>
      </main>
    </>
  );
}
