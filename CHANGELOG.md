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
- ~~Phase 4.2 à 4.6 : Modules 2 à 6 (un par sub-phase).~~ **→ Modules 2, 3 et 4 publiés, Phases 4.5 et 4.6 restent à venir**
- Phase 4.7-4.8 : 10 études de cas (Morgan Stanley, Stripe, GitHub Copilot, Amazon, Klarna, Takeda, etc.).
- Phase 4.9 : Glossaire (~30 termes).
- Phase 4.10 : FAQ + Capstone + Resources hub.

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
