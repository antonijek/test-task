import React from "react";
import "../styles/cards.css";
import { cardText1, cardText2, cardText3 } from "../copy";

export const ThreeCards = () => {
  return (
    <div className="cards">
      <Card title="Available in 45+ world languages" cardText={cardText1} />
      <Card
        title="Online payments in 45+ countrie and 135 currencies"
        cardText={cardText2}
      />
      <Card title="Live support" cardText={cardText3} />

      <div className="grey-bird">
        <img src="../images/vizual5.png" alt="" />
      </div>
      <div className="just-two-birds">
        <img src="../images/vizual2.png" alt="" />
      </div>
      <div className="pumpkins">
        <img src="../images/vizual4.png" alt="" />
      </div>
    </div>
  );
};

export const Card = ({ title, cardText }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="text">
        <p className="card-text">{cardText}</p>
      </div>
    </div>
  );
};
