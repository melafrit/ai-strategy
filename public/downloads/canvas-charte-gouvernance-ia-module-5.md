# Canvas charte de gouvernance IA — Module 5

> Outil de structuration d'une charte de gouvernance IA pour votre
> organisation.
>
> Référence : AI Strategy — Module 5 (IA dans l'entreprise et la société)
> Licence : CC BY-NC-SA 4.0
> Site : https://github.com/melafrit/ai-strategy

Ce canvas accompagne l'activité pratique du Module 5. Quatre étapes
structurées, ~60 à 90 minutes en autonomie ou en atelier de petit
groupe. Imprimable au format A4 paysage si nécessaire.

---

## Étape 1 — Définir la portée et les principes

**Périmètre de la charte** (cocher) :
- ☐ Tous les systèmes d'IA (ML, GenAI, robotique, vision)
- ☐ Tous les fournisseurs (interne, partenaires, prestataires)
- ☐ Tous les sites / filiales / pays d'opération
- ☐ Restrictions explicites (préciser) : ___________________________

**Cinq principes directeurs** — adapter au contexte de l'organisation,
en s'inspirant des Principes OCDE et des exigences AI Act :

1. **_____________________________________________________**
   *Exemple : croissance inclusive, bien-être, développement durable*

2. **_____________________________________________________**
   *Exemple : valeurs centrées sur l'humain et équité*

3. **_____________________________________________________**
   *Exemple : transparence et explicabilité*

4. **_____________________________________________________**
   *Exemple : robustesse, sécurité et sûreté*

5. **_____________________________________________________**
   *Exemple : responsabilité et redevabilité (accountability)*

**Critère de qualité** : si les principes sont génériques au point
d'être interchangeables avec n'importe quelle organisation, ajoutez
une déclinaison concrète liée à votre activité.

---

## Étape 2 — Structurer la gouvernance opérationnelle

### A. Comité IA (instance de décision)

**Composition** (cocher les rôles présents) :
- ☐ Direction Générale (sponsor exécutif)
- ☐ DSI / CTO
- ☐ Direction métier concernée
- ☐ Conformité / juridique (RGPD, AI Act)
- ☐ DRH (impact sur le travail, formation)
- ☐ Éthique / déontologie
- ☐ Sécurité de l'information / RSSI
- ☐ Représentants du personnel (selon contexte et sujet)
- ☐ Externe : ____________________________________________

**Mandat et pouvoirs** (cocher) :
- ☐ Validation des projets IA en phase de cadrage
- ☐ Décision Go/No-Go pour les déploiements en production
- ☐ Capacité à suspendre un système en cas d'incident
- ☐ Définition des standards techniques et éthiques internes
- ☐ Revue annuelle des projets en production
- ☐ Reporting au COMEX et au Conseil

**Cadence** : ___ réunions/an + sessions extraordinaires si incident

**Critère de qualité** : un comité sans pouvoir Go/No-Go est
ornemental. Vérifiez explicitement les pouvoirs.

### B. Processus de revue d'un projet IA

| Phase | Livrable attendu | Validateur |
|:------|:-----------------|:-----------|
| Cadrage initial | Note d'opportunité + classification AI Act | Comité IA (1ère revue) |
| Conception | Analyse d'impact (AI Act + RGPD + RH) | Conformité + DRH |
| Pilote | Plan de garde-fous + tests | DSI + métier |
| Pré-déploiement | Dossier de mise en production | Comité IA (Go/No-Go) |
| Production | Reporting périodique + monitoring | DSI + audit interne |
| Revue annuelle | Bilan, ajustements, décommissionnement | Comité IA |

---

## Étape 3 — Cartographier les obligations légales

### A. Classification AI Act EU

Pour chaque cas d'usage IA candidat ou déployé, identifier :

| Cas d'usage | Catégorie AI Act | Obligations principales |
|:------------|:-----------------|:------------------------|
|             | ☐ Interdit       |                         |
|             | ☐ Haut risque    |                         |
|             | ☐ Risque limité  |                         |
|             | ☐ Risque minimal |                         |

**Rappel des catégories AI Act** :
- **Interdit** : notation sociale par autorités publiques, manipulation
  cognitive, identification biométrique massive en temps réel dans
  espaces publics (sauf exceptions listées). Ne peut pas être déployé.
- **Haut risque** : recrutement et gestion RH, scoring de crédit,
  évaluation éducative, applications médicales, justice, services
  publics, infrastructures critiques. Obligations strictes (registre,
  analyse de conformité, supervision humaine, qualité données,
  documentation, etc.).
- **Risque limité** : chatbots, deepfakes, systèmes interagissant
  directement avec des humains. Obligations de transparence.
- **Risque minimal** : reste. Pas d'obligations spécifiques.

### B. Conformité élargie

| Domaine | Référence | Obligations clés | Statut interne |
|:--------|:----------|:-----------------|:---------------|
| Données personnelles | RGPD (UE 2016/679) | Base légale, minimisation, droits des personnes, AIPD | ☐ Conforme ☐ En cours |
| Droit du travail | Code du travail | Information-consultation CSE, droits collectifs | ☐ Conforme ☐ En cours |
| Sectoriel | (préciser : DSP2, MiFID, RGCM…) |  | ☐ Conforme ☐ En cours |
| Standards | NIST AI RMF, ISO 23894 (selon scope) | Cadres de référence opérationnels | ☐ Adopté ☐ En cours |

---

## Étape 4 — Définir transparence, explicabilité et redressement

### A. Information des parties prenantes

**Salariés** :
- ☐ Information sur les systèmes IA qui les concernent
- ☐ Formation aux outils utilisés au quotidien
- ☐ Procédure de signalement d'erreur ou de biais perçu
- ☐ Information-consultation IRP en amont des projets

**Clients / usagers** :
- ☐ Information transparente quand ils interagissent avec une IA
- ☐ Possibilité d'escalade vers un humain
- ☐ Information sur les décisions automatisées les concernant
- ☐ Voie de recours si désaccord

**Société civile / régulateurs** :
- ☐ Documentation publique des systèmes à fort impact
- ☐ Engagement à coopérer avec les régulateurs (CNIL, etc.)
- ☐ Politique de divulgation responsable des incidents

### B. Mécanismes de redressement

Comment l'organisation traite-t-elle un incident, une plainte ou
un biais détecté ?

| Étape | Responsable | Délai cible |
|:------|:------------|:-----------:|
| Réception du signalement |  | 48h |
| Analyse préliminaire |  | 1 semaine |
| Décision (suspension / correction / classement) |  | 2 semaines |
| Communication aux parties prenantes |  | Selon décision |
| Retour d'expérience capitalisé |  | 1 mois |

**Critère de qualité** : un processus de redressement sans délais
définis est inopérant. Quantifiez les délais.

---

## Synthèse — Charte en une page

À partir des 4 étapes, rédiger la charte synthétique en une page,
diffusable en interne et externe :

**Préambule** (3-5 lignes — engagement de l'organisation) :

> _____________________________________________________________
> _____________________________________________________________
> _____________________________________________________________

**Principes directeurs** (5 principes adaptés à l'organisation) :

1. _____________________________________________________________
2. _____________________________________________________________
3. _____________________________________________________________
4. _____________________________________________________________
5. _____________________________________________________________

**Gouvernance** (1-2 paragraphes — qui décide, comment) :

> _____________________________________________________________
> _____________________________________________________________

**Engagement de transparence et de redressement** (1 paragraphe) :

> _____________________________________________________________

**Signataire et date** : ________________________________________

---

## Critères de qualité — auto-évaluation

Avant de présenter la charte au COMEX, à un IRP ou à un client,
vérifiez :

- ☐ Le périmètre est défini explicitement (systèmes, fournisseurs, sites).
- ☐ Les 5 principes sont déclinés en actions concrètes pour l'organisation.
- ☐ Le comité IA a un pouvoir de décision réel (Go/No-Go).
- ☐ Les processus de revue sont explicites avec livrables et validateurs.
- ☐ Chaque cas d'usage IA est classifié AI Act EU.
- ☐ Les obligations RGPD, droit du travail, sectorielles sont identifiées.
- ☐ Les mécanismes de transparence et de redressement ont des délais quantifiés.
- ☐ La charte est compatible avec une publication externe sans sur-promesse.

Si l'une de ces cases reste vide, reprenez l'étape correspondante
avant de signer la charte.

---

*Canvas v1.0 — Mai 2026. La version PDF stylisée arrive en Phase 5
du projet AI Strategy. En attendant, ce fichier Markdown est
imprimable, copiable dans un outil de prise de notes (Notion,
Obsidian, Word) ou utilisable directement comme support d'atelier.*

*Pour signaler une erreur ou une suggestion d'amélioration :
https://github.com/melafrit/ai-strategy/issues*
