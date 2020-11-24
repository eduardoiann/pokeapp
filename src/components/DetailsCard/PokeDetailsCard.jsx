import React, { useState, useContext } from 'react';
import PokemonContext from '../../context/PokemonContext';
import Loading from '../../components/Loading/Loading';
import Modal from '../Modal/Modal';
import './pokeDetailsCard.scss';

export default function PokeDetailsCard({ card }) {
  console.log(card)
  const [defineAttack, setDefineAttack] = useState(null);
  const { showModal, toggleModal } = useContext(PokemonContext);

  const renderDiv = (att) => {
    setDefineAttack(att);
    toggleModal();
  };

  return card === null ? (
    <Loading />
  ) : (
    <div key={`${card.url}`}>
      <img style={{ width: '90%' }} alt={`${card.name} PokeCard`} src={card.imageUrlHiRes} />
      <div className="container">
        <div className="btn-container">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {card.attacks === undefined
              ? ''
              : card.attacks.map((att) => (
                  <button className="att-btn" key={att.name} onClick={() => renderDiv(att)}>
                    <p className="att-name">{att.name}</p>
                  </button>
                ))}
          </div>
          {showModal === true ? <Modal props={defineAttack} /> : null}
        </div>
        <span>
          <p>NAME:</p>
          <p>{card.name.toUpperCase()}</p>
        </span>
        <span>
          <p>ID:</p>
          <p>{card.id}</p>
        </span>
        {card.types.map((type) => (
          <span key={`${card.id}${type}`}>
            <p>TYPES: </p>
            <p>{type.toUpperCase()}</p>
          </span>
        ))}
        {card.weaknesses === undefined ? null : card.weaknesses.map((info) => (
          <div key={`${info}`}>
            <p>WEAKNESSES: </p>
            <span>
              <p>{info.type.toUpperCase()}</p>
              <p>{info.value}</p>
            </span>
          </div>
        ))}
        {card.resistances === undefined ? (
          <span>
            <p>RESISTANCES:</p>
            <p>NONE</p>
          </span>
        ) : (
          card.resistances.map((info) => (
            <div key={`${info}`}>
              <p>RESISTANCES: </p>
              <span>
                <p>{info.type.toUpperCase()}</p>
                <p>{info.value}</p>
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
