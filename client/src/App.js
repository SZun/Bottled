
import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Homepage from './pages/homepage.js';
import SignIn from './pages/sign-in';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/sign-in" component={SignIn} />
    </div>
  );
};

export default App;
