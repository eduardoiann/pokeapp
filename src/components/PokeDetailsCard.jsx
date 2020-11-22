import React, { useState, useContext } from 'react';
import PokemonContext from '../context/PokemonContext';
import Modal from './modal';
import Loading from '../components/Loading'
import './pokeDetailsCard.scss';

export default function PokeDetailsCard({ props: { card } }) {
  const [defineAttack, setDefineAttack] = useState(null);
  const {showModal, setShowModal, toggleModal} = useContext(PokemonContext)

  const renderDiv = (att) => {
    setDefineAttack(att);
    toggleModal();
  };

  return card === null ? <Loading /> : (
    <div style={{ width: '100%' }} key={`${card.url}`}>
      <img style={{ width: '100%' }} alt={`${card.name} PokeCard`} src={card.imageUrlHiRes} />
      <div className="container pokeInfo">
        <div>
        {card.attacks.map((att) => (
          <button onClick={() => renderDiv(att)}>{att.name}</button>
        ))}
        {showModal === true ? <Modal props={defineAttack} /> : null}
        </div>
        <span>
          <p>NAME:</p>
          <p>{card.name}</p>
        </span>
        <span>
          <p>ID:</p>
          <p>{card.id}</p>
        </span>
        {card.types.map((type) => (
          <span key={`${card.id}${type}`}>
            <p>TYPES: </p>
            <p>{type}</p>
          </span>
        ))}
        {card.weaknesses.map((info) => (
          <div key={`${info}`}>
            <span key={`${info.type}`}>
              <p>WEAKNESSES: </p>
              <p>{info.type}</p>
            </span>
            <span key={`${info.value}`}>
              <p>VALUE: </p>
              <p>{info.value}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
