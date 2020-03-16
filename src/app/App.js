import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./app.style.scss";
import Login from "./components/Login/login";
import MyRoute from "./routes/myRoute";
import Userindex from "./components/User/Userindex";

function App() {
  const [state, setState] = useState({
    isLog: true,
    role: "admin"
  });

  const switchRoute = role => {
    switch (role) {
      case "rh":
        setState({ role: "rh", isLog: true });
        break;
      case "admin":
        setState({ role: "admin", isLog: true });
        break;
      case "logout":
        setState({ role: "", isLog: false });
        break;
      default:
        break;
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              state.isLog ? (
                <MyRoute logOut={role => switchRoute(role)} role={state.role} />
              ) : (
                <Login switchRoute={role => switchRoute(role)} />
              )
            }
          ></Route>
          <Route path="/user/:id_user/test/:id_test/result/:id_result">
            <Userindex />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
