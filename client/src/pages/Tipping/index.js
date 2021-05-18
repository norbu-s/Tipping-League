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
import TipsTable from "../../components/TipsTable";

class Tips extends Component {
  constructor() {
    super();

    this.state = {
      team1: 0,
      team2: 0,
      draw: 0,
      fixtures: [],
    };

    this.team1 = this.team1.bind(this);
    this.team2 = this.team2.bind(this);
    // this.fixturesId = this.fixturesId.bind(this);
    // this.usersId = this.usersId.bind(this);
    this.draw = this.draw.bind(this);
    this.enterTips = this.enterTips.bind(this);
  }

  componentDidMount() {
    fetch("/api/users/fixtures/")
      .then((Response) => Response.json())
      .then((result) => {
        console.log("result", result);
        State({ fixtures: result });
      });
  }

  team1(event) {
    setState({ teams1: event.target.checked });
  }

  team2(event) {
    setState({ teams2: event.target.checked });
  }

  draw(event) {
    setState({ draw: event.target.checked });
  }

  async enterTips(event) {
    fetch("/api/users/tips", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify({
        teamsId: this.state.teamsId,
        draw: this.state.draw,
        fixturesId: this.state.Id,
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
                {/* <Card className="mx-4">
                  <CardBody className="p-4"> */}
                <Form>
                  <InputGroup className="mb-3">
                    <TipsTable result={this.state.fixtures} />
                    {this.state.fixtures.length > 0
                      ? this.state.fixtures.map((fixture) => {
                          return (
                            <span>
                              <Input type="checkbox" onChange={this.team1} />
                              {fixture.home_team}
                              <Input type="checkbox" onChange={this.team2} />
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
                {/* <TipsTable result={this.state.fixtures} /> */}
                {/* </CardBody>
                </Card> */}
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
