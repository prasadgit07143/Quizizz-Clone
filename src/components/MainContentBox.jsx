import React from "react";
import contentBoxImage from "../assets/media/content-box-i1.png";

const MainContentBox = ({ data }) => {
  const { contentType, contentTitle, nContent, nPlays } = data;

  return (
    <div className="main-content-box | flex">
      <div className="main-content-box-banner">
        <img src={contentBoxImage} alt={contentTitle} />
      </div>
      <div className="main-content-box-info | flex">
        <div className="main-content-box-info-inner flex">
          <span className="content-type">{contentType}</span>
          <div className="content-heading">{contentTitle}</div>
          <div className="content-info">
            <span>{nContent}</span>
            <span>{nPlays}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MainContentBox);
