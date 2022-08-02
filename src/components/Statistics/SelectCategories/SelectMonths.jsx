import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const dropRoot = document.querySelector('#statistics-drop-root');

export const SelectMonths = ({
  name,
  inputMonths,
  setDropIsOpen,
  setInputIsOpen,
}) => {
  //   const input = document.querySelector('div[data-input]');
  //   const inputMonths = document.querySelector('div[data-input="months"]');
  console.log('inputMonths', inputMonths);
  const handleCloseModal = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      setDropIsOpen(false);
      setInputIsOpen(false);
      inputMonths.classList.remove('open');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  });
  return createPortal(
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
      onClick={handleCloseModal}
    ></div>,
    dropRoot
  );
};
