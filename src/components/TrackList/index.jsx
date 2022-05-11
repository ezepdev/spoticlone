import { FlexBox } from "@/components/Container";
import { Typography } from "@/components/Typography/index";

export const TrackList = ({ tracks }) => {
  console.log(tracks);
  return (
    <FlexBox container direction="column" padding="20px">
      <Typography as="h3"></Typography>
      {tracks.map(({ track }) => (
        <Typography as="button">{track.name}</Typography>
      ))}
    </FlexBox>
  );
};
