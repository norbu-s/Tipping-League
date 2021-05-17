import fetch from "node-fetch";
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

import Header from "../../components/Header";
import Footer from "../../components/Footer";

class Tips extends Component {
  constructor() {
    super();

    this.state = {
      team1: "",
      team2: "",
      draw: "",
      fixtures: [],
    };

    this.team1 = this.team1.bind(this);
    this.team2 = this.team2.bind(this);
    this.fixturesId = this.fixturesId.bind(this);
    this.usersId = this.usersId.bind(this);
    this.draw = this.draw.bind(this);
    this.enterTips = this.enterTips.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:3001/api/users/fixtures")
      .then((Response) => Response.json())
      .then((result) => {
        console.log(result);
        this.setState({ fixtures: result });
        // if (result.Status == 'Invalid')
        //     alert('Error');
        // else
        //     window.location.href = "/Home/"
      });
  }

  team1(event) {
    this.setState({ teams1: fixtures.result.teamId.event.target.checked });
  }
  team2(event) {
    this.setState({ teams2: fixtures.result.teamId.event.target.checked });
  }
  // fixturesId(event) {
  //     this.setState({ fixturesId: fixtures.result.teamId.event.target.checked })
  // }
  // usersId(event) {
  //     this.setState({ usersId: fixtures.result.teamId.event.target.checked })
  // }

  draw(event) {
    this.setState({ draw: event.target.checked });
  }

  async enterTips(event) {
    fetch("http://localhost:3001/api/users/tips", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify({
        teamId: this.state.team1,
        teamId: this.state.team2,
        draw: this.state.draw,
        fixturesId: this.state.fixturesId,
        usersId: this.state.usersId,
      }),
    })
      .then((Response) => Response.json())
      .then((result) => {
        console.log(result);
      });
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
                        {this.state.fixtures.length > 0
                          ? this.state.fixtures.map((fixture) => {
                              return (
                                <span>
                                  <Input
                                    type="checkbox"
                                    onChange={this.team1}
                                  />
                                  {fixture.home_team}
                                  <Input
                                    type="checkbox"
                                    onChange={this.team2}
                                  />
                                  {fixture.away_team}
                                  <Input type="checkbox" onChange={this.draw} />
                                </span>
                              );
                            })
                          : ""}
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <Input type="checkbox" onChange={this.draw} />
                      </InputGroup>
                      <Button onClick={this.enterTips} color="success" block>
                        Enter Tips
                      </Button>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Tips;
