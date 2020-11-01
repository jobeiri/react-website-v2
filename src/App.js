import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/HomePage/Home";
import "./App.css";

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
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
