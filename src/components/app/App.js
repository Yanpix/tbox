import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import './app.css';
import Routes from '../../routes';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes />
      </div>
    </Router>
  );
};

export default hot(module)(App);
