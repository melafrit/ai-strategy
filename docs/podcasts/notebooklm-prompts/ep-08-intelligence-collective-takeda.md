# Prompt NotebookLM — Épisode 08

> **Intelligence collective humain × machine — l'approche Takeda**
> Au-delà du débat IA-vs-humain · 12-15 min · français professionnel

---

## 1. Documents à charger dans le notebook

Limite stricte NotebookLM : 5 à 8 sources. Au-delà, la qualité narrative décline.

**5 sources obligatoires (PDF imprimés via `Ctrl+P`) :**

1. Module 1 → `/fr/modules/01-introduction-ia/`
2. Module 6 → `/fr/modules/06-futur-ia/`
3. Cas Takeda × MIT CCI Superminds → `/fr/cas/takeda-superminds/`
4. Cas MIT IDE → `/fr/cas/mit-ide/`
5. Glossaire → `/fr/glossaire/`

**2 sources web recommandées (URL collée comme source "Site Web") :**

6. `cci.mit.edu/generative-ai-and-collective-intelligence/`
7. `cci.mit.edu/takeda-superminds-program/`

Ne PAS charger : articles "AI will replace 40% of jobs", livres futuristes spéculatifs, contenu marketing RH "augmented worker", études McKinsey/Gartner sans méthodologie publique. Sujet = recherche MIT et application concrète.

---

## 2. Procédure NotebookLM

1. `notebooklm.google.com` → notebook `AI Strategy — Ép. 08`
2. Ajouter les 7 sources via "Sources". Vérifier icône verte.
3. Studio → Audio Overview → Personnaliser
4. Coller le prompt §3 dans "Custom instructions"
5. Format **Deep Dive** (2 voix). Générer (5-15 min).
6. Écouter avec la grille §4. Si 3+ KO → régénérer.
7. Si OK → publication §5.

---

## 3. Prompt à coller dans "Custom instructions"

```
LANGUE : Français professionnel, accessible, sans jargon RH ou conseil.

PUBLIC : Dirigeants RH, responsables transformation, consultants en organisation. Veulent dépasser le débat "remplacer vs augmenter".

DURÉE CIBLE : 12 à 15 minutes.

FORMAT : Deep Dive (2 voix). Hôte 1 = DRH inquiète des effets de l'IA sur les équipes. Hôte 2 = pair qui a expérimenté la composition humain × IA, partage retours.

STRUCTURE EN 6 CHAPITRES :
1. Intro (~0:00) — au-delà du débat IA-vs-humain
2. Superminds (~1:40) — le concept Thomas Malone
3. Takeda × MIT CCI (~4:40) — un cas concret en pharma
4. Décomposition de tâches en équipes hybrides (~8:00)
5. MIT IDE et l'avenir du travail (~11:00)
6. Principes pratiques pour votre organisation (~13:40)

À RETENIR (l'épisode doit faire ressortir ces 6 points) :
- L'intelligence collective humain × machine est plus puissante que "IA vs humain"
- Takeda Superminds : programme de recherche MIT CCI sur problèmes pharma complexes
- Décomposition de tâches : attribuer chaque tâche selon les forces relatives
- Le manager d'une équipe humain × IA développe des compétences nouvelles
- MIT IDE : recherche systématique sur l'avenir du travail à l'ère de l'IA
- Penser organisation et processus AVANT technologie

INSTRUCTIONS SPÉCIFIQUES :
- Citer Thomas Malone et MIT Center for Collective Intelligence par leur nom complet
- Citer Takeda Pharmaceuticals et le programme Superminds par leur nom
- Cas Takeda incarné sur 3 min minimum — c'est l'exemple central
- Décomposition de tâches : illustrer avec 1-2 exemples concrets (R&D pharma, conception d'essais)
- Conclusion actionnable : 3 principes pour concevoir une équipe humain × IA

CONTRAINTES STRICTES :
- NE PAS dire "l'IA va remplacer X% des emplois" — ce n'est pas le cadre MIT CCI
- NE PAS spéculer sur des chiffres d'emplois (sources non fiables)
- NE PAS opposer "humain" et "machine" : le cadre c'est leur combinaison
- NE PAS faire l'angélisme : reconnaître que certaines tâches disparaîtront
- NE PAS sortir du périmètre Takeda/MIT CCI pour parler d'autres entreprises
```

---

## 4. Grille qualité (valider 6/8 minimum)

1. Durée 10-17 min
2. Zéro fait inventé : noms, chiffres, dates traçables aux sources
3. Cadre Superminds clairement présenté (pas juste mentionné)
4. Cas Takeda incarné sur 3 min minimum
5. MIT CCI et Thomas Malone cités par leur nom complet
6. Décomposition de tâches illustrée par 1-2 exemples concrets
7. Conclusion actionnable : 3 principes opérationnels
8. Anglicismes raisonnables ("Superminds" OK car nom propre, "augmented workforce" KO)

→ 3+ KO = régénérer (voir §6)

---

## 5. Après validation : publication

1. Télécharger MP3 → renommer `ep-08-intelligence-collective-takeda.mp3`
2. Transcrire : `whisper file.mp3 --model large-v3 --language fr`
3. Structurer transcript Markdown avec chapitres timestampés
4. Copier MP3 → `public/podcasts/` ; transcript → même dossier
5. Éditer `src/content/podcasts.ts` : `status: 'published'` + `audioFile` + `transcriptFile`
6. Ajuster `chapters[].time` aux timestamps réels du MP3
7. Commit + push

---

## 6. Plan B si génération insatisfaisante

- **Trop philosophique** → durcir "cas concret Takeda 3 min minimum"
- **Cadre IA-vs-humain reproduit** → "Le cadre est humain × machine, pas humain ou machine"
- **Décomposition floue** → "Donner 1 exemple concret pharma de décomposition de tâches"
- **Voix mécaniques** → générer en anglais puis revenir au français

---

*Voir : `production-workflow.md`, `briefs/ep-08-*.md`.*
