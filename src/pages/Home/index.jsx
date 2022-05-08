import { useEffect, useState } from "react";
import { Box, Grid, FlexBox } from "@/components/Container";
import { Playlists } from "@/components/Playlists";

import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { Main } from "@/components/Main";
import { Typography } from "@/components/Typography";

import { Player } from "@/components/Player";
import { TrackList } from "@/components/TrackList";

import { Card } from "@/components/Card";

const Home = () => {
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
        {/* {tracks.length !== 0 && <TrackList tracks={tracks} />} */}
      </Grid>
      <Grid
        item
        area="content"
        max-height="100vh"
        overflowY="scroll"
        bg_color="#121212"
      >
        <Main>
          <Box as="section" color="#fff">
            <Typography as="h2" color="inherit">
              Toplists
            </Typography>
            <FlexBox
              wrap
              container
              width="fit-content"
              padding="5px"
              gap="1.5em"
            >
              <Playlists
                render={({ playlists }) => {
                  return playlists.map((playlist) => (
                    <FlexBox key={playlist.name} item>
                      <Card
                        name={playlist.name}
                        image={playlist.images[0].url}
                        type={playlist.type}
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
