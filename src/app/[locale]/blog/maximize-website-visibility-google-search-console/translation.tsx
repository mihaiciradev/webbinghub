import { marketingLocale } from "@/i18n/utils";
import { blogPostingSchema } from "@/i18n/article";
import styles from "@/app/blog/page.module.css";

const SLUG = "maximize-website-visibility-google-search-console";
const PATH = `/blog/${SLUG}`;

const seo = {
  ro: {
    seoTitle: "Vizibilitate mai bună în Google: ghid practic de Search Console",
    description:
      "Cum îți arată Google Search Console performanța în căutare. Afișări, clicuri, CTR, și cum transformi traficul ăla în creștere pentru afacere. Un ghid practic pentru cine are un website.",
    h1before: "Vizibilitate mai bună pentru website: un ghid practic de ",
    h1em: "Google Search Console",
    headline: "Vizibilitate mai bună pentru website: un ghid practic de Google Search Console",
    section: "Dezvoltare web și SEO",
    crumb: "Ghid Google Search Console",
    homeName: "Acasă",
    home: "Acasă",
  },
  es: {
    seoTitle: "Más visibilidad en Google: guía práctica de Search Console",
    description:
      "Cómo muestra Google Search Console el rendimiento en la búsqueda. Impresiones, clics, CTR, y cómo convertir ese tráfico en crecimiento para el negocio. Una guía práctica para quien tiene una web.",
    h1before: "Más visibilidad para tu web: una guía práctica de ",
    h1em: "Google Search Console",
    headline: "Más visibilidad para tu web: una guía práctica de Google Search Console",
    section: "Desarrollo web y SEO",
    crumb: "Guía de Google Search Console",
    homeName: "Home",
    home: "Home",
  },
} as const;

export function gscSeo(locale: string) {
  if (locale === "ro" || locale === "es") return seo[locale];
  return null;
}

export function GscTranslation({ locale }: { locale: "ro" | "es" }) {
  const c = seo[locale];
  const ro = locale === "ro";
  const home = marketingLocale(locale);
  const schema = blogPostingSchema({
    locale,
    path: PATH,
    headline: c.headline,
    description: c.description,
    datePublished: "2026-05-26T00:00:00Z",
    dateModified: "2026-05-26T00:00:00Z",
    wordCount: 2500,
    timeRequired: "PT6M",
    section: c.section,
    crumb: c.crumb,
    homeName: c.homeName,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className={styles.article}>
        <div className={styles.articleHeader}>
          <div className={styles.breadcrumb}>
            <a href={`/${home}`}>{c.home}</a>
            <span>/</span>
            <a href={`/${locale}/blog`}>Blog</a>
            <span>/</span>
            <span>{c.crumb}</span>
          </div>
          <header className={styles.header}>
            <p className={styles.eyebrow}>{c.section}</p>
            <h1 className={styles.title}>{c.h1before}<em>{c.h1em}</em></h1>
            <p className={styles.subtitle}>
              {ro
                ? "Cum îți schimbă Google Search Console felul în care citești performanța în căutare. Afișări, clicuri, CTR, și cum transformi traficul în creștere pentru afacere."
                : "Cómo cambia Google Search Console la lectura del rendimiento en la búsqueda. Impresiones, clics, CTR, y cómo convertir el tráfico en crecimiento para el negocio."}
            </p>
          </header>
          <div className={styles.meta}>
            <span>{ro ? "Publicat pe 26 mai 2026" : "Publicado el 26 de mayo de 2026"}</span>
            <span className={styles.separator}>•</span>
            <span>{ro ? "6 min de citit" : "6 min de lectura"}</span>
            <span className={styles.separator}>•</span>
            <span>{ro ? "De WebbingHUB" : "Por WebbingHUB"}</span>
          </div>
        </div>
        <div className={styles.content}>
          {ro ? <Romanian /> : <Spanish />}
        </div>
      </article>
    </>
  );
}

function Romanian() {
  return (
    <>
      <p>Website-ul e live. Ai pus timp și resurse în el. Dar întrebarea pe care o pune orice om cu o afacere e: <em>„Chiar aduce trafic din Google?”</em></p>
      <p>Răspunsul stă într-o unealtă gratuită pe care mulți o ignoră: <strong>Google Search Console</strong>. E linia ta directă către Google. Îți arată exact cum apare website-ul în rezultate și ce îi face pe oameni să dea clic.</p>
      <section>
        <h2>De ce are nevoie website-ul de Search Console</h2>
        <p>Gândește-te la Google Search Console ca la panoul website-ului pentru performanța în căutare. Fără el, zbori fără instrumente. Nu știi:</p>
        <ul>
          <li>Ce interogări din Google aduc, de fapt, oameni pe site</li>
          <li>De câte ori apare site-ul în rezultate (afișări)</li>
          <li>Câți oameni dau clic până pe site (clicuri)</li>
          <li>Poziția medie pentru fiecare cuvânt</li>
          <li>Dacă Google poate găsi și indexa paginile</li>
          <li>Dacă există erori tehnice care împiedică site-ul să apară în căutare</li>
        </ul>
        <p>Fără datele astea, ghicești ce funcționează.</p>
      </section>
      <section>
        <h2>Metricile esențiale</h2>
        <p>Google Search Console se învârte în jurul a trei metrici care contează:</p>
        <h3>1. Afișări</h3>
        <p>O afișare înseamnă că cineva a văzut linkul website-ului într-un rezultat Google (sau în Google Discover). Dacă apari pe poziția 5 pentru „custom website for restaurants” și 200 de oameni caută asta, ai 200 de afișări, chiar dacă nimeni nu dă clic.</p>
        <p><strong>De ce contează:</strong> afișări multe și clicuri puține înseamnă, de obicei, că titlul și descrierea au nevoie de lucru, sau că te clasezi pe cuvinte greșite.</p>
        <h3>2. Clicuri</h3>
        <p>Un clic e momentul în care cineva apasă linkul dintr-un rezultat Google și ajunge pe website. Ăsta e traficul care contează.</p>
        <p><strong>De ce contează:</strong> clicurile arată că vizibilitatea în căutare se transformă în vizitatori. Mai multe clicuri înseamnă mai mulți posibili clienți care văd site-ul.</p>
        <h3>3. Rata de clic (CTR)</h3>
        <p>CTR-ul e un calcul simplu: (clicuri ÷ afișări) × 100. Dacă ai avut 100 de afișări și 5 clicuri, CTR-ul e 5%.</p>
        <p><strong>De ce contează:</strong> CTR-ul arată cât de convingătoare e listarea. Dacă te clasezi bine și nu dă nimeni clic, titlul sau descrierea trebuie îmbunătățite.</p>
        <div className={styles.highlight}>
          <strong>Exemplu real:</strong> website-ul unui restaurant apare în 1.000 de căutări Google pe lună pentru „Italian restaurant in [city]” (1.000 de afișări) și primește doar 40 de clicuri. Asta e un CTR de 4%, deci 96% dintre cei care caută au ales un competitor. Îți spune că listarea nu e destul de atractivă, deși te clasezi.
        </div>
      </section>
      <section>
        <h2>Cum începi: 4 pași simpli</h2>
        <h3>Pasul 1: Adaugă website-ul în Search Console</h3>
        <p>Mergi la <strong>search.google.com/search-console</strong>, intră cu contul Google și adaugă website-ul ca proprietate. Alegi între:</p>
        <ul>
          <li><strong>Domain property</strong> (recomandat), urmărește toate versiunile site-ului (www, fără www, http, https, subdomenii) într-un singur loc</li>
          <li><strong>URL prefix property</strong>, urmărește doar URL-ul exact pe care îl indici</li>
        </ul>
        <h3>Pasul 2: Verifică proprietatea</h3>
        <p>Google are nevoie de dovada că site-ul e al tău. Metodele cele mai simple:</p>
        <ul>
          <li>Adaugi un tag HTML pe pagina de start (câteva linii de cod)</li>
          <li>Încarci un fișier HTML de verificare pe server</li>
          <li>Te conectezi prin Google Analytics (dacă îl ai deja)</li>
        </ul>
        <h3>Pasul 3: Trimite sitemap-ul</h3>
        <p>Un sitemap e lista paginilor. Îl ajută pe Google să descopere și să parcurgă site-ul mai repede. Cele mai multe platforme (WordPress, Next.js și altele) generează un sitemap la <code>/sitemap.xml</code>. Lipești URL-ul ăla în Search Console și îl trimiți.</p>
        <h3>Pasul 4: Uită-te la raportul de performanță</h3>
        <p>După câteva zile, Search Console începe să arate date. Te uiți la:</p>
        <ul>
          <li><strong>Performance Report:</strong> ce cuvinte aduc trafic, pe ce poziții te clasezi și care e CTR-ul</li>
          <li><strong>Coverage Report:</strong> dacă toate paginile sunt indexate, sau dacă Google a găsit erori</li>
          <li><strong>Security Issues Report:</strong> o alertă dacă Google detectează un atac sau malware</li>
        </ul>
      </section>
      <section>
        <h2>Ce faci cu datele astea</h2>
        <p>Numerele singure nu mișcă afacerea. Așa arată <strong>concluzii pe care poți acționa</strong>:</p>
        <p><strong>Scenariul 1:</strong> ai 500 de afișări pentru un cuvânt și doar 5 clicuri (CTR 1%). <em>Acțiune:</em> rescrie titlul paginii și meta description, ca să fie mai convingătoare.</p>
        <p><strong>Scenariul 2:</strong> o pagină pe care o credeai importantă nu apare în niciun rezultat. <em>Acțiune:</em> Google n-a putut-o indexa. Verifică raportul Coverage, vezi eroarea, repar-o și trimite din nou.</p>
        <p><strong>Scenariul 3:</strong> ești pe locul 8 pentru un cuvânt cu valoare mare. <em>Acțiune:</em> îmbunătățește conținutul paginii ca să urce în primele 3. Creșteri mici de poziție aduc adesea creșteri mari de trafic.</p>
      </section>
      <section>
        <h2>De ce rămân în urmă cele mai multe website-uri (chiar cu Search Console)</h2>
        <div className={styles.warning}>
          <h3>Strangularea ascunsă</h3>
          <p>Ce vedem mereu: afaceri care își pun Search Console, se uită o dată, văd datele, și apoi... nimic. Fie nu știu ce să facă cu ce văd, fie încearcă reparații care nu țin.</p>
          <p>Problema reală? <strong>Succesul în Search Console depinde de ce s-a întâmplat înaintea lui.</strong></p>
        </div>
        <p>Search Console e ca bordul mașinii: îți spune dacă motorul merge eficient. Dacă motorul a fost construit prost, niciun bord nu îl repară.</p>
        <p>Performanța website-ului ține de:</p>
        <ul>
          <li><strong>Arhitectură:</strong> e site-ul organizat într-un fel pe care Google îl poate înțelege? URL-urile sunt curate? Navigarea are logică?</li>
          <li><strong>Setup tehnic:</strong> se încarcă repede? Merge pe mobil? Există erori de crawl sau de indexare?</li>
          <li><strong>Calitatea conținutului:</strong> paginile răspund, de fapt, la ce caută oamenii?</li>
          <li><strong>Semnale de încredere:</strong> site-ul arată profesionist și de încredere, și pentru Google, și pentru vizitatori?</li>
        </ul>
        <p>Cele mai multe website-uri făcute singur, sau ieftin, pică pe una sau mai multe dintre astea. Search Console arată problema, dar n-o poți repara fără să reconstruiești părți din site.</p>
      </section>
      <section>
        <h2>Drumul de aici</h2>
        <p>Dacă ai deja un website, Search Console merită pus. Începe să strângi date azi. În 30 de zile vezi tipare; în 90 de zile ai claritate despre ce funcționează.</p>
        <p>Dar dacă <strong>construiești un website nou</strong>, sau îl reconstruiești pe unul vechi, există un drum mai deștept: <strong>să-l faci bine din prima zi</strong>, gândit pentru căutare de la temelie.</p>
        <div className={styles.inlineCta}>
          <p className={styles.inlineCtaTitle}>La WebbingHUB construim website-uri pe măsură, cu vizibilitatea în căutare pusă din construcție.</p>
          <p className={styles.inlineCtaSub}>Asta înseamnă arhitectură curată, încărcare rapidă, optimizare pentru mobil, indexare pusă cum trebuie și un design profesionist. Când lansezi, Google poate găsi și clasa site-ul. Atunci Search Console devine o unealtă de creștere, nu de stins incendii.</p>
          <p className={styles.inlineCtaSub}>Te ajutăm și să înțelegi datele, și să acționezi pe ele, ca website-ul să devină un canal care aduce lead-uri și vânzări.</p>
          <a href="mailto:hello@webbinghub.io" className={styles.ctaButton}>Hai să vorbim despre website →</a>
        </div>
      </section>
      <section>
        <h2>De reținut</h2>
        <ul>
          <li>Google Search Console e gratuit și îți arată exact cum se descurcă site-ul în căutare</li>
          <li>Afișările, clicurile și CTR-ul sunt cele trei metrici care spun povestea</li>
          <li>Punerea în funcțiune ia 15 minute; valoarea reală cere atenție continuă și pricepere tehnică</li>
          <li>Cele mai multe website-uri rămân în urmă pentru că au fost construite fără căutare în minte. Search Console arată problema, dar n-o repară</li>
          <li>Un website gândit pentru căutare din prima zi e mult mai ușor decât să repari unul mai târziu</li>
          <li>Îmbunătățiri mici de poziție, de CTR și de calitate a paginii se adună, în timp, într-o creștere reală a afacerii</li>
        </ul>
      </section>
      <div className={styles.footerNote}>
        <p>
          <strong>Gata să construiești un website care chiar performează?</strong>{" "}
          WebbingHUB face website-uri pe măsură, construite pentru vizibilitate în căutare și pentru experiența omului, de la arhitectură până la conținut. Nu lansăm și sperăm. Construim cum trebuie, urmărim rezultatele și te ajutăm să crești.{" "}
          <a href="mailto:hello@webbinghub.io">Scrie-ne</a> ca să vezi cum poate deveni website-ul un activ real al afacerii.
        </p>
      </div>
    </>
  );
}

function Spanish() {
  return (
    <>
      <p>La web ya está en vivo. Has puesto tiempo y recursos en ella. La pregunta que se hace quien lleva un negocio es: <em>«¿de verdad trae tráfico desde Google?»</em></p>
      <p>La respuesta está en una herramienta gratuita que mucha gente ignora: <strong>Google Search Console</strong>. Es tu línea directa con Google. Te muestra exactamente cómo aparece la web en los resultados y qué hace que la gente haga clic.</p>
      <section>
        <h2>Por qué tu web necesita Search Console</h2>
        <p>Piensa en Google Search Console como el panel de la web para el rendimiento en la búsqueda. Sin él, vas a ciegas. No sabes:</p>
        <ul>
          <li>Qué consultas de Google traen de verdad a la gente al sitio</li>
          <li>Cuántas veces aparece el sitio en los resultados (impresiones)</li>
          <li>Cuánta gente hace clic hasta el sitio (clics)</li>
          <li>La posición media de cada palabra</li>
          <li>Si Google puede encontrar e indexar las páginas</li>
          <li>Si hay errores técnicos que impiden que el sitio aparezca en la búsqueda</li>
        </ul>
        <p>Sin estos datos, estás adivinando qué funciona.</p>
      </section>
      <section>
        <h2>Las métricas que importan</h2>
        <p>Google Search Console gira alrededor de tres métricas:</p>
        <h3>1. Impresiones</h3>
        <p>Una impresión significa que alguien vio el enlace de tu web en un resultado de Google (o en Google Discover). Si apareces en la posición 5 para «custom website for restaurants» y 200 personas buscan eso, tienes 200 impresiones, aunque nadie haga clic.</p>
        <p><strong>Por qué importa:</strong> muchas impresiones y pocos clics suelen decir que el título y la descripción necesitan trabajo, o que estás posicionando por palabras que no te convienen.</p>
        <h3>2. Clics</h3>
        <p>Un clic es el momento en que alguien pulsa tu enlace en un resultado de Google y llega a la web. Ese es el tráfico que importa.</p>
        <p><strong>Por qué importa:</strong> los clics muestran que la visibilidad en la búsqueda se convierte en visitas. Más clics significa más posibles clientes viendo el sitio.</p>
        <h3>3. Porcentaje de clics (CTR)</h3>
        <p>El CTR es una cuenta simple: (clics ÷ impresiones) × 100. Si tuviste 100 impresiones y 5 clics, el CTR es el 5%.</p>
        <p><strong>Por qué importa:</strong> el CTR muestra lo convincente que es tu ficha. Si posicionas bien y nadie hace clic, hay que mejorar el título o la descripción.</p>
        <div className={styles.highlight}>
          <strong>Ejemplo real:</strong> la web de un restaurante aparece en 1.000 búsquedas de Google al mes para «Italian restaurant in [city]» (1.000 impresiones) y solo recibe 40 clics. Eso es un CTR del 4%, así que el 96% de quien buscaba eligió a un competidor. Te dice que la ficha no es lo bastante atractiva, aunque posiciones.
        </div>
      </section>
      <section>
        <h2>Cómo empezar: 4 pasos simples</h2>
        <h3>Paso 1: Añade la web a Search Console</h3>
        <p>Entra en <strong>search.google.com/search-console</strong>, inicia sesión con tu cuenta de Google y añade la web como propiedad. Eliges entre:</p>
        <ul>
          <li><strong>Domain property</strong> (recomendado), sigue todas las versiones del sitio (www, sin www, http, https, subdominios) en un solo sitio</li>
          <li><strong>URL prefix property</strong>, sigue solo la URL exacta que indicas</li>
        </ul>
        <h3>Paso 2: Verifica la propiedad</h3>
        <p>Google necesita una prueba de que el sitio es tuyo. Los métodos más simples:</p>
        <ul>
          <li>Añades una etiqueta HTML en la página de inicio (unas líneas de código)</li>
          <li>Subes un archivo HTML de verificación al servidor</li>
          <li>Te conectas a través de Google Analytics (si ya lo tienes)</li>
        </ul>
        <h3>Paso 3: Envía el sitemap</h3>
        <p>Un sitemap es la lista de tus páginas. Ayuda a Google a descubrir y rastrear el sitio más rápido. La mayoría de las plataformas (WordPress, Next.js y otras) generan un sitemap en <code>/sitemap.xml</code>. Pegas esa URL en Search Console y la envías.</p>
        <h3>Paso 4: Mira el informe de rendimiento</h3>
        <p>A los pocos días, Search Console empieza a mostrar datos. Mira:</p>
        <ul>
          <li><strong>Performance Report:</strong> qué palabras traen tráfico, en qué posiciones apareces y cuál es el CTR</li>
          <li><strong>Coverage Report:</strong> si todas las páginas están indexadas, o si Google encontró errores</li>
          <li><strong>Security Issues Report:</strong> un aviso si Google detecta un ataque o malware</li>
        </ul>
      </section>
      <section>
        <h2>Qué hacer con estos datos</h2>
        <p>Los números solos no mueven el negocio. Así se ven las <strong>conclusiones sobre las que se puede actuar</strong>:</p>
        <p><strong>Escenario 1:</strong> tienes 500 impresiones para una palabra y solo 5 clics (CTR del 1%). <em>Acción:</em> reescribe el título de la página y la meta description para que convenzan más.</p>
        <p><strong>Escenario 2:</strong> una página que creías importante no aparece en ningún resultado. <em>Acción:</em> Google no pudo indexarla. Revisa el informe Coverage, mira el error, arréglalo y vuelve a enviarla.</p>
        <p><strong>Escenario 3:</strong> estás en el puesto 8 para una palabra de mucho valor. <em>Acción:</em> mejora el contenido de esa página para subirla al top 3. Subidas pequeñas de posición suelen traer subidas grandes de tráfico.</p>
      </section>
      <section>
        <h2>Por qué se quedan atrás la mayoría de las webs (incluso con Search Console)</h2>
        <div className={styles.warning}>
          <h3>El cuello de botella escondido</h3>
          <p>Lo que vemos todo el tiempo: negocios que configuran Search Console, miran una vez, ven los datos y después... nada. O no saben qué hacer con lo que ven, o prueban arreglos que no aguantan.</p>
          <p>¿El problema real? <strong>El éxito en Search Console depende de lo que ocurrió antes.</strong></p>
        </div>
        <p>Search Console es como el tablero del coche: te dice si el motor va con eficiencia. Si el motor se construyó mal, ningún tablero lo arregla.</p>
        <p>El rendimiento de la web depende de:</p>
        <ul>
          <li><strong>Arquitectura:</strong> ¿el sitio está organizado de una forma que Google pueda entender? ¿Las URL están limpias? ¿La navegación tiene lógica?</li>
          <li><strong>Montaje técnico:</strong> ¿carga rápido? ¿Funciona en el móvil? ¿Hay errores de rastreo o de indexación?</li>
          <li><strong>Calidad del contenido:</strong> ¿las páginas responden de verdad a lo que la gente busca?</li>
          <li><strong>Señales de confianza:</strong> ¿el sitio se ve profesional y de fiar, tanto para Google como para quien visita?</li>
        </ul>
        <p>La mayoría de las webs hechas por uno mismo, o a bajo coste, fallan en una o varias de estas. Search Console muestra el problema, pero no puedes arreglarlo sin reconstruir partes del sitio.</p>
      </section>
      <section>
        <h2>El camino desde aquí</h2>
        <p>Si ya tienes una web, Search Console merece la pena. Empieza a recoger datos hoy. En 30 días ves patrones; en 90 días tienes claridad sobre qué funciona.</p>
        <p>Si <strong>estás construyendo una web nueva</strong>, o reconstruyendo una vieja, hay un camino más sensato: <strong>hacerla bien desde el primer día</strong>, pensada para la búsqueda desde la base.</p>
        <div className={styles.inlineCta}>
          <p className={styles.inlineCtaTitle}>En WebbingHUB construimos webs a medida con la visibilidad en la búsqueda puesta desde la obra.</p>
          <p className={styles.inlineCtaSub}>Eso es arquitectura limpia, carga rápida, optimización para móvil, indexación bien puesta y un diseño profesional. Cuando lanzas, Google puede encontrar y posicionar el sitio. Entonces Search Console se vuelve una herramienta de crecimiento, no de apagar incendios.</p>
          <p className={styles.inlineCtaSub}>También te ayudamos a entender los datos y a actuar sobre ellos, para que la web se vuelva un canal que trae contactos y ventas.</p>
          <a href="mailto:hello@webbinghub.io" className={styles.ctaButton}>Hablemos de tu web →</a>
        </div>
      </section>
      <section>
        <h2>Para quedarse con esto</h2>
        <ul>
          <li>Google Search Console es gratis y te muestra exactamente cómo se comporta el sitio en la búsqueda</li>
          <li>Las impresiones, los clics y el CTR son las tres métricas que cuentan la historia</li>
          <li>Ponerlo en marcha lleva 15 minutos; el valor real pide atención continua y oficio técnico</li>
          <li>La mayoría de las webs se quedan atrás porque se construyeron sin la búsqueda en mente. Search Console muestra el problema, pero no lo arregla</li>
          <li>Una web pensada para la búsqueda desde el primer día es mucho más fácil que arreglar una después</li>
          <li>Mejoras pequeñas de posición, de CTR y de calidad de página se acumulan, con el tiempo, en un crecimiento real del negocio</li>
        </ul>
      </section>
      <div className={styles.footerNote}>
        <p>
          <strong>¿Listo para construir una web que de verdad rinda?</strong>{" "}
          WebbingHUB hace webs a medida, construidas para la visibilidad en la búsqueda y para la experiencia de la persona, de la arquitectura al contenido. No lanzamos y esperamos. Construimos bien, seguimos los resultados y te ayudamos a crecer.{" "}
          <a href="mailto:hello@webbinghub.io">Escríbenos</a> para ver cómo puede volverse la web un activo real del negocio.
        </p>
      </div>
    </>
  );
}
