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
        <Route exact path='/auth/login' component={LoginPage} />
        <Route exact path='/auth/register' component={RegisterPage} />
      </Router>
    </div>
  );
}

export default App;
