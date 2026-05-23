import styles from "./TrustBar.module.css";
import type { Translations } from "@/i18n/translations";

const CHECK = (
  <svg viewBox="0 0 10 10" fill="none" width={10} height={10}>
    <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function TrustBar({ t }: { t: Translations["trustBar"] }) {
  return (
    <div className={`${styles.bar} reveal`}>
      <span className={styles.intro}>{t.intro}</span>
      <div className={`${styles.items} trust-items`}>
        {t.items.map((text) => (
          <div key={text} className={`${styles.item} reveal`}>
            <span className={styles.check}>{CHECK}</span>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
