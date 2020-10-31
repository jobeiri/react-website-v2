import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

// useless - work with this piece of code
/*
<Switch>
  <Route path="/" />
</Switch>;
*/

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
