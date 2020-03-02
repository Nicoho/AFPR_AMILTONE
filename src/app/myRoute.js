import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Rh from "./components/Rh/Rh.index";
import Admin from "./components/Admin/Admin.index";
import Userindex from "./components/User/Userindex";

const MyRoute = ({ role }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            role === "rh" ? (
              <Rh />
            ) : role === "admin" ? (
              <Admin />
            ) : (
              <Userindex />
            )
          }
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default MyRoute;
