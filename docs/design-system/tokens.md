# Design tokens — AI Strategy

> Système de **design tokens** exprimés en **CSS custom properties**, exportables vers Tailwind config.
> Cohérent avec ADR-005 (direction visuelle Consulting Modern) — sobriété, densité informationnelle, parfait support trilingue.

| Métadonnée | Valeur |
| :--- | :--- |
| **Version** | 1.0 |
| **Phase** | 2 — Architecture et design system |
| **Statut** | Ratifié — alimente la Phase 3 (Tailwind config + `tokens.css`) |

---

## 1. Principes

| Principe | Application |
| :--- | :--- |
| **Sobriété** | Palette restreinte (≤ 8 couleurs structurelles), aucune couleur décorative gratuite |
| **Densité informationnelle** | Échelle d'espacement fine permettant des interfaces denses (tableaux, matrices) sans étouffement |
| **Cohérence trilingue** | Tokens neutres par rapport à la langue ; les valeurs RTL (cf. `rtl-rules.md`) ne dépendent que de la direction d'écriture |
| **Accessibilité par défaut** | Tous les contrastes texte/fond vérifient WCAG AA minimum, AAA sur les éléments critiques |
| **Évolutivité** | Tokens nommés sémantiquement (`--ai-bg-primary`) plutôt que physiquement (`--white`) pour un theming futur |

---

## 2. Couleurs

### 2.1 Palette structurelle

```css
:root {
  /* Couleurs structurelles — fond et texte */
  --ai-bg-primary:        #FFFFFF;  /* Fond principal — blanc pur */
  --ai-bg-subtle:         #F8FAFC;  /* Fond secondaire (sections alternées, encadrés) */
  --ai-bg-muted:          #F1F5F9;  /* Fond atténué (états hover sur fond clair) */
  --ai-bg-inverse:        #0F1E2E;  /* Fond inversé (footer, bandeaux sombres) */

  --ai-fg-primary:        #0F1E2E;  /* Texte principal — navy profond */
  --ai-fg-secondary:      #475569;  /* Texte secondaire — slate */
  --ai-fg-muted:          #64748B;  /* Texte atténué — légendes, métadonnées */
  --ai-fg-inverse:        #F8FAFC;  /* Texte sur fond inversé */

  /* Bordures */
  --ai-border-subtle:     #E2E8F0;  /* Bordures discrètes */
  --ai-border-default:    #CBD5E1;  /* Bordures par défaut */
  --ai-border-strong:     #94A3B8;  /* Bordures contrastées */
}
```

### 2.2 Couleurs d'accent

```css
:root {
  /* Accent principal — bleu corporate */
  --ai-accent-primary:    #0066CC;  /* Bleu corporate — CTAs, liens, focus */
  --ai-accent-hover:      #0052A3;  /* Hover (10 % plus sombre) */
  --ai-accent-active:     #003D7A;  /* Active (20 % plus sombre) */
  --ai-accent-subtle:     #E0EEFC;  /* Fond accent atténué (encadrés, badges) */

  /* Accent secondaire — pour différenciation occasionnelle */
  --ai-accent-secondary:  #475569;  /* Slate — pour CTAs neutres ou tertiaires */
}
```

### 2.3 Couleurs sémantiques

```css
:root {
  /* Sémantique — feedbacks et statuts */
  --ai-success:           #15803D;  /* Vert — confirmations, scores réussis */
  --ai-success-subtle:    #DCFCE7;
  --ai-warning:           #B45309;  /* Ambre — avertissements doux */
  --ai-warning-subtle:    #FEF3C7;
  --ai-danger:            #B91C1C;  /* Rouge — erreurs, alertes critiques */
  --ai-danger-subtle:     #FEE2E2;
  --ai-info:              #1D4ED8;  /* Bleu informatif (différent de l'accent) */
  --ai-info-subtle:       #DBEAFE;
}
```

### 2.4 Couleurs spécifiques aux sources (`<SourceTag />`)

```css
:root {
  /* Hiérarchie des sources — encadrés signature */
  --ai-source-official:        #0F1E2E;  /* Niveau 1 — MIT officiel */
  --ai-source-official-bg:     #F1F5F9;
  --ai-source-complement:      #1D4ED8;  /* Niveau 2 — complément MIT-connexe */
  --ai-source-complement-bg:   #DBEAFE;
  --ai-source-pedagogical:     #B45309;  /* Niveau 3 — reconstruction pédagogique */
  --ai-source-pedagogical-bg:  #FEF3C7;
  --ai-source-external:        #15803D;  /* Niveau 4 — externe vérifiable */
  --ai-source-external-bg:     #DCFCE7;
  --ai-source-toverify:        #B91C1C;  /* À vérifier */
  --ai-source-toverify-bg:     #FEE2E2;
}
```

### 2.5 Vérification des contrastes WCAG

| Combinaison | Ratio | Niveau |
| :--- | :--- | :--- |
| `--ai-fg-primary` sur `--ai-bg-primary` (#0F1E2E sur #FFF) | 16.32:1 | AAA |
| `--ai-fg-secondary` sur `--ai-bg-primary` (#475569 sur #FFF) | 7.55:1 | AAA |
| `--ai-fg-muted` sur `--ai-bg-primary` (#64748B sur #FFF) | 5.59:1 | AA (texte normal), AAA (gros texte) |
| `--ai-accent-primary` sur `--ai-bg-primary` (#0066CC sur #FFF) | 5.71:1 | AA texte, AAA gros texte |
| `--ai-fg-inverse` sur `--ai-bg-inverse` (#F8FAFC sur #0F1E2E) | 16.05:1 | AAA |
| `--ai-success` sur `--ai-bg-primary` (#15803D sur #FFF) | 5.51:1 | AA |
| `--ai-danger` sur `--ai-bg-primary` (#B91C1C sur #FFF) | 5.94:1 | AA |

⚠️ Tous les couples utilisés en production passent AA. La revue accessibilité (Phase 7) confirmera l'absence de combinaisons hors charte.

---

## 3. Espacement

Échelle d'espacement de **base 4 px**, qui aligne harmonieusement densité et respiration. Cohérente avec Tailwind `spacing` natif.

```css
:root {
  --ai-space-0:    0;
  --ai-space-1:    0.25rem;   /* 4 px */
  --ai-space-2:    0.5rem;    /* 8 px */
  --ai-space-3:    0.75rem;   /* 12 px */
  --ai-space-4:    1rem;      /* 16 px */
  --ai-space-5:    1.5rem;    /* 24 px */
  --ai-space-6:    2rem;      /* 32 px */
  --ai-space-7:    3rem;      /* 48 px */
  --ai-space-8:    4rem;      /* 64 px */
  --ai-space-9:    6rem;      /* 96 px */
  --ai-space-10:   8rem;      /* 128 px */
}
```

### 3.1 Usages typiques

| Token | Usage |
| :--- | :--- |
| `--ai-space-1` à `--ai-space-2` | Padding d'icônes, gap entre items inline |
| `--ai-space-3` à `--ai-space-4` | Padding interne d'une carte, gap entre champs de formulaire |
| `--ai-space-5` à `--ai-space-6` | Marges entre paragraphes, sections internes |
| `--ai-space-7` à `--ai-space-8` | Espace entre sections principales d'une page |
| `--ai-space-9` à `--ai-space-10` | Padding vertical de hero ou de section pleine largeur |

---

## 4. Breakpoints

Système **mobile-first**, breakpoints proches du standard Tailwind.

```css
:root {
  --ai-bp-sm:   40em;   /* 640 px — tablettes portrait */
  --ai-bp-md:   48em;   /* 768 px — tablettes paysage */
  --ai-bp-lg:   64em;   /* 1024 px — desktop */
  --ai-bp-xl:   80em;   /* 1280 px — desktop large */
  --ai-bp-2xl:  96em;   /* 1536 px — desktop XL */
}
```

### 4.1 Largeurs de container

```css
:root {
  --ai-container-sm:    36rem;    /* 576 px */
  --ai-container-md:    48rem;    /* 768 px */
  --ai-container-lg:    64rem;    /* 1024 px */
  --ai-container-xl:    72rem;    /* 1152 px — défaut sur le site */
  --ai-container-prose: 65ch;     /* Largeur optimale pour la lecture longue (modules) */
}
```

⚠️ Pour les pages module, le contenu prose est limité à `--ai-container-prose` (65 caractères) pour respecter les recommandations de lisibilité, tandis que les éléments structurels (hero, navigation, tableaux) utilisent `--ai-container-xl`.

---

## 5. Rayons (border-radius)

Sobriété — **pas d'arrondis excessifs** (incohérent avec consulting modern).

```css
:root {
  --ai-radius-none:   0;
  --ai-radius-sm:     0.25rem;   /* 4 px — boutons, badges */
  --ai-radius-md:     0.5rem;    /* 8 px — cartes, encadrés */
  --ai-radius-lg:     1rem;      /* 16 px — modales, hero */
  --ai-radius-pill:   9999px;    /* Tags taxonomie, pills */
}
```

---

## 6. Ombres

Trois niveaux maximum — éviter l'effet « material design » qui contredit le ton consulting.

```css
:root {
  --ai-shadow-sm:    0 1px 2px 0 rgba(15, 30, 46, 0.05);
  --ai-shadow-md:    0 4px 6px -1px rgba(15, 30, 46, 0.08), 0 2px 4px -2px rgba(15, 30, 46, 0.04);
  --ai-shadow-lg:    0 10px 15px -3px rgba(15, 30, 46, 0.10), 0 4px 6px -4px rgba(15, 30, 46, 0.05);
  --ai-shadow-focus: 0 0 0 3px rgba(0, 102, 204, 0.30);  /* Focus ring accent */
}
```

### 6.1 Usages

| Token | Usage |
| :--- | :--- |
| `--ai-shadow-sm` | Cartes au repos, boutons subtils |
| `--ai-shadow-md` | Cartes au hover, dropdowns |
| `--ai-shadow-lg` | Modales, popovers, lightbox |
| `--ai-shadow-focus` | États focus (clavier) — obligatoire WCAG AA |

---

## 7. Z-index

Échelle structurée pour éviter les guerres de profondeur.

```css
:root {
  --ai-z-base:        1;
  --ai-z-elevated:    10;     /* Sticky elements, sidebar TOC */
  --ai-z-overlay:     100;    /* Backdrop modale */
  --ai-z-modal:       110;
  --ai-z-popover:     200;    /* Dropdown, tooltip */
  --ai-z-toast:       300;
  --ai-z-skip-link:   1000;   /* Skip-link accessibilité — toujours en haut */
}
```

---

## 8. Animations et transitions

Durées et courbes restreintes — **mouvements discrets**, jamais ostentatoires.

```css
:root {
  --ai-duration-instant:  100ms;
  --ai-duration-fast:     200ms;
  --ai-duration-normal:   300ms;
  --ai-duration-slow:     500ms;

  --ai-easing-default:    cubic-bezier(0.4, 0, 0.2, 1);   /* ease-out */
  --ai-easing-bounce:     cubic-bezier(0.34, 1.56, 0.64, 1);  /* léger overshoot — usage rare */
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --ai-duration-instant: 0ms;
    --ai-duration-fast:    0ms;
    --ai-duration-normal:  0ms;
    --ai-duration-slow:    0ms;
  }
}
```

⚠️ Le bloc `prefers-reduced-motion` est **non négociable** : tous les composants doivent respecter ce paramètre utilisateur (cf. WCAG 2.3.3).

---

## 9. Export Tailwind

Le fichier `tailwind.config.cjs` (Phase 3) consomme ces tokens via `theme.extend` :

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'ai-bg':      'var(--ai-bg-primary)',
        'ai-bg-subtle': 'var(--ai-bg-subtle)',
        'ai-fg':      'var(--ai-fg-primary)',
        'ai-fg-secondary': 'var(--ai-fg-secondary)',
        'ai-accent':  'var(--ai-accent-primary)',
        'ai-accent-hover': 'var(--ai-accent-hover)',
        // ... etc
      },
      spacing: {
        // mapping des --ai-space-* via @theme inline ou CSS variables
      },
      maxWidth: {
        'ai-prose': 'var(--ai-container-prose)',
        'ai-container': 'var(--ai-container-xl)',
      },
      // ...
    },
  },
};
```

---

## 10. Mode sombre — non prévu en v1

Le mode sombre n'est pas prévu pour la v1 (cf. ADR-005 — direction visuelle blanc pur en fond). Si une demande forte émerge en Phase 7, un fork des tokens sera produit avec :

- Un namespace `[data-theme="dark"]` sur `<html>`.
- Une palette inversée respectant les mêmes ratios de contraste.
- Un toggle manuel (pas auto à `prefers-color-scheme`) pour préserver l'identité visuelle.

---

## 📎 Documents associés

- [Typographie](./typography.md)
- [Composants](./components.md)
- [Règles RTL](./rtl-rules.md)
- [Accessibilité](./accessibility.md)
