import styles from "./ProofSection.module.css";
import type { Translations } from "@/i18n/translations";

export default function ProofSection({
  proof,
}: {
  proof: Translations["home"]["proof"];
}) {
  return (
    <section className={styles.proof}>
      <blockquote className={styles.text}>
        {proof.paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </blockquote>
      <p className={styles.line}>
        {proof.name}, {proof.role}, {proof.company}.
      </p>
    </section>
  );
}
