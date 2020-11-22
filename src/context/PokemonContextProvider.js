import React, { useState } from 'react';
import PokemonContext from './PokemonContext';

const PokemonContextProvider = ({ children }) => {
  const [pokeData, setPokeData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => showModal === true ? setShowModal(false) : setShowModal(true);

  const store = {
    pokeData,
    setPokeData,
    showModal,
    setShowModal,
    toggleModal,
  };

  return <PokemonContext.Provider value={store}>{children}</PokemonContext.Provider>;
};

export default PokemonContextProvider;
