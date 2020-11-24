import React from 'react';
import ItemDetailsCard from './itemDetailsCard';
import PokeDetailsCard from './PokeDetailsCard';
import './pokeDetailsCard.scss';

export default function Details({ props: { card } }) {

  /* Esse ternário verifica se a propriedade 'attacks' existe dentro de card. Caso não exista, isso significa que a carta não é um pokemon, e sim um item. Portanto, faz a chamada do componente <ItemDetailsCard /> passando como prop o card. Do contrário, significa que existe 'attacks', e ai renderiza o componente <PokeDetailsCard />*/

  return card.attacks === undefined ? (
    <ItemDetailsCard card={card} />
  ) : (
    <PokeDetailsCard card={card} />
  );
}
