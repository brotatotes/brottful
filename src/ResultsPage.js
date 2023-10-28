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

  const feels_week = {
    data: [1, 3, 3],
    labels: ['bad', 'meh', 'good']
  };

  const sleep_month = {
    data: [18, 9, 4],
    labels: ['< 6 hours', '6-8 hours', '8+ hours']
  }

  const sleep_week = {
    data: [5, 1, 1],
    labels: ['< 6 hours', '6-8 hours', '8+ hours']
  }

  const motivation_month = {
    data: [8, 17, 6],
    labels: ['no', 'meh', 'yes']
  }

  const motivation_week = {
    data: [1, 6, 0],
    labels: ['no', 'meh', 'yes']
  }

  const eating_month = {
    data: [5, 25, 1],
    labels: ['< 2 meals', '2-3 meals', '3+ meals']
  }

  const eating_week = {
    data: [1, 6, 0],
    labels: ['< 2 meals', '2-3 meals', '3+ meals']
  }

  const energy_month = {
    labels: ['1/1/23', '1/7/23', '1/14/23', '1/21/23', '1/28/23'],
    data: [0, 2, 1, 0, 1],
  };

  const energy_week = {
    labels: ['Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat', 'Sun'],
    data: [0, 2, 1, 1, 0, 1, 2],
  };

  const stress_month = {
    labels: ['1/1/23', '1/7/23', '1/14/23', '1/21/23', '1/28/23'],
    data: [1, 2, 1, 0, 0],
  };

  const stress_week = {
    labels: ['Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat', 'Sun'],
    data: [0, 2, 1, 1, 0, 1, 2],
  };

  const encouragements = [
    "Embrace a good night's sleep as a beautiful gift you give yourself, nurturing your mental well-being.",

    "Remember to savor the simple joy of sipping water, an act of self-care that rejuvenates your mind and spirit.",

    "Let your inner fire ignite your motivation, and watch your journey to well-being unfold with excitement.",

    "Discover the pleasure of savoring wholesome meals, connecting with your body and nourishing your soul.",

    "Feel the rhythm of life within you, dance to your own tune, and watch your energy soar.",

    "Breathe deeply and mindfully, embracing each moment to find peace amidst life's ups and downs.",

    "Create a cocoon of tranquility around your sleep, where your dreams and peace intermingle.",

    "Cherish the moments that fill your heart with joy, creating a tapestry of well-being.",

    "Nourish your body with love and kindness, and watch it bloom with vitality.",

    "Savor each day, feeling stress melt away as you gracefully embrace the journey of well-being.",
  ]

  return (
    <div style={{textAlign: 'center'}}>
      <TimeToggle onTimeChange={handleTimeChange} />
      <br/>

      <div style={{fontStyle: 'italic'}}>"{encouragements[Math.floor(Math.random() * encouragements.length)]}"</div>
      {selectedTime === 'month' ? (
        <div>            
            <h2>October 2023</h2>
            <h3>How you felt</h3>
            <PieChart data={feels_month.data} labels={feels_month.labels} />
            <br/>
            <h3>How you slept</h3>
            <PieChart data={sleep_month.data} labels={sleep_month.labels} />
            <br/>
            <h3>How motivated you were</h3>
            <PieChart data={motivation_month.data} labels={motivation_month.labels} />
            <br/>
            <h3>How you ate</h3>
            <PieChart data={eating_month.data} labels={eating_month.labels} />
            <br/>
            <h3>How energized you were</h3>
            <LineChart data={energy_month.data} labels={energy_month.labels} />
            <br/>
            <h3>How stressed you were</h3>
            <LineChart data={stress_month.data} labels={stress_month.labels} />
        </div>
      ) : (
        <div>
            <h2>Week of Oct 22 - 28, 2023</h2>
            <h3>How you felt</h3>
            <PieChart data={feels_week.data} labels={feels_week.labels} />
            <br/>
            <h3>How you slept</h3>
            <PieChart data={sleep_week.data} labels={sleep_week.labels} />
            <br/>
            <h3>How motivated you were</h3>
            <PieChart data={motivation_week.data} labels={motivation_week.labels} />
            <br/>
            <h3>How you ate</h3>
            <PieChart data={eating_week.data} labels={eating_week.labels} />
            <br/>
            <h3>How energized you were</h3>
            <LineChart data={energy_week.data} labels={energy_week.labels} />
            <br/>
            <h3>How stressed you were</h3>
            <LineChart data={stress_week.data} labels={stress_week.labels} />
        </div>
      )}
    </div>
  );
}

export default ResultsPage;
