import { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import EmailUs from "@/components/EmailUs/EmailUs";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with WebbingHUB. Whether you need a website or just want to explore the idea — let's have a chat.",
  alternates: { canonical: "https://webbinghub.io/contact" },
  openGraph: {
    title: "Contact | WebbingHUB",
    description: "Let's have a chat. No pressure, no pitch.",
    url: "https://webbinghub.io/contact",
  },
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>

        {/* ── Left — copy + contact methods ──────── */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>Get in touch</p>
          <h1 className={styles.title}>
            Let&apos;s have<br /><em>a chat.</em>
          </h1>
          <p className={styles.desc}>
            Maybe you need a website, maybe you don&apos;t. Maybe it has to
            be a complex one, maybe not. Let&apos;s discuss and decide
            together what suits you best — no pressure, no pitch.
          </p>

          <div className={styles.contacts}>
            <Link
              href="https://www.linkedin.com/company/webbinghub"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactRow}
            >
              <span className={styles.contactIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </span>
              <div>
                <p className={styles.contactLabel}>LinkedIn</p>
                <p className={styles.contactVal}>WebbingHUB on LinkedIn</p>
              </div>
            </Link>

            <Link href="mailto:hello@webbinghub.io" className={styles.contactRow}>
              <span className={styles.contactIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <div>
                <p className={styles.contactLabel}>Email</p>
                <p className={styles.contactVal}>hello@webbinghub.io</p>
              </div>
            </Link>

            <Link href="tel:+40736394784" className={styles.contactRow}>
              <span className={styles.contactIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.43 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <div>
                <p className={styles.contactLabel}>Phone</p>
                <p className={styles.contactVal}>+40 736 394 784</p>
              </div>
            </Link>
          </div>
        </div>

        {/* ── Right — email form ──────────────────── */}
        <div className={styles.right}>
          <div className={styles.formBox}>
            <p className={styles.formTitle}>
              Drop your email — we&apos;ll reach out within 24h.
            </p>
            <EmailUs label="Your email address" />
          </div>
        </div>

      </div>
    </main>
  );
}
