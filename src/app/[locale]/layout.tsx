import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant, Jost } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header/header";
import dynamic from "next/dynamic";
import Cookies from "@/components/Cookies/Cookies";
import FirebaseAnalyticsInit from "@/components/Firebase/FirebaseAnalyticsInit";
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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: "WebbingHUB | Crafting Websites That Inspire",
      template: "%s | WebbingHUB",
    },
    description: "Websites for any vision, any business & every user.",
    keywords: "WebbingHUB, website development, web design, digital solutions",
    openGraph: {
      title: "WebbingHUB",
      description: "Websites for any vision, any business & every user.",
      url: "https://webbinghub.io",
      type: "website",
      images: "/metadata_social.png",
    },
    icons: { icon: "/favicon.ico" },
    twitter: {
      card: "summary_large_image",
      title: "WebbingHUB",
      description: "Websites for any vision, any business & every user.",
      images: "/metadata_social.png",
    },
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `https://webbinghub.io/${l}`])
      ),
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
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17874820921" strategy="afterInteractive" />
        <Script id="gtag-aw" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17874820921');
        `}</Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${montserrat.variable} ${cormorant.variable} ${jost.variable}`}>
        <SpeedInsights />
        <FirebaseAnalyticsInit />
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
