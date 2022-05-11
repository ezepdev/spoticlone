const CLIENT_ID = "6b1562a946fe42178d476b99eb0b1f92";
const RESPONSE_TYPE = "token";
const REDIRECT_URI = "http://localhost:3000";
const SCOPES = [
  "user-read-currently-playing",
  "user-top-read",
  "user-library-modify",
  "user-library-read",
  "user-read-email",
  "user-read-private",
  "streaming",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-recently-played",
];

const CREDENTIALS = `client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join(
  "%20"
)}&show_dialog=true`;

const SPOTIFY_ACCOUNTS_API_URL = "https://accounts.spotify.com";
const ENDPOINT = {
  AUTHORIZE: "/authorize?",
};

export const AUTH_URL = `${SPOTIFY_ACCOUNTS_API_URL}${ENDPOINT.AUTHORIZE}${CREDENTIALS}`;
export const SPOTIFY_API_URL = "https://api.spotify.com/v1";
