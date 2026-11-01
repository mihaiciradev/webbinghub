import { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getTranslations, pageAlternates, brandedTitle } from "@/i18n/utils";
import styles from "@/app/about/page.module.css";

const BASE = "https://webbinghub.io";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const { meta } = getTranslations(locale).pages.about;
  return {
    title: brandedTitle(meta.title),
    description: meta.description,
    alternates: pageAlternates(locale, "/about"),
    openGraph: {
      title: meta.title,
      description: meta.ogDescription,
      url: `${BASE}/${locale}/about`,
      images: [{ url: "/og-about.png", width: 1200, height: 630, alt: "About WebbingHUB" }],
    },
  };
}

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${BASE}/en/about#webpage`,
  name: "About WebbingHUB",
  description: "WebbingHUB builds custom websites from scratch. You talk to the people who write the code. No templates.",
  url: `${BASE}/en/about`,
  isPartOf: { "@id": `${BASE}/#website` },
  about: { "@id": `${BASE}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/en` },
      { "@type": "ListItem", position: 2, name: "About", item: `${BASE}/en/about` },
    ],
  },
};

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslations(locale).pages.about;

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h1 className={styles.heroTitle}>
          {t.heroTitle}<br /><em>{t.heroTitleEm}</em>
        </h1>
        <p className={styles.heroSub}>{t.heroSub}</p>
      </section>

      <section className={styles.story}>
        <div className="reveal">
          <p className={styles.label}>{t.storyLabel}</p>
          <h2 className={styles.sectionTitle}>
            {t.storyTitle}<br /><em>{t.storyTitleEm}</em>
          </h2>
        </div>
        <div className={`${styles.storyRight} reveal`}>
          <p>
            <strong>WebbingHUB</strong> {t.storyP1}
          </p>
          <blockquote className={styles.quote}>{t.storyQuote}</blockquote>
          <p>{t.storyP2}</p>
        </div>
      </section>

      <section className={styles.values}>
        <div className={`${styles.valuesHeader} reveal`}>
          <p className={styles.label}>{t.valuesLabel}</p>
          <h2 className={styles.sectionTitle}>
            {t.valuesTitle}<br /><em>{t.valuesTitleEm}</em>
          </h2>
        </div>
        <div className={styles.valuesGrid}>
          {t.values.map(({ title, desc }, i) => (
            <div key={title} className={`${styles.valueCard} reveal`}>
              <span className={styles.valueNum}>0{i + 1}</span>
              <h3 className={styles.valueTitle}>{title}</h3>
              <p className={styles.valueBody}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.process}>
        <div className={`${styles.processHeader} reveal`}>
          <p className={styles.label}>{t.processLabel}</p>
          <h2 className={styles.sectionTitle}>
            {t.processTitle}<br /><em>{t.processTitleEm}</em>
          </h2>
          <p className={styles.processIntro}>{t.processIntro}</p>
        </div>
        <ol className={styles.processList}>
          {t.process.map(({ title, desc }, i) => (
            <li key={title} className={`${styles.processItem} reveal`}>
              <span className={styles.processNum}>0{i + 1}</span>
              <div>
                <h3 className={styles.processStep}>{title}</h3>
                <p className={styles.processDesc}>{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.cta}>
        <div className={`${styles.ctaInner} reveal`}>
          <h2 className={styles.ctaTitle}>
            {t.ctaTitle}<br /><em>{t.ctaTitleEm}</em>
          </h2>
          <p className={styles.ctaSub}>{t.ctaSub}</p>
          <Link href={`/${locale}/contact`} className={styles.ctaBtn}>
            {t.ctaBtn}
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
