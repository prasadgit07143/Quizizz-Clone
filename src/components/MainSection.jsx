import React from "react";
import MainNav from "./MainNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import MainContent from "./MainContent";

const subjects = [
  { src: "/src/assets/media/subject1.png", name: "Career Ed" },
  { src: "/src/assets/media/subject2.png", name: "Math" },
  { src: "/src/assets/media/subject3.png", name: "English" },
  { src: "/src/assets/media/subject4.png", name: "Social Studies" },
  { src: "/src/assets/media/subject5.png", name: "Languages" },
  { src: "/src/assets/media/subject6.png", name: "Science" },
  { src: "/src/assets/media/subject7.png", name: "Computers" },
  { src: "/src/assets/media/subject8.png", name: "Creative Arts" },
  { src: "/src/assets/media/subject9.png", name: "Health & PE" },
];

function SubjectContainer({ src, name }) {
  return (
    <div className="subject-container | flex">
      <img src={src} alt={name} />
      <span>{name}</span>
    </div>
  );
}

function MainSection({ mainSectionData }) {
  return (
    <>
      <MainNav />
      <section className="main-section font-opensans">
        <div className="main-section-welcome-wrapper | flex">
          <div className="welcome-text-box">
            <span className="welcome-text">What will you teach today?</span>
          </div>
          <div className="search-bar-container | flex">
            <input
              className="font-opensans"
              type="text"
              placeholder="Search for quizzes on any topic"
            />
            <FontAwesomeIcon
              className="search-angle-right"
              icon={faAngleRight}
            />
          </div>
          <div className="subjects-container | flex">
            {subjects.map(({ src, name }) => (
              <SubjectContainer key={name} src={src} name={name} />
            ))}
          </div>
        </div>
        <div className="main-content-wrapper">
          {mainSectionData.map((data, index) => (
            <MainContent key={index} mainContentData={data} />
          ))}
        </div>
      </section>
    </>
  );
}

export default MainSection;
