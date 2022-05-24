import SpotifyWebPlayer from "react-spotify-web-playback";
import { useAuth } from "@/hooks/useAuth";
import { ThemeContext } from "@/contexts/Theme";
import { useContext } from "react";

export const Player = ({ currentTrack = {}, onPlayChange }) => {
  const access_token = useAuth();
  const { theme } = useContext(ThemeContext);

  return (
    <SpotifyWebPlayer
      token={access_token}
      uris={currentTrack.uri}
      callback={(status) => {
        onPlayChange(status.isPlaying);
      }}
      play={Object.keys(currentTrack).length !== 0}
      magnifySliderOnHover
      syncExternalDevice={false}
      styles={{
        bgColor: theme.background.base,
        color: theme.text.base,
        height: "80px",
      }}
    />
  );
};
