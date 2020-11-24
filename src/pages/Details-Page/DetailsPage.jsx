import React, { useEffect, useState, useCallback } from 'react';
import Loading from '../../components/Loading/Loading';
import fetchPokemonCardByID  from '../../services/fetchPokemonCardByID';
import PokeDetailsCard from '../../components/DetailsCard/PokeDetailsCard';

export default function DetailsPage() {
  const url = window.location.href;
  const pathname = new URL(url).pathname;
  const pokeIdUrl = pathname.split('/').slice(2, 3)[0];
  const [pokeID, setpokeID] = useState(null);

  const fetchCardById = useCallback(async () => {
    return setpokeID(await fetchPokemonCardByID(pokeIdUrl));
  }, [setpokeID, pokeIdUrl]);

  useEffect(() => {
    fetchCardById();
  }, [fetchCardById]);

  return <div>{pokeID === null ? <Loading /> : <PokeDetailsCard props={pokeID} />}</div>;
}
