import React from 'react';
import { Doughnut } from 'react-chartjs-2';
// import { Chart as ChartJS } from 'chart.js/auto';

export const BarChart = ({ chartData }) => {
  return (
    <Doughnut
      data={chartData}
      options={{
        plugins: { tooltip: {} },
      }}
    />
  );
};
