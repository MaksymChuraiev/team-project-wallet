// import { UserData } from '../testData';
import { useState } from 'react';

import { CategoriesListStyled } from './CategoriesList.styled';
import { CategoriesItem } from '../CategoriesItem/CategoriesItem';
import { Expenses } from '../Expenses/Expenses';
import { Income } from '../Income/Income';

export const CategoriesList = ({ categories, getByDate }) => {
  const [list, setList] = useState([...categories]);
  console.log('LIST categiries', categories);
  // console.log('LIST getByDate', getByDate);
  console.log(list, setList);

  const { income, totalExpenses, totalIncome } = getByDate;
  console.log('income', income);

  // const normaliseCategories = () => {
  //   const newArray = [];
  //   for (let i = 0; i < categories.length; i += 1) {
  //     for (let j = 0; j < income.length; j += 1) {
  //       if (categories[i] === income[j].category) {
  //         newArray.push({ ...income[j], category: categories[i] });
  //       }
  //     }
  //     // newArray.push({ category: categories[i], sum: 0 });
  //   }
  //   return newArray;
  // };

  // const listArray = normaliseCategories();
  // console.log('listArray', listArray);

  return (
    <>
      <CategoriesListStyled>
        {income &&
          income.map(elem => (
            <CategoriesItem
              // key={Date.now()}
              category={elem.category}
              sum={elem.sum}
              // listArray={listArray}
            />
          ))}
        {/* {listArray &&
          listArray.map(elem => (
            <CategoriesItem
              // key={Date.now()}

              // category={elem.category}
              // sum={elem.sum}
              // listArray={listArray}

              category={elem.category}
              sum={elem.sum}
              // listArray={listArray}
            />
          ))} */}
      </CategoriesListStyled>
      <Expenses expense={totalExpenses} />
      <Income income={totalIncome} />
    </>
  );
};
