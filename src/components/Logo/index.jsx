import logo from "@/spotify.png";

import { FlexBox, Box } from "@/components/Container";
import { Typography } from "@/components/Typography";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/Theme";

const Image = ({ src }) => (
  <Box as="img" src={src} minWidth="100%" height="100%"></Box>
);

export const Logo = ({ size = "lg" }) => {
  const { theme } = useContext(ThemeContext);

  const logo_sizes = {
    lg: {
      font_size: "6em",
      image_size: {
        width: "200px",
        height: "200px",
      },
    },
    sm: {
      font_size: "1.3em",
      image_size: {
        width: "50px",
        height: "50px",
      },
    },
    md: {},
    xl: {
      font_size: "5em",
    },
  };
  return (
    <FlexBox container padding="10px">
      <FlexBox item>
        <Typography
          as="h1"
          size={logo_sizes[size].font_size}
          weight={700}
          family="'BIZ UDPGothic', sans-serif"
          marginRight="10px"
          color={theme.essential.base}
        >
          Spoticlon
        </Typography>
      </FlexBox>
      <FlexBox
        item
        height={logo_sizes[size].image_size.height}
        width={logo_sizes[size].image_size.width}
      >
        <Image src={logo} />
      </FlexBox>
    </FlexBox>
  );
};
