import logo from "@/spotify.png";

import { FlexBox, Box } from "@/components/Container";
import { Typography } from "@/components/Typography";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/Theme";

const Image = ({ src }) => (
  <Box as="img" src={src} minWidth="100%" height="100%"></Box>
);

export const Logo = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <FlexBox container padding="10px">
      <FlexBox item>
        <Typography
          as="h1"
          size="1.3em"
          weight={700}
          family="'BIZ UDPGothic', sans-serif"
          marginRight="10px"
          color={theme.essential.base}
        >
          Spoticlon
        </Typography>
      </FlexBox>
      <FlexBox item width="50px" height="50px">
        <Image src={logo} />
      </FlexBox>
    </FlexBox>
  );
};
