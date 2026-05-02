# Gabarit — Page module

| Métadonnée | Valeur |
| :--- | :--- |
| **Gabarit** | Module |
| **URL pattern** | `/{lang}/modules/{slug}/` |
| **Version** | 1.0 |
| **Statut** | Ratifié — gabarit le plus structurant du site |

---

## 1. Objectif

La page module est le **cœur pédagogique** du site. Elle est reproduite 6 fois (un module = une page) et doit fonctionner à la fois comme :

- **Cours autonome** lisible de bout en bout par un étudiant ou un cadre en autoformation.
- **Référence rapide** pour un consultant qui cherche un cadre, une matrice ou un cas.
- **Briefing exécutif** pour un dirigeant qui survole la synthèse exécutive.

C'est ici que la **triple lecture** (cf. ADR-004) se matérialise le plus visiblement.

## 2. Audience prioritaire

Les **3 audiences simultanément**, avec activation différentielle selon les sections (synthèse en haut, annexes en bas).

## 3. Wireframe textuel

```
┌──────────────────────────────────────────────────────────────────────┐
│ HEADER + BREADCRUMB :  Accueil > Programme > Modules > Module N      │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ ┌────────────────────────────────┐   ┌──────────────────────────────┐│
│ │ HÉRO MODULE                    │   │ TABLE DES MATIÈRES           ││
│ │ Surtitre : Module N             │   │ (sticky, scrollspy)          ││
│ │ H1 : Titre du module            │   │ • Synthèse exécutive         ││
│ │ Lead : 2-3 phrases              │   │ • Objectifs d'apprentissage  ││
│ │ Stats : durée · niveau · langue │   │ • Concepts clés              ││
│ │ Audio embed : épisode podcast   │   │ • Erreurs fréquentes         ││
│ │ CTA : Démarrer le module        │   │ • Cas réel                   ││
│ └────────────────────────────────┘   │ • Activité pratique          ││
│                                      │ • Quiz formatif              ││
│                                      │ • Checklist manager          ││
│                                      │ • À retenir                  ││
│                                      │ • Pour aller plus loin       ││
│                                      └──────────────────────────────┘│
├──────────────────────────────────────────────────────────────────────┤
│ § 1 — SYNTHÈSE EXÉCUTIVE (3-5 minutes)                               │
│ Encadré dédié, lecture autonome possible                             │
├──────────────────────────────────────────────────────────────────────┤
│ § 2 — OBJECTIFS D'APPRENTISSAGE                                      │
│ Liste de 4-6 objectifs au format « Je sais / Je peux »               │
├──────────────────────────────────────────────────────────────────────┤
│ § 3 — CONCEPTS CLÉS                                                  │
│ 3-5 sous-blocs, chacun avec un encadré <SourceTag /> indiquant       │
│ le niveau de preuve associé                                          │
├──────────────────────────────────────────────────────────────────────┤
│ § 4 — ERREURS FRÉQUENTES                                             │
│ Liste de 3-5 pièges avec mitigation                                  │
├──────────────────────────────────────────────────────────────────────┤
│ § 5 — CAS RÉEL PRINCIPAL                                             │
│ Carte vers une page <CaseCard /> + mini-cas additionnel              │
├──────────────────────────────────────────────────────────────────────┤
│ § 6 — ACTIVITÉ PRATIQUE                                              │
│ Bloc activité guidée + lien template/canvas téléchargeable           │
├──────────────────────────────────────────────────────────────────────┤
│ § 7 — QUIZ FORMATIF (composant <Quiz />, 7 questions)                │
├──────────────────────────────────────────────────────────────────────┤
│ § 8 — CHECKLIST MANAGER                                              │
│ Liste à cocher (10-12 items) — exportable en PDF                     │
├──────────────────────────────────────────────────────────────────────┤
│ § 9 — APPLICATION DANS VOTRE ORGANISATION                            │
│ Questions de transposition + canvas associé                          │
├──────────────────────────────────────────────────────────────────────┤
│ § 10 — À RETENIR                                                     │
│ Encart de synthèse en 5 puces                                        │
├──────────────────────────────────────────────────────────────────────┤
│ § 11 — POUR ALLER PLUS LOIN                                          │
│ Lectures, vidéos, fiches PDF, podcasts                               │
├──────────────────────────────────────────────────────────────────────┤
│ NAVIGATION INTER-MODULES                                             │
│ ← Module précédent     |     Module suivant →                        │
├──────────────────────────────────────────────────────────────────────┤
│ FOOTER                                                               │
└──────────────────────────────────────────────────────────────────────┘
```

## 4. Sections obligatoires (12 sections numérotées)

### 4.1 Hero module
- **Surtitre** : numéro et nom court (« Module 3 »).
- **H1** : titre complet du module.
- **Lead** : 2-3 phrases qui répondent à « pourquoi ce module ? ».
- **Stats** : durée recommandée, niveau (taxonomie), langue, dernière mise à jour.
- **Lecteur audio embarqué** (`<AudioPlayer />`) si l'épisode podcast correspondant est disponible.
- **CTA** : « Démarrer le module ».

### 4.2 Table des matières sticky
- Liste à puces des sections du module (12 entrées).
- Comportement scrollspy (la section active est mise en évidence).
- Sticky desktop, accordéon mobile.

### 4.3 § 1 — Synthèse exécutive
- 200-300 mots maximum.
- Format : 3 paragraphes courts.
- Doit pouvoir être lu en isolation (pour un dirigeant qui ne lira pas le reste).
- Couvre : enjeu business, ce que l'IA apporte ici, ce qu'il faut décider.

### 4.4 § 2 — Objectifs d'apprentissage
4 à 6 objectifs au format « À l'issue de ce module, vous saurez / vous pourrez… ». Chaque objectif est lié explicitement à un niveau de la taxonomie de Bloom.

### 4.5 § 3 — Concepts clés
3 à 5 sous-sections (`<h3>`), chacune contenant :
- Définition claire.
- Encadré `<SourceTag />` avec l'un des 4 niveaux (officiel MIT / complément / reconstruction / source externe).
- Exemple métier concret (entreprise réelle si possible).
- Lien glossaire.

⚠️ **Aucune affirmation factuelle sans encadré de source**. La discipline de hiérarchie des sources est non négociable sur cette section.

### 4.6 § 4 — Erreurs fréquentes
3 à 5 pièges typiques que les managers/consultants commettent sur le sujet du module, avec mitigation. Format :
- **Erreur** : description.
- **Pourquoi c'est piège** : mécanisme.
- **Comment éviter** : mitigation actionnable.

### 4.7 § 5 — Cas réel principal
Bloc qui présente le cas avec :
- Entreprise, secteur, technologie.
- Problème métier abordé.
- Carte `<CaseCard />` qui pointe vers la page cas dédiée pour le détail complet.
- Mini-cas additionnel (1-2 paragraphes) pour montrer la transférabilité.

### 4.8 § 6 — Activité pratique
Activité guidée que le lecteur peut faire en 30-60 minutes :
- Étape 1 / 2 / 3 / 4.
- Template ou canvas téléchargeable (lien fiche PDF).
- Critères d'évaluation simples.

### 4.9 § 7 — Quiz formatif
Composant `<Quiz />` avec **7 questions** par défaut :
- 4 questions de compréhension.
- 2 questions d'application.
- 1 question de jugement / décision.

Persistance via `localStorage` (cf. ADR-009).

### 4.10 § 8 — Checklist manager
10-12 items à cocher, organisés en 3-4 catégories (ex. cadrage / gouvernance / mise en œuvre). Composant `<Checklist />` avec persistance locale et export PDF.

### 4.11 § 9 — Application dans votre organisation
Section orientée transfert :
- 5 questions ouvertes adressées à l'organisation du lecteur.
- Lien vers un canvas guidé (template).
- Encart « Pour les consultants : argumentaire client ».

### 4.12 § 10 — À retenir
Encart de fermeture en 5 puces :
- Le concept clé du module.
- Le cas exemplaire.
- Le piège majeur.
- L'outil opérationnel à retenir.
- Le lien vers la suite (module suivant ou capstone).

### 4.13 § 11 — Pour aller plus loin
4 sous-blocs (`<ResourceList />`) :
- **Lectures** : 3-5 articles ou rapports sourcés.
- **Vidéos** : 1-2 vidéos YouTube curées (`<YouTubeEmbed />`).
- **Fiches PDF** : 2-3 fiches associées au module.
- **Podcast** : épisode lié de la Saison 1.

### 4.14 Navigation inter-modules
- « ← Module précédent » à gauche.
- « Module suivant → » à droite.
- Sur le module 1 : pas de précédent (juste « Suivant »).
- Sur le module 6 : « Suivant » pointe vers le Capstone.

## 5. Composants utilisés

| Composant | Usage |
| :--- | :--- |
| `<HeroModule />` | Hero spécifique au gabarit module |
| `<TableOfContents />` | Sommaire sticky avec scrollspy |
| `<ExecutiveSummary />` | Encart synthèse exécutive |
| `<LearningOutcomes />` | Liste des objectifs |
| `<ConceptCard />` | Carte concept avec source tag |
| `<SourceTag />` | Étiquette de niveau de preuve |
| `<PitfallList />` | Liste d'erreurs fréquentes |
| `<CaseCard />` | Carte étude de cas |
| `<MiniCase />` | Mini-cas additionnel inline |
| `<Activity />` | Bloc activité pratique |
| `<Quiz />` | Quiz interactif React |
| `<Checklist />` | Checklist interactive |
| `<TransferQuestions />` | Questions d'application |
| `<KeyTakeaways />` | Encart À retenir |
| `<ResourceList />` | Listes de ressources |
| `<AudioPlayer />` | Lecteur podcast |
| `<YouTubeEmbed />` | Embed vidéo |
| `<PrevNextNav />` | Navigation inter-modules |

## 6. Microcopies clés (FR / EN / AR)

| Élément | FR | EN | AR |
| :--- | :--- | :--- | :--- |
| Surtitre hero | « Module N » | "Module N" | « الوحدة N » |
| Stat durée | « Durée recommandée » | "Recommended duration" | « المدة الموصى بها » |
| CTA hero | « Démarrer le module » | "Start the module" | « ابدأ الوحدة » |
| H2 § 1 | « Synthèse exécutive » | "Executive summary" | « ملخص تنفيذي » |
| H2 § 2 | « Objectifs d'apprentissage » | "Learning outcomes" | « أهداف التعلّم » |
| H2 § 3 | « Concepts clés » | "Key concepts" | « مفاهيم رئيسية » |
| H2 § 4 | « Erreurs fréquentes » | "Common pitfalls" | « أخطاء شائعة » |
| H2 § 5 | « Cas réel » | "Real-world case" | « حالة واقعية » |
| H2 § 6 | « Activité pratique » | "Practical activity" | « نشاط عملي » |
| H2 § 7 | « Quiz formatif » | "Formative quiz" | « اختبار تكويني » |
| H2 § 8 | « Checklist manager » | "Manager checklist" | « قائمة تحقق المدير » |
| H2 § 9 | « Application dans votre organisation » | "Apply to your organization" | « التطبيق في مؤسستك » |
| H2 § 10 | « À retenir » | "Key takeaways" | « نقاط أساسية » |
| H2 § 11 | « Pour aller plus loin » | "Going further" | « للمضيّ أبعد » |

## 7. Données nécessaires (frontmatter MDX)

```typescript
interface ModulePage {
  lang: 'fr' | 'en' | 'ar';
  moduleNumber: 1 | 2 | 3 | 4 | 5 | 6;
  slug: string;
  title: string;
  lead: string;
  estimatedHours: { min: number; max: number };
  level: 'level-discovery' | 'level-applicable' | 'level-advanced';
  podcastEpisode?: string; // slug d'épisode si disponible
  outcomes: LearningOutcome[]; // 4-6
  concepts: Concept[]; // 3-5, chacun avec sourceTag
  pitfalls: Pitfall[]; // 3-5
  primaryCaseSlug: string;
  miniCase: { title: string; description: string };
  activity: Activity;
  quizSlug: string; // référence vers le composant Quiz
  checklist: ChecklistItem[]; // 10-12
  transferQuestions: string[]; // 5
  keyTakeaways: string[]; // 5
  resources: {
    readings: Reading[];
    videos: Video[];
    pdfs: Pdf[];
    podcastEpisodeSlug?: string;
  };
  navigation: { prev?: string; next?: string };
  taxonomy: TaxonomyTags; // cf. taxonomy.md
}
```

## 8. SEO

| Balise | Valeur (FR) — Module 3 en exemple |
| :--- | :--- |
| `<title>` | « Module 3 — IA Générative en entreprise · AI Strategy » |
| `<meta description>` | « Comprendre, prioriser et piloter les usages de l'IA générative en entreprise. Cas Morgan Stanley, Klarna, GitHub. Quiz, fiches, podcast. » |
| Canonical | `/{lang}/modules/03-ia-generative/` |
| `hreflang` | 3 entrées + `x-default` |
| Schema.org | `LearningResource` + `BreadcrumbList` |

## 9. Accessibilité

- **Sommaire sticky** : navigation clavier au sein des items, `aria-current="location"` sur l'item actif.
- **Encadrés `<SourceTag />`** : `role="note"` + texte explicite (pas seulement une couleur).
- **Quiz** : navigation clavier complète, `aria-live` pour les feedbacks.
- **Audio embed** : transcript textuel disponible sur la page de l'épisode.
- **Hiérarchie de titres** : `<h1>` unique = titre du module. Sections en `<h2>`. Sous-sections en `<h3>`.

## 10. Points de vigilance

| Piège | Mitigation |
| :--- | :--- |
| Page trop longue (>5000 mots) | Sommaire sticky + ancrages + estimation de lecture en haut |
| Concepts non sourcés | Composant `<ConceptCard />` exige `sourceTag` dans le frontmatter |
| Quiz qui se réinitialise inopinément | Tests unitaires sur `localStorage`, fallback gracieux |
| Cas inventé ou statistique non vérifiable | Audit éditorial à chaque commit `content(modules):` |
| Module trop technique | Si un concept demande plus de 3 paragraphes, déplacer en annexe ou créer une fiche dédiée |
| Disparités RTL | Sommaire à droite en RTL, navigation prev/next inversée |

---

## 📎 Documents associés

- [Gabarit Étude de cas](./case-study.md) · [Gabarit Quiz](./quiz.md)
- [Taxonomie](../taxonomy.md) · [Sitemap](../sitemap.md)
- [Catalogue de composants](../../design-system/components.md)
