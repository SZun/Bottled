import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from './utils/asyncComponent';
import Layout from './containers/Layout/Layout';
import PrivateRoute from './components/PrivateRoute';

// Lazy Loading Components
const SignUp = asyncComponent(() => import('./containers/SignIn'));
const Login = asyncComponent(() => import('./containers/Login'));
const Checkout = asyncComponent(() => import('./containers/Checkout'));
const NotFound = asyncComponent(() => import('./containers/NotFound'));
const Homepage = asyncComponent(() => import('./containers/Homepage'));
const Shop = asyncComponent(() => import('./containers/Shop'));

const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/checkout" component={Checkout} />
          <PrivateRoute exact path="/shop" component={Shop} />
          {/* If Route not found, redirect to 404 page */}
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
