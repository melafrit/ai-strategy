# Typographie — AI Strategy

> Système typographique fondé sur **IBM Plex Sans** (latin) + **IBM Plex Sans Arabic** (arabe), cohérent avec ADR-005 (direction visuelle Consulting Modern).
> IBM Plex offre une parité visuelle entre les 3 langues + une licence libre (SIL OFL 1.1) compatible avec un site self-hosté.

| Métadonnée | Valeur |
| :--- | :--- |
| **Version** | 1.0 |
| **Phase** | 2 — Architecture et design system |
| **Statut** | Ratifié |

---

## 1. Familles typographiques

| Famille | Usage | Versions chargées |
| :--- | :--- | :--- |
| **IBM Plex Sans** | Latin (FR, EN) — corps de texte et titres | Regular 400, Medium 500, SemiBold 600, Bold 700 |
| **IBM Plex Sans Arabic** | Arabe (AR) — corps de texte et titres | Regular 400, Medium 500, SemiBold 600, Bold 700 |
| **IBM Plex Mono** | Code, slugs URL inline, identifiants techniques | Regular 400, Medium 500 — usage parcimonieux |

### 1.1 Self-hosting

**Décision** : héberger les polices localement (`/public/fonts/`) au format **woff2** uniquement.

**Justifications** :
- Souveraineté (cf. ADR-003 — hébergement OVH).
- Privacy by design (pas de requêtes Google Fonts).
- Performance (pas de DNS supplémentaire, contrôle total du caching).

**Fichiers à embarquer** (Phase 3) :
```
/public/fonts/
├── IBMPlexSans-Regular.woff2
├── IBMPlexSans-Medium.woff2
├── IBMPlexSans-SemiBold.woff2
├── IBMPlexSans-Bold.woff2
├── IBMPlexSansArabic-Regular.woff2
├── IBMPlexSansArabic-Medium.woff2
├── IBMPlexSansArabic-SemiBold.woff2
├── IBMPlexSansArabic-Bold.woff2
├── IBMPlexMono-Regular.woff2
└── IBMPlexMono-Medium.woff2
```

Chaque fichier est compressé Brotli côté serveur, et préchargé via `<link rel="preload">` pour les variantes critiques.

### 1.2 Déclarations `@font-face`

```css
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/IBMPlexSans-Regular.woff2') format('woff2');
  unicode-range: U+0000-024F, U+1E00-1EFF, U+2000-206F, U+20A0-20CF;
}

@font-face {
  font-family: 'IBM Plex Sans Arabic';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/IBMPlexSansArabic-Regular.woff2') format('woff2');
  unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF;
}

/* ... répéter pour chaque graisse ... */
```

⚠️ Les `unicode-range` permettent au navigateur de **ne charger** la version arabe **que sur les pages contenant de l'arabe** — économie de bande passante significative.

---

## 2. Stack CSS

```css
:root {
  --ai-font-sans:
    'IBM Plex Sans',
    'IBM Plex Sans Arabic',
    -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

  --ai-font-mono:
    'IBM Plex Mono',
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
}

body {
  font-family: var(--ai-font-sans);
}

[lang="ar"], [dir="rtl"] {
  font-family: 'IBM Plex Sans Arabic', var(--ai-font-sans);
}
```

---

## 3. Échelle typographique

Échelle **modulaire de ratio 1.250** (Major Third), bien adaptée à des interfaces denses sans sacrifier la hiérarchie.

```css
:root {
  --ai-text-xs:    0.75rem;    /* 12 px — légendes, métadonnées */
  --ai-text-sm:    0.875rem;   /* 14 px — texte secondaire, captions */
  --ai-text-base:  1rem;       /* 16 px — corps de texte par défaut */
  --ai-text-lg:    1.125rem;   /* 18 px — corps amplifié, lead courts */
  --ai-text-xl:    1.25rem;    /* 20 px — sous-titres, leads longs */
  --ai-text-2xl:   1.5rem;     /* 24 px — h3 */
  --ai-text-3xl:   1.875rem;   /* 30 px — h2 */
  --ai-text-4xl:   2.25rem;    /* 36 px — h1 standard */
  --ai-text-5xl:   3rem;       /* 48 px — h1 hero desktop */
  --ai-text-6xl:   3.75rem;    /* 60 px — display occasionnel */
}
```

### 3.1 Hiérarchie sémantique HTML

| Élément | Taille | Graisse | Usage |
| :--- | :--- | :--- | :--- |
| `<h1>` | `--ai-text-4xl` à `--ai-text-5xl` | 700 (Bold) | Titre principal de page (un seul par page) |
| `<h2>` | `--ai-text-3xl` | 600 (SemiBold) | Sections principales |
| `<h3>` | `--ai-text-2xl` | 600 (SemiBold) | Sous-sections |
| `<h4>` | `--ai-text-xl` | 600 (SemiBold) | Sous-sous-sections (rare) |
| `<h5>` | `--ai-text-lg` | 600 (SemiBold) | Très rare — privilégier la restructuration |
| `<h6>` | `--ai-text-base` | 600 (SemiBold) | Très rare |
| `<p>` | `--ai-text-base` | 400 (Regular) | Corps de texte |
| `<small>` | `--ai-text-sm` | 400 (Regular) | Métadonnées |

### 3.2 Tailles responsive

Pour `<h1>` notamment (variation hero) :

```css
h1.hero-title {
  font-size: var(--ai-text-4xl);
  line-height: 1.15;
}

@media (min-width: 48em) {  /* md */
  h1.hero-title {
    font-size: var(--ai-text-5xl);
  }
}
```

---

## 4. Hauteur de ligne (line-height)

```css
:root {
  --ai-leading-tight:    1.15;  /* Titres longs sur 2-3 lignes */
  --ai-leading-snug:     1.30;  /* Sous-titres */
  --ai-leading-normal:   1.50;  /* Corps de texte par défaut */
  --ai-leading-relaxed:  1.65;  /* Lecture longue (modules) */
  --ai-leading-loose:    1.85;  /* Cas spécifiques (ex. arabe) */
}
```

### 4.1 Recommandations par usage

| Contexte | Token recommandé |
| :--- | :--- |
| Titres `<h1>`, `<h2>` | `--ai-leading-tight` |
| Sous-titres `<h3>`, leads | `--ai-leading-snug` |
| Corps de texte interface | `--ai-leading-normal` |
| Corps de texte lecture longue (modules) | `--ai-leading-relaxed` |
| Texte arabe — corps | `--ai-leading-relaxed` ou `--ai-leading-loose` |

⚠️ L'arabe nécessite **systématiquement** un line-height plus généreux (au moins `--ai-leading-relaxed`) à cause des diacritiques (`ـَـُـِـّـْ`) qui s'élèvent ou descendent au-delà de la x-height.

---

## 5. Espacement des lettres (letter-spacing)

Variations très restreintes — l'IBM Plex est calibré pour un usage natif sans tracking forcé.

```css
:root {
  --ai-tracking-tight:   -0.02em;  /* H1 hero — gain de densité */
  --ai-tracking-normal:  0;         /* Défaut partout ailleurs */
  --ai-tracking-wide:    0.05em;    /* Caps, badges, métadonnées */
}
```

⚠️ **Aucun tracking** sur le texte arabe (la calligraphie arabe dépend de la connexion entre caractères, le letter-spacing casse cette connexion).

---

## 6. Graisse (font-weight)

| Token | Valeur | Usage |
| :--- | :---: | :--- |
| `--ai-weight-regular` | 400 | Corps de texte par défaut |
| `--ai-weight-medium` | 500 | Léger emphase, labels de formulaires |
| `--ai-weight-semibold` | 600 | Sous-titres, navigations, en-têtes de tableau |
| `--ai-weight-bold` | 700 | H1, H2, mots-clés en gras inline |

⚠️ **Aucune graisse italique** chargée par défaut. Si l'italique est utilisé en MDX, le navigateur synthétise — ce qui est imparfait mais acceptable. Le besoin doit être rare (citations, jargon technique).

---

## 7. Hiérarchie de prose (page module et autres pages éditoriales)

Pour les pages chargées en MDX, on utilise une classe `.prose` qui applique l'ensemble des règles typographiques de lecture longue.

```css
.prose {
  font-family: var(--ai-font-sans);
  font-size: var(--ai-text-base);
  line-height: var(--ai-leading-relaxed);
  color: var(--ai-fg-primary);
  max-width: var(--ai-container-prose);
}

.prose h2 {
  font-size: var(--ai-text-3xl);
  font-weight: 600;
  line-height: var(--ai-leading-tight);
  margin-top: var(--ai-space-7);
  margin-bottom: var(--ai-space-4);
}

.prose h3 {
  font-size: var(--ai-text-2xl);
  font-weight: 600;
  line-height: var(--ai-leading-snug);
  margin-top: var(--ai-space-6);
  margin-bottom: var(--ai-space-3);
}

.prose p {
  margin-bottom: var(--ai-space-4);
}

.prose strong {
  font-weight: 600;
  color: var(--ai-fg-primary);
}

.prose a {
  color: var(--ai-accent-primary);
  text-decoration: underline;
  text-underline-offset: 0.2em;
  text-decoration-thickness: 1px;
}

.prose a:hover {
  color: var(--ai-accent-hover);
  text-decoration-thickness: 2px;
}

.prose ul, .prose ol {
  padding-inline-start: var(--ai-space-5);
  margin-bottom: var(--ai-space-4);
}

.prose li {
  margin-bottom: var(--ai-space-2);
}

.prose blockquote {
  border-inline-start: 3px solid var(--ai-accent-primary);
  padding-inline-start: var(--ai-space-4);
  margin: var(--ai-space-5) 0;
  font-style: italic;
  color: var(--ai-fg-secondary);
}

.prose code {
  font-family: var(--ai-font-mono);
  font-size: 0.9em;
  background: var(--ai-bg-muted);
  padding: 0.1em 0.4em;
  border-radius: var(--ai-radius-sm);
}
```

⚠️ Notez l'usage de `padding-inline-start` (et non `padding-left`) et `border-inline-start` (et non `border-left`) — propriétés logiques qui s'inversent automatiquement en RTL.

---

## 8. Texte arabe — spécificités

### 8.1 Direction et alignement
- `dir="rtl"` posé sur `<html>` quand la langue est `ar`.
- Texte aligné à droite par défaut (`text-align: start` qui devient `right` en RTL).

### 8.2 Ponctuation
- Préférer les guillemets arabes typographiques (`«…»` ou `"…"`).
- Conserver les chiffres en caractères latins (0-9) **par défaut** sauf demande contraire — ils sont les plus largement compris.

### 8.3 Polices fallback
Si IBM Plex Sans Arabic ne charge pas pour une raison quelconque, fallback explicite :

```css
[lang="ar"] {
  font-family:
    'IBM Plex Sans Arabic',
    'Noto Sans Arabic',
    'Segoe UI',
    Tahoma,
    sans-serif;
}
```

### 8.4 Densité visuelle
La calligraphie arabe est plus dense que le latin à taille égale. Pour compenser :
- Utiliser **un cran au-dessus** dans l'échelle pour le corps de texte arabe (`--ai-text-lg` au lieu de `--ai-text-base`) si la maquette paraît étouffée.
- Augmenter `line-height` à `--ai-leading-relaxed` minimum.

---

## 9. Préchargement et performance

Dans le `<head>` du layout principal (Phase 3) :

```html
<!-- Préchargement des polices critiques -->
<link
  rel="preload"
  href="/fonts/IBMPlexSans-Regular.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
<link
  rel="preload"
  href="/fonts/IBMPlexSans-SemiBold.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
<!-- IBM Plex Sans Arabic préchargé uniquement sur /ar/ -->
```

⚠️ Le rendu utilise `font-display: swap` : la page s'affiche immédiatement avec la fallback, puis bascule sur IBM Plex dès le chargement (FOUT acceptable).

---

## 10. Cas particuliers

### 10.1 Encadrés `<SourceTag />`
Texte légèrement plus petit (`--ai-text-sm`) en SemiBold (600), couleur correspondant au niveau de source (cf. tokens.md section 2.4).

### 10.2 Code inline (MDX)
Police mono, taille 90 % du parent, fond `--ai-bg-muted`.

### 10.3 Formulaires
Inputs et textareas en `--ai-text-base`, labels en `--ai-text-sm` SemiBold, helper text en `--ai-text-xs`.

### 10.4 Tableaux denses (matrices, taxonomies)
Cellules en `--ai-text-sm`, en-têtes en SemiBold. `line-height: --ai-leading-snug`.

---

## 📎 Documents associés

- [Design tokens](./tokens.md)
- [Composants](./components.md)
- [Règles RTL](./rtl-rules.md)
- [Accessibilité](./accessibility.md)
