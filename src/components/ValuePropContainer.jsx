import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Button = React.memo(({ className, buttonText }) => (
  <button className={className}>
    <div>
      {buttonText} &nbsp;
      <FontAwesomeIcon className="angle-right-icon" icon={faAngleRight} />
    </div>
  </button>
));

const ValuePropContainer = React.memo(
  ({
    title,
    heading,
    list,
    buttonText,
    reverse,
    hasBottom,
    mediaPath,
    colorClass,
  }) => {
    const containerClass = useMemo(
      () =>
        reverse
          ? "value-prop-container-reverse | flex"
          : "value-prop-container | flex",
      [reverse]
    );

    const videoElement = useMemo(
      () => (
        <div className="value-prop-banner">
          <video autoPlay muted loop playsInline className={colorClass}>
            <source src={mediaPath} type="video/mp4" />
          </video>
        </div>
      ),
      [mediaPath, colorClass]
    );

    return (
      <div className={containerClass}>
        <div className="value-prop-content | flex">
          {reverse && videoElement}
          <div className="value-prop-text | flex">
            <div className="fast-text | font-poppins">{title}</div>
            <h2 className="font-poppins">{heading}</h2>
            <ul>
              {list.map((listItem, index) => (
                <li key={index}>
                  <p className="font-quicksand">{listItem}</p>
                </li>
              ))}
            </ul>
            {hasBottom[0] && (
              <div className="value-prop-text-bottom | flex font-poppins">
                <div className="value-prop-text-bottom-first">
                  {hasBottom[1][0]}
                </div>
                <div className="value-prop-text-bottom-second">
                  {hasBottom[1][1]}
                </div>
              </div>
            )}
            <div className="buttons | flex">
              {buttonText.map((text, index) => (
                <Button
                  key={index}
                  className={
                    index % 2 === 0 && buttonText.length > 1
                      ? "purple-button"
                      : "grey-button"
                  }
                  buttonText={text}
                />
              ))}
            </div>
          </div>
          {!reverse && videoElement}
        </div>
      </div>
    );
  }
);

Button.displayName = "Button";
ValuePropContainer.displayName = "ValuePropContainer";

export default ValuePropContainer;
