import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import bgImage from '../images/iMac-min.png';
import tabletBg from '../images/tablet-bg-min.png';

export const Container = styled.div`
   
    @media screen and (min-width: 768px){
        max-width: 768px;
        margin-left: auto;
        margin-right: auto;
        background-image: url(${tabletBg});
        background-repeat: no-repeat;
        /* background-repeat: no-repeat; */
        /* width: 100%; */
        height: 100%; 
    }

    @media screen and (min-width: 1024px){
        max-width: 1280px;
        margin-left: auto;
        margin-right: auto;
        background-image: url(${bgImage});
        background-repeat: no-repeat;
        /* background-repeat: no-repeat; */
        /* width: 100%; */
        height: 100%; 
    }
`;

export const FinanceAppContainer = styled.div`
    display: none;

    @media screen and (min-width: 768px) {
        padding-top: 60px;  
        display: flex;
        justify-content: center;
        min-height: 10em;
        /* display: table-cell; */
        vertical-align: middle;
    }

    @media screen and (min-width: 1024px) {
        display: inline;
        padding-top: 155px;
        padding-bottom: 155px;
    }
`;

export const AppImg = styled.img`
    @media screen and (min-width: 768px) {
            width: 275px;
            display: flex;
    }

    @media screen and (min-width: 1024px) {
            width: 455px;
    }
`;

export const RegistrationPageText = styled.p`

    @media screen and (min-width: 768px) {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 45px;
    
        display: flex;
        align-items: center;
    }

    @media screen and (min-width: 1024px) {
        text-align: center;
        justify-content: center;
        margin-top: 30px;
    }
`;

export const ContainerForBlur = styled(Grid)`
    @media screen and (min-width: 1024px) {
        /* padding: 52px 99px; */
        height: auto;
        background: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(50px);
    }
`;