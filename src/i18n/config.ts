export const locales = ['en', 'ro'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ro: 'Română',
};

// Languages that used to exist; their URLs redirect permanently to the default locale
export const retiredLocales = ['fr', 'es', 'de'] as const;

// Pages that exist in one language only (path without locale prefix → its language).
// Other prefixes redirect to it, and it gets no hreflang alternates.
export const singleLocalePages: Record<string, Locale> = {
  '/blog/hotel-supplier-api-failure-booking-platform': 'en',
  '/blog/native-connectors-vs-ipaas-vs-custom-integration': 'en',
  '/blog/hotel-price-changed-before-booking': 'en',
  '/blog/how-hard-is-it-to-make-a-website': 'en',
  '/blog/maximize-website-visibility-google-search-console': 'en',
  '/privacy-policy': 'en',
  '/websites-timisoara': 'ro',
  '/websites-bucuresti': 'ro',
  '/websites-romania': 'ro',
};
