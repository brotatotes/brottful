import React, { useState } from 'react';

function TimeToggle({ onTimeChange }) {
  const [selectedTime, setSelectedTime] = useState('month');

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
    onTimeChange(newTime); // Notify the parent component of the selected time
  };

  return (
    <div style={{textAlign: 'center'}}>
      <button
        className={selectedTime === 'month' ? 'active' : ''}
        onClick={() => handleTimeChange('month')}
      >
        Month
      </button>
      <button
        className={selectedTime === 'week' ? 'active' : ''}
        onClick={() => handleTimeChange('week')}
      >
        Week
      </button>
    </div>
  );
}

export default TimeToggle;
