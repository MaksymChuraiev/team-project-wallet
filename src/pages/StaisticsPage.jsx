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

// const months = [
//   { name: 'January', type: 'january' },
//   { name: 'February', type: 'February' },
//   { name: 'March', type: 'march' },
//   { name: 'April', type: 'april' },
//   { name: 'May', type: 'may' },
//   { name: 'June', type: 'june' },
//   { name: 'July', type: 'july' },
//   { name: 'August', type: 'august' },
//   { name: 'September', type: 'september' },
//   { name: 'October', type: 'october' },
//   { name: 'November', type: 'november' },
//   { name: 'December', type: 'december' },
// ];
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
  const [state, setState] = useState();
  console.log(state, setState);
  const dispatch = useDispatch();
  const categories = useSelector(transactionSelectors.getCategories);
  const allTransaction = useSelector(transactionSelectors.getTransaction);
  const getByDate = useSelector(transactionSelectors.getStatistics);

  useEffect(() => {
    dispatch(transactionsOperation.getAllTransactions());
  }, [dispatch]);
  useEffect(() => {
    dispatch(transactionsOperation.getByDate({ months: '4', year: '2022' }));
    // dispatch(transactionsOperation.getByDate({ months: '1', year: '2022' }));
  }, [dispatch]);

  console.log(categories);
  console.log('allTransaction', allTransaction);
  console.log('bytDate ', getByDate);
  // console.log('statistics');
  return (
    <StatisticsContainer>
      <GraphicsContainer>
        <Diagram />
        <CategoriesContainer>
          <SelectCategories />
          <CategoriesList />
        </CategoriesContainer>
      </GraphicsContainer>
    </StatisticsContainer>
  );
};
