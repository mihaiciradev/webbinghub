"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import fullLogoGold from "@/new/full_logo_gold.svg";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import type { Locale } from "@/i18n/config";
import type { Translations } from "@/i18n/translations";

interface HeaderProps {
  locale: Locale;
  t: Translations["nav"];
}

export default function Header({ locale, t }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <Link href={`/${locale}`} className={styles.logo}>
        <Image src={fullLogoGold} alt="WebbingHUB" className={styles.logoImg} priority />
      </Link>

      <ul className={styles.navLinks}>
        <li><Link href={`/${locale}/#services`}>{t.services}</Link></li>
        <li><Link href={`/${locale}/#process`}>{t.howItWorks}</Link></li>
        <li><Link href={`/${locale}/about`}>{t.about}</Link></li>
        <li><Link href={`/${locale}/blog`}>{t.blog}</Link></li>
        <li>
          <a
            href="https://travel.webbinghub.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.travelLink}
          >
            Travel ↗
          </a>
        </li>
      </ul>

      <div className={styles.navRight}>
        <LanguageSwitcher currentLocale={locale} dark={scrolled} />
        <Link href={`/${locale}/#contact`} className={styles.navCta}>
          {t.cta}
        </Link>
      </div>
    </nav>
  );
}
