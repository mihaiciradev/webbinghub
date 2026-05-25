"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import fullLogoGold from "@/new/full_logo_gold.svg";
import type { Locale } from "@/i18n/config";
import type { Translations } from "@/i18n/translations";
import { trackContactConversion } from "@/lib/gtag";

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
            <Image src={fullLogoGold} alt="WebbingHUB" className={styles.mascotLogo} />
          </div>
          <p className={styles.tagline}>{t.tagline}</p>
          <p className={styles.contact}><a href="mailto:sales@webbinghub.io" onClick={trackContactConversion}>sales@webbinghub.io</a></p>
          <p className={styles.contact}>+40 736 394 784</p>
        </div>

        {/* Navigation col */}
        <div>
          <p className={styles.colTitle}>{t.navTitle}</p>
          <ul className={styles.colLinks}>
            <li><Link href={`/${locale}`}>Home</Link></li>
            <li><Link href={`/${locale}/#services`}>Services</Link></li>
            <li><Link href={`/${locale}/#process`}>How it works</Link></li>
            <li><Link href={`/${locale}/about`}>About</Link></li>
            <li><Link href={`/${locale}/blog`}>Blog</Link></li>
            <li><Link href={`/${locale}/privacy-policy`}>Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Sub-brands col */}
        <div>
          <p className={styles.colTitle}>{t.subBrandsTitle}</p>
          <ul className={styles.colLinks}>
            <li><a href="https://travel.webbinghub.io/" target="_blank" rel="noopener noreferrer">TRAVEL by WebbingHUB</a></li>
            <li><span style={{ opacity: 0.4 }}>HORECA by WebbingHUB — soon</span></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2026 WebbingHUB. {t.copy} · Timișoara, Romania</span>
        <span>webbinghub.io</span>
      </div>
    </footer>
  );
}
