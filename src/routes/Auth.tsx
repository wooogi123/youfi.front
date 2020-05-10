import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

function Auth({ match }: RouteComponentProps) {
  return (
    <Switch>
      <Route path={`${match.path}/login`} component={LoginPage} />
      <Route path={`${match.path}/register`} component={RegisterPage} />
    </Switch>
  );
}

export default Auth;
