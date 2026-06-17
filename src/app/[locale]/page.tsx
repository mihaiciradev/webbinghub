import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getTranslations } from "@/i18n/utils";
import HeroSection from "@/app/HeroSection/HeroSection";
import TrustBar from "@/app/TrustBar/TrustBar";
import AboutSection from "@/app/AboutSection/AboutSection";
import ServicesSection from "@/app/ServicesSection/ServicesSection";
import ProcessSection from "@/app/ProcessSection/ProcessSection";
import BrandsSection from "@/app/BrandsSection/BrandsSection";
import TestimonialSection from "@/app/TestimonialSection/TestimonialSection";
import CTASection from "@/app/CTASection/CTASection";

const BASE = "https://webbinghub.io";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    alternates: {
      canonical: `${BASE}/${locale}`,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, `${BASE}/${l}`]),
        ["x-default", `${BASE}/en`],
      ]),
    },
  };
}

/* ── JSON-LD schemas ─────────────────────────── */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${BASE}/#organization`,
  name: "WebbingHUB",
  url: BASE,
  logo: {
    "@type": "ImageObject",
    url: `${BASE}/icon-512x512.png`,
    width: 512,
    height: 512,
  },
  description:
    "Custom-built websites, internal tools, and digital solutions for businesses across Europe. No templates — fully owned by you.",
  foundingDate: "2019",
  areaServed: { "@type": "Place", name: "Europe" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Timișoara",
    addressRegion: "Timiș",
    addressCountry: "RO",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "hello@webbinghub.io",
      telephone: "+40736394784",
      contactType: "sales",
      areaServed: "EU",
      availableLanguage: ["English", "Romanian", "French"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/webbinghub",
    "https://travel.webbinghub.io/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Websites", description: "Bespoke websites designed and built from scratch." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Internal Tools & Portals", description: "Custom dashboards and management systems." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Online Stores", description: "E-commerce stores built for performance and conversion." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Integrations & Automations", description: "API integrations, WhatsApp, booking engines, payment providers." } },
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
  inLanguage: ["en", "fr", "es", "de", "ro"],
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE}/en/blog?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does WebbingHUB build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WebbingHUB builds custom websites, internal tools & portals, online stores, and API integrations — all from scratch, zero templates, for businesses across Europe.",
      },
    },
    {
      "@type": "Question",
      name: "Do I own my website after WebbingHUB builds it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — 100%. Zero lock-in. You own the code, the hosting, and everything. No monthly dependency on WebbingHUB to keep your website running.",
      },
    },
    {
      "@type": "Question",
      name: "How does WebbingHUB price its work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WebbingHUB works on fixed pricing — you know exactly what you're getting, when, and for how much before any work begins. No surprises.",
      },
    },
    {
      "@type": "Question",
      name: "Where is WebbingHUB based and who do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WebbingHUB is based in Timișoara, Romania, and serves clients across Europe — from travel agencies in Paris to service businesses in Romania and beyond.",
      },
    },
    {
      "@type": "Question",
      name: "Does WebbingHUB provide support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WebbingHUB stays close after launch — providing maintenance, updates, and improvements as your business grows.",
      },
    },
  ],
};

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslations(locale);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HeroSection locale={locale} t={t.hero} />
      <TrustBar t={t.trustBar} />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <BrandsSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
