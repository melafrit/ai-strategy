# Brief de pilote IA générative — Module 3

> Outil de cadrage d'un pilote GenAI pour votre organisation.
>
> Référence : AI Strategy — Module 3 (IA générative en entreprise)
> Licence : CC BY-NC-SA 4.0
> Site : https://github.com/melafrit/eu-strategy

Ce canvas accompagne l'activité pratique du Module 3. Quatre étapes
structurées, ~60 à 90 minutes en autonomie ou en atelier de petit
groupe. Imprimable au format A4 paysage si nécessaire.

---

## Étape 1 — Décrire le workflow candidat

**Workflow métier visé** : ___________________________________

**Acteur principal du workflow aujourd'hui** :
- ☐ Conseiller / opérateur de premier niveau
- ☐ Expert métier (juriste, médecin, ingénieur, commercial senior)
- ☐ Manager / décideur
- ☐ Mixte (préciser) : _____________________________________

**Décomposition du workflow en sous-tâches** (lister de 3 à 8 étapes,
de la plus mécanique à la plus créative/sensible) :

| # | Sous-tâche | Temps actuel | Niveau d'enjeu (1-5) |
|:-:|:-----------|:-------------|:---------------------:|
| 1 |            |              |                       |
| 2 |            |              |                       |
| 3 |            |              |                       |
| 4 |            |              |                       |
| 5 |            |              |                       |
| 6 |            |              |                       |

**Critère de qualité** : si vous ne pouvez pas décomposer le workflow
en sous-tâches concrètes, il n'est pas mûr pour un pilote GenAI.

---

## Étape 2 — Identifier les sous-tâches candidates à GenAI

Pour chaque sous-tâche listée, évaluer trois questions :

| # | Sous-tâche | Tâche linguistique ou créative ? | Connaissance interne nécessaire ? | Décision à fort enjeu ? | Verdict GenAI |
|:-:|:-----------|:--------------------------------:|:----------------------------------:|:-------------------------:|:--------------|
| 1 |            | ☐ Oui ☐ Non                     | ☐ Oui ☐ Non                        | ☐ Oui ☐ Non              |               |
| 2 |            | ☐ Oui ☐ Non                     | ☐ Oui ☐ Non                        | ☐ Oui ☐ Non              |               |
| 3 |            | ☐ Oui ☐ Non                     | ☐ Oui ☐ Non                        | ☐ Oui ☐ Non              |               |
| 4 |            | ☐ Oui ☐ Non                     | ☐ Oui ☐ Non                        | ☐ Oui ☐ Non              |               |
| 5 |            | ☐ Oui ☐ Non                     | ☐ Oui ☐ Non                        | ☐ Oui ☐ Non              |               |

**Règles pratiques** :
- Tâche linguistique/créative + connaissance interne nécessaire + enjeu modéré = **automatiser avec RAG**
- Tâche linguistique/créative + connaissance interne + enjeu fort = **assister l'humain (HITL)**
- Décision à fort enjeu = **garder humaine** (l'humain valide la sortie GenAI)
- Pas linguistique = probablement pas un cas GenAI (revoir Module 2 — Machine Learning)

---

## Étape 3 — Architecturer le pilote

### A. Approche technique

**Type d'approche pressenti** (cocher le plus probable) :

- ☐ **Prompting simple** — un LLM standard avec prompt élaboré
  (cas : tâche générique, pas de connaissance interne sensible)
- ☐ **RAG (Retrieval-Augmented Generation)** — LLM + recherche dans
  une base de documents internes
  (cas : tâche nécessitant connaissance interne fraîche et traçable)
- ☐ **Fine-tuning** — LLM réentraîné sur des données métier spécifiques
  (cas : style ou comportement très spécifique, après échec du RAG)
- ☐ **Combinaison** (préciser) : ____________________________________

**Modèle envisagé** (LLM commercial / LLM open source / précision
sectorielle) :

> _____________________________________________________________

### B. Garde-fous indispensables

Cocher les garde-fous prévus dès le pilote :

- ☐ Sources citées dans toutes les réponses (traçabilité RAG)
- ☐ Escalade humaine systématique sur sous-tâches à fort enjeu
- ☐ Validation humaine échantillonnée (X % des sorties auditées)
- ☐ Filtre de contenu (PII, secrets, propos discriminants)
- ☐ Logs détaillés des prompts et réponses (audit, amélioration)
- ☐ Mécanisme de signalement d'erreur par les utilisateurs
- ☐ Politique de mise à jour de la base RAG (cadence, responsable)
- ☐ Conformité RGPD (données personnelles dans le RAG ou les prompts)
- ☐ Conformité AI Act EU si usage à haut risque

**Critère de qualité** : si moins de 5 garde-fous sont cochés, le
pilote n'est pas prêt à être lancé.

### C. Périmètre du pilote

| Item | Décision |
|:-----|:---------|
| Sous-tâches incluses | (lister) |
| Volume hebdomadaire visé | __ requêtes/sem |
| Utilisateurs pilotes | __ personnes |
| Durée du pilote | __ semaines |
| Critère Go/No-Go production | (préciser quantitatif et qualitatif) |

---

## Étape 4 — Évaluer le coût total et la valeur

### A. Coût total du pilote (tous postes confondus)

| Poste | Estimation €  |
|:------|:-------------:|
| Souscription LLM / coûts d'inférence (estimés sur le volume) |  |
| Construction RAG : ingestion documents, embeddings, base vectorielle |  |
| Intégration au workflow existant (CRM, ERP, portail métier) |  |
| Conduite du changement : formation utilisateurs, communication |  |
| Supervision : équipe de validation, mesure qualité |  |
| Gouvernance : audit conformité, comité IA, documentation |  |
| **Total Phase pilote (12 semaines)** |  |
| **Extrapolation 12 mois en production** |  |

**Règle pratique** : si la souscription LLM représente plus de 30 % du
total, l'écosystème (RAG, supervision, conduite du changement) est
sous-budgétisé.

### B. Valeur business attendue

**Mécanisme principal de création de valeur** (cocher) :
- ☐ Temps gagné par les utilisateurs (gain de productivité)
- ☐ Qualité de service améliorée (satisfaction, NPS, fidélisation)
- ☐ Couverture étendue (servir plus de cas avec les mêmes effectifs)
- ☐ Réduction du risque (erreurs évitées, conformité renforcée)

**Estimation chiffrée** (ordre de grandeur, par an en production) :

| Métrique | Valeur actuelle | Valeur cible | Gain monétaire estimé |
|:---------|:---------------:|:-------------:|:----------------------:|
| Temps moyen par cas |  |  |  |
| Volume de cas traités/mois |  |  |  |
| Taux de satisfaction |  |  |  |
| Autres |  |  |  |

**Valeur estimée en production (€/an)** : ___________________

### C. Décision Go/No-Go pilote

- ☐ **Go pilote** — argumentaire défendable en COMEX en 90s
- ☐ **Préparer puis Go** — préciser ce qui manque
- ☐ **No-Go** — préciser pourquoi (cadre, données, risque, ROI)

---

## Synthèse — Argumentaire COMEX

Synthèse en 90 secondes pour le COMEX :

> _____________________________________________________________
> _____________________________________________________________
> _____________________________________________________________
> _____________________________________________________________
> _____________________________________________________________

Trois prochains jalons (à 4 / 8 / 12 semaines) :

1. _____________________________________________________________
2. _____________________________________________________________
3. _____________________________________________________________

---

## Critères de qualité — auto-évaluation

Avant de présenter le brief de pilote à un dirigeant ou un client,
vérifiez :

- ☐ Le workflow est décomposé en sous-tâches concrètes.
- ☐ Chaque sous-tâche est qualifiée (automatiser / assister / garder humaine).
- ☐ L'approche technique (prompting / RAG / fine-tuning) est justifiée.
- ☐ Au moins 5 garde-fous sont prévus dès le pilote.
- ☐ Le coût total du pilote est chiffré, avec extrapolation production.
- ☐ La valeur business attendue est chiffrée en € sur 12 mois.
- ☐ Les critères Go/No-Go vers la production sont définis quantitativement.

Si l'une de ces cases reste vide, reprenez l'étape correspondante
avant de lancer le pilote.

---

*Canvas v1.0 — Mai 2026. La version PDF stylisée arrive en Phase 5
du projet AI Strategy. En attendant, ce fichier Markdown est
imprimable, copiable dans un outil de prise de notes (Notion,
Obsidian, Word) ou utilisable directement comme support d'atelier.*

*Pour signaler une erreur ou une suggestion d'amélioration :
https://github.com/melafrit/ai-strategy/issues*
