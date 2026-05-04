# Prompt NotebookLM — Épisode 05

> **AI Act EU — qui est concerné, comment se préparer**
> Règlement 2024/1689 décrypté · 14-17 min · français professionnel

---

## 1. Documents à charger dans le notebook

Limite stricte NotebookLM : 5 à 8 sources. Au-delà, la qualité narrative décline.

**4 sources obligatoires (PDF imprimés via `Ctrl+P`) :**

1. Module 5 → `/fr/modules/05-ia-societe/`
2. Cas AI Act EU haut risque → `/fr/cas/ai-act-eu-haut-risque/`
3. FAQ AI Act → `/fr/faq/`
4. Glossaire → `/fr/glossaire/`

**2 sources web recommandées (URL collée comme source "Site Web") :**

5. `eur-lex.europa.eu/legal-content/FR/TXT/PDF/?uri=OJ%3AL_202401689`
6. `digital-strategy.ec.europa.eu/fr/policies/regulatory-framework-ai`

Ne PAS charger : opinions de cabinets d'avocats sur LinkedIn, articles US "EU AI Act will kill innovation", textes anciens (proposition 2021), interprétations spéculatives. Sujet = règlement adopté et son application opérationnelle.

---

## 2. Procédure NotebookLM

1. `notebooklm.google.com` → notebook `AI Strategy — Ép. 05`
2. Ajouter les 6 sources via "Sources". Vérifier icône verte.
3. Studio → Audio Overview → Personnaliser
4. Coller le prompt §3 dans "Custom instructions"
5. Format **Deep Dive** (2 voix). Générer (5-15 min).
6. Écouter avec la grille §4. Si 3+ KO → régénérer.
7. Si OK → publication §5.

---

## 3. Prompt à coller dans "Custom instructions"

```
LANGUE : Français professionnel, accessible, sans jargon juridique excessif.

PUBLIC : Juristes, DPO, responsables conformité, dirigeants qui doivent comprendre concrètement leurs obligations.

DURÉE CIBLE : 14 à 17 minutes.

FORMAT : Deep Dive (2 voix). Hôte 1 = dirigeant pragmatique ("ça me concerne, oui ou non ?"). Hôte 2 = pair qui a déjà cadré la conformité, partage retours.

STRUCTURE EN 6 CHAPITRES :
1. Intro (~0:00) — pourquoi l'AI Act maintenant
2. 4 catégories de risque (~1:40) — interdit / haut / limité / minimal
3. 3 rôles (~5:00) — fournisseur, déployeur, importateur/distributeur
4. Usages business courants en haut risque (~8:00) — RH, crédit, services publics
5. Calendrier et sanctions (~12:00) — jusqu'à août 2027, jusqu'à 35 M€ / 7% CA
6. 5 actions concrètes pour les 6 prochains mois (~14:30)

À RETENIR (l'épisode doit faire ressortir ces 6 points) :
- L'AI Act s'applique à tout système IA opéré dans l'UE, peu importe le siège
- 4 catégories : interdit / haut risque / limité / minimal — classification = étape critique
- Beaucoup d'usages business "ordinaires" tombent en haut risque (RH, crédit, services publics)
- Sanctions jusqu'à 35 M€ ou 7% du CA mondial — comparable au RGPD
- Calendrier progressif jusqu'à août 2027 — pas de luxe d'attendre
- 5 actions à engager maintenant : inventaire, classification, documentation, gouvernance, formation

INSTRUCTIONS SPÉCIFIQUES :
- Ton pédagogique mais précis : citer "Règlement (UE) 2024/1689" et articles clés (5, 6, 9, 10, 14)
- Insister sur l'extraterritorialité : "comme le RGPD, mais pour l'IA"
- Catégorie haut risque doit être incarnée avec 3 exemples concrets (recrutement, scoring crédit, services publics)
- Conclusion = 5 actions actionnables, pas un discours de juriste

CONTRAINTES STRICTES :
- NE PAS dire "l'AI Act va tuer l'innovation" ni le contraire — rester factuel
- NE PAS confondre AI Act et RGPD — analogies oui, fusion non
- NE PAS donner d'avis juridique personnalisé : "consulter un juriste pour votre cas"
- NE PAS inventer d'articles ni de chiffres de sanction
- NE PAS minimiser les obligations haut risque — elles sont substantielles
```

---

## 4. Grille qualité (valider 6/8 minimum)

1. Durée 12-20 min
2. Zéro fait inventé : articles, dates, chiffres traçables aux sources
3. Les 4 catégories de risque clairement distinguées
4. Au moins 3 exemples concrets d'usages haut risque
5. Calendrier (août 2027) et sanctions (35 M€ / 7%) cités avec précision
6. Les 3 rôles (fournisseur/déployeur/importateur) cités explicitement
7. Conclusion = 5 actions concrètes, pas généralités
8. Anglicismes raisonnables ("compliance" OK avec parcimonie, "framework" KO)

→ 3+ KO = régénérer (voir §6)

---

## 5. Après validation : publication

1. Télécharger MP3 → renommer `ep-05-ai-act-eu-qui-est-concerne.mp3`
2. Transcrire : `whisper file.mp3 --model large-v3 --language fr`
3. Structurer transcript Markdown avec chapitres timestampés
4. Copier MP3 → `public/podcasts/` ; transcript → même dossier
5. Éditer `src/content/podcasts.ts` : `status: 'published'` + `audioFile` + `transcriptFile`
6. Ajuster `chapters[].time` aux timestamps réels du MP3
7. Commit + push

---

## 6. Plan B si génération insatisfaisante

- **Trop juridique** → durcir "ton décideur opérationnel, pas juriste"
- **Catégories floues** → "Distinguer interdit/haut/limité/minimal avec 1 exemple chacun"
- **Sanctions oubliées** → "Citer 35 M€ ou 7% CA + analogie RGPD"
- **Voix mécaniques** → générer en anglais puis revenir au français

---

*Voir : `production-workflow.md`, `briefs/ep-05-*.md`.*
