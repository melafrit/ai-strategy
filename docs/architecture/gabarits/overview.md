# Gabarit — Vue d'ensemble du programme

| Métadonnée | Valeur |
| :--- | :--- |
| **Gabarit** | Overview |
| **URL pattern** | `/{lang}/programme/` (et variante index `/{lang}/modules/`) |
| **Version** | 1.0 |
| **Statut** | Ratifié |

---

## 1. Objectif

Donner au visiteur une **vue cohérente et complète** du programme : qui le porte (MIT Sloan + CSAIL, mention claire d'indépendance), ce qu'il couvre, comment le site le restitue, et comment naviguer entre ses 6 modules. C'est la **page de référence** du parcours d'apprentissage : tout module, toute fiche, tout cas y renvoie pour donner du contexte.

## 2. Audience prioritaire

- **Tous publics**, mais spécifiquement utile pour les visiteurs en **phase d'évaluation** : « Est-ce que ce site répond à mon besoin ? »
- Le **dirigeant** y cherche le résumé exécutif et la durée d'investissement.
- Le **consultant** y cherche les livrables réutilisables.
- L'**enseignant** y cherche la cohérence pédagogique et le dispositif d'évaluation.

## 3. Wireframe textuel

```
┌──────────────────────────────────────────────────────────────────────┐
│ HEADER + BREADCRUMB :  Accueil > Programme                           │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ HÉRO SECONDAIRE                                                      │
│ ┌──────────────────────────────────────────────────────────────────┐│
│ │ Surtitre :  « Inspiré du programme MIT Sloan »                   ││
│ │ H1 :        Le programme en un coup d'œil                        ││
│ │ Lead :      2-3 phrases — promesse + scope + audience            ││
│ │ Stats clés : 6 modules · 6-8 h/sem · 6 sem · trilingue           ││
│ └──────────────────────────────────────────────────────────────────┘│
├──────────────────────────────────────────────────────────────────────┤
│ FICHE D'IDENTITÉ DU PROGRAMME                                        │
│ Tableau synthétique : Organisme, Format, Durée, Charge, Audience…    │
│ avec encadré d'indépendance MIT                                      │
├──────────────────────────────────────────────────────────────────────┤
│ COURSE MAP — 6 modules + capstone (diagramme Mermaid SVG)            │
├──────────────────────────────────────────────────────────────────────┤
│ TABLEAU DES 6 MODULES                                                │
│ Module · Titre · Objectifs · Durée · Lien                            │
├──────────────────────────────────────────────────────────────────────┤
│ OBJECTIFS D'APPRENTISSAGE                                            │
│ 7 résultats d'apprentissage transversaux                             │
├──────────────────────────────────────────────────────────────────────┤
│ COMPÉTENCES DÉVELOPPÉES                                              │
│ Tableau compétence · niveau (Bloom) · module(s)                      │
├──────────────────────────────────────────────────────────────────────┤
│ APPROCHE PÉDAGOGIQUE                                                 │
│ Triple lecture · hiérarchie des sources · médias multiformat         │
├──────────────────────────────────────────────────────────────────────┤
│ PROJET FIL ROUGE — Capstone                                          │
│ Carte vers la page Capstone                                          │
├──────────────────────────────────────────────────────────────────────┤
│ FAQ COURTE — 4-5 questions essentielles                              │
├──────────────────────────────────────────────────────────────────────┤
│ CTA — Commencer par le module 1 + Voir tous les modules              │
└──────────────────────────────────────────────────────────────────────┘
```

## 4. Sections obligatoires

### 4.1 Hero secondaire
- **Surtitre** : « Inspiré du programme MIT Sloan ».
- **H1** : « Le programme en un coup d'œil ».
- **Lead** : trois phrases courtes — promesse, scope, audience visée.
- **Stats clés** : bandeau de 4 chiffres clés (6 modules / 6–8 h par semaine / 6 semaines / trilingue).

### 4.2 Fiche d'identité du programme

Tableau synthétique reprenant les éléments attestés publiquement (cf. charte section 2.1) :

| Élément | Valeur |
| :--- | :--- |
| Organisme de référence | MIT Sloan + MIT CSAIL |
| Format originel | 100 % en ligne, auto-rythmé |
| Durée de référence | 6 semaines hors orientation |
| Charge de travail | 6 à 8 h par semaine |
| Positionnement | Managérial et stratégique — non technique |
| Projet de référence | Plan d'usage de l'IA pour son organisation |
| Audience | Managers, dirigeants, consultants, profils data/marketing/sales |
| Prérequis techniques | Aucun |

⚠️ Encadré d'indépendance directement sous le tableau : `<IndependenceNotice variant="block" />`.

### 4.3 Course map

Diagramme Mermaid statique (rendu SVG côté Astro) reprenant le schéma de la charte section 2.2.

### 4.4 Tableau des 6 modules

Tableau récapitulatif :

| # | Titre | Objectif principal | Durée recommandée | Page |
| :---: | :--- | :--- | :---: | :--- |
| 1 | Introduction à l'IA | Cadrer l'IA et l'intelligence collective | 6-8 h | → |
| 2 | Machine Learning | Décider quand le ML est pertinent | 6-8 h | → |
| 3 | IA Générative | Décomposer workflows et lancer des pilotes | 6-8 h | → |
| 4 | Robotique | Évaluer pertinence de l'automatisation physique | 6-8 h | → |
| 5 | IA et société | Gouvernance, éthique, conformité, travail | 6-8 h | → |
| 6 | Futur de l'IA | Construire une roadmap IA crédible | 7-9 h | → |

### 4.5 Objectifs d'apprentissage transversaux

Liste alignée sur la section 5 de la charte (« Compétences, évaluations et résultats d'apprentissage » du rapport analytique). 7 résultats :

1. Expliquer les grandes familles d'IA et leurs implications business.
2. Juger la pertinence d'un cas d'usage Machine Learning.
3. Identifier et prioriser des cas d'usage d'IA générative.
4. Évaluer quand la robotique crée de la valeur.
5. Comprendre l'impact de l'IA sur le travail, les compétences et la société.
6. Construire une roadmap d'intégration de l'IA.
7. Dialoguer avec des experts techniques sans être technicien soi-même.

### 4.6 Compétences développées (matrice Bloom)

Tableau adapté à la taxonomie de Bloom simplifiée :

| Compétence | Niveau Bloom | Module(s) couvrant |
| :--- | :--- | :---: |
| Comprendre les concepts de l'IA | Comprendre | M1, M2, M3, M4 |
| Identifier des cas d'usage pertinents | Appliquer | M2, M3, M4 |
| Comparer des options stratégiques | Analyser | M2, M3, M4, M5 |
| Évaluer la pertinence d'un projet IA | Évaluer | M2, M3, M4, M5 |
| Concevoir une roadmap IA | Créer | M6 + Capstone |
| Anticiper les impacts éthiques et organisationnels | Évaluer | M5, M6 |

### 4.7 Approche pédagogique

Trois sous-blocs courts, chacun avec un visuel :

1. **Triple lecture** — synthèse exécutive / contenu pédagogique / annexes opérationnelles.
2. **Hiérarchie des sources visible** — les 4 niveaux avec exemple visuel d'encadré `<SourceTag />`.
3. **Médias multiformat** — pages web, fiches PDF, podcasts, slides, infographies, quiz.

### 4.8 Projet fil rouge

Bloc unique mettant en avant le capstone :
- Description en 2-3 phrases.
- Liste des éléments produits par le participant.
- CTA `<CardCallout>` vers `/{lang}/capstone/`.

### 4.9 FAQ courte (4-5 questions)

Questions d'évaluation :

- À qui s'adresse ce site ?
- Faut-il avoir un bagage technique ?
- Combien de temps prévoir ?
- Le site est-il certifié par MIT ? *(réponse : non, indépendance assumée)*
- Puis-je télécharger les contenus ?

CTA en bas → `/{lang}/faq/` pour la FAQ complète.

### 4.10 CTA de fin
- **Principal** : « Commencer par le Module 1 » → `/{lang}/modules/01-introduction-ia/`.
- **Secondaire** : « Voir tous les modules » → `/{lang}/modules/`.

## 5. Composants utilisés

| Composant | Usage |
| :--- | :--- |
| `<HeroSecondary />` | Hero plus compact que la home |
| `<StatsBar />` | Bandeau de chiffres clés |
| `<IdentityTable />` | Tableau d'identité du programme |
| `<CourseMap />` | Diagramme statique Mermaid |
| `<ModulesTable />` | Tableau des modules avec liens |
| `<OutcomesList />` | Liste des objectifs d'apprentissage |
| `<BloomMatrix />` | Matrice de compétences |
| `<TripleReadingCallout />` | Encart pédagogique sur la triple lecture |
| `<SourceTagDemo />` | Démonstration des 4 niveaux de sources |
| `<CapstonePreview />` | Carte de prévisualisation du capstone |
| `<FaqAccordion />` | FAQ accordéon |
| `<CtaPair />` | Paire de CTAs principal + secondaire |
| `<IndependenceNotice />` (variant block) | Bloc d'indépendance MIT |

## 6. Microcopies clés (FR / EN / AR)

| Élément | FR | EN | AR |
| :--- | :--- | :--- | :--- |
| H1 | « Le programme en un coup d'œil » | "The program at a glance" | « البرنامج في لمحة » |
| Stat 1 | « 6 modules » | "6 modules" | « 6 وحدات » |
| Stat 2 | « 6 à 8 h / semaine » | "6–8 hrs / week" | « 6 إلى 8 ساعات / أسبوع » |
| Stat 3 | « 6 semaines » | "6 weeks" | « 6 أسابيع » |
| Stat 4 | « Trilingue FR/EN/AR » | "Trilingual FR/EN/AR" | « ثلاثي اللغات FR/EN/AR » |
| CTA principal | « Commencer par le module 1 » | "Start with Module 1" | « ابدأ بالوحدة 1 » |
| CTA secondaire | « Voir tous les modules » | "See all modules" | « شاهد جميع الوحدات » |

## 7. Données nécessaires (frontmatter MDX)

```typescript
interface OverviewPage {
  lang: 'fr' | 'en' | 'ar';
  identity: IdentityRow[];
  modulesSummary: ModuleSummary[]; // 6 entrées
  outcomes: string[]; // 7 entrées
  competencies: CompetencyRow[];
  faqExcerpt: FaqItem[]; // 4-5 entrées
  capstoneTeaser: { title: string; description: string; href: string };
}
```

## 8. SEO

| Balise | Valeur (FR) |
| :--- | :--- |
| `<title>` | « Le programme — AI Strategy » |
| `<meta description>` | « 6 modules, 6 semaines, en français : machine learning, IA générative, robotique, gouvernance, roadmap. Inspiré du programme MIT Sloan. » |
| Canonical | `/{lang}/programme/` |
| Schema.org | `Course` (avec `provider` = nom de la ressource indépendante, **pas** MIT) |

⚠️ **Sécurité juridique** : le `Course.provider` Schema.org doit pointer vers l'auteur du site, pas vers MIT, pour éviter toute confusion d'affiliation.

## 9. Accessibilité

- Tableau des modules navigable au clavier (`Tab` parcourt les liens dans l'ordre).
- Course map SVG : `<title>` et `<desc>` accessibles, et un fallback texte (« Course map en 6 modules : … ») visible aux lecteurs d'écran.
- Encadré indépendance : `role="note"`.

## 10. Points de vigilance

| Piège | Mitigation |
| :--- | :--- |
| Page trop dense, paywall psychologique | Hiérarchie typographique forte + ancres internes (sticky table of contents) |
| Sur-promesse pédagogique | Ton sobre, factuel ; pas de « certification », pas de « diplôme » |
| Confusion avec le programme MIT | Encadré indépendance plusieurs fois sur la page (au moins en haut et près du capstone) |
| Statistiques inventées | Aucun chiffre qui ne soit attesté dans la charte ou par une source publique |

---

## 📎 Documents associés

- [Gabarit Module](./module.md) · [Gabarit Capstone](./capstone.md)
- [Sitemap](../sitemap.md) · [Charte de cadrage](../../cadrage/charte-de-cadrage.md)
