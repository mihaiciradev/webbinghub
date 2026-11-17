import Link from "next/link";
import type { ReactNode } from "react";
import { marketingLocale } from "@/i18n/utils";
import { blogPostingSchema } from "@/i18n/article";
import styles from "@/app/blog/hotel-reporting-pms-vs-bi-vs-custom-integration/page.module.css";

const POST_PATH = "/blog/hotel-reporting-pms-vs-bi-vs-custom-integration";
const PUBLISHED = "2026-11-17";

const seo = {
  ro: {
    seoTitle: "Software de raportare hotelieră: PMS, Power BI sau integrare pe măsură",
    description:
      "Compară rapoartele din PMS, Power BI și o integrare de date hoteliere pe măsură. Vezi când are sens fiecare variantă și cum aliniezi datele care nu se potrivesc.",
    h1: "Software de raportare hotelieră: PMS, Power BI sau integrare pe măsură",
    section: "Tehnologie hotelieră",
    crumb: "Raportare hotelieră",
    homeName: "Acasă",
    tag: "Tehnologie hotelieră",
    date: "17 noiembrie 2026",
    read: "9 min de citit",
    reviewed: "Sursele au fost verificate pe 17 noiembrie 2026.",
    reviewedNote: "Capabilitățile produselor, licențele și opțiunile de integrare se schimbă.",
  },
  es: {
    seoTitle: "Software de informes hoteleros: PMS, Power BI o integración a medida",
    description:
      "Compara los informes del PMS, Power BI y una integración de datos hoteleros a medida. Mira cuándo encaja cada vía y cómo corregir cifras que no coinciden.",
    h1: "Software de informes hoteleros: PMS, Power BI o integración a medida",
    section: "Tecnología hotelera",
    crumb: "Informes hoteleros",
    homeName: "Home",
    tag: "Tecnología hotelera",
    date: "17 de noviembre de 2026",
    read: "9 min de lectura",
    reviewed: "Fuentes comprobadas el 17 de noviembre de 2026.",
    reviewedNote: "Las capacidades de los productos, las licencias y las opciones de integración cambian.",
  },
} as const;

export function reportingSeo(locale: string) {
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

const ro = {
  lead: "PMS-ul raportează venitul din camere. CRS-ul raportează rezervările. Rapoartele de canal arată rezervările venite prin intermediari. Financiarul are cu totul altă cifră.",
  monday: "Cineva adună exporturile în fiecare luni. Până se aliniază cifrele, ședința comercială a întârziat deja.",
  evalBefore: "Dacă evaluezi ",
  evalStrong: "automatizarea raportării hoteliere",
  evalMid: ", întrebarea obișnuită este „Ce dashboard să cumpărăm?” O întrebare mai bună este ",
  evalQ: "unde începe dezacordul",
  evalAfter: ". În funcție de răspuns, rapoartele native din PMS, un instrument BI precum Power BI sau o integrare de date pe măsură pot fi investiția potrivită. Rezolvă părți diferite ale problemei și, uneori, trebuie să lucreze împreună.",
  hQuick: "Decizie rapidă: ce variantă de raportare hotelieră să folosești?",
  cap1: "Un punct de plecare. Mai multe straturi pot fi folosite în același timp.",
  th1: ["Dacă situația ta este…", "Începe cu…", "De ce", "Verifică înainte să cumperi sau să construiești"],
  rows1: [
    ["O proprietate, întrebări standard despre ocupare sau venit din camere", "Rapoartele existente din PMS", "Sistemul sursă poate răspunde deja la întrebare", "Definițiile rapoartelor, permisiunile, exportul și programarea"],
    ["Seturi de date coerente, dar mai multe echipe au nevoie de vederi flexibile", "Instrument BI / platformă de raportare", "Modelare, explorare și distribuire mai bune", "Conectori, reîmprospătare, controlul accesului, licența și calitatea sursei"],
    ["Datele din mai multe sisteme PMS, CRS sau de canal nu se potrivesc", "Integrare de date și reconciliere", "Normalizează mai întâi identificatorii, datele evenimentului, statusurile și definițiile", "API-uri și exporturi, reguli de mapare, calitate, cine deține excepțiile"],
    ["Mai multe proprietăți, reguli complexe și nevoi operaționale specifice", "Un flux pe măsură care alimentează BI sau rapoartele", "Tratează joncțiunile și reconcilierea specifice afacerii", "Mentenanța, cerințele de audit și costul pe toată durata de viață"],
  ],
  notContest: "Nu e un concurs în care un produs le bate pe celelalte.",
  notContestAfter: " Un flux pe măsură poate alimenta un instrument BI gata făcut. Un hotel poate folosi raportarea nativă din PMS pentru operațiunile zilnice și BI consolidat pentru managementul regional.",
  pathTitle: "O cale scurtă de decizie",
  path: [
    ["O singură proprietate, iar definiția e deja agreată.", " Folosește rapoartele din PMS."],
    ["Datele sunt coerente, dar echipele au nevoie de propriile vederi.", " Folosește un instrument BI."],
    ["Sursele nu sunt de acord.", " Integrează și reconciliază înainte să alegi un dashboard."],
    ["Mai multe proprietăți, cu reguli pe care conectorii nu le pot exprima.", " Construiește un flux pe măsură care poate alimenta BI."],
  ],
  dTitle: "Stiva de raportare: Sursă → Reconciliere → BI",
  dLead: "Trei căi prin care aceleași fapte comerciale pot ajunge într-un raport. Calea (c) poate extinde calea (b). Nu trebuie s-o înlocuiască.",
  lanes: [
    {
      title: "(a) Raport nativ din PMS",
      steps: [
        ["Sursă", "PMS-ul unei singure proprietăți."],
        ["Raport", "Un raport pe care sistemul acelei proprietăți îl suportă deja."],
        ["Public", "Oameni care împărtășesc definiția acelui raport."],
        ["Limită", "Rămâne în interiorul proprietății sau al unui grup de proprietăți suportat."],
      ],
    },
    {
      title: "(b) BI gata făcut",
      steps: [
        ["Sursă", "Sisteme care expun un conector suportat sau un export controlat."],
        ["Instrument", "Power BI sau alt instrument BI. Power BI este un exemplu."],
        ["Vederi", "Filtre, tendințe, comparație între proprietăți, distribuire programată."],
        ["Condiție", "Definițiile metricilor sunt deja agreate. Un grafic nu le reconciliază."],
      ],
    },
    {
      title: "(c) Flux pe măsură, care alimentează BI",
      steps: [
        ["Extragere", "API-uri suportate, fluxuri de date sau exporturi programate."],
        ["Normalizare", "Identificatori, date, statusuri și monedă, cu proveniența păstrată."],
        ["Reconciliere", "Definiții agreate. Excepțiile pe care regulile nu le pot închide rămân vizibile."],
        ["Apoi BI", "Publică setul de încredere într-un instrument BI existent, același strat ca (b)."],
      ],
      extendTitle: "(c) extinde (b)",
      extend: "Lucrul pe măsură face sursele disparate comparabile. Instrumentul BI tot el le prezintă. Nu trebuie să scrii o aplicație nouă de dashboard ca să justifici fluxul.",
    },
  ],
  dDesc: "Raportarea nativă din PMS, un instrument BI și o integrare pe măsură pot fi folosite împreună. Întrebarea utilă este ce strat lipsește.",
  hResearch: "De ce contează acum: ce raportează de fapt cercetarea din 2026",
  researchBefore: "Un ",
  researchLink: "anunț din septembrie 2026, State of Distribution, de la RateGain, NYU SPS și HEDNA",
  researchMid: " spune că ",
  researchStrong: "peste 80% dintre echipele comerciale",
  researchMid2: " petrec una sau două zile pe săptămână ",
  researchStrong2: "producând și analizând rapoarte manual",
  researchAfter: ". Mai raportează că mai puțin de 30% au investit în instrumente dedicate de raportare.",
  careful: "Cifrele astea trebuie mânuite cu grijă. „Producere și analiză” include interpretarea umană. Nu toată munca asta este copiere de date pe care software-ul o poate elimina. Studiul descrie funcții comerciale precum revenue management, vânzări, marketing și distribuție, nu fiecare angajat din hotel. Comunicatul descrie o amprentă de peste 270 de branduri și 58.000 de proprietăți, ",
  carefulStrong: "nu 58.000 de respondenți independenți",
  carefulAfter: ". Perioada operațională raportată a fost decembrie 2024 – noiembrie 2025.",
  takeawayBefore: "Concluzia e mai îngustă și utilă: producerea manuală a rapoartelor este o problemă reală printre echipele comerciale chestionate. Comunicatul ",
  takeawayNot: "nu",
  takeawayAfter: " demonstrează că un anumit instrument de raportare hotelieră este soluția cea mai bună și nu stabilește ce fracțiune din ore ar putea economisi un hotel cumpărând unul.",
  h1: "Varianta 1: Păstrează raportarea din PMS pe care o ai deja",
  s1p: "Un sistem de management al proprietății este adesea punctul de plecare cel mai practic pentru raportarea operațională. Dacă echipa are nevoie de sosiri, ocupare, înnoptări sau de un raport deja suportat de PMS, un raport existent poate fi suficient.",
  s1win: "Raportarea nativă din PMS câștigă când:",
  s1wins: [
    "Întrebarea ține de o proprietate sau de un grup de proprietăți suportat.",
    "Toată lumea e de acord cu definiția raportului.",
    "Rolurile și exporturile actuale susțin publicul vizat.",
    "Nu e nevoie de o reconciliere complicată cu surse externe.",
  ],
  s1lim: "Limitele:",
  s1limP: " un raport din PMS poate să nu explice economia canalelor, momentul rezervării centrale, identificatorii între proprietăți, ajustările financiare sau ipotezele de revenue management. Unele produse PMS suportă raportare și integrări mai largi. Altele nu. Verifică furnizorul și ediția reale, nu eticheta „PMS”.",
  s1dont: "Nu construi un dashboard doar pentru că există foi de calcul.",
  s1dontP: " Verifică mai întâi dacă oamenii refac un raport nativ care ar putea fi programat sau exportat mai sigur.",
  h2: "Varianta 2: Folosește Power BI sau alt instrument de business intelligence",
  s2before: "Un instrument BI se potrivește când datele sunt suficient de coerente, dar cei care decid au nevoie de filtre flexibile, tendințe, comparații între proprietăți sau distribuire programată. ",
  s2link: "Documentația Microsoft pentru Power BI",
  s2after: " descrie conexiuni către o gamă de tipuri de surse. Conectorii suportați, nevoia de gateway și prospețimea datelor diferă. Power BI este un exemplu, nu o recomandare universală.",
  s2win: "BI câștigă când:",
  s2wins: [
    "Sistemele sursă expun date utilizabile prin interfețe suportate sau exporturi controlate.",
    "Definițiile pentru metrici precum venitul din camere, ocuparea și anulările sunt agreate.",
    "Analiștii au nevoie de detaliere, iar managementul de raportare repetabilă.",
    "Organizația poate gestiona permisiunile, programările de reîmprospătare și responsabilitatea.",
  ],
  s2not: "Ce nu face BI de la sine:",
  s2notP: " nu decide dacă două ID-uri de rezervare de la furnizori reprezintă aceeași rezervare, nu interpretează definiții fiscale contradictorii și nu identifică suma autoritativă după o rambursare parțială. Un grafic Power BI poate arăta cifrele pe care le-ai încărcat. Nu reconciliază definiții de metrici care se contrazic. Poți implementa logică de curățare a datelor într-un ecosistem BI, dar logica tot are nevoie de proiectare, verificare și mentenanță.",
  s2gateBefore: "Pentru sisteme sursă on-premises, gateway-ul sau conectivitatea pot conta. ",
  s2gateLink: "Microsoft documentează opțiunile de gateway Power BI",
  s2gateAfter: ". Evaluează confidențialitatea, licențierea și constrângerile de reîmprospătare pentru arhitectura ta, în loc să presupui că fiecare PMS are un conector cloud gata făcut.",
  h3: "Varianta 3: Construiește o integrare de date hoteliere sau un strat de reconciliere pe măsură",
  s3p: "Uneori problema nu e prezentarea. Trei sisteme legitime înregistrează versiuni diferite ale aceluiași eveniment comercial.",
  hypo: "Exemplu ipotetic, nu o rezervare reală.",
  hypoP: " Imaginează-ți o rezervare creată în ianuarie pentru un sejur în februarie, apoi modificată, rambursată parțial și ajustată financiar în martie. Un sistem o grupează după data rezervării. Altul folosește data sejurului. Financiarul folosește data de înregistrare contabilă. Un dashboard poate vizualiza fidel toate trei și tot poate încurca echipa.",
  layer: "Un strat de integrare poate face distincțiile explicite:",
  steps: [
    ["Extrage", " prin API-uri suportate, fluxuri de date sau exporturi programate."],
    ["Păstrează proveniența:", " proprietatea, canalul, rezervarea și identificatorii de monedă originali."],
    ["Normalizează", " statusurile și identitățile coerente, fără să arunci detaliile relevante din sursă."],
    ["Reconciliază", " diferențele după definiții de business agreate, inclusiv taxe și ajustări."],
    ["Expune excepțiile", " pe care sistemul nu le poate rezolva sigur."],
    ["Publică seturi de date de încredere", " către dashboard-uri existente, exporturi sau instrumente BI."],
  ],
  customTask: "sarcină de integrare de date hoteliere pe măsură",
  customTaskAfter: ", nu neapărat un motiv să îți scrii propria aplicație de dashboard.",
  customWin: "Integrarea pe măsură câștigă când",
  customWinP: " sursele nu pot fi combinate corect cu conectorii existenți sau cu transformări obișnuite, când regulile diferă în funcție de hotel sau furnizor, sau când calitatea nerezolvată a datelor afectează în mod real deciziile.",
  customLose: "Integrarea pe măsură pierde când",
  customLoseP: " raportarea existentă din PMS sau un conector suportat deja disponibil acoperă cerințele. Creează și o responsabilitate continuă pentru schimbările din surse, logica de reconciliere, securitate, monitorizare și suport.",
  hHard: "Ce face dificilă, în practică, integrarea datelor hoteliere?",
  hardP: "Conectarea sistemelor rareori înseamnă doar să muți rânduri într-un dashboard. Din munca noastră de construire a integrărilor de rezervări hoteliere, trei provocări de inginerie revin des și contează pentru raportare:",
  hard: [
    ["Identificatorii nu se aliniază singuri.", " Aceeași proprietate, cameră sau rezervare poate fi reprezentată diferit în sisteme diferite. Potrivirea înregistrărilor cere reguli documentate și o cale de a revizui cazurile ambigue."],
    ["Stările rezervării urmează cicluri de viață diferite.", " O anulare, o modificare sau o rezervare la cerere poate fi exprimată diferit de fiecare furnizor. Dacă tratezi toate statusurile ca interschimbabile, totalurile devin înșelătoare."],
    ["Banii au nevoie de context.", " Net versus preț de vânzare, moneda, taxele, ajustările și momentul rambursării schimbă ce înseamnă un număr. Conversia sumelor fără păstrarea definițiilor din sursă poate ascunde discrepanțe."],
  ],
  hardEndBefore: "Acestea sunt exemple de provocări de integrare, ",
  hardEndStrong: "nu afirmații că WebbingHUB a livrat transformarea de raportare a unui anumit hotel",
  hardEndAfter: ". Soluția poate fi o transformare mică adăugată unei stive BI existente, nu o platformă software nouă.",
  hCompare: "Compară variantele corect",
  cap2: "Rolul tipic al fiecărui strat. Un anumit PMS sau instrument BI poate face mai mult sau mai puțin decât atât.",
  th2: ["Factor", "Rapoarte native din PMS", "Instrument BI, precum Power BI", "Integrare pe măsură / strat de reconciliere"],
  rows2: [
    ["Rolul principal, de obicei", "Raportare în sistemul proprietății", "Modelează și vizualizează date coerente", "Face sursele disparate comparabile și de încredere"],
    ["Timp până la primul rezultat util", "Adesea cel mai scurt, pentru rapoartele suportate", "Depinde de date accesibile și de încredere", "Cere analiză și implementare"],
    ["Raportare între proprietăți", "Depinde de PMS și de produs", "Puternică dacă există seturi de date comune", "Poate pregăti seturi coerente pentru mai multe proprietăți"],
    ["Definițiile metricilor", "Definite de PMS, uneori configurabile", "Configurabile, și trebuie guvernate", "Reguli explicite de mapare între surse"],
    ["Identificatori și statusuri dezordonate", "Limitat la ce poate furnizorul", "Unele transformări sunt posibile", "Flexibilitate mare, și este muncă de inginerie"],
    ["Reconciliere și excepții", "Depinde de furnizor", "Trebuie modelate", "Pot fi proiectate ca funcție de bază"],
    ["Costuri de luat în calcul", "Licența existentă și modulele suplimentare", "Licențe BI, infrastructură, reîmprospătare și administrare", "Construcție, găzduire, monitorizare, mentenanță continuă"],
    ["Potrivirea cea mai bună", "Întrebări operaționale suportate", "Analiză și distribuire", "Date operaționale incoerente sau complexe"],
  ],
  allThreeBefore: "Un hotel le poate folosi pe toate trei. Decizia este ",
  allThreeStrong: "ce strat lipsește și provoacă durerea de raportare de azi",
  allThreeAfter: ".",
  hQuestions: "Trei întrebări care decid arhitectura",
  q1: "1. Lipsește informația, sau există un dezacord despre ea?",
  q1p: "Dacă informația este deja corectă într-un tabel sau export de încredere, un strat BI poate fi de ajuns. Dacă cifrele nu se potrivesc, investighează definițiile și proveniența înainte să alegi instrumentul de prezentare.",
  q1link: "Briefingul HEDNA din 2026 despre taxe și distribuție",
  q1after: " descrie feluri în care identitatea taxei, suma, jurisdicția și informația de remitere își pot pierde sensul între hotel și sistemele de distribuție. O comparație brut versus net poate părea incoerentă chiar și când niciun sistem nu este, tehnic, stricat.",
  q2: "2. Cine răspunde când două cifre diferă?",
  q2p: "Stabilește cine poate aproba metrica, corecția și orice excepție. Un venit net aprobat de financiar nu este automat același lucru cu raportul de pickup al unui revenue manager. Ambele pot fi legitime când sunt etichetate și calculate consecvent.",
  q3: "3. Care este cel mai mic raport complet care merită automatizat?",
  q3p: "Alege un singur rezultat recurent. De exemplu: un raport săptămânal de venit din camere, pe mai multe proprietăți, pe data sejurului, cu reguli de anulare agreate și un tratament fiscal clar definit. Listează sursele, pașii de reconciliere, ora de livrare și persoana responsabilă pentru excepțiile nerezolvate.",
  q3end: "Acesta este un pilot mai credibil decât „înlocuiește fiecare foaie de calcul” sau „construiește un dashboard cu AI”.",
  hExample: "Exemplu: un prim proiect rezonabil pentru un grup hotelier",
  exLabel: "Scenariu ilustrativ, nu un caz de client WebbingHUB.",
  exP: " Un grup hotelier regional combină datele de sejur din PMS, evenimentele de rezervare din CRS și rapoartele de canal într-o foaie de calcul operațională. Oamenii petrec timp reconciliind anulările și mapând numele canalelor înainte de raportare.",
  exMight: "O primă versiune practică ar putea:",
  exItems: [
    "Citi fluxurile suportate ale unei singure proprietăți, ca să valideze accesul la date.",
    "Agrea un set mic de definiții cu echipele de revenue și financiar.",
    "Crea un proces repetabil de extragere și reconciliere.",
    "Publica o listă de excepții lângă un raport săptămânal.",
    "Alimenta rezultatul în BI-ul existent, dacă organizația îl folosește deja.",
  ],
  exThen: "Abia după ce primul raport este de încredere ar extinde echipa la mai multe proprietăți și metrici.",
  exSuccessBefore: "Succesul nu este „un dashboard nou și frumos”. Este ",
  exSuccessStrong: "un raport livrat consecvent, cu cifre pe care oamenii le pot explica",
  exSuccessAfter: ". Măsuri utile: timpul de pregătire, excepțiile nerezolvate, ajustările de reconciliere și punctualitatea livrării. Raportează timpul oamenilor separat de timpul de așteptare. Capacitatea eliberată nu este automat o economie de salarii.",
  hAi: "Dar rapoartele hoteliere generate de AI?",
  aiEnd: "Începe cu date pe care te poți baza, cu control al accesului potrivit și cu calcule care pot fi urmărite. Adaugă un text generat doar când metricile de dedesubt pot fi verificate.",
  hVerdict: "Verdict: repară stratul care lipsește, nu simptomul cel mai vizibil",
  vPms: "Folosește raportarea nativă din PMS",
  vPmsAfter: " când răspunsurile de care ai nevoie sunt deja disponibile și de încredere. ",
  vBi: "Folosește instrumente BI",
  vBiAfter: " când datele de încredere au nevoie de analiză și distribuire mai bune. ",
  vCustom: "Investește în integrare pe măsură",
  vCustomAfter: " când sistemele sursă nu sunt de acord sau afacerea are nevoie de reguli pe care conectorii existenți nu le pot exprima în siguranță.",
  hCta: "Nu ești sigur dacă îți trebuie alt dashboard sau integrări mai bune?",
  ctaP: "Înainte să investești în software de raportare, identifică unde încep datele să nu se potrivească. Pornește de la un raport recurent, de la înregistrările sursă din spatele lui și de la definițiile pe care le folosesc echipele.",
  ctaStudio: ", construim aplicații web și integrări pe măsură peste sisteme complexe, inclusiv fluxuri de rezervare și distribuție hotelieră. Putem ajuta să vezi dacă instrumentele suportate rezolvă deja problema sau dacă un strat de integrare adaptat este justificat.",
  ctaLink: "Hai să discutăm provocarea de integrare",
  ctaAfter: " și pornește de la cel mai mic flux de raportare util, nu de la o reconstrucție mare de software.",
  hSources: "Surse și lecturi suplimentare",
  sources: [
    ["RateGain / NYU SPS / HEDNA — lansarea State of Distribution 2026, septembrie 2026", "Efortul manual de raportare raportat la echipele comerciale și limitele a ceea ce comunicatul face public."],
    ["HEDNA — Taxes, Fees & the Distribution Gap, august 2026", "Definiții de date și reconciliere în distribuție."],
    ["Microsoft Learn — prezentare a surselor de date suportate în Power BI", "Capabilitățile și limitele conectorilor, așa cum le documentează Microsoft."],
    ["Microsoft Learn — gateway-uri de date on-premises în Power BI", "Conectivitate și reîmprospătare pentru sisteme on-premises."],
  ],
};

const es = {
  lead: "El PMS informa los ingresos por habitación. El CRS informa las reservas. Los informes de canal muestran las reservas que llegan por intermediarios. Finanzas tiene otra cifra.",
  monday: "Alguien junta las exportaciones cada lunes. Cuando las cifras por fin coinciden, la reunión comercial ya va tarde.",
  evalBefore: "Si estás valorando la ",
  evalStrong: "automatización del reporting hotelero",
  evalMid: ", la pregunta habitual es «¿Qué panel compramos?». Una pregunta mejor es ",
  evalQ: "dónde empieza el desacuerdo",
  evalAfter: ". Según la respuesta, los informes nativos del PMS, una herramienta de BI como Power BI o una integración de datos a medida pueden ser la inversión adecuada. Resuelven partes distintas del problema y, a veces, tienen que trabajar juntas.",
  hQuick: "Decisión rápida: qué enfoque de reporting hotelero usar",
  cap1: "Un punto de partida. Se puede usar más de una capa a la vez.",
  th1: ["Si tu situación es…", "Empieza por…", "Por qué", "Comprueba antes de comprar o construir"],
  rows1: [
    ["Una propiedad, preguntas habituales de ocupación o ingresos por habitación", "Los informes que ya tiene el PMS", "El sistema de origen puede responder ya a la pregunta", "Definiciones del informe, permisos, exportación y programación"],
    ["Datos coherentes, pero varios equipos necesitan vistas flexibles", "Herramienta de BI / plataforma de reporting", "Mejor modelado, exploración y distribución", "Conectores, actualización, control de acceso, licencia y calidad de la fuente"],
    ["Los datos de varios PMS, CRS o canales no coinciden", "Integración de datos y conciliación", "Normaliza primero identificadores, fechas, estados y definiciones", "APIs y exportaciones, reglas de mapeo, calidad, quién es dueño de las excepciones"],
    ["Varias propiedades, reglas complejas y necesidades operativas propias", "Un flujo a medida que alimenta el BI o los informes", "Cubre uniones y conciliaciones específicas del negocio", "Mantenimiento, requisitos de auditoría y coste durante toda la vida"],
  ],
  notContest: "No es un concurso en el que un producto gana a los demás.",
  notContestAfter: " Un flujo a medida puede alimentar una herramienta de BI ya hecha. Un hotel puede usar el reporting nativo del PMS para la operación diaria y un BI consolidado para la dirección regional.",
  pathTitle: "Un camino corto de decisión",
  path: [
    ["Una sola propiedad, y la definición ya está acordada.", " Usa los informes del PMS."],
    ["Los datos son coherentes, pero los equipos necesitan sus propias vistas.", " Usa una herramienta de BI."],
    ["Las fuentes no coinciden.", " Integra y concilia antes de elegir un panel."],
    ["Varias propiedades, con reglas que los conectores no pueden expresar.", " Construye un flujo a medida que pueda alimentar el BI."],
  ],
  dTitle: "La pila de reporting: Fuente → Conciliación → BI",
  dLead: "Tres maneras de llevar los mismos hechos comerciales a un informe. La vía (c) puede ampliar la vía (b). No tiene por qué sustituirla.",
  lanes: [
    {
      title: "(a) Informe nativo del PMS",
      steps: [
        ["Fuente", "El PMS de una sola propiedad."],
        ["Informe", "Un informe que ese sistema de propiedad ya admite."],
        ["Audiencia", "Quien comparte la definición de ese informe."],
        ["Límite", "Se queda dentro de la propiedad, o de un grupo de propiedades admitido."],
      ],
    },
    {
      title: "(b) BI ya hecho",
      steps: [
        ["Fuente", "Sistemas que exponen un conector admitido o una exportación controlada."],
        ["Herramienta", "Power BI u otra herramienta de BI. Power BI es un ejemplo."],
        ["Vistas", "Filtros, tendencias, comparación entre propiedades, distribución programada."],
        ["Condición", "Las definiciones de las métricas ya coinciden. Un gráfico no las concilia."],
      ],
    },
    {
      title: "(c) Flujo a medida, que alimenta el BI",
      steps: [
        ["Extracción", "APIs admitidas, feeds o exportaciones programadas."],
        ["Normalización", "Identificadores, fechas, estados y moneda, conservando la procedencia."],
        ["Conciliación", "Definiciones acordadas. Las excepciones que las reglas no cierran siguen visibles."],
        ["Luego el BI", "Publica el conjunto fiable en una herramienta de BI existente, la misma capa que (b)."],
      ],
      extendTitle: "(c) amplía (b)",
      extend: "El trabajo a medida hace comparables fuentes dispares. La herramienta de BI sigue presentándolas. No hace falta escribir una aplicación nueva de paneles para justificar el flujo.",
    },
  ],
  dDesc: "El reporting nativo del PMS, una herramienta de BI y una integración a medida pueden usarse juntos. La pregunta útil es qué capa falta.",
  hResearch: "Por qué importa ahora: qué dice de verdad la investigación de 2026",
  researchBefore: "Un ",
  researchLink: "anuncio de septiembre de 2026, State of Distribution, de RateGain, NYU SPS y HEDNA",
  researchMid: " dice que ",
  researchStrong: "más del 80% de los equipos comerciales",
  researchMid2: " dedica uno o dos días a la semana a ",
  researchStrong2: "producir y analizar informes de forma manual",
  researchAfter: ". También informa de que menos del 30% ha invertido en herramientas de reporting dedicadas.",
  careful: "Esas cifras hay que tratarlas con cuidado. «Producir y analizar» incluye la interpretación humana. No todo ese trabajo es copia de datos que el software pueda eliminar. El estudio describe funciones comerciales como revenue management, ventas, marketing y distribución, no a cada empleado del hotel. El comunicado describe una huella de más de 270 marcas y 58.000 propiedades, ",
  carefulStrong: "no 58.000 encuestados independientes",
  carefulAfter: ". El periodo operativo declarado fue de diciembre de 2024 a noviembre de 2025.",
  takeawayBefore: "La conclusión es más estrecha, y útil: producir informes a mano es un problema real entre los equipos comerciales encuestados. El comunicado ",
  takeawayNot: "no",
  takeawayAfter: " demuestra que una herramienta concreta de reporting hotelero sea la mejor solución, ni establece qué fracción de horas podría ahorrar un hotel comprando una.",
  h1: "Opción 1: Quédate con el reporting del PMS que ya tienes",
  s1p: "Un sistema de gestión de la propiedad suele ser el punto de partida más práctico para el reporting operativo. Si el equipo necesita llegadas, ocupación, noches de habitación o un informe de la propiedad que el PMS ya admite, un informe existente puede bastar.",
  s1win: "El reporting nativo del PMS gana cuando:",
  s1wins: [
    "La pregunta es local a una propiedad o a un grupo de propiedades admitido.",
    "Todo el mundo está de acuerdo con la definición del informe.",
    "Los roles y las exportaciones actuales cubren a quien tiene que verlo.",
    "No hace falta una conciliación complicada con fuentes externas.",
  ],
  s1lim: "Sus límites:",
  s1limP: " un informe del PMS puede no explicar la economía del canal, el momento de la reserva central, los identificadores entre propiedades, los ajustes de finanzas o los supuestos de revenue management. Algunos productos de PMS admiten reporting e integraciones más amplios. Otros no. Comprueba el proveedor y la edición reales, no la etiqueta «PMS».",
  s1dont: "No construyas un panel solo porque existen hojas de cálculo.",
  s1dontP: " Comprueba primero si el equipo está rehaciendo un informe nativo que podría programarse o exportarse con más fiabilidad.",
  h2: "Opción 2: Usa Power BI u otra herramienta de business intelligence",
  s2before: "Una herramienta de BI encaja cuando los datos son lo bastante coherentes, pero quien decide necesita filtros flexibles, tendencias, comparaciones entre propiedades o una distribución programada. ",
  s2link: "La documentación de Power BI de Microsoft",
  s2after: " describe conexiones a varios tipos de fuente. Los conectores admitidos, la necesidad de un gateway y la frescura de los datos varían. Power BI es un ejemplo, no una recomendación universal.",
  s2win: "El BI gana cuando:",
  s2wins: [
    "Los sistemas de origen exponen datos útiles por interfaces admitidas o exportaciones controladas.",
    "Las definiciones de métricas como ingresos por habitación, ocupación y cancelaciones están acordadas.",
    "Los analistas necesitan profundizar y la dirección necesita un reporting repetible.",
    "La organización puede gestionar permisos, calendarios de actualización y la responsabilidad.",
  ],
  s2not: "Lo que el BI no hace por sí solo:",
  s2notP: " decidir si dos identificadores de reserva de proveedor son la misma reserva, interpretar definiciones fiscales contradictorias o identificar el importe de referencia tras un reembolso parcial. Un gráfico de Power BI puede mostrar las cifras que cargaste. No concilia definiciones de métricas que se contradicen. Puedes implementar lógica de limpieza en un ecosistema de BI, pero esa lógica sigue necesitando diseño, verificación y mantenimiento.",
  s2gateBefore: "En sistemas de origen locales, el gateway o la conectividad pueden importar. ",
  s2gateLink: "Microsoft documenta las opciones de gateway de Power BI",
  s2gateAfter: ". Valora privacidad, licencias y límites de actualización para tu arquitectura, en lugar de dar por hecho que cada PMS tiene un conector en la nube listo para usar.",
  h3: "Opción 3: Construye una integración de datos hoteleros o una capa de conciliación a medida",
  s3p: "A veces el problema no es la presentación. Tres sistemas legítimos registran versiones distintas del mismo hecho comercial.",
  hypo: "Ejemplo hipotético, no una reserva real.",
  hypoP: " Imagina una reserva creada en enero para una estancia en febrero, luego modificada, reembolsada en parte y ajustada en finanzas en marzo. Un sistema la agrupa por fecha de reserva. Otro usa la fecha de estancia. Finanzas usa la fecha de contabilización. Un panel puede visualizar las tres con fidelidad y aun así confundir al equipo.",
  layer: "Una capa de integración puede hacer explícitas las distinciones:",
  steps: [
    ["Extrae", " con APIs admitidas, feeds de datos o exportaciones programadas."],
    ["Conserva la procedencia:", " propiedad, canal, reserva e identificadores de moneda originales."],
    ["Normaliza", " estados e identidades coherentes, sin descartar el detalle relevante de la fuente."],
    ["Concilia", " las diferencias bajo definiciones de negocio acordadas, impuestos y ajustes incluidos."],
    ["Expón las excepciones", " que el sistema no puede resolver con fiabilidad."],
    ["Publica conjuntos fiables", " hacia paneles, exportaciones o herramientas de BI que ya existan."],
  ],
  customTask: "tarea de integración de datos hoteleros a medida",
  customTaskAfter: ", no necesariamente un motivo para escribir tu propia aplicación de paneles.",
  customWin: "La integración a medida gana cuando",
  customWinP: " las fuentes no se pueden combinar bien con los conectores existentes o con transformaciones ordinarias, cuando las reglas cambian según el hotel o el proveedor, o cuando una calidad de datos sin resolver afecta de verdad a las decisiones.",
  customLose: "La integración a medida pierde cuando",
  customLoseP: " el reporting del PMS o un conector admitido ya disponible cubre lo que hace falta. También crea una responsabilidad continua por los cambios de las fuentes, la lógica de conciliación, la seguridad, la monitorización y el soporte.",
  hHard: "Qué hace difícil, en la práctica, la integración de datos hoteleros",
  hardP: "Conectar sistemas rara vez es solo mover filas a un panel. De nuestro trabajo construyendo integraciones de reservas hoteleras, tres retos de ingeniería se repiten y pesan en el reporting:",
  hard: [
    ["Los identificadores no se alinean solos.", " La misma propiedad, habitación o reserva puede representarse de forma distinta en cada sistema. Emparejar registros exige reglas documentadas y una forma de revisar los casos ambiguos."],
    ["Los estados de la reserva siguen ciclos de vida distintos.", " Una cancelación, una modificación o una reserva bajo petición puede expresarse de otra manera en cada proveedor. Tratar todos los estados como intercambiables produce totales engañosos."],
    ["El dinero necesita contexto.", " Neto frente a precio de venta, moneda, impuestos, ajustes y el momento del reembolso cambian lo que significa un número. Convertir importes sin conservar las definiciones de origen puede ocultar discrepancias."],
  ],
  hardEndBefore: "Son ejemplos de retos de integración, ",
  hardEndStrong: "no la afirmación de que WebbingHUB haya entregado la transformación de reporting de un hotel concreto",
  hardEndAfter: ". La solución puede ser una transformación pequeña añadida a una pila de BI que ya existe, no una plataforma nueva.",
  hCompare: "Compara los enfoques con justicia",
  cap2: "El papel habitual de cada capa. Un PMS o una herramienta de BI concretos pueden hacer más o menos que esto.",
  th2: ["Factor", "Informes nativos del PMS", "Herramienta de BI, como Power BI", "Integración a medida / capa de conciliación"],
  rows2: [
    ["Papel principal, en general", "Reporting del sistema de la propiedad", "Modelar y visualizar datos coherentes", "Hacer comparables y fiables fuentes dispares"],
    ["Tiempo hasta el primer resultado útil", "Suele ser el más corto, en informes admitidos", "Depende de datos accesibles y fiables", "Exige análisis e implementación"],
    ["Reporting entre propiedades", "Depende del PMS y del producto", "Fuerte si existen conjuntos compartidos", "Puede preparar conjuntos coherentes para varias propiedades"],
    ["Definiciones de métricas", "Definidas por el PMS, a veces configurables", "Configurables, y hay que gobernarlas", "Reglas explícitas de mapeo entre fuentes"],
    ["Identificadores y estados desordenados", "Limitado a lo que permite el proveedor", "Alguna transformación es posible", "Mucha flexibilidad, y es trabajo de ingeniería"],
    ["Conciliación y excepciones", "Depende del proveedor", "Hay que modelarlas", "Pueden diseñarse como función central"],
    ["Costes a tener en cuenta", "Licencia actual y complementos", "Licencias de BI, infraestructura, actualización y administración", "Construcción, alojamiento, monitorización, mantenimiento continuo"],
    ["Mejor encaje", "Preguntas operativas admitidas", "Análisis y distribución", "Datos operativos incoherentes o complejos"],
  ],
  allThreeBefore: "Un hotel puede usar las tres. La decisión es ",
  allThreeStrong: "qué capa falta y causa el dolor de reporting de hoy",
  allThreeAfter: ".",
  hQuestions: "Tres preguntas que deciden la arquitectura",
  q1: "1. ¿Falta información, o hay un desacuerdo sobre ella?",
  q1p: "Si la información ya es correcta en una tabla o exportación fiable, una capa de BI puede bastar. Si las cifras no coinciden, investiga definiciones y procedencia antes de elegir la herramienta de presentación.",
  q1link: "El briefing de HEDNA de 2026 sobre impuestos y distribución",
  q1after: " describe maneras en que la identidad del impuesto, el importe, la jurisdicción y la información de remisión pueden perder sentido entre el hotel y los sistemas de distribución. Una comparación bruto contra neto puede parecer incoherente aunque ningún sistema esté, técnicamente, roto.",
  q2: "2. ¿Quién responde cuando dos cifras difieren?",
  q2p: "Define quién puede aprobar la métrica, la corrección y cualquier excepción. Un ingreso neto aprobado por finanzas no es automáticamente lo mismo que el informe de pickup de un revenue manager. Los dos pueden ser legítimos si están etiquetados y calculados de forma consistente.",
  q3: "3. ¿Cuál es el informe completo más pequeño que merece automatizarse?",
  q3p: "Elige un solo resultado recurrente. Por ejemplo: un informe semanal de ingresos por habitación, de varias propiedades, por fecha de estancia, con reglas de cancelación acordadas y un tratamiento fiscal definido con claridad. Lista las fuentes, los pasos de conciliación, la hora de entrega y la persona responsable de las excepciones sin resolver.",
  q3end: "Es un piloto más creíble que «sustituir cada hoja de cálculo» o «construir un panel con IA».",
  hExample: "Ejemplo: un primer proyecto sensato para un grupo hotelero",
  exLabel: "Escenario ilustrativo, no un caso de cliente de WebbingHUB.",
  exP: " Un grupo hotelero regional combina datos de estancia del PMS, eventos de reserva del CRS e informes de canal en una hoja de cálculo operativa. El equipo dedica tiempo a conciliar cancelaciones y a mapear nombres de canal antes de informar.",
  exMight: "Una primera versión práctica podría:",
  exItems: [
    "Leer los feeds admitidos de una sola propiedad, para validar el acceso a los datos.",
    "Acordar un conjunto pequeño de definiciones con los equipos de revenue y de finanzas.",
    "Crear un proceso repetible de extracción y conciliación.",
    "Publicar una lista de excepciones junto a un informe semanal.",
    "Alimentar el resultado en el BI existente, si la organización ya lo usa.",
  ],
  exThen: "Solo cuando ese primer informe sea de fiar ampliaría el equipo a más propiedades y métricas.",
  exSuccessBefore: "El éxito no es «un panel nuevo y bonito». Es ",
  exSuccessStrong: "un informe entregado de forma consistente, con cifras que la gente puede explicar",
  exSuccessAfter: ". Medidas útiles: tiempo de preparación, excepciones sin resolver, ajustes de conciliación y puntualidad de la entrega. Informa el tiempo de las personas aparte del tiempo de espera. La capacidad liberada no es automáticamente un ahorro de nómina.",
  hAi: "¿Y los informes hoteleros generados por IA?",
  aiEnd: "Empieza por datos fiables, controles de acceso adecuados y cálculos que se puedan seguir. Añade un texto generado solo cuando las métricas de debajo se puedan comprobar.",
  hVerdict: "Veredicto: arregla la capa que falta, no el síntoma más visible",
  vPms: "Usa el reporting nativo del PMS",
  vPmsAfter: " cuando las respuestas que necesitas ya están disponibles y son de fiar. ",
  vBi: "Usa herramientas de BI",
  vBiAfter: " cuando unos datos fiables necesitan mejor análisis y distribución. ",
  vCustom: "Invierte en integración a medida",
  vCustomAfter: " cuando los sistemas de origen no coinciden o el negocio necesita reglas que los conectores existentes no pueden expresar con seguridad.",
  hCta: "¿No tienes claro si te hace falta otro panel o mejores integraciones?",
  ctaP: "Antes de invertir en software de reporting, identifica dónde empiezan a no coincidir los datos. Empieza por un informe recurrente, por los registros de origen que lo sostienen y por las definiciones que usan los equipos.",
  ctaStudio: ", construimos aplicaciones web e integraciones a medida sobre sistemas complejos, incluidos flujos de reserva y distribución hotelera. Podemos ayudar a ver si las herramientas admitidas ya resuelven el problema o si una capa de integración adaptada está justificada.",
  ctaLink: "Hablemos de tu reto de integración",
  ctaAfter: " y empieza por el flujo de reporting útil más pequeño, no por una reconstrucción grande de software.",
  hSources: "Fuentes y lecturas",
  sources: [
    ["RateGain / NYU SPS / HEDNA — lanzamiento de State of Distribution 2026, septiembre de 2026", "El esfuerzo manual de reporting declarado en los equipos comerciales, y los límites de lo que el comunicado hace público."],
    ["HEDNA — Taxes, Fees & the Distribution Gap, agosto de 2026", "Definiciones de datos y conciliación en la distribución."],
    ["Microsoft Learn — resumen de fuentes de datos admitidas en Power BI", "Capacidades y límites de los conectores, según la documentación de Microsoft."],
    ["Microsoft Learn — gateways de datos locales en Power BI", "Conectividad y actualización para sistemas locales."],
  ],
};

const SOURCE_URLS = [
  "https://rategain.com/press-release/state-of-distribution-2026-launch/",
  "https://www.hedna.org/insights/hedna-pulse/taxes-fees/",
  "https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-data-sources",
  "https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-onprem",
];

export function ReportingTranslation({ locale }: { locale: "ro" | "es" }) {
  const c = seo[locale];
  const L = locale === "ro" ? ro : es;
  const contact = `/${marketingLocale(locale)}/contact`;
  const schema = blogPostingSchema({
    locale,
    path: POST_PATH,
    headline: c.h1,
    description: c.description,
    datePublished: `${PUBLISHED}T00:00:00Z`,
    dateModified: `${PUBLISHED}T00:00:00Z`,
    wordCount: 1650,
    timeRequired: "PT9M",
    section: c.section,
    keywords: c.description,
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
            <p className={styles.lead}>{L.lead}</p>
          </header>
          <div className={styles.body}>
            <p>{L.monday}</p>
            <p>
              {L.evalBefore}<strong>{L.evalStrong}</strong>{L.evalMid}<strong>{L.evalQ}</strong>{L.evalAfter}
            </p>

            <h2>{L.hQuick}</h2>
            <div className={styles.tableWrap}>
              <table className={styles.compare}>
                <caption className={styles.caption}>{L.cap1}</caption>
                <thead>
                  <tr>{L.th1.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
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
            <p><strong>{L.notContest}</strong>{L.notContestAfter}</p>

            <aside className={styles.checklist} aria-labelledby="decision-path">
              <h3 id="decision-path">{L.pathTitle}</h3>
              <ol>
                {L.path.map(([name, rest]) => (
                  <li key={name}><strong>{name}</strong>{rest}</li>
                ))}
              </ol>
            </aside>

            <figure className={styles.diagram} aria-labelledby="stack-title" aria-describedby="stack-desc">
              <h3 id="stack-title" className={styles.diagramTitle}>{L.dTitle}</h3>
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
                    {"extend" in lane && lane.extend ? (
                      <p className={styles.exception}>
                        <strong>{lane.extendTitle}</strong>
                        {lane.extend}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ol>
              <p id="stack-desc" className={styles.diagramDesc}>{L.dDesc}</p>
            </figure>

            <h2>{L.hResearch}</h2>
            <p>
              {L.researchBefore}
              <a href={SOURCE_URLS[0]} target="_blank" rel="noopener noreferrer">{L.researchLink}</a>
              {L.researchMid}<strong>{L.researchStrong}</strong>{L.researchMid2}<strong>{L.researchStrong2}</strong>{L.researchAfter}
            </p>
            <p>
              {L.careful}<strong>{L.carefulStrong}</strong>{L.carefulAfter}
            </p>
            <p>
              {L.takeawayBefore}<strong>{L.takeawayNot}</strong>{L.takeawayAfter}
            </p>

            <h2>{L.h1}</h2>
            <p>{L.s1p}</p>
            <p><strong>{L.s1win}</strong></p>
            <ul>{L.s1wins.map((item) => <li key={item}>{item}</li>)}</ul>
            <p><strong>{L.s1lim}</strong>{L.s1limP}</p>
            <p><strong>{L.s1dont}</strong>{L.s1dontP}</p>

            <h2>{L.h2}</h2>
            <p>
              {L.s2before}
              <a href={SOURCE_URLS[2]} target="_blank" rel="noopener noreferrer">{L.s2link}</a>
              {L.s2after}
            </p>
            <p><strong>{L.s2win}</strong></p>
            <ul>{L.s2wins.map((item) => <li key={item}>{item}</li>)}</ul>
            <p><strong>{L.s2not}</strong>{L.s2notP}</p>
            <p>
              {L.s2gateBefore}
              <a href={SOURCE_URLS[3]} target="_blank" rel="noopener noreferrer">{L.s2gateLink}</a>
              {L.s2gateAfter}
            </p>

            <h2>{L.h3}</h2>
            <p>{L.s3p}</p>
            <aside className={styles.hypothetical}>
              <p><strong>{L.hypo}</strong>{L.hypoP}</p>
            </aside>
            <p>{L.layer}</p>
            <ol>
              {L.steps.map(([name, rest]) => (
                <li key={name}><strong>{name}</strong>{rest}</li>
              ))}
            </ol>
            <p>
              {locale === "ro" ? "Asta este o " : "Esto es una "}
              <strong>{L.customTask}</strong>
              {L.customTaskAfter}
            </p>
            <p><strong>{L.customWin}</strong>{L.customWinP}</p>
            <p><strong>{L.customLose}</strong>{L.customLoseP}</p>

            <h2>{L.hHard}</h2>
            <p>{L.hardP}</p>
            <ul>
              {L.hard.map(([name, rest]) => (
                <li key={name}><strong>{name}</strong>{rest}</li>
              ))}
            </ul>
            <p>{L.hardEndBefore}<strong>{L.hardEndStrong}</strong>{L.hardEndAfter}</p>

            <h2>{L.hCompare}</h2>
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
            <p>{L.allThreeBefore}<strong>{L.allThreeStrong}</strong>{L.allThreeAfter}</p>

            <h2>{L.hQuestions}</h2>
            <h3>{L.q1}</h3>
            <p>{L.q1p}</p>
            <p>
              <a href={SOURCE_URLS[1]} target="_blank" rel="noopener noreferrer">{L.q1link}</a>
              {L.q1after}
            </p>
            <h3>{L.q2}</h3>
            <p>{L.q2p}</p>
            <h3>{L.q3}</h3>
            <p>{L.q3p}</p>
            <p>{L.q3end}</p>

            <h2>{L.hExample}</h2>
            <p><strong>{L.exLabel}</strong>{L.exP}</p>
            <p>{L.exMight}</p>
            <ul>{L.exItems.map((item) => <li key={item}>{item}</li>)}</ul>
            <p>{L.exThen}</p>
            <p>{L.exSuccessBefore}<strong>{L.exSuccessStrong}</strong>{L.exSuccessAfter}</p>

            <h2>{L.hAi}</h2>
            <p>
              {locale === "ro"
                ? <>Același comunicat din septembrie discută adopția și achiziția de AI generativ, dar categoriile astea nu trebuie confundate cu rezultate de producție demonstrate. Un asistent poate rezuma cifre <em>reconciliate</em> sau poate semnala schimbări neobișnuite. Nu poate face autoritative niște definiții de sursă ambigue doar pentru că scrie un paragraf convingător.</>
                : <>El mismo comunicado de septiembre habla de adopción y compra de IA generativa, pero esas categorías no deben confundirse con resultados de producción demostrados. Un asistente puede resumir cifras <em>conciliadas</em> o señalar cambios poco habituales. No puede volver autoritativas unas definiciones de origen ambiguas solo por escribir un párrafo convincente.</>}
            </p>
            <p>{L.aiEnd}</p>

            <h2>{L.hVerdict}</h2>
            <p>
              <strong>{L.vPms}</strong>{L.vPmsAfter}
              <strong>{L.vBi}</strong>{L.vBiAfter}
              <strong>{L.vCustom}</strong>{L.vCustomAfter}
            </p>
            <h3>{L.hCta}</h3>
            <p>{L.ctaP}</p>
            <p>
              {locale === "ro" ? "La " : "En "}
              <Link href={contact}>WebbingHUB</Link>
              {L.ctaStudio}
            </p>
            <p>
              <Link href={contact}><strong>{L.ctaLink}</strong></Link>
              {L.ctaAfter}
            </p>

            <h3>{L.hSources}</h3>
            <ul className={styles.sources}>
              {L.sources.map(([title, note], i) => (
                <li key={title}>
                  <a href={SOURCE_URLS[i]} target="_blank" rel="noopener noreferrer">{title}</a>
                  <span className={styles.sourceNote}>{note}</span>
                </li>
              ))}
            </ul>
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
