import React, { Component } from "react";
import {
  Button,
  Card,
  CardFooter,
  CardBody,
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
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

class Reg extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      notification: 0,
    };

    this.name = this.name.bind(this);
    this.email = this.email.bind(this);
    this.password = this.password.bind(this);
    this.password2 = this.password2.bind(this);
    this.notification = this.notification.bind(this);
    this.register = this.register.bind(this);
  }

  name(event) {
    this.setState({ name: event.target.value });
  }

  email(event) {
    this.setState({ email: event.target.value });
  }

  password(event) {
    this.setState({ password: event.target.value });
  }

  password2(event) {
    this.setState({ password2: event.target.value });
  }
  notification(event) {
    console.log(event.target.checked);
    this.setState({ notification: event.target.checked });
  }

  async register(event) {
    fetch("/api/users/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        notification: this.state.notification,
      }),
    })
      .then((Response) => Response.json())
      .then((result) => {
        console.log(result);
        if (result.Status == "Invalid") alert("Invalid User");
        else window.location.href = "/Home/";

        // if (! this.name) {
        //   errors.name = 'Name is required';
        // // } else if (abcdefghijklmnopqrstuvwxyz.test(value.Name)) {
        // //   errors.Name = 'Name cannot have special characters';
        //   if (! this.email) {
        //     errors.email = 'Email required';
        //   } else if (!/\S+@\S+\.\S+/.test(this.email)) {
        //     this.email = 'Email address is invalid';
        //   }
        //   if (!this.password) {
        //     errors.password = 'Password is required';
        //   } else if (this.password.length < 6) {
        //     errors.password = 'Password needs to be 6 characters or more';
        //   }
        //   if (!this.password2) {
        //     errors.password2 = 'Password is required';
        //   } else if (this.password2 !== this.password) {
        //     errors.password2 = 'Passwords do not match';
        //   }
        //   if (Result.Status == 'Success')
        //     window.location.href="/Home"
        //  }  else
        //         alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
      });
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <div className="row" className="mb-2 pageheading">
                      <div className="heading">
                        <h2>Please fill in Your details to Sign up</h2>
                      </div>
                    </div>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        onChange={this.name}
                        placeholder="Enter Your Full Name"
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        onChange={this.email}
                        placeholder="Enter Email"
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input
                        type="password"
                        onChange={this.password}
                        placeholder="Enter Password"
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input
                        type="password"
                        onChange={this.password2}
                        placeholder="Enter Password"
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="checkbox" onChange={this.notification} />
                    </InputGroup>
                    <Button onClick={this.register} color="success" block>
                      Create Account
                    </Button>
                    <div className="back">
                      <Link to="/" className="button">
                        Click here to go back
                      </Link>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Reg;
