import { Diagram } from 'components/Statistics/Diagram/Diagram';
import { SelectCategories } from 'components/Statistics/SelectCategories/SelectCategoies';
import { CategoriesList } from 'components/Statistics/CategoriesList/CetegoriesList';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import transactionSelectors from 'redux/transaction/transaction-selectors';
import transactionsOperation from 'redux/transaction/transaction-operation';

import months from '../components/Statistics/months';

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
            // newArray={newArray}
          />
        </CategoriesContainer>
      </GraphicsContainer>
    </StatisticsContainer>
  );
};
