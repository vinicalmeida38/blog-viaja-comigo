import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import About from "../pages/About/About";
import EditGuide from "../pages/EditGuide/EditGuide";
import Guide from "../pages/Guide/Guide";
import GuideList from "../pages/GuideList/GuideList";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NewGuide from "../pages/NewGuide/NewGuide";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={GuideList} path="/roteiros" />
      <Route component={About} path="/sobre" />
      <Route component={Login} path="/admin" />
      <Route component={NewGuide} path="/novo-roteiro" />
      <Route component={EditGuide} path="/editar-roteiro/:id" />
      <Route component={Guide} path="/roteiro/:id" />
    </BrowserRouter>
  );
};

export default Routes;
