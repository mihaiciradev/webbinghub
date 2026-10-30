import styles from "./AboutSection.module.css";
import type { Translations } from "@/i18n/translations";

export default function AboutSection({ t }: { t: Translations["home"]["about"] }) {
  return (
    <div className={styles.about}>
      <div className="reveal">
        <p className={styles.label}>{t.label}</p>
        <h2 className={styles.heading}>
          {t.heading}<br /><em>{t.headingEm}</em>
        </h2>
      </div>

      <div className={`${styles.body} reveal`}>
        <p>{t.p1}</p>
        <blockquote className={styles.quote}>{t.quote}</blockquote>
        <p>{t.p2}</p>
      </div>
      {/* Stat strip — Magic Stats pattern, across full width below copy */}
      <div className={`${styles.statStrip} reveal`}>
        {t.stats.map(({ num, label }, i) => (
          <div key={label} className={`${styles.statItem} ${i > 0 ? styles.statItemBorder : ""}`}>
            <p className={styles.statNum}>{num}</p>
            <p className={styles.statLabel}>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
