import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import PokeDetailsCard from './components/PokeDetailsCard';
import PokemonContextProvider from './context/PokemonContextProvider';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <PokemonContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/details/:id" component={PokeDetailsCard} />
          </Switch>
        </Router>
      </PokemonContextProvider>
    </div>
  );
}

export default App;
