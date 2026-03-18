import React from 'react';
function Card({ question, answer, showAnswer }) {
    return (
        <div className="card" role="region" aria-live="polite" aria-label="Flashcard">
            <div className="card-inner">
                {!showAnswer ? (
                    <div className="question">{question}</div>
                ) : (
                    <div className="answer">{answer}</div>
                )}
            </div>
        </div>
    );
}

export default Card;