# Phase 1 — Cadrage et identité

Cette section regroupe les **trois documents de cadrage** produits en Phase 1 du projet, avant tout démarrage de la production technique.

Elle constitue le **référentiel partagé** auquel toutes les phases ultérieures se réfèrent pour rester cohérentes avec les arbitrages initiaux.

## 📚 Documents

| Document | Rôle |
| :--- | :--- |
| [`charte-de-cadrage.md`](./charte-de-cadrage.md) | Document maître — vision, audiences, principes, et consolidation des 10 décisions structurantes |
| [`planning.md`](./planning.md) | Plan de production détaillé en 7 phases, avec livrables, critères d'acceptation et dépendances |
| [`decisions-log.md`](./decisions-log.md) | Journal des décisions au format ADR (Architecture Decision Records) — chaque décision avec son contexte, les alternatives examinées, le choix retenu et sa motivation |

## 🔄 Statut de la charte

La charte de cadrage est **vivante mais arbitrée** : elle peut évoluer si le contexte le justifie, mais toute modification structurante doit faire l'objet d'une discussion explicite et d'un commit `docs(cadrage):` documenté.

Le journal des décisions sert d'archive immuable : chaque décision y est ajoutée à sa date, et n'est jamais supprimée — seule une décision ultérieure peut la remplacer (avec mention explicite "Supersedes ADR-XXX").

## 🧪 Hiérarchie des sources mobilisées

Pour rester rigoureux dans les phases de production qui suivent, la charte établit quatre niveaux de preuve :

| Niveau | Étiquette utilisée dans le contenu | Confiance |
| :--- | :--- | :--- |
| 1 | `Source officielle MIT` | Très haute |
| 2 | `Complément recommandé` (MIT, NIST, OCDE, EU…) | Haute |
| 3 | `Reconstruction pédagogique` | Moyenne — explicitement signalée |
| 4 | `À vérifier dans le syllabus officiel complet` | Faible — à préciser ultérieurement |

Cette hiérarchisation est rappelée et appliquée dans toutes les pages module et études de cas.
