import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';
import { Row, Col } from 'react-materialize';

class Orders extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col s={5}>
            <Header>In Transit...</Header>
          </Col>
          <Col s={2} />
          <Col s={5}>
            <Header>Completed</Header>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(null)(Orders);
