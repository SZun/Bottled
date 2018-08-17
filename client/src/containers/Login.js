import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../store/actions/authActions';
import PropTypes from 'prop-types';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const { password, email } = this.state;
    const userData = {
      email,
      password
    };
    this.props.loginUser(userData);
  };

  render() {
    const { password, email } = this.state;
    return (
      <div>
        <input
          formNoValidate
          name="email"
          value={email}
          onChange={this.onChangeHandler}
          type="email"
        />
        <input
          formNoValidate
          name="password"
          value={password}
          onChange={this.onChangeHandler}
          type="text"
        />
        <button type="submit" onClick={this.onSubmitHandler}>
          Submit
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
