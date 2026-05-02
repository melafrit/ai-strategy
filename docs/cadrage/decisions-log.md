# Journal des décisions — AI Strategy

> Format inspiré des **Architecture Decision Records (ADR)**.
> Chaque décision est immuable une fois enregistrée : pour la modifier, on ajoute une nouvelle entrée qui mentionne explicitement l'ADR remplacé (`Supersedes ADR-XXX`).
> Cette traçabilité permet à toute personne arrivant sur le projet de comprendre **pourquoi** chaque choix a été fait.

---

## Format type

```
ADR-XXX — Titre court de la décision

Date : YYYY-MM-DD
Statut : [Proposé | Accepté | Déprécié | Remplacé par ADR-YYY]
Auteur : Nom

Contexte : Pourquoi cette décision se pose maintenant.
Décision : Ce qui est décidé.
Alternatives examinées : Liste avec forces et limites.
Conséquences : Ce que cette décision implique en pratique.
Traçabilité : Liens vers les artefacts liés.
```

---

## ADR-001 — Identité et naming du projet

**Date** : 2026-05-03
**Statut** : Accepté
**Auteur** : Mohamed El Afrit

### Contexte

Le projet de site pédagogique trilingue inspiré du programme MIT Sloan a besoin d'un nom court, neutre linguistiquement et compatible avec un repository GitHub public visible. Le nom devra apparaître dans les URLs, les titres SEO, la documentation et la communication.

### Décision

Adopter le nom **AI Strategy** pour le site et `ai-strategy` comme slug du repository GitHub. Repository public sous `github.com/melafrit/ai-strategy`.

### Alternatives examinées

| Option | Forces | Limites | Décision |
| :--- | :--- | :--- | :--- |
| « Académie IA & Stratégie » (`academie-ia-strategie`) | Ton francophone affirmé, positionnement académique fort | Trop long, pas neutre pour EN/AR, alourdit les URLs | Écartée |
| « AI Strategy » (`ai-strategy`) | Court, neutre, fonctionne tel quel en FR/EN/AR | Légèrement générique | **Retenue** |
| « Décision IA » (`decision-ia`) | Court, orienté action managériale | Trop ambigu hors contexte | Écartée |

### Conséquences

- Branding sobre, slogan complémentaire à définir si besoin marketing.
- URLs courtes et SEO-friendly.
- Identité visuelle qui peut s'appuyer sur la sobriété du nom.
- Cohérent avec l'audience trilingue prévue (pas de parti pris linguistique).

### Traçabilité

- Charte de cadrage, section 5, Décision 1.
- README et badges du repository.

---

## ADR-002 — Stack technique du site

**Date** : 2026-05-03
**Statut** : Accepté
**Auteur** : Mohamed El Afrit

### Contexte

Le site doit être : multilingue FR/EN/AR avec support RTL ; statique pour permettre tout type d'hébergement ; capable d'embarquer des composants interactifs ponctuels (quiz, matrices) sans alourdir la totalité du site ; maintenable par un développeur seul ; performant (Lighthouse > 90).

### Décision

Adopter **Astro** (dernière version stable, ≥ 4.x) avec contenu en **MDX** et **îlots interactifs React** chargés uniquement où nécessaire (`client:visible`).

### Alternatives examinées

| Option | Forces | Limites | Décision |
| :--- | :--- | :--- | :--- |
| Astro | Content-first, MDX, îlots interactifs, i18n natif, build statique parfait | Écosystème plus jeune que Next.js | **Retenue** |
| Next.js (export statique) | Écosystème React mature, `next-intl` éprouvé | Plus lourd, JS par défaut, configuration i18n statique parfois rigide | Écartée |
| Hugo | Ultra-rapide, multilingue mature, build trivial | Templates Go moins modernes, interactivité = JS vanilla | Écartée |
| Docusaurus | Pensé pédagogie/docs, i18n intégré, recherche, versioning | Trop "docs", flexibilité visuelle limitée | Écartée |

### Conséquences

- Structure du repo orientée content collections Astro.
- React introduit uniquement pour les îlots interactifs (quiz, matrices), pas pour les pages statiques.
- Tailwind utilisé pour le styling, avec design tokens en CSS custom properties.
- Build 100 % statique, déployable partout.
- Charge JS minimale par défaut (zéro JS sur les pages purement éditoriales).

### Traçabilité

- Charte de cadrage, section 5, Décision 2.
- `astro.config.mjs` et `package.json` (à produire en Phase 3).

---

## ADR-003 — Hébergement cible OVH

**Date** : 2026-05-03
**Statut** : Accepté
**Auteur** : Mohamed El Afrit

### Contexte

L'auteur dispose d'une infrastructure OVH propriétaire et préfère y héberger le site pour conserver la souveraineté et l'indépendance vis-à-vis des plateformes cloud externes (Vercel, Netlify, Cloudflare Pages).

### Décision

Héberger le site sur l'infrastructure **OVH** de l'auteur. Déploiement automatisé via **GitHub Actions** (workflow `deploy-ovh.yml`) avec push SFTP/FTP du build statique.

### Alternatives examinées

| Option | Forces | Limites | Décision |
| :--- | :--- | :--- | :--- |
| GitHub Pages | Tout reste dans GitHub, gratuit, simple | Limite contrôle, pas de logs serveur | Écartée |
| Vercel | DX excellente, preview deploys par PR | Compte tiers, vendor lock-in léger | Écartée |
| Cloudflare Pages | CDN très rapide, build minutes généreuses | Compte Cloudflare, dépendance | Écartée |
| OVH (auteur) | Souveraineté, contrôle total, infrastructure existante | Mise en place CI/CD à faire | **Retenue** |

### Conséquences

- Workflow GitHub Actions à produire en Phase 3 avec credentials FTP/SFTP en GitHub Secrets.
- `.htaccess` à configurer pour la redirection multilingue côté serveur.
- Certificat Let's Encrypt OVH à activer pour le futur domaine.
- Type d'hébergement OVH précis (mutualisé / VPS / Cloud) à confirmer en début de Phase 3 pour adapter le mode de déploiement.
- Pas de preview deploys par PR (acceptable en Phase 1–3 ; éventuellement résolu plus tard avec un environnement de staging séparé).

### Traçabilité

- Charte de cadrage, section 5, Décision 3.
- Workflow `.github/workflows/deploy-ovh.yml` (à produire en Phase 3).

---

## ADR-004 — Public prioritaire hybride

**Date** : 2026-05-03
**Statut** : Accepté
**Auteur** : Mohamed El Afrit

### Contexte

Le brief initial liste 8 audiences. Définir une priorité claire est nécessaire pour calibrer le ton, la profondeur, le choix des cas et l'équilibre entre contenu rédactionnel et composants interactifs. Le profil personnel de l'auteur (formateur + consultant) milite pour un positionnement double-usage.

### Décision

Adopter un **public hybride** combinant trois cibles principales :
1. Enseignants et étudiants (cours, formation continue),
2. Consultants et responsables transformation digitale (missions client),
3. Dirigeants et top management (briefings exécutifs).

### Alternatives examinées

| Option | Forces | Limites | Décision |
| :--- | :--- | :--- | :--- |
| Mono-audience dirigeants | Ton et positionnement très clairs | Réduit l'usage en cours, perd de l'utilité pour le profil de l'auteur | Écartée |
| Mono-audience consultants | Templates et frameworks au premier plan | Moins de pédagogie, moins d'usage en formation | Écartée |
| Mono-audience pédagogique | Dispositif d'évaluation complet | Perd la dimension "livrable de mission" | Écartée |
| **Hybride enseignant + consultant + dirigeants** | Triple usage, cohérence avec le profil de l'auteur, cohérence avec MIT Sloan Executive Education | Discipline rédactionnelle exigeante | **Retenue** |

### Conséquences

- Chaque page de contenu doit servir simultanément les 3 usages → principe de **triple lecture** :
  1. Synthèse exécutive (5 min)
  2. Contenu pédagogique complet
  3. Annexes opérationnelles téléchargeables
- Présence systématique d'encadrés "Application en mission de conseil" et "Synthèse exécutive".
- Esthétique board-ready (digne d'être partagée à un C-level) ET densité pédagogique (utilisable en cours).
- Personas de Phase 2 doivent couvrir chacune des 3 audiences explicitement.

### Traçabilité

- Charte de cadrage, sections 3 et 4.
- Personas (à produire en Phase 2).

---

## ADR-005 — Direction visuelle Consulting Modern

**Date** : 2026-05-03
**Statut** : Accepté
**Auteur** : Mohamed El Afrit

### Contexte

La direction visuelle conditionne la perception immédiate du site par les trois audiences. Elle doit transmettre crédibilité C-level, sobriété éditoriale, et supporter la densité informationnelle (tableaux, matrices, dataviz). Elle doit aussi supporter parfaitement l'arabe (RTL).

### Décision

Adopter la direction **Consulting Modern** : sans-serif géométrique (IBM Plex Sans + IBM Plex Sans Arabic), blanc pur en fond, navy/charbon en couleur primaire (`#0F1E2E`), bleu corporate franc en accent (`#0066CC`), iconographie Lucide.

### Alternatives examinées

| Option | Forces | Limites | Décision |
| :--- | :--- | :--- | :--- |
| Editorial Business School (serif + cream + navy) | Gravitas académique, esprit MIT Sloan/HBR | Légèrement moins moderne pour l'audience consultant/dirigeant | Écartée |
| **Consulting Modern (sans-serif + blanc + navy/bleu)** | Crédibilité immédiate cabinet de conseil, sobriété, densité informationnelle, parfait trilingue | Risque de paraître "froid" si mal exécuté | **Retenue** |
| Editorial Tech (mix serif/sans + cream chaud) | Contemporain, légèrement artistique | Trop éditorial pour le positionnement business-first | Écartée |
| Minimal Swiss / Académique strict | Modernisme rigoureux | Risque d'austérité, peu engageant | Écartée |

### Conséquences

- Design tokens à finaliser en Phase 2 mais ancrés sur : `#FFFFFF` fond, `#0F1E2E` primary, `#0066CC` accent, `#475569` secondary.
- IBM Plex Sans en self-host (woff2) pour performance et privacy.
- IBM Plex Sans Arabic pour la version AR (cohérence trilingue).
- Iconographie Lucide Icons (cohérence consulting).
- Encadrés signature `Source officielle / Complément recommandé / Reconstruction pédagogique` en filets fins navy.
- Charts et dataviz au premier plan dans la mise en page.

### Traçabilité

- Charte de cadrage, section 5, Décision 5.
- Design system (à produire en Phase 2 sous `docs/design-system/`).

---

## ADR-006 — Architecture multilingue par sous-dossiers symétriques

**Date** : 2026-05-03
**Statut** : Accepté
**Auteur** : Mohamed El Afrit

### Contexte

Le site est trilingue avec priorité au français. L'arabe nécessite RTL et un traitement éditorial équitable (équité culturelle pour l'audience MENA). Le SEO multilingue doit être propre dès le départ.

### Décision

Adopter la structure **sous-dossiers symétriques** : `/fr/`, `/en/`, `/ar/`. La page racine `/` détecte la langue du navigateur et redirige (fallback FR). Toutes les langues ont le même statut technique.

### Alternatives examinées

| Option | Forces | Limites | Décision |
| :--- | :--- | :--- | :--- |
| **Sous-dossiers symétriques** | Best practice 2026, parité éditoriale, maintenance unique, évolutivité | Page racine doit gérer une redirection (trivial) | **Retenue** |
| Hybride (FR sans préfixe, EN/AR préfixés) | URLs FR plus courtes | Asymétrie qui complique liens internes et hreflang | Écartée |
| Sous-domaines (`fr.`, `en.`, `ar.`) | Séparation claire | 3 SSL, 3 DNS, analytics éclatés | Écartée |
| Domaines distincts | SEO local maximal | Sur-ingénierie pour ce stade | Écartée |

### Conséquences

- Configuration `astro.config.mjs` : `i18n: { defaultLocale: 'fr', locales: ['fr', 'en', 'ar'] }`.
- Sélecteur de langue persistant dans le header, conserve l'URL relative au switch.
- `dir="rtl"` activé sur toutes les pages `/ar/`.
- Balises `hreflang` croisées sur chaque page (3 hreflang par page).
- Sitemap par langue + sitemap d'index.
- Redirection `/` à implémenter via `.htaccess` côté OVH ou JS côté client.
- Évolutivité : ajouter une 4e langue (espagnol, portugais, etc.) sera trivial.

### Traçabilité

- Charte de cadrage, section 5, Décision 6.
- `astro.config.mjs` (Phase 3).

---

## ADR-007 — Granularité hybride des fiches PDF

**Date** : 2026-05-03
**Statut** : Accepté
**Auteur** : Mohamed El Afrit

### Contexte

Les fiches PDF téléchargeables sont une exigence explicite. Leur granularité conditionne le volume à produire, la maintenance, la réutilisation et le SEO long-tail. Elles doivent servir aux 3 audiences (cours / mission / autoformation).

### Décision

Adopter une approche **hybride** : 1 PDF synthèse complète par module + extraits granulaires (concepts, cas, outils, quiz) extraits depuis le master. Volume cible : ~30 PDFs par langue.

### Alternatives examinées

| Option | Forces | Limites | Décision |
| :--- | :--- | :--- | :--- |
| Synthèse par module (~7 PDFs) | Simple à maintenir, vue d'ensemble cohérente | Peu flexible, pas de SEO long-tail | Écartée |
| Modulaire (~24–30 PDFs) | Mixage facile | Volume sans le bénéfice du master | Écartée |
| Bibliothèque transversale (~35–45 fiches) | Réutilisation maximale | Travail amont conséquent, perte du fil narratif | Écartée |
| **Hybride** | Synthèse + extraits granulaires, sans dupliquer le travail | Volume similaire à modulaire, légère duplication assumée | **Retenue** |

### Conséquences

- Génération technique via Pandoc + Paged.js depuis sources MDX (Phase 5) → cohérence web/PDF, mises à jour automatiques.
- Structure `/public/fiches/<lang>/synthese/`, `/concepts/`, `/cas/`, `/outils/`, `/quiz/`, `/transversales/`.
- Identifiant unique par fiche (ex. `M1-CONCEPTS-V1.0`) pour traçabilité.
- QR code sur chaque fiche pointant vers la page web associée.
- Page Ressources avec filtres dynamiques par module / type / secteur / niveau.
- SEO long-tail amplifié par la multiplicité de titres précis (ex. "Matrice de priorisation des cas d'usage GenAI").

### Traçabilité

- Charte de cadrage, section 5, Décision 7.
- Phase 5 du planning.

---

## ADR-008 — Stratégie podcasts en série narrative

**Date** : 2026-05-03
**Statut** : Accepté
**Auteur** : Mohamed El Afrit

### Contexte

Les podcasts NotebookLM (format `.m4a`) sont une exigence explicite. Leur stratégie peut varier de "minimal" (1 par module) à "série narrative" (saison thématique liée). Le choix conditionne l'engagement auditeur, la signature éditoriale et l'effort de production.

### Décision

Adopter une **série narrative en saison 1** de 10 épisodes liés, structurée en 5 actes (Comprendre / Décider / Déployer / Gouverner / Anticiper). Durée totale ~3h30–4h00.

### Alternatives examinées

| Option | Forces | Limites | Décision |
| :--- | :--- | :--- | :--- |
| 7 podcasts (1 par module + capstone) | Simple, aligné navigation | Pas d'angles transversaux | Écartée |
| ~12 podcasts (modules + thématiques) | Couvre transversal | Effort important, peu narratif | Écartée |
| ~18–20 podcasts granulaires | Très ciblé, "format snack" | Cohérence narrative difficile | Écartée |
| **Série narrative (10 épisodes liés)** | Engagement supérieur, signature distinctive, positionnement "académie" | Demande un script narratif d'ensemble | **Retenue** |

### Conséquences

- 10 prompts NotebookLM à produire en Phase 6 (un fichier par épisode).
- Page dédiée Saison 1 servant d'entrée alternative au site.
- Placeholders audio embarqués sur chaque page module concernée.
- Composant `<AudioPlayer />` avec contrôles accessibles.
- Continuité narrative : chaque épisode rappelle brièvement le précédent et amorce le suivant.
- Différenciation marquée sur le marché francophone.

### Architecture des 10 épisodes (proposition)

| # | Acte | Titre | Lien site |
| :---: | :--- | :--- | :--- |
| 1 | I — Comprendre | Pourquoi l'IA change la stratégie d'entreprise | Module 1 |
| 2 | I — Comprendre | Décrypter les familles d'IA | Module 1 |
| 3 | II — Décider | Machine Learning dans la décision business | Module 2 |
| 4 | II — Décider | IA Générative au travail : promesses et garde-fous | Module 3 |
| 5 | II — Décider | Robotique et automatisation physique | Module 4 |
| 6 | III — Déployer | Choisir et lancer un pilote IA | Modules 2-3 |
| 7 | III — Déployer | Mesurer le ROI, gérer le risque | Modules 3, 5 |
| 8 | IV — Gouverner | Gouvernance, éthique, conformité | Module 5 |
| 9 | IV — Gouverner | IA, travail et compétences | Module 5 |
| 10 | V — Anticiper | Construire votre roadmap IA | Capstone |

### Traçabilité

- Charte de cadrage, section 5, Décision 8.
- Phase 6 du planning, prompts NotebookLM.

---

## ADR-009 — Quiz interactifs avec persistance locale

**Date** : 2026-05-03
**Statut** : Accepté
**Auteur** : Mohamed El Afrit

### Contexte

Les quiz par module sont une exigence explicite. Leur niveau d'interactivité conditionne l'engagement, la complexité technique, et la conformité RGPD. Quatre niveaux possibles : statique / interactif local / interactif + persistance locale / cloud + comptes utilisateurs.

### Décision

Adopter le niveau **interactif avec persistance locale** : composants React (îlots Astro), `localStorage` pour scores et progression, badges, mode imprimable. Aucun backend, aucun cookie tracking.

### Alternatives examinées

| Option | Forces | Limites | Décision |
| :--- | :--- | :--- | :--- |
| Statique non interactif | Zéro JS, parfait PDF | Peu engageant en ligne | Écartée |
| Interactif local sans persistance | QCM cliquables | Pas de mémoire entre sessions | Écartée |
| **Interactif + localStorage** | Engagement réel, progression, RGPD-safe, pas de backend | Effacé si changement de navigateur (acceptable) | **Retenue** |
| Cloud avec comptes utilisateurs | Vrai LMS léger | Sort du périmètre statique, RGPD complexe | Écartée |

### Conséquences

- Composants React `Quiz.tsx`, `QuizQuestion.tsx`, `Badges.tsx` à produire en Phase 5.
- Wrapper `localStorage` typé en TypeScript (`src/lib/storage.ts`).
- Volume cible : 7 questions par module × 6 modules + 1 quiz capstone diagnostic = ~50 questions FR (dupliquées EN/AR).
- Accessibilité AA : navigation clavier, lecteurs d'écran, contraste, focus visible.
- Mode "version imprimable" préservant questions et réponses sans interactivité (utile pour distribution en cours).
- Architecture compatible avec une future migration vers Supabase (LMS léger) si besoin sans tout réécrire.

### Traçabilité

- Charte de cadrage, section 5, Décision 9.
- Phase 5 du planning.

---

## ADR-010 — Push direct sur main via fine-grained PAT

**Date** : 2026-05-03
**Statut** : Accepté
**Auteur** : Mohamed El Afrit

### Contexte

L'auteur souhaite que les livrables soient déposés progressivement sur GitHub par l'agent IA travaillant à la production. Trois options sont possibles : téléchargement manuel, scripts git locaux, push direct via PAT.

### Décision

Adopter le **push direct sur la branche `main`** via un **fine-grained Personal Access Token GitHub** scopé au seul repo `ai-strategy`, avec la permission `Contents: Read and write` uniquement, et une expiration de 30 jours renouvelable.

### Alternatives examinées

| Option | Forces | Limites | Décision |
| :--- | :--- | :--- | :--- |
| Téléchargement manuel | Sécurité maximale | Lent, étape manuelle entre chaque livrable | Écartée |
| Scripts git locaux | Bon compromis | Demande exécution manuelle à chaque phase | Écartée |
| **Push direct via PAT** | Vélocité maximale, traçabilité Git native | Token à gérer | **Retenue** |
| Connecteur GitHub MCP | Idéal théoriquement | Pas activé sur le compte au moment de la décision | Écartée |

### Conséquences

- Token fine-grained scopé exclusivement au repo `ai-strategy`.
- Permissions minimales (`Contents: Read and write`).
- Expiration 30 jours, renouvelable.
- À révoquer en fin de projet ou à toute interruption longue.
- Aucun token jamais committé dans le repo (cf. `.gitignore`).
- Messages de commits suivent Conventional Commits.
- Push direct sur `main` en Phases 1 à 3 ; possibilité de basculer sur branches feature à partir de Phase 4 si volumes ou contributions externes.
- En cas de livrable inadapté, `git revert` permet correction propre.

### Traçabilité

- Charte de cadrage, section 9.3.
- Procédure de génération du PAT documentée hors du repo (par sécurité).

---

## 📎 Documents associés

- [Charte de cadrage](./charte-de-cadrage.md)
- [Planning détaillé](./planning.md)
- [Index de la documentation projet](../README.md)
- [README principal du projet](../../README.md)

---

## Procédure d'ajout d'un nouvel ADR

1. **Numéro** : prendre le numéro suivant (ADR-011, ADR-012…).
2. **Format** : suivre la structure type ci-dessus.
3. **Statut initial** : `Proposé`. Une fois discuté et validé, passer à `Accepté`.
4. **Si supersedes** : indiquer dans le statut `Remplace ADR-XXX`. Modifier l'ADR-XXX en `Remplacé par ADR-YYY` (sans supprimer son contenu).
5. **Commit** : message au format `docs(cadrage): add ADR-XXX <titre court>`.
6. **CHANGELOG** : ajouter une entrée dans la rubrique appropriée (`Added` ou `Changed`).

---

*Journal des décisions vivant. Dernière mise à jour : Phase 1 — Mai 2026.*
