import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';

function Auth({ match }: RouteComponentProps) {
  return (
    <Switch>
      <Route path={`${match.path}/login`} component={LoginPage} />
      <Route path={`${match.path}/register`} component={RegisterPage} />
      <Redirect from={'*'} to={'/'} />
    </Switch>
  );
}

export default Auth;
