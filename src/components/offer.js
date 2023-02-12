import React from "react";
import "../styles/offer.css";
import { Link } from "react-router-dom";

const Offer = ({ title, text1, text2, text3, text4 }) => {
  return (
    <div className="offer">
      <p className="offer-title">{title}</p>
      <p className="advertises">{text1}</p>
      <p className="advertises">{text2}</p>
      <p className="advertises">{text3}</p>
      <p className="advertises">{text4}</p>
      <Link to="/packages" className="offer-btn">
        See the offer
      </Link>
    </div>
  );
};

export default Offer;
