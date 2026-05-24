import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant, Jost } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header/header";
import dynamic from "next/dynamic";
import Cookies from "@/components/Cookies/Cookies";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { locales, type Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/utils";

const Footer = dynamic(() => import("@/components/Footer/Footer"), { ssr: false });

/* ─── Fonts ───────────────────────────────────── */
const geistSans = localFont({ src: "../fonts/GeistVF.woff", variable: "--font-geist-sans", weight: "100 900" });
const geistMono = localFont({ src: "../fonts/GeistMonoVF.woff", variable: "--font-geist-mono", weight: "100 900" });
const montserrat = localFont({ src: "../fonts/Montserrat.woff", variable: "--font-montserrat", weight: "100" });
const poppins = localFont({ src: "../fonts/Poppins.woff", variable: "--font-poppins", weight: "normal" });
const cormorant = Cormorant({ subsets: ["latin"], variable: "--font-cormorant", weight: ["400", "500", "600"], style: ["normal", "italic"], display: "swap" });
const jost = Jost({ subsets: ["latin"], variable: "--font-jost", weight: ["300", "400", "500", "600"], display: "swap" });

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const BASE = "https://webbinghub.io";

  const descriptions: Record<Locale, string> = {
    en: "Custom-built websites, internal tools & online stores for businesses across Europe. No templates — built from scratch, fully owned by you. Based in Romania.",
    fr: "Sites web sur mesure, outils internes et boutiques en ligne pour les entreprises en Europe. Sans templates — construit de zéro, entièrement à vous.",
    es: "Sitios web personalizados, herramientas internas y tiendas online para empresas en Europa. Sin plantillas — construido desde cero, 100% tuyo.",
    de: "Maßgeschneiderte Websites, interne Tools & Onlineshops für Unternehmen in Europa. Keine Templates — von Grund auf gebaut, vollständig in Ihrem Besitz.",
    ro: "Website-uri personalizate, instrumente interne și magazine online pentru afaceri din Europa. Fără șabloane — construit de la zero, al tău în totalitate.",
  };

  const titles: Record<Locale, string> = {
    en: "WebbingHUB | Custom Web Development Agency",
    fr: "WebbingHUB | Agence de Développement Web Sur Mesure",
    es: "WebbingHUB | Agencia de Desarrollo Web Personalizado",
    de: "WebbingHUB | Webentwicklungsagentur Maßgeschneidert",
    ro: "WebbingHUB | Agenție de Dezvoltare Web Personalizată",
  };

  return {
    metadataBase: new URL(BASE),
    title: {
      default: titles[locale],
      template: "%s | WebbingHUB",
    },
    description: descriptions[locale],
    keywords: [
      "web development agency", "custom website", "website design Romania",
      "web development Europe", "custom web development", "no templates",
      "WebbingHUB", "website for business", "online store development",
      "internal tools development", "travel website", "hotel website",
    ],
    authors: [{ name: "WebbingHUB", url: BASE }],
    creator: "WebbingHUB",
    publisher: "WebbingHUB",
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: `${BASE}/${locale}`,
      siteName: "WebbingHUB",
      type: "website",
      locale: locale === "en" ? "en_US" : locale === "fr" ? "fr_FR" : locale === "es" ? "es_ES" : locale === "de" ? "de_DE" : "ro_RO",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "WebbingHUB — Custom Web Development Agency" }],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale],
      description: descriptions[locale],
      creator: "@webbinghub",
      site: "@webbinghub",
      images: [{ url: "/og-image.png", alt: "WebbingHUB — Custom Web Development Agency" }],
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
      shortcut: "/favicon.ico",
    },
    alternates: {
      canonical: `${BASE}/${locale}`,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, `${BASE}/${l}`]),
        ["x-default", `${BASE}/en`],
      ]),
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = params;
  const t = getTranslations(locale);

  return (
    <html lang={locale}>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17874820921" strategy="lazyOnload" />
        <Script id="gtag-aw" strategy="lazyOnload">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17874820921');
        `}</Script>
        <Script id="local-business-schema" type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://webbinghub.io#business",
            "name": "WebbingHUB",
            "description": "Custom website development agency serving businesses across Europe",
            "url": "https://webbinghub.io",
            "image": "https://webbinghub.io/full_logo_gold.svg",
            "areaServed": [
              {
                "@type": "Country",
                "name": "Romania"
              },
              {
                "@type": "City",
                "name": "Timisoara"
              },
              {
                "@type": "Country",
                "name": "Europe"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "RO",
              "addressLocality": "Timisoara",
              "addressRegion": "Timiș"
            },
            "priceRange": "$$",
            "serviceType": [
              "Website Development",
              "Custom Websites",
              "E-commerce Development",
              "Web Design",
              "Internal Tools"
            ]
          }
        `}</Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${montserrat.variable} ${cormorant.variable} ${jost.variable}`}>
        <SpeedInsights />
        <Cookies />
        <Analytics />
        <ScrollReveal />
        <Header locale={locale} t={t.nav} />
        {children}
        <Footer locale={locale} t={t.footer} />
      </body>
    </html>
  );
}
