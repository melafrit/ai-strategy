<!--
  Template de transcript — à dupliquer pour chaque épisode publié.
  
  Procédure recommandée :
  1. Générer l'audio NotebookLM et télécharger le MP3
  2. Lancer Whisper local : 
     whisper {slug}.mp3 --language fr --model large-v3 --output_format txt
  3. Copier ce template, remplir l'en-tête, coller le contenu Whisper
  4. Restructurer en chapitres avec timestamps en synchronisant 
     l'écoute du MP3 avec le texte Whisper
  5. Relire pour corrections de transcription (Whisper se trompe parfois 
     sur les noms propres techniques : « CSAIL », « Mirai », etc.)
  6. Sauvegarder sous public/podcasts/{slug}-transcript.md
-->

# Transcript — Épisode {NN} : {Titre complet de l'épisode}

> **Durée** : {mm:ss}  
> **Date de génération** : {YYYY-MM-DD}  
> **Outil de génération audio** : Google NotebookLM (Audio Overview « Deep Dive »)  
> **Outil de transcription** : OpenAI Whisper (large-v3)  
> **Sources principales chargées** :
> - {Source 1 — titre + URL}
> - {Source 2 — titre + URL}
> - {Source 3 — titre + URL}

> **À propos de ce transcript**  
> Ce transcript a été produit automatiquement et relu pour corrections. Les voix des animateurs sont synthétiques (générées par NotebookLM). Le contenu vient des sources documentaires chargées dans le notebook au moment de la génération. Voir la [page production](https://github.com/melafrit/ai-strategy/blob/main/src/pages/fr/podcasts/production.astro) pour le workflow complet.

---

## Chapitre 1 — {titre du chapitre 1}

*[~00:00]*

[**Hôte 1**] : {transcription...}

[**Hôte 2**] : {transcription...}

---

## Chapitre 2 — {titre du chapitre 2}

*[~02:30]*

[**Hôte 1**] : {transcription...}

[**Hôte 2**] : {transcription...}

---

## Chapitre 3 — {titre du chapitre 3}

*[~05:15]*

{...}

---

## Chapitre 4 — {titre du chapitre 4}

*[~08:00]*

{...}

---

## Chapitre 5 — {titre du chapitre 5}

*[~11:00]*

{...}

---

## Chapitre 6 — {titre du chapitre 6}

*[~13:30]*

{...}

---

## Erratum (le cas échéant)

*Cette section est ajoutée a posteriori si une erreur factuelle est signalée et corrigée. Elle date la correction et précise ce qui a été modifié.*

- *YYYY-MM-DD* — Correction du chiffre cité au timestamp ~mm:ss : « X » → « Y », sur la base de {source}.

---

## Crédits

- **Production audio** : Google NotebookLM (Audio Overview)
- **Cadrage éditorial et validation qualité** : Mohamed El Afrit (auteur du parcours AI Strategy)
- **Transcription** : OpenAI Whisper (large-v3) + relecture humaine
- **Sources** : voir liste en en-tête. Toutes publiques et vérifiables.

**Licence** : CC BY-NC-SA 4.0. Réutilisation pédagogique encouragée à condition de citer la source et de redistribuer dans les mêmes conditions.

**Repository** : <https://github.com/melafrit/ai-strategy>
