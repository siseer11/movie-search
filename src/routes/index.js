import React from "react";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "../containers/Home";
import SearchPage from "../containers/SearchPage";
import NavBar from "../containers/NavBar";
import { Footer } from "../components/Footer";

export default () => (
  <BrowserRouter>
    <React.Fragment>
      <Route component={NavBar} />
      <Switch>
        <Route exact path="/search/:show" component={SearchPage} />
        <Route exact path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
      <Route component={Footer} />
    </React.Fragment>
  </BrowserRouter>
);
