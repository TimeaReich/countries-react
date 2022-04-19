import React, { useState } from "react";
const FilterByRegion = (props) => {
  const [selectedRegion, setSelectedRegion] = useState("");

  const regionSelect = (e) => {
    setSelectedRegion(e.target.value);

    const filter = props.countryData.filter((item) => {
      return item.region === selectedRegion;
    });
    console.log(filter);
    return props.setFilterCountry(filter);
  };

  return (
    <div className={props.darkMode ? "dark-custom-select" : "custom-select"}>
      <select onChange={regionSelect}>
        <option value="">Filter by Region...</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};
export default FilterByRegion;
