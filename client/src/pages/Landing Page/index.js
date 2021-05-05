import React from 'react';
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Login from "../../components/Login";
import "./style.css";
// import LogoImg from "./images/Logo.png"
import { Navbar } from 'react-bootstrap';



  function LandingPage () {
    return (
      <div>
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
            {/* <ul id="index-link" className="navbar-nav ml-auto">
                <li className={`nav-item`}>
                <Link id="home" className={`nav-link dawn-color dawn-underline`} to="/login">Login</Link>
                </li> */}
                {/* <li className={`nav-item`}>
                <Link className={`nav-link dawn-color`} to="/league">League</Link>
                </li>
                <li className={`nav-item`}>
                <Link className={`nav-link dawn-color`} to="/signup">Signup</Link>
                </li> */}
                {/* <li className={`nav-item`}>
                <Link className={`nav-link dawn-color`} to="/results">Results</Link>
                </li>
                 <li className={`nav-item`}>
                <Link className={`nav-link dawn-color`} to="/leadership">Leadership Board</Link>      */}
              {/* </li> */}
            {/* </ul> */}
          </div>  
        </nav>

            <div className="sign-up">
                <h2>Build you own custom tipping competition </h2>
                <p>Click the button below to make you own tipping competition.</p>
                <Link to="/signup" className="btn btn-primary">Create a competition</Link>
            </div>
            <div className="login">
                <Login />
            
                {/* <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form> */}
            </div>
        </div>
    )
}

export default LandingPage;
