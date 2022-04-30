import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";

const CountryDetail = (props) => {
  const borderCountries = props.selectedCountry.borders.map((item) => {
    return props.countryData.filter((i) => {
      return i.alpha3Code === item;
    });
  });

  const country = props.selectedCountry;
  return (
    <div>
      <Header darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
      <Link to="/">
        <div className="back-btn-with-arrow">
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
        <div className="country-detail-text">
          <h2 className="country-detail-header">{country.name}</h2>
          <div className="country-detail-description">
            <p>
              <span className="bold-paragraph">Native Name: </span>
              {country.nativeName}
            </p>
            <p>
              <span className="bold-paragraph">Population: </span>
              {country.population}
            </p>
            <p>
              <span className="bold-paragraph">Region: </span>
              {country.region}
            </p>
            <p>
              <span className="bold-paragraph">Sub Region: </span>
              {country.subregion}
            </p>
            <p>
              <span className="bold-paragraph">Capital: </span>
              {country.capital}
            </p>
            <p>
              <span className="bold-paragraph">Top Level Domain: </span>
              {country.topLevelDomain[0]}
            </p>
            <p>
              <span className="bold-paragraph">Currencies: </span>
              {country.currencies[0].name}
            </p>
            <p>
              <span className="bold-paragraph">Languages: </span>
              {country.languages.map((item) => `${item.name}, `)}
            </p>
          </div>
          <div className="country-detail-border-countries">
            <p>
              <span className="bold-paragraph">Border Countries:</span>
            </p>
            <div className="country-detail-border-btn-container">
              {borderCountries.map((item) => {
                return item.map((i) => {
                  return (
                    <button className="country-detail-border-btn">
                      {i.name}
                    </button>
                  );
                });
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountryDetail;
