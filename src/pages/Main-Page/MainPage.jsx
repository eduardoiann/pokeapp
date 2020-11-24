import React, { useContext, useEffect, useCallback } from 'react';
import Loading from '../../components/Loading/Loading';
import PokeCard from '../../components/PokeCard/PokeCard';
import PokemonContext from '../../context/PokemonContext';
import './mainPage.scss';
import {fetchAllPokemonCards} from '../../services';
import Header from '../../components/Header/Header';

export default function MainPage() {
  const { pokeData, setPokeData } = useContext(PokemonContext);

  const fetchAllCards = useCallback(async () => {
    return setPokeData(await fetchAllPokemonCards());
  }, [setPokeData]);

  useEffect(() => {
    fetchAllCards();
  }, [fetchAllCards]);

  return (
    <div>
      <Header title="Gotta Search 'Em All!" />
      <div className="pokemon-display">
        {pokeData === null || pokeData.length === 0 ? (
          <Loading />
        ) : (
          pokeData.map((pokemon) => {
            return <PokeCard key={pokemon.id} props={pokemon} />;
          })
        )}
      </div>
    </div>
  );
}
