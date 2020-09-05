import { useEffect, useContext } from "react";
import { ThemeContext } from "../context/theme-context";

const useLastTheme = () => {
  const { getLastTheme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    toggleTheme(getLastTheme());
  }, [getLastTheme, toggleTheme]);
};

export default useLastTheme;
