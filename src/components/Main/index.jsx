import { Box, FlexBox } from "@/components/Container";
import { Card } from "@/components/Card";
import { Playlists } from "@/components/Playlists";
import { Typography } from "@/components/Typography";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/Theme";

export const Main = ({ onChoisePlaylist }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Box as="main" padding="10px 30px" color="#fff" scrollbar>
      <Box as="section" color={theme.text.base}>
        <Typography as="h2">TOPLISTS</Typography>
        <FlexBox container wrap width="fit-content" padding="5px" gap="1.5em">
          <Playlists
            render={({ playlists }) => {
              return playlists.map((playlist) => (
                <FlexBox key={playlist.name} item>
                  <Card
                    onClick={() => onChoisePlaylist(playlist)}
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
    </Box>
  );
};
