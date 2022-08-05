import {
  CategoriesItemStyled,
  ColoredSquare,
  CategoriesText,
  Summ,
} from './CategoriesItem.styled';

export const CategoriesItem = ({ category, sum, color }) => {
  console.log(color);
  const numberSum = Number(sum).toFixed(2);
  const normalizeCategory =
    category && category[0].toUpperCase() + category.slice(1);
  return (
    <CategoriesItemStyled>
      <ColoredSquare color={color} />
      {/* <CategoriesText>{category}</CategoriesText> */}
      <CategoriesText>{normalizeCategory}</CategoriesText>
      <Summ>{numberSum}</Summ>
    </CategoriesItemStyled>
  );
};
