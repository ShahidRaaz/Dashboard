import React, { useState } from 'react';

function redirectToGoogleAuthentication() {
  const clientId = "YOUR_CLIENT_ID"; // Replace with your Google OAuth 2.0 client ID
  const redirectUri = "YOUR_REDIRECT_URI"; // Replace with your redirect URI

  const scope = "email profile"; // The Google OAuth 2.0 scopes to request
  const responseType = "code"; // The Google OAuth 2.0 response type to request

  const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

  window.open(url, "_blank"); // Open the URL in a new tab
}

export default redirectToGoogleAuthentication;
