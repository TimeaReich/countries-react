import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { darkMode, countryData, setClickedCountry, setSelectedCountry } =
    props;
  const onClickSelect = (item) => {
    setClickedCountry(true);
    setSelectedCountry(item);
  };
  const isDarkMode = darkMode ? "dark-bold-paragraph" : "bold-paragraph";

  return countryData.map((item, index) => {
    return (
      <div
        key={index}
        onClick={onClickSelect.bind(null, item)}
        className={darkMode ? "dark-card" : "card"}
      >
        <Link to={`/country/${item.name}`}>
          <div className="flag-container">
            <img alt="country flag" src={item.flag}></img>
          </div>
          <div className={darkMode ? "dark-text-container" : "text-container"}>
            <h3 className={darkMode ? "dark-h3" : "h3"}>{item.name}</h3>
            <p>
              <span className={isDarkMode}>Population: </span>
              {item.population}
            </p>
            <p>
              <span className={isDarkMode}>Region: </span>
              {item.region}
            </p>
            <p>
              <span className={isDarkMode}>Capital: </span>
              {item.capital}
            </p>
          </div>
        </Link>
      </div>
    );
  });
};
export default Card;
