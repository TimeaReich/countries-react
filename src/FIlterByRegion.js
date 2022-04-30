import React, { useEffect } from "react";


const FilterByRegion = (props) => {
  const regions = [];
  props.countryData.filter((item) => {
    if (!regions.includes(item.region)) {
      regions.push(item.region);
    }
    return regions;
  });
  regions.sort((a, b) => {
    return a > b ? 1 : a < b ? -1 : 0;
  });

  console.log(props.selectedRegion);

  const regionSelect = (e) => {
    props.setSelectedRegion(e.target.value);
    props.setFilterCountry(
      props.countryData.filter((item) => {
        return item.region
          .toUpperCase()
          .includes(props.selectedRegion.toUpperCase());
      })
    );
  };
  useEffect(() => {
    let filter = props.countryData.filter((item) => {
      return item.region
        .toUpperCase()
        .includes(props.selectedRegion.toUpperCase());
    });
    props.setFilterCountry(filter);
  }, [props.selectedRegion]);

  return (
    <div className={props.darkMode ? "dark-custom-select" : "custom-select"}>
      <select onChange={regionSelect}>
        {regions.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FilterByRegion;
