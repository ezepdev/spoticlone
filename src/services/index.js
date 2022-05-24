import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
function getToplists(access_token) {
  spotify.setAccessToken(access_token);
  return spotify.getCategoryPlaylists("toplists").then((res) => res.playlists);
}

function getTracksOfPlaylist(id, access_token) {
  spotify.setAccessToken(access_token);
  return spotify.getPlaylistTracks(id, { limit: 10 }).then((res) => res.items);
}

export { getToplists, getTracksOfPlaylist };
