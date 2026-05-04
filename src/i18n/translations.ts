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
    'nav.podcasts': 'Podcasts',
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

    /* === Translation pending (for EN/AR stubs while content is FR-only) === */
    'translation-pending.title': 'Traduction en cours',
    'translation-pending.lead':
      "Cette page est complète en français. Sa traduction dans cette langue est en cours dans le cadre de la Phase 7 du projet. Vous pouvez consulter dès maintenant la version française intégrale.",
    'translation-pending.cta-fr': 'Lire en français',
    'translation-pending.cta-home': "Revenir à l'accueil",

    /* === Audiences (home page) === */
    'audiences.title': "À qui s'adresse ce site",
    'audiences.executive.label': 'Dirigeants et top management',
    'audiences.executive.description':
      'Synthèses exécutives, board memos, gouvernance, capstone — pour cadrer une stratégie IA en COMEX.',
    'audiences.executive.cta': 'Voir le capstone',
    'audiences.consultant.label': 'Consultants et transformation',
    'audiences.consultant.description':
      'Templates, matrices, études de cas sectorielles, fiches PDF — pour préparer une mission client.',
    'audiences.consultant.cta': 'Voir les ressources',
    'audiences.educator.label': 'Enseignants et étudiants',
    'audiences.educator.description':
      'Quiz, glossaire, rubrics, références sourcées — pour bâtir un cours ou un mémoire.',
    'audiences.educator.cta': 'Voir les modules',

    /* === Module preview cards (home page) === */
    'modules.preview.title': 'Aperçu des six modules',
    'modules.preview.lead': 'Six modules pour décider, déployer et gouverner l\'IA.',
    'modules.module-1.title': 'Introduction à l\'IA',
    'modules.module-1.summary': 'Définir l\'IA, retracer son histoire, comprendre l\'intelligence collective.',
    'modules.module-2.title': 'Machine Learning en entreprise',
    'modules.module-2.summary': 'Décider quand le ML soutient une stratégie de coût, différenciation ou focalisation.',
    'modules.module-3.title': 'IA Générative en entreprise',
    'modules.module-3.summary': 'Identifier les cas d\'usage, décomposer les workflows, lancer des pilotes.',
    'modules.module-4.title': 'Robotique en entreprise',
    'modules.module-4.summary': 'Évaluer la pertinence stratégique de l\'automatisation physique.',
    'modules.module-5.title': 'IA dans l\'entreprise et la société',
    'modules.module-5.summary': 'Gouvernance, éthique, conformité, impact sur le travail et les compétences.',
    'modules.module-6.title': 'Futur de l\'IA',
    'modules.module-6.summary': 'Construire une roadmap IA crédible et anticiper les évolutions.',

    /* === Trust bar (home page) === */
    'trust.independence': 'Indépendance MIT',
    'trust.sources': 'Sources hiérarchisées',
    'trust.trilingual': 'Trilingue FR · EN · AR',
    'trust.licence': 'Licence ouverte CC BY-NC-SA',

    /* === Generic CTAs === */
    'cta.discover-program': 'Découvrir le programme',
    'cta.see-modules': 'Voir tous les modules',
    'cta.read-method': 'Lire la méthode',
    'cta.about-us': 'À propos',
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
    'nav.podcasts': 'Podcasts',
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

    'translation-pending.title': 'Translation in progress',
    'translation-pending.lead':
      'This page is complete in French. Its English translation is in progress as part of Phase 7 of the project. You can read the full French version right now using the link below.',
    'translation-pending.cta-fr': 'Read in French',
    'translation-pending.cta-home': 'Back to home',

    'audiences.title': 'Who this site is for',
    'audiences.executive.label': 'Executives and top management',
    'audiences.executive.description':
      'Executive summaries, board memos, governance, capstone — to frame an AI strategy at C-suite.',
    'audiences.executive.cta': 'See the capstone',
    'audiences.consultant.label': 'Consultants and transformation leaders',
    'audiences.consultant.description':
      'Templates, matrices, sectoral case studies, PDF handouts — to prepare a client engagement.',
    'audiences.consultant.cta': 'See resources',
    'audiences.educator.label': 'Educators and students',
    'audiences.educator.description':
      'Quizzes, glossary, rubrics, sourced references — to build a course or a thesis.',
    'audiences.educator.cta': 'See modules',

    'modules.preview.title': 'The six modules at a glance',
    'modules.preview.lead': 'Six modules to decide, deploy and govern AI.',
    'modules.module-1.title': 'Introduction to AI',
    'modules.module-1.summary': 'Define AI, trace its history, understand collective intelligence.',
    'modules.module-2.title': 'Machine Learning in Business',
    'modules.module-2.summary': 'Decide when ML supports cost, differentiation or focus strategies.',
    'modules.module-3.title': 'Generative AI in Business',
    'modules.module-3.summary': 'Identify use cases, decompose workflows, launch pilots.',
    'modules.module-4.title': 'Robotics in Business',
    'modules.module-4.summary': 'Evaluate the strategic relevance of physical automation.',
    'modules.module-5.title': 'AI in Business and Society',
    'modules.module-5.summary': 'Governance, ethics, compliance, impact on work and skills.',
    'modules.module-6.title': 'The Future of AI',
    'modules.module-6.summary': 'Build a credible AI roadmap and anticipate developments.',

    'trust.independence': 'MIT independence',
    'trust.sources': 'Hierarchical sources',
    'trust.trilingual': 'Trilingual FR · EN · AR',
    'trust.licence': 'Open license CC BY-NC-SA',

    'cta.discover-program': 'Discover the program',
    'cta.see-modules': 'See all modules',
    'cta.read-method': 'Read the method',
    'cta.about-us': 'About',
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
    'nav.podcasts': 'بودكاست',
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

    'translation-pending.title': 'الترجمة قيد الإعداد',
    'translation-pending.lead':
      'هذه الصفحة كاملة بالفرنسية. الترجمة العربية جارية ضمن المرحلة 7 من المشروع. يمكنك قراءة النسخة الفرنسية الكاملة الآن عبر الرابط أدناه.',
    'translation-pending.cta-fr': 'القراءة بالفرنسية',
    'translation-pending.cta-home': 'العودة إلى الرئيسية',

    'audiences.title': 'لمن هذا الموقع',
    'audiences.executive.label': 'القيادات والإدارة العليا',
    'audiences.executive.description':
      'ملخصات تنفيذية، مذكرات مجلس الإدارة، حوكمة، مشروع ختامي — لتأطير استراتيجية ذكاء اصطناعي على مستوى تنفيذي.',
    'audiences.executive.cta': 'مشاهدة المشروع الختامي',
    'audiences.consultant.label': 'المستشارون وقادة التحوّل',
    'audiences.consultant.description':
      'قوالب، مصفوفات، دراسات حالة قطاعية، ملفات PDF — لإعداد مهمة استشارية.',
    'audiences.consultant.cta': 'مشاهدة الموارد',
    'audiences.educator.label': 'المعلّمون والطلاب',
    'audiences.educator.description':
      'اختبارات، قاموس، شبكات تقييم، مراجع موثّقة — لبناء مقرّر أو أطروحة.',
    'audiences.educator.cta': 'مشاهدة الوحدات',

    'modules.preview.title': 'نظرة على الوحدات الست',
    'modules.preview.lead': 'ست وحدات لاتخاذ القرار، النشر، والحوكمة في الذكاء الاصطناعي.',
    'modules.module-1.title': 'مقدمة في الذكاء الاصطناعي',
    'modules.module-1.summary': 'تعريف الذكاء الاصطناعي، تتبّع تاريخه، فهم الذكاء الجماعي.',
    'modules.module-2.title': 'تعلّم الآلة في الأعمال',
    'modules.module-2.summary': 'تحديد متى يدعم تعلّم الآلة استراتيجيات التكلفة أو التمييز أو التركيز.',
    'modules.module-3.title': 'الذكاء التوليدي في الأعمال',
    'modules.module-3.summary': 'تحديد حالات الاستخدام، تفكيك سير العمل، إطلاق التجارب.',
    'modules.module-4.title': 'الروبوتيات في الأعمال',
    'modules.module-4.summary': 'تقييم الأهمية الاستراتيجية للأتمتة الفيزيائية.',
    'modules.module-5.title': 'الذكاء الاصطناعي في الأعمال والمجتمع',
    'modules.module-5.summary': 'الحوكمة، الأخلاقيات، الامتثال، التأثير على العمل والمهارات.',
    'modules.module-6.title': 'مستقبل الذكاء الاصطناعي',
    'modules.module-6.summary': 'بناء خارطة طريق ذكاء اصطناعي موثوقة وتوقّع التطوّرات.',

    'trust.independence': 'استقلالية عن MIT',
    'trust.sources': 'مصادر متدرّجة',
    'trust.trilingual': 'ثلاثي اللغات FR · EN · AR',
    'trust.licence': 'رخصة مفتوحة CC BY-NC-SA',

    'cta.discover-program': 'اكتشف البرنامج',
    'cta.see-modules': 'مشاهدة كل الوحدات',
    'cta.read-method': 'اقرأ المنهجية',
    'cta.about-us': 'حول',
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
