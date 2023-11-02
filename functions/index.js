const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");


const functions = require('firebase-functions');
const axios = require('axios');

exports.spotifyLogin = functions.https.onRequest(async (req, res) => {
    const code = req.query.code; // The code from Spotify's redirect
    const redirect_uri = "https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=YOUR_FIREBASE_FUNCTION_URL&scope=REQUIRED_SCOPES";

    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', null, {
            params: {
                grant_type: "authorization_code",
                code: code,
                redirect_uri: redirect_uri,
                client_id: "3298c0aed7f940dab9fc68c1d0bbc812",
                client_secret: "4dcdf67d414b4f0192db89958fa16108"
            }
        });
        
        // Save response.data.access_token (and optionally refresh_token) to Firebase Realtime Database or Firestore, associated with the user.
        
        res.redirect('http://127.0.0.1:5500/tunesc-vs/pages/Dashboard.html'); // Redirect back to app
    } catch (error) {
        res.status(500).send(error);
    }
});
