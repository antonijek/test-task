import { React, useState } from "react";
import Popup from "./popup";
import "../styles/hero.css";

const Hero = ({ style, title1, title2, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  return (
    <div style={style}>
      {isOpen && <Popup setIsOpen={setIsOpen} />}
      <p className="hero-title">
        <span>{title1}</span> <span>{title2} </span>
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
