import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import { RequireAuth } from "@/components/RequireAuth";
import { LoginPage } from "@/pages/LoginPage";
const App = () => {
  return (
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
  );
};

export default App;
