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
    title: "Website-uri Personalizate în Timișoara | WebbingHUB",
    description:
      "Website-uri personalizate pentru afaceri din Timișoara. Magazin online, aplicații interne. Fără template-uri. 100% proprietatea ta.",
    keywords: [
      "website Timisoara",
      "websites Timisoara",
      "web development Timisoara",
      "website personalizat Timisoara",
      "design website Timisoara",
      "magazin online Timisoara",
      "web developer Timisoara",
      "web design Timisoara",
    ],
    alternates: {
      canonical: `${BASE}/${locale}/websites-timisoara`,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, `${BASE}/${l}/websites-timisoara`]),
        ["x-default", `${BASE}/en/websites-timisoara`],
      ]),
    },
    openGraph: {
      title: "Website-uri Personalizate în Timișoara",
      description:
        "Website-uri personalizate pentru afaceri din Timișoara. Fără template-uri.",
      url: `${BASE}/${locale}/websites-timisoara`,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "WebbingHUB - Web Design Timișoara",
        },
      ],
    },
  };
}

export default function TimisoaraPage({ params: { locale } }: { params: { locale: Locale } }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE}/en/websites-timisoara#business`,
    name: "WebbingHUB",
    image: `${BASE}/full_logo_gold.svg`,
    description: "Agenție de dezvoltare website-uri personalizate în Timișoara",
    url: `${BASE}/${locale}/websites-timisoara`,
    telephone: "+40",
    areaServed: [
      {
        "@type": "City",
        name: "Timisoara",
        "sameAs": "https://en.wikipedia.org/wiki/Timi%C8%99oara",
      },
      {
        "@type": "State",
        name: "Timiș County",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "RO",
      addressLocality: "Timisoara",
      addressRegion: "Timiș",
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
        name: "Website-uri Timișoara",
        item: `${BASE}/${locale}/websites-timisoara`,
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
            Website-uri Personalizate pentru Businessurile din Timișoara
          </h1>

          <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "30px" }}>
            La WebbingHUB dezvoltăm website-uri personalizate pentru afaceri din Timișoara și din vestul României.
            Fără template-uri gata făcute, fără limitări de proprietate. Un site construit special pentru tine, pe care îl deții 100%.
          </p>

          <h2 style={{ fontSize: "1.5rem", marginTop: "40px", marginBottom: "15px" }}>
            Ce Oferim pentru Afacerile din Timișoara
          </h2>
          <ul style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "30px" }}>
            <li>💻 <strong>Website personalizat</strong> &mdash; Construit de la zero, exact cum îți trebuie pentru business-ul tău</li>
            <li>🛒 <strong>Magazin online</strong> &mdash; E-commerce complet pentru a vinde produsele online</li>
            <li>⚙️ <strong>Aplicații interne</strong> &mdash; Instrumente personalizate pentru a automatiza munca și procese</li>
            <li>📱 <strong>Design responsive</strong> &mdash; Funcționează perfect pe telefoane, tablete și calculatoare</li>
            <li>🔧 <strong>Proprietate deplină</strong> &mdash; Codul tău, datele tale, website-ul tău &mdash; nu al lor</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", marginTop: "40px", marginBottom: "15px" }}>
            De Ce WebbingHUB pentru Website-ul tău din Timișoara
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "30px" }}>
            Suntem din România și cunoaștem piața locală, legislația și provocările reale ale businesselor din Timișoara.
            Am lucrat cu hoteluri, magazine online, agenții de turism și companii din toată Europa. Nu doar că stim tehnic cum se face un website bun &mdash;
            stim și cum se vinde, cum funcționează afacerile locale, și cum să construim un site care aduce rezultate.
          </p>

          <h2 style={{ fontSize: "1.5rem", marginTop: "40px", marginBottom: "15px" }}>
            Gata să Discutăm despre Proiectul Tău?
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "40px" }}>
            Hai să vorbim fără presiuni. Nu vrem să îți vândeim ceva pe care nu îl ai nevoie. Doar o conversație sinceră
            despre ce face afacerea ta și cum putem ajuta.
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
