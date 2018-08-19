import React from 'react';
import { Input } from 'react-materialize';

const TextInput = ({
  placeholder,
  label,
  type,
  s,
  error,
  value,
  name,
  onChange
}) => (
  <div>
    <p
      style={{
        color: '#FF0000'
      }}
    >
      {error}
    </p>
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
              backgroundColor: '#DB9797',
              border: '1px solid #FF0000'
            }
          : null
      }
    />
  </div>
);

export default TextInput;
