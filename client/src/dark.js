import React from "react";
import useDarkMode from "./hooks/useDarkMode";
import useLocalStorage from "./hooks/useLocalStorage";

const Dark = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div className="dark-mode__toggle">
      <button
        onClick={toggleMode}
        className={darkMode ? "toggle toggled" : "toggle"}
      >
        Dark Mode
      </button>
    </div>
  );
};

export default Dark;
