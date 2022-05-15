import { useContext } from "react";
import { ThemeContext } from "@/contexts/Theme";
import { useEffect, useState } from "react";
import { FlexBox, Box } from "@/components/Container/index";
import { Typography } from "@/components/Typography/index";
import { useAuth } from "@/hooks/useAuth";
import { getTracksOfPlaylist } from "@/services";
import ClipLoader from "react-spinners/ClipLoader";
import BounceLoader from "react-spinners/BounceLoader";

const ChosenPlaylist = ({ playlist = {}, onChoiseTrack }) => {
  const { theme } = useContext(ThemeContext);
  const access_token = useAuth();

  const [tracks, setTracks] = useState([]);
  const [chosenTrack, setChosenTrack] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getTracksOfPlaylist(playlist.id, access_token).then((tracks) => {
      setTracks(tracks.slice(0, 9));
      setLoading(false);
    });
  }, [playlist]);

  return loading ? (
    <FlexBox container height="100%" justifyContent="center" padding="30px">
      <ClipLoader color={theme.essential.base} loading={true} size="50px" />
    </FlexBox>
  ) : (
    <Box container width="100%" padding="20px" color="#fff">
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
        {tracks.map(({ track }, index) => {
          return (
            <FlexBox
              key={track.id}
              item
              container
              alignItems="center"
              onClick={() => {
                onChoiseTrack(track);
                setChosenTrack(track.id);
              }}
            >
              <>
                {track.id != chosenTrack && (
                  <Typography as="span" margin="0 8px">
                    {index + 1}
                  </Typography>
                )}
                <BounceLoader
                  loading={track.id === chosenTrack}
                  color={theme.essential.base}
                  size={25}
                />
              </>
              <Typography
                color={track.id === chosenTrack && theme.essential.base}
                as="p"
                margin="8px"
              >
                {track.name}
              </Typography>
            </FlexBox>
          );
        })}
      </FlexBox>
    </Box>
  );
};

export { ChosenPlaylist };
