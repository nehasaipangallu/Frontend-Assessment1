import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  function onThemeChange(){
    const selectedTheme = mode === "dark" ? "light" : "dark";
    setThemeMode(selectedTheme);
    //document.querySelector("html").setAttribute("theme", selectedTheme);
  }
  const [mode, setThemeMode] = useState("light");
  
  return (
    <ThemeContext.Provider
      value={{
        mode,
        setTheme: () => onThemeChange()
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;