import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser, clearErrors } from '../store/actions/authActions';
import PropTypes from 'prop-types';

import Input from '../components/Input';
import Button from '../components/Button';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    const { password, email, name, confirmPassword } = this.state;
    const userData = {
      email,
      name,
      confirmPassword,
      password
    };
    this.props.registerUser(userData, this.props.history);
  };

  render() {
    const { password, email, name, confirmPassword, errors } = this.state;

    const inputData = [
      {
        placeholder: 'Your Name',
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
        type: 'email',
        name: 'email',
        s: 12,
        value: email,
        error: errors.email ? errors.email : null
      },
      {
        placeholder: 'Passw0rd!',
        label: 'Password',
        type: 'password',
        name: 'password',
        s: 12,
        value: password,
        error: errors.password ? errors.password : null
      },
      {
        placeholder: 'Confirm Passw0rd!',
        label: 'Confirm Password',
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
        onChange={this.onChangeHandler}
        label={inpt.label}
        key={inpt.name}
        error={inpt.error}
      />
    ));

    return (
      <div className="container" style={{ marginTop: '5%' }}>
        {inputContent}
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
