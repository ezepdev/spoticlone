import { FlexBox, Box } from "@/components/Container/index";
import { Typography } from "@/components/Typography/index";
import { useAuth } from "@/hooks/useAuth";
import { getTracksOfPlaylist } from "@/services";
import SpotifyWebPlayer from "react-spotify-web-playback";
import { useEffect, useState } from "react";

const ChosenPlaylist = ({ playlist = {} }) => {
  const access_token = useAuth();
  const [tracks, setTracks] = useState([]);
  const [selectTrack, setSelectTrack] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getTracksOfPlaylist(playlist.id, access_token).then((tracks) => {
      setTracks(tracks.slice(0, 1));
      setLoading(false);
    });
  }, [playlist]);

  console.log(selectTrack);

  return loading || tracks === [] ? (
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
              color={selectTrack === track.id ? null : "inherit"}
              onClick={() => setSelectTrack(track)}
            >
              <Typography as="p">{track.name}</Typography>
              <SpotifyWebPlayer
                token={access_token}
                uris={selectTrack.uri}
                play={true}
              ></SpotifyWebPlayer>
            </FlexBox>
          );
        })}
      </FlexBox>
    </Box>
  );
};

export { ChosenPlaylist };
