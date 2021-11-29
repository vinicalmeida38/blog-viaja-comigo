import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login__container">
      <div className="header__logo login__logo">
        <span>ViajaComigo</span>
      </div>
      <form className="login__form">
        <input type="text" placeholder="Email" className="login__form--input" />
        <input type="text" placeholder="Senha" className="login__form--input" />
        <button type="submit" className="login__form--btn">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
