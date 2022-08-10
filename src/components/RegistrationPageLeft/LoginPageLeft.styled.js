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
    }
`;

export const AppImg = styled.img`
    @media screen and (min-width: 768px) {
            width: 260px;
            display: flex;
    }

    @media screen and (min-width: 1280px) {
            width: 435px;
    }
`;

export const LoginPageText = styled.p`

    @media screen and (min-width: 768px) {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 45px;
        margin-left: 40px;
    
        display: flex;
        align-items: center;
    }

    @media screen and (min-width: 1280px) {
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
        background: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(50px);
    }
`;