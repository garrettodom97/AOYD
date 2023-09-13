import React from "react";
import "./Album.css";

function Album() {
  return (
    <div className="album">
      <a href="https://authorofyourdownfall.bandcamp.com/merch" target="blank_">
        <h2>Merch</h2>
      </a>
      <a
        href="https://authorofyourdownfall.bandcamp.com/merch/author-of-your-downfall-logo-shirt"
        target="blank_"
      >
        <img src="./images/shirt.jpg" width="500px" height="400px" />
      </a>
      <h2>
        Our shirts are available for sale on{" "}
        <a
          href="https://authorofyourdownfall.bandcamp.com/album/inexorable-anomaly"
          target="blank_"
        >
          Bandcamp
        </a>
      </h2>
      <a
        href="https://authorofyourdownfall.bandcamp.com/album/inexorable-anomaly"
        target="blank_"
      >
        <img
          src="./images/inexorable-anomaly.png"
          width="500px"
          height="500px"
        />
      </a>
      <h2>
        Our brand new EP, Inexorable Anomaly, is out now on all major music
        platforms, and is available for purchase on{" "}
        <a
          href="https://authorofyourdownfall.bandcamp.com/album/inexorable-anomaly"
          target="blank_"
        >
          Bandcamp
        </a>
      </h2>
    </div>
  );
}

export default Album;
