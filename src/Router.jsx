import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Cookies from "js-cookie";
import { quizData } from "./components/DataProvider";
import Login from "./components/Login";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedRoute2 from "./ProtectedRoute2";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import MainPage from "./components/MainPage";
import StartQuiz from "./components/StartQuiz";
import QuizSection from "./components/QuizSection";

const quizCodes = quizData.map((quiz) => quiz.quizCode);
const getAccessToken = () => Cookies.get("accessToken");
const isAuthenticated = () => !!getAccessToken();
const isCodeValid = () => quizCodes.includes(Cookies.get("quiz-code"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    index: true,
  },
  {
    path: "/login",
    element: (
      <Login
        heading={"Log in to Quizizz"}
        para={""}
        bottomText={"Don't have an account?"}
        actionText={["Sign up", "/signup"]}
        bottomPara={false}
      />
    ),
    index: true,
  },
  {
    path: "/signup",
    element: <SignUp />,
    index: true,
  },
  {
    path: "/start",
    element: <StartQuiz />,
    index: true,
  },
  {
    element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
    children: [
      {
        path: "/main",
        element: <MainPage />,
      },
    ],
  },
  {
    element: <ProtectedRoute2 isCodeValid={isCodeValid} />,
    children: [
      {
        path: "/quiz",
        element: <QuizSection />,
      },
    ],
  },
  {
    path: "*",
    element: <p>Something went wrong ! Path doesn't exists !</p>,
  },
]);

export default router;
