import styled from '@emotion/styled';

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    align-items: flex-start;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 69px;
  }
`;
export const GraphicsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
  }
  @media screen and (min-width: 1280px) {
    justify-content: space-around;
  }
`;
export const CategoriesContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-top: 65px;
    max-width: 509px;
  }
`;
