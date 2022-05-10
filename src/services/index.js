import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
function getToplists(access_token) {
  spotify.setAccessToken(access_token);
  return spotify
    .getCategoryPlaylists("toplists")
    .then((response) => response["playlists"]);
}

export { getToplists };
