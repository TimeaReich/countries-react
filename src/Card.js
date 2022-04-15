import React from "react";

const Card = (props) => {
  return props.countryData.map((item) => {
    return (
      <div className="Card">
        <div className="flag-container">
          <img alt="country flag" src={item.flag}></img>
        </div>
        <div className="text-container">
          <h3>{item.name}</h3>
          <p>Population: {item.population}</p>
          <p>Region: {item.region}</p>
          <p>Capital: {item.capital}</p>
        </div>
      </div>
    );
  });
};
export default Card;
