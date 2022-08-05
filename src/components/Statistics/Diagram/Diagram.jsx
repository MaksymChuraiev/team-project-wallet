import colorize from '../colorise';
import { useEffect, useState } from 'react';
import { BarChart } from './BarChart';

import {
  DiagramContainer,
  StatisticsText,
  CircleContainer,
} from './Diagram.styled';

export const Diagram = ({ objectDate }) => {
  console.log('diagram');
  console.log('OBJECTDATE', objectDate);
  const { income } = objectDate;
  // const type = UserData.map(data => data.type);
  // const summ = UserData.map(data => data.sum);
  const summ = objectDate.income && income.map(data => data.sum);

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
  }, [objectDate]);

  console.log('objectDate DIAGRAM', objectDate);
  // console.log(type, setUSerData);
  return (
    <DiagramContainer>
      <StatisticsText>Statistics</StatisticsText>
      <CircleContainer>
        <BarChart chartData={userData} />
      </CircleContainer>
    </DiagramContainer>
  );
};
