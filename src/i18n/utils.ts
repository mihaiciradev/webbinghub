import { defaultLocale, locales, singleLocalePages, type Locale } from './config';
import { allTranslations } from './translations';

export const BASE_URL = 'https://webbinghub.io';

export function getTranslations(locale: string) {
  return allTranslations[(locale as Locale)] ?? allTranslations[defaultLocale];
}

/** Link to a page in the given locale, or in its only language if it has just one. */
export function localizedHref(locale: Locale, path: string) {
  return `/${singleLocalePages[path] ?? locale}${path}`;
}

/**
 * canonical + hreflang for a page. `path` has no locale prefix ("" for home).
 * Single-language pages point only at their own URL.
 */
export function pageAlternates(locale: Locale, path: string) {
  const only = singleLocalePages[path];
  if (only) {
    const url = `${BASE_URL}/${only}${path}`;
    return { canonical: url, languages: { [only]: url, 'x-default': url } };
  }
  return {
    canonical: `${BASE_URL}/${locale}${path}`,
    languages: Object.fromEntries([
      ...locales.map((l) => [l, `${BASE_URL}/${l}${path}`]),
      ['x-default', `${BASE_URL}/${defaultLocale}${path}`],
    ]),
  };
}
