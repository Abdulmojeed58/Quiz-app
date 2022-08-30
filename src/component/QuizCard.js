import React from "react";

export default function QuizCard(prop) {
    return (
        <div className="quiz-card">
            <h3 className="question">
                {prop.question}
            </h3>
            <div className="options">
                {prop.options}
            </div>
        </div>
    )
}