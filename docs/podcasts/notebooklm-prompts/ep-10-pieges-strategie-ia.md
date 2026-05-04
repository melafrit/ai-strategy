# Prompt NotebookLM — Épisode 10

> **Les pièges de la stratégie IA — ce qu'il ne faut pas faire**
> Bilan synthèse : les 10 erreurs des COMEX · 14-17 min · français professionnel

---

## 1. Documents à charger dans le notebook

Limite stricte NotebookLM : 5 à 8 sources. Au-delà, la qualité narrative décline.

**4 sources obligatoires (PDF imprimés via `Ctrl+P`) :**

1. Programme (vue synthétique des 6 modules) → `/fr/programme/`
2. FAQ complète → `/fr/faq/`
3. Page Capstone → `/fr/capstone/`
4. Glossaire complet → `/fr/glossaire/`

**1 source supplémentaire fortement recommandée pour ancrer dans les cas :**

5. Cas Morgan Stanley → `/fr/cas/morgan-stanley/` (illustre piège "écosystème vs modèle")

Cet épisode est un **bilan transverse**. Il ne charge pas les modules détaillés mais s'appuie sur la synthèse du programme pour rappeler les pièges déjà identifiés ailleurs dans le parcours.

Ne PAS charger : articles "10 mistakes to avoid" génériques, contenu LinkedIn, listicles de blogs IA. Sujet = synthèse des cas et FAQ du parcours.

---

## 2. Procédure NotebookLM

1. `notebooklm.google.com` → notebook `AI Strategy — Ép. 10`
2. Ajouter les 5 sources via "Sources". Vérifier icône verte.
3. Studio → Audio Overview → Personnaliser
4. Coller le prompt §3 dans "Custom instructions"
5. Format **Deep Dive** (2 voix). Générer (5-15 min).
6. Écouter avec la grille §4. Si 3+ KO → régénérer.
7. Si OK → publication §5.

---

## 3. Prompt à coller dans "Custom instructions"

```
LANGUE : Français professionnel, accessible, ton direct.

PUBLIC : Tous les publics du parcours. Épisode bilan/synthèse, à écouter en fin de cycle ou comme rappel.

DURÉE CIBLE : 14 à 17 minutes.

FORMAT : Deep Dive (2 voix). Hôte 1 = consultant qui dresse un bilan sans complaisance. Hôte 2 = pair qui ajoute exemples et nuance.

STRUCTURE EN 6 CHAPITRES (10 pièges répartis) :
1. Intro (~0:00) — bilan et synthèse, ton du retour d'expérience
2. Pièges 1-3 (~1:40) — cadrage et écosystème
3. Pièges 4-6 (~5:20) — gouvernance et conformité
4. Pièges 7-9 (~9:00) — technologie et mesure
5. Piège 10 (~12:00) — confondre vitesse et précipitation
6. Conclusion (~14:40) — pour aller plus loin, prendre son capstone

À RETENIR (l'épisode doit faire ressortir ces 7 points) :
- Les pires erreurs IA se font au COMEX, pas dans les équipes techniques
- Confondre PoC et pilote = erreur n°1 de cadrage
- Une charte d'éthique IA n'est pas une gouvernance opérationnelle
- Mesurer outcomes (valeur réelle) plutôt qu'outputs (livrables)
- Choisir la techno avant le cas d'usage = inverser la cause et l'effet
- L'humilité méthodologique est le meilleur antidote aux modes
- Se servir du capstone comme outil d'auto-discipline stratégique

INSTRUCTIONS SPÉCIFIQUES :
- Énoncer les 10 pièges explicitement (numérotés) en cours d'épisode
- Pour chaque piège, donner 1 exemple court tiré des cas du parcours (Morgan Stanley, Stripe, AI Act, etc.)
- Ton direct mais pédagogique, sans complaisance ni cynisme
- Référer au capstone comme outil concret en conclusion
- Inviter à l'écoute des autres épisodes pour creuser

CONTRAINTES STRICTES :
- NE PAS inventer de pièges en plus des 10 listés
- NE PAS donner de noms d'entreprises ayant échoué (sources non fiables)
- NE PAS faire la morale ni juger les organisations qui ont fait ces erreurs
- NE PAS conclure par un appel produit : épisode pédagogique, pas commercial
- NE PAS minimiser : reconnaître que certains pièges sont réellement difficiles à éviter
```

---

## 4. Grille qualité (valider 6/8 minimum)

1. Durée 12-20 min
2. Zéro fait inventé : pièges et exemples traçables aux sources
3. Les 10 pièges énoncés explicitement (numérotés)
4. Au moins 4 exemples concrets tirés des cas du parcours
5. Distinction outputs / outcomes claire
6. Renvoi au capstone en conclusion
7. Ton direct mais sans cynisme ni jugement
8. Anglicismes raisonnables ("PoC" OK, "best practices" KO)

→ 3+ KO = régénérer (voir §6)

---

## 5. Après validation : publication

1. Télécharger MP3 → renommer `ep-10-pieges-strategie-ia.mp3`
2. Transcrire : `whisper file.mp3 --model large-v3 --language fr`
3. Structurer transcript Markdown avec chapitres timestampés
4. Copier MP3 → `public/podcasts/` ; transcript → même dossier
5. Éditer `src/content/podcasts.ts` : `status: 'published'` + `audioFile` + `transcriptFile`
6. Ajuster `chapters[].time` aux timestamps réels du MP3
7. Commit + push (clôture de la série de 10 épisodes)

---

## 6. Plan B si génération insatisfaisante

- **Pièges flous** → "Énoncer 10 pièges numérotés, 1 phrase chacun, puis développer"
- **Pas d'exemples** → "Chaque piège avec 1 exemple cas du parcours (Morgan Stanley, Stripe, etc.)"
- **Trop cynique** → "Ton direct mais pédagogique, sans juger"
- **Voix mécaniques** → générer en anglais puis revenir au français

---

*Épisode bilan de la série de 10. Voir : `production-workflow.md`, `briefs/ep-10-*.md`.*
