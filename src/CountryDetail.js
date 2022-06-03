import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";

const CountryDetail = (props) => {
  const { selectedCountry, darkMode, setDarkMode } = props;
  const isDarkModeParagraph = darkMode
    ? "dark-bold-paragraph"
    : "bold-paragraph";

  let borderCountries;
  if (props.selectedCountry.borders) {
    borderCountries = props.selectedCountry.borders.map((item) => {
      return props.countryData.filter((i) => {
        return i.alpha3Code === item;
      });
    });
  } else {
    borderCountries = "";
  }
  return (
    <div
      className={
        darkMode ? "dark-country-detail-component" : "country-detail-component"
      }
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Link to="/">
        <div
          className={
            darkMode ? "dark-back-btn-with-arrow" : "back-btn-with-arrow"
          }
        >
          <span>
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </span>
          <span>Back</span>
        </div>
      </Link>
      <div className="country-detail-container">
        <div className="country-detail-flag">
          <img src={selectedCountry.flag} alt="flag"></img>
        </div>
        <div
          className={
            darkMode ? "dark-country-detail-text" : "country-detail-text"
          }
        >
          <h2 className={darkMode ? "dark-h3" : "country-detail-header"}>
            {selectedCountry.name}
          </h2>
          <div className="country-detail-description">
            <p>
              <span className={isDarkModeParagraph}>Native Name: </span>
              {selectedCountry.nativeName}
            </p>
            <p>
              <span className={isDarkModeParagraph}>Population: </span>
              {selectedCountry.population}
            </p>
            <p>
              <span className={isDarkModeParagraph}>Region: </span>
              {selectedCountry.region}
            </p>
            <p>
              <span className={isDarkModeParagraph}>Sub Region: </span>
              {selectedCountry.subregion}
            </p>
            <p>
              <span
                className={darkMode ? "dark-bold-paragraph" : "bold-paragraph"}
              >
                Capital:{" "}
              </span>
              {selectedCountry.capital}
            </p>
            <p>
              <span className={isDarkModeParagraph}>Top Level Domain: </span>
              {selectedCountry.topLevelDomain[0]}
            </p>
            <p>
              <span className={isDarkModeParagraph}>Currencies: </span>
              {selectedCountry.currencies[0].name}
            </p>
            <p>
              <span className={isDarkModeParagraph}>Languages: </span>
              {selectedCountry.languages.map((item) => `${item.name}, `)}
            </p>
          </div>
          <div className="country-detail-border-countries">
            <div className={isDarkModeParagraph}>Border Countries:</div>

            {borderCountries ? (
              borderCountries.map((item) => {
                return item.map((i) => {
                  return (
                    <button
                      className={
                        darkMode
                          ? "dark-country-detail-border-btn"
                          : "country-detail-border-btn"
                      }
                    >
                      {i.name}
                    </button>
                  );
                });
              })
            ) : (
              <p>None</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountryDetail;
