/**
 * src/content/quizzes/module-4.ts
 *
 * Canonical data for the Module 4 formative quiz (Robotique en
 * entreprise). Same shape as previous module quizzes.
 */

import type { Quiz } from '@/lib/quiz-schema';

const quizModule4: Quiz = {
  id: 'module-4-robotique',
  title: 'Quiz — Module 4 : Robotique en entreprise',
  intro:
    "Sept questions pour vérifier votre compréhension de la robotique appliquée à l'entreprise. Trois questions de compréhension, trois d'application, une de jugement. Visez 5/7 pour passer sereinement au Module 5.",

  scoringBands: [
    {
      min: 0,
      max: 3,
      label: 'Reprenez les concepts robotique',
      interpretation:
        "Le Module 4 mérite une seconde lecture. Concentrez-vous sur la distinction robot industriel / cobot, les trois piliers (perception, planification, contrôle), les normes de sécurité (ISO 10218, ISO/TS 15066), et la structure du coût total d'un projet robotique. Pas de pression : le but est diagnostic.",
    },
    {
      min: 4,
      max: 5,
      label: 'Bases solides, cadrage économique à muscler',
      interpretation:
        "Vous maîtrisez les concepts. Le passage à l'évaluation économique (payback, intégration 50-70 % du coût total) reste à consolider. Refaites l'activité pratique (§6) avec un cas réel de votre organisation, puis enchaînez avec le Module 5.",
    },
    {
      min: 6,
      max: 7,
      label: 'Maîtrise solide',
      interpretation:
        "Vous tenez bien le cadrage robotique. Le Module 5 (IA dans l'entreprise et la société) explore les enjeux éthiques, sociaux et réglementaires qui dépassent une famille technologique particulière. Bonne continuation.",
    },
  ],

  questions: [
    {
      kind: 'comprehension',
      question:
        "Quelle est la différence essentielle entre un robot industriel classique et un robot collaboratif (cobot) ?",
      options: [
        "Le cobot est nécessairement plus performant que le robot industriel.",
        "Le robot industriel est conçu pour opérer dans une zone isolée (cellule grillagée, séparation physique des humains), tandis que le cobot est conçu pour partager son espace de travail avec des humains, avec des dispositifs de sécurité spécifiques (capteurs de force, vitesses limitées, normes ISO/TS 15066).",
        "Le cobot fonctionne uniquement avec de l'IA générative, le robot industriel non.",
        "Le robot industriel est toujours plus coûteux que le cobot.",
      ],
      correctIndex: 1,
      explanation:
        "Le robot industriel classique (norme ISO 10218) est conçu pour la performance brute — vitesse, précision, charge utile — mais doit être isolé par grillage ou cellule pour des raisons de sécurité. Le cobot (norme ISO/TS 15066) est conçu d'emblée pour la coexistence avec l'humain : capteurs détectant le contact, force limitée, vitesse adaptée. Cette différence n'est pas technique en surface, elle est structurante : le cobot permet des configurations de production où l'humain reste central (montage assisté, contrôle qualité partagé), inaccessible aux robots industriels classiques. À revoir : §3.1.",
    },
    {
      kind: 'comprehension',
      question:
        "Un système robotique moderne combine trois grandes capacités. Lesquelles ?",
      options: [
        "Programmation, calcul, communication.",
        "Perception (capteurs, vision, lidar), planification (raisonnement sur l'action à effectuer), contrôle (exécution physique précise par les actionneurs).",
        "Apprentissage, génération, traduction.",
        "Stockage, traitement, affichage.",
      ],
      correctIndex: 1,
      explanation:
        "Perception, planification, contrôle constituent la chaîne fondamentale d'un système robotique moderne. La perception transforme le monde physique en représentation numérique (caméras, lidar, capteurs de force). La planification décide quelle action effectuer (détection d'obstacles, choix de trajectoire, adaptation aux imprévus). Le contrôle exécute cette action via les actionneurs (moteurs, pinces). Comprendre ces trois piliers permet de cadrer ce qui est mature aujourd'hui (perception et contrôle dans des environnements structurés) et ce qui reste un défi (planification dans des environnements ouverts, imprévisibles). À revoir : §3.2.",
    },
    {
      kind: 'comprehension',
      question:
        "Dans le coût total d'un projet robotique en entreprise, quelle est la part typique de l'intégration (étude de poste, mécanique sur mesure, programmation, mise au point, certification, formation) par rapport au coût du robot lui-même ?",
      options: [
        "L'intégration coûte typiquement 10-20 % du coût du robot.",
        "L'intégration coûte typiquement 50-70 % du coût total du projet, le robot lui-même 30-50 %.",
        "L'intégration coûte typiquement 100-200 % du coût du robot.",
        "L'intégration est négligeable, le robot est l'essentiel du coût.",
      ],
      correctIndex: 1,
      explanation:
        "Une règle de bonne pratique observée dans l'industrie est que l'intégration représente 50 à 70 % du coût total d'un projet robotique en entreprise — le robot lui-même n'est que 30 à 50 %. L'intégration couvre l'étude de poste, la mécanique sur mesure (préhenseurs, gabarits, convoyeurs), la programmation des trajectoires, la mise au point, la certification de sécurité, et la formation des équipes. Sous-estimer cette part est la principale cause d'échec économique des projets robotiques. Pour le manager, la conséquence directe est que comparer des prix de robots entre eux est trompeur — c'est le coût total qui compte. À revoir : §3.5.",
    },
    {
      kind: 'application',
      question:
        "Une PME de l'industrie agroalimentaire (50 salariés) veut automatiser une tâche de palettisation en fin de ligne. Quelle approche est la plus adaptée pour un premier projet ?",
      options: [
        "Investir dans un robot industriel haute performance avec cellule grillagée complète.",
        "Évaluer un cobot avec préhenseur adapté, sur un poste circonscrit, avec étude de sécurité (ISO/TS 15066) et formation des opérateurs — cibler un payback en 18-36 mois.",
        "Confier l'intégralité du projet à un éditeur SaaS de robotique.",
        "Renoncer à la robotique et embaucher davantage d'opérateurs.",
      ],
      correctIndex: 1,
      explanation:
        "Pour une PME découvrant la robotique, le cobot est typiquement plus adapté : moindre coût d'investissement initial, intégration plus rapide (pas de cellule grillagée), reconfiguration possible pour d'autres postes, partage de l'espace avec les opérateurs existants. La cible payback 18-36 mois reflète le coût total réel (robot + intégration + sécurité + formation). Le robot industriel haute performance (a) est surdimensionné pour ce volume et complexifie l'intégration. Les options c et d ignorent le contexte. À revoir : §3.1, §3.5 et §4.1.",
    },
    {
      kind: 'application',
      question:
        "Un entrepôt logistique automatise progressivement ses opérations. Quelle combinaison humain-robot est la plus défendable en cadrage initial ?",
      options: [
        "Tout robotiser pour minimiser la masse salariale.",
        "Robotiser les tâches répétitives à faible valeur ajoutée (transport, picking simple), garder humaines les tâches de jugement (qualité, exception, gestion d'incident), assister par exosquelette ou cobots les tâches mixtes — mesurer la productivité par poste et l'ergonomie pour les humains restants.",
        "Tout garder humain par principe de précaution.",
        "Choisir un éditeur de robotique reconnu et lui déléguer toutes les décisions de découpage.",
      ],
      correctIndex: 1,
      explanation:
        "La logistique moderne illustre la matrice « robotiser / assister / laisser humain » du Module 4. Les tâches répétitives, prévisibles, à faible valeur ajoutée sont les meilleures candidates à la robotisation (Amazon Robotics est l'exemple canonique). Le jugement, la gestion d'incident et les exceptions sont à garder humains. Les tâches mixtes bénéficient de l'assistance (cobot, exosquelette). Cette combinaison est plus défendable économiquement et socialement que les extrêmes. La métrique de succès combine productivité et ergonomie — pas seulement réduction de coûts. À revoir : §3.5 et §4.4.",
    },
    {
      kind: 'application',
      question:
        "Un projet de cobot doit être certifié pour fonctionner aux côtés d'opérateurs humains. Quels sont les deux livrables de sécurité les plus critiques à produire dès la phase pilote ?",
      options: [
        "Un manuel utilisateur en français et une formation marketing.",
        "Une analyse de risque conforme à l'ISO/TS 15066 (mesure de force, vitesse, surfaces de contact possibles avec l'humain) et un plan de formation/certification des opérateurs incluant les procédures d'arrêt d'urgence et de reprise.",
        "Un audit financier du fournisseur de cobot et un benchmark des concurrents.",
        "Un plan de communication interne et un budget de campagne externe.",
      ],
      correctIndex: 1,
      explanation:
        "La certification de sécurité d'un cobot repose sur deux livrables : (1) une analyse de risque conforme à l'ISO/TS 15066 qui caractérise les zones de contact possibles avec l'humain, mesure les forces et vitesses, et définit les seuils d'arrêt automatique ; (2) un plan de formation et de certification des opérateurs, incluant les procédures d'arrêt d'urgence, de reprise, et de signalement d'incident. Sans ces deux livrables, le cobot ne peut pas être déployé en environnement humain — c'est une obligation réglementaire, pas une option. Les autres options sont soit hors sujet, soit secondaires. À revoir : §3.3 et §4.3.",
    },
    {
      kind: 'judgment',
      question:
        "Un éditeur vous présente un robot collaboratif « clé en main » qui « se programme tout seul par démonstration » et « fonctionne sans formation des équipes ». Quel est le bon réflexe managérial ?",
      options: [
        "Acheter rapidement pour ne pas se laisser distancer par les concurrents.",
        "Refuser systématiquement par principe de précaution.",
        "Demander un POC sur un poste réel de votre organisation, exiger une analyse de risque ISO/TS 15066 par le fournisseur, vérifier que le coût total annoncé inclut bien l'intégration (50-70 % du total), et anticiper le besoin de formation des équipes — la promesse « sans formation » étant un signal d'alerte sur le manque de réalisme.",
        "Signer si la démonstration en showroom est convaincante.",
      ],
      correctIndex: 2,
      explanation:
        "La promesse « clé en main / programmation par démonstration / sans formation » est un signal d'alerte typique. Trois raisons : (1) toute installation robotique réelle demande une étude de poste et une intégration spécifique (50-70 % du coût) ; (2) la sécurité humain-machine ne se délègue pas — l'employeur reste responsable de l'analyse de risque ISO/TS 15066 ; (3) les opérateurs doivent être formés (procédures, urgence, signalement d'incident), c'est une obligation réglementaire. Le bon réflexe combine la mise à l'épreuve sur cas réel et la vérification des engagements de sécurité et de coût. Les options a et d sont précipitées ; l'option b est un blocage stérile. À revoir : §4.1, §4.2 et §4.3.",
    },
  ],
};

export default quizModule4;
