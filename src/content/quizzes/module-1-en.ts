/**
 * src/content/quizzes/module-1-en.ts
 *
 * English version of the Module 1 formative quiz.
 * Mirrors the structure of module-1.ts (FR) — same questions, same options,
 * same correct indices, same scoring bands. Only the natural-language
 * content is translated.
 */

import type { Quiz } from '@/lib/quiz-schema';

const quizModule1EN: Quiz = {
  id: 'module-1-introduction-ia-en',
  title: 'Quiz — Module 1: Introduction to AI',
  intro:
    'Seven questions to verify your understanding. Three comprehension questions, three application, one judgment. Aim for 5/7 to move on confidently to Module 2.',

  scoringBands: [
    {
      min: 0,
      max: 3,
      label: 'Revisit the key concepts',
      interpretation:
        "Module 1 deserves a second reading. Focus on the 5 concepts (§3) and the 4 common errors (§4). Each question's explanation points to the section to review. No pressure — the quiz is diagnostic, not evaluative.",
    },
    {
      min: 4,
      max: 5,
      label: 'Solid foundations, application to consolidate',
      interpretation:
        'You master the definitions and the general framework. The transition to application still needs work — redo the practical activity (§6) with a real case from your organization, then move on to Module 2.',
    },
    {
      min: 6,
      max: 7,
      label: 'Solid mastery',
      interpretation:
        'You have a good grasp of AI framing. Module 2 (Machine Learning in Business) naturally extends these foundations by entering the technical choices that this framing implies. Good continuation.',
    },
  ],

  questions: [
    {
      kind: 'comprehension',
      question:
        'What is the essential difference between narrow AI and general AI (AGI)?',
      options: [
        'Narrow AI is less performant than general AI on all tasks.',
        'Narrow AI is designed for a specific task; general AI would have cognitive abilities comparable to a human across a wide range of problems.',
        'Narrow AI only works with structured data, while general AI works with any data.',
        'Narrow AI is used in business, general AI only in academic research.',
      ],
      correctIndex: 1,
      explanation:
        'Narrow AI excels on a defined task (product recommendation, translation, fraud detection), but does not transfer its abilities to other problems. AGI, which remains hypothetical in 2026, would designate a system capable of generalized reasoning and learning comparable to humans. All AI systems deployed in business today are narrow AI — including GPT-4 and its successors, which are narrow on their task (text generation conditioned by a prompt). Review: §3.1.',
    },
    {
      kind: 'comprehension',
      question:
        'What primarily triggered the current wave of AI progress (since ~2012)?',
      options: [
        'The invention of new algorithms radically different from previous ones.',
        'A combination of three factors: massive data availability, computing power (notably GPUs), and progress in deep learning.',
        'A unique mathematical breakthrough in learning theory.',
        'The open-sourcing of all AI solutions.',
      ],
      correctIndex: 1,
      explanation:
        "The current wave, sometimes dated from AlexNet's success on ImageNet in 2012, results from the convergence of three conditions becoming simultaneously mature: accessible volumes of digital data (web, sensors, smartphones), affordable computing power via GPUs initially designed for video games, and rediscovery of deep neural networks. None of these factors alone would have sufficed. Understanding this avoids two symmetrical framing errors: thinking AI is new (false: 70 years of history) or thinking the wave will fade like previous ones (unlikely: the conjunction is durable). Review: §3.2.",
    },
    {
      kind: 'comprehension',
      question:
        "According to the collective intelligence framework developed by Thomas Malone and the MIT Center for Collective Intelligence, what role does AI play in an organization?",
      options: [
        'AI gradually replaces human intelligence in decision-making.',
        'AI is one actor among others in a system where humans and machines combine their strengths — performance comes from the system, not from a single component.',
        'AI is primarily a decision-support tool, never an autonomous actor.',
        'AI only makes sense at the individual scale, not the organizational scale.',
      ],
      correctIndex: 1,
      explanation:
        'The collective intelligence perspective considers that the best organizations combine humans and machines as a single intelligent system — a "supermind". Neither human alone nor machine alone is enough; it is the orchestration of their complementarities (human judgment, machine computation, collective memory) that produces performance. The Takeda Superminds program, conducted with MIT CCI, is the direct application in pharmaceutical R&D. Review: §3.3 and §5.',
    },
    {
      kind: 'application',
      question:
        'A bank is considering fully automating loan application processing with an ML model. Which argument is the strongest for keeping human intervention in the process?',
      options: [
        'ML models are less performant than human analysts on simple applications.',
        'Atypical cases, model biases, and regulatory compliance (notably explainability of decisions) require human judgment that is integral to the system.',
        'Total automation is technically impossible.',
        'Customers always prefer to talk to a human for this type of decision.',
      ],
      correctIndex: 1,
      explanation:
        'Human-in-the-loop is not a concession to technical imperfection — it is an essential component for high-stakes decisions. Three reasons: edge cases (where the model fails silently), bias mitigation (which requires active supervision, not occasional auditing), and compliance (the EU AI Act classifies credit scoring as a high-risk use, with obligations of explainability and human oversight). The other options are either false (a, c) or insufficient alone (d: customer preference is secondary to regulatory obligations). Review: §3.4 and §4.3.',
    },
    {
      kind: 'application',
      question:
        'You are a consultant for a 200-employee industrial SME. The CEO asks you: "we\'d like to do AI, where do we start?" What is the best first step?',
      options: [
        'Immediately launch a chatbot pilot for customer service.',
        'Hire a senior data scientist to build the AI team.',
        'Map critical business processes and identify where AI could contribute to the overall strategy, before choosing a pilot.',
        'Buy a generative AI solution from a recognized vendor.',
      ],
      correctIndex: 2,
      explanation:
        "Before any investment, strategic framing is non-negotiable. It involves linking AI candidates to the company's strategy (differentiation, cost, focus), evaluating data and organizational maturity, and prioritizing on the value/feasibility ratio. Launching a pilot without framing typically produces an isolated POC that fits no transversal capability — that is error #4 of the module. Hiring a senior data scientist (b) or buying a solution (d) are implementation decisions, premature without framing. Review: §3.5 and §6.",
    },
    {
      kind: 'application',
      question:
        'An HR team proposes an AI project to "automatically analyze CVs and pre-select candidates". What are the two most critical dimensions to evaluate at the framing stage?',
      options: [
        'Model cost and development time.',
        'Risk of discriminatory bias (fairness, compliance) and quality of historical recruitment data.',
        "Technical performance of the model and inference speed.",
        'Recruiter adoption and candidate satisfaction.',
      ],
      correctIndex: 1,
      explanation:
        "HR pre-selection tools are very high ethical and legal risk: a model trained on the company's history reproduces its biases (gender, origin, age). The EU AI Act classifies these uses as 'high risk' with specific obligations (impact analysis, bias audit, documentation). Before any technical discussion, bias auditing and historical data quality must be addressed. Other dimensions (cost, performance, adoption) are important but secondary — a biased system has no place being deployed, regardless of cost or performance. Review: §4.3.",
    },
    {
      kind: 'judgment',
      question:
        'A SaaS vendor offers you an "all-in-one AI platform" that "transforms your business in 30 days, no technical expertise required". What is the right managerial reflex?',
      options: [
        'Sign quickly so as not to be left behind by competitors who would adopt the same solution.',
        'Request a demo and sign if it is convincing.',
        "Request a POC on a specific business use case with real data, and evaluate measured business value and integration difficulty with the existing workflow — the 'no expertise required' promise being a warning signal about the lack of realism.",
        'Systematically refuse all external AI solutions and develop everything in-house.',
      ],
      correctIndex: 2,
      explanation:
        "The promise 'no expertise required / 30 days / all-in-one' is typically a warning signal: any real AI deployment requires data adaptation, workflow integration, change management (reminder: 60-80% of total budget is typically off-model). A demo in a controlled environment (b) says nothing about production behavior. The right reflex is neither rapid adoption (a) nor systematic refusal (d), but real-case testing: if the solution holds its promises on your real data, all the better; if not, you'll have known with limited investment. It's also a vendor test — a serious partner will accept a structured POC. Review: §4.1 and §4.2.",
    },
  ],
};

export default quizModule1EN;
