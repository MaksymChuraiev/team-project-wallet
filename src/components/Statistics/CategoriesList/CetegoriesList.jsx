// import { UserData } from '../testData';

import { CategoriesListStyled } from './CategoriesList.styled';
import { CategoriesItem } from '../CategoriesItem/CategoriesItem';
import { Expenses } from '../Expenses/Expenses';
import { Income } from '../Income/Income';

import colorize from '../colorise';

export const CategoriesList = ({ getByDate, normaliseCategoriesList }) => {
  const { totalExpenses, totalIncome } = getByDate;

  // console.log('expense', expense);
  // console.log('getByDate', getByDate);
  // console.log('totalExpenses', totalExpenses);
  // console.log('totalIncome', totalIncome);
  // console.log('CATEGORIES', categories);
  // //---------------------------------------------------
  // // normalized start
  // const categoriesArray =
  //   categories &&
  //   categories.map(elem => ({
  //     category: elem,
  //     sum: 0,
  //   }));
  // // console.log('categoriesArray', categoriesArray);
  // const newArray = () => {
  //   for (let i = 0; i < categoriesArray.length; i += 1) {
  //     console.log('perebor i ');
  //     for (let j = 0; j < expense.length; j += 1) {
  //       console.log('perebor j ');
  //       if (categoriesArray[i].category === expense[j].category) {
  //         categoriesArray[i] = { ...expense[j] };
  //       }
  //     }
  //   }
  //   return categoriesArray;
  // };
  // const normaliseCategoriesList = newArray();
  // console.log('NEW ARRAY qwe', newArray());
  // // const newArray =
  // //   categoriesArray &&
  // //   getByDate.expense &&
  // //   categoriesArray.map((elem, idx) => ({
  // //     ...elem,
  // //     ...getByDate.expense[idx],
  // //     // ...income[idx],
  // //   }));

  // //normalized end
  // //---------------------------------------------------

  return (
    <>
      <CategoriesListStyled>
        {normaliseCategoriesList &&
          normaliseCategoriesList.map((elem, idx) => (
            <CategoriesItem
              category={elem.category}
              sum={elem.sum}
              key={elem.category}
              color={colorize[idx]}
            />
          ))}
      </CategoriesListStyled>
      <Expenses expense={totalExpenses} />
      <Income income={totalIncome} />
    </>
  );
};
