import { useContext } from "react";
import { ThemeContext } from "@/contexts/Theme";
import { useEffect, useState } from "react";
import { FlexBox, Box } from "@/components/Container/index";
import { Typography } from "@/components/Typography/index";
import { useAuth } from "@/hooks/useAuth";
import { getTracksOfPlaylist } from "@/services";
import ClipLoader from "react-spinners/ClipLoader";
import BounceLoader from "react-spinners/BounceLoader";
import { usePlayer } from "@/hooks/usePlayer";

const ChosenPlaylistLoader = ({ theme }) => (
  <FlexBox
    container
    height="10vh"
    justifyContent="center"
    alignItems="center"
    padding="25px"
  >
    <ClipLoader color={theme.essential.base} loading={true} size="40px" />
  </FlexBox>
);

const Track = ({ id, name, index, onChoise, theme }) => {
  const { playingTrack, isPlaying } = usePlayer();

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

const ChosenPlaylist = ({ playlist = {} }) => {
  const { theme } = useContext(ThemeContext);
  const access_token = useAuth();
  const { setPlayingTrack } = usePlayer();

  console.log(playlist);
  const [loading, setLoading] = useState(true);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    setLoading(true);
    getTracksOfPlaylist(playlist.id, access_token).then((tracks) => {
      setTracks(tracks.slice(0, 10));
      setLoading(false);
    });
  }, [playlist]);

  return loading ? (
    <ChosenPlaylistLoader theme={theme} />
  ) : (
    <Box container maxWidth="100%" padding="25px" color="#fff">
      <Typography
        as="h3"
        size="1.2rem"
        weight={700}
        family="'BIZ UDPGothic', sans-serif"
        capitalize
      >
        {playlist.name}
      </Typography>
      <FlexBox container direction="column">
        {tracks.map(({ track }, index) => (
          <Track
            id={track.id}
            index={index}
            theme={theme}
            name={track.name}
            onChoise={() => setPlayingTrack(track)}
          />
        ))}
      </FlexBox>
    </Box>
  );
};

export { ChosenPlaylist };
