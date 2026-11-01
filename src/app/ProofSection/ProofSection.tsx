import Link from "next/link";
import styles from "./ProofSection.module.css";
import type { Locale } from "@/i18n/config";
import type { Translations } from "@/i18n/translations";

export default function ProofSection({
  locale,
  proof,
  founder,
}: {
  locale: Locale;
  proof: Translations["home"]["proof"];
  founder: Translations["home"]["founder"];
}) {
  return (
    <section className={styles.proof}>
      <p className={styles.text}>{proof.text}</p>
      <p className={styles.line}>
        <Link href={`/${locale}/about`}>Mihai Cîra</Link>
        {`, ${founder.role}. `}
        <a href="https://www.linkedin.com/in/mihaicira/" target="_blank" rel="noopener noreferrer">
          {founder.linkedin}
        </a>
      </p>
    </section>
  );
}
