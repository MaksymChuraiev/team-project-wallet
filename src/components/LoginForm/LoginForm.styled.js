import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const MainLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  height: 30px;
  margin-left:auto;
  margin-right:auto;
  margin-bottom: 60px;
  /* @media screen and (min-width: 768px) {
    width: 180px;
    height: 40px;
    justify-content:center;
  } */
`;

export const LoginPageContainer = styled.div`
position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: 107px 20px;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 767px) {
    background-color: #FFFFFF;
  }
  @media screen and (min-width: 768px) and (mix-width: 1279px) {
    padding: 60px 118px 196px 118px;
    height: 100vh;
    /* background-color: #E7EAF2; */
    width: 100%;
  }
  @media screen and (min-width: 1280px) {
    padding: 136px 84px 116px 84px;
    height: 100vh;
    /* background-color: #E7EAF2; */
    width: 100%;
    display:flex;
    /* align-items:center; */
    /* background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(50px); */

  }
`;

export const LoginPageDesktopContainer = styled.div`
    @media screen and (min-width: 768px) {
    /* padding: 60px 118px;
    height: 616px;
    background-color: #E7EAF2;
    width: 100%; */
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    margin-right: auto;
    margin-left: auto;
    margin-top: 50px;
    padding: 40px 60px 60px 60px;
    width: 534px;
    height: 468px;
    border-radius: 20px;

  }

   @media screen and (min-width: 1280px) {
    margin: 136px 91px 116px 107px
   }
`;

export const MainFrame = styled.div`
@media screen and (max-width: 767px) {
    display:none;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 498px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    margin-bottom:50px;
  }
 
  @media screen and (min-width: 1280px) {
    /* padding: 136px 84px 116px 84px; */
    /* height: 100vh; */
    width: 435px;
    height: 420px;
    /* background-color: #E7EAF2; */
    /* width: 100%; */
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:0; 
  }
`;

export const SvgFrame = styled.img`
@media screen and (min-width: 1280px) {
    width:435px;
    height:420px;
    margin-bottom:30px;
  }
`;

export const MainFrameText = styled.p`
  @media screen and (min-width: 768px) {
    width: 187px;
    height: 45px;
    margin-left:40px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    /* z-index: 1; */
  }
`;

export const LogForm = styled(Form)`
  display: flex;
  /* -webkit-box-pack: center; */
  justify-content: center;
  flex-direction: column;
  /* -webkit-box-align: center; */
  align-items: center;
`;

export const LogBtns = styled.div`
  display: flex;
  flex-direction: column;
  /* -webkit-box-pack: center; */
  justify-content: center;
`;

export const LoginBtn = styled.button`
  width: 280px;
  height: 50px;
  border-radius: 20px;
  border: none;
  background-color: #24cca7;
  padding: 13px 98px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const RegisterBtn = styled.button`
  text-decoration: none;
  width: 280px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid #4a56e2;
  background-color: #ffffff;
  padding: 13px 60px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration:none;
  color: #4a56e2;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const Input = styled(Field)`
  padding: 0;
  width: 100%;
  height: 32px;
  display: block;
  margin-left: 20px;
  border: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #BDBDBD;
`;

export const InputField = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
`;

export const InputLabel = styled.label`
  width: 280px;
  /* border-bottom: 1px solid #e0e0e0; */
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 400px
  }
`;

export const Svg = styled.img`
/* width:24px;
height:24px; */
  /* margin-left: 10px; */
`;

export const SvgWrapper = styled.span`
width:24px;
height:24px;
margin-left: 10px;
display:flex;
align-items: center;
justify-content: center;
`;

export const ErrorText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 12px;
  color: red;
`;

export const EllipseTop = styled.img`
/* position: absolute;
/* z-index: -2; */
/* left: -50px;
top: 585px; */
`

export const EllipseBottom = styled.img`
    /* content: "";
    position: absolute;
    display: block;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(/static/media/purple_elipse.488cddf5.svg);
    background-position: bottom -130px left -142px;
    z-index: -1; */
`

// const ErrorMessage = styled.p`
//     margin-top: 6px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

// const InputWrapper = styled.div`
//     padding: 8px 0;
//     margin-right: auto;
//     display: flex;
//     align-items: baseline;
//     border-bottom: 2px solid #BDBDBD;
// `;

// const Label = styled.label`
// width: 280px
// `;

// const MainWrapper = styled.form`
// display: flex;
// flex-direction: column;
// `;

//общий див

/* margin-left: auto;
    margin-right: auto;
    padding: 20px;
    width: 100%;
    height: 100%; */

//стили формы

/* display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center; */

//стили инпута

/* width: 280px;
    height: 36px;
    color: rgb(0, 0, 0);
    padding-top: 5px;
    padding-bottom: 5px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-image: initial;
    border-bottom: 1px solid rgb(224, 224, 224);
    background: transparent;
    display: block;  */

//стили кнопки

/* font-family: Verdana;
    height: 44px;
    width: 182px;
    font-weight: 700;
    font-size: 14px;
    background: rgb(252, 132, 45);
    color: rgb(255, 255, 255);
    border: 2px solid rgb(252, 132, 45);
    border-radius: 30px;
    box-shadow: rgb(252 132 45 / 50%) 0px 4px 10px;
    padding-top: 13px;
    padding-bottom: 13px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto; */

