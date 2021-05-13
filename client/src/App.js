// import React, { Component } from "react";
import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/LandingPage";
import Leadership from "./pages/Leadership";
import Results from "./pages/Results";
import SignUp from "./pages/SignUp";
import Tipping from "./pages/Tipping";
// import League from "./pages/League";
// import { ImageBackground, StyleSheet, Text, View } from "react-native";
import "bootstrap";
import "../src/App.css";

// const image = { url:("../src/components/images/Logo.png") };


function App() {
  // <View style={styles.container}>
  //   <ImageBackground source={image} style={styles.image}>
  //     <Text style={styles.text}>Inside</Text>
  //   </ImageBackground>
  // </View>
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
            {/* <Route exact path="/League">
              <League /> */}
            {/* </Route> */}
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



