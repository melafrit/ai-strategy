/**
 * src/content/quizzes/module-3-en.ts
 *
 * English version of the Module 3 formative quiz (Generative AI in
 * Business). Mirrors the structure of module-3.ts (FR) — same 7
 * questions, same options, same correctIndex, same scoring bands. Only
 * natural-language content is translated.
 */

import type { Quiz } from '@/lib/quiz-schema';

const quizModule3EN: Quiz = {
  id: 'module-3-ia-generative-en',
  title: 'Quiz — Module 3: Generative AI in Business',
  intro:
    'Seven questions to verify your understanding of Generative AI applied to business. Three comprehension questions, three application, one judgment. Aim for 5/7 to move on confidently to Module 4.',

  scoringBands: [
    {
      min: 0,
      max: 3,
      label: 'Revisit the GenAI fundamentals',
      interpretation:
        'Module 3 deserves a second reading. Focus on the notions of foundation model, hallucination, RAG vs fine-tuning, and total automation cost (§3 and §4). Confusions between POC and production are at the heart of GenAI failures in business.',
    },
    {
      min: 4,
      max: 5,
      label: 'Solid foundations, case identification to strengthen',
      interpretation:
        'You master the concepts. The transition to choosing high-ROI GenAI use cases still needs work. Redo the practical activity (§6) with a real workflow from your organization, then move on to Module 4.',
    },
    {
      min: 6,
      max: 7,
      label: 'Solid mastery',
      interpretation:
        'You have a good grasp of GenAI framing. Module 4 (Robotics in Business) explores another technological family with the same business decision principles. Good continuation.',
    },
  ],

  questions: [
    {
      kind: 'comprehension',
      question: 'What is a foundation model in the context of Generative AI?',
      options: [
        'A traditional ML model used as a base for training smaller models.',
        'A very large model pre-trained on massive and generalist data, capable of being adapted to many downstream tasks (text, code, image generation) without complete retraining.',
        'A model specialized in a single domain (medicine, finance, law).',
        'An open-source model as opposed to proprietary models.',
      ],
      correctIndex: 1,
      explanation:
        "A foundation model (GPT-4, Claude, Gemini, Llama) is trained once on massive corpora, then used for very diverse tasks via prompting, fine-tuning or RAG. It is this versatility — the same base for customer service, document analysis and code generation — that changes the economics of AI deployment. The initial training cost (hundreds of millions of dollars) is mutualized across thousands of downstream uses. Review: §3.1.",
    },
    {
      kind: 'comprehension',
      question:
        "What is a 'hallucination' in the context of an LLM (Large Language Model)?",
      options: [
        'A technical bug of the model that can be fixed by a software update.',
        'A statement produced by the model that is plausible and coherent on the surface but factually false, sometimes entirely invented (false names, false citations, false sources).',
        'A voluntary error introduced by the developer to test robustness.',
        'A behavior only present in open-source models.',
      ],
      correctIndex: 1,
      explanation:
        "Hallucination is a structural feature of LLMs: they are trained to produce the most likely text continuation, not the truest. Without guardrails (verifiable sources, RAG, human validation), an LLM produces plausible but false answers without warning signal. For the manager, the consequence is direct: no high-stakes use (legal, medical, financial) can rely on an LLM alone. Hallucinations are not a bug to fix — they are to mitigate by design. Review: §3.3.",
    },
    {
      kind: 'comprehension',
      question:
        'What is the essential difference between RAG (Retrieval-Augmented Generation) and fine-tuning of an LLM?',
      options: [
        'RAG is more expensive than fine-tuning.',
        "RAG complements the LLM by providing it at inference time with relevant documents (excerpts from an internal base); fine-tuning modifies the model's weights by training it on specific data. RAG = external retrieval; fine-tuning = model adaptation.",
        'RAG only works with text, fine-tuning with any format.',
        'RAG is a technique reserved for open-source models.',
      ],
      correctIndex: 1,
      explanation:
        "RAG and fine-tuning answer different problems. RAG is the preferred method to ground LLM responses in a specific knowledge base (internal documents, current case law, product manuals) — without touching the model. Fine-tuning adjusts the model's behavior for a particular task or style (formal responses, brand tone, specific format). For most business cases, RAG is less expensive, more traceable, and easier to update. Fine-tuning is only necessary for truly specific behaviors. Review: §3.4.",
    },
    {
      kind: 'application',
      question:
        'A bank is considering deploying a GenAI chatbot for its customer service. What are the two most critical guardrails to put in place from the pilot stage?',
      options: [
        'Maximize response throughput and limit inference cost.',
        'Ground responses in official documentation (RAG on the bank knowledge base) AND systematically plan human escalation for high-stakes questions (disputes, financial requests, complaints).',
        'Choose the most performant LLM on the market and give it access to all customer data.',
        'Intensively train advisors to use the chatbot themselves.',
      ],
      correctIndex: 1,
      explanation:
        'The two structural risks of a GenAI banking chatbot are hallucinations (invented answers about products or conditions) and high-stakes decisions (contractual commitment, dispute management). RAG on official documentation reduces the first risk (the model relies on verifiable, traceable sources). Human escalation handles the second (humans keep control over sensitive decisions). Without these two guardrails, the chatbot creates more risk than value. Other options are either secondary or explicitly dangerous (option c). Review: §3.3, §3.4 and §4.1.',
    },
    {
      kind: 'application',
      question:
        'A law firm is considering using GenAI to analyze large volumes of contracts. Which approach is most appropriate for the initial pilot?',
      options: [
        "Ask the model to produce the final accept/reject decision on the contract.",
        'Decompose the analysis workflow into sub-tasks (clause extraction, model comparison, gap identification), automate the low-risk ones, keep the final decision human. Measure time saved, not autonomy achieved.',
        'Fully replace lawyers with GenAI on simple contracts.',
        'Wait until the technology reaches 100% accuracy before any deployment.',
      ],
      correctIndex: 1,
      explanation:
        "The right reflex in GenAI business is almost always workflow decomposition rather than total automation. A contract analysis workflow decomposes into: information extraction (to automate, low risk), comparison to a model (to automate, low risk), gap identification (to automate with validation), final decision (to keep human, high legal stakes). The success metric becomes 'time saved by the lawyer' rather than 'automation share', which is more defensible and more realistic. Options a and c are unrealistic marketing promises; option d is sterile blocking. Review: §3.5 and §6.",
    },
    {
      kind: 'application',
      question:
        'A team wants to deploy a GenAI assistant for its salespeople. How to evaluate if the project is worth it in initial framing?',
      options: [
        "Compare the model's performance to humans on knowledge questions.",
        'Calculate the total automation cost (model + integration + RAG on commercial docs + supervision + training) and relate it to measurable gain (hours saved × hourly cost × expected adoption), with a 12-18 month horizon.',
        "Align with what competitors do in GenAI.",
        'Choose the LLM first before defining the use case.',
      ],
      correctIndex: 1,
      explanation:
        "The total automation cost is the central concept of GenAI framing. The model itself (LLM subscription or API) is often the least costly part. Real costs come from: CRM integration, RAG setup on commercial documentation, change management, supervision, and inference costs at scale. Expected business value is measured by hours saved × hourly cost × real adoption rate — not theoretical adoption. Without this calculation, any GenAI investment is a bet. Other options are weak or misleading indicators. Review: §3.5 and §4.4.",
    },
    {
      kind: 'judgment',
      question:
        'A SaaS vendor offers you an "all-in-one GenAI platform" that "replaces a team of 10 analysts with a single expert who pilots the AI". What is the right managerial reflex?',
      options: [
        'Sign quickly to reduce operational costs ahead of competitors.',
        'Ask the vendor to cite 3 customers in your sector who have actually eliminated a complete team, refuse any quote that presents automation as total, require a POC on your real cases with quality measurement (not just speed), and anticipate the degradation of business knowledge linked to junior analyst removal.',
        'Refuse any GenAI deployment in the company on principle.',
        'Buy and impose the transition on teams by training them on the job.',
      ],
      correctIndex: 1,
      explanation:
        "The promise 'replace a team with a single expert + AI' is typically excessive for two reasons. (1) In the current state of LLMs, automation is almost never total — GenAI augments humans more than it replaces them. (2) Removing junior levels breaks the internal training pipeline: in 5 years, you will no longer have seniors with deep business mastery. The right reflex combines real-case testing (measurable POC), verifiable references, and anticipating long-term organizational effects. Options a and d are rushed; option c is sterile blocking. Review: §4.2 and §4.4.",
    },
  ],
};

export default quizModule3EN;
