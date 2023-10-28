import React from 'react';
import PieChart from './PieChart'; // Import the PieChart component
import LineChart from'./LineChart';

const ResultsPage = ({ title, pieData, pieLabels, lineData, lineLabels }) => {
  return (
    <div>
        <h2>{title}</h2>
        <PieChart data={pieData} labels={pieLabels} />
        <LineChart data={lineData} labels={lineLabels} />
    </div>
  );
}

export default ResultsPage;
