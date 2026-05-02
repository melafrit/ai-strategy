# Règles RTL — version arabe

> Ensemble des **règles d'adaptation** appliquées à la version arabe (`/ar/`) du site, conformément à ADR-006 et à l'engagement de **parité éditoriale trilingue** posé en charte.

| Métadonnée | Valeur |
| :--- | :--- |
| **Version** | 1.0 |
| **Phase** | 2 — Architecture et design system |
| **Statut** | Ratifié — relecture par locuteur natif prévue en Phase 7 |

---

## 1. Principe directeur

> **L'arabe n'est pas un latin renversé.** L'objectif n'est pas de « miroiter mécaniquement » la mise en page, mais d'adapter l'interface pour qu'un locuteur arabophone la trouve **naturelle et professionnelle**.

Cette règle conditionne tous les choix qui suivent.

---

## 2. Direction d'écriture

### 2.1 Activation
- `<html lang="ar" dir="rtl">` posé par `<BaseLayout />` quand la langue est `ar`.
- Les pages dans d'autres langues conservent `dir="ltr"`.

### 2.2 Propriétés logiques CSS

**Règle stricte** : aucun composant n'utilise `left`, `right`, `padding-left`, `margin-right`, `border-left`, etc. Ces propriétés **physiques** doivent être remplacées par leurs équivalents **logiques** :

| Physique (interdit) | Logique (obligatoire) |
| :--- | :--- |
| `padding-left: 1rem` | `padding-inline-start: 1rem` |
| `padding-right: 1rem` | `padding-inline-end: 1rem` |
| `margin-left: auto` | `margin-inline-start: auto` |
| `margin-right: auto` | `margin-inline-end: auto` |
| `border-left: 1px solid` | `border-inline-start: 1px solid` |
| `text-align: left` | `text-align: start` |
| `text-align: right` | `text-align: end` |
| `left: 0` (positioning) | `inset-inline-start: 0` |
| `right: 0` (positioning) | `inset-inline-end: 0` |

⚠️ Tailwind 3+ supporte les propriétés logiques nativement (`ps-4`, `pe-4`, `ms-auto`, etc.).

### 2.3 Cas particuliers à traiter manuellement
Certaines propriétés n'ont **pas** d'équivalent logique pratique et doivent être adaptées via un sélecteur RTL explicite :
- `transform: translateX()` (icônes flèches, animations).
- `box-shadow` directionnel asymétrique.
- `background-position` directionnelle.

```css
.icon-arrow-right {
  transform: translateX(2px);
}

[dir="rtl"] .icon-arrow-right {
  transform: translateX(-2px) scaleX(-1);
}
```

---

## 3. Layout

### 3.1 Inversion structurelle

| Élément | LTR (FR/EN) | RTL (AR) |
| :--- | :--- | :--- |
| Logo header | À gauche | À droite |
| Navigation principale | Centre / gauche | Centre / droite |
| Sélecteur de langue | À droite | À gauche |
| Sommaire sticky des modules | À droite du contenu | À gauche du contenu |
| Bouton « Précédent » dans `<PrevNextNav />` | À gauche, flèche ← | À droite, flèche → (visuelle, sens conservé) |
| Bouton « Suivant » | À droite, flèche → | À gauche, flèche ← |

### 3.2 Grilles
Les grilles CSS Grid et Flexbox **inversent automatiquement** sous `dir="rtl"`. Aucun ajustement n'est nécessaire pour `flex-direction: row` ou `grid-template-columns`.

### 3.3 Breakpoints
**Identiques** à la version LTR. Aucune adaptation nécessaire.

---

## 4. Typographie arabe

### 4.1 Police
- **Police principale** : IBM Plex Sans Arabic (cf. `typography.md` section 1).
- **Fallback** : Noto Sans Arabic, Segoe UI, Tahoma.

### 4.2 Taille et hauteur de ligne
- Taille du corps de texte : **identique** au latin par défaut, mais peut être augmentée d'un cran si la lecture paraît étouffée (passer de `--ai-text-base` à `--ai-text-lg`).
- **Line-height obligatoire** : minimum `--ai-leading-relaxed` (1.65) à cause des diacritiques (`ـَـُـِـّـْ`).
- **Letter-spacing** : strictement à `0` — l'arabe est calligraphique, le tracking détruit la lisibilité.

### 4.3 Casse
- Pas de notion de majuscules/minuscules en arabe.
- Les libellés de boutons LTR en CAPS (`text-transform: uppercase`) ne s'appliquent **jamais** en RTL — le sélecteur `[dir="rtl"]` désactive le `text-transform`.

### 4.4 Italique
- À éviter — l'italique en arabe (synthétisé par le navigateur) déforme la calligraphie.
- Pour l'emphase : utiliser plutôt `font-weight: 600` (SemiBold).

### 4.5 Chiffres
- **Choix par défaut** : chiffres latins (0-9), même en arabe — ils sont les plus largement compris dans un contexte business international.
- Les chiffres arabo-indiens (٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩) peuvent être proposés en **option** plus tard si une demande utilisateur émerge.

### 4.6 Ponctuation
- Préférer les guillemets typographiques arabes : `«…»` (français) ou `"…"`.
- La virgule arabe (`،`) est utilisée à la place de la virgule latine.
- Le point-virgule arabe (`؛`) est utilisé à la place du point-virgule latin.
- Le point d'interrogation arabe (`؟`) est utilisé à la place du `?`.

---

## 5. Iconographie

### 5.1 Icônes neutres
Les icônes **non directionnelles** (search, settings, user, info) restent **identiques** en RTL.

### 5.2 Icônes directionnelles
Les icônes directionnelles sont **inversées visuellement**, mais leur **sens sémantique** est préservé :

| Icône | LTR | RTL |
| :--- | :---: | :---: |
| « Suivant » / « Aller à » | → | ← (icône miroitée) |
| « Précédent » / « Retour » | ← | → (icône miroitée) |
| « Étendre » accordéon | ▼ (chevron-down) | ▼ (identique) |
| « Avancer » fil d'ariane | / ou › | \ ou ‹ |

### 5.3 Implémentation
Pour les icônes Lucide (cf. `iconography.md`), un attribut data-direction permet le miroir CSS :

```html
<svg data-direction class="icon-chevron-right">...</svg>
```

```css
[dir="rtl"] [data-direction] {
  transform: scaleX(-1);
}
```

⚠️ Les icônes **avec texte** intégré (rare, à éviter) doivent être recréées à part pour la version RTL.

---

## 6. Composants spécifiques

### 6.1 `<SourceTag />`
- Bordure latérale colorée : `border-inline-start` (et non `border-left`) → s'inverse automatiquement.
- Icône à gauche du label en LTR → à droite en RTL via `flex-direction: row` natif.

### 6.2 `<TableOfContents />`
- Position sticky : à **gauche** du contenu en RTL (vs. droite en LTR).
- Indentation des sous-items via `padding-inline-start`.

### 6.3 `<Quiz />`
- Boutons « Question précédente » / « Question suivante » : ordre visuel inversé.
- Compteur « Question 3 / 7 » : conservé tel quel (chiffres latins lisibles).

### 6.4 `<Breadcrumb />`
- Séparateur visuel adapté : `›` en LTR, `‹` en RTL.
- Aria-label traduit : « Fil d'Ariane » → « شريط التنقل ».

### 6.5 `<LanguageSwitcher />`
- Position : opposée à celle de LTR (gauche du header en RTL, droite en LTR).
- Libellés : `Français` / `English` / `العربية`.

### 6.6 `<AlphaIndex />` (glossaire)
- Index latin A-Z **non pertinent** en arabe.
- Remplacé par un index arabe : ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي.
- Le tri des termes suit l'ordre alphabétique arabe standard.

---

## 7. Contenu mixte (arabe + latin)

Beaucoup de contenus business arabes contiennent des **termes latins** : noms d'entreprises (Morgan Stanley, Stripe), acronymes (CSAIL, NIST), URLs, blocs de code.

### 7.1 Direction inline
Pour intégrer un fragment latin dans du texte arabe :

```html
<p lang="ar" dir="rtl">
  استخدمت <bdi lang="en">Morgan Stanley</bdi> الذكاء الاصطناعي التوليدي.
</p>
```

L'élément `<bdi>` (Bidirectional Isolation) garantit que le navigateur traite le fragment latin avec sa propre direction, sans casser la mise en page.

### 7.2 URLs et chemins de fichier
Les URLs et chemins de fichier sont **toujours latins** et **non traduits** (slugs identiques aux 3 langues, cf. `sitemap.md` section 2.2).

### 7.3 Code inline et blocs
Le code reste en LTR à l'intérieur d'un texte RTL :

```html
<p lang="ar" dir="rtl">
  استخدم <code lang="en" dir="ltr">git commit -m "..."</code> لإرسال التغييرات.
</p>
```

---

## 8. Tests et validation

### 8.1 Checklist développeur
Avant tout commit RTL, vérifier :

- [ ] Aucune propriété `left`, `right`, `padding-left/right`, `margin-left/right` dans le CSS.
- [ ] Toutes les icônes directionnelles s'inversent correctement.
- [ ] Les `<bdi>` enveloppent les fragments latins inline.
- [ ] Les chiffres et ponctuations sont cohérents avec la décision (latins par défaut + ponctuation arabe).
- [ ] Le sélecteur de langue est positionné correctement.
- [ ] Le sommaire sticky est à gauche.
- [ ] Les flèches `<PrevNextNav />` ont le bon sens visuel.

### 8.2 Tests visuels
- Capture d'écran des 9 gabarits en RTL pour relecture éditoriale.
- Test sur Safari, Chrome, Firefox (les implémentations RTL diffèrent légèrement).

### 8.3 Relecture native
**Phase 7 — obligatoire** : relecture par un locuteur arabe natif sur :
- L'ensemble des microcopies traduites.
- La cohérence de la ponctuation.
- L'aisance de lecture (line-height, choix de police).
- Les éventuels faux amis culturels.

---

## 9. Limitations connues

| Limitation | Statut | Mitigation |
| :--- | :--- | :--- |
| Tableaux complexes en RTL : entêtes parfois mal alignés sous Safari | Bug navigateur | Test prioritaire en Phase 7, fallback CSS si nécessaire |
| Mixed content (LTR-in-RTL) sur les anciennes versions Edge | Compatibilité | `<bdi>` est largement supporté depuis 2018, OK pour le périmètre 2026 |
| Polices fallback de moindre qualité si IBM Plex Sans Arabic ne charge pas | Performance | Préchargement explicite + CDN OVH local |

---

## 10. Référence externe

- W3C — [Internationalization Best Practices](https://www.w3.org/International/i18n-drafts/)
- MDN — [Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
- Eligible Internationalization Resources by W3C i18n WG.

---

## 📎 Documents associés

- [Design tokens](./tokens.md) · [Typographie](./typography.md)
- [Composants](./components.md) · [Accessibilité](./accessibility.md) · [Iconographie](./iconography.md)
- [Sitemap](../architecture/sitemap.md) — section 2 (URLs symétriques)
