import React from 'react';

const FooterComponent = () => (
  <div
    className="z-depth-5 amber"
    style={{
      textAlign: 'center',
      padding: '10px',
      position: 'relative',
      left: '0',
      bottom: '0',
      height: '86px',
      width: '100%',
      color: '#FFF',
      zIndex: 2
    }}
  >
    <h5>Copyright &copy; {new Date().getFullYear()} Bottled</h5>
  </div>
);
export default FooterComponent;
