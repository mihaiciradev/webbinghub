import { defaultLocale, type Locale } from './config';
import { allTranslations } from './translations';

export function getTranslations(locale: string) {
  return allTranslations[(locale as Locale)] ?? allTranslations[defaultLocale];
}
