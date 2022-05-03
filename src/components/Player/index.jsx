import { FlexBox } from "@/components/Container";
import { Typography } from "@/components/Typography/index";

export const Player = (props) => {
  return (
    <FlexBox
      container
      justify-content="space-evenly"
      align-items="center"
      min-height="80px"
      width="100%"
      color="white"
    >
      <Typography as="p" color="white">
        Previous
      </Typography>
      <Typography as="h2" color="white">
        Pausar
      </Typography>
      <Typography as="h2" color="white">
        Reproducir
      </Typography>

      <Typography as="p" color="white">
        Next
      </Typography>
    </FlexBox>
  );
};
