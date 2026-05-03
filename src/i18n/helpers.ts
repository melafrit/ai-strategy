/**
 * i18n helper functions.
 *
 * Used by layouts and components to derive the current locale from the URL,
 * generate cross-locale links (for the language switcher), and look up
 * directional metadata.
 */

import { DEFAULT_LOCALE, LOCALE_METADATA, LOCALES, isLocale, type Locale } from './locales';

/**
 * Extract the locale from an Astro URL pathname.
 * Examples:
 *   "/fr/programme/"            → "fr"
 *   "/en/cas/morgan-stanley/"   → "en"
 *   "/"                         → DEFAULT_LOCALE
 */
export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (first && isLocale(first)) return first;
  return DEFAULT_LOCALE;
}

/**
 * Strip the locale prefix from a pathname, returning the language-agnostic
 * portion of the URL.
 *
 * "/fr/cas/morgan-stanley-genai/"  → "/cas/morgan-stanley-genai/"
 * "/en/"                           → "/"
 * "/"                              → "/"
 */
export function stripLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] && isLocale(segments[0])) {
    segments.shift();
  }
  const joined = segments.join('/');
  return joined ? `/${joined}/` : '/';
}

/**
 * Build a localized URL for a given language-agnostic path.
 *
 * getLocalizedUrl("/cas/morgan-stanley-genai/", "ar")
 *   → "/ar/cas/morgan-stanley-genai/"
 */
export function getLocalizedUrl(path: string, locale: Locale): string {
  // Normalize: ensure leading slash, ensure trailing slash.
  let normalized = path.startsWith('/') ? path : `/${path}`;
  if (!normalized.endsWith('/')) normalized += '/';
  // Strip an existing locale prefix if present, then re-prefix.
  normalized = stripLocale(normalized);
  return `/${locale}${normalized === '/' ? '/' : normalized}`;
}

/**
 * Compute the alternate URLs for the same content in each locale.
 * Used to produce <link rel="alternate" hreflang="..."> tags.
 */
export function getAllLocalizedUrls(pathname: string): Record<Locale, string> {
  const stripped = stripLocale(pathname);
  return Object.fromEntries(
    LOCALES.map((loc) => [loc, getLocalizedUrl(stripped, loc)]),
  ) as Record<Locale, string>;
}

/** Get the writing direction for a locale. */
export function getDirection(locale: Locale): 'ltr' | 'rtl' {
  return LOCALE_METADATA[locale].direction;
}

/** Get the HTML lang attribute value for a locale. */
export function getHtmlLang(locale: Locale): string {
  return LOCALE_METADATA[locale].htmlLang;
}
