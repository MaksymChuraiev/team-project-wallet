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
