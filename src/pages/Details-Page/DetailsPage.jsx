import React, { useEffect, useState, useCallback } from 'react';
import fetchPokemonCardByID  from '../../services/fetchPokemonCardByID';
import Loading from '../../components/Loading/Loading';
import Details from '../../components/DetailsCard/Details';

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

  return <div>{pokeID === null ? <Loading /> : <Details props={pokeID} />}</div>;
}
