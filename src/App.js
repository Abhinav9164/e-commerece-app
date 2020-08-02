import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home.js";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
<Router>
<div className="App">
  <Switch>
    <Route path="/Checkout">
    <Header />
    <Checkout />
  </Route>

<Route path="/login">
  <Login />
</Route>



<Route path="/">
<Header />

<Home />

  </Route>
</Switch>
</div>
</Router>
);
}

export default App;
