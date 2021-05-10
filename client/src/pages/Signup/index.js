  
// import './App.css';
import React from "react";


function SignUp() {
  const [users, setUsers] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    notification: false,
  });


  //API call to get employee details//
  React.useEffect(function () {
    fetch("https://randomuser.me/api?results=10")
    .then(res => {
      return(res.json())
    }).then(users => {
      setUsers(users.results) 
    })
    },[])

        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">First Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your first name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Last Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your last name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> Check on this to recieve a reminder for tipping.
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }

export default SignUp;