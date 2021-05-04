import React from 'react';
import Header from "../../components/Header";
import Button from "../../components/Button";
import "./style.css";



function landingPage () {
    return (
        <div>
            <Header />
            <div className="sign-up">
                <h2>To Create a League Please Sign Up!</h2>
            <Button />
            </div>
        </div>
    )
}

export default landingPage;
