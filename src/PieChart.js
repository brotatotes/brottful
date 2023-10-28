import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ data, labels }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // Reference to the Chart.js instance

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy(); // Destroy the existing chart
    }

    const ctx = chartRef.current.getContext('2d');

    chartInstanceRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: ['red', 'blue', 'green'], // Example colors
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || '';
                const value = context.parsed || 0;
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage = ((value / total) * 100).toFixed(2) + '%';
                return ` ${label}: ${value} (${percentage})`;
              },
            },
          },
        },
      },
    });

    // Return a cleanup function to destroy the chart when the component unmounts
    return () => {
      chartInstanceRef.current.destroy();
    };
  }, [data, labels]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default PieChart;
