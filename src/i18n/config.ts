export const locales = ['en', 'ro'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** Blog index and posts. Spanish is not a marketing-site language. */
export const blogLocales = ['en', 'ro', 'es'] as const;
export type BlogLocale = (typeof blogLocales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ro: 'Română',
};

export const blogLocaleNames: Record<BlogLocale, string> = {
  en: 'English',
  ro: 'Română',
  es: 'Español',
};

/** Button codes. Spanish reads ESP; the URL prefix stays /es. */
export const localeCodes: Record<BlogLocale, string> = {
  en: 'EN',
  ro: 'RO',
  es: 'ESP',
};

// Languages that used to exist; their URLs redirect permanently to the default locale.
// Spanish is not retired: /es/blog is served, and other /es paths redirect.
export const retiredLocales = ['fr', 'de'] as const;

export function isBlogPath(path: string) {
  return path === '/blog' || path.startsWith('/blog/');
}

export function isBlogLocale(value: string): value is BlogLocale {
  return (blogLocales as readonly string[]).includes(value);
}

// Pages that exist in one language only (path without locale prefix → its language).
// Other prefixes redirect to it, and it gets no hreflang alternates.
export const singleLocalePages: Record<string, Locale> = {
  '/privacy-policy': 'en',
  '/websites-timisoara': 'ro',
  '/websites-bucuresti': 'ro',
  '/websites-romania': 'ro',
};
