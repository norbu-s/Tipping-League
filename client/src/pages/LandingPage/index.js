import React from 'react';
// import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Login from "../../components/Login";

import "./style.css";
// import "material-ui";




function LandingPage(props) {
    console.log(props)
    return (
        <div className="landing-page">
         <nav class="navbar navbar-dark primary-color">
      <a class="navbar-brand" href="/">
        <img src="../../components/images/Logo.png" height="30" alt="mdb logo"/>
        </a>
        </nav>
            <div className="sign-up">
                <h1>Enter Tipping Competition </h1>
                <h2>Click the button below to enter and compete against players from all around the world..</h2>
                <Link to="../SignUp/" className="button">Sign Up</Link>
                <h2>OR</h2>
                <h2>Login Below</h2>
            </div>
        <div className="login">
          <Login />
            </div>

        </div>
    )
}

export default LandingPage;
