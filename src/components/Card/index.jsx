import { css } from "styled-components";
import { FlexBox, Box } from "@/components/Container";
import { Typography } from "@/components/Typography/index";
import { useState } from "react";

const type_of_borders = {
  picture: "5px",
  circle: "100%",
};

export const Card = ({ name, image, type, img_shape = "picture" }) => {
  const [hover, setHover] = useState(false);

  return (
    <FlexBox
      container
      direction="column"
      padding="16px"
      border-radius="5px"
      bg_color={!hover ? "#181818" : "#2a2a2a"}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <FlexBox
        item
        bg_color="#333"
        margin-bottom="1.5rem"
        width="184px"
        height="184px"
        border-radius={type_of_borders[img_shape]}
        box-shadow="0 8px 24px rgb(0 0 0 / 50%)"
      >
        <Box
          as="img"
          src={image}
          border-radius="inherit"
          max-width="100%"
          height="100%"
          object-fit="cover"
        />
      </FlexBox>
      <FlexBox
        item
        container
        direction="column"
        color="#fff"
        bg_color={!hover ? "inherit" : "#2a2a2a"}
      >
        <Typography
          as="h1"
          font-size="1rem"
          margin={0}
          padding-bottom={"4px"}
          color="inherit"
          bg_color="inherit"
        >
          {name}
        </Typography>
        <Typography
          as="span"
          font-size="0.875rem"
          margin={0}
          color="#a7a7a7"
          bg_color="inherit"
        >
          {type}
        </Typography>
      </FlexBox>
    </FlexBox>
  );
};

export default Card;
