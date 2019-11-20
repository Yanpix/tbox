import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Tasks from './pages/tasks';
import Photos from './pages/photos';
import News from './pages/news';

const Routes = () => {
  return (
    <Switch>
      <Route path="/tasks">
        <Tasks />
      </Route>
      <Route path="/photos">
        <Photos />
      </Route>
      <Route path="/news">
        <News />
      </Route>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
