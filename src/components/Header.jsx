import React, { useState, useContext, useEffect } from 'react';
import PokemonContext from '../context/PokemonContext';
import * as API from '../services'
import './header.scss'

export default function Header({ title }) {
  const [pokeSearch, setPokeSearch] = useState('');
  const { pokeData, setPokeData } = useContext(PokemonContext);

  const fetchCards = async (e, name) => {
    e.preventDefault();
    if (name === '') return null;
    return setPokeData(await API.fetchCardByPokemonName(name));
  };

  return (
    <div>
      <header>
        <h1 className="title">{title}</h1>
        <form>
          <input
            onChange={(e) => {
              setPokeSearch(e.target.value);
            }}
            value={pokeSearch}
            placeholder="Search for your Pokemon"
          />
          <button onClick={(e) => fetchCards(e, pokeSearch)}>Search!</button>
          {/* <button onClick={(e) => fetchAll(e)}>Search 'Em All!</button> */}
        </form>
      </header>
    </div>
  );
}
