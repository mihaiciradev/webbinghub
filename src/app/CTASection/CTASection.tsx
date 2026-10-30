"use client";

import styles from "./CTASection.module.css";
import { trackContactConversion } from "@/lib/gtag";
import type { Translations } from "@/i18n/translations";

export default function CTASection({ t }: { t: Translations["home"]["cta"] }) {
  return (
    <section className={styles.cta} id="contact">
      <div className={styles.inner}>
        <div className="reveal">
          <h2 className={styles.heading}>
            {t.heading1}
            <br />
            {t.heading2} <em>{t.headingEm}</em>
          </h2>
          <p className={styles.sub}>{t.sub}</p>
        </div>

        <div className={`${styles.right} reveal`}>
          <a
            href="mailto:hello@webbinghub.io"
            onClick={trackContactConversion}
            className={styles.row}
          >
            <div className={styles.rowIcon}>✉️</div>
            <div>
              <p className={styles.rowLabel}>{t.email}</p>
              <p className={styles.rowVal}>hello@webbinghub.io</p>
            </div>
          </a>

          <a
            href="tel:+40776394784"
            onClick={trackContactConversion}
            className={styles.row}
          >
            <div className={styles.rowIcon}>📞</div>
            <div>
              <p className={styles.rowLabel}>{t.call}</p>
              <p className={styles.rowVal}>+40 776 394 784</p>
            </div>
          </a>

          <a
            href="https://wa.me/40776394784"
            onClick={trackContactConversion}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.row}
          >
            <div className={styles.rowIcon}>💬</div>
            <div>
              <p className={styles.rowLabel}>{t.message}</p>
              <p className={styles.rowVal}>WhatsApp</p>
            </div>
          </a>

          <a
            href="mailto:hello@webbinghub.io"
            onClick={trackContactConversion}
            className={styles.btnGold}
          >
            {t.button}
          </a>
        </div>
      </div>
    </section>
  );
}
