import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
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
    </Switch>
  );
}

export default Service;
