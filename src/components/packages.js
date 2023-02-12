import React from "react";
import "../styles/packages.css";
import { list1, list2, list3 } from "../copy/index";

export const Packages = () => {
  return (
    <div className="packages">
      <div className="bird-container">
        <div className="right-birds">
          <img src="../images/vizual2.png" alt="" />
        </div>
        <div className="left-birds">
          <img src="../images/vizual2.png" alt="" />
        </div>
      </div>

      <div className="package-container">
        <h3>50% discount on website creation</h3>
      </div>
      <div className="three-packages">
        {" "}
        <Package
          list={list1}
          name="Basic"
          monthPrice="$29 per month"
          subtitle={"Start your online biusness"}
          oldPrice="$299"
          newPrice={149.5}
        />
        <Package
          list={list2}
          name="Advanced"
          monthPrice="$69 per month"
          subtitle="Everything in Basic, plus"
          oldPrice="$499"
          newPrice={249.5}
        />
        <Package
          list={list3}
          name="Unlimited"
          monthPrice="$149 per month"
          subtitle="Everything in Advance, plus"
          oldPrice="$999"
          newPrice={499.5}
        />
      </div>
      <div className="bird-container-down">
        <div>
          <img src="../images/vizual2.png" alt="" />
        </div>
        <div>
          <img src="../images/vizual2.png" alt="" />
        </div>
      </div>
      <div className="tric-img-dark">
        <img src="../images/vizual6.svg" alt="" />
      </div>
    </div>
  );
};

export const Package = ({
  list,
  name,
  monthPrice,
  subtitle,
  oldPrice,
  newPrice,
}) => {
  return (
    <div className="package">
      <p className="package-name">{name}</p>

      <Prices oldPrice={oldPrice} newPrice={newPrice} />
      <p>{monthPrice}</p>
      <hr className="hr" />
      <p>{subtitle}</p>
      {list.map((item, i) => (
        <ul key={i} className="list1-container">
          <li>{item}</li>
        </ul>
      ))}
      <div className="btn-apply-wraper">
        <button className="btn-apply">Apply now</button>
      </div>
    </div>
  );
};

export const Prices = ({ oldPrice, newPrice }) => {
  return (
    <p>
      <span className="old-price">{oldPrice}</span>
      <span className="new-price">{newPrice}</span>
    </p>
  );
};
