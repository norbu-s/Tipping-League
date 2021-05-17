import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";


function Header() {
  return (   
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul >
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
    
          <a class="nav-link" href="#">Pricing</a>
        
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </ul>
    </div>
  </div>
</nav>
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
    )
}

export default Header;
