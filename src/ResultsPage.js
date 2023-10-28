import React, { useState } from 'react';
import TimeToggle from './TimeToggle';
import PieChart from './PieChart';
import LineChart from './LineChart';

function ResultsPage() {
  const [selectedTime, setSelectedTime] = useState('month');

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
    // Update your charts here based on the selected time (month/week)
  };

  const feels_month = {
    data: [11, 10, 10],
    labels: ['bad', 'meh', 'good']
  };

  const energy_month = {
    labels: ['1/1/23', '1/7/23', '1/14/23', '1/21/23', '1/28/23'],
    data: [0, 2, 1, 0, 1],
  };

  const feels_week = {
    data: [11, 10, 10],
    labels: ['bad', 'meh', 'good']
  };

  const energy_week = {
    labels: ['Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat', 'Sun'],
    data: [0, 2, 1, 1, 0, 1, 2],
  };

  return (
    <div>
      <TimeToggle onTimeChange={handleTimeChange} />
      {selectedTime === 'month' ? (
        <div>
            <h2>October 2023</h2>
            <PieChart data={feels_month.data} labels={feels_month.labels} />
            <br/>
            <LineChart data={energy_month.data} labels={energy_month.labels} />
        </div>
      ) : (
        <div>
            <h2>Week of Oct 22 - 28, 2023</h2>
            <PieChart data={feels_week.data} labels={feels_week.labels} />
            <br/>
            <LineChart data={energy_week.data} labels={energy_week.labels} />
        </div>
      )}
    </div>
  );
}

export default ResultsPage;
