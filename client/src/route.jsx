import React from "react";
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import View from "./components";

export default function Routing() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        {" "}
        <Redirect to="/films" />{" "}
      </Route>
      <Route path="/films" component={View.Landingpage} />
      <Route path="/login" component={View.Login} />
      <Route path="/register" component={View.Register} />
      <Route path="/create" component={View.Createfilm} />
      <Route path="/films/:film_id" component={View.SinglePage} />
    </BrowserRouter>
  );
}
