import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' render={() => <h1>Index</h1>} />
        <Route path='/auth/login' component={LoginPage} />
        <Route path='/auth/register' component={RegisterPage} />
        <Route path='/auth/find' render={() => <h1>Find User</h1>} />
      </Router>
    </div>
  );
}

export default App;
