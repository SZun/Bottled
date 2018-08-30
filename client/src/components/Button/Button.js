import React from 'react';
import { Button, Icon } from 'react-materialize';
import './Button.css';
const CustomButton = ({
  iconName,
  children,
  onClick,
  right,
  left,
  large,
  type
}) => {
  return (
    <div className="iconAndButton">
      <Button
        className="z-depth-3 grey lighten-2 black-text"
        waves="light"
        large={large}
        onClick={onClick}
        type={type}
      >
        {children}
        <Icon right={right} left={left}>
          {iconName}
        </Icon>
      </Button>
    </div>
  );
};

export default CustomButton;
