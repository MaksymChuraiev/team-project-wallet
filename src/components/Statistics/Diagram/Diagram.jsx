import colorize from '../colorise';
import { useEffect, useState } from 'react';
import { BarChart } from './BarChart';

import {
  DiagramContainer,
  StatisticsText,
  CircleContainer,
} from './Diagram.styled';

export const Diagram = ({ objectDate }) => {
  const { expense } = objectDate;
  console.log('objectDate', objectDate);
  const summ = objectDate.expense && expense.map(data => data.sum);

  const colors = colorize.map(data => data.color);
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
  }, [objectDate]);

  return (
    <DiagramContainer>
      <StatisticsText>Statistics</StatisticsText>
      <CircleContainer>
        <BarChart chartData={userData} />
      </CircleContainer>
    </DiagramContainer>
  );
};
