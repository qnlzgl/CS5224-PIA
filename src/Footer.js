import React, { Component } from "react";
import { Container } from "reactstrap";
import Icon from "react-fontawesome";
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Icon name="flask" />{" "}
          <a
            href="https://console.bluemix.net/docs/services/personality-insights/science.html#science"
            title="The science behind Personality Insights"
          >
            Wanna learn more about theoretical basis of our App ? Here you go !
          </a>
        </Container>
      </footer>
    );
  }
}

export default Footer;
