import Link from "next/link";
import type { ReactNode } from "react";
import { marketingLocale } from "@/i18n/utils";
import { blogPostingSchema } from "@/i18n/article";
import styles from "@/app/blog/native-connectors-vs-ipaas-vs-custom-integration/page.module.css";

const POST_PATH = "/blog/native-connectors-vs-ipaas-vs-custom-integration";

const seo = {
  ro: {
    seoTitle: "Conector nativ, iPaaS sau integrare pe măsură",
    description:
      "Compară conectorul nativ, un iPaaS și o integrare API pe măsură pentru CRM, ERP și automatizarea fluxurilor. Vezi ce variantă se potrivește afacerii.",
    h1: "Conector nativ, iPaaS sau integrare pe măsură: ce alegi?",
    section: "Software de business",
    crumb: "Conector nativ, iPaaS sau integrare pe măsură",
    homeName: "Acasă",
    tag: "Software de business",
    date: "9 noiembrie 2026",
    read: "9 min de citit",
    reviewed: "Ultima revizuire: 4 noiembrie 2026.",
    reviewedNote: "Capabilitățile, prețurile și licențele diferă de la un furnizor la altul și se pot schimba. Verifică documentația curentă înainte să cumperi.",
  },
  es: {
    seoTitle: "Conector nativo, iPaaS o integración a medida",
    description:
      "Compara el conector nativo, un iPaaS y una integración de API a medida para CRM, ERP y automatización de flujos. Mira qué opción encaja con el negocio.",
    h1: "Conector nativo, iPaaS o integración a medida: cuál elegir",
    section: "Software de negocio",
    crumb: "Conector nativo, iPaaS o integración a medida",
    homeName: "Home",
    tag: "Software de negocio",
    date: "9 de noviembre de 2026",
    read: "9 min de lectura",
    reviewed: "Última revisión: 4 de noviembre de 2026.",
    reviewedNote: "Las capacidades, los precios y las licencias cambian según el proveedor y pueden variar. Revisa la documentación actual antes de comprar.",
  },
} as const;

export function nativeSeo(locale: string) {
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

export function NativeTranslation({ locale }: { locale: "ro" | "es" }) {
  const c = seo[locale];
  const ro = locale === "ro";
  const contact = `/${marketingLocale(locale)}/contact`;
  const schema = blogPostingSchema({
    locale,
    path: POST_PATH,
    headline: c.h1,
    description: c.description,
    datePublished: "2026-11-09T00:00:00Z",
    dateModified: "2026-11-09T00:00:00Z",
    wordCount: 1700,
    timeRequired: "PT9M",
    section: c.section,
    crumb: c.crumb,
    homeName: c.homeName,
  });

  const L = ro ? roCopy : esCopy;

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
              <time dateTime="2026-11-09" className={styles.metaDate}>{c.date}</time>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaRead}>{c.read}</span>
            </div>
            <h1 className={styles.title}>{c.h1}</h1>
            <p className={styles.lead}>{L.lead}</p>
          </header>
          <div className={styles.body}>
            <p>
              {L.introBefore}
              <a href="https://learn.microsoft.com/en-us/power-automate/" target="_blank" rel="noopener noreferrer">Microsoft Power Automate</a>,{" "}
              <a href="https://www.make.com/" target="_blank" rel="noopener noreferrer">Make</a> {L.or}{" "}
              <a href="https://zapier.com/" target="_blank" rel="noopener noreferrer">Zapier</a>
              {L.introAfter}
            </p>
            <p>{L.noBestBefore}<strong>{L.noBestStrong}</strong>{L.noBestAfter}</p>
            <h2>{L.hShort}</h2>
            <div className={styles.tableWrap}>
              <table className={styles.compare}>
                <caption className={styles.caption}>{L.cap1}</caption>
                <thead>
                  <tr>
                    {L.th1.map((h) => <th key={h} scope="col">{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {L.rows1.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => (
                        <Cell key={L.th1[i]} label={L.th1[i]}>{i === 1 ? <strong>{cell}</strong> : cell}</Cell>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>{L.afterTable}</p>
            <h2>{L.h1}</h2>
            <p>{L.s1p1}</p>
            <p><strong>{L.s1win}</strong> {L.s1winP}</p>
            <p><strong>{L.s1lose}</strong> {L.s1loseP}</p>
            <p><strong>{L.s1choose}</strong> {L.s1chooseP}</p>
            <h2>{L.h2}</h2>
            <p>{L.s2p1}</p>
            <p>
              {L.s2toolsBefore}
              <a href="https://learn.microsoft.com/en-us/power-automate/" target="_blank" rel="noopener noreferrer">Power Automate</a>,{" "}
              <a href="https://www.make.com/" target="_blank" rel="noopener noreferrer">Make</a> {L.and}{" "}
              <a href="https://zapier.com/" target="_blank" rel="noopener noreferrer">Zapier</a>{" "}
              {L.s2toolsAfter}
            </p>
            <p><strong>{L.s2win}</strong></p>
            <ul>{L.s2wins.map((item) => <li key={item}>{item}</li>)}</ul>
            <p><strong>{L.s2lose}</strong> {L.s2loseP}</p>
            <p>{L.s2testBefore}<strong>{L.s2testStrong}</strong>{L.s2testAfter}</p>
            <h2>{L.h3}</h2>
            <p>{L.s3p1}</p>
            <p>{L.s3p2}</p>
            <ol>{L.s3steps.map((item) => <li key={item}>{item}</li>)}</ol>
            <p>{L.s3p3}</p>
            <p><strong>{L.s3win}</strong> {L.s3winP}</p>
            <p><strong>{L.s3lose}</strong> {L.s3loseP}</p>
            <h2>{L.hTrade}</h2>
            <div className={styles.tableWrap}>
              <table className={`${styles.compare} ${styles.wide}`}>
                <caption className={styles.caption}>{L.cap2}</caption>
                <thead>
                  <tr>{L.th2.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {L.rows2.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => (
                        <Cell key={L.th2[i]} label={L.th2[i]}>{cell}</Cell>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2>{L.hCost}</h2>
            <p>{L.costP}</p>
            <ul>{L.cost.map((item) => <li key={item}>{item}</li>)}</ul>
            <p>{L.costAfter}</p>
            <p>{L.costExample}</p>
            <h2>{L.hProcess}</h2>
            <p>{L.processP}</p>
            <aside className={styles.checklist} aria-labelledby="decision-checklist">
              <h3 id="decision-checklist">{L.checkTitle}</h3>
              <ol>
                {L.check.map(([name, rest]) => (
                  <li key={name}><strong>{name}</strong> {rest}</li>
                ))}
              </ol>
            </aside>
            <p>{L.score}</p>
            <h3>{L.hExample}</h3>
            <p>{L.exampleP}</p>
            <ul>
              <li>{L.ex1before}<strong>{L.ex1name}</strong>{L.ex1after}</li>
              <li>{L.ex2before}<strong>{L.ex2name}</strong>{L.ex2after}</li>
              <li>{L.ex3before}<strong>{L.ex3name}</strong>{L.ex3after}</li>
            </ul>
            <p>{L.exampleEnd}</p>
            <figure className={styles.diagram} aria-labelledby="ways-title" aria-describedby="ways-desc">
              <h3 id="ways-title" className={styles.diagramTitle}>{L.dTitle}</h3>
              <p className={styles.diagramLead}>{L.dLead}</p>
              <ol className={styles.lanes}>
                {L.lanes.map((lane) => (
                  <li key={lane.title} className={styles.lane}>
                    <h4 className={styles.laneTitle}>{lane.title}</h4>
                    <ol className={styles.pipeline}>
                      {lane.steps.map(([name, text]) => (
                        <li key={name}><strong>{name}</strong><p>{text}</p></li>
                      ))}
                    </ol>
                    <p className={styles.exception}><strong>{lane.exTitle}</strong>{lane.ex}</p>
                  </li>
                ))}
              </ol>
              <p id="ways-desc" className={styles.diagramDesc}>{L.dDesc}</p>
            </figure>
            <h2>{L.hPick}</h2>
            <p><strong>{L.pickStrong}</strong></p>
            <p>{L.pickP}</p>
            <p>
              {L.closeBefore}<Link href={contact}>WebbingHUB</Link>{L.closeMid}<strong>{L.closeStrong}</strong>{L.closeAfter}
            </p>
            <h3>{L.hSrc}</h3>
            <ul className={styles.sources}>
              {L.sources.map(([href, name, note]) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer">{name}</a>
                  <span className={styles.sourceNote}>{note}</span>
                </li>
              ))}
            </ul>
            <p className={styles.reviewed}>
              <time dateTime="2026-11-04">{c.reviewed}</time>{" "}
              {c.reviewedNote}
            </p>
          </div>
        </article>
      </main>
    </>
  );
}

const roCopy = {
  lead: "Un agent de vânzări marchează o ofertă ca acceptată în CRM. Operațiunile au nevoie de un job, financiarul are nevoie de clientul corect și de termenii de plată, iar cineva trebuie să confirme dacă ERP-ul a acceptat, de fapt, comanda.",
  introBefore: "Dacă lanțul ăsta stă azi pe copiat câmpuri între sisteme, o integrare de software de business pare rezolvarea evidentă. Întrebarea mai puțin evidentă e cum o construiești. Folosești conectorul dat de un furnizor, o platformă de integrare precum ",
  or: "sau",
  introAfter: ", sau comanzi o integrare API pe măsură?",
  noBestBefore: "Nu există un răspuns universal mai bun. ",
  noBestStrong: "Pentru un flux standard, codul pe măsură poate fi investiția greșită. Pentru o tranzacție critică, cu reguli neobișnuite, un conector dintr-un clic poate fi scurtătura greșită.",
  noBestAfter: " Așa se decide.",
  hShort: "Răspunsul scurt: ce variantă câștigă?",
  cap1: "Puncte de plecare pentru un flux. Mai multe metode pot coexista, și niciun rând de aici nu e o garanție de produs.",
  th1: ["Situația ta", "Începe aici", "De ce", "Ce să verifici întâi"],
  rows1: [
    ["Două aplicații cunoscute, mapare simplă de câmpuri, suportată", "Conector nativ", "Mai puțin de construit și de întreținut", "Suportă exact trigger-ul, câmpurile și actualizările de care ai nevoie?"],
    ["Mai multe aplicații SaaS suportate, ramificări și transformări moderate", "iPaaS / platformă de automatizare", "Un loc vizual unde construiești și operezi fluxuri cu mai mulți pași", "Limite, recuperarea erorilor, licențe și cine va întreține fluxurile"],
    ["API-uri vechi sau specifice unui furnizor, reguli complexe, stări de tranzacție importante", "Integrare pe măsură", "Control explicit asupra semanticii, identității și recuperării", "Acces la API, întreținere pe termen lung și costul livrării"],
    ["Aplicația actuală nu poate expune sau primi informația necesară", "Revezi aplicația sau fluxul", "Integrarea nu poate inventa o interfață suportată", "Opțiuni de export, roadmap-ul furnizorului și economia unei înlocuiri"],
  ],
  afterTable: "Sunt puncte de plecare, nu garanții de produs. Mai multe metode pot coexista: un conector nativ poate trimite notificări, în timp ce un serviciu pe măsură creează comanda.",
  h1: "1. Conectori nativi: buni când fluxul e deja suportat",
  s1p1: "Un conector nativ e o integrare dată de furnizor, sau suportată oficial, care mută informație între aplicații prin trigger-e și acțiuni definite. Poate apărea ca o setare din aplicație sau ca o integrare de app.",
  s1win: "Unde câștigă conectorii nativi:",
  s1winP: "crearea standard de lead-uri, o sincronizare simplă de contacte, livrarea unei notificări sau predarea unei facturi deja suportate. Pot reduce munca de implementare, pentru că furnizorul se ocupă deja de o parte din autentificare și din legătura cu API-ul.",
  s1lose: "Unde pot dezamăgi:",
  s1loseP: "acțiunea există, dar câmpul relevant nu; o actualizare merge doar într-o direcție; trigger-ul pornește înainte ca înregistrarea de business să fie închisă; sau erorile sunt greu de investigat de echipă. O integrare care copiază mai repede prețul greșit al clientului nu e o îmbunătățire.",
  s1choose: "Alege un conector nativ dacă",
  s1chooseP: "comportamentul lui documentat acoperă evenimentul de business de la un capăt la altul. Testează modificări, anulări și înregistrări respinse, nu doar demo-ul pe drumul fericit.",
  h2: "2. iPaaS sau integrare pe măsură: când o platformă își merită locul",
  s2p1: "Integration Platform as a Service (iPaaS) e o categorie largă de unelte pentru conectat aplicații, mapat date și orchestrat fluxuri. Platformele de automatizare low-code se suprapun cu spațiul ăsta, dar diferă mult la guvernanță, opțiuni de deployment și semantica tranzacțiilor. Capacitățile reale ale produsului contează mai mult decât eticheta.",
  s2toolsBefore: "Unelte precum ",
  and: "și",
  s2toolsAfter: "publică capacități suportate de automatizare și integrare. Asta nu înseamnă că fiecare poate gestiona în siguranță orice tranzacție de ERP sau de rezervare.",
  s2win: "Unde câștigă o platformă:",
  s2wins: [
    "Mai multe produse SaaS suportate au nevoie de mișcare de rutină a datelor.",
    "Oameni care nu dezvoltă au nevoie să vadă, sau să dețină, părți din flux.",
    "Organizația vrea monitorizare sau guvernanță centralizată, suportată de planul ales.",
    "Fluxul poate exprima ramificarea, transformarea și recuperarea de care e nevoie, fără ocolișuri fragile.",
  ],
  s2lose: "Unde poate avea probleme:",
  s2loseP: "endpoint-uri nesuportate, payload-uri adânc îmbricate și specifice unui furnizor, potrivirea grea a identităților, autentificare atipică, volum mare, sau operații în care un retry ar putea crea a doua comandă. Ocolișurile pot fi posibile, dar complexitatea lor devine un cost de întreținere.",
  s2testBefore: "Un test util: cere-i furnizorului sau celui care implementează să arate ",
  s2testStrong: "ce se întâmplă când pasul trei dintr-un flux de cinci pași eșuează",
  s2testAfter: ". Poți identifica înregistrarea de business afectată, recupera în siguranță și evita duplicatele?",
  h3: "3. Integrare pe măsură: bună când regulile de business sunt produsul",
  s3p1: "O integrare pe măsură are sens când conectarea sistemelor cere mai mult decât mutarea unei înregistrări din A în B.",
  s3p2: "Imaginează-ți un distribuitor al cărui CRM acceptă o ofertă, dar al cărui ERP trebuie să verifice prețuri pe client, limite de credit și alocarea stocului înainte să confirme o comandă. Un serviciu pe măsură poate avea nevoie să:",
  s3steps: [
    "Mapeze identitățile clienților între cele două sisteme.",
    "Valideze oferta față de regulile curente din ERP.",
    "Înregistreze o identitate durabilă a cererii.",
    "Trimită comanda folosind contractul documentat al ERP-ului.",
    "Deosebească acceptarea, respingerea și rezultatul necunoscut.",
    "Reconcilieze excepțiile și să arate un status operațional clar.",
  ],
  s3p3: "Asta nu e neapărat o aplicație uriașă. Poate fi un serviciu concentrat în jurul unui flux critic.",
  s3win: "Unde câștigă integrarea pe măsură:",
  s3winP: "modele de date neobișnuite, mai mulți identificatori care se bat, particularități de furnizor, tratare controlată a tranzacției, constrângeri de reglementare sau de securitate, sau experiențe de utilizator specializate.",
  s3lose: "Unde pierde:",
  s3loseP: "o treabă obișnuită, deja acoperită de un conector întreținut; niciun buget intern ca să deții și să susții codul făcut pe măsură; niciun acces stabil la API-urile sursă. Îți asumi și ingineria, testarea, documentația, monitorizarea și schimbările viitoare ale furnizorului. Software-ul pe măsură trebuie să merite responsabilitatea aia.",
  hTrade: "Compară schimburile reale",
  cap2: "Tabelul compară abordări, nu produse auditate individual. O platformă anume poate depăși sau rămâne sub caracteristicile astea tipice.",
  th2: ["Factor de decizie", "Conector nativ", "iPaaS / platformă de automatizare", "Integrare pe măsură"],
  rows2: [
    ["Primul rezultat rapid, pentru un flux standard", "Adesea cel mai puternic", "Adesea puternic", "De obicei mai mult de construit"],
    ["Logică de business neobișnuită", "Limitată de conector", "Depinde de platformă și de acțiunile disponibile", "Flexibilitate mare, dacă API-urile o permit"],
    ["Acoperire de SaaS suportat", "Îngustă și dependentă de furnizor", "Adesea largă; verifică conectorii exacți", "Depinde de API-urile disponibile și de implementare"],
    ["Monitorizare și tratarea erorilor", "Diferă de la conector la conector", "Funcții de platformă, dependente de plan", "Trebuie proiectată explicit"],
    ["Costuri recurente", "Poate exista licență de produs sau de conector", "Abonament, utilizare și limite de execuție", "Hosting, întreținere și suport de inginerie"],
    ["Securitate și guvernanță", "Dependentă de furnizor", "Dependentă de platformă și de plan", "Organizația controlează designul, dar deține munca de securitate"],
    ["Vendor lock-in", "Depinde de aplicație și de furnizor", "Fluxurile și mapările pot fi specifice platformei", "Codul rămâne al tău, iar API-urile sursă rămân dependențe"],
    ["Cazul în care se potrivește cel mai bine", "O predare simplă, deja dovedită", "Coordonarea mai multor aplicații standard", "O tranzacție critică, neobișnuită sau controlată strâns"],
  ],
  hCost: "Costul e mai mult decât prima implementare",
  costP: "Nu compara doar „două zile de configurare” cu „șase săptămâni de cod”. Estimează costul total de deținere pe viața așteptată a fluxului:",
  cost: [
    "Punerea în funcțiune, licențele și costurile legate de utilizare",
    "Limitele de API, volumele de date și latența trigger-ului",
    "Întreținerea când se schimbă CRM-ul, ERP-ul sau conectorul",
    "Investigațiile de erori, timpul de suport și reconcilierea",
    "Controalele de acces, nevoile de audit și protecția datelor",
    "Testarea înainte de lansare și după actualizările din amonte",
    "Costul de ieșire, dacă unealta aleasă nu se mai potrivește",
  ],
  costAfter: "Construcția cea mai ieftină poate deveni scumpă când echipa își petrece fiecare vineri reparând înregistrări greșite. La fel, codul pe măsură poate fi un cost degeaba dacă un conector suportat acoperă deja fluxul în mod fiabil.",
  costExample: "Ca să estimezi dacă procesul merită automatizat, măsoară întâi cazurile reale și atingerile manuale. Exemplu ilustrativ: 200 de comenzi pe lună × 3 atingeri manuale × 4 minute = 40 de ore de lucru pe lună, înainte de refăcut. E un scenariu de calcul, nu un reper de industrie și nu o economie garantată de salarii.",
  hProcess: "Un proces practic de alegere pentru integrarea CRM–ERP",
  processP: "Înainte să alegi un produs sau să comanzi cod, ia o tranzacție reală și parcurge procesul actual.",
  checkTitle: "Listă de decizie",
  check: [
    ["Numește evenimentul.", "Trigger-ul e o ofertă acceptată, o comandă aprobată sau o plată?"],
    ["Numește sursa de adevăr.", "Ce sistem deține prețurile, identitatea clientului, stocul și starea financiară?"],
    ["Listează fiecare excepție.", "Termeni schimbați, duplicate, comenzi refuzate, API căzut și corecții."],
    ["Verifică suportul furnizorului.", "Ce pot citi și scrie, de fapt, conectorii și API-urile existente?"],
    ["Prototipează partea cea mai grea.", "Arată un eșec și o cale de recuperare, nu doar o sincronizare reușită."],
    ["Compară deținerea și costurile.", "Cine monitorizează fluxul peste șase luni?"],
  ],
  score: "Un scor simplu, verde, galben și roșu, pe cerințele astea face adesea alegerea mai clară decât o listă generică de funcții.",
  hExample: "Exemplu ilustrativ: aceeași comandă, pe trei căi",
  exampleP: "O firmă de service pe teren vrea ca o ofertă acceptată în CRM să creeze un job programat și apoi să anunțe financiarul.",
  ex1before: "Cu un ",
  ex1name: "conector nativ",
  ex1after: ", poate fi o configurare scurtă dacă toate operațiile și câmpurile necesare sunt suportate.",
  ex2before: "Cu ",
  ex2name: "iPaaS",
  ex2after: ", un flux vizual ar putea valida clientul, crea jobul și trimite înregistrările eșuate la revizie.",
  ex3before: "Cu o ",
  ex3name: "integrare pe măsură",
  ex3after: ", echipa poate implementa condiții neobișnuite de aprobare și o reconciliere durabilă, acolo unde API-urile suportate o cer.",
  exampleEnd: "Clientul vede același rezultat. Arhitectura potrivită ține de excepții, nu de cât de atrăgătoare e diagrama.",
  dTitle: "Aceeași comandă, trei feluri de a o integra",
  dLead: "Același flux pe fiecare cale: o ofertă CRM acceptată creează un job programat, apoi financiarul e anunțat.",
  lanes: [
    {
      title: "Conector nativ",
      steps: [
        ["CRM", "Oferta e marcată acceptată."],
        ["Conectorul furnizorului", "Doar dacă trigger-ul, câmpurile și actualizările sunt suportate."],
        ["ERP", "Job programat, când acțiunea aia există."],
        ["Financiar", "Anunțat, dacă conectorul poate trimite."],
      ],
      exTitle: "Raportarea excepțiilor, doar dacă conectorul ăsta o expune. ",
      ex: "Erorile pot fi greu de investigat. Nu presupune că conectorul raportează singur o comandă respinsă sau cu rezultat necunoscut.",
    },
    {
      title: "iPaaS",
      steps: [
        ["CRM", "Oferta e marcată acceptată."],
        ["Flux vizual", "Validează clientul, apoi creează jobul."],
        ["ERP", "Job programat, dintr-o acțiune suportată."],
        ["Financiar", "Anunțat de un pas ulterior din flux."],
      ],
      exTitle: "Raportarea excepțiilor, când fluxul e construit pentru asta. ",
      ex: "Înregistrările eșuate pot fi trimise la revizie. E un pas pe care îl adaugă cineva. Eticheta iPaaS nu îl garantează.",
    },
    {
      title: "Adapter pe măsură",
      steps: [
        ["CRM", "Oferta e marcată acceptată."],
        ["Adapter", "Aplică reguli neobișnuite de aprobare și păstrează o identitate durabilă a cererii."],
        ["ERP", "Comanda e trimisă pe contractul documentat."],
        ["Financiar", "Anunțat după ce rezultatul e cunoscut."],
      ],
      exTitle: "Raportarea excepțiilor, proiectată în serviciu. ",
      ex: "Acceptarea, respingerea și rezultatul necunoscut rămân distincte. Excepțiile sunt reconciliate și arătate ca status operațional.",
    },
  ],
  dDesc: "Rezultatul văzut de client e același. Raportarea excepțiilor apare pe fiecare cale doar în măsura în care calea o poate susține. Un conector nativ nu tratează excepțiile automat.",
  hPick: "Deci, pe care îl alegi?",
  pickStrong: "Alege conectorii nativi când rezolvă fluxul cap-coadă. Alege un iPaaS sau o platformă de automatizare când ai nevoie ca mai multe sisteme suportate să coopereze, cu o logică care se poate ține. Alege integrarea pe măsură când fluxul e critic pentru afacere, neobișnuit de complex, sau imposibil de exprimat fiabil prin conectorii disponibili.",
  pickP: "Uneori răspunsul bun e să îmbunătățești un pas manual, nu să-l automatizezi. Uneori e să înlocuiești un sistem ale cărui date nu pot fi accesate în siguranță. Ingineria bună începe cu alegerile astea, nu cu scrisul de cod.",
  closeBefore: "La ",
  closeMid: " lucrăm cu echipe ca să cartografiem fluxul real, să evaluăm opțiunile existente și să construim integrarea sau platforma pe măsură doar unde are sens. Dacă cântărești ",
  closeStrong: "iPaaS față de integrare pe măsură",
  closeAfter: ", adu un proces real de business și aplicațiile implicate. Atât ajunge ca să înceapă o conversație tehnică utilă.",
  hSrc: "Surse și lecturi",
  sources: [
    ["https://ec.europa.eu/eurostat/statistics-explained/index.php?title=E-business_integration", "Eurostat — E-business integration, date de adopție în întreprinderi 2025 (extrase în mai 2026)", "Context pentru folosirea ERP și CRM în întreprinderile din UE. Nu măsoară cea mai bună abordare de integrare."],
    ["https://learn.microsoft.com/en-us/power-automate/", "Microsoft Learn — documentația Power Automate", "Concepte suportate de automatizare, fluxuri cloud și desktop, guvernanță și puncte de extensie."],
    ["https://www.make.com/", "Make — documentația oficială și prezentarea platformei", "Descrierea fluxului vizual și a capacităților de integrare."],
    ["https://zapier.com/", "Zapier — prezentarea oficială a produsului", "Descrierea fluxurilor fără cod și a conexiunilor între aplicații."],
    ["https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/", "AWS Builders' Library — Making retries safe with idempotent APIs", "Considerații de tranzacție și de retry când construiești integrări pe măsură."],
  ],
};

const esCopy = {
  lead: "Un comercial marca un presupuesto como aceptado en el CRM. Operaciones necesita un trabajo, finanzas necesita el cliente correcto y las condiciones de pago, y alguien tiene que confirmar si el ERP aceptó de verdad el pedido.",
  introBefore: "Si esa cadena depende hoy de copiar campos entre sistemas, una integración de software de negocio parece el arreglo obvio. La pregunta menos obvia es cómo construirla. ¿Usas el conector que da un proveedor, una plataforma de integración como ",
  or: "o",
  introAfter: ", o encargas una integración de API a medida?",
  noBestBefore: "No hay una respuesta universalmente mejor. ",
  noBestStrong: "Para un flujo estándar, el código a medida puede ser la inversión equivocada. Para una transacción crítica, con reglas poco habituales, un conector de un clic puede ser el atajo equivocado.",
  noBestAfter: " Así se decide.",
  hShort: "La respuesta corta: qué opción gana",
  cap1: "Puntos de partida para un flujo. Puede convivir más de un método, y ninguna fila de aquí es una garantía de producto.",
  th1: ["Tu situación", "Empieza aquí", "Por qué", "Qué comprobar primero"],
  rows1: [
    ["Dos aplicaciones conocidas, mapeo simple de campos y soportado", "Conector nativo", "Menos que construir y mantener", "¿Soporta el trigger, los campos y las actualizaciones exactas que necesitas?"],
    ["Varias aplicaciones SaaS soportadas, ramificaciones y transformaciones moderadas", "iPaaS / plataforma de automatización", "Un sitio visual donde construir y operar flujos de varios pasos", "Límites, recuperación de errores, licencias y quién mantendrá los flujos"],
    ["APIs antiguas o específicas de un proveedor, reglas complejas, estados de transacción importantes", "Integración a medida", "Control explícito de la semántica, la identidad y la recuperación", "Acceso al API, mantenimiento a largo plazo y el coste de entrega"],
    ["La aplicación actual no puede exponer ni aceptar la información necesaria", "Replantea la aplicación o el flujo", "La integración no puede inventar una interfaz soportada", "Opciones de exportación, la hoja de ruta del proveedor y la economía de un reemplazo"],
  ],
  afterTable: "Son puntos de partida, no garantías de producto. Puede convivir más de un método: un conector nativo puede enviar avisos, mientras un servicio a medida crea el pedido.",
  h1: "1. Conectores nativos: buenos cuando el flujo ya está soportado",
  s1p1: "Un conector nativo es una integración que da el proveedor, o que está soportada de forma oficial, y que mueve información entre aplicaciones con triggers y acciones definidos. Puede aparecer como un ajuste de la aplicación o como una integración de app.",
  s1win: "Dónde ganan los conectores nativos:",
  s1winP: "la creación estándar de leads, una sincronización simple de contactos, el envío de un aviso o la entrega de una factura ya soportada. Pueden reducir el trabajo de implementación, porque el proveedor ya se ocupa de una parte de la autenticación y del enlace con el API.",
  s1lose: "Dónde pueden decepcionar:",
  s1loseP: "la acción existe, pero el campo relevante no; una actualización va solo en una dirección; el trigger se dispara antes de que el registro de negocio esté cerrado; o los errores son difíciles de investigar para el equipo. Una integración que copia más rápido el precio equivocado del cliente no es una mejora.",
  s1choose: "Elige un conector nativo si",
  s1chooseP: "su comportamiento documentado cubre el evento de negocio de punta a punta. Prueba modificaciones, cancelaciones y registros rechazados, no solo la demo del camino feliz.",
  h2: "2. iPaaS o integración a medida: cuándo una plataforma se gana el sitio",
  s2p1: "Integration Platform as a Service (iPaaS) es una categoría amplia de herramientas para conectar aplicaciones, mapear datos y orquestar flujos. Las plataformas de automatización low-code se solapan con este espacio, pero difieren mucho en gobernanza, opciones de despliegue y semántica de las transacciones. Las capacidades reales del producto importan más que la etiqueta.",
  s2toolsBefore: "Herramientas como ",
  and: "y",
  s2toolsAfter: "publican capacidades soportadas de automatización e integración. Eso no significa que cada una pueda gestionar con seguridad cualquier transacción de ERP o de reserva.",
  s2win: "Dónde gana una plataforma:",
  s2wins: [
    "Varios productos SaaS soportados necesitan un movimiento rutinario de datos.",
    "Personas que no desarrollan necesitan ver, o poseer, partes del flujo.",
    "La organización quiere monitorización o gobernanza centralizada, soportada por el plan elegido.",
    "El flujo puede expresar la ramificación, la transformación y la recuperación necesarias, sin rodeos frágiles.",
  ],
  s2lose: "Dónde puede tener problemas:",
  s2loseP: "endpoints no soportados, payloads muy anidados y específicos de un proveedor, un emparejamiento difícil de identidades, autenticación atípica, mucho volumen, u operaciones en las que un reintento podría crear un segundo pedido. Los rodeos pueden ser posibles, pero su complejidad se vuelve un coste de mantenimiento.",
  s2testBefore: "Una prueba útil: pídele al proveedor o a quien implementa que muestre ",
  s2testStrong: "qué pasa cuando falla el paso tres de un flujo de cinco pasos",
  s2testAfter: ". ¿Puedes identificar el registro de negocio afectado, recuperar con seguridad y evitar duplicados?",
  h3: "3. Integración a medida: buena cuando las reglas de negocio son el producto",
  s3p1: "Una integración a medida tiene sentido cuando conectar sistemas pide más que mover un registro de A a B.",
  s3p2: "Imagina un distribuidor cuyo CRM acepta un presupuesto, pero cuyo ERP tiene que comprobar precios por cliente, límites de crédito y la asignación de stock antes de confirmar un pedido. Un servicio a medida puede necesitar:",
  s3steps: [
    "Mapear las identidades de cliente entre los dos sistemas.",
    "Validar el presupuesto contra las reglas actuales del ERP.",
    "Registrar una identidad duradera de la petición.",
    "Enviar el pedido usando el contrato documentado del ERP.",
    "Distinguir la aceptación, el rechazo y el resultado desconocido.",
    "Conciliar las excepciones y mostrar un estado operativo claro.",
  ],
  s3p3: "Eso no es necesariamente una aplicación enorme. Puede ser un servicio concentrado en un flujo crítico.",
  s3win: "Dónde gana la integración a medida:",
  s3winP: "modelos de datos poco habituales, varios identificadores que compiten, peculiaridades de un proveedor, un manejo controlado de la transacción, restricciones regulatorias o de seguridad, o experiencias de usuario especializadas.",
  s3lose: "Dónde pierde:",
  s3loseP: "una tarea común, ya cubierta por un conector mantenido; ningún presupuesto interno para poseer y sostener el código a medida; ningún acceso estable a los API de origen. También asumes la ingeniería, las pruebas, la documentación, la monitorización y los cambios futuros del proveedor. El software a medida tiene que merecer esa responsabilidad.",
  hTrade: "Compara los intercambios reales",
  cap2: "La tabla compara enfoques, no productos auditados uno a uno. Una plataforma concreta puede superar o quedarse por debajo de estas características típicas.",
  th2: ["Factor de decisión", "Conector nativo", "iPaaS / plataforma de automatización", "Integración a medida"],
  rows2: [
    ["Primer resultado rápido, para un flujo estándar", "A menudo el más fuerte", "A menudo fuerte", "Suele haber más que construir"],
    ["Lógica de negocio poco habitual", "Limitada por el conector", "Depende de la plataforma y de las acciones disponibles", "Mucha flexibilidad, si los API lo permiten"],
    ["Cobertura de SaaS soportado", "Estrecha y dependiente del proveedor", "A menudo amplia; comprueba los conectores exactos", "Depende de los API disponibles y de la implementación"],
    ["Monitorización y tratamiento de errores", "Varía según el conector", "Funciones de la plataforma, dependientes del plan", "Hay que diseñarla de forma explícita"],
    ["Costes recurrentes", "Puede haber licencia de producto o de conector", "Suscripción, uso y límites de ejecución", "Hosting, mantenimiento y soporte de ingeniería"],
    ["Seguridad y gobernanza", "Dependiente del proveedor", "Dependiente de la plataforma y del plan", "La organización controla el diseño, pero es dueña del trabajo de seguridad"],
    ["Vendor lock-in", "Depende de la aplicación y del proveedor", "Los flujos y los mapeos pueden ser específicos de la plataforma", "El código sigue siendo tuyo, y los API de origen siguen siendo dependencias"],
    ["El caso en el que encaja mejor", "Una entrega simple y ya probada", "Coordinar varias aplicaciones estándar", "Una transacción crítica, poco habitual o muy controlada"],
  ],
  hCost: "El coste es más que la primera implementación",
  costP: "No compares solo «dos días de configuración» con «seis semanas de código». Estima el coste total de propiedad a lo largo de la vida esperada del flujo:",
  cost: [
    "La puesta en marcha, las licencias y los cargos por uso",
    "Los límites del API, los volúmenes de datos y la latencia del trigger",
    "El mantenimiento cuando cambian el CRM, el ERP o el conector",
    "Las investigaciones de errores, el tiempo de soporte y la conciliación",
    "Los controles de acceso, las necesidades de auditoría y la protección de datos",
    "Las pruebas antes del despliegue y después de las actualizaciones de aguas arriba",
    "El coste de salida, si la herramienta elegida deja de encajar",
  ],
  costAfter: "La construcción más barata puede volverse cara cuando el equipo se pasa cada viernes reparando registros malos. Igual, el código a medida puede ser un coste inútil si un conector soportado ya cubre el flujo de forma fiable.",
  costExample: "Para estimar si el proceso merece automatizarse, mide primero los casos reales y los toques manuales. Ejemplo ilustrativo: 200 pedidos al mes × 3 toques manuales × 4 minutos = 40 horas de trabajo al mes, antes del retrabajo. Es un escenario de cálculo, no un referente del sector ni un ahorro de nómina garantizado.",
  hProcess: "Un proceso práctico de elección para la integración CRM–ERP",
  processP: "Antes de elegir un producto o encargar código, toma una transacción real y recórrela por el proceso actual.",
  checkTitle: "Lista de decisión",
  check: [
    ["Nombra el evento.", "¿El trigger es un presupuesto aceptado, un pedido aprobado o un pago?"],
    ["Nombra la fuente de verdad.", "¿Qué sistema es dueño de los precios, de la identidad del cliente, del stock y del estado financiero?"],
    ["Lista cada excepción.", "Condiciones cambiadas, duplicados, pedidos rechazados, API caído y correcciones."],
    ["Comprueba el soporte del proveedor.", "¿Qué pueden leer y escribir, de verdad, los conectores y los API que ya existen?"],
    ["Haz un prototipo de la parte más difícil.", "Muestra un fallo y un camino de recuperación, no solo una sincronización que sale bien."],
    ["Compara la propiedad y los costes.", "¿Quién vigila el flujo dentro de seis meses?"],
  ],
  score: "Una puntuación simple, en verde, amarillo y rojo, sobre estos requisitos suele aclarar la elección más que una lista genérica de funciones.",
  hExample: "Ejemplo ilustrativo: el mismo pedido, de tres maneras",
  exampleP: "Una empresa de servicio en campo quiere que un presupuesto aceptado en el CRM cree un trabajo programado y después avise a finanzas.",
  ex1before: "Con un ",
  ex1name: "conector nativo",
  ex1after: ", puede ser una configuración corta si todas las operaciones y los campos necesarios están soportados.",
  ex2before: "Con ",
  ex2name: "iPaaS",
  ex2after: ", un flujo visual podría validar al cliente, crear el trabajo y enviar los registros fallidos a revisión.",
  ex3before: "Con una ",
  ex3name: "integración a medida",
  ex3after: ", el equipo puede implementar condiciones de aprobación poco habituales y una conciliación duradera, allí donde los API soportados lo exigen.",
  exampleEnd: "El cliente ve el mismo resultado. La arquitectura adecuada depende de las excepciones, no de lo atractivo que sea el diagrama.",
  dTitle: "El mismo pedido, tres maneras de integrarlo",
  dLead: "El mismo flujo en cada camino: un presupuesto de CRM aceptado crea un trabajo programado, y después se avisa a finanzas.",
  lanes: [
    {
      title: "Conector nativo",
      steps: [
        ["CRM", "Presupuesto marcado como aceptado."],
        ["Conector del proveedor", "Solo si el trigger, los campos y las actualizaciones están soportados."],
        ["ERP", "Trabajo programado, cuando esa acción existe."],
        ["Finanzas", "Avisado, si el conector puede enviarlo."],
      ],
      exTitle: "Informe de excepciones, solo si este conector lo expone. ",
      ex: "Los errores pueden ser difíciles de investigar. No des por hecho que el conector informa solo de un pedido rechazado o de resultado desconocido.",
    },
    {
      title: "iPaaS",
      steps: [
        ["CRM", "Presupuesto marcado como aceptado."],
        ["Flujo visual", "Valida al cliente y después crea el trabajo."],
        ["ERP", "Trabajo programado, desde una acción soportada."],
        ["Finanzas", "Avisado por un paso posterior del flujo."],
      ],
      exTitle: "Informe de excepciones, cuando el flujo se construye para eso. ",
      ex: "Los registros fallidos se pueden enviar a revisión. Es un paso que alguien añade. La etiqueta iPaaS no lo garantiza.",
    },
    {
      title: "Adaptador a medida",
      steps: [
        ["CRM", "Presupuesto marcado como aceptado."],
        ["Adaptador", "Aplica reglas de aprobación poco habituales y guarda una identidad duradera de la petición."],
        ["ERP", "Pedido enviado sobre el contrato documentado."],
        ["Finanzas", "Avisado después de conocer el resultado."],
      ],
      exTitle: "Informe de excepciones, diseñado dentro del servicio. ",
      ex: "La aceptación, el rechazo y el resultado desconocido siguen siendo distintos. Las excepciones se concilian y se muestran como estado operativo.",
    },
  ],
  dDesc: "El resultado que ve el cliente es el mismo. El informe de excepciones aparece en cada camino solo en la medida en que ese camino puede sostenerlo. Un conector nativo no trata las excepciones de forma automática.",
  hPick: "Entonces, cuál eliges",
  pickStrong: "Elige conectores nativos cuando resuelven el flujo de punta a punta. Elige un iPaaS o una plataforma de automatización cuando necesitas que varios sistemas soportados cooperen, con una lógica que se pueda sostener. Elige la integración a medida cuando el flujo es crítico para el negocio, inusualmente complejo, o imposible de expresar con fiabilidad a través de los conectores disponibles.",
  pickP: "A veces la respuesta buena es mejorar un paso manual, no automatizarlo. A veces es sustituir un sistema cuyos datos no se pueden consultar con seguridad. La buena ingeniería empieza por esas elecciones, no por escribir código.",
  closeBefore: "En ",
  closeMid: " trabajamos con equipos para trazar el flujo real, evaluar las opciones que ya existen y construir la integración o la plataforma a medida solo donde tiene sentido. Si estás pesando ",
  closeStrong: "iPaaS frente a integración a medida",
  closeAfter: ", trae un proceso real de negocio y las aplicaciones implicadas. Con eso basta para empezar una conversación técnica útil.",
  hSrc: "Fuentes y lecturas",
  sources: [
    ["https://ec.europa.eu/eurostat/statistics-explained/index.php?title=E-business_integration", "Eurostat — E-business integration, datos de adopción en empresas de 2025 (extraídos en mayo de 2026)", "Contexto del uso de ERP y CRM en empresas de la UE. No mide el mejor enfoque de integración."],
    ["https://learn.microsoft.com/en-us/power-automate/", "Microsoft Learn — documentación de Power Automate", "Conceptos soportados de automatización, flujos en la nube y de escritorio, gobernanza y puntos de extensión."],
    ["https://www.make.com/", "Make — documentación oficial y visión de la plataforma", "Descripción del flujo visual y de las capacidades de integración."],
    ["https://zapier.com/", "Zapier — visión oficial del producto", "Descripción de flujos sin código y de conexiones entre aplicaciones."],
    ["https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/", "AWS Builders' Library — Making retries safe with idempotent APIs", "Consideraciones de transacción y de reintento al construir integraciones a medida."],
  ],
};
