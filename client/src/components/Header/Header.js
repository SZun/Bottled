import React from 'react';
import { Random } from 'react-animated-text';

import './Header.css';

const Header = ({ children }) => (
  <div>
    <header>
      <h1 className="header">
        <Random
          text={children}
          effect="verticalFadeIn"
          iterations={1}
          effectChange={3}
        />
      </h1>
    </header>
  </div>
);

export default Header;
