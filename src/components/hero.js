import { React, useState } from "react";
import Popup from "./popup";
import "../styles/hero.css";

const Hero = ({
  isOpen,
  setIsOpen,
  openPopup,
  style,
  title1,
  title2,
  description,
}) => {
  return (
    <div style={style}>
      {isOpen && <Popup setIsOpen={setIsOpen} />}
      <p className="hero-title">
        <span className="yellow-shadow">{title1}</span>{" "}
        <span className="yellow-shadow">{title2} </span>
      </p>
      <p className="hero-description">{description}</p>
      <div className="hero-btn-wraper">
        <button onClick={openPopup} className="hero-btn">
          SCARE OFF YOUR COMPETITION NOW
        </button>
      </div>
    </div>
  );
};

export default Hero;
