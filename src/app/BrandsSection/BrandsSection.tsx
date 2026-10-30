import styles from "./BrandsSection.module.css";
import type { Translations } from "@/i18n/translations";

export default function BrandsSection({ t }: { t: Translations["home"]["brands"] }) {
  return (
    <section className={styles.brands}>
      <div className={`${styles.hd} reveal`}>
        <div>
          <p className={styles.label}>{t.label}</p>
          <h2 className={styles.heading}>
            {t.heading} <em>{t.headingEm}</em>
          </h2>
        </div>
      </div>

      <div className={`${styles.grid} brands-grid`}>
        {/* Travel card */}
        <div className={`${styles.card} reveal`}>
          <div className={styles.cardBar} />
          <div className={styles.cardBody}>
            <span className={`${styles.pill} ${styles.pillLive}`}>
              <span className={styles.pillDot} /> {t.live}
            </span>
            <p className={styles.cardName}>TRAVEL</p>
            <p className={styles.cardByline}>by WebbingHUB</p>
            <p className={styles.cardSub}>{t.travel.sub}</p>
            <p className={styles.cardDesc}>{t.travel.desc}</p>
            <div className={styles.tags}>
              {t.travel.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <a href="https://travel.webbinghub.io/" className={styles.link} target="_blank" rel="noopener noreferrer">
              {t.travel.link}
            </a>
          </div>
        </div>

        {/* APETIT card */}
        <div className={`${styles.card} reveal`}>
          <div className={styles.cardBar} />
          <div className={styles.cardBody}>
            <span className={`${styles.pill} ${styles.pillLive}`}>
              <span className={styles.pillDot} /> {t.live}
            </span>
            <p className={styles.cardName}>APETIT</p>
            <p className={styles.cardByline}>by WebbingHUB</p>
            <p className={styles.cardSub}>{t.apetit.sub}</p>
            <p className={styles.cardDesc}>{t.apetit.desc}</p>
            <div className={styles.tags}>
              {t.apetit.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <a href="https://apetit.webbinghub.io" className={styles.link} target="_blank" rel="noopener noreferrer">
              {t.apetit.link}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
