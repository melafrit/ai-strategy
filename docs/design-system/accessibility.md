# Accessibilité — engagements et patterns

> Engagements **WCAG 2.1 AA** et patterns d'accessibilité appliqués à l'ensemble du site.
> Cohérent avec les engagements de qualité de la charte (section 7).

| Métadonnée | Valeur |
| :--- | :--- |
| **Version** | 1.0 |
| **Phase** | 2 — Architecture et design system |
| **Standard de référence** | [WCAG 2.1](https://www.w3.org/TR/WCAG21/) niveau AA (avec viseur AAA sur les critères critiques) |
| **Audit prévu** | Phase 7 — Pa11y + axe-core en CI |

---

## 1. Engagements de niveau

| Domaine | Engagement |
| :--- | :--- |
| **Niveau global** | WCAG 2.1 AA sur l'ensemble du site |
| **Contraste textuel** | AAA pour le corps de texte (`--ai-fg-primary` sur `--ai-bg-primary` = 16.32:1) |
| **Contraste des éléments graphiques** | AA minimum (3:1) — visé AAA quand possible |
| **Navigation clavier** | 100 % du site utilisable sans souris |
| **Compatibilité lecteurs d'écran** | Test sur NVDA, JAWS et VoiceOver en Phase 7 |
| **Réduction des animations** | Respect de `prefers-reduced-motion` partout |
| **Zoom** | Aucune perte de contenu jusqu'à 200 % |
| **Multilinguisme** | `lang` correctement positionné sur chaque page et sur les fragments mixtes |

---

## 2. Les 4 principes WCAG appliqués

### 2.1 Perceptible

| Critère WCAG | Application sur le site |
| :--- | :--- |
| **1.1.1 Contenu non textuel** | Tout `<img>` a un `alt` descriptif ou `alt=""` si décoratif. SVG : `<title>` + `<desc>` |
| **1.3.1 Information et relations** | Hiérarchie sémantique stricte (`<h1>` unique, `<h2>` pour sections, etc.) |
| **1.3.2 Ordre séquentiel logique** | DOM ordonné même en cas de mise en page CSS Grid |
| **1.4.3 Contraste minimum** | Tous les textes vérifient ratio AA 4.5:1 (corps) ou 3:1 (≥18 px ou bold ≥14 px) |
| **1.4.4 Redimensionnement texte** | Zoom 200 % sans perte de fonction (testé) |
| **1.4.10 Reflow** | Pas de scroll horizontal en dessous de 320 px de largeur |
| **1.4.11 Contraste non textuel** | Boutons, focus, frontières : ratio 3:1 minimum |
| **1.4.12 Espacement texte** | Modifications utilisateur d'espacement supportées (line-height, letter-spacing custom) |

### 2.2 Utilisable

| Critère WCAG | Application |
| :--- | :--- |
| **2.1.1 Clavier** | Toutes les fonctions du site sont accessibles au clavier |
| **2.1.2 Pas de piège clavier** | Modales et drawers ont une sortie claire (escape, bouton fermer focusable) |
| **2.4.1 Contournement de blocs** | Skip-link visible au focus (`<a href="#main">Aller au contenu principal</a>`) |
| **2.4.3 Ordre du focus** | Suit l'ordre visuel et logique |
| **2.4.4 Fonction des liens** | Libellés explicites — jamais « Cliquez ici » |
| **2.4.7 Focus visible** | Outline `--ai-shadow-focus` (3 px ring bleu) sur tout élément focusable |
| **2.5.5 Taille de cible** | 44 × 44 px minimum sur mobile (boutons et liens isolés) |

### 2.3 Compréhensible

| Critère WCAG | Application |
| :--- | :--- |
| **3.1.1 Langue de la page** | `<html lang="fr|en|ar">` posé par `<BaseLayout />` |
| **3.1.2 Langue d'un passage** | `<bdi lang="en">…</bdi>` pour les fragments inline (cf. `rtl-rules.md` section 7) |
| **3.2.1 Au focus** | Aucun changement de contexte inattendu au focus |
| **3.2.2 À la saisie** | Pas de soumission auto, `<button type="submit">` explicite |
| **3.3.1 Identification des erreurs** | Messages d'erreur sous chaque champ, liés via `aria-describedby` |
| **3.3.2 Étiquettes ou instructions** | Tout `<input>` a un `<label>` associé |

### 2.4 Robuste

| Critère WCAG | Application |
| :--- | :--- |
| **4.1.2 Nom, rôle et valeur** | Composants custom (modales, accordéons, tabs) suivent les patterns ARIA standards |
| **4.1.3 Messages d'état** | Annonces via `aria-live="polite"` (compteurs résultats, feedback quiz) |

---

## 3. Patterns ARIA standards utilisés

Le site implémente les patterns suivants conformes aux [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) :

### 3.1 Accordion (`<FaqAccordion />`, `<TableOfContents />` mobile)

```html
<button
  aria-expanded="false"
  aria-controls="panel-q1"
  id="header-q1">
  Question 1
</button>
<div
  id="panel-q1"
  role="region"
  aria-labelledby="header-q1"
  hidden>
  Réponse...
</div>
```

### 3.2 Disclosure (`<GlossaryDrawer />`)

```html
<button
  aria-haspopup="dialog"
  aria-expanded="false"
  aria-controls="glossary-drawer">
  Glossaire
</button>
<div
  id="glossary-drawer"
  role="dialog"
  aria-modal="true"
  aria-label="Glossaire"
  hidden>
  ...
</div>
```

### 3.3 Tabs (`<TypeNavigation />` page Ressources)

Pattern complet `tablist` / `tab` / `tabpanel` avec navigation flèches.

### 3.4 Combobox (`<GlossarySearch />`)

Pattern combobox avec listbox associée, navigation clavier (flèches haut/bas, enter, escape).

### 3.5 Dialog (`<ResetProgressDialog />`)

Modale avec :
- `role="dialog"` + `aria-modal="true"` + `aria-labelledby`.
- Focus trap pendant l'ouverture.
- Restitution du focus à l'élément déclencheur à la fermeture.
- Escape pour fermer.

### 3.6 Live regions (compteurs et feedbacks)

```html
<div aria-live="polite" aria-atomic="true">
  12 ressources correspondent
</div>
```

---

## 4. Skip-links

Un skip-link est posé en première position du `<body>`, visible au focus uniquement.

```html
<a class="skip-link" href="#main">Aller au contenu principal</a>
```

```css
.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
  background: var(--ai-fg-primary);
  color: var(--ai-bg-primary);
  padding: var(--ai-space-3);
  z-index: var(--ai-z-skip-link);
  transition: top var(--ai-duration-fast);
}

.skip-link:focus {
  top: 0;
}
```

⚠️ Sur les pages avec sommaire long (modules, capstone), un second skip-link peut pointer vers le sommaire (`#table-of-contents`).

---

## 5. Focus management

### 5.1 Focus visible
**Toujours** un anneau de focus visible. Style standard :

```css
*:focus-visible {
  outline: none;
  box-shadow: var(--ai-shadow-focus);
  border-radius: var(--ai-radius-sm);
}
```

⚠️ `:focus-visible` (et non `:focus` brut) — affiche le focus uniquement quand pertinent (clavier, jamais souris sur les boutons).

### 5.2 Focus trap (modales et drawers)
Implémentation via une bibliothèque légère (focus-trap) ou logique custom :
1. Ouverture → focus sur premier élément focusable du dialogue.
2. Tab cyclique restreint au dialogue.
3. Escape ou clic extérieur → ferme + restitue focus à l'élément déclencheur.

### 5.3 Restauration du focus
Après une action contextuelle (ex. tri, filtre, pagination), restaurer le focus à un point pertinent (premier résultat, ou l'action déclenchée).

---

## 6. Formulaires

### 6.1 Étiquetage
- **Tous** les `<input>`, `<select>`, `<textarea>` ont un `<label>` associé via `for=` / `id=` ou imbrication.
- **Aucun** placeholder utilisé en remplacement d'un label (perte au focus).

### 6.2 Erreurs et aide
- Messages d'erreur sous le champ, liés via `aria-describedby="field-error"`.
- Champ en erreur : `aria-invalid="true"` + bordure rouge + icône.
- Helper text neutre via `aria-describedby="field-help"`.

### 6.3 Required fields
- `aria-required="true"` ou `required` natif HTML.
- Indication visuelle via `*` rouge (avec mention « * champs obligatoires » en haut du formulaire).

⚠️ Les formulaires sont **rares** sur le site (pas d'inscription, pas de commentaires). Quand ils existent (recherche glossaire, contact via GitHub Issues), ces règles s'appliquent strictement.

---

## 7. Animations et `prefers-reduced-motion`

Tous les composants doivent respecter le paramètre utilisateur :

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

⚠️ Les animations restent acceptables si :
- Elles sont déclenchées par une action utilisateur explicite (clic).
- Elles durent ≤ 500 ms.
- Elles ne clignotent pas plus de 3 fois par seconde (critère 2.3.1).

---

## 8. Médias

### 8.1 Audio (podcasts)
- **Transcript** disponible sur chaque page d'épisode podcast.
- Lecteur `<AudioPlayer />` avec contrôles clavier (espace = play/pause, flèches = scrub).

### 8.2 Vidéo (embeds YouTube)
- Sous-titres activés par défaut quand disponibles.
- Lien vers transcript YouTube si la vidéo en propose un.
- Si pas de sous-titres : note en dessous précisant la limitation.

### 8.3 Images et diagrammes
- `alt` descriptif (jamais « image », « icon »).
- Diagrammes Mermaid : SVG accompagné d'un fallback texte.
- Infographies complexes : description longue dans `<figcaption>` ou page dédiée.

### 8.4 Icônes
- Icônes décoratives : `aria-hidden="true"`.
- Icônes informatives sans texte : `<span class="sr-only">label</span>` à côté.

---

## 9. Couleurs et signification

**Aucune information ne dépend uniquement de la couleur** (critère 1.4.1).

| Cas | Renforcement de la couleur |
| :--- | :--- |
| `<SourceTag />` (4 niveaux colorés) | Texte explicite + icône |
| Statut quiz (correct/incorrect) | Icône check/cross + texte |
| Tags taxonomie | Texte du tag + icône optionnelle |
| Champs en erreur | Bordure rouge + icône + message texte |

---

## 10. Tests automatisés

### 10.1 Pa11y en CI

Workflow GitHub Actions (Phase 3+) :

```yaml
- name: Pa11y audit
  run: |
    npm install -g pa11y-ci
    pa11y-ci --config .pa11yci.json
```

`.pa11yci.json` cible 10 pages représentatives en FR/EN/AR (home, programme, modules 1 et 5, cas Morgan Stanley, FAQ, glossaire, capstone, ressources).

### 10.2 axe-core via Lighthouse
Lighthouse CI déjà prévu (cf. planning Phase 3). Score Accessibility ≥ 95 attendu.

### 10.3 Tests manuels obligatoires (Phase 7)
- Navigation 100 % clavier sur 3 parcours utilisateurs (cf. `user-journeys.md`).
- Lecture VoiceOver sur 5 pages échantillons (modules + capstone).
- Test à 200 % de zoom navigateur.
- Test avec un thème système haute contraste (Windows et macOS).

---

## 11. Référence et veille

- [WCAG 2.1 — Recommandation officielle](https://www.w3.org/TR/WCAG21/)
- [WAI ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Inclusive Components — Heydon Pickering](https://inclusive-components.design/)
- [A11y Project — Checklist](https://www.a11yproject.com/checklist/)
- [Pa11y](https://pa11y.org/) · [axe DevTools](https://www.deque.com/axe/devtools/)

---

## 📎 Documents associés

- [Design tokens](./tokens.md) — section 2.5 (vérification contrastes)
- [Typographie](./typography.md)
- [Composants](./components.md)
- [Règles RTL](./rtl-rules.md)
