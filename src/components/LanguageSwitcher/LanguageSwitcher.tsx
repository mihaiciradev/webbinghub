"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, singleLocalePages, type Locale } from "@/i18n/config";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher({
  currentLocale,
  dark = false,
}: {
  currentLocale: Locale;
  dark?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchLocale = (locale: Locale) => {
    // Replace current locale prefix with new one
    let path = pathname.replace(/^\/[a-z]{2}(\/|$)/, "/").replace(/\/$/, "");
    // Page not available in that language (e.g. an English-only post) → nearest parent that is
    while (path && singleLocalePages[path] && singleLocalePages[path] !== locale) {
      path = path.slice(0, path.lastIndexOf("/"));
    }
    router.push(`/${locale}${path}`);
    setOpen(false);
  };

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${dark ? styles.dark : ""}`}
    >
      <button
        className={styles.trigger}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {/* Globe icon */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className={styles.code}>{currentLocale.toUpperCase()}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${styles.chevron} ${open ? styles.open : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <ul className={styles.dropdown} role="listbox">
          {locales.map((locale) => (
            <li key={locale} role="option" aria-selected={locale === currentLocale}>
              <button
                className={`${styles.option} ${locale === currentLocale ? styles.active : ""}`}
                onClick={() => switchLocale(locale)}
              >
                {localeNames[locale]}
                {locale === currentLocale && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
