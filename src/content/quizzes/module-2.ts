/**
 * src/content/quizzes/module-2.ts
 *
 * Canonical data for the Module 2 formative quiz (Machine Learning en
 * entreprise). Follows the same shape as module-1.ts.
 */

import type { Quiz } from '@/lib/quiz-schema';

const quizModule2: Quiz = {
  id: 'module-2-machine-learning',
  title: 'Quiz — Module 2 : Machine Learning en entreprise',
  intro:
    "Sept questions pour vérifier votre compréhension du Machine Learning appliqué aux décisions business. Trois questions de compréhension, trois d'application, une de jugement. Visez 5/7 pour passer sereinement au Module 3.",

  scoringBands: [
    {
      min: 0,
      max: 3,
      label: 'Reprenez les fondamentaux ML',
      interpretation:
        "Le Module 2 mérite une seconde lecture. Concentrez-vous sur les 5 concepts (§3) et les 4 erreurs fréquentes (§4). Les distinctions supervisé / non supervisé / renforcement et la notion de surapprentissage sont les briques essentielles. Pas de pression : le but est diagnostic, pas évaluatif.",
    },
    {
      min: 4,
      max: 5,
      label: 'Bases solides, jugement de pertinence à muscler',
      interpretation:
        "Vous maîtrisez les concepts. Le passage au jugement business — décider si un cas d'usage est candidat ML — reste à consolider. Refaites l'activité pratique (§6) avec un cas réel de votre organisation, puis enchaînez avec le Module 3.",
    },
    {
      min: 6,
      max: 7,
      label: 'Maîtrise solide',
      interpretation:
        "Vous tenez bien le cadrage ML. Le Module 3 (IA générative en entreprise) prolonge naturellement ces bases en abordant les foundation models et les workflows de pilote GenAI. Bonne continuation.",
    },
  ],

  questions: [
    {
      kind: 'comprehension',
      question:
        "Quelle est la différence essentielle entre apprentissage supervisé et apprentissage non supervisé ?",
      options: [
        "Le supervisé utilise plus de données que le non supervisé.",
        "Le supervisé apprend à partir d'exemples étiquetés (entrée → sortie attendue) ; le non supervisé cherche des structures (groupes, anomalies, patterns) dans des données sans étiquettes.",
        "Le supervisé est plus rapide à entraîner que le non supervisé.",
        "Le supervisé fonctionne uniquement avec des données numériques, le non supervisé avec n'importe quel type.",
      ],
      correctIndex: 1,
      explanation:
        "Le supervisé répond à la question « étant donné X, prédire Y », à condition de disposer d'un historique annoté (transactions étiquetées 'fraude' ou 'non-fraude' par exemple). Le non supervisé répond à « qu'y a-t-il dans ces données ? » sans cible définie (segmenter une clientèle, détecter des anomalies). Pour le manager, la distinction guide la faisabilité : le supervisé exige des données étiquetées, qui sont souvent le goulot d'étranglement le plus coûteux. À revoir : §3.1.",
    },
    {
      kind: 'comprehension',
      question:
        "Qu'est-ce que le surapprentissage (overfitting), et pourquoi est-ce un problème majeur ?",
      options: [
        "Quand le modèle apprend trop lentement et n'atteint jamais la performance souhaitée.",
        "Quand le modèle mémorise les données d'entraînement (y compris leur bruit) au lieu d'en apprendre les régularités, ce qui dégrade sa performance sur des données nouvelles.",
        "Quand le modèle est entraîné sur trop de données et devient trop coûteux.",
        "Quand le modèle est si performant qu'il ne reste rien à améliorer.",
      ],
      correctIndex: 1,
      explanation:
        "Un modèle surappris est très bon sur l'historique mais s'effondre en production. C'est l'écart entre la performance attendue (mesurée sur les données d'entraînement) et la performance réelle (sur de nouvelles données). Pour un dirigeant, le signal est typique : un POC qui obtient 98 % en interne et 73 % chez le premier client. La parade s'appelle validation croisée et ensemble de test indépendant — c'est non négociable. À revoir : §3.4.",
    },
    {
      kind: 'comprehension',
      question:
        "Dans une stratégie générique au sens de Porter, à quelle dimension le Machine Learning contribue-t-il typiquement quand il sert à personnaliser l'expérience d'un client ?",
      options: [
        "Leadership de coût (réduction structurelle des coûts).",
        "Différenciation (création d'une valeur perçue par le client que les concurrents ne reproduisent pas).",
        "Focalisation (servir un segment spécifique avec une précision impossible aujourd'hui).",
        "Aucune des trois — la personnalisation n'a pas de dimension stratégique.",
      ],
      correctIndex: 1,
      explanation:
        "La personnalisation crée typiquement une expérience perçue comme supérieure (recommandations pertinentes, parcours fluide, offre adaptée), ce qui s'inscrit dans une stratégie de différenciation. Spotify Discover Weekly et Netflix sont des exemples canoniques. Attention : la même technologie ML peut servir une stratégie de coût (par exemple optimiser la logistique) ou de focalisation (par exemple servir un segment de niche). Le cadrage stratégique se fait au cas par cas. À revoir : §3.5 et §5.",
    },
    {
      kind: 'application',
      question:
        "Une banque dispose de 20 ans d'historique de demandes de prêt étiquetées (remboursé / défaut). Quel type de problème ML est le plus naturel pour automatiser une partie de l'évaluation ?",
      options: [
        "Apprentissage non supervisé (clustering des dossiers).",
        "Apprentissage supervisé (classification binaire : risque acceptable / risque inacceptable), avec stratégie human-in-the-loop pour les cas limites.",
        "Apprentissage par renforcement (le modèle apprend par essai-erreur sur les nouveaux dossiers).",
        "Aucun — un modèle de règles métier explicites est toujours plus approprié pour ce type de décision.",
      ],
      correctIndex: 1,
      explanation:
        "L'historique étiqueté est le terrain naturel du supervisé : chaque dossier passé fournit une paire (entrée = caractéristiques du dossier, sortie = remboursement ou défaut). Le non supervisé pourrait éclairer la segmentation mais ne répond pas à la question 'risque acceptable ?'. Le renforcement est inadapté ici (pas de boucle d'essais avec récompense). Les règles métier ont leur place mais ne s'opposent pas au ML — elles sont complémentaires (notamment pour traduire les obligations réglementaires). Le human-in-the-loop pour les cas limites est exigé par l'AI Act EU. À revoir : §3.1 et §3.4.",
    },
    {
      kind: 'application',
      question:
        "Une équipe propose un projet ML pour optimiser les niveaux de stocks dans un entrepôt logistique. Quelles sont les deux dimensions les plus critiques à évaluer dès le cadrage ?",
      options: [
        "La popularité de l'algorithme et la taille de l'équipe data.",
        "La qualité des données historiques (saisonnalité, ruptures, retours) et l'intégration au système d'information existant (ERP, WMS).",
        "La performance brute du modèle et le temps d'inférence.",
        "Le coût total du projet et le délai de mise en production.",
      ],
      correctIndex: 1,
      explanation:
        "L'optimisation de stocks par ML est un cas typique où la valeur business dépend principalement des données (historique propre, signaux représentatifs des saisonnalités, incidents et exceptions documentés) et de l'intégration au workflow opérationnel existant (l'ERP qui passe les commandes, le WMS qui exécute). Le modèle lui-même représente typiquement 20-40 % du budget, le reste se répartit sur ces deux couches. Les autres options sont importantes mais secondaires — un modèle parfait sur des données fausses n'a aucune valeur. À revoir : §3.4 et §4.1.",
    },
    {
      kind: 'application',
      question:
        "Une PME envisage d'adopter un ML de prédiction de churn (départ client). Le DG demande comment évaluer si le projet vaut le coup. Quel critère d'évaluation est le plus pertinent en cadrage initial ?",
      options: [
        "La précision théorique attendue du modèle.",
        "Le ratio entre la valeur business du churn évité (chiffre d'affaires conservé, coût d'acquisition économisé) et le coût total du projet (modèle + données + intégration + actions de rétention).",
        "Le nombre de modèles ML déjà en production chez les concurrents.",
        "La disponibilité d'une solution ML packagée chez un éditeur reconnu.",
      ],
      correctIndex: 1,
      explanation:
        "Le ROI réel d'un modèle de churn dépend de la valeur monétaire d'un client retenu et du coût total déployé pour y arriver — pas de la précision en isolation. Un modèle à 90 % de précision qui prédit 100 churns/mois ne crée de valeur que si l'organisation a la capacité d'agir : équipe customer success, offres de rétention, mesure de l'impact des actions. Sans ce dispositif aval, le modèle est un POC. La précision technique (a) est nécessaire mais insuffisante. Les options c et d sont de mauvaises raisons (mimétisme, paresse de cadrage). À revoir : §3.5 et §4.4.",
    },
    {
      kind: 'judgment',
      question:
        "Un éditeur ML vous présente un modèle de scoring de candidats (recrutement) avec une « précision de 94 % » sur ses tests. Quel est le bon réflexe managérial avant tout achat ?",
      options: [
        "Acheter rapidement, car 94 % est un score élevé.",
        "Demander la précision sur les sous-groupes (genre, origine, âge) pour détecter d'éventuels biais discriminatoires, exiger un test sur vos données réelles, et vérifier la conformité AI Act EU (usage à haut risque).",
        "Refuser systématiquement tous les ML de scoring de candidats.",
        "Demander une démo de la plateforme et signer si elle est intuitive.",
      ],
      correctIndex: 1,
      explanation:
        "Une précision globale de 94 % peut masquer des disparités fortes par sous-groupe : 98 % sur les hommes, 84 % sur les femmes — biais qui devient une discrimination juridique et éthique sous l'AI Act. Le bon réflexe combine trois actions : audit de biais par sous-groupe, test sur les données réelles de l'organisation (la précision en environnement vendor n'est pas la précision en production), et vérification de conformité (l'AI Act classe le scoring de candidats en usage 'à haut risque' avec obligations spécifiques). Le refus systématique (c) est excessif — un système bien audité peut être déployé. La démo intuitive (d) est de l'étalage marketing. À revoir : §4.3.",
    },
  ],
};

export default quizModule2;
