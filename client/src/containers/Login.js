import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser, clearErrors } from '../store/actions/authActions';
import PropTypes from 'prop-types';

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
    return (
      <div>
        <input
          formNoValidate
          name="email"
          value={email}
          onChange={this.onChangeHandler}
          type="email"
          style={
            errors.email
              ? {
                  backgroundColor: '#DB9797',
                  border: '1px solid #FF0000'
                }
              : null
          }
        />
        {errors.email ? (
          <p
            style={{
              color: '#FF0000'
            }}
          >
            {errors.email}
          </p>
        ) : null}
        <input
          formNoValidate
          name="password"
          value={password}
          style={
            errors.password
              ? {
                  backgroundColor: '#DB9797',
                  border: '1px solid #FF0000'
                }
              : null
          }
          onChange={this.onChangeHandler}
          type="password"
        />
        {errors.password ? (
          <p
            style={{
              color: '#FF0000'
            }}
          >
            {errors.password}
          </p>
        ) : null}
        <button type="submit" onClick={this.onSubmitHandler}>
          Submit
        </button>
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
