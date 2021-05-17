import React from "react";
import "bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header>
      <div>
        <nav
          id="index-navbar"
          className={`navbar navbar-expand-lg navbar-light col-12 dawn-background-2`}
        >
          <button
            id="index-nav-toggler"
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul id="index-link" className="navbar-nav ml-auto">
              <li className={`nav-item`}>
                <Link
                  id="Home"
                  className={`nav-link dawn-color dawn-underline`}
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link dawn-color`} to="/leadership">
                  Leader Board
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link dawn-color`} to="/results">
                  Results
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link dawn-color`} to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    // <header>
    // <div>
    //     <nav id="index-navbar" className={`navbar navbar-expand-lg navbar-light col-12 dawn-background-2`}>
    //   <button id="index-nav-toggler" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul id="index-link" className="navbar-nav ml-auto">
    //         <div className={`nav-item`}>
    //           <Link className={`nav-link dawn-color`} to="/leadership">Leader Board</Link>
    //           <Link className={`nav-link dawn-color`} to="/results">Results</Link>
    //           <Link id="home" className={`nav-link dawn-color`} to="/logout">Logout</Link>
    //       </div>
    //     </ul>
    //   </div>
    // </nav>
    // </div>
    // </header>
  );
}

export default Header;
