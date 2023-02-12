import React from "react";
import Offer from "./offer";
import "../styles/offers.css";
import {
  firstOfertitle,
  secondOfertitle,
  thirdOfertitle,
  firstOfertitlep1,
  firstOfertitlep2,
  firstOfertitlep3,
  firstOfertitlep4,
  secondOfertitlep1,
  secondOfertitlep2,
  secondOfertitlep3,
} from "../copy/index";
const Offers = ({ style }) => {
  return (
    <div style={style} className="offers">
      <Offer
        title={firstOfertitle}
        text1={firstOfertitlep1}
        text2={firstOfertitlep2}
        text3={firstOfertitlep3}
        text4={firstOfertitlep4}
      />
      <Offer
        title={secondOfertitle}
        text1={secondOfertitlep1}
        text2={secondOfertitlep2}
        text3={secondOfertitlep3}
      />
      <Offer
        title={firstOfertitle}
        text1={firstOfertitlep1}
        text2={firstOfertitlep2}
        text3={firstOfertitlep3}
        text4={firstOfertitlep4}
      />
      <div className="two-birds">
        <img src="../images/vizual2.png" alt="" />
      </div>
    </div>
  );
};

export default Offers;
