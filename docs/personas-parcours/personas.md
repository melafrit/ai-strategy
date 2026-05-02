# Personas — AI Strategy

> **4 personas** détaillés représentant les 3 audiences principales définies en Phase 1 (cf. ADR-004).
> Ces personas servent à **calibrer** chaque décision éditoriale, design ou produit dans les phases suivantes : « ce contenu sert-il P1 ? P2 ? Aucun ? ».

| Métadonnée | Valeur |
| :--- | :--- |
| **Version** | 1.0 |
| **Phase** | 2 — Architecture et design system |
| **Statut** | Ratifié — référence pour la rédaction Phase 4 |

---

## 1. Vue d'ensemble

| Persona | Audience principale | Usage type | Taux de visite estimé* |
| :--- | :--- | :--- | :---: |
| **Claire — COO** | Dirigeants et top management | Briefings exécutifs, capstone | 25 % |
| **Karim — Consultant senior** | Consultants et transformation | Templates, matrices, fiches | 35 % |
| **Léa — Enseignante MBA** | Enseignants et étudiants | Quiz, glossaire, dispositif pédagogique | 20 % |
| **Yacine — Étudiant Master SI** | Enseignants et étudiants | Pages module, podcasts, glossaire | 20 % |

*Estimation indicative en début de projet — à confirmer en Phase 7 par analytics privacy-friendly si activé.*

---

## 2. Persona 1 — Claire, COO

```
┌─────────────────────────────────────────────────────────────┐
│ 👩‍💼 CLAIRE                                                  │
│ 47 ans · COO d'une ETI industrielle (800 collaborateurs)    │
│ Région parisienne · Bilingue FR/EN                          │
└─────────────────────────────────────────────────────────────┘
```

### Profil
- **Formation** : ESCP + MBA INSEAD.
- **Expérience** : 20 ans de management opérationnel, 8 ans dans son entreprise actuelle.
- **Mandat IA** : nommée sponsor IA en COMEX il y a 3 mois, doit présenter une roadmap dans 6 mois.
- **Bagage technique** : limité — connaît les concepts business de l'IA, pas les détails des modèles.

### Contexte business
- Industrie B2B, marges sous pression, transformation numérique en cours depuis 2 ans.
- Direction générale alignée sur la nécessité d'agir, mais flou sur le « comment ».
- Budget initial débloqué : 1 M€ sur 18 mois pour pilotes IA.
- Pression interne : éviter le « projet vitrine » sans valeur métier réelle.

### Besoins prioritaires
1. **Cadrer rapidement** : qu'est-ce que l'IA, ce qu'elle peut et ne peut pas faire pour son organisation.
2. **Crédibiliser sa démarche** : sources solides, références sectorielles, vocabulaire précis.
3. **Produire une roadmap** : structure claire, exemples, checklist exécutive.
4. **Décider de la gouvernance** : comité IA, rôles, processus, conformité.

### Frustrations
- « Trop de bruit médiatique, pas assez de structure. »
- « Les consultants externes vendent des frameworks propriétaires opaques. »
- « Les MOOC techniques perdent les non-développeurs en 3 modules. »
- « Mes équipes me demandent des décisions sur des sujets que je ne maîtrise pas encore. »

### Citations type
> *« J'ai besoin d'un endroit où je peux comprendre en 30 minutes, et qui ne m'envoie pas vers du Python le lendemain. »*

> *« Si je présente ça en COMEX, est-ce que ça tient debout devant un audit ? »*

### Usage du site
- **Entrée principale** : page d'accueil → carte audience « Dirigeants ».
- **Pages-clés** : Programme, Module 5 (Gouvernance), Module 6 (Roadmap), Capstone, FAQ thème indépendance.
- **Téléchargements** : synthèses exécutives PDF, checklist exécutive du capstone, charte de gouvernance IA.
- **Médias** : podcast Saison 1 en voiture (acte IV-V notamment).
- **Sessions type** : 30-45 minutes hebdomadaires sur 3-4 mois, beaucoup en mobile.

### Critères de satisfaction
- Le site répond à ses 4 besoins prioritaires sans la noyer.
- La synthèse exécutive d'une page module suffit à mener une réunion d'1 h.
- La hiérarchie des sources la rassure sur la rigueur.

---

## 3. Persona 2 — Karim, Consultant senior

```
┌─────────────────────────────────────────────────────────────┐
│ 👨‍💼 KARIM                                                   │
│ 36 ans · Consultant indépendant transformation digitale     │
│ Tunis · Trilingue FR/EN/AR                                  │
└─────────────────────────────────────────────────────────────┘
```

### Profil
- **Formation** : Centrale Paris + 4 ans Big 4.
- **Expérience** : 10 ans, dont 3 en cabinet, 4 chez un GAFA Cloud, 3 en indépendant.
- **Pratique** : missions courtes (4-12 semaines) dans des PME et ETI au Maghreb et en France.
- **Bagage technique** : élevé — comprend les modèles, sait lire un papier de recherche, déploie des PoCs.

### Contexte business
- Mission type : « Cadrage stratégie IA » pour un comité de direction.
- Doit produire des livrables clients en quelques jours : matrices, frameworks, slides.
- Refacture entre 1500 et 2200 € / jour. Marge sur le travail intellectuel, pas le temps passé à inventer la roue.
- Clients : francophones et arabophones, parfois anglophones internationaux.

### Besoins prioritaires
1. **Templates prêts à l'emploi** : matrices, canvas, charters, registres, checklists.
2. **Cas d'études crédibles** : pour benchmark client (« regardez ce que Morgan Stanley a fait »).
3. **Vocabulaire trilingue** : pour aligner les comités multinationaux.
4. **Sources premium** : pour étayer ses recommandations en COMEX client.

### Frustrations
- « Refaire un canvas use-case à chaque mission, c'est du temps perdu. »
- « Les cabinets concurrents ont des frameworks propriétaires que je ne peux pas reproduire. »
- « Les sources francophones de qualité sont rares. »
- « Les contenus anglophones nécessitent une traduction et adaptation culturelle. »

### Citations type
> *« Si je trouve une matrice valeur/faisabilité bien construite avec un exemple concret, je gagne 4 heures sur la préparation client. »*

> *« Le client m'a dit : "tu peux nous expliquer la gouvernance IA dans nos termes ?". J'ai besoin d'une page que je peux envoyer comme lecture préparatoire. »*

### Usage du site
- **Entrée principale** : recherche Google sur « matrice priorisation cas d'usage IA » → page Ressources filtrée.
- **Pages-clés** : toutes les fiches PDF, études de cas (Morgan Stanley, Stripe, Klarna), Module 6 (roadmap), gouvernance.
- **Téléchargements** : matrices et templates en priorité, glossaire imprimable, fiches cas.
- **Sessions type** : 15-30 minutes ciblées, plusieurs fois par jour pendant une mission.
- **Comportement** : revient régulièrement, met les pages en favoris, partage des liens à ses clients.

### Critères de satisfaction
- Templates téléchargeables sans inscription, en FR, EN et AR.
- Citation propre du site dans ses livrables (licence claire).
- Cas d'études assez détaillés pour servir de comparable client.
- Vocabulaire trilingue cohérent.

---

## 4. Persona 3 — Léa, Enseignante MBA

```
┌─────────────────────────────────────────────────────────────┐
│ 👩‍🏫 LÉA                                                     │
│ 42 ans · Enseignante en école de management                 │
│ Lyon · Bilingue FR/EN                                       │
└─────────────────────────────────────────────────────────────┘
```

### Profil
- **Formation** : Doctorat en Sciences de Gestion + 5 ans d'expérience cabinet avant l'enseignement.
- **Position** : Maître de conférences, responsable d'un module « Stratégie IA » de 30 h pour des MBA Executive (cohortes de 25-40 cadres).
- **Bagage technique** : moyen — bonne culture sur ML/GenAI, mais pas développeur.
- **Activité parallèle** : interventions en formation continue inter et intra-entreprise.

### Contexte pédagogique
- Cours obligatoire dans un MBA Executive, niveau professionnel élevé des participants.
- Doit articuler concepts, cas, exercices, évaluation finale (rapport individuel).
- Exigences institutionnelles : référence à des sources académiques, dispositif d'évaluation rubric-based.
- Le programme est révisé chaque année.

### Besoins prioritaires
1. **Dispositif pédagogique structuré** : objectifs, contenu, exercices, évaluation.
2. **Cas d'études** transposables en discussion de groupe.
3. **Quiz et rubrics** réutilisables pour l'évaluation des participants.
4. **Glossaire** propre à distribuer en début de cours.

### Frustrations
- « Les manuels mis à jour annuellement ne suivent pas la vitesse de l'IA. »
- « Les contenus francophones de qualité académique sont rares pour ce niveau MBA. »
- « Les MOOC tech sont trop techniques, ceux pour managers sont parfois trop superficiels. »
- « Construire des rubrics évaluation rigoureuses prend des journées. »

### Citations type
> *« Je veux des questions de discussion pour mes ateliers de cas, pas juste des QCM mémoire. »*

> *« Si la rubric d'évaluation du capstone est solide, je peux l'adapter à mon contexte en 2 heures. »*

### Usage du site
- **Entrée principale** : recommandation collègue + lien direct sur la page Programme.
- **Pages-clés** : Programme (vue d'ensemble), tous les modules, études de cas (questions de discussion), Capstone (rubric), Glossaire.
- **Téléchargements** : quiz imprimables, rubric, glossaire, fiches concepts.
- **Sessions type** : 1-2 sessions intensives en juin-juillet pour préparer la rentrée, puis usage hebdomadaire pendant le cours.

### Critères de satisfaction
- Toutes les ressources sont sous licence permettant l'usage pédagogique (CC BY-NC-SA 4.0 le permet).
- Les questions de discussion sont ouvertes et défendables académiquement.
- La rubric capstone peut être adaptée à son contexte en quelques heures.
- Le glossaire trilingue est utilisable directement.

---

## 5. Persona 4 — Yacine, Étudiant Master SI

```
┌─────────────────────────────────────────────────────────────┐
│ 👨‍🎓 YACINE                                                  │
│ 24 ans · Étudiant en M2 Systèmes d'Information              │
│ Casablanca · Bilingue AR/FR, anglais courant                │
└─────────────────────────────────────────────────────────────┘
```

### Profil
- **Formation** : Licence SI au Maroc, M2 Management des SI à l'École nationale (publique).
- **Bagage technique** : intermédiaire — sait coder en Python, comprend les bases du ML.
- **Position** : étudiant en stage de fin d'études dans une banque, mission « cartographie des cas d'usage IA ».
- **Mémoire de fin d'études** : sur la gouvernance IA dans le secteur bancaire.

### Contexte académique
- Mémoire de 60-80 pages à rendre dans 5 mois.
- Tutorat universitaire faible sur le sujet IA — peu de profs spécialisés.
- Peu de moyens financiers : ne peut pas acheter de cours en ligne, dépend de sources gratuites.
- Bilingue maghrébin : navigue naturellement entre français, arabe et anglais.

### Besoins prioritaires
1. **Comprendre les concepts** sans bagage technique avancé.
2. **Trouver des références académiques et pratiques** pour son mémoire.
3. **Distinguer le marketing du sérieux** dans la masse de contenu IA.
4. **Travailler en arabe** quand le sujet implique des partenaires non francophones.

### Frustrations
- « La plupart des bons contenus sont anglophones et payants. »
- « Mon directeur de mémoire est généraliste, pas spécialiste IA. »
- « Les blogs francophones sont parfois de mauvaise qualité, mais difficiles à distinguer des bons. »
- « Le vocabulaire arabe pour l'IA est encore en construction, je galère pour mon entretien arabophone. »

### Citations type
> *« Si je peux citer un site avec sources claires dans mon mémoire, mon jury me prendra au sérieux. »*

> *« Le glossaire arabe-français-anglais m'a sauvé la vie pour mes interviews terrain. »*

### Usage du site
- **Entrée principale** : recherche Google FR + AR + EN.
- **Pages-clés** : Modules (toutes les pages), Études de cas (gouvernance, NIST, AI Act), Glossaire, Capstone.
- **Téléchargements** : fiches concepts, fiches cas, quiz pour s'auto-évaluer.
- **Sessions type** : 1-3 heures par session, sur 3-4 mois.
- **Comportement** : lecture longue et en profondeur, navigue entre les 3 langues, prend des notes.

### Critères de satisfaction
- Les sources permettent une citation académique propre dans son mémoire.
- Le glossaire trilingue est cohérent (mêmes définitions traduites).
- Les contenus sont accessibles sans inscription ni paiement.
- La version arabe est de qualité éditoriale équivalente au français.

---

## 6. Synthèse — Ce que les personas imposent au site

### 6.1 Décisions éditoriales

| Décision | Conséquence directe |
| :--- | :--- |
| Triple lecture (synthèse / pédagogie / annexes) | **Claire** lit la synthèse, **Karim** prend les annexes, **Léa** et **Yacine** lisent tout |
| Hiérarchie des sources visible | **Yacine** peut citer académiquement, **Claire** peut auditer |
| Trilingue FR/EN/AR symétrique | **Karim** et **Yacine** travaillent dans leur langue de travail |
| Licence ouverte CC BY-NC-SA 4.0 | **Léa** utilise en cours, **Karim** dans ses templates clients |
| Quiz avec persistance locale | **Yacine** s'auto-évalue, **Léa** distribue les quiz à ses étudiants |

### 6.2 Décisions de produit

| Décision | Persona principal servi |
| :--- | :--- |
| Mention indépendance MIT visible | Tous (rassure) — particulièrement Léa et Yacine pour citation |
| Page Capstone avec rubric | Léa (évaluation), Karim (livrable client), Claire (présentation COMEX) |
| Saison 1 podcast narrative | Claire (mobilité), Yacine (apprentissage continu) |
| Fiches PDF granulaires | Karim (mission), Léa (distribution étudiants) |
| Page Ressources avec filtres | Karim (recherche ciblée) |

### 6.3 Décisions de communication

| Audience | Ton à adopter |
| :--- | :--- |
| Claire | Sobre, factuel, exécutif — éviter le jargon technique |
| Karim | Technique modéré, opérationnel, action-oriented |
| Léa | Académique, sourcé, pédagogique |
| Yacine | Pédagogique sans être condescendant, accessible |

⚠️ Le ton **par défaut** du site doit être lisible par tous les 4. Des **encadrés spécifiques** (« pour le consultant », « pour l'enseignant », « pour le sponsor IA ») peuvent enrichir les pages sans changer le ton de base.

---

## 📎 Documents associés

- [User Journeys](./user-journeys.md) — comment chaque persona traverse le site
- [Charte de cadrage](../cadrage/charte-de-cadrage.md) — section 4 (esquisse initiale des personas)
- [Sitemap](../architecture/sitemap.md)
