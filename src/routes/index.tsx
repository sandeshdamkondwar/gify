import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../routes/Home";
import Trending from "../routes/Trending";
import Random from "../routes/Random";

function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/trending">
        <Trending />
      </Route>
      <Route path="/random">
        <Random />
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default Router;
