/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: propTypes.func.isRequired,
  isLoggedIn: propTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { isLoggedIn } = state.userReducer;
  return {
    isLoggedIn,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
