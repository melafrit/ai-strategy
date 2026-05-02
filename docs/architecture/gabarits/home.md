# Gabarit — Page d'accueil

| Métadonnée | Valeur |
| :--- | :--- |
| **Gabarit** | Home |
| **URL pattern** | `/{lang}/` |
| **Version** | 1.0 |
| **Statut** | Ratifié — alimente la Phase 4 |

---

## 1. Objectif

La page d'accueil est l'**unique page** que tout visiteur traverse, quelles que soient ses intentions. Elle doit :

1. **Annoncer la promesse** en moins de 5 secondes (héro lisible, sans jargon).
2. **Crédibiliser** le site par sa rigueur visible (sources, indépendance MIT, mention licence).
3. **Orienter** vers les 3 audiences (dirigeants / consultants / enseignants & étudiants) sans en exclure aucune.
4. **Convertir** la visite en parcours d'apprentissage ou en téléchargement de fiche.

## 2. Audience prioritaire

Les **3 audiences** simultanément, mais avec des CTAs distincts pour chacune. La page assume sa double posture : éditoriale (consulting modern) et pédagogique (académie).

## 3. Wireframe textuel

```
┌──────────────────────────────────────────────────────────────────────┐
│ HEADER GLOBAL                                                        │
│ [Logo AI Strategy]      Programme · Modules · Cas · Ressources       │
│                         Capstone · Glossaire · À propos              │
│                         🌐 FR | EN | AR        🔍                    │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ HÉRO                                                                 │
│ ┌──────────────────────────────────────────┐  ┌────────────────────┐│
│ │ Surtitre court                           │  │ Visuel synthétique ││
│ │ « Inspiré du programme MIT Sloan »       │  │ (course map        ││
│ │                                          │  │  6 modules SVG)    ││
│ │ H1 — Décider, gouverner, déployer        │  │                    ││
│ │ l'IA dans votre organisation             │  │                    ││
│ │                                          │  │                    ││
│ │ Promesse en 2 phrases courtes            │  │                    ││
│ │                                          │  │                    ││
│ │ [CTA principal — Découvrir le programme] │  │                    ││
│ │ [CTA secondaire — Écouter la saison 1]   │  │                    ││
│ └──────────────────────────────────────────┘  └────────────────────┘│
├──────────────────────────────────────────────────────────────────────┤
│ BANDEAU DE PREUVES                                                   │
│ • Indépendance MIT (mention sobre)                                   │
│ • Hiérarchie des sources visible                                     │
│ • Trilingue FR/EN/AR                                                 │
│ • Licence ouverte CC BY-NC-SA                                        │
├──────────────────────────────────────────────────────────────────────┤
│ TROIS PARCOURS                                                       │
│ Pour qui est ce site ? — 3 cartes audience                           │
│ ┌──────────┐  ┌──────────┐  ┌──────────┐                            │
│ │ Dirigeant│  │ Consultant│ │ Enseignant│                            │
│ │ → CTA    │  │ → CTA     │ │ → CTA     │                            │
│ └──────────┘  └──────────┘  └──────────┘                            │
├──────────────────────────────────────────────────────────────────────┤
│ LES 6 MODULES — APERÇU                                               │
│ Grille de 6 cartes module avec icône, durée, 1 ligne d'objectif      │
├──────────────────────────────────────────────────────────────────────┤
│ ÉTUDES DE CAS À LA UNE                                               │
│ 3 cas mis en avant + lien vers index complet                         │
├──────────────────────────────────────────────────────────────────────┤
│ COMMENT NOUS TRAVAILLONS — Méthode                                   │
│ Hiérarchie des sources, indépendance, double licence                 │
├──────────────────────────────────────────────────────────────────────┤
│ DERNIER ARRIVÉ / DERNIÈRE MISE À JOUR                                │
│ (transparence sur la fraîcheur du contenu)                           │
├──────────────────────────────────────────────────────────────────────┤
│ FOOTER                                                               │
└──────────────────────────────────────────────────────────────────────┘
```

## 4. Sections obligatoires

### 4.1 Hero
- **Surtitre** sobre rappelant l'inspiration MIT (ex. « Inspiré du programme MIT Sloan ») — pas une revendication d'affiliation.
- **H1** action-oriented (« Décider, gouverner, déployer l'IA dans votre organisation »).
- **Sous-titre** en deux phrases : ce que le site fait + comment.
- **CTA principal** vers `/{lang}/programme/` (Découvrir le programme).
- **CTA secondaire** vers `/{lang}/saison-01/` (Écouter la saison 1).
- **Visuel** : course map SVG des 6 modules, statique et léger (≤ 30 KB).

### 4.2 Bandeau de preuves
Quatre repères de crédibilité, sous forme d'icônes Lucide + libellés courts :
1. Indépendance MIT (`<IndependenceNotice variant="inline" />`)
2. Hiérarchie des sources (lien vers `/{lang}/methode/`)
3. Trilingue FR / EN / AR
4. Contenu sous licence ouverte CC BY-NC-SA 4.0

### 4.3 Trois parcours d'audience
Trois `<AudienceCard />` côte à côte (ou empilées sur mobile) :
- **Dirigeants** → CTA « Synthèses exécutives » → `/{lang}/ressources/?level=level-applicable&type=fiche`
- **Consultants** → CTA « Templates et matrices » → `/{lang}/ressources/?type=outil`
- **Enseignants & étudiants** → CTA « Quiz et glossaire » → `/{lang}/quiz/`

### 4.4 Aperçu des 6 modules
Grille de 6 `<ModuleCard />`, chacune avec :
- Numéro et titre
- Durée estimée
- Une phrase d'objectif principal
- Lien vers la page module

### 4.5 Études de cas à la une
3 `<CaseCard />` avec : entreprise, technologie, modules liés, lien.
Sélection éditoriale : par défaut Morgan Stanley GenAI / Stripe Radar ML / Amazon Robotics (couvre M3, M2, M4).

### 4.6 Méthode
Bloc rappelant brièvement les 4 principes éditoriaux (cf. charte section 6) avec un lien proéminent vers `/{lang}/methode/`.

### 4.7 Dernière mise à jour
Bloc de transparence affichant :
- Date de dernière mise à jour majeure
- Lien vers le `CHANGELOG.md`
- Lien vers le repository GitHub

## 5. Sections optionnelles

| Section | Condition d'activation |
| :--- | :--- |
| Bannière d'annonce (nouvelle saison de podcast, nouveau module) | Lorsque pertinent — désactivable |
| Témoignages | À activer uniquement si témoignages réels et autorisés (jamais inventés) |
| Newsletter | À éviter sauf si infrastructure dédiée existe (RGPD) |

## 6. Composants utilisés

| Composant | Usage |
| :--- | :--- |
| `<HeroPrimary />` | Bloc hero responsive avec image SVG |
| `<TrustBar />` | Bandeau de preuves |
| `<AudienceCard />` | Carte audience avec CTA |
| `<ModuleCard />` | Carte module compacte |
| `<CaseCard />` | Carte étude de cas |
| `<MethodCallout />` | Encart méthode |
| `<UpdatedAt />` | Indicateur de fraîcheur |
| `<IndependenceNotice />` (variant inline) | Mention indépendance MIT |

## 7. Microcopies clés (FR / EN / AR)

| Élément | FR | EN | AR |
| :--- | :--- | :--- | :--- |
| Surtitre hero | « Inspiré du programme MIT Sloan » | "Inspired by the MIT Sloan program" | « مستوحى من برنامج MIT Sloan » |
| CTA principal | « Découvrir le programme » | "Explore the program" | « اكتشف البرنامج » |
| CTA secondaire | « Écouter la saison 1 » | "Listen to Season 1" | « استمع إلى الموسم 1 » |
| CTA dirigeant | « Synthèses exécutives » | "Executive summaries" | « ملخصات تنفيذية » |
| CTA consultant | « Templates et matrices » | "Templates & matrices" | « قوالب ومصفوفات » |
| CTA enseignant | « Quiz et glossaire » | "Quizzes & glossary" | « اختبارات وقاموس » |

## 8. Données nécessaires (frontmatter MDX)

```typescript
interface HomePage {
  lang: 'fr' | 'en' | 'ar';
  hero: {
    surtitle: string;
    title: string; // H1
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    illustrationSlug: string; // SVG dans /public/illustrations/
  };
  trustBar: TrustItem[]; // 4 items maximum
  audiences: AudienceItem[]; // 3 items
  highlightedCases: string[]; // 3 slugs de cas
  highlightedModules: string[]; // 6 slugs (par défaut tous)
  updatedAt: string; // ISO 8601
}
```

## 9. CTA et conversions

| CTA | Cible | Mesure de succès |
| :--- | :--- | :--- |
| Découvrir le programme | `/{lang}/programme/` | Taux de clic > 25 % |
| Écouter la saison 1 | `/{lang}/saison-01/` | Taux de clic > 8 % |
| Cartes audience | URLs filtrées | Distribution équilibrée 3 audiences |
| Cartes module | Pages module | Distribution équilibrée 6 modules |

*Mesures via analytics privacy-friendly à confirmer en Phase 7.*

## 10. SEO

| Balise | Valeur (FR) |
| :--- | :--- |
| `<title>` | « AI Strategy — Décider et déployer l'IA dans votre organisation » (≤ 60 car) |
| `<meta name="description">` | « Site pédagogique trilingue inspiré du programme MIT Sloan. Stratégie IA, machine learning, IA générative, robotique, gouvernance. Trilingue FR/EN/AR. » (≤ 160 car) |
| Canonical | `/{lang}/` |
| `hreflang` | 3 entrées (`fr`, `en`, `ar`) + `x-default` pointant `/fr/` |
| Schema.org | `WebSite` + `Organization` + `BreadcrumbList` |

## 11. Accessibilité

- **Niveau de contraste** AAA sur le hero (texte sur fond, fond sur image).
- **Hiérarchie de titres** : un seul `<h1>` (le titre du hero), `<h2>` pour chaque section principale.
- **Image hero** : `alt` descriptif (« Schéma du parcours en 6 modules… »).
- **CTA** : libellés explicites (jamais « Cliquez ici »), focus visible.
- **Bandeau de preuves** : icônes décoratives en `aria-hidden="true"`, le sens passe par le texte.

## 12. Points de vigilance

| Piège | Mitigation |
| :--- | :--- |
| Hero qui revendique implicitement une affiliation MIT | Surtitre « Inspiré de… » + `<IndependenceNotice />` toujours visible |
| Page trop longue, doom-scroll | Pas plus de 7 sections ; chaque section tient en ≤ 1 écran sur desktop |
| CTAs concurrents qui annulent l'effet | 1 CTA principal, 1 secondaire, le reste en `link` discret |
| Densité textuelle | Privilégier les visuels (course map, cartes) ; texte hero < 50 mots |
| Disparités RTL | Tester la version arabe sur l'ensemble du gabarit (icônes directionnelles, alignement visuel hero) |

---

## 📎 Documents associés

- [Sitemap](../sitemap.md) · [Taxonomie](../taxonomy.md)
- [Catalogue de composants](../../design-system/components.md)
- [Règles RTL](../../design-system/rtl-rules.md)
- [Personas](../../personas-parcours/personas.md)
