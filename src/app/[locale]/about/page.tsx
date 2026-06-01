import { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getTranslations } from "@/i18n/utils";
import styles from "@/app/about/page.module.css";

const BASE = "https://webbinghub.io";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: "About WebbingHUB — A Small Team, A Serious Commitment",
    description:
      "WebbingHUB builds custom websites from scratch for businesses across Europe. You talk to the people who write the code. No templates, no handoffs, no lock-in.",
    alternates: {
      canonical: `${BASE}/${locale}/about`,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, `${BASE}/${l}/about`]),
        ["x-default", `${BASE}/en/about`],
      ]),
    },
    openGraph: {
      title: "About WebbingHUB — A Small Team, A Serious Commitment",
      description: "Meet the people who build your site. We write every line ourselves.",
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
            <strong>WebbingHUB</strong> started as a hobby and became our work.
            We build custom websites, and we know how to do it{" "}
            <strong>well</strong>.
          </p>
          <blockquote className={styles.quote}>
            &ldquo;We write every line of code ourselves. You get a site built
            for your business, not a theme with your logo dropped on top.&rdquo;
          </blockquote>
          <p>
            You talk to the people who build your website, not an account
            manager who passes your notes along. We do honest work and we do it
            properly.
          </p>
        </div>
      </section>

      <section className={styles.values}>
        <div className={`${styles.valuesHeader} reveal`}>
          <p className={styles.label}>What drives us</p>
          <h2 className={styles.sectionTitle}>
            Websites that earn their keep.<br /><em>Built around your business.</em>
          </h2>
        </div>
        <div className={styles.valuesGrid}>
          {[
            { num: "01", title: "Tailored solutions", body: "We start every website from an empty editor. No theme, no shortcut. We design it around your business and the people who use it." },
            { num: "02", title: "Ongoing support", body: "We stay on after launch to maintain and improve the site as your business grows." },
            { num: "03", title: "Direct communication", body: "You talk to the people doing the work, which means quicker decisions and a site that matches what you asked for." },
          ].map(({ num, title, body }) => (
            <div key={num} className={`${styles.valueCard} reveal`}>
              <span className={styles.valueNum}>{num}</span>
              <h3 className={styles.valueTitle}>{title}</h3>
              <p className={styles.valueBody}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.process}>
        <div className={`${styles.processHeader} reveal`}>
          <p className={styles.label}>How we work</p>
          <h2 className={styles.sectionTitle}>
            From concept to launch —<br /><em>and beyond.</em>
          </h2>
          <p className={styles.processIntro}>
            You stay informed and in control at every stage. Clear milestones,
            no surprises.
          </p>
        </div>
        <ol className={styles.processList}>
          {[
            { step: "Discover", desc: "We listen first and learn your business and goals before we suggest anything." },
            { step: "Plan", desc: "You get a proposal with the deliverables, timeline, and fixed price, agreed before we write any code." },
            { step: "Build", desc: "We design and build from scratch, and you see progress throughout, not only at the end." },
            { step: "Launch", desc: "We deploy, test, and hand over a site that works on day one." },
            { step: "Support", desc: "We maintain, update, and improve the site as your business grows." },
          ].map(({ step, desc }, i) => (
            <li key={step} className={`${styles.processItem} reveal`}>
              <span className={styles.processNum}>0{i + 1}</span>
              <div>
                <h3 className={styles.processStep}>{step}</h3>
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
