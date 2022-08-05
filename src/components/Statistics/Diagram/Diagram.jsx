import { UserData } from '../testData';
import { useEffect, useState } from 'react';
import { BarChart } from './BarChart';

import {
  DiagramContainer,
  StatisticsText,
  CircleContainer,
} from './Diagram.styled';


export const Diagram = ({ objectDate }) => {
  console.log('diagram');
  // const { income } = objectDate;
  // const type = UserData.map(data => data.type);
  // const summ = UserData.map(data => data.sum);
  const summ = objectDate.income.map(data => data.sum);

  const colors = UserData.map(data => data.color);
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
  }, [colors, objectDate, summ]);

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
