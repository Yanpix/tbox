import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { hot } from 'react-hot-loader';
import './app.css';
import Routes from '../../routes';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <div className="app">
        <Routes />
      </div>
    </Router>
  );
};

export default hot(module)(App);
