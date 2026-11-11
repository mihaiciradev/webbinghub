import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant, Jost } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/Footer";
import Cookies from "@/components/Cookies/Cookies";
import AdsTag from "@/components/AdsTag/AdsTag";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { locales, type Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/utils";

/* ─── Fonts ───────────────────────────────────── */
const geistSans = localFont({ src: "../fonts/GeistVF.woff", variable: "--font-geist-sans", weight: "100 900" });
const geistMono = localFont({ src: "../fonts/GeistMonoVF.woff", variable: "--font-geist-mono", weight: "100 900" });
const montserrat = localFont({ src: "../fonts/Montserrat.woff", variable: "--font-montserrat", weight: "100" });
const poppins = localFont({ src: "../fonts/Poppins.woff", variable: "--font-poppins", weight: "normal" });
const cormorant = Cormorant({ subsets: ["latin"], variable: "--font-cormorant", weight: ["400", "500", "600"], style: ["normal", "italic"], display: "swap" });
const jost = Jost({ subsets: ["latin"], variable: "--font-jost", weight: ["300", "400", "500", "600"], display: "swap" });

// Only the locales we serve; anything else is a 404 (middleware redirects old ones)
export const dynamicParams = false;

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
    en: "Internal platforms, customer portals, and integrations that connect the systems a team already uses. Based in Romania.",
    ro: "Platforme interne, portaluri pentru clienți și integrări care conectează sistemele pe care o echipă le folosește deja. Din România.",
  };

  const titles: Record<Locale, string> = {
    en: "WebbingHUB | Custom Software That Connects Your Business",
    ro: "WebbingHUB | Software la comandă care conectează sistemele afacerii",
  };

  return {
    metadataBase: new URL(BASE),
    title: {
      default: titles[locale],
      template: "%s | WebbingHUB",
    },
    description: descriptions[locale],
    keywords: [
      "internal platforms", "customer portals", "software integrations",
      "custom software", "WebbingHUB", "online store development",
      "website design Romania", "web development Europe",
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
      locale: locale === "ro" ? "ro_RO" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale],
      description: descriptions[locale],
      creator: "@webbinghub",
      site: "@webbinghub",
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
      shortcut: "/favicon.ico",
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
        <Script id="local-business-schema" type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://webbinghub.io#business",
            "name": "WebbingHUB",
            "legalName": "WEBBINGHUB S.R.L.",
            "vatID": "RO49317150",
            "description": "Internal platforms, customer portals, and integrations that connect the systems a team already uses",
            "url": "https://webbinghub.io",
            "image": "https://webbinghub.io/full_logo_gold.svg",
            "email": "support@webbinghub.io",
            "telephone": "+40776394784",
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
              "streetAddress": "Str. Gheorghe Lazăr, nr. 34",
              "addressCountry": "RO",
              "addressLocality": "Timișoara",
              "addressRegion": "Timiș"
            },
            "priceRange": "$$",
            "serviceType": [
              "Internal platforms and portals",
              "AI assistants",
              "Integrations and automations",
              "Online stores",
              "Custom websites"
            ]
          }
        `}</Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${montserrat.variable} ${cormorant.variable} ${jost.variable}`}>
        <SpeedInsights />
        <Cookies t={t.cookies} />
        <AdsTag />
        <Analytics />
        <ScrollReveal />
        <Header locale={locale} t={t.nav} />
        {children}
        <Footer locale={locale} t={t.footer} />
      </body>
    </html>
  );
}
