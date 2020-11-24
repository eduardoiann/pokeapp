import React from 'react';
import { Link } from 'react-router-dom';
import './pokeCard.scss';

export default function PokeCard({props: {name, imageUrl, id, types = []}}) {
  return (
    <div className="pkContainer" key={`${imageUrl}`}>
      <Link to={`/details/${id}`}>
        <img alt={`${name} PokeCard`} src={imageUrl}></img>
      </Link>
      <div>
        <span>
          <p>NAME:</p>
          <p>{name}</p>
        </span>
        <span>
          <p>ID:</p>
          <p>{id}</p>
        </span>
        {types.map((type) => (
          <span key={`${id}${type}`}>
            <p>TYPE: </p>
            <p>{type}</p>
          </span>
        ))}
      </div>
    </div>
  );
}
