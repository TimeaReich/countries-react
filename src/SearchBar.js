import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = (props) => {
  const handleSearchInput = (event) => {
    let searchWord = event.target.value.toUpperCase();
    const filter = props.countryData.filter((item) => {
      return (
        (item.region
          .toUpperCase()
          .includes(props.selectedRegion.toUpperCase()) &&
          item.name.toUpperCase().includes(searchWord)) ||
        (item.region
          .toUpperCase()
          .includes(props.selectedRegion.toUpperCase()) &&
          item.capital?.toUpperCase().includes(searchWord))
      );
    });
    return props.setFilterCountry(filter);
  };

  return (
    <div className="search-bar-container">
      <div className={props.darkMode ? "dark-search-icon" : "search-icon"}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <div>
        <input
          id="country-search"
          type="text"
          className={props.darkMode ? "dark-search-bar" : "search-bar"}
          placeholder="Search for a country..."
          onChange={handleSearchInput}
        ></input>
      </div>
    </div>
  );
};
export default SearchBar;
