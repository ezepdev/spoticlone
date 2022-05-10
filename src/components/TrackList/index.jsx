import { FlexBox } from "@/components/Container";
import { Typography } from "@/components/Typography/index";

export const TrackList = ({ tracks }) => {
  return (
    <FlexBox container direction="column" padding="20px">
      {tracks.map((track) => (
        <Typography as="button">{track}</Typography>
      ))}
    </FlexBox>
  );
};
