import React from "react";
import "./Equipment.css";

function Equipment(props) {
  return (
    <div className="equipment">
      <h2>{props.name}</h2>
      <img
        className={props.className}
        src={props.image_path}
        width={props.width}
        height={props.height}
      />
    </div>
  );
}

export default Equipment;
