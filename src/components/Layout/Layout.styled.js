import styled from '@emotion/styled';
import { css } from '@emotion/react';
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

// export const Container = styled.div`
//   position: fixed;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 320px;
//   height: 568px;
//  /* border: 2px solid red; */

//   @media screen and (min-width: 768px) {
//     width: 768px;
//     height: 1024px;
//   }

//   @media screen and (min-width: 1280px) {
//     width: 1280px;
//     height: 720px;
//   }
// `;

const dynamicStyles = props =>
    css`
    left: ${props.left}; 
    background-color: ${props.bgColor};
    border: ${props.border}; 
    border-color: ${props.borderColor};
    `

export const ContainerForBlur = styled.div`
    @media screen and (min-width: 1280px) {
        position: absolute;
        bottom: 0px;
        top: 0px;
        /* left: 45%; */
       right: 0px;
        background: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(50px);

        ${dynamicStyles}
    }
`;


