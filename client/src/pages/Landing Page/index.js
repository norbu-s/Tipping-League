import React from 'react'

function landingPage () {
    return (
        <div>
            <Header />
            <div className="sign-up">
                <h2>To Create a League Please Sign Up</h2>
                <div className="mb-2">
                <Button variant="primary" size="lg">
                Large button
                </Button>{' '}
            </div>
            </div>
        </div>
    )
}

export default landingPage;
