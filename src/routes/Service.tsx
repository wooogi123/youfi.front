import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom';
import {
  DictPage,
  DepositPage,
  LoanPage,
  RecommendPage,
  SavingPage,
} from '../pages';

function Service({ match }: RouteComponentProps) {
  return (
    <Switch>
      <Route path={`${match.path}/dict`} component={DictPage} />
      <Route path={`${match.path}/deposit`} component={DepositPage} />
      <Route path={`${match.path}/loan`} component={LoanPage} />
      <Route path={`${match.path}/recommend`} component={RecommendPage} />
      <Route path={`${match.path}/saving`} component={SavingPage} />
      <Redirect from={'*'} to={'/'} />
    </Switch>
  );
}

export default Service;
