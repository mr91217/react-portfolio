import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, category, description, index } = currentPhoto;

  return (
    <div className="modalBackdrop" onClick={onClose}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <h3 className="modalTitle">{name}</h3>
        <img
          src={require(`../../assets/large/${category}/${index}.GIF`).default}
          alt={name}
        />
        <p>{description}</p>
        <button onClick={onClose} type="button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
