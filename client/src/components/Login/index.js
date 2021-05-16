import React, { Component } from 'react';
import { Link, useHistory } from "react-router-dom";
 
import './style.css';  
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
class Login extends Component {  
    constructor() {  
        super();
        
        // let history = useHistory();
  
        this.state = {  
            email: '',  
            password: ''  
        }  
  
        this.password = this.password.bind(this);  
        this.email = this.email.bind(this);  
        this.login = this.login.bind(this);  
    }  
  
    email(event) {  
        this.setState({ email: event.target.value })  
    }  
    password(event) {  
        this.setState({ password: event.target.value })  
    }  
    login(event) {  
        // debugger;  
        fetch('http://localhost:3001/api/users/login', {  
            method: 'post',  
            headers: {
                'Accept': 'application/json',  
                'Content-Type': 'application/json'  
            },  
            body: JSON.stringify({  
                email: this.state.email,  
                password: this.state.password  
            })  
        }).then((Response) => Response.json())  
            .then((result) => {  
                console.log(result);  
                if (result.Status == 'Invalid')  
                    alert('Invalid User');  
                else
                    window.location.href="/Home/";  
            })  
    }  
  
    render() {  
  
        return (  
            <div className="app flex-row align-items-center">  
                <Container>  
                    <Row className="justify-content-center">  
                        <Col md="9" lg="7" xl="6">  
  
                            <CardGroup>  
                                <Card className="p-2">  
                                    <CardBody>  
                                        <Form>  
                                            <div className="row" className="mb-2 pageheading">  
                                                <div className="col-sm-12 btn btn-primary">  
                                                    Login  
                                            </div>  
                                            </div>  
                                            <InputGroup className="mb-3">  
  
                                                <Input type="text" onChange={this.email} placeholder="Enter Email" />  
                                            </InputGroup>  
                                            <InputGroup className="mb-4">  
  
                                                <Input type="password" onChange={this.password} placeholder="Enter Password" />  
                                            </InputGroup>  
                                            <Button onClick={this.login} color="success" block>Login</Button>  
                                        </Form>  
                                    </CardBody>  
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