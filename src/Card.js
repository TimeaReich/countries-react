import React, { useState, useEffect } from "react";
//import { Data } from "./Countries";

const Card = () => {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountryData(data));
  }, []);

  return countryData.map((item) => {
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
