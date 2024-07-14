import React from "react";

const SearchBar = React.memo(() => (
  <div className="main-nav-search-bar">
    <input
      className="font-opensans"
      type="search"
      placeholder="Search in Quizizz library"
      name="main-search-bar"
      aria-label="Search in Quizizz library"
    />
  </div>
));

SearchBar.displayName = "SearchBar";

export default SearchBar;
