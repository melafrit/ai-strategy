/**
 * Translations table.
 *
 * Phase 3 scope: minimum strings to make the scaffold work end-to-end:
 *  - header / footer / language switcher
 *  - skip link, breadcrumb generic
 *  - placeholder home content
 *  - 404 page
 *  - independence notice (signature component)
 *  - source-tag labels (signature component)
 *
 * Phase 4 will add module-level, case-level, glossary, FAQ etc.
 */

import type { Locale } from './locales';

export type TranslationKey = keyof typeof translations.fr;

export const translations = {
  fr: {
    /* === Site identity === */
    'site.name': 'AI Strategy',
    'site.tagline': "Décider, gouverner et déployer l'IA dans votre organisation",
    'site.surtitle': 'Inspiré du programme MIT Sloan',

    /* === Navigation === */
    'nav.home': 'Accueil',
    'nav.program': 'Programme',
    'nav.modules': 'Modules',
    'nav.cases': 'Cas',
    'nav.resources': 'Ressources',
    'nav.capstone': 'Capstone',
    'nav.glossary': 'Glossaire',
    'nav.faq': 'FAQ',
    'nav.method': 'Méthode',
    'nav.about': 'À propos',
    'nav.menu.open': 'Ouvrir le menu',
    'nav.menu.close': 'Fermer le menu',

    /* === Skip link & accessibility === */
    'a11y.skip-to-main': 'Aller au contenu principal',
    'a11y.skip-to-toc': 'Aller au sommaire',
    'a11y.external-link': 'lien externe, nouvel onglet',
    'a11y.lang-switcher.label': 'Choisir la langue',

    /* === Language switcher === */
    'language.fr': 'Français',
    'language.en': 'English',
    'language.ar': 'العربية',

    /* === Independence notice === */
    'independence.short': 'Site indépendant. Non affilié à MIT.',
    'independence.full':
      'Site pédagogique indépendant. Non affilié, non validé et non certifié par MIT, MIT Sloan ou MIT CSAIL.',
    'independence.learn-more': 'En savoir plus sur la méthode',

    /* === Source tag === */
    'source.official-mit': 'Source officielle MIT',
    'source.recommended-complement': 'Complément recommandé',
    'source.pedagogical-reconstruction': 'Reconstruction pédagogique',
    'source.external-verifiable': 'Source externe vérifiable',
    'source.to-verify': 'À vérifier',
    'source.see-source': 'Voir la source',
    'source.accessed-on': 'Consulté le',

    /* === Home placeholder === */
    'home.placeholder.title': 'Bienvenue',
    'home.placeholder.lead':
      "Le site est en construction. Le contenu pédagogique arrive en Phase 4. Vous pouvez consulter l'avancement sur GitHub.",
    'home.placeholder.cta-github': 'Voir le repository',
    'home.placeholder.cta-docs': 'Lire la documentation',

    /* === Footer === */
    'footer.licenses.title': 'Licences',
    'footer.licenses.code': 'Code source : licence MIT',
    'footer.licenses.content': 'Contenu : licence CC BY-NC-SA 4.0',
    'footer.legal.title': 'Mentions',
    'footer.legal.method': 'Méthode',
    'footer.legal.legal': 'Mentions légales',
    'footer.legal.changelog': 'Journal des modifications',
    'footer.legal.github': 'GitHub',
    'footer.copyright': '© {year} Mohamed El Afrit · Site pédagogique indépendant',
    'footer.last-updated': 'Dernière mise à jour',

    /* === 404 === */
    '404.title': 'Page introuvable',
    '404.lead': "La page que vous cherchez n'existe pas ou a été déplacée.",
    '404.cta-home': "Revenir à l'accueil",
  },

  en: {
    'site.name': 'AI Strategy',
    'site.tagline': 'Decide, govern and deploy AI in your organization',
    'site.surtitle': 'Inspired by the MIT Sloan program',

    'nav.home': 'Home',
    'nav.program': 'Program',
    'nav.modules': 'Modules',
    'nav.cases': 'Cases',
    'nav.resources': 'Resources',
    'nav.capstone': 'Capstone',
    'nav.glossary': 'Glossary',
    'nav.faq': 'FAQ',
    'nav.method': 'Method',
    'nav.about': 'About',
    'nav.menu.open': 'Open menu',
    'nav.menu.close': 'Close menu',

    'a11y.skip-to-main': 'Skip to main content',
    'a11y.skip-to-toc': 'Skip to table of contents',
    'a11y.external-link': 'external link, new tab',
    'a11y.lang-switcher.label': 'Choose language',

    'language.fr': 'Français',
    'language.en': 'English',
    'language.ar': 'العربية',

    'independence.short': 'Independent site. Not affiliated with MIT.',
    'independence.full':
      'Independent pedagogical site. Not affiliated with, validated by, or certified by MIT, MIT Sloan, or MIT CSAIL.',
    'independence.learn-more': 'Learn more about the method',

    'source.official-mit': 'Official MIT source',
    'source.recommended-complement': 'Recommended complement',
    'source.pedagogical-reconstruction': 'Pedagogical reconstruction',
    'source.external-verifiable': 'Verifiable external source',
    'source.to-verify': 'To verify',
    'source.see-source': 'See source',
    'source.accessed-on': 'Accessed on',

    'home.placeholder.title': 'Welcome',
    'home.placeholder.lead':
      'The site is under construction. Pedagogical content arrives in Phase 4. You can track progress on GitHub.',
    'home.placeholder.cta-github': 'View the repository',
    'home.placeholder.cta-docs': 'Read the documentation',

    'footer.licenses.title': 'Licenses',
    'footer.licenses.code': 'Source code: MIT license',
    'footer.licenses.content': 'Content: CC BY-NC-SA 4.0 license',
    'footer.legal.title': 'Legal',
    'footer.legal.method': 'Method',
    'footer.legal.legal': 'Legal notice',
    'footer.legal.changelog': 'Changelog',
    'footer.legal.github': 'GitHub',
    'footer.copyright': '© {year} Mohamed El Afrit · Independent pedagogical site',
    'footer.last-updated': 'Last updated',

    '404.title': 'Page not found',
    '404.lead': 'The page you are looking for does not exist or has been moved.',
    '404.cta-home': 'Back to home',
  },

  ar: {
    'site.name': 'AI Strategy',
    'site.tagline': 'اتخذ القرار، احكم، وانشر الذكاء الاصطناعي في مؤسستك',
    'site.surtitle': 'مستوحى من برنامج MIT Sloan',

    'nav.home': 'الرئيسية',
    'nav.program': 'البرنامج',
    'nav.modules': 'الوحدات',
    'nav.cases': 'الحالات',
    'nav.resources': 'الموارد',
    'nav.capstone': 'المشروع الختامي',
    'nav.glossary': 'القاموس',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.method': 'المنهجية',
    'nav.about': 'حول',
    'nav.menu.open': 'فتح القائمة',
    'nav.menu.close': 'إغلاق القائمة',

    'a11y.skip-to-main': 'الانتقال إلى المحتوى الرئيسي',
    'a11y.skip-to-toc': 'الانتقال إلى جدول المحتويات',
    'a11y.external-link': 'رابط خارجي، علامة تبويب جديدة',
    'a11y.lang-switcher.label': 'اختر اللغة',

    'language.fr': 'Français',
    'language.en': 'English',
    'language.ar': 'العربية',

    'independence.short': 'موقع مستقل. غير منتسب إلى MIT.',
    'independence.full':
      'موقع تربوي مستقل. غير منتسب ولا معتمد ولا مصدّق من MIT أو MIT Sloan أو MIT CSAIL.',
    'independence.learn-more': 'تعرف أكثر على المنهجية',

    'source.official-mit': 'مصدر رسمي من MIT',
    'source.recommended-complement': 'مكمل موصى به',
    'source.pedagogical-reconstruction': 'إعادة بناء تربوية',
    'source.external-verifiable': 'مصدر خارجي قابل للتحقق',
    'source.to-verify': 'بحاجة للتحقق',
    'source.see-source': 'انظر المصدر',
    'source.accessed-on': 'تم الاطلاع في',

    'home.placeholder.title': 'مرحباً',
    'home.placeholder.lead':
      'الموقع قيد الإنشاء. المحتوى التربوي يصل في المرحلة 4. يمكنك متابعة التقدّم على GitHub.',
    'home.placeholder.cta-github': 'عرض المستودع',
    'home.placeholder.cta-docs': 'قراءة الوثائق',

    'footer.licenses.title': 'الرخص',
    'footer.licenses.code': 'الشيفرة المصدرية: رخصة MIT',
    'footer.licenses.content': 'المحتوى: رخصة CC BY-NC-SA 4.0',
    'footer.legal.title': 'إشعارات',
    'footer.legal.method': 'المنهجية',
    'footer.legal.legal': 'إشعارات قانونية',
    'footer.legal.changelog': 'سجل التغييرات',
    'footer.legal.github': 'GitHub',
    'footer.copyright': '© {year} محمد العفريت · موقع تربوي مستقل',
    'footer.last-updated': 'آخر تحديث',

    '404.title': 'الصفحة غير موجودة',
    '404.lead': 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
    '404.cta-home': 'العودة إلى الرئيسية',
  },
} as const;

/**
 * Translate a key into the given locale.
 * If a key is missing for a given locale, falls back to French.
 */
export function t(key: TranslationKey, locale: Locale): string {
  const dict = translations[locale] ?? translations.fr;
  // The `as Record<...>` cast is safe because every locale dict shares the same shape.
  return (dict as Record<TranslationKey, string>)[key] ?? translations.fr[key];
}

/**
 * Replace `{var}` placeholders in a translated string.
 *   tFormat(t('footer.copyright', 'fr'), { year: '2026' })
 *     → "© 2026 Mohamed El Afrit · Site pédagogique indépendant"
 */
export function tFormat(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, name: string) => {
    const value = vars[name];
    return value === undefined ? match : String(value);
  });
}
