import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import GoogleLogin from "./GoogleLogin";
import Navbar from "./Navbar";
import mainLogoInverse from "../assets/media/main-logo-inverse.png";
import phoneLogo from "../assets/media/phone-logo.png";
import emailLogo from "../assets/media/email-logo.png";
import fbLogo from "../assets/media/fb-logo-sign.png";
import msLogo from "../assets/media/ms-logo-sign.png";
import appleLogo from "../assets/media/apple-logo-sign.png";
import othersLogo from "../assets/media/others-logo-sign.png";

const loginMethods = [
  { icon: phoneLogo, text: "Continue with Phone" },
  { icon: emailLogo, text: "Continue with Email" },
];

const otherLoginMethods = [
  { icon: fbLogo, text: "Facebook", className: "fb-bg" },
  { icon: msLogo, text: "Microsoft" },
  { icon: appleLogo, text: "Apple", className: "apple-bg" },
  { icon: othersLogo, text: "Others", className: "others-bg" },
];

const Login = ({ heading, para, bottomText, actionText, bottomPara }) => {
  return (
    <>
      <Navbar
        hasNavList={false}
        hasFirstClassButtons={false}
        hasSecondClassButtons={[
          true,
          ["Join a game", actionText[0]],
          ["/start", actionText[1]],
        ]}
        logoPath={mainLogoInverse}
        navClass="purple-background-nav"
      />
      <section className="login-section font-opensans | flex">
        <div className="login-container | flex">
          <div className="login-first | flex">
            <div className="login-first-top | flex">
              <div>
                <h1>{heading}</h1>
                <p>{para}</p>
              </div>
              <GoogleLogin />
              {loginMethods.map((method, index) => (
                <div key={index} className="login-method-container | flex">
                  <img src={method.icon} alt={method.text} />
                  <div className="flex signin-inner-div">
                    <span>{method.text}</span>
                    <FontAwesomeIcon
                      className="arrow-right"
                      icon={faArrowRight}
                    />
                  </div>
                </div>
              ))}
              <div className="other-login-methods-container | flex">
                <span>or continue with</span>
                <div className="other-login-methods | flex">
                  {otherLoginMethods.map((method, index) => (
                    <div key={index} className="login-method | flex">
                      <img
                        className={method.className}
                        src={method.icon}
                        alt={method.text}
                      />
                      <span>{method.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {bottomPara && (
              <p
                style={{ fontSize: "12px", color: "#b6b6b6", margin: "0 auto" }}
              >
                By signing up, you agree to our{" "}
                <a href="https://quizizz.com/tos">
                  <span
                    style={{ textDecoration: "underline", color: "#b6b6b6" }}
                  >
                    Terms of Service
                  </span>
                </a>{" "}
                &{" "}
                <a href="https://quizizz.com/privacy">
                  <span
                    style={{ textDecoration: "underline", color: "#b6b6b6" }}
                  >
                    Privacy Policy
                  </span>
                </a>
              </p>
            )}
            <div className="login-first-bottom | flex">
              <span>{bottomText}</span>
              <button className="grey-button login-signup-button font-opensans">
                <Link style={{ textDecoration: "none" }} to={actionText[1]}>
                  {actionText[0]}
                </Link>
              </button>
            </div>
          </div>
          <div className="login-second">
            <img src="\src\assets\media\signin-cover.png" alt="Sign In Cover" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
