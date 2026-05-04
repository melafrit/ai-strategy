/**
 * src/content/quizzes/module-4-en.ts
 *
 * English version of the Module 4 formative quiz (Robotics in Business).
 * Mirrors the structure of module-4.ts (FR) — same 7 questions, same
 * options, same correctIndex, same scoring bands. Only natural-language
 * content is translated.
 */

import type { Quiz } from '@/lib/quiz-schema';

const quizModule4EN: Quiz = {
  id: 'module-4-robotique-en',
  title: 'Quiz — Module 4: Robotics in Business',
  intro:
    'Seven questions to verify your understanding of robotics applied to business. Three comprehension questions, three application, one judgment. Aim for 5/7 to move on confidently to Module 5.',

  scoringBands: [
    {
      min: 0,
      max: 3,
      label: 'Revisit the robotics concepts',
      interpretation:
        'Module 4 deserves a second reading. Focus on the industrial robot vs cobot distinction, the three pillars (perception, planning, control), the safety standards (ISO 10218, ISO/TS 15066), and the structure of total project cost. No pressure: the goal is diagnostic.',
    },
    {
      min: 4,
      max: 5,
      label: 'Solid foundations, economic framing to strengthen',
      interpretation:
        'You master the concepts. The transition to economic evaluation (payback, integration as 50-70% of total cost) still needs work. Redo the practical activity (§6) with a real case from your organization, then move on to Module 5.',
    },
    {
      min: 6,
      max: 7,
      label: 'Solid mastery',
      interpretation:
        'You have a good grasp of robotics framing. Module 5 (AI in Business and Society) explores ethical, social and regulatory issues that go beyond a particular technological family. Good continuation.',
    },
  ],

  questions: [
    {
      kind: 'comprehension',
      question:
        'What is the essential difference between a classical industrial robot and a collaborative robot (cobot)?',
      options: [
        'The cobot is necessarily more performant than the industrial robot.',
        'The industrial robot is designed to operate in an isolated zone (caged cell, physical separation from humans), while the cobot is designed to share its workspace with humans, with specific safety devices (force sensors, limited speeds, ISO/TS 15066 standards).',
        'The cobot only works with generative AI, the industrial robot does not.',
        'The industrial robot is always more costly than the cobot.',
      ],
      correctIndex: 1,
      explanation:
        "The classical industrial robot (ISO 10218 standard) is designed for raw performance — speed, precision, payload — but must be isolated by fencing or cell for safety reasons. The cobot (ISO/TS 15066 standard) is designed from the outset for coexistence with humans: contact-detecting sensors, limited force, adapted speed. This difference is not technical on the surface, it is structural: the cobot enables production configurations where humans remain central (assisted assembly, shared quality control), inaccessible to classical industrial robots. Review: §3.1.",
    },
    {
      kind: 'comprehension',
      question:
        'A modern robotic system combines three major capabilities. Which ones?',
      options: [
        'Programming, calculation, communication.',
        'Perception (sensors, vision, lidar), planning (reasoning about the action to perform), control (precise physical execution by actuators).',
        'Learning, generation, translation.',
        'Storage, processing, display.',
      ],
      correctIndex: 1,
      explanation:
        'Perception, planning, control constitute the fundamental chain of a modern robotic system. Perception transforms the physical world into digital representation (cameras, lidar, force sensors). Planning decides which action to perform (obstacle detection, trajectory choice, adaptation to the unexpected). Control executes this action via actuators (motors, grippers). Understanding these three pillars allows framing what is mature today (perception and control in structured environments) and what remains a challenge (planning in open, unpredictable environments). Review: §3.2.',
    },
    {
      kind: 'comprehension',
      question:
        "In the total cost of a robotics project in business, what is the typical share of integration (workstation study, custom mechanics, programming, commissioning, certification, training) compared to the cost of the robot itself?",
      options: [
        "Integration typically costs 10-20% of the robot's cost.",
        'Integration typically costs 50-70% of the total project cost, the robot itself 30-50%.',
        "Integration typically costs 100-200% of the robot's cost.",
        'Integration is negligible, the robot is most of the cost.',
      ],
      correctIndex: 1,
      explanation:
        "A best-practice rule observed in industry is that integration represents 50 to 70% of total cost of a robotics project in business — the robot itself is only 30 to 50%. Integration covers workstation study, custom mechanics (grippers, jigs, conveyors), trajectory programming, commissioning, safety certification, and team training. Underestimating this share is the main cause of economic failure of robotics projects. For the manager, the direct consequence is that comparing robot prices is misleading — what counts is the total cost. Review: §3.5.",
    },
    {
      kind: 'application',
      question:
        'A 50-employee food industry SME wants to automate a palletizing task at the end of the line. Which approach is most appropriate for a first project?',
      options: [
        'Invest in a high-performance industrial robot with complete caged cell.',
        'Evaluate a cobot with adapted gripper, on a circumscribed workstation, with safety study (ISO/TS 15066) and operator training — target a 18-36 month payback.',
        'Entrust the entire project to a SaaS robotics vendor.',
        'Give up on robotics and hire more operators.',
      ],
      correctIndex: 1,
      explanation:
        "For an SME discovering robotics, the cobot is typically more appropriate: lower initial investment cost, faster integration (no caged cell), reconfiguration possible for other workstations, sharing space with existing operators. The 18-36 month payback target reflects the real total cost (robot + integration + safety + training). The high-performance industrial robot (a) is oversized for this volume and complicates integration. Options c and d ignore the context. Review: §3.1, §3.5 and §4.1.",
    },
    {
      kind: 'application',
      question:
        'A logistics warehouse progressively automates its operations. Which human-robot combination is most defensible in initial framing?',
      options: [
        'Robotize everything to minimize payroll.',
        'Robotize repetitive low-value tasks (transport, simple picking), keep judgment tasks human (quality, exception, incident management), assist mixed tasks with exoskeletons or cobots — measure productivity per workstation and ergonomics for remaining humans.',
        'Keep everything human by precautionary principle.',
        'Choose a recognized robotics vendor and delegate all breakdown decisions to them.',
      ],
      correctIndex: 1,
      explanation:
        "Modern logistics illustrates Module 4's 'robotize / assist / leave human' matrix. Repetitive, predictable, low-value tasks are the best candidates for robotization (Amazon Robotics is the canonical example). Judgment, incident management and exceptions should be kept human. Mixed tasks benefit from assistance (cobot, exoskeleton). This combination is more defensible economically and socially than extremes. The success metric combines productivity and ergonomics — not just cost reduction. Review: §3.5 and §4.4.",
    },
    {
      kind: 'application',
      question:
        'A cobot project must be certified to operate alongside human operators. What are the two most critical safety deliverables to produce from the pilot phase?',
      options: [
        'A user manual in French and a marketing training.',
        'A risk analysis compliant with ISO/TS 15066 (force, speed, possible contact surfaces with humans measurement) and an operator training/certification plan including emergency stop and resume procedures.',
        "A financial audit of the cobot supplier and a benchmark of competitors.",
        'An internal communication plan and an external campaign budget.',
      ],
      correctIndex: 1,
      explanation:
        "Cobot safety certification rests on two deliverables: (1) a risk analysis compliant with ISO/TS 15066 that characterizes possible contact zones with humans, measures forces and speeds, and defines automatic stop thresholds; (2) an operator training and certification plan, including emergency stop, resume, and incident reporting procedures. Without these two deliverables, the cobot cannot be deployed in a human environment — it is a regulatory obligation, not an option. Other options are either off-topic or secondary. Review: §3.3 and §4.3.",
    },
    {
      kind: 'judgment',
      question:
        'A vendor presents you a "turnkey" collaborative robot that "programs itself by demonstration" and "works without team training". What is the right managerial reflex?',
      options: [
        "Buy quickly so as not to be left behind by competitors.",
        'Systematically refuse by precautionary principle.',
        'Request a POC on a real workstation in your organization, require an ISO/TS 15066 risk analysis from the supplier, verify that the announced total cost includes integration (50-70% of total), and anticipate team training need — the "no training" promise being a warning signal about lack of realism.',
        'Sign if the showroom demo is convincing.',
      ],
      correctIndex: 2,
      explanation:
        'The "turnkey / programming by demonstration / no training" promise is a typical warning signal. Three reasons: (1) any real robotic installation requires workstation study and specific integration (50-70% of cost); (2) human-machine safety cannot be delegated — the employer remains responsible for the ISO/TS 15066 risk analysis; (3) operators must be trained (procedures, emergency, incident reporting), it is a regulatory obligation. The right reflex combines real-case testing and verification of safety and cost commitments. Options a and d are rushed; option b is sterile blocking. Review: §4.1, §4.2 and §4.3.',
    },
  ],
};

export default quizModule4EN;
