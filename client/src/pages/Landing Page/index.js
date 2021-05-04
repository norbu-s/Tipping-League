import React from 'react';
import Header from "../../components/Header";
import Button from "../../components/Button";
import Login from "../../components/Login";
import "./style.css";



function LandingPage () {
    return (
             <div>
            <Header />
            <div className="sign-up">
                <h2>Build you own custom tipping competition </h2>
                <p>Click the button below to make you own tipping competition.</p>
                <Button />
            </div>
            <Login />
        </div>
    )
}

export default LandingPage;
