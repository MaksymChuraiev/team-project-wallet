import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const dropRoot = document.querySelector('#statistics-drop-root');

export const SelectYears = ({ inputYears, setDropIsOpen, setInputIsOpen }) => {
  //   const input = document.querySelector('div[data-input]');
  // const inputYears = document.querySelector('div[data-input="years"]');
  //   console.log('my version,', input);
  const handleCloseModal = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      setDropIsOpen(false);
      setInputIsOpen(false);
      inputYears.classList.remove('open');
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
      //   onClick={handleCloseModal}
      onClick={handleCloseModal}
    >
      {/* <ul class="select__list">
        <li class="select__item">years</li>
        <li class="select__item">years</li>
        <li class="select__item">years</li>
      </ul> */}
    </div>,
    dropRoot
  );
};
