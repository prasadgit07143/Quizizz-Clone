import React from "react";
import icon1 from "../assets/media/icon1.svg";
import icon2 from "../assets/media/icon2.svg";

const cardData = [
  {
    icon: icon1,
    text: "<b>Create</b> activities and assessments with 18+ question types from any resource or enhance what you've got with AI.",
  },
  {
    icon: icon2,
    text: "<b>Adapt</b> your resources for anything - all grade levels, all subjects, serious assessment, gamification, and individual student needs.",
  },
  {
    icon: icon1,
    text: "<b>Get data</b> that matters with simple, standards-aligned reports designed to help with teaching decisions today and tomorrow.",
  },
];

const HowSection = () => {
  return (
    <section className="how-it-works-section | flex">
      <div className="hw-heading font-poppins">
        <h2>
          From planning to differentiating, we help educators do hard things –
          <span>faster</span> and with the <span>flexibility</span> to fuel
          students' sense of belonging.
        </h2>
      </div>
      <div className="hw-title font-poppins">
        <h2>Here's how it works:</h2>
      </div>
      <div className="hw-cards font-quicksand | flex">
        {cardData.map((card, index) => (
          <div key={index} className="hw-card | flex">
            <img src={card.icon} alt={`Icon ${index + 1}`} />
            <p dangerouslySetInnerHTML={{ __html: card.text }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowSection;
