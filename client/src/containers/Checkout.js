import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input/Input';
import Button from '../components/Button';
import { Row } from 'react-materialize';
import CheckoutCard from '../components/CheckoutCard';
import { fetchNotPurchased } from '../store/actions/orderActions';

class Checkout extends Component {
  state = {
    creditCard: '',
    month: '',
    year: '',
    securityCode: '',
    name: '',
    country: '',
    zipCode: ''
  };

  componentDidMount = () => {
    this.props.fetchNotPurchased();
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {
      creditCard,
      month,
      year,
      securityCode,
      name,
      country,
      zipCode
    } = this.state;
    const dateVals = [
      {
        placeholder: '01',
        name: 'month',
        label: 'Month',
        type: 'text',
        s: 3,
        value: month,
        iconVal: 'perm_contact_calendar'
      },
      {
        placeholder: '20',
        name: 'year',
        label: 'Year',
        type: 'text',
        s: 3,
        value: year,
        iconVal: 'perm_contact_calendar'
      },
      {
        placeholder: '123',
        name: 'securityCode',
        label: 'Security Code',
        type: 'text',
        s: 3,
        value: securityCode,
        iconVal: 'lock_outline'
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
      />
    ));

    let cards;

    if (this.props.order.notPurchased.length > 0) {
      console.log(window.location.href);
      cards = this.props.order.notPurchased.map(order => (
        <CheckoutCard
          name={order.name}
          description={order.description}
          onClick={() => console.log('banan')}
          key={order._id}
          isCheckout
        />
      ));
    }
    return (
      <div className="container" style={{ marginTop: '5%' }}>
        <Input
          placeholder="4242 4242 4242 4242"
          name="creditCard"
          label="Credit Card"
          iconVal="credit_card"
          type="text"
          onChange={this.onChangeHandler}
          s={12}
          value={creditCard}
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
          />
        </Row>
        <Button iconName="check" right large>
          Submit
        </Button>
        {cards}
      </div>
    );
  }
}

Checkout.propTypes = {
  order: PropTypes.object.isRequired,
  fetchNotPurchased: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  order: state.order
});

export default connect(
  mapStateToProps,
  { fetchNotPurchased }
)(Checkout);
