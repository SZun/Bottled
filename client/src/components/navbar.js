import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import Button from './Button';
import { connect } from 'react-redux';
import { logoutUser } from '../store/actions/authActions';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavbarReact extends Component {
  handleLogout = () => {
    this.props.logoutUser(this.props.history);
  };

  render() {
    let navItems = (
      <div>
        <NavItem onClick={() => this.props.history.push('/')}>
          <Button large iconName="home" right>
            Home
          </Button>
        </NavItem>
        <NavItem onClick={() => this.props.history.push('/login')}>
          <Button large iconName="person" left>
            Log In
          </Button>
        </NavItem>
        <NavItem onClick={() => this.props.history.push('/signup')}>
          <Button large iconName="person_add" left>
            Sign Up
          </Button>
        </NavItem>
      </div>
    );
    if (this.props.auth.isAuthenticated) {
      navItems = (
        <div>
          <NavItem onClick={() => this.props.history.push('/shop')}>
            <Button large iconName="attach_money" right>
              Shop
            </Button>
          </NavItem>
          <NavItem onClick={this.handleLogout}>
            <Button large iconName="redo" right>
              Logout
            </Button>
          </NavItem>
          <NavItem onClick={() => this.props.history.push('/checkout')}>
            <Button large iconName="shopping_cart" />
          </NavItem>
        </div>
      );
    }
    return (
      <Navbar brand="Bottled" right onClick={e => e.preventDefault()}>
        {navItems}
      </Navbar>
    );
  }
}

NavbarReact.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(NavbarReact));
