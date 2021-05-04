import React from 'react';
import Logo from "../Header/images/Logo.png";
import "./style.css";
import "bootstrap"

function Header() {
    return (
        <header>
            <div>
             <nav id="index-navbar" className={`navbar navbar-expand-lg navbar-light col-12 dawn-background-2`}>
             <span className="navbar-toggler-icon"></span>
               <div id="logo">
               <img
                src={Logo}
                width="100"
                height="100"
                alt=""
                 />
                </div>       
            </nav>
            </div>
          </header>
    )
}

export default Header;
