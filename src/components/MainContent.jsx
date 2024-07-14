import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import MainContentBox from "./MainContentBox";

const MainContent = ({ mainContentData }) => {
  const { contentHeading, contentBoxes } = mainContentData;

  return (
    <div className="main-content | flex">
      <div className="main-content-header | flex">
        <div>
          <FontAwesomeIcon
            className="star-icon"
            icon={faStar}
            aria-hidden="true"
          />
          <span>{contentHeading}</span>
        </div>
        <button className="see-more-button font-opensans">
          See more
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ marginLeft: "6px" }}
            aria-hidden="true"
          />
        </button>
      </div>
      <div className="main-content-boxes | flex">
        {contentBoxes.map((data, index) => (
          <MainContentBox key={`content-box-${index}`} data={data} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(MainContent);
