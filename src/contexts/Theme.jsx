import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children, value }) => {
  const [theme, setTheme] = useState(value);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
