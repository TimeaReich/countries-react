import React from "react";
import DarkLightSwitchButton from "./DarkLightSwitchButton";

const Header = (props) => {
  return (
    <header className={props.darkMode ? "dark-app-header" : "app-header"}>
      <h2>Where in the world?</h2>
      <div className="dark-light-switch-button-div">
        <DarkLightSwitchButton
          setDarkMode={props.setDarkMode}
          darkMode={props.darkMode}
        />
      </div>
    </header>
  );
};
export default Header;
