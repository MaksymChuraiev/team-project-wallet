import {
  CategoriesItemStyled,
  ColoredSquare,
  CategoriesText,
  Summ,
} from './CategoriesItem.styled';

export const CategoriesItem = ({ category, sum }) => {
  return (
    <CategoriesItemStyled>
      {/* <ColoredSquare />
      <CategoriesText>{category}</CategoriesText>
      <Summ>{sum}</Summ> */}
      <ColoredSquare />
      <CategoriesText>{category}</CategoriesText>
      <Summ>{sum ? sum : 5}</Summ>
    </CategoriesItemStyled>
  );
};
