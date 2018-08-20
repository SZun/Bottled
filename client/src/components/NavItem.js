import React from 'react';
import { NavItem } from 'react-materialize';
import Button from './Button';

const NavBarItem = ({...props, onClick, iconName, children }) => (
  <NavItem onClick={onClick}>
    <Button large iconName={iconName} {...props}>
      {children}
    </Button>
  </NavItem>
);

export default NavBarItem;
