import { useState } from "react";
import { Box, Grid, FlexBox } from "@/components/Container";
import { Artists } from "@/components/Artists";
import { useEffect } from "react";

import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { Main } from "@/components/Main";
import { Typography } from "@/components/Typography";

import { Player } from "@/components/Player";
import { TrackList } from "@/components/TrackList";

import { Card } from "@/components/Card";

const Home = (props) => {
  const [tracks, setTracks] = useState([]);
  return (
    <Grid
      container
      height="100vh"
      areas="'header content' 'header content' 'player player'"
      columns="20% 80%"
      rows="1fr 1fr auto"
    >
      <Grid item area="header" bg_color="#000">
        <Header>
          <Logo />
        </Header>
        {tracks.length !== 0 && <TrackList tracks={tracks} />}
      </Grid>
      <Grid item area="content" bg_color="#121212">
        <Main>
          <Box as="section" color="#fff">
            <Typography as="h2" color="inherit">
              Artistas
            </Typography>
            <FlexBox container width="fit-content" padding="5px" gap="1.5em">
              <Artists
                render={({ artists }) => {
                  return artists.map((artist) => (
                    <FlexBox key={artist.name} item>
                      <Card
                        img_shape="circle"
                        name={artist.name}
                        image={artist.image}
                        type={artist.type}
                      />
                    </FlexBox>
                  ));
                }}
              />
            </FlexBox>
          </Box>
        </Main>
      </Grid>
      <Grid item area="player" bg_color="#181818">
        <Player></Player>
      </Grid>
    </Grid>
  );
};

export default Home;
