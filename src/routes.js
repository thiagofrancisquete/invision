import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
