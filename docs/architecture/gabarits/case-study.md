# Gabarit — Étude de cas

| Métadonnée | Valeur |
| :--- | :--- |
| **Gabarit** | Case Study |
| **URL pattern** | `/{lang}/cas/` (index) et `/{lang}/cas/{slug}/` (détail) |
| **Version** | 1.0 |
| **Statut** | Ratifié |

---

## 1. Objectif

Documenter de façon **rigoureuse, sourcée et didactique** un déploiement réel d'IA dans une organisation publique ou privée. Chaque cas doit :

- Présenter le contexte sans complaisance ni promotion.
- S'appuyer **exclusivement** sur des sources primaires publiquement vérifiables.
- Tirer des enseignements **transférables** à d'autres organisations.
- Reconnaître les limites et risques.
- Servir de **support pédagogique** dans les modules et de **référence** en mission de conseil.

## 2. Audience prioritaire

- **Consultant** : argumentaire client, comparables, frameworks transférables.
- **Dirigeant** : « comment d'autres ont fait », ROI estimé, risques rencontrés.
- **Étudiant** : analyse critique, questions de discussion.

## 3. Wireframe textuel — Page détail

```
┌──────────────────────────────────────────────────────────────────────┐
│ HEADER + BREADCRUMB :  Accueil > Cas > Nom du cas                    │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ HÉRO CAS                                                             │
│ Surtitre : Étude de cas · Secteur · Technologie                      │
│ H1 :       Nom de l'organisation — Sujet                             │
│ Lead :     1-2 phrases résumant le cas                               │
│ Tags :     module · tech · sector · level                            │
│ Encadré :  niveau de preuve (source externe vérifiable)              │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│ EN BREF (carte synthétique)                                          │
│ Organisation · Secteur · Période · Technologie · Bénéfice clé        │
├──────────────────────────────────────────────────────────────────────┤
│ § 1 — CONTEXTE BUSINESS                                              │
│ Pourquoi cette organisation, à ce moment, sur ce sujet               │
├──────────────────────────────────────────────────────────────────────┤
│ § 2 — PROBLÈME MÉTIER                                                │
│ Diagnostic clair du besoin                                           │
├──────────────────────────────────────────────────────────────────────┤
│ § 3 — SOLUTION IA                                                    │
│ Description fonctionnelle de la réponse, sans détails confidentiels  │
├──────────────────────────────────────────────────────────────────────┤
│ § 4 — TECHNOLOGIE EMPLOYÉE                                           │
│ Famille d'IA, modèles utilisés (si publiés), intégrations            │
├──────────────────────────────────────────────────────────────────────┤
│ § 5 — BÉNÉFICES OBSERVÉS                                             │
│ Chiffres et faits sourcés, jamais inventés                           │
├──────────────────────────────────────────────────────────────────────┤
│ § 6 — LIMITES ET POINTS D'ATTENTION                                  │
│ Critique éditoriale honnête                                          │
├──────────────────────────────────────────────────────────────────────┤
│ § 7 — RISQUES ET GOUVERNANCE                                         │
│ Comment l'organisation a géré les risques                            │
├──────────────────────────────────────────────────────────────────────┤
│ § 8 — ENSEIGNEMENTS MANAGÉRIAUX                                      │
│ 5-7 enseignements transférables                                      │
├──────────────────────────────────────────────────────────────────────┤
│ § 9 — QUESTIONS DE DISCUSSION                                        │
│ 5 questions ouvertes pour atelier ou travail individuel              │
├──────────────────────────────────────────────────────────────────────┤
│ § 10 — LIENS AVEC LES MODULES                                        │
│ Cartes de modules et concepts mobilisés                              │
├──────────────────────────────────────────────────────────────────────┤
│ § 11 — SOURCES                                                       │
│ Liste des sources primaires utilisées (URL + date d'accès)           │
├──────────────────────────────────────────────────────────────────────┤
│ NAVIGATION ENTRE CAS                                                 │
└──────────────────────────────────────────────────────────────────────┘
```

## 4. Wireframe textuel — Page index

```
┌──────────────────────────────────────────────────────────────────────┐
│ HEADER + BREADCRUMB                                                  │
├──────────────────────────────────────────────────────────────────────┤
│ HÉRO INDEX                                                           │
│ H1 : Études de cas · Lead : approche éditoriale (sources primaires)  │
├──────────────────────────────────────────────────────────────────────┤
│ FILTRES (4 dimensions de la taxonomie)                               │
│ [Module v]  [Tech v]  [Secteur v]  [Niveau v]   X Effacer            │
│ « N cas correspondent »                                              │
├──────────────────────────────────────────────────────────────────────┤
│ GRILLE DE CARTES <CaseCard /> (3 colonnes desktop, 1 mobile)         │
│ Pagination ou lazy load                                              │
└──────────────────────────────────────────────────────────────────────┘
```

## 5. Sections obligatoires (page détail)

### 5.1 Hero cas
- **Surtitre** : « Étude de cas · Secteur · Technologie » (ex. « Étude de cas · Finance · IA générative »).
- **H1** : « <Organisation> — <Sujet du cas> » (ex. « Morgan Stanley — IA générative pour la recherche financière »).
- **Lead** : 1-2 phrases qui posent l'enjeu.
- **Tags** : 4 chips correspondant aux 4 dimensions de la taxonomie.
- **Encadré `<SourceTag level="external-verifiable" />`** rappelant que le cas s'appuie exclusivement sur des sources publiques vérifiables.

### 5.2 « En bref »
Carte synthétique en 5 entrées, lisible en 30 secondes :
- Organisation
- Secteur
- Période / horizon
- Technologie principale
- Bénéfice clé documenté

### 5.3 § 1 — Contexte business
2-3 paragraphes : pourquoi cette organisation, à ce moment, sur ce sujet. Permet au lecteur de comprendre l'enjeu sans lire la suite.

### 5.4 § 2 — Problème métier
Diagnostic clair : ce qui ne fonctionnait pas avant l'IA, ou ce qui devait être amélioré. Format problème → conséquence → coût implicite.

### 5.5 § 3 — Solution IA
Description **fonctionnelle**, pas implémentation détaillée :
- Ce que la solution fait du point de vue utilisateur.
- Comment elle s'intègre dans le workflow existant.
- Quel rôle pour l'humain (revue, validation, supervision).

⚠️ Aucune information confidentielle ou non publique. Si la documentation publique est silencieuse, la formuler comme telle (« la documentation publique ne précise pas… »).

### 5.6 § 4 — Technologie employée
- **Famille d'IA** : ML, GenAI, robotique, classique, combinaison.
- **Modèles** : uniquement si publiés (ex. GPT-4, Llama, modèle interne).
- **Intégrations** : systèmes amont/aval, données utilisées.
- **Architecture** : niveau d'abstraction modéré (pas de schéma technique propriétaire).

### 5.7 § 5 — Bénéfices observés
Chiffres et faits **strictement sourcés** :
- Chaque chiffre porte une référence (`<SourceTag />` + lien).
- Si aucune métrique publique n'existe, ne **pas inventer** ; mentionner qualitativement (« amélioration rapportée par l'organisation »).

### 5.8 § 6 — Limites et points d'attention
Critique éditoriale honnête :
- Périmètre limité du déploiement.
- Conditions de transposabilité.
- Métriques manquantes ou disputées.
- Effets de bord documentés.

### 5.9 § 7 — Risques et gouvernance
Comment l'organisation a géré (ou pas) :
- Hallucinations / erreurs (pour GenAI).
- Biais (pour ML).
- Sécurité physique (pour robotique).
- Vie privée et conformité.
- Impact sur le travail et les compétences.

### 5.10 § 8 — Enseignements managériaux
5 à 7 enseignements transférables, formulés au présent généralisable :
> « Avant de déployer un assistant GenAI à l'échelle, prévoir une phase de pilote dirigée par les utilisateurs métier, avec un taux de revue humaine élevé. »

### 5.11 § 9 — Questions de discussion
5 questions ouvertes utilisables :
- En atelier client (consultant).
- En cours (enseignant).
- En auto-réflexion (apprenant).

### 5.12 § 10 — Liens avec les modules
Cartes vers le ou les modules pédagogiques associés. Mention explicite des concepts mobilisés (1-3).

### 5.13 § 11 — Sources
Liste explicitement formatée :

```
1. Nom de la source (Type) — URL — Date d'accès
2. ...
```

Avec :
- Privilégier les sources **primaires** (communications officielles, blogs corporate, rapports publiés).
- Archivage Wayback Machine recommandé pour chaque URL.
- Au moins **3 sources** par cas, idéalement 5+.

## 6. Sélection des cas

10 cas à produire en Phase 4 (cohérent avec le sitemap) :

| Cas | Organisation | Modules | Secteur | Technologie |
| :--- | :--- | :--- | :--- | :--- |
| Morgan Stanley GenAI | Morgan Stanley | M3, M5 | Finance | GenAI |
| Stripe Radar ML | Stripe | M2 | Tech / Finance | ML |
| GitHub Copilot Accenture | GitHub × Accenture | M3, M5 | Tech | GenAI |
| Amazon Robotics | Amazon | M4 | Logistique | Robotique + ML |
| Klarna AI Assistant | Klarna | M3 | Retail / Finance | GenAI |
| Takeda Superminds | Takeda × MIT CCI | M1, M6 | Santé | Intelligence collective |
| IA santé dépistage | Multi-institutions | M2, M5 | Santé | ML |
| Spotify personalisation | Spotify | M2 | Tech / Media | ML |
| NIST AI RMF | NIST | M5 | Public | Gouvernance |
| OCDE × AI Act | OCDE / UE | M5 | Public | Gouvernance |

## 7. Composants utilisés

| Composant | Usage |
| :--- | :--- |
| `<HeroCase />` | Hero spécifique cas |
| `<SourceTag />` | Niveau de preuve (toujours `external-verifiable` ou `recommended-complement` ici) |
| `<TaxonomyChips />` | Affichage des tags taxonomie |
| `<CaseInBrief />` | Carte « En bref » |
| `<CaseCard />` (sur l'index) | Carte de cas dans la grille |
| `<FiltersBar />` (sur l'index) | Barre de filtres taxonomie |
| `<DiscussionQuestions />` | Bloc questions de discussion |
| `<ModuleLinkCard />` | Lien vers modules associés |
| `<SourcesList />` | Liste sourcée formatée |
| `<PrevNextNav />` | Navigation entre cas |

## 8. Microcopies clés (FR / EN / AR)

| Élément | FR | EN | AR |
| :--- | :--- | :--- | :--- |
| Surtitre cas | « Étude de cas » | "Case study" | « دراسة حالة » |
| H2 § 1 | « Contexte business » | "Business context" | « السياق التجاري » |
| H2 § 2 | « Problème métier » | "Business problem" | « المشكلة » |
| H2 § 3 | « Solution IA » | "AI solution" | « حلّ الذكاء الاصطناعي » |
| H2 § 4 | « Technologie employée » | "Technology used" | « التقنية المستخدمة » |
| H2 § 5 | « Bénéfices observés » | "Observed benefits" | « الفوائد الملاحظة » |
| H2 § 6 | « Limites » | "Limitations" | « حدود » |
| H2 § 7 | « Risques et gouvernance » | "Risks & governance" | « المخاطر والحوكمة » |
| H2 § 8 | « Enseignements » | "Lessons learned" | « العبر المستفادة » |
| H2 § 9 | « Questions de discussion » | "Discussion questions" | « أسئلة للنقاش » |
| H2 § 10 | « Liens avec les modules » | "Links to modules" | « روابط مع الوحدات » |
| H2 § 11 | « Sources » | "Sources" | « مصادر » |

## 9. Données nécessaires (frontmatter MDX)

```typescript
interface CaseStudyPage {
  lang: 'fr' | 'en' | 'ar';
  slug: string;
  organization: string;
  title: string;
  lead: string;
  inBrief: {
    organization: string;
    sector: string;
    period: string;
    technology: string;
    keyBenefit: string;
  };
  taxonomy: TaxonomyTags;
  context: string; // markdown
  problem: string;
  solution: string;
  technology: string;
  benefits: BenefitItem[]; // chaque benefit a une source
  limitations: string[];
  risksGovernance: string;
  lessons: string[]; // 5-7
  discussionQuestions: string[]; // 5
  relatedModules: string[];
  sources: Source[]; // 3+ obligatoires
}
```

## 10. SEO

| Balise | Valeur (FR) — Morgan Stanley en exemple |
| :--- | :--- |
| `<title>` | « Morgan Stanley & l'IA générative — Cas · AI Strategy » |
| `<meta description>` | « Comment Morgan Stanley a déployé l'IA générative pour ses analystes (AskResearchGPT, Debrief). Bénéfices, risques, enseignements managériaux. » |
| Canonical | `/{lang}/cas/morgan-stanley-genai/` |
| Schema.org | `Article` + `BreadcrumbList` |

## 11. Accessibilité

- Tags taxonomie : icônes décoratives, sens transmis par le texte.
- Liens vers sources externes : `rel="noopener noreferrer"`, ouverture nouvel onglet annoncée par texte caché si conventionnée.
- Hiérarchie : `<h1>` unique = titre du cas.

## 12. Points de vigilance

| Piège | Mitigation |
| :--- | :--- |
| Cas devenant promotionnel (effet brochure entreprise) | Inclure obligatoirement § 6 Limites avec contenu réel |
| Statistiques inventées ou exagérées | Source obligatoire pour chaque chiffre, audit éditorial |
| Cas dont la source primaire disparaît | Archivage Wayback Machine + sources de second rang en backup |
| Conflit d'intérêts non déclaré | Mention explicite si l'auteur a un lien avec l'organisation citée |
| Effet « copier-coller » entre cas | Chaque cas a une structure propre, le squelette est commun, le contenu est unique |

---

## 📎 Documents associés

- [Gabarit Module](./module.md)
- [Taxonomie](../taxonomy.md)
- [Sitemap](../sitemap.md)
