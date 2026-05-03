# Canvas d'évaluation d'un cas d'usage Machine Learning — Module 2

> Outil de jugement de pertinence d'un cas d'usage ML pour votre organisation.
>
> Référence : AI Strategy — Module 2 (Machine Learning en entreprise)
> Licence : CC BY-NC-SA 4.0
> Site : https://github.com/melafrit/ai-strategy

Ce canvas accompagne l'activité pratique du Module 2. Quatre étapes
structurées, ~45 à 90 minutes en autonomie ou en atelier de petit
groupe. Imprimable au format A4 paysage si nécessaire.

---

## Étape 1 — Décrire le cas d'usage candidat

**Nom du cas d'usage** : ___________________________________

**Décision à prendre par le système ML** (en une phrase) :

> _____________________________________________________________
> _____________________________________________________________

**Type de problème ML pressenti** (cocher) :
- ☐ Apprentissage supervisé — classification (oui/non, A/B/C/D)
- ☐ Apprentissage supervisé — régression (valeur continue : prix, durée, score)
- ☐ Apprentissage non supervisé — clustering, détection d'anomalies, réduction de dimensionnalité
- ☐ Apprentissage par renforcement — optimisation séquentielle d'actions
- ☐ Indéterminé — à clarifier

**Critère de qualité** : si vous ne pouvez pas formuler la décision en
une phrase claire, le cas n'est pas mûr pour un ML.

---

## Étape 2 — Évaluer la qualité des données

Pour ML, les données sont le facteur n°1. Évaluez sur 4 dimensions :

| Dimension | Question | Note 1-5 | Commentaires |
|:----------|:---------|:--------:|:-------------|
| **Volume** | Avez-vous au moins quelques milliers d'observations ? |  |  |
| **Étiquetage** (si supervisé) | Les exemples passés sont-ils étiquetés avec la sortie attendue ? |  |  |
| **Qualité** | Les données sont-elles propres, complètes, sans valeurs aberrantes massives ? |  |  |
| **Représentativité** | L'historique reflète-t-il bien les conditions futures (saisonnalité, exceptions, ruptures) ? |  |  |

**Score données / 20** : __

**Règles pratiques** :
- Score < 8/20 → ML probablement prématuré, focaliser sur la donnée d'abord
- Score 8-13/20 → ML envisageable, prévoir un budget données significatif
- Score 14+/20 → conditions favorables au ML

---

## Étape 3 — Évaluer la pertinence stratégique

Le projet ML candidat contribue à quelle dimension stratégique ?
(cocher une seule case principale)

- ☐ **Différenciation** — créer une valeur perçue par le client que les concurrents ne reproduisent pas
  - *Exemple : recommandations personnalisées, expérience produit augmentée*
- ☐ **Leadership de coût** — réduire structurellement le coût d'opérations clés
  - *Exemple : automatisation de tâches répétitives, optimisation logistique, prédiction de demande*
- ☐ **Focalisation** — servir un segment spécifique avec une précision impossible aujourd'hui
  - *Exemple : médecine de précision, financement de niche, B2B technique pointu*

**Phrase de défense en 1 ligne** (test des 30 secondes) :

> _____________________________________________________________
> _____________________________________________________________

**Filtre d'élimination** : si la phrase de défense est confuse ou
interchangeable d'un projet à l'autre, le cadrage stratégique est
manquant — éliminez ou reformulez.

---

## Étape 4 — Évaluer la valeur business attendue

Estimer en ordre de grandeur, pas en précision comptable.

### A. Valeur si le projet réussit

**Mécanisme principal de création de valeur** (cocher) :
- ☐ Augmentation du chiffre d'affaires (ventes, conversion, panier moyen)
- ☐ Réduction de coût opérationnel (heures économisées, taux d'erreur, stocks)
- ☐ Réduction de risque (fraude évitée, churn réduit, conformité améliorée)
- ☐ Amélioration de l'expérience (satisfaction, fidélité, NPS)
- ☐ Combinaison — détailler :

**Estimation chiffrée** (ordre de grandeur, par an) :

> Valeur attendue : _________________ €/an (si projet réussi)

### B. Coût total du projet (pas seulement le modèle)

| Poste | Estimation €  |
|:------|:-------------:|
| Modèle (algorithmes, calcul, équipe data science) |  |
| Données (collecte, étiquetage, nettoyage, stockage) |  |
| Intégration (ERP, CRM, WMS, APIs internes) |  |
| Conduite du changement (formation, communication) |  |
| Gouvernance (audit biais, conformité, comité IA) |  |
| **Total Année 1** |  |
| **Total Année 2-3 (run + amélioration)** |  |

**Règle pratique** : si le modèle représente plus de 40 % du total,
l'écosystème est sous-budgétisé.

### C. Décision finale

**Ratio Valeur / Coût** (en ordre de grandeur) : __

- ☐ Ratio > 5× → projet à priorité haute, candidat pilote
- ☐ Ratio 2-5× → projet défendable mais à muscler en cadrage
- ☐ Ratio < 2× → projet probablement pas mature, revoir le cadrage

**Décision** :
- ☐ Lancer en pilote — précisez périmètre minimal et critères de Go/No-Go
- ☐ Mettre en attente — précisez condition de réactivation
- ☐ Abandonner — précisez la raison (pour mémoire)

---

## Synthèse — Argumentaire COMEX

Synthèse en 90 secondes pour le COMEX :

> _____________________________________________________________
> _____________________________________________________________
> _____________________________________________________________
> _____________________________________________________________
> _____________________________________________________________
> _____________________________________________________________
> _____________________________________________________________

Critères de Go/No-Go du pilote (à atteindre en 3-6 mois) :

1. _____________________________________________________________
2. _____________________________________________________________
3. _____________________________________________________________

---

## Critères de qualité — auto-évaluation

Avant de présenter votre évaluation à un dirigeant ou un client, vérifiez :

- ☐ La décision à prendre par le ML est formulée en une phrase claire.
- ☐ Le type de problème ML est identifié (supervisé / non supervisé / renforcement).
- ☐ La qualité des données est évaluée sur les 4 dimensions (volume, étiquetage, qualité, représentativité).
- ☐ Le projet est rattaché explicitement à une dimension stratégique.
- ☐ La valeur business et le coût total sont chiffrés en ordre de grandeur.
- ☐ Le ratio valeur/coût justifie la décision Go/No-Go.

Si l'une de ces cases reste vide, reprenez l'étape correspondante
avant de présenter le dossier.

---

*Canvas v1.0 — Mai 2026. La version PDF stylisée arrive en Phase 5
du projet AI Strategy. En attendant, ce fichier Markdown est
imprimable, copiable dans un outil de prise de notes (Notion,
Obsidian, Word) ou utilisable directement comme support d'atelier.*

*Pour signaler une erreur ou une suggestion d'amélioration :
https://github.com/melafrit/ai-strategy/issues*
