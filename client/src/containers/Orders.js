import React, { Component } from 'react';
import { connect } from 'react-redux';

class Orders extends Component {
  render() {
    return <h1>Orders Page</h1>;
  }
}

export default connect(null)(Orders);
