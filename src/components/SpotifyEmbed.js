import React from "react";
import "./SpotifyEmbed.css";
import { Spotify } from "react-spotify-embed";
import ReactPlayer from "react-player/youtube";

function SpotifyEmbed() {
  return (
    <div className="spotify">
      <h2>
        Check out our latest single, The Anomaly, and our music video for
        Celestial Abyss:
      </h2>
      <Spotify
        className="spotify-embed"
        wide
        link="https://open.spotify.com/track/4sOxYn6cx9n2pdELcOPyHF?si=e1f96e7ad4074eed"
      />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=k8s1HO8fvus"
        width="80%"
      />
    </div>
  );
}

export default SpotifyEmbed;
