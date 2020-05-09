import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DictPage from './pages/DictPage';
import InvestPage from './pages/InvestPage';
import LoanPage from './pages/LoanPage';
import RecommendPage from './pages/RecommendPage';
import StorePage from './pages/StorePage';
import './App.css';

function App() {
  return (
    <div className={'App'}>
      <Router>
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/auth/login'} component={LoginPage} />
        <Route exact path={'/auth/register'} component={RegisterPage} />
        <Route exact path={'/service/dict'} component={DictPage} />
        <Route exact path={'/service/invest'} component={InvestPage} />
        <Route exact path={'/service/loan'} component={LoanPage} />
        <Route exact path={'/service/recommend'} component={RecommendPage} />
        <Route exact path={'/service/store'} component={StorePage} />
      </Router>
    </div>
  );
}

export default App;
