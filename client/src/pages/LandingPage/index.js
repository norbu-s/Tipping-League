import React from 'react';

import { Link } from "react-router-dom";
import Login from "../../components/Login";
import "../LandingPage/style.css"




function LandingPage(props) {
    console.log(props)
    return (
        <div className="landing-page">
         <nav class="navbar navbar-dark primary-color">
            <a class="navbar-brand" href="/"/>
            <img src= "../../components/images/Logo.png" alt="" width="30" height="24"/>
            </nav>
            <div className="sign-up">
                <h2>Enter Tipping Competition </h2>
                <p> Compete against players from all around the world..</p>
                <p> Click <Link to="../SignUp/" className="button">Here</Link> to Sign Up!!</p>
                {/* <Link to="../SignUp/" className="button">Sign Up</Link> */}
                <h4>OR</h4>
            </div>
          <div className="login">
          <Login />
            </div>
        </div>
    )
}

export default LandingPage;
