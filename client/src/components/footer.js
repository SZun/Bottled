import React from 'react';

const FooterComponent = () => (
  <div
    className="deep-orange accent-2 z-depth-5"
    style={{
      position: 'fixed',
      height: '50px',
      bottom: 0,
      left: 0,
      right: 0,
      marginBottom: 0,
      textAlign: 'center',
      color: '#FFFFFF'
    }}
  >
    <h5>Copyright &copy; {new Date().getFullYear()} Bottled</h5>
  </div>
);
export default FooterComponent;