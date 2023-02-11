import React from "react";
import "../styles/trickOrThreat.css";

const TrickOrThreat = ({ style, description, img }) => {
  return (
    <div style={style}>
      <div>
        <div>
          <p className="transparent-text">{description}</p>
        </div>
      </div>
      <img className="img-trick" src={img} alt="" />
    </div>
  );
};

export default TrickOrThreat;
