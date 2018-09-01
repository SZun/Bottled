import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-materialize';
import { fetchPurchased } from '../store/actions/orderActions';
import PropTypes from 'prop-types';
import asyncComponent from '../utils/asyncComponent';

const CheckoutCard = asyncComponent(() => import('../components/CheckoutCard'));
const Spinner = asyncComponent(() => import('../components/Spinner'));
const Header = asyncComponent(() => import('../components/Header/Header'));

class Orders extends Component {
  componentDidMount = () => {
    this.props.fetchPurchased();
  };

  render() {
    let orders;
    if (this.props.order.loading) {
      orders = (
        <div>
          <Spinner />{' '}
          <p style={{ textAlign: 'center' }}>
            Checking for orders... If this spinner does not go away, you may not
            have made any purchases
          </p>
        </div>
      );
    }
    if (this.props.order.purchased.length > 0) {
      orders = this.props.order.purchased.map(order => (
        <CheckoutCard
          name={order.name}
          description={order.description}
          key={order._id}
        />
      ));
    }
    return (
      <div className="container">
        <Row>
          <Col s={12}>
            <Header>Your Orders:</Header>
            {orders}
          </Col>
        </Row>
      </div>
    );
  }
}

Orders.propTypes = {
  fetchPurchased: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  order: state.order
});

export default connect(
  mapStateToProps,
  { fetchPurchased }
)(Orders);
