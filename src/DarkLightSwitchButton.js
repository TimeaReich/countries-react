import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const DarkLightSwitchButton = (props) => {
  return (
    <button
      className={props.darkMode ? "dark-mode-button-dark" : "dark-mode-button"}
      onClick={() => {
        props.setDarkMode(!props.darkMode);
      }}
    >
      <FontAwesomeIcon icon={faMoon} />
      <p
        className={
          props.darkMode ? "dark-mode-button-dark" : "dark-mode-button"
        }
      >
        Dark Mode
      </p>
    </button>
  );
};
export default DarkLightSwitchButton;
