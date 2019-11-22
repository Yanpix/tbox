import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/private-route';
import Login from './pages/login';
import Register from './pages/register/Register';
import Dashboard from './pages/dashboard';
import Tasks from './pages/tasks';
import Photos from './pages/photos';
import News from './pages/news';
import Sport from './pages/sport';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/tasks" component={Tasks} />
      <PrivateRoute path="/photos" component={Photos} />
      <PrivateRoute path="/news" component={News} />
      <PrivateRoute path="/sport" component={Sport} />
      <PrivateRoute path="/" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
