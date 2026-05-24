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
    title: "Custom Website Development in Timisoara | WebbingHUB",
    description:
      "Professional website development for Timisoara businesses. Custom-built websites, online stores & internal tools. No templates. 100% owned by you.",
    keywords: [
      "website Timisoara",
      "websites Timisoara",
      "web development Timisoara",
      "custom website Timisoara",
      "website design Timisoara",
      "online store Timisoara",
      "web developer Timisoara",
      "Timisoara web agency",
    ],
    alternates: {
      canonical: `${BASE}/${locale}/websites-timisoara`,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, `${BASE}/${l}/websites-timisoara`]),
        ["x-default", `${BASE}/en/websites-timisoara`],
      ]),
    },
    openGraph: {
      title: "Custom Website Development in Timisoara",
      description:
        "Professional website development for Timisoara businesses. Custom-built, no templates.",
      url: `${BASE}/${locale}/websites-timisoara`,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "WebbingHUB - Website Development Timisoara",
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
    description: "Custom website development agency serving Timisoara and West Romania",
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
        name: "Websites Timisoara",
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
            Custom Websites for Timisoara Businesses
          </h1>

          <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "30px" }}>
            WebbingHUB develops custom websites for businesses in Timisoara and across West Romania.
            We don&apos;t use templates. Every website is built from scratch, fully owned by you.
          </p>

          <h2 style={{ fontSize: "1.5rem", marginTop: "40px", marginBottom: "15px" }}>
            Website Services for Timisoara
          </h2>
          <ul style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "30px" }}>
            <li>💻 <strong>Custom website development</strong> — Built from the ground up for your business</li>
            <li>🛒 <strong>Online stores</strong> — E-commerce platforms for Timisoara businesses</li>
            <li>⚙️ <strong>Internal tools</strong> — Custom applications to streamline your workflow</li>
            <li>📱 <strong>Responsive design</strong> — Works perfectly on all devices</li>
            <li>🔧 <strong>Full ownership</strong> — Your website, your code, your data</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", marginTop: "40px", marginBottom: "15px" }}>
            Why Choose WebbingHUB for Your Timisoara Website?
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "30px" }}>
            Based in Romania, we understand the local market and European standards. We&apos;ve built websites
            for businesses across Europe, from hotels and travel companies to e-commerce platforms. When you
            work with us, you get a team that speaks your language and understands your business needs.
          </p>

          <h2 style={{ fontSize: "1.5rem", marginTop: "40px", marginBottom: "15px" }}>
            Ready for a Custom Website?
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "40px" }}>
            Let&apos;s talk about your project. No pressure, no sales pitch &mdash; just an honest conversation about
            what your business needs.
          </p>

          <EmailUs label="Get a Custom Website for Timisoara" />

          <p style={{ fontSize: "0.95rem", color: "#666", marginTop: "40px", textAlign: "center" }}>
            <Link href={`/${locale}/contact`} style={{ color: "#0066cc", textDecoration: "none" }}>
              ← Back to contact
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}
