import styles from "./TestimonialSection.module.css";
import type { Translations } from "@/i18n/translations";

export default function TestimonialSection({ t }: { t: Translations["home"]["testimonial"] }) {
  return (
    <div className={`${styles.testimonial} reveal`}>
      <div className={styles.quoteWrap}>
        <blockquote className={styles.quote}>{t.quote}</blockquote>
        <p className={styles.author}>{t.author}</p>
      </div>

      <div className={styles.numbers}>
        {t.numbers.map(({ num, label }) => (
          <div key={label} className={styles.numItem}>
            <p className={styles.num}>{num}</p>
            <p className={styles.numLabel}>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
