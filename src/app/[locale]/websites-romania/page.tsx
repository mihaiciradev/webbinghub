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
    title: "Website Development for Romanian Businesses | WebbingHUB",
    description:
      "Custom website development for businesses across Romania. We build websites, online stores & internal tools. No templates. Fully owned by you.",
    keywords: [
      "website Romania",
      "websites Romania",
      "web development Romania",
      "custom website Romania",
      "website design Romania",
      "web agency Romania",
      "online store Romania",
      "Romanian web developer",
      "website developer Romania",
    ],
    alternates: {
      canonical: `${BASE}/${locale}/websites-romania`,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, `${BASE}/${l}/websites-romania`]),
        ["x-default", `${BASE}/en/websites-romania`],
      ]),
    },
    openGraph: {
      title: "Website Development for Romanian Businesses",
      description:
        "Custom website development across Romania. No templates, fully owned by you.",
      url: `${BASE}/${locale}/websites-romania`,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "WebbingHUB - Website Development Romania",
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
    description: "Custom website development agency serving businesses across Romania",
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
        name: "Websites Romania",
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
            Custom Website Development Across Romania
          </h1>

          <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "30px" }}>
            WebbingHUB builds custom websites for businesses across Romania. From Bucharest to Timisoara,
            Transylvania to the coast — we develop websites that are 100% owned by you, with no templates
            or licensing limits.
          </p>

          <h2 style={{ fontSize: "1.5rem", marginTop: "40px", marginBottom: "15px" }}>
            Website Development Services for Romania
          </h2>
          <ul style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "30px" }}>
            <li>💻 <strong>Custom website development</strong> — Built from scratch, tailored to your business</li>
            <li>🛒 <strong>Online stores &amp; e-commerce</strong> — Sell products across Romania and Europe</li>
            <li>⚙️ <strong>Internal tools &amp; dashboards</strong> — Automate your business processes</li>
            <li>📱 <strong>Mobile-responsive websites</strong> — Perfect on phones, tablets, and desktops</li>
            <li>🔧 <strong>Complete ownership</strong> — Your code, your data, your website</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", marginTop: "40px", marginBottom: "15px" }}>
            Why WebbingHUB for Romanian Businesses?
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "30px" }}>
            We&apos;re based in Romania and understand the local market, regulatory environment, and business
            culture. We&apos;ve built websites for travel companies, hotels, e-commerce businesses, and SaaS
            companies across Romania and Europe. We speak Romanian, English, French, Spanish, and German &mdash;
            and we can serve your business wherever you are.
          </p>

          <h2 style={{ fontSize: "1.5rem", marginTop: "40px", marginBottom: "15px" }}>
            Custom Website Solutions for Different Industries
          </h2>
          <ul style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "30px" }}>
            <li>🏨 Hotels and accommodation businesses</li>
            <li>✈️ Travel and tourism agencies</li>
            <li>🛍️ Retail and e-commerce businesses</li>
            <li>🏢 B2B and corporate websites</li>
            <li>📊 SaaS and software products</li>
            <li>🏭 Manufacturing and industrial businesses</li>
            <li>💼 Service-based companies</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", marginTop: "40px", marginBottom: "15px" }}>
            Let&apos;s Build Your Website
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "40px" }}>
            Whether you&apos;re in Bucharest, Cluj, Timisoara, or anywhere in Romania, we&apos;re here to help.
            No pressure, no sales pitch &mdash; just an honest conversation about your website needs.
          </p>

          <EmailUs label="Let&apos;s Build Your Website" />

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
