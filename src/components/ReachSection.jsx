import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ReachCover from "../assets/media/reach1.webp";

const ReachSection = React.memo(() => {
  return (
    <section className="reach-section | flex">
      <div className="reach-section-first | flex">
        <p className="font-quicksand">Loved across 150+ Countries</p>
        <h2 className="font-poppins">
          Trusted by teachers in <span>90% of U.S. schools</span>
        </h2>
        <button className="purple-button">
          Quizizz for schools and districts &nbsp;
          <FontAwesomeIcon className="angle-right-icon" icon={faAngleRight} />
        </button>
      </div>
      <div className="reach-section-second | flex">
        <img src={ReachCover} alt="Reach illustration" />
      </div>
    </section>
  );
});

ReachSection.displayName = "ReachSection";

export default ReachSection;
