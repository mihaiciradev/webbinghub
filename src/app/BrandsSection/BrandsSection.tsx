import Image from "next/image";
import Link from "next/link";
import styles from "./BrandsSection.module.css";
import type { Locale } from "@/i18n/config";
import type { Translations } from "@/i18n/translations";

export default function BrandsSection({
  locale,
  t,
}: {
  locale: Locale;
  t: Translations["home"]["brands"];
}) {
  return (
    <section className={styles.work} aria-labelledby="work-heading">
      <div className={`${styles.hd} reveal`}>
        <div>
          <p className={styles.label}>{t.label}</p>
          <h2 id="work-heading" className={styles.heading}>
            {t.heading} <em>{t.headingEm}</em>
          </h2>
        </div>
        <p className={styles.intro}>{t.intro}</p>
      </div>

      <article className={`${styles.card} ${styles.travel} reveal`}>
        <div className={styles.travelText}>
          <div className={styles.meta}>
            <h3 className={styles.name}>
              TRAVEL <span className={styles.by}>by WebbingHUB</span>
            </h3>
            <p className={styles.kind}>{t.travel.kind}</p>
          </div>
          <p className={styles.tagline}>{t.travel.tagline}</p>
          <p className={styles.body}>{t.travel.body}</p>
          <ol className={styles.steps}>
            {t.travel.steps.map((step, i) => (
              <li key={step}>
                <span className={styles.stepNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <p className={styles.note}>{t.travel.note}</p>
          <a
            href="https://travel.webbinghub.io/"
            className={styles.cta}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.travel.ctaAria}
          >
            {t.travel.cta} <span className={styles.arrow} aria-hidden="true">→</span>
          </a>
        </div>
        <figure className={styles.browser}>
          <div className={styles.browserBar} aria-hidden="true">
            <span className={styles.dots}>
              <i />
              <i />
              <i />
            </span>
            <span className={styles.url}>travel.webbinghub.io</span>
          </div>
          <div className={styles.shot}>
            <Image
              src="/work/travel-platform.webp"
              alt={t.travel.imageAlt}
              width={1600}
              height={1000}
              sizes="(max-width: 960px) 100vw, 58vw"
              className={styles.img}
            />
          </div>
        </figure>
      </article>

      <div className={`${styles.pair} brands-grid`}>
        <article className={`${styles.card} ${styles.apetit} reveal`}>
          <div className={styles.apetitShot}>
            <Image
              src="/work/apetit-hospitality.webp"
              alt={t.apetit.imageAlt}
              fill
              sizes="(max-width: 960px) 100vw, 40vw"
              className={styles.imgCover}
            />
          </div>
          <div className={styles.cardText}>
            <div className={styles.meta}>
              <h3 className={styles.name}>
                APETIT <span className={styles.by}>by WebbingHUB</span>
              </h3>
              <p className={styles.kind}>{t.apetit.kind}</p>
            </div>
            <p className={styles.tagline}>{t.apetit.tagline}</p>
            <p className={styles.body}>{t.apetit.body}</p>
            <a
              href="https://apetit.webbinghub.io/"
              className={styles.cta}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.apetit.ctaAria}
            >
              {t.apetit.cta} <span className={styles.arrow} aria-hidden="true">→</span>
            </a>
          </div>
        </article>

        <article className={`${styles.card} ${styles.alvireya} reveal`}>
          <div className={styles.alvireyaShot}>
            <Image
              src="/work/alvireya-concept.webp"
              alt={t.alvireya.imageAlt}
              fill
              sizes="(max-width: 960px) 100vw, 55vw"
              className={styles.imgCover}
            />
          </div>
          <div className={styles.cardText}>
            <div className={styles.meta}>
              <h3 className={styles.name}>ALVIREYA</h3>
              <p className={styles.kind}>{t.alvireya.kind}</p>
            </div>
            <p className={styles.tagline}>{t.alvireya.tagline}</p>
            <p className={styles.body}>{t.alvireya.body}</p>
            <p className={styles.note}>{t.alvireya.note}</p>
            <a
              href="https://alvireya.webbinghub.io/"
              className={styles.cta}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.alvireya.ctaAria}
            >
              {t.alvireya.cta} <span className={styles.arrow} aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      </div>

      <p className={`${styles.closing} reveal`}>
        <span>{t.closing.text}</span>{" "}
        <Link href={`/${locale}/contact`} className={styles.closingLink}>
          {t.closing.link} <span className={styles.arrow} aria-hidden="true">→</span>
        </Link>
      </p>
    </section>
  );
}
