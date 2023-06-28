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
                "Discover the story of the Downfall, a Sol-Techno Conglomerate Starship facing peril and impossible odds on its galatic journey through the medium of Instrumental Progressive Metal..."
              )
              .callFunction(() => {
                console.log("String typed out!");
              })
              .start();
          }}
        />
      </div>
    </div>
  );
}

export default Downfall;
