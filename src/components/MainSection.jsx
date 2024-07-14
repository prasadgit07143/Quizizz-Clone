import React from "react";
import MainNav from "./MainNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import MainContent from "./MainContent";
import subject1 from "../assets/media/subject1.png";
import subject2 from "../assets/media/subject2.png";
import subject3 from "../assets/media/subject3.png";
import subject4 from "../assets/media/subject4.png";
import subject5 from "../assets/media/subject5.png";
import subject6 from "../assets/media/subject6.png";
import subject7 from "../assets/media/subject7.png";
import subject8 from "../assets/media/subject8.png";
import subject9 from "../assets/media/subject9.png";

const subjects = [
  { src: subject1, name: "Career Ed" },
  { src: subject2, name: "Math" },
  { src: subject3, name: "English" },
  { src: subject4, name: "Social Studies" },
  { src: subject5, name: "Languages" },
  { src: subject6, name: "Science" },
  { src: subject7, name: "Computers" },
  { src: subject8, name: "Creative Arts" },
  { src: subject9, name: "Health & PE" },
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
