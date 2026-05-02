# Catalogue de composants — AI Strategy

> Inventaire structuré des **70+ composants** d'interface du site, regroupés par catégorie.
> Référencé par les 9 gabarits de pages (cf. `docs/architecture/gabarits/`).
> Chaque composant a une fiche minimale : description, props clés, accessibilité, variantes.

| Métadonnée | Valeur |
| :--- | :--- |
| **Version** | 1.0 |
| **Phase** | 2 — Architecture et design system |
| **Statut** | Ratifié — alimente la Phase 3 (implémentation Astro/React) |

---

## Table des catégories

1. [Layout et navigation globale](#1-layout-et-navigation-globale)
2. [Hero et en-têtes de page](#2-hero-et-en-têtes-de-page)
3. [Éditorial et signature](#3-éditorial-et-signature)
4. [Cartes (audience, module, cas, ressource, quiz, concept)](#4-cartes)
5. [Tableaux et matrices](#5-tableaux-et-matrices)
6. [Listes éditoriales](#6-listes-éditoriales)
7. [Navigation interne (TOC, breadcrumb, prev/next)](#7-navigation-interne)
8. [Filtres et tri](#8-filtres-et-tri)
9. [Composants interactifs (Phase 5)](#9-composants-interactifs-phase-5)
10. [Médias (audio, vidéo, slides, infographies)](#10-médias)
11. [Composants pédagogiques](#11-composants-pédagogiques)
12. [Recherche et glossaire](#12-recherche-et-glossaire)
13. [États (loading, empty, modal, toast)](#13-états)
14. [Spécifiques (FAQ, capstone, méthode)](#14-spécifiques)

---

## 1. Layout et navigation globale

### `<BaseLayout />`

**Type** : Layout Astro racine.

**Description** : Squelette HTML de toutes les pages. Pose `<html lang dir>`, charge les polices, applique les tokens CSS, embarque header et footer.

**Props** :
- `title: string` — title HTML
- `description: string` — meta description
- `lang: 'fr' | 'en' | 'ar'` — détermine le dir
- `canonical?: string`
- `hreflang?: HreflangEntry[]`

**Accessibilité** :
- Skip-link `<a href="#main">` en première position du tab order.
- `<main id="main">` ciblable.
- Bascule `dir="rtl"` automatique pour `lang="ar"`.

---

### `<Header />`

**Description** : Barre de navigation principale, présente sur toutes les pages.

**Contenu** :
- Logo `AI Strategy` (lien vers home).
- Navigation principale : Programme, Modules, Cas, Ressources, Capstone, Glossaire, À propos.
- `<LanguageSwitcher />` à droite (à gauche en RTL).
- Bouton de recherche (Phase 7).

**Comportement** :
- Sticky en haut au scroll (avec ombre `--ai-shadow-sm` sur scroll > 24 px).
- Mobile : burger menu avec drawer.
- Focus visible sur tous les éléments interactifs.

**Variantes** : `compact` (sur les pages cas) — réduit la nav à logo + retour.

---

### `<Footer />`

**Description** : Pied de page global avec mentions légales et licences.

**Sections** :
- Liens : Méthode, Mentions légales, FAQ, Contact (issue tracker GitHub).
- `<IndependenceNotice variant="footer" />`.
- Mentions licences (MIT pour code, CC BY-NC-SA 4.0 pour contenu).
- Date de mise à jour + lien CHANGELOG + lien GitHub repo.
- Sélecteur de langue (redondant avec header).

---

### `<LanguageSwitcher />`

**Description** : Sélecteur des 3 langues, présent dans header et footer.

**Comportement clé** :
- Conserve l'**URL relative** au switch (ex. `/fr/cas/morgan-stanley-genai/` ↔ `/en/cas/morgan-stanley-genai/`).
- Indique la langue active via `aria-current="true"`.
- Composant léger (pas de JS lourd) — uses native `<select>` + JS d'1 ligne pour la redirection.

**Accessibilité** : `<label>` masqué visuellement (« Choisir la langue »), navigation clavier complète.

---

### `<Breadcrumb />`

**Description** : Fil d'ariane affiché sous le header sur toutes les pages sauf home.

**Pattern** : `Accueil > Programme > Modules > Module 3`.

**Accessibilité** : `<nav aria-label="Fil d'Ariane">` + `<ol>` + dernier item en `aria-current="page"`.

---

## 2. Hero et en-têtes de page

| Composant | Usage | Particularité |
| :--- | :--- | :--- |
| `<HeroPrimary />` | Page d'accueil uniquement | Hero le plus large, illustration SVG |
| `<HeroSecondary />` | Programme, Ressources, Quiz, Glossaire, FAQ | Plus compact, sans illustration centrale |
| `<HeroModule />` | Pages module | Inclut stats (durée, niveau, langue), audio embed |
| `<HeroCase />` | Pages étude de cas | Inclut tags taxonomie en chips, source level |
| `<HeroCapstone />` | Page capstone uniquement | Hero éditorial, encadré avertissement |

**Props communs** :
- `surtitle?: string`
- `title: string` (rendu en `<h1>`)
- `lead: string`
- `ctas?: CtaItem[]` (max 2)

**Accessibilité** : un seul `<h1>` par page (le titre du hero).

---

## 3. Éditorial et signature

### `<SourceTag />` — composant signature

**Description** : Encadré qui signale le **niveau de preuve** d'une affirmation. C'est le marqueur **visuel le plus distinctif** du site (cf. principes éditoriaux 6.1).

**Props** :
- `level: 'official-mit' | 'recommended-complement' | 'pedagogical-reconstruction' | 'external-verifiable' | 'to-verify'`
- `source?: { title: string; url: string; accessedAt?: string }`
- `inline?: boolean` — par défaut `false` (encadré). En mode `inline`, badge compact.

**Visuel** : couleur du texte et du fond définies par `--ai-source-*-bg/fg` (cf. tokens.md 2.4).

**Accessibilité** : `role="note"` + texte explicite en lecteur d'écran (« Source officielle MIT : … »).

---

### `<IndependenceNotice />`

**Description** : Mention rappelant l'**indépendance** du site vis-à-vis de MIT (cf. principes éditoriaux 6.3 et ADR-005).

**Variantes** :
- `variant="block"` — encadré pleine largeur (page Programme, Méthode).
- `variant="inline"` — texte court (bandeau de preuves home).
- `variant="footer"` — variante minimaliste pour le footer.

**Texte type FR** : « Site pédagogique indépendant. Non affilié, non validé et non certifié par MIT, MIT Sloan ou MIT CSAIL. »

---

### `<MethodCallout />`

**Description** : Bloc rappelant la méthode éditoriale (4 principes) avec lien vers `/methode/`.

**Usage** : home (section méthode), pages module (synthèse exécutive optionnelle).

---

### `<TripleReadingCallout />`

**Description** : Encart pédagogique présentant les 3 niveaux de lecture (synthèse / contenu / annexes) sur la page Programme.

---

### `<UpdatedAt />`

**Description** : Indicateur de fraîcheur en bas des pages — date de dernière mise à jour + lien CHANGELOG.

**Props** : `date: string` (ISO 8601), `version?: string`.

---

### `<TrustBar />`

**Description** : Bandeau horizontal de 4 « preuves » sur la page d'accueil (indépendance, sources, trilingue, licence ouverte).

---

## 4. Cartes

Les cartes partagent un squelette commun : conteneur arrondi (`--ai-radius-md`), ombre `--ai-shadow-sm` au repos / `--ai-shadow-md` au hover, padding `--ai-space-5`, border subtle.

| Composant | Contenu typique | Page |
| :--- | :--- | :--- |
| `<AudienceCard />` | Icône, label audience, 1 phrase, CTA | Home |
| `<ModuleCard />` | Numéro, titre, durée, 1 ligne objectif | Home, Programme |
| `<CaseCard />` | Logo organisation (si dispo), titre, secteur, tags | Home, index Cas |
| `<ResourceCard />` | Icône type, titre, description, action | Page Ressources |
| `<QuizCard />` | Module, score si fait, statut, CTA | Page Quiz |
| `<ConceptCard />` | Titre concept, définition, source tag, exemple | Pages module |
| `<CaseInBrief />` | Carte synthétique 5 lignes (en-tête de cas) | Page cas |
| `<DownloadCard />` | Icône fichier, titre, format/poids, action | Toutes |
| `<ModuleLinkCard />` | Renvoi vers module avec aperçu | Pages cas |
| `<CapstonePreview />` | Aperçu capstone avec CTA fort | Page Programme |

**Accessibilité** : chaque carte est un `<article>` avec `<h3>` titre, et un seul lien principal englobant la zone interactive (`<a>` au-dessus du contenu, technique « card link »).

---

## 5. Tableaux et matrices

### `<StatsBar />`

**Description** : Bandeau horizontal de 4 chiffres clés (page Programme : 6 modules / 6-8 h / 6 sem / trilingue).

**Props** : `stats: { value: string; label: string }[]`.

---

### `<IdentityTable />`

**Description** : Tableau d'identité du programme MIT (ligne = élément, colonne = valeur). Page Programme.

---

### `<ModulesTable />`

**Description** : Tableau des 6 modules avec liens. Page Programme.

---

### `<BloomMatrix />`

**Description** : Matrice compétence × niveau Bloom × modules couvrant. Page Programme.

---

### `<RubricTable />`

**Description** : Grille d'évaluation 8 critères × 4 niveaux. Page Capstone.

---

### `<RoadmapStructureTable />`

**Description** : Tableau des 12 sections d'une roadmap (capstone).

---

**Accessibilité tableaux** : `<thead>` + `<th scope="col">`, `<caption>` masqué visuellement, `<tfoot>` si total.

---

## 6. Listes éditoriales

| Composant | Format | Usage |
| :--- | :--- | :--- |
| `<OutcomesList />` | `<ul>` avec icône check | Page Programme, modules |
| `<PitfallList />` | `<ol>` avec icône warning | Pages module (erreurs fréquentes) |
| `<ResourceList />` | `<ul>` avec icône type | Pages module (Pour aller plus loin) |
| `<SourcesList />` | `<ol>` numérotée avec format académique | Pages cas (sources) |
| `<KeyTakeaways />` | Encart `<ul>` 5 puces | Pages module (À retenir) |
| `<DiscussionQuestions />` | `<ol>` numérotée | Pages cas |
| `<TransferQuestions />` | `<ol>` numérotée | Pages module (Application org) |

---

## 7. Navigation interne

### `<TableOfContents />`

**Description** : Sommaire **sticky** avec **scrollspy** sur les pages module et capstone.

**Comportement** :
- Sticky desktop (à droite en LTR, à gauche en RTL — cf. rtl-rules.md).
- Accordéon en haut sur mobile.
- Item actif mis en évidence via `aria-current="location"`.

**Accessibilité** : `<nav aria-label="Sommaire">`.

---

### `<PrevNextNav />`

**Description** : Navigation entre pages sœur (modules, cas, épisodes podcast).

**Comportement RTL** : ordre visuel inversé (« Suivant → » à gauche, « ← Précédent » à droite).

---

### `<ThemeNav />`

**Description** : Navigation par thème (FAQ — sticky desktop).

---

### `<AlphaIndex />`

**Description** : Index alphabétique A-Z (glossaire). Lettres sans entrée grisées.

**Variante arabe** : tri alphabétique arabe (ا ب ت…).

---

### `<TypeNavigation />`

**Description** : Pills de navigation par type (Ressources : Fiches, Lectures, Vidéos, Standards).

---

## 8. Filtres et tri

### `<FiltersBar />`

**Description** : Barre de filtres reposant sur les 4 dimensions de la taxonomie (cf. `taxonomy.md`).

**Props** :
- `dimensions: ('module' | 'tech' | 'sector' | 'level')[]` — sous-ensemble selon la page
- `state: TaxonomyState` (lue depuis URL query string)
- `onChange: (state: TaxonomyState) => void` — met à jour l'URL et la liste

**Accessibilité** : `<fieldset>` + `<legend>` par dimension, navigation clavier, compteur de résultats annoncé en `aria-live="polite"`.

---

### `<SortDropdown />`

**Description** : Sélecteur de tri (`<select>` natif stylisé).

**Options** : pertinence (défaut), date desc, date asc, alphabétique.

---

### `<TaxonomyChips />`

**Description** : Affichage en lecture des tags d'un contenu (sur les pages cas, module).

**Comportement** : chaque chip est un `<a>` vers la page Ressources filtrée par ce tag.

---

## 9. Composants interactifs (Phase 5)

⚠️ Tous les composants ci-dessous sont des **îlots React** (`client:visible`). En Phase 4, les pages les référencent via des **placeholders** ; l'implémentation effective vient en Phase 5.

### `<Quiz />`

**Description** : Composant central des quiz formatifs.

**Comportement** :
- 7 questions par défaut.
- Persistance via `localStorage` (cf. ADR-009).
- Feedback immédiat par question.
- Score final + diagnostic (« vous maîtrisez X, révisez Y »).
- Mode imprimable.

**Sous-composants** : `<QuizQuestion />`, `<QuizFeedback />`, `<QuizScore />`.

---

### `<Badges />`

**Description** : Badges débloqués (1 par module + capstone-ready).

---

### `<ValueFeasibilityMatrix />`

**Description** : Matrice 2×2 valeur × faisabilité interactive — drag & drop des cas d'usage. Capstone.

---

### `<UseCaseCanvas />`

**Description** : Canvas guidé pour formuler un cas d'usage IA. Capstone.

---

### `<RoadmapBuilder />`

**Description** : Constructeur de roadmap en 12 sections, exportable en PDF. Capstone.

---

### `<RiskRegister />`

**Description** : Registre de risques avec scoring probabilité × impact. Capstone.

---

### `<MaturitySurvey />`

**Description** : Mini-questionnaire de maturité IA, 10-15 questions. Capstone.

---

### `<Checklist />`

**Description** : Liste à cocher avec persistance locale et export PDF.

**Usages** : page module (checklist manager), page capstone (checklist exécutive).

---

## 10. Médias

### `<AudioPlayer />`

**Description** : Lecteur audio HTML5 stylisé pour les podcasts `.m4a`.

**Fonctionnalités** :
- Play/pause, scrub, vitesse 0.75-2x.
- Affichage durée + position.
- Lien transcript (page épisode).

**Accessibilité** : contrôles clavier (espace, flèches), libellés ARIA.

---

### `<YouTubeEmbed />`

**Description** : Embed YouTube **privacy-friendly** via `youtube-nocookie.com`.

**Comportement** : facade clic-pour-charger pour ne pas charger la vidéo avant interaction (perf + privacy).

---

### `<SlideEmbed />`

**Description** : Affichage de slides PDF embarqués (slides NotebookLM, Phase 6).

---

### `<InfographicCard />`

**Description** : Carte d'infographie avec lightbox.

---

## 11. Composants pédagogiques

| Composant | Usage | Description |
| :--- | :--- | :--- |
| `<ExecutiveSummary />` | Pages module | Encadré 200-300 mots, ancrable directement |
| `<LearningOutcomes />` | Pages module, Programme | Liste d'objectifs format « À l'issue de… » |
| `<Activity />` | Pages module | Bloc activité guidée 4 étapes |
| `<MiniCase />` | Pages module | Mini-cas inline 1-2 paragraphes |
| `<PedagogicalExample />` | Page capstone | Encart « exemple fictif » avec avertissement |
| `<CourseMap />` | Page Programme | Diagramme statique Mermaid des 6 modules |
| `<SourceTagDemo />` | Page Programme, Méthode | Présentation visuelle des 4 niveaux de sources |

---

## 12. Recherche et glossaire

### `<GlossarySearch />`

**Description** : Recherche fuzzy locale sur les termes du glossaire (Fuse.js).

**Comportement** : résultats live, navigation clavier, annonce ARIA du nombre de résultats.

---

### `<GlossaryTerm />`

**Description** : Carte d'un terme du glossaire (titre, définition, source, exemple, modules liés).

---

### `<GlossaryDrawer />`

**Description** : Tiroir latéral invocable depuis n'importe quelle page pour consulter un terme.

**Comportement** : `aria-haspopup`, focus trap, fermeture par escape ou clic extérieur.

---

## 13. États

| Composant | Description |
| :--- | :--- |
| `<EmptyState />` | État vide quand aucun résultat (filtres, recherche). Avec illustration sobre. |
| `<Pagination />` | Pagination accessible (`<nav aria-label="Pagination">`). |
| `<ResetProgressDialog />` | Modale de confirmation pour reset des quiz. Focus trap, escape close. |
| `<PrivacyNotice />` | Encart RGPD rappelant le stockage local. |
| `<ProgressDashboard />` | Tableau de progression des quiz (page Quiz). |
| `<DiagnosticBanner />` | Bannière du quiz capstone diagnostic. |

---

## 14. Spécifiques

### `<FaqAccordion />` + `<FaqItem />`

**Description** : Accordéon de questions/réponses pour la page FAQ.

**Pattern ARIA** : `aria-expanded`, `aria-controls`, focus visible.

---

### `<DownloadableQuizList />`

**Description** : Liste des quiz téléchargeables en PDF (page Quiz).

---

### `<CtaPair />`

**Description** : Paire de CTAs (principal + secondaire) côte à côte.

---

## 📐 Conventions transverses

### Nommage
- **PascalCase** pour les composants (`<ModuleCard />`).
- **kebab-case** pour les fichiers (`module-card.astro` ou `ModuleCard.astro` selon convention Astro/React).
- Préfixe `<Quiz...>` pour les sous-composants d'un système (ex. `<QuizQuestion />`).

### Localisation
- Aucune chaîne traduite codée en dur dans un composant — toutes via `src/i18n/translations.ts`.

### Theming
- Tous les composants consomment **uniquement** les CSS custom properties `--ai-*` — pas de couleurs littérales.

### États
Quatre états standard sur tout élément interactif : `default`, `hover`, `active`, `focus-visible`. État `disabled` distinct (opacité 0.5 + `cursor: not-allowed`).

### RTL
Aucun composant ne doit utiliser `padding-left/right` ou `border-left/right` directement — utiliser les **propriétés logiques** (`padding-inline-start`, `border-inline-end`).

---

## 📎 Documents associés

- [Design tokens](./tokens.md) · [Typographie](./typography.md)
- [Règles RTL](./rtl-rules.md) · [Accessibilité](./accessibility.md) · [Iconographie](./iconography.md)
- [Gabarits de pages](../architecture/gabarits/)
