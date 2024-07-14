import React, { useState, useCallback } from "react";

const QuizOption = React.memo(
  ({
    optionNumber,
    value,
    correctOptionNumber,
    setSelectedOption,
    isVisible,
  }) => {
    const [optionState, setOptionState] = useState("default");

    const handleClick = useCallback(() => {
      const newState =
        optionNumber === correctOptionNumber ? "correct" : "wrong";
      setOptionState(newState);
      setSelectedOption(optionNumber);
    }, [optionNumber, correctOptionNumber, setSelectedOption]);

    const optionClass = `
    quiz-option-container 
    option-bg-${optionNumber}
    ${optionState === "correct" ? "correct-option-bg" : ""}
    ${optionState === "wrong" ? "wrong-option-bg" : ""}
    ${!isVisible ? "option-hidden" : ""}
  `.trim();

    return (
      <div onClick={handleClick} className={optionClass}>
        <div className="quiz-option | flex">
          <span className={`option-bg-${optionNumber} | flex`}>
            {optionNumber}
          </span>
          <p>{value}</p>
        </div>
      </div>
    );
  }
);

QuizOption.displayName = "QuizOption";

export default QuizOption;
