import React from 'react'
import "bootstrap";
import "./style.css";


function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

    return (
     <div className="button">
    <a href="#" onClick={handleClick} butt>
     Create Your league
    </a>
    </div>
  );
}

export default ActionLink;
