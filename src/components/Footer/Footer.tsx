"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import fullLogoGold from "@/new/full_logo_gold.svg";
import type { Locale } from "@/i18n/config";
import type { Translations } from "@/i18n/translations";
import { trackContactConversion } from "@/lib/gtag";
import { localizedHref } from "@/i18n/utils";
import FooterEmail from "./FooterEmail";

interface FooterProps {
  locale: Locale;
  t: Translations["footer"];
}

export default function Footer({ locale, t }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* Brand col */}
        <div>
          <div className={styles.logos}>
            <Image
              src={fullLogoGold}
              alt="WebbingHUB"
              className={styles.mascotLogo}
            />
          </div>
          <p className={styles.tagline}>{t.tagline}</p>
          <p className={styles.contact}>
            <a
              href="mailto:hello@webbinghub.io"
              onClick={trackContactConversion}
            >
              hello@webbinghub.io
            </a>
          </p>
          <p className={styles.contact}>
            <a href="tel:+40776394784" onClick={trackContactConversion}>
              +40 776 394 784
            </a>
          </p>
          <p className={styles.contact}>
            <a
              href="https://wa.me/40776394784"
              onClick={trackContactConversion}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </p>

          <FooterEmail label={t.emailPrompt} />
        </div>

        {/* Navigation col */}
        <div>
          <p className={styles.colTitle}>{t.navTitle}</p>
          <ul className={styles.colLinks}>
            <li>
              <Link href={`/${locale}`}>{t.home}</Link>
            </li>
            <li>
              <Link href={`/${locale}/#services`}>{t.services}</Link>
            </li>
            <li>
              <Link href={`/${locale}/#process`}>{t.howItWorks}</Link>
            </li>
            <li>
              <Link href={`/${locale}/about`}>{t.about}</Link>
            </li>
            <li>
              <Link href={`/${locale}/blog`}>{t.blog}</Link>
            </li>
            <li>
              <Link href={localizedHref(locale, "/privacy-policy")}>{t.privacy}</Link>
            </li>
          </ul>
        </div>

        {/* Sub-brands col */}
        <div>
          <p className={styles.colTitle}>{t.subBrandsTitle}</p>
          <ul className={styles.colLinks}>
            <li>
              <a
                href="https://travel.webbinghub.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TRAVEL by WebbingHUB
              </a>
            </li>
            <li>
              <a
                href="https://apetit.webbinghub.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                APETIT by WebbingHUB
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2026 WebbingHUB. {t.copy} · {t.location}</span>
        <span>webbinghub.io</span>
      </div>
    </footer>
  );
}
