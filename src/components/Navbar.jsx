import React from "react";
import { Link } from "react-router-dom";

const NavList = () => (
  <ul className="nav-list | flex">
    {["For Schools", "Plans", "Solutions", "Resources", "For Business"].map(
      (item) => (
        <li key={item}>
          <a href="#">{item}</a>
        </li>
      )
    )}
  </ul>
);

const Logo = ({ logoPath }) =>
  logoPath ? (
    <img src={logoPath} alt="logo" />
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.3449 13.2828C18.8747 7.81584 27.7905 7.83364 33.2963 13.3394C37.5093 17.5524 38.5091 23.7594 36.2989 28.92C36.1615 29.241 35.9707 29.5166 35.7429 29.7444C34.7587 30.7286 33.0857 30.8064 32.0179 29.7388C31.2529 28.9736 31.0011 27.8166 31.4253 26.8212C32.8015 23.5982 32.1749 19.7218 29.5445 17.0914C26.1007 13.6476 20.5241 13.6402 17.0669 17.063C13.6441 20.5202 13.6515 26.0968 17.0953 29.5406C19.7257 32.171 23.6021 32.7976 26.8251 31.4214C27.8207 30.9972 28.9775 31.249 29.7425 32.014C30.8103 33.0818 30.7325 34.7548 29.7483 35.739C29.5205 35.9666 29.2449 36.1578 28.9239 36.295C23.7633 38.5052 17.5563 37.5054 13.3435 33.2924C7.83752 27.7868 7.81972 18.8708 13.2867 13.341L13.2853 13.3394C13.2949 13.3296 13.3053 13.3208 13.3151 13.3112C13.3247 13.3014 13.3337 13.2912 13.3435 13.2814L13.3449 13.2828Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.8628 37.859C36.6044 39.1174 34.5638 39.1174 33.3054 37.859C32.0468 36.6004 32.0468 34.56 33.3054 33.3016C34.5638 32.043 36.6044 32.043 37.8628 33.3016C39.1212 34.56 39.1212 36.6004 37.8628 37.859Z"
        fill="white"
      />
    </svg>
  );

const Navbar = ({
  hasNavList,
  hasFirstClassButtons,
  hasSecondClassButtons,
  logoPath,
  navClass,
}) => {
  const navClassName = hasNavList
    ? "flex font-quicksand"
    : `${navClass} flex font-quicksand`;
  const logoContainerClassName = hasNavList
    ? "logo-container | flex"
    : "logo-container logo-container-inverse | flex";

  return (
    <nav className={navClassName}>
      <div className="nav-content | flex">
        <div className="nav-left | flex">
          <div className={logoContainerClassName}>
            <Logo logoPath={logoPath} />
          </div>
          {hasNavList && <NavList />}
        </div>
        <div className="nav-right | flex">
          <div className="nav-buttons | flex">
            {hasFirstClassButtons && (
              <>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://quizizz.com/home/schools-districts-new-form-v2?lng=en"
                >
                  <button>School plan quote</button>
                </a>
                <Link to="/start">
                  <button>Enter code</button>
                </Link>
              </>
            )}
            {hasSecondClassButtons[0] && (
              <>
                <Link to={hasSecondClassButtons[2][0]}>
                  <button
                    className={
                      !hasNavList ? "purple-nav-join-button" : "login-button"
                    }
                  >
                    {hasSecondClassButtons[1][0]}
                  </button>
                </Link>
                <Link to={hasSecondClassButtons[2][1]}>
                  <button
                    className={
                      !hasNavList
                        ? "purple-nav-sign-up-button"
                        : "sign-up-button"
                    }
                  >
                    {hasSecondClassButtons[1][1]}
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
