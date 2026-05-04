# Prompt NotebookLM — Épisode 04

> **Robotique et cobots — Amazon, Universal Robots, PME française**
> Automatisation physique pour ETI/PME · 12-15 min · français professionnel

---

## 1. Documents à charger dans le notebook

Limite stricte NotebookLM : 5 à 8 sources. Au-delà, la qualité narrative décline.

**4 sources obligatoires (PDF imprimés via `Ctrl+P`) :**

1. Module 4 → `/fr/modules/04-robotique/`
2. Cas Amazon Robotics + DeepFleet → `/fr/cas/amazon-robotics/`
3. Cas Universal Robots → `/fr/cas/universal-robots/`
4. Capstone (exemple PME Métallurgie de Précision SAS) → `/fr/capstone/`

**2 sources web recommandées (URL collée comme source "Site Web") :**

5. `aboutamazon.com/news/operations/amazon-million-robots-ai-foundation-model`
6. `iso.org/standard/62996.html`

Ne PAS charger : vidéos Boston Dynamics qui dansent, articles spéculatifs sur les humanoïdes, marketing constructeurs (FANUC, ABB), benchmarks robotiques académiques. Sujet = robotique opérationnelle accessible aux ETI/PME, pas la prospective.

---

## 2. Procédure NotebookLM

1. `notebooklm.google.com` → notebook `AI Strategy — Ép. 04`
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

PUBLIC : Dirigeants d'industries de production, responsables d'opérations, consultants en transformation industrielle. Pas Amazon — des ETI/PME françaises.

DURÉE CIBLE : 12 à 15 minutes.

FORMAT : Deep Dive (2 voix). Hôte 1 = dirigeant d'ETI industrielle ("ça vaut le coup pour nous, 200 personnes ?"). Hôte 2 = consultant qui a accompagné des projets, partage retours.

STRUCTURE EN 6 CHAPITRES :
1. Intro (~0:00) — la robotique sort des géants
2. Amazon Robotics et DeepFleet (~1:30) — l'échelle géante, contre-exemple
3. Universal Robots (~5:00) — la cobotique démocratisée
4. ISO/TS 15066 et la sécurité humain-robot (~8:00)
5. PME française fictive (~10:00) — comment cadrer un projet
6. Pièges et bonnes pratiques (~13:00)

À RETENIR (l'épisode doit faire ressortir ces 6 points) :
- Amazon DeepFleet : foundation model pour coordonner 1+ million de robots
- Universal Robots : démocratisation, 80-150 k€ pour un poste robotisé en PME
- ISO/TS 15066 définit 4 méthodes de collaboration humain-robot — référence sécurité
- ROI typique 12-24 mois sur postes pénibles bien ciblés
- Succès dépend autant du dialogue social et formation que du robot
- Piège fréquent : robotiser pour la performance d'affichage, pas pour la valeur réelle

INSTRUCTIONS SPÉCIFIQUES :
- Amazon = contre-exemple ("voici ce que vous N'avez PAS besoin"). Universal Robots = modèle réaliste pour l'ETI
- Citer Métallurgie de Précision SAS en précisant explicitement "exemple fictif construit pour le programme"
- Citer Universal Robots et la norme ISO/TS 15066 par leur nom complet
- Ordres de grandeur (80-150 k€, 12-24 mois) OK car dans les sources
- Conclusion actionnable : 3 questions à poser avant un projet cobotique

CONTRAINTES STRICTES :
- NE PAS spéculer sur Tesla Optimus, Figure, humanoïdes — hors sujet
- NE PAS faire la promo de constructeurs (FANUC, ABB, KUKA) hors sources
- NE PAS sous-estimer le dialogue social : le traiter sérieusement
- NE PAS présenter Métallurgie de Précision SAS comme une PME réelle
- NE PAS minimiser les pièges : ils sont la moitié de l'épisode
```

---

## 4. Grille qualité (valider 6/8 minimum)

1. Durée 10-17 min
2. Zéro fait inventé : noms, chiffres, dates traçables aux sources
3. Distinction Amazon (contre-exemple) vs Universal Robots (modèle ETI)
4. ISO/TS 15066 cité, pas juste "des normes"
5. Métallurgie de Précision SAS signalée comme fictive
6. Dialogue social et formation traités, pas en passant
7. Conclusion actionnable : 3 questions à poser
8. Anglicismes raisonnables ("cobot" OK, "shop floor leverage" KO)

→ 3+ KO = régénérer (voir §6)

---

## 5. Après validation : publication

1. Télécharger MP3 → renommer `ep-04-robotique-amazon-ur-pme.mp3`
2. Transcrire : `whisper file.mp3 --model large-v3 --language fr`
3. Structurer transcript Markdown avec chapitres timestampés
4. Copier MP3 → `public/podcasts/` ; transcript → même dossier
5. Éditer `src/content/podcasts.ts` : `status: 'published'` + `audioFile` + `transcriptFile`
6. Ajuster `chapters[].time` aux timestamps réels du MP3
7. Commit + push

---

## 6. Plan B si génération insatisfaisante

- **Trop "wow Amazon"** → durcir "Amazon = contre-exemple" et regénérer
- **PME survolée** → "Consacrer 2 min minimum à la démarche fictive PME"
- **Norme ISO oubliée** → "Citer explicitement ISO/TS 15066 et ses 4 méthodes"
- **Voix mécaniques** → générer en anglais puis revenir au français

---

*Voir : `production-workflow.md`, `briefs/ep-04-*.md`.*
