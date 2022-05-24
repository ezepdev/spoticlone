import { FlexBox } from "@/components/Container";
import { Typography } from "@/components/Typography";
import { usePlayer } from "@/hooks/usePlayer";
import { useContext } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { ThemeContext } from "@/contexts/Theme";

export const Track = ({ id, name, index, onChoise }) => {
  const { playingTrack, isPlaying } = usePlayer();
  const { theme } = useContext(ThemeContext);

  return (
    <FlexBox
      key={id}
      item
      container
      alignItems="center"
      onClick={() => onChoise()}
    >
      {(playingTrack === undefined || id != playingTrack.id) && (
        <Typography as="span" color={theme.text.subdued}>
          {index + 1}
        </Typography>
      )}
      <BounceLoader
        speedMultiplier={isPlaying ? 1 : 0}
        loading={playingTrack != undefined && id === playingTrack.id}
        color={theme.essential.base}
        size={15}
      />
      <Typography
        color={
          playingTrack != undefined &&
          id === playingTrack.id &&
          theme.essential.base
        }
        as="p"
        margin="8px"
      >
        {name}
      </Typography>
    </FlexBox>
  );
};
