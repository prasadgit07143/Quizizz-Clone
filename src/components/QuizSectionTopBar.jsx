import { memo } from "react";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMedal } from "@fortawesome/free-solid-svg-icons";

const QuizSectionTopBar = memo(
  ({ quizStarted = false, quizState = {}, totalQuestions = 0 }) => {
    const quizCode = Cookies.get("quiz-code") || "";
    const formattedQuizCode = `${quizCode.slice(
      0,
      quizCode.length / 2
    )} ${quizCode.slice(quizCode.length / 2)}`;

    const handleXmarkClick = () => {
      window.location.href = "/start";
    };

    return (
      <div className="quiz-section-top-bar font-quicksand">
        <div className="quiz-section-top-bar-content | flex">
          <div className="flex">
            <div
              onClick={handleXmarkClick}
              className="xmark-icon-container | flex"
            >
              <FontAwesomeIcon className="xmark-icon" icon={faXmark} />
            </div>
            {quizStarted && (
              <div className="question-number-box | flex">
                <span className="current-question">
                  {quizState.currentQuestionIndex + 1}/
                </span>
                <span className="total-questions">{totalQuestions}</span>
              </div>
            )}
          </div>
          <div className="quiz-section-top-bar-end | flex">
            <div className="medal-icon-container">
              <FontAwesomeIcon className="medal-icon" icon={faMedal} /> --{" "}
            </div>
            <div className="quiz-code">{formattedQuizCode}</div>
          </div>
        </div>
      </div>
    );
  }
);

QuizSectionTopBar.displayName = "QuizSectionTopBar";

export default QuizSectionTopBar;
