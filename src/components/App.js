import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State variable to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Determine className based on dark mode state
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
