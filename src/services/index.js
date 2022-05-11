import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
function getToplists(access_token) {
  spotify.setAccessToken(access_token);
  return spotify
    .getCategoryPlaylists("toplists")
    .then((response) => response["playlists"]);
}

function getTracksOfPlaylist(id, access_token) {
  spotify.setAccessToken(access_token);
  return spotify.getPlaylistTracks(id, { limit: 20 }).then((res) => {
    return res.items;
  });
}

export { getToplists, getTracksOfPlaylist };
