import { FlexBox } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { ThemeContext } from "@/contexts/Theme";
import { useContext, useState } from "react";

import { Grid } from "@/components/Container";

import { Main } from "@/components/Main";

import { Player } from "@/components/Player";
import { ChosenPlaylist } from "@/components/ChosenPlaylist";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [chosenPlaylist, setChosenPlaylist] = useState({});
  const [selectTrack, setSelectTrack] = useState({});

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
            <Logo />
          </FlexBox>
          <FlexBox item>
            {Object.keys(chosenPlaylist).length !== 0 && (
              <ChosenPlaylist
                playlist={chosenPlaylist}
                onChoiseTrack={(track) => setSelectTrack(track)}
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
        <Main
          onChoisePlaylist={(playlist) => setChosenPlaylist(playlist)}
          theme={theme}
        />
      </Grid>
      <Grid item area="player" bgColor={theme.background.base} padding="10px">
        <Player track={selectTrack} />
      </Grid>
    </Grid>
  );
};

export default Home;
