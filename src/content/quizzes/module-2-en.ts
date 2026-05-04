/**
 * src/content/quizzes/module-2-en.ts
 *
 * English version of the Module 2 formative quiz (Machine Learning in
 * Business). Mirrors the structure of module-2.ts (FR) — same 7 questions,
 * same options, same correctIndex, same scoring bands. Only natural-language
 * content is translated.
 */

import type { Quiz } from '@/lib/quiz-schema';

const quizModule2EN: Quiz = {
  id: 'module-2-machine-learning-en',
  title: 'Quiz — Module 2: Machine Learning in Business',
  intro:
    'Seven questions to verify your understanding of Machine Learning applied to business decisions. Three comprehension questions, three application, one judgment. Aim for 5/7 to move on confidently to Module 3.',

  scoringBands: [
    {
      min: 0,
      max: 3,
      label: 'Revisit the ML fundamentals',
      interpretation:
        'Module 2 deserves a second reading. Focus on the 5 concepts (§3) and the 4 common errors (§4). The supervised / unsupervised / reinforcement distinctions and the notion of overfitting are the essential building blocks. No pressure: the goal is diagnostic, not evaluative.',
    },
    {
      min: 4,
      max: 5,
      label: 'Solid foundations, relevance judgment to strengthen',
      interpretation:
        "You master the concepts. The transition to business judgment — deciding whether a use case is an ML candidate — still needs work. Redo the practical activity (§6) with a real case from your organization, then move on to Module 3.",
    },
    {
      min: 6,
      max: 7,
      label: 'Solid mastery',
      interpretation:
        'You have a good grasp of ML framing. Module 3 (Generative AI in Business) naturally extends these foundations by addressing foundation models and GenAI pilot workflows. Good continuation.',
    },
  ],

  questions: [
    {
      kind: 'comprehension',
      question:
        'What is the essential difference between supervised learning and unsupervised learning?',
      options: [
        'Supervised uses more data than unsupervised.',
        'Supervised learns from labeled examples (input → expected output); unsupervised seeks structures (groups, anomalies, patterns) in unlabeled data.',
        'Supervised is faster to train than unsupervised.',
        'Supervised only works with numeric data, unsupervised with any type.',
      ],
      correctIndex: 1,
      explanation:
        "Supervised answers the question 'given X, predict Y', provided you have an annotated history (transactions labeled 'fraud' or 'non-fraud' for example). Unsupervised answers 'what is in this data?' without a defined target (segment a customer base, detect anomalies). For the manager, the distinction guides feasibility: supervised requires labeled data, which is often the most expensive bottleneck. Review: §3.1.",
    },
    {
      kind: 'comprehension',
      question:
        'What is overfitting, and why is it a major problem?',
      options: [
        'When the model learns too slowly and never reaches the desired performance.',
        "When the model memorizes the training data (including its noise) instead of learning its regularities, which degrades its performance on new data.",
        'When the model is trained on too much data and becomes too expensive.',
        'When the model is so performant that there is nothing left to improve.',
      ],
      correctIndex: 1,
      explanation:
        "An overfitted model is very good on the historical data but collapses in production. It is the gap between expected performance (measured on training data) and real performance (on new data). For a leader, the signal is typical: a POC that gets 98% in-house and 73% at the first customer. The countermeasure is called cross-validation and independent test set — it is non-negotiable. Review: §3.4.",
    },
    {
      kind: 'comprehension',
      question:
        "In a generic strategy in Porter's sense, which dimension does Machine Learning typically contribute to when used to personalize a customer's experience?",
      options: [
        'Cost leadership (structural cost reduction).',
        'Differentiation (creating customer-perceived value that competitors do not reproduce).',
        'Focus (serving a specific segment with precision impossible today).',
        'None of the three — personalization has no strategic dimension.',
      ],
      correctIndex: 1,
      explanation:
        'Personalization typically creates an experience perceived as superior (relevant recommendations, smooth journey, adapted offer), which fits a differentiation strategy. Spotify Discover Weekly and Netflix are canonical examples. Caution: the same ML technology can serve a cost strategy (e.g., optimizing logistics) or a focus strategy (e.g., serving a niche segment). Strategic framing is done case by case. Review: §3.5 and §5.',
    },
    {
      kind: 'application',
      question:
        'A bank has 20 years of labeled loan application history (repaid / default). Which type of ML problem is most natural for automating part of the assessment?',
      options: [
        'Unsupervised learning (clustering of cases).',
        'Supervised learning (binary classification: acceptable risk / unacceptable risk), with human-in-the-loop strategy for edge cases.',
        'Reinforcement learning (the model learns by trial and error on new applications).',
        'None — an explicit business rules model is always more appropriate for this type of decision.',
      ],
      correctIndex: 1,
      explanation:
        "Labeled history is the natural ground for supervised learning: each past case provides a pair (input = case characteristics, output = repayment or default). Unsupervised could illuminate segmentation but does not answer the 'acceptable risk?' question. Reinforcement is inappropriate here (no trial loop with reward). Business rules have their place but do not oppose ML — they are complementary (notably to translate regulatory obligations). Human-in-the-loop for edge cases is required by the EU AI Act. Review: §3.1 and §3.4.",
    },
    {
      kind: 'application',
      question:
        'A team proposes an ML project to optimize stock levels in a logistics warehouse. What are the two most critical dimensions to evaluate at the framing stage?',
      options: [
        "The algorithm's popularity and the data team's size.",
        'The quality of historical data (seasonality, disruptions, returns) and integration with the existing information system (ERP, WMS).',
        'Raw model performance and inference time.',
        'Total project cost and time to production.',
      ],
      correctIndex: 1,
      explanation:
        'ML stock optimization is a typical case where business value depends primarily on data (clean history, signals representative of seasonality, documented incidents and exceptions) and on integration with the existing operational workflow (the ERP that places orders, the WMS that executes). The model itself typically represents 20-40% of the budget, the rest distributed across these two layers. Other options are important but secondary — a perfect model on wrong data has no value. Review: §3.4 and §4.1.',
    },
    {
      kind: 'application',
      question:
        'An SME considers adopting churn prediction ML (customer departure). The CEO asks how to evaluate if the project is worth it. Which evaluation criterion is most relevant in initial framing?',
      options: [
        "The model's expected theoretical accuracy.",
        'The ratio between the business value of avoided churn (revenue retained, acquisition cost saved) and total project cost (model + data + integration + retention actions).',
        'The number of ML models already in production at competitors.',
        'The availability of a packaged ML solution from a recognized vendor.',
      ],
      correctIndex: 1,
      explanation:
        "The real ROI of a churn model depends on the monetary value of a retained customer and the total cost deployed to achieve it — not accuracy in isolation. A model with 90% accuracy that predicts 100 churns/month only creates value if the organization has the capacity to act: customer success team, retention offers, measurement of action impact. Without this downstream apparatus, the model is a POC. Technical accuracy (a) is necessary but insufficient. Options c and d are bad reasons (mimicry, framing laziness). Review: §3.5 and §4.4.",
    },
    {
      kind: 'judgment',
      question:
        'An ML vendor presents you with a candidate scoring model (recruitment) with "94% accuracy" on its tests. What is the right managerial reflex before any purchase?',
      options: [
        'Buy quickly, since 94% is a high score.',
        'Request accuracy on subgroups (gender, origin, age) to detect potential discriminatory biases, require a test on your real data, and verify EU AI Act compliance (high-risk use).',
        'Systematically refuse all candidate scoring ML.',
        'Request a platform demo and sign if it is intuitive.',
      ],
      correctIndex: 1,
      explanation:
        "An overall 94% accuracy may mask strong disparities by subgroup: 98% on men, 84% on women — bias that becomes legal and ethical discrimination under the AI Act. The right reflex combines three actions: bias audit by subgroup, test on the organization's real data (vendor-environment accuracy is not production accuracy), and compliance verification (the AI Act classifies candidate scoring as 'high-risk' use with specific obligations). Systematic refusal (c) is excessive — a well-audited system can be deployed. Intuitive demo (d) is marketing display. Review: §4.3.",
    },
  ],
};

export default quizModule2EN;
