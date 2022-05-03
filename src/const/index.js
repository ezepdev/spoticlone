const CLIENT_ID = "14e59a779b4c4c64a15749b104095c1b";
const RESPONSE_TYPE = "token";
const REDIRECT_URI = "http://localhost:3000";
const SCOPES = [
  "user-read-currently-playing",
  "user-top-read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-recently-played",
];

const CREDENTIALS = `client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join(
  "%20"
)}&show_dialog=true`;

const API_URL = "https://accounts.spotify.com";

const ENDPOINT = {
  AUTHORIZE: "/authorize?",
};

export const URL_AUTH = `${API_URL}${ENDPOINT.AUTHORIZE}${CREDENTIALS}`;
