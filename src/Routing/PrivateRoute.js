import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticationService from './../Services/AuthenticationService';

// Authenticate guard defined with custom route
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    AuthenticationService.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/home',
          state: { from: props.location }
        }} />
  )} />
)

export default PrivateRoute;