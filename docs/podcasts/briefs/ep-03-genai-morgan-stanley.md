# Brief de production — Épisode 03

## GenAI en entreprise — comment Morgan Stanley a fait

> *Au-delà de ChatGPT public : ce qu'il faut vraiment construire pour déployer la GenAI sérieusement en entreprise.*

| Méta | Valeur |
|---|---|
| Numéro | 03 |
| Thème | technology |
| Durée cible | 13-16 min |
| Statut | `planned` |
| Slug | `ep-03-genai-morgan-stanley` |

**Public visé** : Responsables data, CIO, chefs de projet IA qui doivent transformer un essai GenAI en valeur métier durable.

---

## 1. Synopsis éditorial

L'IA générative attire toutes les attentions, mais 90 % du travail de déploiement n'est pas dans le modèle — il est dans l'écosystème autour. Cet épisode explore en profondeur le cas Morgan Stanley, qui a déployé deux assistants GenAI distincts (AskResearchGPT pour la recherche financière interne, Debrief pour la prise de notes de réunion client) en collaboration avec OpenAI.

Les animateurs décortiquent l'architecture RAG (Retrieval-Augmented Generation) qui alimente AskResearchGPT avec le corpus interne de recherche, les garde-fous mis en place pour éviter les hallucinations sur des données sensibles, le processus de gouvernance qui valide chaque cas d'usage, et — peut-être le plus instructif — l'investissement RH massif pour former les conseillers à utiliser efficacement ces outils.

Le cas GitHub × Accenture sert de contre-point : une mesure rigoureuse de l'impact réel de Copilot sur la productivité des développeurs avec groupe traitement / contrôle. Méthodologie transposable à tout pilote GenAI sérieux.

---

## 2. À retenir (5-7 takeaways)

1. 20-30 % de la valeur d'un projet GenAI vient du LLM ; 70-80 % vient de l'écosystème (RAG, garde-fous, gouvernance, RH)
2. Morgan Stanley a investi massivement dans RAG sur corpus interne pour éviter les hallucinations
3. AskResearchGPT et Debrief : deux assistants distincts pour deux cas d'usage distincts (pas un assistant universel)
4. GitHub × Accenture : méthodologie de pilote avec groupe traitement / contrôle = standard transposable
5. La conduite du changement et la formation pèsent autant que la technique
6. Décomposer un workflow en tâches AVANT de choisir la techno (Module 3 §3)

---

## 3. Chapitres prévisionnels

| Time (mm:ss) | Chapitre |
|---:|---|
| ~0:00 | Introduction — au-delà du buzz |
| ~1:40 | Morgan Stanley — AskResearchGPT et son architecture RAG |
| ~5:20 | Debrief — l'assistant pour les rendez-vous client |
| ~8:20 | Garde-fous, gouvernance, hallucinations |
| ~11:40 | GitHub × Accenture — comment mesurer l'impact réel |
| ~14:30 | Les 3 critères pour lancer un pilote GenAI sérieux |

> *Ces timestamps sont prévisionnels. Ils seront ajustés après génération réelle pour correspondre aux durées effectives du MP3 NotebookLM.*

---

## 4. Sources principales pour NotebookLM

Charger ces sources dans le notebook (PDFs imprimés depuis le print stylesheet du site, voir `docs/podcasts/production-workflow.md` §2.1) :

1. **Module 3 — IA générative en entreprise**  
   Source : `/fr/modules/03-ia-generative/`

2. **Cas Morgan Stanley**  
   Source : `/fr/cas/morgan-stanley/`

3. **Cas GitHub × Accenture**  
   Source : `/fr/cas/github-copilot-accenture/`

4. **Glossaire — LLM, foundation model, RAG, hallucination, prompt engineering**  
   Source : `/fr/glossaire/`

---

## 5. Sources complémentaires recommandées

Sources externes vérifiables à ajouter en complément (limite stricte 8 sources totales) :

1. **Morgan Stanley — Wealth Management AI page**  
   URL : `morganstanley.com/about-us/technology/ai`  
   Usage : *source primaire du cas*

2. **GitHub × Accenture research blog**  
   URL : `github.blog/news-insights/research/...`  
   Usage : *méthodologie de mesure d'impact*

---

## 6. Notes de focus pour la génération

> Distinguer clairement ce qui dépend du modèle (peu) et ce qui dépend de l'écosystème (beaucoup). Démystifier sans dévaloriser la GenAI.

**Instructions à coller dans le champ « Custom instructions » de NotebookLM** (template universel adapté à cet épisode) :

```
LANGUE : Français professionnel, accessible, sans anglicismes inutiles.

PUBLIC : Responsables data, CIO, chefs de projet IA qui doivent transformer un essai GenAI en valeur métier durable.

DURÉE CIBLE : 13-16 min.

STRUCTURE NARRATIVE :
1. Introduction — au-delà du buzz
2. Morgan Stanley — AskResearchGPT et son architecture RAG
3. Debrief — l'assistant pour les rendez-vous client
4. Garde-fous, gouvernance, hallucinations
5. GitHub × Accenture — comment mesurer l'impact réel
6. Les 3 critères pour lancer un pilote GenAI sérieux

À RETENIR (l'épisode doit faire ressortir ces points) :
- 20-30 % de la valeur d'un projet GenAI vient du LLM ; 70-80 % vient de l'écosystème (RAG, garde-fous, gouvernance, RH)
- Morgan Stanley a investi massivement dans RAG sur corpus interne pour éviter les hallucinations
- AskResearchGPT et Debrief : deux assistants distincts pour deux cas d'usage distincts (pas un assistant universel)
- GitHub × Accenture : méthodologie de pilote avec groupe traitement / contrôle = standard transposable
- La conduite du changement et la formation pèsent autant que la technique
- Décomposer un workflow en tâches AVANT de choisir la techno (Module 3 §3)

INSTRUCTIONS SPÉCIFIQUES :
Distinguer clairement ce qui dépend du modèle (peu) et ce qui dépend de l'écosystème (beaucoup). Démystifier sans dévaloriser la GenAI.

CONTRAINTES :
- Citer chaque source par son nom complet la première fois
- Ne pas inventer de chiffres précis — privilégier les ordres de grandeur
- Ne pas inventer d'études ou de chercheurs
- Si une affirmation n'est pas dans les sources, ne pas la formuler
```

---

## 7. Points de vigilance à la génération

- L'épisode doit faire ressortir la thèse centrale : 20-30% de la valeur vient du LLM, 70-80% vient de l'écosystème (RAG, gouvernance, RH, formation). Si NotebookLM glorifie le LLM, régénérer.
- Le RAG est un concept central. Vérifier que NotebookLM l'explique correctement (récupération depuis un corpus interne pour ancrer les réponses dans des données fiables, éviter les hallucinations).
- Ne pas mentionner « ChatGPT » comme produit — l'épisode parle de déploiements GenAI en entreprise, pas de l'outil grand public.

---

## 8. Plan B en cas de résultat insatisfaisant

> Si la distinction RAG / fine-tuning / prompt engineering devient floue, simplifier en n'évoquant que RAG comme concept structurant.

---

## 9. Références croisées du parcours

**Modules associés** : M3


**Études de cas** : morgan-stanley, github-copilot-accenture


**Termes du glossaire** : llm, foundation-model, rag, hallucination, prompt-engineering

---

## 10. Checklist de publication

- [ ] Sources principales chargées dans NotebookLM
- [ ] Sources complémentaires chargées si applicable
- [ ] Custom instructions copiées et adaptées
- [ ] Audio Overview généré (5-15 min)
- [ ] 8 critères de qualité validés (voir workflow §4.1)
- [ ] Régénération si nécessaire
- [ ] MP3 sauvegardé en local
- [ ] Transcript Whisper généré
- [ ] MP3 copié dans `public/podcasts/ep-03-genai-morgan-stanley.mp3`
- [ ] Transcript copié dans `public/podcasts/ep-03-genai-morgan-stanley-transcript.md`
- [ ] `src/content/podcasts.ts` mis à jour : `status: 'published'`, `audioFile`, `transcriptFile`
- [ ] Chapters ajustés aux timestamps réels si différents
- [ ] Build local OK
- [ ] Commit avec message structuré

---

*Brief généré automatiquement à partir de `src/content/podcasts.ts` — Phase 6 sub-tour 2.*
*Voir aussi le workflow général : `docs/podcasts/production-workflow.md`.*
