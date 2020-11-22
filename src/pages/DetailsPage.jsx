import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import PokeDetailsCard from '../components/PokeDetailsCard';
import * as API from '../services';

export default function DetailsPage() {
  const url = window.location.href;
  const pathname = new URL(url).pathname;
  const pokeIdUrl = pathname.split('/').slice(2, 3)[0];
  const [pokeID, setpokeID] = useState(null);

  const fetchCardById = async () => {
    return setpokeID(await API.fetchPokemonCardByID(pokeIdUrl));
  };

  useEffect(() => {
    fetchCardById();
  }, []);

  console.log(pokeID);

  return <div>{pokeID === null ? <Loading /> : <PokeDetailsCard props={pokeID} />}</div>;
}
