import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './containers/homepage.jsge';
import SignIn from './containers/SignIn';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/sign-in" component={SignIn} />
    </div>
  );
};

export default App;
