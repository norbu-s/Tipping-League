import React, { Component } from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import Header from "../../components/Header";
import "./style.css";


export default class SignUp extends Component {
    render() {

        const [password, setPassword] = useState("");
        const [title, setTitle] = useState("");

        useEffect(() => {
    Axios.get("http://localhost:3001/showpasswords").then((response) => {
      setPasswordList(response.data);
    });
  }, []);

  const addPassword = () => {
    Axios.post("http://localhost:3001/addpassword", {
      password: password,
      title: title,
    });
  };

  const decryptPassword = (encryption) => {
    Axios.post("http://localhost:3001/decryptpassword", {
      password: encryption.password,
      iv: encryption.iv,
    }).then((response) => {
      setPasswordList(
        passwordList.map((val) => {
          return val.id == encryption.id
            ? {
                id: val.id,
                password: val.password,
                title: response.data,
                iv: val.iv,
              }
            : val;
        })
      );
    });
  };

        return (
            <div>
            <Header />
            <form>
                <h3>Register</h3>
                <div className="AddingPassword">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name"
                         onChange={(event) => {
                        setFirstName(event.target.value);
                    }}/>
                    </div>
                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name"
                        onChange={(event) => {
                        setLastName(event.target.value);
                    }}/>
                    </div>
                    <div className="form-group">
                         <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                        onChange={(event) => {
                        setEmail(event.target.value);
                    }}/>
                    </div>
                    <div className="AddingPassword">
                         <label>Password</label>
                        <input type="password" className="form-control" placeholder="password123"
                        onChange={(event) => {
                        setPassword(event.target.value);
                    }}/>
                    </div>
                  
                    <div className="Passwords">
                        {passwordList.map((val, key) => {
                        return (
                                <div
                                className="password"
                                onClick={() => {
                                    decryptPassword({
                                    password: val.password,
                                    iv: val.iv,
                                    id: val.id,
                                    });
                                }}
                                key={key}
                                >
                                <h3>{val.title}</h3>
                                </div>
                            );
                            })}
                    </div>
                    
        );

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p>
                </form>
            </div>
        );
    }
}