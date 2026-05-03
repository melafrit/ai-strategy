/**
 * Catalogue structuré des ressources externes citées dans le parcours
 * pédagogique AI Strategy.
 *
 * Toutes les ressources sont publiques et vérifiables. Chaque entrée indique
 * son niveau de source (officiel MIT / complément recommandé / source
 * vérifiable externe) selon la hiérarchie documentée sur la page Méthode.
 *
 * Ce catalogue centralise les ressources déjà citées dans les pages modules,
 * études de cas, glossaire — il sert de hub d'accès unique pour les
 * apprenants, formateurs et consultants.
 */

export type ResourceType =
  | 'official-course'
  | 'mit-ocw'
  | 'mit-sloan-article'
  | 'mit-executive-article'
  | 'standard'
  | 'case-source'
  | 'academic-paper'
  | 'external-resource';

export type ResourceLanguage = 'fr' | 'en' | 'multilingual';

export type ResourceLevel =
  | 'official-mit'
  | 'recommended-complement'
  | 'external-verifiable'
  | 'pedagogical-reconstruction';

export interface Resource {
  /** Identifiant URL-friendly */
  slug: string;
  /** Type de ressource */
  type: ResourceType;
  /** Titre tel qu'affiché */
  title: string;
  /** Auteur, organisation, ou éditeur */
  author: string;
  /** Description courte (2-3 phrases) */
  description: string;
  /** URL externe */
  href: string;
  /** Niveau de source selon la hiérarchie de la page Méthode */
  sourceLevel: ResourceLevel;
  /** Numéros de modules associés */
  relatedModules?: number[];
  /** Slugs des cas associés */
  relatedCases?: string[];
  /** Tags libres (sujets, thèmes) */
  tags?: string[];
  /** Langue principale */
  language: ResourceLanguage;
}

export const resourceTypeLabels: Record<ResourceType, string> = {
  'official-course': 'Programme officiel MIT',
  'mit-ocw': 'Cours MIT OpenCourseWare',
  'mit-sloan-article': 'Article MIT Sloan',
  'mit-executive-article': 'Article MIT Executive Education',
  standard: 'Standard ou cadre de gouvernance',
  'case-source': 'Source primaire de cas',
  'academic-paper': 'Publication académique',
  'external-resource': 'Ressource externe vérifiable',
};

export const resourceTypeDescriptions: Record<ResourceType, string> = {
  'official-course':
    "Pages et documents officiels du programme MIT Sloan Executive Education qui inspire le parcours.",
  'mit-ocw':
    "Cours complets en libre accès du MIT OpenCourseWare — supports, vidéos, exercices.",
  'mit-sloan-article':
    "Articles de la rubrique Ideas Made to Matter du MIT Sloan, accessibles aux praticiens.",
  'mit-executive-article':
    "Articles publiés sur le site MIT Sloan Executive Education, orientés dirigeants.",
  standard:
    "Cadres de référence officiels publiés par des organismes de standardisation ou des autorités publiques.",
  'case-source':
    "Sources primaires (corporate ou institutionnelles) qui documentent les études de cas du parcours.",
  'academic-paper':
    "Publications académiques avec comité de lecture, rapports de recherche, working papers.",
  'external-resource':
    "Autres ressources publiques vérifiables — guides d'entreprise, rapports d'organisations internationales, sites de référence.",
};

export const resources: Resource[] = [
  // ========================================================================
  // PROGRAMME OFFICIEL MIT (2)
  // ========================================================================
  {
    slug: 'mit-executive-ai-business-strategy',
    type: 'official-course',
    title: "Artificial Intelligence: Implications for Business Strategy",
    author: 'MIT Sloan Executive Education',
    description:
      "Page officielle du certificat qui inspire ce parcours pédagogique. Présente structure, audience, projet individuel, modules et faculty. Source maître pour comprendre le programme original.",
    href: 'https://executive.mit.edu/course/artificial-intelligence/a056g00000URaa3AAD.html',
    sourceLevel: 'official-mit',
    relatedModules: [1, 2, 3, 4, 5, 6],
    tags: ['certificat', 'programme', 'audience', 'faculty'],
    language: 'en',
  },
  {
    slug: 'mit-executive-ai-sample-schedule',
    type: 'official-course',
    title: "Sample Schedule — AI Implications for Business Strategy",
    author: 'MIT Sloan Executive Education',
    description:
      "PDF officiel du programme détaillant la structure semaine par semaine et la charge de travail estimée. Source la plus précise pour comprendre le déroulé prévu.",
    href: 'https://executive.mit.edu/on/demandware.static/-/Library-Sites-MSharedLibrary/default/dw76723b72/sampleSchedules/GSAI-sampleschedule.pdf',
    sourceLevel: 'official-mit',
    relatedModules: [1, 2, 3, 4, 5, 6],
    tags: ['programme', 'structure', 'planning'],
    language: 'en',
  },

  // ========================================================================
  // MIT OPENCOURSEWARE (4)
  // ========================================================================
  {
    slug: 'mit-ocw-ai-101',
    type: 'mit-ocw',
    title: 'AI 101 — RES.6-013',
    author: 'MIT OpenCourseWare — Fall 2021',
    description:
      "Ressource non technique d'introduction à l'IA, idéale pour publics non spécialistes. Présente concepts de base, histoire, applications. Format court et accessible.",
    href: 'https://ocw.mit.edu/courses/res-6-013-ai-101-fall-2021/',
    sourceLevel: 'recommended-complement',
    relatedModules: [1],
    tags: ['introduction', 'IA', 'non-technique', 'histoire'],
    language: 'en',
  },
  {
    slug: 'mit-ocw-intro-ml',
    type: 'mit-ocw',
    title: 'Introduction to Machine Learning — 6.036',
    author: 'MIT OpenCourseWare — Fall 2020',
    description:
      "Cours d'introduction structuré au Machine Learning. Notes, slides, exercices, projets. Référence libre pour solidifier les bases ML — supervisé, non supervisé, validation, généralisation.",
    href: 'https://ocw.mit.edu/courses/6-036-introduction-to-machine-learning-fall-2020/',
    sourceLevel: 'recommended-complement',
    relatedModules: [2],
    relatedCases: ['stripe-radar', 'mit-barzilay-cancer'],
    tags: ['ML', 'fondamentaux', 'supervisé', 'généralisation'],
    language: 'en',
  },
  {
    slug: 'mit-ocw-foundation-models',
    type: 'mit-ocw',
    title: 'Foundation Models and Generative AI — 6.S087',
    author: 'MIT OpenCourseWare — IAP 2024',
    description:
      "Cours MIT structuré sur les foundation models et l'IA générative. Couvre les architectures transformer, le pré-entraînement à grande échelle, le fine-tuning, les implications business. Le plus à jour sur le sujet côté MIT OCW.",
    href: 'https://ocw.mit.edu/courses/6-s087-foundation-models-and-generative-ai-january-iap-2024/',
    sourceLevel: 'recommended-complement',
    relatedModules: [3],
    relatedCases: ['morgan-stanley'],
    tags: ['GenAI', 'LLM', 'foundation-model', 'transformer'],
    language: 'en',
  },
  {
    slug: 'mit-ocw-intro-robotics',
    type: 'mit-ocw',
    title: 'Introduction to Robotics — 2.12',
    author: 'MIT OpenCourseWare — Fall 2005',
    description:
      "Cours d'introduction MIT à la robotique. Couvre perception, cinématique, contrôle, planification. Bases conceptuelles solides applicables aux systèmes robotiques modernes (cobots, AMR).",
    href: 'https://ocw.mit.edu/courses/2-12-introduction-to-robotics-fall-2005/',
    sourceLevel: 'recommended-complement',
    relatedModules: [4],
    relatedCases: ['amazon-robotics', 'universal-robots'],
    tags: ['robotique', 'perception', 'cinématique', 'contrôle'],
    language: 'en',
  },

  // ========================================================================
  // ARTICLES MIT SLOAN (3)
  // ========================================================================
  {
    slug: 'sloan-business-leaders-ai',
    type: 'mit-sloan-article',
    title: 'What business leaders need to know about artificial intelligence',
    author: 'MIT Sloan Ideas Made to Matter',
    description:
      "Synthèse managériale de base sur l'IA. Excellente porte d'entrée pour cadres ou dirigeants qui veulent un cadrage rapide sans entrer dans la technique. Souvent recommandée en lecture préalable.",
    href: 'https://mitsloan.mit.edu/ideas-made-to-matter/what-business-leaders-need-to-know-about-artificial-intelligence',
    sourceLevel: 'recommended-complement',
    relatedModules: [1],
    tags: ['cadrage-managérial', 'introduction', 'dirigeants'],
    language: 'en',
  },
  {
    slug: 'sloan-genai-use-cases',
    type: 'mit-sloan-article',
    title: 'How to find the right business use cases for generative AI',
    author: 'MIT Sloan Ideas Made to Matter',
    description:
      "Guide méthodologique pour identifier les cas d'usage GenAI à fort potentiel. Décomposition de workflow, considération du coût total, conception de pilotes. Aligné avec la démarche Module 3.",
    href: 'https://mitsloan.mit.edu/ideas-made-to-matter/how-to-find-right-business-use-cases-generative-ai',
    sourceLevel: 'recommended-complement',
    relatedModules: [3],
    relatedCases: ['morgan-stanley', 'github-copilot-accenture'],
    tags: ['GenAI', 'sélection-use-cases', 'pilote'],
    language: 'en',
  },
  {
    slug: 'mit-news-technology-employment',
    type: 'mit-sloan-article',
    title: 'Does technology help or hurt employment?',
    author: 'MIT News (David Autor)',
    description:
      "Article MIT News présentant les travaux de David Autor sur l'impact des technologies sur l'emploi. Nuance le débat « IA = chômage » avec données empiriques sur les phases historiques d'automatisation.",
    href: 'https://news.mit.edu/2024/does-technology-help-or-hurt-employment-0401',
    sourceLevel: 'recommended-complement',
    relatedModules: [5, 6],
    relatedCases: ['mit-ide'],
    tags: ['emploi', 'automatisation', 'David Autor', 'productivité'],
    language: 'en',
  },

  // ========================================================================
  // ARTICLES MIT EXECUTIVE EDUCATION (1)
  // ========================================================================
  {
    slug: 'mit-exec-genai-business',
    type: 'mit-executive-article',
    title: 'The Present and Future of Generative AI in Business',
    author: 'MIT Sloan Executive Education',
    description:
      "Article executive sur les implications business de la GenAI. Couvre fonctions métier impactées, risques, gouvernance. Vue dirigeants sur le sujet, complémentaire des articles Sloan grand public.",
    href: 'https://executive.mit.edu/the-present-and-future-of-generative-ai-in-business-MC4XSPVSXC45F3FNTGEJPXQBO5AU.html',
    sourceLevel: 'recommended-complement',
    relatedModules: [3, 5],
    tags: ['GenAI', 'gouvernance', 'dirigeants'],
    language: 'en',
  },

  // ========================================================================
  // STANDARDS ET GOUVERNANCE (5)
  // ========================================================================
  {
    slug: 'nist-ai-rmf-page',
    type: 'standard',
    title: 'AI Risk Management Framework — page officielle',
    author: 'NIST',
    description:
      "Page NIST de l'AI RMF 1.0. Inclut le Playbook pratique et les profils sectoriels (notamment NIST AI 600-1 sur l'IA générative). Cadre opérationnel volontaire le plus reconnu internationalement.",
    href: 'https://www.nist.gov/itl/ai-risk-management-framework',
    sourceLevel: 'external-verifiable',
    relatedModules: [5, 6],
    relatedCases: ['nist-ai-rmf', 'ai-act-eu-haut-risque'],
    tags: ['gouvernance', 'AI-RMF', 'risk-management'],
    language: 'en',
  },
  {
    slug: 'nist-ai-rmf-pdf',
    type: 'standard',
    title: 'AI RMF 1.0 — Document complet (PDF)',
    author: 'NIST',
    description:
      "Document de référence complet de l'AI Risk Management Framework 1.0. Décrit les 4 fonctions (Govern, Map, Measure, Manage) et leurs sous-catégories opérationnelles. Librement accessible.",
    href: 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf',
    sourceLevel: 'external-verifiable',
    relatedModules: [5],
    relatedCases: ['nist-ai-rmf'],
    tags: ['gouvernance', 'AI-RMF', 'document-référence'],
    language: 'en',
  },
  {
    slug: 'oecd-ai-principles-fr',
    type: 'standard',
    title: "Principes de l'OCDE sur l'intelligence artificielle",
    author: 'OCDE',
    description:
      "Cinq principes pour un déploiement responsable de l'IA, adoptés par 47 pays. Disponible en français, complémentaire au NIST AI RMF. Référence pour les chartes éthiques d'organisations internationales.",
    href: 'https://www.oecd.org/fr/themes/principes-de-l-ia.html',
    sourceLevel: 'external-verifiable',
    relatedModules: [5],
    relatedCases: ['nist-ai-rmf'],
    tags: ['gouvernance', 'principes', 'éthique', 'OCDE'],
    language: 'fr',
  },
  {
    slug: 'ai-act-eu-eurlex-fr',
    type: 'standard',
    title: 'Règlement (UE) 2024/1689 — texte intégral en français',
    author: "Journal officiel de l'Union européenne",
    description:
      "Texte intégral et officiel du Règlement européen sur l'IA (AI Act), en français. Source primaire indispensable pour qui travaille sur la conformité IA en Europe.",
    href: 'https://eur-lex.europa.eu/legal-content/FR/TXT/PDF/?uri=OJ%3AL_202401689',
    sourceLevel: 'external-verifiable',
    relatedModules: [5, 6],
    relatedCases: ['ai-act-eu-haut-risque'],
    tags: ['AI-Act', 'réglementation', 'UE', 'conformité'],
    language: 'fr',
  },
  {
    slug: 'iso-ts-15066',
    type: 'standard',
    title: 'ISO/TS 15066:2016 — Robots collaboratifs',
    author: 'International Organization for Standardization',
    description:
      "Standard international qui spécifie les exigences de sécurité pour les robots collaboratifs (cobots). Définit les quatre méthodes d'opération collaborative (arrêt surveillé, guidage manuel, séparation, limitation de force).",
    href: 'https://www.iso.org/standard/62996.html',
    sourceLevel: 'external-verifiable',
    relatedModules: [4],
    relatedCases: ['universal-robots', 'amazon-robotics'],
    tags: ['robotique', 'cobot', 'sécurité', 'ISO'],
    language: 'multilingual',
  },

  // ========================================================================
  // SOURCES PRIMAIRES DES CAS (10)
  // ========================================================================
  {
    slug: 'cci-takeda-superminds',
    type: 'case-source',
    title: 'Takeda Superminds Program — MIT CCI',
    author: 'MIT Center for Collective Intelligence',
    description:
      "Page MIT CCI documentant le partenariat avec Takeda Pharmaceuticals sur la conception d'équipes hybrides humain-machine pour la R&D pharmaceutique. Source primaire du cas Takeda.",
    href: 'https://cci.mit.edu/takeda-superminds-program/',
    sourceLevel: 'external-verifiable',
    relatedModules: [1],
    relatedCases: ['takeda-superminds'],
    tags: ['intelligence-collective', 'pharma', 'MIT-CCI'],
    language: 'en',
  },
  {
    slug: 'cci-genai-collective-intelligence',
    type: 'case-source',
    title: 'Generative AI and Collective Intelligence',
    author: 'MIT Center for Collective Intelligence',
    description:
      "Ressource MIT CCI articulant explicitement IA générative et intelligence collective. Une des rares sources MIT à faire ce pont — utile pour le Module 6 et le cas MIT IDE.",
    href: 'https://cci.mit.edu/generative-ai-and-collective-intelligence/',
    sourceLevel: 'external-verifiable',
    relatedModules: [1, 6],
    relatedCases: ['takeda-superminds', 'mit-ide'],
    tags: ['intelligence-collective', 'GenAI', 'humain-machine'],
    language: 'en',
  },
  {
    slug: 'morgan-stanley-tech-ai',
    type: 'case-source',
    title: 'Technology @ Morgan Stanley — Wealth Management AI',
    author: 'Morgan Stanley',
    description:
      "Page de communication officielle Morgan Stanley sur ses initiatives technologiques en gestion de fortune, incluant les assistants AI @ Morgan Stanley Assistant et Debrief. Source primaire du cas.",
    href: 'https://www.morganstanley.com/about-us/technology/ai',
    sourceLevel: 'external-verifiable',
    relatedModules: [1, 3],
    relatedCases: ['morgan-stanley'],
    tags: ['GenAI', 'finance', 'RAG', 'LLM'],
    language: 'en',
  },
  {
    slug: 'stripe-radar-ml-fraud',
    type: 'case-source',
    title: 'Primer on Machine Learning for Fraud Protection',
    author: 'Stripe',
    description:
      "Guide Stripe sur l'usage du Machine Learning pour la détection de fraude (Stripe Radar). Disponible en français. Cas pédagogique pratique très accessible. Source primaire du cas Stripe Radar.",
    href: 'https://stripe.com/fr-ca/guides/primer-on-machine-learning-for-fraud-protection',
    sourceLevel: 'external-verifiable',
    relatedModules: [2],
    relatedCases: ['stripe-radar'],
    tags: ['ML-supervisé', 'fraude', 'finance', 'production'],
    language: 'fr',
  },
  {
    slug: 'mit-news-mirai-cancer',
    type: 'case-source',
    title: 'A new model for breast cancer prediction',
    author: 'MIT News',
    description:
      "Article MIT News présentant le modèle Mirai (Regina Barzilay, MIT CSAIL) pour la prédiction du risque de cancer du sein à 5 ans à partir d'une mammographie. Donne le contexte, la méthodologie et les performances documentées.",
    href: 'https://news.mit.edu/2021/robust-artificial-intelligence-tools-predict-future-cancer-0128',
    sourceLevel: 'external-verifiable',
    relatedModules: [2, 5],
    relatedCases: ['mit-barzilay-cancer'],
    tags: ['ML-supervisé', 'santé', 'imagerie', 'Barzilay'],
    language: 'en',
  },
  {
    slug: 'csail-regina-barzilay',
    type: 'case-source',
    title: 'Regina Barzilay — page CSAIL officielle',
    author: 'MIT CSAIL',
    description:
      "Page institutionnelle de Regina Barzilay au MIT CSAIL. Présente ses travaux sur l'IA en santé, en particulier le dépistage précoce du cancer du sein. Référence pour le cas Module 2.",
    href: 'https://www.csail.mit.edu/person/regina-barzilay',
    sourceLevel: 'external-verifiable',
    relatedModules: [2],
    relatedCases: ['mit-barzilay-cancer'],
    tags: ['santé', 'CSAIL', 'recherche'],
    language: 'en',
  },
  {
    slug: 'github-copilot-accenture-research',
    type: 'case-source',
    title: "Quantifying GitHub Copilot's impact in the enterprise with Accenture",
    author: 'GitHub Engineering Blog',
    description:
      "Étude conjointe GitHub × Accenture mesurant l'impact réel de Copilot dans une grande entreprise IT. Méthodologie publique : groupe traitement vs contrôle, productivité, qualité, satisfaction. Standard transposable à tout pilote GenAI.",
    href: 'https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-in-the-enterprise-with-accenture/',
    sourceLevel: 'external-verifiable',
    relatedModules: [3],
    relatedCases: ['github-copilot-accenture'],
    tags: ['GenAI', 'productivité', 'pilote', 'mesure-impact'],
    language: 'en',
  },
  {
    slug: 'amazon-robotics-million',
    type: 'case-source',
    title: 'Amazon now has 1 million robots and a new AI foundation model',
    author: 'About Amazon — Operations',
    description:
      "Communication officielle Amazon annonçant le seuil du million de robots déployés et le lancement de DeepFleet — foundation model d'IA pour l'orchestration de la flotte. Source primaire du cas Amazon Robotics.",
    href: 'https://www.aboutamazon.com/news/operations/amazon-million-robots-ai-foundation-model',
    sourceLevel: 'external-verifiable',
    relatedModules: [4, 6],
    relatedCases: ['amazon-robotics'],
    tags: ['robotique', 'AMR', 'foundation-model', 'logistique'],
    language: 'en',
  },
  {
    slug: 'universal-robots-corporate',
    type: 'case-source',
    title: 'Universal Robots — site corporate',
    author: 'Universal Robots A/S',
    description:
      "Site officiel d'Universal Robots, fabricant danois de cobots fondé en 2005 et propriété de Teradyne depuis 2015. Présente la gamme produit (UR3e à UR30), les certifications, l'écosystème UR+.",
    href: 'https://www.universal-robots.com/',
    sourceLevel: 'external-verifiable',
    relatedModules: [4],
    relatedCases: ['universal-robots'],
    tags: ['robotique', 'cobot', 'PME', 'industrie'],
    language: 'multilingual',
  },
  {
    slug: 'mit-ide-site',
    type: 'case-source',
    title: 'MIT Initiative on the Digital Economy — site officiel',
    author: 'MIT Sloan',
    description:
      "Site officiel du MIT IDE — initiative de recherche du MIT Sloan sur l'avenir du travail, de l'économie numérique, et de l'impact des technologies. Présente axes de recherche, publications, événements.",
    href: 'https://ide.mit.edu/',
    sourceLevel: 'external-verifiable',
    relatedModules: [5, 6],
    relatedCases: ['mit-ide'],
    tags: ['anticipation', 'futur-du-travail', 'économie-numérique'],
    language: 'en',
  },

  // ========================================================================
  // PUBLICATIONS ACADÉMIQUES (2)
  // ========================================================================
  {
    slug: 'nber-genai-at-work',
    type: 'academic-paper',
    title: 'Generative AI at Work',
    author: 'Brynjolfsson, Li, Raymond — NBER Working Paper w31161',
    description:
      "Étude empirique majeure sur l'impact de la GenAI sur la productivité et l'apprentissage au travail. Référence académique citée dans la plupart des discussions sérieuses sur GenAI et productivité.",
    href: 'https://www.nber.org/papers/w31161',
    sourceLevel: 'external-verifiable',
    relatedModules: [3, 5, 6],
    relatedCases: ['github-copilot-accenture', 'mit-ide'],
    tags: ['GenAI', 'productivité', 'travail', 'recherche-empirique'],
    language: 'en',
  },
  {
    slug: 'cci-publications',
    type: 'academic-paper',
    title: 'MIT Center for Collective Intelligence — Publications',
    author: 'MIT CCI',
    description:
      "Index des publications scientifiques du MIT CCI. Inclut les travaux sur Superminds (Thomas Malone), l'intelligence collective humain × machine, et les applications en santé, finance, gouvernance.",
    href: 'https://cci.mit.edu/publications/',
    sourceLevel: 'external-verifiable',
    relatedModules: [1, 6],
    relatedCases: ['takeda-superminds', 'mit-ide'],
    tags: ['intelligence-collective', 'recherche', 'Malone'],
    language: 'en',
  },

  // ========================================================================
  // RESSOURCES EXTERNES VÉRIFIABLES (10)
  // ========================================================================
  {
    slug: 'wef-future-of-jobs',
    type: 'external-resource',
    title: 'Future of Jobs Report',
    author: 'World Economic Forum',
    description:
      "Rapport biennal du WEF sur l'évolution attendue des emplois et compétences. Référence pour le cadrage RH d'une roadmap IA. Méthodologie : enquêtes auprès d'employeurs, vue prospective.",
    href: 'https://www.weforum.org/publications/series/future-of-jobs/',
    sourceLevel: 'external-verifiable',
    relatedModules: [5, 6],
    relatedCases: ['mit-ide'],
    tags: ['compétences', 'emploi', 'WEF', 'prospective'],
    language: 'en',
  },
  {
    slug: 'ec-ai-act-page',
    type: 'external-resource',
    title: "AI Act — page d'information officielle",
    author: 'Commission européenne — DG CNECT',
    description:
      "Page de la Commission européenne dédiée à l'AI Act. Présente le calendrier d'application, les obligations par catégorie, les rôles (fournisseurs, déployeurs, importateurs, distributeurs).",
    href: 'https://digital-strategy.ec.europa.eu/fr/policies/regulatory-framework-ai',
    sourceLevel: 'external-verifiable',
    relatedModules: [5],
    relatedCases: ['ai-act-eu-haut-risque'],
    tags: ['AI-Act', 'UE', 'conformité', 'calendrier'],
    language: 'fr',
  },
  {
    slug: 'amazon-robotics-corporate',
    type: 'external-resource',
    title: 'Amazon Robotics — page corporate',
    author: 'About Amazon',
    description:
      "Site corporate Amazon présentant les différentes générations de robots déployés dans le réseau logistique (Hercules, Pegasus, Sequoia, Sparrow, etc.). Source primaire complémentaire au cas Amazon.",
    href: 'https://www.aboutamazon.com/what-we-do/amazon-robotics',
    sourceLevel: 'external-verifiable',
    relatedModules: [4],
    relatedCases: ['amazon-robotics'],
    tags: ['robotique', 'logistique', 'AMR'],
    language: 'en',
  },
  {
    slug: 'github-copilot-product',
    type: 'external-resource',
    title: 'GitHub Copilot — page produit officielle',
    author: 'GitHub',
    description:
      "Page produit officielle de GitHub Copilot. Présente fonctionnalités, modèles disponibles, intégrations IDE, modèles tarifaires. Référence pour comprendre l'offre actuelle.",
    href: 'https://github.com/features/copilot',
    sourceLevel: 'external-verifiable',
    relatedModules: [3],
    relatedCases: ['github-copilot-accenture'],
    tags: ['GenAI', 'code', 'productivité-développeur'],
    language: 'multilingual',
  },
];

/**
 * Helpers de filtrage et d'accès au catalogue
 */

/** Récupère une ressource par slug */
export function getResource(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

/** Filtre les ressources par type */
export function resourcesByType(type: ResourceType): Resource[] {
  return resources.filter((r) => r.type === type);
}

/** Filtre les ressources liées à un module */
export function resourcesForModule(moduleNum: number): Resource[] {
  return resources.filter((r) => r.relatedModules?.includes(moduleNum));
}

/** Filtre les ressources liées à un cas */
export function resourcesForCase(caseSlug: string): Resource[] {
  return resources.filter((r) => r.relatedCases?.includes(caseSlug));
}

/** Filtre les ressources par niveau de source */
export function resourcesByLevel(level: ResourceLevel): Resource[] {
  return resources.filter((r) => r.sourceLevel === level);
}

/** Filtre les ressources françaises ou multilingues (incluant français) */
export function resourcesInFrench(): Resource[] {
  return resources.filter(
    (r) => r.language === 'fr' || r.language === 'multilingual'
  );
}

/** Trie les ressources par titre */
export function resourcesAlphabetical(): Resource[] {
  return [...resources].sort((a, b) =>
    a.title.localeCompare(b.title, 'fr', { sensitivity: 'base' })
  );
}

/** Comptage par type */
export function countByType(): Record<ResourceType, number> {
  const counts: Record<ResourceType, number> = {
    'official-course': 0,
    'mit-ocw': 0,
    'mit-sloan-article': 0,
    'mit-executive-article': 0,
    standard: 0,
    'case-source': 0,
    'academic-paper': 0,
    'external-resource': 0,
  };
  for (const r of resources) counts[r.type]++;
  return counts;
}

/** Total */
export const TOTAL_RESOURCES = resources.length;
