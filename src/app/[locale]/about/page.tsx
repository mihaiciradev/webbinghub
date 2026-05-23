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
      "WebbingHUB is a web development agency run by people who genuinely care. We build custom websites from scratch for businesses across Europe — no templates, no handoffs, no lock-in.",
    alternates: {
      canonical: `${BASE}/${locale}/about`,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, `${BASE}/${l}/about`]),
        ["x-default", `${BASE}/en/about`],
      ]),
    },
    openGraph: {
      title: "About WebbingHUB — A Small Team, A Serious Commitment",
      description: "Meet the people behind the craft. We build websites that speak volumes.",
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
  description: "WebbingHUB is a web development agency run by people who genuinely care about quality. Custom websites, no templates.",
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
            <strong>WebbingHUB</strong> is the embodiment of passion and
            expertise, born from the seamless fusion of a hobby turned
            profession. We do what we know best — creating websites that{" "}
            <strong>speak volumes</strong>.
          </p>
          <blockquote className={styles.quote}>
            &ldquo;Every project reflects our love for the craft, where
            creativity meets precision, delivering web experiences that are as
            impactful as they are beautiful.&rdquo;
          </blockquote>
          <p>
            When you work with WebbingHUB, you talk directly with the people
            building your website. No account managers, no handoffs — just
            honest work done properly.
          </p>
        </div>
      </section>

      <section className={styles.values}>
        <div className={`${styles.valuesHeader} reveal`}>
          <p className={styles.label}>What drives us</p>
          <h2 className={styles.sectionTitle}>
            We don&apos;t just build websites.<br /><em>We build your success.</em>
          </h2>
        </div>
        <div className={styles.valuesGrid}>
          {[
            { num: "01", title: "Tailored solutions", body: "Every website we build starts from a blank canvas. No themes, no shortcuts — just a custom solution designed around your business, your users, and your goals." },
            { num: "02", title: "Ongoing support", body: "We don't disappear after launch. We stay close — maintaining, improving, and growing your website as your business evolves." },
            { num: "03", title: "Direct communication", body: "You talk to the people doing the work. Always. That means faster decisions, fewer misunderstandings, and a website that genuinely reflects your vision." },
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
            We believe in a collaborative process that keeps you informed and in
            control at every stage. No surprises — just clear milestones and
            honest communication.
          </p>
        </div>
        <ol className={styles.processList}>
          {[
            { step: "Discover", desc: "We start by listening. Understanding your business, your users, and your goals before suggesting anything." },
            { step: "Plan", desc: "A scoped proposal with deliverables, timeline, and a fixed price. Agreed before a single line of code is written." },
            { step: "Build", desc: "Designed and developed from scratch. You stay informed throughout — not just at the end." },
            { step: "Launch", desc: "We deploy, test, and hand over a website that's ready to perform on day one." },
            { step: "Support", desc: "Maintenance, updates, and improvements as your business grows. We're here for the long run." },
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
