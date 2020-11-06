import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import components from "./components";

export default function Routing() {
  return (
    <Router>
      <Route path="/">
        {" "}
        <Redirect to="/films" />{" "}
      </Route>
      <Route exact path="/films" component={components.Landingpage} />
      <Route path="/login" component={components.Login} />
      <Route path="/register" component={components.Register} />
    </Router>
  );
}
