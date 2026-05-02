# Gabarits de pages — AI Strategy

Cette section regroupe les **9 gabarits de pages** qui structurent l'ensemble du site. Chaque gabarit est un **contrat** entre l'architecture de l'information, le design system, et le contenu rédactionnel : il fixe les sections obligatoires, les composants utilisés, et les microcopies attendues.

## 📚 Index des gabarits

| Gabarit | Pages concernées | Fichier |
| :--- | :--- | :--- |
| Home | `/{lang}/` | [`home.md`](./home.md) |
| Overview programme | `/{lang}/programme/`, `/{lang}/modules/` | [`overview.md`](./overview.md) |
| Module | `/{lang}/modules/{slug}/` | [`module.md`](./module.md) |
| Étude de cas | `/{lang}/cas/`, `/{lang}/cas/{slug}/` | [`case-study.md`](./case-study.md) |
| Ressources | `/{lang}/ressources/` et sous-pages | [`resources.md`](./resources.md) |
| Quiz | `/{lang}/quiz/` | [`quiz.md`](./quiz.md) |
| Capstone | `/{lang}/capstone/` | [`capstone.md`](./capstone.md) |
| Glossaire | `/{lang}/glossaire/` | [`glossary.md`](./glossary.md) |
| FAQ | `/{lang}/faq/` | [`faq.md`](./faq.md) |

## 🧱 Structure commune à tous les gabarits

Chaque fichier de gabarit suit la même charpente documentaire :

1. **Métadonnées** (version, gabarit, statut)
2. **Objectif et audience cible** — pour quoi ce gabarit existe-t-il, qui en est le bénéficiaire principal
3. **Wireframe textuel** — schéma low-fidelity en ASCII/Markdown
4. **Sections obligatoires** — liste ordonnée avec contenu minimal
5. **Sections optionnelles** — variantes selon le contexte
6. **Composants utilisés** — référence vers `docs/design-system/components.md`
7. **Microcopies clés** — labels, CTAs, placeholders en FR/EN/AR
8. **CTA principal et secondaires** — actions attendues du visiteur
9. **Données nécessaires (frontmatter MDX)** — schéma TypeScript-like
10. **SEO** — balises essentielles
11. **Accessibilité** — points spécifiques au gabarit
12. **Points de vigilance** — pièges identifiés

## 🎯 Rappel des audiences (cf. ADR-004)

- **Dirigeants et top management** — synthèse exécutive, board memo, decision-ready content
- **Consultants et responsables transformation** — templates, matrices, livrables réutilisables
- **Enseignants et étudiants en management/SI** — pédagogie, quiz, rubrics, cas d'application

Chaque gabarit indique comment la **triple lecture** (synthèse exécutive / contenu pédagogique / annexes opérationnelles) se matérialise concrètement.

## 🔗 Documents associés

- [Sitemap](../sitemap.md)
- [Taxonomie](../taxonomy.md)
- [Catalogue de composants](../../design-system/components.md) — produit en parallèle de cette phase
- [Personas et parcours](../../personas-parcours/) — éclaire les choix d'audience
