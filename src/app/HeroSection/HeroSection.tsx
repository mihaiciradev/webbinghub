import styles from "./HeroSection.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { Locale } from "@/i18n/config";
import type { Translations } from "@/i18n/translations";

const HeroLogo3D = dynamic(() => import("./HeroLogo3D"), {
  ssr: false,
  loading: () => <div className={styles.logoPlaceholder} />,
});

interface HeroSectionProps {
  locale: Locale;
  t: Translations["hero"];
}

export default function HeroSection({ locale, t }: HeroSectionProps) {
  return (
    <section className={styles.hero}>

      {/* ── LEFT — text content ───────────────────── */}
      <div className={styles.heroLeft}>

        {/* Announcement pill — inspired by Magic's badge pattern */}
        <div className={styles.announcement}>
          <span className={styles.announcementDot} />
          <span>TRAVEL by WebbingHUB is live</span>
          <a
            href="https://travel.webbinghub.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.announcementLink}
          >
            Explore →
          </a>
        </div>

        <p className={styles.eyebrow}>{t.eyebrow}</p>

        <h1 className={styles.title}>
          {t.titleLine1}<br />
          {/* Wrap em so we can add the SVG underline */}
          <span className={styles.titleEmWrap}>
            <em>{t.titleEm}</em>
            {/* Magic-inspired curved SVG underline in gold */}
            <svg
              className={styles.titleUnderline}
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 8C60 3 140 1 298 6"
                stroke="#b8975a"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.7"
              />
            </svg>
          </span>
        </h1>

        <p className={styles.body}>{t.body}</p>

        <div className={styles.actions}>
          <Link href={`/${locale}/#contact`} className={styles.btnDark}>
            {t.cta1}
          </Link>
          <Link href={`/${locale}/#services`} className={styles.btnOutline}>
            {t.cta2}
          </Link>
        </div>

        <div className={styles.badges}>
          <span className={styles.badge}><span className={styles.dot} />{t.badge1}</span>
          <span className={styles.badge}><span className={styles.dot} />{t.badge2}</span>
          <span className={styles.badge}><span className={styles.dot} />{t.badge3}</span>
        </div>
      </div>

      {/* ── RIGHT — 3-D logo + tagline ────────────── */}
      <div className={styles.heroRight}>
        <span className={styles.decoW} aria-hidden="true">W</span>

        <div className={styles.logoWrap}>
          <HeroLogo3D />
        </div>

        <p className={styles.tagline}>{t.tagline}</p>
        <div className={styles.heroStat}>
          <span>Zero</span> {t.stat}
        </div>
      </div>

    </section>
  );
}
