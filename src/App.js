import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import { Typography, Tabs, Card, Button, Radio } from 'antd';

const { Title } = Typography;
const { TabPane } = Tabs;

function App() {
  const [activeTab, setActiveTab] = useState('survey');

  const tabItems = [
    { key: 'survey', tab: 'Survey' },
    { key: 'results', tab: 'Results' },
  ];

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <Title style={{ textAlign: 'center', fontFamily: 'Montserrat Light', fontWeight: 'lighter', marginBottom: '20px' }}>brottful</Title>
      <Tabs activeKey={activeTab} onChange={handleTabChange}>
        <TabPane tab="Survey" key="survey">
          <div className="content" style={{ padding: '0px', background: '#fff' }}>
            <SurveyContent />
          </div>
        </TabPane>
        <TabPane tab="Results" key="results">
          <div className="content" style={{ padding: '20px', background: '#fff' }}>
            Results content goes here.
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}

function SurveyContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSurveySubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="content" style={{textAlign: 'center', padding: '20px', background: '#fff', fontFamily: 'Montserrat Light' }}>
      

      {isSubmitted ? (
        <p>Submitted!</p>
      ) : (
        <div>
          <SurveyQuestion
            question="I feel..."
            options={['bad', 'meh', 'good']}
          />
          <SurveyQuestion
            question="Hours I slept last night..."
            options={['< 6', '6-8', '8+']}
          />
          <SurveyQuestion
            question="I'm feeling motivated."
            options={['no', 'meh', 'yes']}
          />
          <SurveyQuestion
            question="Meals I ate today..."
            options={['0-1', '2-3', '3+']}
          />
          <SurveyQuestion
            question="My energy level is..."
            options={['low', 'med', 'high']}
          />
          <SurveyQuestion
            question="My stress level is..."
            options={['low', 'med', 'high']}
          />
          <Button type="primary" onClick={handleSurveySubmit}>
            Submit
          </Button>
        </div>
      )}
    </div>
  );
}

function SurveyQuestion({ question, options }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  return (
    <Card title={question} style={{ marginBottom: '20px', textAlign: 'center'}}>
      <Radio.Group onChange={handleAnswerChange} value={selectedAnswer}>
        {options.map((option, index) => (
          <Radio.Button key={index} value={option}>
            {option}
          </Radio.Button>
        ))}
      </Radio.Group>
    </Card>
  );
}

export default App;
