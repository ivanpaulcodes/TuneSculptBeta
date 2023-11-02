const functions = require("firebase-functions");
const axios = require("axios");
const logger = require("firebase-functions/logger");

// Retrieve your Spotify credentials from Firebase environment configuration
const clientId = functions.config().spotify.client_id;
const clientSecret = functions.config().spotify.client_secret;

exports.spotifyLogin = functions.https.onRequest(async (req, res) => {
  const code = req.query.code;

  const redirectUri = "http://localhost:5500/callback";

  try {
    const response = await axios.post("https://accounts.spotify.com/api/token", null, {
      params: {
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret
        }
    });

    logger.log("Access Token:", response.data.access_token);

    res.redirect("http://127.0.0.1:5500/tunesc-vs/pages/Dashboard.html");
  } catch (error) {
    logger.error("Error during Spotify login:", error);
    res.status(500).send("Internal Server Error");
  }
});
