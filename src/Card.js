import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const onClickSelect = (item) => {
    props.setClickedCountry(true);
    props.setSelectedCountry(item);
  };
  return props.countryData.map((item, index) => {
    return (
      <div
        key={index}
        onClick={onClickSelect.bind(null, item)}
        className={props.darkMode ? "dark-card" : "card"}
      >
        <Link to={`/country/${item.name}`}>
          <div className="flag-container">
            <img alt="country flag" src={item.flag}></img>
          </div>
          <div
            className={
              props.darkMode ? "dark-text-container" : "text-container"
            }
          >
            <h3 className={props.darkMode ? "dark-h3" : "h3"}>{item.name}</h3>
            <p>
              <span
                className={
                  props.darkMode ? "dark-bold-paragraph" : "bold-paragraph"
                }
              >
                Population:{" "}
              </span>
              {item.population}
            </p>
            <p>
              <span
                className={
                  props.darkMode ? "dark-bold-paragraph" : "bold-paragraph"
                }
              >
                Region:{" "}
              </span>
              {item.region}
            </p>
            <p>
              <span
                className={
                  props.darkMode ? "dark-bold-paragraph" : "bold-paragraph"
                }
              >
                Capital:{" "}
              </span>
              {item.capital}
            </p>
          </div>
        </Link>
      </div>
    );
  });
};
export default Card;
