import { defaultLocale, isBlogPath, locales, blogLocales, singleLocalePages, type Locale } from './config';
import { esBlog } from './es-blog';
import { allTranslations, type Translations } from './translations';

export const BASE_URL = 'https://webbinghub.io';

/** Marketing pages exist in English and Romanian. Spanish blog chrome falls back here. */
export function marketingLocale(locale: string): Locale {
  return locale === 'ro' ? 'ro' : 'en';
}

export function getTranslations(locale: string): Translations {
  if (locale === 'es') {
    const en = allTranslations.en;
    return {
      ...en,
      pages: { ...en.pages, blog: esBlog },
    };
  }
  return allTranslations[(locale as Locale)] ?? allTranslations[defaultLocale];
}

/** Link to a page in the given locale, or in its only language if it has just one. */
export function localizedHref(locale: string, path: string) {
  return `/${singleLocalePages[path] ?? locale}${path}`;
}

/**
 * Document title with the brand once.
 * Absolute, so a layout template cannot append "| WebbingHUB" again.
 * A title that already leads with "WebbingHUB |" is left as it is.
 */
export function brandedTitle(title: string): { absolute: string } {
  const base = title.replace(/\s*\|\s*WebbingHUB\s*$/i, "").trim();
  if (/^WebbingHUB\s*\|/.test(base)) return { absolute: base };
  return { absolute: `${base} | WebbingHUB` };
}

export function ogLocaleTag(locale: string) {
  if (locale === 'ro') return 'ro_RO';
  if (locale === 'es') return 'es_ES';
  return 'en_US';
}

/**
 * canonical + hreflang for a page. `path` has no locale prefix ("" for home).
 * Single-language pages point only at their own URL.
 * Blog index and posts alternate en, ro, and es. Everything else stays en and ro.
 */
export function pageAlternates(locale: string, path: string) {
  const only = singleLocalePages[path];
  if (only) {
    const url = `${BASE_URL}/${only}${path}`;
    return { canonical: url, languages: { [only]: url, 'x-default': url } };
  }
  const langs = isBlogPath(path) ? blogLocales : locales;
  const canonicalLocale = (langs as readonly string[]).includes(locale) ? locale : defaultLocale;
  return {
    canonical: `${BASE_URL}/${canonicalLocale}${path}`,
    languages: Object.fromEntries([
      ...langs.map((l) => [l, `${BASE_URL}/${l}${path}`]),
      ['x-default', `${BASE_URL}/${defaultLocale}${path}`],
    ]),
  };
}
