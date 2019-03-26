import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
class Header extends Component {
  render() {
    return (
      <Jumbotron className="app-banner hidden-load animated fadeIn">
        <Container>
          <h1 className="display-3 banner-title">
            Person<span className="ai">A</span>l<span className="ai">
              I
            </span>ty H<span className="ai">A</span>cker

          </h1>
          <p className="lead">
            Personality Insight Analytics. Obtain personality insights for a batch of applicants and rank them using information from their personal statement or cover letter. Build application to help a human resources department as well as schools’ admission office analyze the personalities of applicants.
          </p>
          <p>
            <small>
              Powered by <a href="https://www.ibm.com/watson">IBM Watson</a>
              {""} / Developed by {""}
              <a href="https://www.comp.nus.edu.sg/~teoym/cs5224-19//schedule.html">CS5224 Cloud Computing Project Team PIA</a>
            </small>
          </p>
        </Container>
      </Jumbotron>
    );
  }
}

export default Header;
