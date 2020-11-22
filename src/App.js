import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import PokemonContextProvider from './context/PokemonContextProvider';
import DetailsPage from './pages/DetailsPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <PokemonContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/details/:id" component={DetailsPage} />
        </Switch>
      </Router>
    </PokemonContextProvider>
  );
}

export default App;
