import React, { useState, useCallback, useMemo } from "react";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotate,
  faVolumeHigh,
  faFaceGrinTears,
  faDrum,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import QuizSectionTopBar from "./QuizSectionTopBar";

const ToggleButton = React.memo(({ isActive, onClick }) => (
  <div
    className={`toggle-wrapper ${isActive ? "active" : ""}`}
    onClick={onClick}
  >
    <button className="toggle-button" />
  </div>
));

const Setting = React.memo(
  ({ icon, label, isActive, onToggle, grouped = false }) => (
    <div
      className={!grouped ? "quiz-setting | flex" : "quiz-setting-grouped flex"}
    >
      <div>
        <FontAwesomeIcon icon={icon} />
        <span>{label}</span>
      </div>
      <ToggleButton isActive={isActive} onClick={onToggle} />
    </div>
  )
);

const QuizSectionWelcome = React.memo(({ onStartQuiz }) => {
  const [quizName, setQuizName] = useState(
    () => Cookies.get("nameOfUser") || ""
  );
  const [settings, setSettings] = useState({
    readAloud: false,
    memes: false,
    soundEffects: false,
  });

  const handleChange = useCallback((e) => setQuizName(e.target.value), []);

  const toggleSetting = useCallback((setting) => {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }));
  }, []);

  const handleStartQuiz = useCallback(() => {
    Cookies.set("nameOfUser", quizName);
    onStartQuiz();
  }, [quizName, onStartQuiz]);

  return (
    <section className="quiz-section-welcome-wrapper font-quicksand">
      <QuizSectionTopBar />
      <div className="quiz-section-main | flex">
        <div className="quiz-section-main-wrapper | flex">
          <div className="quiz-section-main-wrapper-top | flex">
            <div className="quizizz-name-box | flex">
              <span>Your Quizizz name is...</span>
              <FontAwesomeIcon icon={faCircleInfo} />
            </div>
            <div className="name-input-wrapper | flex">
              <input
                onChange={handleChange}
                placeholder="Enter your name"
                className="font-quicksand"
                type="text"
                value={quizName}
              />
              <button className="refresh-button">
                <FontAwesomeIcon className="refresh-icon" icon={faRotate} />
              </button>
            </div>
            <button
              onClick={handleStartQuiz}
              className="start-button grey-button"
            >
              Start
            </button>
          </div>
          <div className="quiz-section-main-wrapper-bottom | flex">
            <span className="text-settings">Settings</span>
            <div className="quiz-settings-wrapper quiz-settings-container | flex">
              <Setting
                icon={faVolumeHigh}
                label="Read text aloud"
                isActive={settings.readAloud}
                onToggle={() => toggleSetting("readAloud")}
              />
              <div className="quiz-settings-container | flex">
                <div className="quiz-setting">
                  <Setting
                    icon={faFaceGrinTears}
                    label="Memes"
                    isActive={settings.memes}
                    onToggle={() => toggleSetting("memes")}
                    grouped={true}
                  />
                  <Setting
                    icon={faDrum}
                    label="Sound effects"
                    isActive={settings.soundEffects}
                    onToggle={() => toggleSetting("soundEffects")}
                    grouped={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ToggleButton.displayName = "ToggleButton";
Setting.displayName = "Setting";
QuizSectionWelcome.displayName = "QuizSectionWelcome";

export default QuizSectionWelcome;
