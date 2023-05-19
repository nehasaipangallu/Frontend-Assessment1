import React, { useContext } from "react";

import Switch from "react-switch";
// import { IoMdSunny, IoMdMoon } from "react-icons/all";
import {
  faMoon,
  faSun
 } from "@fortawesome/free-solid-svg-icons";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeContext } from "../themeprovider/ThemeProvider";

const getStyles = (mode) => ({
  switch: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    fontSize: 15,
    paddingLeft: mode === "dark" ? 30 : 10
  }
});

const SwitchTheme = () => {
  const { setTheme, mode } = useContext(ThemeContext);
 
  const styles = getStyles(mode);

  /* theme attr to root element*/
  document.documentElement.classList.add('theme-transition')
  document.documentElement.setAttribute('theme', mode)
  window.setTimeout(function() {
    document.documentElement.classList.remove('theme-transition')
  }, 1000);

  return (
    <Switch
      checked={mode === "light" ? true : false}
      height={20}
      width={50}
      offColor="#1d1f2f"
      onColor="#FDB813"
      className="mt-4"
      checkedIcon={
        <div style={styles.switch} color="white" className="light" ><FontAwesomeIcon icon={faSun}  className="mt-1" /></div>
      }
      uncheckedIcon={
        <div style={styles.switch} color="white" className="dark" ><FontAwesomeIcon icon={faMoon}  className="mt-1 pading-right"/></div>
      }
      onChange={setTheme}
    />
  );
};

export default SwitchTheme;