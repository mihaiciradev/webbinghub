import { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "WebbingHUB is a web development agency built on passion and expertise. Meet the team behind the craft.",
  alternates: { canonical: "https://webbinghub.io/about" },
  openGraph: {
    title: "About | WebbingHUB",
    description: "A small team. A serious commitment.",
    url: "https://webbinghub.io/about",
  },
};

export default function AboutPage() {
  return (
    <main className={styles.main}>

      {/* ── Hero ─────────────────────────────────── */}
      <section className={styles.hero}>
        <p className={styles.eyebrow}>About WebbingHUB</p>
        <h1 className={styles.heroTitle}>
          A small team.<br />
          <em>A serious commitment.</em>
        </h1>
        <p className={styles.heroSub}>
          Born from a hobby turned profession — we build websites that speak
          volumes, and we mean every pixel of it.
        </p>
      </section>

      {/* ── Story ────────────────────────────────── */}
      <section className={styles.story}>
        <div className={styles.storyLeft}>
          <p className={styles.label}>Our story</p>
          <h2 className={styles.sectionTitle}>
            Passion &amp; expertise,<br /><em>fused.</em>
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

      {/* ── Values ───────────────────────────────── */}
      <section className={styles.values}>
        <div className={`${styles.valuesHeader} reveal`}>
          <p className={styles.label}>What drives us</p>
          <h2 className={styles.sectionTitle}>
            We don&apos;t just build websites.<br />
            <em>We build your success.</em>
          </h2>
        </div>
        <div className={styles.valuesGrid}>
          {[
            {
              num: "01",
              title: "Tailored solutions",
              body: "Every website we build starts from a blank canvas. No themes, no shortcuts — just a custom solution designed around your business, your users, and your goals.",
            },
            {
              num: "02",
              title: "Ongoing support",
              body: "We don't disappear after launch. We stay close — maintaining, improving, and growing your website as your business evolves.",
            },
            {
              num: "03",
              title: "Direct communication",
              body: "You talk to the people doing the work. Always. That means faster decisions, fewer misunderstandings, and a website that genuinely reflects your vision.",
            },
          ].map(({ num, title, body }) => (
            <div key={num} className={`${styles.valueCard} reveal`}>
              <span className={styles.valueNum}>{num}</span>
              <h3 className={styles.valueTitle}>{title}</h3>
              <p className={styles.valueBody}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ──────────────────────────────── */}
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

      {/* ── CTA ──────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={`${styles.ctaInner} reveal`}>
          <h2 className={styles.ctaTitle}>
            Your partner in<br /><em>digital growth.</em>
          </h2>
          <p className={styles.ctaSub}>
            Ready to talk? No pressure, no pitch. Just an honest conversation
            about your business and whether we&apos;re the right fit.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            Let&apos;s have a chat →
          </Link>
        </div>
      </section>

    </main>
  );
}
