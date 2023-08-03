import React from "react";
import "./SpotifyEmbed.css";
import { Spotify } from "react-spotify-embed";
import ReactPlayer from "react-player/youtube";

function SpotifyEmbed() {
  return (
    <div className="spotify">
      <h2>Check out our latest release and music video:</h2>
      <Spotify
        className="spotify-embed"
        wide
        link="https://open.spotify.com/track/32XWYkB0Mq7ph3Geaf1DdO"
      />
      <ReactPlayer url="https://www.youtube.com/watch?v=k8s1HO8fvus" width="80%"/>
    </div>
  );
}

export default SpotifyEmbed;
