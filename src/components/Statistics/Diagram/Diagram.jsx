import { UserData } from '../testData';
import { useState } from 'react';
import { BarChart } from './BarChart';

import {
  DiagramContainer,
  StatisticsText,
  CircleContainer,
} from './Diagram.styled';

export const Diagram = () => {
  const type = UserData.map(data => data.type);
  const summ = UserData.map(data => data.summ);
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
  console.log(type, setUSerData);
  return (
    <DiagramContainer>
      <StatisticsText>Statistics</StatisticsText>
      <CircleContainer>
        <BarChart chartData={userData} />
      </CircleContainer>
    </DiagramContainer>
  );
};
