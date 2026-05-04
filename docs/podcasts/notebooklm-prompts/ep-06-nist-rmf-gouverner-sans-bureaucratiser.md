# Prompt NotebookLM — Épisode 06

> **NIST AI RMF — gouverner sans bureaucratiser**
> Méthode opérationnelle Govern/Map/Measure/Manage · 13-16 min · français professionnel

---

## 1. Documents à charger dans le notebook

Limite stricte NotebookLM : 5 à 8 sources. Au-delà, la qualité narrative décline.

**4 sources obligatoires (PDF imprimés via `Ctrl+P`) :**

1. Module 5 → `/fr/modules/05-ia-societe/`
2. Cas NIST AI RMF → `/fr/cas/nist-ai-rmf/`
3. FAQ articulation AI Act/NIST/Comité éthique → `/fr/faq/`
4. Glossaire → `/fr/glossaire/`

**2 sources web recommandées (URL collée comme source "Site Web") :**

5. `nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf`
6. `oecd.org/fr/themes/principes-de-l-ia.html`

Ne PAS charger : chartes éthiques d'entreprise génériques, déclarations de principes sans actions opérationnelles, articles "AI ethics washing", documents UNESCO. Sujet = méthode opérationnelle, pas philosophie.

---

## 2. Procédure NotebookLM

1. `notebooklm.google.com` → notebook `AI Strategy — Ép. 06`
2. Ajouter les 6 sources via "Sources". Vérifier icône verte.
3. Studio → Audio Overview → Personnaliser
4. Coller le prompt §3 dans "Custom instructions"
5. Format **Deep Dive** (2 voix). Générer (5-15 min).
6. Écouter avec la grille §4. Si 3+ KO → régénérer.
7. Si OK → publication §5.---

## 3. Prompt à coller dans "Custom instructions"

```
LANGUE : Français professionnel, accessible, sans jargon réglementaire excessif.

PUBLIC : Responsables data, chefs de projet IA, conseillers internes en transformation. Doivent rendre opérationnel ce que les juristes décrivent en obligations.

DURÉE CIBLE : 13 à 16 minutes.

FORMAT : Deep Dive (2 voix). Hôte 1 = chef de projet ("comment je fais sans créer 10 comités ?"). Hôte 2 = pair qui a déployé NIST RMF.

STRUCTURE EN 6 CHAPITRES :
1. Intro (~0:00) — pourquoi un cadre opérationnel et non éthique
2. Architecture NIST RMF en 4 fonctions (~1:40)
3. Govern (~4:40) — la fonction transverse
4. Map / Measure / Manage (~7:20) — le cycle opérationnel
5. Articulation avec AI Act EU et autres cadres (~10:40)
6. Éviter le piège bureaucratique (~13:40)

À RETENIR (l'épisode doit faire ressortir ces 6 points) :
- NIST AI RMF = méthode opérationnelle volontaire, AI Act = obligations légales contraignantes
- 4 fonctions interreliées : Govern (transverse), Map, Measure, Manage
- Le Playbook NIST fournit des actions concrètes par sous-catégorie — pas de théorie
- Articulation avec cadres existants (cyber, conformité, audit) plutôt que silo IA
- Exemple : classer en AI Act → cartographier sur NIST → opérationnaliser via Playbook
- ISO 42001 complète NIST RMF pour la certification

INSTRUCTIONS SPÉCIFIQUES :
- Distinguer principes éthiques (souvent inutiles seuls) vs cadre opérationnel (NIST)
- Citer "NIST AI Risk Management Framework 1.0" et le Playbook par leur nom
- Govern doit être traité comme transverse, pas comme une 1ère étape séquentielle
- Articulation AI Act ↔ NIST RMF doit être l'angle central (épisode 5 = légal, épisode 6 = opérationnel)
- Conclusion actionnable : 3 actions pour démarrer dès la semaine prochaine

CONTRAINTES STRICTES :
- NE PAS dire "il faut une charte éthique IA" sans préciser ce qu'on en fait
- NE PAS opposer NIST et AI Act — ils sont complémentaires
- NE PAS confondre NIST AI RMF et NIST Cybersecurity Framework
- NE PAS inventer d'exemples d'organisations sans source
- NE PAS minimiser le coût organisationnel de la mise en place
```

---

## 4. Grille qualité (valider 6/8 minimum)

1. Durée 11-19 min
2. Zéro fait inventé : noms de fonctions, sous-catégories traçables aux sources
3. Les 4 fonctions Govern/Map/Measure/Manage clairement distinguées
4. Govern traité comme transverse, pas comme étape 1
5. Articulation NIST ↔ AI Act explicite, pas en passant
6. Playbook cité comme outil pratique, pas comme un livre théorique
7. Conclusion actionnable : 3 actions pour la semaine prochaine
8. Anglicismes raisonnables ("framework" OK avec parcimonie, "actionner les workstreams" KO)

→ 3+ KO = régénérer (voir §6)

---

## 5. Après validation : publication

1. Télécharger MP3 → renommer `ep-06-nist-rmf-gouverner-sans-bureaucratiser.mp3`
2. Transcrire : `whisper file.mp3 --model large-v3 --language fr`
3. Structurer transcript Markdown avec chapitres timestampés
4. Copier MP3 → `public/podcasts/` ; transcript → même dossier
5. Éditer `src/content/podcasts.ts` : `status: 'published'` + `audioFile` + `transcriptFile`
6. Ajuster `chapters[].time` aux timestamps réels du MP3
7. Commit + push

---

## 6. Plan B si génération insatisfaisante

- **Trop éthique abstrait** → durcir "cadre opérationnel, pas philosophie"
- **Govern oublié comme transverse** → "Govern n'est PAS l'étape 1, c'est ce qui chapeaute tout"
- **NIST/AI Act opposés** → "Préciser : complémentaires. NIST = comment faire ; AI Act = ce qu'on doit faire"
- **Voix mécaniques** → générer en anglais puis revenir au français

---

*Voir : `production-workflow.md`, `briefs/ep-06-*.md`.*