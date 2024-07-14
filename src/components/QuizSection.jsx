import React, { useState, useCallback, useEffect, useMemo } from "react";
import { quizData } from "./DataProvider";
import Cookies from "js-cookie";
import QuizQuestion from "./QuizQuestion";
import QuizSectionTopBar from "./QuizSectionTopBar";
import QuizSectionWelcome from "./QuizSectionWelcome";
import QuizSummary from "./QuizSummary";

const getInitialQuizState = (started) => ({
  started,
  ended: false,
  currentQuestionIndex: 0,
  score: 0,
  streak: 0,
  correctAnswers: 0,
  totalTime: 0,
  startTime: Date.now(),
});

const updateQuizState = (prevState, isCorrect, questionTime) => ({
  ...prevState,
  totalTime: prevState.totalTime + questionTime,
  score: isCorrect ? prevState.score + 236 : prevState.score,
  streak: isCorrect ? prevState.streak + 1 : 0,
  correctAnswers: isCorrect
    ? prevState.correctAnswers + 1
    : prevState.correctAnswers,
});

const updateSessionStorageAndCookies = (state, totalQuestions) => {
  const { score, streak, correctAnswers, totalTime, currentQuestionIndex } =
    state;
  const accuracy =
    totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;
  const averageTimePerQuestion =
    currentQuestionIndex > 0 ? totalTime / currentQuestionIndex : 0;

  const updateValue = (key, value) => {
    sessionStorage.setItem(key, value.toString());
    Cookies.set(key, value.toString());
  };

  updateValue("score", score);
  updateValue("streak", streak);
  updateValue("correctAnswers", correctAnswers);
  updateValue("totalQuestions", totalQuestions);
  updateValue("averageTimePerQuestion", averageTimePerQuestion.toFixed(2));
  updateValue("accuracy", accuracy.toFixed(0));
};

const QuizSection = () => {
  const [isQuizInProgress, setIsQuizInProgress] = useState(
    () => sessionStorage.getItem("quizInProgress") === "true"
  );
  const [bgClass, setBgClass] = useState(null);

  const quizQuestions = useMemo(() => {
    const quizCode = Cookies.get("quiz-code");
    return (
      quizData.find((quiz) => quiz.quizCode === quizCode)?.quizQuestions || []
    );
  }, []);

  const [quizState, setQuizState] = useState(() => {
    if (isQuizInProgress) {
      const storedState = sessionStorage.getItem("quizState");
      return storedState ? JSON.parse(storedState) : getInitialQuizState(true);
    }
    return getInitialQuizState(false);
  });

  useEffect(() => {
    if (quizState.started && !quizState.ended) {
      sessionStorage.setItem("quizInProgress", "true");
      sessionStorage.setItem("quizState", JSON.stringify(quizState));
    } else if (quizState.ended) {
      sessionStorage.removeItem("quizInProgress");
      sessionStorage.removeItem("quizState");
    }
  }, [quizState]);

  const handleQuestionComplete = useCallback(
    (isCorrect) => {
      setBgClass(isCorrect ? "correct-bg" : "wrong-bg");
      const questionTime = (Date.now() - quizState.startTime) / 1000;

      setQuizState((prevState) => {
        const newState = updateQuizState(prevState, isCorrect, questionTime);
        updateSessionStorageAndCookies(newState, quizQuestions.length);
        return newState;
      });

      setTimeout(() => {
        setQuizState((prevState) => {
          if (prevState.currentQuestionIndex < quizQuestions.length - 1) {
            setBgClass(null);
            return {
              ...prevState,
              currentQuestionIndex: prevState.currentQuestionIndex + 1,
              startTime: Date.now(),
            };
          } else {
            return { ...prevState, ended: true };
          }
        });
      }, 3000);
    },
    [quizState.startTime, quizQuestions.length]
  );

  useEffect(() => {
    if (quizState.ended) {
      updateSessionStorageAndCookies(quizState, quizQuestions.length);
    }
  }, [quizState.ended, quizState, quizQuestions.length]);

  const currentQuestion = useMemo(
    () => quizQuestions[quizState.currentQuestionIndex],
    [quizQuestions, quizState.currentQuestionIndex]
  );

  if (!quizState.started) {
    return (
      <QuizSectionWelcome
        onStartQuiz={() => {
          setIsQuizInProgress(true);
          setQuizState((prev) => ({ ...prev, started: true }));
        }}
      />
    );
  }

  if (quizState.ended) {
    return <QuizSummary />;
  }

  return (
    <section className="quiz-section font-quicksand">
      <QuizSectionTopBar
        quizStarted={quizState.started}
        quizState={quizState}
        totalQuestions={quizQuestions.length}
      />
      <div className="quiz-question-main-wrapper">
        {currentQuestion && (
          <QuizQuestion
            key={quizState.currentQuestionIndex}
            question={currentQuestion.question}
            options={currentQuestion.options}
            correctOptionNumber={currentQuestion.correctOption}
            onQuestionComplete={handleQuestionComplete}
          />
        )}
      </div>
      <div
        className={`quiz-section-bottom-wrapper${bgClass ? ` ${bgClass}` : ""}`}
      >
        <div className="quiz-section-bottom | flex">
          <img src="/src/assets/media/bl_bucket_hat.svg" alt="User avatar" />
          <p>
            {Cookies.get("nameOfUser")?.split(" ")[0] || ""}
            <br />
            {Cookies.get("nameOfUser")?.split(" ")[1] || ""}
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
