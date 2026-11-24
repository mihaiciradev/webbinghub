import styles from "./ProofSection.module.css";
import type { Translations } from "@/i18n/translations";

export default function ProofSection({
  proof,
}: {
  proof: Translations["home"]["proof"];
}) {
  return (
    <section className={styles.proof}>
      {proof.items.map((item) => (
        <div key={item.name} className={styles.item}>
          <blockquote className={styles.text}>
            {item.paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </blockquote>
          <p className={styles.line}>
            {item.name}, {item.role},{" "}
            {item.companyHref ? (
              <a
                className={styles.company}
                href={item.companyHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.company}
              </a>
            ) : (
              item.company
            )}
            .
          </p>
        </div>
      ))}
    </section>
  );
}
