import React from "react";
import "../styles/alarminglyText.css";
import { descriptionHero } from "../copy/index";

const AlarminglyText = ({ openPopup }) => {
  return (
    <div className="mobile-text">
      <p className="hero-descript">{descriptionHero}</p>
      <div className="scare-button">
        <button className="hero-button" onClick={openPopup}>
          SCARE OFF YOUR COMPETITION NOW
        </button>
      </div>
    </div>
  );
};

export default AlarminglyText;
