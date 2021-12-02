import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const history = useHistory();

  const storeToken = (token) => {
    localStorage.setItem("authHeader", `Bearer ${token}`);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    api
      .post("/auth/authenticate", {
        email,
        password,
      })
      .then((res) => {
        storeToken(res.data.token);
        history.push("/");
      })
      .catch(() => {
        setLoginError(true);
      });
  };

  return (
    <div className="login__container">
      <div className="header__logo login__logo">
        <span>ViajaComigo</span>
      </div>
      <form className="login__form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="input login__form--input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="input login__form--input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {loginError ? (
          <span className="login__form--error-msg">
            Email ou senha incorreta.
          </span>
        ) : null}
        <button type="submit" className="button login__form--btn">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
