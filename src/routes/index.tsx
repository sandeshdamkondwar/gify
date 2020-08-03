import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../routes/Home";
import Trending from "../routes/Trending";
import Random from "../routes/Random";

interface IProps {
  query: string;
}

function Router(props: IProps) {
  return (
    <Switch>
      <Route exact path="/">
        <Home query={props.query} />
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
