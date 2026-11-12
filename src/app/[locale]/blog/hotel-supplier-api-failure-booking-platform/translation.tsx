import Link from "next/link";
import type { ReactNode } from "react";
import type { BlogLocale } from "@/i18n/config";
import { blogPostingSchema } from "@/i18n/article";
import styles from "@/app/blog/hotel-supplier-api-failure-booking-platform/page.module.css";

const POST_PATH = "/blog/hotel-supplier-api-failure-booking-platform";
const PUBLISHED = "2026-11-11T00:00:00Z";

const copy = {
  ro: {
    seoTitle: "Eșecuri de API la furnizorii de hoteluri: timeout, retry și recuperare",
    description:
      "Cum proiectezi integrări hoteliere care izolează eșecul unui furnizor, întorc rezultate parțiale la căutare și recuperează o rezervare incertă fără un retry nesigur.",
    h1: "Un furnizor de hoteluri nu a răspuns. De ce s-a oprit toată platforma de rezervări?",
    section: "Tehnologie de travel",
    keywords:
      "integrare API furnizor hotelier, timeout API rezervări hoteliere, strategie de retry la API de rezervări, rezervări hoteliere duplicate prin API, reziliență API travel",
    crumb: "Un furnizor de hoteluri nu a răspuns",
    homeName: "Acasă",
    tag: "Tehnologie de travel",
    date: "11 noiembrie 2026",
    read: "8 min de citit",
    lead: "Trei furnizori de hoteluri primesc aceeași căutare. Doi răspund normal. Al treilea rămâne blocat. După câteva secunde, călătorul vede o eroare, nu rezultatele de la furnizorii care funcționau.",
    p1a: "Nu e doar o problemă a unui API din amonte. E o problemă de ",
    p1b: "integrare cu API-ul furnizorului de hoteluri",
    p1c: ": o dependență a putut decide rezultatul întregului flux.",
    p2: "O căutare eșuată e neplăcută. O rezervare eșuată e mai gravă. Când cererea de rezervare dă timeout, rezervarea poate exista deja, chiar dacă platforma n-a primit confirmarea. Ce urmează decide dacă clientul primește un răspuns corect sau o a doua rezervare.",
    p3a: "Ținta utilă nu e „să nu apară niciodată o eroare de API”. E să ",
    p3b: "izolezi eșecurile și să păstrezi starea corectă a afacerii când informația e incompletă",
    p3c: ".",
    hSearch: "Eșecul la căutare și eșecul la rezervare nu sunt aceeași problemă",
    p4: "O căutare de hotel e o citire. În funcție de produs și de ce i s-a promis clientului, platforma poate rămâne utilă și când un furnizor nu răspunde. O cerere de rezervare schimbă lumea din afară: o cameră poate fi reținută, iar o obligație de plată poate exista deja.",
    p5: "Operațiile astea au nevoie de politici diferite.",
    caption:
      "Un apel eșuat nu e același eveniment la căutare și la rezervare. Sunt alegeri de proiectare pentru o platformă de rezervări, nu descrierea unui produs.",
    thSit: "Situație",
    thBeh: "Comportament potrivit",
    rows: [
      ["Unul din trei furnizori de căutare dă timeout", "Întoarce rezultatele valide de la ceilalți, dacă regulile o permit, și marchează acoperirea incompletă"],
      ["Toți furnizorii de căutare eșuează", "Spune că verificarea disponibilității nu s-a putut termina. Nu spune că hotelurile sunt sold out"],
      ["Un token de tarif de la căutare expiră", "Reîmprospătează disponibilitatea sau detaliile tarifului, în fluxul acelui furnizor"],
      ["Răspunsul la rezervare dă timeout", "Marchează starea ca incertă. Recuperează sau reconciliază încercarea anterioară înainte de un retry"],
      ["Rezervarea e respinsă în mod sigur", "Arată eșecul confirmat, cu opțiuni sigure de recuperare"],
    ],
    p6: "Dacă tratezi orice eroare de API ca „nu e disponibilitate”, ascunzi o pană a furnizorului de operațiuni și poți induce călătorul în eroare.",
    hSlow: "Nu lăsa un furnizor lent să consume toată platforma",
    p7: "Un agregator obișnuit împrăștie o cerere către mai multe sisteme externe. Fără izolare, un furnizor lent poate ocupa thread-uri, pool-uri de conexiuni sau cozi comune, până când și furnizorii sănătoși încep să cedeze.",
    p8a: "Un design mai robust pune un termen, o limită de concurență și o urmărire a sănătății ",
    p8b: "pentru fiecare furnizor",
    p8c: ". Serviciul poate aduna rezultatele care s-au terminat în bugetul de timp și poate spune care furnizori n-au terminat.",
    p9a: "Pattern-ul ",
    p9b: "bulkhead de la Microsoft",
    p9c: " descrie pool-uri de resurse izolate, ca eșecul unei componente să nu epuizeze resursele de care au nevoie celelalte. Pattern-ul ",
    p9d: "circuit breaker",
    p9e: " descrie blocarea apelurilor care probabil vor eșua din nou, pentru o vreme, lăsând totuși o verificare ulterioară că dependența și-a revenit. Pattern-urile rezolvă probleme diferite și ambele cer reglaj atent. Un circuit breaker protejează apelantul. Nu face o cerere de rezervare idempotentă.",
    p10: "Un flux ilustrativ:",
    bullets: [
      "Furnizorul A răspunde în fereastra de căutare: include ofertele lui valide.",
      "Furnizorul B răspunde normal: include ofertele lui valide.",
      "Furnizorul C depășește termenul: înregistrează supplier_unavailable, nu no_rooms.",
      "Stratul de agregare întoarce rezultatele disponibile, cu o notă internă clară despre ce s-a terminat și ce acoperire lipsește.",
    ],
    p11: "Dacă clientul trebuie să vadă rezultate parțiale ține de ce promite produsul de rezervări. E o decizie de business, nu un accident al apelului HTTP care a terminat primul.",
    kicker: "Arhitectură ilustrativă",
    d1title: "Un furnizor picat, căutarea încă merge",
    d1req: "Aceeași cerere de căutare",
    d1reqSub: "Trimisă în paralel. Fiecare furnizor are propriul termen și propria limită de concurență.",
    d1a: "Răspunde în fereastră. Ofertele valide sunt incluse.",
    d1b: "Răspunde normal. Ofertele valide sunt incluse.",
    d1c: "Timeout. Înregistrat ca supplier_unavailable, nu ca no_rooms.",
    limit: "Limită proprie",
    limitOver: "Limită proprie, depășită",
    d1cov: "Rezultate întoarse",
    d1covP: "Oferte de la A și B, cu acoperirea marcată incompletă pentru că C n-a răspuns.",
    d1desc: "Trei apeluri către furnizori rulează în paralel, fiecare în limita lui. Două întorc oferte. Unul dă timeout. Căutarea tot întoarce rezultatele reușite și spune că acoperirea e incompletă.",
    hRetry: "O strategie de retry la API-ul de rezervare nu poate fi „încearcă din nou”",
    p12a: "Documentația de erori ",
    p12b: "Expedia Rapid",
    p12c: " avertizează că un timeout la rezervare sau un răspuns 5xx nu invalidează neapărat o rezervare. Eșecul poate apărea după ce rezervarea a fost creată. Expedia documentează recuperarea cu referința originală de rezervare și identificatorii legați, ca starea finală să poată fi stabilită. Comportamentul ăsta e al Expedia, descris în documentația Rapid.",
    p13: "Imaginează-ți secvența asta, tot ilustrativă:",
    steps: [
      "Aplicația trimite o cerere de rezervare cu un identificator de încercare care poate fi urmărit.",
      "Furnizorul creează rezervarea.",
      "Răspunsul HTTP se pierde.",
      "Interfața raportează o eroare de rețea.",
      "Clientul apasă din nou Book.",
    ],
    p14: "Fără o cale de recuperare controlată, pasul al cincilea poate repeta o tranzacție reală. Dacă o cerere repetată e sigură ține de contractul de idempotență documentat de furnizor și de faptul că furnizorul poate întoarce starea. Nu ține de un UUID generat în backend. Un identificator generat local nu e o garanție de idempotență pe partea furnizorului.",
    p15: "Un timeout nu dovedește că rezervarea a eșuat. Prima acțiune corectă după o rezervare incertă e, de obicei, să rezolvi încercarea originală prin recuperarea sau reconcilierea pe care o suportă furnizorul, nu să trimiți aceeași mutație încă o dată.",
    d2title: "Rezervarea există, dar răspunsul s-a pierdut",
    d2: [
      ["Trimite cererea", "Aplicația trimite o încercare de rezervare cu un identificator care poate fi urmărit."],
      ["Furnizorul creează rezervarea", "Camera e reținută la furnizor. Evenimentul s-a întâmplat deja."],
      ["Răspunsul dă timeout", "Confirmarea HTTP nu ajunge. Rezervarea și răspunsul sunt evenimente separate."],
      ["Recuperează rezervarea existentă", "Caută încercarea originală prin procesul de retrieval sau reconciliere al furnizorului."],
      ["Confirmă rezultatul", "Starea devine cunoscută din căutarea aia, nu dintr-o a doua mutație de rezervare."],
    ],
    d2desc: "Furnizorul poate crea rezervarea și tot să nu întoarcă răspunsul HTTP. Recuperarea aduce rezervarea care există deja și îi confirmă rezultatul. Nu trimite mutația din nou pe ideea că timeout-ul a însemnat eșec.",
    hState: "Fă starea tranzacției explicită",
    p16: "Merită să persiști o încercare de rezervare înainte să trimiți cererea externă. O mașină de stări simplă, la nivelul aplicației, poate include:",
    p17: "Unele aplicații au nevoie și de cancellation-pending, amendment-pending sau manual-review. Sunt stări de proiectare sugerate. Nu e afirmația că fiecare furnizor expune același model de status.",
    p18a: "Starea ",
    p18b: " e utilă. Spune și software-ului, și echipei de suport, că rezultatul e necunoscut, în loc să înregistreze încercarea ca o cumpărare respinsă.",
    p19: "Un proces sigur leagă retry-urile și recuperarea de identitatea originală, verifică dacă există deja o confirmare, notează ce a aprobat clientul și ține plata și datele călătorului în afara logurilor.",
    p20a: "Ghidul ",
    p20b: "AWS despre API-uri idempotente",
    p20c: " explică de ce contează un identificator de cerere recunoscut și tratarea atomică a unei mutații duplicate. Proprietățile astea trebuie să stea în contractul API-ului, sau într-o graniță de tranzacție pe care o controlezi. Nu pot fi presupuse pentru fiecare furnizor de hoteluri.",
    hNorm: "Normalizează datele furnizorului fără să ascunzi diferențele",
    p21: "Un model canonic de rezervare simplifică platforma. Normalizarea nu e permisiunea de a arunca diferențele utile.",
    p22: "Un adapter poate converti câmpurile de cameră, masă și anulare într-o formă comună. Tot ar trebui să păstreze identificatorii originali, textul politicii, codurile de diagnostic și referințele de corelare, ca o rezervare contestată să poată fi urmărită până la sursă.",
    p23a: "Un API poate întoarce o eroare de business în JSON structurat. Alt strat poate întoarce o pagină HTML de la un gateway. Referința de erori Expedia notează că pot apărea formate neașteptate. Un parser care presupune că orice eroare e JSON cu un câmp ",
    p23b: " poate cădea exact când platforma are cea mai mare nevoie să cedeze blând.",
    p24: "Validează formatul răspunsului defensiv, clasifică ce nu recunoști și păstrează destulă proveniență de diagnostic ca să poți investiga. Redactează plata și datele călătorului înainte să ajungă într-un log.",
    hMon: "Monitorizează incertitudinea de business, nu doar uptime-ul HTTP",
    p25: "Un dashboard de infrastructură verde nu înseamnă că clienții au rezervări confirmate. Măsurile utile includ:",
    mon: [
      "Căutări terminate, pe furnizor și pe operație.",
      "Latența răspunsului și rata de timeout în bugetul de timp al utilizatorului.",
      "Eșecuri de tarif și de parsare, pe furnizor și pe plan tarifar.",
      "Încercări de rezervare care stau nerezolvate, și cât de vechi sunt.",
      "Succesul reconcilierii, și timpul până la rezolvare.",
      "Evenimente de detectare a duplicatelor și escaladări către suport.",
    ],
    p26a: "Pentru citiri care pot fi reîncercate în siguranță, folosește un număr limitat de retry-uri, cu backoff și jitter unde se potrivește. ",
    p26b: "AWS Well-Architected",
    p26c: " spune să controlezi traficul de retry. Retry-uri fără limită pot înrăutăți un incident. Același obicei de „încearcă din nou” nu își are locul pe o mutație de rezervare.",
    hRes: "Reziliența e ce face sistemul după ce drumul fericit se rupe",
    p27: "O platformă de rezervări nu devine fiabilă dacă presupui că fiecare furnizor e fiabil. Devine fiabilă izolând dependențele, păstrând ce înseamnă o ofertă, deosebind o stare incertă de un eșec confirmat și dându-le operatorilor un drum clar de recuperare.",
    p28a: "Dacă o pană a unui singur furnizor doboară regulat căutarea, sau dacă un timeout la rezervare îi face pe oameni să reîncerce o mutație de mână, revizuiește ",
    p28b: "izolarea eșecurilor și recuperarea stării rezervării",
    p28c: " înainte să adaugi încă o integrare.",
    p29a: " lucrează în conectivitatea cu furnizorii și în fluxurile de rezervare. Începutul util e o excepție reală pe care echipa n-o poate rezolva.",
    hSrc: "Surse și lecturi",
    sources: [
      ["Expedia Group — Rapid API common error responses", "Comportament de timeout și retrieval specific furnizorului. Un timeout sau un 5xx nu dovedește că rezervarea n-a fost creată."],
      ["Microsoft Azure Architecture Center — Bulkhead pattern", "Izolarea resurselor, ca eșecul unei componente să nu epuizeze pool-urile folosite de celelalte."],
      ["Microsoft Azure Architecture Center — Circuit Breaker pattern", "Protejarea apelurilor la distanță în timpul unui eșec repetat. Nu creează idempotență."],
      ["AWS Builders' Library — Making retries safe with idempotent APIs", "Identitatea tranzacției și deduplicarea. Proprietățile astea trebuie să fie în contractul API-ului sau într-o graniță pe care o controlezi."],
      ["AWS Well-Architected — Control and limit retry calls", "Politici de retry cu limită. Retry-urile fără limită pot înrăutăți un incident."],
    ],
  },
  es: {
    seoTitle: "Fallos de API en proveedores de hotel: timeout, reintentos y recuperación",
    description:
      "Cómo diseñar integraciones hoteleras que aíslan el fallo de un proveedor, devuelven resultados parciales en la búsqueda y recuperan una reserva incierta sin un reintento inseguro.",
    h1: "Un proveedor de hoteles no respondió. ¿Por qué se detuvo toda la plataforma de reservas?",
    section: "Tecnología de viajes",
    keywords:
      "integración API proveedor hotelero, timeout API de reservas de hotel, estrategia de reintento API de reservas, reservas de hotel duplicadas por API, resiliencia API de viajes",
    crumb: "Un proveedor de hoteles no respondió",
    homeName: "Home",
    tag: "Tecnología de viajes",
    date: "11 de noviembre de 2026",
    read: "8 min de lectura",
    lead: "Tres proveedores de hotel reciben la misma búsqueda. Dos responden con normalidad. El tercero se queda colgado. Unos segundos después, el viajero ve un error, no los resultados de los proveedores que sí funcionaban.",
    p1a: "No es solo un problema del API de aguas arriba. Es un problema de ",
    p1b: "integración con el API del proveedor de hoteles",
    p1c: ": una dependencia pudo decidir el resultado de todo el flujo.",
    p2: "Un fallo de búsqueda es frustrante. Un fallo de reserva es más serio. Cuando la petición de reserva hace timeout, la reserva puede existir ya, aunque la plataforma no haya recibido la confirmación. Lo que ocurra después decide si el cliente obtiene una respuesta fiable o una segunda reserva.",
    p3a: "El objetivo útil no es «no tener nunca un error de API». Es ",
    p3b: "contener los fallos y conservar el estado de negocio correcto cuando la información está incompleta",
    p3c: ".",
    hSearch: "El fallo de búsqueda y el fallo de reserva no son el mismo problema",
    p4: "Una búsqueda de hotel es una lectura. Según el producto y lo que se le prometió al cliente, la plataforma puede seguir siendo útil aunque un proveedor no esté disponible. Una petición de reserva cambia el mundo exterior: puede haber una habitación retenida, y ya puede existir una obligación de pago.",
    p5: "Estas operaciones necesitan políticas distintas.",
    caption:
      "Una llamada fallida no es el mismo evento en la búsqueda y en la reserva. Son decisiones de diseño para una plataforma de reservas, no la descripción de un producto.",
    thSit: "Situación",
    thBeh: "Comportamiento adecuado",
    rows: [
      ["Uno de tres proveedores de búsqueda hace timeout", "Devolver los resultados válidos de los otros si las reglas lo permiten, y marcar la cobertura como incompleta"],
      ["Fallan todos los proveedores de búsqueda", "Explicar que la comprobación de disponibilidad no pudo completarse. No decir que los hoteles están agotados"],
      ["Caduca un token de tarifa de la búsqueda", "Refrescar la disponibilidad o el detalle de la tarifa, en el flujo de ese proveedor"],
      ["La respuesta de la reserva hace timeout", "Marcar el estado como incierto. Recuperar o conciliar el intento anterior antes de reintentar"],
      ["La reserva está rechazada con certeza", "Mostrar el fallo confirmado, con opciones seguras de recuperación"],
    ],
    p6: "Tratar cada error de API como «no hay disponibilidad» esconde una caída del proveedor a operaciones y puede confundir al viajero.",
    hSlow: "Que un proveedor lento no se coma toda la plataforma",
    p7: "Un agregador típico reparte una petición entre varios sistemas externos. Sin aislamiento, un proveedor lento puede ocupar hilos, pools de conexión o colas compartidas hasta que los proveedores sanos también se degradan.",
    p8a: "Un diseño más robusto fija un plazo, un límite de concurrencia y un seguimiento de salud ",
    p8b: "para cada proveedor",
    p8c: ". El servicio puede recoger los resultados que terminaron dentro del presupuesto de tiempo, y puede decir qué proveedores no terminaron.",
    p9a: "El patrón ",
    p9b: "bulkhead de Microsoft",
    p9c: " describe pools de recursos aislados, para que el fallo de un componente no agote los recursos que necesitan los demás. Su patrón ",
    p9d: "circuit breaker",
    p9e: " describe bloquear llamadas que probablemente volverán a fallar, durante un tiempo, dejando una comprobación posterior de que la dependencia se recuperó. Los patrones resuelven problemas distintos y ambos hay que afinarlos. Un circuit breaker protege a quien llama. No hace idempotente una petición de reserva.",
    p10: "Un flujo ilustrativo:",
    bullets: [
      "El proveedor A responde dentro de la ventana de búsqueda: se incluyen sus ofertas válidas.",
      "El proveedor B responde con normalidad: se incluyen sus ofertas válidas.",
      "El proveedor C supera su plazo: se registra supplier_unavailable, no no_rooms.",
      "La capa de agregación devuelve los resultados disponibles, con una nota interna clara de qué terminó y qué cobertura falta.",
    ],
    p11: "Si el cliente debe ver resultados parciales depende de lo que promete el producto de reservas. Es una decisión de negocio, no un accidente de la llamada HTTP que terminó primero.",
    kicker: "Arquitectura ilustrativa",
    d1title: "Un proveedor caído, la búsqueda sigue",
    d1req: "La misma petición de búsqueda",
    d1reqSub: "Enviada en paralelo. Cada proveedor tiene su propio plazo y su propio límite de concurrencia.",
    d1a: "Responde dentro de la ventana. Se incluyen las ofertas válidas.",
    d1b: "Responde con normalidad. Se incluyen las ofertas válidas.",
    d1c: "Timeout. Registrado como supplier_unavailable, no como no_rooms.",
    limit: "Límite propio",
    limitOver: "Límite propio, superado",
    d1cov: "Resultados devueltos",
    d1covP: "Ofertas de A y B, con la cobertura marcada incompleta porque C no respondió.",
    d1desc: "Tres llamadas a proveedores corren en paralelo, cada una dentro de su límite. Dos devuelven ofertas. Una hace timeout. La búsqueda devuelve igual los resultados buenos y dice que la cobertura está incompleta.",
    hRetry: "Una estrategia de reintento en el API de reserva no puede ser «inténtalo otra vez»",
    p12a: "La documentación de errores de ",
    p12b: "Expedia Rapid",
    p12c: " advierte que un timeout de reserva o una respuesta 5xx no invalidan necesariamente una reserva. El fallo puede ocurrir después de creada la reserva. Expedia documenta la recuperación con la referencia original de reserva y los identificadores relacionados, para poder establecer el estado final. Ese comportamiento es de Expedia, descrito en la documentación Rapid.",
    p13: "Imagina esta secuencia, también ilustrativa:",
    steps: [
      "La aplicación envía una petición de reserva con un identificador de intento que se puede seguir.",
      "El proveedor crea la reserva.",
      "Se pierde la respuesta HTTP.",
      "La interfaz informa de un error de red.",
      "El cliente pulsa Book otra vez.",
    ],
    p14: "Sin un camino de recuperación controlado, ese quinto paso puede repetir una transacción real. Que una petición repetida sea segura depende del contrato de idempotencia documentado por el proveedor y de si ese proveedor puede devolver el estado. No depende de un UUID generado en el backend. Un identificador generado en local no es una garantía de idempotencia del lado del proveedor.",
    p15: "Un timeout no demuestra que la reserva falló. La primera acción correcta tras una reserva incierta suele ser resolver el intento original con el proceso de recuperación o conciliación que soporte el proveedor, no enviar otra vez la misma mutación.",
    d2title: "La reserva existe, pero la respuesta se perdió",
    d2: [
      ["Enviar la petición", "La aplicación envía un intento de reserva con un identificador que se puede seguir."],
      ["El proveedor crea la reserva", "La habitación queda retenida en el proveedor. Ese hecho ya ocurrió."],
      ["La respuesta hace timeout", "El acuse HTTP no llega. La reserva y la respuesta son hechos distintos."],
      ["Recuperar la reserva existente", "Buscar el intento original con el proceso de retrieval o conciliación del proveedor."],
      ["Confirmar el resultado", "El estado se conoce por esa consulta, no por una segunda mutación de reserva."],
    ],
    d2desc: "El proveedor puede crear la reserva y aun así no devolver la respuesta HTTP. La recuperación trae la reserva que ya existe y confirma su resultado. No vuelve a enviar la mutación dando por hecho que el timeout significó un fallo.",
    hState: "Haz explícito el estado de la transacción",
    p16: "Conviene persistir un intento de reserva antes de enviar la petición externa. Una máquina de estados sencilla, a nivel de aplicación, podría incluir:",
    p17: "Algunas aplicaciones también necesitan cancellation-pending, amendment-pending o manual-review. Son estados de diseño sugeridos. No es la afirmación de que cada proveedor exponga el mismo modelo de estado.",
    p18a: "Un estado ",
    p18b: " es útil. Le dice al software y al equipo de soporte que el resultado es desconocido, en vez de archivar el intento como una compra rechazada.",
    p19: "Un proceso seguro ata los reintentos y la recuperación a la identidad original, comprueba si ya hay una confirmación, registra lo que el cliente aprobó y deja el pago y los datos del viajero fuera de los logs.",
    p20a: "La guía de ",
    p20b: "AWS sobre APIs idempotentes",
    p20c: " explica por qué importan un identificador de petición reconocido y el manejo atómico de una mutación duplicada. Esas propiedades tienen que vivir en el contrato del API, o dentro de un límite de transacción que controlas. No se pueden dar por hechas en cada proveedor de hoteles.",
    hNorm: "Normaliza los datos del proveedor sin esconder las diferencias",
    p21: "Un modelo canónico de reserva simplifica la plataforma. Normalizar no es permiso para tirar las diferencias útiles.",
    p22: "Un adaptador puede convertir los campos de habitación, régimen y cancelación a una forma común. Aun así debería guardar los identificadores originales, el texto de la política, los códigos de diagnóstico y las referencias de correlación, para poder seguir una reserva discutida hasta su origen.",
    p23a: "Un API puede devolver un error de negocio en JSON estructurado. Otra capa puede devolver una página HTML de un gateway. La referencia de errores de Expedia señala que pueden aparecer formatos inesperados. Un parser que asume que todo error es JSON con un campo ",
    p23b: " puede romperse justo cuando la plataforma más necesita fallar con suavidad.",
    p24: "Valida el formato de la respuesta de forma defensiva, clasifica lo que no reconoces y guarda suficiente procedencia de diagnóstico para investigar. Redacta el pago y los datos del viajero antes de que lleguen a un log.",
    hMon: "Vigila la incertidumbre de negocio, no solo el uptime HTTP",
    p25: "Un panel de infraestructura en verde no significa que los clientes tengan reservas confirmadas. Las medidas útiles incluyen:",
    mon: [
      "Búsquedas completadas, por proveedor y por operación.",
      "Latencia de respuesta y tasa de timeout dentro del presupuesto de tiempo del usuario.",
      "Fallos de tarifa y de parseo, por proveedor y por plan de tarifa.",
      "Intentos de reserva que siguen sin resolver, y qué antigüedad tienen.",
      "Éxito de la conciliación, y el tiempo que tarda en resolverse.",
      "Eventos de detección de duplicados y escalados a soporte.",
    ],
    p26a: "Para lecturas que se pueden reintentar con seguridad, usa un número acotado de reintentos, con backoff y jitter cuando encaje. ",
    p26b: "AWS Well-Architected",
    p26c: " dice que hay que controlar el tráfico de reintentos. Los reintentos sin límite pueden empeorar un incidente. El mismo hábito de «inténtalo otra vez» no cabe en una mutación de reserva.",
    hRes: "La resiliencia es lo que hace el sistema cuando se rompe el camino feliz",
    p27: "Una plataforma de reservas no se vuelve fiable dando por hecho que cada proveedor lo es. Se vuelve fiable aislando dependencias, conservando lo que significa una oferta, distinguiendo un estado incierto de un fallo confirmado y dándoles a los operadores un camino claro de recuperación.",
    p28a: "Si la caída de un solo proveedor tumba la búsqueda con regularidad, o si un timeout de reserva lleva a la gente a reintentar una mutación a mano, revisa ",
    p28b: "el aislamiento de fallos y la recuperación del estado de la reserva",
    p28c: " antes de añadir otra integración.",
    p29a: " trabaja en la conectividad con proveedores y en los flujos de reserva. El arranque útil es una excepción real que el equipo no consigue resolver.",
    hSrc: "Fuentes y lecturas",
    sources: [
      ["Expedia Group — Rapid API common error responses", "Comportamiento de timeout y retrieval específico del proveedor. Un timeout o un 5xx no demuestra que la reserva no se creó."],
      ["Microsoft Azure Architecture Center — Bulkhead pattern", "Aislamiento de recursos, para que el fallo de un componente no agote los pools que usan los demás."],
      ["Microsoft Azure Architecture Center — Circuit Breaker pattern", "Proteger las llamadas remotas durante un fallo repetido. No crea idempotencia."],
      ["AWS Builders' Library — Making retries safe with idempotent APIs", "Identidad de la transacción y deduplicación. Esas propiedades tienen que estar en el contrato del API o en un límite que controlas."],
      ["AWS Well-Architected — Control and limit retry calls", "Políticas de reintento acotadas. Los reintentos sin límite pueden empeorar un incidente."],
    ],
  },
} as const;

const SOURCE_URLS = [
  "https://developers.expediagroup.com/rapid/lodging/reference/error-responses",
  "https://learn.microsoft.com/en-us/azure/architecture/patterns/bulkhead",
  "https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker",
  "https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/",
  "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_mitigate_interaction_failure_limit_retries.html",
];

function Cell({ label, children }: { label: string; children: ReactNode }) {
  return (
    <td>
      <span className={styles.cellLabel}>{label}</span>
      {children}
    </td>
  );
}

export function supplierSeo(locale: BlogLocale) {
  if (locale === "en") return null;
  return copy[locale];
}

export function SupplierTranslation({ locale }: { locale: "ro" | "es" }) {
  const c = copy[locale];
  const schema = blogPostingSchema({
    locale,
    path: POST_PATH,
    headline: c.h1,
    description: c.description,
    datePublished: PUBLISHED,
    wordCount: 1600,
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
              <time dateTime="2026-11-11" className={styles.metaDate}>{c.date}</time>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaRead}>{c.read}</span>
            </div>
            <h1 className={styles.title}>{c.h1}</h1>
            <p className={styles.lead}>{c.lead}</p>
          </header>
          <div className={styles.body}>
            <p>{c.p1a}<strong>{c.p1b}</strong>{c.p1c}</p>
            <p>{c.p2}</p>
            <p>{c.p3a}<strong>{c.p3b}</strong>{c.p3c}</p>
            <h2>{c.hSearch}</h2>
            <p>{c.p4}</p>
            <p>{c.p5}</p>
            <div className={styles.tableWrap}>
              <table className={styles.compare}>
                <caption className={styles.caption}>{c.caption}</caption>
                <thead>
                  <tr>
                    <th scope="col">{c.thSit}</th>
                    <th scope="col">{c.thBeh}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.rows.map(([sit, beh]) => (
                    <tr key={sit}>
                      <Cell label={c.thSit}>{sit}</Cell>
                      <Cell label={c.thBeh}>{beh}</Cell>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>{c.p6}</p>
            <h2>{c.hSlow}</h2>
            <p>{c.p7}</p>
            <p>{c.p8a}<strong>{c.p8b}</strong>{c.p8c}</p>
            <p>
              {c.p9a}
              <a href={SOURCE_URLS[1]} target="_blank" rel="noopener noreferrer">{c.p9b}</a>
              {c.p9c}
              <a href={SOURCE_URLS[2]} target="_blank" rel="noopener noreferrer">{c.p9d}</a>
              {c.p9e}
            </p>
            <p>{c.p10}</p>
            <ul>
              {c.bullets.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p>{c.p11}</p>
            <figure className={styles.diagram} aria-labelledby="search-diagram-title" aria-describedby="search-diagram-desc">
              <p className={styles.kicker}>{c.kicker}</p>
              <h3 id="search-diagram-title" className={styles.diagramTitle}>{c.d1title}</h3>
              <p className={styles.request}>
                {c.d1req}
                <span>{c.d1reqSub}</span>
              </p>
              <ol className={styles.suppliers}>
                <li className={`${styles.supplier} ${styles.ok}`}>
                  <strong>{locale === "ro" ? "Furnizorul A" : "Proveedor A"}</strong>
                  <span className={styles.limit}>{c.limit}</span>
                  <p className={styles.outcome}>{c.d1a}</p>
                </li>
                <li className={`${styles.supplier} ${styles.ok}`}>
                  <strong>{locale === "ro" ? "Furnizorul B" : "Proveedor B"}</strong>
                  <span className={styles.limit}>{c.limit}</span>
                  <p className={styles.outcome}>{c.d1b}</p>
                </li>
                <li className={`${styles.supplier} ${styles.down}`}>
                  <strong>{locale === "ro" ? "Furnizorul C" : "Proveedor C"}</strong>
                  <span className={styles.limit}>{c.limitOver}</span>
                  <p className={styles.outcome}>{c.d1c}</p>
                </li>
              </ol>
              <div className={styles.coverage}>
                <strong>{c.d1cov}</strong>
                <p>{c.d1covP}</p>
              </div>
              <p id="search-diagram-desc" className={styles.diagramDesc}>{c.d1desc}</p>
            </figure>
            <h2>{c.hRetry}</h2>
            <p>
              {c.p12a}
              <a href={SOURCE_URLS[0]} target="_blank" rel="noopener noreferrer">{c.p12b}</a>
              {c.p12c}
            </p>
            <p>{c.p13}</p>
            <ol>
              {c.steps.map((step) => <li key={step}>{step}</li>)}
            </ol>
            <p>{c.p14}</p>
            <p>{c.p15}</p>
            <figure className={styles.diagram} aria-labelledby="booking-diagram-title" aria-describedby="booking-diagram-desc">
              <p className={styles.kicker}>{c.kicker}</p>
              <h3 id="booking-diagram-title" className={styles.diagramTitle}>{c.d2title}</h3>
              <ol className={styles.sequence}>
                {c.d2.map(([title, text], i) => (
                  <li key={title} className={i === 2 ? styles.lost : undefined}>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </li>
                ))}
              </ol>
              <p id="booking-diagram-desc" className={styles.diagramDesc}>{c.d2desc}</p>
            </figure>
            <h2>{c.hState}</h2>
            <p>{c.p16}</p>
            <p><code className={styles.stateCode}>requested → submitted → pending_resolution → confirmed | failed</code></p>
            <p>{c.p17}</p>
            <p>{c.p18a}<code>pending_resolution</code>{c.p18b}</p>
            <p>{c.p19}</p>
            <p>
              {c.p20a}
              <a href={SOURCE_URLS[3]} target="_blank" rel="noopener noreferrer">{c.p20b}</a>
              {c.p20c}
            </p>
            <h2>{c.hNorm}</h2>
            <p>{c.p21}</p>
            <p>{c.p22}</p>
            <p>{c.p23a}<code>message</code>{c.p23b}</p>
            <p>{c.p24}</p>
            <h2>{c.hMon}</h2>
            <p>{c.p25}</p>
            <ul>
              {c.mon.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p>
              {c.p26a}
              <a href={SOURCE_URLS[4]} target="_blank" rel="noopener noreferrer">{c.p26b}</a>
              {c.p26c}
            </p>
            <h2>{c.hRes}</h2>
            <p>{c.p27}</p>
            <p>{c.p28a}<strong>{c.p28b}</strong>{c.p28c}</p>
            <p>
              <a href="https://travel.webbinghub.io" target="_blank" rel="noopener noreferrer">WebbingHUB Travel</a>
              {c.p29a}
            </p>
            <h3>{c.hSrc}</h3>
            <ul className={styles.sources}>
              {c.sources.map(([name, note], i) => (
                <li key={name}>
                  <a href={SOURCE_URLS[i]} target="_blank" rel="noopener noreferrer">{name}</a>
                  <span className={styles.sourceNote}>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </main>
    </>
  );
}
