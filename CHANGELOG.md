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
- Production des contenus FR : modules 1 à 6, ~10 études de cas, glossaire ~30 termes, FAQ, capstone.
- Premières fiches PDF via composants markdown stylisés.
- Activation des contenus dans `src/content/<lang>/...`.

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
