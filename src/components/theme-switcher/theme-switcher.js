import React, { useContext } from "react";
import styles from "./theme-switcher.module.css";
import { ThemeContext } from "../../context/theme-context";

const ThemeSwitcher = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.dotWrapper}>
      <div className={styles.lightDot} onClick={() => toggleTheme("light")} />
      <div className={styles.darkDot} onClick={() => toggleTheme("dark")} />
    </div>
  );
};

export default ThemeSwitcher;
