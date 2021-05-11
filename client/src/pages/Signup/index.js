// import axios from 'axios';
import React, { Component } from 'react';  
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
// import  validateInfo from "../../components/Container/validateInfo"
class Reg extends Component {  
  
  constructor() {  
    super();  
  
    this.state = {  
      Name: '',  
      Email: '',  
      Password: '',
      Password2:'',
      Checkbox: false  
    }  
  
    this.Name = this.Name.bind(this)
    this.Email = this.Email.bind(this);  
    this.Password = this.Password.bind(this);
    this.Password2 = this.Password2.bind(this);
    this.Checkbox = this.Checkbox.bind(this);    
    this.register = this.register.bind(this);  
  }  
  
  Name(event) {  
    this.setState({ Name: event.target.value })  
  }  
  
  
  Email(event) {  
    this.setState({ Email: event.target.value })  
  }  
  
  Password(event) {  
    this.setState({ Password: event.target.value })  
  }  
  
  Password2(event) {
      this.setState({ Password2: event.target.value })  
  }  
  Checkbox(event) {  
    this.setState({ Checkbox: event.target.value })  
  }  

  async register(event) { 
  
    fetch('http://localhost:3001/api/usersapi/', {  
      method: 'post',  
      headers: {  
      "content-type": "application/json"
      },
      body: JSON.stringify({  
  
        Name: this.state.Name,
        Email: this.state.Email,
        Password: this.state.Password,  
        Checkbox: this.state.Checkbox,   
      }
      )
    }).then((Response) => Response.json())  
      .then((Result) => {
        let errors = {};

  // if (!value.username.trim()) {
  //   errors.username = 'Username required';
  // }
  // else if (!/^[A-Za-z]+/.test(value.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }
  if (! this.state.Name.value) {
    errors.Name = 'Name is required';
  // } else if (abcdefghijklmnopqrstuvwxyz.test(value.Name)) {
  //   errors.Name = 'Name cannot have special characters';
    if (!this.state.Email.value) {
      errors.Email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(this.state.Email.value)) {
      this.state.Email.value = 'Email address is invalid';
    }
    if (!this.state.password.value) {
      errors.password = 'Password is required';
    } else if (this.state.password.value.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
    if (!this.state.password2) {
      errors.password2 = 'Password is required';
    } else if (this.state.password2.value !== this.state.password.value) {
      errors.password2 = 'Passwords do not match';
    }
    if (Result.Status == 'Success')
      this.state.props.history.push("/Home");
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
                      <Input type="text"  onChange={this.Name} placeholder="Enter Your Full Name" />  
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
                    <Button  onClick={this.register}  color="success" block>Create Account</Button>  
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
