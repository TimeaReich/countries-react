import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const DarkLightSwitchButton = (props) => {
  return (
    <button
      className="dark-mode-button"
      onClick={() => {
        props.setDarkMode(!props.darkMode);
      }}
    >
      <FontAwesomeIcon icon={faMoon} />
      <p>Dark Mode</p>
    </button>
  );
};
export default DarkLightSwitchButton;
