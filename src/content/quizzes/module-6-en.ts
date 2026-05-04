/**
 * src/content/quizzes/module-6-en.ts
 *
 * English version of the Module 6 formative quiz (The Future of AI).
 * Mirrors the structure of module-6.ts (FR) — same 7 questions, same
 * options, same correctIndex, same scoring bands. Only natural-language
 * content is translated.
 */

import type { Quiz } from '@/lib/quiz-schema';

const quizModule6EN: Quiz = {
  id: 'module-6-futur-ia-en',
  title: 'Quiz — Module 6: The Future of AI',
  intro:
    'Seven questions to verify your understanding of AI foresight and strategic roadmap construction. Three comprehension questions, three application, one judgment. Aim for 5/7 to confidently approach the capstone (organizational AI roadmap).',

  scoringBands: [
    {
      min: 0,
      max: 3,
      label: 'Revisit the foresight fundamentals',
      interpretation:
        'Module 6 deserves a second reading. Focus on the watch vs strategic anticipation distinction, scenario planning (thinking multiple futures rather than predicting one), and the structure of an AI roadmap in 5 dimensions (vision / use cases / governance / skills / KPIs). These concepts structure the capstone.',
    },
    {
      min: 4,
      max: 5,
      label: 'Solid foundations, roadmap exercise to strengthen',
      interpretation:
        "You master the concepts. The transition to concrete roadmap construction for your organization still needs work. Redo the practical activity (§6) with your real context — it is exactly the type of deliverable expected in capstone.",
    },
    {
      min: 6,
      max: 7,
      label: 'Solid mastery',
      interpretation:
        'You have a good grasp of foresight and roadmap framing. You are ready to tackle the capstone: build a strategic AI roadmap for your organization synthesizing the learnings of the 6 modules. Good continuation.',
    },
  ],

  questions: [
    {
      kind: 'comprehension',
      question:
        'What is scenario planning, and how does it differ from forecasting?',
      options: [
        'Scenario planning is an advanced form of forecasting with more accurate statistical models.',
        'Forecasting seeks to predict a single most likely future. Scenario planning explicitly constructs multiple possible futures (typically 3 or 4) to stress-test strategic decisions against different evolutions — the goal is not to guess which one will happen, but to identify robust actions across multiple scenarios.',
        'Scenario planning and forecasting are synonymous.',
        'Scenario planning only applies to large publicly traded companies.',
      ],
      correctIndex: 1,
      explanation:
        "Scenario planning is a method developed notably by Royal Dutch Shell in the 1970s to think strategically in the face of uncertainty. The difference with forecasting is fundamental: forecasting assumes one can estimate a single most likely future; scenario planning accepts that the future is multiple and constructs 3-4 contrasting scenarios to test the robustness of decisions. For AI in business, this is particularly relevant: technical, regulatory and societal evolutions are uncertain at 5-10 years, but robust actions can be identified (for example: investing in team training is useful in almost all scenarios). Review: §3.1.",
    },
    {
      kind: 'comprehension',
      question:
        'What is the difference between technology watch and strategic AI anticipation?',
      options: [
        'Watch is free, strategic anticipation is paid.',
        'Watch is passive (collecting information about what exists), strategic anticipation is active (analyzing implications for the organization, identifying decisions to make, building strategic options). Watch feeds anticipation, but does not replace it.',
        'Watch concerns the short term, strategic anticipation only the long term.',
        'They are two names for the same activity.',
      ],
      correctIndex: 1,
      explanation:
        'Many organizations confuse watch and strategic anticipation: they consume newsletters, subscribe their teams to specialized publications, and believe they are anticipating. But watch (which collects information about what exists) only becomes strategic anticipation if it is translated into analysis of implications for the organization ("what does this change for us?"), into identification of decisions to make ("should we act now? within what timeframe?"), and into construction of strategic options ("what are our alternatives?"). Both are necessary — watch alone does not produce strategy. Review: §3.4.',
    },
    {
      kind: 'comprehension',
      question:
        'A strategic AI organizational roadmap is typically structured around how many main dimensions?',
      options: [
        'One: the chronological list of AI projects to launch.',
        'Two: projects and budget.',
        'Five integrated dimensions: vision (where we want to go), priority use cases, governance, skills and organization, KPIs and success indicators. Each is necessary — a purely technological roadmap without human and organizational dimension is incomplete.',
        'More than twenty dimensions, to be exhaustive.',
      ],
      correctIndex: 2,
      explanation:
        "A strategic AI roadmap combines five interdependent dimensions. (1) The 3-5 year AI vision sets the course. (2) Priority use cases translate the vision into concrete projects, ranked by value/feasibility/risk ratio. (3) Governance defines who decides, how, with what processes. (4) Skills and organization specify the profiles to recruit, train, redeploy — often the limiting factor. (5) KPIs measure progress and allow adjustments. A roadmap reduced to a list of projects without human and organizational dimension is typically a marketing presentation — not a transformation tool. Review: §3.3.",
    },
    {
      kind: 'application',
      question:
        'An organization wants to build its first strategic AI roadmap. Where to start in initial framing?',
      options: [
        'Immediately list all possible AI projects and prioritize them on estimated ROI.',
        'Choose a recognized AI vendor and structure the roadmap around their catalog.',
        'Start with the 3-5 year AI vision (what does the organization want to look like?), then map current maturity (data, governance, skills, ongoing projects), then translate into priority use cases — not the reverse. Vision and maturity frame the project choices, not the other way around.',
        "Copy a competitor's AI roadmap from the same sector.",
      ],
      correctIndex: 2,
      explanation:
        "The most frequent error is starting with the project list — a tactical method that produces a patchwork of POCs without strategic coherence. The robust method starts with vision (over 3-5 years, what does the organization want to look like in AI?) and maturity mapping (where are we today?). These two elements then frame project choices: those that bring closer to the vision AND that are compatible with current maturity (or with a realistic maturity-building effort). Options a, b, d are shortcuts that typically produce incoherent or indefensible roadmaps. Review: §3.3 and §6.",
    },
    {
      kind: 'application',
      question:
        'You read that a major vendor announces a "technological breakthrough" that would transform your sector in 12 months. What is the right strategic reflex?',
      options: [
        "Immediately announce a complete pivot of your organization's AI strategy.",
        'Ignore the announcement and continue the current roadmap.',
        'Distinguish the announcement (which may be marketing, premature, or not materialize) from real evolution. Identify implications in 2-3 contrasting scenarios (confirmed breakthrough at 12 months / diffuse breakthrough at 24-36 months / unconfirmed announcement). Identify robust actions across the 3 scenarios (typically: invest in training, monitor topic maturity, prepare options without committing prematurely).',
        'Ask a consulting firm to produce an exhaustive study before any action.',
      ],
      correctIndex: 2,
      explanation:
        "The right reflex combines humility (announcements do not always materialize within announced timeframes) and agility (do not ignore a signal). Scenario planning allows acting without committing prematurely: identifying actions useful across multiple scenarios (team training, active technology watch, light prototype to understand) and deferring those that assume a single scenario will materialize (massive overhaul). Options a and b are the two erroneous extremes (over-reaction vs denial). Option d is slow and costly — the decision can be made without exhaustive study. Review: §3.1 and §4.3.",
    },
    {
      kind: 'application',
      question:
        'An AI roadmap plans 10 actions over 24 months. How to intelligently prioritize the 0-6, 6-12, and 12-24 month horizons?',
      options: [
        'Put all actions at 0-6 months to go fast.',
        'Distribute actions equally, 3-4 actions per horizon.',
        'Put at 0-6 months the foundation actions (governance, first low-risk pilot, indicator setup); at 6-12 months the first projects with measurable business value and the start of scaling; at 12-24 months the more ambitious projects that depend on acquired maturity. The sequence respects natural dependencies, not appearance logic.',
        'Put at 0-6 months only the most externally visible projects.',
      ],
      correctIndex: 2,
      explanation:
        'The temporal hierarchization of an AI roadmap follows dependency logic: one cannot do X without first putting Y in place. Foundations (governance, data governance, first low-risk pilot for learning, KPI setup) come first — typically 0-6 months. The first projects with measurable business value come next — 6-12 months. More ambitious projects that depend on acquired maturity (multi-case orchestration, large-scale automation, differentiation AI) come last — 12-24 months. A roadmap that ignores dependencies (option a, b, or d) produces blocked projects or failures. Review: §3.3 and §6.',
    },
    {
      kind: 'judgment',
      question:
        "A consulting firm offers to produce your organization's strategic AI roadmap in 5 days, interviewing only the CIO and CEO, without interaction with business directions or HR. What is the right managerial reflex?",
      options: [
        "Accept to go fast and benefit from the firm's expertise.",
        'Systematically refuse to work with an external firm.',
        'Refuse this specific modality: a strategic AI roadmap without interaction with business directions (who know processes and operational constraints) and without interaction with HR (who carry skills and change management stakes) typically produces a technically correct but inapplicable deliverable. Request an extended approach or change provider.',
        'Accept and build in parallel an internal roadmap without telling the firm.',
      ],
      correctIndex: 2,
      explanation:
        "A strategic AI roadmap is built with the affected functions — not for them. Without interaction with business directions, the firm ignores real processes, operational constraints, field priorities; the deliverable is typically disconnected. Without interaction with HR, skills stakes (recruitment, training, redeployment) and change management are absent — yet these are often the real limiting factors. The proposed modality (5 days, limited interviews) is a warning signal on expected deliverable quality. The right reflex combines refusal of the modality and requirement of an extended approach. Options a and d are compromises that produce a bad deliverable or duplicate work. Option b is too categorical — a firm can be a good partner with the right modality. Review: §4.2.",
    },
  ],
};

export default quizModule6EN;
