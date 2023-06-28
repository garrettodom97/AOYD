import React from "react";
import "./Gear.css";
import Equipment from "../components/Equipment";

function Gear() {
  return (
    <div className="Gear">
      <h2>AOYD Gear</h2>
      <Equipment name="Ibanez RGD71ALMS" image_path="./images/ibanez.png" width="200px" height="600px"/>
      <Equipment name="Strandberg Boden NX 8" image_path="./images/strandberg.png" width="400px" height="600px"/>
    </div>
  );
}

export default Gear;