import React from 'react';
import './footer.css';

const FooterComponent = () => (
  <div className="z-depth-5 amber footer">
    <h5 style={{ fontWeight: 200 }}>
      Copyright Bottled&copy; {new Date().getFullYear()}
    </h5>
  </div>
);
export default FooterComponent;
