import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PokemonContextProvider from './context/PokemonContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <PokemonContextProvider>
      <App />
    </PokemonContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
