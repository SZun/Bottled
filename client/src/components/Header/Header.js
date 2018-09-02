import React from 'react';

import './Header.css';

const Header = ({ children }) => (
  <div>
    <header>
      <h1 className="header">{children}</h1>
    </header>
  </div>
);

export default Header;
