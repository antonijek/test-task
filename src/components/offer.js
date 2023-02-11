import React from "react";
import "../styles/offer.css";

const Offer = ({ title, p1, p2, p3, p4 }) => {
  return (
    <div className="offer">
      <p className="offer-title">{title}</p>
      <p className="advertises">{p1}</p>
      <p className="advertises">{p2}</p>
      <p className="advertises">{p3}</p>
      <p className="advertises">{p4}</p>
      <button className="offer-btn">See the offer</button>
    </div>
  );
};

export default Offer;
