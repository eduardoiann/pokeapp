import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import DetailsPage from './pages/Details-Page/DetailsPage';
import MainPage from './pages/Main-Page/MainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/details/:id" component={DetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;
