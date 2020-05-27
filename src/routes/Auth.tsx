import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';

function Auth({ match }: RouteComponentProps) {
  return (
    <Switch>
      <Route path={`${match.path}/login`} component={LoginPage} />
      <Route path={`${match.path}/register`} component={RegisterPage} />
    </Switch>
  );
}

export default Auth;
