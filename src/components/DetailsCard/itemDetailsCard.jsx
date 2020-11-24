import React from 'react';
import Loading from '../../components/Loading/Loading';
import './pokeDetailsCard.scss';

export default function ItemDetailsCard({ card }) {
  return card === null ? (
    <Loading />
  ) : (
    <div style={{ width: '100%' }} key={`${card.url}`}>
      <img style={{ width: '90%' }} alt={`${card.name} ItemCard`} src={card.imageUrlHiRes} />
      <div className="container pokeInfo">
        <span>
          <p>NAME:</p>
          <p>{card.name}</p>
        </span>
        <span>
          <p>ID:</p>
          <p>{card.id}</p>
        </span>
        <span>
          <p>SubType:</p>
          <p>{card.subtype}</p>
        </span>
          <p>Info:</p>
        <span>
          <p>{card.text}</p>
        </span>
      </div>
    </div>
  );
}
