import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="nav-wrapper">
        <h1> {this.props.children}</h1>
      </div>
    );
  }
}

export default Header;
