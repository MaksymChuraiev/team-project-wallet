import { useState } from 'react';
import css from './Statistics.module.css';
import { UserData } from './testData';
// import { BarChart } from './BarChart';
import SelectedInput from './SelectInput';
// import { MyVersion } from './InputSelect/MyVersion';
// import { MyVersionYears } from './InputSelect/MyVersionYears';
import { useEffect } from 'react';
import { Diagram } from './Diagram/Diagram';
import { SelectCategories } from './SelectCategories/SelectCategoies';
import { CategoriesList } from './CategoriesList/CetegoriesList';
import { StatisticsText } from './Diagram/Diagram.styled';

import {
  StatisticsContainer,
  GraphicsContainer,
  CategoriesContainer,
} from './Statistics.styled';

const months = [
  { name: 'January', type: 'january' },
  { name: 'February', type: 'February' },
  { name: 'March', type: 'march' },
  { name: 'April', type: 'april' },
  { name: 'May', type: 'may' },
  { name: 'June', type: 'june' },
  { name: 'July', type: 'july' },
  { name: 'August', type: 'august' },
  { name: 'September', type: 'september' },
  { name: 'October', type: 'october' },
  { name: 'November', type: 'november' },
  { name: 'December', type: 'december' },
];
const years = [
  { name: 2016, type: 2016 },
  { name: 2017, type: 2017 },
  { name: 2018, type: 2018 },
  { name: 2019, type: 2019 },
  { name: 2020, type: 2020 },
  { name: 2021, type: 2021 },
  { name: 2022, type: 2022 },
];
export const Statistics = () => {
  return (
    <StatisticsContainer>
      {/* <StatisticsText>Statistics</StatisticsText> */}
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
