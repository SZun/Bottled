import React from 'react';

const Header = ({ children }) => (
  <div className="z-depth-3 light-blue accent-2">
    <h3
      style={{
        textAlign: 'center',
        color: '#fff',
        textDecoration: 'underline',
        textShadow: '2px 2px #000000'
      }}
    >
      {children}
    </h3>
  </div>
);

export default Header;
