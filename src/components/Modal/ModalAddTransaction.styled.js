import styled from '@emotion/styled';
import Modal from 'react-modal';

export const ModalStyled = styled(Modal)`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  padding: 40px 80px 60px;
  max-width: 540px;
  background-color: #fff;
  border: none;
  outline: none;
  border-radius: 20px;

  @media screen and (max-width: 767px) {
    margin-top: 60px;
    min-height: calc(100vh - 60px);
    padding: 20px 11px 40px;
    border-radius: 0;
    max-width: 100%;
  }
`;

// export const ButtonAddStyled = styled.button`
//   position: absolute;
//   right: 20px;
//   bottom: 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 44px;
//   height: 44px;
//   background: var(--color-btn-green);
//   box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
//   cursor: pointer;
//   border-radius: 50%;
//   border: 0;
//   padding: 0;
//   outline: none;
//   :hover,
//   :focus {
//     box-shadow: none;
//   }

//   > svg {
//     width: 20px;
//     height: 20px;
//   }

//   @media screen and (min-width: var(--tablet)) {
//     position: absolute;
//     right: 40px;
//     bottom: 40px;
//   }
// `;
export const ButtonCloseStyled = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  stroke: var(--color-black);

  :hover,
  :focus {
    stroke: var(--color-red);
  }

  > svg {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: var(--tablet)) {
    display: none;
  }
`;
export const ModalTitle = styled.h2`
  margin: 0;
  margin-bottom: 40px;
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  font-family: var(--font-second);

  @media screen and (min-width: var(--tablet)) {
    font-size: 30px;
  }
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 13px 0px;
  margin-top: ${p => (p.children === 'Add' ? '40px' : '0px')};
  margin-bottom: ${p => (p.children === 'Add' ? '20px' : '0px')};
  border: 1px solid var(--color-btn-border);
  border-radius: 20px;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-btn-border);
  font-family: Circe, sans-serif;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  background-color: ${p => (p.children === 'Add' ? '#24cca7' : 'transparent')};
  color: ${p => (p.children === 'Add' ? '#fff' : '#4a56e2')};
  border-color: ${p => (p.children === 'Add' ? 'transparent' : '#4a56e2')};

  :hover {
    transform: scale(1.03);
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    margin-top: ${p => (p.children === 'Add' ? '40px' : '0px')};
    margin-bottom: ${p => (p.children === 'Add' ? '20px' : '0px')};
  } ;
`;
