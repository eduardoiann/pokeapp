import React, { useContext, useEffect, useState } from 'react';
import Loading from '../components/Loading';
import pokeCard from '../components/pokeCard';
import PokemonContext from '../context/PokemonContext';
import './mainPage.scss';
import * as API from '../services';
import Header from '../components/Header';

export default function MainPage() {
  const { pokeData, setPokeData } = useContext(PokemonContext);

  const fetchAll = async () => {
    return setPokeData(await API.fetchPokeCards());
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div>
      <Header title="Gotta Search 'Em All!" />
      <div style={{ display: 'flex', overflowX: 'scroll' }}>
        {pokeData === null || pokeData.length === 0 ? (
          <Loading />
        ) : (
          pokeData.map((pokemon) =>
            pokeCard(pokemon.name, pokemon.imageUrlHiRes, pokemon.id, pokemon.types)
          )
        )}
      </div>
    </div>
  );
}
