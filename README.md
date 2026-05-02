# AI Strategy

> Site pédagogique trilingue **indépendant**, inspiré du programme MIT Sloan Executive Education
> *Artificial Intelligence: Implications for Business Strategy*.
>
> **🇫🇷 Français (langue prioritaire) · 🇬🇧 English · 🇸🇦 العربية**

[🇬🇧 English version of this README](./README.en.md)

[![License: MIT (code)](https://img.shields.io/badge/license--code-MIT-blue.svg)](./LICENSE-CODE)
[![License: CC BY-NC-SA 4.0 (content)](https://img.shields.io/badge/license--content-CC%20BY--NC--SA%204.0-lightgrey.svg)](./LICENSE-CONTENT)
[![Astro](https://img.shields.io/badge/built%20with-Astro-FF5D01.svg)](https://astro.build/)
[![Status: Phase 1](https://img.shields.io/badge/status-Phase%201%20Cadrage-yellow.svg)](./docs/cadrage/planning.md)

---

## ✨ Vision en une phrase

Un site éditorial **business-first**, **trilingue** et **rigoureusement sourcé** qui rend les enjeux managériaux et stratégiques de l'intelligence artificielle accessibles aux dirigeants, consultants, enseignants et étudiants en management.

## 🎯 À qui s'adresse ce site

Le site est conçu pour servir simultanément **trois audiences principales** :

| Audience | Usage typique |
| :--- | :--- |
| **Dirigeants et top management** | Briefings exécutifs, notes de cadrage, roadmap IA d'entreprise |
| **Consultants et responsables transformation** | Templates clients, matrices de décision, livrables réutilisables |
| **Enseignants et étudiants en management/SI** | Fiches pédagogiques, quiz, rubrics, dispositif d'évaluation |

Chaque page est rédigée pour être **lisible aux trois niveaux** : synthèse exécutive, contenu pédagogique complet, annexes opérationnelles téléchargeables.

## 🧭 Vue d'ensemble du programme MIT analysé

Le programme *Artificial Intelligence: Implications for Business Strategy* est proposé par MIT Sloan School of Management et MIT Computer Science and Artificial Intelligence Laboratory (CSAIL), au format en ligne, auto-rythmé, sur six semaines, à raison de 6 à 8 heures par semaine. Son orientation est **résolument managériale et stratégique, non technique**, et il aboutit à un projet individuel de roadmap IA.

Le site couvre les six modules du programme :

1. **Introduction à l'intelligence artificielle**
2. **Machine Learning en entreprise**
3. **IA Générative en entreprise**
4. **Robotique en entreprise**
5. **IA dans l'entreprise et la société**
6. **Futur de l'intelligence artificielle**

➡️ Voir le [rapport analytique complet du certificat](./docs/cadrage/charte-de-cadrage.md#programme-mit-de-référence) pour le détail des sources et le niveau de certitude de chaque information.

## 🏗️ Stack et architecture

| Couche | Choix |
| :--- | :--- |
| **Framework** | [Astro](https://astro.build/) (content-first, MDX, îlots interactifs) |
| **Langues** | FR (priorité), EN, AR (avec support RTL) |
| **Routing i18n** | Sous-dossiers symétriques `/fr/`, `/en/`, `/ar/` |
| **Composants interactifs** | React en îlots Astro (quiz, matrices, roadmap builder) |
| **Persistance** | `localStorage` pour quiz et progression — aucun backend, RGPD-safe |
| **Direction visuelle** | *Consulting Modern* — sans-serif (IBM Plex), blanc pur, navy + accent bleu |
| **Hébergement cible** | Infrastructure OVH (déploiement via GitHub Actions) |
| **Build** | 100 % statique |

## 📚 Médias pédagogiques prévus

Au-delà des pages web, le site propose plusieurs formats complémentaires :

- **~30 fiches PDF téléchargeables** (synthèses module + extraits granulaires : concepts, cas, outils, quiz)
- **Saison 1 de podcast — 10 épisodes liés** générés via NotebookLM, format `.m4a`
- **Slides et infographies** générés via NotebookLM, intégrés en visualisation et téléchargement
- **Vidéos YouTube pertinentes** sélectionnées et intégrées avec contextualisation
- **Quiz interactifs** avec scoring local et badges de progression

Le détail des médias et des prompts NotebookLM associés sera produit en Phase 6 (voir [planning](./docs/cadrage/planning.md)).

## 📂 Structure du repository

```
ai-strategy/
├── README.md                    # Présentation FR (vous y êtes)
├── README.en.md                 # Présentation EN
├── LICENSE-CODE                 # MIT — pour le code source
├── LICENSE-CONTENT              # CC BY-NC-SA 4.0 — pour le contenu pédagogique
├── CHANGELOG.md                 # Historique des modifications
├── .gitignore                   # Exclusions Git (Astro-ready)
│
├── docs/                        # Documentation projet
│   ├── README.md                # Index de la documentation
│   └── cadrage/                 # Phase 1 — Cadrage stratégique
│       ├── charte-de-cadrage.md # Document maître consolidant les 10 décisions
│       ├── planning.md          # Planning détaillé en 7 phases
│       └── decisions-log.md     # Journal des décisions (ADR)
│
├── (à venir Phase 2+)
├── src/                         # Code source Astro
├── public/                      # Assets statiques (fiches PDF, médias)
└── prompts/                     # Prompts NotebookLM (un fichier par podcast/slide/infographie)
```

## 🚀 État d'avancement

Le projet suit un **planning en 7 phases**. État courant :

| Phase | Statut | Description |
| :--- | :--- | :--- |
| **1. Cadrage et identité** | 🟡 En cours | Charte de cadrage, planning, décisions structurantes |
| 2. Architecture et design system | ⚪ À venir | Sitemap, gabarits, design tokens, personas |
| 3. Squelette technique | ⚪ À venir | Scaffolding Astro, i18n, CI/CD OVH |
| 4. Contenus pédagogiques FR | ⚪ À venir | Pages web, modules, cas, glossaire |
| 5. Composants interactifs et fiches | ⚪ À venir | Quiz, matrices, fiches PDF, roadmap builder |
| 6. Prompts NotebookLM et médias | ⚪ À venir | Podcasts, slides, infographies |
| 7. SEO, QA, traductions EN/AR | ⚪ À venir | Optimisation finale et internationalisation |

➡️ Détail complet : [docs/cadrage/planning.md](./docs/cadrage/planning.md)

## 🔬 Principes éditoriaux

Quatre engagements de rigueur structurent tout le contenu produit dans ce repo :

1. **Hiérarchie des sources visible.** Chaque affirmation est rattachée à un niveau de preuve : `Source officielle MIT`, `Complément recommandé`, `Reconstruction pédagogique`, `À vérifier`.
2. **Aucune source inventée.** Pas de citation fictive, pas de statistique non vérifiable, pas de cas d'entreprise non documenté publiquement.
3. **Indépendance assumée vis-à-vis de MIT.** Ce site n'est ni affilié, ni validé, ni certifié par MIT. C'est une ressource pédagogique indépendante inspirée des thématiques publiques du programme.
4. **Respect des droits d'auteur.** Aucune reproduction du contenu propriétaire MIT. Synthèses et reformulations originales avec citations courtes et sourcées.

## 📜 Licences

Le projet utilise une **double licence** :

- **Code** (Astro components, scripts, configuration) : [MIT License](./LICENSE-CODE)
- **Contenu pédagogique** (Markdown, fiches PDF, illustrations, podcasts, etc.) : [CC BY-NC-SA 4.0](./LICENSE-CONTENT)

En clair : le code est librement réutilisable, le contenu pédagogique aussi à condition de citer la source, de ne pas en faire un usage commercial, et de partager les œuvres dérivées sous la même licence.

## 🤝 Contribuer

Le projet est en phase de construction active par son auteur principal. Pour contribuer ou signaler une erreur :

- Ouvrir une [Issue](https://github.com/melafrit/ai-strategy/issues) pour signaler un problème ou suggérer une amélioration
- Ouvrir une Pull Request pour proposer une correction ou un ajout

Toutes les contributions de contenu doivent respecter les principes éditoriaux ci-dessus.

## 👤 Auteur

**Mohamed El Afrit** — Enseignant Formateur et Consultant en Ingénierie Logicielle, Data Science, Management de projet et Systèmes d'Informations.

---

*Dernière mise à jour de ce README : Phase 1, mai 2026.*
