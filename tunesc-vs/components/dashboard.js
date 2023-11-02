document.getElementById('spotifyButton').addEventListener('click', function() {
    // Spotify App's Client ID
    const clientID = '3298c0aed7f940dab9fc68c1d0bbc812';
    
    // The URL where Spotify will redirect back after the user logs in and approves
    const redirectURI = 'http://127.0.0.1:55000/callback'; // redirect link from spotify dev account

    // Spotify Authorization Endpoint
    const authEndpoint = 'https://accounts.spotify.com/authorize';

    // The required scopes (permissions) for your application.
    // You can request multiple scopes by separating them with spaces
    const scopes = 'user-read-private user-read-email';

    // Construct the URL
    const authURL = `${authEndpoint}?client_id=${clientID}&redirect_uri=${encodeURIComponent(redirectURI)}&scope=${encodeURIComponent(scopes)}&response_type=token&show_dialog=true`;

    // Redirect to the Spotify login page
    window.location.href = authURL;
});
