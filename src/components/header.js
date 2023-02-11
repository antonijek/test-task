import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const navbarTabs = [
  "Sell",
  "Price",
  "Manage",
  "Learn",
  "We Build for You",
  "Other Services",
];

const Header = () => {
  const [tabs, setTabs] = useState(navbarTabs);

  return (
    <div className="header">
      <div className="logo">
        <img src="../../images/logo.svg" alt="" />
      </div>
      <nav className="navbar">
        {tabs.map((tab) => (
          <Link className="nav-tab">{tab}</Link>
        ))}

        <button className="btn-login">LOGIN</button>
      </nav>
    </div>
  );
};

export default Header;
