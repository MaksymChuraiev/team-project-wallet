import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const GridContainer = styled(Grid)`
 max-width: 1280px;
 height: 100%;
 padding: 0px;
`;

export const FinanceAppContainer = styled.div`
    display: none;

    @media screen and (min-width: 768px) {
        padding-top: 60px;  
        display: flex;
        justify-content: center;
        min-height: 10em;
        vertical-align: middle;
    }

    @media screen and (min-width: 1280px) {
        display: inline;
        align-items: flex-start;
        /* padding-top: 155px;
        padding-bottom: 155px; */
    }
`;

export const AppImg = styled.img`
    @media screen and (min-width: 768px) {
            width: 275px;
            display: flex;
    }

    @media screen and (min-width: 1280px) {
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

    @media screen and (min-width: 1280px) {
        /* text-align: center; */
        justify-content: center;
        margin-top: 30px;
    }
`;

export const ContainerForBlur = styled(Grid)`
    @media screen and (min-width: 1280px) {
        position: absolute;
        bottom: 0px;
        top: 0px;
        left: 45%;
       right: 0px;
        /* height: 720px;
        width: 100%; */
        background: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(50px);
    }
`;