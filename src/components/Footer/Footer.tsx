"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import fullLogoGold from "@/new/full_logo_gold.svg";
import type { BlogLocale } from "@/i18n/config";
import type { Translations } from "@/i18n/translations";
import { trackContactConversion } from "@/lib/gtag";
import { localizedHref, marketingLocale } from "@/i18n/utils";
import FooterEmail from "./FooterEmail";

interface FooterProps {
  locale: BlogLocale;
  t: Translations["footer"];
}

export default function Footer({ locale, t }: FooterProps) {
  const site = marketingLocale(locale);
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
          <p className={styles.contact}>
            <a
              href="https://www.youtube.com/@WEBBINGHUB"
              onClick={trackContactConversion}
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </p>

          <FooterEmail label={t.emailPrompt} />
        </div>

        {/* Navigation col */}
        <div>
          <p className={styles.colTitle}>{t.navTitle}</p>
          <ul className={styles.colLinks}>
            <li>
              <Link href={`/${site}`}>{t.home}</Link>
            </li>
            <li>
              <Link href={`/${site}/#services`}>{t.services}</Link>
            </li>
            <li>
              <Link href={`/${site}/#process`}>{t.howItWorks}</Link>
            </li>
            <li>
              <Link href={`/${site}/about`}>{t.about}</Link>
            </li>
            <li>
              <Link href={`/${locale}/blog`}>{t.blog}</Link>
            </li>
            <li>
              <Link href={localizedHref(site, "/privacy-policy")}>{t.privacy}</Link>
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

      <div className={styles.legal}>
        <p>Societate: WEBBINGHUB S.R.L. · Cod de identificare: RO49317150 · Registrul comerțului: J2023004928352</p>
        <p>Sediu social: Str. Gheorghe Lazăr, nr. 34, Timișoara · support@webbinghub.io · +40 776 394 784</p>
      </div>

      <div className={styles.bottom}>
        <span>© 2026 WebbingHUB. {t.copy} · {t.location}</span>
        <span>webbinghub.io</span>
      </div>
    </footer>
  );
}
