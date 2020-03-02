import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./app.style.scss";
import Rh from "./components/Rh/Rh.index";
import Admin from "./components/Admin/Admin.index";
import Userindex from "./components/User/Userindex";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/Rh">
            <Rh />
          </Route>
          <Route path="/Admin">
            <Admin />
          </Route>
          <Route path="/User">
            <Userindex />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
