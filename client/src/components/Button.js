import React from 'react';
import { Button, Icon } from 'react-materialize';

const CustomButton = ({ iconName, children, onClick, right, left, large }) => {
  return (
    <div>
      <Button
        className="z-depth-3"
        waves="light"
        large={large}
        onClick={onClick}
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
