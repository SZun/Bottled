import React, { Component } from 'react';
import { Navbar, NavItem, Button, Icon, Col, Row } from 'react-materialize';
import { connect } from 'react-redux';
import { logoutUser } from '../store/actions/authActions';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBarItem from './NavItem';
import BottleIcon from '../assets/media/empty-beer-bottle.png';
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
        content: `Orders`,
        iconName: 'markunread_mailbox',
        page: '/orders'
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
            <div>
              <Button
                className={
                  this.props.order.notPurchased.length > 0
                    ? 'deep-orange accent-3'
                    : 'z-depth-3 grey lighten-2 black-text'
                }
                waves="light"
                large
              >
                <Row>
                  <Col s={1}>
                    <Icon>shopping_cart</Icon>
                  </Col>
                  <Col s={1}>
                    <p
                      style={{
                        background: 'white',
                        borderRadius: '50px'
                      }}
                    >
                      {this.props.order.notPurchased.length > 0
                        ? this.props.order.notPurchased.length
                        : null}
                    </p>
                  </Col>
                </Row>{' '}
              </Button>
            </div>
          </NavItem>
        </div>
      );
    }
    const Img = <img src={BottleIcon} alt="This is the bottle icon" />;
    return (
      <div className="navbar-fixed">
        <Navbar
          className="amber"
          brand={
            <span
              style={{
                fontSize: '1.5em',
                color: '#FFFFFF'
              }}
            >
              {Img}
              Bottled
            </span>
          }
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
  logoutUser: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  order: state.order
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(NavbarReact));
