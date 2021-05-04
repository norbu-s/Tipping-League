import React, { Component } from "react";
import Button from "./components/Button";
import logo from "./logo.svg";
import "./App.css";


class App extends Component {
  render() {
    return (
        <div className="App">
          <h2>To Create a League Please Sign Up</h2>
          <Button />
        </div>
    );
  }
}

export default App;
