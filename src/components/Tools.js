import React from "react";
import "./Tools.css";
import { Link } from "react-router-dom";

function Tools() {
  return (
    <div className="tools">
      <h2>
        <Link to="/gear">Tools of the Trade</Link>
      </h2>
      <div className="gear-images">
        <img src="./images/strandberg.png" width="200px" height="300px" />
        <img src="./images/ibanez.png" width="100px" height="300px" />
      </div>
      <p>Check out the gear used by the crew of the S.C.T.S Downfall</p>
    </div>
  );
}

export default Tools;
