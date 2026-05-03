/**
 * src/content/podcasts.ts
 *
 * Catalogue structuré des 10 épisodes de podcast NotebookLM du parcours
 * AI Strategy. Chaque épisode est un brief : description, points clés,
 * chapitres prévisionnels, documents-source à fournir à NotebookLM,
 * références croisées vers modules / cas / glossaire.
 *
 * Le pipeline de production envisagé est :
 *   1. Cet objet définit la structure éditoriale (titre, angle, sources)
 *   2. L'utilisateur ouvre Google NotebookLM, charge les sourceDocuments
 *      indiqués, et génère un Audio Overview avec les notes de focus
 *   3. Le fichier audio résultant est déposé dans public/podcasts/{slug}.mp3
 *      et le transcript dans public/podcasts/{slug}-transcript.md
 *   4. Le `status` passe de 'planned' à 'published'
 *
 * Les pages /fr/podcasts/{slug} affichent automatiquement le player et
 * le contenu structuré une fois les fichiers déposés.
 */

export type PodcastTheme =
  | 'foundations'
  | 'technology'
  | 'governance'
  | 'application';

export type PodcastStatus = 'planned' | 'in-production' | 'published';

export interface PodcastChapter {
  /** Timestamp en secondes depuis le début */
  time: number;
  /** Libellé du chapitre */
  title: string;
}

export interface PodcastEpisode {
  /** Slug URL-friendly */
  slug: string;
  /** Numéro d'épisode (1-10) — sert au tri et à l'affichage */
  number: number;
  /** Titre de l'épisode */
  title: string;
  /** Sous-titre / accroche d'une ligne */
  subtitle: string;
  /** Thème de regroupement (4 thèmes) */
  theme: PodcastTheme;
  /** Durée cible (ex: "12-15 min") */
  duration: string;
  /** Description du public cible (1 phrase) */
  audience: string;
  /** Description longue (rédigée pour la page épisode, 2-3 paragraphes) */
  description: string;
  /** À retenir (5-7 points) */
  takeaways: string[];
  /** Chapitres prévisionnels avec timestamps approximatifs */
  chapters: PodcastChapter[];
  /**
   * Documents-source à fournir à NotebookLM lors de la génération.
   * Chaque entrée pointe vers une page interne du site, identifiée par
   * son chemin relatif depuis la racine.
   */
  sourceDocuments: Array<{
    label: string;
    path: string;
  }>;
  /** Notes de focus / instructions complémentaires à donner à NotebookLM */
  focusNotes: string;
  /** Modules associés */
  relatedModules?: number[];
  /** Cas associés (slugs) */
  relatedCases?: string[];
  /** Termes du glossaire associés (slugs) */
  relatedGlossary?: string[];
  /**
   * Fichier audio relatif à la racine publique (ex: /podcasts/ep-01.mp3).
   * Optionnel : si absent, la page affiche un message « épisode en
   * production ».
   */
  audioFile?: string;
  /** Fichier de transcript correspondant */
  transcriptFile?: string;
  /** Statut de production */
  status: PodcastStatus;
}

export const podcastThemeLabels: Record<PodcastTheme, string> = {
  foundations: 'Fondamentaux',
  technology: 'Technologies',
  governance: 'Gouvernance et conformité',
  application: 'Cas et applications',
};

export const podcastThemeDescriptions: Record<PodcastTheme, string> = {
  foundations:
    "Cadrage stratégique, fondamentaux conceptuels, méthodologie de décision.",
  technology:
    "Familles techniques de l'IA en entreprise — ML supervisé, GenAI, robotique.",
  governance:
    "AI Act EU, NIST RMF, OCDE — comment naviguer la conformité sans bureaucratiser.",
  application:
    "Cas exemplaires, intelligence collective, impact sur le travail, pièges fréquents.",
};

export const podcasts: PodcastEpisode[] = [
  // ========================================================================
  // ÉPISODE 1 — Fondamentaux
  // ========================================================================
  {
    slug: 'ep-01-pourquoi-ia-pour-dirigeants',
    number: 1,
    title: "Pourquoi l'IA pour les dirigeants — au-delà du buzz",
    subtitle:
      "Cadrage stratégique : ce que tout dirigeant doit comprendre avant d'investir dans l'IA.",
    theme: 'foundations',
    duration: '12-15 min',
    audience:
      "Dirigeants, membres de COMEX, responsables stratégie qui veulent un cadrage rapide et solide avant de prendre des décisions IA.",
    description:
      "Cet épisode pose les bases : qu'est-ce que l'IA aujourd'hui, comment distinguer IA étroite et IA générale, pourquoi la vague actuelle vient principalement du machine learning et des foundation models, et surtout — comment articuler tout cela à une décision stratégique d'entreprise.\n\nLes deux animateurs explorent les pièges classiques du discours IA pour décideurs : le mythe de l'IA générale imminente, la confusion entre IA et automatisation classique, l'illusion que l'IA est une commodité. Ils s'appuient sur les travaux du MIT Center for Collective Intelligence (Thomas Malone) pour proposer une lecture où l'IA augmente l'intelligence collective d'une organisation plutôt que de la remplacer.\n\nL'épisode se termine sur trois questions structurantes que tout dirigeant devrait pouvoir répondre avant d'investir : quel processus métier, quelle valeur attendue, quel risque maîtrisable.",
    takeaways: [
      "L'IA actuelle est essentiellement de l'IA étroite (narrow AI), spécialisée par tâche — pas une intelligence générale",
      "La vague de progrès depuis ~2012 vient du deep learning + données massives + capacité de calcul, pas d'une percée fondamentale en raisonnement",
      "L'intelligence collective humain × machine est un cadre plus puissant que « remplacer l'humain »",
      "Avant d'investir, trois questions : processus métier précis, valeur attendue mesurable, risque maîtrisable",
      "Les pires erreurs de cadrage IA se font au COMEX, pas dans les équipes techniques",
      "Cadre méthodologique : commencer par la stratégie, pas par la technologie",
    ],
    chapters: [
      { time: 0, title: "Introduction — pourquoi maintenant ?" },
      { time: 90, title: "IA étroite vs IA générale : la distinction" },
      { time: 240, title: "D'où vient la vague actuelle (deep learning)" },
      { time: 420, title: "Intelligence collective humain × machine" },
      { time: 600, title: "Les 3 questions que tout dirigeant doit poser" },
      { time: 780, title: "Conclusion — par où commencer demain" },
    ],
    sourceDocuments: [
      { label: 'Module 1 — Introduction à l\'IA', path: '/fr/modules/01-introduction-ia/' },
      { label: 'Glossaire — IA, IA étroite, IA générale, intelligence collective', path: '/fr/glossaire/' },
      { label: 'Cas Takeda × MIT CCI Superminds', path: '/fr/cas/takeda-superminds/' },
    ],
    focusNotes:
      "Insister sur le cadrage business-first et non technique. Éviter le jargon. Cibler un dirigeant non technicien qui doit prendre une décision dans les 3 mois.",
    relatedModules: [1],
    relatedCases: ['takeda-superminds'],
    relatedGlossary: [
      'intelligence-artificielle',
      'ia-etroite',
      'ia-generale',
      'intelligence-collective',
    ],
    status: 'planned',
  },

  // ========================================================================
  // ÉPISODE 2 — Technologies
  // ========================================================================
  {
    slug: 'ep-02-machine-learning-au-quotidien',
    number: 2,
    title: 'Machine Learning au quotidien — Stripe Radar et le dépistage MIT',
    subtitle:
      "Comment le ML supervisé classique transforme des décisions critiques — fraude bancaire, détection précoce de cancer.",
    theme: 'technology',
    duration: '12-15 min',
    audience:
      "Responsables métier, chefs de projet IA, consultants qui veulent comprendre quand le ML supervisé est la bonne réponse.",
    description:
      "Le machine learning supervisé est souvent éclipsé par la GenAI dans le discours public, alors qu'il reste la technologie la plus mature et la plus déployée en production. Cet épisode revient sur deux cas exemplaires.\n\nStripe Radar utilise du ML supervisé pour évaluer en temps réel le risque de fraude sur des centaines de millions de transactions. Le cas illustre tout : l'importance des features, la gestion du déséquilibre de classes, le suivi continu des dérives, l'arbitrage entre faux positifs et faux négatifs.\n\nLe second cas — le modèle Mirai développé par l'équipe de Regina Barzilay au MIT CSAIL — applique le ML à la détection précoce du cancer du sein à partir de mammographies. Performance documentée, interprétabilité partielle, articulation avec le radiologue : un cas santé où la rigueur méthodologique fait la différence entre un outil utile et un outil dangereux.",
    takeaways: [
      "Le ML supervisé classique reste la majorité des cas d'usage IA en production",
      "Stripe Radar : ML temps réel sur déséquilibre de classes massif (fraude << transactions normales)",
      "Mirai (MIT) : prédiction du risque cancer 5 ans à l'avance, validée empiriquement",
      "Trois questions critiques avant un projet ML : qualité des données, équité par sous-groupes, suivi des dérives",
      "L'interprétabilité partielle ne disqualifie pas un modèle — elle conditionne son déploiement (humain dans la boucle)",
      "Une métrique unique tue : utiliser une matrice de confusion + métriques par sous-groupes",
    ],
    chapters: [
      { time: 0, title: "Introduction — pourquoi le ML reste central" },
      { time: 90, title: "Stripe Radar — fraude bancaire en temps réel" },
      { time: 300, title: "Le défi du déséquilibre de classes" },
      { time: 480, title: "Mirai au MIT — détection précoce du cancer" },
      { time: 660, title: "Équité, biais, sous-groupes : un enjeu critique" },
      { time: 810, title: "Quand choisir le ML supervisé classique" },
    ],
    sourceDocuments: [
      { label: "Module 2 — Machine Learning en entreprise", path: '/fr/modules/02-machine-learning/' },
      { label: 'Cas Stripe Radar', path: '/fr/cas/stripe-radar/' },
      { label: 'Cas MIT Regina Barzilay (Mirai)', path: '/fr/cas/mit-barzilay-cancer/' },
      { label: 'Glossaire — machine learning, apprentissage supervisé, biais algorithmique', path: '/fr/glossaire/' },
    ],
    focusNotes:
      "Garder un ton accessible. Insister sur l'articulation entre la technique et la décision métier, plutôt que les détails algorithmiques.",
    relatedModules: [2],
    relatedCases: ['stripe-radar', 'mit-barzilay-cancer'],
    relatedGlossary: [
      'machine-learning',
      'apprentissage-supervise',
      'biais-algorithmique',
      'donnees-entrainement',
    ],
    status: 'planned',
  },

  // ========================================================================
  // ÉPISODE 3 — Technologies
  // ========================================================================
  {
    slug: 'ep-03-genai-morgan-stanley',
    number: 3,
    title: 'GenAI en entreprise — comment Morgan Stanley a fait',
    subtitle:
      "Au-delà de ChatGPT public : ce qu'il faut vraiment construire pour déployer la GenAI sérieusement en entreprise.",
    theme: 'technology',
    duration: '13-16 min',
    audience:
      "Responsables data, CIO, chefs de projet IA qui doivent transformer un essai GenAI en valeur métier durable.",
    description:
      "L'IA générative attire toutes les attentions, mais 90 % du travail de déploiement n'est pas dans le modèle — il est dans l'écosystème autour. Cet épisode explore en profondeur le cas Morgan Stanley, qui a déployé deux assistants GenAI distincts (AskResearchGPT pour la recherche financière interne, Debrief pour la prise de notes de réunion client) en collaboration avec OpenAI.\n\nLes animateurs décortiquent l'architecture RAG (Retrieval-Augmented Generation) qui alimente AskResearchGPT avec le corpus interne de recherche, les garde-fous mis en place pour éviter les hallucinations sur des données sensibles, le processus de gouvernance qui valide chaque cas d'usage, et — peut-être le plus instructif — l'investissement RH massif pour former les conseillers à utiliser efficacement ces outils.\n\nLe cas GitHub × Accenture sert de contre-point : une mesure rigoureuse de l'impact réel de Copilot sur la productivité des développeurs avec groupe traitement / contrôle. Méthodologie transposable à tout pilote GenAI sérieux.",
    takeaways: [
      "20-30 % de la valeur d'un projet GenAI vient du LLM ; 70-80 % vient de l'écosystème (RAG, garde-fous, gouvernance, RH)",
      "Morgan Stanley a investi massivement dans RAG sur corpus interne pour éviter les hallucinations",
      "AskResearchGPT et Debrief : deux assistants distincts pour deux cas d'usage distincts (pas un assistant universel)",
      "GitHub × Accenture : méthodologie de pilote avec groupe traitement / contrôle = standard transposable",
      "La conduite du changement et la formation pèsent autant que la technique",
      "Décomposer un workflow en tâches AVANT de choisir la techno (Module 3 §3)",
    ],
    chapters: [
      { time: 0, title: "Introduction — au-delà du buzz" },
      { time: 100, title: "Morgan Stanley — AskResearchGPT et son architecture RAG" },
      { time: 320, title: "Debrief — l'assistant pour les rendez-vous client" },
      { time: 500, title: "Garde-fous, gouvernance, hallucinations" },
      { time: 700, title: "GitHub × Accenture — comment mesurer l'impact réel" },
      { time: 870, title: "Les 3 critères pour lancer un pilote GenAI sérieux" },
    ],
    sourceDocuments: [
      { label: "Module 3 — IA générative en entreprise", path: '/fr/modules/03-ia-generative/' },
      { label: 'Cas Morgan Stanley', path: '/fr/cas/morgan-stanley/' },
      { label: 'Cas GitHub × Accenture', path: '/fr/cas/github-copilot-accenture/' },
      { label: 'Glossaire — LLM, foundation model, RAG, hallucination, prompt engineering', path: '/fr/glossaire/' },
    ],
    focusNotes:
      "Distinguer clairement ce qui dépend du modèle (peu) et ce qui dépend de l'écosystème (beaucoup). Démystifier sans dévaloriser la GenAI.",
    relatedModules: [3],
    relatedCases: ['morgan-stanley', 'github-copilot-accenture'],
    relatedGlossary: ['llm', 'foundation-model', 'rag', 'hallucination', 'prompt-engineering'],
    status: 'planned',
  },

  // ========================================================================
  // ÉPISODE 4 — Technologies
  // ========================================================================
  {
    slug: 'ep-04-robotique-amazon-ur-pme',
    number: 4,
    title: 'Robotique et cobots — Amazon, Universal Robots et la PME française',
    subtitle:
      "L'automatisation physique sort des géants : ce que la robotique actuelle change pour les ETI et PME.",
    theme: 'technology',
    duration: '12-15 min',
    audience:
      "Dirigeants d'industries de production, responsables d'opérations, consultants en transformation industrielle.",
    description:
      "La robotique en entreprise n'est plus l'apanage des géants logistiques. Cet épisode contraste deux réalités : l'échelle massive d'Amazon (1+ million de robots déployés, foundation model DeepFleet pour orchestrer la flotte) et le pragmatisme d'Universal Robots, fabricant danois de cobots qui a permis à des milliers de PME industrielles de robotiser sans investissement disproportionné.\n\nLes animateurs explorent les caractéristiques techniques qui rendent la cobotique accessible : sécurité ISO/TS 15066, mise en service en quelques jours plutôt qu'en mois, retour sur investissement typique en 12-24 mois pour des postes pénibles ciblés. Ils s'appuient sur l'exemple fictif (signalé comme tel) de Métallurgie de Précision SAS — la PME industrielle évoquée dans le capstone — pour illustrer comment une démarche cobotique se conduit concrètement.\n\nL'épisode s'achève sur les pièges classiques : la tentation de robotiser pour la performance affichée plutôt que pour la valeur réelle, la sous-estimation du dialogue social, l'oubli de l'écosystème logiciel autour du robot.",
    takeaways: [
      "Amazon DeepFleet : foundation model pour coordonner 1+ million de robots dans le réseau logistique",
      "Universal Robots : démocratisation de la cobotique, 80-150 k€ pour un poste robotisé en PME",
      "ISO/TS 15066 définit les 4 méthodes de collaboration humain-robot — référence sécurité",
      "ROI typique en 12-24 mois sur des postes pénibles bien ciblés",
      "Le succès dépend autant du dialogue social et de la formation que du robot lui-même",
      "Piège fréquent : robotiser pour la performance d'affichage plutôt que pour la valeur réelle",
    ],
    chapters: [
      { time: 0, title: "Introduction — la robotique sort des géants" },
      { time: 90, title: "Amazon Robotics et DeepFleet : l'échelle géante" },
      { time: 300, title: "Universal Robots — la cobotique démocratisée" },
      { time: 480, title: "ISO/TS 15066 et la sécurité humain-robot" },
      { time: 600, title: "PME française fictive — comment cadrer un projet" },
      { time: 780, title: "Pièges et bonnes pratiques" },
    ],
    sourceDocuments: [
      { label: "Module 4 — Robotique en entreprise", path: '/fr/modules/04-robotique/' },
      { label: 'Cas Amazon Robotics + DeepFleet', path: '/fr/cas/amazon-robotics/' },
      { label: 'Cas Universal Robots', path: '/fr/cas/universal-robots/' },
      { label: "Capstone (exemple PME Métallurgie de Précision SAS)", path: '/fr/capstone/' },
    ],
    focusNotes:
      "Articuler une vision tirée par les ETI/PME, qui sont la majorité du tissu économique. Citer les chiffres (ROI, durée mise en service) pour ancrer.",
    relatedModules: [4],
    relatedCases: ['amazon-robotics', 'universal-robots'],
    relatedGlossary: ['robotique', 'automatisation', 'human-in-the-loop'],
    status: 'planned',
  },

  // ========================================================================
  // ÉPISODE 5 — Gouvernance
  // ========================================================================
  {
    slug: 'ep-05-ai-act-eu-qui-est-concerne',
    number: 5,
    title: 'AI Act EU — qui est concerné, comment se préparer',
    subtitle:
      "Le règlement européen sur l'IA s'applique. Cet épisode décrypte qui doit faire quoi, et quand.",
    theme: 'governance',
    duration: '14-17 min',
    audience:
      "Juristes, DPO, responsables conformité, dirigeants qui doivent comprendre concrètement leurs obligations sous l'AI Act.",
    description:
      "L'AI Act EU (Règlement 2024/1689) est entré en application progressivement depuis février 2025. Cet épisode démystifie son architecture pour qui n'est pas juriste : quatre catégories de risque (interdit, haut, limité, minimal), trois rôles principaux (fournisseur, déployeur, importateur/distributeur), et un calendrier d'application qui s'étend jusqu'en août 2027.\n\nLes animateurs s'appuient sur le cas pédagogique « AI Act EU haut risque » du parcours pour montrer concrètement quels usages business courants tombent en haut risque : recrutement et tri de CV, scoring de crédit, justice, services publics essentiels, infrastructures critiques, certains dispositifs médicaux. Pour ces usages, les obligations sont substantielles : système de gestion des risques, gouvernance des données, documentation technique, transparence, supervision humaine, exactitude/robustesse/cybersécurité, évaluation de conformité, registre.\n\nL'épisode explique comment l'AI Act s'applique extraterritorialement (à l'image du RGPD) et donne 5 actions concrètes à engager dans les 6 prochains mois pour ne pas se retrouver en non-conformité.",
    takeaways: [
      "L'AI Act EU s'applique à tout système IA opéré dans l'UE, indépendamment du siège du fournisseur",
      "4 catégories : interdit / haut risque / risque limité / risque minimal — la classification est l'étape critique",
      "De nombreux usages business « ordinaires » tombent en haut risque (RH, crédit, services publics)",
      "Sanctions jusqu'à 35 M€ ou 7 % du CA mondial — comparable au RGPD",
      "Calendrier progressif jusqu'en août 2027 — pas de luxe d'attendre",
      "5 actions à engager maintenant : inventaire, classification, documentation, gouvernance, formation",
    ],
    chapters: [
      { time: 0, title: "Introduction — pourquoi l'AI Act maintenant" },
      { time: 100, title: "Les 4 catégories de risque" },
      { time: 300, title: "Les 3 rôles : fournisseur, déployeur, importateur" },
      { time: 480, title: "Les usages business courants en haut risque" },
      { time: 720, title: "Calendrier d'application et sanctions" },
      { time: 870, title: "5 actions concrètes pour les 6 prochains mois" },
    ],
    sourceDocuments: [
      { label: 'Module 5 — IA dans l\'entreprise et la société', path: '/fr/modules/05-ia-societe/' },
      { label: "Cas AI Act EU — système haut risque", path: '/fr/cas/ai-act-eu-haut-risque/' },
      { label: "FAQ — Suis-je concerné par l'AI Act EU ?", path: '/fr/faq/' },
      { label: 'Glossaire — AI Act, gouvernance IA', path: '/fr/glossaire/' },
    ],
    focusNotes:
      "Ton pédagogique mais précis. Citer les articles clés (10 sur la gouvernance des données, 14 sur la supervision humaine). Éviter le légalisme excessif, viser le décideur opérationnel.",
    relatedModules: [5],
    relatedCases: ['ai-act-eu-haut-risque'],
    relatedGlossary: ['ai-act', 'gouvernance-ia', 'accountability'],
    status: 'planned',
  },

  // ========================================================================
  // ÉPISODE 6 — Gouvernance
  // ========================================================================
  {
    slug: 'ep-06-nist-rmf-gouverner-sans-bureaucratiser',
    number: 6,
    title: 'NIST AI RMF — gouverner sans bureaucratiser',
    subtitle:
      "Comment opérationnaliser concrètement la gouvernance IA en s'appuyant sur le cadre NIST.",
    theme: 'governance',
    duration: '13-16 min',
    audience:
      "Responsables data, chefs de projet IA, conseillers internes en transformation qui doivent rendre opérationnel ce que les juristes décrivent en obligations.",
    description:
      "Le NIST AI Risk Management Framework est devenu le standard méthodologique de fait pour opérationnaliser la gouvernance IA. Cet épisode explore son architecture : 4 fonctions interreliées (Govern, Map, Measure, Manage), avec leurs sous-catégories et un Playbook pratique.\n\nLa thèse centrale : NIST RMF fournit la méthode opérationnelle, AI Act EU fournit les obligations légales. Les deux sont compatibles et complémentaires. Beaucoup d'organisations européennes adoptent les deux : NIST RMF comme socle interne de processus, AI Act comme grille de conformité légale.\n\nLes animateurs montrent comment articuler NIST RMF avec les cadres existants (cybersécurité, conformité, audit interne) pour éviter les silos et la bureaucratie. Ils donnent un exemple concret d'application : comment classer un cas d'usage selon AI Act, puis cartographier les obligations sur les sous-catégories NIST, puis opérationnaliser via le Playbook.",
    takeaways: [
      "NIST AI RMF = méthode opérationnelle volontaire, AI Act = obligations légales contraignantes",
      "4 fonctions interreliées : Govern (transverse), Map (cadrer), Measure (mesurer), Manage (gérer)",
      "Le Playbook NIST fournit des actions concrètes par sous-catégorie — pas de la théorie",
      "Articulation avec les cadres existants (cyber, conformité, audit) plutôt que création d'un silo IA",
      "Exemple : classer en AI Act → cartographier sur NIST → opérationnaliser via Playbook",
      "ISO 42001 (AI Management System) complète NIST RMF pour la certification",
    ],
    chapters: [
      { time: 0, title: "Introduction — pourquoi un cadre opérationnel" },
      { time: 100, title: "L'architecture NIST RMF en 4 fonctions" },
      { time: 280, title: "Govern — la fonction transverse" },
      { time: 440, title: "Map / Measure / Manage — le cycle opérationnel" },
      { time: 640, title: "Articulation avec AI Act EU et autres cadres" },
      { time: 820, title: "Comment éviter le piège bureaucratique" },
    ],
    sourceDocuments: [
      { label: 'Module 5 — IA dans l\'entreprise et la société', path: '/fr/modules/05-ia-societe/' },
      { label: 'Cas NIST AI RMF', path: '/fr/cas/nist-ai-rmf/' },
      { label: 'FAQ — Articulation AI Act / NIST RMF / Comité éthique', path: '/fr/faq/' },
      { label: 'Glossaire — gouvernance IA, AI risk management, accountability', path: '/fr/glossaire/' },
    ],
    focusNotes:
      "Insister sur le caractère pratique (le Playbook). Distinguer la lettre des principes éthiques (souvent inutiles seuls) et l'utilité d'un cadre opérationnel.",
    relatedModules: [5],
    relatedCases: ['nist-ai-rmf', 'ai-act-eu-haut-risque'],
    relatedGlossary: ['gouvernance-ia', 'ai-risk-management', 'accountability'],
    status: 'planned',
  },

  // ========================================================================
  // ÉPISODE 7 — Fondamentaux + Application
  // ========================================================================
  {
    slug: 'ep-07-construire-roadmap-ia-capstone',
    number: 7,
    title: 'Construire votre roadmap IA — la méthode du capstone',
    subtitle:
      "De la vision à 3 ans au plan opérationnel : la démarche structurée pour bâtir une roadmap IA défendable.",
    theme: 'foundations',
    duration: '15-18 min',
    audience:
      "Tout dirigeant ou consultant qui doit produire ou auditer une roadmap IA pour son organisation ou son client.",
    description:
      "C'est l'épisode le plus dense — il synthétise la méthodologie capstone du parcours en 4 étapes structurées. L'enjeu : passer d'une intention floue (« il faut faire de l'IA ») à un document défendable en COMEX, qui structure réellement la décision.\n\nÉtape 1 : poser une vision IA à 3-5 ans, spécifique à votre organisation — pas une déclaration interchangeable. Évaluer la maturité actuelle sur 8 dimensions (données, compétences, gouvernance, projets en production, conformité, conduite du changement, infrastructure, dialogue social), avec un score honnête /40.\n\nÉtape 2 : construire 3 scénarios prospectifs contrastés à 18-24 mois, identifier des actions robustes (utiles dans plusieurs futurs). Étape 3 : prioriser 5-8 use cases candidats sur grille Valeur × Faisabilité × Risque. Étape 4 : décliner en plan 12-24 mois sur 5 dimensions (vision séquencée, gouvernance, compétences, infrastructure, KPI), avec budget estimatif et risques majeurs.\n\nLes animateurs s'appuient sur l'exemple fictif Métallurgie de Précision SAS pour illustrer concrètement chaque étape avec des chiffres réalistes.",
    takeaways: [
      "Une vision IA défendable est spécifique, articule ambition / valeur / lien stratégique",
      "Diagnostic de maturité honnête sur 8 dimensions = base de toute roadmap crédible",
      "Scénarios contrastés évitent de parier sur un seul futur — actions robustes",
      "Use cases priorisés sur Valeur × Faisabilité × Risque, top 3 justifié explicitement",
      "Plan 12-24 mois sur 5 dimensions cohérentes + budget réaliste + 5 risques majeurs",
      "Grille d'évaluation 7 dimensions × 4 niveaux : passage en COMEX nécessite Solide sur 5/7 + Excellent sur 2/7",
    ],
    chapters: [
      { time: 0, title: "Introduction — le capstone, sommet du parcours" },
      { time: 100, title: "Étape 1 — Vision et diagnostic de maturité 8 dim" },
      { time: 320, title: "Étape 2 — Scénarios contrastés et actions robustes" },
      { time: 540, title: "Étape 3 — Use cases prioritaires V × F × R" },
      { time: 740, title: "Étape 4 — Plan 12-24 mois sur 5 dimensions" },
      { time: 940, title: "Grille d'évaluation 7×4 et défendabilité COMEX" },
    ],
    sourceDocuments: [
      { label: 'Module 6 — Futur de l\'IA', path: '/fr/modules/06-futur-ia/' },
      { label: 'Page Capstone (méthodologie + grille + exemple)', path: '/fr/capstone/' },
      { label: 'Canvas Markdown téléchargeable', path: '/downloads/canvas-roadmap-ia-module-6.md' },
    ],
    focusNotes:
      "C'est l'épisode le plus structurant. Garder le rythme malgré la densité. L'exemple Métallurgie de Précision SAS doit servir de fil rouge concret.",
    relatedModules: [6],
    relatedGlossary: ['capstone', 'roadmap-ia'],
    status: 'planned',
  },

  // ========================================================================
  // ÉPISODE 8 — Application
  // ========================================================================
  {
    slug: 'ep-08-intelligence-collective-takeda',
    number: 8,
    title: 'Intelligence collective humain × machine — l\'approche Takeda',
    subtitle:
      "Quand l'IA augmente l'organisation au lieu de remplacer l'humain : la vision MIT CCI appliquée chez Takeda.",
    theme: 'application',
    duration: '12-15 min',
    audience:
      "Dirigeants RH, responsables transformation, consultants en organisation qui veulent dépasser le débat « remplacer vs augmenter ».",
    description:
      "Le débat IA-vs-humain est souvent mal posé. Le MIT Center for Collective Intelligence, sous la direction de Thomas Malone, propose un cadre plus puissant : penser l'IA comme un membre d'une équipe humain × machine plutôt que comme un substitut. Ce cadre est testé concrètement dans le programme Takeda Superminds, partenariat de recherche entre le MIT CCI et Takeda Pharmaceuticals.\n\nCet épisode explore le concept de Superminds (équipes augmentées) appliqué à des problèmes complexes de R&D pharmaceutique : recherche de nouveaux composés, conception d'essais cliniques, navigation réglementaire. Les animateurs montrent comment la combinaison humain × IA produit des solutions qu'aucun seul ne pourrait produire.\n\nL'épisode élargit ensuite à d'autres travaux du MIT IDE (Initiative on the Digital Economy) sur l'avenir du travail, et donne des principes pratiques pour concevoir des équipes hybrides dans son organisation : décomposition de tâches, attribution selon les forces relatives, mécanismes d'apprentissage croisé, rôle du manager dans une équipe humain × IA.",
    takeaways: [
      "L'intelligence collective humain × machine est un cadre plus puissant que « IA vs humain »",
      "Takeda Superminds : programme de recherche MIT CCI sur des problèmes pharmaceutiques complexes",
      "Décomposition de tâches : attribuer chaque tâche selon les forces relatives (humain ou machine)",
      "Le manager d'une équipe humain × IA développe des compétences nouvelles",
      "MIT IDE : recherche systématique sur l'avenir du travail à l'ère de l'IA",
      "Penser organisation et processus AVANT technologie",
    ],
    chapters: [
      { time: 0, title: "Introduction — au-delà du débat IA-vs-humain" },
      { time: 100, title: "Superminds — le concept Thomas Malone" },
      { time: 280, title: "Takeda × MIT CCI — un cas concret en pharma" },
      { time: 480, title: "Décomposition de tâches en équipes hybrides" },
      { time: 660, title: "MIT IDE et l'avenir du travail" },
      { time: 820, title: "Principes pratiques pour votre organisation" },
    ],
    sourceDocuments: [
      { label: "Module 1 — Introduction à l\'IA", path: '/fr/modules/01-introduction-ia/' },
      { label: 'Module 6 — Futur de l\'IA', path: '/fr/modules/06-futur-ia/' },
      { label: 'Cas Takeda × MIT CCI Superminds', path: '/fr/cas/takeda-superminds/' },
      { label: 'Cas MIT IDE', path: '/fr/cas/mit-ide/' },
      { label: 'Glossaire — intelligence collective, human-in-the-loop', path: '/fr/glossaire/' },
    ],
    focusNotes:
      "Ne pas tomber dans la rhétorique 'AI for good'. Citer Thomas Malone et son concept précis de Superminds. Articuler avec l'opérationnel.",
    relatedModules: [1, 6],
    relatedCases: ['takeda-superminds', 'mit-ide'],
    relatedGlossary: ['intelligence-collective', 'human-in-the-loop'],
    status: 'planned',
  },

  // ========================================================================
  // ÉPISODE 9 — Application
  // ========================================================================
  {
    slug: 'ep-09-ia-travail-augmenter-ou-remplacer',
    number: 9,
    title: 'IA et travail — augmenter ou remplacer ? Les travaux de David Autor',
    subtitle:
      "Que disent les chiffres sur l'impact de l'IA sur l'emploi ? La nuance des recherches MIT contre les discours simplificateurs.",
    theme: 'application',
    duration: '13-16 min',
    audience:
      "DRH, responsables formation, consultants RH, dirigeants qui doivent anticiper l'impact IA sur les métiers de leur organisation.",
    description:
      "Les discours sur l'impact de l'IA sur l'emploi oscillent entre apocalypse et euphorie. Les recherches empiriques de David Autor (MIT) et de l'équipe MIT IDE proposent une lecture beaucoup plus nuancée, ancrée dans les données.\n\nCet épisode présente les principaux résultats : l'IA déplace certaines tâches plus que des emplois entiers, l'effet net dépend fortement de la capacité des organisations à recomposer les rôles, certains métiers voient leur valeur augmenter (l'expertise humaine devient plus précieuse, pas moins), d'autres voient leurs barrières à l'entrée s'effondrer. L'épisode s'appuie aussi sur le NBER Working Paper « Generative AI at Work » (Brynjolfsson, Li, Raymond) qui mesure des effets différentiels selon l'expérience des travailleurs.\n\nLes animateurs concluent sur ce que cela implique concrètement pour le DRH ou le dirigeant : moins de pessimisme paralysant, plus d'investissement dans la formation continue, repenser les fiches de poste plutôt que supprimer des postes, anticiper les transformations sur 5 ans plutôt que sur 5 mois.",
    takeaways: [
      "L'IA déplace des tâches plus que des emplois entiers — l'impact est différentiel",
      "David Autor (MIT) : effet net positif possible si les organisations savent recomposer les rôles",
      "« Generative AI at Work » (NBER) : les travailleurs moins expérimentés bénéficient le plus",
      "Certains métiers voient leur valeur augmenter, l'expertise humaine devient plus précieuse",
      "Le DRH doit investir massivement dans la formation continue — pas dans le remplacement",
      "Horizon de transformation : 5 ans, pas 5 mois — éviter la précipitation",
    ],
    chapters: [
      { time: 0, title: "Introduction — au-delà des discours simplificateurs" },
      { time: 100, title: "Les travaux de David Autor sur l'emploi" },
      { time: 320, title: "« Generative AI at Work » : ce que disent les chiffres" },
      { time: 540, title: "Métiers gagnants, métiers à recomposer" },
      { time: 720, title: "Implications RH concrètes" },
      { time: 870, title: "Horizon 5 ans vs précipitation" },
    ],
    sourceDocuments: [
      { label: 'Module 5 — IA dans l\'entreprise et la société', path: '/fr/modules/05-ia-societe/' },
      { label: 'Module 6 — Futur de l\'IA', path: '/fr/modules/06-futur-ia/' },
      { label: 'Cas MIT IDE', path: '/fr/cas/mit-ide/' },
      { label: "Hub de ressources — articles MIT David Autor + NBER GenAI at Work", path: '/fr/ressources/' },
    ],
    focusNotes:
      "Citer les chiffres réels (sans les inventer). Maintenir la nuance académique sans être ennuyeux. Public DRH/dirigeant cible.",
    relatedModules: [5, 6],
    relatedCases: ['mit-ide'],
    relatedGlossary: ['intelligence-collective'],
    status: 'planned',
  },

  // ========================================================================
  // ÉPISODE 10 — Fondamentaux (synthèse)
  // ========================================================================
  {
    slug: 'ep-10-pieges-strategie-ia',
    number: 10,
    title: 'Les pièges de la stratégie IA — ce qu\'il ne faut pas faire',
    subtitle:
      "Bilan synthétique : les 10 erreurs que font le plus souvent les COMEX en matière d'IA, et comment les éviter.",
    theme: 'foundations',
    duration: '14-17 min',
    audience:
      "Tous publics du parcours — épisode bilan / synthèse à écouter en fin de cycle ou comme rappel.",
    description:
      "Cet épisode bilan rassemble en une heure les 10 pièges les plus fréquents en stratégie IA, observés dans les cas du parcours et dans la littérature managériale. C'est un outil d'auto-diagnostic : à l'écoute, identifier ceux qui résonnent avec votre organisation.\n\nQuelques pièges majeurs : confondre PoC et pilote, sous-estimer l'écosystème (RAG, gouvernance, RH) au profit du modèle, croire qu'une charte d'éthique remplace une gouvernance opérationnelle, ignorer l'AI Act EU jusqu'à ce qu'il soit trop tard, choisir la techno avant le cas d'usage, négliger le dialogue social sur les projets robotique, sur-investir en GenAI sur des cas où le ML supervisé serait suffisant et plus fiable, mesurer les outputs (livrables) au lieu des outcomes (valeur réelle), confondre vitesse et précipitation.\n\nL'épisode se termine sur un appel à l'humilité : la stratégie IA est une stratégie comme une autre — elle bénéficie de méthode, de patience, et d'honnêteté sur les incertitudes. C'est l'invitation finale à prendre en main son capstone.",
    takeaways: [
      "Les pires erreurs IA se font au COMEX, pas dans les équipes techniques",
      "Confondre PoC et pilote = erreur n°1 de cadrage",
      "Une charte d'éthique IA n'est pas une gouvernance opérationnelle",
      "Mesurer outcomes (valeur réelle) plutôt que outputs (livrables)",
      "Choisir la techno avant le cas d'usage = inverser la cause et l'effet",
      "L'humilité méthodologique est le meilleur antidote aux modes",
      "Se servir du capstone comme outil d'auto-discipline stratégique",
    ],
    chapters: [
      { time: 0, title: "Introduction — bilan et synthèse" },
      { time: 100, title: "Pièges 1-3 : cadrage et écosystème" },
      { time: 320, title: "Pièges 4-6 : gouvernance et conformité" },
      { time: 540, title: "Pièges 7-9 : technologie et mesure" },
      { time: 720, title: "Piège 10 : confondre vitesse et précipitation" },
      { time: 880, title: "Conclusion — pour aller plus loin" },
    ],
    sourceDocuments: [
      { label: "Tous les modules (synthèse transverse)", path: '/fr/programme/' },
      { label: 'FAQ complète', path: '/fr/faq/' },
      { label: 'Page Capstone', path: '/fr/capstone/' },
      { label: 'Glossaire complet', path: '/fr/glossaire/' },
    ],
    focusNotes:
      "Format synthèse — épisode bilan. Articulation par pièges (10), avec un exemple court tiré des cas réels pour chaque piège. Tonalité directe, sans complaisance, mais pédagogique.",
    relatedModules: [1, 2, 3, 4, 5, 6],
    relatedCases: [
      'morgan-stanley',
      'stripe-radar',
      'github-copilot-accenture',
      'ai-act-eu-haut-risque',
      'nist-ai-rmf',
    ],
    relatedGlossary: [
      'pilote-ia',
      'roadmap-ia',
      'gouvernance-ia',
      'capstone',
      'ai-act',
    ],
    status: 'planned',
  },
];

/**
 * Helpers de filtrage
 */

/** Récupère un épisode par slug */
export function getPodcast(slug: string): PodcastEpisode | undefined {
  return podcasts.find((p) => p.slug === slug);
}

/** Filtre par thème */
export function podcastsByTheme(theme: PodcastTheme): PodcastEpisode[] {
  return podcasts.filter((p) => p.theme === theme);
}

/** Filtre par module */
export function podcastsForModule(moduleNum: number): PodcastEpisode[] {
  return podcasts.filter((p) => p.relatedModules?.includes(moduleNum));
}

/** Filtre par cas */
export function podcastsForCase(caseSlug: string): PodcastEpisode[] {
  return podcasts.filter((p) => p.relatedCases?.includes(caseSlug));
}

/** Tri par numéro */
export function podcastsByNumber(): PodcastEpisode[] {
  return [...podcasts].sort((a, b) => a.number - b.number);
}

/** Comptage par thème */
export function countByTheme(): Record<PodcastTheme, number> {
  const counts: Record<PodcastTheme, number> = {
    foundations: 0,
    technology: 0,
    governance: 0,
    application: 0,
  };
  for (const p of podcasts) counts[p.theme]++;
  return counts;
}

/** Format d'une durée timestamp en mm:ss */
export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

/** Total */
export const TOTAL_PODCASTS = podcasts.length;
