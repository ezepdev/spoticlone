import { useContext, useState } from "react";
import { ThemeContext } from "@/contexts/Theme";

import { usePlayer } from "@/hooks/usePlayer";

import { FlexBox } from "@/components/Container";
import { Typography } from "@/components/Typography/index";
import { Logo } from "@/components/Logo";

import { Grid } from "@/components/Container";

import { Main } from "@/components/Main";

import { Player } from "@/components/Player";
import { ChosenPlaylist } from "@/components/ChosenPlaylist";

import { isEmptyObject } from "@/helpers";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { playingTrack, setPlayingTrack, setIsPlaying } = usePlayer();
  const [chosenPlaylist, setChosenPlaylist] = useState({});

  return (
    <Grid
      container
      height="100vh"
      areas="'header content' 'header content' 'player player'"
      columns="300px auto"
      rows="1fr 1fr auto"
    >
      <Grid item area="header" bgColor={theme.background.press}>
        <FlexBox container as="header" direction="column" padding="10px">
          <FlexBox item>
            <Logo size="sm" />
          </FlexBox>
          <FlexBox item>
            {isEmptyObject(chosenPlaylist) ? (
              <Typography color={theme.text.base}>
                Selecciona una playlist
              </Typography>
            ) : (
              <ChosenPlaylist
                playlist={chosenPlaylist}
                onChoiseTrack={(track) => setPlayingTrack(track)}
              />
            )}
          </FlexBox>
        </FlexBox>
      </Grid>
      <Grid
        item
        area="content"
        overflowY="scroll"
        bgColor={theme.background.base}
      >
        <Main onChoisePlaylist={(playlist) => setChosenPlaylist(playlist)} />
      </Grid>
      <Grid item area="player" bgColor={theme.background.base} padding="10px">
        <Player
          currentTrack={playingTrack}
          onPlayChange={(isPlaying) => setIsPlaying(isPlaying)}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
