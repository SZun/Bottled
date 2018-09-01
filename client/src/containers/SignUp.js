import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser, clearErrors } from '../store/actions/authActions';
import PropTypes from 'prop-types';
import { Row } from 'react-materialize';
import asyncComponent from '../utils/asyncComponent';

const Input = asyncComponent(() => import('../components/Input/Input'));
const Button = asyncComponent(() => import('../components/Button'));
const Modal = asyncComponent(() => import('../components/Modal/Modal'));
const Header = asyncComponent(() => import('../components/Header/Header'));

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    state: '',
    city: '',
    streetAddress: '',
    zipCode: '',
    month: '',
    day: '',
    year: '',
    show: false,
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.clearErrors();
    const {
      password,
      email,
      name,
      confirmPassword,
      month,
      day,
      year,
      streetAddress,
      city,
      state,
      zipCode
    } = this.state;

    const birthDate = `${month}-${day}-${year}`;

    const userData = {
      email,
      name,
      confirmPassword,
      password,
      birthDate,
      streetAddress,
      city,
      state,
      zipCode
    };

    this.props.registerUser(userData, this.props.history);
  };

  render() {
    const {
      password,
      email,
      name,
      confirmPassword,
      errors,
      month,
      day,
      year,
      streetAddress,
      city,
      state,
      zipCode
    } = this.state;

    const inputData = [
      {
        placeholder: 'Your Name',
        iconVal: 'account_circle',
        label: 'Name',
        type: 'text',
        name: 'name',
        s: 12,
        value: name,
        error: errors.name ? errors.name : null
      },
      {
        placeholder: 'email@domain.com',
        label: 'Email',
        iconVal: 'email',
        type: 'email',
        name: 'email',
        s: 12,
        value: email,
        error: errors.email ? errors.email : null
      },
      {
        placeholder: 'Passw0rd!',
        label: 'Password',
        iconVal: 'lock_outline',
        type: 'password',
        name: 'password',
        s: 12,
        value: password,
        error: errors.password ? errors.password : null
      },
      {
        placeholder: 'Confirm Passw0rd!',
        label: 'Confirm Password',
        iconVal: 'check_circle',
        type: 'password',
        name: 'confirmPassword',
        s: 12,
        value: confirmPassword,
        error: errors.confirmPassword ? errors.confirmPassword : null
      }
    ];

    const inputContent = inputData.map(inpt => (
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

    const dateVals = [
      {
        placeholder: '12',
        name: 'month',
        label: 'Month',
        type: 'text',
        s: 4,
        value: month,
        iconVal: 'today'
      },
      {
        placeholder: '31',
        name: 'day',
        label: 'Day',
        type: 'text',
        s: 4,
        value: day,
        iconVal: 'today'
      },
      {
        placeholder: '1997',
        name: 'year',
        label: 'Year',
        type: 'text',
        s: 4,
        value: year,
        iconVal: 'today'
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

    return (
      <div className="container" style={{ marginTop: '5%' }}>
        <Header>Sign Up</Header>
        {errors.birthDate ? (
          <Modal
            show
            modalClosed={() =>
              window.location.replace(
                'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Old_Trix_Box.jpg/250px-Old_Trix_Box.jpg'
              )
            }
          >
            <h3
              style={{
                textAlign: 'center'
              }}
            >
              Looks like you're too young!
            </h3>
            <img
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '50%'
              }}
              src="https://i.ytimg.com/vi/8DfcJlmQBLU/maxresdefault.jpg"
              alt="crying baby"
            />
            <h5
              style={{
                textAlign: 'center',
                color: '#FF0000'
              }}
            >
              Bye!
            </h5>
          </Modal>
        ) : null}
        {inputContent}
        <Row>{dateContent}</Row>
        <Row>
          <Input
            placeholder="1600 Pennsylvania Ave"
            label="Street Address"
            iconVal="theaters"
            type="text"
            name="streetAddress"
            s={10}
            value={streetAddress}
            onChange={this.onChangeHandler}
            error={errors.streetAddress ? errors.streetAddress : null}
          />
          <Input
            placeholder="IL"
            label="State"
            iconVal="landscape"
            type="text"
            name="state"
            s={2}
            value={state}
            onChange={this.onChangeHandler}
            error={errors.state ? errors.state : null}
          />
        </Row>
        <Row>
          <Input
            placeholder="Chicago"
            label="City"
            iconVal="location_city"
            type="text"
            name="city"
            s={10}
            value={city}
            onChange={this.onChangeHandler}
            error={errors.city ? errors.city : null}
          />
          <Input
            placeholder="60176"
            label="Zip Code"
            iconVal="grid_on"
            type="number"
            name="zipCode"
            s={2}
            value={zipCode}
            onChange={this.onChangeHandler}
            error={errors.zipCode ? errors.zipCode : null}
          />
        </Row>
        <Button
          style={{
            zIndex: 1
          }}
          onClick={this.onSubmitHandler}
          iconName="check"
          right
          large
        >
          Submit
        </Button>
      </div>
    );
  }
}

SignUp.propTypes = {
  auth: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser, clearErrors }
)(withRouter(SignUp));
