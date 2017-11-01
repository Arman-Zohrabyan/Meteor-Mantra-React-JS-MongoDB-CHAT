import React from 'react';
import { Navbar, Nav , NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  
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
          {
            this.props.isRegistered ?
            <Nav pullRight>
              <NavItem className="orange" eventKey={1} href="#">Rooms</NavItem>
              <NavItem className="orange" eventKey={2} href="#">Log Out</NavItem>
            </Nav> : ''
          }
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
