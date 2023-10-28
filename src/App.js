import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import { Typography, Tabs } from 'antd';

const { Title } = Typography;
const { TabPane } = Tabs;

function App() {
  const [activeTab, setActiveTab] = useState('survey');

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <Title style={{ textAlign: 'center', fontFamily: 'Montserrat', marginBottom: '20px' }}>brottful</Title>
      <Tabs activeKey={activeTab} onChange={handleTabChange}>
        <TabPane tab="Survey" key="survey">
          <div className="content" style={{ padding: '20px', background: '#fff' }}>
            Survey content goes here.
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

export default App;






