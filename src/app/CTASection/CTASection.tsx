"use client";

import styles from "./CTASection.module.css";
import { trackContactConversion } from "@/lib/gtag";

export default function CTASection() {
  return (
    <section className={styles.cta} id="contact">
      <div className={styles.inner}>
        <div className="reveal">
          <h2 className={styles.heading}>
            Let&apos;s talk about<br />what you <em>actually need.</em>
          </h2>
          <p className={styles.sub}>
            No pressure, no pitch. Just an honest conversation about your
            business and whether we&apos;re the right fit to help you build
            what you need online.
          </p>
        </div>

        <div className={`${styles.right} reveal`}>
          <a href="mailto:hello@webbinghub.io" onClick={trackContactConversion} className={styles.row}>
            <div className={styles.rowIcon}>✉️</div>
            <div>
              <p className={styles.rowLabel}>Email us</p>
              <p className={styles.rowVal}>hello@webbinghub.io</p>
            </div>
          </a>

          <a href="tel:+40736394784" onClick={trackContactConversion} className={styles.row}>
            <div className={styles.rowIcon}>📞</div>
            <div>
              <p className={styles.rowLabel}>Call us</p>
              <p className={styles.rowVal}>+40 736 394 784</p>
            </div>
          </a>

          <a href="https://wa.me/40736394784" onClick={trackContactConversion} target="_blank" rel="noopener noreferrer" className={styles.row}>
            <div className={styles.rowIcon}>💬</div>
            <div>
              <p className={styles.rowLabel}>Message us</p>
              <p className={styles.rowVal}>WhatsApp</p>
            </div>
          </a>

          <a href="mailto:hello@webbinghub.io" onClick={trackContactConversion} className={styles.btnGold}>
            Start a conversation →
          </a>
        </div>
      </div>
    </section>
  );
}
