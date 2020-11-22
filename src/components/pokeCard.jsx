import React from 'react';
import { Link } from 'react-router-dom';
import './pokeCard.scss';

export default function pokeCard(name, url, id, type = []) {
  return (
    <div className="pkContainer" key={`${url}`}>
      <Link to={`/details/${id}`}>
        <img style={{ width: '290px' }} alt={`${name} PokeCard`} src={url}></img>
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
        {type.map((type) => (
          <span key={`${id}${type}`}>
            <p>TYPES: </p>
            <p>{type}</p>
          </span>
        ))}
      </div>
    </div>
  );
}
