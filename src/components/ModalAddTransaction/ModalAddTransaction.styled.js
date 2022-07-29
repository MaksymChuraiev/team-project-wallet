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
  outline: none;
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
export const ModalTitle = styled.h2`
  margin: 0;
  margin-bottom: 40px;
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
    font-family: Poppins, sans-serif;


  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

export const TransactionType = styled.div`
  display: flex;
    justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto 40px;
.checkbox{
    margin: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.47;
  color: var(--disabled-grey-text-color);
  font-family: Circe, sans-serif;
}
.active-green {
  color: var(--accent-color-green);
}

.active-red {
  color: var(--accent-color-red);
}
`;

export const Toggle = styled.label`
  position: relative;
  display: flex;
  cursor: pointer;
  &>input{
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
     &:checked {
      & ~ .thumb {
        background-color: rgba(var(--primary-background-color), 0.1);

        .indicator {
          left: 37px;

          background-color: var(--accent-color-red);
          box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);

          .vertical {
            display: none;
          }
        }
      }
    }
  }
   .thumb {
   position: relative;
   width: 80px;
   height: 40px;
   border-radius: 30px;
   background-color: var(--primary-background-color);
   border: 1px solid var(--disabled-grey-text-color);
   opacity: 1;
   transition: background-color 200ms ease-in-out;
 }
.indicator {
position: absolute;
top: -2px;
left: -1px;
width: 44px;
height: 44px;
background-color: var(--accent-color-green);
border-radius: 22px;
transition: left 250ms ease-in-out;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  &:hover{
    box-shadow: none;
  }
}
`;
