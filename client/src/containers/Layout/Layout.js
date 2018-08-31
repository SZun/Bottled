import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser, logoutUser } from '../../store/actions/authActions';
import { fetchNotPurchased } from '../../store/actions/orderActions';
import { withRouter } from 'react-router-dom';
import store from '../../store';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../axios/setAuthToken';
import PropTypes from 'prop-types';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

class Layout extends Component {
  render() {
    // Check for toekn
    if (localStorage.jwtToken) {
      // Set auth token header auth
      setAuthToken(localStorage.jwtToken);
      // Decode tokent and get user info and exp
      const decoded = jwt_decode(localStorage.jwtToken);
      // Set user and isAuthenticated
      store.dispatch(setCurrentUser(decoded));

      this.props.fetchNotPurchased();

      // Check for expired token
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        // Clear current token
        localStorage.removeItem('jwtToken');
        // Logout user
        store.dispatch(logoutUser(this.props.history));
      }
    }
    return (
      <div>
        <header>
          <nav>
            <Navbar />
          </nav>
        </header>
        <main>{this.props.children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

Layout.propTypes = {
  setAuthToken: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
  fetchNotPurchased: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAuthToken, setCurrentUser, logoutUser, fetchNotPurchased }
)(withRouter(Layout));
