// import { UserData } from '../testData';

import { CategoriesListStyled } from './CategoriesList.styled';
import { CategoriesItem } from '../CategoriesItem/CategoriesItem';
import { Expenses } from '../Expenses/Expenses';
import { Income } from '../Income/Income';

import colorize from '../colorise';

export const CategoriesList = ({ categories, getByDate }) => {
  const { income, totalExpenses, totalIncome } = getByDate;

  //---------------------------------------------------
  //normalized start
  const categoriesArray =
    categories &&
    categories.map(elem => ({
      category: elem,
      sum: 0,
    }));
  console.log(categoriesArray);

  const newArray =
    categoriesArray &&
    getByDate.income &&
    categoriesArray.map((elem, idx) => ({
      ...elem,
      ...income[idx],
    }));

  //normalized end
  //---------------------------------------------------

  return (
    <>
      <CategoriesListStyled>
        {newArray &&
          newArray.map((elem, idx) => (
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
