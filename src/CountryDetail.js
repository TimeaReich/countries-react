import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";

const CountryDetail = (props) => {
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
  const country = props.selectedCountry;
  return (
    <div
      className={
        props.darkMode
          ? "dark-country-detail-component"
          : "country-detail-component"
      }
    >
      <Header darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
      <Link to="/">
        <div
          className={
            props.darkMode ? "dark-back-btn-with-arrow" : "back-btn-with-arrow"
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
          <img src={country.flag} alt="flag"></img>
        </div>
        <div
          className={
            props.darkMode ? "dark-country-detail-text" : "country-detail-text"
          }
        >
          <h2 className={props.darkMode ? "dark-h3" : "country-detail-header"}>
            {country.name}
          </h2>
          <div className="country-detail-description">
            <p>
              <span
                className={
                  props.darkMode ? "dark-bold-paragraph" : "bold-paragraph"
                }
              >
                Native Name:{" "}
              </span>
              {country.nativeName}
            </p>
            <p>
              <span
                className={
                  props.darkMode ? "dark-bold-paragraph" : "bold-paragraph"
                }
              >
                Population:{" "}
              </span>
              {country.population}
            </p>
            <p>
              <span
                className={
                  props.darkMode ? "dark-bold-paragraph" : "bold-paragraph"
                }
              >
                Region:{" "}
              </span>
              {country.region}
            </p>
            <p>
              <span
                className={
                  props.darkMode ? "dark-bold-paragraph" : "bold-paragraph"
                }
              >
                Sub Region:{" "}
              </span>
              {country.subregion}
            </p>
            <p>
              <span
                className={
                  props.darkMode ? "dark-bold-paragraph" : "bold-paragraph"
                }
              >
                Capital:{" "}
              </span>
              {country.capital}
            </p>
            <p>
              <span
                className={
                  props.darkMode ? "dark-bold-paragraph" : "bold-paragraph"
                }
              >
                Top Level Domain:{" "}
              </span>
              {country.topLevelDomain[0]}
            </p>
            <p>
              <span
                className={
                  props.darkMode ? "dark-bold-paragraph" : "bold-paragraph"
                }
              >
                Currencies:{" "}
              </span>
              {country.currencies[0].name}
            </p>
            <p>
              <span
                className={
                  props.darkMode ? "dark-bold-paragraph" : "bold-paragraph"
                }
              >
                Languages:{" "}
              </span>
              {country.languages.map((item) => `${item.name}, `)}
            </p>
          </div>
          <div className="country-detail-border-countries">
            <div
              className={
                props.darkMode ? "dark-bold-paragraph" : "bold-paragraph"
              }
            >
              Border Countries:
            </div>

            {borderCountries ? (
              borderCountries.map((item) => {
                return item.map((i) => {
                  return (
                    <button
                      className={
                        props.darkMode
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
