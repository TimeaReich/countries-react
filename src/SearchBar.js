import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const SearchBar = (props) => {
  const handleSearchInput = (event) => {
    let searchWord = event.target.value.toUpperCase();
    const filter = props.countryData.filter((item) => {
      return item.name.toUpperCase().includes(searchWord);
    });
    return props.setFilterCountry(filter);
  };

  return (
    <div className="search-bar-container">
      <div className="search-icon">
        <FontAwesomeIcon icon={faBell} />
      </div>
      <div>
        <input
          id="country-search"
          type="text"
          className="search-bar"
          placeholder="Search for a country..."
          onChange={handleSearchInput}
        ></input>
      </div>
    </div>
  );
};
export default SearchBar;
