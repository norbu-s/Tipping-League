// import React, { Component } from "react";
import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing Page";
import Leadership from "./pages/Leadership";
import Results from "./pages/Results";
import Signup from "./pages/Signup";
import Tipping from "./pages/Tipping";
import League from "./pages/League";
import "bootstrap";
import "../src/App.css";




function App() {
    return (
      <Router basename="/">
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/league">
              <League />
            </Route>
            <Route exact path="/tipping">
              <Tipping />
            </Route>
            <Route exact path="/results">
              <Results />
            </Route>
            <Route exact path="/leadership">
              <Leadership />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

export default App;

