# Brief de production — Épisode 02

## Machine Learning au quotidien — Stripe Radar et le dépistage MIT

> *Comment le ML supervisé classique transforme des décisions critiques — fraude bancaire, détection précoce de cancer.*

| Méta | Valeur |
|---|---|
| Numéro | 02 |
| Thème | technology |
| Durée cible | 12-15 min |
| Statut | `planned` |
| Slug | `ep-02-machine-learning-au-quotidien` |

**Public visé** : Responsables métier, chefs de projet IA, consultants qui veulent comprendre quand le ML supervisé est la bonne réponse.

---

## 1. Synopsis éditorial

Le machine learning supervisé est souvent éclipsé par la GenAI dans le discours public, alors qu'il reste la technologie la plus mature et la plus déployée en production. Cet épisode revient sur deux cas exemplaires.

Stripe Radar utilise du ML supervisé pour évaluer en temps réel le risque de fraude sur des centaines de millions de transactions. Le cas illustre tout : l'importance des features, la gestion du déséquilibre de classes, le suivi continu des dérives, l'arbitrage entre faux positifs et faux négatifs.

Le second cas — le modèle Mirai développé par l'équipe de Regina Barzilay au MIT CSAIL — applique le ML à la détection précoce du cancer du sein à partir de mammographies. Performance documentée, interprétabilité partielle, articulation avec le radiologue : un cas santé où la rigueur méthodologique fait la différence entre un outil utile et un outil dangereux.

---

## 2. À retenir (5-7 takeaways)

1. Le ML supervisé classique reste la majorité des cas d'usage IA en production
2. Stripe Radar : ML temps réel sur déséquilibre de classes massif (fraude << transactions normales)
3. Mirai (MIT) : prédiction du risque cancer 5 ans à l'avance, validée empiriquement
4. Trois questions critiques avant un projet ML : qualité des données, équité par sous-groupes, suivi des dérives
5. L'interprétabilité partielle ne disqualifie pas un modèle — elle conditionne son déploiement (humain dans la boucle)
6. Une métrique unique tue : utiliser une matrice de confusion + métriques par sous-groupes

---

## 3. Chapitres prévisionnels

| Time (mm:ss) | Chapitre |
|---:|---|
| ~0:00 | Introduction — pourquoi le ML reste central |
| ~1:30 | Stripe Radar — fraude bancaire en temps réel |
| ~5:00 | Le défi du déséquilibre de classes |
| ~8:00 | Mirai au MIT — détection précoce du cancer |
| ~11:00 | Équité, biais, sous-groupes : un enjeu critique |
| ~13:30 | Quand choisir le ML supervisé classique |

> *Ces timestamps sont prévisionnels. Ils seront ajustés après génération réelle pour correspondre aux durées effectives du MP3 NotebookLM.*

---

## 4. Sources principales pour NotebookLM

Charger ces sources dans le notebook (PDFs imprimés depuis le print stylesheet du site, voir `docs/podcasts/production-workflow.md` §2.1) :

1. **Module 2 — Machine Learning en entreprise**  
   Source : `/fr/modules/02-machine-learning/`

2. **Cas Stripe Radar**  
   Source : `/fr/cas/stripe-radar/`

3. **Cas MIT Regina Barzilay (Mirai)**  
   Source : `/fr/cas/mit-barzilay-cancer/`

4. **Glossaire — machine learning, apprentissage supervisé, biais algorithmique**  
   Source : `/fr/glossaire/`

---

## 5. Sources complémentaires recommandées

Sources externes vérifiables à ajouter en complément (limite stricte 8 sources totales) :

1. **Stripe Radar — Primer on ML for fraud (FR, source primaire du cas)**  
   URL : `stripe.com/fr-ca/guides/primer-on-machine-learning-for-fraud-protection`  
   Usage : *ancrer techniquement Stripe Radar*

2. **MIT News — A new model for breast cancer prediction (Mirai)**  
   URL : `news.mit.edu/2021/robust-artificial-intelligence-tools-predict-future-cancer-0128`  
   Usage : *détails sur Mirai et son fonctionnement*

---

## 6. Notes de focus pour la génération

> Garder un ton accessible. Insister sur l'articulation entre la technique et la décision métier, plutôt que les détails algorithmiques.

**Instructions à coller dans le champ « Custom instructions » de NotebookLM** (template universel adapté à cet épisode) :

```
LANGUE : Français professionnel, accessible, sans anglicismes inutiles.

PUBLIC : Responsables métier, chefs de projet IA, consultants qui veulent comprendre quand le ML supervisé est la bonne réponse.

DURÉE CIBLE : 12-15 min.

STRUCTURE NARRATIVE :
1. Introduction — pourquoi le ML reste central
2. Stripe Radar — fraude bancaire en temps réel
3. Le défi du déséquilibre de classes
4. Mirai au MIT — détection précoce du cancer
5. Équité, biais, sous-groupes : un enjeu critique
6. Quand choisir le ML supervisé classique

À RETENIR (l'épisode doit faire ressortir ces points) :
- Le ML supervisé classique reste la majorité des cas d'usage IA en production
- Stripe Radar : ML temps réel sur déséquilibre de classes massif (fraude << transactions normales)
- Mirai (MIT) : prédiction du risque cancer 5 ans à l'avance, validée empiriquement
- Trois questions critiques avant un projet ML : qualité des données, équité par sous-groupes, suivi des dérives
- L'interprétabilité partielle ne disqualifie pas un modèle — elle conditionne son déploiement (humain dans la boucle)
- Une métrique unique tue : utiliser une matrice de confusion + métriques par sous-groupes

INSTRUCTIONS SPÉCIFIQUES :
Garder un ton accessible. Insister sur l'articulation entre la technique et la décision métier, plutôt que les détails algorithmiques.

CONTRAINTES :
- Citer chaque source par son nom complet la première fois
- Ne pas inventer de chiffres précis — privilégier les ordres de grandeur
- Ne pas inventer d'études ou de chercheurs
- Si une affirmation n'est pas dans les sources, ne pas la formuler
```

---

## 7. Points de vigilance à la génération

- L'épisode doit RIGOUREUSEMENT distinguer le ML supervisé de la GenAI. Si confusion détectée à la régénération, ajouter dans les instructions « Cet épisode parle UNIQUEMENT de ML supervisé classique. La GenAI est l'objet de l'épisode 3. »
- Les chiffres de performance de Mirai (AUC, accuracy, sensibilité) ne sont à citer QUE s'ils sont dans les sources chargées. Sinon, parler en termes qualitatifs (« performance documentée », « prédiction précoce de plusieurs années »).
- Le concept de déséquilibre de classes peut sembler technique. NotebookLM le simplifie bien naturellement — vérifier que la version simplifiée reste correcte.

---

## 8. Plan B en cas de résultat insatisfaisant

> Si Mirai est mal traité, retirer cette section et concentrer l'épisode entièrement sur Stripe Radar avec un développement plus approfondi du déséquilibre de classes et du suivi des dérives.

---

## 9. Références croisées du parcours

**Modules associés** : M2


**Études de cas** : stripe-radar, mit-barzilay-cancer


**Termes du glossaire** : machine-learning, apprentissage-supervise, biais-algorithmique, donnees-entrainement

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
- [ ] MP3 copié dans `public/podcasts/ep-02-machine-learning-au-quotidien.mp3`
- [ ] Transcript copié dans `public/podcasts/ep-02-machine-learning-au-quotidien-transcript.md`
- [ ] `src/content/podcasts.ts` mis à jour : `status: 'published'`, `audioFile`, `transcriptFile`
- [ ] Chapters ajustés aux timestamps réels si différents
- [ ] Build local OK
- [ ] Commit avec message structuré

---

*Brief généré automatiquement à partir de `src/content/podcasts.ts` — Phase 6 sub-tour 2.*
*Voir aussi le workflow général : `docs/podcasts/production-workflow.md`.*
