import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import asyncComponent from './utils/asyncComponent';
import Layout from './containers/Layout';
import PrivateRoute from './components/PrivateRoute';

// Lazy Loading Components
const Homepage = asyncComponent(() => import('./containers/Homepage'));
const SignUp = asyncComponent(() => import('./containers/SignIn'));
const Login = asyncComponent(() => import('./containers/Login'));
const Checkout = asyncComponent(() => import('./containers/Checkout'));
const NotFound = asyncComponent(() => import('./containers/NotFound'));

const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/404" component={NotFound} />
          <PrivateRoute exact path="/checkout" component={Checkout} />
        </Switch>
        <Redirect to="/404" />
      </Layout>
    </div>
  );
};

export default App;
