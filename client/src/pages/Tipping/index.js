
import React, { Component } from 'react';  
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  

import Header from "../../components/Header";

class Tips extends Component {

    constructor() {
        super();
  
        this.state = {
            teamsId: '',
            draw: '',
            fixtures:[]
        }
  
        this.teamsId = this.teamsId.bind(this)
        this.draw = this.draw.bind(this);
        this.enterTips = this.enterTips.bind(this);
    }
    componentDidMount() {
         fetch('/api/users/fixtures').then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                this.setState({fixtures:result})
                // if (result.Status == 'Invalid')
                //     alert('Error');
                // else
                //     window.location.href = "/Home/"
            })
    }
    
    teamsId(event) {
        this.setState({ teamsId: event.target.checked })
    }
    
    draw(event) {
        this.setState({ draw: event.target.checked })
    }
    
    async enterTips(event) {
  
       
    }
  
   render() {  
                return (
                    <div className="App">
                        <Header />
                        <h1>Enter your Tips for this week</h1>
                        <div className="app flex-row align-items-center">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col md="9" lg="7" xl="6">
                                        <Card className="mx-4">
                                            <CardBody className="p-4">
                                                <Form>
                                                    <InputGroup className="mb-3">
                                                       
                                                        {this.state.fixtures.length > 0 ? this.state.fixtures.map(fixture => {
                                                            return (
                                                                <span>
                                                                     <Input type="checkbox" onChange={this.teamsId}   />
                                                                    {fixture.home_team}
                                                                </span>
                                                            )
                                                        }):""}
                                                    </InputGroup>
                                                    <InputGroup className="mb-3">
                                                        <Input type="checkbox" onChange={this.draw} />
                                                    </InputGroup>
                                                    <Button onClick={this.enterTips} color="success" block>Enter Tips</Button>
                                                </Form>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                );
            }
    }


export default Tips;
