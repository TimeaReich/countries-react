import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = (props) => {
  const { countryData, selectedRegion, setFilterCountry, darkMode } = props;

  const handleSearchInput = (event) => {
    let searchWord = event.target.value.toUpperCase();
    const filter = countryData.filter((item) => {
      return (
        (item.region.toUpperCase().includes(selectedRegion.toUpperCase()) &&
          item.name.toUpperCase().includes(searchWord)) ||
        (item.region.toUpperCase().includes(selectedRegion.toUpperCase()) &&
          item.capital?.toUpperCase().includes(searchWord))
      );
    });
    return setFilterCountry(filter);
  };
  const isDarkMode = darkMode ? "dark-search-icon" : "search-icon";

  return (
    <div className="search-bar-container">
      <div className={isDarkMode}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <div>
        <input
          id="country-search"
          type="text"
          className={darkMode ? "dark-search-bar" : "search-bar"}
          placeholder="Search for a country..."
          onChange={handleSearchInput}
        ></input>
      </div>
    </div>
  );
};
export default SearchBar;
