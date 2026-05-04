# Prompt NotebookLM — Épisode 07

> **Construire votre roadmap IA — la méthode du capstone**
> 4 étapes vers une roadmap COMEX · 15-18 min · français professionnel

---

## 1. Documents à charger dans le notebook

Limite stricte NotebookLM : 5 à 8 sources. Au-delà, la qualité narrative décline.

**3 sources obligatoires (PDF imprimés via `Ctrl+P`) :**

1. Module 6 → `/fr/modules/06-futur-ia/`
2. Page Capstone (méthodologie + grille + exemple PME) → `/fr/capstone/`
3. Canvas Markdown téléchargeable → `/downloads/canvas-roadmap-ia-module-6.md`

**2 sources web recommandées (URL collée comme source "Site Web") :**

4. `mitsloan.mit.edu/ideas-made-to-matter/how-to-find-right-business-use-cases-generative-ai`
5. `oecd.org/fr/themes/principes-de-l-ia.html`

Ne PAS charger : templates de roadmap génériques de cabinets de conseil, articles "10 steps to AI strategy", decks de vendeurs IA. Sujet = méthode structurée.

---

## 2. Procédure NotebookLM

1. `notebooklm.google.com` → notebook `AI Strategy — Ép. 07`
2. Ajouter les 5 sources via "Sources". Vérifier icône verte.
3. Studio → Audio Overview → Personnaliser
4. Coller le prompt §3 dans "Custom instructions"
5. Format **Deep Dive** (2 voix). Générer (5-15 min).
6. Écouter avec la grille §4. Si 3+ KO → régénérer.
7. Si OK → publication §5.

---

## 3. Prompt à coller dans "Custom instructions"

```
LANGUE : Français professionnel, accessible, sans jargon de consulting.

PUBLIC : Dirigeants et consultants qui doivent produire ou auditer une roadmap IA pour leur organisation ou client.

DURÉE CIBLE : 15 à 18 min (épisode le plus dense).

FORMAT : Deep Dive (2 voix). Hôte 1 = consultant qui doit livrer une roadmap dans 4 semaines. Hôte 2 = pair expérimenté qui guide étape par étape.

STRUCTURE EN 6 CHAPITRES (4 étapes capstone + intro + clôture) :
1. Intro (~0:00) — le capstone, sommet du parcours
2. Étape 1 (~1:40) — Vision et maturité 8 dimensions
3. Étape 2 (~5:20) — Scénarios contrastés et actions robustes
4. Étape 3 (~9:00) — Use cases prioritaires V × F × R
5. Étape 4 (~12:20) — Plan 12-24 mois sur 5 dimensions
6. Grille 7×4 et défendabilité COMEX (~15:40)

À RETENIR (l'épisode doit faire ressortir ces 6 points) :
- Une vision IA défendable est spécifique, articule ambition / valeur / lien stratégique
- Diagnostic de maturité honnête sur 8 dimensions = base de toute roadmap crédible
- Scénarios contrastés évitent de parier sur un seul futur — actions robustes
- Use cases priorisés sur Valeur × Faisabilité × Risque, top 3 justifié explicitement
- Plan 12-24 mois sur 5 dimensions cohérentes + budget réaliste + 5 risques majeurs
- Grille 7×4 : passage en COMEX nécessite Solide sur 5/7 + Excellent sur 2/7

INSTRUCTIONS SPÉCIFIQUES :
- Citer Métallurgie de Précision SAS comme "exemple fictif construit pour le programme"
- 8 dimensions de maturité doivent être listées au moins une fois
- Les 5 dimensions du plan (vision/gouvernance/compétences/infra/KPI) idem
- Insister sur la défendabilité COMEX comme test de qualité
- Conclusion : 3 erreurs classiques à éviter dans une roadmap IA

CONTRAINTES STRICTES :
- NE PAS donner de chiffres précis de budget hors exemple PME fictive
- NE PAS présenter la méthode comme "la seule" — elle est une méthode parmi d'autres
- NE PAS confondre les 4 étapes capstone et les 5 dimensions du plan
- NE PAS passer trop vite sur l'étape 1 (vision/maturité) — c'est la fondation
- NE PAS minimiser le travail (15-30h annoncées dans le capstone)
```

---

## 4. Grille qualité (valider 6/8 minimum)

1. Durée 13-22 min (épisode le plus long de la série)
2. Zéro fait inventé : noms, chiffres traçables aux sources
3. Les 4 étapes clairement distinguées (pas fusionnées)
4. Les 8 dimensions de maturité listées au moins une fois
5. Métallurgie de Précision SAS signalée comme exemple fictif
6. Grille 7×4 et critère "défendable COMEX" évoqués
7. Conclusion actionnable : 3 erreurs classiques à éviter
8. Anglicismes raisonnables ("roadmap" OK, "delivery model" KO)

→ 3+ KO = régénérer (voir §6)

---

## 5. Après validation : publication

1. Télécharger MP3 → renommer `ep-07-construire-roadmap-ia-capstone.mp3`
2. Transcrire : `whisper file.mp3 --model large-v3 --language fr`
3. Structurer transcript Markdown avec chapitres timestampés
4. Copier MP3 → `public/podcasts/` ; transcript → même dossier
5. Éditer `src/content/podcasts.ts` : `status: 'published'` + `audioFile` + `transcriptFile`
6. Ajuster `chapters[].time` aux timestamps réels du MP3
7. Commit + push

---

## 6. Plan B si génération insatisfaisante

- **Étapes fusionnées** → "Distinguer 4 étapes capstone (vision/scénarios/use cases/plan) des 5 dimensions du plan"
- **Vision survolée** → "Consacrer 3 min minimum à l'étape 1 — c'est la fondation"
- **Trop générique** → ajouter au prompt "Citer 3 chiffres concrets de l'exemple Métallurgie de Précision SAS"
- **Voix mécaniques** → générer en anglais puis revenir au français

---

*Voir : `production-workflow.md`, `briefs/ep-07-*.md`.*
