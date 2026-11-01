import styles from "./FaqSection.module.css";
import type { Translations } from "@/i18n/translations";

export default function FaqSection({ t }: { t: Translations["home"]["faq"] }) {
  return (
    <section className={styles.faq} id="faq">
      <p className={styles.label}>{t.label}</p>
      <h2 className={styles.heading}>
        {t.heading} <em>{t.headingEm}</em>
      </h2>
      <div className={styles.list}>
        {t.items.map((item) => (
          <div key={item.q} className={styles.item}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
