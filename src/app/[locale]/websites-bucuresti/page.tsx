import { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import Link from "next/link";
import Script from "next/script";
import styles from "@/app/[locale]/websites-romania/page.module.css";
import EmailUs from "@/components/EmailUs/EmailUs";
import TrackedCTA from "@/components/TrackedCTA/TrackedCTA";

const BASE = "https://webbinghub.io";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: "Creare site web București — Agenție web design | WebbingHUB",
    description:
      "Creare site de prezentare, magazin online și aplicații web pentru afaceri din București. Dezvoltare site web la comandă, fără șabloane. Cod și date 100% ale tale.",
    keywords: [
      "web design bucuresti",
      "creare site web bucuresti",
      "creare site de prezentare bucuresti",
      "realizare site web bucuresti",
      "agentie web design bucuresti",
      "magazin online bucuresti",
      "dezvoltare site web bucuresti",
    ],
    alternates: {
      canonical: `${BASE}/${locale}/websites-bucuresti`,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, `${BASE}/${l}/websites-bucuresti`]),
        ["x-default", `${BASE}/en/websites-bucuresti`],
      ]),
    },
    openGraph: {
      title: "Creare site web București — Agenție web design",
      description:
        "Site de prezentare, magazin online și aplicații web pentru afaceri din București. Fără șabloane.",
      url: `${BASE}/${locale}/websites-bucuresti`,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "WebbingHUB - Web Design București",
        },
      ],
    },
  };
}

export default function BucurestiPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE}/en/websites-bucuresti#business`,
    name: "WebbingHUB",
    image: `${BASE}/full_logo_gold.svg`,
    description: "Agenție de creare site web și web design în București",
    url: `${BASE}/${locale}/websites-bucuresti`,
    telephone: "+40736394784",
    areaServed: {
      "@type": "City",
      name: "București",
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
        name: "Creare site web București",
        item: `${BASE}/${locale}/websites-bucuresti`,
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

      <main className={styles.page}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Agenție web design · București</p>
          <h1 className={styles.title}>
            Creare site web în <em>București</em>
          </h1>
          <p className={styles.lead}>
            Construim site-uri de prezentare, magazine online și aplicații web
            pentru afaceri din București — de la zero, adaptate exact la cum
            lucrezi. Fără șabloane, fără abonamente care te țin captiv. Codul și
            datele rămân ale tale.
          </p>
          <div className={styles.ctaRow}>
            <TrackedCTA
              href="mailto:hello@webbinghub.io"
              className={styles.ctaButton}
            >
              Cere o ofertă
            </TrackedCTA>
            <span className={styles.ctaAlt}>
              sau sună-ne la{" "}
              <TrackedCTA href="tel:+40736394784">+40 736 394 784</TrackedCTA>
            </span>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Ce <em>construim</em> pentru afaceri din București
          </h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <p className={styles.cardTitle}>Site de prezentare</p>
              <p className={styles.cardText}>
                Pagini clare care explică ce faci și conving vizitatorul să te
                contacteze. Rapide, optimizate pentru Google și ușor de
                actualizat.
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardTitle}>Magazin online &amp; e-commerce</p>
              <p className={styles.cardText}>
                Creare magazin online cu plăți, gestiune produse și livrare —
                pregătit pentru vânzări în București și în toată țara.
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardTitle}>Dezvoltare site web la comandă</p>
              <p className={styles.cardText}>
                Funcționalități pe care platformele gata făcute nu le pot
                oferi: integrări, rezervări, conturi de utilizator, fluxuri
                proprii.
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardTitle}>Aplicații interne &amp; dashboard-uri</p>
              <p className={styles.cardText}>
                Instrumente care îți automatizează munca repetitivă și îți
                strâng datele într-un singur loc, accesibil de oriunde.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            De ce o agenție, nu un <em>website builder</em>
          </h2>
          <p className={styles.prose}>
            Cu un builder plătești lunar și rămâi blocat în limitele lui:
            template-uri pe care le recunoști pe alte zeci de site-uri, viteză
            pe care n-o controlezi și un site pe care nu-l poți muta. Noi
            construim de la zero, deci primești exact ce-ți trebuie — și rămâne
            al tău, cu tot cu cod.
          </p>
          <p className={styles.prose}>
            Lucrăm 100% online cu afaceri din București și din toată țara, de
            peste 6 ani: site-uri pentru hoteluri, agenții de turism, magazine
            și companii de servicii. Comunicăm clar, cu prețuri fixe stabilite
            de la început.
          </p>
        </section>

        <section className={styles.formSection} id="contact">
          <div className={styles.formBox}>
            <p className={styles.formTitle}>Hai să-ți facem o ofertă</p>
            <p className={styles.formSub}>
              Lasă-ne emailul și îți răspundem în 24h. Fără discurs de vânzări —
              vorbim despre ce ai nevoie și dacă te putem ajuta.
            </p>
            <EmailUs label="Adresa ta de email" />
          </div>

          <p style={{ marginTop: "1.5rem" }}>
            <Link
              href={`/${locale}/contact`}
              className={styles.ctaAlt}
              style={{ color: "var(--gold, #b8975a)" }}
            >
              Vezi toate datele de contact →
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}
