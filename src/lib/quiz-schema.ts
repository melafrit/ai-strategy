/**
 * src/lib/quiz-schema.ts
 *
 * Canonical schema for quiz data across the site.
 *
 * This module is the single source of truth for the shape of a quiz —
 * consumed today by <QuizPlaceholder /> (Astro server-rendered, static
 * placeholder mode) and consumed in Phase 5 by <Quiz /> (React island
 * with localStorage persistence, scoring, immediate feedback).
 *
 * The schema is intentionally minimal and stable:
 *   - All quiz data lives in module page frontmatter or a sibling .ts
 *   - Both Astro and React components import these types
 *   - Phase 5 React island can be slot-replaced into module pages with
 *     zero content rewriting
 *
 * Conventions:
 *   - 7 questions per module is the default (cf. charte de cadrage §6)
 *   - 4 options per question (A-D)
 *   - Exactly one correct answer per question
 *   - Question kinds map to Bloom levels:
 *       'comprehension' → Comprendre, Connaître
 *       'application'   → Appliquer, Analyser
 *       'judgment'      → Évaluer, Juger
 *   - Explanations are mandatory in production (provide pedagogical value
 *     beyond knowing the right answer)
 */

/** Question kinds, aligned with the 3 Bloom-level groupings used on the site. */
export type QuestionKind = 'comprehension' | 'application' | 'judgment';

/** A single quiz question. */
export interface QuizQuestion {
  /** Free text — the question as shown to the learner. */
  question: string;
  /** Always 4 options for this site's convention. */
  options: [string, string, string, string];
  /** Index (0-based, 0..3) of the correct option. */
  correctIndex: 0 | 1 | 2 | 3;
  /** Pedagogical explanation shown after answering. Mandatory in production. */
  explanation: string;
  /** Question kind — drives the displayed chip and Bloom-level reporting. */
  kind: QuestionKind;
}

/**
 * A scoring band maps a score range to a label and a pedagogical
 * interpretation. Bands MUST partition the [0, totalQuestions] range
 * without overlap.
 *
 * Example for 7 questions:
 *   [
 *     { min: 0, max: 3, label: '...', interpretation: '...' },
 *     { min: 4, max: 5, label: '...', interpretation: '...' },
 *     { min: 6, max: 7, label: '...', interpretation: '...' },
 *   ]
 */
export interface ScoringBand {
  min: number;
  max: number;
  label: string;
  interpretation: string;
}

/** A complete quiz. */
export interface Quiz {
  /** Unique identifier (kebab-case). E.g. "module-1-introduction-ia". */
  id: string;
  /** Display title. E.g. "Quiz — Module 1 : Introduction à l'IA". */
  title: string;
  /** Optional 1-2 sentence intro shown above the questions. */
  intro?: string;
  /** Questions in display order. */
  questions: QuizQuestion[];
  /** Optional scoring guidance bands. Recommended for formative quizzes. */
  scoringBands?: ScoringBand[];
}

// ===========================================================================
// Phase 5 — React island contract (forward-compat documentation)
// ===========================================================================
//
// When the React Quiz island lands in Phase 5, it will accept the same
// `Quiz` object as a single prop:
//
//   import quiz from './quiz.json' assert { type: 'json' };
//   <Quiz client:load quiz={quiz} />
//
// Persistence:
//   - localStorage key:   `quiz:${quiz.id}`
//   - localStorage value: JSON of QuizState (see below)
//   - localStorage scope: per-browser, per-domain
//   - localStorage size:  < 5 KB per quiz (well within 5-10 MB browser limit)
//
// State shape (forward-compat — DO NOT consume yet, declared here so that
// Module page authors can be confident the migration won't break content):

export interface QuizAttempt {
  /** ISO date string of the attempt. */
  startedAt: string;
  /** ISO date string of completion (undefined while in progress). */
  completedAt?: string;
  /** Per-question chosen option index, indexed by question position. */
  answers: (0 | 1 | 2 | 3 | null)[];
  /** Final score (computed after all questions answered). */
  score?: number;
  /** Score band label (computed from scoringBands at completion). */
  scoreBand?: string;
}

export interface QuizState {
  /** Schema version — bumped if breaking changes. */
  version: 1;
  /** Quiz id this state belongs to. */
  quizId: string;
  /** All attempts, oldest first. */
  attempts: QuizAttempt[];
}

// ===========================================================================
// Helpers
// ===========================================================================

/**
 * Find which scoring band a score falls into.
 *
 * Returns `null` if no band matches (caller should treat that as a bug — the
 * bands should always partition [0, totalQuestions]).
 */
export function findScoringBand(score: number, bands: ScoringBand[]): ScoringBand | null {
  for (const band of bands) {
    if (score >= band.min && score <= band.max) return band;
  }
  return null;
}

/**
 * Validate that a Quiz has consistent shape. Used by tests in Phase 5.
 * Returns an array of human-readable issues (empty if all good).
 */
export function validateQuiz(quiz: Quiz): string[] {
  const issues: string[] = [];
  if (!quiz.id) issues.push('quiz.id is required');
  if (!quiz.title) issues.push('quiz.title is required');
  if (!quiz.questions || quiz.questions.length === 0) {
    issues.push('quiz.questions cannot be empty');
  }

  quiz.questions.forEach((q, i) => {
    if (!q.question) issues.push(`question[${i}].question is required`);
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      issues.push(`question[${i}] must have exactly 4 options`);
    }
    if (q.correctIndex < 0 || q.correctIndex > 3) {
      issues.push(`question[${i}].correctIndex must be 0..3`);
    }
    if (!q.explanation) {
      issues.push(`question[${i}].explanation is required (pedagogical convention)`);
    }
  });

  if (quiz.scoringBands && quiz.scoringBands.length > 0) {
    const total = quiz.questions.length;
    // Sort bands by min ascending, check they partition [0, total]
    const sorted = [...quiz.scoringBands].sort((a, b) => a.min - b.min);
    let expected = 0;
    for (const band of sorted) {
      if (band.min !== expected) {
        issues.push(
          `scoringBands gap or overlap: expected min=${expected}, got min=${band.min}`,
        );
      }
      if (band.max < band.min) {
        issues.push(`scoringBand has max < min: ${band.label}`);
      }
      expected = band.max + 1;
    }
    if (expected !== total + 1) {
      issues.push(
        `scoringBands do not cover up to ${total}: last covered = ${expected - 1}`,
      );
    }
  }

  return issues;
}
