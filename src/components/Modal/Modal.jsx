import React, { useContext } from 'react';
import PokemonContext from '../../context/PokemonContext';
import './modal.scss';

const Modal = ({ props }) => {
  const { toggleModal } = useContext(PokemonContext);

  return (
    <div className="modal" id="modal">
      <div className="content">
        <p>Name: {props.name}</p>
        <p>
          Energy Cost:{' '}
          {props.convertedEnergyCost === '' || props.convertedEnergyCost === null
            ? 'View Card for Info'
            : props.convertedEnergyCost}
        </p>
        <div>
          <p>Costs:</p>
          <div>
            {props.cost === undefined
              ? 'View card for Info'
              : props.cost.map((cost) => <p key={`${cost}${Math.random() * 100}`}>{cost}</p>)}
          </div>
        </div>
        <p>Damage: {props.damage === '' ? 'View Card' : props.damage}</p>
        <p>Description: {props.text === '' ? 'No description' : props.text}</p>
      </div>
      <div className="actions">
        <button onClick={() => toggleModal()} className="toggle-button">
          <p>Close</p>
        </button>
      </div>
    </div>
  );
};

export default Modal;
