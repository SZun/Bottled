import React from 'react';
import { Input, Icon } from 'react-materialize';
import './Input.css';

const TextInput = ({
  placeholder,
  label,
  type,
  s,
  error,
  value,
  name,
  onChange,
  iconVal
}) => (
  <div>
    <div
      style={{
        color: '#FF0000',
        margin: 0,
        padding: 0
      }}
      className={'errorField'}
    >
      {error}
    </div>
    <Input
      placeholder={placeholder}
      label={label}
      type={type}
      s={s}
      name={name}
      value={value}
      onChange={onChange}
      style={
        error
          ? {
              backgroundColor: '#d49292',
              border: '1px solid #FF0000'
            }
          : null
      }
    >
      <Icon
        style={{
          color: '#40c4ff'
        }}
      >
        {iconVal}
      </Icon>
    </Input>
  </div>
);

export default TextInput;
