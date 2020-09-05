import React from "react";
import { ThemeProvider } from "./src/context/theme-context";
import "./src/styles/global.css";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
