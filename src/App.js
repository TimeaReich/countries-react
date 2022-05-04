import "./App.css";
import Card from "./Card";
import SearchBar from "./SearchBar";
import React, { useState, useEffect } from "react";
import FilterByRegion from "./FIlterByRegion";
import CountryDetail from "./CountryDetail";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountryData(data));
  }, []);

  const [darkMode, setDarkMode] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [filterCountry, setFilterCountry] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [clickedCountry, setClickedCountry] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className={darkMode ? "dark-App" : "App"}>
              <Header setDarkMode={setDarkMode} darkMode={darkMode} />
              <div className="search-container">
                <SearchBar
                  selectedRegion={selectedRegion}
                  darkMode={darkMode}
                  countryData={countryData}
                  setCountryData={setCountryData}
                  setFilterCountry={setFilterCountry}
                />
                <FilterByRegion
                  selectedRegion={selectedRegion}
                  setSelectedRegion={setSelectedRegion}
                  setFilterCountry={setFilterCountry}
                  darkMode={darkMode}
                  countryData={countryData}
                />
              </div>
              <div
                className={darkMode ? "dark-card-container" : "card-container"}
              >
                <Card
                  setSelectedCountry={setSelectedCountry}
                  setClickedCountry={setClickedCountry}
                  darkMode={darkMode}
                  countryData={
                    filterCountry.length > 0 ? filterCountry : countryData
                  }
                />
              </div>
            </div>
          }
        />

        <Route
          path="/country/:name"
          element={
            clickedCountry && (
              <CountryDetail
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                countryData={countryData}
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
              />
            )
          }
        />
      </Routes>
    </Router>
  );
  //   <div className={darkMode ? "dark-App" : "App"}>
  //     <header className={darkMode ? "dark-app-header" : "app-header"}>
  //       <h2>Where in the world?</h2>
  //       <div className="dark-light-switch-button-div">
  //         <DarkLightSwitchButton
  //           setDarkMode={setDarkMode}
  //           darkMode={darkMode}
  //         />
  //       </div>
  //     </header>
  //     {clickedCountry ? (
  //       <CountryDetail
  //         countryData={countryData}
  //         selectedCountry={selectedCountry}
  //       />
  //     ) : (
  //       ""
  //     )}
  //     <div className="search-container">
  //       <SearchBar
  //         selectedRegion={selectedRegion}
  //         darkMode={darkMode}
  //         countryData={countryData}
  //         setCountryData={setCountryData}
  //         setFilterCountry={setFilterCountry}
  //       />
  //       <FilterByRegion
  //         selectedRegion={selectedRegion}
  //         setSelectedRegion={setSelectedRegion}
  //         setFilterCountry={setFilterCountry}
  //         darkMode={darkMode}
  //         countryData={countryData}
  //       />
  //     </div>
  //     <div className={darkMode ? "dark-card-container" : "card-container"}>
  //       <Card
  //         setSelectedCountry={setSelectedCountry}
  //         setClickedCountry={setClickedCountry}
  //         darkMode={darkMode}
  //         countryData={filterCountry.length > 0 ? filterCountry : countryData}
  //       />
  //     </div>
  //   </div>
}

export default App;
