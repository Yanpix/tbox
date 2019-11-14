import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Tasks from './pages/tasks';

const Routes = () => {
  return (
    <Switch>
      <Route path="/tasks">
        <Tasks />
      </Route>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
