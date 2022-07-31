import styled from '@emotion/styled';
import { Field } from 'formik';
// import { Button } from '@mui/material';
// import { css } from '@emotion/react';

export const FormContainer = styled.div`
max-width: 400px;
padding: 32px 20px 36px 20px;
margin-right: auto;
margin-left: auto;
background-color: #fff;

    @media screen and (min-width: 768px) {
        max-width: 533px;
        height: 616;
        margin: 48px auto;
        padding: 40px 60px 66px 65px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }

     @media screen and (min-width: 1024px) {
        margin: 52px 99px;
     }
`;

export const FormName = styled.div`
display: flex;
justify-content: center;
margin-right: auto;
margin-left: auto;
  margin-bottom: 60px;
`;

export const ContactField = styled(Field)`
  position: relative;
  width: 100%;
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 40px;
  border: transparent;
  /* border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  border-bottom: 1px solid #E0E0E0; */

  ::placeholder{
    /* margin-left: 56px; */
    color: #BDBDBD;
    font-family: 'Circe';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const Icon = styled.svg`
/* position: absolute; */
/* bottom: 10px; */
fill: #E0E0E0;
&:hover {
    color: #24CCA7;
}
`;