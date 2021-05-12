// import axios from 'axios';
import React, { Component } from 'react';  
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
class Reg extends Component {  
  
  constructor() {  
    super();  
  
    this.state = {  
      name: '',  
      email: '',  
      password: '',
      password2:'',
      checkbox: false  
    }  
  
    this.name = this.name.bind(this)
    this.email = this.email.bind(this);  
    this.password = this.password.bind(this);
    this.password2 = this.password2.bind(this);
    this.checkbox = this.checkbox.bind(this);    
    this.register = this.register.bind(this);  
  }  
  
  name(event) {  
    this.setState({ name: event.target.value })  
  }  
  
  email(event) {  
    this.setState({ email: event.target.value })  
  }  
  
  password(event) {  
    this.setState({ password: event.target.value })  
  }  
  
  password2(event) {
      this.setState({ password2: event.target.value })  
  }  
  checkbox(event) {  
    this.setState({ checkbox: event.target.value })  
  }  

  async register(event) { 
  
    fetch('http://localhost:3001/api/users/register', {  
      method: 'post',  
      headers: {  
       'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({  
  
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,  
        // checkbox: this.state.checkbox,   
      }
      )
    }).then((Response) => Response.json())  
      .then((Result) => {
        let errors = {};

  if (! this.name.value) {
    errors.name = 'Name is required';
  // } else if (abcdefghijklmnopqrstuvwxyz.test(value.Name)) {
  //   errors.Name = 'Name cannot have special characters';
    if (! this.email.value) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(this.email.value)) {
      this.email.value = 'Email address is invalid';
    }
    if (!this.password.value) {
      errors.password = 'Password is required';
    } else if (this.password.value.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
    if (!this.password2) {
      errors.password2 = 'Password is required';
    } else if (this.state.password2.value !== this.password.value) {
      errors.password2 = 'Passwords do not match';
    }
    if (Result.Status == 'Success')
      props.history.push("/Home");
   }  else
          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')  
      })  
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
                        <h1>Please fill in Your details to Sign up</h1>
                        </div>  
                    </div>  
                    <InputGroup className="mb-3">  
                      <Input type="text" onChange={this.Name} placeholder="Enter Your Full Name" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="text"  onChange={this.Email} placeholder="Enter Email" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="password"  onChange={this.Password} placeholder="Enter Password" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="password" onChange={this.Password2} placeholder="Enter Password" />
                      </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="checkbox"  onChange={this.checkbox} />  
                    </InputGroup>   
                    <Button onClick={this.register} color="success" block>Create Account</Button>
                    <useFrom />
                  </Form>  
                </CardBody>  
              </Card>  
            </Col>  
            </Row>
        </Container>
      </div>  
    );  
  }  
}  
  
export default Reg; 
