import React, {Component} from "react"
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import "./Header.css"

class Header extends Component {
  render() {
    return (
        <Navbar>

          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">smurf</a>
            </Navbar.Brand>
          </Navbar.Header>

          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Login
            </NavItem>
            <NavItem eventKey={2} href="#">
              Sign Up
            </NavItem>
          </Nav>
        </Navbar>
    )
  }
};


export default Header;
