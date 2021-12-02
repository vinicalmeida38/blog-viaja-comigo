import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import "./Header.css";

const Header = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const token = localStorage.getItem("authHeader");
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      api.get(`/auth/verify/${token.replace("Bearer ", "")}`).then(() => {
        setHasPermission(true);
      });
    }
  }, [token]);

  const leaveBlog = () => {
    localStorage.removeItem("authHeader");
    if (window.location.pathname === "/") {
      window.location.reload();
    }
    history.push("/");
  };

  const leaveMenu = () => {
    return <li onClick={leaveBlog}>sair</li>;
  };

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
          {hasPermission ? leaveMenu() : ""}
        </ul>
      </div>
    </header>
  );
};

export default Header;
