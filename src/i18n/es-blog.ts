import type { Translations } from './translations';

/** Spanish blog index only. The rest of the site stays English on /es/blog. */
export const esBlog: Translations['pages']['blog'] = {
  meta: {
    title: 'Blog: artículos sobre desarrollo web de WebbingHUB',
    description:
      'Artículos prácticos sobre desarrollo web, costes y crecimiento online, escritos por el equipo de WebbingHUB.',
    ogDescription: 'Artículos prácticos sobre desarrollo web para quien lleva un negocio.',
  },
  eyebrow: 'Del equipo',
  heroTitle: 'Escribimos',
  heroTitleEm: 'lo que aprendemos.',
  heroSub:
    'La web se mueve rápido. Escribimos sobre lo que construimos y sobre lo que conviene saber antes de decidir cómo aparecer online. Sin relleno.',
  articleCount: (n) => (n === 1 ? '1 artículo' : `${n} artículos`),
  inEnglish: null,
  posts: {
    'hotel-supplier-api-failure-booking-platform': {
      title: 'Un proveedor de hoteles no respondió. ¿Por qué se detuvo toda la plataforma de reservas?',
      date: '11 de noviembre de 2026',
      readTime: '8 min de lectura',
      excerpt:
        'Un proveedor se queda colgado y la búsqueda entera falla con él. Cómo devolver los resultados que sí llegaron, y cómo recuperar una reserva cuya respuesta no volvió, sin enviar la petición otra vez.',
      tags: ['APIs hoteleras', 'Integraciones con proveedores', 'Arquitectura de reservas'],
    },
    'native-connectors-vs-ipaas-vs-custom-integration': {
      title: 'Conector nativo, iPaaS o integración a medida: cuál elegir',
      date: '9 de noviembre de 2026',
      readTime: '9 min de lectura',
      excerpt:
        'Un presupuesto aceptado en el CRM tiene que convertirse en un trabajo y en un apunte de finanzas. Cómo elegir entre el conector del proveedor, un flujo de iPaaS y una integración a medida.',
      tags: ['Integración de sistemas', 'iPaaS', 'CRM y ERP'],
    },
    'hotel-price-changed-before-booking': {
      title: 'El precio del hotel cambió. Qué hace el motor de reservas antes y después de reservar.',
      date: '5 de noviembre de 2026',
      readTime: '8 min de lectura',
      excerpt:
        'Al reservar, WebbingHUB Travel confirma la tarifa y busca una equivalente más barata. Tras la confirmación vigila una bajada hasta que termina la cancelación gratuita. El agente decide si cambia.',
      tags: ['Reservas de hotel', 'Tarifas equivalentes', 'Cambios de precio'],
    },
    'maximize-website-visibility-google-search-console': {
      title: 'Más visibilidad en Google: guía práctica de Search Console',
      date: 'Mayo de 2026',
      readTime: '8 min de lectura',
      excerpt:
        'Google Search Console muestra cómo se comporta tu sitio en la búsqueda. Explicamos impresiones, clics y CTR, y cómo convertir ese tráfico en clientes.',
      tags: ['SEO', 'Google Search Console', 'Visibilidad web'],
    },
    'how-hard-is-it-to-make-a-website': {
      title: '¿Qué tan difícil es hacer una web? Un desglose práctico',
      date: 'Noviembre de 2024',
      readTime: '8 min de lectura',
      excerpt:
        'Una web es tan difícil de hacer como lo que tiene que hacer. Explicamos qué marca la complejidad: el alcance, el rendimiento y la personalización.',
      tags: ['Desarrollo web', 'Guía', 'Para negocios'],
    },
  },
  ctaText: '¿Hay un tema del que te gustaría que escribiéramos?',
  ctaLink: 'Cuéntanoslo →',
  readMore: 'Leer →',
};
