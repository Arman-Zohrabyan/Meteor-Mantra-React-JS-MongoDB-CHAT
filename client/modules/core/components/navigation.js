import React from 'react';
import { Navbar, Nav , NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

export default class Navigation extends React.Component {
  
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a className="about-site" href="#">Meteor CHAT</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem className="orange" eventKey={1} href="#">Rooms</NavItem>
            <NavItem className="orange" eventKey={2} href="#">Create Room</NavItem>
            <NavItem className="orange" eventKey={3} href="#">Log In</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
