import styled from '@emotion/styled';
import { css } from '@emotion/react';
// import Button from '@mui/material/Button';

const dynamicStyles = props =>
    css`
    color: ${props.color}; 
    background-color: ${props.bgColor};
    border: ${props.border}; 
    border-color: ${props.borderColor};
    `

export const ButtonStyles = styled.button`
font-family: 'Circe';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
text-align: center;
letter-spacing: 0.1em;
text-transform: uppercase;
justify-content: center;

margin-bottom: 20px;
padding: 13px;
  
display: flex;
margin-right: auto;
margin-left: auto;
border-radius: 20px; 
width: 300px;
height: 50px;

cursor: pointer;
outline: none; 
 
${dynamicStyles}


@media screen and (max-width: 767px) {
    width: 280px;
  }
`;

