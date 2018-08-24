import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';
import { Row, Col } from 'react-materialize';
import { fetchAllOrders } from '../store/actions/orderActions';
import PropTypes from 'prop-types';

class Orders extends Component {
  componentDidMount = () => {
    this.props.fetchAllOrders();
  };

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

Orders.propTypes = {
  fetchAllOrders: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  order: state.order
});

export default connect(
  mapStateToProps,
  { fetchAllOrders }
)(Orders);
