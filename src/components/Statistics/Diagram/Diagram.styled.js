import styled from '@emotion/styled';

export const DiagramContainer = styled.div`
        margin-bottom: 32px;
        display: flex;
        flex-direction: column;
        align-items: ;center;
       @media screen and (min-width: 768px) {
         margin-bottom: 0;
       }
        @media screen and (min-width: 1280px) {
position:relative;
top:-8px;
  }
  
       }
`;

export const StatisticsText = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
  }
`;

export const CircleContainer = styled.div`
  min-width: 280px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 288px;
  }
`;
