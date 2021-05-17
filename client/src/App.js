// import React, { Component } from "react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/LandingPage";
import Leadership from "./pages/Leadership";
import Results from "./pages/Results";
import SignUp from "./pages/SignUp";
import Tipping from "./pages/Tipping";
import "bootstrap";
import "../src/App.css";
import isLoggedin from "./utils/authApi";

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const value = { isAuthenticated, setIsAuthenticated };
  console.log(isAuthenticated);
  // We check if user is already logged in, and if they are then we set isAuthenticated to true
  React.useEffect(() => {
    console.log("check login status");
    isLoggedin().then((response) => {
      setIsAuthenticated(response.data.isAuthenticated);
    });
  }, []);

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
          <Route exact path="/Signup">
            <SignUp />
          </Route>
          <Route exact path="/Tips">
            <Tipping />
          </Route>
          <Route exact path="/Results">
            <Results />
          </Route>
          <Route exact path="/Leadership">
            <Leadership />
          </Route>
          <Route exact path="/Logout">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
