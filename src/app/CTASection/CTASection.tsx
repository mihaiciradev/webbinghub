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
            href="https://www.youtube.com/@WEBBINGHUB"
            onClick={trackContactConversion}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.row}
          >
            <div className={styles.rowIcon}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b8975a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22.5 7.2a2.7 2.7 0 0 0-1.9-1.9C18.9 4.8 12 4.8 12 4.8s-6.9 0-8.6.5A2.7 2.7 0 0 0 1.5 7.2 28 28 0 0 0 1 12a28 28 0 0 0 .5 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 23 12a28 28 0 0 0-.5-4.8z" />
                <polygon points="10 15.2 15.2 12 10 8.8" />
              </svg>
            </div>
            <div>
              <p className={styles.rowLabel}>{t.youtube}</p>
              <p className={styles.rowVal}>@WEBBINGHUB</p>
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
