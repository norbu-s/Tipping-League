import React from "react";
import "../Header/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/Home">
        Tipping league
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="/Home">
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="/Results">
            Results
          </a>
          {/* <a className="nav-item nav-link" href="/Leadership">
            Pricing
          </a> */}
          <a className="nav-item nav-link" href="/Leadership">
            Leader Board
          </a>
          <a className="nav-item nav-link " href="/Logout">
            Logout
          </a>
        </div>
      </div>
    </nav>

    // <header>
    //   <div className="navApp">
    //     <nav className="navbar">
    //       <div className="col-md-1"></div>
    //       <div className="col-md-3">
    //         <span id="name" className="navbar-brand mb-0 h1">
    //           Tipping League
    //         </span>
    //       </div>
    //       <div className="col-md-4"></div>
    //       <div className="col-md-1">
    //         <Link to="/Home">Home</Link>
    //       </div>
    //       <div className="col-md-1">
    //         <Link to="/Results">Results</Link>
    //       </div>
    //       <div className="col-md-1">
    //         <Link to="/Leadership">Leader Board</Link>
    //       </div>
    //       <div className="col-md-1">
    //         <Link to="/Logout">Logout</Link>
    //       </div>
    //       <div className="col-md-1"></div>
    //     </nav>
    //   </div>
    // </header>
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
