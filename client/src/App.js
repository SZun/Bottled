import React from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from './utils/asyncComponent';
import Layout from './containers/Layout';
// import PrivateRoute from './components/PrivateRoute'

// Lazy Loading Components
const Homepage = asyncComponent(() => import('./containers/Homepage'));
const SignUp = asyncComponent(() => import('./containers/SignIn'));
const Login = asyncComponent(() => import('./containers/Login'));

const App = () => {
  return (
    <div>
      <Layout>
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
      </Layout>
    </div>
  );
};

export default App;
