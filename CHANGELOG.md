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

### Planned (Phase 2)
- Architecture de l'information complète : sitemap, gabarits de pages.
- Design system : design tokens, composants, règles RTL.
- Personas utilisateurs détaillés.
- Parcours utilisateurs principaux.

### Planned (Phase 3)
- Scaffolding Astro avec configuration i18n FR/EN/AR.
- Workflow GitHub Actions de déploiement vers OVH.
- Composants de mise en page de base (Header, Footer, LanguageSwitcher).

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
