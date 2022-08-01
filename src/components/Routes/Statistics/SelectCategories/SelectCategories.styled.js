import styled from '@emotion/styled';
import Arrow from 'images/statisticsinputarrow.svg';

export const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-top: 20px;
  }
  @media screen and (min-width: 1280px) {
    flex-wrap: nowrap;
    margin-top: 0;
  }
`;
export const Select = styled.div`
  position: relative;
  display: block;
  min-width: 100px;
  width: 100%;
  //   max-width: 182px;
`;
export const SelectInput = styled.input``;
export const SelectName = styled.div`
  width: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 30px;
  /* box-shadow: 0 0 4px rgba(0, 0, 0, 0.2); */
  border: 1px solid #000000;
  padding: 14px 15px;
  font-size: 14px;
  line-height: 18px;
  color: #000;
  cursor: pointer;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  &:after {
    width: 18px;
    height: 9px;
    background: transparent url(${Arrow}) no-repeat center / cover;
    position: absolute;
    right: 20px;
    bottom: 50%;
    transform: translateY(50%);
    content: '';
    display: block;
    transition: 0.2s ease-in;
  }
  &.open::after {
    transform: translateY(50%) rotate(180deg);
  }
`;
export const SelectDropList = styled.ul`
  position: absolute;
  width: 100%;
  /* top: 115px; */
  /* left: 0; */
  /* right: 456px; */
  background: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  margin-top: 5px;
  /* max-height: 205px; */
  //   min-width: 182px;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 100;
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #424348;
  scrollbar-color: dark;
  scrollbar-width: thin;
  overscroll-behavior: contain;

  &:-webkit-scrollbar {
    width: 7px;
    background-color: #f8f9fa;
    padding: 5px;
  }

  &:-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #d9d9d9;
  }
`;
export const SelectDropItem = styled.li`
  position: relative;
  border-top: 1px solid rgba(224, 229, 231, 0.5);
  padding: 10px 15px;
  cursor: pointer;
  list-style-type: none;

  &:hover {
    background-color: rgba(224, 229, 231, 0.5);
  }
`;

export const ListTypeContainer = styled.div`
  background: #ffffff;
  border-radius: 30px;
  //   font-family: 'Circe';
  //   font-style: normal;
  //   font-weight: 700;
  //   font-size: 18px;
  //   line-height: 27px;
`;
