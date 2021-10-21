import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import About from "../pages/About/About";
import Guides from "../pages/Guides/Guides";
import Home from "../pages/Home/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Guides} path="/roteiros" />
      <Route component={About} path="/sobre" />
    </BrowserRouter>
  );
};

export default Routes;
