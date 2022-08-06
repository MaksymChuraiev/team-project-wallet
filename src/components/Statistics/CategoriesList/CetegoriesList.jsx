// import { UserData } from '../testData';

import { CategoriesListStyled } from './CategoriesList.styled';
import { CategoriesItem } from '../CategoriesItem/CategoriesItem';
import { Expenses } from '../Expenses/Expenses';
import { Income } from '../Income/Income';

import colorize from '../colorise';

export const CategoriesList = ({ categories, getByDate }) => {
  const { expense, totalExpenses, totalIncome } = getByDate;

  // console.log('expense', expense);
  // console.log('getByDate', getByDate);
  // console.log('totalExpenses', totalExpenses);
  // console.log('totalIncome', totalIncome);
  // console.log('CATEGORIES', categories);
  //---------------------------------------------------
  // normalized start
  const categoriesArray =
    categories &&
    categories.map(elem => ({
      category: elem,
      sum: 0,
    }));
  // console.log('categoriesArray', categoriesArray);
  const newArray = () => {
    for (let i = 0; i < categoriesArray.length; i += 1) {
      console.log('perebor i ');
      for (let j = 0; j < expense.length; j += 1) {
        console.log('perebor j ');
        if (categoriesArray[i].category === expense[j].category) {
          categoriesArray[i] = { ...expense[j] };
        }
      }
    }
    return categoriesArray;
  };
  const normaliseCategoriesList = newArray();
  console.log('NEW ARRAY qwe', newArray());
  // const newArray =
  //   categoriesArray &&
  //   getByDate.expense &&
  //   categoriesArray.map((elem, idx) => ({
  //     ...elem,
  //     ...getByDate.expense[idx],
  //     // ...income[idx],
  //   }));

  //normalized end
  //---------------------------------------------------

  return (
    <>
      <CategoriesListStyled>
        {normaliseCategoriesList &&
          normaliseCategoriesList.map((elem, idx) => (
            <CategoriesItem
              category={elem.category}
              sum={elem.sum}
              color={colorize[idx]}
            />
          ))}
      </CategoriesListStyled>
      <Expenses expense={totalExpenses} />
      <Income income={totalIncome} />
    </>
  );
};

// const newArray = categories.map(elem => {
//   // for (let i = 0; i < income.lenth; i += 1) {
//   //   if (elem === income[i].category) {
//   //     elem = { category: elem, sum: income[i].sum };
//   //     console.log('elem inside for'.elem);
//   //     return elem;
//   //   } else {
//   //     elem = { category: elem, sum: 2 };
//   //     return elem;
//   //   }
//   // }
//   const qwe = income.filter(element => {
//     console.log(element);
//     if (element.category === elem) {
//       return { category: elem, sum: element.sum };
//     } else {
//       return { category: elem, sum: 2 };
//     }
//   });
//   // console.log('elem inside map qwe', qwe);

//   return qwe;
// });

// <>
//   <CategoriesListStyled>
//     {/* {income &&
//         income.map(elem => (
//           <CategoriesItem
//             // key={Date.now()}
//             category={elem.category}
//             sum={elem.sum}
//             // listArray={listArray}
//           />
//         ))} */}
//     {newArray &&
//       newArray.map(elem => (
//         <CategoriesItem
//           // key={Date.now()}
//           category={elem.category}
//           sum={elem.sum}
//           // listArray={listArray}
//         />
//       ))}
//     {/* {listArray &&
//         listArray.map(elem => (
//           <CategoriesItem
//             // key={Date.now()}

//             // category={elem.category}
//             // sum={elem.sum}
//             // listArray={listArray}

//             category={elem.category}
//             sum={elem.sum}
//             // listArray={listArray}
//           />
//         ))} */}
//   </CategoriesListStyled>
//   <Expenses expense={totalExpenses} />
//   <Income income={totalIncome} />
// </>;
