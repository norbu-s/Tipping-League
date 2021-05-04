import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../Header/images/Logo.png";
import "./style.css";
import "bootstrap"

function Header() {
    return (
        <header>
        <div>
            <nav id="index-navbar" className={`navbar navbar-expand-lg navbar-light col-12 dawn-background-2`}>
          <button id="index-nav-toggler" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
            <ul id="index-link" className="navbar-nav ml-auto">
                <li className={`nav-item`}>
                <Link id="home" className={`nav-link dawn-color dawn-underline`} to="/">Home</Link>
                </li>
                <li className={`nav-item`}>
                <Link className={`nav-link dawn-color`} to="/league">League</Link>
                </li>
                <li className={`nav-item`}>
                <Link className={`nav-link dawn-color`} to="/signup">Signup</Link>
                </li>
                <li className={`nav-item`}>
                <Link className={`nav-link dawn-color`} to="/results">Results</Link>
                </li>
                 <li className={`nav-item`}>
                <Link className={`nav-link dawn-color`} to="/leadership">Leadership Board</Link>     
              </li>
            </ul>
          </div>  
        </nav>
        </div>
        </header>
    )
}

export default Header;
