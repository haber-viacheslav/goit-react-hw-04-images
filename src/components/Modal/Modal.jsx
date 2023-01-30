import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalBody } from './Modal.styled';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClick, largeImageURL }) => {
  useEffect(() => {
    const handleEscDown = e => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleEscDown);
    return () => {
      window.removeEventListener('keydown', handleEscDown);
    };
  }, [onClick]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalBody>
        <img src={largeImageURL} alt="" />
      </ModalBody>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Modal;
