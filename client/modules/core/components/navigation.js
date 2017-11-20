import React from 'react';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
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
            <a className="about-site" href="#">Meteor CHAT by Arman</a>
          </Navbar.Brand>
          {
            this.props.isRegistered ?
            <Navbar.Toggle /> : ''
          }
        </Navbar.Header>
        {
          this.props.isRegistered ?
          <Navbar.Collapse className="navbar-collapse">
            <Nav pullRight>
              <NavItem className="orange" eventKey={1} href="#" onClick={ () => FlowRouter.go('chat.rooms') }>Rooms</NavItem>
              <NavItem className="orange" eventKey={2} href="#" onClick={ () => Meteor.logout() }>Log Out</NavItem>
            </Nav>
          </Navbar.Collapse> : ''
        }
      </Navbar>
    );
  }
}
