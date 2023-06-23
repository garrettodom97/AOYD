import React from "react";
import "./SpotifyEmbed.css";
import { Spotify } from "react-spotify-embed";

function SpotifyEmbed() {
  return (
    <div className="spotify">
      <h2>Check out our latest release:</h2>
      <Spotify className="spotify-embed" wide link="https://open.spotify.com/track/32XWYkB0Mq7ph3Geaf1DdO" />
    </div>
  );
}

export default SpotifyEmbed;