"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  locales,
  blogLocales,
  localeNames,
  blogLocaleNames,
  localeCodes,
  singleLocalePages,
  isBlogPath,
  type BlogLocale,
} from "@/i18n/config";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher({
  currentLocale,
  dark = false,
}: {
  currentLocale: BlogLocale;
  dark?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const bare = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "") || "/";
  const onBlog = isBlogPath(bare === "/" ? "" : bare.replace(/\/$/, ""));
  const options: readonly BlogLocale[] = onBlog ? blogLocales : locales;

  const switchLocale = (locale: BlogLocale) => {
    let path = pathname.replace(/^\/[a-z]{2}(\/|$)/, "/").replace(/\/$/, "");
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
        aria-label={blogLocaleNames[currentLocale]}
      >
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
        <span className={styles.code}>{localeCodes[currentLocale]}</span>
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
          {options.map((locale) => (
            <li key={locale} role="option" aria-selected={locale === currentLocale}>
              <button
                className={`${styles.option} ${locale === currentLocale ? styles.active : ""}`}
                onClick={() => switchLocale(locale)}
              >
                {blogLocaleNames[locale] ?? localeNames[locale as keyof typeof localeNames]}
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
