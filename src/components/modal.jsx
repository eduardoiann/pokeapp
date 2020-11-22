import React, { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';
import './modal.scss';

const Modal = ({ props }) => {
  const { showModal, setShowModal, toggleModal } = useContext(PokemonContext);

  return (
    <div className="modal" id="modal">
      <div className="content">
        <p>Name: {props.name}</p>
        <p>Energy Cost: {props.convertedEnergyCost}</p>
        <p>
          Costs:
        </p>
        {props.cost.map((cost) => (
            <p>{cost}</p>
          ))}
        <p>Damage: {props.damage}</p>
        <p>Description: {props.text === '' ? 'No description' : props.text}</p>
      </div>
      <div class="actions">
        <button onClick={() => toggleModal()} class="toggle-button">
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
