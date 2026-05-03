# Décisions techniques — Phase 3

> Décisions d'implémentation prises lors du scaffolding Astro de la Phase 3.
> Complète le journal des décisions stratégiques (cf. `docs/cadrage/decisions-log.md`).

| Métadonnée | Valeur |
| :--- | :--- |
| **Phase** | 3 — Squelette technique |
| **Date** | Mai 2026 |
| **Build validé** | 4 pages générées · sitemap-index.xml · hreflang complets · 0 erreur Astro check |

---

## 1. Versions pinnées

| Paquet | Version | Justification |
| :--- | :---: | :--- |
| `astro` | `^4.16.18` | LTS stable, écosystème mature, doc abondante. Astro 5 disponible mais cassant pour `@astrojs/sitemap` (cf. point 2). |
| `@astrojs/sitemap` | `~3.1.6` | Pinned à la branche `3.1.x`. La `3.2.x` requiert le hook `astro:routes:resolved` introduit en Astro 5 — incompatible avec notre version d'Astro. |
| `@astrojs/mdx` | `^3.1.9` | Compatible Astro 4. |
| `@astrojs/tailwind` | `^5.1.3` | Intégration officielle Tailwind 3. |
| `tailwindcss` | `^3.4.17` | Tailwind 4 récent, mais 3.4 reste le standard pour les sites avec utility-first + design tokens via CSS variables. |
| `typescript` | `^5.7.2` | Strict mode activé via `astro/tsconfigs/strict`. |
| `@astrojs/check` | `^0.9.4` | TypeScript + diagnostics Astro en CI. |
| `prettier-plugin-astro` | `^0.14.1` | Formatage des `.astro`. |
| `prettier-plugin-tailwindcss` | `^0.6.9` | Tri automatique des classes Tailwind. |

Node engine minimum : **20.11.0** (LTS), pinné via `.nvmrc` à `20.18.0` pour reproductibilité CI.

---

## 2. Configuration i18n — sans fallback

### Choix
```js
// astro.config.mjs
i18n: {
  defaultLocale: 'fr',
  locales: ['fr', 'en', 'ar'],
  routing: { prefixDefaultLocale: true },
  // No fallback
}
```

### Pourquoi pas de `fallback`
Initialement on avait :
```js
fallback: { en: 'fr', ar: 'fr' }
```
Cela avait **deux effets non désirés** :
- Astro générait des routes en double (chaque page FR émise aussi sous `/en/...` et `/ar/...`).
- `@astrojs/sitemap` recevait des routes orphelines (`r.fallbackRoutes`) qu'il ne savait pas traiter, déclenchant `Cannot read properties of undefined (reading 'reduce')`.

### Conséquence pratique
- Chaque locale **doit** avoir ses propres pages explicites sous `src/pages/<lang>/`.
- La Phase 4 produira d'abord toutes les pages en FR, puis traduira en EN/AR (cf. `planning.md` Phase 4 → Phase 7).
- Pas de mode dégradé automatique : si une page EN manque, on aura un 404 — c'est intentionnel pour préserver la **parité éditoriale**.

---

## 3. Sitemap — auto-détection de la config i18n

Le bloc `i18n` initialement passé à `sitemap()` n'est plus nécessaire :
```js
// AVANT (cassait sur sitemap@3.1.x avec Astro 4)
sitemap({
  i18n: {
    defaultLocale: 'fr',
    locales: { fr: 'fr-FR', en: 'en-US', ar: 'ar' },
  },
})

// APRÈS
sitemap()
```

`@astrojs/sitemap@3.1.x` détecte automatiquement la config i18n d'Astro et émet un `sitemap-0.xml` avec les bons hreflang. Vérifié dans `dist/sitemap-0.xml`.

---

## 4. Tailwind — `applyBaseStyles: false`

L'intégration Tailwind est configurée pour **ne pas** injecter ses styles de base par défaut :
```js
tailwind({ applyBaseStyles: false })
```

### Pourquoi
On a notre propre `src/styles/global.css` qui :
1. Importe les design tokens (`tokens.css`).
2. Déclare les `@font-face` (commentés en Phase 3, à activer Phase 7 quand les `.woff2` existent dans `/public/fonts/`).
3. Déclare un `@layer base` aligné avec nos tokens (couleurs, line-height, focus-visible avec `--ai-shadow-focus`).

Laisser Tailwind injecter ses base styles écraserait nos resets et ferait perdre la cohérence avec le design system documenté en Phase 2.

---

## 5. Spread conditionnel d'attributs Astro — pattern interdit

### Bug rencontré
Dans `Footer.astro` :
```astro
<a href={link.href} {...(link.external && { rel: '...', target: '_blank' })}>
```

Cette syntaxe **fonctionne** en JSX/React mais **casse** Astro :
> `Cannot create property 'class' on boolean 'false' at spreadAttributes`

Quand `link.external` vaut `false`, le spread devient `{...false}` que `spreadAttributes()` ne peut pas itérer.

### Pattern correct
```astro
<a
  href={link.href}
  rel={link.external ? 'noopener noreferrer' : undefined}
  target={link.external ? '_blank' : undefined}
>
```

Astro reconnaît `undefined` et n'émet pas l'attribut. À retenir pour tous les composants : **pas de spread conditionnel d'attributs**.

---

## 6. Structure des pages root et redirection

Le fichier `src/pages/index.astro` produit le HTML servi à la racine `/`. Il :
1. Contient un `<meta http-equiv="refresh" content="0; url=/fr/">` qui marche **sans JS**.
2. Contient un `<script is:inline>` qui détecte `navigator.languages` et redirige vers la locale supportée la plus pertinente (FR/EN/AR).
3. Reste minimal — pas de styles, pas de header/footer, juste un fallback texte trilingue.

C'est un **compromis pragmatique** : le déploiement OVH (mutualisé ou autre) ne permet pas toujours une redirection serveur via `.htaccess` propre. Cette redirection HTML+JS est universelle.

Si à l'avenir on déploie sur un VPS avec contrôle nginx, on pourra remplacer cette page par une redirection 302 native.

---

## 7. Polices IBM Plex — fallback système activé

Les `@font-face` IBM Plex Sans / Sans Arabic / Mono sont **commentées** dans `src/styles/global.css`. Tant que les `.woff2` ne sont pas dans `/public/fonts/`, le site charge avec la stack système :

```css
--ai-font-sans:
  'IBM Plex Sans', 'IBM Plex Sans Arabic',
  -apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

Un visiteur voit donc :
- Sur macOS / iOS : `-apple-system`
- Sur Windows : `Segoe UI`
- Sur Linux : `Roboto` ou `Arial`

C'est un rendu correct, mais qui **ne reflète pas le design system**. La Phase 7 ajoutera les fichiers `.woff2` IBM Plex et activera les `@font-face`.

---

## 8. Vulnérabilités de tooling — non bloquantes

`npm audit` rapporte 9 vulnérabilités (8 modérées, 1 haute) toutes confinées au tooling de développement :
- `esbuild` via `vite` (build-time only)
- `yaml` via `yaml-language-server` via `@astrojs/check` (CI-time only)

**Aucune** de ces vulnérabilités n'affecte le code de production servi aux visiteurs (le build statique ne contient ni esbuild ni yaml). La résolution exigerait une montée de version Astro 6 (cassante). On reste sur Astro 4 LTS et on suivra les patchs `@astrojs/check` au fil de leurs sorties.

---

## 9. CI/CD — déploiement OVH différé

`.github/workflows/ci.yml` est **actif** et tourne sur chaque push :
- Format check (Prettier).
- TypeScript / Astro check.
- Build complet.
- Audit accessibilité Pa11y sur 4 pages représentatives.

`.github/workflows/deploy.yml` est **inactif** (trigger `workflow_dispatch` uniquement). Il contient :
- Un job `placeholder` qui s'exécute pour signaler que la décision d'hébergement OVH est ouverte.
- Trois blocs commentés (mutualisé SFTP / VPS SSH+rsync / Cloud S3) prêts à être activés.

Pour activer le déploiement, il faudra :
1. Choisir le type d'hébergement OVH.
2. Décommenter le bloc correspondant.
3. Renseigner les secrets dans GitHub : `Settings → Secrets and variables → Actions`.
4. Changer le trigger de `workflow_dispatch` à `push: branches: [main]`.

---

## 10. Site URL — placeholder

`astro.config.mjs` pose `site: 'https://ai-strategy.example.com'`. C'est un **placeholder**.

Quand le domaine OVH sera connu (`ai-strategy.fr`, `melafrit.com/ai-strategy`, ou autre), il faudra :
1. Mettre à jour `astro.config.mjs`.
2. Mettre à jour `public/robots.txt` (URL du sitemap).
3. Mettre à jour `docs/architecture/sitemap.md` (placeholder explicit).

Le CI prend déjà la variable d'environnement `ASTRO_SITE` en compte (cf. `.github/workflows/ci.yml`) — ce qui permettra de configurer ça côté GitHub Variables sans modifier le code.

---

## 📎 Documents associés

- [Charte de cadrage](../cadrage/charte-de-cadrage.md)
- [Journal des décisions stratégiques](../cadrage/decisions-log.md)
- [Planning](../cadrage/planning.md) — voir Phase 7 pour la levée des points différés
- [Design tokens](../design-system/tokens.md)
- [Sitemap](./sitemap.md)
