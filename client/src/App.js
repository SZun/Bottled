import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Homepage from './components/pages/homepage.js';
import NavbarReact from './components/navbar';
import SignIn from './components/pages/sign-in';

const App = () => {
  return (
    <div>
      <NavbarReact />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/sign-in" component={SignIn} />
    </div>
  );
};

export default App;
