/**
 * src/content/quizzes/module-5.ts
 *
 * Canonical data for the Module 5 formative quiz (IA dans l'entreprise
 * et la société). Same shape as previous module quizzes.
 */

import type { Quiz } from '@/lib/quiz-schema';

const quizModule5: Quiz = {
  id: 'module-5-ia-societe',
  title: "Quiz — Module 5 : IA dans l'entreprise et la société",
  intro:
    "Sept questions pour vérifier votre compréhension des enjeux de gouvernance, d'éthique, de conformité et d'impact sur le travail. Trois questions de compréhension, trois d'application, une de jugement. Visez 5/7 pour passer sereinement au Module 6.",

  scoringBands: [
    {
      min: 0,
      max: 3,
      label: 'Reprenez les fondamentaux gouvernance',
      interpretation:
        "Le Module 5 mérite une seconde lecture. Concentrez-vous sur la distinction éthique vs conformité, la classification AI Act EU (interdit / haut risque / risque limité / risque minimal), et les composantes minimales d'une gouvernance IA opérationnelle. Ces enjeux sont devenus structurants — pas optionnels.",
    },
    {
      min: 4,
      max: 5,
      label: 'Bases solides, gouvernance opérationnelle à muscler',
      interpretation:
        "Vous maîtrisez les concepts. Le passage à la gouvernance opérationnelle (comité IA avec pouvoir de décision, processus de revue, articulation avec le dialogue social) reste à consolider. Refaites l'activité pratique (§6) pour structurer une charte adaptée à votre organisation, puis enchaînez avec le Module 6.",
    },
    {
      min: 6,
      max: 7,
      label: 'Maîtrise solide',
      interpretation:
        "Vous tenez bien le cadrage gouvernance et société. Le Module 6 (Futur de l'IA) prend de la hauteur sur les évolutions à 3-10 ans et vous prépare à construire une roadmap stratégique pour votre organisation. Bonne continuation.",
    },
  ],

  questions: [
    {
      kind: 'comprehension',
      question:
        "Quelle est la différence essentielle entre éthique et conformité dans le contexte d'un projet IA ?",
      options: [
        "L'éthique est obligatoire, la conformité est optionnelle.",
        "La conformité couvre les obligations imposées par la loi (AI Act, RGPD, droit du travail) — c'est un seuil minimum à respecter. L'éthique est plus large : elle interroge ce qui est juste, équitable et désirable, même quand la loi ne l'exige pas. Une organisation peut être conforme et pourtant agir de manière non éthique.",
        "L'éthique concerne les techniciens, la conformité concerne les juristes.",
        "Conformité et éthique sont synonymes dans le contexte de l'IA.",
      ],
      correctIndex: 1,
      explanation:
        "La conformité est un cadre minimum imposé : respecter le RGPD, l'AI Act, le droit du travail, les normes sectorielles. L'éthique est plus exigeante : elle pose des questions de justice et d'équité que la loi ne couvre pas toujours (par exemple, est-il acceptable de profiler des candidats même sans que ce soit illégal ?). Pour le manager, les deux sont nécessaires : la conformité protège juridiquement, l'éthique protège la confiance des parties prenantes (salariés, clients, société). Les deux ne se confondent pas, et ne se substituent pas. À revoir : §3.1.",
    },
    {
      kind: 'comprehension',
      question:
        "L'AI Act européen (Règlement UE 2024/1689) classe les systèmes d'IA en quatre catégories de risque. Quelles sont-elles ?",
      options: [
        "Faible / Moyen / Fort / Critique.",
        "Pratiques interdites (par exemple notation sociale par les autorités, manipulation cognitive) / Haut risque (RH, crédit, justice, santé, services publics) / Risque limité (transparence requise, par exemple chatbots) / Risque minimal (le reste, pas d'obligations spécifiques).",
        "Public / Privé / Hybride / Mixte.",
        "Open source / Propriétaire / Cloud / On-premise.",
      ],
      correctIndex: 1,
      explanation:
        "L'AI Act EU adopte une approche basée sur le risque, avec quatre niveaux. Les pratiques interdites (notation sociale, manipulation cognitive) ne peuvent pas être déployées du tout. Les usages à haut risque (recrutement, scoring de crédit, justice, santé, infrastructures critiques, services publics, éducation) sont soumis à des obligations strictes (analyse de conformité, registre, supervision humaine, qualité des données, documentation). Les usages à risque limité (chatbots, deepfakes) ont des obligations de transparence. Le reste relève du risque minimal. Pour un dirigeant, identifier la classification de chaque cas d'usage est la première étape de conformité — pas la dernière. À revoir : §3.3.",
    },
    {
      kind: 'comprehension',
      question:
        "Selon les travaux de David Autor (MIT) sur l'impact des technologies sur l'emploi, quelle est la perspective la plus défendable empiriquement ?",
      options: [
        "L'IA va remplacer la majorité des emplois en moins de 10 ans.",
        "L'IA n'aura aucun impact significatif sur l'emploi global.",
        "L'IA est susceptible d'augmenter le travail (le rendre plus productif et plus qualifié) plutôt que de le remplacer en masse, à condition que les politiques publiques et les pratiques d'entreprise accompagnent la transition (formation, redéploiement, dialogue social). L'effet n'est pas mécanique mais résulte de choix collectifs.",
        "Toutes les technologies passées ont détruit l'emploi.",
      ],
      correctIndex: 2,
      explanation:
        "Les travaux de David Autor (MIT, professeur d'économie) défendent que l'effet net des technologies — y compris l'IA — sur l'emploi dépend des choix faits collectivement. Historiquement, les technologies ont à la fois détruit certains emplois et créé d'autres tâches, sans réduction structurelle de l'emploi global. Mais l'effet bénéfique n'est pas mécanique : il résulte d'investissements en formation, d'institutions du marché du travail, et de pratiques d'entreprise qui choisissent l'augmentation plutôt que le remplacement pur. Les options a et d sont des simplifications excessives ; l'option b ignore les transformations sectorielles réelles. À revoir : §3.4.",
    },
    {
      kind: 'application',
      question:
        "Une organisation décide de mettre en place un comité de gouvernance IA. Quels sont les deux choix structurels les plus critiques pour qu'il soit opérationnel ?",
      options: [
        "Choisir un nom marketing et publier un communiqué de presse.",
        "Doter le comité d'un pouvoir de décision réel sur le déploiement des projets IA (Go/No-Go, conditions, suspension) — pas seulement un rôle consultatif — et y faire siéger des représentants opérationnels (DSI, métier, conformité, RH, parfois IRP), pas uniquement des dirigeants.",
        "Externaliser le comité à un cabinet de conseil pour garantir l'indépendance.",
        "Fixer une fréquence de réunion mensuelle minimale.",
        ],
      correctIndex: 1,
      explanation:
        "Un comité IA sans pouvoir de décision est une charte ornementale — il documente des intentions sans les faire respecter. La gouvernance opérationnelle suppose un mandat explicite : Go/No-Go sur les projets, conditions de déploiement, capacité à suspendre. La composition mixte (dirigeants + opérationnels + conformité + RH + parfois représentants du personnel) garantit que les décisions tiennent compte du terrain — pas seulement de la stratégie de communication. Les options a, c, d sont des éléments secondaires (ou erronés pour c — l'externalisation complète ne crée pas de gouvernance interne). À revoir : §3.2 et §4.2.",
    },
    {
      kind: 'application',
      question:
        "Une entreprise envisage de déployer un système d'IA pour automatiser une partie de son service client. Quels sont les deux livrables de gouvernance les plus critiques à produire avant le déploiement ?",
      options: [
        "Un communiqué de presse et un site web dédié.",
        "Une analyse d'impact (incluant la classification AI Act, l'analyse RGPD, l'analyse RH avec consultation IRP si applicable) et une politique d'usage explicite (qui peut activer le système, dans quels cas, avec quelle escalade humaine, comment les clients sont informés).",
        "Un nom de produit attractif et un logo distinctif.",
        "Un benchmark de la concurrence et un budget marketing.",
      ],
      correctIndex: 1,
      explanation:
        "L'analyse d'impact et la politique d'usage sont les deux piliers d'une gouvernance opérationnelle. L'analyse d'impact identifie les obligations légales (AI Act EU classification, RGPD pour les données personnelles, droit du travail si l'organisation du service client est modifiée) et les risques éthiques (biais possibles, qualité de service inégale entre groupes). La politique d'usage transforme cette analyse en règles claires : qui peut faire quoi, dans quels cas, avec quelle traçabilité. Sans ces deux livrables, le projet est un risque juridique et réputationnel. Les autres options sont des éléments de communication secondaires. À revoir : §3.3 et §4.3.",
    },
    {
      kind: 'application',
      question:
        "Un projet d'automatisation de tâches par GenAI dans une équipe de 30 analystes va supprimer environ 8 postes en 18 mois selon les estimations internes. Quelles sont les deux exigences les plus critiques en termes de dialogue social et de RH ?",
      options: [
        "Communiquer le moins possible pour éviter les réactions.",
        "Lancer rapidement le projet et gérer les conséquences au fil de l'eau.",
        "Déclencher l'information-consultation des instances représentatives du personnel (CSE en France) en amont du projet (pas après), et construire un plan d'accompagnement explicite (redéploiement interne prioritaire, formation, mobilité, mesures pour ceux qui partent) — l'argumentaire combinant productivité + qualité + ergonomie est plus défendable qu'une logique de pure réduction d'effectifs.",
        "Confier le sujet uniquement aux RH sans implication des équipes opérationnelles.",
      ],
      correctIndex: 2,
      explanation:
        "L'information-consultation du CSE en amont est une obligation légale en France pour tout projet impactant l'organisation du travail — pas après. La construction d'un plan d'accompagnement explicite (redéploiement, formation, mobilité) est à la fois une obligation morale et une condition de réussite opérationnelle (un projet contesté est mal adopté). L'argumentaire combinant plusieurs bénéfices (productivité + qualité + ergonomie) est plus défendable que la logique de pure réduction d'effectifs, qui est socialement et juridiquement fragile. Les options a, b, d sont des erreurs classiques qui produisent contestations, blocages et atteinte à la marque employeur. À revoir : §3.5 et §4.4.",
    },
    {
      kind: 'judgment',
      question:
        "Un éditeur SaaS vous propose une « plateforme IA éthique et conforme » qui « rend votre organisation conforme à l'AI Act et au RGPD en moins de 30 jours, sans changement de processus internes ». Quel est le bon réflexe managérial ?",
      options: [
        "Signer rapidement pour obtenir le label de conformité avant les concurrents.",
        "Refuser systématiquement par principe de précaution.",
        "Demander à l'éditeur de citer 3 références publiques de clients européens audités, exiger l'identification précise des obligations AI Act/RGPD couvertes (et non couvertes), comprendre que la conformité n'est jamais une fonctionnalité d'outil mais un système organisationnel (politiques, processus, gouvernance, documentation, formation), et anticiper que la conformité demandera des changements internes que l'éditeur ne peut pas faire à votre place.",
        "Acheter et déléguer la conformité à un cabinet d'audit externe.",
      ],
      correctIndex: 2,
      explanation:
        "La promesse « conformité IA en 30 jours sans changement de processus » est un signal d'alerte typique. Trois raisons : (1) la conformité AI Act/RGPD n'est jamais une fonctionnalité d'outil isolée — c'est un système qui combine politiques internes, processus, gouvernance, documentation, formation, traçabilité ; (2) un outil peut aider à documenter et structurer, mais ne remplace pas l'organisation interne qui doit être adaptée ; (3) l'AI Act exige des analyses d'impact, des registres, une supervision humaine — autant de processus organisationnels. Le bon réflexe combine la mise à l'épreuve (références vérifiables) et la lucidité sur ce qu'un outil peut et ne peut pas faire. Déléguer entièrement à un cabinet externe (d) ne crée pas de gouvernance interne durable. À revoir : §3.3 et §4.2.",
    },
  ],
};

export default quizModule5;
