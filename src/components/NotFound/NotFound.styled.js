import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-block;
  margin-left: 6px;
`;
export const NotFoundText = styled.p`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 150px;
  font-weight: 500;
  font-size: 15px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding-top: 200px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 25px;
    padding-top: 250px;
  }
`;
export const NotFoundImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 180px;
  height: 180px;

  @media screen and (min-width: 768px) {
    width: 380px;
    height: 380px;
  }
  @media screen and (min-width: 1280px) {
    width: 480px;
    height: 480px;
  }
`;
