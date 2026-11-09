import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getTranslations, pageAlternates } from "@/i18n/utils";
import HeroSection from "@/app/HeroSection/HeroSection";
import ServicesSection from "@/app/ServicesSection/ServicesSection";
import ProofSection from "@/app/ProofSection/ProofSection";
import ProcessSection from "@/app/ProcessSection/ProcessSection";
import BrandsSection from "@/app/BrandsSection/BrandsSection";
import FilmSection from "@/app/FilmSection/FilmSection";
import FaqSection from "@/app/FaqSection/FaqSection";
import CTASection from "@/app/CTASection/CTASection";
import TravelPopup from "@/components/TravelPopup/TravelPopup";
import { TRAVEL_POPUP } from "@/config/TRAVEL_POPUP";

const BASE = "https://webbinghub.io";

const HOME_TITLE: Record<Locale, string> = {
  en: "WebbingHUB | Custom Software That Connects Your Business",
  ro: "WebbingHUB | Software la comandă care conectează sistemele afacerii",
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    // Absolute: the layout template must not append "| WebbingHUB" a second time.
    title: { absolute: HOME_TITLE[locale] },
    alternates: pageAlternates(locale, ""),
  };
}

/* ── JSON-LD schemas ─────────────────────────── */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${BASE}/#organization`,
  name: "WebbingHUB",
  legalName: "WEBBINGHUB S.R.L.",
  vatID: "RO49317150",
  url: BASE,
  logo: {
    "@type": "ImageObject",
    url: `${BASE}/icon-512x512.png`,
    width: 512,
    height: 512,
  },
  description:
    "Internal platforms, customer portals, and integrations that connect the systems a team already uses. The client owns the code and the result.",
  foundingDate: "2019",
  areaServed: { "@type": "Place", name: "Europe" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Str. Gheorghe Lazăr, nr. 34",
    addressLocality: "Timișoara",
    addressRegion: "Timiș",
    addressCountry: "RO",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "hello@webbinghub.io",
      telephone: "+40776394784",
      contactType: "sales",
      areaServed: "EU",
      availableLanguage: ["English", "Romanian"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/webbinghub",
    "https://travel.webbinghub.io/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Internal platforms and portals",
          description: "Platforms and portals connected to the systems a team already uses.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Integrations and automations",
          description: "Connections between bookings, payments, WhatsApp, and other APIs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Online stores",
          description: "Stores built for performance and conversion.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom websites",
          description: "Websites designed from scratch when a project needs one.",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  name: "WebbingHUB",
  url: BASE,
  publisher: { "@id": `${BASE}/#organization` },
  inLanguage: [...locales],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE}/en/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const filmSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "How the work begins",
  description: "Before any code, we sit down with the people who do the work.",
  thumbnailUrl: "https://i.ytimg.com/vi/gpa2P94G59Q/hqdefault.jpg",
  uploadDate: "2026-11-03",
  embedUrl: "https://www.youtube-nocookie.com/embed/gpa2P94G59Q",
  contentUrl: "https://www.youtube.com/watch?v=gpa2P94G59Q",
};

function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslations(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(filmSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(t.home.faq.items)) }}
      />
      <HeroSection locale={locale} t={t.hero} />
      <ServicesSection t={t.home.services} />
      <ProofSection proof={t.home.proof} />
      <BrandsSection t={t.home.brands} />
      <FilmSection t={t.home.film} />
      <ProcessSection t={t.home.process} />
      <FaqSection t={t.home.faq} />
      <CTASection t={t.home.cta} />
      {TRAVEL_POPUP && <TravelPopup t={t.travelPopup} />}
    </>
  );
}
