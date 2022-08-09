import { useEffect, useState } from 'react';
import { BarChart } from './BarChart';

import {
  DiagramContainer,
  StatisticsText,
  CircleContainer,
} from './Diagram.styled';
import { Expenses } from './Expenses';

export const Diagram = ({ getByDate, colorisedArray }) => {
  // console.log('getByDate', getByDate);
  const summ = colorisedArray && colorisedArray.map(data => data.sum);

  const colors = colorisedArray.map(data => data.color);
  useEffect(() => {
    setUSerData({
      // labels: type,
      datasets: [
        {
          label: 'Users Gained',
          data: summ,
          backgroundColor: colors,
          hoverOffset: 4,
          borderWidth: 0,
          cutout: 100,
          offset: 0,
        },
      ],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorisedArray]);
  const [userData, setUSerData] = useState({
    // labels: type,
    datasets: [
      {
        label: 'Users Gained',
        data: summ,
        backgroundColor: colors,
        hoverOffset: 4,
        borderWidth: 0,
        cutout: 100,
        offset: 0,
      },
    ],
  });
  useEffect(() => {
    setUSerData({
      // labels: type,
      datasets: [
        {
          label: 'Users Gained',
          data: summ,
          backgroundColor: colors,
          hoverOffset: 4,
          borderWidth: 0,
          cutout: 100,
          offset: 0,
        },
      ],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getByDate]);

  return (
    <DiagramContainer>
      <StatisticsText>Statistics</StatisticsText>
      <CircleContainer>
        <BarChart chartData={userData} />
        <Expenses getByDate={getByDate} />
      </CircleContainer>
    </DiagramContainer>
  );
};
