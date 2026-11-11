import styles from "./ServicesSection.module.css";
import type { Translations } from "@/i18n/translations";

export default function ServicesSection({ t }: { t: Translations["home"]["services"] }) {
  return (
    <section className={styles.services} id="services">
      <div className={`${styles.hd} reveal`}>
        <div>
          <p className={styles.label}>{t.label}</p>
          <h2 className={styles.heading}>
            {t.heading1}<br />{t.heading2} <em>{t.headingEm}</em>
          </h2>
        </div>
        <p className={styles.note}>{t.note}</p>
      </div>

      <ol className={styles.list}>
        {t.items.map(({ title, desc }, i) => (
          <li key={title} className={styles.row}>
            <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
            <div className={styles.copy}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.desc}>{desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
