import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const CTASection = ({
  paraFirst,
  headingText,
  paraText,
  buttonText,
  bgImage,
  bottomShadow,
}) => {
  const containerClass = bottomShadow
    ? "cta-container | flex"
    : "cta-container-copy | flex";
  const sectionClass = bottomShadow
    ? "cta-section | flex"
    : "cta-section-copy | flex";

  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        {paraFirst && <p className="font-quicksand">{paraText}</p>}
        <h2 className="font-poppins">{headingText}</h2>
        {!paraFirst && <p className="font-quicksand">{paraText}</p>}
        <div className="cta-buttons | flex">
          {buttonText.map((text, index) => (
            <button
              key={text}
              className={index % 2 === 0 ? "purple-button" : "grey-button"}
            >
              {text}{" "}
              <FontAwesomeIcon
                className="angle-right-icon"
                icon={faAngleRight}
              />
            </button>
          ))}
        </div>
      </div>
      {bgImage[0] && (
        <div className="cta-image-container">
          <img src={bgImage[1]} alt="CTA background" />
        </div>
      )}
    </section>
  );
};

export default React.memo(CTASection);
