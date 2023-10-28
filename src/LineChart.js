import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data, labels }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'energy level',
            data: data,
            borderColor: '#84A59D',
            fill: '#F7EDE2', // Set to false to remove fill under the line
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
          yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                    callback: function (value) {
                        // You can format the Y-axis labels as desired here
                        if (value === 0) return 'low'; // Replace 0 with your custom label
                        if (value === 1) return 'med'; // Replace 50 with your custom label
                        if (value === 2) return 'high'; // Replace 100 with your custom label
                        return value;
                    },
                }
            }
          ]
        },
      },
    });

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

export default LineChart;
