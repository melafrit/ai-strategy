/**
 * Glossaire structuré du parcours pédagogique AI Strategy
 *
 * 31 termes répartis en 6 catégories thématiques, avec définitions courtes
 * et longues, exemples métier, et références croisées aux modules et études
 * de cas du parcours.
 *
 * Source pédagogique : reconstruction à partir des sources officielles MIT,
 * NIST, OCDE, AI Act EU et corpus académique standard. Voir page Méthode
 * pour la hiérarchie des sources.
 */

export type GlossaryCategory =
  | 'fundamentals'
  | 'ml'
  | 'genai'
  | 'robotics'
  | 'governance'
  | 'methodology';

export interface GlossaryEntry {
  /** Identifiant URL-friendly, utilisé comme ancre #slug */
  slug: string;
  /** Terme tel qu'affiché dans le titre */
  term: string;
  /** Synonymes ou variantes connues, recherchables (optionnel) */
  aliases?: string[];
  /** Catégorie thématique */
  category: GlossaryCategory;
  /** Définition courte d'une phrase (affichée dans la liste et le snippet) */
  shortDefinition: string;
  /** Définition complète, 2 à 4 paragraphes */
  longDefinition: string;
  /** Exemple concret d'usage business */
  example?: string;
  /** Numéros de modules associés (1 à 6) */
  relatedModules?: number[];
  /** Slugs des cas d'études associés */
  relatedCases?: string[];
  /** Slugs d'autres termes du glossaire en lien direct */
  relatedTerms?: string[];
}

export const glossaryCategoryLabels: Record<GlossaryCategory, string> = {
  fundamentals: 'Fondamentaux',
  ml: 'Machine Learning',
  genai: 'IA générative',
  robotics: 'Robotique',
  governance: 'Gouvernance et société',
  methodology: 'Méthodologie projet',
};

export const glossaryCategoryDescriptions: Record<GlossaryCategory, string> = {
  fundamentals:
    "Concepts de base nécessaires pour toute discussion structurée sur l'IA en entreprise.",
  ml:
    "Apprentissage automatique : famille de techniques qui apprennent à partir de données plutôt que de règles explicites.",
  genai:
    "IA générative et grands modèles : génération de texte, code, images, audio, vidéo à partir de modèles de fondation.",
  robotics:
    "Robotique en entreprise : automatisation physique, cobots, robots mobiles autonomes.",
  governance:
    "Gouvernance, éthique, risques et conformité — cadre de déploiement responsable.",
  methodology:
    "Cadres et concepts pour structurer les projets IA, du pilote à la roadmap.",
};

export const glossary: GlossaryEntry[] = [
  // ========================================================================
  // FONDAMENTAUX (5)
  // ========================================================================
  {
    slug: 'ia',
    term: 'Intelligence artificielle (IA)',
    aliases: ['AI', 'artificial intelligence'],
    category: 'fundamentals',
    shortDefinition:
      "Champ scientifique et ensemble de techniques visant à concevoir des systèmes capables de réaliser des tâches qui requièrent typiquement de l'intelligence humaine.",
    longDefinition:
      "L'intelligence artificielle est un champ d'étude né dans les années 1950 dont l'objet est la conception de systèmes capables de percevoir, raisonner, apprendre, décider ou générer du contenu. Le terme couvre une grande diversité de techniques — des systèmes à base de règles symboliques aux réseaux de neurones profonds modernes en passant par l'optimisation, la recherche heuristique et les méthodes statistiques. \n\nDans un contexte business, l'IA désigne aujourd'hui principalement les systèmes basés sur l'apprentissage automatique (machine learning), incluant l'apprentissage profond (deep learning) et les modèles génératifs. Le mot « IA » est souvent utilisé de manière imprécise dans le marketing — il est utile, en discussion managériale, de distinguer la technique sous-jacente (ML supervisé, LLM, robotique, etc.) du label générique.",
    example:
      "Un système de recommandation Netflix, un modèle de scoring de crédit, un assistant comme Claude ou ChatGPT, un cobot Universal Robots, et un système de détection de fraude Stripe Radar sont tous décrits comme « IA » — mais reposent sur des techniques très différentes.",
    relatedModules: [1, 2, 3, 4],
    relatedTerms: ['ia-faible', 'ia-generale', 'machine-learning', 'llm'],
  },
  {
    slug: 'ia-faible',
    term: 'IA faible (IA étroite)',
    aliases: ['narrow AI', 'IA étroite'],
    category: 'fundamentals',
    shortDefinition:
      "Système IA conçu et entraîné pour résoudre une tâche spécifique, sans capacité réelle à généraliser hors de son périmètre.",
    longDefinition:
      "L'IA faible — aussi appelée IA étroite ou narrow AI — désigne les systèmes IA actuels et concrètement déployés. Un modèle de détection de fraude est entraîné spécifiquement pour la détection de fraude ; il ne sait rien faire d'autre. Un LLM comme GPT-4 traite une grande variété de tâches linguistiques mais reste, malgré son apparence de polyvalence, un système optimisé pour la prédiction du token suivant — pas un agent intelligent général. \n\nCette distinction est importante en discussion managériale : ce qui existe et qui se déploie est de l'IA faible. Les performances spectaculaires sur certaines tâches ne doivent pas être interprétées comme un pas vers une intelligence générale — elles restent une optimisation très poussée sur un périmètre défini.",
    example:
      "AlphaGo bat les meilleurs joueurs humains au jeu de Go ; il ne sait pas jouer aux échecs sans réentraînement complet. GPT-4 produit des textes plausibles ; il n'a pas de modèle du monde permettant de garantir l'exactitude factuelle.",
    relatedModules: [1, 6],
    relatedTerms: ['ia-generale', 'ia', 'hallucination'],
  },
  {
    slug: 'ia-generale',
    term: 'IA générale (AGI)',
    aliases: ['AGI', 'artificial general intelligence'],
    category: 'fundamentals',
    shortDefinition:
      "Système IA hypothétique capable d'apprendre et de résoudre n'importe quelle tâche cognitive humaine — n'existe pas aujourd'hui.",
    longDefinition:
      "L'IA générale — Artificial General Intelligence ou AGI — désigne l'hypothèse d'un système IA dont les capacités cognitives égaleraient ou dépasseraient celles d'un humain sur l'ensemble des tâches intellectuelles, et non sur un périmètre étroit. Ce concept est central dans les débats publics sur l'IA mais reste à ce jour spéculatif : aucun système actuel n'est une AGI. \n\nLes prédictions sur le délai d'arrivée d'une AGI varient énormément entre experts (de quelques années à plusieurs décennies, voire jamais). Pour une organisation, il est important de distinguer la stratégie IA opérationnelle — qui doit s'appuyer sur l'IA faible existante — de la veille prospective sur les évolutions à long terme. Confondre les deux conduit à des décisions inadaptées.",
    example:
      "Le débat public autour de modèles comme GPT-4 oscille entre « première étape vers l'AGI » et « optimisation poussée d'IA faible ». Pour décider d'une roadmap d'entreprise, on ne base pas un investissement à 12-24 mois sur l'hypothèse AGI — on le base sur les capacités démontrées de l'IA faible aujourd'hui.",
    relatedModules: [1, 6],
    relatedTerms: ['ia-faible', 'ia', 'foundation-model'],
  },
  {
    slug: 'intelligence-collective',
    term: 'Intelligence collective',
    aliases: ['collective intelligence', 'CI'],
    category: 'fundamentals',
    shortDefinition:
      "Capacité d'un groupe — humains, machines ou hybrides — à résoudre des problèmes ou à produire des connaissances dépassant celles de chacun de ses membres.",
    longDefinition:
      "L'intelligence collective désigne la capacité d'un système composé de plusieurs agents — humains, machines, ou combinaison des deux — à produire des résultats supérieurs à ce qu'aucun agent isolé pourrait accomplir. Le concept est central dans les travaux de Thomas Malone (MIT Center for Collective Intelligence) et structure une partie de la réflexion sur l'IA en entreprise. \n\nDans un contexte managérial, l'intelligence collective oriente la conception des organisations : plutôt que de remplacer les humains par des machines, on cherche à composer des équipes hybrides qui exploitent les forces de chaque type d'agent. Les humains apportent jugement, créativité, contextualisation, sens éthique ; les machines apportent vitesse, mémoire, recherche dans des espaces immenses. La conception de ces équipes hybrides — qui décide quoi, qui supervise, qui escalade — est plus structurante que le choix de la technologie sous-jacente.",
    example:
      "Le programme Takeda × MIT CCI Superminds applique cette logique à la R&D pharmaceutique : plutôt qu'un modèle IA seul pour identifier des candidats médicaments, des équipes mixtes humain-machine sont structurées sur des problèmes complexes du développement médicament.",
    relatedModules: [1, 6],
    relatedCases: ['takeda-superminds', 'mit-ide'],
    relatedTerms: ['human-in-the-loop', 'ia'],
  },
  {
    slug: 'automatisation',
    term: 'Automatisation',
    aliases: ['automation'],
    category: 'fundamentals',
    shortDefinition:
      "Délégation à un système technique d'une tâche qui était auparavant exécutée par un humain.",
    longDefinition:
      "L'automatisation est un terme plus large que l'IA. Une tâche peut être automatisée par des règles fixes (script, automate programmable), par un robot industriel classique sans IA, ou par un système IA. Toute IA déployée participe d'une logique d'automatisation, mais toutes les automatisations ne reposent pas sur de l'IA. \n\nDans un projet d'entreprise, la décomposition d'un processus en sous-tâches et l'analyse de chacune — automatisable par règle / automatisable par IA / à laisser humaine — est un outil de cadrage central. La matrice « automatiser / assister / laisser humain » sert à arbitrer entre les trois options selon la nature de la tâche, le coût total de l'automatisation, et le risque associé.",
    example:
      "La saisie comptable peut être largement automatisée par règles (OCR + parsing). La détection de fraude bénéficie d'une automatisation par ML (Stripe Radar). La validation finale d'un crédit hypothécaire reste typiquement humaine, l'IA aidant à préparer le dossier mais pas à décider seule.",
    relatedModules: [3, 4, 5],
    relatedCases: ['stripe-radar', 'amazon-robotics', 'github-copilot-accenture'],
    relatedTerms: ['robotique', 'machine-learning', 'pilote-ia'],
  },

  // ========================================================================
  // MACHINE LEARNING (6)
  // ========================================================================
  {
    slug: 'machine-learning',
    term: 'Machine Learning (ML)',
    aliases: ['ML', 'apprentissage automatique'],
    category: 'ml',
    shortDefinition:
      "Famille de techniques où un système apprend à partir de données plutôt que d'être programmé explicitement par des règles.",
    longDefinition:
      "Le machine learning — apprentissage automatique en français — est la branche dominante de l'IA aujourd'hui. Au lieu de coder des règles explicites (« si la transaction dépasse 1 000 € ET le pays est inhabituel, alors alerte »), on fournit au système des exemples étiquetés (transactions historiques avec leur statut frauduleux ou non) et le système apprend lui-même les régularités utiles à la prédiction. \n\nLes trois grandes familles d'apprentissage sont supervisé (étiquettes connues), non supervisé (pas d'étiquettes, on cherche des structures), et par renforcement (apprentissage par essai-erreur avec signal de récompense). Le ML moderne s'appuie majoritairement sur des réseaux de neurones, en particulier l'apprentissage profond (deep learning).",
    example:
      "Stripe Radar entraîne ses modèles ML sur des centaines de millions de transactions étiquetées légitimes ou frauduleuses pour scorer en temps réel chaque nouvelle transaction. La performance progresse à mesure que de nouvelles données arrivent et que le modèle est réentraîné.",
    relatedModules: [2, 3],
    relatedCases: ['stripe-radar', 'mit-barzilay-cancer', 'github-copilot-accenture'],
    relatedTerms: ['deep-learning', 'apprentissage-supervise', 'donnees-entrainement'],
  },
  {
    slug: 'deep-learning',
    term: 'Apprentissage profond (Deep Learning)',
    aliases: ['deep learning', 'DL', 'réseaux de neurones profonds'],
    category: 'ml',
    shortDefinition:
      "Sous-famille du machine learning utilisant des réseaux de neurones à nombreuses couches, dominante pour la vision, le langage et l'audio.",
    longDefinition:
      "L'apprentissage profond utilise des réseaux de neurones artificiels comportant de nombreuses couches successives. Chaque couche extrait progressivement des représentations plus abstraites des données d'entrée — par exemple, des bords puis des formes puis des objets dans une image. La capacité de représentation très riche, combinée à des volumes de données massifs et à la puissance de calcul moderne (GPU/TPU), permet des performances qui n'étaient pas atteignables il y a quinze ans. \n\nLe deep learning sous-tend la plupart des systèmes IA modernes les plus visibles : reconnaissance d'images, traduction automatique, assistants vocaux, modèles génératifs comme GPT-4 ou Claude. Sa puissance s'accompagne de coûts d'entraînement élevés, d'un besoin substantiel de données, et d'une difficulté plus grande d'interprétation par rapport à des modèles plus simples.",
    example:
      "Le modèle Mirai de Regina Barzilay (MIT CSAIL) pour le dépistage du cancer du sein est un réseau de neurones profond entraîné sur des dizaines de milliers de mammographies étiquetées. Il prédit le risque à 1-5 ans avec une performance supérieure aux scores traditionnels.",
    relatedModules: [2, 3],
    relatedCases: ['mit-barzilay-cancer'],
    relatedTerms: ['machine-learning', 'foundation-model', 'llm'],
  },
  {
    slug: 'apprentissage-supervise',
    term: 'Apprentissage supervisé',
    aliases: ['supervised learning'],
    category: 'ml',
    shortDefinition:
      "Forme de ML où le modèle apprend à partir de données étiquetées : à chaque exemple est associée la « bonne » réponse attendue.",
    longDefinition:
      "L'apprentissage supervisé est la forme la plus courante de ML en entreprise. On dispose d'exemples étiquetés — chaque entrée est associée à la sortie correcte attendue (transaction frauduleuse ou non, image cancer ou non, candidat à recommander ou non). Le modèle apprend à généraliser de ces exemples pour prédire la sortie sur de nouvelles entrées non vues. \n\nLa qualité d'un modèle supervisé dépend critiquement de la qualité et de la représentativité des données étiquetées. L'étiquetage est typiquement le facteur limitant : il est lent, coûteux, et exige souvent une expertise (radiologues pour des images médicales, fraudeurs experts pour des transactions, juristes pour des clauses contractuelles). Sous-estimer l'effort d'étiquetage est l'erreur la plus commune sur les premiers projets ML.",
    example:
      "Le modèle Mirai (MIT) sur le cancer du sein est entraîné sur des mammographies étiquetées par leur résultat clinique à 1-5 ans. Stripe Radar est entraîné sur des transactions étiquetées légitimes ou frauduleuses. Les deux sont du ML supervisé.",
    relatedModules: [2],
    relatedCases: ['stripe-radar', 'mit-barzilay-cancer'],
    relatedTerms: ['apprentissage-non-supervise', 'donnees-entrainement', 'machine-learning'],
  },
  {
    slug: 'apprentissage-non-supervise',
    term: 'Apprentissage non supervisé',
    aliases: ['unsupervised learning'],
    category: 'ml',
    shortDefinition:
      "Forme de ML où le modèle découvre des structures dans des données non étiquetées — segmentation, anomalies, regroupements.",
    longDefinition:
      "L'apprentissage non supervisé travaille sur des données pour lesquelles on ne dispose pas d'étiquettes. L'objectif n'est pas de prédire une sortie connue mais de découvrir des structures dans les données : groupes naturels (clustering), anomalies par rapport à la masse, dimensions cachées qui résument efficacement les données. \n\nDans un contexte business, l'apprentissage non supervisé est utile pour la segmentation client (sans hypothèses préalables sur les segments), la détection d'anomalies (une transaction très différente de toutes celles connues), ou la compression de données (réduction de dimension). Il est généralement plus difficile à valider que le supervisé : sans étiquettes, comment savoir si le modèle « a raison » ? La validation passe par l'utilité métier des structures découvertes.",
    example:
      "Une banque peut utiliser un clustering non supervisé pour segmenter sa base client, puis interpréter les segments métier (jeunes actifs urbains, retraités patrimoniaux, etc.). Aucun expert ne fournit a priori les étiquettes — elles émergent de l'analyse.",
    relatedModules: [2],
    relatedTerms: ['apprentissage-supervise', 'apprentissage-renforcement', 'machine-learning'],
  },
  {
    slug: 'apprentissage-renforcement',
    term: 'Apprentissage par renforcement',
    aliases: ['reinforcement learning', 'RL'],
    category: 'ml',
    shortDefinition:
      "Forme de ML où un agent apprend à agir dans un environnement par essai-erreur, guidé par un signal de récompense.",
    longDefinition:
      "L'apprentissage par renforcement (Reinforcement Learning, RL) modélise un agent qui interagit avec un environnement. À chaque action, l'agent observe une nouvelle situation et reçoit une récompense (positive ou négative). Au fil de millions d'essais, l'agent apprend une politique d'action qui maximise la récompense cumulée espérée. \n\nLe RL a produit des résultats spectaculaires dans des environnements bien définis comme les jeux (AlphaGo, AlphaZero, Atari). Son application en entreprise est plus délicate : définir précisément la fonction de récompense est difficile (que veut-on optimiser exactement ?), et l'environnement réel est souvent moins reproductible qu'un jeu. Le RL est néanmoins utilisé en pratique pour l'orchestration robotique (Amazon DeepFleet), la personnalisation à long terme, l'optimisation de traitements médicaux, et le RLHF (RL from Human Feedback) qui sert à aligner les LLM.",
    example:
      "DeepFleet, le foundation model d'orchestration de la flotte Amazon Robotics, utilise probablement des composantes de RL pour optimiser en temps réel les trajectoires et l'allocation des tâches entre robots. Les LLM modernes (GPT-4, Claude) sont affinés par RLHF.",
    relatedModules: [2, 4],
    relatedCases: ['amazon-robotics'],
    relatedTerms: ['machine-learning', 'apprentissage-supervise', 'fine-tuning'],
  },
  {
    slug: 'donnees-entrainement',
    term: "Données d'entraînement",
    aliases: ['training data', "jeu d'entraînement"],
    category: 'ml',
    shortDefinition:
      "Ensemble des exemples utilisés pour ajuster les paramètres d'un modèle ML — leur qualité conditionne la performance finale.",
    longDefinition:
      "Les données d'entraînement sont la matière première du machine learning supervisé. Leur qualité, leur volume, leur représentativité et leur fraîcheur conditionnent directement la performance du modèle final. Un adage central du ML : « garbage in, garbage out » — un modèle ne peut pas être meilleur que les données dont il dispose pour apprendre. \n\nPlusieurs questions structurantes dans tout projet ML : disposez-vous de suffisamment de données ? Sont-elles représentatives de la population sur laquelle le modèle sera utilisé (biais de sélection, sous-groupes manquants) ? Sont-elles à jour (drift potentiel) ? L'étiquetage est-il fiable et homogène ? La gouvernance des données (RGPD pour les données personnelles, droits d'auteur pour les corpus textes) est respectée ? Ces questions précèdent et conditionnent toute discussion sur le choix du modèle.",
    example:
      "Stripe entraîne ses modèles ML de fraude sur des centaines de millions de transactions historiques étiquetées. La qualité de l'étiquetage (légitime/frauduleux) repose sur les retours des commerçants, des utilisateurs et des règles métier — un enjeu permanent.",
    relatedModules: [2, 5],
    relatedCases: ['stripe-radar', 'mit-barzilay-cancer'],
    relatedTerms: ['apprentissage-supervise', 'biais-algorithmique', 'machine-learning'],
  },

  // ========================================================================
  // IA GÉNÉRATIVE (7)
  // ========================================================================
  {
    slug: 'modele-generatif',
    term: 'Modèle génératif',
    aliases: ['generative model', 'IA générative'],
    category: 'genai',
    shortDefinition:
      "Modèle ML qui produit du nouveau contenu (texte, image, audio, vidéo, code) plutôt que de classer ou prédire.",
    longDefinition:
      "Un modèle génératif apprend la distribution sous-jacente de ses données d'entraînement et est capable d'en produire de nouveaux échantillons plausibles. À la différence d'un modèle classifiant (qui répond « cette image est un chat ») ou d'un modèle prédictif (qui répond « cette transaction est à 0.7 % de probabilité frauduleuse »), un modèle génératif produit du nouveau contenu : un texte, une image, du code, une voix synthétique. \n\nLes modèles génératifs récents — GPT-4, Claude, Gemini pour le texte ; Midjourney, Stable Diffusion, DALL·E pour l'image ; Suno, Udio pour l'audio — ont produit la rupture publique de 2022-2024. Pour une organisation, leur valeur business demande un cadrage rigoureux : la production massive de contenu plausible n'est pas en soi une valeur — la valeur émerge quand le contenu produit s'intègre dans un workflow utile (assistance à la rédaction, à la recherche, à la programmation, au design).",
    example:
      "Morgan Stanley utilise GPT-4 d'OpenAI dans deux assistants : AI @ Morgan Stanley Assistant pour retrouver de l'information dans le corpus interne, et Debrief pour synthétiser les notes d'entretien client. Dans les deux cas, le modèle est génératif (il produit du texte) mais le périmètre est strictement cadré.",
    relatedModules: [3],
    relatedCases: ['morgan-stanley', 'github-copilot-accenture'],
    relatedTerms: ['llm', 'foundation-model', 'hallucination'],
  },
  {
    slug: 'llm',
    term: 'Grand modèle de langage (LLM)',
    aliases: ['LLM', 'large language model', 'grand modèle de langage'],
    category: 'genai',
    shortDefinition:
      "Modèle génératif de très grande taille spécialisé dans le langage — texte, code, dialogue. Exemples : GPT-4, Claude, Gemini, Llama.",
    longDefinition:
      "Un Large Language Model (LLM) est un type particulier de foundation model spécialisé dans le langage. Ces modèles sont entraînés sur de très grands corpus de texte (et de plus en plus, multimodaux : texte + image + audio) et apprennent à prédire le token suivant dans un contexte donné. Cette tâche apparemment simple, à très grande échelle, fait émerger des capacités complexes : compréhension de questions, raisonnement sur des textes, génération de code, traduction, résumé. \n\nDeux catégories principales : les modèles propriétaires accessibles uniquement par API (GPT-4 d'OpenAI, Claude d'Anthropic, Gemini de Google), et les modèles ouverts qui peuvent être téléchargés et déployés en infrastructure interne (Llama de Meta, Mistral, modèles de la communauté open source). Le choix entre les deux dépend de critères comme la performance, le coût, le contrôle des données, les exigences réglementaires, l'expertise interne.",
    example:
      "Morgan Stanley utilise GPT-4 (LLM propriétaire). GitHub Copilot s'appuie sur des LLM optimisés pour le code. Une banque européenne soumise à des contraintes RGPD strictes peut préférer déployer un Llama ou Mistral en interne pour garder le contrôle des prompts et des données.",
    relatedModules: [3],
    relatedCases: ['morgan-stanley', 'github-copilot-accenture'],
    relatedTerms: ['foundation-model', 'modele-generatif', 'rag', 'fine-tuning'],
  },
  {
    slug: 'foundation-model',
    term: 'Foundation model',
    aliases: ['modèle de fondation', 'modèle pré-entraîné'],
    category: 'genai',
    shortDefinition:
      "Modèle de très grande taille pré-entraîné sur des données massives, conçu pour être adapté à de multiples tâches en aval.",
    longDefinition:
      "Le terme « foundation model » a été popularisé par les chercheurs de Stanford (notamment Percy Liang) à partir de 2021. Il désigne des modèles de très grande taille, entraînés sur des corpus massifs, et conçus pour servir de socle (« foundation ») à de multiples applications en aval — par adaptation, fine-tuning, ou simplement par prompting. \n\nLes LLM (GPT-4, Claude, Gemini) sont des foundation models pour le texte. Mais le concept va au-delà : on parle aussi de foundation models pour la vision (CLIP, Segment Anything), pour la robotique (DeepFleet d'Amazon en est un), pour la biologie. Le caractère « fondation » tient à la généralité des capacités après pré-entraînement, qui permettent une réutilisation économique : on entraîne un grand modèle une fois, on l'adapte ensuite pour de nombreuses tâches au lieu de partir de zéro à chaque fois.",
    example:
      "DeepFleet, le foundation model d'Amazon pour l'orchestration de la flotte robotique annoncée en 2025, est positionné explicitement par Amazon comme un analogue des LLM : un grand modèle pré-entraîné sur des données opérationnelles massives, capable d'orchestrer une flotte hétérogène en temps réel.",
    relatedModules: [3, 4, 6],
    relatedCases: ['amazon-robotics', 'morgan-stanley'],
    relatedTerms: ['llm', 'modele-generatif', 'fine-tuning'],
  },
  {
    slug: 'hallucination',
    term: 'Hallucination',
    aliases: ['hallucination', 'fabulation'],
    category: 'genai',
    shortDefinition:
      "Production par un LLM d'une information plausible mais factuellement fausse — risque structurel de tout système génératif.",
    longDefinition:
      "Une hallucination est la production par un LLM d'une affirmation qui semble crédible et bien formulée mais qui est factuellement fausse. Elle peut concerner des dates, des noms, des chiffres, des citations, des références bibliographiques entièrement inventées mais syntaxiquement convaincantes. Ce phénomène est structurel : un LLM optimise la plausibilité linguistique du token suivant, pas la vérité factuelle. \n\nLes hallucinations sont une raison centrale pour ne jamais déployer un LLM seul sur des décisions à fort enjeu. Plusieurs mécanismes permettent de réduire le risque sans l'éliminer : RAG (ancrer les réponses dans un corpus interne curé et exiger des citations), revue humaine systématique, périmètres d'usage explicitement limités, formation des utilisateurs à reconnaître les signes d'hallucination, monitoring continu.",
    example:
      "Demander à un LLM la liste des publications scientifiques d'un chercheur peut produire des références inventées mais formellement crédibles (revue plausible, format de citation correct, co-auteurs cohérents). C'est une hallucination — qu'on ne peut détecter qu'en vérifiant chaque référence.",
    relatedModules: [3, 5],
    relatedCases: ['morgan-stanley'],
    relatedTerms: ['llm', 'rag', 'human-in-the-loop'],
  },
  {
    slug: 'rag',
    term: 'RAG (Retrieval-Augmented Generation)',
    aliases: ['retrieval-augmented generation', 'génération augmentée par récupération'],
    category: 'genai',
    shortDefinition:
      "Architecture combinant un LLM avec un moteur de recherche dans un corpus externe — réduit les hallucinations et permet la traçabilité.",
    longDefinition:
      "Le Retrieval-Augmented Generation (RAG) est l'architecture la plus largement adoptée pour déployer des LLM en entreprise sur des cas d'usage sérieux. Le principe : à chaque requête utilisateur, un moteur de recherche identifie d'abord les documents les plus pertinents dans un corpus interne curé. Les passages clés sont ensuite injectés dans le contexte du LLM avec la requête originale. La génération du LLM est ainsi conditionnée par les sources internes. \n\nTrois bénéfices structurants : (1) **traçabilité** — chaque réponse peut citer les documents source, ce qui est essentiel en finance, droit, santé ; (2) **fraîcheur** — la mise à jour du corpus est indépendante du modèle, pas besoin de réentraîner ; (3) **réduction des hallucinations** — le modèle s'appuie sur les sources fournies plutôt que de générer de mémoire. Le RAG ne supprime pas totalement les hallucinations mais les atténue substantiellement quand le corpus est de qualité.",
    example:
      "AI @ Morgan Stanley Assistant est un système RAG : à chaque question d'un conseiller, le système recherche les documents pertinents dans le corpus interne de plus de 100 000 documents (notes de recherche, rapports), puis demande au LLM de produire une réponse ancrée dans ces sources. La réponse cite les documents utilisés.",
    relatedModules: [3],
    relatedCases: ['morgan-stanley'],
    relatedTerms: ['llm', 'hallucination', 'foundation-model'],
  },
  {
    slug: 'prompt-engineering',
    term: 'Prompt engineering',
    aliases: ['ingénierie de prompt'],
    category: 'genai',
    shortDefinition:
      "Discipline pratique consistant à formuler des prompts efficaces pour obtenir d'un LLM les réponses attendues.",
    longDefinition:
      "Le prompt engineering est l'art et la pratique de formuler des requêtes (prompts) qui obtiennent d'un LLM des réponses utiles, précises, dans le format attendu. Plusieurs techniques se sont stabilisées : explicitation du rôle attendu, exemples (few-shot), demande de raisonnement étape par étape, format de sortie spécifié (JSON, XML), contraintes de longueur, séparation claire instructions/contexte/données. \n\nLe prompt engineering n'est pas une compétence purement individuelle : en entreprise, les bons prompts sont capitalisés en bibliothèques internes, versionnés, testés, partagés entre équipes. Le travail de prompt engineering se rapproche progressivement du travail logiciel — d'où l'apparition d'outils dédiés (LangChain, LlamaIndex, frameworks d'évaluation de prompts). Pour autant, ce domaine évolue rapidement : ce qui marche aujourd'hui peut nécessiter une adaptation à chaque nouvelle version de modèle.",
    example:
      "Un prompt mal formulé pour un assistant juridique peut produire un résumé inutilisable. Un bon prompt qui demande explicitement le format (sections, citations des clauses sources, mise en évidence des risques) produit une réponse exploitable. La différence de qualité justifie l'investissement en prompt engineering.",
    relatedModules: [3],
    relatedCases: ['morgan-stanley', 'github-copilot-accenture'],
    relatedTerms: ['llm', 'rag', 'fine-tuning'],
  },
  {
    slug: 'fine-tuning',
    term: 'Fine-tuning',
    aliases: ['affinage', 'spécialisation', 'fine-tuning'],
    category: 'genai',
    shortDefinition:
      "Spécialisation d'un foundation model pré-entraîné sur des données spécifiques pour adapter ses comportements à un domaine.",
    longDefinition:
      "Le fine-tuning consiste à reprendre un foundation model pré-entraîné et à poursuivre son entraînement sur un jeu de données plus restreint mais spécifique au domaine ou à la tâche cible. L'objectif est d'adapter le comportement du modèle à un contexte particulier — vocabulaire métier, style attendu, contraintes de format, alignement à des préférences humaines — tout en bénéficiant de l'investissement initial du foundation model. \n\nPlusieurs variantes existent : full fine-tuning (réajuste tous les paramètres, coûteux), LoRA et autres techniques d'adaptation efficiente (n'ajustent qu'une fraction des paramètres, beaucoup moins coûteux), instruction tuning (entraînement à suivre des instructions), RLHF (Reinforcement Learning from Human Feedback, alignement à des préférences). Le choix entre fine-tuning et alternatives (RAG, prompt engineering avancé) est un arbitrage classique : le fine-tuning donne plus de contrôle mais a un coût et fige le savoir dans le modèle, alors que le RAG est plus flexible mais ne change pas le comportement par défaut du modèle.",
    example:
      "Une banque qui veut un assistant adapté à son vocabulaire métier et à ses processus internes peut soit fine-tuner un modèle ouvert (Llama, Mistral), soit s'appuyer sur RAG + prompt engineering avec un modèle propriétaire. Le choix dépend du volume de données, du budget, et du contrôle souhaité.",
    relatedModules: [3],
    relatedTerms: ['llm', 'foundation-model', 'rag', 'prompt-engineering'],
  },

  // ========================================================================
  // ROBOTIQUE (3)
  // ========================================================================
  {
    slug: 'robotique',
    term: 'Robotique',
    aliases: ['robotics'],
    category: 'robotics',
    shortDefinition:
      "Branche de l'ingénierie qui conçoit, construit et exploite des machines physiques capables d'interagir avec leur environnement.",
    longDefinition:
      "La robotique combine mécanique, électronique, perception (capteurs), planification, contrôle, et de plus en plus IA. Une distinction historique majeure : robots industriels classiques (cages de sécurité, tâches répétitives, vitesse élevée, charge importante) vs robotique mobile et collaborative (plus légère, capable d'opérer à proximité d'humains, plus polyvalente). \n\nDans un contexte business, la robotique se déploie principalement dans la logistique d'entrepôt (Amazon Robotics, AMR), l'industrie manufacturière (cobots Universal Robots, FANUC, ABB), le service (robots aspirateurs, robots de livraison), et la santé (robots chirurgicaux, robots d'assistance). Le coût total d'un projet robotique est dominé non par le robot lui-même mais par l'intégration (capteurs, outillage, logique métier, sécurité) et la conduite du changement.",
    example:
      "Amazon Robotics opère un million de robots dans son réseau logistique mondial. Universal Robots équipe des PME industrielles avec des cobots conformes ISO/TS 15066. Les deux relèvent de la robotique mais avec des architectures et des économies très différentes.",
    relatedModules: [4],
    relatedCases: ['amazon-robotics', 'universal-robots'],
    relatedTerms: ['cobot', 'amr', 'automatisation'],
  },
  {
    slug: 'cobot',
    term: 'Cobot (robot collaboratif)',
    aliases: ['cobot', 'collaborative robot', 'robot collaboratif'],
    category: 'robotics',
    shortDefinition:
      "Robot conçu pour travailler à proximité d'humains sans cage de sécurité dans la majorité des cas, conformément à la norme ISO/TS 15066.",
    longDefinition:
      "Le cobot — robot collaboratif — est une catégorie de robots conçue spécifiquement pour cohabiter avec des humains sans cage de sécurité. La norme ISO/TS 15066:2016 définit quatre méthodes d'opération collaborative : arrêt surveillé en cas de présence humaine, guidage manuel, séparation surveillée, limitation de force et de puissance. La quatrième est la plus utilisée pour les cobots légers. \n\nL'absence de cage transforme l'économie d'un projet d'automatisation : moins d'espace dédié, intégration plus simple, possibilité d'utiliser le cobot sur plusieurs postes par rotation. Cela rend la robotique accessible à des PME industrielles qui n'auraient pas pu engager un projet de robotique classique. En revanche, les cobots ont une capacité utile limitée (charges modestes, vitesses moyennes) — ils ne remplacent pas les robots industriels classiques pour les productions à très haute cadence ou très haute charge.",
    example:
      "Universal Robots est l'un des principaux fabricants mondiaux de cobots. Sa gamme va de l'UR3e (3 kg de charge, atelier d'électronique) à l'UR30 (30 kg, palettisation). Une PME peut acheter un cobot, l'installer en quelques jours avec un intégrateur UR+, et le redéployer entre plusieurs postes selon les besoins.",
    relatedModules: [4],
    relatedCases: ['universal-robots', 'amazon-robotics'],
    relatedTerms: ['robotique', 'amr', 'automatisation'],
  },
  {
    slug: 'amr',
    term: 'AMR (Autonomous Mobile Robot)',
    aliases: ['AMR', 'robot mobile autonome'],
    category: 'robotics',
    shortDefinition:
      "Robot mobile capable de naviguer de manière autonome dans un environnement, par opposition aux AGV qui suivent des chemins fixes.",
    longDefinition:
      "Un Autonomous Mobile Robot (AMR) est capable de planifier dynamiquement ses trajectoires, d'éviter les obstacles, et de s'adapter à un environnement qui change — humains qui circulent, palettes déplacées, configuration d'entrepôt évolutive. Cette capacité d'adaptation distingue les AMR des AGV classiques (Automated Guided Vehicle) qui suivent des chemins matérialisés (rails, lignes au sol, repères magnétiques). \n\nLes AMR sont devenus la colonne vertébrale de la logistique d'entrepôt moderne. Amazon Robotics opère plusieurs générations d'AMR (Hercules, Pegasus, Sequoia) qui transportent des étagères entières dans les centres de distribution. Au-delà de l'entrepôt, les AMR se déploient dans la santé (transport de médicaments en hôpital), l'industrie (manutention inter-postes), le service (livraison du dernier mètre).",
    example:
      "Amazon a atteint le seuil d'un million de robots déployés mondialement, dont une grande partie sont des AMR. L'orchestration de cette flotte hétérogène est désormais pilotée par DeepFleet, un foundation model d'IA dédié.",
    relatedModules: [4],
    relatedCases: ['amazon-robotics'],
    relatedTerms: ['robotique', 'cobot', 'foundation-model'],
  },

  // ========================================================================
  // GOUVERNANCE ET SOCIÉTÉ (7)
  // ========================================================================
  {
    slug: 'biais-algorithmique',
    term: 'Biais algorithmique',
    aliases: ['algorithmic bias', 'biais ML'],
    category: 'governance',
    shortDefinition:
      "Comportement systématiquement différent d'un système IA selon des sous-groupes (genre, origine, âge), produisant des décisions inéquitables.",
    longDefinition:
      "Un biais algorithmique apparaît quand un système IA produit des résultats systématiquement différents pour des sous-groupes différents, sans justification métier légitime. Sources principales : biais dans les données d'entraînement (sous-représentation de groupes, étiquettes biaisées, données historiques reflétant des discriminations passées), choix de conception (variables proxy implicitement corrélées à des attributs protégés), boucles de rétroaction (un biais initial se renforce par les données générées par le système lui-même). \n\nLe biais algorithmique est l'un des risques les plus médiatisés de l'IA, et l'un des plus difficiles à détecter et à traiter. Les obligations s'intensifient : AI Act EU exige une « gouvernance des données » incluant la prévention et la détection des biais pour les systèmes haut risque, NIST AI RMF dédie une partie de la fonction Measure à l'audit de biais, RGPD et lois anti-discrimination s'appliquent. La détection demande une métrologie spécifique (équité par sous-groupes, fairness metrics) — qui doit être posée dès la conception, pas en aval.",
    example:
      "Un modèle de tri de CV entraîné sur des données historiques de recrutement peut apprendre à pénaliser implicitement des CV féminins si les pratiques passées étaient biaisées — même si le genre n'est pas une variable d'entrée explicite (le système peut inférer le genre à partir d'autres signaux). Le système devient discriminatoire malgré une intention initiale neutre.",
    relatedModules: [2, 5],
    relatedCases: ['mit-barzilay-cancer', 'nist-ai-rmf', 'ai-act-eu-haut-risque'],
    relatedTerms: ['donnees-entrainement', 'gouvernance-ia', 'explicabilite'],
  },
  {
    slug: 'gouvernance-ia',
    term: 'Gouvernance IA',
    aliases: ['AI governance'],
    category: 'governance',
    shortDefinition:
      "Ensemble des politiques, processus, rôles, et capacités d'action qui structurent la conception, le déploiement et la supervision des systèmes IA dans une organisation.",
    longDefinition:
      "La gouvernance IA dépasse la publication d'une charte éthique. Elle structure un système opérationnel : politiques internes, rôles et responsabilités (qui décide, qui valide, qui supervise), processus (revue, audit, gestion d'incidents), formation, intégration aux processus de gestion des risques existants (cybersécurité, conformité, opérationnel). Sans cette dimension organisationnelle, les principes restent ornementaux. \n\nLe NIST AI Risk Management Framework propose une structure en quatre fonctions interreliées : Govern (transverse), Map (identifier le contexte et les risques), Measure (analyser et quantifier), Manage (prioriser et traiter). Cette structure est désormais largement adoptée comme socle, y compris hors États-Unis. Elle s'articule avec les obligations légales (AI Act EU, RGPD, sectorielles) que la gouvernance opérationnalise.",
    example:
      "Une charte d'entreprise sur l'IA qui dit « nous respectons la dignité humaine » sans préciser qui valide les déploiements, qui fait les audits de biais, qui peut suspendre un système, qui forme les utilisateurs, n'est pas une gouvernance — c'est une déclaration de principes. La vraie gouvernance se mesure dans les processus, pas dans les chartes.",
    relatedModules: [5, 6],
    relatedCases: ['nist-ai-rmf', 'ai-act-eu-haut-risque'],
    relatedTerms: ['ai-risk-management', 'ai-act', 'accountability', 'human-in-the-loop'],
  },
  {
    slug: 'ai-risk-management',
    term: 'AI Risk Management',
    aliases: ['gestion des risques IA', 'AI RM'],
    category: 'governance',
    shortDefinition:
      "Application des disciplines de gestion des risques aux systèmes IA — identification, évaluation, traitement, monitoring continu.",
    longDefinition:
      "L'AI Risk Management applique aux systèmes IA les disciplines de gestion des risques bien établies dans d'autres domaines (cybersécurité, opérationnel, financier). La spécificité IA tient à plusieurs facteurs : opacité possible des modèles, dépendance aux données d'entraînement, comportement parfois émergent, évolution rapide des capacités, interaction avec des humains qui ne maîtrisent pas la technologie sous-jacente. \n\nLe NIST AI Risk Management Framework (AI RMF 1.0, publié en janvier 2023) est le cadre opérationnel le plus reconnu internationalement. Il structure le travail en quatre fonctions (Govern, Map, Measure, Manage) avec des sous-catégories opérationnelles documentées. Le cadre est volontaire mais largement adopté, y compris en complément des obligations légales (AI Act EU notamment). D'autres standards comme ISO 42001 (AI Management System) ou ISO 23894 (AI Risk Management) complètent l'écosystème.",
    example:
      "Une organisation qui déploie un système de scoring de crédit haut risque (au sens AI Act) doit conduire une analyse de risque systématique : risques de biais discriminatoire, risques de robustesse face à des entrées adversariales, risques de dérive temporelle, risques de cybersécurité. Le NIST AI RMF fournit la méthode opérationnelle pour structurer cette analyse.",
    relatedModules: [5, 6],
    relatedCases: ['nist-ai-rmf', 'ai-act-eu-haut-risque'],
    relatedTerms: ['gouvernance-ia', 'ai-act', 'biais-algorithmique'],
  },
  {
    slug: 'ai-act',
    term: 'AI Act EU',
    aliases: ['Règlement UE 2024/1689', "Règlement européen sur l'IA"],
    category: 'governance',
    shortDefinition:
      "Premier cadre réglementaire global et structuré au monde sur l'IA, basé sur le risque (4 catégories), entré en vigueur en août 2024.",
    longDefinition:
      "L'AI Act EU — Règlement (UE) 2024/1689 — est le premier cadre réglementaire global et structuré au monde sur l'intelligence artificielle. Adopté en mai 2024, publié au Journal officiel le 12 juillet 2024 et entré en vigueur le 1er août 2024, il s'applique progressivement jusqu'en août 2027 selon les obligations. \n\nApproche par le risque : quatre catégories — pratiques interdites (notation sociale par les autorités, manipulation cognitive, identification biométrique massive temps réel) ; haut risque (recrutement, scoring de crédit, justice, services publics essentiels, infrastructures critiques, dispositifs médicaux) ; risque limité (chatbots, deepfakes — obligations de transparence) ; risque minimal (la majorité des usages, pas d'obligations spécifiques). Les modèles à usage général (foundation models) ont un chapitre dédié. Sanctions : jusqu'à 35 M€ ou 7 % du chiffre d'affaires mondial. De nombreux usages business « ordinaires » tombent en haut risque — la classification de chaque cas d'usage IA est une étape critique à conduire dès maintenant.",
    example:
      "Un système de tri de CV utilisé en France relève de la catégorie haut risque (Annexe III, point 4 — emploi). Il doit respecter une dizaine d'obligations : système de gestion des risques, gouvernance des données, documentation technique, transparence, supervision humaine, exactitude/robustesse/cybersécurité, évaluation de conformité avant mise sur le marché, registre dans la base de données européenne.",
    relatedModules: [5],
    relatedCases: ['ai-act-eu-haut-risque', 'nist-ai-rmf'],
    relatedTerms: ['gouvernance-ia', 'ai-risk-management', 'biais-algorithmique', 'accountability'],
  },
  {
    slug: 'explicabilite',
    term: 'Explicabilité',
    aliases: ['explainability', 'XAI'],
    category: 'governance',
    shortDefinition:
      "Capacité à fournir, pour chaque décision ou prédiction d'un système IA, une explication compréhensible des facteurs ayant contribué au résultat.",
    longDefinition:
      "L'explicabilité (Explainable AI, XAI) est la capacité d'un système IA à produire des explications de ses décisions accessibles aux humains. Elle est exigée par plusieurs réglementations (AI Act EU pour les systèmes haut risque, RGPD pour les décisions automatisées affectant les personnes), par la déontologie de plusieurs métiers (santé, finance, justice), et par les attentes légitimes des utilisateurs et personnes affectées. \n\nDeux approches principales : modèles intrinsèquement interprétables (régression linéaire, arbres de décision simples — moins puissants mais lisibles), et techniques post-hoc qui produisent des explications a posteriori sur des modèles complexes (LIME, SHAP, attention maps). Les techniques post-hoc sont une approximation et peuvent elles-mêmes induire en erreur — d'où l'importance d'un travail rigoureux sur ce qu'on entend par « expliquer », à qui, dans quel objectif. L'explicabilité n'est pas binaire : elle se calibre selon les enjeux.",
    example:
      "Un système de scoring de crédit doit pouvoir expliquer pourquoi un dossier a été refusé — ce qui est exigé en France par la loi Informatique et Libertés et au niveau européen par le RGPD et l'AI Act. Une réponse comme « le modèle a calculé 0.32 » n'est pas une explication ; il faut indiquer les facteurs principaux (revenus, historique, ratio d'endettement).",
    relatedModules: [5],
    relatedCases: ['ai-act-eu-haut-risque', 'nist-ai-rmf'],
    relatedTerms: ['gouvernance-ia', 'accountability', 'biais-algorithmique'],
  },
  {
    slug: 'accountability',
    term: 'Accountability (responsabilité)',
    aliases: ['accountability', 'redevabilité'],
    category: 'governance',
    shortDefinition:
      "Principe selon lequel des personnes ou entités identifiables sont juridiquement et organisationnellement responsables des décisions et conséquences d'un système IA.",
    longDefinition:
      "L'accountability — terme qu'on traduit imparfaitement par responsabilité ou redevabilité — désigne le principe selon lequel des personnes ou entités identifiables sont responsables des décisions et conséquences des systèmes IA qu'elles déploient. Ce principe s'oppose à l'idée que « l'algorithme décide » et qu'il n'y aurait personne à tenir pour responsable d'une erreur ou d'un dommage. \n\nDans la pratique, l'accountability se traduit par : désignation de rôles internes (responsable IA, comité d'éthique, fonction conformité), documentation des décisions de conception et de déploiement, traçabilité des décisions automatisées (logs, journaux), processus de gestion d'incidents et de redressement, voies de recours pour les personnes affectées. Elle est articulée aux exigences légales (AI Act EU, RGPD, droit commun de la responsabilité civile et pénale) et aux pratiques d'audit interne.",
    example:
      "Si un système de tri de CV refuse à tort des candidats qualifiés, qui est responsable ? Le fournisseur du modèle ? L'employeur qui le déploie ? Les RH qui valident ? Le RGPD et l'AI Act EU répondent en partie à cette question avec un partage de responsabilités entre fournisseur et déployeur. Côté organisation, la nomination d'un responsable IA et la traçabilité des décisions sont des prérequis.",
    relatedModules: [5, 6],
    relatedCases: ['ai-act-eu-haut-risque', 'nist-ai-rmf'],
    relatedTerms: ['gouvernance-ia', 'explicabilite', 'human-in-the-loop'],
  },
  {
    slug: 'human-in-the-loop',
    term: 'Human-in-the-loop',
    aliases: ['HITL', 'humain dans la boucle', 'supervision humaine'],
    category: 'governance',
    shortDefinition:
      "Architecture où un humain valide, supervise ou peut interrompre les décisions d'un système IA — exigée par l'AI Act EU pour les systèmes haut risque.",
    longDefinition:
      "Le principe human-in-the-loop (HITL) consiste à maintenir un humain dans la chaîne de décision d'un système IA, plutôt que de laisser le système agir en autonomie complète. Cela peut prendre plusieurs formes : validation systématique de chaque décision avant exécution (typique en santé, justice, recrutement), supervision a posteriori avec capacité d'intervention, surveillance continue avec possibilité de suspension, escalade automatique vers un humain dans les cas complexes ou ambigus. \n\nLe HITL n'est pas qu'un choix philosophique. Il est exigé par l'AI Act EU pour les systèmes haut risque (Article 14 — supervision humaine effective), par la déontologie médicale, par les pratiques bancaires en matière de crédit. Il est aussi un garde-fou opérationnel important : il permet de détecter les hallucinations, les biais, les dérives en production. Le défi est d'éviter le « rubber stamping » — un humain qui valide systématiquement sans véritablement examiner.",
    example:
      "Le modèle Mirai (MIT) sur le cancer du sein produit un score de risque, pas un diagnostic. Le radiologue intègre ce score à son jugement et au dossier patient — il garde la décision clinique. C'est un exemple emblématique de HITL : l'IA augmente le radiologue plutôt qu'elle ne le remplace.",
    relatedModules: [5],
    relatedCases: ['mit-barzilay-cancer', 'morgan-stanley', 'ai-act-eu-haut-risque'],
    relatedTerms: ['gouvernance-ia', 'accountability', 'hallucination', 'intelligence-collective'],
  },

  // ========================================================================
  // MÉTHODOLOGIE PROJET (3)
  // ========================================================================
  {
    slug: 'roadmap-ia',
    term: 'Roadmap IA',
    aliases: ['feuille de route IA', 'AI roadmap'],
    category: 'methodology',
    shortDefinition:
      "Document stratégique qui articule la vision IA d'une organisation, les cas d'usage prioritaires, le séquencement, la gouvernance, les ressources et les KPI sur 12 à 24 mois.",
    longDefinition:
      "Une roadmap IA n'est pas une liste de projets — c'est un document stratégique qui articule plusieurs dimensions cohérentes. La vision : pourquoi l'IA, pour quelle ambition métier, dans quel horizon. Les cas d'usage prioritaires : quels processus, quels métiers, dans quel ordre, avec quelle valeur attendue. Le séquencement : quels pilotes en année 1, quel passage à l'échelle en année 2. La gouvernance : qui décide, qui supervise, qui audite, comment articuler avec les obligations légales (AI Act EU, sectorielles). Les ressources : compétences à recruter ou former, budget, infrastructure. Les KPI : comment mesurer la valeur réelle, pas seulement les livrables. \n\nUne bonne roadmap équilibre ambition et réalisme. Trop ambitieuse, elle perd en crédibilité dès les premiers retards. Trop conservatrice, elle laisse l'organisation prendre du retard structurel sur ses concurrents. La roadmap est aussi un document vivant : elle se révise à mesure que les premiers pilotes produisent des apprentissages.",
    example:
      "Une roadmap IA typique d'organisation française moyenne sur 18-24 mois : T0+3 mois — diagnostic de maturité et identification de 3-5 cas d'usage candidats ; T0+6 mois — premier pilote sur le cas le plus prometteur (RAG sur documentation interne ?) ; T0+12 mois — pilote validé ou abandonné, lancement de 2-3 nouveaux pilotes parallèles + structuration de la gouvernance ; T0+18-24 mois — passage à l'échelle des pilotes validés et roadmap pour la suite.",
    relatedModules: [6],
    relatedCases: ['mit-ide'],
    relatedTerms: ['pilote-ia', 'capstone', 'gouvernance-ia'],
  },
  {
    slug: 'pilote-ia',
    term: 'Pilote IA',
    aliases: ['pilot project', 'PoC IA', 'projet pilote'],
    category: 'methodology',
    shortDefinition:
      "Déploiement à échelle réduite, structuré et mesurable, conçu pour tester la valeur réelle d'un cas d'usage IA avant un éventuel passage à l'échelle.",
    longDefinition:
      "Un pilote IA est un déploiement à échelle réduite mais représentatif, conçu pour mesurer rigoureusement la valeur réelle d'un cas d'usage avant un éventuel passage à l'échelle. Il se distingue du Proof of Concept (PoC) — qui démontre la faisabilité technique mais souvent dans un environnement artificiel — par son ancrage dans un contexte réel : utilisateurs réels, données réelles, processus réels. \n\nUn bon pilote suit une méthodologie structurée : périmètre clairement défini (utilisateurs, processus, durée), métriques multiples (productivité, qualité, satisfaction, et idéalement effets de second ordre), comparaison à un groupe contrôle si possible, durée suffisante pour observer des effets durables, conduite du changement intégrée. L'étude conjointe GitHub × Accenture sur l'impact de Copilot est un exemple emblématique de pilote rigoureux.",
    example:
      "Un pilote GenAI dans un cabinet de conseil pourrait : (1) sélectionner 30 consultants traitement vs 30 consultants contrôle, (2) mesurer pendant 3 mois plusieurs dimensions (vitesse de production des livrables, qualité perçue par les clients, satisfaction des consultants, rétention), (3) comparer les deux groupes, (4) décider passage à l'échelle / refonte / abandon sur la base des résultats.",
    relatedModules: [3, 6],
    relatedCases: ['github-copilot-accenture', 'morgan-stanley'],
    relatedTerms: ['roadmap-ia', 'capstone', 'automatisation'],
  },
  {
    slug: 'capstone',
    term: 'Capstone (projet final intégrateur)',
    aliases: ['projet final', 'capstone project'],
    category: 'methodology',
    shortDefinition:
      "Projet final d'un parcours pédagogique qui intègre l'ensemble des notions étudiées dans une production unique, applicable et évaluable.",
    longDefinition:
      "Le terme « capstone » — pierre de couronnement d'un édifice — désigne dans les parcours pédagogiques anglo-saxons le projet final qui intègre l'ensemble des notions du parcours dans une production cohérente. Dans une formation IA executive, le capstone typique est la construction d'une roadmap IA pour l'organisation de l'apprenant, mobilisant tout le parcours : cadrage stratégique (Module 1), évaluation de cas d'usage ML (Module 2), brief de pilote GenAI (Module 3), opportunités robotique si applicable (Module 4), gouvernance et conformité (Module 5), planification long terme (Module 6). \n\nUn bon capstone n'est pas un livrable scolaire — c'est un document utilisable en interne, défendable en COMEX, qui structure réellement la décision stratégique. Le format typique combine vision, diagnostic, cas d'usage prioritaires, séquencement, gouvernance, budget, compétences, KPI, risques, conformité, et planning sur 12-24 mois.",
    example:
      "Pour une PME industrielle, un capstone réaliste pourrait être : roadmap IA priorisant un pilote GenAI sur la documentation technique interne (Module 3) et un pilote cobot sur l'un des postes les plus pénibles (Module 4), avec une gouvernance simplifiée mais réelle (Module 5) et une planification sur 18 mois cohérente avec les ressources disponibles.",
    relatedModules: [6],
    relatedCases: ['mit-ide'],
    relatedTerms: ['roadmap-ia', 'pilote-ia', 'gouvernance-ia'],
  },
];

/**
 * Helpers de filtrage et d'accès au glossaire
 */

/** Récupère une entrée par slug */
export function getEntry(slug: string): GlossaryEntry | undefined {
  return glossary.find((entry) => entry.slug === slug);
}

/** Filtre les entrées par catégorie */
export function entriesByCategory(category: GlossaryCategory): GlossaryEntry[] {
  return glossary.filter((entry) => entry.category === category);
}

/** Trie les entrées alphabétiquement par terme (en ignorant la casse) */
export function entriesAlphabetical(): GlossaryEntry[] {
  return [...glossary].sort((a, b) =>
    a.term.localeCompare(b.term, 'fr', { sensitivity: 'base' })
  );
}

/** Liste des initiales utilisées (pour la navigation A-Z) */
export function alphabeticalInitials(): string[] {
  const initials = new Set<string>();
  for (const entry of glossary) {
    const first = entry.term.charAt(0).toUpperCase();
    initials.add(first);
  }
  return [...initials].sort();
}

/** Total de termes */
export const TOTAL_TERMS = glossary.length;
