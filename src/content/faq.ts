/**
 * FAQ pédagogique du parcours AI Strategy.
 *
 * 20 questions structurées en 6 thèmes, avec réponses précises et
 * références croisées vers les modules, études de cas et termes du
 * glossaire. La page FAQ rend ces données avec un balisage Schema.org
 * FAQPage pour optimiser la recherche.
 */

export type FaqTheme =
  | 'program-and-audience'
  | 'method-and-sources'
  | 'use-cases-and-companies'
  | 'governance-and-compliance'
  | 'capstone-and-roadmap'
  | 'practical-course';

export interface FaqEntry {
  /** Identifiant URL-friendly */
  slug: string;
  /** Thème de regroupement */
  theme: FaqTheme;
  /** Question telle qu'affichée */
  question: string;
  /** Réponse en texte brut, supporte les paragraphes via \n\n */
  answer: string;
  /** Modules associés */
  relatedModules?: number[];
  /** Cas associés (slugs) */
  relatedCases?: string[];
  /** Termes du glossaire associés (slugs) */
  relatedGlossary?: string[];
  /** Pages internes associées (path absolu sans préfixe locale) */
  relatedPages?: string[];
}

export const faqThemeLabels: Record<FaqTheme, string> = {
  'program-and-audience': 'Programme et public',
  'method-and-sources': 'Méthode et sources',
  'use-cases-and-companies': "Cas d'usage et organisations",
  'governance-and-compliance': 'Gouvernance, AI Act EU et conformité',
  'capstone-and-roadmap': 'Capstone et roadmap IA',
  'practical-course': 'Pratique du parcours',
};

export const faqThemeDescriptions: Record<FaqTheme, string> = {
  'program-and-audience':
    "Pour qui est ce site, comment se positionne-t-il vis-à-vis de MIT, qu'est-ce que cela apporte ?",
  'method-and-sources':
    "Comment les sources sont hiérarchisées, niveau d'indépendance vis-à-vis du programme MIT, principes de rigueur.",
  'use-cases-and-companies':
    "Comment identifier un premier cas d'usage, choisir entre GenAI et ML, adapter la démarche à la taille d'organisation.",
  'governance-and-compliance':
    "AI Act EU, NIST AI RMF, RGPD, biais algorithmique, comité d'éthique, articulation avec les obligations existantes.",
  'capstone-and-roadmap':
    "Comment réaliser le projet final intégrateur, durée réaliste, prérequis, taille d'organisation cible.",
  'practical-course':
    "Ordre recommandé des modules, traductions, mises à jour, réutilisation pédagogique du contenu.",
};

export const faq: FaqEntry[] = [
  // ========================================================================
  // PROGRAMME ET PUBLIC (4)
  // ========================================================================
  {
    slug: 'site-officiel-mit',
    theme: 'program-and-audience',
    question: "Ce site est-il un site officiel MIT ?",
    answer:
      "Non. Ce site est une ressource pédagogique <strong>indépendante</strong>. Il s'inspire des thématiques publiques du certificat MIT Sloan Executive Education « Artificial Intelligence: Implications for Business Strategy » mais n'est ni affilié, ni validé, ni certifié par MIT.\n\nNous citons systématiquement les sources publiques officielles MIT (page du programme, sample schedule, MIT OCW, MIT Sloan Ideas Made to Matter, MIT News, MIT Center for Collective Intelligence) avec leur niveau de source clairement indiqué. Voir la page Méthode pour la hiérarchie utilisée.\n\nPour suivre le programme officiel et obtenir le certificat MIT correspondant, il faut s'inscrire directement sur le site MIT Sloan Executive Education. Notre site offre une alternative pédagogique gratuite et francophone, conçue par un enseignant-formateur indépendant.",
    relatedPages: ['/methode/', '/a-propos/'],
  },
  {
    slug: 'pour-qui',
    theme: 'program-and-audience',
    question: "Pour qui est ce site ?",
    answer:
      "Le contenu est conçu pour quatre profils complémentaires :\n\n<strong>Dirigeants et décideurs</strong> qui doivent arbitrer sur la stratégie IA de leur organisation sans devenir eux-mêmes data scientists. Le positionnement business-first, non technique, leur convient directement.\n\n<strong>Consultants et chefs de projet</strong> qui interviennent sur des transformations IA et qui ont besoin de cadres méthodologiques solides, de cas d'usage documentés et de références publiques vérifiables.\n\n<strong>Enseignants-formateurs</strong> en école de management, université ou académie d'entreprise. Le contenu est sous licence Creative Commons, structuré pour la réutilisation pédagogique, avec quiz, canvases et grille d'évaluation.\n\n<strong>Responsables data, IA, transformation</strong> qui cherchent un référentiel structuré pour cadrer leur propre démarche interne, articuler les exigences AI Act EU et NIST AI RMF, et bâtir une roadmap défendable en COMEX.",
    relatedPages: ['/programme/', '/a-propos/'],
  },
  {
    slug: 'certifiant',
    theme: 'program-and-audience',
    question: "Est-ce que ce parcours est certifiant ?",
    answer:
      "Non. Ce site est une ressource d'autoformation et un support de formation, pas un dispositif certifiant. Il ne délivre ni diplôme, ni attestation officielle, ni crédit ECTS.\n\nCela dit, le contenu peut être <strong>intégré à des dispositifs certifiants externes</strong> : un enseignant peut l'utiliser dans un cours universitaire, un formateur peut l'inclure dans un parcours d'académie d'entreprise, un consultant peut s'en servir comme socle d'un atelier client.\n\nSi vous cherchez la certification MIT, le programme officiel MIT Sloan Executive Education délivre un certificat à l'issue du cursus complet. Pour un parcours certifiant français, plusieurs écoles proposent des MS ou MBA dédiés à l'IA et à la transformation digitale.",
    relatedPages: ['/programme/'],
  },
  {
    slug: 'temps-parcours',
    theme: 'program-and-audience',
    question: "Combien de temps faut-il pour parcourir l'ensemble du site ?",
    answer:
      "Plusieurs niveaux d'engagement sont possibles :\n\n<strong>Survol stratégique (3-5 heures)</strong> — lecture des résumés exécutifs des 6 modules, parcours rapide des 10 cas, lecture du capstone. Suffit pour avoir une vue d'ensemble structurée et identifier où aller plus loin.\n\n<strong>Parcours pédagogique complet (~30-40 heures)</strong> — lecture intégrale des 6 modules, étude des 10 cas en profondeur, réalisation des 6 quiz formatifs, exploration du glossaire. Charge équivalente à celle annoncée par MIT pour son programme officiel (6-8h × 6 semaines).\n\n<strong>Capstone réel (90 minutes à 3 semaines selon ambition)</strong> — la version courte (canvas seul) prend 90 à 120 minutes ; une version exploitable en COMEX avec annexes prend 1 à 2 jours ; une version complète en mode atelier équipe avec validation interne prend 2 à 3 semaines.\n\nL'investissement est libre, sans contrainte de calendrier. Le format auto-rythmé permet d'adapter au rythme de chacun.",
    relatedPages: ['/programme/', '/capstone/'],
  },

  // ========================================================================
  // MÉTHODE ET SOURCES (3)
  // ========================================================================
  {
    slug: 'hierarchie-sources',
    theme: 'method-and-sources',
    question: "Comment les sources citées sont-elles hiérarchisées ?",
    answer:
      "Le site utilise une hiérarchie en cinq niveaux, signalée explicitement avec un composant <code>SourceTag</code> dans le contenu :\n\n<strong>Officiel MIT</strong> — page officielle du programme MIT Sloan Executive Education, sample schedule, autres documents MIT directement attribuables au programme.\n\n<strong>Complément recommandé</strong> — ressources MIT connexes (MIT OCW, MIT Sloan Ideas Made to Matter, MIT News, MIT Center for Collective Intelligence) qui éclairent les thèmes du parcours sans en faire partie officiellement.\n\n<strong>Source externe vérifiable</strong> — standards (NIST AI RMF, OCDE, ISO), réglementations (AI Act EU sur EUR-Lex), cas d'entreprise documentés par sources primaires (pages corporate Morgan Stanley, Stripe, Amazon, etc.), publications académiques (NBER, revues à comité de lecture).\n\n<strong>Reconstruction pédagogique</strong> — quand le site articule des concepts à partir de plusieurs sources pour produire un cadre cohérent. Signalée explicitement, à ne pas confondre avec un fait directement attesté.\n\n<strong>À vérifier dans le syllabus officiel complet</strong> — quelques éléments que les sources publiques actuelles ne permettent pas de confirmer dans le détail.\n\nVoir la page Méthode pour le détail.",
    relatedPages: ['/methode/'],
  },
  {
    slug: 'reconstruction-pedagogique',
    theme: 'method-and-sources',
    question: "Que signifie « reconstruction pédagogique » ?",
    answer:
      "Une reconstruction pédagogique est une articulation cohérente que nous produisons à partir de plusieurs sources publiques, sans être directement attestée par une source unique. Par exemple, l'exemple fictif de roadmap PME industrielle dans la page capstone est une reconstruction pédagogique : aucune entreprise réelle n'a publié cette roadmap, mais sa structure s'inspire de ce qui est documenté dans les cas réels et dans la littérature managériale.\n\nLe choix de signaler explicitement les reconstructions est un acte de transparence méthodologique : le lecteur sait ce qui relève d'une vérité documentée par une source primaire, et ce qui relève d'une mise en cohérence pédagogique.\n\nQuand vous voyez le tag « reconstruction pédagogique » dans le contenu, cela signifie : « cette articulation est défendable sur la base des sources publiques mais n'est pas une citation directe ; ne reproduisez pas tel quel comme un fait sans vérification ».",
    relatedPages: ['/methode/'],
  },
  {
    slug: 'fiabilite-sources',
    theme: 'method-and-sources',
    question: "Comment garantissez-vous la fiabilité des sources ?",
    answer:
      "Trois principes opérationnels :\n\n<strong>Sources publiques uniquement</strong> — chaque ressource citée est accessible librement par n'importe qui, à l'URL indiquée. Pas de citations privées, pas de \"selon des sources internes\", pas d'affirmations non vérifiables.\n\n<strong>Niveau de source signalé</strong> — la hiérarchie des sources (officiel MIT / complément recommandé / source externe vérifiable / reconstruction pédagogique) permet au lecteur de calibrer la confiance qu'il accorde à chaque affirmation.\n\n<strong>Aucune information factuelle inventée</strong> — pas de chiffres approximatifs présentés comme exacts, pas de citations attribuées sans source, pas d'études inventées. Quand un chiffre n'est pas publiquement documenté avec précision, on indique l'ordre de grandeur et la source ou on s'abstient.\n\nCela dit, le site reste une production indépendante : nous restons faillibles. Si vous identifiez une erreur factuelle, signalez-la via le repo GitHub. Les corrections sont publiques et tracées dans le CHANGELOG.",
    relatedPages: ['/methode/', '/a-propos/'],
  },

  // ========================================================================
  // CAS D'USAGE ET ORGANISATIONS (3)
  // ========================================================================
  {
    slug: 'choisir-premier-use-case',
    theme: 'use-cases-and-companies',
    question: "Comment choisir un premier cas d'usage IA pour mon organisation ?",
    answer:
      "Trois critères opérationnels et deux pièges à éviter :\n\n<strong>Critère 1 — Valeur business identifiable</strong>. Quel processus métier précis ? Quelle valeur attendue (gain de productivité, réduction de risque, amélioration d'expérience) ? Quel volume d'usage potentiel ? Évitez les projets « parce que c'est l'IA » sans valeur claire.\n\n<strong>Critère 2 — Faisabilité honnêtement évaluée</strong>. Disposez-vous des données nécessaires en quantité et qualité ? Avez-vous accès aux compétences requises ? L'infrastructure technique est-elle en place ? Sous-estimer ces facteurs est l'erreur la plus commune.\n\n<strong>Critère 3 — Risque maîtrisable</strong>. Le cas d'usage tombe-t-il en haut risque AI Act EU ? Y a-t-il un risque de biais discriminatoire (RH, crédit, justice) ? Les conséquences d'une erreur sont-elles supportables ?\n\n<strong>Piège 1</strong> — confondre PoC technique et pilote business. Un PoC démontre la faisabilité ; un pilote mesure la valeur réelle. Le cas GitHub × Accenture (Module 3) illustre ce qu'est un pilote rigoureux.\n\n<strong>Piège 2</strong> — sous-estimer l'écosystème. Le cas Morgan Stanley (Module 3) montre que la valeur d'un déploiement GenAI vient de l'orchestration (RAG sur corpus interne, garde-fous, gouvernance), pas du modèle. Investissement typique : 20-30% LLM, 70-80% écosystème.",
    relatedModules: [3],
    relatedCases: ['morgan-stanley', 'github-copilot-accenture', 'stripe-radar'],
    relatedGlossary: ['pilote-ia', 'roadmap-ia'],
  },
  {
    slug: 'genai-vs-ml-supervise',
    theme: 'use-cases-and-companies',
    question: "GenAI ou ML supervisé classique : quand choisir l'un ou l'autre ?",
    answer:
      "Les deux familles répondent à des problèmes différents et ne sont pas substituables. Quelques heuristiques :\n\n<strong>ML supervisé classique</strong> est adapté quand vous voulez prédire ou classifier (transaction frauduleuse ou non, candidat retenu ou non, panne machine probable ou non) à partir de données structurées étiquetées historiques. Performance prévisible, validation rigoureuse possible, interprétabilité plus accessible. Cas exemplaire : Stripe Radar (Module 2) et Mirai pour le dépistage cancer (Module 2).\n\n<strong>GenAI (LLM, foundation models)</strong> est adapté pour des tâches de manipulation de langage, code, contenu non structuré : recherche dans une documentation, synthèse de notes, génération de premier jet, traduction. Cas exemplaire : Morgan Stanley AskResearchGPT et Debrief (Module 3).\n\n<strong>Architecture hybride</strong> est souvent la bonne réponse : un système de scoring de fraude peut combiner ML supervisé (la décision principale) + GenAI (génération du message d'explication client). Le ML donne la décision, le LLM rédige.\n\n<strong>Coût total</strong> : un pilote ML supervisé bien cadré demande 3-6 mois et un investissement modéré ; un pilote GenAI peut être plus rapide à démarrer mais coûte plus cher en infrastructure et en gouvernance des hallucinations.",
    relatedModules: [2, 3],
    relatedCases: ['stripe-radar', 'mit-barzilay-cancer', 'morgan-stanley'],
    relatedGlossary: ['machine-learning', 'modele-generatif', 'llm', 'rag'],
  },
  {
    slug: 'pme-trop-petite',
    theme: 'use-cases-and-companies',
    question: "Mon organisation est-elle trop petite pour faire de l'IA ?",
    answer:
      "Non. La taille n'est pas le critère pertinent ; ce qui compte est la combinaison <em>volume de processus répétitif</em> + <em>disponibilité de données</em> + <em>compétences accessibles (en interne ou via partenaires)</em>.\n\n<strong>Pour les PME industrielles</strong>, les cobots Universal Robots illustrent une voie d'entrée concrète (Module 4) : automatisation de postes pénibles (palettisation, manutention répétitive), investissement de l'ordre de 80-150 k€ tout compris, retour sur investissement typique en 12-24 mois selon la criticité du poste.\n\n<strong>Pour les PME tertiaires</strong>, les outils GenAI accessibles en SaaS (assistants juridiques, marketing, support client basé sur RAG) peuvent être déployés avec quelques milliers d'euros par mois et une conduite du changement légère. Le cas Klarna (cité dans le programme officiel MIT) illustre cette voie.\n\n<strong>Le piège des petites organisations</strong> est souvent inverse : croire qu'on est <em>trop petit</em> pour s'en préoccuper alors qu'on a tout à gagner. La capstone propose un exemple fictif de PME (Métallurgie de Précision SAS) avec une roadmap 18 mois budgétée à 280-350 k€ — réaliste pour une PME française moyenne.",
    relatedModules: [4],
    relatedCases: ['universal-robots'],
    relatedPages: ['/capstone/'],
  },

  // ========================================================================
  // GOUVERNANCE, AI ACT EU ET CONFORMITÉ (4)
  // ========================================================================
  {
    slug: 'concerne-ai-act',
    theme: 'governance-and-compliance',
    question: "Suis-je concerné par l'AI Act EU ?",
    answer:
      "Probablement oui, si vous opérez dans l'UE ou si vos systèmes IA s'adressent à des personnes ou organisations dans l'UE — y compris si votre siège est hors UE. L'AI Act EU a un effet extraterritorial similaire au RGPD.\n\nLa question structurante n'est pas <em>« suis-je concerné ? »</em> mais <em>« quelle catégorie ? »</em>. Quatre catégories :\n\n<strong>Pratiques interdites</strong> (notation sociale, manipulation cognitive, biométrie de masse en temps réel) — interdites depuis février 2025.\n\n<strong>Haut risque</strong> (recrutement et tri de CV, scoring de crédit, justice, services publics essentiels, infrastructures critiques, certains dispositifs médicaux) — obligations substantielles : système de gestion des risques, gouvernance des données, documentation technique, transparence, supervision humaine, exactitude/robustesse/cybersécurité, évaluation de conformité, registre. Application progressive jusqu'en août 2027.\n\n<strong>Risque limité</strong> (chatbots, deepfakes) — obligations principalement de transparence.\n\n<strong>Risque minimal</strong> — la majorité des usages, pas d'obligations spécifiques.\n\n<strong>De nombreux usages business « ordinaires » tombent en haut risque</strong> — ne pas les identifier est l'erreur la plus coûteuse possible. La classification de chaque cas d'usage IA est l'étape critique à conduire dès maintenant.",
    relatedModules: [5],
    relatedCases: ['ai-act-eu-haut-risque', 'nist-ai-rmf'],
    relatedGlossary: ['ai-act', 'gouvernance-ia'],
  },
  {
    slug: 'articulation-ai-act-nist',
    theme: 'governance-and-compliance',
    question: "Comment articuler concrètement AI Act EU et NIST AI RMF ?",
    answer:
      "Les deux cadres sont compatibles et complémentaires. La règle simple : <strong>l'AI Act EU fournit les obligations légales, le NIST AI RMF fournit la méthode opérationnelle</strong> pour les mettre en œuvre.\n\n<strong>L'AI Act</strong> dit ce qui doit être fait (système de gestion des risques, gouvernance des données, documentation technique, transparence, supervision humaine, etc. pour les systèmes haut risque). C'est un cadre légal contraignant avec sanctions jusqu'à 35 M€ ou 7 % du CA mondial.\n\n<strong>Le NIST AI RMF</strong> dit comment le faire en pratique. Sa structure en 4 fonctions interreliées (Govern / Map / Measure / Manage) avec sous-catégories opérationnelles documentées dans le Playbook fournit le système de processus, rôles et capacités d'action qui rendent les obligations concrètes.\n\n<strong>Articulation pratique en 3 étapes</strong> : (1) classifier chaque cas d'usage selon AI Act EU, (2) pour les cas haut risque, cartographier les obligations légales sur les sous-catégories NIST RMF correspondantes, (3) opérationnaliser les processus selon la méthode NIST avec traçabilité documentaire.\n\nBeaucoup d'organisations européennes adoptent les deux : NIST RMF comme socle méthodologique interne, AI Act EU comme grille de conformité légale. Les deux peuvent être complétés par ISO 42001 (AI Management System) pour la certification.",
    relatedModules: [5],
    relatedCases: ['nist-ai-rmf', 'ai-act-eu-haut-risque'],
    relatedGlossary: ['ai-act', 'ai-risk-management', 'gouvernance-ia'],
  },
  {
    slug: 'comite-ethique-ia',
    theme: 'governance-and-compliance',
    question: "Faut-il créer un comité d'éthique IA dans mon organisation ?",
    answer:
      "Oui pour la plupart des organisations qui déploient sérieusement de l'IA — mais avec un cadrage important : <strong>un comité d'éthique IA n'est pas une instance morale, c'est une instance de gouvernance opérationnelle</strong>.\n\nMauvaise version : un comité qui publie des chartes de principes éthiques et se réunit deux fois par an pour valider qu'on a bien respecté les valeurs de l'entreprise. Cela ne sert à rien d'opérationnel.\n\nBonne version : un comité qui (a) classifie les cas d'usage selon AI Act EU dès le cadrage, (b) revoit la documentation technique des systèmes haut risque avant déploiement, (c) suit les KPI de gouvernance (audits de biais, incidents, conformité), (d) peut suspendre un système qui dérive, (e) est consulté avant tout investissement IA significatif.\n\n<strong>Composition typique</strong> : DG ou direction générale (autorité), DSI ou direction technique, DRH (impact emploi), DAF ou direction conformité, juriste/DPO, représentant métier, un référent par cas d'usage en cours. Pour les organisations matures, ajouter un membre externe (chercheur, consultant indépendant) renforce la crédibilité.\n\n<strong>Articulation avec l'existant</strong> : intégrez le comité IA aux processus de gestion des risques existants (cybersécurité, conformité, opérationnel) plutôt que de créer un silo. Le NIST AI RMF est conçu pour s'articuler avec les cadres existants.",
    relatedModules: [5],
    relatedCases: ['nist-ai-rmf'],
    relatedGlossary: ['gouvernance-ia', 'accountability', 'ai-risk-management'],
  },
  {
    slug: 'biais-algorithmique',
    theme: 'governance-and-compliance',
    question: "Comment traiter le risque de biais algorithmique ?",
    answer:
      "Le biais algorithmique apparaît quand un système IA produit des résultats systématiquement différents pour des sous-groupes (genre, origine, âge) sans justification métier légitime. Trois sources principales : biais dans les données d'entraînement, choix de conception (variables proxy implicitement corrélées à des attributs protégés), boucles de rétroaction.\n\n<strong>Détection</strong> : appliquer une métrologie d'équité spécifique (fairness metrics) par sous-groupe dès la conception, pas en aval. Tester systématiquement la performance par sous-population sensible. Un modèle qui marche très bien en moyenne peut produire des décisions inacceptables sur des sous-groupes minoritaires.\n\n<strong>Atténuation</strong> : revoir la composition des données d'entraînement, supprimer ou neutraliser les variables proxy problématiques, ajuster le seuil de décision par sous-groupe quand légalement possible, mettre en place une supervision humaine renforcée sur les cas litigieux.\n\n<strong>Cadre réglementaire</strong> : l'AI Act EU exige une « gouvernance des données » (Article 10) incluant la prévention et la détection des biais pour les systèmes haut risque. Le NIST AI RMF dédie une partie de la fonction Measure à l'audit de biais. Le RGPD et les lois anti-discrimination (notamment la loi Informatique et Libertés en France) s'appliquent.\n\n<strong>Cas exemplaire</strong> : un système de tri de CV entraîné sur des données historiques de recrutement peut apprendre à pénaliser implicitement des CV féminins même si le genre n'est pas une variable d'entrée — c'est typique. Un audit de biais pré-déploiement est non négociable sur ce type d'usage.",
    relatedModules: [2, 5],
    relatedCases: ['mit-barzilay-cancer', 'nist-ai-rmf', 'ai-act-eu-haut-risque'],
    relatedGlossary: ['biais-algorithmique', 'donnees-entrainement', 'explicabilite'],
  },

  // ========================================================================
  // CAPSTONE ET ROADMAP (3)
  // ========================================================================
  {
    slug: 'duree-capstone',
    theme: 'capstone-and-roadmap',
    question: "Combien de temps faut-il pour faire le capstone ?",
    answer:
      "La durée dépend du niveau d'ambition et de la maturité de votre organisation. Trois niveaux d'engagement :\n\n<strong>Version courte (90-120 minutes)</strong> — remplir le canvas téléchargeable Module 6 en autonomie. Vous obtenez une roadmap synthétique en une page. Suffisant pour structurer votre pensée et engager une discussion interne.\n\n<strong>Version moyenne (1-2 jours)</strong> — version exploitable en COMEX avec annexes méthodologiques (diagnostic de maturité étayé, scoring V × F × R des use cases candidats avec justifications, plan d'action détaillé sur les 5 dimensions, budget estimé, cartographie des risques majeurs). Suffisant pour un appel à validation par la direction générale.\n\n<strong>Version complète (2-3 semaines)</strong> — en mode atelier équipe avec validation interne. Implique 2-3 sessions de travail collectif, des entretiens avec les directions métier concernées, une analyse de conformité AI Act EU, une consultation préliminaire des partenaires sociaux si applicable. Suffisant pour un lancement opérationnel.\n\nLa grille d'évaluation à 7 dimensions × 4 niveaux dans la page capstone permet d'évaluer la qualité atteinte. Un score « Solide » sur 5 dimensions et « Excellent » sur 2 marque le seuil de défendabilité en COMEX.",
    relatedPages: ['/capstone/'],
    relatedGlossary: ['capstone', 'roadmap-ia'],
  },
  {
    slug: 'capstone-toutes-tailles',
    theme: 'capstone-and-roadmap',
    question: "Le capstone est-il adapté à toutes tailles d'organisation ?",
    answer:
      "Oui — la méthodologie est invariante par taille, mais l'ampleur des livrables et l'ordre de grandeur des budgets s'adaptent.\n\n<strong>Pour une PME (50-300 salariés)</strong> — diagnostic simplifié, 1-2 use cases prioritaires, gouvernance allégée (un comité réduit suffit), budget typique 200-500 k€ sur 18 mois. L'exemple fictif de Métallurgie de Précision SAS dans la page capstone illustre ce niveau d'ambition.\n\n<strong>Pour une ETI ou un grand groupe</strong> — diagnostic plus formel, 5-10 use cases priorisés en portefeuille, gouvernance structurée (comité IA + chefs de projet par use case), budget pluriannuel à 7 chiffres, articulation avec la stratégie groupe. Le canvas reste applicable mais avec plus d'itérations entre étapes.\n\n<strong>Pour une administration publique</strong> — adaptation nécessaire sur la dimension AI Act (services publics essentiels = haut risque par défaut), implication forte des partenaires sociaux dès le cadrage, articulation avec les obligations de transparence administrative.\n\n<strong>Pour une organisation très petite (TPE, association)</strong> — la version courte du canvas (90-120 min) est appropriée. Concentrez-vous sur 1 cas d'usage clair et bien borné. Inutile de produire un livrable de 50 pages.",
    relatedPages: ['/capstone/'],
    relatedGlossary: ['capstone', 'roadmap-ia'],
  },
  {
    slug: 'prerequis-capstone',
    theme: 'capstone-and-roadmap',
    question: "Quel niveau d'expertise faut-il avant d'attaquer le capstone ?",
    answer:
      "Le capstone est conçu pour être réalisable par un dirigeant, manager ou consultant <strong>sans expertise technique préalable</strong>. C'est cohérent avec le positionnement business-first du parcours.\n\n<strong>Prérequis minimum</strong> — avoir parcouru au moins les modules 1 (Introduction), 5 (IA et société) et 6 (Futur de l'IA). Idéalement les 6 modules. Avoir des informations basiques sur le contexte stratégique de votre organisation (objectifs, contraintes, ressources approximatives).\n\n<strong>Ce qui aide</strong> — connaître la situation actuelle de l'IA dans votre organisation (existe-t-il déjà des projets ? une équipe data ? des outils déployés ?), avoir un sponsor en direction générale, disposer d'au moins quelques heures pour collecter des informations auprès des directions métier concernées.\n\n<strong>Ce qui n'est pas nécessaire</strong> — savoir programmer en Python, comprendre les détails techniques d'un transformer, avoir entraîné un modèle ML, maîtriser les mathématiques de l'optimisation. Le capstone porte sur le cadrage stratégique, pas sur l'implémentation.\n\n<strong>Pour les profils très techniques</strong> (data scientist, ML engineer) — le capstone peut paraître insuffisamment technique. C'est intentionnel : le défi pour vous sera d'articuler vos compétences techniques avec une décision de gouvernance et de stratégie. Les modules 5 et 6 et la grille d'évaluation à 7 dimensions vous y aideront.",
    relatedPages: ['/capstone/', '/programme/'],
    relatedGlossary: ['capstone'],
  },

  // ========================================================================
  // PRATIQUE DU PARCOURS (3)
  // ========================================================================
  {
    slug: 'ordre-modules',
    theme: 'practical-course',
    question: "Dans quel ordre faut-il parcourir les 6 modules ?",
    answer:
      "L'ordre numérique (Module 1 → 2 → 3 → 4 → 5 → 6) est recommandé pour les personnes qui découvrent le sujet. Chaque module prépare le suivant : le Module 1 pose les bases conceptuelles, le 6 consolide en roadmap.\n\n<strong>Pour les profils plus avancés</strong>, des parcours alternatifs sont possibles :\n\n<strong>Parcours « gouvernance-first »</strong> (utile pour responsables conformité, juristes, DPO) — Module 1 → Module 5 → Module 6 → puis Modules 2-3-4 selon les usages prioritaires.\n\n<strong>Parcours « technique-first »</strong> (utile pour data scientists qui doivent monter en gouvernance) — Modules 2-3-4 d'abord pour articuler ce qu'ils font déjà avec le cadrage business, puis Modules 5-6 pour la dimension stratégique.\n\n<strong>Parcours « cas d'usage »</strong> (utile pour managers métier) — partir des 10 études de cas qui les concernent (par secteur ou par technologie), revenir aux modules associés selon les besoins, finir par le capstone.\n\n<strong>Le capstone</strong> reste le point d'arrivée recommandé dans tous les cas. Il intègre l'ensemble des notions et oblige à articuler ce qu'on a compris en décision concrète pour son organisation.",
    relatedPages: ['/programme/', '/modules/'],
  },
  {
    slug: 'traductions-en-ar',
    theme: 'practical-course',
    question: "Quand seront disponibles les versions anglaise et arabe ?",
    answer:
      "Les versions anglaise (EN) et arabe (AR) sont prévues pour la <strong>Phase 7</strong> du projet, après la production complète du contenu français. Le calendrier dépend de l'avancement du projet — voir le CHANGELOG sur GitHub pour le statut actuel.\n\n<strong>Pour l'instant</strong>, les pages EN et AR existent mais affichent une notice « Traduction à venir » avec un lien vers la version française correspondante. C'est un choix délibéré : il vaut mieux signaler explicitement qu'une traduction de qualité prend du temps que produire des traductions automatiques de qualité variable.\n\n<strong>Si vous lisez l'arabe ou l'anglais</strong> et voulez aider à accélérer les traductions — n'hésitez pas à contribuer via le repo GitHub. Les fichiers sources sont dans <code>src/pages/{en,ar}/</code> et <code>src/i18n/translations.ts</code>. Toute contribution sérieuse sera intégrée et créditée.",
    relatedPages: ['/a-propos/'],
  },
  {
    slug: 'mises-a-jour-reutilisation',
    theme: 'practical-course',
    question: "Le contenu est-il régulièrement mis à jour ? Puis-je le réutiliser ?",
    answer:
      "<strong>Mises à jour</strong> — le site évolue régulièrement. Les évolutions sont tracées dans le CHANGELOG sur GitHub avec dates et numéros de version. Le contenu est sensible aux évolutions réglementaires (AI Act EU notamment) et technologiques (nouveaux foundation models, évolutions de l'écosystème) ; nous mettons à jour selon nos disponibilités.\n\n<strong>Réutilisation pédagogique</strong> — le contenu est sous licence <strong>Creative Commons BY-NC-SA 4.0</strong>. Vous pouvez :\n\n<strong>Réutiliser librement</strong> en formation, enseignement supérieur, académie d'entreprise, à condition de (a) <em>citer la source</em> (lien vers le site et licence), (b) <em>conserver les conditions</em> (BY-NC-SA), (c) <em>ne pas l'utiliser pour un usage commercial direct</em> (vente du contenu en l'état).\n\n<strong>Adapter et modifier</strong> en gardant la licence sur l'œuvre dérivée. Si vous corrigez une erreur ou ajoutez du contenu utile, vous êtes bienvenus à contribuer en retour via le repo GitHub.\n\n<strong>Ne pas confondre avec le programme officiel MIT</strong> — la licence couvre uniquement le contenu produit pour ce site, pas les œuvres MIT que nous citons (qui restent sous leurs propres licences).\n\nPour des usages commerciaux directs (intégration dans un produit payant, par exemple), contactez-nous via GitHub pour discuter d'une licence spécifique.",
    relatedPages: ['/a-propos/', '/mentions-legales/'],
  },
];

/**
 * Helpers de filtrage et d'accès à la FAQ
 */

/** Récupère une entrée par slug */
export function getFaq(slug: string): FaqEntry | undefined {
  return faq.find((entry) => entry.slug === slug);
}

/** Filtre les entrées par thème */
export function faqByTheme(theme: FaqTheme): FaqEntry[] {
  return faq.filter((entry) => entry.theme === theme);
}

/** Total */
export const TOTAL_FAQ = faq.length;
