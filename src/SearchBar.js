import React from "react";
//import {} from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search for a country..."
      ></input>
      <FontAwesomeIcon icon={faBell} />
    </div>
  );
};
export default SearchBar;
