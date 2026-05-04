# AI Strategy

> Site pédagogique trilingue **indépendant**, inspiré du programme MIT Sloan Executive Education
> *Artificial Intelligence: Implications for Business Strategy*.
>
> **🇫🇷 Français (langue prioritaire) · 🇬🇧 English · 🇸🇦 العربية**

[🇬🇧 English version of this README](./README.en.md)

[![License: MIT (code)](https://img.shields.io/badge/license--code-MIT-blue.svg)](./LICENSE-CODE)
[![License: CC BY-NC-SA 4.0 (content)](https://img.shields.io/badge/license--content-CC%20BY--NC--SA%204.0-lightgrey.svg)](./LICENSE-CONTENT)
[![Astro](https://img.shields.io/badge/built%20with-Astro-FF5D01.svg)](https://astro.build/)
[![Status: v1.0.0 trilingual](https://img.shields.io/badge/status-v1.0.0%20trilingual-success.svg)](./CHANGELOG.md)
[![Languages: FR · EN · AR](https://img.shields.io/badge/languages-FR%20%C2%B7%20EN%20%C2%B7%20AR-blue.svg)](./README.md)

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

**Statut : v1.0.0 — production-ready trilingue.** Le projet a complété ses 7 phases de planning initial, et 7 étapes additionnelles d'approfondissement Post-Phase 7.

| Phase | Statut | Description |
| :--- | :--- | :--- |
| **1. Cadrage et identité** | ✅ Terminée | Charte de cadrage, planning, décisions structurantes |
| **2. Architecture et design system** | ✅ Terminée | Sitemap, gabarits, design tokens, personas |
| **3. Squelette technique** | ✅ Terminée | Scaffolding Astro, i18n FR/EN/AR, CI/CD |
| **4. Contenus pédagogiques FR** | ✅ Terminée | 6 modules + 10 cas + glossaire 31 termes + 20 FAQ + capstone |
| **5. Composants interactifs et fiches** | ✅ Terminée | Quiz, matrices, rubrics, capstone canvas |
| **6. Prompts NotebookLM et médias** | ✅ Terminée | 10 prompts NotebookLM préparés (production podcasts FR pending) |
| **7. SEO, QA, traductions EN/AR** | ✅ Terminée | Audit qualité trilingue + traductions |

### 🌍 Post-Phase 7 — Approfondissement trilingue (v1.0.0)

| Étape | Statut | Livrable |
| :--- | :--- | :--- |
| **1. Prompts NotebookLM** | ✅ | 10 prompts FR + README |
| **2. Modules EN** | ✅ | M1–M6 traduits + 6 quiz EN |
| **3. Cas détaillés EN** | ✅ | 10/10 cas traduits |
| **4. Capstone EN** | ✅ | 1 082 lignes, parité FR (8 sections, exemple PME, rubrics 7×4) |
| **5. Glossaire EN/AR** | ✅ | 31 termes longDef + example × 2 langues |
| **A. Polish SEO trilingue** | ✅ | 66/66 pages clean (titles 25-65, descriptions 100-165) |
| **D. FAQ EN/AR à parité** | ✅ | 20 questions × 3 langues = 60 entrées Q+A |
| **E. Schema.org JSON-LD** | ✅ | Organization+WebSite (97 pages) + FAQPage (×3) + Course (×3) |

➡️ Détail complet : [CHANGELOG.md](./CHANGELOG.md)

### 📊 Couverture v1.0.0

- **98 pages buildées** (39 FR + 29 EN + 29 AR + assets) en ~14 s
- **Astro check** : 0 erreurs / 0 warnings / 0 hints sur 147 fichiers
- **Audit SEO trilingue** : FR 28/28 + EN 28/28 + AR 10/10 pages clean
- **Schema.org JSON-LD** : Organization global + WebSite global + FAQPage trilingue + Course trilingue
- **Stubs `TranslationPending`** : 18 pages AR (modules / cas / capstone / podcasts) intentionnellement non traduites — design choice, signalé explicitement aux lecteurs avec lien vers FR équivalent.

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

*Dernière mise à jour de ce README : v1.0.0 — Post-Phase 7, mai 2026.*
