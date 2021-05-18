import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";

import "../../components/Login/style.css";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
class Login extends Component {
  constructor() {
    super();

    // let history = useHistory();

    this.state = {
      email: "",
      password: "",
    };

    this.password = this.password.bind(this);
    this.email = this.email.bind(this);
    this.login = this.login.bind(this);
  }

  email(event) {
    this.setState({ email: event.target.value });
  }
  password(event) {
    this.setState({ password: event.target.value });
  }
  login(event) {
    const url = window.location.hostname.contains("localhost")
      ? "http://localhost:3001"
      : "";

    fetch(url + "/api/users/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((Response) => Response.json())
      .then((result) => {
        console.log(result);
        if (result.Status == "Invalid") alert("Invalid User");
        else window.location.href = "/Home/";
      });
  }

  // render() {
  //   return (
  //     <form onSubmit={this.handleSubmit}>
  //       <label>
  //         User Name:
  //         <input type="text" onChange={this.email} />
  //       </label>
  //       <label>
  //         Password:
  //         <input type="text" onChange={this.handleChange} />
  //       </label>
  //       <Button onClick={this.login} color="Button" block>
  //         Login
  //       </Button>
  //       {/* <input type="submit" value="Submit" /> */}
  //     </form>
  //   );
  // }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <CardGroup>
                <Card className="p-2">
                  <Card body inverse color="success">
                    <CardTitle tag="h5">Login</CardTitle>
                    <Form>
                      {/* <InputGroup className="mb-3"> */}
                      <Input
                        type="text"
                        onChange={this.email}
                        placeholder="Enter Email"
                      />
                      {/* </InputGroup> */}
                      {/* <InputGroup className="mb-4"> */}
                      <Input
                        type="password"
                        onChange={this.password}
                        placeholder="Enter Password"
                      />
                      {/* </InputGroup> */}
                      <Button onClick={this.login} color="Button" block>
                        Login
                      </Button>
                    </Form>
                  </Card>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
