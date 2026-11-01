import type { Locale } from './config';

type Item = { title: string; desc: string };
type Stat = { num: string; label: string };
type Meta = { title: string; description: string; ogDescription: string };
type BlogPostCard = { date: string; readTime: string; excerpt: string; tags: string[] };

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
    about: {
      label: string;
      heading: string;
      headingEm: string;
      p1: string;
      quote: string;
      p2: string;
      stats: Stat[];
    };
    services: {
      label: string;
      heading1: string;
      heading2: string;
      headingEm: string;
      note: string;
      items: [Item, Item, Item, Item];
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
    testimonial: {
      quote: string;
      author: string;
      numbers: Stat[];
    };
    cta: {
      heading1: string;
      heading2: string;
      headingEm: string;
      sub: string;
      email: string;
      call: string;
      message: string;
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
    eyebrow:   'Web Development Agency',
    titleLine1: 'Your website should work',
    titleEm:    'as hard as you do.',
    body:       'We build custom websites and digital tools that help your business grow online. No templates, no guesswork. We pick the right solution for your goals, build it properly, and support it long after launch.',
    cta1:       'Start a conversation →',
    cta2:       'What we build',
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
    about: {
      label:     'About WebbingHUB',
      heading:   'A small team.',
      headingEm: 'A serious commitment.',
      p1:        "WebbingHUB is a web development agency run by people who genuinely care about the quality of their work. We combine technical expertise with a real understanding of how businesses operate — so the websites we build aren't just beautiful, they're useful.",
      quote:     "Every project gets the same attention — whether it's a hotel in Paris or a local business in Romania. No junior handoffs, no cut corners.",
      p2:        'When you work with WebbingHUB, you talk directly with the people building your website. And when it launches, we stay close.',
      stats: [
        { num: 'Zero', label: 'Lock-In' },
        { num: '6+',   label: 'Years of Expertise' },
        { num: 'EU',   label: 'Clients Across Europe' },
        { num: '100%', label: 'Owned by You' },
      ],
    },
    services: {
      label:     'What we build',
      heading1:  'Services designed',
      heading2:  'for',
      headingEm: 'real businesses.',
      note:      "Every engagement is tailored. We don't sell packages — we solve problems.",
      items: [
        { title: 'Custom Websites',            desc: 'A website that truly represents your business — designed from scratch, fast on any device, and built to turn visitors into clients. No themes, no drag-and-drop shortcuts.' },
        { title: 'Internal Tools & Portals',   desc: 'Custom dashboards and management systems that help your team work more efficiently — managing bookings, clients, or operations, we build the tool that fits the job.' },
        { title: 'Online Stores',              desc: 'A store built for performance and sales — not just appearance. From product pages to checkout, every step is designed with conversion in mind.' },
        { title: 'Integrations & Automations', desc: 'WhatsApp, booking engines, QR menus, payment providers, third-party APIs — we connect your website to the tools your business already runs on.' },
      ],
    },
    process: {
      label:     'How we work',
      heading1:  'A process built',
      heading2:  'around',
      headingEm: 'clarity.',
      intro:     "Before we write a single line of code, you know exactly what you're getting, when, and for how much. And after launch, we don't disappear — we stay close and keep your site running well.",
      steps: [
        { title: 'Discovery call',  desc: 'We listen first. We learn about your business, goals, and users before suggesting anything.' },
        { title: 'Scoped proposal', desc: 'A clear brief with deliverables, timeline, and a fixed price agreed before any work begins.' },
        { title: 'Build & launch',  desc: 'We build, test, and deploy — keeping you informed at every stage, not just at the end.' },
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
        desc: 'A dedicated sub-brand focused on the travel and hospitality industry. Booking engines, agent management portals, WhatsApp integrations, and digital experiences built for hotels, resorts, and travel agencies.',
        tags: ['Booking engines', 'Agent portals', 'WhatsApp', 'API integrations'],
        link: 'Visit travel.webbinghub.io →',
      },
      apetit: {
        sub:  'for restaurants & hospitality',
        desc: 'Effortless digital experiences for hospitality. QR menus, instant reservations, real-time ordering, and guest management—designed for restaurants, cafés, and hotels.',
        tags: ['QR menus', 'Reservations', 'Real-time ordering', 'Guest management'],
        link: 'Visit apetit.webbinghub.io →',
      },
    },
    testimonial: {
      quote:  '“No templates, no compromises. We own our site, control our data, and compete on our own terms. That makes a real difference when you’re trying to stand out.”',
      author: 'Business Owners & Teams Across Europe',
      numbers: [
        { num: 'Zero', label: 'Lock-in, ever' },
        { num: '6+',   label: 'Years of experience' },
        { num: 'EU',   label: 'Clients across Europe' },
      ],
    },
    cta: {
      heading1:  "Let's talk about",
      heading2:  'what you',
      headingEm: 'actually need.',
      sub:       "No pressure, no pitch. Just an honest conversation about your business and whether we're the right fit to help you build what you need online.",
      email:     'Email us',
      call:      'Call us',
      message:   'Message us',
      button:    'Start a conversation →',
    },
    faq: {
      label:     'Questions',
      heading:   'Before we',
      headingEm: 'start.',
      items: [
        {
          q: 'What does WebbingHUB build?',
          a: 'WebbingHUB builds custom websites, internal tools & portals, online stores, and API integrations — all from scratch, zero templates, for businesses across Europe.',
        },
        {
          q: 'Do I own my website after WebbingHUB builds it?',
          a: 'Yes — 100%. Zero lock-in. You own the code, the hosting, and everything. No monthly dependency on WebbingHUB to keep your website running.',
        },
        {
          q: 'How does WebbingHUB price its work?',
          a: "WebbingHUB works on fixed pricing — you know exactly what you're getting, when, and for how much before any work begins. No surprises.",
        },
        {
          q: 'Where is WebbingHUB based and who do you serve?',
          a: 'WebbingHUB is based in Timișoara, Romania, and serves clients across Europe — from travel agencies in Paris to service businesses in Romania and beyond.',
        },
        {
          q: 'Does WebbingHUB provide support after launch?',
          a: 'Yes. WebbingHUB stays close after launch — providing maintenance, updates, and improvements as your business grows.',
        },
      ],
    },
  },
  pages: {
    about: {
      meta: {
        title:         'About WebbingHUB — A Small Team, A Serious Commitment',
        description:   'WebbingHUB builds custom websites from scratch for businesses across Europe. You talk to the people who write the code. No templates, no handoffs, no lock-in.',
        ogDescription: 'Meet the people who build your site. We write every line ourselves.',
      },
      eyebrow:      'About WebbingHUB',
      heroTitle:    'A small team.',
      heroTitleEm:  'A serious commitment.',
      heroSub:      'We turned a hobby into our work. We build websites that earn their place, and we care about every pixel.',
      storyLabel:   'Our story',
      storyTitle:   'We build every site',
      storyTitleEm: 'by hand.',
      storyP1:      'started as a hobby and became our work. We build custom websites, and we know how to do them well.',
      storyQuote:   '“We write every line of code ourselves. You get a site built for your business, not a theme with your logo dropped on top.”',
      storyP2:      'You talk to the people who build your website, not an account manager who passes your notes along. We do honest work and we do it properly.',
      valuesLabel:   'What drives us',
      valuesTitle:   'Websites that earn their keep.',
      valuesTitleEm: 'Built around your business.',
      values: [
        { title: 'Tailored solutions',   desc: 'We start every website from an empty editor. No theme, no shortcut. We design it around your business and the people who use it.' },
        { title: 'Ongoing support',      desc: 'We stay on after launch to maintain and improve the site as your business grows.' },
        { title: 'Direct communication', desc: 'You talk to the people doing the work, which means quicker decisions and a site that matches what you asked for.' },
      ],
      processLabel:   'How we work',
      processTitle:   'From concept to launch —',
      processTitleEm: 'and beyond.',
      processIntro:   'You stay informed and in control at every stage. Clear milestones, no surprises.',
      process: [
        { title: 'Discover', desc: 'We listen first and learn your business and goals before we suggest anything.' },
        { title: 'Plan',     desc: 'You get a proposal with the deliverables, timeline, and fixed price, agreed before we write any code.' },
        { title: 'Build',    desc: 'We design and build from scratch, and you see progress throughout, not only at the end.' },
        { title: 'Launch',   desc: 'We deploy, test, and hand over a site that works on day one.' },
        { title: 'Support',  desc: 'We maintain, update, and improve the site as your business grows.' },
      ],
      ctaTitle:     'Ready when',
      ctaTitleEm:   'you are.',
      ctaSub:       "No pressure, no pitch. We'll talk about your business and whether we fit.",
      ctaBtn:       "Let's have a chat →",
    },
    contact: {
      meta: {
        title:         "Contact WebbingHUB — Let's Have a Chat",
        description:   'No pressure, no pitch. Talk to WebbingHUB, a web development agency based in Romania, serving clients across Europe.',
        ogDescription: 'No pressure, no pitch. An honest conversation about your website.',
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
    },
    blog: {
      meta: {
        title:         'Blog — Web Development Insights by WebbingHUB',
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
        'maximize-website-visibility-google-search-console': {
          date: 'May 2026',
          readTime: '8 min read',
          excerpt: 'Google Search Console shows how your site performs in search. We explain impressions, clicks, and CTR, and how to turn that traffic into customers.',
          tags: ['SEO', 'Google Search Console', 'Website Visibility'],
        },
        'how-hard-is-it-to-make-a-website': {
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
    tagline:        'Crafting websites that work.',
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
    success:   'Thanks — we’ll reply within 24h.',
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
    howItWorks: 'Cum funcționăm',
    about:      'Despre noi',
    blog:       'Blog',
    cta:        'Contactează-ne',
  },
  hero: {
    eyebrow:    'Agenție de dezvoltare web',
    titleLine1: 'Website-ul tău ar trebui să muncească',
    titleEm:    'la fel de mult ca tine.',
    body:       'Site de prezentare, magazin online sau o aplicație web la comandă: construim de la zero ce are nevoie afacerea ta, fără șabloane și fără abonamente care te țin captiv. Site-ul rămâne al tău, cu tot cu cod, și îl susținem mult după lansare.',
    cta1:       'Începe o conversație →',
    cta2:       'Ce construim',
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
    about: {
      label:     'Despre WebbingHUB',
      heading:   'O echipă mică.',
      headingEm: 'Un angajament serios.',
      p1:        'WebbingHUB este o agenție de dezvoltare web condusă de oameni cărora le pasă cu adevărat de calitatea muncii lor. Îmbinăm experiența tehnică cu o înțelegere reală a felului în care funcționează o afacere, așa că website-urile pe care le construim nu sunt doar frumoase, ci și utile.',
      quote:     'Fiecare proiect primește aceeași atenție, fie că e un hotel din Paris sau o afacere locală din România. Fără proiecte pasate juniorilor, fără scurtături.',
      p2:        'Când lucrezi cu WebbingHUB, vorbești direct cu oamenii care îți construiesc website-ul. Iar după lansare, rămânem aproape.',
      stats: [
        { num: 'Zero', label: 'Dependență' },
        { num: '6+',   label: 'Ani de experiență' },
        { num: 'UE',   label: 'Clienți în toată Europa' },
        { num: '100%', label: 'Al tău' },
      ],
    },
    services: {
      label:     'Ce construim',
      heading1:  'Servicii gândite',
      heading2:  'pentru',
      headingEm: 'afaceri reale.',
      note:      'Fiecare colaborare e croită pe măsură. Nu vindem pachete, rezolvăm probleme.',
      items: [
        { title: 'Website-uri personalizate',         desc: 'Un website care îți reprezintă cu adevărat afacerea: proiectat de la zero, rapid pe orice dispozitiv și construit să transforme vizitatorii în clienți. Fără teme, fără scurtături drag-and-drop.' },
        { title: 'Instrumente interne și portaluri',  desc: 'Dashboard-uri și sisteme de management la comandă care îți ajută echipa să lucreze mai eficient. Fie că e vorba de rezervări, clienți sau operațiuni, construim instrumentul potrivit.' },
        { title: 'Magazine online',                   desc: 'Un magazin construit pentru performanță și vânzări, nu doar pentru aspect. De la pagina de produs până la finalizarea comenzii, fiecare pas e gândit pentru conversie.' },
        { title: 'Integrări și automatizări',         desc: 'WhatsApp, motoare de rezervări, meniuri QR, procesatori de plăți, API-uri externe: conectăm website-ul la instrumentele pe care afacerea ta le folosește deja.' },
      ],
    },
    process: {
      label:     'Cum lucrăm',
      heading1:  'Un proces construit',
      heading2:  'în jurul',
      headingEm: 'clarității.',
      intro:     'Înainte să scriem o singură linie de cod, știi exact ce primești, când și cu cât. Iar după lansare nu dispărem: rămânem aproape și ne asigurăm că site-ul funcționează bine.',
      steps: [
        { title: 'Discuția inițială',     desc: 'Mai întâi ascultăm. Îți cunoaștem afacerea, obiectivele și utilizatorii înainte să propunem ceva.' },
        { title: 'Propunere clară',       desc: 'Un brief clar, cu livrabile, termene și un preț fix, stabilite înainte să începem lucrul.' },
        { title: 'Dezvoltare și lansare', desc: 'Construim, testăm și publicăm, ținându-te la curent la fiecare etapă, nu doar la final.' },
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
        desc: 'Un sub-brand dedicat industriei de turism și ospitalitate. Motoare de rezervări, portaluri pentru agenți, integrări WhatsApp și experiențe digitale pentru hoteluri, resorturi și agenții de turism.',
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
    testimonial: {
      quote:  '„Fără șabloane, fără compromisuri. Site-ul e al nostru, datele sunt ale noastre și concurăm în propriii termeni. Asta contează enorm când încerci să ieși în evidență.”',
      author: 'Antreprenori și echipe din toată Europa',
      numbers: [
        { num: 'Zero', label: 'Dependență, niciodată' },
        { num: '6+',   label: 'Ani de experiență' },
        { num: 'UE',   label: 'Clienți în toată Europa' },
      ],
    },
    cta: {
      heading1:  'Hai să vorbim despre',
      heading2:  'de ce ai',
      headingEm: 'nevoie cu adevărat.',
      sub:       'Fără presiune, fără discurs de vânzări. Doar o conversație sinceră despre afacerea ta și dacă suntem potriviți să te ajutăm să construiești ce ai nevoie online.',
      email:     'Scrie-ne',
      call:      'Sună-ne',
      message:   'Trimite-ne un mesaj',
      button:    'Începe o conversație →',
    },
    faq: {
      label:     'Întrebări',
      heading:   'Înainte să',
      headingEm: 'începem.',
      items: [
        {
          q: 'Ce construiește WebbingHUB?',
          a: 'WebbingHUB construiește website-uri personalizate, instrumente interne și portaluri, magazine online și integrări API, toate de la zero, fără șabloane, pentru afaceri din Europa.',
        },
        {
          q: 'Îmi aparține website-ul după ce îl construiește WebbingHUB?',
          a: 'Da, în totalitate. Fără dependență. Codul, găzduirea și tot restul sunt ale tale. Nu depinzi lunar de WebbingHUB ca website-ul să rămână online.',
        },
        {
          q: 'Cum își stabilește WebbingHUB prețurile?',
          a: 'WebbingHUB lucrează cu preț fix: știi exact ce primești, când și pentru cât, înainte să înceapă lucrul. Fără surprize.',
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
        title:         'Despre WebbingHUB — O echipă mică, un angajament serios',
        description:   'WebbingHUB construiește website-uri personalizate de la zero pentru afaceri din toată Europa. Vorbești cu oamenii care scriu codul. Fără șabloane, fără intermediari.',
        ogDescription: 'Cunoaște oamenii care îți construiesc site-ul. Scriem fiecare linie de cod noi înșine.',
      },
      eyebrow:      'Despre WebbingHUB',
      heroTitle:    'O echipă mică.',
      heroTitleEm:  'Un angajament serios.',
      heroSub:      'Născut dintr-un hobby transformat în profesie — construim website-uri care vorbesc de la sine, și o spunem cu fiecare pixel.',
      storyLabel:   'Povestea noastră',
      storyTitle:   'Pasiune & expertiză,',
      storyTitleEm: 'reunite.',
      storyP1:      'a pornit ca un hobby și a devenit meseria noastră. Construim website-uri personalizate și știm să le facem bine.',
      storyQuote:   '„Scriem fiecare linie de cod noi înșine. Primești un site construit pentru afacerea ta, nu o temă cu logo-ul tău pus deasupra.”',
      storyP2:      'Vorbești cu oamenii care îți construiesc website-ul, nu cu un account manager care doar transmite mesajele mai departe. Facem o muncă cinstită și o facem cum trebuie.',
      valuesLabel:   'Ce ne motivează',
      valuesTitle:   'Website-uri care își merită locul.',
      valuesTitleEm: 'Construite în jurul afacerii tale.',
      values: [
        { title: 'Soluții pe măsură',  desc: 'Începem fiecare website de la un editor gol. Fără teme, fără scurtături. Îl proiectăm în jurul afacerii tale și al oamenilor care îl folosesc.' },
        { title: 'Suport continuu',    desc: 'Rămânem alături și după lansare, ca să întreținem și să îmbunătățim site-ul pe măsură ce afacerea ta crește.' },
        { title: 'Comunicare directă', desc: 'Vorbești cu oamenii care fac munca, așa că deciziile se iau mai repede, iar site-ul iese exact cum l-ai cerut.' },
      ],
      processLabel:   'Cum lucrăm',
      processTitle:   'De la concept la lansare —',
      processTitleEm: 'și mai departe.',
      processIntro:   'Ești informat și ai control la fiecare etapă. Repere clare, fără surprize.',
      process: [
        { title: 'Descoperire',  desc: 'Mai întâi ascultăm și îți înțelegem afacerea și obiectivele, înainte să propunem ceva.' },
        { title: 'Planificare',  desc: 'Primești o propunere cu livrabilele, termenele și prețul fix, stabilite înainte să scriem cod.' },
        { title: 'Dezvoltare',   desc: 'Proiectăm și construim de la zero, iar tu vezi progresul pe tot parcursul, nu doar la final.' },
        { title: 'Lansare',      desc: 'Publicăm, testăm și îți predăm un site care funcționează din prima zi.' },
        { title: 'Suport',       desc: 'Întreținem, actualizăm și îmbunătățim site-ul pe măsură ce afacerea ta crește.' },
      ],
      ctaTitle:     'Partenerul tău în',
      ctaTitleEm:   'creștere digitală.',
      ctaSub:       'Gata să vorbim? Fără presiune, fără discurs de vânzări. Doar o conversație sinceră despre afacerea ta.',
      ctaBtn:       'Hai să discutăm →',
    },
    contact: {
      meta: {
        title:         'Contact WebbingHUB — Hai să discutăm',
        description:   'Fără presiune, fără discurs de vânzări. Vorbește cu WebbingHUB, agenție de dezvoltare web din România, cu clienți în toată Europa.',
        ogDescription: 'Fără presiune, fără discurs de vânzări. O discuție sinceră despre website-ul tău.',
      },
      eyebrow:    'Contactează-ne',
      title:      'Hai să',
      titleEm:    'discutăm.',
      desc:       'Poate ai nevoie de un website, poate nu. Poate trebuie să fie complex, poate nu. Hai să discutăm și să decidem împreună ce ți se potrivește cel mai bine.',
      formTitle:  'Lasă-ne emailul — îți răspundem în 24h.',
      formLabel:  'Adresa ta de email',
      linkedin:   'WebbingHUB pe LinkedIn',
      emailLabel: 'Email',
      phoneLabel: 'Telefon',
      whatsappLabel: 'WhatsApp',
    },
    blog: {
      meta: {
        title:         'Blog — Articole despre dezvoltare web de la WebbingHUB',
        description:   'Articole practice despre dezvoltare web, costuri și creștere online, scrise de echipa WebbingHUB pentru antreprenori.',
        ogDescription: 'Articole practice despre dezvoltare web pentru antreprenori.',
      },
      eyebrow:     'De la echipă',
      heroTitle:   'Încercăm să contribuim.',
      heroTitleEm: 'Pentru că ne pasă.',
      heroSub:     'Webul evoluează rapid. Scriem despre ce învățăm, ce construim și ce credem că ar trebui să știe companiile înainte de a lua decizii despre prezența lor online.',
      articleCount: (n) => (n === 1 ? '1 articol' : `${n} articole`),
      inEnglish:   'Articol în limba engleză',
      posts: {
        'maximize-website-visibility-google-search-console': {
          date: 'Mai 2026',
          readTime: '8 min de citit',
          excerpt: 'Google Search Console îți arată cum se descurcă site-ul tău în căutări. Explicăm afișările, clicurile și CTR-ul și cum transformi acel trafic în clienți.',
          tags: ['SEO', 'Google Search Console', 'Vizibilitate online'],
        },
        'how-hard-is-it-to-make-a-website': {
          date: 'Noiembrie 2024',
          readTime: '8 min de citit',
          excerpt: 'Un website e atât de greu de făcut cât de mult trebuie să facă. Explicăm factorii care dau complexitatea: amploarea, performanța și personalizarea.',
          tags: ['Dezvoltare web', 'Ghid', 'Pentru antreprenori'],
        },
      },
      ctaText:     'Ai un subiect despre care ai vrea să scriem?',
      ctaLink:     'Spune-ne →',
      readMore:    'Citește →',
    },
  },
  footer: {
    tagline:        'Construim website-uri care funcționează.',
    navTitle:       'Navigație',
    subBrandsTitle: 'Sub-branduri',
    copy:           'Toate drepturile rezervate.',
    home:           'Acasă',
    services:       'Servicii',
    howItWorks:     'Cum funcționăm',
    about:          'Despre noi',
    blog:           'Blog',
    privacy:        'Politica de confidențialitate',
    emailPrompt:    'Preferi să te contactăm noi? Lasă-ne emailul.',
    location:       'Timișoara, România',
  },
  cookies: {
    title:       'Folosim cookie-uri',
    text:        'Dacă accepți, pagina încarcă o etichetă Google Ads. Dacă refuzi, eticheta nu se încarcă. Alegerea este păstrată într-un cookie.',
    accept:      'Accept',
    decline:     'Refuz',
    ariaAccept:  'Acceptă și încarcă eticheta Google Ads',
    ariaDecline: 'Refuză eticheta Google Ads',
  },
  emailForm: {
    send:      'Trimite',
    success:   'Mulțumim! Îți răspundem în 24h.',
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
    body:    'Hoteluri, pensiuni, agenții de turism și tour operatori: avem un spațiu dedicat, construit special pentru tine.',
    yes:     'Da, du-mă la WebbingHUB Travel →',
    no:      'Nu, mă interesează WebbingHUB',
    close:   'Închide',
  },
};

export const allTranslations: Record<Locale, Translations> = { en, ro };
