import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Header from '../components/header';
import { Row, Col } from 'react-materialize';
import { fetchPurchased } from '../store/actions/orderActions';
import PropTypes from 'prop-types';
import CheckoutCard from '../components/CheckoutCard';
import Spinner from '../components/Spinner';

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
            {/* <Header>Your Orders</Header> */}
            <h3
              style={{
                textAlign: 'center'
              }}
            >
              Your Orders
            </h3>
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
