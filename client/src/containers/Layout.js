import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser, logoutUser } from '../store/actions/authActions';
import store from '../store';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../axios/setAuthToken';
import PropTypes from 'prop-types';
import Login from './Login';

// Check for toekn
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode tokent and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current token
    localStorage.removeItem('jwtToken');
    // Redirect to login
    window.location.href = '/login';
  }
}

const Layout = () => (
  //Add Header Here
  <div>
    <Login />
  </div>
);

Layout.propTypes = {
  setAuthToken: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  setCurrentUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAuthToken, setCurrentUser, logoutUser }
)(Layout);
