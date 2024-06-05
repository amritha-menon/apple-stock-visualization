import React from 'react';
import { Table, Card } from 'antd';
import './AnalystEstimates.css'; 

const columns = [
  {
    title: 'ANALYST',
    dataIndex: 'analyst',
    key: 'analyst',
  },
  {
    title: 'ESTIMATE',
    dataIndex: 'estimate',
    key: 'estimate',
  },
];

const AnalystEstimates = ({ estimates }) => {
  const data = Object.keys(estimates).map((key, index) => ({
    key: index,
    analyst: key,
    estimate: estimates[key],
  }));

  return (
    <Card title="Analyst Estimates" className="analyst-estimates-card">
      <Table columns={columns} dataSource={data} pagination={false} className="analyst-estimates-table" />
    </Card>
  );
};

export default AnalystEstimates;
