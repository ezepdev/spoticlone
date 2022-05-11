import { ThemeContext } from "@/App";

import { useContext, useState } from "react";
import { Grid } from "@/components/Container";

import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

import { Player } from "@/components/Player";

const Home = () => {
  const { theme } = useContext(ThemeContext);
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
        <Header chosenPlaylist={chosenPlaylist} />
      </Grid>
      <Grid
        item
        area="content"
        maxHeight="100vh"
        overflowY="scroll"
        bgColor={theme.background.base}
      >
        <Main
          onChoisePlaylist={(playlist) => setChosenPlaylist(playlist)}
          theme={theme}
        />
      </Grid>
      {/* 
      <Grid item area="player" bg_color="#181818">
        <Player />
      </Grid> */}
    </Grid>
  );
};

export default Home;
