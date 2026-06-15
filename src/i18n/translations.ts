import type { Locale } from './config';

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
  pages: {
    about: {
      eyebrow: string;
      heroTitle: string;
      heroTitleEm: string;
      heroSub: string;
      storyLabel: string;
      storyTitle: string;
      storyTitleEm: string;
      ctaTitle: string;
      ctaTitleEm: string;
      ctaSub: string;
      ctaBtn: string;
    };
    contact: {
      eyebrow: string;
      title: string;
      titleEm: string;
      desc: string;
      formTitle: string;
      linkedin: string;
      emailLabel: string;
      phoneLabel: string;
      whatsappLabel: string;
    };
    blog: {
      eyebrow: string;
      heroTitle: string;
      heroTitleEm: string;
      heroSub: string;
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
  pages: {
    about: {
      eyebrow:      'About WebbingHUB',
      heroTitle:    'A small team.',
      heroTitleEm:  'A serious commitment.',
      heroSub:      'We turned a hobby into our work. We build websites that earn their place, and we care about every pixel.',
      storyLabel:   'Our story',
      storyTitle:   'We build every site',
      storyTitleEm: 'by hand.',
      ctaTitle:     'Ready when',
      ctaTitleEm:   'you are.',
      ctaSub:       "No pressure, no pitch. We'll talk about your business and whether we fit.",
      ctaBtn:       "Let's have a chat →",
    },
    contact: {
      eyebrow:   'Get in touch',
      title:     "Let's have",
      titleEm:   'a chat.',
      desc:      "Maybe you need a website, maybe you don't. Maybe it has to be a complex one, maybe not. Let's talk and decide together what suits you best. No pressure, no pitch.",
      formTitle: "Drop your email and we'll reply within 24h.",
      linkedin:  'WebbingHUB on LinkedIn',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      whatsappLabel: 'WhatsApp',
    },
    blog: {
      eyebrow:   'From the team',
      heroTitle: 'We write',
      heroTitleEm: 'what we learn.',
      heroSub:   "The web moves fast. We write about what we build and what business owners should know before they decide how to show up online. No fluff.",
      ctaText:   "Have a topic you'd like us to write about?",
      ctaLink:   'Let us know →',
      readMore:  'Read →',
    },
  },
  footer: {
    tagline:       'Crafting websites that work.',
    navTitle:      'Navigation',
    subBrandsTitle: 'Sub-brands',
    copy:          'All rights reserved.',
  },
};

const fr: Translations = {
  nav: {
    services:   'Services',
    howItWorks: 'Comment ça marche',
    about:      'À propos',
    blog:       'Blog',
    cta:        'Nous contacter',
  },
  hero: {
    eyebrow:    'Agence de développement web',
    titleLine1: 'Votre site web devrait travailler',
    titleEm:    'aussi dur que vous.',
    body:       "Nous créons des sites web personnalisés et des outils numériques qui aident votre entreprise à croître en ligne. Sans modèles, sans approximations — juste la bonne solution pour vos objectifs, bien réalisée et soutenue longtemps après le lancement.",
    cta1:       'Commencer une conversation →',
    cta2:       'Ce que nous créons',
    badge1:     'Basés en Roumanie',
    badge2:     "Clients dans toute l'Europe",
    badge3:     "6+ ans d'expérience",
    tagline:    'Sur mesure · Construit · Vôtre',
    stat:       'engagement forcé, jamais',
  },
  trustBar: {
    intro: 'Pourquoi nos clients nous choisissent',
    items: [
      'Prix fixe, sans surprises',
      'Support après lancement',
      'Construit de zéro, sans templates',
      'Communication claire tout au long',
    ],
  },
  pages: {
    about: {
      eyebrow:      'À propos de WebbingHUB',
      heroTitle:    'Une petite équipe.',
      heroTitleEm:  'Un engagement sérieux.',
      heroSub:      "Né d'un hobby devenu profession — nous créons des sites web qui parlent d'eux-mêmes, et chaque pixel le reflète.",
      storyLabel:   'Notre histoire',
      storyTitle:   'Passion et expertise,',
      storyTitleEm: 'fusionnées.',
      ctaTitle:     'Votre partenaire en',
      ctaTitleEm:   'croissance numérique.',
      ctaSub:       "Prêt à discuter ? Sans pression, sans argumentaire. Juste une conversation honnête sur votre activité.",
      ctaBtn:       'Discutons →',
    },
    contact: {
      eyebrow:    'Nous contacter',
      title:      'Discutons',
      titleEm:    'ensemble.',
      desc:       "Peut-être avez-vous besoin d'un site web, peut-être pas. Peut-être doit-il être complexe, peut-être non. Discutons et décidons ensemble ce qui vous convient le mieux.",
      formTitle:  "Laissez votre email — nous vous répondrons sous 24h.",
      linkedin:   'WebbingHUB sur LinkedIn',
      emailLabel: 'Email',
      phoneLabel: 'Téléphone',
      whatsappLabel: 'WhatsApp',
    },
    blog: {
      eyebrow:     "De l'équipe",
      heroTitle:   'Nous essayons de contribuer.',
      heroTitleEm: "Parce que ça nous tient à cœur.",
      heroSub:     "Le web évolue vite. Nous écrivons sur ce que nous apprenons, ce que nous construisons, et ce que nous pensons que les entreprises devraient savoir.",
      ctaText:     "Un sujet que vous aimeriez que nous abordions ?",
      ctaLink:     'Dites-le-nous →',
      readMore:    'Lire →',
    },
  },
  footer: {
    tagline:        'Créer des sites web qui fonctionnent.',
    navTitle:       'Navigation',
    subBrandsTitle: 'Sous-marques',
    copy:           'Tous droits réservés.',
  },
};

const es: Translations = {
  nav: {
    services:   'Servicios',
    howItWorks: 'Cómo funciona',
    about:      'Nosotros',
    blog:       'Blog',
    cta:        'Contactar',
  },
  hero: {
    eyebrow:    'Agencia de desarrollo web',
    titleLine1: 'Tu sitio web debería trabajar',
    titleEm:    'tan duro como tú.',
    body:       'Creamos sitios web personalizados y herramientas digitales que ayudan a tu negocio a crecer en línea. Sin plantillas, sin suposiciones — solo la solución correcta para tus objetivos, bien construida y apoyada mucho después del lanzamiento.',
    cta1:       'Iniciar una conversación →',
    cta2:       'Qué construimos',
    badge1:     'Basados en Rumanía',
    badge2:     'Clientes en toda Europa',
    badge3:     '6+ años de experiencia',
    tagline:    'Personalizado · Construido · Tuyo',
    stat:       'ataduras, jamás',
  },
  trustBar: {
    intro: 'Por qué nos eligen nuestros clientes',
    items: [
      'Precios fijos, sin sorpresas',
      'Soporte después del lanzamiento',
      'Construido desde cero, sin plantillas',
      'Comunicación clara en todo momento',
    ],
  },
  pages: {
    about: {
      eyebrow:      'Sobre WebbingHUB',
      heroTitle:    'Un equipo pequeño.',
      heroTitleEm:  'Un compromiso serio.',
      heroSub:      'Nacido de un hobby convertido en profesión — creamos sitios web que hablan por sí solos, y lo decimos en serio.',
      storyLabel:   'Nuestra historia',
      storyTitle:   'Pasión y expertise,',
      storyTitleEm: 'fusionados.',
      ctaTitle:     'Tu socio en',
      ctaTitleEm:   'crecimiento digital.',
      ctaSub:       '¿Listo para hablar? Sin presión, sin discurso. Solo una conversación honesta sobre tu negocio.',
      ctaBtn:       'Hablemos →',
    },
    contact: {
      eyebrow:    'Contáctanos',
      title:      'Hablemos',
      titleEm:    'sin presiones.',
      desc:       'Quizás necesitas un sitio web, quizás no. Quizás debe ser complejo, quizás no. Discutamos y decidamos juntos qué te conviene más.',
      formTitle:  'Deja tu email — te responderemos en 24h.',
      linkedin:   'WebbingHUB en LinkedIn',
      emailLabel: 'Email',
      phoneLabel: 'Teléfono',
      whatsappLabel: 'WhatsApp',
    },
    blog: {
      eyebrow:     'Del equipo',
      heroTitle:   'Intentamos contribuir.',
      heroTitleEm: 'Porque nos importa.',
      heroSub:     'La web avanza rápido. Escribimos sobre lo que aprendemos, lo que construimos y lo que creemos que las empresas deben saber.',
      ctaText:     '¿Tienes un tema sobre el que te gustaría que escribiéramos?',
      ctaLink:     'Haznos saber →',
      readMore:    'Leer →',
    },
  },
  footer: {
    tagline:        'Creando sitios web que funcionan.',
    navTitle:       'Navegación',
    subBrandsTitle: 'Submarcas',
    copy:           'Todos los derechos reservados.',
  },
};

const de: Translations = {
  nav: {
    services:   'Leistungen',
    howItWorks: 'So funktioniert es',
    about:      'Über uns',
    blog:       'Blog',
    cta:        'Kontakt aufnehmen',
  },
  hero: {
    eyebrow:    'Webentwicklungsagentur',
    titleLine1: 'Ihre Website sollte genauso hart arbeiten',
    titleEm:    'wie Sie es tun.',
    body:       'Wir entwickeln maßgeschneiderte Websites und digitale Tools, die Ihrem Unternehmen helfen, online zu wachsen. Keine Templates, kein Rätselraten — nur die richtige Lösung für Ihre Ziele, sauber umgesetzt und langfristig betreut.',
    cta1:       'Gespräch beginnen →',
    cta2:       'Was wir bauen',
    badge1:     'Ansässig in Rumänien',
    badge2:     'Kunden in ganz Europa',
    badge3:     '6+ Jahre Erfahrung',
    tagline:    'Maßgeschneidert · Gebaut · Ihr',
    stat:       'Abhängigkeit, nie',
  },
  trustBar: {
    intro: 'Warum Kunden uns wählen',
    items: [
      'Festpreise, keine Überraschungen',
      'Support nach dem Launch',
      'Von Grund auf gebaut, keine Templates',
      'Klare Kommunikation von Anfang bis Ende',
    ],
  },
  pages: {
    about: {
      eyebrow:      'Über WebbingHUB',
      heroTitle:    'Ein kleines Team.',
      heroTitleEm:  'Ein ernsthaftes Engagement.',
      heroSub:      'Entstanden aus einem Hobby, das zum Beruf wurde — wir bauen Websites, die sprechen, und meinen jeden Pixel ernst.',
      storyLabel:   'Unsere Geschichte',
      storyTitle:   'Leidenschaft & Expertise,',
      storyTitleEm: 'vereint.',
      ctaTitle:     'Ihr Partner für',
      ctaTitleEm:   'digitales Wachstum.',
      ctaSub:       'Bereit zum Reden? Kein Druck, kein Pitch. Nur ein ehrliches Gespräch über Ihr Unternehmen.',
      ctaBtn:       'Gespräch starten →',
    },
    contact: {
      eyebrow:    'Kontakt aufnehmen',
      title:      'Lassen Sie uns',
      titleEm:    'reden.',
      desc:       'Vielleicht brauchen Sie eine Website, vielleicht nicht. Vielleicht muss sie komplex sein, vielleicht nicht. Lassen Sie uns gemeinsam entscheiden, was am besten zu Ihnen passt.',
      formTitle:  'Hinterlassen Sie Ihre E-Mail — wir melden uns innerhalb von 24h.',
      linkedin:   'WebbingHUB auf LinkedIn',
      emailLabel: 'E-Mail',
      phoneLabel: 'Telefon',
      whatsappLabel: 'WhatsApp',
    },
    blog: {
      eyebrow:     'Vom Team',
      heroTitle:   'Wir versuchen, beizutragen.',
      heroTitleEm: 'Weil es uns wichtig ist.',
      heroSub:     'Das Web entwickelt sich schnell. Wir schreiben über das, was wir lernen, bauen und was Unternehmen wissen sollten, bevor sie Entscheidungen über ihre Online-Präsenz treffen.',
      ctaText:     'Haben Sie ein Thema, über das wir schreiben sollen?',
      ctaLink:     'Sagen Sie es uns →',
      readMore:    'Lesen →',
    },
  },
  footer: {
    tagline:        'Websites, die funktionieren.',
    navTitle:       'Navigation',
    subBrandsTitle: 'Submarken',
    copy:           'Alle Rechte vorbehalten.',
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
    body:       'Construim website-uri personalizate și instrumente digitale care ajută afacerea ta să crească online. Fără șabloane, fără ghiciri — doar soluția potrivită pentru obiectivele tale, realizată corect și susținută mult după lansare.',
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
  pages: {
    about: {
      eyebrow:      'Despre WebbingHUB',
      heroTitle:    'O echipă mică.',
      heroTitleEm:  'Un angajament serios.',
      heroSub:      'Născut dintr-un hobby transformat în profesie — construim website-uri care vorbesc de la sine, și o spunem cu fiecare pixel.',
      storyLabel:   'Povestea noastră',
      storyTitle:   'Pasiune & expertiză,',
      storyTitleEm: 'reunite.',
      ctaTitle:     'Partenerul tău în',
      ctaTitleEm:   'creștere digitală.',
      ctaSub:       'Gata să vorbim? Fără presiune, fără discurs de vânzări. Doar o conversație sinceră despre afacerea ta.',
      ctaBtn:       'Hai să discutăm →',
    },
    contact: {
      eyebrow:    'Contactează-ne',
      title:      'Hai să',
      titleEm:    'discutăm.',
      desc:       'Poate ai nevoie de un website, poate nu. Poate trebuie să fie complex, poate nu. Hai să discutăm și să decidem împreună ce ți se potrivește cel mai bine.',
      formTitle:  'Lasă-ne emailul — îți răspundem în 24h.',
      linkedin:   'WebbingHUB pe LinkedIn',
      emailLabel: 'Email',
      phoneLabel: 'Telefon',
      whatsappLabel: 'WhatsApp',
    },
    blog: {
      eyebrow:     'De la echipă',
      heroTitle:   'Încercăm să contribuim.',
      heroTitleEm: 'Pentru că ne pasă.',
      heroSub:     'Webul evoluează rapid. Scriem despre ce învățăm, ce construim și ce credem că ar trebui să știe companiile înainte de a lua decizii despre prezența lor online.',
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
  },
};

export const allTranslations: Record<Locale, Translations> = { en, fr, es, de, ro };
