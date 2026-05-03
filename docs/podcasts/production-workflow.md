# Workflow de production des podcasts NotebookLM — AI Strategy

> Guide complet pour générer les 10 épisodes de la série narrative AI Strategy à partir de Google NotebookLM. Lire **avant** la première session de production.

---

## 1. Vue d'ensemble du dispositif

La série AI Strategy compte **10 épisodes** organisés en 4 thèmes (foundations, technology, governance, application). Chaque épisode est un **« Audio Overview »** au format dialogue généré par NotebookLM à partir de pages-source du site.

Les briefs sont définis structurellement dans `src/content/podcasts.ts` et exposés sur les pages `/fr/podcasts/{slug}/`. Cette documentation complète le brief technique avec la **méthodologie de production opérationnelle**.

| Étape | Durée typique | Livrable |
|---|---|---|
| 1. Préparation des sources | 15-20 min | Notebook NotebookLM avec 3-6 sources chargées |
| 2. Génération Audio Overview | 5-15 min (asynchrone) | MP3 de 12-18 min |
| 3. Écoute critique | 15-20 min | Liste de validations / corrections |
| 4. Régénération si nécessaire | 5-15 min | MP3 v2 |
| 5. Transcript et publication | 30 min | MP3 + transcript Markdown + commit |

**Total par épisode** : entre 1h et 1h30 selon la qualité du premier rendu. Les épisodes 7 (capstone) et 10 (synthèse pièges) sont les plus exigeants en validation.

---

## 2. Préparation des sources

### 2.1 Sources principales (toujours)

Pour chaque épisode, les `sourceDocuments` listés dans `podcasts.ts` sont les sources principales. **Ne jamais charger plus de 5-6 sources principales** dans NotebookLM ; le modèle se disperse au-delà.

**Format d'ingestion recommandé** :

1. Pour chaque page-source, ouvrir l'URL listée et **utiliser la fonction d'impression** du navigateur (Ctrl+P) → enregistrer en PDF. Le print stylesheet du site (Phase 5 sub-3) produit une version épurée optimale pour ingestion par NotebookLM.
2. Charger ces PDFs dans le notebook via "Sources" → "Upload sources" → "PDF".
3. Vérifier que le compteur "Sources" affiche le nombre attendu.

### 2.2 Sources complémentaires (optionnelles)

Selon l'épisode, ajouter 1-2 sources externes vérifiables :

- Pour EP02 (ML) : lien Stripe Radar guide (en français)
- Pour EP03 (GenAI) : lien Morgan Stanley AI page corporate
- Pour EP05/EP06 (gouvernance) : extraits AI Act EUR-Lex (FR) ou NIST RMF PDF
- Pour EP09 (IA et travail) : extrait MIT News David Autor

**Ne jamais charger plus de 8 sources au total**. Au-delà, la qualité narrative diminue : le modèle produit des résumés plats au lieu d'un dialogue construit.

### 2.3 Pages à NE PAS charger

- Pages d'index (programme, cas, ressources, glossaire) — elles surchargent la cohérence narrative
- Page d'accueil — méta-information sans valeur pédagogique
- FAQ complète — sauf l'entrée spécifique pertinente

---

## 3. Génération de l'Audio Overview

### 3.1 Configuration de base

Dans NotebookLM, onglet "Studio" → "Audio Overview" → "Customize" (icône engrenage).

**Paramètres recommandés** :

| Paramètre | Valeur | Justification |
|---|---|---|
| Langue | Français | Tous les épisodes sont en FR (Phase 7 produira EN/AR) |
| Format | "Deep Dive" | Conversation à 2 hôtes, format le plus narratif |
| Longueur | "Default" ou "Longer" | "Longer" pour EP07 et EP10 (synthèse), "Default" pour les autres |

### 3.2 Le prompt de focus — le plus important

NotebookLM permet de fournir des **« Custom instructions »** lors de la génération. C'est ici que se joue la qualité de l'épisode. Pour chaque épisode, utiliser le `focusNotes` du brief technique (`podcasts.ts`) comme base, puis y ajouter le **template universel ci-dessous**.

**Template universel (à adapter par épisode)** :

```
LANGUE : Français professionnel, accessible, sans anglicismes inutiles. 
Maintenir le ton conversationnel sans tomber dans le familier.

PUBLIC : Cadre, dirigeant, consultant ou responsable transformation 
qui veut comprendre l'enjeu sans jargon technique excessif. 
Pas de prérequis technique supposé.

STRUCTURE NARRATIVE :
1. Accroche (~30s) — pourquoi ce sujet, maintenant ?
2. Cadrage des concepts (~2-3 min) — distinctions clés
3. Cas concret (~3-5 min) — exemple ancré
4. Implications business (~2-3 min) — décisions que le sujet impose
5. Conclusion actionnable (~1 min) — par où commencer

CONTRAINTES :
- Citer chaque source par son nom complet la première fois 
  (ex: "Stripe Radar", "Mirai au MIT CSAIL", "AI Act EU 2024/1689")
- Ne pas inventer de chiffres précis — privilégier les ordres de 
  grandeur quand la source ne donne pas de données exactes
- Ne pas inventer d'études ou de chercheurs — n'utiliser que ceux 
  cités explicitement dans les sources
- Si une affirmation n'est pas dans les sources, dire "selon mon 
  intuition" ou ne pas la formuler

DURÉE CIBLE : [12-18 min selon l'épisode]

TON : Sérieux mais vivant. Les deux hôtes peuvent être en 
désaccord modéré sur des points (ex: "ce n'est pas si simple"), 
ce qui rend la conversation plus pédagogique.

INSTRUCTIONS SPÉCIFIQUES À CET ÉPISODE :
[ICI : copier les focusNotes du podcasts.ts, augmentées si besoin]
```

### 3.3 Lancer la génération

Cliquer "Generate". La génération prend typiquement **5 à 12 minutes** en arrière-plan. Pendant ce temps, ne pas modifier les sources (cela invalide la génération en cours).

---

## 4. Écoute critique et validation

### 4.1 Checklist de qualité (8 critères)

Écouter l'épisode généré avec les critères suivants. **Régénérer si 3 critères ou plus ne sont pas atteints.**

- [ ] **Durée respectée** : entre 80% et 120% de la durée cible (ex: cible 15 min → 12 à 18 min acceptable)
- [ ] **Pas d'inventions factuelles** : tous les noms d'entreprises, personnes, chiffres sont dans les sources
- [ ] **Concepts du glossaire correctement utilisés** : pas de confusion ML / GenAI / RAG / fine-tuning
- [ ] **Cas concret présent et incarné** : l'épisode ne reste pas sur des généralités
- [ ] **Aucune affirmation politiquement clivante** non sourcée
- [ ] **Conclusion actionnable** : l'auditeur ressort avec 2-3 prises concrètes
- [ ] **Pas de répétitions excessives** : le format dialogue peut paraphraser, mais pas répéter
- [ ] **Anglicismes raisonnables** : "machine learning" ok, "delivery model leverage" non

### 4.2 Erreurs typiques observées

- **Hallucination de chiffres** : NotebookLM peut inventer des pourcentages d'ampleur plausible. Toujours vérifier quand un chiffre est donné comme "exact". Si pas dans les sources : régénérer en précisant dans les instructions « Ne pas inventer de chiffres ».
- **Confusion ML / GenAI** : sur les épisodes 2 et 3, NotebookLM peut amalgamer. Si cela arrive, ajouter dans les instructions : « Distinguer rigoureusement ML supervisé classique (épisode 2) de GenAI (épisode 3). »
- **Format trop scolaire** : si la conversation perd le naturel et devient une suite de "comme on l'a vu...", régénérer avec « Plus de spontanéité, moins de récapitulations explicites ».

### 4.3 Si la régénération ne suffit pas

Trois options par ordre croissant :

1. **Réduire les sources** : ne garder que 3 sources principales (ex: pour EP01, garder seulement Module 1 + un cas). Souvent, moins de sources = meilleure narration.
2. **Affiner le prompt de focus** : ajouter des "Ne pas..." explicites pour éviter les écueils observés.
3. **Découper en deux** : si l'épisode est densément composé (cas du EP07 capstone), accepter qu'il devienne plus long ou produire une version synthétique en EP07a + EP07b. À éviter — la série a été conçue à 10 épisodes.

---

## 5. Transcript et publication

### 5.1 Génération du transcript

NotebookLM ne fournit pas de transcript exploitable directement. Deux options :

**Option A — Whisper (recommandé)** : utiliser OpenAI Whisper en local ou via API pour transcrire le MP3 généré. Whisper produit en français de qualité standard exploitable. Estimation : **5-10 min par épisode** sur une machine récente.

```bash
# Exemple avec whisper local (Python)
whisper ep-01-pourquoi-ia-pour-dirigeants.mp3 --language fr --model large-v3 --output_format txt
```

**Option B — Transcription manuelle assistée** : transcrire à la main, ou via un service externe payant (Otter, Trint, AssemblyAI). Plus coûteux en temps ou en argent, mais qualité supérieure pour les épisodes destinés à un usage formation.

### 5.2 Format du transcript

Sauvegarder le transcript en Markdown avec en-tête structuré :

```markdown
# Transcript — Épisode {NN} : {Titre}

> **Durée** : {mm:ss}  
> **Date de génération** : {YYYY-MM-DD}  
> **Outil** : Google NotebookLM (Audio Overview "Deep Dive")  
> **Transcripteur** : OpenAI Whisper (large-v3)  
> **Sources principales** : {liste}

---

## Chapitre 1 — {titre}  
*[~00:00]*

[Hôte 1] : ...

[Hôte 2] : ...

## Chapitre 2 — {titre}  
*[~02:15]*

...
```

Les chapitres correspondent à ceux du `podcasts.ts` mais ajustés à la durée réelle observée dans le MP3 généré.

### 5.3 Publication

1. Copier le MP3 dans `public/podcasts/{slug}.mp3`.
2. Copier le transcript dans `public/podcasts/{slug}-transcript.md`.
3. Mettre à jour `src/content/podcasts.ts` :
   - `status: 'planned'` → `status: 'published'`
   - Ajouter `audioFile: '/podcasts/{slug}.mp3'`
   - Ajouter `transcriptFile: '/podcasts/{slug}-transcript.md'`
   - Ajuster `chapters` si les timestamps réels diffèrent des prévisionnels
4. Lancer un build local pour vérifier que le lecteur s'affiche correctement.
5. Commit avec message structuré : `feat(podcasts): publish episode {NN} — {short title}`.

---

## 6. Limites connues du dispositif

### 6.1 Limites NotebookLM

- **Langue** : NotebookLM Audio Overview supporte le français mais le résultat est plus naturel en anglais. Acceptable pour cette série mais à surveiller.
- **Voix synthétiques** : les deux hôtes IA ont des voix neutres mais reconnaissablement synthétiques. Mentionner dans la page épisode que c'est généré par NotebookLM (transparence) — déjà fait.
- **Stabilité éditoriale** : un même prompt peut produire deux épisodes assez différents. Toujours valider l'épisode généré, ne pas faire confiance aveuglément à la première sortie.
- **Mises à jour Google** : NotebookLM évolue rapidement. Le workflow ci-dessus est valide en 2026 ; il faudra l'ajuster si Google modifie significativement l'interface ou les capacités.

### 6.2 Limites de la transparence

- Les épisodes sont **générés**, pas dictés ni écrits. Cela implique un degré de variabilité incompressible.
- Les voix IA peuvent prononcer mal certains termes techniques (« CSAIL » prononcé "C-Sail" parfois). Acceptable mais à signaler.
- Le format dialogue oblige parfois à des redondances qui n'auraient pas leur place dans un cours écrit. C'est une caractéristique du format, pas un défaut.

### 6.3 Engagement éditorial

Cette série n'est **pas un cours alternatif**. Elle complète l'expérience de lecture du site. La page `/fr/podcasts/` est explicite sur ce point. Tout épisode qui contredirait significativement le contenu écrit du site doit être révisé ou retiré — pas l'inverse.

---

## 7. Calendrier de production suggéré

Si vous produisez la série en plusieurs sessions :

| Session | Épisodes | Justification |
|---|---|---|
| Session 1 | EP01, EP02 | Plus simples, valident le workflow |
| Session 2 | EP03, EP04 | Technologies — sources nombreuses, attention à la confusion |
| Session 3 | EP05, EP06 | Gouvernance — vérifier rigoureusement les obligations légales citées |
| Session 4 | EP07 | Capstone — épisode le plus dense, prévoir 2h |
| Session 5 | EP08, EP09 | Application + RH — attention au discours sur l'emploi |
| Session 6 | EP10 | Synthèse — produit en dernier pour pouvoir s'appuyer sur les autres |

Total : **~6 sessions** soit ~10-12 heures de production.

---

## 8. Pour aller plus loin

- Consulter les fiches détaillées par épisode dans `docs/podcasts/briefs/ep-NN-slug.md`
- Page de production publique : `/fr/podcasts/production/`
- Repo GitHub pour signaler une amélioration du workflow ou un épisode qui dérive

---

*Dernière mise à jour : 2026-05-03 — version initiale (Phase 6 sub-tour 2)*
