import React, { useState, useEffect } from 'react';
import PokemonContext from './PokemonContext'

const PokemonContextProvider = ({ children }) => {
  const [pokeData, setPokeData] = useState(null);


  const store = {
    pokeData,
    setPokeData,

  };

  return (
    <PokemonContext.Provider value={store}>{children}</PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
