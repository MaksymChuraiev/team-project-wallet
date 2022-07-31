import styled from '@emotion/styled';

export const DiagramContainer = styled.div`
        margin-bottom: 32px;
        display: flex;
        flex-direction: column;
        align-items: ;center;
       @media screen and (min-width: 768px) {
         margin-bottom: 0;
       }
`;

export const StatisticsText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
`;

export const CircleContainer = styled.div`
  min-width: 280px;
  @media screen and (min-width: 768px) {
    min-width: 336px;
  }
`;
