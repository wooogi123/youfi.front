import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import DictPage from '../pages/DictPage';
import InvestPage from '../pages/InvestPage';
import LoanPage from '../pages/LoanPage';
import RecommendPage from '../pages/RecommendPage';
import StorePage from '../pages/StorePage';

function Service({ match }: RouteComponentProps) {
  return (
    <Switch>
      <Route path={`${match.path}/dict`} component={DictPage} />
      <Route path={`${match.path}/invest`} component={InvestPage} />
      <Route path={`${match.path}/loan`} component={LoanPage} />
      <Route path={`${match.path}/recommend`} component={RecommendPage} />
      <Route path={`${match.path}/store`} component={StorePage} />
    </Switch>
  );
}

export default Service;
