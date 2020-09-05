import React from "react";

export const ThemeContext = React.createContext({
  getLastTheme: () => {},
  toggleTheme: () => {},
});

export const ThemeProvider = props => {
  return (
    <ThemeContext.Provider
      value={{
        getLastTheme: () => localStorage.getItem("theme") ?? "dark",
        toggleTheme: themeName => {
          document.body.classList.forEach(
            bodyClass =>
              bodyClass.includes("theme") &&
              document.body.classList.remove(bodyClass)
          );
          document.body.classList.add(`${themeName}-theme`);
          localStorage.setItem("theme", themeName);
        },
      }}
      {...props}
    />
  );
};
