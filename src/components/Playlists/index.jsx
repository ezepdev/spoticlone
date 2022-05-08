import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useAuth } from "@/hooks/useAuth";

export const Playlists = ({ render }) => {
  const [playlists, setPlaylists] = useState([]);
  const access_token = useAuth();

  useEffect(() => {
    let spotify = new SpotifyWebApi();
    let toplists_category_id = "toplists";
    spotify.setAccessToken(access_token);
    spotify
      .getCategoryPlaylists(toplists_category_id)
      .then((res) => setPlaylists(res.playlists.items));
  }, []);

  if (playlists === []) return <h1>Cargando</h1>;

  return render({ playlists });
};
