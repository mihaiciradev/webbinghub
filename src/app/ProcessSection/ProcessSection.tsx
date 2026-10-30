import styles from "./ProcessSection.module.css";
import type { Translations } from "@/i18n/translations";

export default function ProcessSection({ t }: { t: Translations["home"]["process"] }) {
  return (
    <section className={styles.process} id="process">
      <div className={styles.top}>
        <div className="reveal">
          <p className={styles.label}>{t.label}</p>
          <h2 className={styles.heading}>
            {t.heading1}<br />{t.heading2} <em>{t.headingEm}</em>
          </h2>
        </div>
        <p className={`${styles.intro} reveal`}>{t.intro}</p>
      </div>

      <div className={`${styles.steps} process-steps`}>
        {t.steps.map(({ title, desc }, i) => {
          const num = String(i + 1).padStart(2, "0");
          return (
            <div key={num} className={`${styles.step} reveal`} data-num={num}>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepDesc}>{desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
