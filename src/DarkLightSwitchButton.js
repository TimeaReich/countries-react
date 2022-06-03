import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const DarkLightSwitchButton = (props) => {
  const isDarkMode = props.darkMode
    ? "dark-mode-button-dark"
    : "dark-mode-button";
  return (
    <button
      className={isDarkMode}
      onClick={() => {
        props.setDarkMode(!props.darkMode);
      }}
    >
      <FontAwesomeIcon icon={faMoon} />
      <p className={isDarkMode}>Dark Mode</p>
    </button>
  );
};
export default DarkLightSwitchButton;
