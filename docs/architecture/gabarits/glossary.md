# Gabarit — Glossaire

| Métadonnée | Valeur |
| :--- | :--- |
| **Gabarit** | Glossary |
| **URL pattern** | `/{lang}/glossaire/` |
| **Version** | 1.0 |
| **Statut** | Ratifié |

---

## 1. Objectif

Mettre à disposition une **liste alphabétique** des ~30 termes techniques et managériaux utilisés sur le site, avec définitions claires, exemples concrets, et liens vers les modules ou cas où chaque terme apparaît. Le glossaire sert :

1. **Référence rapide** pendant la lecture des modules (composant `<GlossaryDrawer />` accessible depuis n'importe quelle page).
2. **Page autonome** pour préparation d'un cours ou d'une mission.
3. **Source de citations** pour les rapports clients (chaque terme est définissable et sourçable).

## 2. Audience prioritaire

- **Apprenant débutant** : besoin de comprendre rapidement.
- **Consultant** : besoin de vulgariser pour un client.
- **Enseignant** : besoin d'une définition propre pour cours.

## 3. Wireframe textuel

```
┌──────────────────────────────────────────────────────────────────────┐
│ HEADER + BREADCRUMB :  Accueil > Glossaire                           │
├──────────────────────────────────────────────────────────────────────┤
│ HÉRO GLOSSAIRE                                                       │
│ H1 : Glossaire — N termes définis                                    │
│ Lead : explication de la curation et de l'usage                      │
├──────────────────────────────────────────────────────────────────────┤
│ BARRE DE RECHERCHE + INDEX A-Z                                       │
│ [🔍 Rechercher un terme]                                             │
│ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z                   │
│ (ancres pour saut rapide)                                            │
├──────────────────────────────────────────────────────────────────────┤
│ FILTRES TAXONOMIE (optionnel)                                        │
│ [Module v]  [Tech v]  [Niveau v]                                     │
├──────────────────────────────────────────────────────────────────────┤
│ LISTE DES TERMES                                                     │
│ # A                                                                  │
│ ┌────────────────────────────────────────────────────────────────┐  │
│ │ Algorithme                                                      │  │
│ │ Définition courte (1-2 phrases)                                 │  │
│ │ Exemple business : ...                                          │  │
│ │ Modules liés : M1, M2 · Tags : tech-classical · level-discovery │  │
│ │ [Voir dans Module 2]                                            │  │
│ └────────────────────────────────────────────────────────────────┘  │
│ # B                                                                  │
│ ...                                                                  │
└──────────────────────────────────────────────────────────────────────┘
```

## 4. Sections obligatoires

### 4.1 Hero glossaire
- **H1** : « Glossaire — N termes définis ».
- **Lead** : explication de la curation (focus business, sources MIT/NIST/OCDE, multilingue).
- **Stats** : nombre de termes, dernière mise à jour.

### 4.2 Recherche et index alphabétique
- Barre de recherche fuzzy en haut (`<GlossarySearch />`).
- Index A-Z cliquable, scroll rapide vers les sections.
- Lettres sans terme grisées.

### 4.3 Filtres taxonomie (optionnel)
Filtres `Module`, `Tech`, `Niveau` (3 dimensions sur 4, pas `secteur` qui n'est pas pertinent ici).

### 4.4 Liste des termes
Composant `<GlossaryTerm />` répété pour chaque entrée, avec :
- **Terme** (`<h2>` ou `<dt>`).
- **Définition** courte (1-2 phrases lisibles).
- **Exemple business** (1 phrase optionnelle).
- **Tags** : modules liés + dimensions taxonomie.
- **Liens** : 1-3 pages où le terme apparaît contextualisé.
- **Source** : encadré `<SourceTag />` indiquant le niveau de définition (officiel / complément / reconstruction).

### 4.5 Liste des ~30 termes

| Catégorie | Termes |
| :--- | :--- |
| Définitions générales | IA, IA faible / IA générale, intelligence collective, automatisation |
| Machine Learning | Apprentissage supervisé, non supervisé, par renforcement, deep learning, biais algorithmique, surapprentissage |
| IA Générative | Modèle génératif, LLM, foundation model, hallucination, RAG, prompt engineering, fine-tuning |
| Robotique | Robotique, perception, planification, contrôle, HRI, sécurité fonctionnelle |
| Gouvernance et éthique | Human-in-the-loop, explicabilité, accountability, gouvernance IA, AI risk management, registre des risques |
| Réglementaire | AI Act, NIST AI RMF, OCDE AI Principles, conformité, RGPD |
| Stratégie | Roadmap IA, cas d'usage, ROI, valeur business, faisabilité, change management |

⚠️ La liste exhaustive des termes est à figer en début de Phase 4 ; ce gabarit fixe la structure, pas la liste finale.

## 5. Composants utilisés

| Composant | Usage |
| :--- | :--- |
| `<HeroSecondary />` | Hero glossaire |
| `<GlossarySearch />` | Recherche fuzzy locale (Fuse.js) |
| `<AlphaIndex />` | Index A-Z |
| `<FiltersBar />` (variante taxonomy-light) | Filtres |
| `<GlossaryTerm />` | Carte de terme |
| `<SourceTag />` | Niveau de preuve de la définition |
| `<GlossaryDrawer />` | Variante latérale invocable depuis n'importe quelle page |

## 6. Microcopies clés (FR / EN / AR)

| Élément | FR | EN | AR |
| :--- | :--- | :--- | :--- |
| H1 | « Glossaire » | "Glossary" | « قاموس » |
| Recherche placeholder | « Rechercher un terme » | "Search a term" | « ابحث عن مصطلح » |
| « Voir dans Module N » | « Voir dans Module N » | "See in Module N" | « شاهد في الوحدة N » |
| Tag exemple | « Exemple business » | "Business example" | « مثال أعمال » |
| État vide | « Aucun terme correspondant » | "No matching term" | « لا يوجد مصطلح متطابق » |

## 7. Données nécessaires

```typescript
interface GlossaryTerm {
  id: string;
  term: string;
  termLowercase: string; // pour le tri et la recherche
  definition: string;
  businessExample?: string;
  taxonomy: {
    modules: string[];
    tech?: string[];
    level: 'level-discovery' | 'level-applicable' | 'level-advanced';
  };
  relatedPages: { label: string; href: string }[];
  source: Source;
}
```

## 8. SEO

| Balise | Valeur (FR) |
| :--- | :--- |
| `<title>` | « Glossaire IA et stratégie · AI Strategy » |
| `<meta description>` | « ~30 termes définis : machine learning, IA générative, hallucination, RAG, gouvernance, AI Act, et plus. Définitions claires, exemples business. » |
| Schema.org | `DefinedTermSet` (chaque terme = `DefinedTerm`) |

⚠️ Schema.org `DefinedTermSet` permet à chaque entrée d'apparaître en featured snippet. Bénéfice SEO majeur.

## 9. Accessibilité

- Liste structurée : `<dl>` (description list) avec `<dt>` (terme) et `<dd>` (définition) — ou `<article>` avec `<h2>` selon choix de design.
- Index A-Z : `<nav>` avec `aria-label="Index alphabétique"`.
- Recherche : `<label>` associé, résultats annoncés en `aria-live`.
- Tags taxonomie : non interactifs en lecteur d'écran si purement décoratifs.

## 10. Points de vigilance

| Piège | Mitigation |
| :--- | :--- |
| Définitions inventées ou imprécises | Source obligatoire ; relecture pour les termes techniques (LLM, RAG…) auprès de sources MIT/NIST |
| Termes traduits à la légère en EN/AR | Glossaire de traduction interne maintenu ; relecture par locuteur natif |
| Index A-Z absent en arabe | Adaptation : tri alphabétique arabe, pas A-Z latin |
| Définition trop longue | Limite stricte : 1-2 phrases ; les développements vont dans les pages module |

---

## 📎 Documents associés

- [Charte de cadrage — section 10 (glossaire de la charte)](../../cadrage/charte-de-cadrage.md#10-glossaire-des-termes-utilisés-dans-la-charte)
- [Taxonomie](../taxonomy.md)
