import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  fetchNotPurchased,
  deleteOrder,
  purchaseOrders
} from '../../store/actions/orderActions';
import { getUserData } from '../../store/actions/authActions';
import { Row, Col } from 'react-materialize';
import moment from 'moment';
import asyncComponent from '../../utils/asyncComponent';

import './Checkout.css';

const Input = asyncComponent(() => import('../../components/Input/Input'));
const Button = asyncComponent(() => import('../../components/Button'));
const CheckoutCard = asyncComponent(() =>
  import('../../components/CheckoutCard')
);
const Modal = asyncComponent(() => import('../../components/Modal/Modal'));

class Checkout extends Component {
  state = {
    creditCard: '',
    month: '',
    year: '',
    securityCode: '',
    name: '',
    country: '',
    zipCode: '',
    errors: {},
    show: false,
    visa: false,
    mastercard: false,
    discovery: false,
    amex: false
  };

  onSubmitHandler = () => {
    const {
      creditCard,
      month,
      year,
      securityCode,
      name,
      country,
      zipCode
    } = this.state;
    const data = {
      creditCard,
      month,
      year,
      securityCode,
      name,
      country,
      zipCode
    };

    this.props.purchaseOrders(data);
    this.setState({
      show: true
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidMount = () => {
    this.props.fetchNotPurchased();
    this.props.getUserData();
  };

  onDeleteHandler = id => {
    this.props.deleteOrder(id);
    this.props.fetchNotPurchased();
  };

  onChangeHandler = e => {
    const { creditCard } = this.state;
    this.setState({
      [e.target.name]: e.target.value,
      show: false,
      visa: false,
      mastercard: false,
      amex: false,
      discovery: false
    });
    if (creditCard.split('').length >= 1) {
      const arr = creditCard
        .split('')
        .splice(0, 1)
        .join('');
      switch (arr) {
        case '4':
          this.setState({ visa: true });
          break;
        case '5':
          this.setState({ mastercard: true });
          break;
        case '6':
          this.setState({ discovery: true });
          break;
        case '3':
          this.setState({ amex: true });
          break;
        default:
          return;
      }
    }
  };

  render() {
    const {
      creditCard,
      month,
      year,
      securityCode,
      name,
      country,
      zipCode,
      errors,
      show,
      visa,
      mastercard,
      discovery,
      amex
    } = this.state;
    const dateVals = [
      {
        placeholder: '01',
        name: 'month',
        label: 'Month',
        type: 'text',
        s: 3,
        value: month,
        iconVal: 'perm_contact_calendar',
        error: errors.month ? errors.month : null
      },
      {
        placeholder: '20',
        name: 'year',
        label: 'Year',
        type: 'text',
        s: 3,
        value: year,
        iconVal: 'perm_contact_calendar',
        error: errors.year ? errors.year : null
      },
      {
        placeholder: '123',
        name: 'securityCode',
        label: 'Security Code',
        type: 'text',
        s: 3,
        value: securityCode,
        iconVal: 'lock_outline',
        error: errors.securityCode ? errors.securityCode : null
      }
    ];

    const dateContent = dateVals.map(inpt => (
      <Input
        placeholder={inpt.placeholder}
        s={inpt.s}
        name={inpt.name}
        value={inpt.value}
        type={inpt.type}
        iconVal={inpt.iconVal}
        onChange={this.onChangeHandler}
        label={inpt.label}
        key={inpt.name}
        error={inpt.error}
      />
    ));

    let cards;
    let price;

    if (this.props.order.notPurchased.length > 0) {
      price = (
        <h5
          style={{
            textAlign: 'center'
          }}
        >
          Your Estimated Price Is:{' '}
          <span
            style={{
              color: '#228b22'
            }}
          >
            ${(this.props.order.notPurchased.length * 4.99).toFixed(2)}
          </span>
        </h5>
      );
      cards = this.props.order.notPurchased.map(order => (
        <CheckoutCard
          name={order.name}
          description={order.description}
          onClick={() => this.onDeleteHandler(order._id)}
          key={order._id}
          isCheckout
        />
      ));
    }

    let modal;

    if (this.props.order.purchasing) {
      const {
        streetAddress,
        city,
        state,
        zipCode,
        name
      } = this.props.user.userData;
      modal = (
        <Modal
          show={show}
          modalClosed={() => this.props.history.push('/orders')}
        >
          <div
            style={{
              textAlign: 'center'
            }}
          >
            <h1>Hey {name}!</h1>
            <h4>Thanks for shopping with Bottled!</h4>
            <p>
              Your order with be shipped to{' '}
              <strong>
                {`${streetAddress}, ${city}, ${state}, ${zipCode}`}
              </strong>{' '}
              by{' '}
              <strong>
                {moment()
                  .add(7, 'days')
                  .format('MM-DD-YYYY')}
              </strong>
            </p>
            <h1>Enjoy!</h1>
          </div>
        </Modal>
      );
    }

    return (
      <div className="container" style={{ marginTop: '5%' }}>
        {modal}
        <Row>
          <Col s={1}>
            <i
              className="fab fa-cc-visa"
              style={
                visa
                  ? {
                      color: '#40c4ff'
                    }
                  : null
              }
            />
          </Col>
          <Col s={1}>
            <i
              className="fab fa-cc-mastercard"
              style={
                mastercard
                  ? {
                      color: '#40c4ff'
                    }
                  : null
              }
            />
          </Col>
          <Col s={1}>
            <i
              className="fab fa-cc-discover"
              style={
                discovery
                  ? {
                      color: '#40c4ff'
                    }
                  : null
              }
            />
          </Col>
          <Col s={1}>
            <i
              className="fab fa-cc-amex"
              style={
                amex
                  ? {
                      color: '#40c4ff'
                    }
                  : null
              }
            />
          </Col>
        </Row>
        <Input
          placeholder="4242 4242 4242 4242"
          name="creditCard"
          label="Credit Card"
          iconVal="credit_card"
          type="text"
          onChange={this.onChangeHandler}
          s={12}
          value={creditCard}
          error={errors.creditCard ? errors.creditCard : null}
        />
        <Row>{dateContent}</Row>
        <Input
          placeholder="John Doe"
          name="name"
          label="Name On Card"
          type="text"
          onChange={this.onChangeHandler}
          s={12}
          iconVal="account_circle"
          value={name}
          error={errors.name ? errors.name : null}
        />
        <Row>
          <Input
            placeholder="United States"
            name="country"
            label="Country"
            iconVal="vpn_lock"
            onChange={this.onChangeHandler}
            type="text"
            s={8}
            value={country}
            error={errors.country ? errors.country : null}
          />
          <Input
            placeholder="60035"
            name="zipCode"
            label="Zip Code"
            iconVal="map"
            onChange={this.onChangeHandler}
            type="text"
            s={4}
            value={zipCode}
            error={errors.zipCode ? errors.zipCode : null}
          />
        </Row>
        <Button iconName="check" onClick={this.onSubmitHandler} right large>
          Submit
        </Button>
        {price}
        {cards}
      </div>
    );
  }
}

Checkout.propTypes = {
  order: PropTypes.object.isRequired,
  fetchNotPurchased: PropTypes.func.isRequired,
  deleteOrder: PropTypes.func.isRequired,
  purchaseOrders: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  getUserData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  order: state.order,
  errors: state.errors,
  user: state.user
});

export default connect(
  mapStateToProps,
  { fetchNotPurchased, deleteOrder, purchaseOrders, getUserData }
)(withRouter(Checkout));
