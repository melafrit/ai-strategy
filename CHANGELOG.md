# Changelog

Toutes les modifications notables de ce projet sont documentées dans ce fichier.

Le format suit les conventions de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/),
et le projet adhère au [versionnement sémantique](https://semver.org/lang/fr/).

> Légende des sections :
> `Added` (nouveautés), `Changed` (modifications), `Deprecated` (obsolescence à venir),
> `Removed` (suppressions), `Fixed` (corrections), `Security` (sécurité).

---

## [Unreleased]

### Added
- Initialisation du repository GitHub `melafrit/ai-strategy`.
- Double licence : MIT pour le code (`LICENSE-CODE`), CC BY-NC-SA 4.0 pour le contenu (`LICENSE-CONTENT`).
- README bilingue FR (principal) et EN.
- `.gitignore` Astro-ready.
- Phase 1 — Cadrage et identité :
  - Charte de cadrage consolidant les 10 décisions structurantes.
  - Planning détaillé en 7 phases.
  - Journal des décisions (Architecture Decision Records).
- Phase 2 — Architecture et design system :
  - Sitemap exhaustif (78 pages × 3 langues) avec conventions d'URL.
  - Taxonomie de tags à 4 dimensions (module, technologie, secteur, niveau).
  - 9 gabarits de pages (home, overview, module, case study, resources, quiz, capstone, glossary, FAQ) avec wireframes textuels, microcopies trilingues et composants associés.
  - 4 personas détaillés (Claire COO, Karim consultant, Léa enseignante, Yacine étudiant).
  - 4 user journeys principaux avec points de friction et moments de vérité.
  - Design tokens complets (couleurs, espacement, typographie, breakpoints, ombres, animations) en CSS custom properties.
  - Système typographique IBM Plex Sans + IBM Plex Sans Arabic, self-hosted.
  - Catalogue de 70+ composants UI structurés en 14 catégories.
  - Règles RTL pour la version arabe (propriétés logiques, miroir d'icônes, contenu mixte).
  - Engagements WCAG 2.1 AA et patterns d'accessibilité.
  - Conventions iconographiques Lucide Icons avec catalogue par usage.

### Planned (Phase 3)
- ~~Scaffolding Astro avec configuration i18n FR/EN/AR.~~ **→ Phase 3 Added below**
- ~~Workflow GitHub Actions de déploiement vers OVH.~~ **→ Différé : décision OVH ouverte (placeholder actif)**
- ~~Composants de mise en page de base (Header, Footer, LanguageSwitcher, IndependenceNotice).~~ **→ Phase 3 Added below**
- ~~Mise en place Tailwind avec import des design tokens.~~ **→ Phase 3 Added below**
- ~~Tests Pa11y et Lighthouse en CI.~~ **→ Phase 3 Added below (Pa11y actif, Lighthouse différé Phase 7)**

- Phase 3 — Squelette technique :
  - Astro 4.16 LTS configuré avec i18n natif (FR/EN/AR), sous-dossiers symétriques, prefixDefaultLocale activé.
  - Tailwind 3.4 connecté aux design tokens via `tailwind.config.cjs` (alias `ai-bg`, `ai-fg`, `ai-accent`, etc.).
  - Stack TypeScript strict + Astro check + Prettier (avec plugins Astro et Tailwind).
  - Système i18n type-safe : `src/i18n/{locales.ts, helpers.ts, translations.ts}` avec ~40 clés pour le périmètre Phase 3.
  - Design tokens en CSS custom properties dans `src/styles/tokens.css` + reset dans `src/styles/global.css`.
  - Layout racine `BaseLayout.astro` avec `<html lang dir>`, hreflang, Open Graph, Twitter Card, skip-link.
  - 5 composants signature : `Header`, `Footer`, `LanguageSwitcher`, `IndependenceNotice` (3 variantes), `SourceTag` (5 niveaux + mode pill/block).
  - 5 pages : redirect racine `/`, home placeholder FR/EN/AR avec démo SourceTag, 404 trilingue.
  - Content collections Astro stubées (modules, cas) avec schémas Zod alignés sur la taxonomie.
  - GitHub Actions CI : format check + Astro check + build + Pa11y audit sur 4 pages.
  - GitHub Actions deploy.yml en placeholder avec 3 variantes OVH (mutualisé SFTP / VPS SSH+rsync / Cloud S3) prêtes à activer.
  - Documentation des décisions techniques dans `docs/architecture/skeleton-decisions.md` (downgrade sitemap, choix sans fallback, fix spread conditionnel, etc.).
  - Build validé : 4 pages générées, sitemap-index.xml créé, 0 erreur sur 19 fichiers Astro check.

### Planned (Phase 4)
- ~~Production des contenus FR : modules 1 à 6, ~10 études de cas, glossaire ~30 termes, FAQ, capstone.~~ **→ Subdivisé en sous-phases ci-dessous**
- Premières fiches PDF via composants markdown stylisés.
- Activation des contenus dans `src/content/<lang>/...`.

- Phase 4.0 — Pages de confiance (FR + stubs EN/AR) :
  - Nouveau home FR complet (remplace le placeholder Phase 3) avec hero, TrustBar, 3 audiences ciblées (dirigeants/consultants/enseignants), grille de prévisualisation des 6 modules, bloc « comment nous travaillons » en 4 piliers, encadré indépendance MIT.
  - Page Méthode FR (`/fr/methode/`) : sommaire à 6 sections, démo des 5 niveaux de SourceTag avec exemples sourcés, justification de l'indépendance vis-à-vis de MIT, explication de la triple lecture, détail des deux licences (MIT pour code + CC BY-NC-SA 4.0 pour contenu) avec cas concrets, gouvernance éditoriale via GitHub.
  - Page À propos FR (`/fr/a-propos/`) : auteur, raison du choix MIT Sloan comme référence, philosophie trilingue, trois principes éditoriaux (pas d'invention, pas de jargon, pas de marketing), canal de contact GitHub.
  - Page Mentions légales FR (`/fr/mentions-legales/`) : éditeur, hébergeur OVH, propriété intellectuelle (double licence + marques tierces nominatives), RGPD avec engagement de non-collecte par défaut, stockage local quiz, logs serveur, droits utilisateur, droit applicable français.
  - 6 stubs EN/AR (`/en/methode/`, `/en/a-propos/`, `/en/mentions-legales/`, et équivalents AR) utilisant le composant `<TranslationPending />` qui pointe vers la version FR et la home localisée.
  - 5 nouveaux composants : `<HeroSecondary />`, `<TrustBar />`, `<AudienceCard />`, `<ModuleCard />` (avec état "available", désactivé jusqu'à publication des modules), `<TranslationPending />`.
  - ~120 nouvelles clés de traduction FR/EN/AR (audiences, modules preview, trust bar, CTAs génériques, translation pending).
  - Build validé : 13 pages générées (1 root + 4 FR + 4 EN + 4 AR), 0 erreur Astro check sur 33 fichiers.

### Planned (Phase 4.1+)
- ~~Phase 4.1 : Page Programme/overview + Module 1 (Introduction à l'IA) comme pattern-setter.~~ **→ Subdivisé en 4.1a (Programme + index Modules) et 4.1b (Module 1 pattern-setter)**
- ~~Phase 4.2 à 4.6 : Modules 2 à 6 (un par sub-phase).~~ **→ ✅ TOUS LES 6 MODULES PUBLIÉS** (M1→M6 disponibles en français, stubs EN/AR pour Phase 7)
- ~~Phase 4.7-4.8 : 10 études de cas (Morgan Stanley, Stripe, GitHub Copilot, Amazon, Klarna, Takeda, etc.).~~ **→ ✅ COMPLÈTE : 10/10 cas publiés**
- ~~Phase 4.9 : Glossaire (~30 termes).~~ **→ ✅ COMPLÈTE : 31 termes publiés en 6 catégories**
- ~~Phase 6 — Podcasts NotebookLM série narrative 10 épisodes~~ **→ EN COURS : sub-1 (architecture + 10 briefs structurés) et sub-2 (documentation production + 10 fiches détaillées + page transparence) publiés**, sub-3 (audio stubs + transcripts + workflow) restant.

- Phase 6 sub-2 — Documentation de production NotebookLM :
  - **NEW DOC — `docs/podcasts/production-workflow.md`** (~430 lignes) — Guide complet pour générer la série dans Google NotebookLM. Couvre :
    - Vue d'ensemble du dispositif (5 étapes, ~1h-1h30 par épisode, total ~10-12h pour les 10)
    - Préparation des sources (limite 5-8 sources max, méthode d'ingestion via PDF du print stylesheet)
    - Configuration NotebookLM (langue, format Deep Dive, longueur Default ou Longer)
    - **Template universel de Custom Instructions** (langue, public, structure narrative, contraintes, durée cible) à adapter par épisode
    - Écoute critique avec **grille à 8 critères de qualité** + 3 erreurs typiques observées
    - Génération transcript via OpenAI Whisper local (modèle large-v3) + format Markdown structuré
    - Workflow de publication (5 étapes : copier MP3, copier transcript, mettre à jour `podcasts.ts`, ajuster chapters, build local, commit)
    - Limites assumées (variabilité du résultat, voix synthétiques, mises à jour Google)
    - Calendrier de production en 6 sessions
  - **NEW BRIEFS — `docs/podcasts/briefs/ep-NN-{slug}.md`** (10 fichiers, ~7-8 KB chacun, ~75 KB total) — Une fiche par épisode, générée par script TypeScript à partir de `podcasts.ts` enrichi de spécificités par épisode. Chaque brief contient :
    1. Synopsis éditorial complet
    2. Takeaways (5-7 points)
    3. Chapitres prévisionnels avec timestamps
    4. Sources principales NotebookLM (du brief technique)
    5. Sources complémentaires recommandées (1-2 par épisode, externes vérifiables)
    6. **Custom instructions à coller dans NotebookLM** (template universel personnalisé pour l'épisode)
    7. **Points de vigilance spécifiques** (3-4 risques connus à surveiller à la génération — ex: hallucinations de chiffres, confusion ML/GenAI, dérive politique sur emploi)
    8. Plan B en cas de résultat insatisfaisant
    9. Références croisées du parcours (modules, cas, glossaire)
    10. Checklist de publication en 13 points
  - **NEW PUBLIC PAGE — `src/pages/fr/podcasts/production.astro`** (~310 lignes) — Page de transparence éditoriale destinée aux auditeurs (et non aux contributeurs). Contient :
    - Pourquoi cette page existe (transparence sur le caractère synthétique des voix et la nature générative du dialogue)
    - **6 points de transparence** (KeyTakeaways) sur le rôle de l'humain vs la machine dans la production
    - **Workflow en 5 étapes** détaillé pour le grand public
    - **Grille de qualité 8 critères** exposée publiquement
    - **Procédure de signalement d'erreur** via GitHub issues
    - **Limites assumées du dispositif** (voix synthétiques, stabilité éditoriale, mises à jour Google, pas un cours alternatif, pas de conseil professionnel)
    - PrintButton + IndependenceNotice
  - **NEW STUBS** : EN + AR pour la page production avec TranslationPending.
  - **MINOR UPDATE** : `src/pages/fr/podcasts/index.astro` enrichi d'un lien vers la page production dans l'intro.
  - Build validé : 98 pages générées (95 → 98, +3 production FR/EN/AR), 0 erreur / 0 warning / 0 hint Astro check sur 141 fichiers. 10 briefs Markdown produits dans `docs/podcasts/briefs/`.
  - Pattern : 0 nouveau composant. Documentation contributeur + page publique de transparence. Approche zéro-secret : tout ce qui se passe en coulisses est documenté publiquement.

- Phase 6 sub-1 — Architecture podcasts + 10 briefs structurés :
  - **NEW DATA — `src/content/podcasts.ts`** (~610 lignes) — Catalogue de **10 épisodes** typés TypeScript, organisés en 4 thèmes (foundations, technology, governance, application). Chaque épisode comprend : slug + numéro + title + subtitle + theme + duration + audience + description (2-3 paragraphes) + takeaways (5-7 points) + chapters (timestamps prévisionnels) + sourceDocuments (pages-source pour NotebookLM) + focusNotes (instructions de production) + relatedModules + relatedCases + relatedGlossary + audioFile (path placeholder) + transcriptFile + status ('planned'/'in-production'/'published').
  - **Les 10 épisodes** :
    - **EP01 Foundations** — Pourquoi l'IA pour les dirigeants — au-delà du buzz (Module 1)
    - **EP02 Technology** — Machine Learning au quotidien — Stripe Radar et le dépistage MIT (Module 2)
    - **EP03 Technology** — GenAI en entreprise — comment Morgan Stanley a fait (Module 3)
    - **EP04 Technology** — Robotique et cobots — Amazon, Universal Robots et la PME française (Module 4)
    - **EP05 Governance** — AI Act EU — qui est concerné, comment se préparer (Module 5)
    - **EP06 Governance** — NIST AI RMF — gouverner sans bureaucratiser (Module 5)
    - **EP07 Foundations** — Construire votre roadmap IA — la méthode du capstone (Module 6 + Capstone)
    - **EP08 Application** — Intelligence collective humain × machine — l'approche Takeda (Module 1+6 + Takeda + MIT IDE)
    - **EP09 Application** — IA et travail — augmenter ou remplacer ? Les travaux de David Autor (Module 5+6 + MIT IDE)
    - **EP10 Foundations** — Les pièges de la stratégie IA — ce qu'il ne faut pas faire (transverse synthèse)
  - Helpers : `getPodcast(slug)`, `podcastsByTheme(theme)`, `podcastsForModule(num)`, `podcastsForCase(slug)`, `podcastsByNumber()`, `countByTheme()`, `formatTime(seconds)`, constante `TOTAL_PODCASTS`.
  - **NEW COMPONENTS** :
    - **`src/components/PodcastCard.astro`** (~115 lignes) — carte d'épisode pour l'index avec numéro + statut coloré (planned/in-production/published) + titre + sous-titre + footer thème·durée
    - **`src/components/PodcastPlayer.astro`** (~210 lignes) — lecteur audio HTML5 `<audio controls>` quand `status='published'`, sinon placeholder « épisode en production » avec sources + chapitres prévisionnels exposés. Chapitres cliquables (script inline `audio.currentTime = N + audio.play()`) quand l'audio est disponible.
  - **NEW PAGE — `src/pages/fr/podcasts/index.astro`** (~370 lignes) — index avec hero stats, intro pédagogique sur le format NotebookLM, 4 cards thématiques cliquables, 4 sections par thème avec PodcastCards, série complète dans l'ordre recommandé, IndependenceNotice.
  - **NEW DYNAMIC PAGE — `src/pages/fr/podcasts/[slug].astro`** (~330 lignes) — `getStaticPaths()` qui génère les **10 pages épisode** automatiquement à partir de `podcasts.ts`. Chaque page : hero + lecteur (PodcastPlayer) + description multi-paragraphes + 5-7 takeaways (KeyTakeaways) + sources documentaires + notes de focus + cross-refs (modules/cas/glossaire) + navigation prev/index/next + PrintButton + IndependenceNotice.
  - **NAVIGATION ACTIVÉE** :
    - `src/i18n/translations.ts` : ajout de `nav.podcasts` ('Podcasts' / 'Podcasts' / 'بودكاست') dans les 3 locales
    - `src/components/Header.astro` : entrée `nav.podcasts` ajoutée à la liste des items, lien vers `/podcasts/`
  - **NEW STUBS** : EN + AR avec TranslationPending pour la page index.
  - Build validé : **95 pages générées** (82 → 95, +13 : 1 index FR + 2 stubs + **10 épisodes dynamiques**), 0 erreur / 0 warning / 0 hint Astro check sur 138 fichiers. Liens nav.podcasts présents dans toutes les pages.
  - Pattern : 2 nouveaux composants Astro (27 → 29). Approche statique-first : pas de React pour les podcasts (le player audio HTML5 natif est suffisant + un script inline minuscule pour les chapitres cliquables).



## 🎯 PHASE 5 COMPLÈTE — Tout l'interactif et l'export PDF en place

Phase 5 est désormais terminée dans son intégralité. Récapitulatif :
- **6 modules** équipés du quiz interactif React (sélection radio, validation, feedback immédiat, scoring, persistance localStorage)
- **UX polish** : raccourcis clavier 1-4 + Entrée, focus + scroll automatique au feedback, auto-ouverture du scoring à la complétion
- **17 pages** équipées du bouton « Imprimer ou enregistrer en PDF » (6 modules + 10 cas + capstone)
- **Print stylesheet `@media print`** complet dans `global.css` : chrome supprimé, typographie noir/blanc optimisée encre, sauts de page maîtrisés, URLs externes affichées en clair, footer print signé, tous les `<details>` ouverts
- 1 bundle React `QuizInteractive.{hash}.js` = ~7.4 kB code-split
- 0 erreur / 0 warning / 0 hint Astro check sur 131 fichiers
- 27 composants Astro stables (26 → 27 avec PrintButton) + 1 composant React

- Phase 5 sub-3 — PDFs stylisés via print stylesheet :
  - **NEW COMPONENT — `src/components/PrintButton.astro`** (~115 lignes) — bouton d'impression accent avec icône SVG d'imprimante, hint pédagogique optionnel, deux variantes (`default` avec hint, `compact` sans). Déclenche `window.print()` via attribut `onclick` natif (zéro dépendance React, zéro JS séparé). Le bouton lui-même est masqué à l'impression via la règle `.ai-print-action { display: none }` du print stylesheet.
  - **NEW PRINT STYLESHEET** dans `src/styles/global.css` (~140 lignes ajoutées sous `@media print`) :
    - **Reset des design tokens** : `--ai-fg-primary` forcé à `#000`, `--ai-bg-base` à `#fff`, accents en noir, économie d'encre maximale
    - **`@page`** : format A4 avec marges 1.6cm × 1.4cm × 1.8cm
    - **Éléments masqués** : `.ai-header`, `.ai-footer`, `.skip-link`, `.ai-print-action`, `.ai-quiz` (interactif non imprimable), `.ai-table-of-contents` et autres TOC sticky, `.ai-prev-next-nav`, `.ai-capstone-download`, et toutes les grilles de navigation décorative (themes overview, types overview, glossary categories)
    - **`<details>` forcés ouverts** : `details > *:not(summary) { display: block !important }` + masquage des chevrons. Tout le contenu masqué par défaut devient visible à l'impression
    - **Layouts grid démontés** : `.ai-capstone-page__layout` et autres `[class*="__layout"]` passent en `display: block` pour éviter les colonnes vides
    - **URLs externes affichées** : `a[href^="http"]::after { content: " (" attr(href) ")" }` — les liens externes deviennent autodocumentés, sans le faire pour les ancres internes
    - **Sauts de page maîtrisés** : `page-break-after: avoid` sur les H1-H4, `orphans: 3 / widows: 3` sur les paragraphes, `page-break-inside: avoid` sur les blocs pédagogiques (cards, encadrés, tableaux)
    - **Composants pédagogiques en monochrome** : fonds colorés remplacés par bordures noires fines (`border-inline-start: 3px solid #000`), source-tags en noir/blanc
    - **Tableaux N&B lisibles** : `border-collapse: collapse`, en-têtes gris clair, bordures grises
    - **Footer print signé** : injection via `main::after` avec mention du site, licence CC BY-NC-SA 4.0 et URL GitHub — apparaît en bas de la dernière page de chaque export PDF
  - **17 PAGES ÉQUIPÉES** : `<PrintButton />` inséré juste avant `<IndependenceNotice />` dans :
    - 6 pages modules (M1 à M6)
    - 10 pages études de cas (Takeda CCI, Morgan Stanley, Stripe Radar, MIT Barzilay, GitHub × Accenture, Amazon Robotics, Universal Robots, NIST AI RMF, AI Act EU haut risque, MIT IDE)
    - 1 page capstone
    - Index `cas/` exclu (page de navigation, non destinée à l'impression individuelle)
  - Build validé : 82 pages, 0 erreur / 0 warning / 0 hint Astro check sur 131 fichiers. Print stylesheet présent dans le bundle CSS final, attribut `onclick="window.print()"` préservé dans le HTML SSR'd.

- Phase 5 sub-2 — Déploiement aux Modules 2-6 + UX polish :
  - **DÉPLOIEMENT MASSE** : remplacement de `<QuizPlaceholder>` par `<QuizInteractive client:visible>` dans les pages des Modules 2 (Machine Learning), 3 (IA générative), 4 (Robotique), 5 (IA et société), 6 (Futur de l'IA). Pattern uniforme — 5 imports + 5 invocations changés en une seule passe sed. Module 1 conservait déjà QuizInteractive depuis sub-1.
  - **UX POLISH — Raccourcis clavier** : touches <kbd>1</kbd>-<kbd>4</kbd> pour choisir l'option correspondante (sans modificateurs), <kbd>Entrée</kbd> pour valider quand une option est cochée. Handler attaché par question via `onKeyDown` sur le `<li>` — ne capture les touches que quand le focus est dans la carte de question (n'interfère pas avec d'autres parties de la page).
  - **UX POLISH — Astuce clavier visible** : nouveau bloc `.ai-quiz__kbd-hint` au-dessus des questions, n'apparaît qu'après hydratation et seulement si le quiz n'est pas terminé. Utilise des éléments `<kbd>` stylisés (font mono, bordure, ombre subtile).
  - **UX POLISH — Focus management après révélation** : `requestAnimationFrame` après `setState` pour laisser React commiter, puis `scrollIntoView({behavior:'smooth', block:'nearest'})` + `focus({preventScroll:true})` sur le bloc feedback. Combiné avec `aria-live="polite"` et `tabIndex={-1}` sur le feedback, les screen readers annoncent automatiquement le verdict + l'explication.
  - **UX POLISH — Auto-ouverture du scoring** : `<details open={allRevealed}>` ouvre automatiquement le panneau de scoring bands quand toutes les questions sont révélées, et change le `<summary>` pour signaler que le niveau atteint est mis en évidence.
  - **NEW STYLES** ajoutés à `src/styles/global.css` : styles `.ai-quiz__kbd-hint` + `kbd` + focus ring sur `.ai-quiz__feedback:focus`.
  - Build validé : 82 pages, 0 erreur / 0 warning / 0 hint Astro check sur 130 fichiers. Bundle React `QuizInteractive.{hash}.js` = 7.4 kB après ajouts (compact). SSR vérifié sur les 6 modules : 28 option-letters chacun (7 questions × 4 options) + astro-island markers correctement injectés.
  - Pattern d'hydration vérifié : `hydrated` flag prévient les mismatches React, le kbd-hint et les feedbacks ne sont rendus qu'après mount client-side (cohérent avec l'attente que ces éléments dépendent de JS).

- Phase 5 sub-1 — QuizInteractive React island :
  - **NEW DEPENDENCIES** : `@astrojs/react@^3.6.3`, `react@^18.3.1`, `react-dom@^18.3.1`, `@types/react@^18.3.12`, `@types/react-dom@^18.3.1`. Ajout de l'intégration React à `astro.config.mjs` avec scope d'inclusion `**/components/**/*.tsx` (n'affecte pas les pages, ne crée pas de surcoût pour les composants .astro).
  - **NEW COMPONENT — `src/components/QuizInteractive.tsx`** (~280 lignes) — île React avec :
    - Sélection radio par question (4 options A-D)
    - Validation par bouton « Valider ma réponse » (bouton désactivé tant qu'aucune option n'est choisie)
    - Révélation immédiate après validation : verdict (correct/incorrect) + explication pédagogique, avec mise en évidence visuelle (border + background colorés)
    - Indicateur de progression live (X révélées / N total + restantes/en attente)
    - Score final avec scoring band match + interprétation, affiché uniquement quand toutes les questions sont révélées
    - Bouton « Recommencer » (apparait dès une réponse validée) et « Réinitialiser » (avec confirmation)
    - **Persistance localStorage** sous clé `ai-strategy:quiz:{id}` — état hydraté au mount
    - Accessibilité : ARIA labels, keyboard navigation native sur radios, role status sur feedback
    - Graceful SSR : rend toutes les questions et options en HTML server-side (visible sans JS, hydraté à la visibilité)
  - **NEW STYLES** dans `src/styles/global.css` (~250 lignes ajoutées) — design tokens cohérents : couleurs vertes pour bonne réponse, rouges pour incorrect, accent pour picked, chip kind coloré par type (comprehension blue / application orange / judgment purple).
  - **MODULE 1 ACTIVATION** — `src/pages/fr/modules/01-introduction-ia/index.astro` : remplacement de `<QuizPlaceholder>` par `<QuizInteractive client:visible>` (lazy hydration uniquement quand le quiz devient visible dans le viewport — économise le bundle JS sur les visiteurs qui ne descendent pas jusque-là).
  - **VALIDATION PATTERN** : Module 1 sert de pilote. Modules 2-6 conservent QuizPlaceholder pour le sub-tour suivant (sub-2).
  - Build validé : 82 pages, 0 erreur / 0 warning / 0 hint Astro check sur 130 fichiers. Bundle React `QuizInteractive.{hash}.js` séparé via code-splitting Astro. SSR vérifié : 7 questions × 4 options = 28 éléments rendus, scoring bands inclus, hydratation directive `astro-island opts=QuizInteractive` correctement injectée.



## 🎯 PHASE 4 COMPLÈTE — Tous les contenus FR publiés

Phase 4 est désormais terminée dans son intégralité (4.0 → 4.10). Récapitulatif :
- **6 modules** publiés en français (M1 à M6) avec quiz schémas, canvases téléchargeables et ressources
- **10 études de cas** publiées (gabarit en 11 sections, sources publiques systématiquement vérifiables)
- **Glossaire 31 termes** en 6 catégories avec cross-referencing dense
- **Resources hub 31 sources** organisées en 8 familles
- **Capstone** avec méthodologie 4 étapes, grille 7 dimensions × 4 niveaux, exemple annoté fictif PME, checklist 18 points
- **FAQ 20 questions** en 6 thèmes avec balisage Schema.org FAQPage pour SEO
- 82 pages buildées au total (1 root + 27 FR + 27 EN + 27 AR), 26 composants Astro stables, ~16 100 lignes de contenu rédigé FR
- Sources publiques systématiquement vérifiables, hiérarchie 5 niveaux signalée explicitement
- Stubs EN/AR pour chaque page (Phase 7 — traductions complètes)

- Phase 4.10 sub-3 — Page FAQ avec balisage Schema.org :
  - **NEW DATA — `src/content/faq.ts`** (~480 lignes) — 20 questions structurées en 6 thèmes :
    - **Programme et public** (4 Q) : site officiel MIT, public ciblé, certification, durée du parcours
    - **Méthode et sources** (3 Q) : hiérarchie des sources, reconstruction pédagogique, fiabilité
    - **Cas d'usage et organisations** (3 Q) : choisir un premier cas, GenAI vs ML, taille d'organisation
    - **Gouvernance, AI Act EU et conformité** (4 Q) : concerné par l'AI Act, articulation NIST RMF, comité éthique, biais algorithmique
    - **Capstone et roadmap IA** (3 Q) : durée du capstone, taille d'organisation, prérequis
    - **Pratique du parcours** (3 Q) : ordre des modules, traductions EN/AR, mises à jour et réutilisation
  - Chaque entrée : slug + theme + question + answer (HTML enrichi avec `\n\n` pour paragraphes) + relatedModules + relatedCases + relatedGlossary + relatedPages.
  - Helpers : `getFaq(slug)`, `faqByTheme(theme)`, constante `TOTAL_FAQ`, labels et descriptions des thèmes.
  - **NEW PAGE — `src/pages/fr/faq/index.astro`** (~600 lignes) — page complète avec :
    - **Balisage Schema.org FAQPage JSON-LD** injecté via slot `head` du BaseLayout (+ helper `answerToPlainText` pour stripper le HTML enrichi pour le balisage)
    - Hero + intro pédagogique
    - 6 cards de thèmes cliquables avec compteur de questions
    - TOC organisée par thème (toutes les questions listées avec ancres permanentes)
    - 6 sections par thème avec entrées en `<details>` dépliables (chevron rotatif), réponses formatées multi-paragraphes, footer 4 niveaux de refs (Modules, Cas, Glossaire, Pages)
    - Liens vers programme/cas/glossaire/ressources/capstone/méthode
    - IndependenceNotice
  - **MINOR UPDATE — `src/layouts/BaseLayout.astro`** : ajout d'un `<slot name="head" />` après le favicon pour permettre l'injection de JSON-LD ou d'autres méta personnalisées par page. Modification additive, rétrocompatible (toutes les pages existantes continuent à fonctionner inchangées).
  - **NEW STUBS** : EN + AR avec TranslationPending.
  - **Activation navigation** : le lien `/faq/` était déjà câblé dans `Header.astro` — fonctionne désormais.
  - Build validé : 82 pages générées (1 root + 27 FR + 27 EN + 27 AR), 0 erreur / 0 warning / 0 hint Astro check sur 129 fichiers.
  - Vérifications HTML : 20 entrées rendues, JSON-LD Schema.org FAQPage présent.
  - Pattern : 0 nouveau composant. Ajout minimal au BaseLayout (slot `head`).

- Phase 4.10 sub-2 — Page Capstone (projet final intégrateur) :
  - **NEW PAGE — `src/pages/fr/capstone/index.astro`** (1086 lignes) — page la plus pédagogiquement structurante du site, traduit le canvas-roadmap-ia-module-6.md en page web complète enrichie d'une grille d'évaluation détaillée et d'un exemple annoté.
  - Structure en 8 sections sticky-TOC :
    1. **Aperçu** — ExecutiveSummary + tableau d'identité (public, prérequis, livrable, modalité d'évaluation)
    2. **Objectifs d'apprentissage** — 7 outcomes via KeyTakeaways
    3. **Méthodologie en 4 étapes** — chaque étape dans une carte dédiée avec numéro coloré, durée estimée (25-45 min), corps détaillé et livrable explicite. Mapping direct sur le canvas Module 6 :
       - Étape 1 : Vision et diagnostic de maturité 8 dimensions (25-30 min)
       - Étape 2 : 3 scénarios contrastés et actions robustes (25-30 min)
       - Étape 3 : Use cases prioritaires Valeur × Faisabilité × Risque (25-30 min)
       - Étape 4 : Plan d'action 12-24 mois en 5 dimensions (30-45 min)
    4. **Grille d'évaluation** — 7 dimensions × 4 niveaux (Insuffisant / Émergent / Solide / Excellent) = 28 descripteurs détaillés. Couleur dégradée rouge → orange → vert → accent pour les niveaux. Note agrégée pour passage en COMEX. Dimensions évaluées : vision stratégique / diagnostic de maturité / sélection-priorisation use cases / gouvernance et conformité / compétences et conduite du changement / plan opérationnel-budget-KPI / robustesse aux incertitudes.
    5. **Exemple annoté fictif** — Métallurgie de Précision SAS (PME française, ~150 salariés, aéronautique et médical) — explicitement signalé `<SourceTag level="pedagogical-reconstruction" />`. Couvre les 4 étapes avec annotations explicites du niveau de qualité atteint et du raisonnement.
    6. **Checklist exécutive** — 18 points groupés en 7 phases via le composant Checklist existant (avant de commencer / Étape 1 / Étapes 2-3 / Étape 4 / conformité-changement / synthèse-validation / soutenance-suite).
    7. **Téléchargement** — bouton accent vers le canvas Markdown CC BY-NC-SA 4.0 existant.
    8. **Pour aller plus loin** — ResourceList vers Module 6, NIST AI RMF, AI Act EU + liens internes vers programme/ressources/glossaire.
  - **NEW STUBS** : EN + AR avec TranslationPending.
  - **Activation navigation** : le lien `/capstone/` était déjà câblé dans `Header.astro` — fonctionne désormais.
  - Build validé : 79 pages générées (1 root + 26 FR + 26 EN + 26 AR), 0 erreur / 0 warning / 0 hint Astro check sur 125 fichiers.
  - Pattern : 0 nouveau composant. Réutilisation de `HeroSecondary`, `TableOfContents`, `ExecutiveSummary`, `KeyTakeaways`, `Checklist`, `ResourceList`, `SourceTag`, `IndependenceNotice`. Styling self-contained cohérent avec design tokens.
  - Vérifications HTML buildé : 7 dimensions de rubric rendues, 4 étapes de méthodologie, 18 items de checklist en 7 phases.

- Phase 4.10 sub-1 — Resources hub :
  - **NEW DATA — `src/content/resources.ts`** (610 lignes) — Catalogue de 31 ressources externes typées TypeScript, structurées en 8 familles thématiques :
    - **Programme officiel MIT** (2 ressources) : page certificat + sample schedule PDF
    - **MIT OpenCourseWare** (4 cours) : AI 101, Intro to ML 6.036, Foundation Models 6.S087, Intro to Robotics 2.12
    - **Articles MIT Sloan** (3 articles) : business leaders & AI, GenAI use cases, technology & employment
    - **Articles MIT Executive Education** (1 article) : Present and Future of GenAI in Business
    - **Standards et gouvernance** (5 sources) : NIST AI RMF page + PDF, OCDE Principes IA, AI Act EU EUR-Lex, ISO/TS 15066
    - **Sources primaires des cas** (10) : Takeda CCI, GenAI & Collective Intelligence, Morgan Stanley AI, Stripe Radar, MIT News Mirai, CSAIL Barzilay, GitHub Copilot research, Amazon million robots, Universal Robots, MIT IDE
    - **Publications académiques** (2) : NBER Generative AI at Work, MIT CCI publications
    - **Ressources externes vérifiables** (4) : WEF Future of Jobs, Commission EU AI Act page, Amazon Robotics corporate, GitHub Copilot product
  - Chaque ressource : slug + type + title + author + description (2-3 phrases) + href + sourceLevel (officiel-MIT / complément recommandé / source externe vérifiable / reconstruction pédagogique) + relatedModules + relatedCases + tags + language (fr / en / multilingual).
  - Helpers exportés : `getResource(slug)`, `resourcesByType(type)`, `resourcesForModule(num)`, `resourcesForCase(slug)`, `resourcesByLevel(level)`, `resourcesInFrench()`, `resourcesAlphabetical()`, `countByType()`, constante `TOTAL_RESOURCES`.
  - Cross-referencing dense vérifié sur HTML buildé : 31× Modules, 26× Cas, 7 ressources directement disponibles en français ou multilingues.
  - **NEW PAGE — `src/pages/fr/ressources/index.astro`** (725 lignes) — page hub avec :
    - Hero avec stats (31 ressources · 8 types · 7 FR/multilingue · 10 cas couverts)
    - Intro pédagogique (3 manières de naviguer : par type, par module/cas, par langue)
    - 8 cards de types cliquables avec compteur par catégorie
    - 8 sections par type avec entrées détaillées (titre + lien externe + auteur + description + 2 badges colorés [niveau de source / langue] + références modules+cas + tags)
    - Section dédiée aux ressources françaises et multilingues (mise en avant pour apprenants francophones)
    - Matrice ressources × modules avec `<details open>` permettant de naviguer module par module avec compteur
    - Liens vers programme/cas/glossaire/méthode
    - IndependenceNotice en pied
  - **NEW STUBS** : EN + AR avec TranslationPending.
  - **Activation navigation** : le lien `/ressources/` était déjà câblé dans `Header.astro` — fonctionne désormais.
  - Build validé : 76 pages générées (1 root + 25 FR + 25 EN + 25 AR), 0 erreur / 0 warning / 0 hint Astro check sur 122 fichiers.
  - Pattern : 0 nouveau composant. Page self-contained, design tokens cohérents.

- Phase 4.9 — Glossaire pédagogique structuré :
  - **NEW DATA — `src/content/glossary.ts`** (586 lignes) — 31 entrées typées TypeScript en 6 catégories thématiques :
    - **Fondamentaux** (5 termes) : IA, IA faible (étroite), IA générale (AGI), intelligence collective, automatisation
    - **Machine Learning** (6 termes) : machine learning, deep learning, apprentissage supervisé, apprentissage non supervisé, apprentissage par renforcement, données d'entraînement
    - **IA générative** (7 termes) : modèle génératif, LLM, foundation model, hallucination, RAG, prompt engineering, fine-tuning
    - **Robotique** (3 termes) : robotique, cobot, AMR
    - **Gouvernance et société** (7 termes) : biais algorithmique, gouvernance IA, AI risk management, AI Act, explicabilité, accountability, human-in-the-loop
    - **Méthodologie projet** (3 termes) : roadmap IA, pilote IA, capstone
  - Chaque entrée comporte : slug + term + aliases optionnels + category + shortDefinition (1 phrase) + longDefinition (2-4 paragraphes) + example métier + relatedModules + relatedCases + relatedTerms.
  - Helpers exportés : `getEntry(slug)`, `entriesByCategory(cat)`, `entriesAlphabetical()`, `alphabeticalInitials()`, constante `TOTAL_TERMS`.
  - Cross-referencing dense : 31 entrées × Modules (toutes), 31 × Voir aussi (toutes), 26 × Cas (les plus générales n'ayant pas de cas dédié).
  - **NEW PAGE — `src/pages/fr/glossaire/index.astro`** (697 lignes) — page unique avec : intro pédagogique, 6 cards de catégories cliquables avec compteur de termes, navigation A→Z sticky, sections par catégorie avec entrées détaillées (term + aliases + short + long + example + footer 3 niveaux de refs), index alphabétique secondaire avec ancres permanentes, liens vers programme/cas/méthode.
  - **NEW STUBS** : EN + AR avec `TranslationPending`.
  - **Activation navigation** : le lien `/glossaire/` était déjà câblé dans `Header.astro` (donnait 404 avant) — fonctionne désormais sans modification additionnelle.
  - Build validé : 73 pages générées (1 root + 24 FR + 24 EN + 24 AR), 0 erreur / 0 warning / 0 hint Astro check sur 118 fichiers.
  - Pattern : 0 nouveau composant. La page glossaire est self-contained avec son propre styling (cohérent avec design tokens existants).
  - Sources : reconstruction pédagogique à partir de MIT, NIST, OCDE, AI Act EU, corpus académique standard. Indiquée explicitement avec `<SourceTag level="pedagogical-reconstruction" inline />` dans l'intro.

- Phase 4.7 sub-3 — 4 derniers cas + clôture Phase 4.7-4.8 :
  - **Cas 7 — Universal Robots (cobots PME)** `/fr/cas/universal-robots/` (499 lignes) — mini-cas Module 4 complémentaire au cas Amazon Robotics. Fabricant danois fondé en 2005, propriété de Teradyne depuis 2015. Cobots conformes ISO/TS 15066, gamme UR3e à UR30. Solution en 5 sous-sections (cobot léger 6 axes ISO/TS 15066 / programmation accessible PolyScope + démonstration / écosystème UR+ d'intégrateurs et outillages certifiés / conformité réglementaire et sécurité / reconfigurabilité comme proposition de valeur centrale). 5 bénéfices (accès PME à l'automatisation, polyvalence opérationnelle, cohabitation directe, amélioration conditions de travail, diffusion au-delà des grandes entreprises). 5 limites (intégration domine coût total, capacité utile limitée, évaluation de risque exigeante, concurrence intensifie, AI Act EU). 4 familles de risques (sécurité physique, sous-estimation coûts, social/acceptation, dépendance fournisseur). Sources primaires : universal-robots.com + ISO/TS 15066:2016.
  - **Cas 8 — NIST AI Risk Management Framework** `/fr/cas/nist-ai-rmf/` (509 lignes) — cas principal Module 5. AI RMF 1.0 publié janvier 2023, accompagné d'un Playbook et de profils sectoriels (NIST AI 600-1 sur GenAI). Cadre volontaire, non contraignant. Architecture en 4 fonctions interreliées : Govern (transverse) / Map (identifier contexte et risques) / Measure (analyser et mesurer) / Manage (prioriser et traiter). Solution en 6 sous-sections incluant l'articulation des 4 fonctions. 5 bénéfices (adoption large, compatibilité AI Act EU, évolutivité documentée, crédibilité méthodologique, effet pédagogique structurant). 5 limites incluant caractère volontaire à double tranchant et défi d'articulation avec AI Act EU. 4 familles de risques (usage cosmétique, confusion avec obligation légale, surcharge documentaire, évolution réglementaire). Sources primaires : nist.gov/itl/ai-risk-management-framework + AI RMF 1.0 PDF + Principes OCDE.
  - **Cas 9 — AI Act EU classification haut risque** `/fr/cas/ai-act-eu-haut-risque/` (546 lignes) — mini-cas Module 5. Règlement UE 2024/1689 adopté mai 2024, publié JOUE 12 juillet 2024, entré en vigueur 1er août 2024. Application progressive jusqu'en août 2027. Architecture détaillée en 6 sous-sections : pratiques interdites (Article 5) / systèmes haut risque (Annexe III, obligations Articles 8-17 substantielles) / risque limité (transparence Article 50) / risque minimal / modèles à usage général (Articles 51-56) / calendrier d'application progressif. 5 bénéfices (effet de référence international, structuration gouvernance interne, écosystème de conformité émergent, protection des personnes, clarté juridique). 6 limites incluant complexité technique, coût de conformité, articulation avec autres réglementations. 5 familles de risques (mauvaise classification, conformité formelle sans application, retard d'innovation, surinvestissement documentaire, évolution réglementaire). Sources primaires : EUR-Lex Règlement UE 2024/1689 FR + page Commission européenne AI Act + NIST AI RMF.
  - **Cas 10 — MIT Initiative on the Digital Economy (MIT IDE)** `/fr/cas/mit-ide/` (515 lignes) — cas principal Module 6, **clôt la série des 10 cas**. Initiative de recherche MIT Sloan fondée en 2013. Modèle d'anticipation stratégique structurée transposable. Approche méthodologique en 6 sous-sections (recherche académique rigoureuse, multi-disciplinaire, données empiriques et études de cas, traduction pour praticiens, capitalisation dans la durée, articulation avec autres initiatives MIT). 5 apports observés (cadrage du débat public, recommandations méthodologiques, influence politiques publiques, ressources pédagogiques, modèle institutionnel inspirant). 5 limites incluant échelle académique non transposable directement, rythme académique lent, paralysie analytique potentielle. 4 familles de risques d'usage (citer sans appliquer, sur-confiance dans les conclusions, retard traduction opérationnelle, paralysie analytique). Sources primaires : ide.mit.edu + MIT CCI Generative AI and Collective Intelligence + WEF Future of Jobs.
  - **Stubs EN/AR** : 8 fichiers (4 cas × 2 langues) avec TranslationPending.
  - **Activations finales** : Module 5 — NIST AI RMF CaseCardCompact `available=false → true`. Module 6 — MIT IDE CaseCardCompact `available=false → true`. (Mini-cas AI Act EU haut risque restant en référence inline texte+lien dans M5, lien désormais fonctionnel.)
  - **`/fr/cas/index.astro`** : 4 derniers cas (Universal Robots, NIST AI RMF, AI Act EU, MIT IDE) flippés à `available=true` via sed. Note d'intro mise à jour : « Phase 4.7-4.8 complète : les 10 cas sont publiés ».
  - Build validé : 70 pages générées (1 root + 23 FR + 23 EN + 23 AR), 0 erreur / 0 warning / 0 hint Astro check sur 114 fichiers.

**🎯 Jalon majeur — Phase 4.7-4.8 complète. Les 10 études de cas sont publiées :**
  Module 1 : Takeda × MIT CCI Superminds (cas principal)
  Module 1+3 : Morgan Stanley AskResearchGPT/Debrief (cas principal M3 + mini-cas M1)
  Module 2 : Stripe Radar (cas principal)
  Module 2 : Regina Barzilay MIT (mini-cas)
  Module 3 : GitHub Copilot × Accenture (mini-cas)
  Module 4 : Amazon Robotics + DeepFleet (cas principal)
  Module 4 : Universal Robots (mini-cas)
  Module 5 : NIST AI Risk Management Framework (cas principal)
  Module 5 : AI Act EU classification haut risque (mini-cas)
  Module 6 : MIT Initiative on the Digital Economy (cas principal)

  Statistiques cumulées : ~5 600 lignes de contenu cas FR (gabarit 11 sections × 10 cas).
  Sources publiques systématiquement vérifiables. Aucune information factuelle inventée.
  Aucun composant nouveau créé depuis Phase 4.1b sub-1 — pattern stable validé sur 6 modules + 10 cas.

- Phase 4.7 sub-2 — 4 cas supplémentaires (vague intermédiaire) :
  - **Cas 3 — Morgan Stanley AskResearchGPT et Debrief** `/fr/cas/morgan-stanley/` (524 lignes) — cas principal Module 3 + mini-cas Module 1. Architecture LLM (GPT-4 d'OpenAI) + RAG sur corpus interne curé (~100 000 documents) + escalade humaine + gouvernance dédiée. Déployé à ~16 000 conseillers financiers. Solution en 5 sous-sections (foundation model licencié pas développé, RAG sur corpus curé, curation et structuration, escalade humaine et limites, gouvernance et conduite du changement). Bénéfices documentés : réduction temps recherche, réduction temps administratif, cohérence du conseil, expérience client, crédibilité du déploiement à grande échelle. 5 limites incluant dépendance fournisseur LLM. 4 familles de risques (réglementaire SEC/FINRA, fuite de données client, biais corpus curé, dégradation métier). Source primaire : page Wealth Management AI officielle Morgan Stanley.
  - **Cas 4 — Amazon Robotics + DeepFleet** `/fr/cas/amazon-robotics/` (500 lignes) — cas principal Module 4. Million de robots déployés mondialement (annonce 2025) + lancement de DeepFleet (foundation model d'IA pour orchestration de flotte, analogie avec GPT-4 pour le langage). Solution en 5 sous-sections (flotte multi-générations spécialisées, DeepFleet orchestrateur, apprentissage partagé à l'échelle réseau, augmentation des humains, sécurité humain-machine ISO 10218 + ISO/TS 15066). Bénéfices : capacité, précision, création de nouveaux rôles techniques, avantage concurrentiel structurel, plateforme réutilisable. 5 limites (investissement massif, effet de verrou, conditions de travail sujet sensible, dépendance infrastructure, AI Act EU). Source primaire : aboutamazon.com/news/operations/amazon-million-robots-ai-foundation-model.
  - **Cas 5 — GitHub Copilot × Accenture** `/fr/cas/github-copilot-accenture/` (504 lignes) — mini-cas Module 3. Étude empirique structurée (groupe traitement vs contrôle) sur l'impact réel de Copilot dans Accenture (~700 000 collaborateurs). Méthodologie en 5 piliers (groupe traitement vs contrôle, métriques multiples, durée suffisante, conduite du changement intégrée, publication transparente) — exemplaire et transposable à tout pilote GenAI. 5 bénéfices documentés (productivité, qualité, satisfaction, rétention, crédibilité méthodologique). 5 limites incluant conflit d'intérêts à reconnaître et effet sur l'apprentissage des juniors. 5 familles de risques (propriété intellectuelle, fuite données client, qualité code généré, apprentissage long-terme, AI Act EU). Source primaire : github.blog/news-insights/research/research-quantifying-github-copilots-impact-in-the-enterprise-with-accenture/.
  - **Cas 6 — Regina Barzilay (MIT CSAIL) — Dépistage cancer** `/fr/cas/mit-barzilay-cancer/` (508 lignes) — mini-cas Module 2. Modèle Mirai pour prédiction risque cancer du sein à 1-5 ans à partir d'une mammographie. Solution en 5 sous-sections (apprentissage profond supervisé sur images, étiquetage par experts qualifiés, validation indépendante multi-sites, supervision humaine non négociable, transparence sur les limites). 5 bénéfices incluant performance prédictive supérieure aux scores traditionnels et robustesse à la diversité des populations. 5 limites incluant cinétique d'adoption clinique lente et enjeux RGPD + AI Act EU. 5 familles de risques (biais ethnique/démographique, dégradation après déploiement, déontologique, fausse confiance, AI Act EU haut risque + MDR). Sources primaires : page CSAIL Regina Barzilay + MIT News article sur le modèle Mirai.
  - **Stubs EN/AR** : 8 fichiers (4 cas × 2 langues) avec TranslationPending.
  - **Activations** : Module 3 — Morgan Stanley CaseCardCompact `available=false → true`. Module 4 — Amazon Robotics CaseCardCompact `available=false → true`. (Mini-cas GitHub × Accenture et Barzilay sont en référence inline texte+lien dans M3 et M2 — pas de CaseCardCompact à activer pour ceux-ci, le lien est désormais fonctionnel par construction.)
  - **`/fr/cas/index.astro`** : 4 cas passent à `available=true` (Morgan Stanley était pré-positionné true, Barzilay/GitHub/Amazon flippés). Note d'intro mise à jour : "6 des 10 cas publiés".
  - Build validé : 58 pages générées (1 root + 19 FR + 19 EN + 19 AR), 0 erreur / 0 warning / 0 hint Astro check sur 102 fichiers.
  - Pattern stable : aucun composant nouveau, gabarit cas en 11 sections appliqué uniformément aux 6 cas publiés. Sources publiques systématiquement vérifiables.

- Phase 4.7 sub-1 — Index `/cas/` + 2 premiers cas (pattern-setter pour les 10) :
  - **Index FR** `/fr/cas/` (334 lignes) — liste les 10 cas regroupés par module, avec `CaseCardCompact` réutilisé. Structure : intro pédagogique + 6 sections (une par module) + indépendance. 2 cas marqués `available=true`, 8 marqués `available=false` (à activer dans les sous-tours suivants).
  - **Cas 1 — Takeda × MIT CCI Superminds** `/fr/cas/takeda-superminds/` (611 lignes) — pattern-setter du gabarit cas. Structure 11 sections : identité du cas (composant inline structuré dt/dd), synthèse executive 3 paragraphes, contexte de l'organisation (Takeda + MIT CCI), problème métier (3 enjeux R&D pharma), solution IA (4 sous-sections : équipes mixtes, orchestration explicite, outils en support, apprentissage collectif), bénéfices observés (4 dimensions organisationnelles), limites et défis (4 limites incluant compétences requises et difficulté de chiffrage), risques identifiés et garde-fous (3 familles), enseignements managériaux (5 takeaways), 5 questions de discussion pédagogique, modules associés et 3 ressources sourcées (MIT CCI Takeda program officiel, Superminds book Malone, MIT CCI Generative AI and Collective Intelligence). Source primaire : page officielle `cci.mit.edu/takeda-superminds-program/`.
  - **Cas 2 — Stripe Radar** `/fr/cas/stripe-radar/` (586 lignes) — valide le pattern. Même structure 11 sections. Synthèse 3 paragraphes (ML supervisé à grande échelle + orchestration ML/règles/retours utilisateurs + effet réseau structurel), contexte Stripe et défis fraude (4 enjeux : fraudeurs adaptatifs, marchands subissent les pertes, faux positifs coûteux, contrainte temps-réel <100 ms), solution en 4 sous-sections (modèle ML supervisé, retours utilisateurs intégrés, règles métier personnalisables, scoring temps-réel et explicabilité), bénéfices documentés publiquement, 4 limites (probabilité résiduelle, effet réseau bénéficie aux établis, non-transposable trivialement, dimension réglementaire), 4 familles de risques (biais discriminatoire, arms race, dépendance marchands, AI Act EU haut risque potentiel), 5 takeaways, 5 questions de discussion, 3 ressources sourcées (Stripe primer ML/fraude FR, Stripe Radar produit officiel, MIT OCW 6.036).
  - **Stubs EN/AR** : 6 fichiers (`/en/cas/index.astro`, `/ar/cas/index.astro`, plus 4 stubs pour les 2 cas en EN+AR).
  - **Activations** : Module 1 (`/fr/modules/01-introduction-ia/`) — CaseCardCompact Takeda passe à `available=true` (fin du badge "à venir"). Module 2 — CaseCardCompact Stripe Radar passe à `available=true`.
  - Build validé : 46 pages générées (1 root + 15 FR + 15 EN + 15 AR), 0 erreur / 0 warning / 0 hint Astro check sur 90 fichiers.
  - Pattern de page cas posé : 11 sections (identité, synthèse, contexte, problème métier, solution IA, bénéfices, limites, risques, enseignements, discussion, modules+sources). Tous les composants existants réutilisés. **0 composant nouveau** — pattern compatible avec la suite des 8 cas.

- Phase 4.6 — Module 6 (Futur de l'IA) — **CLÔT LE PARCOURS PÉDAGOGIQUE** :
  - Page Module 6 FR (`/fr/modules/06-futur-ia/`) : 877 lignes, ~3000 mots, structure identique aux Modules 1-5 (11 sections selon gabarit). Module conclusif et prospectif. Synthèse exécutive 3 paragraphes (futur IA incertain à 3-10 ans, scenario planning vs prévision, distinction veille technologique vs anticipation stratégique active, roadmap IA en 5 dimensions interdépendantes), 5 objectifs d'apprentissage, 5 ConceptCards sourcées (scenario planning vs prévision, évolutions techniques 3-10 ans, construction d'une roadmap IA stratégique 5 dimensions, veille vs anticipation stratégique, hiérarchisation temporelle 0-6/6-12/12-24 mois), 4 erreurs fréquentes (prédire un futur unique, roadmap purement technologique, confondre veille et anticipation, sous-estimer délai annonce-adoption 12-36 mois), cas réel principal MIT Initiative on the Digital Economy (MIT IDE) + mini-cas additionnel Future of Jobs Report (World Economic Forum) avec 4 leçons (enquête à grande échelle, évolution des compétences, distinction reskilling/upskilling, délais en années), activité pratique 4 étapes (~90-120 min) — **canvas roadmap qui sert également de préparation au capstone**, quiz formatif 7 questions avec scoring bands, checklist manager 12 items en 3 groupes (vision-anticipation / roadmap structurée / budget-risques-exécution), 5 questions d'application avec encart consultant explicitement sur la préparation du capstone, 5 takeaways finaux dont la synthèse du parcours, 6 ressources sourcées (MIT IDE, WEF Future of Jobs, MIT CCI Generative AI and Collective Intelligence, NIST AI RMF, AI Act EU FR avec calendrier, canvas Module 6), navigation prev vers Module 5 et next vers index modules (clôt naturellement le parcours).
  - Quiz data externalisé : `src/content/quizzes/module-6.ts` (143 lignes) — 7 questions sur scenario planning, anticipation stratégique, construction de roadmap, hiérarchisation temporelle, jugement sur consultants externes.
  - Canvas téléchargeable : `public/downloads/canvas-roadmap-ia-module-6.md` (263 lignes) — le plus complet des 6 canvases. Construction de roadmap IA stratégique en 4 étapes (vision et cartographie de maturité 8 dimensions / 3 scénarios contrastés et actions robustes / use cases prioritaires scorés VxF-R / plan 12-24 mois 5 dimensions avec budget et risques) + synthèse roadmap une page + auto-évaluation 10 critères. **Sert également de préparation directe au capstone** du parcours pédagogique (Phase 4.10 prévue).
  - 2 stubs EN/AR (`/en/modules/06-futur-ia/`, `/ar/modules/06-futur-ia/`).
  - Mises à jour : home FR / programme / modules index activent Module 6 (`available=true`). **Tous les 6 modules sont maintenant disponibles**.
  - Build validé : 37 pages générées (1 root + 12 FR + 12 EN + 12 AR), 0 erreur / 0 warning / 0 hint Astro check sur 81 fichiers.

**🎯 Jalon majeur — Tous les 6 modules du parcours pédagogique sont publiés :**
  - Module 1 : Introduction à l'IA (cadre stratégique)
  - Module 2 : Machine Learning en entreprise
  - Module 3 : IA générative en entreprise
  - Module 4 : Robotique en entreprise
  - Module 5 : IA dans l'entreprise et la société (gouvernance, éthique, conformité, travail)
  - Module 6 : Futur de l'IA (scenario planning, roadmap stratégique, préparation capstone)

**Statistiques cumulées Phase 4.6** : 12 pages FR principales (home, programme, modules index, méthode, à propos, mentions légales, M1-M6) + 12 pages EN (stubs Phase 7) + 12 pages AR (stubs Phase 7) + page racine = 37 pages buildées. 6 quiz typés (7 questions × 6 modules = 42 questions formatives au total). 6 canvases téléchargeables. ~7 200 lignes de contenu rédigé en français. 26 composants Astro (inchangés depuis Phase 4.1b sub-1 — pattern stable et scalable validé sur 6 modules).

- Phase 4.5 — Module 5 (IA dans l'entreprise et la société) :
  - Page Module 5 FR (`/fr/modules/05-ia-societe/`) : 872 lignes, ~3000 mots, structure identique aux Modules 1-4 (11 sections selon gabarit). Synthèse exécutive 3 paragraphes (gouvernance IA structurante non optionnelle, conformité comme seuil minimum vs éthique plus exigeante, question centrale du dirigeant sur la gouvernance opérationnelle), 5 objectifs d'apprentissage, 5 ConceptCards sourcées (éthique vs conformité, gouvernance IA opérationnelle 3 composantes, AI Act EU et 4 catégories de risque, impact IA sur le travail perspective David Autor MIT, dialogue social RGPD et conformité élargie), 4 erreurs fréquentes (confondre éthique et conformité, comité d'éthique sans pouvoir de décision, sous-estimer AI Act et RGPD, communiquer en AI washing sans mécanismes réels), cas réel principal NIST AI Risk Management Framework + mini-cas additionnel AI Act EU et classification haut risque (4 leçons : approche par le risque, usages ordinaires haut risque, application progressive, sanctions substantielles), activité pratique 4 étapes (~60-90 min), quiz formatif 7 questions avec scoring bands, checklist manager 12 items en 3 groupes (gouvernance et comité IA / éthique-biais-impact / conformité-transparence), 5 questions d'application avec encart consultant (atelier 3h DG+DSI+DPO+DRH+Conformité+RSSI+IRP), 5 takeaways finaux, 6 ressources sourcées (NIST AI RMF, AI Act EU 2024/1689 FR, Principes OCDE FR, MIT News David Autor, Brynjolfsson Li Raymond NBER w31161, canvas Module 5), navigation prev/next vers Module 4 et Module 6.
  - Quiz data externalisé : `src/content/quizzes/module-5.ts` (142 lignes) suivant le pattern Modules 1-4.
  - Canvas téléchargeable : `public/downloads/canvas-charte-gouvernance-ia-module-5.md` (222 lignes) — charte de gouvernance IA en 4 étapes (portée et 5 principes / gouvernance opérationnelle composition+mandat+processus / cartographie obligations légales AI Act+RGPD+sectoriel+standards / transparence-explicabilité-redressement avec délais quantifiés) + synthèse charte une page + auto-évaluation 8 critères.
  - 2 stubs EN/AR (`/en/modules/05-ia-societe/`, `/ar/modules/05-ia-societe/`).
  - Mises à jour : home FR / programme / modules index activent Module 5 (`available=true`).
  - Build validé : 34 pages générées (1 root + 11 FR + 11 EN + 11 AR), 0 erreur / 0 warning / 0 hint Astro check sur 77 fichiers.

- Phase 4.4 — Module 4 (Robotique en entreprise) :
  - Page Module 4 FR (`/fr/modules/04-robotique/`) : 845 lignes, ~3000 mots, structure identique aux Modules 1-3 (11 sections selon gabarit). Synthèse exécutive 3 paragraphes (robotique mature en mouvement avec cobots et IA, décision en 3 axes, payback 18-36 mois cible), 5 objectifs d'apprentissage, 5 ConceptCards sourcées (3 familles robotiques industriel/cobot/AMR, 3 piliers perception+planification+contrôle, sécurité humain-machine et cadre normatif ISO 10218 + ISO/TS 15066 + Directive Machines, coût total réel intégration 50-70%, cadrage économique et social), 4 erreurs fréquentes (comparer prix sans coût total, confondre standalone et collaboratif, sous-estimer enjeux RH/social/juridique, négliger maintenance et run), cas réel principal Amazon Robotics et DeepFleet (1M+ robots déployés selon comm. officielles) + mini-cas additionnel Universal Robots et la robotique pour PME (4 leçons : accessibilité ne réduit pas intégration, reconfigurabilité a une vraie valeur, marché normatif évolue, écosystème compte autant que le robot), activité pratique 4 étapes (~60-90 min), quiz formatif 7 questions avec scoring bands, checklist manager 12 items en 3 groupes (cadrage technique / sécurité et conformité / économie et social — incluant CSE, plan de formation, accompagnement), 5 questions d'application avec encart consultant (atelier 3h DSI+Direction Industrielle+DRH+SST+IRP), 5 takeaways finaux, 6 ressources sourcées (MIT OCW 2.12 Intro to Robotics, Amazon news officiel million de robots, NIST AI RMF, AI Act EU FR, Principes OCDE FR, canvas Module 4), navigation prev/next vers Module 3 et Module 5.
  - Quiz data externalisé : `src/content/quizzes/module-4.ts` (142 lignes) suivant le pattern Modules 1-3.
  - Canvas téléchargeable : `public/downloads/canvas-evaluation-projet-robotique-module-4.md` (194 lignes) — évaluation projet robotique en 4 étapes (poste / famille / sécurité+intégration / coût total et payback) avec auto-évaluation 8 critères incluant traitement de la dimension RH.
  - 2 stubs EN/AR (`/en/modules/04-robotique/`, `/ar/modules/04-robotique/`).
  - Mises à jour : home FR / programme / modules index activent Module 4 (`available=true`).
  - Build validé : 31 pages générées (1 root + 10 FR + 10 EN + 10 AR), 0 erreur / 0 warning / 0 hint Astro check sur 73 fichiers.

- Phase 4.3 — Module 3 (IA générative en entreprise) :
  - Page Module 3 FR (`/fr/modules/03-ia-generative/`) : 819 lignes, ~3000 mots, structure identique aux Modules 1-2 (11 sections selon gabarit). Synthèse exécutive 3 paragraphes (foundation models et économie GenAI, hallucinations structurelles + garde-fous obligatoires, question stratégique du dirigeant + pipeline de formation interne), 5 objectifs d'apprentissage, 5 ConceptCards sourcées (foundation models et économie GenAI, prompting/RAG/fine-tuning, hallucinations et garde-fous, décomposer le workflow plutôt qu'automatiser avec exemple analyse contractuelle, coût total automatisation 6 lignes), 4 erreurs fréquentes (prendre une réponse plausible pour vraie / sous-estimer coût total / confondre démo et opérationnel / casser pipeline formation juniors-seniors), cas réel principal Morgan Stanley AskResearchGPT et Debrief + mini-cas additionnel étude conjointe GitHub × Accenture sur Copilot (4 leçons transposables : impact à l'échelle, augmentation vs remplacement, adoption critique, qualité à mesurer), activité pratique 4 étapes (~60-90 min), quiz formatif 7 questions (3 compréhension / 3 application / 1 jugement) avec scoring bands et explications pointant vers les sections, checklist manager 12 items en 3 groupes (cadrage cas / garde-fous et conformité / économie et organisation), 5 questions d'application avec encart consultant (atelier 3h métier élargi DSI+métier+data+conformité+RH), 5 takeaways finaux, 6 ressources sourcées (MIT OCW 6.S087 Foundation Models, MIT Sloan Ideas business use cases GenAI, MIT Executive Education Present and Future, Brynjolfsson Li Raymond NBER w31161 Generative AI at Work, GitHub × Accenture étude Copilot, canvas Module 3), navigation prev/next vers Module 2 et Module 4.
  - Quiz data externalisé : `src/content/quizzes/module-3.ts` (141 lignes) suivant le pattern Modules 1-2.
  - Canvas téléchargeable : `public/downloads/canvas-pilote-genai-module-3.md` (199 lignes) — brief de pilote GenAI en 4 étapes (workflow décomposé / sous-tâches qualifiées / architecture + 9 garde-fous / coût total 6 lignes + valeur 12 mois) avec auto-évaluation 7 critères.
  - 2 stubs EN/AR (`/en/modules/03-ia-generative/`, `/ar/modules/03-ia-generative/`).
  - Mises à jour : home FR / programme / modules index activent Module 3 (`available=true`).
  - Build validé : 28 pages générées (1 root + 9 FR + 9 EN + 9 AR), 0 erreur / 0 warning / 0 hint Astro check sur 69 fichiers.

- Phase 4.2 — Module 2 (Machine Learning en entreprise) :
  - Page Module 2 FR (`/fr/modules/02-machine-learning/`) : 815 lignes, ~3000 mots, structure identique au Module 1 (11 sections selon gabarit). Synthèse exécutive 3 paragraphes (familles ML, conditions de viabilité, question stratégique pour le dirigeant), 5 objectifs d'apprentissage, 5 ConceptCards sourcées (3 familles ML, 4 conditions de viabilité, surapprentissage et généralisation, modèle vs système 5 couches, cadrage stratégique Porter pour ML), 4 erreurs fréquentes structurées (précision vs ROI, sous-estimer étiquetage, corrélation vs causalité, ignorer drift et usure), cas réel principal Stripe Radar (paiements, supervisé à grande échelle) + mini-cas additionnel Recherche MIT Regina Barzilay (dépistage cancer du sein), activité pratique 4 étapes (~45-90 min) avec critères, quiz formatif 7 questions (3 compréhension / 3 application / 1 jugement) avec scoring bands 0-3 / 4-5 / 6-7 et explanations pointant vers les sections (« À revoir : §3.4 »), checklist manager 12 items en 3 groupes (cadrage technique / données et conformité / stratégie et gouvernance), 5 questions d'application transposables, encart consultant, 5 takeaways finaux, 6 ressources sourcées (MIT OCW Intro to ML, Stripe primer ML/fraude FR, recherche MIT Barzilay, NIST AI RMF, AI Act EU FR, canvas Module 2), navigation prev/next vers Module 1 et Module 3.
  - Quiz data externalisé : `src/content/quizzes/module-2.ts` (142 lignes) suivant le pattern Module 1.
  - Canvas téléchargeable : `public/downloads/canvas-evaluation-cas-ml-module-2.md` (168 lignes) — évaluation de cas d'usage ML en 4 étapes (description / qualité données 4 dimensions / cadrage stratégique / valeur vs coût total) avec auto-évaluation 6 critères.
  - 2 stubs EN/AR (`/en/modules/02-machine-learning/`, `/ar/modules/02-machine-learning/`).
  - Mises à jour : home FR / programme / modules index activent Module 2 (`available=true`). La logique home FR est aussi nettoyée (utilise désormais `m.available` du tableau au lieu d'une condition `i === 0`).
  - Build validé : 25 pages générées (1 root + 8 FR + 8 EN + 8 AR), 0 erreur / 0 warning / 0 hint Astro check sur 65 fichiers.

- Phase 4.1b sub-3 — Enrichissement quiz Module 1 + schéma React Phase 5 + canvas téléchargeable :
  - **Externalisation des données quiz** : nouveau fichier `src/content/quizzes/module-1.ts` avec le quiz typé selon le schéma canonique. Pattern à suivre pour M2-M6 et capstone (un fichier par module). Le contenu rédigé en sub-2 a été enrichi : explications pédagogiques étendues avec pointeurs vers les sections du module à revoir (« À revoir : §3.1 »), ce qui permet au quiz de jouer un vrai rôle diagnostique, pas uniquement évaluatif.
  - **Schéma TypeScript canonique** : nouveau fichier `src/lib/quiz-schema.ts` qui définit `Quiz`, `QuizQuestion`, `ScoringBand`, et — en forward-compat documenté — `QuizState`, `QuizAttempt` pour la Phase 5. Tuple strict `options: [string, string, string, string]` et littéral `correctIndex: 0 | 1 | 2 | 3` rendent les erreurs de structure impossibles. Helpers `findScoringBand()` et `validateQuiz()` exportés.
  - **Scoring guidance pédagogique** : `<QuizPlaceholder />` étendu pour afficher 3 bandes de score interprétées (0-3 / 4-5 / 6-7) avant les questions, dans un encart accent-bg pliable via `<details>` natif. Le ton est encourageant et progressionnel, pas évaluatif (l'objectif du quiz est diagnostique, pas certifiant).
  - **Canvas téléchargeable** : `public/downloads/canvas-cadrage-ia-module-1.md` (~140 lignes) qui dépouille les 4 étapes de l'activité pratique en tableaux + champs à remplir + critères d'auto-évaluation. Imprimable A4 paysage, copiable dans Notion/Obsidian/Word, utilisable comme support d'atelier collectif. Lien activé dans le composant `<Activity />` de la page Module 1.
  - **ADR de migration** : `docs/architecture/quiz-schema-decision.md` documente la décision de séparer données et rendu, et précise le plan de migration Phase 5 (créer `<Quiz client:load>` qui consomme le même schéma, basculer en remplaçant 6 lignes par page module, ~200 lignes de React au total).
  - Build validé : 22 pages, 61 fichiers Astro check, 0 erreur / 0 warning / 0 hint. Canvas téléchargeable accessible sous `/downloads/canvas-cadrage-ia-module-1.md`.


  - Page Module 1 FR (`/fr/modules/01-introduction-ia/`) : 883 lignes, ~3000 mots, 11 sections selon le gabarit module.md. Sommaire sticky avec scrollspy IntersectionObserver, synthèse exécutive distincte (3-5 min), 5 objectifs d'apprentissage transversaux, 5 ConceptCards sourcées (IA étroite vs générale, histoire en 3 vagues, intelligence collective et superminds Thomas Malone, IA comme système socio-technique, cadrage stratégique Porter), 4 erreurs fréquentes structurées (perf vs valeur business, IA prête à l'emploi vs système, sous-estimation de l'humain, hors-stratégie), cas réel principal Takeda × MIT CCI + mini-cas Morgan Stanley AI @ Morgan Stanley, activité pratique 4 étapes (~30-60 min) avec critères d'évaluation, quiz formatif 7 questions (3 compréhension / 3 application / 1 jugement) avec réponses et explications pédagogiques, checklist manager 12 items en 3 groupes (cadrage stratégique / évaluation système / préparation décision), 5 questions d'application transposables, encart consultant, 5 takeaways finaux, 6 ressources sourcées (MIT Sloan Ideas, MIT OCW AI 101, Superminds, NIST AI RMF, OCDE Principes, MIT News Autor), navigation prev/next vers Programme et Module 2.
  - 2 stubs EN/AR (`/en/modules/01-introduction-ia/`, `/ar/modules/01-introduction-ia/`) avec `<TranslationPending />`.
  - Mises à jour : home FR active Module 1 dans la grille (premier `available=true`), page Programme active Module 1 dans le tableau et dans le CTA final, page Index Modules active Module 1 dans la grille.
  - Build validé : 22 pages générées (1 root + 7 FR + 7 EN + 7 AR), 0 erreur / 0 warning / 0 hint Astro check sur 59 fichiers.


  - Page Programme FR (`/fr/programme/`) : hero secondaire, bandeau de 4 stats clés (6 modules, 6-8h/sem, 6 sem, trilingue), fiche d'identité du programme MIT en 8 lignes, IndependenceNotice block, tableau des 6 modules avec statut "Bientôt disponible", liste des 7 résultats d'apprentissage transversaux, matrice de Bloom des 6 compétences (compétence × niveau × modules + capstone), 4 piliers d'approche pédagogique (triple lecture, hiérarchie sources, médias multiformat, capstone fil rouge), CapstonePreview en encart sombre avec accent, FAQ excerpt en 5 questions/réponses (`<details>` natif accessible), CTA pair final pointant vers Module 1 (désactivé) et index modules. ~480 lignes.
  - Page Index Modules FR (`/fr/modules/`) : hero secondaire, grille de 6 ModuleCard (toutes en état `available=false`), encart d'état de publication renvoyant au CHANGELOG.
  - 6 nouveaux composants : `<StatsBar />` (grille de chiffres clés), `<IdentityTable />` (tableau 2 colonnes label/valeur), `<ModulesTable />` (tableau récapitulatif 4 colonnes avec liens conditionnels), `<OutcomesList />` (liste avec icône check Lucide), `<BloomMatrix />` (tableau compétence × Bloom × modules avec chips), `<CapstonePreview />` (encart sombre avec accent et CTA dominant).
  - 4 stubs EN/AR (`/en/programme/`, `/en/modules/`, `/ar/programme/`, `/ar/modules/`) utilisant `<TranslationPending />`.
  - Build validé : 19 pages générées (1 root + 6 FR + 6 EN + 6 AR), 0 erreur Astro check sur 45 fichiers.

### Deferred (open decisions)
- Type d'hébergement OVH (mutualisé / VPS / Cloud) — bloque l'activation du workflow `deploy.yml`.
- Domaine final — bloque le remplacement du placeholder `ai-strategy.example.com`.
- Polices IBM Plex `.woff2` — fallback système OK en attendant la Phase 7.

---

## Format des messages de commit

Le projet utilise [Conventional Commits](https://www.conventionalcommits.org/fr/v1.0.0/) :

| Type | Usage |
| --- | --- |
| `feat` | Nouvelle fonctionnalité utilisateur |
| `fix` | Correction d'un bug |
| `docs` | Documentation uniquement |
| `style` | Mise en forme (ne change pas le sens) |
| `refactor` | Réécriture sans changement fonctionnel |
| `perf` | Amélioration de performance |
| `test` | Ajout ou correction de tests |
| `build` | Système de build, dépendances |
| `ci` | Configuration CI/CD |
| `chore` | Tâches diverses, maintenance |
| `content` | Ajout ou modification de contenu pédagogique |

Exemple : `content(modules): add module 1 introduction to AI in French`
