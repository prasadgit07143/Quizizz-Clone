import React, { useState, useCallback } from "react";
import { auth } from "../Firebase";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faBookAtlas,
  faFlag,
  faPersonChalkboard,
  faGear,
  faAngleDown,
  faFolder,
  faUser,
  faImages,
  faArrowRightFromBracket,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import MainLogo from "../assets/media/main-logo.svg";
import ExtensionBanner from "../assets/media/ai_extension_banner.webp";

const NavItem = React.memo(({ icon, text, active, onClick }) => (
  <li className={active ? "list-item-active" : ""} onClick={onClick}>
    <FontAwesomeIcon
      className={`sidenav-icon ${active ? "list-item-active" : ""}`}
      icon={icon}
    />
    <a className={active ? "list-item-active" : ""} href="#">
      {text}
    </a>
  </li>
));

const SideNav = React.memo(() => {
  const [displayState, setDisplayState] = useState(false);

  const handleLogout = useCallback(async () => {
    try {
      await auth.signOut();
      Cookies.remove("accessToken");
      window.location.href = "/";
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  }, []);

  const handleDisplayState = useCallback(() => {
    setDisplayState((prev) => !prev);
  }, []);

  const navItems = [
    { icon: faMapLocationDot, text: "Explore", active: true },
    { icon: faBookAtlas, text: "My library" },
    { icon: faFlag, text: "Reports" },
    { icon: faPersonChalkboard, text: "Classes" },
    { icon: faGear, text: "Settings" },
  ];

  const moreItems = [
    { icon: faImages, text: "Memes" },
    { icon: faFolder, text: "Collections" },
    { icon: faUser, text: "Profiles" },
    { icon: faArrowRightFromBracket, text: "Logout", onClick: handleLogout },
  ];

  return (
    <aside className="sidenav-wrapper font-opensans">
      <div className="sidenav-container | flex">
        <div className="sidenav-logo">
          <img src={MainLogo} alt="Quizizz Logo" />
        </div>
        <div className="sidenav-profile-container | flex">
          <div className="sidenav-profile-info | flex">
            <span className="sidenav-profile-name">
              Mr. {Cookies.get("nameOfUser")}
            </span>
            <span className="sidenav-account-type">Basic account</span>
          </div>
          <button className="upgrade-plan-button font-opensans">
            Upgrade your Plan
          </button>
        </div>
        <div className="sidenav-create-button-container | flex">
          <button className="purple-button">Create</button>
        </div>
        <div className="sidenav-bottom-container | flex">
          <ul className="flex">
            {navItems.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
            {!displayState && (
              <NavItem
                icon={faAngleDown}
                text="More"
                onClick={handleDisplayState}
              />
            )}
            {displayState && (
              <>
                {moreItems.map((item, index) => (
                  <NavItem key={`more-${index}`} {...item} />
                ))}
                <NavItem
                  icon={faAngleUp}
                  text="Less"
                  onClick={handleDisplayState}
                />
              </>
            )}
          </ul>
          <div className="sidenav-extension-container | flex">
            <span>Try our AI Chrome extension</span>
            <a
              href="https://chromewebstore.google.com/detail/quizizz-ai-turn-any-websi/jnegnfbcjklhkmoihoakeijbealomipg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ExtensionBanner} alt="AI Extension Banner" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
});

NavItem.displayName = "NavItem";
SideNav.displayName = "SideNav";

export default SideNav;
