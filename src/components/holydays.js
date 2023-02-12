import React from "react";
import "../styles/holydays.css";
import { descriptionTrickOrThreat } from "../copy/index";

const Holydays = () => {
  return (
    <div>
      <p className="grey-text">{descriptionTrickOrThreat}</p>
    </div>
  );
};

export default Holydays;
