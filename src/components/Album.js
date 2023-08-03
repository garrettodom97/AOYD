import React from "react";
import "./Album.css";

function Album() {
  return (
    <div className="album">
      <a href="https://authorofyourdownfall.bandcamp.com/album/inexorable-anomaly">
        <img
          src="./images/inexorable-anomaly.png"
          width="500px"
          height="500px"
        />
      </a>
      <h2>
        Our brand new EP, Inexorable Anomaly, is out now on all major music
        platforms
      </h2>
    </div>
  );
}

export default Album;
