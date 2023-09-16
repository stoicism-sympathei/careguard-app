import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define the navigation header or any shared components */}
        {/* For example, a navigation bar can go here */}
        
        <Switch>
          {/* Landing Page */}
          <Route exact path="/" component={LandingPage} />

          {/* Registration Page */}
          <Route path="/register" component={RegistrationPage} />

          {/* Login Page */}
          <Route path="/login" component={LoginPage} />

          {/* Dashboard */}
          <Route path="/dashboard" component={Dashboard} />

          {/* Add more routes for other pages and components */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

