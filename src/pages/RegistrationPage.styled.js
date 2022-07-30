import styled from '@emotion/styled';
import { Field } from 'formik';
import bgImage from '../images/iMac-min.png';

export const Container = styled.div`
max-width: 1280px;
margin-left: auto;
margin-right: auto;
background-image: url(${bgImage});
background-repeat: no-repeat;
background-repeat: no-repeat;
width: 100%;
height: 100%;
`;

export const RegistrationPageText = styled.p`
text-align: center;
margin-top: 30px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 45px;
`;

export const ContactField = styled(Field)`
  position: relative;
  width: 100%;
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 40px;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  border-bottom: 1px solid #E0E0E0;

  ::placeholder{
    color: #BDBDBD;
    font-family: 'Circe';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const RegisterButton = styled.button`
font-family: 'Circe';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
text-align: center;
letter-spacing: 0.1em;
text-transform: uppercase;
color: #fff;
/* align-content: center; */
justify-content: center;

margin-bottom: 20px;
padding: 13px;
  
display: flex;
margin-right: auto;
margin-left: auto;
background-color: #24CCA7;  
border: none;  
border-radius: 20px; 
width: 300px;
height: 50px;
  
cursor: pointer;
outline: none;    
`;

export const LoginButton = styled.button`
z-index: 7;
font-family: 'Circe';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
text-align: center;
letter-spacing: 0.1em;
text-transform: uppercase;
color: #4A56E2;
/* align-content: center; */
justify-content: center;

margin-bottom: 20px;
padding: 13px;
  
display: flex;
margin-right: auto;
margin-left: auto;
background-color: #ffffff;  
border-color: #4A56E2;  
border-radius: 20px; 
width: 300px;
height: 50px;
  
cursor: pointer;
outline: none;    
`;

export const FormContainer = styled.div`
width: 533px;
height: 616;
margin: 52px auto;
/* margin-left: auto;
margin-right: auto; */
background-color: #fff;
  /* display: inline-flex;
  flex-direction: column; */
  /* flex-basis: 50%; */
  padding: 40px 60px 66px 65px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  ;
`;

export const FormName = styled.div`
display: flex;
margin-right: auto;
margin-left: auto;
  margin-bottom: 60px;
`;

export const Icon = styled.svg`
position: absolute;
bottom: 10px;
fill: #E0E0E0;
&:hover {
    color: #24CCA7;
}
`;