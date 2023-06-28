import React from "react";
import "./Downfall.css";
import { Link } from "react-router-dom";

function Downfall() {
  return (
    <div className="downfall">
      <h2>
        <Link to="/downfall">Investigate the S.T.C.S. Downfall</Link>
      </h2>
      <p>
        Discover the story of the Downfall, a Sol-Techno Conglomerate Starship
        facing peril and impossible odds on its galatic journey through the
        medium of Instrumental Progressive Metal
      </p>
    </div>
  );
}

export default Downfall;
