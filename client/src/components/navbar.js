import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

class NavbarReact extends React.Component {
  render() {
    return (
      <Navbar brand="Bottled" right>
        <NavItem onClick={() => console.log('test click')}>Home</NavItem>
        <NavItem href="">Sign In</NavItem>
      </Navbar>
    );
  }
}

export default NavbarReact;
