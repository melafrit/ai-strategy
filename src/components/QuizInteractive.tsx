/**
 * src/components/QuizInteractive.tsx
 *
 * React island for formative quizzes. Replaces QuizPlaceholder in module
 * pages — same data shape (Quiz from src/lib/quiz-schema.ts), interactive
 * features added.
 *
 * Features:
 *   - Per-question radio selection
 *   - Reveal-on-submit: immediate feedback (correct/incorrect + explanation)
 *   - Progress indicator (X answered / N revealed / total)
 *   - Final score with scoring band interpretation
 *   - localStorage persistence per quiz id (key: "ai-strategy:quiz:{id}")
 *   - Reset button
 *   - Keyboard navigation (radio inputs + native focus)
 *   - Graceful SSR (renders sensible initial state without JS)
 *
 * Hydration: use client:visible for lazy hydration when the user scrolls
 * to the quiz section. This avoids paying the React bundle cost on pages
 * where the user never reaches the quiz.
 */

import { useEffect, useState, useCallback, useId } from 'react';
import type { QuizQuestion, ScoringBand } from '@/lib/quiz-schema';

interface Props {
  /** Anchor id (kebab-case). Also used as the localStorage key suffix. */
  id: string;
  /** Quiz title (e.g. "Quiz formatif — Module 1"). */
  title: string;
  /** Optional 1-2 sentence intro shown above the questions. */
  intro?: string;
  /** Questions in display order. */
  questions: QuizQuestion[];
  /**
   * Optional scoring bands shown above the questions and re-shown after
   * full completion with the matched interpretation highlighted.
   */
  scoringBands?: ScoringBand[];
  /** Optional className for the root section. */
  className?: string;
}

interface QuizState {
  /** For each question: -1 = not yet answered, 0..3 = chosen index. */
  answers: number[];
  /** For each question: has the user revealed the answer (clicked submit)? */
  revealed: boolean[];
}

const KIND_LABELS: Record<QuizQuestion['kind'], string> = {
  comprehension: 'Compréhension',
  application: 'Application',
  judgment: 'Jugement',
};

function makeInitialState(count: number): QuizState {
  return {
    answers: Array(count).fill(-1),
    revealed: Array(count).fill(false),
  };
}

function loadState(quizId: string, count: number): QuizState {
  if (typeof window === 'undefined') return makeInitialState(count);
  try {
    const raw = window.localStorage.getItem(`ai-strategy:quiz:${quizId}`);
    if (!raw) return makeInitialState(count);
    const parsed = JSON.parse(raw) as Partial<QuizState>;
    if (
      !Array.isArray(parsed.answers) ||
      !Array.isArray(parsed.revealed) ||
      parsed.answers.length !== count ||
      parsed.revealed.length !== count
    ) {
      return makeInitialState(count);
    }
    return parsed as QuizState;
  } catch {
    return makeInitialState(count);
  }
}

function saveState(quizId: string, state: QuizState): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(
      `ai-strategy:quiz:${quizId}`,
      JSON.stringify(state)
    );
  } catch {
    // Quota exceeded or storage disabled — fail silently.
  }
}

function deleteState(quizId: string): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(`ai-strategy:quiz:${quizId}`);
  } catch {
    // ignore
  }
}

export default function QuizInteractive({
  id,
  title,
  intro,
  questions,
  scoringBands,
  className,
}: Props) {
  const componentId = useId();
  const total = questions.length;
  const [state, setState] = useState<QuizState>(() => makeInitialState(total));
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage after mount.
  useEffect(() => {
    setState(loadState(id, total));
    setHydrated(true);
  }, [id, total]);

  // Persist on each state change (after hydration).
  useEffect(() => {
    if (!hydrated) return;
    saveState(id, state);
  }, [hydrated, id, state]);

  const onPick = useCallback(
    (qIdx: number, optIdx: number) => {
      setState((prev) => {
        if (prev.revealed[qIdx]) return prev; // already revealed, no change
        const answers = [...prev.answers];
        answers[qIdx] = optIdx;
        return { ...prev, answers };
      });
    },
    []
  );

  const onSubmit = useCallback(
    (qIdx: number) => {
      setState((prev) => {
        if (prev.revealed[qIdx]) return prev;
        if (prev.answers[qIdx] === -1) return prev; // nothing picked
        const revealed = [...prev.revealed];
        revealed[qIdx] = true;
        return { ...prev, revealed };
      });
      // After the DOM updates, focus the feedback region so screen readers
      // announce it, and scroll it gently into view. Using rAF lets React
      // commit the state change first.
      if (typeof window !== 'undefined') {
        requestAnimationFrame(() => {
          const el = document.getElementById(
            `${componentId}-q${qIdx}-feedback`
          );
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            el.focus({ preventScroll: true });
          }
        });
      }
    },
    [componentId]
  );

  /**
   * Per-question keyboard shortcuts:
   * - Digits 1-4 pick the corresponding option
   * - Enter validates if not yet revealed
   * The handler is attached on each <li> via onKeyDown — it only fires when
   * the question (or one of its descendants) has focus, so it cannot steal
   * keystrokes from outside the quiz.
   */
  const handleQuestionKeyDown = useCallback(
    (qIdx: number) => (e: React.KeyboardEvent<HTMLLIElement>) => {
      if (state.revealed[qIdx]) return; // no-op once revealed
      // Skip if the user is typing in an input/textarea (none here today,
      // but defensive against future enrichment).
      const tag = (e.target as HTMLElement).tagName;
      if (tag === 'TEXTAREA' || (tag === 'INPUT' && (e.target as HTMLInputElement).type === 'text')) {
        return;
      }
      // Digits 1..4 → pick option (no modifiers)
      if (!e.ctrlKey && !e.metaKey && !e.altKey) {
        if (e.key >= '1' && e.key <= '4') {
          e.preventDefault();
          onPick(qIdx, parseInt(e.key, 10) - 1);
          return;
        }
        // Enter validates — but only if a pick is made and the focused element
        // is not the validate button itself (which already submits via click).
        if (e.key === 'Enter') {
          const focused = document.activeElement as HTMLElement | null;
          const isButton = focused?.tagName === 'BUTTON';
          if (!isButton && state.answers[qIdx] !== -1) {
            e.preventDefault();
            onSubmit(qIdx);
          }
        }
      }
    },
    [onPick, onSubmit, state.answers, state.revealed]
  );

  const onReset = useCallback(() => {
    if (typeof window !== 'undefined') {
      const ok = window.confirm(
        'Réinitialiser ce quiz ? Vos réponses seront effacées.'
      );
      if (!ok) return;
    }
    setState(makeInitialState(total));
    deleteState(id);
  }, [id, total]);

  // Derived stats
  const answeredCount = state.answers.filter((a) => a !== -1).length;
  const revealedCount = state.revealed.filter(Boolean).length;
  const allRevealed = revealedCount === total && total > 0;
  const score = state.revealed.reduce((acc, r, i) => {
    if (!r) return acc;
    return acc + (state.answers[i] === questions[i].correctIndex ? 1 : 0);
  }, 0);
  const matchedBand = allRevealed
    ? scoringBands?.find((b) => score >= b.min && score <= b.max)
    : undefined;

  return (
    <section
      id={id}
      className={`ai-quiz ${className ?? ''}`.trim()}
      aria-labelledby={`${componentId}-title`}
    >
      <header className="ai-quiz__header">
        <h3 id={`${componentId}-title`} className="ai-quiz__title">
          {title}
        </h3>
        {intro && <p className="ai-quiz__intro">{intro}</p>}

        <div className="ai-quiz__progress" aria-live="polite">
          <span className="ai-quiz__progress-label">
            Progression :
          </span>{' '}
          <strong>
            {revealedCount} / {total} révélées
          </strong>{' '}
          ·{' '}
          <span className="ai-quiz__progress-pending">
            {answeredCount - revealedCount > 0
              ? `${answeredCount - revealedCount} en attente de validation`
              : answeredCount === total
                ? 'toutes répondues'
                : `${total - answeredCount} restantes`}
          </span>
          {hydrated && (
            <span className="ai-quiz__progress-saved" title="Vos réponses sont sauvegardées localement dans ce navigateur">
              {' '}· Sauvegardé local
            </span>
          )}
        </div>

        {hydrated && !allRevealed && (
          <p className="ai-quiz__kbd-hint">
            <span aria-hidden="true">⌨️</span> Astuce clavier — utilisez{' '}
            <kbd>1</kbd> à <kbd>4</kbd> pour choisir une option et{' '}
            <kbd>Entrée</kbd> pour valider la question.
          </p>
        )}
      </header>

      {/* Scoring bands preview (always visible — auto-opens at completion) */}
      {scoringBands && scoringBands.length > 0 && (
        <details className="ai-quiz__bands-preview" open={allRevealed}>
          <summary>
            {allRevealed
              ? 'Échelle de scoring (votre niveau atteint est mis en évidence)'
              : 'Échelle de scoring (à titre indicatif)'}
          </summary>
          <ul className="ai-quiz__bands-list">
            {scoringBands.map((b) => (
              <li
                key={`${b.min}-${b.max}`}
                className={
                  matchedBand && b === matchedBand
                    ? 'ai-quiz__band ai-quiz__band--matched'
                    : 'ai-quiz__band'
                }
              >
                <strong>
                  {b.min === b.max
                    ? `${b.min}/${total}`
                    : `${b.min}-${b.max}/${total}`}
                  {' — '}
                  {b.label}
                </strong>
              </li>
            ))}
          </ul>
        </details>
      )}

      {/* Questions */}
      <ol className="ai-quiz__questions">
        {questions.map((q, qIdx) => {
          const picked = state.answers[qIdx];
          const revealed = state.revealed[qIdx];
          const isCorrect = revealed && picked === q.correctIndex;
          const groupName = `${componentId}-q${qIdx}`;
          return (
            <li
              key={qIdx}
              className={`ai-quiz__question ${
                revealed
                  ? isCorrect
                    ? 'ai-quiz__question--correct'
                    : 'ai-quiz__question--incorrect'
                  : ''
              }`}
              onKeyDown={handleQuestionKeyDown(qIdx)}
            >
              <header className="ai-quiz__question-head">
                <span className="ai-quiz__question-number">
                  Q{qIdx + 1}
                </span>
                <span
                  className={`ai-quiz__kind ai-quiz__kind--${q.kind}`}
                  aria-label={`Type : ${KIND_LABELS[q.kind]}`}
                >
                  {KIND_LABELS[q.kind]}
                </span>
              </header>

              <p className="ai-quiz__question-text">{q.question}</p>

              <fieldset
                className="ai-quiz__options"
                disabled={revealed}
                aria-describedby={revealed ? `${componentId}-q${qIdx}-feedback` : undefined}
              >
                <legend className="ai-quiz__sr-only">
                  Options de réponse
                </legend>
                {q.options.map((opt, oIdx) => {
                  const inputId = `${groupName}-opt${oIdx}`;
                  const isPicked = picked === oIdx;
                  const isAnswer = oIdx === q.correctIndex;
                  let optClass = 'ai-quiz__option';
                  if (revealed) {
                    if (isAnswer) optClass += ' ai-quiz__option--answer';
                    else if (isPicked) optClass += ' ai-quiz__option--wrong';
                  } else if (isPicked) {
                    optClass += ' ai-quiz__option--picked';
                  }
                  return (
                    <label key={oIdx} className={optClass} htmlFor={inputId}>
                      <input
                        type="radio"
                        id={inputId}
                        name={groupName}
                        value={oIdx}
                        checked={isPicked}
                        onChange={() => onPick(qIdx, oIdx)}
                      />
                      <span className="ai-quiz__option-letter">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span className="ai-quiz__option-text">{opt}</span>
                      {revealed && isAnswer && (
                        <span className="ai-quiz__option-mark" aria-label="Bonne réponse">
                          ✓
                        </span>
                      )}
                      {revealed && isPicked && !isAnswer && (
                        <span className="ai-quiz__option-mark" aria-label="Réponse incorrecte">
                          ✗
                        </span>
                      )}
                    </label>
                  );
                })}
              </fieldset>

              {!revealed && (
                <button
                  type="button"
                  className="ai-quiz__submit"
                  onClick={() => onSubmit(qIdx)}
                  disabled={picked === -1}
                >
                  Valider ma réponse
                </button>
              )}

              {revealed && (
                <div
                  id={`${componentId}-q${qIdx}-feedback`}
                  tabIndex={-1}
                  className={`ai-quiz__feedback ${
                    isCorrect
                      ? 'ai-quiz__feedback--correct'
                      : 'ai-quiz__feedback--incorrect'
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  <p className="ai-quiz__feedback-verdict">
                    {isCorrect ? '✓ Bonne réponse.' : '✗ Réponse incorrecte.'}
                  </p>
                  <p className="ai-quiz__feedback-explanation">
                    <strong>Explication : </strong>
                    {q.explanation}
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ol>

      {/* Final score */}
      {allRevealed && (
        <footer className="ai-quiz__final">
          <h4 className="ai-quiz__final-title">Score final</h4>
          <p className="ai-quiz__final-score">
            <strong>
              {score} / {total}
            </strong>
            {matchedBand && (
              <>
                {' '}— <em>{matchedBand.label}</em>
              </>
            )}
          </p>
          {matchedBand && (
            <p className="ai-quiz__final-interpretation">
              {matchedBand.interpretation}
            </p>
          )}
          <button
            type="button"
            className="ai-quiz__reset"
            onClick={onReset}
          >
            Réinitialiser le quiz
          </button>
        </footer>
      )}

      {/* Reset always available if any progress */}
      {!allRevealed && revealedCount > 0 && (
        <div className="ai-quiz__reset-row">
          <button
            type="button"
            className="ai-quiz__reset ai-quiz__reset--inline"
            onClick={onReset}
          >
            Recommencer
          </button>
        </div>
      )}
    </section>
  );
}
