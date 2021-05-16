import React from 'react';
// import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Login from "../../components/Login";
import Footer from "../../components/Footer";
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
                <h2>Enter Tipping Competition </h2>
                <p>Click the button below to enter and compete against payers from all around the world..</p>
                <Link to="../SignUp/" className="btn btn-primary">Sign Up</Link>
            </div>
        <div className="login">
          <Login />
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage;
