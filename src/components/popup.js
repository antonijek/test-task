import React from "react";
import "../styles/popup.css";

const Popup = ({ setIsOpen }) => {
  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="popup">
      <button onClick={closePopup} className="close-popup">
        x
      </button>
      <div className="logo-popup">
        <img src="../../images/logo.svg" alt="" />
      </div>
      <div className="popup-container">
        <div>
          <h2>NEW YEAR, NEW SAVINGS</h2>
          <p className="popup-discount">
            <span>50% OFF</span>
          </p>
          <p className="popup-discount">
            <span> ON MONTHLY</span>
          </p>
          <p className="popup-discount">
            <span> SUBSCRIPTION</span>
          </p>
          <p className="popup-discount">
            <span> FOR 2 YEARS</span>
          </p>
          <p className="offer-expire">
            Offer valid from February 1, 2023 to February 1,2025
          </p>
          <h2 className="offer-dont-miss">DON'T MISS OUT!</h2>
          <h3>ENJOY LONG-TERM SAVINGS WIDTH OUR INCREDIBLE DEAL</h3>
        </div>
      </div>
    </div>
  );
};

export default Popup;
