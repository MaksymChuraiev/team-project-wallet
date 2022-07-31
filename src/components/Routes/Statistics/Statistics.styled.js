import styled from '@emotion/styled';

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
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
  // @media screen and (min-width: 1280px) {
  //   // padding: 20px 16px;
  // }
`;
export const CategoriesContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 509px;
  }
`;
