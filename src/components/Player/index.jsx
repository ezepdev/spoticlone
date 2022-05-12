import { FlexBox } from "@/components/Container";
import { Typography } from "@/components/Typography/index";
import { useAuth } from "@/hooks/useAuth";
import SpotifyWebPlayer from "react-spotify-web-playback";
import { ThemeContext } from "@/contexts/Theme";
import { useContext } from "react";

export const Player = ({ track = {} }) => {
  const access_token = useAuth();
  const { theme } = useContext(ThemeContext);

  return (
    <SpotifyWebPlayer
      token={access_token}
      uris={track.uri || []}
      play={Object.keys(track).length !== 0}
      magnifySliderOnHover
      syncExternalDevice={false}
      styles={{
        bgColor: theme.background.base,
        color: theme.text.base,
        height: "80px",
      }}
    ></SpotifyWebPlayer>
  );
};
