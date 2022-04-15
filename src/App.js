import "./App.css";
import Card from "./Card";
import SearchBar from "./SearchBar";
import React, { useState, useEffect } from "react";
import DarkLightSwitchButton from "./DarkLightSwitchButton";

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
      <header className="App-header">
        <h2>Where in the world?</h2>
        <div className="dark-light-switch-button">
          <DarkLightSwitchButton
            setDarkMode={setDarkMode}
            darkMode={darkMode}
          />
        </div>
      </header>
      <div>
        <SearchBar
          countryData={countryData}
          setCountryData={setCountryData}
          setFilterCountry={setFilterCountry}
        />
        <div className={darkMode ? "dark-card-container" : "card-container"}>
          <Card
            countryData={filterCountry.length > 0 ? filterCountry : countryData}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
