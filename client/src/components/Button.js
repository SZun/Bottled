import React from 'react';
import { Button, Icon } from 'react-materialize';

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
    <div>
      <Button
        className="z-depth-3 light-blue accent-2"
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
