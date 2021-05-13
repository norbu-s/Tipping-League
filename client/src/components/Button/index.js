// import React from 'react'
import "bootstrap";
import "./style.css";
import { Link } from "react-router-dom";



import React from 'react';

const Button = <Link to="/Tips">Tips</Link>
  
//   const message = () => {
//   <Link to="/Tips">Tips</Link>
// //  console.log("Hello World!") 
// }

return (
<button onClick={message}> Click here to enter your Tips! </button>
  );







// function Button() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//   }

//     return (
//      <div className="button">
//     <form>
//          <Button variant="btn btn-success" onClick={() => history.push('/tips')} onClick={handleClick}>Click here to enter you tips</Button>
//     </form>
//     </div>
//   );
// }

export default Button;
