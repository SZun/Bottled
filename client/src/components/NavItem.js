import React from 'react';
import { NavItem } from 'react-materialize';
import Button from './Button/Button';

const NavBarItem = ({...props, onClick, iconName, children }) => (
  <NavItem onClick={onClick}>
    <Button large waves='light' iconName={iconName} {...props}>
      {children}
    </Button>
  </NavItem>
);

export default NavBarItem;
