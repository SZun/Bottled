import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser, clearErrors } from '../store/actions/authActions';
import PropTypes from 'prop-types';
import asyncComponent from '../utils/asyncComponent';

const Input = asyncComponent(() => import('../components/Input/Input'));
const Button = asyncComponent(() => import('../components/Button'));

class Login extends Component {
  state = {
    email: '',
    password: '',
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
    const { password, email } = this.state;
    const userData = {
      email,
      password
    };
    this.props.loginUser(userData, this.props.history);
  };

  render() {
    const { password, email, errors } = this.state;

    const inputData = [
      {
        placeholder: 'email@domain.com',
        label: 'Email',
        type: 'email',
        s: 12,
        value: email,
        error: errors.email ? errors.email : null,
        iconVal: 'email'
      },
      {
        placeholder: 'Passw0rd!',
        label: 'Password',
        type: 'password',
        s: 12,
        value: password,
        error: errors.password ? errors.password : null,
        iconVal: 'lock_outline'
      }
    ];

    const inputContent = inputData.map(inpt => (
      <Input
        placeholder={inpt.placeholder}
        s={inpt.s}
        name={inpt.type}
        value={inpt.value}
        type={inpt.type}
        iconVal={inpt.iconVal}
        onChange={this.onChangeHandler}
        label={inpt.label}
        key={inpt.type}
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

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser, clearErrors }
)(withRouter(Login));
