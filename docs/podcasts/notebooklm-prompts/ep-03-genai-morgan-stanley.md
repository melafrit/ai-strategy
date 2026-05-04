# Prompt NotebookLM — Épisode 03

> **GenAI en entreprise — comment Morgan Stanley a fait**
> Au-delà du modèle : l'écosystème RAG · 13-16 min · français professionnel

---

## 1. Documents à charger dans le notebook

Limite stricte NotebookLM : 5 à 8 sources. Au-delà, la qualité narrative décline.

**4 sources obligatoires (PDF imprimés via `Ctrl+P`) :**

1. Module 3 → `/fr/modules/03-ia-generative/`
2. Cas Morgan Stanley → `/fr/cas/morgan-stanley/`
3. Cas GitHub × Accenture → `/fr/cas/github-copilot-accenture/`
4. Glossaire → `/fr/glossaire/`

**2 sources web recommandées (URL collée comme source "Site Web") :**

5. `morganstanley.com/about-us/technology/ai`
6. `github.blog/news-insights/research/research-quantifying-github-copilots-impact-in-the-enterprise-with-accenture/`

Ne PAS charger : démos ChatGPT grand public, articles "10 prompts magiques", contenus marketing OpenAI/Anthropic, benchmarks LLM. Sujet = déploiement entreprise, pas état de l'art.

---

## 2. Procédure NotebookLM

1. `notebooklm.google.com` → notebook `AI Strategy — Ép. 03`
2. Ajouter les 6 sources via "Sources". Vérifier icône verte.
3. Studio → Audio Overview → Personnaliser
4. Coller le prompt §3 dans "Custom instructions"
5. Format **Deep Dive** (2 voix). Générer (5-15 min).
6. Écouter avec la grille §4. Si 3+ KO → régénérer.
7. Si OK → publication §5.

---

## 3. Prompt à coller dans "Custom instructions"

```
LANGUE : Français professionnel, accessible, sans anglicismes inutiles.

PUBLIC : Responsables data, CIO, chefs de projet IA qui doivent transformer un essai GenAI en valeur métier durable.

DURÉE CIBLE : 13 à 16 minutes.

FORMAT : Deep Dive (2 voix). Hôte 1 = CIO sceptique ("on a un POC sympa, comment je passe en prod ?"). Hôte 2 = pair qui a déjà déployé, partage retours d'expérience cadrés.

STRUCTURE EN 6 CHAPITRES :
1. Intro (~0:00) — au-delà du buzz, pourquoi le déploiement est dur
2. AskResearchGPT (~1:40) — RAG sur corpus interne Morgan Stanley
3. Debrief (~5:20) — assistant rendez-vous client, cas distinct
4. Garde-fous, gouvernance, hallucinations (~8:20) — éviter les drames
5. GitHub × Accenture (~11:40) — mesurer l'impact réel (traitement/contrôle)
6. 3 critères pour lancer un pilote sérieux (~14:30)

À RETENIR (l'épisode doit faire ressortir ces 6 points) :
- 20-30% valeur GenAI vient du LLM ; 70-80% de l'écosystème (RAG, garde-fous, gouvernance, RH)
- Morgan Stanley a investi massivement dans RAG sur corpus interne pour éviter les hallucinations
- AskResearchGPT et Debrief : deux assistants distincts pour deux cas distincts
- GitHub × Accenture : pilote avec groupe traitement/contrôle = standard transposable
- Conduite du changement et formation pèsent autant que la technique
- Décomposer un workflow en tâches AVANT de choisir la techno

INSTRUCTIONS SPÉCIFIQUES :
- Distinguer modèle (peu de valeur) vs écosystème (beaucoup) : angle central
- Morgan Stanley et GitHub/Accenture chacun incarnés 2-3 min minimum
- Citer Morgan Stanley, OpenAI, GitHub, Accenture par leur nom complet
- Expliquer RAG simplement : "le modèle va chercher dans des documents internes avant de répondre"
- Conclusion actionnable : 3 questions à poser avant un pilote

CONTRAINTES STRICTES :
- NE PAS comparer GPT-4 vs Claude vs Llama — hors sujet
- NE PAS expliquer transformers, attention, embeddings — hors scope
- NE PAS donner de chiffres précis ROI/productivité sauf si dans les sources
- NE PAS suggérer ChatGPT public = solution entreprise — c'est l'erreur à démonter
- NE PAS minimiser hallucinations, fuites, biais — les traiter sérieusement
```

---

## 4. Grille qualité (valider 6/8 minimum)

1. Durée 11-19 min
2. Zéro fait inventé : noms, chiffres, dates traçables aux sources
3. Distinction modèle vs écosystème claire dès le 1er chapitre
4. RAG expliqué simplement, pas comme un terme marketing
5. Morgan Stanley + GitHub/Accenture chacun 2-3 min, incarnés
6. Garde-fous traités sérieusement — pas en passant
7. Conclusion actionnable : 3 critères pour lancer un pilote
8. Anglicismes raisonnables ("GenAI" OK, "shipper en prod" KO)

→ 3+ KO = régénérer (voir §6)

---

## 5. Après validation : publication

1. Télécharger MP3 → renommer `ep-03-genai-morgan-stanley.mp3`
2. Transcrire : `whisper file.mp3 --model large-v3 --language fr`
3. Structurer transcript Markdown avec chapitres timestampés
4. Copier MP3 → `public/podcasts/` ; transcript → même dossier
5. Éditer `src/content/podcasts.ts` : `status: 'published'` + `audioFile` + `transcriptFile`
6. Ajuster `chapters[].time` aux timestamps réels du MP3
7. Commit + push

---

## 6. Plan B si génération insatisfaisante

- **Trop "wow GenAI"** → durcir "démystifier sans dévaloriser"
- **Cas confondus** → "AskResearchGPT = recherche interne ; Debrief = notes client. NE PAS fusionner"
- **GitHub/Accenture survolé** → ajouter "Consacrer 2 min minimum à la méthodologie traitement/contrôle"
- **Voix mécaniques** → générer en anglais puis revenir au français

---

*Voir : `production-workflow.md`, `briefs/ep-03-*.md`.*
