import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function decodeHash(hash) {
  const hash_without_cat = hash.slice(1);

  const list_of_params_and_values = hash_without_cat.split("&");

  return list_of_params_and_values.reduce((hash_params, currentValue) => {
    const [key, value] = currentValue.split("=");
    hash_params[key] = decodeURIComponent(value);
    return hash_params;
  }, {});
}

export const useAuth = () => {
  const location = useLocation();
  const { access_token } = decodeHash(location.hash);

  useEffect(() => {}, []);

  if (access_token) {
    localStorage.setItem("token", JSON.stringify(access_token));
  }
  return access_token;
};
