
import React, { Component } from 'react';  
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  

import Header from "../../components/Header";



    // React.useEffect(function () {
    //     fetch('http://localhost:3001/api/users/fixtures')
    //         .then(res => {
    //             return (res.json())
    //         }).then(teams => {
    //             setTeams(teams.records)
    //         })
    // }, [])
class Tips extends Component {
    // function() {
    //     fetch('http://localhost:3001/api/users/fixtures')
    //         .then(res => {
    //             return (res.json())
    //         }).then(teams => {
    //             setTeams(teams.records)
    //         })[])
    // }

    constructor() {
        super();
  
        this.state = {
            teamsId: '',
            draw: '',
        }
  
        this.teamsId = this.teamsId.bind(this)
        this.draw = this.draw.bind(this);
        this.enterTips = this.enterTips.bind(this);
    }
    
    teamsId(event) {
        this.setState({ teamsId: event.target.checked })
    }
    
    draw(event) {
        this.setState({ draw: event.target.checked })
    }
    
    async enterTips(event) {
  
        fetch('http://localhost:3001/api/users/tips', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                teamsId: this.state.teamsId,
                draw: this.state.draw
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.Status == 'Invalid')
                    alert('Error');
                else
                    window.location.href = "/Home/"
            })
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
                                                        <Input type="checkbox" onChange={this.teamsId} />
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
