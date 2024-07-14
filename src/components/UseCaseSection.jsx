import React from "react";
import icon3 from "../assets/media/icon3.svg";

const UseCaseItem = React.memo(({ text }) => (
  <li>
    <img src={icon3} alt="Checkmark icon" />
    <span>{text}</span>
  </li>
));

const UseCaseList = React.memo(({ items }) => (
  <ul>
    {items.map((item, index) => (
      <UseCaseItem key={index} text={item} />
    ))}
  </ul>
));

const UseCaseSection = () => {
  const useCases = [
    ["Live Instruction", "Group Practice", "Slides", "Exit Tickets"],
    ["Homework", "Test Prep", "Presentations", "Bell Ringers"],
    ["Assignments", "Formative Assessments", "Accommodations"],
    ["Individual Practice", "Summative Assessments", "Gamification"],
  ];

  return (
    <section className="use-case-section | flex">
      <div className="use-case-content">
        <h2 className="font-poppins">
          Teachers and Tech Coaches 💜 Quizizz for…
        </h2>
        <div className="use-case-lists font-quicksand | flex">
          {useCases.map((list, index) => (
            <UseCaseList key={index} items={list} />
          ))}
        </div>
      </div>
    </section>
  );
};

UseCaseItem.displayName = "UseCaseItem";
UseCaseList.displayName = "UseCaseList";
UseCaseSection.displayName = "UseCaseSection";

export default React.memo(UseCaseSection);
