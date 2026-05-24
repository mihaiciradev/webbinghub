import { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import Link from "next/link";
import Script from "next/script";
import styles from "@/app/contact/page.module.css";
import EmailUs from "@/components/EmailUs/EmailUs";

const BASE = "https://webbinghub.io";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: "Website-uri Personalizate pentru România | WebbingHUB",
    description:
      "Website-uri personalizate pentru afaceri din România. Magazin online, aplicații interne. Fără template-uri. 100% proprietatea ta.",
    keywords: [
      "website Romania",
      "websites Romania",
      "web development Romania",
      "website personalizat Romania",
      "design website Romania",
      "magazin online Romania",
      "web developer Romania",
      "web design Romania",
    ],
    alternates: {
      canonical: `${BASE}/${locale}/websites-romania`,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, `${BASE}/${l}/websites-romania`]),
        ["x-default", `${BASE}/en/websites-romania`],
      ]),
    },
    openGraph: {
      title: "Website-uri Personalizate pentru România",
      description:
        "Website-uri personalizate pentru afaceri din România. Fără template-uri.",
      url: `${BASE}/${locale}/websites-romania`,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "WebbingHUB - Web Design România",
        },
      ],
    },
  };
}

export default function RomaniaPage({ params: { locale } }: { params: { locale: Locale } }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE}/en/websites-romania#business`,
    name: "WebbingHUB",
    image: `${BASE}/full_logo_gold.svg`,
    description: "Agenție de dezvoltare website-uri personalizate în România",
    url: `${BASE}/${locale}/websites-romania`,
    telephone: "+40",
    areaServed: {
      "@type": "Country",
      name: "Romania",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "RO",
    },
    priceRange: "$$",
    serviceType: [
      "Website Development",
      "Custom Websites",
      "E-commerce Development",
      "Web Design",
      "Internal Tools",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BASE}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Website-uri România",
        item: `${BASE}/${locale}/websites-romania`,
      },
    ],
  };

  return (
    <>
      <Script id="local-business-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      <main className={styles.contactPage}>
        <section style={{ padding: "60px 20px", maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ marginBottom: "20px", fontSize: "2.5rem" }}>
            Website-uri Personalizate pentru Afaceri din România
          </h1>

          <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "30px" }}>
            La WebbingHUB construim website-uri personalizate pentru afaceri din toată România.
            De la București la Timișoara, de la Cluj la Constanța &mdash; ovreunde ești, putem ajuta.
            Fără template-uri, fără limitări de proprietate. Un site care aparține 100% ție.
          </p>

          <h2 style={{ fontSize: "1.5rem", marginTop: "40px", marginBottom: "15px" }}>
            Servicii Website pentru Afaceri din România
          </h2>
          <ul style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "30px" }}>
            <li>💻 <strong>Website personalizat</strong> &mdash; Construit de la zero, adaptat la nevoile tale</li>
            <li>🛒 <strong>Magazin online &amp; e-commerce</strong> &mdash; Vinde pe internet în toată România și Europa</li>
            <li>⚙️ <strong>Aplicații interne &amp; dashboard-uri</strong> &mdash; Automatizează procesele businessului tău</li>
            <li>📱 <strong>Design responsive</strong> &mdash; Perfect pe telefoane, tablete și calculatoare</li>
            <li>🔧 <strong>Proprietate deplină</strong> &mdash; Codul tău, datele tale, website-ul tău</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", marginTop: "40px", marginBottom: "15px" }}>
            De Ce WebbingHUB pentru Website-ul tău din România
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "30px" }}>
            Suntem din România și înțelegem piața locală, legislația, și cum funcționează businessurile românești.
            Am construit website-uri pentru hoteluri, magazine online, agenții de turism, și companii SaaS din România și din toată Europa.
            Vorbim limba ta și cunoaștem cu adevărat provocările cu care se confruntă afacerile din țara asta.
          </p>

          <h2 style={{ fontSize: "1.5rem", marginTop: "40px", marginBottom: "15px" }}>
            Website-uri Personalizate pentru Diferite Industrii
          </h2>
          <ul style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "30px" }}>
            <li>🏨 Hotel-uri și pensiuni</li>
            <li>✈️ Agenții de turism și turism</li>
            <li>🛍️ Magazine retail și e-commerce</li>
            <li>🏢 Website-uri corporate B2B</li>
            <li>📊 Produse SaaS și software</li>
            <li>🏭 Companii industriale și de producție</li>
            <li>💼 Companii de servicii și consultanță</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", marginTop: "40px", marginBottom: "15px" }}>
            Gata de un Website Personalizat?
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "40px" }}>
            Indiferent dacă ești din București, Cluj, Timișoara sau din orice alt colț al României,
            suntem aici să ajutăm. Fără presiuni, fără pitch-uri forțate &mdash; doar o conversație sinceră
            despre ce ai nevoie și cum putem contribui la creșterea businessului tău.
          </p>

          <EmailUs label="Vreau un Website Personalizat" />

          <p style={{ fontSize: "0.95rem", color: "#666", marginTop: "40px", textAlign: "center" }}>
            <Link href={`/${locale}/contact`} style={{ color: "#0066cc", textDecoration: "none" }}>
              ← Înapoi la contact
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}
