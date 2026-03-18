import React, { useState, useMemo } from 'react';
import Card from './Card.jsx';
/*
Pre-defined flashcards data
Add or edit cards here. Each card is { question, answer }
*/
const FLASHCARDS = [
    {
        question: 'What is the difference between var, let, and const?',
        answer:
            'In JavaScript, var is function-scoped and can be re-declared; let and const are block-scoped, with let allowing re-assignment and const preventing it. However, const objects can have their contents modified.',
    },
    {
        question: 'What is a closure in JavaScript?',
        answer:
            'A closure is a function that has access to variables from its outer (enclosing) scope, even after the outer function has returned. It "closes over" those variables.',
    },
    {
        question: 'What is the event loop?',
        answer:
            'The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading work (like I/O) and executing callbacks when the stack is empty. It processes the call stack and task queues.',
    },
    {
        question: 'What does "this" refer to in JavaScript?',
        answer:
            'Value of "this" depends on how the function is called: object method -> the object; standalone function -> undefined in strict mode (window in non-strict); arrow functions inherit "this" from their surrounding scope.',
    },
    {
        question: 'What is the difference between == and ===?',
        answer:
            '== performs type coercion before comparing (loose equality). === checks both value and type (strict equality) without coercion.',
    },
];

function Flashcards() {
    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const total = FLASHCARDS.length;
    const progressPercent = useMemo(() => Math.round(((index + 1) / total) * 100), [index, total]);

    function goNext() {
        setShowAnswer(false);
        setIndex((prev) => (prev + 1) % total); // cycle to start
    }

    function goPrev() {
        setShowAnswer(false);
        setIndex((prev) => (prev - 1 + total) % total);
    }

    function toggleAnswer() {
        setShowAnswer((s) => !s);
    }

    const current = FLASHCARDS[index];

    return (
        <>
            <div className="progress-container" aria-hidden>
                <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={progressPercent}>
                    <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
                </div>
                <div style={{ minWidth: 56, textAlign: 'center', color: '#333' }}>{progressPercent}%</div>
                <div className="progress-meta">{index + 1} of {total}</div>
            </div>

            handlebars
            <Card
                question={current.question}
                answer={current.answer}
                showAnswer={showAnswer}
            />

            <div className="card-controls" style={{ marginTop: 10 }}>
                <button className="btn" onClick={goPrev} aria-label="Previous card">‹ Previous</button>
                <button className="btn secondary" onClick={toggleAnswer} aria-pressed={showAnswer}>
                    {showAnswer ? 'Hide Answer' : 'Show Answer'}
                </button>
                <button className="btn" onClick={goNext} aria-label="Next card">Next ›</button>
            </div>
        </>

    );
}

export default Flashcards;