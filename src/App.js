import { useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./styles/css/styles.css";

function App() {
  // Sets the initial state of theme based on user's system preference
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark-theme"
    : "light-theme";
  const [theme, setTheme] = useState(preferredTheme);

  return (
    <div
      className={
        theme === "light-theme"
          ? "wrapper grid-flow light-theme"
          : "wrapper grid-flow dark-theme"
      }
    >
      <Navbar
        handleClick={() =>
          setTheme(theme === "light-theme" ? "dark-theme" : "light-theme")
        }
      />
      <Main />
    </div>
  );
}

export default App;
