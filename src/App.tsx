import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthRoute from './routes/Auth';
import ServiceRoute from './routes/Service';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <div className={'App'}>
      <Router>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route path={'/auth'} component={AuthRoute} />
          <Route path={'/service'} component={ServiceRoute} />
          <Redirect from={'*'} to={'/'} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
