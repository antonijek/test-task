import React from "react";
import "../styles/form.css";
import { contact } from "../copy/index";

const Form = () => {
  return (
    <div className="form">
      <p>{contact}</p>
      <div className="inputs">
        <label className="form-label" htmlFor="full-name">
          Full Name
        </label>
        <br />
        <input
          className="form-input"
          type="text"
          id="full-name"
          name="name"
          placeholder="Enter Full Name"
        />
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <br />
        <input
          className="form-input"
          type="text"
          id="email"
          name="email"
          placeholder="Enter Email"
        />
        <label className="form-label">Choose offer</label>
        <select className="form-input">
          <option value="Free upgrade to upper plan" className="upgrade">
            Free upgrade to upper plan
          </option>
        </select>
      </div>
      <div className="online-payment">
        <p>50% discount for website creation</p>
        <hr />
        <p>Online payment without processing fees</p>
      </div>
      <div className="text-aria-label">
        <label htmlFor=""> Message </label>
        <textarea
          placeholder="Type your message"
          name=""
          id=""
          cols="30"
          rows="15"
          className="text-aria"
        ></textarea>
        <button className="btn-submit">Submit</button>
      </div>
    </div>
  );
};

export default Form;
