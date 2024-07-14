import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMagnifyingGlass,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="main-nav font-opensans flex">
      <div className="main-nav-container flex">
        <div className="main-nav-search-bar">
          <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
          <input
            className="font-opensans"
            type="search"
            placeholder="Search in Quizizz library"
            name="main-search-bar"
            aria-label="Search in Quizizz library"
          />
          <button className="font-opensans" type="button">
            Quizizz library
            <FontAwesomeIcon
              style={{ position: "relative", bottom: "3px", left: "4px" }}
              icon={faSortDown}
            />
          </button>
        </div>
        <div className="main-nav-buttons flex">
          <Link to="/start">
            <button className="enter-code-button font-opensans" type="button">
              Enter code
            </button>
          </Link>
          <button
            className="bell-button flex"
            type="button"
            aria-label="Notifications"
          >
            <FontAwesomeIcon icon={faBell} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
