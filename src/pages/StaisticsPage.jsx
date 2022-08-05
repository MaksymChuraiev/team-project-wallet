// import { useState } from 'react';

// import { UserData } from 'components/Statistics/testData';
// import { BarChart } from './BarChart';
// import { MyVersion } from './InputSelect/MyVersion';
// import { MyVersionYears } from './InputSelect/MyVersionYears';
// import { useEffect } from 'react';
import { Diagram } from 'components/Statistics/Diagram/Diagram';
import { SelectCategories } from 'components/Statistics/SelectCategories/SelectCategoies';
import { CategoriesList } from 'components/Statistics/CategoriesList/CetegoriesList';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import transactionSelectors from 'redux/transaction/transaction-selectors';
import transactionsOperation from 'redux/transaction/transaction-operation';

import {
  StatisticsContainer,
  GraphicsContainer,
  CategoriesContainer,
} from './Statistics.styled';

const months = [
  { name: 'January', type: 'january', id: '0' },
  { name: 'February', type: 'February', id: '1' },
  { name: 'March', type: 'march', id: '2' },
  { name: 'April', type: 'april', id: '3' },
  { name: 'May', type: 'may', id: '4' },
  { name: 'June', type: 'june', id: '5' },
  { name: 'July', type: 'july', id: '6' },
  { name: 'August', type: 'august', id: '7' },
  { name: 'September', type: 'september', id: '8' },
  { name: 'October', type: 'october', id: '9' },
  { name: 'November', type: 'november', id: '10' },
  { name: 'December', type: 'december', id: '11' },
];
// const years = [
//   { name: 2016, type: 2016 },
//   { name: 2017, type: 2017 },
//   { name: 2018, type: 2018 },
//   { name: 2019, type: 2019 },
//   { name: 2020, type: 2020 },
//   { name: 2021, type: 2021 },
//   { name: 2022, type: 2022 },
// ];

// console.log(months, years);
export const StatisticsPage = () => {
  // const [selectYear, setSelectYear] = useState();
  // const [selectMonth, setSelectMonth] = useState();
  // console.log(state, setState
  const dispatch = useDispatch();
  const categories = useSelector(transactionSelectors.getCategories);
  const allTransaction = useSelector(transactionSelectors.getTransaction);
  const getByDate = useSelector(transactionSelectors.getStatistics);

  const [objectDate, setObjectDate] = useState({ months: '', year: '' });

  useEffect(() => {
    dispatch(transactionsOperation.getAllTransactions());
  }, [dispatch]);

  useEffect(() => {
    dispatch(transactionsOperation.getCategory());
  }, [dispatch]);

  useEffect(() => {
    dispatch(transactionsOperation.getByDate());
    dispatch(transactionsOperation.getByDate({ months: '', year: '' }));
    // dispatch(transactionsOperation.getByDate({ months: '1', year: '2022' }));
  }, [dispatch]);

  const handleClickMonth = e => {
    console.dir(e.currentTarget);
    setObjectDate({
      ...objectDate,
      months: Number(e.currentTarget.id),
    });
  };
  const handleClickYear = e => {
    // console.log(e.target);
    console.dir(e.currentTarget);
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
  // віборка по годам что бі не повторялся год
  const normalizeYearsArray = () => {
    for (let i = 0; i < arrayOfYears.length; i += 1) {
      if (!newAr.includes(arrayOfYears[i])) {
        newAr.push(arrayOfYears[i]);
      }
    }
  };
  normalizeYearsArray();
  // -------------------------------------------------

  //---------------------------------------------------
  //массив месяцев с [{айди нейм тайп}]
  const arrayOfMonths = months;
  //------------------------------------------------

  // const newset = new Set(...arrayOfYears);
  // const newDate = new Date('2023-01-03T23:00:00.000Z');

  // console.log('categories,', categories);
  console.log('objectDate,', objectDate);
  console.log('allTransaction', allTransaction);
  console.log('getByDate ', getByDate);
  // console.log('Date ', newDate.getFullYear());
  console.log('arrayOfYear ', arrayOfYears);
  console.log('newAr ', newAr);
  // console.log('newset ', newset);
  // console.log('arrayOfMonths ', arrayOfMonths);
  // // console.log('statistics');

  return (
    <StatisticsContainer>
      <GraphicsContainer>
        <Diagram objectDate={getByDate} />
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
          />
        </CategoriesContainer>
      </GraphicsContainer>
    </StatisticsContainer>
  );
};
