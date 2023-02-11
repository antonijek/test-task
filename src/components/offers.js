import React from "react";
import Offer from "./offer";
import "../styles/offers.css";
import {
  titleOfer,
  titleOfer1,
  titleOfer2,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
} from "../components/utils";
const Offers = () => {
  return (
    <div className="offers">
      <Offer title={titleOfer} p1={p1} p2={p2} p3={p3} p4={p4} />
      <Offer title={titleOfer1} p1={p5} p2={p6} p3={p7} />
      <Offer title={titleOfer2} p1={p1} p2={p2} p3={p3} p4={p4} />
    </div>
  );
};

export default Offers;
