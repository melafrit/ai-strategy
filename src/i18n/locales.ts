/**
 * i18n locales configuration.
 *
 * Single source of truth for which locales the site supports.
 * Aligned with `astro.config.mjs` and `docs/architecture/sitemap.md`.
 */

export const LOCALES = ['fr', 'en', 'ar'] as const;
export const DEFAULT_LOCALE = 'fr';

export type Locale = (typeof LOCALES)[number];

export interface LocaleMetadata {
  code: Locale;
  /** Native name as displayed in the language switcher */
  nativeName: string;
  /** Human label used as fallback */
  englishName: string;
  /** HTML lang attribute */
  htmlLang: string;
  /** Writing direction */
  direction: 'ltr' | 'rtl';
  /** ISO date locale used for `Intl.DateTimeFormat` */
  intlLocale: string;
}

export const LOCALE_METADATA: Record<Locale, LocaleMetadata> = {
  fr: {
    code: 'fr',
    nativeName: 'Français',
    englishName: 'French',
    htmlLang: 'fr-FR',
    direction: 'ltr',
    intlLocale: 'fr-FR',
  },
  en: {
    code: 'en',
    nativeName: 'English',
    englishName: 'English',
    htmlLang: 'en-US',
    direction: 'ltr',
    intlLocale: 'en-US',
  },
  ar: {
    code: 'ar',
    nativeName: 'العربية',
    englishName: 'Arabic',
    htmlLang: 'ar',
    direction: 'rtl',
    intlLocale: 'ar',
  },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
