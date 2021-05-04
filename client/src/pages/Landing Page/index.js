import React from 'react';
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Login from "../../components/Login";
import "./style.css";



function LandingPage () {
    return (
             <div>
            <Header />
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
