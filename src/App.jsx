import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { URL_AUTH } from "@/const";
import Home from "@/pages/Home";

function decodeHash(hash) {
  const hash_without_cat = hash.slice(1);

  const list_of_params_and_values = hash_without_cat.split("&");

  return list_of_params_and_values.reduce((hash_params, currentValue) => {
    const [key, value] = currentValue.split("=");
    hash_params[key] = value;
    return hash_params;
  }, {});
}

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { access_token } = decodeHash(location.hash);
  if (access_token === undefined)
    return <Navigate to="/login" state={{ from: location }} replace />;
  return children;
};

const LoginPage = () => {
  return <a href={URL_AUTH}> Login with Spotify </a>;
};

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
