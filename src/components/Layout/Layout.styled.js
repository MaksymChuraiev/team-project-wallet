import styled from '@emotion/styled';
import bgImage from '../../images/iMac-min.png';
import tabletBg from '../../images/tablet-bg-min.png';

export const LayoutStyled = styled.div`
  /* position: fixed;
  width: 320px;
  height: 568px;
  margin: 0 auto;
  border: 2px solid red; */

  @media screen and (min-width: 768px) {
    position: fixed;
    display:flex;
    width:768px;
    height:1024px;
    z-index: -1;
     margin-left: auto;
        margin-right: auto;
        background-image: url(${tabletBg});
        background-repeat: no-repeat;
        background-size: cover;
        left: 50%;
    transform: translateX(-50%);
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    height:720px;
    background-image: url(${bgImage});
    
    /* border: 2px solid red; */
  }
`;
