import { Box, Grid, FlexBox } from "@/components/Container";
import { Artists } from "@/components/Artists";

import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { Main } from "@/components/Main";
import { Typography } from "@/components/Typography";

import { Card } from "@/components/Card";

const App = () => {
  return (
    <Grid
      container
      height="100vh"
      areas="'header header header' 'content content content' 'player player player'"
    >
      <Grid item area="header">
        <Header>
          <Logo />
        </Header>
      </Grid>
      <Grid item area="content">
        <Main>
          <Box as="section" color="#fff">
            <Typography as="h2" color="inherit">
              Artistas
            </Typography>
            <FlexBox container width="fit-content" padding="5px" gap="1.5em">
              <Artists
                render={({ artists }) => {
                  return artists.map((artist) => (
                    <FlexBox
                      key={artist.name}
                      as="a"
                      item
                      text-decoration="none"
                    >
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
      <Grid item area="player"></Grid>
    </Grid>
  );
};

export default App;
