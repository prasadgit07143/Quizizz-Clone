import React, { useState, useCallback } from "react";
import QuizOption from "./QuizOption";

const QuizQuestion = React.memo(
  ({ question, options = [], correctOptionNumber, onQuestionComplete }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = useCallback(
      (selectedOptionNumber) => {
        setSelectedOption(selectedOptionNumber);
        onQuestionComplete(selectedOptionNumber === correctOptionNumber);
      },
      [correctOptionNumber, onQuestionComplete]
    );

    return (
      <section className="quiz-question-wrapper font-quicksand">
        <div className="quiz-question-container | flex">
          <div className="quiz-question-box | flex">
            <p className="quiz-question">{question}</p>
          </div>
          <div className="quiz-options-wrapper | flex">
            {options.map((option, index) => (
              <QuizOption
                key={index}
                optionNumber={index + 1}
                value={option}
                correctOptionNumber={correctOptionNumber}
                setSelectedOption={handleOptionSelect}
                isVisible={
                  selectedOption === null || selectedOption === index + 1
                }
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
);

QuizQuestion.displayName = "QuizQuestion";

export default QuizQuestion;
