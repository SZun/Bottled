import React from 'react';

const FooterComponent = () => (
  <div
    style={{
      display: 'block',
      padding: '20px',
      height: '60px',
      width: '100%'
    }}
  >
    <div
      className="deep-orange accent-2 z-depth-5"
      style={{
        textAlign: 'center',
        padding: '10px',
        position: 'fixed',
        left: '0',
        bottom: '0',
        height: '60px',
        width: '100%',
        color: '#FFF',
        zIndex: 2
      }}
    >
      <h5>Copyright &copy; {new Date().getFullYear()} Bottled</h5>
    </div>
  </div>
);
export default FooterComponent;
