import "./App.css";
import Card from "./Card";
import SearchBar from "./SearchBar";
import React, { useState, useEffect } from "react";
import DarkLightSwitchButton from "./DarkLightSwitchButton";
import FilterByRegion from "./FIlterByRegion";

function App() {
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountryData(data));
  }, []);

  const [darkMode, setDarkMode] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [filterCountry, setFilterCountry] = useState([]);

  return (
    <div className={darkMode ? "dark-App" : "App"}>
      <header className={darkMode ? "dark-app-header" : "app-header"}>
        <h2>Where in the world?</h2>
        <div className="dark-light-switch-button-div">
          <DarkLightSwitchButton
            setDarkMode={setDarkMode}
            darkMode={darkMode}
          />
        </div>
      </header>
      <div className="search-container">
        <SearchBar
          darkMode={darkMode}
          countryData={countryData}
          setCountryData={setCountryData}
          setFilterCountry={setFilterCountry}
        />
        <FilterByRegion
          setFilterCountry={setFilterCountry}
          darkMode={darkMode}
          countryData={countryData}
        />
      </div>
      <div className={darkMode ? "dark-card-container" : "card-container"}>
        <Card
          darkMode={darkMode}
          countryData={filterCountry.length > 0 ? filterCountry : countryData}
        />
      </div>
    </div>
  );
}

export default App;
