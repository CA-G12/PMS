import React from 'react';
import { CChart } from '@coreui/react-chartjs';

type props = {
  expired: Array<number>;
  inStock: Array<number>;
};

const ChartComponent: React.FC<props> = ({ inStock, expired }) => (
  <CChart
    type="line"
    data={{
      labels: [
        'Product A',
        'Product B',
        'Product C',
        'Product D',
        'Product E',
        'Product F',
        'Product J',
      ],
      datasets: [
        {
          label: 'In Stock Quantity',
          backgroundColor: '#58ffeb',
          borderColor: '#58ffeb',
          pointBackgroundColor: 'rgba(220, 220, 220, 1)',
          pointBorderColor: '#58ffeb',
          data: inStock,
        },
        {
          label: 'Expired Quantity',
          backgroundColor: '#4d96be',
          borderColor: '#4d96be',
          pointBackgroundColor: 'rgba(151, 187, 205, 1)',
          pointBorderColor: '#4d96be',
          data: expired,
        },
      ],
    }}
  />
);

export default ChartComponent;
