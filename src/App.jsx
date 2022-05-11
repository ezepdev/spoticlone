import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import { RequireAuth } from "@/components/RequireAuth";
import { LoginPage } from "@/pages/LoginPage";
import { createContext, useState } from "react";

const dark_theme = {
  color: "#1ED760",
  text: {
    base: "#fff",
    subdued: "#a7a7a7",
  },
  essential: {
    base: "#1ed760",
  },
  background: {
    base: "#121212",
    press: "#000",
    elevated: {
      base: "#181818",
      highlight: "#2a2a2a",
    },
  },
};

export const ThemeContext = createContext({});

const ThemeProvider = ({ children, value }) => {
  const [theme, setTheme] = useState(value);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const App = () => {
  return (
    <ThemeProvider value={dark_theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
