import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={HomePage} />
        <Route path='/auth/login' component={LoginPage} />
        <Route path='/auth/register' component={RegisterPage} />
        <Route path='/auth/find' render={() => <h1>Find User</h1>} />
      </Router>
    </div>
  );
}

export default App;
