/**
 * src/content/quizzes/module-3.ts
 *
 * Canonical data for the Module 3 formative quiz (IA générative en
 * entreprise). Same shape as module-1.ts and module-2.ts.
 */

import type { Quiz } from '@/lib/quiz-schema';

const quizModule3: Quiz = {
  id: 'module-3-ia-generative',
  title: 'Quiz — Module 3 : IA générative en entreprise',
  intro:
    "Sept questions pour vérifier votre compréhension de l'IA générative appliquée au business. Trois questions de compréhension, trois d'application, une de jugement. Visez 5/7 pour passer sereinement au Module 4.",

  scoringBands: [
    {
      min: 0,
      max: 3,
      label: 'Reprenez les fondamentaux GenAI',
      interpretation:
        "Le Module 3 mérite une seconde lecture. Concentrez-vous sur les notions de foundation model, hallucination, RAG vs fine-tuning, et coût total de l'automatisation (§3 et §4). Les confusions entre POC et production sont au cœur des échecs GenAI en entreprise.",
    },
    {
      min: 4,
      max: 5,
      label: 'Bases solides, identification de cas à muscler',
      interpretation:
        "Vous maîtrisez les concepts. Le passage au choix de cas d'usage GenAI à fort ROI reste à consolider. Refaites l'activité pratique (§6) avec un workflow réel de votre organisation, puis enchaînez avec le Module 4.",
    },
    {
      min: 6,
      max: 7,
      label: 'Maîtrise solide',
      interpretation:
        "Vous tenez bien le cadrage GenAI. Le Module 4 (Robotique en entreprise) explore une autre famille technologique avec les mêmes principes de décision business. Bonne continuation.",
    },
  ],

  questions: [
    {
      kind: 'comprehension',
      question: "Qu'est-ce qu'un foundation model dans le contexte de l'IA générative ?",
      options: [
        "Un modèle ML traditionnel utilisé comme base pour entraîner des modèles plus petits.",
        "Un modèle de très grande taille pré-entraîné sur des données massives et généralistes, capable d'être adapté à de nombreuses tâches en aval (génération de texte, code, image) sans réentraînement complet.",
        "Un modèle spécialisé sur un seul domaine (médecine, finance, droit).",
        "Un modèle open source par opposition aux modèles propriétaires.",
      ],
      correctIndex: 1,
      explanation:
        "Un foundation model (GPT-4, Claude, Gemini, Llama) est entraîné une fois sur des corpus massifs, puis utilisé pour des tâches très diverses via prompting, fine-tuning ou RAG. C'est cette polyvalence — la même base pour le service client, l'analyse de documents et la génération de code — qui change l'économie du déploiement IA. Le coût d'entraînement initial (centaines de millions de dollars) est mutualisé sur des milliers d'usages aval. À revoir : §3.1.",
    },
    {
      kind: 'comprehension',
      question:
        "Qu'est-ce qu'une « hallucination » dans le contexte d'un LLM (Large Language Model) ?",
      options: [
        "Un bug technique du modèle qui peut être corrigé par une mise à jour logicielle.",
        "Une affirmation produite par le modèle qui est plausible et cohérente en surface mais factuellement fausse, parfois entièrement inventée (faux noms, fausses citations, fausses sources).",
        "Une erreur volontaire introduite par le développeur pour tester la robustesse.",
        "Un comportement uniquement présent dans les modèles open source.",
      ],
      correctIndex: 1,
      explanation:
        "L'hallucination est une caractéristique structurelle des LLM : ils sont entraînés à produire la suite de texte la plus probable, pas la plus vraie. Sans garde-fous (sources vérifiables, RAG, validation humaine), un LLM produit des réponses plausibles mais fausses sans signal d'alerte. Pour le manager, la conséquence est directe : aucun usage à fort enjeu (juridique, médical, financier) ne peut reposer sur un LLM seul. Les hallucinations ne sont pas un bug à corriger — elles sont à mitiger par design. À revoir : §3.3.",
    },
    {
      kind: 'comprehension',
      question:
        "Quelle est la différence essentielle entre RAG (Retrieval-Augmented Generation) et fine-tuning d'un LLM ?",
      options: [
        "RAG est plus coûteux que le fine-tuning.",
        "Le RAG complète le LLM en lui fournissant à l'inférence des documents pertinents (extraits d'une base interne) ; le fine-tuning modifie les poids du modèle en l'entraînant sur des données spécifiques. RAG = récupération externe ; fine-tuning = adaptation du modèle.",
        "RAG fonctionne uniquement avec du texte, fine-tuning avec n'importe quel format.",
        "RAG est une technique réservée aux modèles open source.",
        ],
      correctIndex: 1,
      explanation:
        "RAG et fine-tuning répondent à des problèmes différents. RAG est la méthode privilégiée pour ancrer les réponses du LLM dans une base de connaissances spécifique (documents internes, jurisprudence à jour, manuels produits) — sans toucher au modèle. Fine-tuning ajuste le comportement du modèle pour une tâche ou un style particulier (réponses formelles, ton de la marque, format spécifique). Pour la plupart des cas business, le RAG est moins coûteux, plus traçable, et plus facile à mettre à jour. Le fine-tuning n'est nécessaire que pour des comportements vraiment spécifiques. À revoir : §3.4.",
    },
    {
      kind: 'application',
      question:
        "Une banque envisage de déployer un chatbot GenAI pour son service client. Quels sont les deux garde-fous les plus critiques à mettre en place dès le pilote ?",
      options: [
        "Maximiser le débit de réponses et limiter le coût d'inférence.",
        "Ancrer les réponses dans la documentation officielle (RAG sur la base de connaissances bancaire) ET prévoir un escalade humaine systématique pour les questions à fort enjeu (litiges, demandes financières, réclamations).",
        "Choisir le LLM le plus performant du marché et lui donner accès à toutes les données client.",
        "Former intensivement les conseillers à utiliser le chatbot eux-mêmes.",
      ],
      correctIndex: 1,
      explanation:
        "Les deux risques structurels du chatbot bancaire GenAI sont les hallucinations (réponses inventées sur des produits ou conditions) et les décisions à enjeu (engagement contractuel, gestion de litige). Le RAG sur la documentation officielle réduit le premier risque (le modèle s'appuie sur des sources vérifiables, traçables). L'escalade humaine traite le second (l'humain garde la main sur les décisions sensibles). Sans ces deux garde-fous, le chatbot crée plus de risques que de valeur. Les autres options sont soit secondaires, soit explicitement dangereuses (option c). À revoir : §3.3, §3.4 et §4.1.",
    },
    {
      kind: 'application',
      question:
        "Un cabinet d'avocats envisage d'utiliser GenAI pour analyser de gros volumes de contrats. Quelle approche est la plus appropriée pour le pilote initial ?",
      options: [
        "Demander au modèle de produire la décision finale d'acceptation/refus du contrat.",
        "Décomposer le workflow d'analyse en sous-tâches (extraction de clauses, comparaison à un modèle, identification d'écarts), automatiser celles qui sont peu risquées, garder la décision finale humaine. Mesurer le temps gagné, pas l'autonomie atteinte.",
        "Remplacer entièrement les juristes par GenAI sur les contrats simples.",
        "Attendre que la technologie atteigne 100 % de précision avant tout déploiement.",
      ],
      correctIndex: 1,
      explanation:
        "Le bon réflexe en GenAI business est presque toujours la décomposition du workflow plutôt que l'automatisation totale. Un workflow d'analyse contractuelle se décompose en : extraction d'informations (à automatiser, faible risque), comparaison à un modèle (à automatiser, faible risque), identification d'écarts (à automatiser avec validation), décision finale (à garder humaine, fort enjeu juridique). La métrique de succès devient « temps gagné par le juriste » plutôt que « part d'automatisation », ce qui est plus défendable et plus réaliste. Les options a et c sont des promesses marketing irréalistes ; l'option d est un blocage stérile. À revoir : §3.5 et §6.",
    },
    {
      kind: 'application',
      question:
        "Une équipe veut déployer un assistant GenAI pour ses commerciaux. Comment évaluer si le projet vaut le coup en cadrage initial ?",
      options: [
        "Comparer la performance du modèle à celle des humains sur des questions de connaissance.",
        "Calculer le coût total d'automatisation (modèle + intégration + RAG sur la doc commerciale + supervision + formation) et le rapporter au gain mesurable (heures économisées × coût horaire commercial × adoption attendue), avec un horizon de 12-18 mois.",
        "S'aligner sur ce que font les concurrents en matière de GenAI.",
        "Choisir d'abord le LLM avant de définir le cas d'usage.",
      ],
      correctIndex: 1,
      explanation:
        "Le coût total d'automatisation est le concept central du cadrage GenAI. Le modèle lui-même (souscription LLM ou API) est souvent la part la moins coûteuse. Les coûts réels viennent de : intégration au CRM, mise en place du RAG sur la documentation commerciale, conduite du changement, supervision, et coûts d'inférence à l'échelle. La valeur business attendue se mesure par les heures économisées × le coût horaire × le taux d'adoption réel — pas l'adoption théorique. Sans ce calcul, tout investissement GenAI est un pari. Les autres options sont des indicateurs faibles ou trompeurs. À revoir : §3.5 et §4.4.",
    },
    {
      kind: 'judgment',
      question:
        "Un éditeur SaaS vous propose une « plateforme GenAI tout-en-un » qui « remplace une équipe de 10 analystes par un seul expert qui pilote l'IA ». Quel est le bon réflexe managérial ?",
      options: [
        "Signer rapidement pour réduire les coûts opérationnels avant les concurrents.",
        "Demander à l'éditeur de citer 3 clients de votre secteur ayant effectivement supprimé une équipe complète, refuser tout chiffrage qui présente l'automatisation comme totale, exiger un POC sur vos cas réels avec mesure de la qualité (pas seulement de la vitesse), et anticiper la dégradation de la connaissance métier liée à la suppression des analystes juniors.",
        "Refuser tout déploiement GenAI dans l'entreprise par principe.",
        "Acheter et imposer la transition aux équipes en les formant sur le tas.",
      ],
      correctIndex: 1,
      explanation:
        "La promesse « remplacer une équipe par un seul expert + IA » est typiquement excessive pour deux raisons. (1) En l'état actuel des LLM, l'automatisation n'est presque jamais totale — la GenAI augmente les humains plus qu'elle ne les remplace. (2) Supprimer les niveaux juniors casse le pipeline de formation interne : dans 5 ans, vous n'aurez plus de seniors maîtrisant le métier en profondeur. Le bon réflexe combine la mise à l'épreuve sur cas réel (POC mesurable), la demande de références vérifiables, et l'anticipation des effets organisationnels à long terme. Les options a et d sont précipitées ; l'option c est un blocage stérile. À revoir : §4.2 et §4.4.",
    },
  ],
};

export default quizModule3;
