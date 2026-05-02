# Iconographie — AI Strategy

> Conventions d'usage des **icônes Lucide** sur l'ensemble du site, cohérent avec ADR-005 (direction visuelle Consulting Modern).
> Lucide est un fork open-source de Feather Icons, maintenu activement, avec une couverture large (1500+ icônes), une licence MIT, et une cohérence visuelle stricte (1.5 px stroke, geometric, neutral).

| Métadonnée | Valeur |
| :--- | :--- |
| **Version** | 1.0 |
| **Bibliothèque** | [Lucide Icons](https://lucide.dev/) v0.350+ |
| **Licence** | MIT |
| **Format** | SVG via `lucide-react` ou `@lucide/astro` |

---

## 1. Pourquoi Lucide

| Critère | Lucide | Alternatives écartées |
| :--- | :--- | :--- |
| Cohérence visuelle | ✅ 1.5 px stroke, géométrique | Heroicons (varient en style), Remix (mix outline/fill) |
| Couverture | ✅ 1500+ icônes | Feather (limité à ~280) |
| Licence | ✅ MIT | Font Awesome Pro (payant) |
| Performance | ✅ Tree-shakable, ~600 octets/icône | Bibliothèques web fonts (charges lourdes) |
| Trilingue | ✅ Neutre culturellement | Material (parfois Google-flavored) |
| Maintenance | ✅ Active (≥ release/mois) | Feather (ralenti depuis 2020) |

---

## 2. Tailles standards

```css
:root {
  --ai-icon-xs:   12px;   /* Inline dans du texte petit */
  --ai-icon-sm:   16px;   /* Inline dans du texte standard, badges */
  --ai-icon-md:   20px;   /* Boutons, navigation */
  --ai-icon-lg:   24px;   /* Cartes, illustrations légères */
  --ai-icon-xl:   32px;   /* Hero, illustrations principales */
  --ai-icon-2xl:  48px;   /* Cas exceptionnels */
}
```

**Règles d'usage** :
- Une icône **dans** du texte fait **la taille de la lettre majuscule** (~`--ai-icon-sm` pour du `--ai-text-base`).
- Une icône **standalone** sur un bouton fait `--ai-icon-md` minimum (cible tactile 44 px assurée par le padding du bouton).
- Une icône **décorative dans une carte** fait `--ai-icon-lg`.
- Une icône **hero** ou **illustration** fait `--ai-icon-xl` ou plus.

---

## 3. Stroke et couleur

### 3.1 Stroke
- **Stroke fixe** : `1.5px` (valeur native de Lucide, ne pas modifier).
- Sur fond clair : couleur `currentColor` qui hérite du texte parent.
- Pour un focus visuel renforcé sur un CTA : `stroke-width: 2px` (variante exceptionnelle).

### 3.2 Couleurs
Les icônes héritent **par défaut** de la couleur du texte parent (`currentColor`). Cela garantit :
- Cohérence avec le contexte (texte primaire / secondaire / muted).
- Adaptation automatique aux états (hover, focus, etc.).
- Pas de surcharge de tokens.

Cas particuliers où la couleur de l'icône est forcée :
- Icônes sémantiques (`<SourceTag />`) : couleur dérivée du niveau de source (cf. `tokens.md` 2.4).
- Icônes dans `<TrustBar />` : couleur `--ai-accent-primary` pour cohérence visuelle.
- Icônes de feedback (success, warning, danger) : couleur sémantique correspondante.

---

## 4. Catalogue d'icônes utilisées

Cette liste recense les icônes employées sur le site, par contexte. Toute nouvelle icône **doit** d'abord être recherchée dans cette liste avant ajout — l'objectif est de minimiser le vocabulaire iconographique.

### 4.1 Navigation et structure

| Usage | Icône Lucide |
| :--- | :--- |
| Logo principal | (logotype texte, pas d'icône) |
| Menu mobile | `Menu` |
| Fermer modale/menu | `X` |
| Recherche | `Search` |
| Sélecteur de langue | `Globe` |
| Retour | `ChevronLeft` (LTR) / `ChevronRight` (RTL — miroir CSS) |
| Suivant | `ChevronRight` (LTR) / `ChevronLeft` (RTL — miroir CSS) |
| Étendre/réduire (accordéon) | `ChevronDown` |
| Lien externe | `ExternalLink` |
| Ancre fil d'Ariane | `ChevronRight` (LTR) / `ChevronLeft` (RTL) |

### 4.2 Audiences (`<AudienceCard />` home)

| Audience | Icône Lucide |
| :--- | :--- |
| Dirigeants et top management | `Briefcase` |
| Consultants et transformation | `Wrench` |
| Enseignants et étudiants | `GraduationCap` |

### 4.3 Modules (icônes thématiques)

| Module | Icône Lucide |
| :--- | :--- |
| M1 — Introduction à l'IA | `Sparkles` |
| M2 — Machine Learning | `BarChart3` |
| M3 — IA Générative | `Wand2` |
| M4 — Robotique | `Bot` |
| M5 — IA et société | `Scale` |
| M6 — Futur de l'IA | `Compass` |

### 4.4 Types de ressources (`<ResourceCard />`)

| Type | Icône Lucide |
| :--- | :--- |
| Fiche PDF | `FileText` |
| Lecture (article, rapport) | `BookOpen` |
| Vidéo | `Video` |
| Standard (NIST, OCDE…) | `ShieldCheck` |
| Podcast | `Headphones` |
| Slides | `Presentation` |
| Infographie | `Image` |

### 4.5 Sources (`<SourceTag />`)

| Niveau | Icône Lucide |
| :--- | :--- |
| Officiel MIT | `BadgeCheck` |
| Complément recommandé | `BookOpenCheck` |
| Reconstruction pédagogique | `Lightbulb` |
| Source externe vérifiable | `Link2` |
| À vérifier | `AlertCircle` |

### 4.6 Trust bar (home)

| Item | Icône Lucide |
| :--- | :--- |
| Indépendance MIT | `ShieldOff` |
| Hiérarchie des sources | `BadgeCheck` |
| Trilingue | `Globe` |
| Licence ouverte | `Unlock` |

### 4.7 Feedback et états

| État | Icône Lucide |
| :--- | :--- |
| Succès | `CheckCircle2` |
| Avertissement | `AlertTriangle` |
| Erreur | `XCircle` |
| Information | `Info` |
| Quiz — bonne réponse | `Check` |
| Quiz — mauvaise réponse | `X` |
| Téléchargement | `Download` |
| Copier dans le presse-papier | `Copy` |
| Partager | `Share2` |

### 4.8 Pédagogiques

| Usage | Icône Lucide |
| :--- | :--- |
| Synthèse exécutive | `FileBarChart` |
| Objectifs d'apprentissage | `Target` |
| Concepts clés | `Key` |
| Erreurs fréquentes | `AlertOctagon` |
| Cas réel | `Building2` |
| Activité pratique | `PenSquare` |
| Quiz | `HelpCircle` |
| Checklist | `CheckSquare` |
| À retenir | `Bookmark` |
| Pour aller plus loin | `BookMarked` |
| Capstone | `Trophy` |
| Glossaire | `Library` |

### 4.9 Filtres et taxonomie

| Usage | Icône Lucide |
| :--- | :--- |
| Filtre actif | `Filter` |
| Effacer filtres | `FilterX` |
| Tri | `ArrowUpDown` |
| Tag (chip taxonomie) | `Hash` |
| Niveau | `BarChart` |
| Secteur | `Building` |
| Technologie | `Cpu` |

### 4.10 Métadonnées

| Usage | Icône Lucide |
| :--- | :--- |
| Date de mise à jour | `RefreshCw` |
| Durée | `Clock` |
| Auteur | `User` |
| Niveau de difficulté | `BarChart` |
| Source vérifiée | `BadgeCheck` |
| Lien GitHub | `Github` |
| Email | `Mail` |

---

## 5. Direction et miroir RTL

### 5.1 Marquage des icônes directionnelles

Les icônes ayant une **direction sémantique** (chevrons, flèches, retour, suivant) sont marquées avec un attribut `data-direction` :

```html
<svg data-direction class="icon"><!-- Lucide ChevronRight --></svg>
```

### 5.2 Inversion CSS automatique

```css
[dir="rtl"] [data-direction] {
  transform: scaleX(-1);
}
```

### 5.3 Liste des icônes à marquer `data-direction`

`ChevronLeft`, `ChevronRight`, `ArrowLeft`, `ArrowRight`, `ArrowLeftCircle`, `ArrowRightCircle`, `MoveLeft`, `MoveRight`, `CornerDownLeft`, `CornerDownRight`, `Undo`, `Redo`.

Les **autres icônes** (qui n'ont pas de direction) restent inchangées en RTL.

⚠️ Les icônes qui contiennent à la fois une direction **et** un texte intégré (rare, à éviter) doivent être recréées manuellement pour la version RTL.

---

## 6. Implémentation Astro / React

### 6.1 Import recommandé (tree-shakable)

```tsx
// Import uniquement de l'icône utilisée — pas tout le bundle
import { Briefcase, ChevronRight } from 'lucide-react';

<Briefcase size={20} aria-hidden="true" />
```

### 6.2 Wrapper pour usage standardisé

Un composant `<Icon />` wrapper centralise la taille, l'alignement et le RTL handling :

```tsx
// src/components/Icon.tsx
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: keyof typeof LucideIcons;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  directional?: boolean;
  className?: string;
  'aria-hidden'?: boolean;
  'aria-label'?: string;
}

export function Icon({ name, size = 'md', directional, ...props }: IconProps) {
  const LucideIcon = LucideIcons[name];
  const sizeMap = {
    xs: 12, sm: 16, md: 20, lg: 24, xl: 32, '2xl': 48,
  };
  return (
    <LucideIcon
      size={sizeMap[size]}
      data-direction={directional ? '' : undefined}
      strokeWidth={1.5}
      {...props}
    />
  );
}
```

Usage :

```tsx
<Icon name="Briefcase" size="md" aria-hidden />
<Icon name="ChevronRight" size="sm" directional aria-hidden />
```

---

## 7. Accessibilité

### 7.1 Icônes décoratives
**Toujours** ajouter `aria-hidden="true"` quand l'icône duplique un texte adjacent :

```html
<button>
  <svg aria-hidden="true">...</svg>
  Télécharger
</button>
```

### 7.2 Icônes informatives sans texte
Quand l'icône **est** l'information (ex. bouton fermer), ajouter un texte caché :

```html
<button aria-label="Fermer la modale">
  <svg aria-hidden="true">...</svg>
</button>
```

Ou un texte visuellement caché mais lisible par lecteur d'écran :

```html
<button>
  <svg aria-hidden="true">...</svg>
  <span class="sr-only">Fermer la modale</span>
</button>
```

### 7.3 Cibles tactiles
Une icône cliquable doit être englobée dans un élément avec une **cible tactile de 44 × 44 px minimum** (recommandation WCAG 2.5.5). Le padding du parent assure cette taille — ne pas tenter d'agrandir l'icône elle-même.

---

## 8. Animation

### 8.1 Cas où l'animation est acceptable
- **Loading spinner** (`Loader2` avec animation `animate-spin`).
- **Chevron** d'un accordéon qui tourne de 0° à 180° à l'ouverture.
- **Coche** qui apparaît avec léger fade-in après une action utilisateur.

### 8.2 Cas à proscrire
- Icônes qui clignotent en permanence pour attirer l'attention.
- Animations sur le hover des icônes décoratives.
- Animations qui interfèrent avec la lecture (ex. icônes pulsantes dans le texte).

### 8.3 Respect de `prefers-reduced-motion`

Toutes les animations d'icônes sont désactivées via le bloc media query global (cf. `accessibility.md` section 7).

---

## 9. Performance

### 9.1 Tree-shaking
Importer uniquement les icônes utilisées (pas `import * from 'lucide-react'`).

### 9.2 SSR / SSG
Les icônes Lucide se rendent côté serveur dans Astro — pas de coût JS au runtime sur les pages statiques.

### 9.3 Bundle size
Audit en Phase 7 : viser ≤ 50 KB de JavaScript total pour la totalité des icônes utilisées sur une page (largement atteignable avec tree-shaking).

---

## 10. Évolutivité

### 10.1 Ajout d'une nouvelle icône
1. Vérifier qu'elle n'est pas déjà dans le catalogue (section 4).
2. Vérifier sa disponibilité sur [lucide.dev](https://lucide.dev/icons/).
3. L'ajouter au catalogue de cette page.
4. Si elle est directionnelle, l'ajouter à la liste section 5.3.

### 10.2 Bibliothèque alternative
Si Lucide ne couvre pas un usage très spécifique (rare), envisager :
- Une **icône SVG custom** placée dans `/public/icons/` et importée comme image.
- **Pas** de mélange avec une autre bibliothèque d'icônes (cohérence visuelle).

---

## 📎 Documents associés

- [Design tokens](./tokens.md)
- [Composants](./components.md) — chaque composant indique quelles icônes il utilise
- [Règles RTL](./rtl-rules.md) — section 5 (icônes directionnelles)
- [Accessibilité](./accessibility.md) — section 8.4 (icônes accessibles)
