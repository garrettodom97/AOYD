import React from "react";
import "./Downfall.css";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Downfall() {
  return (
    <div className="downfall">
      <h2>
        <Link to="/downfall">Investigate the S.T.C.S. Downfall</Link>
      </h2>
      <div className="typewriter">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                'Incoming transmission.\n Source unknown.\n Relaying message now:\n "I am your end. \n I am the devourer of space and time itself. \n The author of galactic destruction...\n I am...\n the Author of Your Downfall..."'
              )
              .callFunction(() => {
                console.log("String typed out!");
              })
              .start();
          }}
        />
      </div>
      <Link to="/downfall">
        <img
          src="./images/AOYD-Pulp-Cover.jpg"
          width="400px"
          height="600px"
        ></img>
      </Link>
      <h2>
        Discover the story of the Downfall, a Sol-Techno Conglomerate Starship
        facing peril and impossible odds on its galatic journey through the
        medium of Instrumental Progressive Metal.
      </h2>
    </div>
  );
}

export default Downfall;
