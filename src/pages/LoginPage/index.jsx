import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { AUTH_URL } from "@/const";

const LoginPage = () => {
  const access_token = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (access_token != undefined) return navigate(-1);
  }, []);

  return <a href={AUTH_URL}> Login with Spotify </a>;
};

export { LoginPage };
