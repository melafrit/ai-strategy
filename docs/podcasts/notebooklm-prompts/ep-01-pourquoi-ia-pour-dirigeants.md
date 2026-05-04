# Prompt NotebookLM — Épisode 01

> **Pourquoi l'IA pour les dirigeants — au-delà du buzz**
> Cadrage stratégique IA · 12-15 min · français professionnel

---

## 1. Documents à charger dans le notebook

Limite stricte NotebookLM : 5 à 8 sources max. Au-delà, la qualité narrative décline.

**3 sources obligatoires (PDF imprimés depuis le site via `Ctrl+P` → "Enregistrer en PDF") :**

1. Module 1 → `/fr/modules/01-introduction-ia/` → `01-module-introduction-ia.pdf`
2. Glossaire → `/fr/glossaire/` → `02-glossaire.pdf`
3. Cas Takeda × MIT CCI → `/fr/cas/takeda-superminds/` → `03-cas-takeda.pdf`

**2 sources web recommandées (URL collée comme source "Site Web") :**

4. `mitsloan.mit.edu/ideas-made-to-matter/what-business-leaders-need-to-know-about-artificial-intelligence`
5. `ocw.mit.edu/courses/res-6-013-ai-101-fall-2021/`

Ne PAS charger : articles d'opinion, blogs non vérifiés, contenu spéculatif AGI, presse généraliste.

---

## 2. Procédure NotebookLM

1. `notebooklm.google.com` → nouveau notebook `AI Strategy — Ép. 01`
2. Ajouter les 5 sources via "Sources". Vérifier icône verte.
3. Studio → Audio Overview → Personnaliser
4. Coller le prompt §3 dans "Custom instructions"
5. Format **Deep Dive** (2 voix). Générer (5-15 min).
6. Écouter intégralement avec la grille §4.
7. Si 3+ critères KO → régénérer (parfois jusqu'à 3 fois).
8. Si OK → publication §5.

---

## 3. Prompt à coller dans "Custom instructions"

```
LANGUE : Français professionnel, accessible, sans anglicismes inutiles.

PUBLIC : Dirigeants, COMEX, responsables stratégie qui doivent prendre une décision IA dans les 3 mois.

DURÉE CIBLE : 12 à 15 minutes.

FORMAT : Conversation à deux voix Deep Dive. Hôte 1 pose les questions stratégiques d'un dirigeant. Hôte 2 apporte le cadre conceptuel sourcé.

STRUCTURE EN 6 CHAPITRES :
1. Introduction (~0:00) — pourquoi maintenant
2. IA étroite vs IA générale (~1:30) — désamorcer le mythe AGI
3. D'où vient la vague actuelle (~4:00) — deep learning + données + calcul depuis 2012
4. Intelligence collective humain × machine (~7:00) — cadre Thomas Malone / MIT CCI, illustré par Takeda
5. Trois questions du dirigeant (~10:00) — processus, valeur, risque
6. Conclusion (~13:00) — par où commencer

À RETENIR (l'épisode doit faire ressortir ces 6 points) :
- L'IA actuelle est essentiellement étroite, spécialisée par tâche, pas générale
- La vague depuis 2012 vient du deep learning + données massives + calcul, pas d'une percée en raisonnement
- L'intelligence collective humain × machine est plus puissante que "remplacer l'humain"
- Avant d'investir : processus métier précis, valeur mesurable, risque maîtrisable
- Les pires erreurs de cadrage IA se font au COMEX, pas dans les équipes techniques
- Commencer par la stratégie, pas par la technologie

INSTRUCTIONS SPÉCIFIQUES :
- Cadrage business-first, non technique. Pas d'algorithmes
- Si une affirmation n'est pas dans les sources, ne pas la formuler
- Citer Thomas Malone et le MIT Center for Collective Intelligence par leur nom complet
- Le cas Takeda doit être incarné sur 90 secondes minimum, pas mentionné en passant
- Conclusion actionnable : l'auditeur repart avec 2 à 3 actions concrètes

CONTRAINTES STRICTES :
- NE PAS spéculer sur AGI ou "IA superintelligente". Rester dans l'IA actuelle
- NE PAS citer Sam Altman, OpenAI, DeepMind sauf s'ils apparaissent dans les sources
- NE PAS inventer de chiffres précis — privilégier les ordres de grandeur
- NE PAS inventer d'études, chercheurs, noms d'entreprises
```

---

## 4. Grille qualité (valider 6/8 minimum)

1. Durée 10-17 min (80-120% de 13 min cible)
2. Zéro fait inventé : noms, chiffres, dates traçables aux sources
3. Concepts corrects : pas de confusion étroite/générale, ML/deep learning
4. Cas Takeda incarné sur 1-2 min, pas survolé
5. Pas de dérive AGI ni spéculation futuriste
6. Conclusion actionnable : 2-3 prises concrètes
7. Pas de répétitions excessives : dialogue paraphrase
8. Anglicismes raisonnables ("machine learning" OK, "leverage delivery" KO)

→ 3+ critères KO = régénérer (voir §6 plan B)

---

## 5. Après validation : publication

1. Télécharger le MP3 → renommer `ep-01-pourquoi-ia-pour-dirigeants.mp3`
2. Transcrire : `whisper file.mp3 --model large-v3 --language fr`
3. Structurer transcript Markdown avec chapitres timestampés
4. Copier MP3 → `public/podcasts/` ; transcript → même dossier
5. Éditer `src/content/podcasts.ts` : `status: 'published'` + `audioFile` + `transcriptFile`
6. Ajuster `chapters[].time` aux timestamps réels du MP3
7. Commit + push

---

## 6. Plan B si génération insatisfaisante

- **Trop académique** → ajouter cas Stripe Radar comme 6e source
- **Trop technique** → durcir "non technique" dans le prompt et regénérer
- **Takeda survolé** → ajouter : "Consacrer 90 sec minimum au cas Takeda, citer Thomas Malone"
- **Voix mécaniques** → générer en anglais puis revenir au français corrige parfois

---

*Voir aussi : `docs/podcasts/production-workflow.md` et `docs/podcasts/briefs/ep-01-*.md`.*
