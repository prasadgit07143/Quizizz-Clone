import React, { useState, useCallback, memo } from "react";
import Cookies from "js-cookie";
import Navbar from "./Navbar";
import icon5 from "../assets/media/icon5.png";
import link1 from "../assets/media/link1.svg";
import link2 from "../assets/media/link2.svg";

const LogoSVG = memo(() => (
  <div className="logo-svg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="400"
      height="180"
      viewBox="0 0 400 180"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M124.725 71.9454C111.199 58.4188 89.2946 58.3751 75.7091 71.8064L75.7056 71.803C75.6925 71.8161 75.6799 71.8295 75.6674 71.8429L75.6674 71.843L75.6673 71.843C75.6569 71.8541 75.6466 71.8653 75.6359 71.8762C75.6253 71.8865 75.6145 71.8964 75.6037 71.9063L75.6037 71.9064C75.5898 71.9192 75.5759 71.9319 75.5627 71.9454L75.5661 71.9494C62.1348 85.5349 62.1786 107.44 75.7056 120.966C86.0556 131.316 101.305 133.773 113.983 128.343C114.772 128.005 115.449 127.536 116.009 126.977C118.427 124.559 118.618 120.448 115.995 117.825C114.115 115.946 111.273 115.327 108.827 116.369C100.909 119.75 91.3854 118.211 84.923 111.748C76.4623 103.288 76.4441 89.5872 84.8532 81.0936C93.3469 72.6845 107.047 72.7026 115.508 81.1633C121.97 87.6257 123.51 97.1492 120.129 105.067C119.087 107.513 119.705 110.355 121.585 112.235C124.208 114.858 128.318 114.667 130.736 112.249C131.296 111.689 131.765 111.012 132.102 110.224C137.532 97.5452 135.076 82.2959 124.725 71.9454ZM124.748 132.185C127.839 135.277 132.853 135.277 135.944 132.185C139.036 129.093 139.036 124.08 135.944 120.988C132.853 117.896 127.839 117.896 124.748 120.988C121.656 124.08 121.656 129.093 124.748 132.185ZM139.593 80.7554C139.593 77.2363 141.739 74.6621 145.258 74.6621C148.605 74.6621 151.093 77.3223 151.093 80.7554V102.64C151.093 107.704 154.269 110.623 159.333 110.623C162.508 110.623 165.34 109.85 167.744 108.391V80.5834C167.744 77.2363 170.146 74.6621 173.494 74.6621C176.67 74.6621 179.244 77.2363 179.244 80.5834V112.682C179.244 114.485 178.557 115.857 177.184 116.716C172.636 119.977 166.542 121.608 159.075 121.608C146.716 121.608 139.593 114.828 139.593 102.812V80.7554ZM195.417 81.2917V115.112C195.417 118.36 192.843 120.859 189.667 120.859C186.577 120.859 183.917 118.194 183.917 115.112V81.2917C183.917 78.0431 186.319 75.544 189.667 75.544C192.843 75.544 195.417 78.0431 195.417 81.2917ZM231.179 110.279H214.358L234.527 87.3642C236.672 84.9614 237.188 82.4722 236.243 79.8115C235.128 76.9793 232.981 75.6064 229.806 75.6064H206.462C203.287 75.6064 200.883 77.8377 200.883 80.9279C200.883 84.103 203.287 86.1623 206.462 86.1623H222.339L201.742 109.593C200.454 111.051 199.853 112.682 199.853 114.485C199.853 118.261 202.772 120.921 206.977 120.921H231.179C234.354 120.921 236.844 118.69 236.844 115.601C236.844 112.424 234.354 110.279 231.179 110.279ZM252.771 81.2917V115.112C252.771 118.36 250.196 120.859 247.021 120.859C243.931 120.859 241.27 118.194 241.27 115.112V81.2917C241.27 78.0431 243.673 75.544 247.021 75.544C250.196 75.544 252.771 78.0431 252.771 81.2917ZM288.211 110.279H271.39L291.559 87.3642C293.704 84.9614 294.219 82.4722 293.275 79.8115C292.16 76.9793 290.013 75.6064 286.838 75.6064H263.494C260.319 75.6064 257.915 77.8377 257.915 80.9279C257.915 84.103 260.319 86.1623 263.494 86.1623H279.371L258.773 109.593C257.486 111.051 256.885 112.682 256.885 114.485C256.885 118.261 259.804 120.921 264.009 120.921H288.211C291.386 120.921 293.876 118.69 293.876 115.601C293.876 112.424 291.386 110.279 288.211 110.279ZM312.803 110.279H329.624C332.799 110.279 335.289 112.424 335.289 115.601C335.289 118.69 332.799 120.921 329.624 120.921H305.422C301.216 120.921 298.298 118.261 298.298 114.485C298.298 112.682 298.899 111.051 300.186 109.593L320.784 86.1623H304.907C301.731 86.1623 299.328 84.103 299.328 80.9279C299.328 77.8377 301.731 75.6064 304.907 75.6064H328.25C331.427 75.6064 333.572 76.9793 334.688 79.8115C335.632 82.4722 335.117 84.9614 332.971 87.3642L312.803 110.279Z"
        fill="white"
      />
    </svg>
  </div>
));

const CodeInputWrapper = memo(({ handleChange, handleClick }) => (
  <div className="code-input-wrapper-1">
    <div className="code-input-wrapper-2">
      <div className="code-input-wrapper-3">
        <div className="code-input-container flex">
          <input
            onChange={handleChange}
            className="font-quicksand"
            type="text"
            placeholder="Enter a join code"
            name="code-input"
            required
          />
          <button type="submit" onClick={handleClick} className="purple-button">
            Join
          </button>
        </div>
      </div>
    </div>
  </div>
));

const Footer = memo(() => (
  <footer className="start-quiz-footer flex">
    <div className="start-quiz-footer-content flex">
      <div>
        <ul className="flex">
          <li>
            <a href="#">Quick links</a>
          </li>
          <li>
            <a href="#">Worksheets</a>
          </li>
          <li>
            <a href="#">Teacher resources</a>
          </li>
        </ul>
      </div>
      <div className="start-quiz-footer-bottom flex">
        <div className="accessibility-box flex">
          <img src={icon5} alt="Accessibility icon" />
          <span>
            Accessibility
            <br /> & Inclusion
          </span>
        </div>
        <div className="start-quiz-copyright">© 2024 Quizizz Inc.</div>
        <div className="start-quiz-app-links flex">
          <a href="https://share.quizizz.com/nz4P08MhCM">
            <img src={link2} alt="App link 1" />
          </a>
          <a href="https://share.quizizz.com/EBAH8OlhCM">
            <img src={link1} alt="App link 2" />
          </a>
        </div>
      </div>
    </div>
  </footer>
));

const StartQuiz = () => {
  const [code, setCode] = useState("");

  const handleChange = useCallback((e) => setCode(e.target.value), []);

  const handleClick = useCallback(() => {
    if (code.length === 0) return;
    Cookies.set("quiz-code", code);
    window.location.href = "/quiz";
  }, [code]);

  return (
    <section className="start-quiz-section font-quicksand">
      <Navbar
        hasNavList={false}
        hasFirstClassButtons={false}
        hasSecondClassButtons={[
          true,
          ["Go to shop", "My dashboard"],
          ["/shop", "/main"],
        ]}
        logoPath=""
        navClass="start-nav"
      />
      <div className="start-container flex">
        <LogoSVG />
        <CodeInputWrapper
          handleChange={handleChange}
          handleClick={handleClick}
        />
      </div>
      <Footer />
    </section>
  );
};

LogoSVG.displayName = "LogoSVG";
CodeInputWrapper.displayName = "CodeInputWrapper";
Footer.displayName = "Footer";
StartQuiz.displayName = "StartQuiz";

export default memo(StartQuiz);
