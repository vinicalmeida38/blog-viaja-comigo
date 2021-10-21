import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <span>ViajaComigo</span>
        </div>
      </Link>
      <div className="header__menu">
        <ul>
          <Link to="/">
            <li>home</li>
          </Link>
          <Link to="/roteiros">
            <li>roteiros</li>
          </Link>
          <Link to="/sobre">
            <li>sobre o autor</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
