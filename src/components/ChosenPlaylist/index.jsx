import { useContext } from "react";
import { ThemeContext } from "@/contexts/Theme";
import { useEffect, useState } from "react";
import { FlexBox, Box } from "@/components/Container/index";
import { Typography } from "@/components/Typography/index";
import { useAuth } from "@/hooks/useAuth";
import { getTracksOfPlaylist } from "@/services";

const ChosenPlaylist = ({ playlist = {}, onChoiseTrack }) => {
  const access_token = useAuth();

  const { theme } = useContext(ThemeContext);
  const [tracks, setTracks] = useState([]);
  const [chosenTrack, setChosenTrack] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getTracksOfPlaylist(playlist.id, access_token).then((tracks) => {
      setTracks(tracks.slice(0, 5));
      setLoading(false);
    });
  }, [playlist]);

  return loading || tracks == [] ? (
    <Box container max-width="100%" padding="30px" color="#fff">
      Cargando
    </Box>
  ) : (
    <Box container max-width="100%" padding="30px" color="#fff">
      <Typography as="h3">{playlist.name}</Typography>
      <FlexBox container direction="column" color="inherit">
        {tracks.map(({ track }) => {
          return (
            <FlexBox
              key={track.id}
              item
              marginLeft="20px"
              onClick={() => {
                onChoiseTrack(track);
                setChosenTrack(track.id);
              }}
            >
              <Typography
                color={track.id === chosenTrack && theme.essential.base}
                as="p"
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
