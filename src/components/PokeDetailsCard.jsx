import React, { useState, useContext } from 'react';
import PokemonContext from '../context/PokemonContext';
import Modal from './modal';
import Loading from '../components/Loading';
import './pokeDetailsCard.scss';
import ItemDetailsCard from './itemDetailsCard';

export default function PokeDetailsCard({ props: { card } }) {
  const [defineAttack, setDefineAttack] = useState(null);
  const { showModal, toggleModal } = useContext(PokemonContext);

  const renderDiv = (att) => {
    setDefineAttack(att);
    toggleModal();
  };

  return card.attacks === undefined ? (
    <ItemDetailsCard card={card} />
  ) : card === null ? (
    <Loading />
  ) : (
    <div style={{ width: '100%' }} key={`${card.url}`}>
      <img style={{ width: '90%' }} alt={`${card.name} PokeCard`} src={card.imageUrlHiRes} />
      <div className="container">
        <div className="btn-container">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {card.attacks === undefined
              ? ''
              : card.attacks.map((att) => (
                  <button className="att-btn" key={att.name} onClick={() => renderDiv(att)}>
                    {att.name}
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
        {card.weaknesses.map((info) => (
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
