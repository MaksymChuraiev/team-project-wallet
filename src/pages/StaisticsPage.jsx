import { Diagram } from 'components/Statistics/Diagram/Diagram';
import { SelectCategories } from 'components/Statistics/SelectCategories/SelectCategoies';
import { CategoriesList } from 'components/Statistics/CategoriesList/CetegoriesList';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import transactionSelectors from 'redux/transaction/transaction-selectors';
import transactionsOperation from 'redux/transaction/transaction-operation';

import months from '../components/Statistics/months';
import colorize from '../components/Statistics/colorise';

import {
  StatisticsContainer,
  GraphicsContainer,
  CategoriesContainer,
} from './Statistics.styled';

const nowDate = Date.now();
const nowMonth = new Date(nowDate).getMonth();
const nowYear = new Date(nowDate).getFullYear();

export const StatisticsPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(transactionSelectors.getCategories);
  const allTransaction = useSelector(transactionSelectors.getTransaction);
  const getByDate = useSelector(transactionSelectors.getStatistics);

  const [objectDate, setObjectDate] = useState({
    months: nowMonth,
    year: nowYear,
  });

  const [superArray, setSupperArray] = useState([]);

  useEffect(() => {
    dispatch(transactionsOperation.getAllTransactions());
  }, [dispatch]);

  useEffect(() => {
    dispatch(transactionsOperation.getCategory());
  }, [dispatch]);

  // useEffect(() => {
  //   // dispatch(transactionsOperation.getByDate());
  //   dispatch(
  //     transactionsOperation.getByDate({ months: nowMonth, year: nowYear })
  //   );
  //   // dispatch(transactionsOperation.getByDate({ months: '1', year: '2022' })); -------------------
  // }, [dispatch]);

  const handleClickMonth = e => {
    console.dir(e.currentTarget);
    setObjectDate({
      ...objectDate,
      months: Number(e.currentTarget.id),
    });
  };
  const handleClickYear = e => {
    console.dir('e.currentTarget year', e.currentTarget);
    console.log(Number(''));
    // if (e.currentTarget.id === 'All') {
    //   setObjectDate({ ...objectDate, year: null });
    //   return;
    // }
    setObjectDate({ ...objectDate, year: Number(e.currentTarget.id) });
  };

  useEffect(() => {
    dispatch(transactionsOperation.getByDate(objectDate));
  }, [dispatch, objectDate]);

  //------------------------------------------------------
  //получение года из бекенда
  const arrayOfYears = allTransaction.map(year =>
    new Date(year.date).getFullYear()
  );
  //------------------------------------------------------

  const newAr = [];
  //----------------------------------------------------
  // віборка по годам что бы не повторялся год
  const normalizeYearsArray = () => {
    for (let i = 0; i < arrayOfYears.length; i += 1) {
      if (!newAr.includes(arrayOfYears[i])) {
        newAr.push(arrayOfYears[i]);
      }
      if (i === arrayOfYears.length - 1) {
        newAr.push('All');
      }
    }
  };
  normalizeYearsArray();
  // -------------------------------------------------

  //---------------------------------------------------
  //массив месяцев с [{айди нейм тайп}]
  const arrayOfMonths = months;
  //------------------------------------------------

  //---------------------------------------------------
  // // normalized start
  // const categoriesArray =
  //   categories.expense &&
  //   categories.expense.map(elem => ({
  //     category: elem,
  //     sum: 0,
  //   }));
  // // console.log('categoriesArray', categoriesArray);
  // const newArray = () => {
  //   for (let i = 0; i < categoriesArray.length; i += 1) {
  //     console.log('perebor i ');
  //     for (let j = 0; j < getByDate.expense.length; j += 1) {
  //       console.log('perebor j ');
  //       if (categoriesArray[i].category === getByDate.expense[j].category) {
  //         categoriesArray[i] = { ...getByDate.expense[j], ...colorize[i] };
  //       }
  //     }
  //   }
  //   // categoriesArray[i] = { ...categoriesArray[i], ...colorize[i] };
  //   return categoriesArray;
  // };

  // const normaliseCategoriesList =
  //   categoriesArray && getByDate.expense && newArray();
  // const colorisedArray = normaliseCategoriesList.map((elem, idx) => ({
  //   ...elem,
  //   ...colorize[idx],
  // }));
  useEffect(() => {
    //---------------------------------------------------
    // normalized start
    const categoriesArray =
      categories?.expense &&
      categories?.expense.map(elem => ({
        category: elem,
        sum: 0,
      }));
    // console.log('categoriesArray', categoriesArray);
    const newArray = () => {
      for (let i = 0; i < categoriesArray.length; i += 1) {
        console.log('perebor i ');
        for (let j = 0; j < getByDate.expense?.length; j += 1) {
          console.log('perebor j ');
          if (categoriesArray[i].category === getByDate.expense[j].category) {
            categoriesArray[i] = { ...getByDate.expense[j], ...colorize[i] };
          }
        }
      }
      // categoriesArray[i] = { ...categoriesArray[i], ...colorize[i] };
      return categoriesArray;
    };

    const normaliseCategoriesList = newArray();
    const colorisedArray = normaliseCategoriesList.map((elem, idx) => ({
      ...elem,
      ...colorize[idx],
    }));

    setSupperArray(colorisedArray);
  }, [categories, getByDate]);

  console.log('NEW ARRAY qwe', superArray);
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
    <StatisticsContainer>
      <GraphicsContainer>
        <Diagram getByDate={getByDate} colorisedArray={superArray} />
        <CategoriesContainer>
          <SelectCategories
            years={newAr}
            months={arrayOfMonths}
            objectDate={objectDate}
            handleClickMonth={handleClickMonth}
            handleClickYear={handleClickYear}
          />
          <CategoriesList
            categories={categories.expense}
            getByDate={getByDate}
            normaliseCategoriesList={superArray}
          />
        </CategoriesContainer>
      </GraphicsContainer>
    </StatisticsContainer>
  );
};
