# Gabarit — Page Capstone

| Métadonnée | Valeur |
| :--- | :--- |
| **Gabarit** | Capstone |
| **URL pattern** | `/{lang}/capstone/` |
| **Version** | 1.0 |
| **Statut** | Ratifié |

---

## 1. Objectif

Donner au visiteur un **dispositif complet et autonome** pour produire une **roadmap IA** pour son organisation : structure attendue, template téléchargeable, exemple pédagogique, grille d'évaluation, et roadmap builder interactif (Phase 5).

C'est la **page-pivot** du site : elle synthétise les 6 modules en un livrable concret et transférable.

## 2. Audience prioritaire

- **Consultant** (audience #1 ici) : modèle réutilisable client.
- **Dirigeant** : structure pour un comité de pilotage IA.
- **Étudiant** : projet final de cours.

## 3. Wireframe textuel

```
┌──────────────────────────────────────────────────────────────────────┐
│ HEADER + BREADCRUMB :  Accueil > Capstone                            │
├──────────────────────────────────────────────────────────────────────┤
│ HÉRO CAPSTONE                                                        │
│ Surtitre : Projet final · Synthèse opérationnelle                    │
│ H1 : Construire la roadmap IA de votre organisation                  │
│ Lead : promesse + ce qu'on produit + temps estimé                    │
│ CTAs : [Télécharger le template] [Voir l'exemple pédagogique]        │
├──────────────────────────────────────────────────────────────────────┤
│ § 1 — POURQUOI UNE ROADMAP                                           │
│ Argumentaire managérial sourcé                                       │
├──────────────────────────────────────────────────────────────────────┤
│ § 2 — STRUCTURE D'UNE ROADMAP IA                                     │
│ 12 sections avec descriptions courtes                                │
├──────────────────────────────────────────────────────────────────────┤
│ § 3 — DIAGNOSTIC DE MATURITÉ IA                                      │
│ Mini-questionnaire (composant Phase 5)                               │
├──────────────────────────────────────────────────────────────────────┤
│ § 4 — IDENTIFICATION DES CAS D'USAGE                                 │
│ Démarche atelier + use-case canvas                                   │
├──────────────────────────────────────────────────────────────────────┤
│ § 5 — PRIORISATION                                                   │
│ Matrice valeur / faisabilité interactive (Phase 5)                   │
├──────────────────────────────────────────────────────────────────────┤
│ § 6 — CHOIX D'UN PILOTE                                              │
│ Critères de sélection                                                │
├──────────────────────────────────────────────────────────────────────┤
│ § 7 — GOUVERNANCE                                                    │
│ Comité IA · rôles · processus · NIST RMF                             │
├──────────────────────────────────────────────────────────────────────┤
│ § 8 — BUDGET ET COMPÉTENCES                                          │
│ Repères de coût · build vs buy · plan compétences                    │
├──────────────────────────────────────────────────────────────────────┤
│ § 9 — KPI                                                            │
│ Tableau de bord IA (5-7 KPIs) · cadence de revue                     │
├──────────────────────────────────────────────────────────────────────┤
│ § 10 — RISQUES                                                       │
│ Registre des risques (template + composant Phase 5)                  │
├──────────────────────────────────────────────────────────────────────┤
│ § 11 — CONFORMITÉ                                                    │
│ Checklist AI Act · NIST · OCDE · RGPD                                │
├──────────────────────────────────────────────────────────────────────┤
│ § 12 — PLANNING 12-24 MOIS                                           │
│ Frise visuelle · jalons · dépendances                                │
├──────────────────────────────────────────────────────────────────────┤
│ EXEMPLE PÉDAGOGIQUE                                                  │
│ « Roadmap IA d'une ETI fictive du secteur retail »                   │
│ Encadré : ⚠ Exemple fictif à des fins pédagogiques                   │
├──────────────────────────────────────────────────────────────────────┤
│ ROADMAP BUILDER                                                      │
│ Composant interactif (Phase 5)                                       │
├──────────────────────────────────────────────────────────────────────┤
│ GRILLE D'ÉVALUATION (rubric)                                         │
│ 8 critères · 4 niveaux · grille téléchargeable                       │
├──────────────────────────────────────────────────────────────────────┤
│ CHECKLIST EXÉCUTIVE                                                  │
│ 15-20 items à valider                                                │
└──────────────────────────────────────────────────────────────────────┘
```

## 4. Sections obligatoires

### 4.1 Hero capstone
- **Surtitre** : « Projet final · Synthèse opérationnelle ».
- **H1** : « Construire la roadmap IA de votre organisation ».
- **Lead** : 2-3 phrases promettant un livrable concret.
- **CTAs** : « Télécharger le template » (PDF Phase 5) + « Voir l'exemple pédagogique » (ancre).

### 4.2 § 1 — Pourquoi une roadmap
- 2-3 paragraphes argumentaires (pourquoi sans roadmap, l'IA reste un patchwork projet par projet).
- Ancré sur les modules 5 (gouvernance) et 6 (futur).
- Sources : `<SourceTag />` recommandé/externe.

### 4.3 § 2 — Structure d'une roadmap IA
Tableau décrivant les 12 sections du livrable attendu :

| # | Section | Question clé | Outil associé |
| :---: | :--- | :--- | :--- |
| 1 | Diagnostic de maturité | Où en est l'organisation ? | Mini-questionnaire |
| 2 | Vision et ambition IA | Quelle est la promesse IA ? | Vision canvas |
| 3 | Cas d'usage candidats | Que pourrait-on faire ? | Use-case canvas |
| 4 | Priorisation | Par où commencer ? | Matrice valeur/faisabilité |
| 5 | Choix d'un pilote | Quel premier projet ? | Fiche pilote |
| 6 | Gouvernance | Qui décide quoi ? | Charte de gouvernance |
| 7 | Budget | Combien et comment ? | Repères budget |
| 8 | Compétences | Qui doit savoir quoi ? | Plan de compétences |
| 9 | KPI | Comment mesurer ? | Tableau de bord IA |
| 10 | Risques | Quels risques surveiller ? | Risk register |
| 11 | Conformité | Quelles obligations ? | Checklist conformité |
| 12 | Planning 12-24 mois | Quand quoi ? | Frise visuelle |

### 4.4 § 3 — § 12 — Sections détaillées
Chaque section reprend, avec environ 200-400 mots :
- Pourquoi cette section.
- Méthode pour la remplir.
- Pièges fréquents.
- Outil ou template associé (lien fiche PDF Phase 5).
- Pour les sections interactives (3, 5, 10) : lien vers le composant React (Phase 5).

### 4.13 Exemple pédagogique
Bloc visuellement distinct (`<PedagogicalExample />`) :
- Titre : « Exemple — Roadmap IA d'une ETI fictive du secteur retail ».
- ⚠️ **Encadré obligatoire** : « Exemple fictif à des fins pédagogiques. Aucune correspondance avec une organisation réelle. »
- 1 page de description type-roadmap pour illustrer le rendu attendu.
- Téléchargeable en PDF.

### 4.14 Roadmap builder
Composant React interactif (Phase 5) :
- Formulaire en 12 étapes correspondant aux 12 sections.
- Persistance `localStorage`.
- Export PDF (impression CSS).

⚠️ Sur la page de Phase 4, ce composant est en placeholder (« Disponible dans la prochaine phase »).

### 4.15 Grille d'évaluation
Rubric téléchargeable, 8 critères × 4 niveaux :

| Critère | 1 — Insuffisant | 2 — Émergent | 3 — Structuré | 4 — Excellent |
| :--- | :--- | :--- | :--- | :--- |
| Clarté de la vision | Vague | Énoncée | Articulée à la stratégie | Inspirante et mesurable |
| Pertinence des cas d'usage | Génériques | Plausibles | Validés par les métiers | Priorisés sur ROI/risque |
| Qualité de la gouvernance | Absente | Annoncée | Comité défini | Comité actif + revue |
| Réalisme du budget | Fantaisiste | Estimé | Détaillé | Sourcé + sensibilité |
| Plan de compétences | Absent | Listé | Plan formel | Plan + plan de succession |
| Robustesse des KPI | Vagues | Quantitatifs | SMART | Pilotage instrumenté |
| Maturité de la gouvernance des risques | Absente | Identifiée | Registre actif | Registre + plan de réponse |
| Conformité réglementaire | Non traitée | Mention | Checklist appliquée | Audit externe planifié |

### 4.16 Checklist exécutive
Composant `<Checklist />` final avec 15-20 items à valider avant de présenter la roadmap en COMEX. Exportable PDF.

## 5. Composants utilisés

| Composant | Usage |
| :--- | :--- |
| `<HeroCapstone />` | Hero spécifique capstone |
| `<RoadmapStructureTable />` | Tableau des 12 sections |
| `<MaturitySurvey />` (Phase 5) | Mini-questionnaire diagnostic |
| `<UseCaseCanvas />` (Phase 5) | Canvas use-case |
| `<ValueFeasibilityMatrix />` (Phase 5) | Matrice priorisation |
| `<RiskRegister />` (Phase 5) | Registre des risques |
| `<RoadmapBuilder />` (Phase 5) | Constructeur interactif |
| `<RubricTable />` | Grille d'évaluation |
| `<Checklist />` | Checklist exécutive |
| `<PedagogicalExample />` | Encart exemple fictif |
| `<DownloadCard />` | Lien vers fiches PDF |

## 6. Microcopies clés (FR / EN / AR)

| Élément | FR | EN | AR |
| :--- | :--- | :--- | :--- |
| H1 | « Construire la roadmap IA de votre organisation » | "Build your organization's AI roadmap" | « ابنِ خارطة طريق الذكاء الاصطناعي لمؤسستك » |
| CTA principal | « Télécharger le template » | "Download the template" | « نزّل القالب » |
| CTA secondaire | « Voir l'exemple » | "See the example" | « شاهد المثال » |
| Avertissement exemple | « ⚠ Exemple fictif à des fins pédagogiques » | "⚠ Fictional example for pedagogical purposes" | « ⚠ مثال خيالي لأغراض تربوية » |

## 7. Données nécessaires

```typescript
interface CapstonePage {
  lang: 'fr' | 'en' | 'ar';
  sections: RoadmapSection[]; // 12
  pedagogicalExample: { title: string; pdfUrl: string; description: string };
  rubric: RubricCriterion[]; // 8
  executiveChecklist: ChecklistItem[]; // 15-20
  templateDownload: { url: string; format: 'pdf' };
}
```

## 8. SEO

| Balise | Valeur (FR) |
| :--- | :--- |
| `<title>` | « Capstone — Roadmap IA · AI Strategy » |
| `<meta description>` | « Construisez une roadmap IA en 12 sections : diagnostic, cas d'usage, priorisation, gouvernance, budget, KPI, risques, planning. Template inclus. » |
| Schema.org | `HowTo` |

## 9. Accessibilité

- Sections numérotées : `aria-label` complet incluant le numéro.
- Composants interactifs (Phase 5) : navigation clavier, focus visible, ARIA conforme.
- Encart exemple pédagogique : `role="note"` + couleur + icône (sens triple).

## 10. Points de vigilance

| Piège | Mitigation |
| :--- | :--- |
| Confusion entre exemple fictif et cas réel | Encadré d'avertissement répété ; styling visuel distinct |
| Page trop ambitieuse (over-promise) | Lead sobre : « un cadre de référence, pas une formule magique » |
| Composants Phase 5 manquants en Phase 4 | Placeholders explicites ; pas de bouton non fonctionnel |
| Rubric utilisée comme évaluation officielle | Mention « rubric pédagogique d'auto-évaluation, pas évaluation institutionnelle » |

---

## 📎 Documents associés

- [Gabarit Module](./module.md) · [Gabarit Quiz](./quiz.md)
- [Sitemap](../sitemap.md)
