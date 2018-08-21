import React from 'react';

const Radio = ({ children }) => (
  <p>
    <label>
      <input name="group1" type="radio" className="with-gap" />
      <span style={{ color: '#000', fontSize: '1.2rem' }}>{children}</span>
    </label>
  </p>
);

export default Radio;
