import React from "react";
import "./Gear.css";
import Equipment from "../components/Equipment";

function Gear() {
  return (
    <div className="Gear">
      <h2>AOYD Gear</h2>
      <Equipment
        className="ibanez"
        name="Ibanez RGD71ALMS"
        image_path="./images/ibanez.png"
        width="200px"
        height="600px"
      />
      <Equipment
        className="strandberg"
        name="Strandberg Boden NX 8"
        image_path="./images/strandberg.png"
        width="400px"
        height="600px"
      />
      <Equipment
        className="warwick"
        name="Warwick Masterbuilt Thumb NT"
        image_path="./images/artax.png"
        width="200px"
        height="600px"
      />
      <Equipment
        name="Pacific Drums by DW, FS Series"
        image_path="./images/drums.jpg"
        width="400px"
        height="250px"
        className="drums"
      />
    </div>
  );
}

export default Gear;
