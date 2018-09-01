import React from 'react';
import { Random } from 'react-animated-text';

import './Header.css';

const Header = ({ children }) => (
  <div>
    <header>
      <h1 className="header">
        <Random
          text={children}
          effect="color"
          effectDuration={0.5}
          iterations="infinite"
          effectChange="#ffc107"
        />
      </h1>
    </header>
  </div>
);

export default Header;
