import React from "react";
import "../styles/coments.css";
import {
  comentText,
  comentAuthor,
  comentOccupation,
  comentText1,
  comentAuthor1,
  comentOccupation1,
} from "../copy/index";

export const Coments = () => {
  return (
    <div className="coments">
      <Coment
        num={5}
        comentText={comentText}
        comentAuthor={comentAuthor}
        comentOccupation={comentOccupation}
        img={"../images/vizual3.png"}
      />
      <Coment
        num={5}
        comentText={comentText1}
        comentAuthor={comentAuthor1}
        comentOccupation={comentOccupation1}
        img={"../images/vizual3.png"}
      />
      <div className="birds">
        <img src="../images/vizual2.png" alt="" />
      </div>
    </div>
  );
};

export const Coment = ({
  num,
  comentText,
  comentAuthor,
  comentOccupation,
  img,
}) => {
  return (
    <div className="coment">
      <div>{Array(num).fill(<img src={img} alt="" />)}</div>
      <p className="coment1">{comentText}</p>
      <p className="name">{comentAuthor}</p>
      <p className="occupation">{comentOccupation}</p>
    </div>
  );
};
