import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import backIcon from "../images/icon-back.svg";
import Icon from "react-fontawesome";

class MainMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" dark expand="md">
          <Link className="navbar-brand" to="/">
            <img className="icon-back" src={backIcon} alt="Back to homepage" />
            Hack Personality Insights from PS or Coverletter
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/Analyse">
                  <Icon name="font" /> Analyse
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/Rank">
                  <Icon name="Rank" /> Rank
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MainMenu;
