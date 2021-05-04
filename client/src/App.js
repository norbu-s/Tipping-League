import React, { Component } from "react";
import Home from "../src/pages/Home";
import Landing from "../src/pages/Landing Page";
import Leadership from "../src/pages/Leadership";
import Results from "../src/pages/Results";
import Signup from "../src/pages/Signup";
import Tipping from "../src/pages/Tipping";
import { HashRouter as Router, Switch, Route} from "react-router-dom";import "bootstrap";
import "../src/App.css";



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/tipping" component={Tipping} />
          <Route exact path="/leadership" component={Leadership} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

