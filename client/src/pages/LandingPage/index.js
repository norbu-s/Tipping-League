import React from 'react';
// import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Login from "../../components/Login";
// import SignUp from "../../components/SignUp";
import "./style.css";




function LandingPage(props) {
    console.log(props)
    return (
      <div className ="landing-page">
          <nav id="index-navbar" className={`navbar navbar-expand-lg navbar-light col-12 dawn-background-2`}>
          <button id="index-nav-toggler" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <Navbar bg="dark" variant="dark">
                  <Navbar.Brand href="#home">
                      <div id="logo-div">
                  <img
                      alt=""
                    src={LogoImg}
                                    s
                    />
                 </div>
                  </Navbar.Brand>
                </Navbar> */}
            {/* </ul> */}
          </div>  
        </nav>
            <div className="sign-up">
                <h2>Enter Tipping Competition </h2>
                <p>Click the button below to enter and compete against payers from all around the world..</p>
                <Link to="../SignUp/" className="btn btn-primary">Sign Up</Link>
            </div>
        <div className="login">
          <Login />
            </div>
        </div>
    )
}

export default LandingPage;
