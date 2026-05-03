/**
 * src/content/quizzes/module-6.ts
 *
 * Canonical data for the Module 6 formative quiz (Futur de l'IA).
 * Last module of the parcours pédagogique. Same shape as previous
 * module quizzes.
 */

import type { Quiz } from '@/lib/quiz-schema';

const quizModule6: Quiz = {
  id: 'module-6-futur-ia',
  title: "Quiz — Module 6 : Futur de l'IA",
  intro:
    "Sept questions pour vérifier votre compréhension de la prospective IA et de la construction d'une roadmap stratégique. Trois questions de compréhension, trois d'application, une de jugement. Visez 5/7 pour aborder sereinement le capstone (roadmap IA d'une organisation).",

  scoringBands: [
    {
      min: 0,
      max: 3,
      label: 'Reprenez les fondamentaux prospective',
      interpretation:
        "Le Module 6 mérite une seconde lecture. Concentrez-vous sur la distinction veille vs anticipation stratégique, le scenario planning (penser plusieurs futurs plutôt que prédire un seul), et la structure d'une roadmap IA en 5 dimensions (vision / use cases / gouvernance / compétences / KPIs). Ces concepts structurent le capstone.",
    },
    {
      min: 4,
      max: 5,
      label: 'Bases solides, exercice de roadmap à muscler',
      interpretation:
        "Vous maîtrisez les concepts. Le passage à la construction concrète d'une roadmap IA pour votre organisation reste à consolider. Refaites l'activité pratique (§6) avec votre contexte réel — c'est exactement le type de livrable attendu en capstone.",
    },
    {
      min: 6,
      max: 7,
      label: 'Maîtrise solide',
      interpretation:
        "Vous tenez bien le cadrage prospective et roadmap. Vous êtes prêt à attaquer le capstone : construire une roadmap IA stratégique de votre organisation en synthétisant les apprentissages des 6 modules. Bonne suite.",
    },
  ],

  questions: [
    {
      kind: 'comprehension',
      question:
        "Qu'est-ce que le scenario planning, et en quoi diffère-t-il de la prévision (forecasting) ?",
      options: [
        "Le scenario planning est une forme avancée de prévision avec des modèles statistiques plus précis.",
        "La prévision cherche à prédire un futur unique le plus probable. Le scenario planning construit explicitement plusieurs futurs possibles (typiquement 3 ou 4) pour stress-tester les décisions stratégiques face à différentes évolutions — l'objectif n'est pas de deviner lequel adviendra, mais d'identifier les actions robustes à plusieurs scénarios.",
        "Le scenario planning et la prévision sont synonymes.",
        "Le scenario planning ne s'applique qu'aux grandes entreprises cotées.",
      ],
      correctIndex: 1,
      explanation:
        "Le scenario planning est une méthode développée notamment par Royal Dutch Shell dans les années 1970 pour penser stratégiquement face à l'incertitude. La différence avec la prévision est fondamentale : la prévision suppose qu'on peut estimer un futur unique le plus probable ; le scenario planning accepte que l'avenir est multiple et construit 3-4 scénarios contrastés pour tester la robustesse des décisions. Pour l'IA en entreprise, c'est particulièrement pertinent : les évolutions techniques, réglementaires et sociétales sont incertaines à 5-10 ans, mais on peut identifier des actions robustes (par exemple : investir dans la formation des équipes est utile dans presque tous les scénarios). À revoir : §3.1.",
    },
    {
      kind: 'comprehension',
      question:
        "Quelle est la différence entre la veille technologique et l'anticipation stratégique IA ?",
      options: [
        "La veille est gratuite, l'anticipation stratégique est payante.",
        "La veille est passive (collecte d'information sur ce qui existe), l'anticipation stratégique est active (analyse des implications pour l'organisation, identification des décisions à prendre, construction d'options stratégiques). La veille alimente l'anticipation, mais ne la remplace pas.",
        "La veille concerne le court terme, l'anticipation stratégique le long terme uniquement.",
        "Ce sont deux noms pour la même activité.",
      ],
      correctIndex: 1,
      explanation:
        "Beaucoup d'organisations confondent veille et anticipation stratégique : elles consomment des newsletters, abonnent leurs équipes à des publications spécialisées, et croient ainsi anticiper. Mais la veille (qui collecte de l'information sur ce qui existe) ne devient anticipation stratégique que si elle est traduite en analyse des implications pour l'organisation (« qu'est-ce que ça change pour nous ? »), en identification des décisions à prendre (« faut-il agir maintenant ? sous quel délai ? »), et en construction d'options stratégiques (« quelles sont nos alternatives ? »). Les deux sont nécessaires — la veille seule ne produit pas de stratégie. À revoir : §3.4.",
    },
    {
      kind: 'comprehension',
      question:
        "Une roadmap IA stratégique d'organisation se structure typiquement autour de combien de dimensions principales ?",
      options: [
        "Une seule : la liste chronologique des projets IA à lancer.",
        "Deux : les projets et le budget.",
        "Cinq dimensions intégrées : vision (où on veut aller), use cases prioritaires, gouvernance, compétences et organisation, KPIs et indicateurs de succès. Chacune est nécessaire — une roadmap purement technologique sans dimension humaine et organisationnelle est incomplète.",
        "Plus de vingt dimensions, pour être exhaustive.",
      ],
      correctIndex: 2,
      explanation:
        "Une roadmap IA stratégique combine cinq dimensions interdépendantes. (1) La vision IA à 3-5 ans donne le cap. (2) Les use cases prioritaires traduisent la vision en projets concrets, hiérarchisés selon le ratio valeur/faisabilité/risque. (3) La gouvernance définit qui décide, comment, avec quels processus. (4) Les compétences et l'organisation précisent les profils à recruter, à former, à redéployer — c'est souvent le facteur limitant. (5) Les KPIs mesurent l'avancement et permettent les ajustements. Une roadmap réduite à la liste des projets sans dimension humaine et organisationnelle est typiquement une présentation marketing — pas un outil de transformation. À revoir : §3.3.",
    },
    {
      kind: 'application',
      question:
        "Une organisation veut construire sa première roadmap IA stratégique. Par où commencer en cadrage initial ?",
      options: [
        "Lister immédiatement tous les projets IA possibles et les prioriser sur le ROI estimé.",
        "Choisir un éditeur IA reconnu et structurer la roadmap autour de son catalogue.",
        "Démarrer par la vision IA à 3-5 ans (à quoi l'organisation veut ressembler ?), puis cartographier la maturité actuelle (données, gouvernance, compétences, projets en cours), puis décliner en use cases prioritaires — pas l'inverse. La vision et la maturité encadrent les choix de projets, pas l'inverse.",
        "Copier la roadmap IA d'un concurrent du même secteur.",
      ],
      correctIndex: 2,
      explanation:
        "L'erreur la plus fréquente est de démarrer par la liste des projets — méthode tactique qui produit un patchwork de POC sans cohérence stratégique. La méthode robuste démarre par la vision (sur 3-5 ans, à quoi l'organisation veut ressembler en matière d'IA ?) et la cartographie de maturité (où en sommes-nous aujourd'hui ?). Ces deux éléments encadrent ensuite les choix de projets : ceux qui rapprochent de la vision ET qui sont compatibles avec la maturité actuelle (ou avec un effort réaliste de montée en maturité). Les options a, b, d sont des raccourcis qui produisent typiquement des roadmaps incohérentes ou non défendables. À revoir : §3.3 et §6.",
    },
    {
      kind: 'application',
      question:
        "Vous lisez qu'un éditeur majeur annonce une « rupture technologique » qui transformerait votre secteur dans 12 mois. Quel est le bon réflexe stratégique ?",
      options: [
        "Annoncer immédiatement le pivot complet de la stratégie IA de votre organisation.",
        "Ignorer l'annonce et continuer la roadmap actuelle.",
        "Distinguer l'annonce (qui peut être marketing, prématurée, ou ne pas se concrétiser) de l'évolution réelle. Identifier les implications dans 2-3 scénarios contrastés (rupture confirmée à 12 mois / rupture diffuse à 24-36 mois / annonce non confirmée). Identifier les actions robustes dans les 3 scénarios (typiquement : investir dans la formation, suivre la maturité du sujet, préparer des options sans s'engager prématurément).",
        "Demander à un cabinet de conseil de produire une étude exhaustive avant toute action.",
      ],
      correctIndex: 2,
      explanation:
        "Le bon réflexe combine l'humilité (les annonces ne se concrétisent pas toujours dans les délais annoncés) et l'agilité (ne pas ignorer un signal). Le scenario planning permet d'agir sans s'engager prématurément : identifier les actions qui sont utiles dans plusieurs scénarios (formation des équipes, veille technologique active, prototype léger pour comprendre) et différer celles qui supposent qu'un scénario unique se réalise (refonte massive). Les options a et b sont les deux extrêmes erronés (sur-réaction vs déni). L'option d est lente et coûteuse — la décision peut être prise sans étude exhaustive. À revoir : §3.1 et §4.3.",
    },
    {
      kind: 'application',
      question:
        "Une roadmap IA prévoit 10 actions sur 24 mois. Comment hiérarchiser intelligemment les horizons 0-6, 6-12, et 12-24 mois ?",
      options: [
        "Mettre toutes les actions à 0-6 mois pour aller vite.",
        "Répartir les actions de manière égale, 3-4 actions par horizon.",
        "Mettre à 0-6 mois les actions de fondation (gouvernance, premier pilote sur cas peu risqué, mise en place des indicateurs) ; à 6-12 mois les premiers projets à valeur business mesurable et l'amorce de mise à l'échelle ; à 12-24 mois les projets plus ambitieux qui dépendent de la maturité acquise. La séquence respecte les dépendances naturelles, pas une logique d'apparence.",
        "Mettre à 0-6 mois uniquement les projets les plus visibles externalement.",
      ],
      correctIndex: 2,
      explanation:
        "La hiérarchisation temporelle d'une roadmap IA suit la logique des dépendances : on ne peut pas faire X tant qu'on n'a pas mis en place Y. Les fondations (gouvernance, gouvernance des données, premier pilote sur cas peu risqué pour apprendre, mise en place des KPIs) viennent en premier — typiquement 0-6 mois. Les premiers projets à valeur business mesurable viennent ensuite — 6-12 mois. Les projets plus ambitieux qui dépendent de la maturité acquise (orchestration multi-cas, automatisation à grande échelle, IA de différenciation) viennent en dernier — 12-24 mois. Une roadmap qui ignore les dépendances (option a, b, ou d) produit des projets bloqués ou des échecs. À revoir : §3.3 et §6.",
    },
    {
      kind: 'judgment',
      question:
        "Un cabinet de conseil vous propose de produire la roadmap IA stratégique de votre organisation en 5 jours, en interviewant uniquement le DSI et le DG, sans interaction avec les directions métier ni avec la DRH. Quel est le bon réflexe managérial ?",
      options: [
        "Accepter pour aller vite et bénéficier de l'expertise du cabinet.",
        "Refuser systématiquement de travailler avec un cabinet externe.",
        "Refuser cette modalité spécifique : une roadmap IA stratégique sans interaction avec les directions métier (qui connaissent les processus et les contraintes opérationnelles) et sans interaction avec la DRH (qui porte les enjeux compétences et conduite du changement) produit typiquement un livrable techniquement correct mais inapplicable. Demander une approche élargie ou changer de prestataire.",
        "Accepter et construire en parallèle une roadmap interne sans le dire au cabinet.",
      ],
      correctIndex: 2,
      explanation:
        "Une roadmap IA stratégique se construit avec les fonctions concernées — pas pour elles. Sans interaction avec les directions métier, le cabinet ignore les processus réels, les contraintes opérationnelles, les priorités terrain ; le livrable est typiquement déconnecté. Sans interaction avec la DRH, les enjeux compétences (recrutement, formation, redéploiement) et de conduite du changement sont absents — or ce sont souvent les facteurs limitants réels. La modalité proposée (5 jours, interviews limitées) est un signal d'alerte sur la qualité attendue du livrable. Le bon réflexe combine refus de la modalité et exigence d'une approche élargie. Les options a et d sont des compromis qui produisent un mauvais livrable ou un travail double. L'option b est trop catégorique — un cabinet peut être un bon partenaire avec la bonne modalité. À revoir : §4.2.",
    },
  ],
};

export default quizModule6;
