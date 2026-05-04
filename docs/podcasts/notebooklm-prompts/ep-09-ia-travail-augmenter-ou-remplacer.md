# Prompt NotebookLM — Épisode 09

> **IA et travail — augmenter ou remplacer ? Les travaux de David Autor**
> Recherches MIT contre discours simplificateurs · 13-16 min · français professionnel

---

## 1. Documents à charger dans le notebook

Limite stricte NotebookLM : 5 à 8 sources. Au-delà, la qualité narrative décline.

**4 sources obligatoires (PDF imprimés via `Ctrl+P`) :**

1. Module 5 → `/fr/modules/05-ia-societe/`
2. Module 6 → `/fr/modules/06-futur-ia/`
3. Cas MIT IDE → `/fr/cas/mit-ide/`
4. Hub de ressources → `/fr/ressources/`

**2 sources web recommandées (URL collée comme source "Site Web") :**

5. `news.mit.edu/2024/does-technology-help-or-hurt-employment-0401`
6. `nber.org/papers/w31161`

Ne PAS charger : prédictions Goldman Sachs/McKinsey sur "300M d'emplois remplacés", articles "future of work" de cabinets de conseil, livres futuristes (Yuval Harari sur l'IA), opinions LinkedIn. Sujet = recherche empirique MIT/NBER, pas prédictions.

---

## 2. Procédure NotebookLM

1. `notebooklm.google.com` → notebook `AI Strategy — Ép. 09`
2. Ajouter les 6 sources via "Sources". Vérifier icône verte.
3. Studio → Audio Overview → Personnaliser
4. Coller le prompt §3 dans "Custom instructions"
5. Format **Deep Dive** (2 voix). Générer (5-15 min).
6. Écouter avec la grille §4. Si 3+ KO → régénérer.
7. Si OK → publication §5.

---

## 3. Prompt à coller dans "Custom instructions"

```
LANGUE : Français professionnel, accessible, sans jargon académique excessif.

PUBLIC : DRH, responsables formation, consultants RH, dirigeants qui doivent anticiper l'impact IA sur les métiers.

DURÉE CIBLE : 13 à 16 minutes.

FORMAT : Deep Dive (2 voix). Hôte 1 = DRH qui doit présenter au COMEX. Hôte 2 = chercheur/consultant qui partage les résultats empiriques cadrés.

STRUCTURE EN 6 CHAPITRES :
1. Intro (~0:00) — au-delà des discours simplificateurs
2. David Autor sur l'emploi (~1:40)
3. "Generative AI at Work" NBER (~5:20) — ce que disent les chiffres
4. Métiers gagnants, métiers à recomposer (~9:00)
5. Implications RH concrètes (~12:00)
6. Horizon 5 ans vs précipitation (~14:30)

À RETENIR (l'épisode doit faire ressortir ces 6 points) :
- L'IA déplace des tâches plus que des emplois entiers — impact différentiel
- David Autor (MIT) : effet net positif possible si organisations savent recomposer
- "Generative AI at Work" (NBER) : travailleurs moins expérimentés bénéficient le plus
- Certains métiers voient leur valeur augmenter, expertise humaine plus précieuse
- DRH doit investir massivement dans la formation continue — pas le remplacement
- Horizon de transformation : 5 ans, pas 5 mois

INSTRUCTIONS SPÉCIFIQUES :
- Citer David Autor par son nom, MIT par MIT, NBER par "National Bureau of Economic Research"
- Citer Brynjolfsson, Li, Raymond pour le paper NBER w31161
- Si chiffre, dire "selon le paper de Brynjolfsson et al." (ne pas inventer)
- Maintenir la nuance académique : "ça dépend des contextes", pas réponses simplistes
- Conclusion actionnable : 3 actions RH à engager dès cette année

CONTRAINTES STRICTES :
- NE PAS dire "X% d'emplois remplacés" ni citer Goldman Sachs/McKinsey
- NE PAS comparer avec révolution industrielle ("comme avant"/"pas comme avant") — sortie du périmètre
- NE PAS donner d'avis politique sur la régulation du travail
- NE PAS spéculer sur les métiers spécifiques disparaissant (sources non fiables)
- NE PAS minimiser : reconnaître que des transformations sont difficiles
```

---

## 4. Grille qualité (valider 6/8 minimum)

1. Durée 11-19 min
2. Zéro fait inventé : noms, chiffres, dates traçables aux sources
3. David Autor + Brynjolfsson cités par leur nom complet
4. Distinction "tâches" vs "emplois entiers" claire dès chapitre 2
5. Résultat NBER (moins expérimentés bénéficient le plus) cité
6. Pas de prédictions chiffrées d'emplois remplacés
7. Conclusion actionnable : 3 actions RH cette année
8. Anglicismes raisonnables ("upskilling" OK, "future of work" KO)

→ 3+ KO = régénérer (voir §6)

---

## 5. Après validation : publication

1. Télécharger MP3 → renommer `ep-09-ia-travail-augmenter-ou-remplacer.mp3`
2. Transcrire : `whisper file.mp3 --model large-v3 --language fr`
3. Structurer transcript Markdown avec chapitres timestampés
4. Copier MP3 → `public/podcasts/` ; transcript → même dossier
5. Éditer `src/content/podcasts.ts` : `status: 'published'` + `audioFile` + `transcriptFile`
6. Ajuster `chapters[].time` aux timestamps réels du MP3
7. Commit + push

---

## 6. Plan B si génération insatisfaisante

- **Trop académique** → durcir "DRH cible, pas chercheur"
- **Chiffres alarmistes** → "Aucun chiffre d'emplois remplacés ; nuancer toujours"
- **Tâches/emplois confondus** → "Distinction tâches vs emplois entiers = thèse centrale Autor"
- **Voix mécaniques** → générer en anglais puis revenir au français

---

*Voir : `production-workflow.md`, `briefs/ep-09-*.md`.*
