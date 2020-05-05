import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' render={() => <h1>Index Page</h1>} />
        <Route path='/auth/login' component={LoginPage} />
        <Route path='/auth/register' component={RegisterPage} />
      </Router>
    </div>
  );
}

export default App;
