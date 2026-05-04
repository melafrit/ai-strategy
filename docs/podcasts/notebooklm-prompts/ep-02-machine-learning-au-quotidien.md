# Prompt NotebookLM — Épisode 02

> **Machine Learning au quotidien — Stripe Radar et le dépistage MIT**
> ML supervisé en production · 12-15 min · français professionnel

---

## 1. Documents à charger dans le notebook

Limite stricte NotebookLM : 5 à 8 sources. Au-delà, la qualité narrative décline.

**4 sources obligatoires (PDF imprimés via `Ctrl+P`) :**

1. Module 2 → `/fr/modules/02-machine-learning/`
2. Cas Stripe Radar → `/fr/cas/stripe-radar/`
3. Cas MIT Mirai (Barzilay) → `/fr/cas/mit-barzilay-cancer/`
4. Glossaire → `/fr/glossaire/`

**2 sources web recommandées (URL collée comme source "Site Web") :**

5. `stripe.com/fr-ca/guides/primer-on-machine-learning-for-fraud-protection`
6. `news.mit.edu/2021/robust-artificial-intelligence-tools-predict-future-cancer-0128`

Ne PAS charger : tutoriels Python, notebooks Kaggle, articles techniques sur l'algorithmie pure (XGBoost, gradient boosting), benchmarks. Le sujet est business, pas algorithmie.

---

## 2. Procédure NotebookLM

1. `notebooklm.google.com` → nouveau notebook `AI Strategy — Ép. 02`
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

PUBLIC : Responsables métier, chefs de projet IA, consultants. Veulent comprendre quand le ML supervisé est la bonne réponse — pas comment l'implémenter.

DURÉE CIBLE : 12 à 15 minutes.

FORMAT : Conversation à deux voix Deep Dive. Hôte 1 = chef de projet ("comment je sais si c'est pertinent ?"). Hôte 2 = réponse cadrée par les cas réels.

STRUCTURE EN 6 CHAPITRES :
1. Intro (~0:00) — pourquoi le ML reste central malgré la GenAI
2. Stripe Radar (~1:30) — fraude bancaire en temps réel
3. Déséquilibre de classes (~5:00) — fraude vs transactions normales
4. Mirai au MIT (~8:00) — détection précoce du cancer du sein
5. Équité, biais, sous-groupes (~11:00) — gouvernance critique
6. Quand choisir le ML supervisé (~13:30) — décision pragmatique

À RETENIR (l'épisode doit faire ressortir ces 6 points) :
- Le ML supervisé classique reste la majorité des cas d'usage IA en production
- Stripe Radar : ML temps réel sur déséquilibre de classes massif (fraude << transactions)
- Mirai (MIT, équipe Regina Barzilay) : prédiction du risque cancer 5 ans à l'avance
- Trois questions critiques avant un projet ML : qualité des données, équité par sous-groupes, suivi des dérives
- Interprétabilité partielle ne disqualifie pas — elle conditionne le déploiement (humain dans la boucle)
- Une métrique unique tue : matrice de confusion + métriques par sous-groupes

INSTRUCTIONS SPÉCIFIQUES :
- Articulation technique × décision métier, pas détails algorithmiques
- Stripe Radar et Mirai chacun incarnés 2 min minimum
- Citer Regina Barzilay et MIT CSAIL par leur nom complet
- Mirai : insister articulation radiologue × modèle, pas remplacement

CONTRAINTES STRICTES :
- NE PAS expliquer XGBoost, random forest, gradient boosting ni aucun algorithme
- NE PAS donner de chiffres précis sauf si dans les sources
- NE PAS confondre ML supervisé et GenAI — la distinction est centrale
- NE PAS inventer de chiffres de fraude ni de chiffres médicaux
- NE PAS spéculer sur d'autres applications médicales que celles dans les sources
```

---

## 4. Grille qualité (valider 6/8 minimum)

1. Durée 10-17 min
2. Zéro fait inventé : noms, chiffres, dates traçables aux sources
3. Concepts corrects : pas de confusion ML supervisé / GenAI
4. Stripe Radar et Mirai chacun incarnés sur 2 min minimum
5. Pas d'algorithmie : auditeur métier comprend tout sans bagage technique
6. Équité et biais traités sérieusement, pas en passant
7. Conclusion actionnable : 2-3 questions à poser avant un projet ML
8. Anglicismes raisonnables ("machine learning" OK, "tuner les hyperparamètres" KO)

→ 3+ critères KO = régénérer (voir §6 plan B)

---

## 5. Après validation : publication

1. Télécharger MP3 → renommer `ep-02-machine-learning-au-quotidien.mp3`
2. Transcrire : `whisper file.mp3 --model large-v3 --language fr`
3. Structurer transcript Markdown avec chapitres timestampés
4. Copier MP3 → `public/podcasts/` ; transcript → même dossier
5. Éditer `src/content/podcasts.ts` : `status: 'published'` + `audioFile` + `transcriptFile`
6. Ajuster `chapters[].time` aux timestamps réels du MP3
7. Commit + push

---

## 6. Plan B si génération insatisfaisante

- **Trop technique** → durcir "pas d'algorithme" ; retirer source web technique
- **Stripe ou Mirai survolé** → ajouter "Consacrer 2 min minimum à chacun des 2 cas"
- **Faux symétrie cas** → préciser "Stripe = volume/temps réel ; Mirai = enjeu vital/expertise"
- **Voix mécaniques** → générer en anglais puis revenir au français

---

*Voir : `production-workflow.md`, `briefs/ep-02-*.md`.*
