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
    padding: 40px 60px 46px 65px;
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }

  @media screen and (min-width: 1280px) {
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
  /* margin-top: 40px; */
  border: transparent;

  ::placeholder {
    color: #bdbdbd;
    font-family: 'Circe';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const Icon = styled.svg`
  fill: #e0e0e0;
  width: 34px;
  height: 34px;
  /* margin-left: 10px; */
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #24cca7;
  }
`;
