import React, { useState, useContext } from 'react';
import PokemonContext from '../../context/PokemonContext';
import fetchPokemonCardsByName from '../../services/fetchPokemonCardsByName';
import './header.scss';

export default function Header({ title }) {
  const [pokeSearch, setPokeSearch] = useState('');
  const { setPokeData } = useContext(PokemonContext);

  const fetchCardsByName = async (e, name) => {
    e.preventDefault();
    if (name === '') return null;
    return setPokeData(await fetchPokemonCardsByName(name));
  };

  return (
    <div>
      <header>
        <h1 className="title">{title}</h1>
        <form>
          <input
            className="search-input"
            onChange={(e) => {
              setPokeSearch(e.target.value);
            }}
            value={pokeSearch}
            placeholder="Pokemon..."
          />
          <button data-testid="search-btn" className="search-btn" onClick={(e) => fetchCardsByName(e, pokeSearch)}>I choose you!
        </button>
        </form>
      </header>
    </div>
  );
}
