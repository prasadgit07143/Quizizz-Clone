import React, { useMemo, useCallback } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import QuizSectionTopBar from "./QuizSectionTopBar";

const PerformanceBox = React.memo(({ value, label }) => (
  <div className="performance-stats-box | flex">
    <span className="performance-value">{value}</span>
    <span className="performance-key">{label}</span>
  </div>
));

const QuizSummary = () => {
  const navigate = useNavigate();

  const cookieData = useMemo(
    () => ({
      nameOfUser: Cookies.get("nameOfUser") || "",
      accuracy: Cookies.get("accuracy") || "0",
      score: Cookies.get("score") || "0",
      correctAnswers: parseInt(Cookies.get("correctAnswers") || "0", 10),
      totalQuestions: parseInt(Cookies.get("totalQuestions") || "0", 10),
      averageTimePerQuestion: parseFloat(
        Cookies.get("averageTimePerQuestion") || "0"
      ),
      streak: Cookies.get("streak") || "0",
    }),
    []
  );

  const incorrectAnswers = useMemo(
    () => cookieData.totalQuestions - cookieData.correctAnswers,
    [cookieData]
  );

  const handlePlayAgain = useCallback(() => window.location.reload(), []);

  const handleFindNewQuiz = useCallback(() => {
    Cookies.remove("quiz-code");
    navigate("/start");
  }, [navigate]);

  return (
    <>
      <QuizSectionTopBar />
      <section className="quiz-summary-section font-quicksand">
        <div className="quiz-summary-container | flex">
          <div className="quiz-summary-header | flex">
            <p>Summary</p>
            <div className="solo-review-wrapper | flex">
              <span>Solo review</span>
            </div>
          </div>
          <div className="quiz-summary-content">
            <div className="quiz-summary-profile">
              <div className="quiz-summary-profile-header">
                <span>Keep the Winning Streak Alive!</span>
              </div>
              <div className="quiz-summary-profile-content | flex">
                <div className="flex">
                  <span>{cookieData.nameOfUser}</span>
                </div>
                <div className="flex">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="accuracy-wrapper | flex">
              <span className="accuracy-text">Accuracy</span>
              <div className="accuracy-bar">
                <div
                  className="accuracy-bar-inner"
                  style={{ width: `${cookieData.accuracy}%` }}
                >
                  <span>{cookieData.accuracy}%</span>
                </div>
              </div>
            </div>
            <div className="score-wrapper | flex">
              <div className="score-container | flex">
                <span>Score</span>
                <span>{cookieData.score}</span>
              </div>
              <div className="score-icon-box">
                <FontAwesomeIcon icon={faCoins} />
              </div>
            </div>
            <div className="quiz-buttons-wrapper | flex">
              <button onClick={handlePlayAgain} className="purple-button">
                Play again
              </button>
              <button onClick={handleFindNewQuiz} className="grey-button">
                Find a new quiz
              </button>
            </div>
            <div className="performance-stats-wrapper">
              <span className="performance-stats-text">Performance stats</span>
              <div className="performance-stats-container | flex">
                <div className="performance-stats-container-top | flex">
                  <PerformanceBox
                    value={cookieData.correctAnswers}
                    label="Correct"
                  />
                  <PerformanceBox value={0} label="Partially correct" />
                  <PerformanceBox value={incorrectAnswers} label="Incorrect" />
                </div>
                <div className="performance-stats-container-bottom | flex">
                  <PerformanceBox
                    value={`${cookieData.averageTimePerQuestion} s`}
                    label="Time/ques"
                  />
                  <PerformanceBox value={cookieData.streak} label="Streak" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

PerformanceBox.displayName = "PerformanceBox";

export default React.memo(QuizSummary);
