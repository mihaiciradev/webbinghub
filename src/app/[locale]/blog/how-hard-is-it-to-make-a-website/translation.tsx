import Link from "next/link";
import { marketingLocale } from "@/i18n/utils";
import { blogPostingSchema } from "@/i18n/article";
import styles from "@/app/blog/how-hard-is-it-to-make-a-website/page.module.css";

const POST_PATH = "/blog/how-hard-is-it-to-make-a-website";

const seo = {
  ro: {
    seoTitle: "Cât de greu este să faci un website? O privire practică",
    description:
      "Cât de greu e să construiești un website? Depinde de ce trebuie să facă. Desfacem dimensiunea, performanța și personalizarea, ca să-ți cântărești opțiunile reale.",
    h1: "Cât de greu este să faci un website?",
    section: "Dezvoltare web",
    crumb: "Cât de greu este să faci un website?",
    homeName: "Acasă",
  },
  es: {
    seoTitle: "¿Qué tan difícil es hacer una web? Un desglose práctico",
    description:
      "¿Qué tan difícil es construir una web? Depende de lo que tenga que hacer. Desglosamos el alcance, el rendimiento y la personalización para que peses tus opciones reales.",
    h1: "¿Qué tan difícil es hacer una web?",
    section: "Desarrollo web",
    crumb: "¿Qué tan difícil es hacer una web?",
    homeName: "Home",
  },
} as const;

export function hardSeo(locale: string) {
  if (locale === "ro" || locale === "es") return seo[locale];
  return null;
}

export function HardTranslation({ locale }: { locale: "ro" | "es" }) {
  const c = seo[locale];
  const ro = locale === "ro";
  const contact = `/${marketingLocale(locale)}/contact`;
  const schema = blogPostingSchema({
    locale,
    path: POST_PATH,
    headline: c.h1,
    description: c.description,
    datePublished: "2024-11-01T00:00:00Z",
    dateModified: "2026-05-26T00:00:00Z",
    wordCount: 2200,
    timeRequired: "PT8M",
    section: c.section,
    crumb: c.crumb,
    homeName: c.homeName,
  });
  const t = ro
    ? {
        tag: "Dezvoltare web",
        date: "Noiembrie 2024",
        read: "6 min de citit",
        lead: "Un website poate fi pe atât de simplu sau pe atât de complicat pe cât îți permit obiectivele și priceperea tehnică. Iată, pe șleau, ce cere de fapt, și când are sens să chemi pe cineva care face asta de meserie.",
        ctaTitle: "Încă nu e clar ce ți se potrivește?",
        ctaSub: "Dacă te gândești să faci un website și vrei un sfat sincer despre varianta potrivită situației tale, fără presiune să ne angajezi, doar claritate despre ce are sens.",
        cta: "Hai să vorbim →",
      }
    : {
        tag: "Desarrollo web",
        date: "Noviembre de 2024",
        read: "6 min de lectura",
        lead: "Una web puede ser tan simple o tan compleja como lo permitan tus objetivos y tu manejo técnico. Esto es, con calma, lo que de verdad hace falta, y cuándo tiene sentido llamar a quien se dedica a esto.",
        ctaTitle: "¿Sigues sin saber qué camino te conviene?",
        ctaSub: "Si estás pensando en hacer una web y quieres un consejo sincero sobre el mejor camino para tu caso, sin presión para contratarnos, solo claridad sobre lo que tiene sentido.",
        cta: "Hablemos →",
      };

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
              <span className={styles.metaTag}>{t.tag}</span>
              <span className={styles.metaDot}>·</span>
              <time dateTime="2024-11-01" className={styles.metaDate}>{t.date}</time>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaRead}>{t.read}</span>
            </div>
            <h1 className={styles.title}>{c.h1}</h1>
            <p className={styles.lead}>{t.lead}</p>
          </header>
          <div className={styles.body}>
            {ro ? <Romanian /> : <Spanish />}
            <div className={styles.inlineCta}>
              <p className={styles.inlineCtaTitle}>{t.ctaTitle}</p>
              <p className={styles.inlineCtaSub}>{t.ctaSub}</p>
              <Link href={contact} className={styles.ctaButton}>{t.cta}</Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

function Romanian() {
  return (
    <>
      <p>Te gândești să faci un website. Sau ai deja unul care nu își face treaba. Oricum ar fi, vrei să știi: <em>cât de greu o să fie, de fapt?</em></p>
      <p>Răspunsul sincer? Depinde în întregime de ce trebuie să facă. O pagină de prezentare, una singură, e într-adevăr simplă. O platformă de magazin, cu stoc, analize despre clienți și integrări? Asta e complicat. Cele mai multe website-uri stau undeva la mijloc.</p>
      <p>Hai să despărțim ce stabilește de fapt dificultatea, ca să poți decide informat pentru situația ta.</p>
      <h2>Ce stabilește, de fapt, cât de greu e un website</h2>
      <p>Dificultatea nu e doar despre pricepere tehnică. E despre dimensiune, nevoia de performanță, personalizare și întreținerea de după. Factorii care contează:</p>
      <h3>1. Dimensiunea: ce trebuie să facă website-ul?</h3>
      <p>Un site informativ, static (5 pagini, un formular de contact) e într-adevăr ușor. Îl poți face într-o săptămână cu WordPress, Wix sau Webflow, fără să scrii cod.</p>
      <p>Un magazin cu catalog, coș, plată, gestiune de stoc și conturi de client? Asta e exponențial mai complicat. Dintr-odată ai baze de date, gateway-uri de plată, standarde de securitate și logică de business.</p>
      <p><strong>Exemplu real:</strong> un instalator local are nevoie de un site cu descrierea serviciilor, un formular de contact și câteva poze. Asta înseamnă 4-5 ore într-un builder. Un brand care vinde în peste 20 de țări, cu prețuri locale, conformitate fiscală și integrări de livrare? 4-6 luni de dezvoltare cu oameni care fac asta de meserie.</p>
      <h3>2. Cerințele de performanță</h3>
      <p>Un site static poate fi lent și pe puțini îi deranjează. Un magazin lent pierde vânzări direct. Studiile arată că oamenii părăsesc site-urile care încarcă în mai mult de 3 secunde, și ăsta e doar pragul de jos. Un site care merge bine poate converti cu 10-15% mai bine decât unul lent.</p>
      <p>Să construiești pentru performanță înseamnă imagini optimizate, cache, hosting rapid, cod eficient. Se poate, dar cere pricepere și atenție. Un builder înseamnă adesea să accepți performanța pe care ți-o dă el.</p>
      <h3>3. Cât de personalizat trebuie să fie</h3>
      <p>Vrei ca website-ul să arate și să se comporte exact ca viziunea brandului? Sau te poți adapta la ce oferă un șablon?</p>
      <p>Builder-ele (Wix, Squarespace, Webflow) îți dau șabloane pe care le personalizezi în niște limite. E rapid, dar te limitează. Dacă industria ta are nevoi vizuale anume, sau fluxul tău nu e cel obișnuit, dai de limitele alea repede.</p>
      <p>Dezvoltarea pe măsură înseamnă că poți construi orice, dar durează mai mult și costă mai mult.</p>
      <h3>4. Complexitatea integrărilor</h3>
      <p>Website-ul trebuie să se lege de alte unelte? CRM, email marketing, soft de contabilitate, sisteme de stoc, procesatori de plată?</p>
      <p>Integrările simple (un buton Stripe, un formular încorporat) sunt directe în orice builder. Integrările complicate (stoc sincronizat în timp real, fluxuri automate, date care circulă după reguli proprii) cer lucru de dezvoltare.</p>
      <p><strong>Exemplu:</strong> un builder poate încorpora un formular care trimite în Mailchimp în 10 minute. Dar dacă stocul de pe website trebuie să se sincronizeze singur cu depozitul și să actualizeze disponibilitatea în timp real? Asta e dezvoltare de backend, pe măsură.</p>
      <h3>5. Întreținerea și creșterea, după lansare</h3>
      <p>Construcția e doar începutul. Website-urile au nevoie de:</p>
      <ul>
        <li><strong>Actualizări de securitate:</strong> plugin-uri, framework-uri, dependențe, toate primesc patch-uri. Unele trebuie aplicate de mână.</li>
        <li><strong>Urmărirea performanței:</strong> trebuie să vezi dacă lucrurile încetinesc și să le repari.</li>
        <li><strong>Actualizări de conținut:</strong> cineva trebuie să adauge produse, să schimbe pagini, să țină articolele.</li>
        <li><strong>Cereri de funcții:</strong> „Putem adăuga X?” cere timp de dezvoltare.</li>
        <li><strong>Scalare:</strong> site-ul merge bine la 100 de vizitatori pe zi și începe să cedeze la 10.000. Reparatul ăsta e complicat.</li>
      </ul>
      <p>Builder-ele preiau o bună parte din asta automat (actualizări, hosting, scalare). La dezvoltare pe măsură, tu ești responsabil de mai mult.</p>
      <h2>Schimbul real: builder sau dezvoltare pe măsură</h2>
      <h3>Builder-e de website (Wix, Squarespace, Webflow și altele)</h3>
      <p><strong>Potrivite pentru:</strong> site-uri simple, lansări rapide, buget limitat, echipe fără profil tehnic</p>
      <ul>
        <li>✅ Lansare rapidă (zile, nu luni)</li>
        <li>✅ Fără cod</li>
        <li>✅ Hosting, securitate și actualizări, rezolvate automat</li>
        <li>✅ Cost inițial mai mic</li>
        <li>✅ Șabloane bune de la care să pornești</li>
        <li>❌ Personalizare limitată: te adaptezi tu la platformă</li>
        <li>❌ Mai greu de mutat site-ul mai târziu (vendor lock-in)</li>
        <li>❌ Integrări limitate cu unelte din afară</li>
        <li>❌ Poate fi mai lent decât un site construit pe măsură</li>
        <li>❌ Mai greu de dus dincolo de funcțiile de bază</li>
      </ul>
      <h3>Dezvoltare pe măsură</h3>
      <p><strong>Potrivită pentru:</strong> site-uri complicate, cerințe unice, creștere pe termen lung, sofisticare tehnică</p>
      <ul>
        <li>✅ Construiești exact ce ai nevoie, fără compromisuri</li>
        <li>✅ Performanță mai bună (când e făcută cum trebuie)</li>
        <li>✅ Mai ușor de legat de unelte și fluxuri proprii</li>
        <li>✅ Codul e al tău, fără vendor lock-in</li>
        <li>✅ Crește în complexitate fără să dea de un zid</li>
        <li>❌ Durează mai mult (săptămâni sau luni)</li>
        <li>❌ Cost inițial mai mare</li>
        <li>❌ Ai nevoie de o echipă tehnică sau angajezi dezvoltatori</li>
        <li>❌ Tu ești responsabil de actualizări, securitate și întreținere</li>
      </ul>
      <h2>Ce face, de fapt, ca un proiect să iasă prost?</h2>
      <div className={styles.highlight}>
        <p><strong>Ce vedem cel mai des:</strong> afaceri care fac un website fără să fie clare pe ce au nevoie. Apoi:</p>
        <ul>
          <li>Aleg un builder pentru că e ieftin, apoi îl depășesc în 18 luni</li>
          <li>Angajează un dezvoltator care construiește ceva de neîntreținut, sau care nu se potrivește cu felul lor de lucru</li>
          <li>Lansează fără să se gândească la actualizări și la securitate</li>
          <li>Optimizează cum arată, nu cum merge sau cum convertește</li>
          <li>Aleg o soluție (stack, platformă, abordare) care îi închide înăuntru</li>
        </ul>
      </div>
      <h2>Cum știi ce drum ți se potrivește</h2>
      <p>Răspunde sincer la întrebările astea:</p>
      <p><strong>1. Ce trebuie să facă, de fapt, website-ul?</strong> (Scrie lista. Fii precis.)</p>
      <p><strong>2. Ai nevoie de integrări proprii cu alte unelte?</strong></p>
      <p><strong>3. Cât de importante sunt performanța și conversia?</strong> Dacă 2 secunde în plus la viteză ar schimba ceva în afacere, dezvoltarea pe măsură merită.</p>
      <p><strong>4. Ce termen ai?</strong> Dacă trebuie să fie live în 2 săptămâni, câștigă builder-ul. Dacă ai 3 luni, dezvoltarea pe măsură e fezabilă.</p>
      <p><strong>5. Ai buget pentru întreținere?</strong> Builder-ele o includ. Site-urile pe măsură o cer.</p>
      <p><strong>6. O să ți se schimbe nevoile?</strong> Dacă da, dezvoltarea pe măsură e mai flexibilă pe termen lung.</p>
      <p><strong>7. Cât de important e să deții codul?</strong> La un builder închiriezi o platformă. La dezvoltare pe măsură, e al tău.</p>
      <h2>Costul real al unei alegeri greșite</h2>
      <p>O abordare greșită nu e doar enervantă. Are costuri reale:</p>
      <ul>
        <li>Construiești pe platforma greșită și, peste 6 luni, reconstruiești pentru că ai depășit-o</li>
        <li>Lansezi fără optimizare de performanță și pierzi 15-20% din conversiile posibile, pentru că oamenii pleacă</li>
        <li>Angajezi un dezvoltator ieftin care face ceva de neîntreținut, și rămâi blocat</li>
        <li>Sari peste actualizările de securitate și ești spart (se întâmplă mereu)</li>
        <li>Lansezi fără un SEO pus cum trebuie și rămâi invizibil pentru Google</li>
      </ul>
      <h2>Drumul de aici</h2>
      <p>Realitatea, pe șleau: <strong>website-urile mici și simple sunt într-adevăr ușor de făcut singur.</strong> Folosește un builder. Economisești bani și lansezi repede.</p>
      <p><strong>Website-urile complicate, sau cele care aduc valoare reală în afacere, merită construite cu intenție.</strong> Asta înseamnă claritate pe cerințe, alegerea drumului potrivit (nu doar a celui mai ieftin), dezvoltare cu oameni de meserie dacă e nevoie, și gândul la întreținere din prima zi.</p>
      <p>Dificultatea de a face un website nu e o întrebare cu da sau nu. E: „Ce încerc să obțin, și care e drumul cel mai deștept până acolo?” Uneori e un builder de 50 de dolari pe lună. Uneori e un proiect pe măsură, de 4 luni, cu o echipă. De cele mai multe ori e ceva la mijloc.</p>
      <p>Afacerile care ies bine sunt cele care au ales conștient, după nevoile lor reale, nu după ce era mai ieftin sau după ce le-a spus cineva să facă.</p>
    </>
  );
}

function Spanish() {
  return (
    <>
      <p>Estás pensando en hacer una web. O ya tienes una que no funciona. En los dos casos quieres saber: <em>¿qué tan difícil va a ser de verdad?</em></p>
      <p>La respuesta sincera: depende por completo de lo que tenga que hacer. Una landing de una página es de verdad sencilla. Una tienda con inventario, analítica de clientes e integraciones es compleja. La mayoría de las webs caen en medio.</p>
      <p>Vamos a separar qué marca de verdad la dificultad, para que decidas con información sobre tu caso.</p>
      <h2>Qué marca, de verdad, lo difícil que es una web</h2>
      <p>La dificultad no va solo de habilidad técnica. Va de alcance, de rendimiento, de personalización y del mantenimiento de después. Los factores que importan:</p>
      <h3>1. El alcance: ¿qué tiene que hacer la web?</h3>
      <p>Una web informativa y estática (5 páginas, un formulario de contacto) es de verdad fácil. La puedes montar en una semana con WordPress, Wix o Webflow, sin escribir código.</p>
      <p>Una tienda con catálogo, carrito, pago, inventario y cuentas de cliente es exponencialmente más compleja. De pronto gestionas bases de datos, pasarelas de pago, estándares de seguridad y lógica de negocio.</p>
      <p><strong>Ejemplo real:</strong> un fontanero local necesita un sitio con la descripción de los servicios, un formulario y unas fotos. Eso son 4-5 horas en un constructor. Una marca que vende en más de 20 países, con precios locales, cumplimiento fiscal e integraciones de envío: 4-6 meses de desarrollo profesional.</p>
      <h3>2. Los requisitos de rendimiento</h3>
      <p>Una web estática puede ir lenta y a poca gente le importa. Una tienda lenta pierde ventas directamente. Los estudios muestran que la gente abandona los sitios que tardan más de 3 segundos en cargar, y eso es solo el mínimo. Un sitio que va bien puede convertir un 10-15% mejor que uno lento.</p>
      <p>Construir para el rendimiento es optimizar imágenes, gestionar caché, elegir un hosting rápido y escribir código eficiente. Se puede, pero pide oficio y atención. Un constructor suele significar aceptar el rendimiento que te dan.</p>
      <h3>3. Cuánta personalización hace falta</h3>
      <p>¿Necesitas que la web se vea y funcione exactamente como la visión de la marca? ¿O puedes adaptarte a lo que ofrece una plantilla?</p>
      <p>Los constructores (Wix, Squarespace, Webflow) te dan plantillas que personalizas dentro de unos límites. Es rápido, y te limita. Si tu sector tiene necesidades visuales concretas, o tu forma de trabajar no es la habitual, chocas con esos límites enseguida.</p>
      <p>El desarrollo a medida permite construir cualquier cosa, pero tarda más y cuesta más.</p>
      <h3>4. La complejidad de las integraciones</h3>
      <p>¿La web tiene que conectarse con otras herramientas? CRM, email marketing, software de contabilidad, inventario, procesadores de pago.</p>
      <p>Las integraciones simples (un botón de Stripe, un formulario incrustado) son directas en cualquier constructor. Las complejas (inventario sincronizado en tiempo real, flujos automáticos, datos que se mueven con reglas propias) piden trabajo de desarrollo.</p>
      <p><strong>Ejemplo:</strong> un constructor puede incrustar un formulario que envía a Mailchimp en 10 minutos. Si el inventario de la web tiene que sincronizarse solo con el almacén y actualizar la disponibilidad en tiempo real, eso es desarrollo de backend a medida.</p>
      <h3>5. El mantenimiento y el crecimiento, después del lanzamiento</h3>
      <p>Construir es solo el principio. Las webs necesitan:</p>
      <ul>
        <li><strong>Actualizaciones de seguridad:</strong> plugins, frameworks y dependencias reciben parches. Algunos hay que aplicarlos a mano.</li>
        <li><strong>Seguimiento del rendimiento:</strong> hay que ver si las cosas se vuelven lentas y arreglarlo.</li>
        <li><strong>Actualizaciones de contenido:</strong> alguien tiene que añadir productos, cambiar páginas y llevar los artículos.</li>
        <li><strong>Peticiones de funciones:</strong> «¿podemos añadir X?» pide tiempo de desarrollo.</li>
        <li><strong>Escala:</strong> el sitio va bien con 100 visitas al día y empieza a romperse con 10.000. Arreglar eso es complejo.</li>
      </ul>
      <p>Los constructores se ocupan de buena parte de esto solos (actualizaciones, hosting, escala). En un desarrollo a medida, tú eres responsable de más.</p>
      <h2>El intercambio real: constructor o desarrollo a medida</h2>
      <h3>Constructores de webs (Wix, Squarespace, Webflow y otros)</h3>
      <p><strong>Encajan cuando:</strong> el sitio es simple, el lanzamiento es rápido, el presupuesto es corto y el equipo no es técnico</p>
      <ul>
        <li>✅ Lanzamiento rápido (días, no meses)</li>
        <li>✅ Sin código</li>
        <li>✅ Hosting, seguridad y actualizaciones, resueltos solos</li>
        <li>✅ Coste inicial más bajo</li>
        <li>✅ Buenas plantillas de las que partir</li>
        <li>❌ Personalización limitada: te adaptas tú a la plataforma</li>
        <li>❌ Más difícil mover el sitio después (vendor lock-in)</li>
        <li>❌ Integraciones limitadas con herramientas de fuera</li>
        <li>❌ Puede ser más lento que un sitio hecho a medida</li>
        <li>❌ Más difícil ir más allá de las funciones básicas</li>
      </ul>
      <h3>Desarrollo a medida</h3>
      <p><strong>Encaja cuando:</strong> el sitio es complejo, los requisitos son únicos, hay crecimiento a largo plazo y hace falta oficio técnico</p>
      <ul>
        <li>✅ Construyes exactamente lo que necesitas, sin compromisos</li>
        <li>✅ Mejor rendimiento (cuando está bien hecho)</li>
        <li>✅ Más fácil de conectar con herramientas y flujos propios</li>
        <li>✅ El código es tuyo, sin vendor lock-in</li>
        <li>✅ Crece en complejidad sin dar contra un muro</li>
        <li>❌ Tarda más (semanas o meses)</li>
        <li>❌ Coste inicial más alto</li>
        <li>❌ Necesitas un equipo técnico o contratas a quien desarrolle</li>
        <li>❌ Tú eres responsable de actualizaciones, seguridad y mantenimiento</li>
      </ul>
      <h2>Qué hace, de verdad, que un proyecto salga mal</h2>
      <div className={styles.highlight}>
        <p><strong>Lo que vemos más a menudo:</strong> negocios que hacen una web sin tener claro qué necesitan. Después:</p>
        <ul>
          <li>Eligen un constructor porque es barato y se les queda corto en 18 meses</li>
          <li>Contratan a alguien que construye algo imposible de mantener, o que no encaja con su forma de trabajar</li>
          <li>Lanzan sin pensar en actualizaciones y en seguridad</li>
          <li>Optimizan cómo se ve, no cómo va o cómo convierte</li>
          <li>Eligen una solución (stack, plataforma, enfoque) que los encierra</li>
        </ul>
      </div>
      <h2>Cómo saber qué camino te conviene</h2>
      <p>Responde con sinceridad:</p>
      <p><strong>1. ¿Qué tiene que hacer, de verdad, la web?</strong> (Escríbelo. Sé concreto.)</p>
      <p><strong>2. ¿Vas a necesitar integraciones propias con otras herramientas?</strong></p>
      <p><strong>3. ¿Qué importancia tienen el rendimiento y la conversión?</strong> Si 2 segundos de velocidad cambiaran algo en el negocio, el desarrollo a medida merece la pena.</p>
      <p><strong>4. ¿Qué plazo tienes?</strong> Si tiene que estar en vivo en 2 semanas, gana el constructor. Si tienes 3 meses, el desarrollo a medida es viable.</p>
      <p><strong>5. ¿Tienes presupuesto para el mantenimiento?</strong> Los constructores lo incluyen. Los sitios a medida lo exigen.</p>
      <p><strong>6. ¿Van a cambiar tus necesidades?</strong> Si sí, el desarrollo a medida es más flexible a largo plazo.</p>
      <p><strong>7. ¿Qué importancia tiene ser dueño del código?</strong> Con un constructor alquilas una plataforma. Con un desarrollo a medida, es tuyo.</p>
      <h2>El coste real de elegir mal</h2>
      <p>Un enfoque equivocado no es solo molesto. Tiene costes reales:</p>
      <ul>
        <li>Construyes en la plataforma equivocada y, seis meses después, reconstruyes porque se te quedó corta</li>
        <li>Lanzas sin optimizar el rendimiento y pierdes un 15-20% de las conversiones posibles, porque la gente se va</li>
        <li>Contratas barato a alguien que construye algo imposible de mantener, y te quedas atascado</li>
        <li>Te saltas las actualizaciones de seguridad y te entran (pasa constantemente)</li>
        <li>Lanzas sin un SEO bien puesto y sigues invisible para Google</li>
      </ul>
      <h2>El camino desde aquí</h2>
      <p>La realidad, dicha clara: <strong>las webs pequeñas y simples son de verdad fáciles de hacer uno mismo.</strong> Usa un constructor. Ahorras dinero y lanzas rápido.</p>
      <p><strong>Las webs complejas, o las que aportan valor real al negocio, conviene construirlas con intención.</strong> Eso es claridad en los requisitos, elegir el camino adecuado (no solo el más barato), desarrollo profesional si hace falta, y pensar en el mantenimiento desde el primer día.</p>
      <p>La dificultad de hacer una web no es una pregunta de sí o no. Es: «¿qué intento conseguir, y cuál es el camino más sensato para llegar?» A veces es un constructor de 50 dólares al mes. A veces es un proyecto a medida de 4 meses, con un equipo. La mayoría de las veces es algo en medio.</p>
      <p>Los negocios que salen bien son los que eligieron a conciencia, según lo que de verdad necesitaban, no según lo más barato o lo que alguien les dijo que hicieran.</p>
    </>
  );
}
