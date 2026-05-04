/**
 * src/content/quizzes/module-5-en.ts
 *
 * English version of the Module 5 formative quiz (AI in Business and
 * Society). Mirrors the structure of module-5.ts (FR) — same 7 questions,
 * same options, same correctIndex, same scoring bands. Only natural-language
 * content is translated.
 */

import type { Quiz } from '@/lib/quiz-schema';

const quizModule5EN: Quiz = {
  id: 'module-5-ia-societe-en',
  title: 'Quiz — Module 5: AI in Business and Society',
  intro:
    'Seven questions to verify your understanding of governance, ethics, compliance and impact-on-work issues. Three comprehension questions, three application, one judgment. Aim for 5/7 to move on confidently to Module 6.',

  scoringBands: [
    {
      min: 0,
      max: 3,
      label: 'Revisit the governance fundamentals',
      interpretation:
        "Module 5 deserves a second reading. Focus on the ethics vs compliance distinction, the EU AI Act classification (prohibited / high-risk / limited risk / minimal risk), and the minimum components of operational AI governance. These issues have become structuring — not optional.",
    },
    {
      min: 4,
      max: 5,
      label: 'Solid foundations, operational governance to strengthen',
      interpretation:
        'You master the concepts. The transition to operational governance (AI committee with decision power, review process, articulation with social dialogue) still needs work. Redo the practical activity (§6) to structure a charter adapted to your organization, then move on to Module 6.',
    },
    {
      min: 6,
      max: 7,
      label: 'Solid mastery',
      interpretation:
        'You have a good grasp of governance and society framing. Module 6 (The Future of AI) takes a step back on 3-10 year evolutions and prepares you to build a strategic roadmap for your organization. Good continuation.',
    },
  ],

  questions: [
    {
      kind: 'comprehension',
      question:
        'What is the essential difference between ethics and compliance in the context of an AI project?',
      options: [
        'Ethics is mandatory, compliance is optional.',
        "Compliance covers obligations imposed by law (AI Act, GDPR, labor law) — it's a minimum threshold to respect. Ethics is broader: it questions what is just, equitable and desirable, even when the law does not require it. An organization can be compliant and yet act unethically.",
        'Ethics concerns technicians, compliance concerns lawyers.',
        'Compliance and ethics are synonymous in the AI context.',
      ],
      correctIndex: 1,
      explanation:
        "Compliance is an imposed minimum framework: respecting GDPR, AI Act, labor law, sectoral standards. Ethics is more demanding: it raises questions of justice and equity that the law does not always cover (for example, is it acceptable to profile candidates even when not illegal?). For the manager, both are necessary: compliance protects legally, ethics protects the trust of stakeholders (employees, customers, society). The two are not interchangeable, and do not substitute for each other. Review: §3.1.",
    },
    {
      kind: 'comprehension',
      question:
        'The European AI Act (Regulation EU 2024/1689) classifies AI systems into four risk categories. Which ones?',
      options: [
        'Low / Medium / High / Critical.',
        'Prohibited practices (e.g., social scoring by authorities, cognitive manipulation) / High-risk (HR, credit, justice, healthcare, public services) / Limited risk (transparency required, e.g., chatbots) / Minimal risk (the rest, no specific obligations).',
        'Public / Private / Hybrid / Mixed.',
        'Open source / Proprietary / Cloud / On-premise.',
      ],
      correctIndex: 1,
      explanation:
        "The EU AI Act adopts a risk-based approach with four levels. Prohibited practices (social scoring, cognitive manipulation) cannot be deployed at all. High-risk uses (recruitment, credit scoring, justice, healthcare, critical infrastructure, public services, education) are subject to strict obligations (compliance analysis, registry, human supervision, data quality, documentation). Limited-risk uses (chatbots, deepfakes) have transparency obligations. The rest falls under minimal risk. For a leader, identifying the classification of each use case is the first step of compliance — not the last. Review: §3.3.",
    },
    {
      kind: 'comprehension',
      question:
        "According to David Autor's work (MIT) on the impact of technologies on employment, which perspective is most empirically defensible?",
      options: [
        'AI will replace the majority of jobs in less than 10 years.',
        'AI will have no significant impact on global employment.',
        "AI is likely to augment work (make it more productive and more skilled) rather than replace it en masse, provided that public policies and corporate practices accompany the transition (training, redeployment, social dialogue). The effect is not mechanical but results from collective choices.",
        'All past technologies have destroyed employment.',
      ],
      correctIndex: 2,
      explanation:
        "David Autor's work (MIT, professor of economics) argues that the net effect of technologies — including AI — on employment depends on collectively made choices. Historically, technologies have both destroyed certain jobs and created other tasks, without structural reduction of global employment. But the beneficial effect is not mechanical: it results from training investments, labor market institutions, and corporate practices that choose augmentation rather than pure replacement. Options a and d are excessive simplifications; option b ignores real sectoral transformations. Review: §3.4.",
    },
    {
      kind: 'application',
      question:
        'An organization decides to set up an AI governance committee. What are the two most critical structural choices for it to be operational?',
      options: [
        'Choose a marketing name and publish a press release.',
        'Endow the committee with real decision power on AI project deployment (Go/No-Go, conditions, suspension) — not just a consultative role — and have operational representatives sit on it (CIO, business, compliance, HR, sometimes employee representatives), not only executives.',
        'Outsource the committee to a consulting firm to guarantee independence.',
        'Set a minimum monthly meeting frequency.',
      ],
      correctIndex: 1,
      explanation:
        'An AI committee without decision power is an ornamental charter — it documents intentions without enforcing them. Operational governance requires an explicit mandate: Go/No-Go on projects, deployment conditions, suspension capability. Mixed composition (executives + operational + compliance + HR + sometimes employee representatives) ensures decisions take field reality into account — not just communication strategy. Options a, c, d are secondary elements (or wrong for c — full outsourcing does not create internal governance). Review: §3.2 and §4.2.',
    },
    {
      kind: 'application',
      question:
        'A company plans to deploy an AI system to automate part of its customer service. What are the two most critical governance deliverables to produce before deployment?',
      options: [
        'A press release and a dedicated website.',
        'An impact analysis (including AI Act classification, GDPR analysis, HR analysis with employee representative consultation if applicable) and an explicit usage policy (who can activate the system, in which cases, with what human escalation, how customers are informed).',
        'An attractive product name and a distinctive logo.',
        'A competitive benchmark and a marketing budget.',
      ],
      correctIndex: 1,
      explanation:
        "Impact analysis and usage policy are the two pillars of operational governance. Impact analysis identifies legal obligations (EU AI Act classification, GDPR for personal data, labor law if customer service organization is modified) and ethical risks (possible biases, unequal service quality between groups). The usage policy translates this analysis into clear rules: who can do what, in which cases, with what traceability. Without these two deliverables, the project is a legal and reputational risk. Other options are secondary communication elements. Review: §3.3 and §4.3.",
    },
    {
      kind: 'application',
      question:
        'A GenAI task automation project in a 30-analyst team will eliminate about 8 positions in 18 months according to internal estimates. What are the two most critical requirements in terms of social dialogue and HR?',
      options: [
        'Communicate as little as possible to avoid reactions.',
        "Launch the project quickly and manage consequences as they come.",
        'Trigger employee representative information-consultation (CSE in France) upstream of the project (not after), and build an explicit support plan (priority internal redeployment, training, mobility, measures for those leaving) — the argument combining productivity + quality + ergonomics is more defensible than a pure workforce reduction logic.',
        'Entrust the topic only to HR without involvement of operational teams.',
      ],
      correctIndex: 2,
      explanation:
        "Upstream CSE information-consultation is a legal obligation in France for any project impacting work organization — not after. Building an explicit support plan (redeployment, training, mobility) is both a moral obligation and a condition for operational success (a contested project is poorly adopted). The argument combining several benefits (productivity + quality + ergonomics) is more defensible than the pure workforce reduction logic, which is socially and legally fragile. Options a, b, d are classic errors that produce contestations, blockages and damage to the employer brand. Review: §3.5 and §4.4.",
    },
    {
      kind: 'judgment',
      question:
        'A SaaS vendor offers you an "ethical and compliant AI platform" that "makes your organization compliant with the AI Act and GDPR in less than 30 days, without changing internal processes". What is the right managerial reflex?',
      options: [
        'Sign quickly to obtain the compliance label before competitors.',
        'Systematically refuse by precautionary principle.',
        'Ask the vendor to cite 3 public references of audited European clients, require precise identification of AI Act/GDPR obligations covered (and not covered), understand that compliance is never a tool feature but an organizational system (policies, processes, governance, documentation, training), and anticipate that compliance will require internal changes the vendor cannot make on your behalf.',
        'Buy and delegate compliance to an external audit firm.',
      ],
      correctIndex: 2,
      explanation:
        '"AI compliance in 30 days without process change" is a typical warning signal. Three reasons: (1) AI Act/GDPR compliance is never an isolated tool feature — it is a system combining internal policies, processes, governance, documentation, training, traceability; (2) a tool can help document and structure, but does not replace the internal organization that must be adapted; (3) the AI Act requires impact analyses, registries, human supervision — all organizational processes. The right reflex combines real testing (verifiable references) and lucidity about what a tool can and cannot do. Fully delegating to an external firm (d) does not create durable internal governance. Review: §3.3 and §4.2.',
    },
  ],
};

export default quizModule5EN;
