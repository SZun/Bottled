import React from 'react';

const FooterComponent = () => (
  // <div
  //   style={{
  //     display: 'block',
  //     padding: '20px',
  //     height: '60px',
  //     width: '100%'
  //   }}
  // >
  <div
    className="red darken-3 z-depth-5"
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
    <p>
      Icons made by{' '}
      <a href="https://www.flaticon.com/authors/belc" title="Belc">
        Belc
      </a>{' '}
      from{' '}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>{' '}
      is licensed by{' '}
      <a
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
      >
        CC 3.0 BY
      </a>
    </p>
  </div>
  // </div>
);
export default FooterComponent;
