import { FlexBox } from "@/components/Container/index";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { AUTH_URL } from "@/const";
import { Logo } from "@/components/Logo";
import { ThemeContext } from "@/contexts/Theme";
import { Typography } from "@/components/Typography/index";

const LoginPage = () => {
  const access_token = useAuth();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (access_token != undefined) return navigate(-1);
  }, []);

  return (
    <>
      <FlexBox
        container
        height="100vh"
        bgColor={theme.background.press}
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Logo />
        <a href={AUTH_URL}>Login with Spotify</a>
      </FlexBox>
    </>
  );
};

export { LoginPage };
