# Brief de production — Épisode 04

## Robotique et cobots — Amazon, Universal Robots et la PME française

> *L'automatisation physique sort des géants : ce que la robotique actuelle change pour les ETI et PME.*

| Méta | Valeur |
|---|---|
| Numéro | 04 |
| Thème | technology |
| Durée cible | 12-15 min |
| Statut | `planned` |
| Slug | `ep-04-robotique-amazon-ur-pme` |

**Public visé** : Dirigeants d'industries de production, responsables d'opérations, consultants en transformation industrielle.

---

## 1. Synopsis éditorial

La robotique en entreprise n'est plus l'apanage des géants logistiques. Cet épisode contraste deux réalités : l'échelle massive d'Amazon (1+ million de robots déployés, foundation model DeepFleet pour orchestrer la flotte) et le pragmatisme d'Universal Robots, fabricant danois de cobots qui a permis à des milliers de PME industrielles de robotiser sans investissement disproportionné.

Les animateurs explorent les caractéristiques techniques qui rendent la cobotique accessible : sécurité ISO/TS 15066, mise en service en quelques jours plutôt qu'en mois, retour sur investissement typique en 12-24 mois pour des postes pénibles ciblés. Ils s'appuient sur l'exemple fictif (signalé comme tel) de Métallurgie de Précision SAS — la PME industrielle évoquée dans le capstone — pour illustrer comment une démarche cobotique se conduit concrètement.

L'épisode s'achève sur les pièges classiques : la tentation de robotiser pour la performance affichée plutôt que pour la valeur réelle, la sous-estimation du dialogue social, l'oubli de l'écosystème logiciel autour du robot.

---

## 2. À retenir (5-7 takeaways)

1. Amazon DeepFleet : foundation model pour coordonner 1+ million de robots dans le réseau logistique
2. Universal Robots : démocratisation de la cobotique, 80-150 k€ pour un poste robotisé en PME
3. ISO/TS 15066 définit les 4 méthodes de collaboration humain-robot — référence sécurité
4. ROI typique en 12-24 mois sur des postes pénibles bien ciblés
5. Le succès dépend autant du dialogue social et de la formation que du robot lui-même
6. Piège fréquent : robotiser pour la performance d'affichage plutôt que pour la valeur réelle

---

## 3. Chapitres prévisionnels

| Time (mm:ss) | Chapitre |
|---:|---|
| ~0:00 | Introduction — la robotique sort des géants |
| ~1:30 | Amazon Robotics et DeepFleet : l'échelle géante |
| ~5:00 | Universal Robots — la cobotique démocratisée |
| ~8:00 | ISO/TS 15066 et la sécurité humain-robot |
| ~10:00 | PME française fictive — comment cadrer un projet |
| ~13:00 | Pièges et bonnes pratiques |

> *Ces timestamps sont prévisionnels. Ils seront ajustés après génération réelle pour correspondre aux durées effectives du MP3 NotebookLM.*

---

## 4. Sources principales pour NotebookLM

Charger ces sources dans le notebook (PDFs imprimés depuis le print stylesheet du site, voir `docs/podcasts/production-workflow.md` §2.1) :

1. **Module 4 — Robotique en entreprise**  
   Source : `/fr/modules/04-robotique/`

2. **Cas Amazon Robotics + DeepFleet**  
   Source : `/fr/cas/amazon-robotics/`

3. **Cas Universal Robots**  
   Source : `/fr/cas/universal-robots/`

4. **Capstone (exemple PME Métallurgie de Précision SAS)**  
   Source : `/fr/capstone/`

---

## 5. Sources complémentaires recommandées

Sources externes vérifiables à ajouter en complément (limite stricte 8 sources totales) :

1. **About Amazon — million robots + DeepFleet**  
   URL : `aboutamazon.com/news/operations/amazon-million-robots-ai-foundation-model`  
   Usage : *chiffres et faits sur Amazon*

2. **ISO/TS 15066:2016 (résumé page ISO)**  
   URL : `iso.org/standard/62996.html`  
   Usage : *définir les 4 méthodes de collaboration humain-robot*

---

## 6. Notes de focus pour la génération

> Articuler une vision tirée par les ETI/PME, qui sont la majorité du tissu économique. Citer les chiffres (ROI, durée mise en service) pour ancrer.

**Instructions à coller dans le champ « Custom instructions » de NotebookLM** (template universel adapté à cet épisode) :

```
LANGUE : Français professionnel, accessible, sans anglicismes inutiles.

PUBLIC : Dirigeants d'industries de production, responsables d'opérations, consultants en transformation industrielle.

DURÉE CIBLE : 12-15 min.

STRUCTURE NARRATIVE :
1. Introduction — la robotique sort des géants
2. Amazon Robotics et DeepFleet : l'échelle géante
3. Universal Robots — la cobotique démocratisée
4. ISO/TS 15066 et la sécurité humain-robot
5. PME française fictive — comment cadrer un projet
6. Pièges et bonnes pratiques

À RETENIR (l'épisode doit faire ressortir ces points) :
- Amazon DeepFleet : foundation model pour coordonner 1+ million de robots dans le réseau logistique
- Universal Robots : démocratisation de la cobotique, 80-150 k€ pour un poste robotisé en PME
- ISO/TS 15066 définit les 4 méthodes de collaboration humain-robot — référence sécurité
- ROI typique en 12-24 mois sur des postes pénibles bien ciblés
- Le succès dépend autant du dialogue social et de la formation que du robot lui-même
- Piège fréquent : robotiser pour la performance d'affichage plutôt que pour la valeur réelle

INSTRUCTIONS SPÉCIFIQUES :
Articuler une vision tirée par les ETI/PME, qui sont la majorité du tissu économique. Citer les chiffres (ROI, durée mise en service) pour ancrer.

CONTRAINTES :
- Citer chaque source par son nom complet la première fois
- Ne pas inventer de chiffres précis — privilégier les ordres de grandeur
- Ne pas inventer d'études ou de chercheurs
- Si une affirmation n'est pas dans les sources, ne pas la formuler
```

---

## 7. Points de vigilance à la génération

- L'exemple PME française (Métallurgie de Précision SAS) DOIT être présenté comme un EXEMPLE FICTIF PÉDAGOGIQUE — c'est une construction du capstone. Toujours préciser dans les instructions « cas fictif construit pour illustrer la méthodologie ».
- Universal Robots : préciser danois, fondé en 2005, propriété de Teradyne depuis 2015. Ces faits sont publics. Ne pas inventer des dates ou des chiffres de chiffre d'affaires.
- Les chiffres de ROI (12-24 mois, 80-150 k€) sont des ordres de grandeur du parcours. Les présenter comme tels, pas comme des données certifiées par UR.

---

## 8. Plan B en cas de résultat insatisfaisant

> Si le contraste Amazon-géant vs PME devient trop manichéen, ajouter un exemple ETI intermédiaire pour nuancer.

---

## 9. Références croisées du parcours

**Modules associés** : M4


**Études de cas** : amazon-robotics, universal-robots


**Termes du glossaire** : robotique, automatisation, human-in-the-loop

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
- [ ] MP3 copié dans `public/podcasts/ep-04-robotique-amazon-ur-pme.mp3`
- [ ] Transcript copié dans `public/podcasts/ep-04-robotique-amazon-ur-pme-transcript.md`
- [ ] `src/content/podcasts.ts` mis à jour : `status: 'published'`, `audioFile`, `transcriptFile`
- [ ] Chapters ajustés aux timestamps réels si différents
- [ ] Build local OK
- [ ] Commit avec message structuré

---

*Brief généré automatiquement à partir de `src/content/podcasts.ts` — Phase 6 sub-tour 2.*
*Voir aussi le workflow général : `docs/podcasts/production-workflow.md`.*
