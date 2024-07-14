import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Button = React.memo(({ className, spanText, buttonText }) => (
  <button className={className}>
    <span>{spanText}</span>
    <br />
    <div>
      {buttonText} &nbsp;
      <FontAwesomeIcon className="angle-right-icon" icon={faAngleRight} />
    </div>
  </button>
));

const Section1 = React.memo(() => (
  <>
    <section className="section-1 | flex">
      <div className="s1-content | flex">
        <div className="s1-left | flex">
          <div className="s1-left-content | flex">
            <h1 className="font-poppins">Plan in seconds, not weekends.</h1>
            <p>
              Deliver instruction that's relevant for every student — now with a
              boost from AI.
            </p>
            <div className="s1-buttons | flex">
              <Button
                className="try-button purple-button"
                spanText="EXPERIENCE THE PLATFORM"
                buttonText="Try it now"
              />
              <Button
                className="learn-button grey-button"
                spanText="ADMINISTRATORS"
                buttonText="Learn more"
              />
            </div>
          </div>
        </div>
        <div className="s1-right">
          <div className="s1-banner">
            <img src="/src/assets/media/img1.png" alt="Section 1 banner" />
          </div>
        </div>
      </div>
    </section>
    <div className="language-box | font-quicksand">
      <select name="language" id="language-select">
        <option value="English">English</option>
      </select>
    </div>
  </>
));

Button.displayName = "Button";
Section1.displayName = "Section1";

export default Section1;
