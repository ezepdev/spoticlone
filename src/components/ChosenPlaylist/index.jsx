import { useEffect, useState } from "react";
import { FlexBox, Box } from "@/components/Container/index";
import { Typography } from "@/components/Typography/index";
import { useAuth } from "@/hooks/useAuth";
import { getTracksOfPlaylist } from "@/services";
import { usePlayer } from "@/hooks/usePlayer";
import { ChosenPlaylistLoader } from "@/components/Loaders";
import { Track } from "@/components/Track";

const ChosenPlaylist = ({ playlist = {} }) => {
  const access_token = useAuth();
  const { setPlayingTrack } = usePlayer();

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
    <ChosenPlaylistLoader />
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
            name={track.name}
            onChoise={() => setPlayingTrack(track)}
          />
        ))}
      </FlexBox>
    </Box>
  );
};

export { ChosenPlaylist };
