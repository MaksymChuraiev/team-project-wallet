import styled from '@emotion/styled';
import bgImage from '../../images/iMac-min.png';
import tabletBg from '../../images/tablet-bg-min.png';

export const LayoutStyled = styled.div`
  

  @media screen and (min-width: 768px) {
    position: fixed;
    display: flex;
    width: 100vw;
    height: 100vh;

    z-index: -1;
    margin-left: auto;
    margin-right: auto;
    background-image: url(${tabletBg});
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${bgImage});
  }
`;

export const Container = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  height: 568px;
/* border: 2px solid red; */

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 1024px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    height: 720px;
  }
`; 
