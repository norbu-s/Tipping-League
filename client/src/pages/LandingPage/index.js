import React from "react";
import { Link } from "react-router-dom";
import Login from "../../components/Login";
import "../LandingPage/style.css";
import Footer from "../../components/Footer";

function LandingPage(props) {
  console.log(props);
  return (
    <div className="landing-page">
      <h2>Welcome to Tipping League</h2>
      <div className="sign-up">
        <p> Compete against players from all around the world..</p>
        <p>
          {" "}
          Click here to
          <Link to="../SignUp/" className="button">
            <strong>"Sign Up!!"</strong>
          </Link>{" "}
        </p>
        <h3>OR</h3>
      </div>
      <div className="login">
        <Login />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
