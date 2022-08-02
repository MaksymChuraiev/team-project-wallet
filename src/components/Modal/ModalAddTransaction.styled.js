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
  border-radius: 20px;

  @media screen and (max-width: 767px) {
    margin-top: 60px;
    min-height: calc(100vh - 60px);
    padding: 20px 11px 40px;
    border-radius: 0;
    max-width: 100%;
  }
`;

export const ButtonAddStyled = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: var(--color-btn-green);
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  cursor: pointer;
  border-radius: 50%;
  border: 0;
  padding: 0;
  outline: none;
  :hover,
  :focus {
    box-shadow: none;
  }

  > svg {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: var(--tablet)) {
    position: absolute;
    right: 40px;
    bottom: 40px;
  }
`;
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
export const SelectContainer = styled.div`
  // display: ${p => (p.type ? 'block' : 'none')};
  position: relative;
  margin-top: 40px;
  cursor: pointer;
  input {
    position: absolute;
    top: 50%;
    left: 30%;
    z-index: -1;
  }
`;
export const MoneyDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 40px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 40px;
  }
  input {
    margin: 0;
    height: 34px;
    width: 100%;
    padding-left: 20px;
    padding-bottom: 10px;
    outline: none;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid var(--color-gray-form);
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: var(--color-black);
    font-family: Circe, sans-serif;
    @media screen and (min-width: $tablet) {
      padding-left: 0;
      text-align: center;
    }

    &::placeholder {
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
    }
  }
`;
export const DateContainer = styled.div`
  position: relative;
  input {
    margin: 0;
    height: 34px;
    width: 100%;
    padding-left: 20px;
    padding-bottom: 10px;
    outline: none;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid var(--color-gray-form);
    outline-offset: 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: var(--color-black);
    font-family: Circe, sans-serif;
  }
  > svg {
    position: absolute;
    right: 20px;
    bottom: 10px;
    @media screen and (min-width: 768px) {
      margin-left: 20px;
    }
  }
`;

export const Comment = styled.textarea`
  margin: 0;
  height: 34px;
  width: 100%;
  margin-top: 40px;
  padding-left: 20px;
  padding-bottom: 10px;
  outline: none;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid var(--color-gray-form);
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: var(--color-black);
  font-family: Circe, sans-serif;
  resize: none;
  overflow: hidden;
  max-lines: 2;
  outline-offset: 0;

  &::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: var(--color-gray-form);
    font-family: Circe, sans-serif;
  }

  @media screen and (max-width: 767px) {
    max-lines: 1;
    height: 74px;
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
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    margin-top: ${p => (p.children === 'Add' ? '40px' : '0px')};
    margin-bottom: ${p => (p.children === 'Add' ? '20px' : '0px')};
  } ;
`;
