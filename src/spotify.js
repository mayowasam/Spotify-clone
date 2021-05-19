export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000";
const clientId = process.env.REACT_APP_CLIENT_ID;
const scopes = [
    "streaming",
    'user-read-email',
    'user-read-private',
    'user-library-read',
    'user-library-modify',
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    'user-read-playback-position',
    "user-modify-playback-state",
    'playlist-read-collaborative',
    'playlist-modify-public',
    'playlist-modify-private',
    'playlist-read-private',
    'playlist-read-collaborative',

]

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initialValue, currentValue) => {
            let parts = currentValue.split('=');
            initialValue[parts[0]] = decodeURIComponent(parts[1]);
            return initialValue
        }, {}
        )
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`