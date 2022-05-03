import logo from "@/spotify.png";

import { FlexBox, Box } from "@/components/Container";
import { Typography } from "@/components/Typography/index";

const Image = ({ src }) => (
  <Box as="img" src={src} min-width="100%" height="100%"></Box>
);

export const Logo = () => (
  <FlexBox container padding="10px" bg_color="inherit">
    <Typography
      as="h1"
      size="1.3em"
      weight={700}
      family="'BIZ UDPGothic', sans-serif"
      margin-right="10px"
    >
      Spoticlon
    </Typography>
    <Box width="50px" height="50px">
      <Image src={logo} />
    </Box>
  </FlexBox>
);
