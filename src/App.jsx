import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import { RequireAuth } from "@/components/RequireAuth";
import { LoginPage } from "@/pages/LoginPage";
import { ThemeProvider } from "@/contexts/Theme";
import { THEME } from "@/const";

const App = () => {
  return (
    <ThemeProvider value={THEME.DARK}>
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
