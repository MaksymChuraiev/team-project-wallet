import styled from '@emotion/styled';

export const ButtonAddStyled = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: var(--accent-color-green);
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  cursor: pointer;
  border-radius: 50%;
  border: 0;
  padding: 0;
  &:hover,
  &:focus {
    box-shadow: none;
  }

  & > svg {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    right: 40px;
    bottom: 40px;
  }

  /* @media screen and (max-width: 767px) {
    position: absolute;
    right: 30px;
    bottom: 30px;
  } */
`;
export const ButtonCloseStyled = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  stroke: black;

  &:hover,
  &:focus {
    stroke: red;
  }

  & > svg {
    width: 16px;
    height: 16px;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
