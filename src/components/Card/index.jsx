import { Typography } from "@/components/Typography";
import { FlexBox, Box } from "@/components/Container";
import { useContext, useState } from "react";
import { ThemeContext } from "@/contexts/Theme";

const type_of_borders = {
  picture: "5px",
  circle: "100%",
};

export const Card = ({
  name,
  image,
  type,
  imageShape = "picture",
  onClick,
}) => {
  const [hover, setHover] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <FlexBox
      onClick={onClick}
      container
      direction="column"
      padding="16px"
      maxWidth="180px"
      minWidth="180px"
      borderRadius="5px"
      bgColor={
        !hover
          ? theme.background.elevated.base
          : theme.background.elevated.highlight
      }
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <FlexBox
        item
        marginBottom="1.5rem"
        width="184px"
        height="184px"
        borderRadius={type_of_borders[imageShape]}
        boxShadow="0 8px 24px rgb(0 0 0 / 50%)"
      >
        <Box
          as="img"
          src={image}
          borderRadius="inherit"
          max-width="100%"
          height="100%"
          objectFit="cover"
        />
      </FlexBox>
      <FlexBox
        container
        item
        color={theme.text.base}
        direction="column"
        minHeight="64px"
      >
        <Typography as="h1" size="1rem" margin={0} paddingBottom="4px">
          {name}
        </Typography>
        <Typography as="span" size="0.875rem" color={theme.text.subdued}>
          {type}
        </Typography>
      </FlexBox>
    </FlexBox>
  );
};

export default Card;
