import React, { useContext, useEffect } from 'react';
import Loading from '../components/Loading';
import pokeCard from '../components/pokeCard';
import PokemonContext from '../context/PokemonContext';
import './mainPage.scss';
import * as API from '../services';
import Header from '../components/Header';

export default function MainPage() {
  const { pokeData, setPokeData } = useContext(PokemonContext);

  const fetchAllCards = async () => {
    return setPokeData(await API.fetchAllPokemonCards());
  };

  useEffect(() => {
    fetchAllCards();
  }, []);

  return (
    <div>
      <Header title="Gotta Search 'Em All!" />
      <div className="pokemon-display">
        {pokeData === null || pokeData.length === 0 ? (
          <Loading />
        ) : (
          pokeData.map((pokemon) =>
            pokeCard(pokemon.name, pokemon.imageUrl, pokemon.id, pokemon.types)
          )
        )}
      </div>
      {console.log(pokeData)}
    </div>
  );
}
