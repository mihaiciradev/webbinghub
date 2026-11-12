import type { Locale } from './config';

type Item = { title: string; desc: string };
type Meta = { title: string; description: string; ogDescription: string };
type BlogPostCard = { title: string; date: string; readTime: string; excerpt: string; tags: string[] };

export type Translations = {
  nav: {
    services: string;
    howItWorks: string;
    about: string;
    blog: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleEm: string;
    body: string;
    cta1: string;
    cta2: string;
    badge1: string;
    badge2: string;
    badge3: string;
    tagline: string;
    stat: string;
  };
  trustBar: {
    intro: string;
    items: [string, string, string, string];
  };
  home: {
    services: {
      label: string;
      heading1: string;
      heading2: string;
      headingEm: string;
      note: string;
      items: [Item, Item, Item, Item, Item];
    };
    process: {
      label: string;
      heading1: string;
      heading2: string;
      headingEm: string;
      intro: string;
      steps: Item[];
    };
    brands: {
      label: string;
      heading: string;
      headingEm: string;
      live: string;
      travel: { sub: string; desc: string; tags: string[]; link: string };
      apetit: { sub: string; desc: string; tags: string[]; link: string };
    };
    proof: {
      paragraphs: [string, string];
      name: string;
      role: string;
      company: string;
    };
    film: {
      label: string;
      heading: string;
      text: string;
      play: string;
    };
    cta: {
      heading1: string;
      heading2: string;
      headingEm: string;
      sub: string;
      email: string;
      call: string;
      message: string;
      youtube: string;
      button: string;
    };
    faq: {
      label: string;
      heading: string;
      headingEm: string;
      items: { q: string; a: string }[];
    };
  };
  pages: {
    about: {
      meta: Meta;
      eyebrow: string;
      heroTitle: string;
      heroTitleEm: string;
      heroSub: string;
      name: string;
      role: string;
      sentence: string;
      linkedin: string;
      storyLabel: string;
      storyTitle: string;
      storyTitleEm: string;
      storyP1: string;
      storyQuote: string;
      storyP2: string;
      valuesLabel: string;
      valuesTitle: string;
      valuesTitleEm: string;
      values: Item[];
      processLabel: string;
      processTitle: string;
      processTitleEm: string;
      processIntro: string;
      process: Item[];
      ctaTitle: string;
      ctaTitleEm: string;
      ctaSub: string;
      ctaBtn: string;
    };
    contact: {
      meta: Meta;
      eyebrow: string;
      title: string;
      titleEm: string;
      desc: string;
      formTitle: string;
      formLabel: string;
      linkedin: string;
      emailLabel: string;
      phoneLabel: string;
      whatsappLabel: string;
      youtubeLabel: string;
    };
    blog: {
      meta: Meta;
      eyebrow: string;
      heroTitle: string;
      heroTitleEm: string;
      heroSub: string;
      articleCount: (n: number) => string;
      inEnglish: string | null;
      posts: Record<string, BlogPostCard>;
      ctaText: string;
      ctaLink: string;
      readMore: string;
    };
  };
  footer: {
    tagline: string;
    navTitle: string;
    subBrandsTitle: string;
    copy: string;
    home: string;
    services: string;
    howItWorks: string;
    about: string;
    blog: string;
    privacy: string;
    emailPrompt: string;
    location: string;
  };
  cookies: {
    title: string;
    text: string;
    accept: string;
    decline: string;
    ariaAccept: string;
    ariaDecline: string;
  };
  emailForm: {
    send: string;
    success: string;
    error: string;
    limit: string;
    consent: string;
    privacy: string;
    emailAria: string;
  };
  travelPopup: {
    eyebrow: string;
    title: string;
    titleEm: string;
    body: string;
    yes: string;
    no: string;
    close: string;
  };
};

const en: Translations = {
  nav: {
    services:   'Services',
    howItWorks: 'How it works',
    about:      'About',
    blog:       'Blog',
    cta:        'Get in touch',
  },
  hero: {
    eyebrow:   'Software studio',
    titleLine1: 'Custom software that connects',
    titleEm:    'your business.',
    body:       'We build internal platforms, customer portals, and integrations that connect the systems a team already uses.',
    cta1:       'Start a conversation →',
    cta2:       'The work',
    badge1:     'Based in Romania',
    badge2:     'Clients across Europe',
    badge3:     '6+ years experience',
    tagline:    'Custom · Built · Owned',
    stat:       'lock-in, ever',
  },
  trustBar: {
    intro: 'Why clients choose us',
    items: [
      'Fixed pricing, no surprises',
      'Support after launch',
      'Built from scratch, not templates',
      'Clear communication throughout',
    ],
  },
  home: {
    services: {
      label:     'What we build',
      heading1:  'Five kinds',
      heading2:  'of',
      headingEm: 'work.',
      note:      'On a tailored project, you own the code and the result. Zero lock-in.',
      items: [
        { title: 'Internal platforms and portals', desc: 'The screen the team and the customers use, tied to the systems the business already runs.' },
        { title: 'AI assistants',                  desc: 'A customer asking the company\'s data, or someone on the team getting through the work. The assistant sits on the systems the business already runs.' },
        { title: 'Integrations and automations',   desc: 'Bookings, payments, WhatsApp, and the other tools, passing work between them.' },
        { title: 'Online stores',                  desc: 'From the product page to checkout, built to sell, not only to look finished.' },
        { title: 'Custom websites',                desc: 'A site when the project needs one. Written for that business. No theme.' },
      ],
    },
    process: {
      label:     'How we work',
      heading1:  'A process built',
      heading2:  'around',
      headingEm: 'clarity.',
      intro:     "Before we write a single line of code, you know exactly what you're getting, when, and for how much. After launch, we stay close and keep the work running.",
      steps: [
        { title: 'Discovery call',  desc: 'We listen first. We learn about your business, goals, and users before suggesting anything.' },
        { title: 'Scoped proposal', desc: 'A clear brief with deliverables, timeline, and a fixed price agreed before any work begins.' },
        { title: 'Build & launch',  desc: 'We build, test, and deploy, keeping you informed at every stage, not just at the end.' },
        { title: 'Ongoing support', desc: "Maintenance, updates, and improvements as your business grows. We're here after go-live." },
      ],
    },
    brands: {
      label:     'Our specialisations',
      heading:   'Industry-focused',
      headingEm: 'solutions.',
      live:      'Live now',
      travel: {
        sub:  'for hotels & travel agencies',
        desc: 'TRAVEL is a product with its own terms, for hotels and travel agencies. It covers booking engines, agent portals, WhatsApp, and API integrations.',
        tags: ['Booking engines', 'Agent portals', 'WhatsApp', 'API integrations'],
        link: 'Visit travel.webbinghub.io →',
      },
      apetit: {
        sub:  'for restaurants & hospitality',
        desc: 'Effortless digital experiences for hospitality. QR menus, instant reservations, real-time ordering, and guest management, designed for restaurants, cafés, and hotels.',
        tags: ['QR menus', 'Reservations', 'Real-time ordering', 'Guest management'],
        link: 'Visit apetit.webbinghub.io →',
      },
    },
    proof: {
      paragraphs: [
        "I'm glad I worked with WebbingHUB. They understood what I needed from the start and took the technical work off my hands.",
        'Since the new site, Ciuson is much easier to find on Google and gets hundreds of visits a month. They were available, careful with the details, and stayed with it until it was right. I recommend them.',
      ],
      name: 'Cristi Pasca',
      role: 'founder',
      company: 'Ciuson',
    },
    film: {
      label:   'A short film',
      heading: 'How the work begins.',
      text:    'Before any code, we sit down with the people who do the work.',
      play:    'Play the film',
    },
    cta: {
      heading1:  "Let's talk about",
      heading2:  'what you',
      headingEm: 'actually need.',
      sub:       "No pressure, no pitch. Just an honest conversation about your business and whether we're the right fit to help you build what you need online.",
      email:     'Email us',
      call:      'Call us',
      message:   'Message us',
      youtube:   'YouTube',
      button:    'Start a conversation →',
    },
    faq: {
      label:     'Questions',
      heading:   'Before we',
      headingEm: 'start.',
      items: [
        {
          q: 'What does WebbingHUB build?',
          a: 'WebbingHUB builds internal platforms, customer portals, and integrations that connect the systems a team already uses, and AI assistants that sit on those systems. Online stores and custom websites are part of the work when a project needs them.',
        },
        {
          q: 'Do I own the work after WebbingHUB builds it?',
          a: 'On a tailored project, yes. You own the code and the result. Zero lock-in, and no monthly dependency on WebbingHUB to keep it running.',
        },
        {
          q: 'How does WebbingHUB price its work?',
          a: "WebbingHUB works on fixed pricing. You know exactly what you're getting, when, and for how much before any work begins. No surprises.",
        },
        {
          q: 'Where is WebbingHUB based and who do you serve?',
          a: 'WebbingHUB is based in Timișoara, Romania, and serves clients across Europe, from travel agencies in Paris to service businesses in Romania and beyond.',
        },
        {
          q: 'Does WebbingHUB provide support after launch?',
          a: 'Yes. WebbingHUB stays close after launch, with maintenance, updates, and improvements as your business grows.',
        },
      ],
    },
  },
  pages: {
    about: {
      meta: {
        title:         'Mihai Cîra, founder and CTO',
        description:   'Mihai Cîra is founder and CTO. WebbingHUB builds internal platforms, customer portals, and integrations that connect the systems a team already uses.',
        ogDescription: 'Mihai Cîra is founder and CTO of WebbingHUB.',
      },
      eyebrow:      'About WebbingHUB',
      heroTitle:    'Mihai Cîra',
      heroTitleEm:  'founder and CTO',
      heroSub:      'Mihai Cîra is founder and CTO. He leads the work and brings in specialists for the parts of a project that need them, so the people on it match the work.',
      name:         'Mihai Cîra',
      role:         'founder and CTO',
      sentence:     'Mihai Cîra is founder and CTO. He leads the work and brings in specialists for the parts of a project that need them, so the people on it match the work.',
      linkedin:     'LinkedIn',
      storyLabel:   'The work',
      storyTitle:   'Platforms, portals,',
      storyTitleEm: 'and integrations.',
      storyP1:      'builds internal platforms, customer portals, and integrations that connect the systems a team already uses.',
      storyQuote:   'On a tailored project, you own the code and the result. Zero lock-in.',
      storyP2:      'You talk to the person leading the work. Specialists join for the parts of a project that need them.',
      valuesLabel:   'What drives us',
      valuesTitle:   'Software that connects the work.',
      valuesTitleEm: 'Built around the business.',
      values: [
        { title: 'Tailored projects',    desc: 'You own the code and the result. We shape the work around the business and the people who use it.' },
        { title: 'Ongoing support',      desc: 'We stay on after launch to maintain and improve the work as the business grows.' },
        { title: 'Direct communication', desc: 'You talk to the person doing the work, which means quicker decisions and a result that matches what you asked for.' },
      ],
      processLabel:   'How we work',
      processTitle:   'From concept to launch',
      processTitleEm: 'and beyond.',
      processIntro:   'You stay informed and in control at every stage. Clear milestones, no surprises.',
      process: [
        { title: 'Discover', desc: 'We listen first and learn your business and goals before we suggest anything.' },
        { title: 'Plan',     desc: 'You get a proposal with the deliverables, timeline, and fixed price, agreed before we write any code.' },
        { title: 'Build',    desc: 'We design and build from scratch, and you see progress throughout, not only at the end.' },
        { title: 'Launch',   desc: 'We deploy, test, and hand over work that runs on day one.' },
        { title: 'Support',  desc: 'We maintain, update, and improve the work as your business grows.' },
      ],
      ctaTitle:     'Ready when',
      ctaTitleEm:   'you are.',
      ctaSub:       "No pressure, no pitch. We'll talk about your business and whether we fit.",
      ctaBtn:       "Let's have a chat →",
    },
    contact: {
      meta: {
        title:         "Contact WebbingHUB: Let's Have a Chat",
        description:   'No pressure, no pitch. Talk to WebbingHUB about internal platforms, portals, and integrations. Based in Romania, with clients across Europe.',
        ogDescription: 'No pressure, no pitch. An honest conversation about the work.',
      },
      eyebrow:   'Get in touch',
      title:     "Let's have",
      titleEm:   'a chat.',
      desc:      "Maybe you need a website, maybe you don't. Maybe it has to be a complex one, maybe not. Let's talk and decide together what suits you best. No pressure, no pitch.",
      formTitle: "Drop your email and we'll reply within 24h.",
      formLabel: 'Your email address',
      linkedin:  'WebbingHUB on LinkedIn',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      whatsappLabel: 'WhatsApp',
      youtubeLabel: 'YouTube',
    },
    blog: {
      meta: {
        title:         'Blog: Web Development Insights by WebbingHUB',
        description:   'Practical articles on web development, website costs, and growth, written by the WebbingHUB team for business owners across Europe.',
        ogDescription: 'Practical articles on web development for business owners.',
      },
      eyebrow:   'From the team',
      heroTitle: 'We write',
      heroTitleEm: 'what we learn.',
      heroSub:   "The web moves fast. We write about what we build and what business owners should know before they decide how to show up online. No fluff.",
      articleCount: (n) => `${n} article${n !== 1 ? 's' : ''}`,
      inEnglish: null,
      posts: {
        'hotel-supplier-api-failure-booking-platform': {
          title: 'One Hotel Supplier Timed Out. Why Did Your Entire Booking Platform Stop?',
          date: '11 November 2026',
          readTime: '8 min read',
          excerpt: 'One hotel supplier stalls, and the whole search fails with it. How to return the results you do have, and how to recover a booking whose response never came back, without sending the reservation again.',
          tags: ['Hotel APIs', 'Supplier integrations', 'Booking architecture'],
        },
        'native-connectors-vs-ipaas-vs-custom-integration': {
          title: 'Native Connectors vs iPaaS vs Custom Integration: Which Should You Choose?',
          date: '9 November 2026',
          readTime: '9 min read',
          excerpt: 'A quote accepted in the CRM still has to become a job and a finance record. How to choose between a native connector, an iPaaS flow and a custom integration.',
          tags: ['System integration', 'iPaaS', 'CRM and ERP'],
        },
        'hotel-price-changed-before-booking': {
          title: 'The hotel price changed. What the booking engine does before and after the booking.',
          date: '5 November 2026',
          readTime: '8 min read',
          excerpt: 'At booking, WebbingHUB Travel confirms the rate and looks for an equivalent one that costs less. After confirmation it watches for a drop until free cancellation ends. The agent decides whether to switch.',
          tags: ['Hotel booking', 'Equivalent rates', 'Price changes'],
        },
        'maximize-website-visibility-google-search-console': {
          title: "Maximize Your Website's Visibility: Google Search Console Guide",
          date: 'May 2026',
          readTime: '8 min read',
          excerpt: 'Google Search Console shows how your site performs in search. We explain impressions, clicks, and CTR, and how to turn that traffic into customers.',
          tags: ['SEO', 'Google Search Console', 'Website Visibility'],
        },
        'how-hard-is-it-to-make-a-website': {
          title: 'How hard is it to make a website? A Practical Breakdown',
          date: 'November 2024',
          readTime: '8 min read',
          excerpt: 'Building a website is as hard as what you need it to do. We explain the factors that set the complexity: scope, performance, and customization.',
          tags: ['Web development', 'Guide', 'For business owners'],
        },
      },
      ctaText:   "Have a topic you'd like us to write about?",
      ctaLink:   'Let us know →',
      readMore:  'Read →',
    },
  },
  footer: {
    tagline:        'Custom software that connects your business.',
    navTitle:       'Navigation',
    subBrandsTitle: 'Sub-brands',
    copy:           'All rights reserved.',
    home:           'Home',
    services:       'Services',
    howItWorks:     'How it works',
    about:          'About',
    blog:           'Blog',
    privacy:        'Privacy Policy',
    emailPrompt:    'Prefer we reach out? Leave your email.',
    location:       'Timișoara, Romania',
  },
  cookies: {
    title:       'We use cookies',
    text:        'If you accept, this page loads a Google Ads tag. If you decline, that tag stays off. Your choice is stored in a cookie.',
    accept:      'Accept',
    decline:     'Decline',
    ariaAccept:  'Accept and load the Google Ads tag',
    ariaDecline: 'Decline the Google Ads tag',
  },
  emailForm: {
    send:      'Send',
    success:   "Thanks. We'll reply within 24h.",
    error:     'Something went wrong. Please try again.',
    limit:     'You’ve reached the sending limit. Reach us anytime at hello@webbinghub.io.',
    consent:   'I consent to WebbingHUB using my email to contact me.',
    privacy:   'Privacy policy',
    emailAria: 'Your email address',
  },
  travelPopup: {
    eyebrow: 'Welcome to WebbingHUB',
    title:   'Are you in the',
    titleEm: 'travel industry?',
    body:    'Hotels, guesthouses, travel agencies and tour operators: we have a dedicated space built just for you.',
    yes:     'Yes, take me to WebbingHUB Travel →',
    no:      "No, I'm interested in WebbingHUB itself",
    close:   'Close',
  },
};

const ro: Translations = {
  nav: {
    services:   'Servicii',
    howItWorks: 'Cum lucrăm',
    about:      'Despre noi',
    blog:       'Blog',
    cta:        'Contactează-ne',
  },
  hero: {
    eyebrow:    'Studio de software',
    titleLine1: 'Software la comandă care',
    titleEm:    'conectează sistemele.',
    body:       'Construim platforme interne, portaluri pentru clienți și integrări care conectează sistemele pe care o echipă le folosește deja.',
    cta1:       'Începe o conversație →',
    cta2:       'Serviciile',
    badge1:     'Bazați în România',
    badge2:     'Clienți în toată Europa',
    badge3:     '6+ ani de experiență',
    tagline:    'Personalizat · Construit · Al tău',
    stat:       'dependență, niciodată',
  },
  trustBar: {
    intro: 'De ce ne aleg clienții',
    items: [
      'Prețuri fixe, fără surprize',
      'Suport după lansare',
      'Construit de la zero, fără șabloane',
      'Comunicare clară pe tot parcursul',
    ],
  },
  home: {
    services: {
      label:     'Ce construim',
      heading1:  'Cinci feluri',
      heading2:  'de',
      headingEm: 'lucru.',
      note:      'La un proiect făcut pentru tine, codul și rezultatul sunt ale tale. Nu rămâi legat de noi.',
      items: [
        { title: 'Platforme interne și portaluri', desc: 'Ecranul pe care lucrează echipa și clienții, legat de sistemele pe care afacerea le folosește deja.' },
        { title: 'Asistenți AI',                  desc: 'Un client care întreabă datele firmei, sau cineva din echipă care își face treaba mai ușor. Asistentul stă pe sistemele pe care afacerea le folosește deja.' },
        { title: 'Integrări și automatizări',      desc: 'Rezervări, plăți, WhatsApp și celelalte unelte, care își pasează lucrul între ele.' },
        { title: 'Magazine online',                desc: 'De la pagina de produs până la plată, făcut să vândă, nu doar să arate gata.' },
        { title: 'Website-uri',                    desc: 'Un site când proiectul are nevoie de unul. Scris pentru afacerea aceea. Fără temă.' },
      ],
    },
    process: {
      label:     'Cum lucrăm',
      heading1:  'Un proces',
      heading2:  'construit pe',
      headingEm: 'claritate.',
      intro:     'Înainte să scriem o singură linie de cod, știi exact ce primești, când și cu cât. După lansare rămânem aproape și ținem lucrul în funcțiune.',
      steps: [
        { title: 'Discuția inițială',     desc: 'Mai întâi ascultăm. Îți cunoaștem afacerea, obiectivele și utilizatorii înainte să propunem ceva.' },
        { title: 'Propunere clară',       desc: 'Un brief clar, cu livrabile, termene și un preț fix, stabilite înainte să începem lucrul.' },
        { title: 'Dezvoltare și lansare', desc: 'Construim, testăm și lansăm, și te ținem la curent la fiecare etapă, nu doar la final.' },
        { title: 'Suport continuu',       desc: 'Mentenanță, actualizări și îmbunătățiri pe măsură ce afacerea ta crește. Suntem aici și după lansare.' },
      ],
    },
    brands: {
      label:     'Specializările noastre',
      heading:   'Soluții dedicate',
      headingEm: 'pe industrii.',
      live:      'Activ acum',
      travel: {
        sub:  'pentru hoteluri și agenții de turism',
        desc: 'TRAVEL este un produs separat, cu propriile condiții, pentru hoteluri și agenții de turism. Acoperă motoare de rezervări, portaluri pentru agenți, WhatsApp și integrări API.',
        tags: ['Motoare de rezervări', 'Portaluri pentru agenți', 'WhatsApp', 'Integrări API'],
        link: 'Vizitează travel.webbinghub.io →',
      },
      apetit: {
        sub:  'pentru restaurante și ospitalitate',
        desc: 'Experiențe digitale simple pentru ospitalitate: meniuri QR, rezervări instant, comenzi în timp real și gestionarea oaspeților, pentru restaurante, cafenele și hoteluri.',
        tags: ['Meniuri QR', 'Rezervări', 'Comenzi în timp real', 'Gestionarea oaspeților'],
        link: 'Vizitează apetit.webbinghub.io →',
      },
    },
    proof: {
      paragraphs: [
        'Sunt foarte mulțumit de colaborarea cu WebbingHUB. Au înțeles de la început ce aveam nevoie și s-au ocupat de tot, fără să fie nevoie să-mi bat eu capul cu partea tehnică.',
        'De când avem noul site, suntem mult mai vizibili pe Google și am ajuns să avem sute de accesări lunar. Am apreciat că au fost mereu disponibili, atenți la detalii și că s-au implicat să iasă totul cât mai bine. Recomand cu încredere!',
      ],
      name: 'Cristi Pasca',
      role: 'fondator',
      company: 'Ciuson',
    },
    film: {
      label:   'Un scurt film',
      heading: 'Cum începe un proiect.',
      text:    'Înainte de orice cod, stăm de vorbă cu oamenii care fac treaba.',
      play:    'Redă filmul',
    },
    cta: {
      heading1:  'Hai să vorbim despre',
      heading2:  'de ce ai',
      headingEm: 'nevoie cu adevărat.',
      sub:       'Fără presiune, fără discurs de vânzări. Doar o conversație sinceră despre afacerea ta și dacă suntem potriviți să te ajutăm să construiești ce ai nevoie online.',
      email:     'Scrie-ne',
      call:      'Sună-ne',
      message:   'Trimite-ne un mesaj',
      youtube:   'YouTube',
      button:    'Începe o conversație →',
    },
    faq: {
      label:     'Întrebări',
      heading:   'Înainte să',
      headingEm: 'începem.',
      items: [
        {
          q: 'Ce construiește WebbingHUB?',
          a: 'WebbingHUB construiește platforme interne, portaluri pentru clienți și integrări care conectează sistemele pe care o echipă le folosește deja, și asistenți AI care stau pe sistemele acelea. Magazinele online și website-urile personalizate intră în proiect când e nevoie de ele.',
        },
        {
          q: 'După ce e gata, codul și rezultatul sunt ale mele?',
          a: 'La un proiect făcut pentru tine, da. Codul și rezultatul sunt ale tale. Nu rămâi legat de noi și nu plătești lunar ca să rămână pornit.',
        },
        {
          q: 'Cum își stabilește WebbingHUB prețurile?',
          a: 'WebbingHUB lucrează cu preț fix. Știi exact ce primești, când și cu cât, înainte să înceapă lucrul. Fără surprize.',
        },
        {
          q: 'Unde este WebbingHUB și cui se adresează?',
          a: 'WebbingHUB are sediul în Timișoara, România, și lucrează cu clienți din Europa, de la agenții de turism din Paris până la afaceri de servicii din România.',
        },
        {
          q: 'Oferă WebbingHUB suport după lansare?',
          a: 'Da. WebbingHUB rămâne aproape după lansare, cu mentenanță, actualizări și îmbunătățiri pe măsură ce afacerea crește.',
        },
      ],
    },
  },
  pages: {
    about: {
      meta: {
        title:         'Mihai Cîra, fondator și CTO',
        description:   'Mihai Cîra este fondator și CTO. WebbingHUB construiește platforme interne, portaluri pentru clienți și integrări care conectează sistemele pe care o echipă le folosește deja.',
        ogDescription: 'Mihai Cîra este fondator și CTO la WebbingHUB.',
      },
      eyebrow:      'Despre WebbingHUB',
      heroTitle:    'Mihai Cîra',
      heroTitleEm:  'fondator și CTO',
      heroSub:      'Mihai Cîra is founder and CTO. He leads the work and brings in specialists for the parts of a project that need them, so the people on it match the work.',
      name:         'Mihai Cîra',
      role:         'fondator și CTO',
      sentence:     'Mihai Cîra is founder and CTO. He leads the work and brings in specialists for the parts of a project that need them, so the people on it match the work.',
      linkedin:     'LinkedIn',
      storyLabel:   'Ce construim',
      storyTitle:   'Platforme, portaluri',
      storyTitleEm: 'și integrări.',
      storyP1:      'construiește platforme interne, portaluri pentru clienți și integrări care conectează sistemele pe care o echipă le folosește deja.',
      storyQuote:   'La un proiect făcut pentru tine, codul și rezultatul sunt ale tale. Nu rămâi legat de noi.',
      storyP2:      'Vorbești cu omul care conduce proiectul. Specialiștii intră doar la părțile care au nevoie de ei.',
      valuesLabel:   'Ce ne motivează',
      valuesTitle:   'Software care aduce munca la un loc.',
      valuesTitleEm: 'Construit în jurul afacerii.',
      values: [
        { title: 'Proiecte pe măsură',  desc: 'Codul și rezultatul sunt ale tale. Construim în jurul afacerii și al oamenilor care folosesc rezultatul.' },
        { title: 'Suport continuu',    desc: 'Rămânem și după lansare, ca să întreținem și să îmbunătățim lucrul pe măsură ce afacerea crește.' },
        { title: 'Comunicare directă', desc: 'Vorbești cu persoana care face munca, așa că deciziile se iau mai repede, iar rezultatul iese cum l-ai cerut.' },
      ],
      processLabel:   'Cum lucrăm',
      processTitle:   'De la concept la lansare',
      processTitleEm: 'și mai departe.',
      processIntro:   'Ești informat și ai control la fiecare etapă. Repere clare, fără surprize.',
      process: [
        { title: 'Discuție',     desc: 'Mai întâi ascultăm și îți înțelegem afacerea și obiectivele, înainte să propunem ceva.' },
        { title: 'Planificare',  desc: 'Primești o propunere cu livrabilele, termenele și prețul fix, stabilite înainte să scriem cod.' },
        { title: 'Dezvoltare',   desc: 'Proiectăm și construim de la zero, iar tu vezi progresul pe tot parcursul, nu doar la final.' },
        { title: 'Lansare',      desc: 'Lansăm, testăm și îți predăm ceva care merge din prima zi.' },
        { title: 'Suport',       desc: 'Întreținem, actualizăm și îmbunătățim lucrul pe măsură ce afacerea ta crește.' },
      ],
      ctaTitle:     'Gata când',
      ctaTitleEm:   'ești și tu.',
      ctaSub:       'Fără presiune, fără discurs de vânzări. Vorbim despre afacerea ta și dacă ni se potrivește colaborarea.',
      ctaBtn:       'Hai să discutăm →',
    },
    contact: {
      meta: {
        title:         'Contact WebbingHUB: Hai să discutăm',
        description:   'Fără presiune, fără discurs de vânzări. Vorbește cu WebbingHUB despre platforme interne, portaluri și integrări. Din România, cu clienți în toată Europa.',
        ogDescription: 'Fără presiune, fără discurs de vânzări. O discuție sinceră despre proiect.',
      },
      eyebrow:    'Contactează-ne',
      title:      'Hai să',
      titleEm:    'discutăm.',
      desc:       'Poate ai nevoie de un website, poate nu. Poate trebuie să fie unul complex, poate nu. Hai să discutăm și să decidem împreună ce ți se potrivește. Fără presiune, fără discurs de vânzări.',
      formTitle:  'Lasă-ne emailul. Îți răspundem în 24h.',
      formLabel:  'Adresa ta de email',
      linkedin:   'WebbingHUB pe LinkedIn',
      emailLabel: 'Email',
      phoneLabel: 'Telefon',
      whatsappLabel: 'WhatsApp',
      youtubeLabel: 'YouTube',
    },
    blog: {
      meta: {
        title:         'Blog: Articole despre dezvoltare web de la WebbingHUB',
        description:   'Articole practice despre dezvoltare web, costuri și creștere online, scrise de echipa WebbingHUB pentru antreprenori.',
        ogDescription: 'Articole practice despre dezvoltare web pentru antreprenori.',
      },
      eyebrow:     'De la echipă',
      heroTitle:   'Scriem',
      heroTitleEm: 'ce învățăm.',
      heroSub:     'Webul se mișcă repede. Scriem despre ce construim și despre ce ar trebui să știe un antreprenor înainte să decidă cum apare online. Fără texte de umplutură.',
      articleCount: (n) => (n === 1 ? '1 articol' : `${n} articole`),
      inEnglish:   null,
      posts: {
        'hotel-supplier-api-failure-booking-platform': {
          title: 'Un furnizor de hoteluri nu a răspuns. De ce s-a oprit toată platforma de rezervări?',
          date: '11 noiembrie 2026',
          readTime: '8 min de citit',
          excerpt: 'Un furnizor de hoteluri nu răspunde, iar căutarea cade cu totul. Cum returnezi rezultatele care au venit și cum recuperezi o rezervare al cărei răspuns s-a pierdut, fără să trimiți cererea încă o dată.',
          tags: ['API-uri hoteliere', 'Integrări cu furnizori', 'Arhitectură de rezervări'],
        },
        'native-connectors-vs-ipaas-vs-custom-integration': {
          title: 'Conector nativ, iPaaS sau integrare pe măsură: ce alegi?',
          date: '9 noiembrie 2026',
          readTime: '9 min de citit',
          excerpt: 'O ofertă acceptată în CRM trebuie să ajungă și în ERP, și la financiar. Cum alegi între conectorul din aplicație, o platformă iPaaS și o integrare făcută pe măsură.',
          tags: ['Integrare de sisteme', 'iPaaS', 'CRM și ERP'],
        },
        'hotel-price-changed-before-booking': {
          title: 'Prețul hotelului s-a schimbat. Ce face motorul de rezervări înainte și după rezervare.',
          date: '5 noiembrie 2026',
          readTime: '8 min de citit',
          excerpt: 'La rezervare, WebbingHUB Travel confirmă tariful și caută unul echivalent, mai ieftin. După confirmare urmărește prețul până se termină anularea gratuită. Agentul decide dacă schimbă.',
          tags: ['Rezervări hoteliere', 'Tarife echivalente', 'Schimbări de preț'],
        },
        'maximize-website-visibility-google-search-console': {
          title: 'Vizibilitate mai bună în Google: ghid practic de Search Console',
          date: 'Mai 2026',
          readTime: '8 min de citit',
          excerpt: 'Google Search Console îți arată cum se descurcă site-ul tău în căutări. Explicăm afișările, clicurile și CTR-ul și cum transformi acel trafic în clienți.',
          tags: ['SEO', 'Google Search Console', 'Vizibilitate online'],
        },
        'how-hard-is-it-to-make-a-website': {
          title: 'Cât de greu este să faci un website? O privire practică',
          date: 'Noiembrie 2024',
          readTime: '8 min de citit',
          excerpt: 'Un website e atât de greu de făcut pe cât trebuie să facă. Explicăm ce îi dă complexitatea: dimensiunea, performanța și personalizarea.',
          tags: ['Dezvoltare web', 'Ghid', 'Pentru antreprenori'],
        },
      },
      ctaText:     'Ai un subiect despre care ai vrea să scriem?',
      ctaLink:     'Spune-ne →',
      readMore:    'Citește →',
    },
  },
  footer: {
    tagline:        'Software la comandă care conectează sistemele afacerii.',
    navTitle:       'Navigație',
    subBrandsTitle: 'Sub-branduri',
    copy:           'Toate drepturile rezervate.',
    home:           'Acasă',
    services:       'Servicii',
    howItWorks:     'Cum lucrăm',
    about:          'Despre noi',
    blog:           'Blog',
    privacy:        'Politica de confidențialitate',
    emailPrompt:    'Preferi să te contactăm noi? Lasă-ne emailul.',
    location:       'Timișoara, România',
  },
  cookies: {
    title:       'Folosim cookie-uri',
    text:        'Dacă accepți, pagina încarcă scriptul Google Ads. Dacă refuzi, scriptul rămâne oprit. Alegerea se păstrează într-un cookie.',
    accept:      'Acceptă',
    decline:     'Refuză',
    ariaAccept:  'Acceptă și încarcă scriptul Google Ads',
    ariaDecline: 'Refuză scriptul Google Ads',
  },
  emailForm: {
    send:      'Trimite',
    success:   'Mulțumim. Îți răspundem în 24 de ore.',
    error:     'Ceva n-a mers. Te rugăm să încerci din nou.',
    limit:     'Ai atins limita de trimiteri. Ne poți scrie oricând la hello@webbinghub.io.',
    consent:   'Sunt de acord ca WebbingHUB să-mi folosească adresa de email pentru a mă contacta.',
    privacy:   'Politica de confidențialitate',
    emailAria: 'Adresa ta de email',
  },
  travelPopup: {
    eyebrow: 'Bine ai venit la WebbingHUB',
    title:   'Activezi în',
    titleEm: 'industria turismului?',
    body:    'Hoteluri, pensiuni, agenții de turism și turoperatori: avem un spațiu dedicat, construit special pentru tine.',
    yes:     'Da, du-mă la WebbingHUB Travel →',
    no:      'Nu, mă interesează WebbingHUB',
    close:   'Închide',
  },
};

export const allTranslations: Record<Locale, Translations> = { en, ro };
