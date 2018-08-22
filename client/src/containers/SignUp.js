import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser, clearErrors } from '../store/actions/authActions';
import PropTypes from 'prop-types';
import { Row } from 'react-materialize';

import Input from '../components/Input/Input';
import Button from '../components/Button';
import Modal from '../components/Modal/Modal';
import moment from 'moment';

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
    birthDate: '',
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
      birthDate,
      streetAddress,
      city,
      state,
      zipCode
    } = this.state;

    const birthDateVals = birthDate.split('/').join('-');
    const age = moment().diff(birthDateVals, 'days');

    if (age < 7671) {
      this.setState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        state: '',
        city: '',
        streetAddress: '',
        zipCode: '',
        birthDate: '',
        show: true,
        errors: {}
      });
    } else {
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
    }
  };

  render() {
    const {
      password,
      email,
      name,
      confirmPassword,
      errors,
      birthDate,
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
      },
      {
        placeholder: '03/01/1997',
        label: 'Birth Date',
        iconVal: 'today',
        type: 'text',
        name: 'birthDate',
        s: 12,
        value: birthDate
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

    return (
      <div className="container" style={{ marginTop: '5%' }}>
        {this.state.show ? (
          <Modal
            show={this.state.show}
            modalClosed={() =>
              window.location.replace(
                'https://pics.me.me/dontdodrugs-memes-comi-17629043.png'
              )
            }
          >
            <h3
              style={{
                textAlign: 'center'
              }}
            >
              You're too young!
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
              Get out!!!
            </h5>
          </Modal>
        ) : null}
        {inputContent}
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
        <Button onClick={this.onSubmitHandler} iconName="check" right large>
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
