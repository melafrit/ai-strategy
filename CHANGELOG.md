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
- Scaffolding Astro avec configuration i18n FR/EN/AR.
- Workflow GitHub Actions de déploiement vers OVH.
- Composants de mise en page de base (Header, Footer, LanguageSwitcher, IndependenceNotice).
- Mise en place Tailwind avec import des design tokens.
- Tests Pa11y et Lighthouse en CI.

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
