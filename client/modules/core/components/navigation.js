import React from 'react';
import { Nav, NavItem } from '@sketchpixy/rubix';

export default class Navigation extends React.Component {
  handleSelect(selectedKey) {
    console.log('selected ' + selectedKey);
  }
  
  render() {
    return (
      <Nav bsStyle="pills" className='nav-orange75' activeKey={1} onSelect={this.handleSelect}>
        <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
        <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
        <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
      </Nav>
    );
  }
}
