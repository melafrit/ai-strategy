/**
 * src/content/quizzes/module-1.ts
 *
 * Canonical data for the Module 1 formative quiz.
 *
 * Pattern set here is the one Modules 2-6 will follow:
 *   - One file per module: src/content/quizzes/module-N.ts
 *   - Default export is a typed Quiz object
 *   - Imported by both <QuizPlaceholder /> (now) and the React Quiz
 *     island (Phase 5), without rewriting content.
 *
 * Scoring bands are pedagogical, not punitive: they encourage progression
 * rather than penalize gaps. The bands match the formative goal of the
 * quiz (verify understanding, not gate certification).
 */

import type { Quiz } from '@/lib/quiz-schema';

const quizModule1: Quiz = {
  id: 'module-1-introduction-ia',
  title: "Quiz — Module 1 : Introduction à l'IA",
  intro:
    "Sept questions pour vérifier votre compréhension. Trois questions de compréhension, trois d'application, une de jugement. Visez 5/7 pour passer sereinement au Module 2.",

  scoringBands: [
    {
      min: 0,
      max: 3,
      label: 'Reprenez les concepts clés',
      interpretation:
        "Le Module 1 mérite une seconde lecture. Concentrez-vous sur les 5 concepts (§3) et les 4 erreurs fréquentes (§4). Les explications de chaque question pointent vers les sections à revoir. Pas de pression : le but du quiz est diagnostic, pas évaluatif.",
    },
    {
      min: 4,
      max: 5,
      label: 'Bases solides, application à consolider',
      interpretation:
        "Vous maîtrisez les définitions et le cadre général. Le passage à l'application reste à muscler — refaites l'activité pratique (§6) avec un cas réel de votre organisation, puis enchaînez avec le Module 2.",
    },
    {
      min: 6,
      max: 7,
      label: 'Maîtrise solide',
      interpretation:
        "Vous tenez bien le cadrage IA. Le Module 2 (Machine Learning en entreprise) prolonge naturellement ces bases en entrant dans les choix techniques que ce cadrage suppose. Bonne continuation.",
    },
  ],

  questions: [
    {
      kind: 'comprehension',
      question:
        "Quelle est la différence essentielle entre l'IA étroite (narrow AI) et l'IA générale (AGI) ?",
      options: [
        "L'IA étroite est moins performante que l'IA générale sur toutes les tâches.",
        "L'IA étroite est conçue pour une tâche spécifique ; l'IA générale aurait des capacités cognitives comparables à celles d'un humain sur une large gamme de problèmes.",
        "L'IA étroite ne fonctionne qu'avec des données structurées, alors que l'IA générale fonctionne avec n'importe quelles données.",
        "L'IA étroite est utilisée en entreprise, l'IA générale en recherche académique seulement.",
      ],
      correctIndex: 1,
      explanation:
        "L'IA étroite (narrow AI) excelle sur une tâche définie (recommandation de produits, traduction, détection de fraude), mais ne transpose pas ses capacités à d'autres problèmes. L'AGI, qui reste hypothétique en 2026, désignerait un système capable de raisonnement et d'apprentissage généralisé comparable à l'humain. Tous les systèmes d'IA déployés en entreprise aujourd'hui sont des IA étroites — y compris GPT-4 et ses successeurs, qui sont étroits sur leur tâche (génération de texte conditionnée par un prompt). À revoir : §3.1.",
    },
    {
      kind: 'comprehension',
      question:
        "Qu'est-ce qui a principalement déclenché la vague actuelle de progrès en IA (depuis ~2012) ?",
      options: [
        "L'invention de nouveaux algorithmes radicalement différents des précédents.",
        'Une combinaison de trois facteurs : disponibilité massive de données, puissance de calcul (notamment GPU), et progrès du deep learning.',
        'Une percée mathématique unique en théorie de l\'apprentissage.',
        'Le passage à l\'open source de toutes les solutions IA.',
      ],
      correctIndex: 1,
      explanation:
        "La vague actuelle, parfois datée du succès d'AlexNet sur ImageNet en 2012, résulte de la convergence de trois conditions devenues simultanément matures : volumes de données numériques accessibles (web, capteurs, smartphones), puissance de calcul abordable via les GPU initialement conçus pour les jeux vidéo, et redécouverte des réseaux de neurones profonds. Aucun de ces facteurs n'aurait suffi seul. Comprendre cela évite deux erreurs symétriques de cadrage : penser que l'IA est nouvelle (faux : 70 ans d'histoire) ou penser que la vague va s'éteindre comme les précédentes (improbable : la conjonction est durable). À revoir : §3.2.",
    },
    {
      kind: 'comprehension',
      question:
        "Selon la conception d'intelligence collective développée par Thomas Malone et le MIT Center for Collective Intelligence, quel rôle joue l'IA dans une organisation ?",
      options: [
        "L'IA remplace progressivement l'intelligence humaine dans la prise de décision.",
        "L'IA est un acteur parmi d'autres dans un système où humains et machines combinent leurs forces — la performance vient du système, pas d'une seule composante.",
        "L'IA est principalement un outil d'aide à la décision, jamais un acteur autonome.",
        "L'IA n'a de sens qu'à l'échelle individuelle, pas organisationnelle.",
      ],
      correctIndex: 1,
      explanation:
        "La perspective d'intelligence collective considère que les meilleures organisations combinent humains et machines comme un seul système intelligent — un « supermind ». Ni l'humain seul ni la machine seule ne suffit ; c'est l'orchestration de leurs complémentarités (jugement humain, calcul machine, mémoire collective) qui produit la performance. Le programme Takeda Superminds, mené avec le MIT CCI, en est l'application directe en R&D pharmaceutique. À revoir : §3.3 et §5.",
    },
    {
      kind: 'application',
      question:
        "Une banque envisage d'automatiser entièrement le traitement des demandes de prêt par un modèle ML. Quel argument est le plus solide pour conserver une intervention humaine dans le processus ?",
      options: [
        'Les modèles ML sont moins performants que les analystes humains sur les demandes simples.',
        "Les cas atypiques, les biais du modèle, et la conformité réglementaire (notamment l'explicabilité des décisions) demandent un jugement humain qui fait partie intégrante du système.",
        "L'automatisation totale est techniquement impossible.",
        'Les clients préfèrent toujours parler à un humain pour ce type de décision.',
      ],
      correctIndex: 1,
      explanation:
        "Le human-in-the-loop n'est pas une concession à l'imperfection technique — c'est une composante essentielle pour les décisions à fort enjeu. Trois raisons : les cas limites (où le modèle échoue silencieusement), la lutte contre les biais (qui demande une supervision active, pas un audit ponctuel), et la conformité (l'AI Act EU classe le scoring de crédit comme usage à haut risque, avec obligation d'explicabilité et de supervision humaine). Les autres options sont soit fausses (a, c) soit insuffisantes seules (d : la préférence client est secondaire face aux obligations réglementaires). À revoir : §3.4 et §4.3.",
    },
    {
      kind: 'application',
      question:
        "Vous êtes consultant pour une PME industrielle de 200 salariés. Le DG vous demande : « on aimerait faire de l'IA, par où commencer ? » Quelle est la meilleure première étape ?",
      options: [
        'Lancer immédiatement un pilote de chatbot pour le service client.',
        "Embaucher un data scientist senior pour construire l'équipe IA.",
        "Cartographier les processus métier critiques et identifier où l'IA pourrait contribuer à la stratégie globale, avant de choisir un pilote.",
        'Acheter une solution IA générative auprès d\'un éditeur reconnu.',
      ],
      correctIndex: 2,
      explanation:
        "Avant tout investissement, le cadrage stratégique est non négociable. Il s'agit de relier les candidats IA à la stratégie de l'entreprise (différenciation, coût, focalisation), d'évaluer la maturité données et organisation, et de prioriser sur le ratio valeur/faisabilité. Lancer un pilote sans cadrage produit typiquement un POC isolé qui ne s'inscrit dans aucune capability transverse — c'est l'erreur n°4 du module. Embaucher un senior data scientist (b) ou acheter une solution (d) sont des décisions de mise en œuvre, prématurées sans cadrage. À revoir : §3.5 et §6.",
    },
    {
      kind: 'application',
      question:
        "Une équipe RH propose un projet d'IA pour « analyser automatiquement les CV et présélectionner les candidats ». Quelles sont les deux dimensions les plus critiques à évaluer dès le cadrage ?",
      options: [
        'Le coût du modèle et le temps de développement.',
        'Le risque de biais discriminatoire (équité, conformité) et la qualité des données historiques de recrutement.',
        'La performance technique du modèle et sa rapidité d\'inférence.',
        'L\'adoption par les recruteurs et la satisfaction des candidats.',
      ],
      correctIndex: 1,
      explanation:
        "Les outils de présélection RH sont à très haut risque éthique et juridique : un modèle entraîné sur l'historique de l'entreprise reproduit ses biais (de genre, d'origine, d'âge). L'AI Act EU classe ces usages en « à haut risque » avec des obligations spécifiques (analyse d'impact, audit de biais, documentation). Avant toute discussion technique, l'audit des biais et la qualité des données historiques doivent être traités. Les autres dimensions (coût, performance, adoption) sont importantes mais secondaires — un système biaisé n'a pas vocation à être déployé, quel que soit son coût ou sa performance. À revoir : §4.3.",
    },
    {
      kind: 'judgment',
      question:
        "Un éditeur SaaS vous propose une « plateforme IA tout-en-un » qui « transforme votre business en 30 jours, sans expertise technique requise ». Quel est le bon réflexe managérial ?",
      options: [
        'Signer rapidement pour ne pas se laisser distancer par les concurrents qui adopteraient la même solution.',
        'Demander une démo et signer si elle est convaincante.',
        "Demander un POC sur un cas d'usage métier spécifique avec des données réelles, et évaluer la valeur business mesurée et la difficulté d'intégration au workflow existant — la promesse « sans expertise requise » étant un signal d'alerte sur le manque de réalisme.",
        'Refuser systématiquement toutes les solutions IA externes et tout développer en interne.',
      ],
      correctIndex: 2,
      explanation:
        "La promesse « sans expertise requise / 30 jours / tout-en-un » est typiquement un signal d'alerte : tout déploiement IA réel demande adaptation aux données, intégration au workflow, conduite du changement (rappel : 60-80 % du budget total est typiquement hors modèle). Une démo en environnement contrôlé (b) ne dit rien sur le comportement en production. Le bon réflexe est ni l'adoption rapide (a) ni le refus systématique (d), mais la mise à l'épreuve sur un cas réel : si la solution tient ses promesses sur vos données réelles, tant mieux ; sinon, vous l'aurez su avec un investissement limité. C'est aussi un test d'éditeur — un partenaire sérieux acceptera un POC structuré. À revoir : §4.1 et §4.2.",
    },
  ],
};

export default quizModule1;
