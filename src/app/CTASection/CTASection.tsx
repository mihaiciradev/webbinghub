import styles from "./CTASection.module.css";

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
          <a href="mailto:sales@webbinghub.io" className={styles.row}>
            <div className={styles.rowIcon}>✉️</div>
            <div>
              <p className={styles.rowLabel}>Email us</p>
              <p className={styles.rowVal}>sales@webbinghub.io</p>
            </div>
          </a>

          <div className={styles.row} style={{ cursor: "default" }}>
            <div className={styles.rowIcon}>📞</div>
            <div>
              <p className={styles.rowLabel}>Call us</p>
              <p className={styles.rowVal}>+40 736 394 784</p>
            </div>
          </div>

          <a href="mailto:sales@webbinghub.io" className={styles.btnGold}>
            Start a conversation →
          </a>
        </div>
      </div>
    </section>
  );
}
