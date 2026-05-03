# Décision technique — Schéma de données Quiz

> Décision d'implémentation prise lors de la Phase 4.1b sub-3 (Mai 2026)
> pour préparer la migration vers les quiz React interactifs en Phase 5.
> Complète `docs/architecture/skeleton-decisions.md`.

| Métadonnée | Valeur |
| :--- | :--- |
| **Date** | Mai 2026 |
| **Phase** | 4.1b sous-tour 3 |
| **Status** | Adopté |
| **Auteur** | Mohamed El Afrit |

---

## Contexte

Le programme prévoit ~50 questions de quiz au total (7 questions × 6 modules
+ ~8 capstone). En Phase 4, ces quiz sont rendus en mode **placeholder
statique** par le composant Astro `<QuizPlaceholder />` : les questions
sont visibles, les réponses sont accessibles via `<details>` natif, mais
il n'y a pas de scoring, pas de persistance, pas de feedback immédiat.

En Phase 5, ces placeholders doivent être remplacés par des **quiz
interactifs React** (avec localStorage, scoring temps réel, feedback
pédagogique). Le défi est de **préserver le contenu** (les ~50 questions
rédigées avec soin) lors de cette migration.

## Décision

Externaliser dès la Phase 4 toutes les données de quiz dans des fichiers
TypeScript dédiés sous `src/content/quizzes/`, typés selon un schéma
canonique partagé `src/lib/quiz-schema.ts`.

```
src/
├── lib/
│   └── quiz-schema.ts            # Types Quiz, QuizQuestion, ScoringBand, QuizState
├── content/
│   └── quizzes/
│       ├── module-1.ts            # Quiz Module 1 (7 questions)
│       ├── module-2.ts            # Phase 4.2
│       ├── module-3.ts            # Phase 4.3
│       ├── module-4.ts            # Phase 4.4
│       ├── module-5.ts            # Phase 4.5
│       ├── module-6.ts            # Phase 4.6
│       └── capstone.ts            # Phase 4.10
└── components/
    ├── QuizPlaceholder.astro      # Phase 4 — consomme le schéma
    └── Quiz.tsx                   # Phase 5 — consommera le même schéma
```

## Conséquences

### Positives

1. **Migration zéro réécriture.** En Phase 5, créer `<Quiz client:load>`
   suffit. Les pages module existantes basculent en remplaçant
   `<QuizPlaceholder>` par `<Quiz>` et passent le même `quiz` en props.
2. **Validation centralisée.** La fonction `validateQuiz()` du schéma
   peut être appelée par les tests Phase 5 ou par un script de CI pour
   catcher les regressions (réponse manquante, bands incohérents).
3. **Documentation forward-compat.** Les types `QuizState` et `QuizAttempt`
   sont déjà déclarés (mais pas consommés) — ce qui rassure le rédacteur
   du contenu : il sait que sa structure n'aura pas à changer.
4. **Réutilisation hors-page.** Le glossaire, le capstone, et un futur
   tableau de bord de progression (Phase 6+) peuvent tous consommer le
   même schéma, sans adapter le format.
5. **Type safety stricte.** TypeScript `correctIndex: 0 | 1 | 2 | 3` et
   tuple `options: [string, string, string, string]` rendent
   impossible un quiz avec 3 ou 5 options par accident.

### Négatives

1. **Lecture du contenu décorrélée du rendu.** Un relecteur doit ouvrir
   2 fichiers (page + quiz data) au lieu d'un. Mitigé par les noms de
   fichiers explicites et une convention de localisation cohérente.
2. **Pas de fallback Markdown/MDX.** Le quiz doit être en TypeScript pur
   (vs MDX comme certains contenus Phase 4.7+). Mais le quiz a une
   structure trop régulière pour bénéficier de MDX.

## Alternatives considérées

### A — Garder les quiz inline dans la page module

Solution la plus simple à court terme. Rejetée car :
- En Phase 5, il faudrait extraire 50 questions × 6 fichiers à la main —
  travail à risque (perte de contenu).
- Pas de validation centralisée possible.
- Type safety impossible sans répétition du shape dans chaque page.

### B — Stockage en JSON dans `src/content/`

Compatible avec Astro Content Collections. Rejetée car :
- JSON ne supporte pas les commentaires, qui sont précieux pour les
  explications pédagogiques rédigées en français.
- Astro Content Collections sont conçues pour le contenu MDX/Markdown
  avec frontmatter, pas pour des structures strictes typées.
- Le passage TypeScript → JSON pour le React island en Phase 5 serait
  inutile (le bundler résout les imports `.ts` directement).

### C — Headless CMS (Sanity, Strapi, etc.)

Rejetée car :
- Surdimensionné pour un site sans rédaction collaborative.
- Ajoute une dépendance tierce et un service à héberger.
- Complique l'engagement « contenu sourçable et auditable » du projet.

## Plan de migration Phase 5

Quand la Phase 5 démarre :

1. Créer `src/components/Quiz.tsx` (React functional component).
2. Lire `src/content/quizzes/module-N.ts` exactement comme aujourd'hui
   `<QuizPlaceholder>` le fait.
3. Implémenter le state local (React `useReducer`) + persistance
   `localStorage` clé `quiz:${quiz.id}` au format `QuizState`.
4. Ajouter le scoring final basé sur `findScoringBand()` du schéma.
5. Dans chaque page module, remplacer :
   ```astro
   <QuizPlaceholder ... />
   ```
   par :
   ```astro
   <Quiz client:load quiz={quizModuleN} />
   ```
6. Conserver `<QuizPlaceholder />` comme fallback pour les bots/SEO et
   les utilisateurs sans JavaScript (rendu serveur uniquement).

L'ensemble de la migration tient en ~200 lignes de code React + 6 lignes
modifiées par page module.

## Références

- `src/lib/quiz-schema.ts` — Schéma TypeScript canonique
- `src/content/quizzes/module-1.ts` — Premier instance (Phase 4.1b)
- `src/components/QuizPlaceholder.astro` — Consommateur Phase 4
- `docs/cadrage/charte-de-cadrage.md` §6 — Conventions pédagogiques quiz
- `docs/cadrage/decisions-log.md` ADR-009 — Quiz interactif + localStorage RGPD-safe
