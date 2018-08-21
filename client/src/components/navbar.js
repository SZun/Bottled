import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import Button from './Button';
import { connect } from 'react-redux';
import { logoutUser } from '../store/actions/authActions';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBarItem from './NavItem';

class NavbarReact extends Component {
  handleLogout = () => {
    this.props.logoutUser(this.props.history);
  };

  goToPage = page => {
    this.props.history.push(page);
  };

  render() {
    const unauthenticated = [
      {
        content: `Login`,
        iconName: 'person',
        page: '/login'
      },
      {
        content: `Sign Up`,
        iconName: 'person',
        page: '/signup'
      }
    ];

    const authenticated = [
      {
        content: `Shop`,
        iconName: 'attach_money',
        page: '/shop'
      },
      {
        content: 'Logout',
        iconName: 'redo'
      }
    ];
    let navItems = (
      <div>
        <NavBarItem
          iconName="home"
          right
          onClick={() => this.props.history.push('/')}
        >
          Home
        </NavBarItem>
        {unauthenticated.map(item => (
          <NavBarItem
            iconName={item.iconName}
            left
            onClick={() => this.goToPage(item.page)}
            key={item.content}
          >
            {item.content}
          </NavBarItem>
        ))}
      </div>
    );
    if (this.props.auth.isAuthenticated) {
      navItems = (
        <div>
          {authenticated.map(item => (
            <NavBarItem
              iconName={item.iconName}
              left
              onClick={
                item.page
                  ? () => this.goToPage(item.page)
                  : () => this.handleLogout()
              }
              key={item.content}
            >
              {item.content ? item.content : null}
            </NavBarItem>
          ))}
          <NavItem onClick={() => this.props.history.push('/checkout')}>
            <Button large iconName="shopping_cart" />
          </NavItem>
        </div>
      );
    }
    return (
      <div className="navbar-fixed">
        <Navbar
          className="deep-orange accent-2"
          brand="Bottled"
          right
          onClick={e => e.preventDefault()}
        >
          {navItems}
        </Navbar>
      </div>
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
