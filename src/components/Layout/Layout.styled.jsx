import styled from '@emotion/styled';

export const LayoutStyled = styled.div`
  position: relative;
  width: 320px;
  height: 568px;
  margin: 0 auto;
  border: 2px solid red;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 900px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
