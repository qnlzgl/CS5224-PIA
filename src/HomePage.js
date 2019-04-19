import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import Header from "./Header";
import Icon from "react-fontawesome";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" xs="12">
              <Card className="hidden-load animated fadeIn card-raw-text">
                <CardBody>
                  <NavLink to="/analyse">
                    <CardTitle>
                      Analyse <Icon className="float-right" name="font" />
                    </CardTitle>
                    <CardText>
                      Analyse a single candidate's personality by anlaysing its 
                      Personal Statement / Coverletter.
                      Displays Big Five personality charts and description.
                    </CardText>
                    <Button outline>Select</Button>
                  </NavLink>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="6" sm="12" xs="12">
              <Card className="hidden-load animated fadeIn card-twitter">
                <CardBody>
                  <NavLink to="/rank">
                    <CardTitle>
                      Rank <Icon className="float-right" name="twitter" />
                    </CardTitle>
                    <CardText>
                      Upload multiple Personal Statements / Coverletters and fine-tune targeted personality.
                      Rank and recommend Top 10 candidates for further review.
                    </CardText>
                    <Button outline>Select</Button>
                  </NavLink>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
